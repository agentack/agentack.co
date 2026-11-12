import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/content";

const columns = [
  {
    name: "Solutions",
    links: [
      { label: "AI lead conversion", href: "/solutions/lead-conversion" },
      { label: "Real estate software", href: "/solutions/custom-software" },
      { label: "Automation & integrations", href: "/solutions/automation-and-integrations" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    name: "Who we serve",
    links: [
      { label: "Brokerages & agencies", href: "/who-we-serve#brokerages" },
      { label: "Developers", href: "/who-we-serve#developers" },
      { label: "Property managers", href: "/who-we-serve#property-managers" },
    ],
  },
  {
    name: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pilot programme", href: "/pilot" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--band)]">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link href="/" aria-label="Agentack home">
              <Logo />
            </Link>
            <p className="mt-4 max-w-[32ch] text-small text-[var(--muted)]">
              {site.tagline}
            </p>
            <p className="mt-6 text-small text-[var(--muted)]">
              <a
                href={`mailto:${site.email}`}
                className="hover:text-[var(--headline)]"
              >
                {site.email}
              </a>
              <br />
              <span className="text-caption">{site.location}</span>
            </p>
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
          <p>© 2026 Agentack. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="hover:text-[var(--headline)]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--headline)]">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-[var(--headline)]">
              Contact
            </Link>
            <a href="#main" className="hover:text-[var(--headline)]">
              Back to top
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
