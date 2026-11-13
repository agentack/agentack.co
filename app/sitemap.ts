import type { MetadataRoute } from "next";
import { locales, pathForLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

/**
 * One entry per route, with `alternates.languages` pointing at both locales.
 * English URLs stay unprefixed; Arabic lives under /ar.
 */
const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/solutions", priority: 0.9 },
  { path: "/solutions/lead-conversion", priority: 0.9 },
  { path: "/solutions/custom-software", priority: 0.8 },
  { path: "/solutions/automation-and-integrations", priority: 0.8 },
  { path: "/who-we-serve", priority: 0.8 },
  { path: "/pricing", priority: 0.8 },
  { path: "/pilot", priority: 0.8 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.7 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${siteConfig.url}${pathForLocale(route.path, locale)}`,
      lastModified,
      changeFrequency: (route.path === "/" ? "weekly" : "monthly") as
        | "weekly"
        | "monthly",
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((item) => [
            item,
            `${siteConfig.url}${pathForLocale(route.path, item)}`,
          ]),
        ),
      },
    })),
  );
}
