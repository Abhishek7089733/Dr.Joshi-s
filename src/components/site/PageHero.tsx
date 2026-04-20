import type { ReactNode } from "react";

export default function PageHero({ title, subtitle, kicker }: { title: ReactNode; subtitle?: string; kicker?: string }) {
  return (
    <section className="relative bg-hero-gradient text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-25 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.78 0.14 75 / 0.5), transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.45 0.11 255 / 0.6), transparent 50%)" }} />
      <div className="container relative py-16 md:py-24 text-center animate-fade-up">
        {kicker && <p className="uppercase tracking-[0.3em] text-xs text-secondary font-semibold mb-4">{kicker}</p>}
        <h1 className="font-display text-4xl md:text-6xl text-balance leading-tight max-w-4xl mx-auto">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl mx-auto text-primary-foreground/85 text-base md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
