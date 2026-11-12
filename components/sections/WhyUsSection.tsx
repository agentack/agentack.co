import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ValuePoint } from "@/components/ui/ValuePoint";

type ValueItem = {
  title: string;
  description: string;
};

type WhyUsSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: ValueItem[];
};

export function WhyUsSection({
  eyebrow,
  title,
  description,
  points,
}: WhyUsSectionProps) {
  return (
    <Section aria-labelledby="why-us-heading">
      <Container>
        <SectionHeading
          id="why-us-heading"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => (
            <ValuePoint
              key={point.title}
              index={String(index + 1).padStart(2, "0")}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
