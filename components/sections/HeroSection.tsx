import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";

type HeroProps = {
  eyebrow: string;
  headline: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  card: { title: string; meta: string; status: string };
  conversation?: { inbound: string; outbound: string };
  note?: string;
};

export function HeroSection({
  eyebrow,
  headline,
  subtitle,
  primaryCta,
  secondaryCta,
  card,
  conversation = {
    inbound: "Is the 2-bed in Marina still available? Can I view this week?",
    outbound: "Yes — Thursday 5pm or Saturday 11am. Which suits you better?",
  },
  note = "Drafted in Arabic and English",
}: HeroProps) {
  return (
    <Section size="lg" className="border-b border-[var(--border)]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-5 max-w-[18ch] text-display text-[var(--headline)]">
              {headline}
            </h1>
            <p className="mt-6 max-w-[54ch] text-body text-[var(--muted)]">{subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={primaryCta.href} size="lg">
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href} size="lg" variant="secondary">
                {secondaryCta.label}
              </Button>
            </div>
            <p className="mt-6 text-caption text-[var(--muted)]">{note}</p>
          </div>

          <div className="rounded-panel border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-caption font-semibold uppercase tracking-[0.14em] text-[var(--gold-text)]">
                  {card.title}
                </p>
                <p className="mt-2 text-small font-medium text-[var(--headline)]">
                  {card.meta}
                </p>
              </div>
              <Badge tone="new">{card.status}</Badge>
            </div>

            <div className="mt-6 space-y-3">
              <div className="ml-auto w-fit max-w-[85%] rounded-card rounded-tr-sm bg-[var(--soft)] px-4 py-3 text-small text-[var(--ink)]">
                {conversation.inbound}
              </div>
              <div className="w-fit max-w-[85%] rounded-card rounded-tl-sm border border-[var(--border)] px-4 py-3 text-small text-[var(--ink)]">
                {conversation.outbound}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 border-t border-[var(--border)] pt-4 text-caption text-[var(--muted)]">
              <span aria-hidden className="size-1.5 rounded-pill bg-[var(--gold)]" />
              Budget, area and timeline captured
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
