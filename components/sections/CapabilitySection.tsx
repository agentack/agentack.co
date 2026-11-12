import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ProofItem = {
  title: string;
  description: string;
};

type CapabilitySectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: ProofItem[];
  note?: string;
};

export function CapabilitySection({
  eyebrow,
  title,
  description,
  items,
  note,
}: CapabilitySectionProps) {
  return (
    <Section aria-labelledby="proof-heading">
      <Container>
        <SectionHeading
          id="proof-heading"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="grid gap-3 border-t border-[var(--border)] pt-6 sm:grid-cols-[3rem_1fr] sm:gap-5"
            >
              <span className="font-display text-h3 leading-none text-[var(--gold)] tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-h3 text-[var(--headline)]">{item.title}</h3>
                <p className="mt-2 text-small text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {note ? (
          <p className="mt-12 rounded-panel border border-[var(--border)] bg-[var(--surface)] p-6 text-small text-[var(--muted)]">
            {note}
          </p>
        ) : null}
      </Container>
    </Section>
  );
}
