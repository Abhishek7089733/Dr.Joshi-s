import { Phone, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FloatingActions() {
  const { t } = useTranslation();
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919075390753"
        target="_blank"
        rel="noopener noreferrer"
        className="h-12 w-12 rounded-full bg-[oklch(0.65_0.15_150)] text-white grid place-items-center shadow-elegant hover:scale-105 transition"
        aria-label={t("a11y.whatsapp")}
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="tel:+919075390753"
        className="h-12 w-12 rounded-full bg-secondary text-secondary-foreground grid place-items-center shadow-elegant hover:scale-105 transition"
        aria-label={t("a11y.call")}
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
