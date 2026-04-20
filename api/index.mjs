import worker from "../dist/server/index.js";

function toRequest(req) {
  const proto = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const url = `${proto}://${host}${req.url}`;

  // GET/HEAD must not include a body
  const method = req.method || "GET";
  const init = { method, headers: req.headers };
  if (method !== "GET" && method !== "HEAD") {
    init.body = req;
    init.duplex = "half";
  }

  return new Request(url, init);
}

async function sendResponse(res, response) {
  res.statusCode = response.status;

  for (const [key, value] of response.headers.entries()) {
    // Vercel/Node will manage these automatically or disallow them
    if (key.toLowerCase() === "transfer-encoding") continue;
    res.setHeader(key, value);
  }

  if (!response.body) {
    res.end();
    return;
  }

  const arrayBuffer = await response.arrayBuffer();
  res.end(Buffer.from(arrayBuffer));
}

export default async function handler(req, res) {
  const request = toRequest(req);
  const response = await worker.fetch(request, {}, {});
  await sendResponse(res, response);
}

