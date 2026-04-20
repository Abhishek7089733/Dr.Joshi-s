import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/site/PageHero";
import CTASection from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";
import { Building2, GraduationCap, HandCoins, Users, ShieldCheck, Sparkles } from "lucide-react";

const benefitIcons = [Building2, GraduationCap, HandCoins, Users, ShieldCheck, Sparkles];

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise Partner Opportunity | Dr. Joshi's Holistic Clinic" },
      { name: "description", content: "Become a franchise partner of Dr. Joshi's Holistic Clinic. Benefit from a trusted Ayurvedic brand, doctor training, in-house medicines and ongoing support." },
      { property: "og:title", content: "Franchise Partner Opportunity" },
      { property: "og:description", content: "Partner with a trusted Ayurvedic brand and grow with us." },
    ],
  }),
  component: FranchisePage,
});

function FranchisePage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const benefits = t("franchise.benefits", { returnObjects: true }) as { t: string; d: string }[];
  const lookItems = t("franchise.lookItems", { returnObjects: true }) as string[];

  return (
    <>
      <PageHero
        kicker={t("pageHero.kickerFranchise")}
        title={
          <>
            {t("franchise.heroTitleBefore")}{" "}
            <span className="italic text-secondary">{t("franchise.heroTitleAccent")}</span>{" "}
            {t("franchise.heroTitleAfter")}
          </>
        }
        subtitle={t("franchise.heroSub")}
      />

      <section className="py-16">
        <div className="container max-w-4xl space-y-6">
          <h2 className="font-display text-3xl md:text-4xl text-primary">{t("franchise.whyTitle")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("franchise.whyP")}</p>
        </div>
      </section>

      <section className="py-12 bg-leaf-gradient">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl text-primary text-center mb-12">{t("franchise.benefitsTitle")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => {
              const Icon = benefitIcons[i] ?? Building2;
              return (
                <div key={item.t} className="rounded-2xl bg-card border p-6 shadow-card-soft">
                  <div className="h-12 w-12 rounded-xl bg-gold-gradient grid place-items-center mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-primary">{item.t}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{item.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">{t("franchise.lookTitle")}</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {lookItems.map((r) => (
              <li key={r} className="flex items-start gap-2 rounded-xl bg-card border p-4 text-sm shadow-card-soft">
                <span className="h-2 w-2 rounded-full bg-secondary mt-2 shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-leaf-gradient">
        <div className="container max-w-2xl">
          <div className="rounded-2xl bg-card border p-8 shadow-card-soft">
            <h2 className="font-display text-3xl text-primary mb-2">{t("franchise.formTitle")}</h2>
            <p className="text-sm text-muted-foreground mb-6">{t("franchise.formSub")}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <input className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm" placeholder={t("franchise.phName")} required />
              <input className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm" placeholder={t("franchise.phPhone")} type="tel" required />
              <input className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm" placeholder={t("franchise.phEmail")} type="email" required />
              <input className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm" placeholder={t("franchise.phCity")} required />
              <textarea className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder={t("franchise.phBackground")} required />
              <Button type="submit" variant="hero" size="lg" className="w-full">{t("cta.submitEnquiry")}</Button>
              {sent && <p className="text-sm text-secondary text-center font-medium">{t("franchise.thankYou")}</p>}
            </form>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
