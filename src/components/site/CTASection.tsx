import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function CTASection() {
  const { t } = useI18n();
  return (
    <section className="py-16 bg-leaf-gradient">
      <div className="container">
        <div className="rounded-3xl bg-hero-gradient text-primary-foreground p-10 md:p-14 text-center shadow-elegant">
          <h2 className="font-display text-3xl md:text-5xl text-balance">{t("section.cta")}</h2>
          <p className="mt-4 max-w-xl mx-auto text-primary-foreground/85">
            Speak with our doctors today. Personalised, judgement-free care for you and your family.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link to="/contact"><Button variant="gold" size="xl">{t("cta.book")}</Button></Link>
            <a href="tel:+919075390753"><Button variant="outlineLight" size="xl"><Phone className="h-4 w-4" /> {t("cta.call")}</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
}
