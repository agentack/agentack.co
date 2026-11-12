import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of service",
  description:
    "The terms that apply to use of the Agentack website and to client engagements.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "Website use",
    body: [
      "This website is provided for information about Agentack and its services. You may use it for lawful purposes only.",
      "You may not attempt to disrupt the site, gain unauthorised access to systems or copy content for commercial use without permission.",
    ],
  },
  {
    title: "Services and proposals",
    body: [
      "Content on this site is indicative, not an offer capable of acceptance. Services are delivered under a written proposal or agreement that sets out scope, deliverables, timeline, price, acceptance criteria and payment terms.",
      "Where the website and a signed agreement differ, the signed agreement prevails.",
    ],
  },
  {
    title: "No guarantee of business outcomes",
    body: [
      "We commit to the deliverables and acceptance criteria agreed in writing. We do not guarantee revenue, lead volume, conversion rates, sales, rankings or other business outcomes, which depend on factors outside our control.",
      "Pilots validate technical and operational feasibility. They do not guarantee that a production system will produce a particular commercial result.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "Website content, brand assets and written material remain the property of Agentack unless otherwise stated.",
      "Ownership of project code, designs and documentation is set out in the applicable agreement. Where handover is included, source code, documentation and deployment configuration are transferred on completion of payment.",
    ],
  },
  {
    title: "Client responsibilities",
    body: [
      "Clients are responsible for providing timely access to systems, data, reviewers and approvals, and for ensuring they have the right to share any data or credentials provided to us.",
      "Delays in access, feedback or approvals may affect the timeline and cost.",
    ],
  },
  {
    title: "Third-party services",
    body: [
      "Projects may depend on third-party APIs, portals, messaging providers, cloud infrastructure and payment providers. Their availability, pricing and terms are outside our control.",
      "Third-party subscription, API, messaging and infrastructure costs are billed separately unless explicitly included in the agreement.",
    ],
  },
  {
    title: "Payment",
    body: [
      "Payment terms are stated in the applicable proposal or agreement. Work may pause if invoices are overdue.",
      "Fees for completed work are payable even if a project is paused or terminated, as set out in the agreement.",
    ],
  },
  {
    title: "Confidentiality",
    body: [
      "Each party agrees to protect confidential information received from the other and to use it only for the purpose of the engagement.",
      "We may describe work publicly only with permission, or in anonymised form where confidentiality requires it.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the extent permitted by law, Agentack is not liable for indirect or consequential loss, loss of profit, loss of opportunity or loss of data arising from use of this website.",
      "Liability under a client engagement is governed by the limitations set out in the signed agreement.",
    ],
  },
  {
    title: "Termination",
    body: [
      "Either party may terminate an engagement as provided in the applicable agreement. On termination, the client pays for work performed and approved expenses incurred up to that point.",
    ],
  },
  {
    title: "Governing terms",
    body: [
      "The law and dispute process applicable to a client engagement are stated in the signed agreement. Nothing on this website creates a partnership, employment or agency relationship.",
    ],
  },
  {
    title: "Contact",
    body: [
      `Questions about these terms can be sent to ${site.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Section size="lg" className="border-b border-[var(--border)]">
        <Container size="narrow">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 text-h1 text-[var(--headline)]">Terms of service</h1>
          <p className="mt-5 text-body text-[var(--muted)]">
            The terms that apply to this website and to client engagements. Last
            updated 12 November 2026.
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
