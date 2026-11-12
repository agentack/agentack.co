import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** Narrower measure for long-form copy. */
  size?: "default" | "narrow";
};

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 md:px-8 lg:px-12",
        size === "default" ? "max-w-[1200px]" : "max-w-[760px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
