import { Card } from "@/components/ui/Card";

type FactPanelProps = {
  title: string;
  facts: { label: string; value: string }[];
  note?: string;
};

/** Compact facts card for page heroes. */
export function FactPanel({ title, facts, note }: FactPanelProps) {
  return (
    <Card className="p-6 md:p-7">
      <p className="eyebrow">{title}</p>
      <dl className="mt-5 divide-y divide-[var(--border)]">
        {facts.map((fact) => (
          <div key={fact.label} className="grid gap-1 py-3 first:pt-0 last:pb-0">
            <dt className="text-caption font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
              {fact.label}
            </dt>
            <dd className="text-small font-medium text-[var(--headline)]">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
      {note ? (
        <p className="mt-5 border-t border-[var(--border)] pt-4 text-caption text-[var(--muted)]">
          {note}
        </p>
      ) : null}
    </Card>
  );
}
