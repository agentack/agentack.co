import type { Locale } from "@/lib/i18n";

/**
 * Shared option lists for the contact form.
 * Values are stable codes; labels are localized. The API validates against
 * the codes and uses the English labels in internal notifications.
 */

export type Option = { value: string; label: string };

export const roles: Option[] = [
  { value: "founder", label: "Founder / CEO" },
  { value: "managing-director", label: "Managing director" },
  { value: "head-of-sales", label: "Head of sales" },
  { value: "operations", label: "Operations" },
  { value: "marketing", label: "Marketing" },
  { value: "it", label: "IT / Technology" },
  { value: "other", label: "Other" },
];

export const markets: Option[] = [
  { value: "uae", label: "United Arab Emirates" },
  { value: "saudi", label: "Saudi Arabia" },
  { value: "qatar", label: "Qatar" },
  { value: "kuwait", label: "Kuwait" },
  { value: "bahrain", label: "Bahrain" },
  { value: "oman", label: "Oman" },
  { value: "other", label: "Other" },
];

export const interests: Option[] = [
  { value: "lead-conversion", label: "Lead conversion system" },
  { value: "custom-software", label: "Custom software" },
  { value: "automation", label: "Automation or integration" },
  { value: "assessment", label: "Technical assessment" },
  { value: "unsure", label: "Not sure yet" },
];

export const budgets: Option[] = [
  { value: "under-1k", label: "Under $1,000" },
  { value: "1k-3k", label: "$1,000–$3,000" },
  { value: "3k-10k", label: "$3,000–$10,000" },
  { value: "10k-plus", label: "$10,000+" },
  { value: "unsure", label: "Not sure yet" },
];

const rolesAr: Option[] = [
  { value: "founder", label: "مؤسس / رئيس تنفيذي" },
  { value: "managing-director", label: "مدير عام" },
  { value: "head-of-sales", label: "مدير المبيعات" },
  { value: "operations", label: "العمليات" },
  { value: "marketing", label: "التسويق" },
  { value: "it", label: "تقنية المعلومات" },
  { value: "other", label: "أخرى" },
];

const marketsAr: Option[] = [
  { value: "uae", label: "الإمارات العربية المتحدة" },
  { value: "saudi", label: "السعودية" },
  { value: "qatar", label: "قطر" },
  { value: "kuwait", label: "الكويت" },
  { value: "bahrain", label: "البحرين" },
  { value: "oman", label: "عُمان" },
  { value: "other", label: "أخرى" },
];

const interestsAr: Option[] = [
  { value: "lead-conversion", label: "نظام تحويل الاستفسارات" },
  { value: "custom-software", label: "برمجيات مخصصة" },
  { value: "automation", label: "أتمتة أو تكامل" },
  { value: "assessment", label: "تقييم تقني" },
  { value: "unsure", label: "لم أحدد بعد" },
];

const budgetsAr: Option[] = [
  { value: "under-1k", label: "أقل من 1,000 دولار" },
  { value: "1k-3k", label: "1,000–3,000 دولار" },
  { value: "3k-10k", label: "3,000–10,000 دولار" },
  { value: "10k-plus", label: "أكثر من 10,000 دولار" },
  { value: "unsure", label: "لم أحدد بعد" },
];

export const contactOptions: Record<
  Locale,
  { roles: Option[]; markets: Option[]; interests: Option[]; budgets: Option[] }
> = {
  en: { roles, markets, interests, budgets },
  ar: {
    roles: rolesAr,
    markets: marketsAr,
    interests: interestsAr,
    budgets: budgetsAr,
  },
};

export function getContactOptions(locale: Locale) {
  return contactOptions[locale];
}

/** Turns a submitted code into its human label, falling back to the raw value. */
export function labelFor(options: Option[], value: string): string {
  if (!value) return "Not provided";
  return options.find((option) => option.value === value)?.label ?? value;
}

/** True when the value is one of the allowed codes. */
export function isOption(options: Option[], value: string): boolean {
  return options.some((option) => option.value === value);
}
