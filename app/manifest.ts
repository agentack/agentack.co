import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * PWA manifest. The site is a normal website; the manifest exists so the icon
 * and theme colour survive "add to home screen" on mobile.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description:
      "AI lead conversion systems and custom software for real estate.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f5f5f0",
    theme_color: "#103b2a",
    lang: "en",
    dir: "ltr",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
