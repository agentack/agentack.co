import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type IntegrationStripProps = {
  title: string;
  description: string;
  tools: string[];
  note?: string;
};

export function IntegrationStrip({
  title,
  description,
  tools,
  note,
}: IntegrationStripProps) {
  return (
    <Section size="sm" aria-labelledby="integrations-heading">
      <Container>
        <SectionHeading
          id="integrations-heading"
          title={title}
          description={description}
          align="center"
        />
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {tools.map((tool) => (
            <li
              key={tool}
              className="rounded-control border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-small font-medium text-[var(--headline)]"
            >
              {tool}
            </li>
          ))}
        </ul>
        {note ? (
          <p className="mx-auto mt-6 max-w-[52ch] text-center text-caption text-[var(--muted)]">
            {note}
          </p>
        ) : null}
      </Container>
    </Section>
  );
}
