import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  IBM_Plex_Sans_Arabic,
  Newsreader,
  Noto_Naskh_Arabic,
  Outfit,
} from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getContent } from "@/lib/content";
import {
  alternatesFor,
  defaultLocale,
  isLocale,
  localeConfig,
  locales,
  ogImage,
  pathForLocale,
} from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const content = getContent(locale);
  const config = localeConfig[locale];
  const home = content.pages.home.meta;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${home.title} | ${siteConfig.name}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: home.description,
    alternates: alternatesFor("/"),
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: home.title,
      description: home.description,
      url: pathForLocale("/", locale),
      locale: config.ogLocale,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: home.title,
      description: home.description,
      images: [ogImage.url],
    },
  };
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
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

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const content = getContent(locale);
  const config = localeConfig[locale];

  return (
    <html
      lang={config.htmlLang}
      dir={config.dir}
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
          {content.ui.skipToContent}
        </a>
        <Header
          locale={locale}
          homeHref={pathForLocale("/", locale)}
          nav={content.nav}
          cta={content.site.primaryCta}
          labels={{
            home: content.ui.homeLabel,
            primaryNav: content.ui.primaryNav,
            mobileNav: content.ui.mobileNav,
            openMenu: content.ui.openMenu,
            closeMenu: content.ui.closeMenu,
            switchToLight: content.ui.switchToLight,
            switchToDark: content.ui.switchToDark,
            languageSwitch: content.ui.languageSwitchAria,
            languageOther: content.ui.languageOther,
          }}
        />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer
          locale={locale}
          homeHref={pathForLocale("/", locale)}
          tagline={content.site.tagline}
          email={content.site.email}
          columns={content.footer.columns}
          labels={{
            home: content.ui.homeLabel,
            rights: content.ui.rights,
            privacy: content.ui.privacy,
            terms: content.ui.terms,
            contact: content.ui.contact,
            backToTop: content.ui.backToTop,
          }}
        />
      </body>
    </html>
  );
}
