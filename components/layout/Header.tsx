"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Close, Menu } from "@/components/ui/icons";
import { switchLocalePath, type Locale } from "@/lib/i18n";

type HeaderProps = {
  locale: Locale;
  homeHref: string;
  nav: { label: string; href: string }[];
  cta: { label: string; href: string };
  labels: {
    home: string;
    primaryNav: string;
    mobileNav: string;
    openMenu: string;
    closeMenu: string;
    switchToLight: string;
    switchToDark: string;
    languageSwitch: string;
    languageOther: string;
  };
};

export function Header({ locale, homeHref, nav, cta, labels }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const current = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  const otherLocale: Locale = locale === "en" ? "ar" : "en";
  const otherHref = switchLocalePath(current, otherLocale);

  function isActive(href: string) {
    if (href === homeHref) return current === homeHref;
    return current === href || current.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]">
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-6">
          <Link href={homeHref} aria-label={labels.home} className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label={labels.primaryNav} className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={
                  isActive(item.href)
                    ? "text-small font-semibold text-[var(--headline)]"
                    : "text-small font-medium text-[var(--ink)] transition-colors duration-[var(--dur-fast)] hover:text-[var(--gold-text)]"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={otherHref}
              hrefLang={otherLocale}
              lang={otherLocale}
              aria-label={labels.languageSwitch}
              className="hidden rounded-control px-3 py-2 text-small font-semibold text-[var(--headline)] transition-colors duration-[var(--dur-fast)] hover:bg-[var(--soft)] sm:inline-flex"
            >
              {labels.languageOther}
            </Link>

            <ThemeToggle
              lightLabel={labels.switchToLight}
              darkLabel={labels.switchToDark}
            />

            <Button href={cta.href} size="sm" className="hidden md:inline-flex">
              {cta.label}
            </Button>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? labels.closeMenu : labels.openMenu}
              className="grid size-11 place-items-center rounded-control border border-[var(--border)] text-[var(--headline)] lg:hidden"
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-[var(--border)] bg-[var(--surface)] lg:hidden">
          <Container>
            <nav aria-label={labels.mobileNav} className="flex flex-col py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="border-b border-[var(--border)] py-4 text-body font-medium text-[var(--headline)] last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={otherHref}
                hrefLang={otherLocale}
                lang={otherLocale}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--border)] py-4 text-body font-medium text-[var(--headline)]"
              >
                {labels.languageOther}
              </Link>
              <Button
                href={cta.href}
                fullWidth
                className="mt-4"
                onClick={() => setOpen(false)}
              >
                {cta.label}
              </Button>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
