"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Close, Menu } from "@/components/ui/icons";
import { nav, site } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]">
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-6">
          <Link href="/" aria-label="Agentack home" className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
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
            <ThemeToggle />

            <Button href={site.primaryCta.href} size="sm" className="hidden md:inline-flex">
              {site.primaryCta.label}
            </Button>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
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
            <nav aria-label="Mobile" className="flex flex-col py-4">
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
              <Button
                href={site.primaryCta.href}
                fullWidth
                className="mt-4"
                onClick={() => setOpen(false)}
              >
                {site.primaryCta.label}
              </Button>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
