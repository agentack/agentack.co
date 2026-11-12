import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "@/components/ui/icons";

type Service = {
  index: string;
  title: string;
  description: string;
  points: string[];
  href: string;
  linkLabel: string;
};

type ServiceLadderProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: Service[];
};

export function ServiceLadder({
  eyebrow,
  title,
  description,
  items,
}: ServiceLadderProps) {
  return (
    <Section tone="band" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} as="article" goldRule className="flex flex-col p-8">
              <span className="font-display text-[2rem] leading-none text-[var(--gold)] tabular-nums">
                {item.index}
              </span>
              <h3 className="mt-5 text-h3 text-[var(--headline)]">{item.title}</h3>
              <p className="mt-3 text-small text-[var(--muted)]">{item.description}</p>
              <ul className="mt-5 space-y-2 border-t border-[var(--border)] pt-5">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-small text-[var(--ink)]"
                  >
                    <span aria-hidden className="mt-2 size-1 shrink-0 rounded-pill bg-[var(--gold)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={item.href}
                className="group mt-auto inline-flex items-center gap-2 pt-6 text-small font-semibold text-[var(--headline)] transition-colors hover:text-[var(--gold-text)]"
              >
                {item.linkLabel}
                <ArrowRight className="transition-transform duration-[var(--dur-base)] group-hover:translate-x-1 rtl:rotate-180" />
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
