import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Check } from "@/components/ui/icons";

type ChecklistSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  columns: { title: string; items: string[] }[];
  note?: string;
};

export function ChecklistSection({
  eyebrow,
  title,
  description,
  columns,
  note,
}: ChecklistSectionProps) {
  return (
    <Section aria-labelledby="checklist-heading">
      <Container>
        <SectionHeading
          id="checklist-heading"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {columns.map((column) => (
            <Card key={column.title} className="p-8">
              <h3 className="text-h3 text-[var(--headline)]">{column.title}</h3>
              <ul className="mt-5 space-y-3">
                {column.items.map((item) => (
                  <li key={item} className="flex gap-3 text-small text-[var(--ink)]">
                    <Check className="mt-0.5 shrink-0 text-[var(--gold)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        {note ? (
          <p className="mt-6 text-caption text-[var(--muted)]">{note}</p>
        ) : null}
      </Container>
    </Section>
  );
}
