import type { Metadata } from "next";

/** Locales the site is published in. English keeps unprefixed URLs. */
export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeConfig: Record<
  Locale,
  {
    htmlLang: string;
    dir: "ltr" | "rtl";
    ogLocale: string;
    /** Name in its own language, used by the language switch. */
    label: string;
    shortLabel: string;
  }
> = {
  en: {
    htmlLang: "en",
    dir: "ltr",
    ogLocale: "en_AE",
    label: "English",
    shortLabel: "EN",
  },
  ar: {
    htmlLang: "ar",
    dir: "rtl",
    ogLocale: "ar_AE",
    label: "العربية",
    shortLabel: "ع",
  },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Route params for pages under `app/[locale]`. */
export type LocaleParams = { params: Promise<{ locale: string }> };

/** Resolves and validates the locale param, falling back to English. */
export async function resolveLocale(
  params: Promise<{ locale: string }>,
): Promise<Locale> {
  const { locale } = await params;
  return isLocale(locale) ? locale : defaultLocale;
}

/**
 * Returns the public path for a page in a locale.
 * English is unprefixed; Arabic lives under /ar.
 * External URLs, mail links and bare hashes are left alone.
 */
export function pathForLocale(path: string, locale: Locale): string {
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  if (locale === "en") return path || "/";

  const hashIndex = path.indexOf("#");
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  const clean = (hashIndex >= 0 ? path.slice(0, hashIndex) : path) || "/";

  if (clean === "/") return `/ar${hash}`;
  return `/ar${clean}${hash}`;
}

/** Metadata alternates with canonical and hreflang entries for both locales. */
export function alternatesFor(
  path: string,
  locale: Locale = "en",
): NonNullable<Metadata["alternates"]> {
  const hashIndex = path.indexOf("#");
  const clean = (hashIndex >= 0 ? path.slice(0, hashIndex) : path) || "/";
  const suffix = clean === "/" ? "" : clean;

  return {
    canonical: pathForLocale(clean, locale),
    languages: {
      en: suffix || "/",
      ar: `/ar${suffix}`,
      "x-default": suffix || "/",
    },
  };
}

/**
 * Switches the current pathname to the target locale.
 * Handles both the public English path and the internal `/en` rewrite path.
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  const withoutLocale = pathname.replace(/^\/(?:en|ar)(?=\/|$)/, "") || "/";
  return pathForLocale(withoutLocale, target);
}

/** Standard per-page metadata with canonical, hreflang and Open Graph. */
export function pageMetadata(
  locale: Locale,
  path: string,
  meta: { title: string; description: string },
): Metadata {
  const config = localeConfig[locale];
  return {
    title: meta.title,
    description: meta.description,
    alternates: alternatesFor(path, locale),
    openGraph: {
      type: "website",
      title: meta.title,
      description: meta.description,
      url: pathForLocale(path, locale),
      locale: config.ogLocale,
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => localeConfig[item].ogLocale),
    },
  };
}
