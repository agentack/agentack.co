import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
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

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: route.path === "" ? "weekly" : "monthly",
    priority: route.priority,
  }));
}
