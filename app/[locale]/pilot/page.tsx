import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PilotSection } from "@/components/sections/PilotSection";
import { ChecklistSection } from "@/components/sections/ChecklistSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { getContactOptions } from "@/lib/contact-options";
import { getContent } from "@/lib/content";
import {
  pageMetadata,
  pathForLocale,
  resolveLocale,
  type LocaleParams,
} from "@/lib/i18n";

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return pageMetadata(locale, "/pilot", getContent(locale).pages.pilot.meta);
}

export default async function PilotPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const page = content.pages.pilot;
  const checklist = page.checklist;

  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        primaryCta={{ label: page.hero.primaryLabel, href: "#contact" }}
        secondaryCta={{
          label: page.hero.secondaryLabel,
          href: pathForLocale("/pricing", locale),
        }}
      />

      <PilotSection {...content.pilot} />

      <ChecklistSection
        eyebrow={checklist.eyebrow}
        title={checklist.title}
        description={checklist.description}
        columns={[
          { title: checklist.getTitle, items: checklist.getItems },
          { title: checklist.needTitle, items: checklist.needItems },
        ]}
        note={checklist.note}
      />

      <ProcessSection
        eyebrow={page.process.eyebrow}
        title={page.process.title}
        description={page.process.description}
        steps={content.processSteps}
      />

      <FAQSection
        eyebrow={page.faq.eyebrow}
        title={page.faq.title}
        description={page.faq.description}
        items={content.pilotFaqs}
      />

      <ContactSection
        locale={locale}
        form={content.form}
        options={getContactOptions(locale)}
        {...content.contact}
      />
    </>
  );
}
