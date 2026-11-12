import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Off-white section band, used to separate blocks without rules. */
  tone?: "canvas" | "band" | "panel";
  size?: "sm" | "md" | "lg";
  "aria-labelledby"?: string;
};

const tones = {
  canvas: "",
  band: "bg-[var(--band)]",
  panel: "bg-[var(--brand-panel)] text-[var(--on-panel)]",
};

const sizes = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
};

export function Section({
  children,
  className,
  id,
  tone = "canvas",
  size = "md",
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(tones[tone], sizes[size], className)}
      {...rest}
    >
      {children}
    </section>
  );
}
