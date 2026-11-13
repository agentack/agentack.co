import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { SpecialismsSection } from "@/components/sections/SpecialismsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { getContent } from "@/lib/content";
import {
  pageMetadata,
  resolveLocale,
  type LocaleParams,
} from "@/lib/i18n";

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata(locale, "/about", getContent(locale).pages.about.meta);
}

export default async function AboutPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const about = content.about;
  const page = content.pages.about;

  return (
    <>
      <PageHero
        eyebrow={about.eyebrow}
        title={about.title}
        description={about.description}
        primaryCta={content.site.primaryCta}
        secondaryCta={content.site.secondaryCta}
      />

      <Section aria-labelledby="thesis-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="eyebrow">{page.thesisEyebrow}</p>
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
        eyebrow={page.beliefs.eyebrow}
        title={page.beliefs.title}
        description={page.beliefs.description}
        points={about.principles}
      />

      <SpecialismsSection
        {...content.specialisms}
        items={content.subNiches}
        buildLabel={content.ui.whatWeBuild}
        vocabularyLabel={content.ui.vocabularyLabel}
      />

      <ProcessSection
        eyebrow={page.process.eyebrow}
        title={page.process.title}
        description={page.process.description}
        steps={content.processSteps}
      />

      <section className="border-t border-[var(--border)]">
        <Container>
          <div className="grid gap-6 py-12 md:grid-cols-[0.7fr_1.3fr] md:items-start">
            <p className="eyebrow">{page.engageEyebrow}</p>
            <p className="max-w-[70ch] text-small text-[var(--muted)]">
              {page.engageBody}
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow={page.cta.eyebrow}
        headline={page.cta.headline}
        cta={content.site.primaryCta}
      />
    </>
  );
}
