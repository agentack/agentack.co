import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NumberedCard } from "@/components/ui/NumberedCard";
import { Button } from "@/components/ui/Button";

type ExpertiseItem = {
  title: string;
  description: string;
  href?: string;
};

type ExpertiseGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: ExpertiseItem[];
  actionLabel?: string;
  actionHref?: string;
};

export function ExpertiseGrid({
  eyebrow,
  title,
  description,
  items,
  actionLabel,
  actionHref,
}: ExpertiseGridProps) {
  return (
    <Section tone="band" aria-labelledby="expertise-heading">
      <Container>
        <SectionHeading
          id="expertise-heading"
          eyebrow={eyebrow}
          title={title}
          description={description}
          action={
            actionLabel && actionHref ? (
              <Button href={actionHref} variant="secondary">
                {actionLabel}
              </Button>
            ) : undefined
          }
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <NumberedCard
              key={item.title}
              index={String(index + 1).padStart(2, "0")}
              title={item.title}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
