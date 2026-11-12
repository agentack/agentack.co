import { Container } from "@/components/layout/Container";

type MarketStripProps = {
  label: string;
  markets: string[];
};

export function MarketStrip({ label, markets }: MarketStripProps) {
  return (
    <div id="markets" className="border-b border-[var(--border)] bg-[var(--band)]">
      <Container>
        <div className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-caption font-semibold uppercase tracking-[0.14em] text-[var(--gold-text)]">
            {label}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {markets.map((market) => (
              <li
                key={market}
                className="text-small font-medium text-[var(--headline)]"
              >
                {market}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
