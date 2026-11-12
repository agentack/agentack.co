import type { Metadata } from "next";
import {
  IBM_Plex_Sans_Arabic,
  Newsreader,
  Noto_Naskh_Arabic,
  Outfit,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/content";

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
  metadataBase: new URL(site.url),
  title: {
    default: "AI lead conversion systems for Gulf real estate | Agentack",
    template: "%s | Agentack",
  },
  description:
    "Agentack builds AI lead conversion systems and custom software for brokerages and developers across the GCC. Capture, qualify and convert property enquiries.",
  openGraph: {
    type: "website",
    siteName: "Agentack",
    title: "AI lead conversion systems for Gulf real estate",
    description:
      "AI lead conversion systems and custom software for brokerages and developers across the GCC.",
    url: site.url,
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI lead conversion systems for Gulf real estate",
    description:
      "AI lead conversion systems and custom software for brokerages and developers across the GCC.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.email,
  description:
    "AI lead conversion systems and custom software for real estate businesses across the GCC.",
  areaServed: [
    "United Arab Emirates",
    "Saudi Arabia",
    "Qatar",
    "Kuwait",
    "Bahrain",
    "Oman",
  ],
};

/** Sets the theme before paint so there is no flash. */
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=(s==='dark'||s==='light')?s:(d?'dark':'light');if(t==='dark'){document.documentElement.setAttribute('data-theme','dark')}else if(s){document.documentElement.setAttribute('data-theme','light')}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${outfit.variable} ${notoNaskh.variable} ${ibmPlex.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only rounded-control bg-headline px-4 py-2 text-button-text focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
