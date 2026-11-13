import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceLadder } from "@/components/sections/ServiceLadder";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";
import { SpecialismsSection } from "@/components/sections/SpecialismsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IntegrationStrip } from "@/components/sections/IntegrationStrip";
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
    "/solutions",
    getContent(locale).pages.solutions.meta,
  );
}

export default async function SolutionsPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const page = content.pages.solutions;

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
      />

      <ServiceLadder
        eyebrow={page.services.eyebrow}
        title={page.services.title}
        description={page.services.description}
        items={content.services}
      />

      <ExpertiseGrid
        eyebrow={page.expertise.eyebrow}
        title={page.expertise.title}
        description={page.expertise.description}
        items={content.expertise}
        actionLabel={page.expertise.actionLabel}
        actionHref={pathForLocale("/solutions/lead-conversion", locale)}
        cardActionLabel={content.ui.exploreSolution}
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

      <IntegrationStrip {...content.integrations} />

      <CTASection
        eyebrow={page.cta.eyebrow}
        headline={page.cta.headline}
        cta={content.site.primaryCta}
      />
    </>
  );
}
