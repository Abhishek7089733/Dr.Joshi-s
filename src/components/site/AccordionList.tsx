import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AccordionList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y border rounded-2xl bg-card shadow-card-soft">
      {items.map((item, i) => (
        <div key={i} className="px-5">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="font-semibold text-primary text-base">{item.q}</span>
            <ChevronDown className={cn("h-5 w-5 text-primary shrink-0 transition-transform", open === i && "rotate-180")} />
          </button>
          {open === i && <p className="pb-5 pr-8 text-muted-foreground leading-relaxed">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}
