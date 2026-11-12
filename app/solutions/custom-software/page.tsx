import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FactPanel } from "@/components/ui/FactPanel";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IntegrationStrip } from "@/components/sections/IntegrationStrip";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import {
  expertise,
  integrations,
  panels,
  processSteps,
  site,
  softwareFaqs,
  valuePoints,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Custom real estate software",
  description:
    "Custom CRMs, property portals, dashboards and internal tools for real estate businesses in the GCC. Built to fit your workflow and handed over to your team.",
  alternates: { canonical: "/solutions/custom-software" },
};

export default function CustomSoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="Real estate software"
        title="Software built around how your team works."
        description="Off-the-shelf tools force your process into their model. We build CRMs, portals, dashboards and internal systems around the way your business actually runs — then hand over the source."
        primaryCta={site.primaryCta}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        aside={<FactPanel {...panels.software} />}
      />

      <ExpertiseGrid
        eyebrow="What we build"
        title="The system your operation is missing."
        description="From a focused internal tool to a full platform, scoped around the workflow that costs you most."
        items={expertise}
        actionLabel="Talk through your build"
        actionHref="/contact"
      />

      <WhyUsSection
        eyebrow="Delivery principles"
        title="Built to be owned, not rented."
        description="The commercial and engineering choices that decide whether software becomes an asset or a dependency."
        points={valuePoints}
      />

      <ProcessSection
        eyebrow="How we work"
        title="Discovery, assessment, pilot, production."
        description="Software is scoped after the workflow and integrations are understood — not before."
        steps={processSteps}
      />

      <IntegrationStrip {...integrations} />

      <FAQSection
        eyebrow="Software FAQ"
        title="Ownership, hosting and handover."
        description="The practical questions that come up before a build starts."
        items={softwareFaqs}
      />

      <CTASection
        eyebrow="Next step"
        headline="Replace the spreadsheet that runs the business."
        cta={site.primaryCta}
      />
    </>
  );
}
