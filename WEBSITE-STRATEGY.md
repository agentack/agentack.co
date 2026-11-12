# Agentack — Positioning, Website & Conversion Strategy

**Version:** 2.0  
**Date:** 12 November 2026  
**Status:** Decisions locked from the discovery brief. The site copy lives in `lib/content.ts`; the page blueprint lives in `WEBSITE-CONTENT-FINAL.md`.

---

## 1. The position

### 1.1 What changed

Agentack is not positioned as a general AI agency, a lead-generation agency, or a generic software house. It is a **specialist real estate technology and AI engineering partner** — with one commercial wedge and a broader engineering ladder behind it.

> **For established brokerages and developers in the Gulf, Agentack builds AI lead conversion systems and custom software that turn property enquiries into qualified, owned opportunities — with a written scope and a measured pilot before you commit.**

### 1.2 Category and lines

| Use | Line |
|---|---|
| **Category** | AI lead conversion systems and custom software for real estate |
| **Wedge** | AI-powered real estate lead conversion |
| **Descriptor** | AI and software for real estate lead conversion |
| **Homepage H1** | Turn property enquiries into booked viewings. |
| **Primary CTA** | Book a discovery call |
| **Secondary CTA** | See what we build |
| **Arabic descriptor (later)** | وكلاء ذكاء اصطناعي وبرمجيات لتحويل استفسارات العقارات |

### 1.3 Messaging hierarchy

1. **Outcome** — more of the leads you already pay for become viewings.
2. **Mechanism** — capture, qualify, route, book, follow up.
3. **Depth** — custom software and integrations behind the wedge.
4. **Risk reversal** — free discovery, paid assessment, 2–4 week pilot, written scope.
5. **CTA** — book a discovery call.

### 1.4 The enemy

Not a competitor. The problem:

- The 11pm enquiry answered at 10am.
- The portal lead nobody owns.
- The second and third follow-up that never happen.
- The handover that arrives as a screenshot with no context.
- The “AI chatbot” that answers but cannot qualify, route or book.

### 1.5 What the visitor must believe

| Pillar | What must feel true |
|---|---|
| Speed | Enquiries get a first response immediately. |
| Qualification | The system asks the questions a good agent asks. |
| Ownership | Every lead has a named owner and a next action. |
| Booking | A viewing lands in a calendar, not a to-do list. |
| Handover | The agent receives context, not a transcript. |
| Control | Rules, guardrails, escalation and human judgement stay. |
| Engineering | The team can build the software around the flow. |
| Commercial clarity | A written scope, price and acceptance criteria. |

---

## 2. Buyers and focus

### 2.1 ICP priority

| Priority | ICP | Why | Entry offer |
|---|---|---|---|
| **1** | **Brokerages & agencies** (5–200 agents), UAE first | Clear, urgent pain; high portal and WhatsApp volume; fast decisions | Lead conversion pilot |
| **2** | **Developers**, especially off-plan | Larger budgets, launch-day volume, multilingual buyers, complex sales ops | Launch enquiry system |
| **3** | **Property managers & leasing teams** | Recurring operational pain; sticky retainer | Tenant workflow |
| 4 | Individual landlords / investors | Low ticket, high support; only where a real portfolio need exists | Selective |

### 2.2 Sub-niches — depth, not a directory

Sub-niches are used inside pages to prove industry fluency. They are **not** separate thin pages.

| Sub-niche | Demonstrated reality | What we build |
|---|---|---|
| **Secondary & resale** | Portal leads, 11pm WhatsApp, multiple buyers per listing | Instant reply, qualification, viewing booking, agent context |
| **Off-plan & launches** | Launch-day volume, payment-plan questions, floor plans, language switching | Qualification by unit, budget, payment plan and timeline; showroom booking |
| **Leasing & property management** | Tenant requests, renewals, maintenance triage, owner updates | Request capture, routing, owner reporting |
| **Luxury & prime** | Discretion, private viewings, relationship-led | Quiet qualification, relationship-manager handover, anti-spam guardrails |
| **Commercial & mixed-use** | Longer cycles, requirement matching, site visits | Requirement capture, site-visit scheduling, CRM hygiene |

Short-term rentals, owners associations and facilities management are roadmap items, handled case by case.

### 2.3 The buyer

- **Primary signer:** founder, CEO, managing director.
- **Champion:** head of sales, sales director, operations.
- **Secondary stakeholders:** marketing, IT/CTO, procurement in larger groups.
- **Sales cycle target:** 2–6 weeks for a pilot.

---

## 3. Offer architecture

```
ENTRY     Free discovery (30 min)          → map the flow, decide fit
ASSESS    Technical assessment $250–$500   → written scope, architecture, price
PROVE     Pilot from $750, 2–4 weeks       → one workflow on real enquiries
BUILD     Production $3,000–$10,000+       → multi-channel, CRM, dashboards
SUPPORT   $300–$1,500/month, 3-month min   → monitoring, fixes, optimisation
```

### 3.1 Productised capabilities

| Capability | What it is | Buyer question |
|---|---|---|
| **AI lead conversion** | Capture, qualify, route, book and follow up | “How do I stop losing leads?” |
| **Real estate software** | CRM, portals, dashboards, internal tools, SaaS | “How do I replace spreadsheets?” |
| **Automation & integrations** | WhatsApp, CRM, calendar, portal and internal connections | “Will it work with my systems?” |

### 3.2 Commercial rules

- Assessment fee credited toward implementation if the client proceeds.
- Small projects: 50% upfront, 50% on delivery.
- Larger projects: 50% upfront, 30% at milestone, 20% before handover.
- Retainers paid monthly in advance; three-month minimum.
- Quoted in USD; AED and SAR available.
- Third-party API, cloud, messaging and infrastructure costs billed separately.
- No guarantee of revenue, conversion, sales or rankings.

### 3.3 What we refuse

- Unrealistic timelines or unclear requirements.
- Unpaid speculative development.
- Work where the budget cannot cover the required engineering.
- Claims of compliance, certification or data residency that cannot be verified.
- Brittle scraping sold as an “integration”.

---

## 4. Site architecture

### 4.1 Built now

| Route | Job |
|---|---|
| `/` | Position, prove capability, route |
| `/solutions` | Show the three capabilities |
| `/solutions/lead-conversion` | Sell the wedge |
| `/solutions/custom-software` | Protect the broad software claim |
| `/solutions/automation-and-integrations` | Remove the integration objection |
| `/who-we-serve` | Self-identification by ICP |
| `/pricing` | Qualify and build trust |
| `/pilot` | Reduce risk and sell the entry offer |
| `/about` | Trust without invented team identities |
| `/contact` | Convert |
| `/privacy`, `/terms` | Legal trust |
| `not-found`, `sitemap.xml`, `robots.txt` | Polish and technical SEO |

### 4.2 Deliberately deferred

| Page | Why it waits |
|---|---|
| `/results` + case study | Needs a real pilot and permission |
| `/insights` | Needs original content, not a placeholder |
| `/glossary` | Useful for GEO, but only once the core site is indexed |
| Market pages (Dubai, Riyadh, Doha) | Only with unique local proof |
| Comparison pages | Needs tested, honest comparisons |
| ROI calculator | Needs assumptions you are willing to defend |
| Security & compliance | Only when practices and documentation exist |
| Careers / partners | Not a launch priority |

### 4.3 Navigation

`Solutions · Who we serve · Pricing · Company` + **Book a discovery call**.

No language switch until Arabic is real. No “Results” in the nav until results exist.

---

## 5. Home page blueprint

The current home page is built in this order:

| # | Section | Job |
|---|---|---|
| 1 | **Hero** | Outcome, audience, CTA, product visual |
| 2 | **Market strip** | GCC credibility without fake logos |
| 3 | **Where deals leak** | Agitate the real problem |
| 4 | **Flagship** | Show the lead conversion system and flow |
| 5 | **What we do** | Three capabilities, one clear ladder |
| 6 | **Who we serve** | Self-identification |
| 7 | **Specialisms** | Prove industry fluency through operational detail |
| 8 | **How we work** | Discovery → assessment → pilot → production |
| 9 | **Proof, honestly** | Demo, architecture, pilot report, handover |
| 10 | **Pilot** | Price, duration, criteria, low risk |
| 11 | **Integrations** | Remove the “will it work with X?” objection |
| 12 | **FAQ** | Handle the real objections, including “no clients yet” |
| 13 | **Final CTA** | Book a discovery call |

### 5.1 Section rules

- One primary CTA label across the whole site.
- Every section earns its place by building belief or removing friction.
- No carousel. No autoplay. No stock skylines, handshakes, robots or glowing AI brains.
- Show the product: chat threads, routing, booking, dashboards.
- Real names only in the integrations strip, with the access caveat.

---

## 6. Conversion system

### 6.1 The five-second test

Above the fold, a visitor must know:

1. What is this? AI lead conversion and software for real estate.
2. Who is it for? Brokerages and developers in the GCC.
3. What outcome? More enquiries converted into viewings.
4. Why believe it? A working system, a clear process and published pricing.
5. What do I do? Book a discovery call.

### 6.2 CTA discipline

- Primary label everywhere: **Book a discovery call**.
- Secondary is lower commitment: **See what we build**, **See pricing**, **See the pilot**.
- Microcopy under CTAs: *No deck. No pressure. A working session, not a sales pitch.*
- Sticky header CTA on desktop; full-width CTA in the mobile menu.
- Repeat the primary CTA every two screens.

### 6.3 Friction removal

- Form: name, work email, company, website, role, market, interest, budget, message, consent.
- Offer a calendar as the primary path once Cal.com is connected.
- Show the response promise: one business day.
- Show what happens next in three steps.
- Do not ask for a phone number.

### 6.4 Proof without clients

Until real results exist:

1. **Working demo** — a real lead-conversion flow, not a mock dashboard.
2. **Architecture** — show how the agent, CRM, portal and calendar connect.
3. **Pilot report** — a written result against criteria agreed upfront.
4. **Handover** — source, documentation and deployment configuration.
5. **Original research** — e.g. a Gulf brokerage response-time audit.
6. **Design partners** — a small number of founding clients at a reduced rate in exchange for a measured case study.

Never invent testimonials, logos, statistics or “trusted by”. Gulf buyers network heavily; one fake claim travels faster than the site.

### 6.5 Visual rules

**Do:** flat surfaces, thin borders, generous whitespace, one gold accent per screen, real product visuals, faces when they are real, subtle motion (120–320ms).

**Don't:** generic skylines, handshakes, robot hands, purple AI gradients, fake dashboards with meaningless charts, more than one primary CTA per screen, autoplay video with sound.

### 6.6 Arabic and RTL

- English-first at launch.
- RTL rules, Arabic fonts and layout are ready.
- No fake language toggle. The old visual-only switch was removed.
- Arabic launches only with a native Gulf-Arabic reviewer and rewritten (not translated) headlines.
- Add `hreflang` and localized metadata when it launches.

---

## 7. Typography — final

| Role | Font | Why |
|---|---|---|
| Display | **Newsreader** | Editorial, premium, variable, lining numerals |
| Body / UI | **Outfit** | Modern geometric sans, highly legible |
| Arabic display | **Noto Naskh Arabic** | Proper RTL headline face |
| Arabic body | **IBM Plex Sans Arabic** | Arabic body and UI |

Implementation:

- Loaded through `next/font/google` with `display: "swap"`.
- `font-variant-numeric: lining-nums` on headings.
- `tabular-nums` on numbered cards and prices.
- Georgia and DM Sans are retired.

---

## 8. SEO and GEO

### 8.1 One page per intent

- Home = brand + category.
- Solutions hub = category.
- Solution pages = specific service intent.
- Who-we-serve = audience intent.
- Pricing = commercial intent.
- Insights (later) = informational intent.
- Glossary/comparisons (later) = definition and decision intent.

### 8.2 Title formula

`{Outcome} for {Audience} in {Market} | Agentack`

Examples:

- AI Lead Conversion for Dubai Brokerages | Agentack
- Off-Plan Lead Management for Saudi Developers | Agentack
- Real Estate CRM Development for UAE Agencies | Agentack

### 8.3 Schema

- `Organization` sitewide (implemented).
- `Service` on solution pages (next).
- `FAQPage` on FAQ blocks (next).
- `BreadcrumbList` sitewide (next).
- `Article` and `Person` on insights (later).
- `Review`/`AggregateRating` only when real.

### 8.4 GEO

- Answer-first paragraphs.
- Definition and comparison blocks.
- Original statistics with dates and methodology.
- Named author entity once the founder is public.
- Consistent entity data across the web.
- `llms.txt` and clean semantic HTML.
- Arabic content written for Arabic queries, not machine-translated.

---

## 9. Measurement

### 9.1 Primary conversions

1. Discovery call booked (calendar) — north star.
2. Form submit.
3. Email click.

### 9.2 Events

`cta_click`, `calendar_open`, `form_start`, `form_submit`, `email_click`, `pricing_view`, `faq_open`, `scroll_75`.

### 9.3 Targets

| Metric | Target |
|---|---|
| Visitor → enquiry | 2–5% |
| Enquiry → call held | 30–50% |
| Call → pilot | 20–30% |
| Pilot → production | 50%+ |
| Mobile LCP | < 2.0s |

---

## 10. 30 / 60 / 90 day plan

### Days 1–14 — put the foundation live

- Connect the form to HubSpot and add spam protection.
- Add the Cal.com booking link.
- Confirm `contact@agentack.co`.
- Add GA4 + GTM + consent and the event list.
- Replace the PNG logo with the vector.
- Record the first product demo.
- Publish privacy and terms after review.

### Days 15–30 — start conversations

- Build a 100-account target list of UAE brokerages.
- Prepare a one-page pilot brief and a short demo video.
- Run founder-led outreach and LinkedIn content.
- Publish the first original research piece or a teardown.
- Apply to relevant partner ecosystems only where real.

### Days 31–60 — prove the offer

- Run 2–3 pilots.
- Document every pilot against agreed criteria.
- Turn the first completed pilot into an anonymised case study.
- Add `/results` and one case study page.
- Refine pricing based on real conversations.

### Days 61–90 — compound

- Add `/insights` and two strong articles.
- Add the glossary and comparison pages.
- Consider Arabic with a native reviewer.
- Iterate on funnel data and heatmaps.
- Decide whether a micro-SaaS product earns its own lane.

---

## 11. The decisions that matter

1. **Lead with lead conversion.** Software and automation are the ladder, not the headline.
2. **Publish ranges.** They qualify buyers and signal confidence.
3. **Do not fake proof.** Show the demo, the architecture and the process.
4. **Make the discovery call the only primary CTA.**
5. **Keep the specialist focus.** “Real estate only” is the marketing position; engineering can stay flexible.
6. **Fix the typography and numerals.** Newsreader + Outfit, lining figures.
7. **Do not launch Arabic until it is real.**
