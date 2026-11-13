import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FactPanel } from "@/components/ui/FactPanel";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { PipelineSection } from "@/components/sections/PipelineSection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { PilotSection } from "@/components/sections/PilotSection";
import { IntegrationStrip } from "@/components/sections/IntegrationStrip";
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
    "/solutions/lead-conversion",
    getContent(locale).pages.leadConversion.meta,
  );
}

export default async function LeadConversionPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const page = content.pages.leadConversion;

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
        aside={<FactPanel {...content.panels.leadConversion} />}
      />

      <ProblemSection {...content.leaks} />

      <PipelineSection
        eyebrow={page.pipeline.eyebrow}
        title={page.pipeline.title}
        description={page.pipeline.description}
        stages={content.stages}
        labels={{
          tabs: content.ui.pipelineStages,
          stage: content.ui.stageLabel,
        }}
      />

      <FeatureGrid
        eyebrow={page.features.eyebrow}
        title={page.features.title}
        description={page.features.description}
        features={content.features}
      />

      <AudienceSection
        eyebrow={page.audience.eyebrow}
        title={page.audience.title}
        description={page.audience.description}
        audiences={content.audiences}
      />

      <PilotSection {...content.pilot} />

      <IntegrationStrip {...content.integrations} />

      <FAQSection
        eyebrow={page.faq.eyebrow}
        title={page.faq.title}
        description={page.faq.description}
        items={content.leadFaqs}
      />

      <CTASection
        eyebrow={page.cta.eyebrow}
        headline={page.cta.headline}
        cta={content.site.primaryCta}
      />
    </>
  );
}
