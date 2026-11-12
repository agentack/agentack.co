import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FactPanel } from "@/components/ui/FactPanel";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { IntegrationStrip } from "@/components/sections/IntegrationStrip";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import {
  automationFaqs,
  automationFeatures,
  integrations,
  panels,
  processSteps,
  site,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Automation and integrations",
  description:
    "Connect WhatsApp, your CRM, calendars and property portals into one reliable flow. Custom integrations built against official APIs for real estate businesses.",
  alternates: { canonical: "/solutions/automation-and-integrations" },
};

export default function AutomationPage() {
  return (
    <>
      <PageHero
        eyebrow="Automation & integrations"
        title="Your systems should not need a human bridge."
        description="Most teams lose time copying leads between a portal, a spreadsheet, WhatsApp and the CRM. We connect the tools you already use — or replace the gap with a custom integration."
        primaryCta={site.primaryCta}
        secondaryCta={{ label: "See what we connect", href: "#integrations" }}
        aside={<FactPanel {...panels.automation} />}
      />

      <FeatureGrid
        eyebrow="What we automate"
        title="The work between the tools."
        description="Not automation for its own sake. The repetitive steps that slow down a lead, a viewing or a handover."
        features={automationFeatures}
      />

      <div id="integrations">
        <IntegrationStrip {...integrations} />
      </div>

      <ProcessSection
        eyebrow="How we work"
        title="Access first, then scope."
        description="Integration feasibility is confirmed before price and timeline are fixed. If something cannot be connected cleanly, we say so."
        steps={processSteps}
      />

      <FAQSection
        eyebrow="Integration FAQ"
        title="What can actually be connected."
        description="Honest answers on portals, WhatsApp, CRMs and failure handling."
        items={automationFaqs}
      />

      <CTASection
        eyebrow="Next step"
        headline="Show us the manual step you repeat every day."
        cta={site.primaryCta}
      />
    </>
  );
}
