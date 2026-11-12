import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Leak = {
  title: string;
  description: string;
};

type ProblemSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: Leak[];
  note?: string;
};

export function ProblemSection({
  eyebrow,
  title,
  description,
  points,
  note,
}: ProblemSectionProps) {
  return (
    <Section aria-labelledby="problem-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            id="problem-heading"
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="md:flex-col md:items-start"
          />

          <ul className="space-y-0">
            {points.map((point, index) => (
              <li
                key={point.title}
                className="grid gap-3 border-t border-[var(--border)] py-6 first:pt-0 last:pb-0 sm:grid-cols-[3rem_1fr] sm:gap-6"
              >
                <span className="font-display text-h3 leading-none text-[var(--gold)] tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-h3 text-[var(--headline)]">{point.title}</h3>
                  <p className="mt-2 text-small text-[var(--muted)]">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {note ? (
          <p className="mt-12 border-l-2 border-[var(--gold)] pl-4 text-small font-medium text-[var(--headline)]">
            {note}
          </p>
        ) : null}
      </Container>
    </Section>
  );
}
