import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";

type Feature = {
  index: string;
  title: string;
  description: string;
};

type FeatureGridProps = {
  eyebrow: string;
  title: string;
  description?: string;
  features: Feature[];
};

export function FeatureGrid({ eyebrow, title, description, features }: FeatureGridProps) {
  return (
    <Section aria-labelledby="features-heading">
      <Container>
        <SectionHeading
          id="features-heading"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              index={feature.index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
