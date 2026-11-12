import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

type AudienceSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  audiences: { title: string; line: string }[];
};

export function AudienceSection({
  eyebrow,
  title,
  description,
  audiences,
}: AudienceSectionProps) {
  return (
    <Section id="who-we-serve" aria-labelledby="audience-heading">
      <Container>
        <SectionHeading
          id="audience-heading"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <Card key={audience.title} as="article" goldRule className="pt-8">
              <span className="text-caption font-semibold text-[var(--gold-text)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-h3 text-[var(--headline)]">{audience.title}</h3>
              <p className="mt-3 text-small text-[var(--muted)]">{audience.line}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
