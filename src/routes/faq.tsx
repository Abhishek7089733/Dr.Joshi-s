import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/site/PageHero";
import CTASection from "@/components/site/CTASection";
import AccordionList from "@/components/site/AccordionList";
import { faqs, faqCategories } from "@/data/faqs";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Dr. Joshi's Holistic Clinic" },
      { name: "description", content: "Answers to common questions about Ayurvedic treatment, Panchakarma, kidney and cancer care, payments, franchise opportunities and more." },
      { property: "og:title", content: "Frequently Asked Questions" },
      { property: "og:description", content: "Common questions answered about our Ayurvedic treatments and clinic." },
    ],
  }),
  component: FAQPage,
});

function faqCategoryKey(category: string) {
  return category.replace(/\s+/g, "");
}

function FAQPage() {
  const { t } = useTranslation();
  const [category, setCategory] = useState<string | "all">("all");
  const filtered = category === "all" ? faqs : faqs.filter((f) => f.category === category);

  const items = filtered.map((f) => {
    const idx = faqs.indexOf(f);
    return {
      q: t(`faq.i${idx}.q`, { defaultValue: f.q }),
      a: t(`faq.i${idx}.a`, { defaultValue: f.a }),
    };
  });

  return (
    <>
      <PageHero
        kicker={t("pageHero.kickerFaq")}
        title={
          <>
            {t("faq.heroPart1")}{" "}
            <span className="italic text-secondary">{t("faq.heroPart2")}</span>
          </>
        }
        subtitle={t("faq.heroSub")}
      />
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition",
                category === "all" ? "bg-primary text-primary-foreground" : "bg-card border text-foreground/70 hover:border-primary",
              )}
            >
              {t("faq.filterAll")}
            </button>
            {faqCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition",
                  category === c ? "bg-primary text-primary-foreground" : "bg-card border text-foreground/70 hover:border-primary",
                )}
              >
                {t(`faqCat.${faqCategoryKey(c)}`, { defaultValue: c })}
              </button>
            ))}
          </div>
          <AccordionList items={items} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
