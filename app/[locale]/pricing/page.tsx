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
import { getContent } from "@/lib/content";
import {
  pageMetadata,
  pathForLocale,
  resolveLocale,
  type LocaleParams,
} from "@/lib/i18n";

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata(locale, "/pricing", getContent(locale).pages.pricing.meta);
}

export default async function PricingPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const page = content.pages.pricing;
  const pricing = content.pricing;

  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={content.site.primaryCta}
        secondaryCta={{
          label: page.hero.secondaryLabel,
          href: pathForLocale("/pilot", locale),
        }}
      />

      <PricingTable {...pricing} cta={content.site.primaryCta} />

      <Section tone="band" aria-labelledby="pricing-factors-heading">
        <Container>
          <SectionHeading
            id="pricing-factors-heading"
            eyebrow={page.factors.eyebrow}
            title={page.factors.title}
            description={page.factors.description}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Card className="p-8">
              <h3 className="text-h3 text-[var(--headline)]">
                {page.factors.driversTitle}
              </h3>
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
              <h3 className="text-h3 text-[var(--headline)]">
                {page.factors.paymentsTitle}
              </h3>
              <ul className="mt-5 space-y-3">
                {pricing.payment.map((term) => (
                  <li key={term} className="flex gap-3 text-small text-[var(--ink)]">
                    <Check className="mt-0.5 shrink-0 text-[var(--gold)]" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-[var(--border)] pt-4 text-caption text-[var(--muted)]">
                {page.factors.thirdPartyNote}
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <FAQSection
        eyebrow={page.faq.eyebrow}
        title={page.faq.title}
        description={page.faq.description}
        items={content.pricingFaqs}
      />

      <CTASection
        eyebrow={page.cta.eyebrow}
        headline={page.cta.headline}
        cta={content.site.primaryCta}
      />
    </>
  );
}
