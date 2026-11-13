import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import type { Option } from "@/lib/contact-options";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type ContactSectionProps = {
  locale: Locale;
  form: SiteContent["form"];
  options: {
    roles: Option[];
    markets: Option[];
    interests: Option[];
    budgets: Option[];
  };
  eyebrow: string;
  title: string;
  description: string;
  confirmation: string;
  steps?: { title: string; description: string }[];
  note?: string;
};

export function ContactSection({
  locale,
  form,
  options,
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

          <ContactForm
            locale={locale}
            form={form}
            options={options}
            confirmation={confirmation}
          />
        </div>
      </Container>
    </Section>
  );
}
