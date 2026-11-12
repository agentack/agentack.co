import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Agentack collects, uses and protects personal information submitted through the website.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Who we are",
    body: [
      "Agentack is a remote-first technology studio building AI and software for real estate businesses. This policy explains how we handle personal information collected through agentack.co.",
      `For privacy questions or requests, contact ${site.email}.`,
    ],
  },
  {
    title: "What we collect",
    body: [
      "Information you submit through the contact form: name, work email, company, website, role, market, area of interest, indicative budget and your message.",
      "Technical information collected by analytics tools: pages viewed, approximate location, device and browser type, referral source and interaction events.",
      "If you email us directly, we receive your email address, message and any attachments you choose to send.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "To respond to your enquiry, arrange a call and prepare a scope or proposal.",
      "To understand how the website is used and improve the content and conversion paths.",
      "To keep records of enquiries and engagements, and to meet legal or accounting obligations where they apply.",
      "We do not sell personal information or use it for unrelated advertising.",
    ],
  },
  {
    title: "Legal basis",
    body: [
      "Where consent is required, we rely on the consent you provide when submitting the form or accepting analytics cookies.",
      "We otherwise rely on legitimate business interests: responding to a request you initiated, operating the website securely and improving our services.",
    ],
  },
  {
    title: "Sharing and processors",
    body: [
      "We use service providers for hosting, CRM, email, scheduling and analytics. These may include Vercel, HubSpot, an email delivery provider, Cal.com and Google Analytics.",
      "Providers process information on our instructions and under their own contractual and security commitments. We share only what is needed for the service.",
      "We may disclose information if required by law or to protect our rights, users or systems.",
    ],
  },
  {
    title: "International transfers",
    body: [
      "Our providers may process information outside your country. Where required, we rely on appropriate contractual safeguards offered by those providers.",
    ],
  },
  {
    title: "Retention",
    body: [
      "Enquiry records are kept for as long as needed to respond, manage a potential or active engagement and meet legal obligations.",
      "Analytics data is retained according to the settings of the analytics provider. You can ask us to delete information we are not required to keep.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Depending on where you live, you may have the right to access, correct, delete or restrict the use of your personal information, or to object to certain processing.",
      `Send requests to ${site.email}. We may need to verify your identity before acting.`,
    ],
  },
  {
    title: "Cookies and analytics",
    body: [
      "The website uses essential storage to remember your theme preference. Analytics cookies are used only where consent has been provided through the consent mechanism.",
      "You can clear cookies through your browser settings. Blocking analytics may not affect the core website experience.",
    ],
  },
  {
    title: "Changes",
    body: [
      "We may update this policy as the business, providers or legal requirements change. The latest version is always published on this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Section size="lg" className="border-b border-[var(--border)]">
        <Container size="narrow">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 text-h1 text-[var(--headline)]">Privacy policy</h1>
          <p className="mt-5 text-body text-[var(--muted)]">
            How we collect, use and protect personal information. Last updated 12
            November 2026.
          </p>
        </Container>
      </Section>

      <Section>
        <Container size="narrow">
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-h3 text-[var(--headline)]">{section.title}</h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-small text-[var(--muted)]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
