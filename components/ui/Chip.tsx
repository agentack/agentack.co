import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ChipProps = {
  children: ReactNode;
  selected?: boolean;
  outline?: boolean;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Chip({
  children,
  selected = false,
  outline = false,
  className,
  ...rest
}: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={cn(
        "inline-flex h-11 items-center rounded-pill border px-5 text-small font-medium transition-colors duration-[var(--dur-fast)]",
        selected
          ? "border-[var(--headline)] bg-[var(--headline)] text-[var(--button-text)]"
          : outline
            ? "border-[var(--border)] bg-transparent text-[var(--ink)] hover:bg-[var(--soft)]"
            : "border-[var(--border)] bg-[var(--soft)] text-[var(--headline)] hover:border-[var(--headline)]",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
