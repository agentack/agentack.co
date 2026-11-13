import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StageTabs, type Stage } from "@/components/ui/StageTabs";

type PipelineSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  stages: Stage[];
  labels: { tabs: string; stage: string };
};

export function PipelineSection({
  eyebrow,
  title,
  description,
  stages,
  labels,
}: PipelineSectionProps) {
  return (
    <Section id="solutions" tone="band" aria-labelledby="pipeline-heading">
      <Container>
        <SectionHeading
          id="pipeline-heading"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <StageTabs stages={stages} labels={labels} className="mt-12" />
      </Container>
    </Section>
  );
}
