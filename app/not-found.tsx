import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Section size="lg">
      <Container size="narrow">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-display text-[var(--headline)]">
          This page does not exist.
        </h1>
        <p className="mt-5 max-w-[46ch] text-body text-[var(--muted)]">
          The link may be old or mistyped. You can go back to the home page or see
          what we build.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/" size="lg">
            Back to home
          </Button>
          <Button href="/solutions" size="lg" variant="secondary">
            See solutions
          </Button>
        </div>
      </Container>
    </Section>
  );
}
