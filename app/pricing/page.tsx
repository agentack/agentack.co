import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PricingTable } from "@/components/sections/PricingTable";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Check } from "@/components/ui/icons";
import { pricing, pricingFaqs, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Indicative pricing for discovery, technical assessment, pilots, production builds and support. Written scope and fixed price before work starts.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Know the range before the first call."
        description="You do not need a sales call to know whether this is affordable. Ranges are published below. Final pricing is confirmed in writing after the technical assessment."
        primaryCta={site.primaryCta}
        secondaryCta={{ label: "How the pilot works", href: "/pilot" }}
      />

      <PricingTable {...pricing} cta={site.primaryCta} />

      <Section tone="band" aria-labelledby="pricing-factors-heading">
        <Container>
          <SectionHeading
            id="pricing-factors-heading"
            eyebrow="What changes the price"
            title="Scope, access and complexity."
            description="Two projects with the same number of pages can differ by 10x once integrations and data quality are involved. The assessment exists to price that honestly."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Card className="p-8">
              <h3 className="text-h3 text-[var(--headline)]">Main cost drivers</h3>
              <ul className="mt-5 space-y-3">
                {pricing.factors.map((factor) => (
                  <li key={factor} className="flex gap-3 text-small text-[var(--ink)]">
                    <Check className="mt-0.5 shrink-0 text-[var(--gold)]" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-h3 text-[var(--headline)]">Payment terms</h3>
              <ul className="mt-5 space-y-3">
                {pricing.payment.map((term) => (
                  <li key={term} className="flex gap-3 text-small text-[var(--ink)]">
                    <Check className="mt-0.5 shrink-0 text-[var(--gold)]" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-[var(--border)] pt-4 text-caption text-[var(--muted)]">
                Third-party API, cloud and messaging costs are billed separately
                unless explicitly included.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <FAQSection
        eyebrow="Pricing FAQ"
        title="What the ranges include."
        description="The commercial questions that come up before a scope is agreed."
        items={pricingFaqs}
      />

      <CTASection
        eyebrow="Next step"
        headline="Start with a free discovery call."
        cta={site.primaryCta}
      />
    </>
  );
}
