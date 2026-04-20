import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/site/PageHero";
import CTASection from "@/components/site/CTASection";
import { treatments } from "@/data/services";
import { ArrowRight } from "lucide-react";
import treatment16 from "@/assets/treatment-16.jpg";
import treatment17 from "@/assets/treatment-17.jpg";
import holisticImg from "@/assets/holistic.jpg";
import panchakarmaImg from "@/assets/panchakarma.jpg";
import whyChooseImg from "@/assets/why-choose.jpg";
import { useI18n } from "@/lib/i18n";
import { localizedIntro, localizedTitle } from "@/lib/localizeContentPage";

const treatmentImagePool = [treatment16, holisticImg, panchakarmaImg, treatment17, whyChooseImg];

export const Route = createFileRoute("/treatments/")({
  head: () => ({
    meta: [
      { title: "Ayurvedic Treatments in Mumbai — Kidney, Cancer, Diabetes & More" },
      { name: "description", content: "Specialised Ayurvedic treatment programs for kidney disease, cancer, diabetes, infertility, arthritis, hypertension and more in Mumbai." },
      { property: "og:title", content: "Ayurvedic Treatments in Mumbai" },
      { property: "og:description", content: "Specialised Ayurvedic protocols for chronic and complex conditions." },
    ],
  }),
  component: TreatmentsIndex,
});

function TreatmentsIndex() {
  const { t } = useTranslation();
  const { lang } = useI18n();

  return (
    <>
      <PageHero
        kicker={t("pageHero.kickerTreatments")}
        title={
          <>
            {t("treatmentsIndex.heroPart1")}{" "}
            <span className="italic text-secondary">{t("treatmentsIndex.heroAccent")}</span>
          </>
        }
        subtitle={t("treatmentsIndex.heroSub")}
      />
      <section className="py-20">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((s, i) => (
            <Link
              key={s.slug}
              to="/treatments/$slug"
              params={{ slug: s.slug }}
              className="group rounded-2xl border bg-card overflow-hidden shadow-card-soft hover:shadow-elegant hover:-translate-y-0.5 transition"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={treatmentImagePool[i % treatmentImagePool.length]}
                  alt={localizedTitle(s, lang, t)}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-primary leading-snug">{localizedTitle(s, lang, t)}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{localizedIntro(s, lang, t)}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-secondary group-hover:gap-2 transition-all">
                  {t("treatmentsIndex.learnMore")} <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
