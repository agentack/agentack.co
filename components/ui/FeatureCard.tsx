import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type FeatureCardProps = {
  title: string;
  description: string;
  index?: string;
  icon?: ReactNode;
  className?: string;
};

export function FeatureCard({ title, description, index, icon, className }: FeatureCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-card border border-[var(--border)] bg-[var(--surface)] p-7",
        className,
      )}
    >
      {icon ? <div className="mb-5 text-[var(--gold)]">{icon}</div> : null}
      {index ? (
        <span className="text-caption font-semibold text-[var(--gold-text)]">{index}</span>
      ) : null}
      <h3 className="mt-1 text-h3 text-[var(--headline)]">{title}</h3>
      <p className="mt-3 text-small text-[var(--muted)]">{description}</p>
    </article>
  );
}
