import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { BookingSection } from "@/components/sections/BookingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { getContactOptions } from "@/lib/contact-options";
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
  return pageMetadata(locale, "/contact", getContent(locale).pages.contact.meta);
}

export default async function ContactPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const page = content.pages.contact;
  const hasBooking = Boolean(process.env.NEXT_PUBLIC_CALCOM_LINK?.trim());

  return (
    <>
      <PageHero
        eyebrow={content.contact.eyebrow}
        title={content.contact.title}
        description={content.contact.description}
        primaryCta={
          hasBooking
            ? { label: page.primaryBook, href: "#book" }
            : { label: page.primaryForm, href: "#contact" }
        }
        secondaryCta={
          hasBooking
            ? { label: page.secondaryBook, href: "#contact" }
            : { label: page.secondaryForm, href: "#faq" }
        }
      />

      <BookingSection copy={content.booking} />

      <ContactSection
        locale={locale}
        form={content.form}
        options={getContactOptions(locale)}
        {...content.contact}
      />

      <div id="faq">
        <FAQSection
          eyebrow={page.faq.eyebrow}
          title={page.faq.title}
          description={page.faq.description}
          items={content.faqs}
        />
      </div>
    </>
  );
}
