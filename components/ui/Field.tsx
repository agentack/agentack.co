import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/cn";

type FieldBase = {
  label: string;
  name: string;
  hint?: string;
  error?: string;
  required?: boolean;
};

const control =
  "w-full rounded-control border bg-[var(--surface)] px-4 text-body text-[var(--ink)] " +
  "placeholder:text-[var(--muted)] transition-colors duration-[var(--dur-fast)] " +
  "hover:border-[var(--muted)] disabled:opacity-40";

function fieldBorder(error?: string) {
  return error ? "border-[var(--error)]" : "border-[var(--border)]";
}

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: string;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-small font-medium text-[var(--headline)]"
    >
      {children}
      {required ? (
        <span aria-hidden className="ml-1 text-[var(--gold-text)]">
          *
        </span>
      ) : null}
    </label>
  );
}

function Footer({ hint, error, id }: { hint?: string; error?: string; id: string }) {
  if (error) {
    return (
      <p id={`${id}-error`} className="mt-2 text-caption font-medium text-[var(--error)]">
        {error}
      </p>
    );
  }
  if (hint) {
    return (
      <p id={`${id}-hint`} className="mt-2 text-caption text-[var(--muted)]">
        {hint}
      </p>
    );
  }
  return null;
}

type InputProps = FieldBase & Omit<InputHTMLAttributes<HTMLInputElement>, "name">;

export function Input({ label, name, hint, error, required, className, ...rest }: InputProps) {
  const id = rest.id ?? name;
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <input
        id={id}
        name={name}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(control, fieldBorder(error), "h-12", className)}
        {...rest}
      />
      <Footer hint={hint} error={error} id={id} />
    </div>
  );
}

type TextareaProps = FieldBase & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name">;

export function Textarea({ label, name, hint, error, required, className, ...rest }: TextareaProps) {
  const id = rest.id ?? name;
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <textarea
        id={id}
        name={name}
        required={required}
        rows={4}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(control, fieldBorder(error), "min-h-28 py-3", className)}
        {...rest}
      />
      <Footer hint={hint} error={error} id={id} />
    </div>
  );
}

type SelectProps = FieldBase &
  Omit<SelectHTMLAttributes<HTMLSelectElement>, "name"> & {
    options: { value: string; label: string }[];
    placeholder?: string;
  };

export function Select({
  label,
  name,
  hint,
  error,
  required,
  options,
  placeholder,
  className,
  ...rest
}: SelectProps) {
  const id = rest.id ?? name;
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <select
        id={id}
        name={name}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(control, fieldBorder(error), "h-12", className)}
        {...rest}
      >
        {placeholder ? (
          <option value="">{placeholder}</option>
        ) : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Footer hint={hint} error={error} id={id} />
    </div>
  );
}
