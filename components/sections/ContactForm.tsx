"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Field";
import { Check } from "@/components/ui/icons";
import type { Option } from "@/lib/contact-options";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type ContactFormProps = {
  locale: Locale;
  form: SiteContent["form"];
  options: {
    roles: Option[];
    markets: Option[];
    interests: Option[];
    budgets: Option[];
  };
  /** Shown after a successful submission. */
  confirmation: string;
};

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = Record<string, string>;

const fieldOrder = [
  "name",
  "email",
  "company",
  "role",
  "market",
  "interest",
  "budget",
  "consent",
];

export function ContactForm({
  locale,
  form,
  options,
  confirmation,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef(0);

  // Recorded on the client so the server can spot instant bot submissions.
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  function reset() {
    formRef.current?.reset();
    setErrors({});
    setMessage("");
    setStatus("idle");
    startedAt.current = Date.now();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const formElement = event.currentTarget;
    const data = new FormData(formElement);

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      website: String(data.get("website") ?? ""),
      role: String(data.get("role") ?? ""),
      market: String(data.get("market") ?? ""),
      interest: String(data.get("interest") ?? ""),
      budget: String(data.get("budget") ?? ""),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
      locale,
      agentack_hp: String(data.get("agentack_hp") ?? ""),
      startedAt: startedAt.current,
    };

    setStatus("submitting");
    setMessage("");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
        errors?: FieldErrors;
      };

      if (response.ok && result.ok) {
        setStatus("success");
        return;
      }

      setStatus("error");
      setErrors(result.errors ?? {});
      setMessage(result.message ?? form.fallbackError);

      if (result.errors) {
        const first = fieldOrder.find((field) => result.errors?.[field]);
        if (first) {
          const element = formElement.elements.namedItem(first);
          if (element instanceof HTMLElement) element.focus();
        }
      }
    } catch {
      setStatus("error");
      setMessage(form.networkError);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-panel border border-[var(--border)] bg-[var(--surface)] p-8">
        <span className="grid size-12 place-items-center rounded-pill bg-[var(--soft)] text-[var(--gold-text)]">
          <Check />
        </span>
        <h3 className="mt-6 text-h3 text-[var(--headline)]">{form.successTitle}</h3>
        <p className="mt-3 max-w-[46ch] text-small text-[var(--muted)]">{confirmation}</p>
        <p className="mt-4 text-small text-[var(--muted)]">{form.successUrgent}</p>
        <Button type="button" variant="secondary" className="mt-8" onClick={reset}>
          {form.sendAnother}
        </Button>
      </div>
    );
  }

  const busy = status === "submitting";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-panel border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="agentack_hp">{form.honeypot}</label>
        <input
          id="agentack_hp"
          name="agentack_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && message ? (
        <div
          role="alert"
          className="mb-6 rounded-control border border-[var(--error)] bg-[var(--error-soft)] px-4 py-3 text-small text-[var(--error)]"
        >
          {message}
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label={form.name}
          name="name"
          autoComplete="name"
          required
          error={errors.name}
          disabled={busy}
        />
        <Input
          label={form.email}
          name="email"
          type="email"
          autoComplete="email"
          required
          error={errors.email}
          disabled={busy}
        />
        <Input
          label={form.company}
          name="company"
          autoComplete="organization"
          required
          error={errors.company}
          disabled={busy}
        />
        <Input
          label={form.website}
          name="website"
          type="url"
          autoComplete="url"
          placeholder="https://"
          hint={form.websiteHint}
          disabled={busy}
        />
        <Select
          label={form.role}
          name="role"
          options={options.roles}
          placeholder={form.rolePlaceholder}
          error={errors.role}
          disabled={busy}
        />
        <Select
          label={form.market}
          name="market"
          options={options.markets}
          placeholder={form.marketPlaceholder}
          error={errors.market}
          disabled={busy}
        />
        <Select
          label={form.interest}
          name="interest"
          options={options.interests}
          placeholder={form.interestPlaceholder}
          error={errors.interest}
          disabled={busy}
        />
        <Select
          label={form.budget}
          name="budget"
          options={options.budgets}
          placeholder={form.budgetPlaceholder}
          hint={form.budgetHint}
          error={errors.budget}
          disabled={busy}
        />
      </div>

      <div className="mt-5">
        <Textarea
          label={form.message}
          name="message"
          hint={form.messageHint}
          disabled={busy}
        />
      </div>

      <label className="mt-5 flex items-start gap-3 text-small text-[var(--muted)]">
        <input
          type="checkbox"
          name="consent"
          required
          disabled={busy}
          className="mt-1 size-4 rounded-[3px] border border-[var(--border)] accent-[var(--headline)]"
        />
        <span>
          {form.consent}
          {errors.consent ? (
            <span className="mt-1 block text-caption font-medium text-[var(--error)]">
              {errors.consent}
            </span>
          ) : null}
        </span>
      </label>

      <Button type="submit" size="lg" fullWidth className="mt-6" disabled={busy}>
        {busy ? form.sending : form.submit}
      </Button>
      <p className="mt-3 text-center text-caption text-[var(--muted)]" aria-live="polite">
        {form.replyNote}
      </p>
    </form>
  );
}
