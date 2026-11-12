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
import {
  audiences,
  features,
  integrations,
  leadFaqs,
  leaks,
  panels,
  pilot,
  site,
  stages,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "AI lead conversion for real estate",
  description:
    "Capture, qualify, route and follow up every property enquiry. Agentack builds AI lead conversion systems for brokerages and developers in the GCC.",
  alternates: { canonical: "/solutions/lead-conversion" },
};

export default function LeadConversionPage() {
  return (
    <>
      <PageHero
        eyebrow="AI lead conversion"
        title="Every enquiry answered, qualified and owned."
        description="A lead conversion system for real estate: captures enquiries from every channel, applies your qualification rules, routes the lead to the right agent and books the viewing. Then it follows up."
        primaryCta={site.primaryCta}
        secondaryCta={{ label: "See the pilot", href: "/pilot" }}
        aside={<FactPanel {...panels.leadConversion} />}
      />

      <ProblemSection {...leaks} />

      <PipelineSection
        eyebrow="How it works"
        title="Five stages, one system."
        description="Each stage is useful on its own. Together they close the gap between an enquiry and a viewing."
        stages={stages}
      />

      <FeatureGrid
        eyebrow="Capabilities"
        title="Built around your sales process."
        description="Not a generic chatbot. A configured workflow with your rules, your channels and your handover."
        features={features}
      />

      <AudienceSection
        eyebrow="Who it is for"
        title="Teams with more enquiries than follow-up."
        description="The system is designed for businesses where lead volume already exists and the bottleneck is response, ownership or follow-through."
        audiences={audiences}
      />

      <PilotSection {...pilot} />

      <IntegrationStrip {...integrations} />

      <FAQSection
        eyebrow="Lead conversion FAQ"
        title="The questions that decide the project."
        description="Straight answers on speed, qualification, guardrails and systems."
        items={leadFaqs}
      />

      <CTASection
        eyebrow="Next step"
        headline="Show us your current enquiry flow."
        cta={site.primaryCta}
      />
    </>
  );
}
