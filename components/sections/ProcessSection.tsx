import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessStep } from "@/components/ui/ProcessStep";

type ProcessSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: { title: string; description: string }[];
};

export function ProcessSection({ eyebrow, title, description, steps }: ProcessSectionProps) {
  return (
    <Section tone="band" aria-labelledby="process-heading">
      <Container>
        <SectionHeading
          id="process-heading"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              index={String(index + 1).padStart(2, "0")}
              title={step.title}
              description={step.description}
            />
          ))}
        </ol>
      </Container>
    </Section>
  );
}
