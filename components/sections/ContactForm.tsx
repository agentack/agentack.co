"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Field";
import { Check } from "@/components/ui/icons";
import { budgets, interests, markets, roles } from "@/lib/contact-options";

type ContactFormProps = {
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

export function ContactForm({ confirmation }: ContactFormProps) {
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

    const form = event.currentTarget;
    const data = new FormData(form);

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
      setMessage(
        result.message ?? "Something went wrong. Please try again or email us directly.",
      );

      if (result.errors) {
        const first = fieldOrder.find((field) => result.errors?.[field]);
        if (first) {
          const element = form.elements.namedItem(first);
          if (element instanceof HTMLElement) element.focus();
        }
      }
    } catch {
      setStatus("error");
      setMessage("We could not reach the server. Please try again or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-panel border border-[var(--border)] bg-[var(--surface)] p-8">
        <span className="grid size-12 place-items-center rounded-pill bg-[var(--soft)] text-[var(--gold-text)]">
          <Check />
        </span>
        <h3 className="mt-6 text-h3 text-[var(--headline)]">Message received.</h3>
        <p className="mt-3 max-w-[46ch] text-small text-[var(--muted)]">{confirmation}</p>
        <p className="mt-4 text-small text-[var(--muted)]">
          If it is urgent, email us directly and we will pick it up from there.
        </p>
        <Button type="button" variant="secondary" className="mt-8" onClick={reset}>
          Send another enquiry
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
        <label htmlFor="agentack_hp">Leave this field empty</label>
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
          label="Full name"
          name="name"
          autoComplete="name"
          required
          error={errors.name}
          disabled={busy}
        />
        <Input
          label="Work email"
          name="email"
          type="email"
          autoComplete="email"
          required
          error={errors.email}
          disabled={busy}
        />
        <Input
          label="Company name"
          name="company"
          autoComplete="organization"
          required
          error={errors.company}
          disabled={busy}
        />
        <Input
          label="Website"
          name="website"
          type="url"
          autoComplete="url"
          placeholder="https://"
          hint="Optional."
          disabled={busy}
        />
        <Select
          label="Your role"
          name="role"
          options={roles}
          placeholder="Select a role"
          error={errors.role}
          disabled={busy}
        />
        <Select
          label="Main market"
          name="market"
          options={markets}
          placeholder="Select a market"
          error={errors.market}
          disabled={busy}
        />
        <Select
          label="What do you want to improve?"
          name="interest"
          options={interests}
          placeholder="Select an area"
          error={errors.interest}
          disabled={busy}
        />
        <Select
          label="Indicative budget"
          name="budget"
          options={budgets}
          placeholder="Select a range"
          hint="Helps us suggest the right starting point."
          error={errors.budget}
          disabled={busy}
        />
      </div>

      <div className="mt-5">
        <Textarea
          label="Where does the flow break today?"
          name="message"
          hint="Two or three lines is plenty."
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
          I agree to be contacted about this request.
          {errors.consent ? (
            <span className="mt-1 block text-caption font-medium text-[var(--error)]">
              {errors.consent}
            </span>
          ) : null}
        </span>
      </label>

      <Button type="submit" size="lg" fullWidth className="mt-6" disabled={busy}>
        {busy ? "Sending…" : "Request a discovery call"}
      </Button>
      <p className="mt-3 text-center text-caption text-[var(--muted)]" aria-live="polite">
        We reply within one business day.
      </p>
    </form>
  );
}
