import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type Tier = {
  name: string;
  price: string;
  duration: string;
  description: string;
  includes: string[];
  note?: string;
};

type PricingTableProps = {
  eyebrow: string;
  title: string;
  description: string;
  tiers: Tier[];
  note?: string;
  cta?: { label: string; href: string };
};

export function PricingTable({
  eyebrow,
  title,
  description,
  tiers,
  note,
  cta,
}: PricingTableProps) {
  return (
    <Section aria-labelledby="pricing-heading">
      <Container>
        <SectionHeading
          id="pricing-heading"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="mt-12 space-y-4">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className="grid gap-6 rounded-card border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--headline)] md:grid-cols-[1.05fr_0.75fr_1.4fr] md:items-start md:p-8"
            >
              <div>
                <h3 className="text-h3 text-[var(--headline)]">{tier.name}</h3>
                <p className="mt-2 text-caption font-medium uppercase tracking-[0.12em] text-[var(--gold-text)]">
                  {tier.duration}
                </p>
              </div>

              <div>
                <p className="font-display text-h2 leading-none text-[var(--headline)] tabular-nums">
                  {tier.price}
                </p>
                {tier.note ? (
                  <p className="mt-2 text-caption text-[var(--muted)]">{tier.note}</p>
                ) : null}
              </div>

              <div>
                <p className="text-small text-[var(--muted)]">{tier.description}</p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-small text-[var(--ink)]"
                    >
                      <span aria-hidden className="size-1 rounded-pill bg-[var(--gold)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {note ? (
          <p className="mt-6 max-w-[80ch] text-caption text-[var(--muted)]">{note}</p>
        ) : null}

        {cta ? (
          <div className="mt-10">
            <Button href={cta.href} size="lg">
              {cta.label}
            </Button>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
