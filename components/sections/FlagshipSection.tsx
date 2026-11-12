import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { Check } from "@/components/ui/icons";

type FlagshipSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  flow: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  disclaimer: string;
};

export function FlagshipSection({
  eyebrow,
  title,
  description,
  points,
  flow,
  primaryCta,
  secondaryCta,
  disclaimer,
}: FlagshipSectionProps) {
  return (
    <Section aria-labelledby="flagship-heading">
      <Container>
        <Card panel className="p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Eyebrow onPanel>{eyebrow}</Eyebrow>
              <h2
                id="flagship-heading"
                className="mt-4 text-h2 text-[var(--on-panel)]"
              >
                {title}
              </h2>
              <p className="mt-4 max-w-[54ch] text-body text-[var(--on-panel-muted)]">
                {description}
              </p>

              <ul className="mt-7 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex gap-3 text-small text-[var(--on-panel)]">
                    <Check className="mt-0.5 shrink-0 text-[var(--gold-on-green)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href={primaryCta.href}
                  variant="secondary"
                  className="border-[var(--on-panel)] text-[var(--on-panel)] hover:bg-white/10"
                >
                  {primaryCta.label}
                </Button>
                <Button
                  href={secondaryCta.href}
                  variant="ghost"
                  className="text-[var(--on-panel)] hover:text-[var(--gold-on-green)]"
                >
                  {secondaryCta.label}
                </Button>
              </div>
            </div>

            <div className="rounded-panel border border-white/15 bg-black/10 p-6">
              <p className="eyebrow text-[var(--gold-on-green)]">The flow</p>
              <FlowDiagram steps={flow} className="mt-4 flex-col items-stretch" />
            </div>
          </div>

          <p className="mt-10 border-t border-white/15 pt-5 text-caption text-[var(--on-panel-muted)]">
            {disclaimer}
          </p>
        </Card>
      </Container>
    </Section>
  );
}
