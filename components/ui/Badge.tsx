import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BadgeTone = "new" | "booked" | "closed";

type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
};

const tones: Record<BadgeTone, { chip: string; dot: string }> = {
  new: {
    chip: "bg-[var(--soft)] text-[var(--headline)] border-[var(--border)]",
    dot: "bg-[var(--gold)]",
  },
  booked: {
    chip: "bg-[var(--soft)] text-[var(--headline)] border-[var(--border)]",
    dot: "bg-[var(--headline)]",
  },
  closed: {
    chip: "bg-transparent text-[var(--muted)] border-[var(--border)]",
    dot: "bg-[var(--muted)]",
  },
};

export function Badge({ children, tone = "new", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill border px-3 py-1 text-caption font-medium",
        tones[tone].chip,
        className,
      )}
    >
      <span
        aria-hidden
        className={cn("size-1.5 rounded-pill", tones[tone].dot)}
      />
      {children}
    </span>
  );
}
