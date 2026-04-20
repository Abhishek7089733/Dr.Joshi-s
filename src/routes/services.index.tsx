import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/site/PageHero";
import CTASection from "@/components/site/CTASection";
import { services } from "@/data/services";
import { ArrowRight, Leaf } from "lucide-react";
import panchakarmaImg from "@/assets/panchakarma.jpg";
import holisticImg from "@/assets/holistic.jpg";
import organicImg from "@/assets/treatment-17.jpg";
import { useI18n } from "@/lib/i18n";
import { localizedIntro, localizedTitle } from "@/lib/localizeContentPage";

const serviceImages: Record<string, string> = {
  "ayurvedic-panchakarma-treatment-in-mumbai": panchakarmaImg,
  "ayurvedic-holistic-treatment-in-mumbai": holisticImg,
  "ayurvedic-organic-medicine-in-mumbai": organicImg,
};

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Ayurvedic Services in Mumbai — Panchakarma, Holistic Care, Organic Medicine" },
      { name: "description", content: "Explore our Ayurvedic services in Mumbai — Panchakarma detox, holistic treatment programs and in-house organic medicine." },
      { property: "og:title", content: "Ayurvedic Services in Mumbai" },
      { property: "og:description", content: "Panchakarma, holistic Ayurvedic treatment and in-house organic medicines under expert supervision." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  const { t } = useTranslation();
  const { lang } = useI18n();

  return (
    <>
      <PageHero
        kicker={t("pageHero.kickerServices")}
        title={
          <>
            {t("servicesIndex.heroPart1")}{" "}
            <span className="italic text-secondary">{t("servicesIndex.heroAccent")}</span>
          </>
        }
        subtitle={t("servicesIndex.heroSub")}
      />
      <section className="py-20">
        <div className="container grid md:grid-cols-3 gap-7">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group rounded-2xl border bg-card overflow-hidden shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={serviceImages[s.slug]}
                  alt={localizedTitle(s, lang, t)}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7">
                <div className="h-14 w-14 rounded-xl bg-gold-gradient grid place-items-center mb-5">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-primary leading-snug">{localizedTitle(s, lang, t)}</h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-4">{localizedIntro(s, lang, t)}</p>
                <span className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-secondary group-hover:gap-2 transition-all">
                  {t("servicesIndex.learnMore")} <ArrowRight className="h-4 w-4" />
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
