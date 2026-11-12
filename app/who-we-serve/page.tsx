import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PersonaSection } from "@/components/sections/PersonaSection";
import { SpecialismsSection } from "@/components/sections/SpecialismsSection";
import { CapabilitySection } from "@/components/sections/CapabilitySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import {
  faqs,
  personas,
  processSteps,
  proof,
  site,
  specialisms,
  subNiches,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Who we serve",
  description:
    "AI and software for real estate brokerages, developers and property managers across the GCC. Built around the workflows that decide whether a lead converts.",
  alternates: { canonical: "/who-we-serve" },
};

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        eyebrow="Who we serve"
        title="Built for the teams that own the follow-up."
        description="We work with established brokerages, developers and property managers — the businesses where a missed enquiry has a measurable cost."
        primaryCta={site.primaryCta}
        secondaryCta={{ label: "See the solutions", href: "/solutions" }}
      />

      <PersonaSection items={personas} cta={site.primaryCta} />

      <SpecialismsSection {...specialisms} items={subNiches} />

      <CapabilitySection {...proof} />

      <ProcessSection
        eyebrow="How we work"
        title="A process built for early trust."
        description="No borrowed logos. A written scope, a measured pilot and a clean handover."
        steps={processSteps}
      />

      <FAQSection
        eyebrow="FAQ"
        title="What to expect before you engage."
        description="The questions that come up most often across all three audiences."
        items={faqs}
      />

      <CTASection
        eyebrow="Next step"
        headline="Tell us where your team loses the most time."
        cta={site.primaryCta}
      />
    </>
  );
}
