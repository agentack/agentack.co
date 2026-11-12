import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PilotSection } from "@/components/sections/PilotSection";
import { ChecklistSection } from "@/components/sections/ChecklistSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  contact,
  pilot,
  pilotFaqs,
  processSteps,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Pilot programme",
  description:
    "A 2–4 week pilot on your real enquiries with a written scope, fixed price and success criteria agreed before development starts.",
  alternates: { canonical: "/pilot" },
};

export default function PilotPage() {
  return (
    <>
      <PageHero
        eyebrow="Pilot programme"
        title="Prove it on one workflow. Then decide."
        description="A focused pilot on real enquiries, measured against criteria agreed before development. No long contract, no platform commitment, no guesswork."
        primaryCta={{ label: "Apply for a pilot", href: "#contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <PilotSection {...pilot} />

      <ChecklistSection
        eyebrow="Pilot scope"
        title="What you get. What we need."
        description="A pilot works when the scope is narrow and the inputs are clear. This is the trade."
        columns={[
          {
            title: "What you get",
            items: [
              "A working agent or automation on your real enquiries",
              "The integrations required for that one workflow",
              "Testing against agreed scenarios and criteria",
              "A written pilot report with the measured result",
              "A recommendation: continue, adjust or stop",
            ],
          },
          {
            title: "What we need",
            items: [
              "Access to the relevant CRM, portal or messaging account",
              "Sample listings and real enquiry examples",
              "Your qualification criteria and routing rules",
              "Calendar access for viewing bookings",
              "One named reviewer for feedback and sign-off",
            ],
          },
        ]}
        note="Arabic-language content requires a qualified native reviewer, either from your team or arranged separately."
      />

      <ProcessSection
        eyebrow="How the pilot runs"
        title="Two to four weeks, one clear result."
        description="The scope stays tight so the outcome is easy to judge."
        steps={processSteps}
      />

      <FAQSection
        eyebrow="Pilot FAQ"
        title="What to expect before you apply."
        description="Straight answers on scope, timing, success and what happens afterwards."
        items={pilotFaqs}
      />

      <ContactSection {...contact} />
    </>
  );
}
