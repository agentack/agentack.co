import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Cta = { label: string; href: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  /** Optional aside, e.g. a small facts list or a card. */
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  aside,
}: PageHeroProps) {
  return (
    <Section size="lg" className="border-b border-[var(--border)]">
      <Container>
        <div
          className={
            aside
              ? "grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
              : "max-w-[62ch]"
          }
        >
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-[20ch] text-h1 text-[var(--headline)]">
              {title}
            </h1>
            <p className="mt-6 max-w-[58ch] text-body text-[var(--muted)]">
              {description}
            </p>
            {primaryCta || secondaryCta ? (
              <div className="mt-9 flex flex-wrap gap-3">
                {primaryCta ? (
                  <Button href={primaryCta.href} size="lg">
                    {primaryCta.label}
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button href={secondaryCta.href} size="lg" variant="secondary">
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>
          {aside ? <div>{aside}</div> : null}
        </div>
      </Container>
    </Section>
  );
}
