/**
 * Shared option lists for the contact form.
 * Kept in one place so the form, the API route and the email it sends
 * always agree on the same codes and labels.
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

/** Turns a submitted code into its human label, falling back to the raw value. */
export function labelFor(options: Option[], value: string): string {
  if (!value) return "Not provided";
  return options.find((option) => option.value === value)?.label ?? value;
}

/** True when the value is one of the allowed codes. */
export function isOption(options: Option[], value: string): boolean {
  return options.some((option) => option.value === value);
}
