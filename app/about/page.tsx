import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { SpecialismsSection } from "@/components/sections/SpecialismsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import {
  about,
  processSteps,
  site,
  specialisms,
  subNiches,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Agentack is a remote-first engineering team building AI lead conversion systems and custom software for real estate businesses across the GCC.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={about.eyebrow}
        title={about.title}
        description={about.description}
        primaryCta={site.primaryCta}
        secondaryCta={{ label: "See what we build", href: "/solutions" }}
      />

      <Section aria-labelledby="thesis-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="eyebrow">Why we exist</p>
              <h2
                id="thesis-heading"
                className="mt-4 max-w-[24ch] text-h2 text-[var(--headline)]"
              >
                {about.thesisTitle}
              </h2>
              <p className="mt-6 max-w-[58ch] text-body text-[var(--muted)]">
                {about.thesis}
              </p>
            </div>

            <dl className="grid gap-4 sm:grid-cols-2">
              {about.facts.map((fact) => (
                <Card key={fact.label} className="p-6">
                  <dt className="text-caption font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                    {fact.label}
                  </dt>
                  <dd className="mt-3 text-body font-medium text-[var(--headline)]">
                    {fact.value}
                  </dd>
                </Card>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <WhyUsSection
        eyebrow="What we believe"
        title="Four principles that shape the work."
        description="They are not values on a wall. They decide what we build and what we refuse to promise."
        points={about.principles}
      />

      <SpecialismsSection {...specialisms} items={subNiches} />

      <ProcessSection
        eyebrow="How we work"
        title="Discovery, assessment, pilot, production."
        description="A written scope and clear success criteria before anything is built."
        steps={processSteps}
      />

      <section className="border-t border-[var(--border)]">
        <Container>
          <div className="grid gap-6 py-12 md:grid-cols-[0.7fr_1.3fr] md:items-start">
            <p className="eyebrow">Where we work</p>
            <p className="max-w-[70ch] text-small text-[var(--muted)]">
              Agentack operates remotely from Karachi and serves clients across the
              UAE, Saudi Arabia, Qatar and the wider GCC. We do not claim a regional
              office or a local legal entity that does not exist. Work is delivered
              remotely, with clear communication and agreed review points.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Work with us"
        headline="Let's look at where your enquiries leak."
        cta={site.primaryCta}
      />
    </>
  );
}
