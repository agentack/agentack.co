import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Right-aligned slot for a link or button on wide screens. */
  action?: ReactNode;
  align?: "start" | "center";
  onPanel?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "start",
  onPanel = false,
  as: Heading = "h2",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <div className={cn("max-w-[38ch]", align === "center" && "mx-auto")}>
        {eyebrow ? (
          <Eyebrow onPanel={onPanel} className="mb-4">
            {eyebrow}
          </Eyebrow>
        ) : null}
        <Heading
          id={id}
          className={cn(
            "text-h2",
            onPanel ? "text-[var(--on-panel)]" : "text-[var(--headline)]",
          )}
        >
          {title}
        </Heading>
        {description ? (
          <p
            className={cn(
              "mt-4 max-w-[62ch] text-body",
              onPanel ? "text-[var(--on-panel-muted)]" : "text-[var(--muted)]",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
