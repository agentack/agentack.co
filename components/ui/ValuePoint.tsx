import { cn } from "@/lib/cn";

type ValuePointProps = {
  index: string;
  title: string;
  description: string;
  className?: string;
};

export function ValuePoint({ index, title, description, className }: ValuePointProps) {
  return (
    <div
      className={cn(
        "border-t border-[var(--border)] pt-6",
        className,
      )}
    >
      <span className="text-caption font-semibold text-[var(--gold-text)]">{index}</span>
      <h3 className="mt-2 text-h3 text-[var(--headline)]">{title}</h3>
      <p className="mt-2 text-small text-[var(--muted)]">{description}</p>
    </div>
  );
}
