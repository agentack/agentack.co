import { cn } from "@/lib/cn";

type ProcessStepProps = {
  index: string;
  title: string;
  description: string;
  className?: string;
};

export function ProcessStep({ index, title, description, className }: ProcessStepProps) {
  return (
    <li className={cn("relative flex flex-col", className)}>
      <div className="flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-pill border border-[var(--border)] bg-[var(--soft)] text-caption font-semibold text-[var(--headline)]">
          {index}
        </span>
        <span
          aria-hidden
          className="hidden h-px flex-1 bg-[var(--border)] md:block"
        />
      </div>
      <h3 className="mt-4 text-h3 text-[var(--headline)]">{title}</h3>
      <p className="mt-2 text-small text-[var(--muted)]">{description}</p>
    </li>
  );
}
