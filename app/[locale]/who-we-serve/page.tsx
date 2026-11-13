import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PersonaSection } from "@/components/sections/PersonaSection";
import { SpecialismsSection } from "@/components/sections/SpecialismsSection";
import { CapabilitySection } from "@/components/sections/CapabilitySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
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
  return pageMetadata(
    locale,
    "/who-we-serve",
    getContent(locale).pages.whoWeServe.meta,
  );
}

export default async function WhoWeServePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const page = content.pages.whoWeServe;

  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={content.site.primaryCta}
        secondaryCta={{
          label: page.hero.secondaryLabel,
          href: pathForLocale("/solutions", locale),
        }}
      />

      <PersonaSection
        items={content.personas}
        cta={content.site.primaryCta}
        heading={content.ui.whoWeServeHeading}
        painsLabel={content.ui.whereItBreaks}
        outcomesLabel={content.ui.whatChanges}
        secondaryLink={{
          label: content.ui.seeSolutions,
          href: pathForLocale("/solutions", locale),
        }}
      />

      <SpecialismsSection
        {...content.specialisms}
        items={content.subNiches}
        buildLabel={content.ui.whatWeBuild}
        vocabularyLabel={content.ui.vocabularyLabel}
      />

      <CapabilitySection {...content.proof} />

      <ProcessSection
        eyebrow={page.process.eyebrow}
        title={page.process.title}
        description={page.process.description}
        steps={content.processSteps}
      />

      <FAQSection
        eyebrow={page.faq.eyebrow}
        title={page.faq.title}
        description={page.faq.description}
        items={content.faqs}
      />

      <CTASection
        eyebrow={page.cta.eyebrow}
        headline={page.cta.headline}
        cta={content.site.primaryCta}
      />
    </>
  );
}
