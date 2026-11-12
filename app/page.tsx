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
import {
  audiences,
  faqs,
  flagship,
  hero,
  integrations,
  leaks,
  markets,
  pilot,
  processSteps,
  proof,
  services,
  site,
  specialisms,
  subNiches,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "AI lead conversion systems for Gulf real estate",
  description:
    "Agentack builds AI lead conversion systems and custom software for brokerages and developers across the GCC. Capture, qualify and convert property enquiries.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection {...hero} />

      <MarketStrip label="Clients across the GCC" markets={markets} />

      <ProblemSection {...leaks} />

      <FlagshipSection {...flagship} />

      <ServiceLadder
        eyebrow="What we do"
        title="Start with the leak that costs you most."
        description="Three connected capabilities. Most clients start with lead conversion, then extend into software and automation as the relationship grows."
        items={services}
      />

      <AudienceSection
        eyebrow="Who we serve"
        title="Built for the teams that handle the enquiries."
        description="We work with the businesses that own the lead, the agent and the follow-up."
        audiences={audiences}
      />

      <SpecialismsSection {...specialisms} items={subNiches} />

      <ProcessSection
        eyebrow="How we work"
        title="Discovery, assessment, pilot, production."
        description="A written scope and clear success criteria before anything is built."
        steps={processSteps}
      />

      <CapabilitySection {...proof} />

      <PilotSection {...pilot} />

      <IntegrationStrip {...integrations} />

      <FAQSection
        eyebrow="FAQ"
        title="Clarity before the first conversation."
        description="The questions we hear most often, answered plainly."
        items={faqs}
      />

      <CTASection
        eyebrow="Next step"
        headline="Bring us your messiest enquiry flow."
        cta={site.primaryCta}
      />
    </>
  );
}
