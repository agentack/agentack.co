import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  /** Hide the wordmark and render the mark only. */
  markOnly?: boolean;
  /** Invert the wordmark for deep green panels. */
  onPanel?: boolean;
};

/**
 * Brand lockup: the gold mark plus the typographic wordmark.
 * The mark is a transparent PNG so it sits cleanly on light and dark surfaces.
 */
export function Logo({ className, markOnly = false, onPanel = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src="/agentack-logo-gold.png"
        alt={markOnly ? "Agentack" : ""}
        width={321}
        height={312}
        priority
        className="h-9 w-auto shrink-0"
      />
      {markOnly ? null : (
        <span
          dir="ltr"
          className={cn(
            "font-display text-[1.375rem] tracking-tight",
            onPanel ? "text-[var(--on-panel)]" : "text-[var(--headline)]",
          )}
        >
          Agentack
        </span>
      )}
    </span>
  );
}
