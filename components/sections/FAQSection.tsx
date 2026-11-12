import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";

type FAQSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: AccordionItem[];
};

export function FAQSection({ eyebrow, title, description, items }: FAQSectionProps) {
  return (
    <Section aria-labelledby="faq-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            id="faq-heading"
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="md:flex-col md:items-start"
          />
          <Accordion items={items} />
        </div>
      </Container>
    </Section>
  );
}
