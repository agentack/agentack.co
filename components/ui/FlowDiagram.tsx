import { cn } from "@/lib/cn";
import { ArrowRight } from "@/components/ui/icons";

type FlowDiagramProps = {
  steps: string[];
  className?: string;
};

export function FlowDiagram({ steps, className }: FlowDiagramProps) {
  return (
    <ol
      className={cn(
        "flex flex-wrap items-center gap-3 text-small font-medium",
        className,
      )}
    >
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-3">
          <span className="rounded-control border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-[var(--headline)]">
            {step}
          </span>
          {index < steps.length - 1 ? (
            <ArrowRight className="text-[var(--gold)] rtl:rotate-180" />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
