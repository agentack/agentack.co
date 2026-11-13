import type { Metadata } from "next";
import { locale as rootLocale } from "next/root-params";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { getContent } from "@/lib/content";
import { defaultLocale, isLocale, pathForLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const raw = await rootLocale();
  const locale = isLocale(raw) ? raw : defaultLocale;
  return { title: getContent(locale).notFound.metaTitle };
}

export default async function NotFound() {
  const raw = await rootLocale();
  const locale = isLocale(raw) ? raw : defaultLocale;
  const copy = getContent(locale).notFound;

  return (
    <Section size="lg">
      <Container size="narrow">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1 className="mt-4 text-display text-[var(--headline)]">{copy.title}</h1>
        <p className="mt-5 max-w-[46ch] text-body text-[var(--muted)]">
          {copy.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={pathForLocale("/", locale)} size="lg">
            {copy.home}
          </Button>
          <Button
            href={pathForLocale("/solutions", locale)}
            size="lg"
            variant="secondary"
          >
            {copy.solutions}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
