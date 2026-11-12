import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** The 3px gold rule. Use it sparingly — gold is about 5% of a screen. */
  goldRule?: boolean;
  /** Deep green brand panel instead of a surface card. */
  panel?: boolean;
  as?: "div" | "article" | "li";
};

export function Card({
  children,
  className,
  goldRule = false,
  panel = false,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-card border p-7",
        panel
          ? "border-[var(--border)] bg-[var(--brand-panel)] text-[var(--on-panel)]"
          : "border-[var(--border)] bg-[var(--surface)]",
        goldRule &&
          "before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-[var(--gold)] before:content-['']",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
