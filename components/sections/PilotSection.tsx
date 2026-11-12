import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Check } from "@/components/ui/icons";

type PilotSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  cta: { label: string; href: string };
  note: string;
};

export function PilotSection({
  eyebrow,
  title,
  description,
  points,
  cta,
  note,
}: PilotSectionProps) {
  return (
    <Section tone="band" aria-labelledby="pilot-heading">
      <Container>
        <div className="grid gap-10 rounded-panel border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 id="pilot-heading" className="mt-4 text-h2 text-[var(--headline)]">
              {title}
            </h2>
            <p className="mt-4 max-w-[52ch] text-body text-[var(--muted)]">{description}</p>
            <Button href={cta.href} size="lg" className="mt-8">
              {cta.label}
            </Button>
          </div>

          <ul className="space-y-4 self-center">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-small text-[var(--ink)]">
                <Check className="mt-0.5 shrink-0 text-[var(--gold)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-caption text-[var(--muted)]">{note}</p>
      </Container>
    </Section>
  );
}
