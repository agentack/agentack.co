import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

type CTASectionProps = {
  eyebrow?: string;
  headline: string;
  cta: { label: string; href: string };
};

export function CTASection({ eyebrow, headline, cta }: CTASectionProps) {
  return (
    <Section tone="panel" size="md" aria-labelledby="cta-heading">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            {eyebrow ? <Eyebrow onPanel>{eyebrow}</Eyebrow> : null}
            <h2
              id="cta-heading"
              className="mt-3 max-w-[24ch] text-h2 text-[var(--on-panel)]"
            >
              {headline}
            </h2>
          </div>
          <Button
            href={cta.href}
            size="lg"
            variant="secondary"
            className="border-[var(--on-panel)] text-[var(--on-panel)] hover:bg-white/10"
          >
            {cta.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
