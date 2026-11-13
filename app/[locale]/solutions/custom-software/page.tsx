import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FactPanel } from "@/components/ui/FactPanel";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
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
    "/solutions/custom-software",
    getContent(locale).pages.customSoftware.meta,
  );
}

export default async function CustomSoftwarePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const page = content.pages.customSoftware;

  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={content.site.primaryCta}
        secondaryCta={{
          label: page.hero.secondaryLabel,
          href: pathForLocale("/pricing", locale),
        }}
        aside={<FactPanel {...content.panels.software} />}
      />

      <ExpertiseGrid
        eyebrow={page.expertise.eyebrow}
        title={page.expertise.title}
        description={page.expertise.description}
        items={content.expertise}
        actionLabel={page.expertise.actionLabel}
        actionHref={pathForLocale("/contact", locale)}
        cardActionLabel={content.ui.exploreSolution}
      />

      <WhyUsSection
        eyebrow={page.values.eyebrow}
        title={page.values.title}
        description={page.values.description}
        points={content.valuePoints}
      />

      <ProcessSection
        eyebrow={page.process.eyebrow}
        title={page.process.title}
        description={page.process.description}
        steps={content.processSteps}
      />

      <IntegrationStrip {...content.integrations} />

      <FAQSection
        eyebrow={page.faq.eyebrow}
        title={page.faq.title}
        description={page.faq.description}
        items={content.softwareFaqs}
      />

      <CTASection
        eyebrow={page.cta.eyebrow}
        headline={page.cta.headline}
        cta={content.site.primaryCta}
      />
    </>
  );
}
