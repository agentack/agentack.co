import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";
import { pathForLocale, switchLocalePath, type Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
  homeHref: string;
  tagline: string;
  email: string;
  columns: { name: string; links: { label: string; href: string }[] }[];
  labels: {
    home: string;
    rights: string;
    privacy: string;
    terms: string;
    contact: string;
    backToTop: string;
  };
};

export function Footer({
  locale,
  homeHref,
  tagline,
  email,
  columns,
  labels,
}: FooterProps) {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--band)]">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link href={homeHref} aria-label={labels.home}>
              <Logo />
            </Link>
            <p className="mt-4 max-w-[32ch] text-small text-[var(--muted)]">
              {tagline}
            </p>
            <p className="mt-6 text-small text-[var(--muted)]">
              <a
                href={`mailto:${email}`}
                className="hover:text-[var(--headline)]"
              >
                {email}
              </a>
            </p>
            <Link
              href={switchLocalePath("/", locale === "en" ? "ar" : "en")}
              hrefLang={locale === "en" ? "ar" : "en"}
              lang={locale === "en" ? "ar" : "en"}
              className="mt-4 inline-block text-small font-semibold text-[var(--headline)] underline-offset-4 hover:underline"
            >
              {locale === "en" ? "العربية" : "English"}
            </Link>
          </div>

          {columns.map((column) => (
            <nav key={column.name} aria-label={column.name}>
              <h2 className="text-caption font-semibold uppercase tracking-[0.14em] text-[var(--gold-text)]">
                {column.name}
              </h2>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-small text-[var(--muted)] transition-colors duration-[var(--dur-fast)] hover:text-[var(--headline)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-[var(--border)] py-6 text-caption text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>{labels.rights}</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href={pathForLocale("/privacy", locale)}
              className="hover:text-[var(--headline)]"
            >
              {labels.privacy}
            </Link>
            <Link
              href={pathForLocale("/terms", locale)}
              className="hover:text-[var(--headline)]"
            >
              {labels.terms}
            </Link>
            <Link
              href={pathForLocale("/contact", locale)}
              className="hover:text-[var(--headline)]"
            >
              {labels.contact}
            </Link>
            <a href="#main" className="hover:text-[var(--headline)]">
              {labels.backToTop}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
