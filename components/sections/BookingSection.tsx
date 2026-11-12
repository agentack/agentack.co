import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Cal.com booking section.
 *
 * Renders only when NEXT_PUBLIC_CALCOM_LINK is set, so the site never shows a
 * broken calendar. The link is a Cal.com path such as "agentack/discovery" —
 * the full URL is also accepted.
 */
function calcomPath(): string | null {
  const raw = process.env.NEXT_PUBLIC_CALCOM_LINK?.trim();
  if (!raw) return null;

  const path = raw
    .replace(/^https?:\/\/(www\.)?cal\.com\//i, "")
    .replace(/^\/+|\/+$/g, "");

  return path || null;
}

export function BookingSection() {
  const path = calcomPath();
  if (!path) return null;

  const publicUrl = `https://cal.com/${path}`;
  const embedUrl = `${publicUrl}?embed=true&layout=month_view`;

  return (
    <Section id="book" aria-labelledby="book-heading">
      <Container>
        <SectionHeading
          id="book-heading"
          eyebrow="Pick a time"
          title="Book a 30-minute discovery call."
          description="Choose a slot that suits you. We will map your current enquiry flow, the systems you use and where follow-up breaks — then tell you honestly whether we can help."
        />

        <div className="mt-10 overflow-hidden rounded-panel border border-[var(--border)] bg-[var(--surface)] p-2 md:p-3">
          <iframe
            src={embedUrl}
            title="Agentack discovery call booking calendar"
            loading="lazy"
            className="h-[720px] w-full rounded-card border-0 md:h-[760px]"
          />
        </div>

        <p className="mt-4 text-caption text-[var(--muted)]">
          Calendar not loading?{" "}
          <a
            href={publicUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[var(--headline)] underline underline-offset-4"
          >
            Open it in a new tab
          </a>
          , or{" "}
          <a
            href="#contact"
            className="font-medium text-[var(--headline)] underline underline-offset-4"
          >
            send a short brief
          </a>{" "}
          instead.
        </p>
      </Container>
    </Section>
  );
}
