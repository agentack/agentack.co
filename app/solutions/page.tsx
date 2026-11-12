import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceLadder } from "@/components/sections/ServiceLadder";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";
import { SpecialismsSection } from "@/components/sections/SpecialismsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IntegrationStrip } from "@/components/sections/IntegrationStrip";
import { CTASection } from "@/components/sections/CTASection";
import {
  expertise,
  integrations,
  processSteps,
  services,
  site,
  specialisms,
  subNiches,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "AI lead conversion systems, custom real estate software and automation for brokerages, developers and property managers across the GCC.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Start with the workflow that costs you most."
        description="Capture and convert enquiries, replace spreadsheets and disconnected tools, or connect the systems you already run. Each engagement is scoped around a measurable outcome."
        primaryCta={site.primaryCta}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <ServiceLadder
        eyebrow="Three capabilities"
        title="Lead conversion first. Software and automation next."
        description="Most real estate businesses do not need another platform. They need the enquiry flow to work, and the software around it to reflect reality."
        items={services}
      />

      <ExpertiseGrid
        eyebrow="What we build"
        title="From first reply to signed deal."
        description="The components of a working real estate pipeline, delivered as one system or introduced one at a time."
        items={expertise}
        actionLabel="See the lead conversion system"
        actionHref="/solutions/lead-conversion"
      />

      <SpecialismsSection {...specialisms} items={subNiches} />

      <ProcessSection
        eyebrow="How we work"
        title="Discovery, assessment, pilot, production."
        description="A written scope and clear success criteria before anything is built."
        steps={processSteps}
      />

      <IntegrationStrip {...integrations} />

      <CTASection
        eyebrow="Next step"
        headline="Tell us which workflow is leaking."
        cta={site.primaryCta}
      />
    </>
  );
}
