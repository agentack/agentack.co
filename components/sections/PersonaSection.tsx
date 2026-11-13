import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Check } from "@/components/ui/icons";

type Persona = {
  id: string;
  number: string;
  title: string;
  intro: string;
  pains: string[];
  outcomes: string[];
  fit: string;
};

type PersonaSectionProps = {
  items: Persona[];
  cta: { label: string; href: string };
  heading: string;
  painsLabel: string;
  outcomesLabel: string;
  secondaryLink: { label: string; href: string };
};

export function PersonaSection({
  items,
  cta,
  heading,
  painsLabel,
  outcomesLabel,
  secondaryLink,
}: PersonaSectionProps) {
  return (
    <Section aria-labelledby="personas-heading">
      <Container>
        <h2 id="personas-heading" className="sr-only">
          {heading}
        </h2>

        <div className="space-y-16 md:space-y-20">
          {items.map((persona) => (
            <article
              key={persona.id}
              id={persona.id}
              className="scroll-mt-24 border-t border-[var(--border)] pt-8"
            >
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                <div>
                  <span className="font-display text-[2.5rem] leading-none text-[var(--gold)] tabular-nums">
                    {persona.number}
                  </span>
                  <h3 className="mt-4 text-h2 text-[var(--headline)]">
                    {persona.title}
                  </h3>
                  <p className="mt-4 max-w-[38ch] text-body text-[var(--muted)]">
                    {persona.intro}
                  </p>
                  <p className="mt-6 text-caption font-medium uppercase tracking-[0.12em] text-[var(--gold-text)]">
                    {persona.fit}
                  </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow">{painsLabel}</p>
                    <ul className="mt-4 space-y-3">
                      {persona.pains.map((pain) => (
                        <li
                          key={pain}
                          className="border-t border-[var(--border)] pt-3 text-small text-[var(--muted)]"
                        >
                          {pain}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow">{outcomesLabel}</p>
                    <ul className="mt-4 space-y-3">
                      {persona.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex gap-2 border-t border-[var(--border)] pt-3 text-small text-[var(--ink)]"
                        >
                          <Check className="mt-0.5 shrink-0 text-[var(--gold)]" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <Button href={cta.href} size="lg">
            {cta.label}
          </Button>
          <Link
            href={secondaryLink.href}
            className="text-small font-semibold text-[var(--headline)] underline-offset-4 hover:underline"
          >
            {secondaryLink.label}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
