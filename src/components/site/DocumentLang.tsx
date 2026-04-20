import { useEffect } from "react";
import { useTranslation } from "react-i18next";

/** Keeps `<html lang>` in sync with the active i18n language for accessibility and SEO. */
export default function DocumentLang() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lng = i18n.resolvedLanguage ?? i18n.language;
    let code = "en";
    if (lng.startsWith("hi")) code = "hi";
    else if (lng.startsWith("mr")) code = "mr";
    document.documentElement.lang = code;
    document.documentElement.dir = "ltr";
  }, [i18n, i18n.language, i18n.resolvedLanguage]);

  return null;
}
