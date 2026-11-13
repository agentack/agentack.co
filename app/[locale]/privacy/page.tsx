import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { getContent } from "@/lib/content";
import {
  pageMetadata,
  resolveLocale,
  type LocaleParams,
} from "@/lib/i18n";

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata(locale, "/privacy", getContent(locale).pages.privacy.meta);
}

export default async function PrivacyPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const page = content.pages.privacy;

  return (
    <>
      <Section size="lg" className="border-b border-[var(--border)]">
        <Container size="narrow">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="mt-4 text-h1 text-[var(--headline)]">{page.title}</h1>
          <p className="mt-5 text-body text-[var(--muted)]">{page.updated}</p>
        </Container>
      </Section>

      <Section>
        <Container size="narrow">
          <div className="space-y-10">
            {content.legal.privacySections.map((section) => (
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
