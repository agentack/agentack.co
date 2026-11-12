# Agentack

AI lead conversion systems and custom software for Gulf real estate.

Next.js (App Router) + TypeScript + Tailwind CSS v4. All copy lives in
`lib/content.ts`; all pages are composed from the components in `components/`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
npx tsc --noEmit # types
```

## Environment

Copy `.env.example` to `.env.local` and fill in what you need.

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Send contact form enquiries by email (recommended). |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries. Defaults to `contact@agentack.co`. |
| `CONTACT_FROM_EMAIL` | Verified Resend sender. |
| `HUBSPOT_PORTAL_ID`, `HUBSPOT_FORM_ID` | Optional: send enquiries into a HubSpot form instead of / as well as email. |
| `NEXT_PUBLIC_CALCOM_LINK` | Cal.com path (e.g. `agentack/discovery`). When set, the contact page shows the booking calendar. |

Without a delivery provider, `POST /api/contact` returns `503` with a message
pointing to the email address — it never fakes a successful submission.

Spam protection covers a honeypot field, a minimum completion time, a payload
size cap and a per-IP in-memory rate limit (8 per hour). Replace the in-memory
store with a shared one if traffic grows.

## Structure

```
app/                 routes, metadata, sitemap, robots, API
components/layout/   header, footer, container, section
components/sections/ page sections composed from UI primitives
components/ui/       buttons, cards, fields, icons, logo
lib/content.ts       source of truth for copy, pricing and FAQs
lib/contact-options  shared form option codes and labels
```

## Docs

- `WEBSITE-STRATEGY.md` — positioning, offer, SEO and 90-day plan
- `WEBSITE-CONTENT-FINAL.md` — page map, copy decisions, launch gaps
- `DISCOVERY-QUESTIONS.md` — the answered business brief

## Launch notes

- No invented clients, logos, testimonials, metrics or compliance claims.
- Arabic fonts and RTL rules are in place, but Arabic is not live. Add a
  language switch only when a native Gulf-Arabic reviewer is engaged.
- Pricing is indicative; the API and legal pages should be reviewed before
  launch.
