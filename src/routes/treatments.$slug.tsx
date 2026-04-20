import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/site/PageHero";
import CTASection from "@/components/site/CTASection";
import AccordionList from "@/components/site/AccordionList";
import { Button } from "@/components/ui/button";
import { findContent } from "@/data/services";
import { useI18n } from "@/lib/i18n";
import { localizeContentPage } from "@/lib/localizeContentPage";
import { CheckCircle2, AlertCircle, Sparkles, Heart, Phone } from "lucide-react";

export const Route = createFileRoute("/treatments/$slug")({
  loader: ({ params }) => {
    const page = findContent(params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.page.title} | Dr. Joshi's Clinic` },
      { name: "description", content: loaderData?.page.metaDescription ?? "" },
      { property: "og:title", content: loaderData?.page.title ?? "" },
      { property: "og:description", content: loaderData?.page.metaDescription ?? "" },
    ],
  }),
  notFoundComponent: TreatmentNotFound,
  component: TreatmentDetail,
});

function TreatmentNotFound() {
  const { t } = useTranslation();
  return (
    <div className="container py-32 text-center">
      <h1 className="font-display text-4xl text-primary">{t("notFound.treatment")}</h1>
      <Link to="/treatments" className="text-secondary underline mt-4 inline-block">{t("notFound.treatmentBack")}</Link>
    </div>
  );
}

function TreatmentDetail() {
  const { page } = Route.useLoaderData();
  const { t, lang } = useI18n();
  const loc = localizeContentPage(page, lang, t);

  return (
    <>
      <PageHero kicker={t("pageHero.kickerTreatment")} title={loc.title} />
      <section className="py-16">
        <div className="container max-w-4xl space-y-14">
          <p className="text-lg leading-relaxed text-foreground/85">{loc.intro}</p>

          <Block icon={<AlertCircle className="h-5 w-5" />} title={t("section.causes")} items={loc.causes} accent />
          <Block icon={<Sparkles className="h-5 w-5" />} title={t("section.symptoms")} items={loc.symptoms} />
          <Block icon={<Heart className="h-5 w-5" />} title={t("section.method")} items={loc.method} accent />
          <Block icon={<CheckCircle2 className="h-5 w-5" />} title={t("section.benefits")} items={loc.benefits} />

          <div>
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">{t("section.faqs")}</h2>
            <AccordionList items={loc.faqs} />
          </div>

          <div className="rounded-2xl bg-hero-gradient text-primary-foreground p-8 md:p-10 text-center shadow-elegant">
            <h3 className="font-display text-2xl md:text-3xl">{t("section.cta")}</h3>
            <p className="mt-3 text-primary-foreground/85 max-w-xl mx-auto">{t("detail.treatmentCtaSub")}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/contact"><Button variant="gold" size="lg">{t("cta.book")}</Button></Link>
              <a href="tel:+919075390753"><Button variant="outlineLight" size="lg"><Phone className="h-4 w-4" /> {t("cta.call")}</Button></a>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

function Block({ icon, title, items, accent }: { icon: React.ReactNode; title: string; items: string[]; accent?: boolean }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <div className={`h-10 w-10 rounded-xl grid place-items-center ${accent ? "bg-gold-gradient text-primary" : "bg-primary text-primary-foreground"}`}>
          {icon}
        </div>
        <h2 className="font-display text-3xl md:text-4xl text-primary">{title}</h2>
      </div>
      <ul className="grid md:grid-cols-2 gap-3">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2 rounded-xl bg-card border p-4 text-sm text-foreground/85 shadow-card-soft">
            <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" /> {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
