import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Field";

type ContactSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  confirmation: string;
  steps?: { title: string; description: string }[];
  note?: string;
};

const roles = [
  { value: "founder", label: "Founder / CEO" },
  { value: "managing-director", label: "Managing director" },
  { value: "head-of-sales", label: "Head of sales" },
  { value: "operations", label: "Operations" },
  { value: "marketing", label: "Marketing" },
  { value: "it", label: "IT / Technology" },
  { value: "other", label: "Other" },
];

const markets = [
  { value: "uae", label: "United Arab Emirates" },
  { value: "saudi", label: "Saudi Arabia" },
  { value: "qatar", label: "Qatar" },
  { value: "kuwait", label: "Kuwait" },
  { value: "bahrain", label: "Bahrain" },
  { value: "oman", label: "Oman" },
  { value: "other", label: "Other" },
];

const interests = [
  { value: "lead-conversion", label: "Lead conversion system" },
  { value: "custom-software", label: "Custom software" },
  { value: "automation", label: "Automation or integration" },
  { value: "assessment", label: "Technical assessment" },
  { value: "unsure", label: "Not sure yet" },
];

const budgets = [
  { value: "under-1k", label: "Under $1,000" },
  { value: "1k-3k", label: "$1,000–$3,000" },
  { value: "3k-10k", label: "$3,000–$10,000" },
  { value: "10k-plus", label: "$10,000+" },
  { value: "unsure", label: "Not sure yet" },
];

export function ContactSection({
  eyebrow,
  title,
  description,
  confirmation,
  steps,
  note,
}: ContactSectionProps) {
  return (
    <Section id="contact" tone="band" aria-labelledby="contact-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              id="contact-heading"
              eyebrow={eyebrow}
              title={title}
              description={description}
              className="md:flex-col md:items-start"
            />
            <p className="mt-6 text-small text-[var(--muted)]">{confirmation}</p>

            {steps?.length ? (
              <ol className="mt-8 space-y-5 border-t border-[var(--border)] pt-6">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="font-display text-h3 leading-none text-[var(--gold)] tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-small font-semibold text-[var(--headline)]">
                        {step.title}
                      </p>
                      <p className="mt-1 text-small text-[var(--muted)]">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            ) : null}

            {note ? (
              <p className="mt-6 text-caption text-[var(--muted)]">{note}</p>
            ) : null}
          </div>

          <form className="rounded-panel border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input label="Full name" name="name" autoComplete="name" required />
              <Input
                label="Work email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
              <Input
                label="Company name"
                name="company"
                autoComplete="organization"
                required
              />
              <Input
                label="Website"
                name="website"
                type="url"
                autoComplete="url"
                hint="Optional."
              />
              <Select label="Your role" name="role" options={roles} placeholder="Select a role" />
              <Select label="Main market" name="market" options={markets} placeholder="Select a market" />
              <Select
                label="What do you want to improve?"
                name="interest"
                options={interests}
                placeholder="Select an area"
              />
              <Select
                label="Indicative budget"
                name="budget"
                options={budgets}
                placeholder="Select a range"
                hint="Helps us suggest the right starting point."
              />
            </div>

            <div className="mt-5">
              <Textarea
                label="Where does the flow break today?"
                name="message"
                hint="Two or three lines is plenty."
              />
            </div>

            <label className="mt-5 flex items-start gap-3 text-small text-[var(--muted)]">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-1 size-4 rounded-[3px] border border-[var(--border)] accent-[var(--headline)]"
              />
              <span>I agree to be contacted about this request.</span>
            </label>

            <Button type="submit" size="lg" fullWidth className="mt-6">
              Request a discovery call
            </Button>
            <p className="mt-3 text-center text-caption text-[var(--muted)]">
              We reply within one business day.
            </p>
          </form>
        </div>
      </Container>
    </Section>
  );
}
