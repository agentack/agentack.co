import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowRight } from "@/components/ui/icons";

type NumberedCardProps = {
  index: string;
  title: string;
  description: string;
  href?: string;
  actionLabel?: string;
  className?: string;
};

export function NumberedCard({
  index,
  title,
  description,
  href,
  actionLabel = "Explore solution",
  className,
}: NumberedCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-card border border-[var(--border)] bg-[var(--surface)] p-7 transition-colors duration-[var(--dur-base)] hover:border-[var(--headline)]",
        className,
      )}
    >
      <span className="font-display text-[2rem] leading-none text-[var(--gold)] tabular-nums">
        {index}
      </span>
      <h3 className="mt-5 text-h3 text-[var(--headline)]">{title}</h3>
      <p className="mt-3 text-small text-[var(--muted)]">{description}</p>
      {href ? (
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-2 pt-6 text-small font-semibold text-[var(--headline)] transition-colors duration-[var(--dur-fast)] hover:text-[var(--gold-text)]"
        >
          {actionLabel}
          <ArrowRight className="transition-transform duration-[var(--dur-base)] group-hover:translate-x-1 rtl:rotate-180" />
        </Link>
      ) : null}
    </article>
  );
}
