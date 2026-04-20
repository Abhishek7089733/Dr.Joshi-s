import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en/translation.json";
import hiBase from "@/locales/hi/translation.json";
import hiFaqMessages from "@/locales/hi/faq-messages.json";
import mrBase from "@/locales/mr/translation.json";
import mrFaqMessages from "@/locales/mr/faq-messages.json";
import mrContent from "@/locales/mr/content-messages.json";

const STORAGE_KEY = "i18nextLng";
const LEGACY_LANG_KEY = "lang";

function migrateLegacyLanguage() {
  if (typeof window === "undefined") return;
  try {
    if (window.localStorage.getItem(STORAGE_KEY)) return;
    const legacy = window.localStorage.getItem(LEGACY_LANG_KEY);
    if (legacy === "en" || legacy === "hi" || legacy === "mr") {
      window.localStorage.setItem(STORAGE_KEY, legacy);
    }
  } catch {
    /* ignore */
  }
}

migrateLegacyLanguage();

const hi = {
  ...hiBase,
  faq: {
    ...hiBase.faq,
    ...hiFaqMessages,
  },
};

const mr = {
  ...mrBase,
  faq: {
    ...mrBase.faq,
    ...mrFaqMessages,
  },
  content: mrContent,
};

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      mr: { translation: mr },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "hi", "mr"],
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: STORAGE_KEY,
    },
    react: { useSuspense: false },
  });

export default i18n;
