import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

export type Lang = "en" | "hi" | "mr";

function resolveLang(code: string | undefined): Lang {
  if (!code) return "en";
  if (code.startsWith("hi")) return "hi";
  if (code.startsWith("mr")) return "mr";
  return "en";
}

export type I18nCompat = {
  t: TFunction;
  lang: Lang;
  setLang: (l: Lang) => void;
};

/** Backwards-compatible hook used across the app (replaces the previous context API). */
export function useI18n(): I18nCompat {
  const { t, i18n } = useTranslation();
  const lang = resolveLang(i18n.resolvedLanguage ?? i18n.language);
  return {
    t,
    lang,
    setLang: (l: Lang) => {
      void i18n.changeLanguage(l);
      try {
        if (typeof window !== "undefined") window.localStorage.setItem("lang", l);
      } catch {
        /* ignore */
      }
    },
  };
}

/** No-op wrapper — i18next is initialised from `@/i18n/config` import in the app root. */
export function I18nProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
