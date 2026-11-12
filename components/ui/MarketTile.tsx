import { cn } from "@/lib/cn";

type MarketTileProps = {
  market: string;
  line: string;
  className?: string;
};

export function MarketTile({ market, line, className }: MarketTileProps) {
  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-card border border-[var(--border)] bg-[var(--surface)] p-6",
        "before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-[var(--gold)] before:content-['']",
        className,
      )}
    >
      <p className="text-caption font-semibold uppercase tracking-[0.14em] text-[var(--gold-text)]">
        Market
      </p>
      <h3 className="mt-3 text-h3 text-[var(--headline)]">{market}</h3>
      <p className="mt-2 text-small text-[var(--muted)]">{line}</p>
    </div>
  );
}
