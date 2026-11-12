"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";
import { ChevronDown } from "@/components/ui/icons";

export type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  /** Index open on first render. Use null for all closed. */
  defaultOpen?: number | null;
  className?: string;
};

export function Accordion({ items, defaultOpen = 0, className }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-[var(--border)] border-y border-[var(--border)]", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-[1.0625rem] font-semibold text-[var(--headline)] transition-colors duration-[var(--dur-fast)] hover:text-[var(--gold-text)]"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    "shrink-0 text-[var(--gold)] transition-transform duration-[var(--dur-base)] ease-[var(--ease-out)]",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6 pr-10 text-body text-[var(--muted)]"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
