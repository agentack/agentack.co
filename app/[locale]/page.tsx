import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarketStrip } from "@/components/sections/MarketStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { FlagshipSection } from "@/components/sections/FlagshipSection";
import { ServiceLadder } from "@/components/sections/ServiceLadder";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { SpecialismsSection } from "@/components/sections/SpecialismsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CapabilitySection } from "@/components/sections/CapabilitySection";
import { PilotSection } from "@/components/sections/PilotSection";
import { IntegrationStrip } from "@/components/sections/IntegrationStrip";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
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
  return pageMetadata(locale, "/", getContent(locale).pages.home.meta);
}

export default async function HomePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const page = content.pages.home;

  return (
    <>
      <HeroSection {...content.hero} cardNote={content.ui.heroCardNote} />

      <MarketStrip label={page.marketsLabel} markets={content.markets} />

      <ProblemSection {...content.leaks} />

      <FlagshipSection {...content.flagship} flowLabel={content.ui.flowLabel} />

      <ServiceLadder
        eyebrow={page.services.eyebrow}
        title={page.services.title}
        description={page.services.description}
        items={content.services}
      />

      <AudienceSection
        eyebrow={page.audience.eyebrow}
        title={page.audience.title}
        description={page.audience.description}
        audiences={content.audiences}
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

      <CapabilitySection {...content.proof} />

      <PilotSection {...content.pilot} />

      <IntegrationStrip {...content.integrations} />

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
