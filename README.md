# Agentack

AI lead conversion systems and custom software for Gulf real estate.

Next.js (App Router) + TypeScript + Tailwind CSS v4. Copy lives in
`lib/content/en.ts` and `lib/content/ar.ts`; pages are composed from the
components in `components/`.

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

## Localisation

English is the default locale and keeps unprefixed URLs. Arabic lives under
`/ar`. Both locales are built from the same components and the same typed
content shape, so a missing Arabic key fails type-checking.

| URL | Locale |
|---|---|
| `/`, `/solutions`, `/pricing` | English |
| `/ar`, `/ar/solutions`, `/ar/pricing` | Arabic |
| `/en/...` | 308 redirect to the unprefixed English URL |

`proxy.ts` rewrites unprefixed paths to the internal `/en` route and passes
`/ar` through. Pages under `app/[locale]/` use `getContent(locale)` for copy and
`pageMetadata()` for canonical and hreflang tags. The sitemap lists both locales
with alternate links.

Arabic copy must be reviewed by a qualified native Gulf-Arabic reviewer before
launch. Do not present the Arabic edition as reviewed until that has happened.

## Brand assets

| File | Use |
|---|---|
| `public/agentack-logo-mark.svg` | Gold mark, extracted from `agentack new logo.ai` (472 filled paths, single colour `#cfa94e`). Used by the header and footer lockup. |
| `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico` | Tab, iOS and legacy icons: the mark on brand green. |
| `public/icon-192.png`, `public/icon-maskable-512.png` | PWA icons referenced by `app/manifest.ts`. |
| `public/og.png` | 1200×630 social card, referenced from `lib/i18n.ts`. |

The wordmark is set in Newsreader; the mark is the only graphical element in
the identity. Regenerate the raster assets from the SVG if the mark changes.

## Structure

```
app/[locale]/        routes for both locales, metadata
app/api/contact/     form endpoint
app/global-not-found routing-level 404 (root layout lives under [locale])
app/manifest.ts      PWA manifest and icon list
components/layout/   header, footer, container, section
components/sections/ page sections composed from UI primitives
components/ui/       buttons, cards, fields, icons, logo
lib/content/         en.ts, ar.ts and the typed dictionary
lib/i18n.ts          locale config, path/hreflang helpers, page metadata, OG image
lib/contact-options  shared form option codes and labels
proxy.ts             locale rewrite and redirect rules
```

## Docs

- `WEBSITE-STRATEGY.md` — positioning, offer, SEO and 90-day plan
- `WEBSITE-CONTENT-FINAL.md` — page map, copy decisions, launch gaps
- `DISCOVERY-QUESTIONS.md` — the answered business brief

## Launch notes

- No invented clients, logos, testimonials, metrics or compliance claims.
- Arabic copy is complete but pending review by a qualified native Gulf-Arabic
  reviewer. Run a full pass over `lib/content/ar.ts` before launch.
- Pricing is indicative; the API and legal pages should be reviewed before
  launch.
