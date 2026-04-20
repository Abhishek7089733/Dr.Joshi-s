import type { TFunction } from "i18next";
import type { ContentPage } from "@/data/services";

/** Title for cards and listings (Hindi from data when available). */
export function localizedTitle(
  page: Pick<ContentPage, "slug" | "title" | "titleHi">,
  lng: string,
  t: TFunction,
): string {
  if (lng.startsWith("hi") && page.titleHi) return page.titleHi;
  return t(`content.${page.slug}.title`, { defaultValue: page.title }) as string;
}

/** Intro snippet for cards and listings. */
export function localizedIntro(
  page: Pick<ContentPage, "slug" | "intro" | "introHi">,
  lng: string,
  t: TFunction,
): string {
  if (lng.startsWith("hi") && page.introHi) return page.introHi;
  return t(`content.${page.slug}.intro`, { defaultValue: page.intro }) as string;
}

export type LocalizedContentPage = {
  title: string;
  intro: string;
  causes: string[];
  symptoms: string[];
  method: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
};

function readStringArray(t: TFunction, key: string, fallback: string[]): string[] {
  const v = t(key, { returnObjects: true });
  if (Array.isArray(v) && v.length > 0 && typeof v[0] === "string") return v as string[];
  return fallback;
}

function readFaqs(t: TFunction, key: string, fallback: { q: string; a: string }[]): { q: string; a: string }[] {
  const v = t(key, { returnObjects: true });
  if (
    Array.isArray(v) &&
    v.length > 0 &&
    typeof v[0] === "object" &&
    v[0] !== null &&
    "q" in v[0] &&
    "a" in v[0]
  ) {
    return v as { q: string; a: string }[];
  }
  return fallback;
}

/** Localises a service/treatment detail page using data + optional i18n overrides per slug. */
export function localizeContentPage(page: ContentPage, lng: string, t: TFunction): LocalizedContentPage {
  const base = `content.${page.slug}`;
  const hi = lng.startsWith("hi");

  const title = hi && page.titleHi ? page.titleHi : (t(`${base}.title`, { defaultValue: page.title }) as string);

  const intro = hi && page.introHi ? page.introHi : (t(`${base}.intro`, { defaultValue: page.intro }) as string);

  return {
    title,
    intro,
    causes: readStringArray(t, `${base}.causes`, page.causes),
    symptoms: readStringArray(t, `${base}.symptoms`, page.symptoms),
    method: readStringArray(t, `${base}.method`, page.method),
    benefits: readStringArray(t, `${base}.benefits`, page.benefits),
    faqs: readFaqs(t, `${base}.faqs`, page.faqs),
  };
}
