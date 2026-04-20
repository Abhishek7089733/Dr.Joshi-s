import { useId } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import type { Lang } from "@/lib/i18n";

const OPTIONS: { value: Lang; label: string }[] = [
  { value: "en", label: "English" },
  { value: "hi", label: "हिंदी" },
  { value: "mr", label: "मराठी" },
];

type Props = {
  className?: string;
  /** Smaller padding/font for tight navbar placement */
  compact?: boolean;
  /** Top bar: light text on primary background */
  variant?: "default" | "onPrimary";
};

export default function LanguageSwitcher({ className, compact, variant = "default" }: Props) {
  const { i18n, t } = useTranslation();
  const id = useId();
  const current = (i18n.resolvedLanguage ?? i18n.language).startsWith("hi")
    ? "hi"
    : (i18n.resolvedLanguage ?? i18n.language).startsWith("mr")
      ? "mr"
      : "en";

  const onPrimary = variant === "onPrimary";

  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <label htmlFor={id} className="sr-only">
        {t("a11y.language")}
      </label>
      <select
        id={id}
        value={current}
        onChange={(e) => void i18n.changeLanguage(e.target.value as Lang)}
        className={cn(
          "cursor-pointer appearance-none rounded-lg border font-medium outline-none transition",
          "focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
          onPrimary
            ? "border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground focus-visible:ring-offset-primary"
            : "border-border bg-background/95 text-foreground shadow-sm focus-visible:ring-offset-background",
          compact ? "py-1 pl-2 pr-7 text-xs" : "py-1.5 pl-3 pr-9 text-xs sm:text-sm",
        )}
        aria-label={t("a11y.language")}
      >
        {OPTIONS.map(({ value, label }) => (
          <option key={value} value={value} className={onPrimary ? "bg-primary text-primary-foreground" : "bg-background text-foreground"}>
            {label}
          </option>
        ))}
      </select>
      <span
        className={cn(
          "pointer-events-none absolute top-1/2 -translate-y-1/2 text-[10px] opacity-80",
          onPrimary ? "right-2 text-primary-foreground" : "right-2.5 text-muted-foreground",
          compact && "right-1.5",
        )}
        aria-hidden
      >
        ▾
      </span>
    </div>
  );
}
