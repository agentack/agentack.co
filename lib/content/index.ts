import type { Locale } from "@/lib/i18n";
import { ar } from "@/lib/content/ar";
import { en, type SiteContent } from "@/lib/content/en";

export const dictionaries: Record<Locale, SiteContent> = {
  en,
  ar,
};

/** Returns the full content dictionary for a locale. */
export function getContent(locale: Locale): SiteContent {
  return dictionaries[locale];
}

export type { SiteContent };
