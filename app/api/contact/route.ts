import { formMessages, type FormMessages } from "@/lib/form-messages";
import {
  budgets,
  interests,
  isOption,
  labelFor,
  markets,
  roles,
} from "@/lib/contact-options";
import { isLocale, pathForLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

/**
 * Contact form endpoint.
 *
 * Delivery is provider-agnostic: set RESEND_API_KEY and/or the HubSpot form
 * credentials. Without a provider the route fails loudly instead of pretending
 * the enquiry was delivered.
 *
 * Spam protection: hidden honeypot field, minimum completion time, payload
 * size limit and a per-IP in-memory rate limit. The rate limit is per server
 * instance — enough for a low-volume site, replace with a shared store if
 * traffic grows.
 */

const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT_MAX = 8;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const MIN_FILL_MS = 2_000;

const attempts = new Map<string, number[]>();

type FieldErrors = Record<string, string>;

type Contact = {
  name: string;
  email: string;
  company: string;
  website: string;
  role: string;
  market: string;
  interest: string;
  budget: string;
  message: string;
  locale: "en" | "ar";
};

function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    attempts.set(ip, recent);
    return true;
  }

  recent.push(now);
  attempts.set(ip, recent);

  // Keep the map from growing without bound on long-running instances.
  if (attempts.size > 5_000) {
    for (const [key, times] of attempts) {
      if (times.every((time) => now - time >= RATE_LIMIT_WINDOW_MS)) {
        attempts.delete(key);
      }
    }
  }

  return false;
}

function stringValue(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function readContact(
  body: Record<string, unknown>,
  messages: FormMessages,
): {
  contact: Contact;
  errors: FieldErrors;
} {
  const rawLocale = stringValue(body.locale, 8);
  const locale: Contact["locale"] = isLocale(rawLocale) ? rawLocale : "en";

  const contact: Contact = {
    name: stringValue(body.name, 120),
    email: stringValue(body.email, 200).toLowerCase(),
    company: stringValue(body.company, 200),
    website: stringValue(body.website, 300),
    role: stringValue(body.role, 40),
    market: stringValue(body.market, 40),
    interest: stringValue(body.interest, 40),
    budget: stringValue(body.budget, 40),
    message: stringValue(body.message, 4_000),
    locale,
  };

  const errors: FieldErrors = {};

  if (contact.name.length < 2) {
    errors.name = messages.name;
  }
  if (!emailPattern.test(contact.email)) {
    errors.email = messages.email;
  }
  if (contact.company.length < 2) {
    errors.company = messages.company;
  }
  if (contact.role && !isOption(roles, contact.role)) {
    errors.role = messages.role;
  }
  if (contact.market && !isOption(markets, contact.market)) {
    errors.market = messages.market;
  }
  if (contact.interest && !isOption(interests, contact.interest)) {
    errors.interest = messages.interest;
  }
  if (contact.budget && !isOption(budgets, contact.budget)) {
    errors.budget = messages.budget;
  }
  if (body.consent !== true && body.consent !== "true") {
    errors.consent = messages.consent;
  }

  return { contact, errors };
}

function plainText(contact: Contact): string {
  return [
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    `Company: ${contact.company}`,
    `Website: ${contact.website || "Not provided"}`,
    `Role: ${labelFor(roles, contact.role)}`,
    `Market: ${labelFor(markets, contact.market)}`,
    `Interest: ${labelFor(interests, contact.interest)}`,
    `Budget: ${labelFor(budgets, contact.budget)}`,
    `Language: ${contact.locale === "ar" ? "Arabic" : "English"}`,
    "",
    "Where the flow breaks:",
    contact.message || "Not provided",
    "",
    `Consent given: yes`,
  ].join("\n");
}

async function sendWithResend(contact: Contact): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Agentack website <website@agentack.co>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: contact.email,
      subject: `New enquiry — ${contact.company}`,
      text: plainText(contact),
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("Resend rejected the message", response.status, detail);
  }

  return response.ok;
}

async function sendWithHubSpot(contact: Contact): Promise<boolean> {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formId = process.env.HUBSPOT_FORM_ID;
  if (!portalId || !formId) return false;

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: [
          { name: "firstname", value: contact.name },
          { name: "email", value: contact.email },
          { name: "company", value: contact.company },
          { name: "website", value: contact.website },
          { name: "role", value: labelFor(roles, contact.role) },
          { name: "market", value: labelFor(markets, contact.market) },
          { name: "interest", value: labelFor(interests, contact.interest) },
          { name: "budget", value: labelFor(budgets, contact.budget) },
          { name: "message", value: contact.message },
        ],
        context: {
          pageUri: `${siteConfig.url}${pathForLocale("/contact", contact.locale)}`,
          pageName: "Contact",
        },
      }),
    },
  );

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("HubSpot rejected the submission", response.status, detail);
  }

  return response.ok;
}

function localeFromBody(body: unknown): FormMessages {
  if (!body || typeof body !== "object") return formMessages.en;
  const raw = (body as Record<string, unknown>).locale;
  return typeof raw === "string" && isLocale(raw)
    ? formMessages[raw]
    : formMessages.en;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const declaredLength = Number(request.headers.get("content-length") ?? "0");
  if (declaredLength > MAX_BODY_BYTES) {
    return Response.json(
      { ok: false, message: formMessages.en.tooLarge },
      { status: 413 },
    );
  }

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return Response.json(
        { ok: false, message: formMessages.en.tooLarge },
        { status: 413 },
      );
    }
    body = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return Response.json(
      { ok: false, message: formMessages.en.unreadable },
      { status: 400 },
    );
  }

  const messages = localeFromBody(body);

  // Honeypot: a real person never fills this field. Accept silently.
  if (typeof body.agentack_hp === "string" && body.agentack_hp.trim() !== "") {
    return Response.json({ ok: true });
  }

  // Minimum completion time catches naive bots without annoying humans.
  if (
    typeof body.startedAt === "number" &&
    Date.now() - body.startedAt < MIN_FILL_MS
  ) {
    return Response.json({ ok: true });
  }

  const { contact, errors } = readContact(body, messages);
  if (Object.keys(errors).length > 0) {
    return Response.json(
      { ok: false, message: messages.checkFields, errors },
      { status: 400 },
    );
  }

  // Only valid submissions count against the limit, so a person correcting a
  // typo does not lock themselves out.
  if (limited(ip)) {
    return Response.json(
      { ok: false, message: messages.tooMany },
      { status: 429 },
    );
  }

  const providers = [sendWithResend, sendWithHubSpot];
  const configured = providers.filter((provider) => {
    if (provider === sendWithResend) return Boolean(process.env.RESEND_API_KEY);
    return Boolean(
      process.env.HUBSPOT_PORTAL_ID && process.env.HUBSPOT_FORM_ID,
    );
  });

  if (configured.length === 0) {
    console.error(
      "Contact form has no delivery provider configured. Set RESEND_API_KEY or HUBSPOT_PORTAL_ID + HUBSPOT_FORM_ID.",
    );
    return Response.json(
      { ok: false, message: messages.notConfigured },
      { status: 503 },
    );
  }

  for (const provider of configured) {
    try {
      if (await provider(contact)) {
        return Response.json({ ok: true });
      }
    } catch (error) {
      console.error("Contact delivery failed", error);
    }
  }

  return Response.json(
    { ok: false, message: messages.deliveryFailed },
    { status: 502 },
  );
}
