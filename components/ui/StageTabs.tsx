"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export type Stage = {
  label: string;
  title: string;
  description: string;
};

type StageTabsProps = {
  stages: Stage[];
  className?: string;
};

export function StageTabs({ stages, className }: StageTabsProps) {
  const [active, setActive] = useState(0);
  const baseId = useId();

  return (
    <div className={cn("grid gap-8 md:grid-cols-[280px_1fr]", className)}>
      <div
        role="tablist"
        aria-label="Pipeline stages"
        aria-orientation="vertical"
        className="flex flex-col gap-2"
      >
        {stages.map((stage, index) => {
          const selected = index === active;
          return (
            <button
              key={stage.label}
              id={`${baseId}-tab-${index}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${index}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                  event.preventDefault();
                  setActive((active + 1) % stages.length);
                }
                if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                  event.preventDefault();
                  setActive((active - 1 + stages.length) % stages.length);
                }
              }}
              className={cn(
                "flex items-center gap-4 rounded-control border px-5 py-4 text-left text-small font-semibold transition-colors duration-[var(--dur-fast)]",
                selected
                  ? "border-[var(--headline)] bg-[var(--soft)] text-[var(--headline)]"
                  : "border-[var(--border)] text-[var(--muted)] hover:bg-[var(--soft)] hover:text-[var(--headline)]",
              )}
            >
              <span
                className={cn(
                  "grid size-7 shrink-0 place-items-center rounded-pill border text-caption",
                  selected
                    ? "border-[var(--gold)] text-[var(--gold-text)]"
                    : "border-[var(--border)] text-[var(--muted)]",
                )}
              >
                {index + 1}
              </span>
              {stage.label}
            </button>
          );
        })}
      </div>

      {stages.map((stage, index) => (
        <div
          key={stage.title}
          id={`${baseId}-panel-${index}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${index}`}
          hidden={index !== active}
          tabIndex={0}
          className="rounded-panel border border-[var(--border)] bg-[var(--surface)] p-8"
        >
          <p className="eyebrow">Stage {String(index + 1).padStart(2, "0")}</p>
          <h3 className="mt-3 text-h2 text-[var(--headline)]">{stage.title}</h3>
          <p className="mt-4 max-w-[56ch] text-body text-[var(--muted)]">
            {stage.description}
          </p>
        </div>
      ))}
    </div>
  );
}
