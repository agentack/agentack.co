import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Specialism = {
  title: string;
  /** The operational reality of this sub-market. */
  reality: string;
  /** What we build for it. */
  build: string;
};

type SpecialismsSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: Specialism[];
  footnote?: string;
  /** Insider vocabulary that signals real industry fluency. */
  vocabulary?: string[];
  buildLabel: string;
  vocabularyLabel: string;
};

export function SpecialismsSection({
  eyebrow,
  title,
  description,
  items,
  footnote,
  vocabulary,
  buildLabel,
  vocabularyLabel,
}: SpecialismsSectionProps) {
  return (
    <Section
      className="border-t border-[var(--border)]"
      aria-labelledby="specialisms-heading"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              id="specialisms-heading"
              eyebrow={eyebrow}
              title={title}
              description={description}
              className="md:flex-col md:items-start"
            />
            {footnote ? (
              <p className="mt-6 max-w-[40ch] text-small text-[var(--muted)]">
                {footnote}
              </p>
            ) : null}
          </div>

          <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {items.map((item, index) => (
              <li
                key={item.title}
                className="border-t border-[var(--border)] pt-5"
              >
                <span className="text-caption font-semibold text-[var(--gold-text)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-h3 text-[var(--headline)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-small text-[var(--muted)]">
                  {item.reality}
                </p>
                <p className="mt-3 text-small text-[var(--ink)]">
                  <span className="font-semibold text-[var(--headline)]">
                    {buildLabel}{" "}
                  </span>
                  {item.build}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {vocabulary?.length ? (
          <div className="mt-14 flex flex-col gap-3 border-t border-[var(--border)] pt-6 md:flex-row md:items-baseline md:gap-6">
            <p className="eyebrow shrink-0">{vocabularyLabel}</p>
            <p className="text-small text-[var(--muted)]">
              {vocabulary.map((word, index) => (
                <span key={word}>
                  {word}
                  {index < vocabulary.length - 1 ? (
                    <span aria-hidden className="mx-2 text-[var(--gold)]">
                      ·
                    </span>
                  ) : null}
                </span>
              ))}
            </p>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
