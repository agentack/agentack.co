import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FactPanel } from "@/components/ui/FactPanel";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { IntegrationStrip } from "@/components/sections/IntegrationStrip";
import { ProcessSection } from "@/components/sections/ProcessSection";
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
  return pageMetadata(
    locale,
    "/solutions/automation-and-integrations",
    getContent(locale).pages.automation.meta,
  );
}

export default async function AutomationPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const page = content.pages.automation;

  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={content.site.primaryCta}
        secondaryCta={{
          label: page.hero.secondaryLabel,
          href: "#integrations",
        }}
        aside={<FactPanel {...content.panels.automation} />}
      />

      <FeatureGrid
        eyebrow={page.features.eyebrow}
        title={page.features.title}
        description={page.features.description}
        features={content.automationFeatures}
      />

      <div id="integrations">
        <IntegrationStrip {...content.integrations} />
      </div>

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
        items={content.automationFaqs}
      />

      <CTASection
        eyebrow={page.cta.eyebrow}
        headline={page.cta.headline}
        cta={content.site.primaryCta}
      />
    </>
  );
}
