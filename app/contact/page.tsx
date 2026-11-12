import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { contact, faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a discovery call",
  description:
    "Tell us how your enquiries flow today. A 30-minute call, a clear next step and a written scope if there is a fit.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contact.eyebrow}
        title={contact.title}
        description={contact.description}
        primaryCta={{ label: "Start the form", href: "#contact" }}
        secondaryCta={{ label: "Read the FAQ", href: "#faq" }}
      />

      <ContactSection {...contact} />

      <div id="faq">
        <FAQSection
          eyebrow="Before you send"
          title="Clarity before the first conversation."
          description="The questions we hear most often, answered plainly."
          items={faqs}
        />
      </div>
    </>
  );
}
