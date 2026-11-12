import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  /** Use on deep green panels for the lighter gold. */
  onPanel?: boolean;
  className?: string;
};

export function Eyebrow({ children, onPanel = false, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "eyebrow",
        onPanel && "text-[var(--gold-on-green)]",
        className,
      )}
    >
      {children}
    </p>
  );
}
