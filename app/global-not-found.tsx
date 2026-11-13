import type { Metadata } from "next";
import Link from "next/link";
import {
  IBM_Plex_Sans_Arabic,
  Newsreader,
  Noto_Naskh_Arabic,
  Outfit,
} from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

/**
 * Global 404.
 *
 * The root layout lives under `app/[locale]`, so unmatched URLs cannot be
 * composed from a layout + not-found pair. Next.js handles this with the
 * experimental `global-not-found` convention (see `next.config.ts`).
 *
 * This file bypasses the normal layout, so it imports the stylesheet and fonts
 * itself and renders a full HTML document. Copy is bilingual because the URL
 * carries no locale information at this point.
 */

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-newsreader",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["500", "600", "700"],
  variable: "--font-noto-naskh",
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Page not found | Agentack",
  description: "This page does not exist. Return to the Agentack home page.",
  robots: { index: false, follow: false },
};

/** Applies the stored theme before paint so the 404 matches the rest of the site. */
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=(s==='dark'||s==='light')?s:(d?'dark':'light');if(t==='dark'){document.documentElement.setAttribute('data-theme','dark')}else if(s){document.documentElement.setAttribute('data-theme','light')}}catch(e){}})();`;

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${outfit.variable} ${notoNaskh.variable} ${ibmPlex.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--ink)]">
        <main id="main" className="flex-1">
          <section className="border-b border-[var(--border)] px-6 py-24 md:py-32">
            <div className="mx-auto w-full max-w-[720px]">
              <p className="eyebrow">404</p>
              <h1 className="mt-4 text-display text-[var(--headline)]">
                This page does not exist.
              </h1>
              <p className="mt-5 max-w-[46ch] text-body text-[var(--muted)]">
                The link may be old or mistyped. You can go back to the home page
                or see what we build.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-control bg-[var(--button-bg)] px-6 py-3 text-small font-semibold text-[var(--button-text)]"
                >
                  Back to home
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center rounded-control border border-[var(--border)] px-6 py-3 text-small font-semibold text-[var(--headline)]"
                >
                  See solutions
                </Link>
              </div>

              <div
                dir="rtl"
                lang="ar"
                className="mt-16 border-t border-[var(--border)] pt-10"
              >
                <h2 className="text-h2 text-[var(--headline)]">
                  هذه الصفحة غير موجودة.
                </h2>
                <p className="mt-4 max-w-[46ch] text-body text-[var(--muted)]">
                  قد يكون الرابط قديمًا أو غير صحيح. يمكنك العودة إلى الصفحة
                  الرئيسية أو الاطلاع على ما نبنيه.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/ar"
                    className="inline-flex items-center justify-center rounded-control bg-[var(--button-bg)] px-6 py-3 text-small font-semibold text-[var(--button-text)]"
                  >
                    العودة إلى الرئيسية
                  </Link>
                  <Link
                    href="/ar/solutions"
                    className="inline-flex items-center justify-center rounded-control border border-[var(--border)] px-6 py-3 text-small font-semibold text-[var(--headline)]"
                  >
                    الحلول
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
