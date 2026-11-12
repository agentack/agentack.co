/**
 * Agentack site content.
 *
 * Source of truth for copy. Claims policy: no invented clients, logos,
 * statistics or compliance claims. Pricing ranges are indicative and are
 * confirmed in writing after the technical assessment.
 */

export const site = {
  name: "Agentack",
  tagline: "AI lead conversion systems and custom software for Gulf real estate.",
  descriptor: "AI and software for real estate lead conversion.",
  email: "contact@agentack.co",
  url: "https://agentack.co",
  primaryCta: { label: "Book a discovery call", href: "/contact#book" },
  secondaryCta: { label: "See what we build", href: "/solutions" },
};

export const nav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Who we serve", href: "/who-we-serve" },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/about" },
];

export const markets = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
];

export const hero = {
  eyebrow: "AI & software for real estate",
  headline: "Turn property enquiries into booked viewings.",
  subtitle:
    "Agentack builds AI lead conversion systems and custom software for brokerages and developers in the UAE and wider GCC. Every enquiry captured, qualified and routed to the right agent — with the context to close.",
  primaryCta: site.primaryCta,
  secondaryCta: site.secondaryCta,
  card: {
    title: "New enquiry",
    meta: "2-bed apartment · Dubai Marina",
    status: "Qualified",
  },
  conversation: {
    inbound: "Is the 2-bed in Marina still available? Can I view this week?",
    outbound: "Yes — Thursday 5pm or Saturday 11am. Which suits you better?",
  },
  note: "GCC-focused · Pilots from $750 · English-first, Arabic-ready",
};

export const leaks = {
  eyebrow: "Where deals leak",
  title: "The deal is usually lost before the first viewing.",
  description:
    "Most brokerages do not have a lead problem. They have a follow-up problem.",
  points: [
    {
      title: "The enquiry that waits",
      description:
        "A buyer messages three agents at 11pm. The first credible reply usually wins the viewing — and the deal.",
    },
    {
      title: "The lead nobody owns",
      description:
        "Enquiries land in a portal dashboard, a shared inbox and one agent's WhatsApp. The second and third follow-up fall through.",
    },
    {
      title: "The handover without context",
      description:
        "A lead is passed on as a screenshot — without budget, area, timeline or what was already promised.",
    },
  ],
  note: "More leads will not fix a broken follow-up. Fix the flow first.",
};

export const flagship = {
  eyebrow: "The lead conversion system",
  title: "One system from first message to booked viewing.",
  description:
    "The system captures enquiries from portals, WhatsApp, your website and email, qualifies them against your rules, routes each lead to the right agent and books the viewing. Then it follows up until there is a decision.",
  points: [
    "Captures portal, WhatsApp, web and email enquiries into one queue.",
    "Qualifies against your rules: budget, area, property type, timeline and intent.",
    "Routes to the right agent and books the viewing in their calendar.",
    "Follows up on your schedule and escalates when a human should take over.",
  ],
  flow: ["Capture", "Qualify", "Route", "Book", "Follow up"],
  primaryCta: { label: "Explore the system", href: "/solutions/lead-conversion" },
  secondaryCta: site.primaryCta,
  disclaimer:
    "Every engagement starts with a technical assessment. Portal and CRM access is confirmed before scope and price are fixed.",
};

export const services = [
  {
    index: "01",
    title: "AI lead conversion",
    description:
      "Capture, qualify, route and follow up every enquiry — with a human in the loop when it matters.",
    points: [
      "Instant first response on WhatsApp, portals and web",
      "Qualification rules built around your sales process",
      "Routing, viewing booking and follow-up",
    ],
    href: "/solutions/lead-conversion",
    linkLabel: "Explore lead conversion",
  },
  {
    index: "02",
    title: "Real estate software",
    description:
      "CRMs, portals, dashboards and internal tools built around how your team actually works.",
    points: [
      "Custom CRM and lead management platforms",
      "Property portals, websites and broker dashboards",
      "Internal tools and SaaS products",
    ],
    href: "/solutions/custom-software",
    linkLabel: "Explore custom software",
  },
  {
    index: "03",
    title: "Automation & integrations",
    description:
      "WhatsApp, CRM, calendars and portals connected into one reliable operational flow.",
    points: [
      "WhatsApp Business API and email workflows",
      "CRM and calendar synchronisation",
      "Custom connectors where an API exists",
    ],
    href: "/solutions/automation-and-integrations",
    linkLabel: "Explore automation",
  },
];

export const stages = [
  {
    label: "Capture",
    title: "Every enquiry lands in one queue",
    description:
      "Portal leads, WhatsApp messages, web forms and email arrive in a single place. Nothing depends on an agent remembering to check a dashboard.",
  },
  {
    label: "Qualify",
    title: "Your criteria, applied consistently",
    description:
      "The system asks about budget, area, property type, timeline and intent — the same questions your best agent asks, every time.",
  },
  {
    label: "Route",
    title: "The right agent, with the context",
    description:
      "Leads are assigned by team, area, language or rotation rules. The agent sees the full conversation and a clean buyer summary.",
  },
  {
    label: "Book",
    title: "A viewing in the calendar",
    description:
      "Available slots are offered, the viewing is booked and both sides receive confirmation. No manual back-and-forth.",
  },
  {
    label: "Follow up",
    title: "The second, third and fifth touch",
    description:
      "Scheduled follow-ups keep the conversation alive until there is a decision. When the system is unsure, it escalates to a person.",
  },
];

export const features = [
  {
    index: "01",
    title: "Instant first response",
    description:
      "Replies as soon as an enquiry arrives, within the rules of each channel.",
  },
  {
    index: "02",
    title: "Qualification that matches your rules",
    description:
      "Budget, area, property type, timeline and intent — configured with your sales team.",
  },
  {
    index: "03",
    title: "Routing with context",
    description:
      "Every lead reaches a named agent with the conversation and a buyer summary attached.",
  },
  {
    index: "04",
    title: "Viewing coordination",
    description:
      "Offers available slots, books the viewing and sends confirmations to both sides.",
  },
  {
    index: "05",
    title: "Follow-up sequences",
    description:
      "Scheduled touches keep leads warm without depending on who remembers.",
  },
  {
    index: "06",
    title: "Guardrails and handover",
    description:
      "Clear escalation rules, approved responses and a human handover when judgement is needed.",
  },
];

export const expertise = [
  {
    title: "Lead capture",
    description: "Portal, WhatsApp, web and email enquiries in one queue.",
  },
  {
    title: "Qualification",
    description: "Budget, area, property type, timeline and intent, applied consistently.",
  },
  {
    title: "Routing & ownership",
    description: "Every lead assigned to a named agent with a next action.",
  },
  {
    title: "Viewing coordination",
    description: "Calendar booking without the back-and-forth.",
  },
  {
    title: "Follow-up",
    description: "Scheduled touches until there is a decision, not a dead thread.",
  },
  {
    title: "Reporting",
    description: "Response time, lead status and conversion in one view.",
  },
  {
    title: "CRM & pipeline",
    description: "A system your team updates because it reflects the work.",
  },
  {
    title: "Portals, websites & apps",
    description: "Buyer-facing products that feed the same pipeline.",
  },
];

export const audiences = [
  {
    title: "Brokerages & agencies",
    line: "High enquiry volume, multiple agents, leads spread across portals and WhatsApp.",
  },
  {
    title: "Developers",
    line: "Launch-day demand, payment-plan questions and a sales team that needs clean buyer context.",
  },
  {
    title: "Property managers",
    line: "Tenant requests, renewals and owner reporting without the inbox pile-up.",
  },
];

export const processSteps = [
  {
    title: "Discovery",
    description:
      "A free 30-minute call to map your enquiry flow, the systems you use and where follow-up breaks.",
  },
  {
    title: "Technical assessment",
    description:
      "We confirm integration access, scope and success criteria. Paid, 3–5 days, credited toward the build.",
  },
  {
    title: "Pilot",
    description:
      "One workflow live on real enquiries in 2–4 weeks, measured against criteria agreed upfront.",
  },
  {
    title: "Production & support",
    description:
      "Extend across channels and teams, then keep the system monitored and improving.",
  },
];

export const valuePoints = [
  {
    title: "Specialist focus",
    description:
      "Real estate workflows, vocabulary and buying behaviour — not general-purpose automation.",
  },
  {
    title: "Engineering depth",
    description:
      "AI agents, full-stack software and integrations delivered by the same team.",
  },
  {
    title: "Clear commercials",
    description:
      "A written scope, price and acceptance criteria before any work starts.",
  },
  {
    title: "Built to hand over",
    description:
      "Source code, documentation and deployment configuration are yours.",
  },
];

export const pilot = {
  eyebrow: "Pilot",
  title: "Prove it on one workflow before you commit.",
  description:
    "A 2–4 week pilot on your real enquiries, with a written scope, a fixed price and success criteria agreed before development starts.",
  points: [
    "One workflow, one channel, real enquiries.",
    "A working system, not a slide deck.",
    "A written report against the criteria we agreed.",
    "You decide whether to continue.",
  ],
  cta: { label: "Apply for a pilot", href: "/contact" },
  note: "Pilots start from $750. Final price depends on scope, integrations and access. A pilot validates technical and operational feasibility; it does not guarantee sales or revenue.",
};

export const pricing = {
  eyebrow: "Engagements",
  title: "Clear ranges. Written scope.",
  description:
    "Final pricing depends on scope, integrations and infrastructure. These ranges are indicative and confirmed in writing after the technical assessment.",
  note: "Quoted in USD. AED and SAR quotations available. Third-party API, cloud, messaging and infrastructure costs are billed separately unless explicitly included.",
  tiers: [
    {
      name: "Discovery",
      price: "Free",
      duration: "30 minutes",
      description: "Map the current flow and identify the highest-cost leak.",
      includes: ["30-minute call", "Flow and systems review", "A clear next step"],
    },
    {
      name: "Technical assessment",
      price: "$250–$500",
      duration: "3–5 business days",
      description: "A written assessment before any build is committed.",
      includes: [
        "Workflow and integration review",
        "Recommended architecture",
        "Scope, timeline and estimate",
      ],
      note: "Credited toward implementation if you proceed.",
    },
    {
      name: "Pilot",
      price: "From $750",
      duration: "2–4 weeks",
      description: "One workflow live, measured against criteria agreed upfront.",
      includes: [
        "Working agent or automation",
        "Required integrations",
        "Written pilot report",
      ],
    },
    {
      name: "Production",
      price: "$3,000–$10,000+",
      duration: "4–12 weeks",
      description: "The full system, across channels, teams and systems.",
      includes: [
        "Multi-channel build",
        "CRM and portal integrations",
        "Handover and documentation",
      ],
    },
    {
      name: "Support",
      price: "$300–$1,500 / month",
      duration: "3-month minimum",
      description: "Monitoring, maintenance and improvement after launch.",
      includes: [
        "Health checks and fixes",
        "Prompt and workflow tuning",
        "Monthly reporting",
      ],
    },
  ],
  factors: [
    "Number of channels, agents and workflows",
    "Integrations and API access",
    "Custom dashboards or front-end work",
    "Data migration and existing systems",
    "Security, deployment and hosting requirements",
    "Languages and native review",
  ],
  payment: [
    "Small projects: 50% upfront, 50% on delivery.",
    "Larger projects: 50% upfront, 30% at milestone, 20% before handover.",
    "Monthly retainers are paid in advance.",
    "Technical assessments are paid upfront.",
  ],
};

export const proof = {
  eyebrow: "Proof, honestly",
  title: "No borrowed logos. Inspect the work.",
  description:
    "We are early in the GCC. Instead of claiming results we do not have, we show the system, the process and the handover.",
  items: [
    {
      title: "A working demo",
      description:
        "Walk through a live lead-conversion flow: WhatsApp enquiry, qualification, routing and booking.",
    },
    {
      title: "The architecture",
      description:
        "See how the agent, CRM, portal and calendar connect — and where a human stays in the loop.",
    },
    {
      title: "The pilot report",
      description:
        "Every pilot ends with a written report against the success criteria agreed before work starts.",
    },
    {
      title: "The code and handover",
      description:
        "Source, documentation and deployment configuration are yours. No lock-in.",
    },
  ],
  note: "We are selecting our first design partners now. Pilot results will be published with permission — anonymised where required.",
};

export const integrations = {
  title: "We connect what your business already runs on.",
  description:
    "Integrations are built against official APIs and confirmed during the technical assessment. Portal and CRM access depends on your subscriptions and permissions.",
  tools: [
    "WhatsApp Business API",
    "Property Finder",
    "Bayut",
    "HubSpot",
    "Salesforce",
    "Zoho CRM",
    "Google Calendar",
    "Outlook",
    "Stripe",
    "Custom CRMs",
  ],
  note: "No integration is promised before access is verified.",
};

export const specialisms = {
  eyebrow: "Specialisms",
  title: "We know the difference between resale and off-plan.",
  description:
    "Real estate is not one market. The system that fixes a launch-day developer is not the system that fixes a leasing portfolio. We build for the way each one actually works.",
  footnote:
    "These are the markets we focus on today. Short-term rentals and owners associations are on the roadmap; we take them case by case.",
  vocabulary: [
    "Escrow",
    "Ejari",
    "Service charges",
    "Payment plans",
    "Snagging",
    "Handover",
    "Renewals",
    "Owner statements",
  ],
};

export const subNiches = [
  {
    title: "Secondary & resale",
    reality:
      "Portal leads, WhatsApp at 11pm and three buyers asking about the same listing.",
    build:
      "Answer in seconds, qualify intent, book the viewing and tell the broker which listing and which buyer — before the lead goes cold.",
  },
  {
    title: "Off-plan & launches",
    reality:
      "Launch-day volume, payment-plan questions, floor-plan requests and buyers who switch language mid-sentence.",
    build:
      "Qualify by unit type, budget, payment plan and timeline, then book the showroom visit and hand the sales team a clean buyer summary.",
  },
  {
    title: "Leasing & property management",
    reality:
      "Tenant requests, renewals, maintenance triage and owners who want a clear monthly picture.",
    build:
      "A tenant workflow that answers, logs and routes requests, plus scheduled owner reporting without the inbox pile-up.",
  },
  {
    title: "Luxury & prime",
    reality:
      "Discretion, private viewings and buyers who expect a relationship, not a sequence of automated messages.",
    build:
      "Quiet qualification, a relationship-manager handover and guardrails that stop automation from feeling like spam.",
  },
  {
    title: "Commercial & mixed-use",
    reality:
      "Longer cycles, requirement matching, site visits and a CRM that only stays useful if someone keeps it clean.",
    build:
      "Requirement capture, site-visit scheduling and automatic CRM updates so the pipeline reflects reality.",
  },
];

export const faqs = [
  {
    question: "What does Agentack build?",
    answer:
      "AI lead conversion systems and custom software for real estate: enquiry capture, qualification, routing, viewing booking, follow-up, CRMs, portals, dashboards and integrations.",
  },
  {
    question: "Do you have clients in the GCC?",
    answer:
      "Not yet. We are early in the region and selecting our first design partners. We would rather show working systems and a clear delivery process than borrow credibility we have not earned.",
  },
  {
    question: "Will this replace my agents?",
    answer:
      "No. The system handles the first reply, qualification and scheduling so your agents spend their time on conversations that close. It escalates to a person when judgement is needed.",
  },
  {
    question: "Which channels and systems can you connect?",
    answer:
      "WhatsApp Business API, web forms, email, calendars and CRMs through REST APIs and webhooks. Property portal access depends on the portal's API and your permissions. We confirm feasibility before you commit.",
  },
  {
    question: "How do you handle Arabic?",
    answer:
      "We build English-first and design multilingual systems from the start. Arabic copy and conversations are reviewed by a qualified native reviewer before launch. We do not claim an in-house Arabic team.",
  },
  {
    question: "How long does it take?",
    answer:
      "A pilot typically runs 2–4 weeks. A production build takes 4–12 weeks depending on channels and integrations. You get a written timeline before work starts.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Discovery is free. Technical assessments are $250–$500. Pilots start from $750. Production builds run from $3,000 to $10,000+, and support from $300 per month. Final scope and price are written before you commit.",
  },
  {
    question: "Is my data safe?",
    answer:
      "We deploy into your cloud environment where practical, use role-based access, encrypted connections and managed secrets. We assess data residency and DPAs per project. We do not claim regulatory compliance until it has been verified.",
  },
];

export const pricingFaqs = [
  {
    question: "Why publish price ranges?",
    answer:
      "Because it saves both sides time. You can judge whether the engagement fits your budget before a call, and we can talk about scope instead of guessing.",
  },
  {
    question: "Is the technical assessment really credited?",
    answer:
      "Yes. If you proceed to a pilot or production build, the assessment fee is credited toward the implementation.",
  },
  {
    question: "What changes the price most?",
    answer:
      "Integration access, the number of channels and workflows, custom front-end work and data quality. The assessment exists to price those accurately.",
  },
  {
    question: "What are the payment terms?",
    answer:
      "Small projects are 50% upfront and 50% on delivery. Larger projects are 50% upfront, 30% at a milestone and 20% before handover. Retainers are paid monthly in advance.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "No. We guarantee the agreed deliverables and acceptance criteria. Business outcomes depend on lead volume, follow-up discipline and factors outside our control.",
  },
  {
    question: "Can we start with something smaller?",
    answer:
      "Yes. A focused pilot or a single integration is a valid starting point. We would rather prove one workflow than sell a platform you do not need yet.",
  },
];

export const leadFaqs = [
  {
    question: "How fast does the system reply?",
    answer:
      "As soon as an enquiry arrives, within each channel's rules. We agree a target response time with you and measure it during the pilot.",
  },
  {
    question: "Will qualification questions annoy buyers?",
    answer:
      "It depends on how they are written. We keep them short, relevant and conversational, and test the flow against real enquiries before launch.",
  },
  {
    question: "What happens when the AI does not know?",
    answer:
      "It stops, says it will pass the question to a person and escalates with the full context. Confidence thresholds and handover rules are agreed before launch.",
  },
  {
    question: "Does it work with our CRM?",
    answer:
      "If the CRM has a usable API, we can connect it. We confirm access in the technical assessment and tell you if something cannot be connected.",
  },
  {
    question: "Is this just a chatbot?",
    answer:
      "No. A chatbot answers questions. This captures enquiries, qualifies them, assigns ownership, books viewings and follows up — with your CRM as the record.",
  },
  {
    question: "Can we keep our current agents and process?",
    answer:
      "Yes. The system fits around your routing rules, qualification criteria and handover process. It does not require you to replace your team or your CRM.",
  },
];

export const softwareFaqs = [
  {
    question: "Do you build software without AI?",
    answer:
      "Yes. CRMs, portals, dashboards and internal tools can be delivered as standalone software projects.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do. Source code, documentation and deployment configuration are handed over at the end of the engagement unless a different arrangement is agreed in writing.",
  },
  {
    question: "Where will it be hosted?",
    answer:
      "In your cloud environment where practical, so you keep control of infrastructure and data. We can also manage deployment under a separate support agreement.",
  },
  {
    question: "Can you work with our existing developers?",
    answer:
      "Yes. We can lead the build, work alongside an internal team or deliver a defined module with clear interfaces.",
  },
  {
    question: "Do you build mobile apps?",
    answer:
      "We consider mobile projects case by case based on requirements and delivery capacity. Web-first is usually the faster path for an internal tool or dashboard.",
  },
  {
    question: "How do you hand over?",
    answer:
      "Source, documentation, environment configuration and a walkthrough. We do not design systems that only we can maintain.",
  },
];

export const automationFeatures = [
  {
    index: "01",
    title: "WhatsApp workflows",
    description:
      "Enquiry capture, approved responses, reminders and handover through the WhatsApp Business API.",
  },
  {
    index: "02",
    title: "CRM synchronisation",
    description:
      "Leads, conversations, owners and status changes kept in sync with the system your team already uses.",
  },
  {
    index: "03",
    title: "Calendar and booking",
    description:
      "Availability checks, viewing bookings and confirmations without manual coordination.",
  },
  {
    index: "04",
    title: "Lead routing",
    description:
      "Assignment by area, team, language or rotation, with escalation when nobody responds.",
  },
  {
    index: "05",
    title: "Internal operations",
    description:
      "Document generation, approvals, notifications and handoffs between the tools you already run.",
  },
  {
    index: "06",
    title: "Monitoring and alerts",
    description:
      "Retries, failure alerts and logs so a silent integration does not become a silent lost lead.",
  },
];

export const automationFaqs = [
  {
    question: "Can you connect our property portal?",
    answer:
      "Where the portal provides API access and your account has the right permissions. We confirm feasibility during the technical assessment rather than promising every portal upfront.",
  },
  {
    question: "Can you set up WhatsApp properly?",
    answer:
      "Yes. We build against the WhatsApp Business Cloud API or through an authorised provider, depending on your account and messaging needs.",
  },
  {
    question: "What if a system has no API?",
    answer:
      "We say so before you pay. We do not build brittle screen-scraping workarounds and call them integrations.",
  },
  {
    question: "Can you automate internal operations?",
    answer:
      "Yes. Lead assignment, reporting, document generation, notifications and handoffs between tools are common starting points.",
  },
  {
    question: "How do you stop automations failing silently?",
    answer:
      "Retries, error alerts, logging and a named owner for failures. Monitoring is part of the build, not an afterthought.",
  },
  {
    question: "Do we need to replace our current tools?",
    answer:
      "Usually not. The aim is to connect what you already use. If a tool is actively blocking the workflow, we will say so and explain the trade-off.",
  },
];

export const pilotFaqs = [
  {
    question: "What does a pilot cost?",
    answer:
      "Pilots start from $750. The final price depends on scope, channels and integrations, and is confirmed in a written proposal before work starts.",
  },
  {
    question: "How long does a pilot take?",
    answer:
      "Typically 2–4 weeks. The timeline is agreed upfront and depends on API access, test data and how quickly your team can review the flow.",
  },
  {
    question: "What counts as success?",
    answer:
      "Criteria agreed before development: workflow completion, integration success, response time, accuracy against agreed test cases and reduction in manual steps.",
  },
  {
    question: "What do you need from us?",
    answer:
      "Access to the relevant systems, sample listings and enquiries, your qualification criteria and routing rules, a calendar for bookings, and one person who can review and approve.",
  },
  {
    question: "What happens after the pilot?",
    answer:
      "You receive a written report against the agreed criteria. You can proceed to production, pause, or stop. The assessment fee is credited if you continue.",
  },
  {
    question: "Does a pilot guarantee sales?",
    answer:
      "No. A pilot validates technical and operational feasibility. It reduces the risk of a larger build; it does not guarantee revenue, conversion or lead volume.",
  },
];

export const contact = {
  eyebrow: "Book a discovery call",
  title: "Tell us where the enquiries leak.",
  description:
    "A 30-minute call to map your current flow, the systems you use and where follow-up breaks. You leave with a clear next step, whether or not we work together.",
  confirmation: "We reply within one business day.",
  steps: [
    {
      title: "You send the form",
      description: "A short note about your business and where the flow breaks.",
    },
    {
      title: "We reply within one business day",
      description: "We suggest a time for a 30-minute discovery call.",
    },
    {
      title: "You get a written next step",
      description:
        "If there is a fit, a scope and a price. If not, we say so and point you in a better direction.",
    },
  ],
  note: "No deck. No pressure. A working session, not a sales pitch.",
};

export const about = {
  eyebrow: "Company",
  title: "A specialist engineering partner for real estate.",
  description:
    "Agentack is a small engineering team building AI and software for the businesses that sell, lease and manage property across the GCC.",
  thesisTitle: "Real estate runs on follow-up. Most systems do not.",
  thesis:
    "Property businesses do not lose deals because they lack leads. They lose them because an enquiry waits, a lead has no owner, or the third follow-up never happens. We build the systems that close that gap — and the software around them.",
  principles: [
    {
      title: "Specialists, not generalists",
      description:
        "We work on real estate problems. That focus is the point, not a marketing line.",
    },
    {
      title: "Evidence over adjectives",
      description:
        "Working demos, written scopes and measured pilots. No invented logos or statistics.",
    },
    {
      title: "Human judgement stays",
      description:
        "Automation handles repetition. People handle relationships, negotiation and exceptions.",
    },
    {
      title: "Your systems, your data",
      description:
        "We build to hand over: source, documentation and deployment configuration included.",
    },
  ],
  facts: [
    { label: "Focus", value: "Real estate technology and AI" },
    { label: "Markets", value: "UAE first, wider GCC" },
    { label: "Delivery", value: "Milestones, reviews and written handover" },
    { label: "Languages", value: "English-first, Arabic-ready" },
  ],
};

export const personas = [
  {
    id: "brokerages",
    number: "01",
    title: "Brokerages & agencies",
    intro:
      "Your next deal is already in your inbox. It just has not been answered yet.",
    pains: [
      "Portal leads arrive while agents are in viewings.",
      "Follow-up depends on who remembers.",
      "Arabic and English enquiries sit in different inboxes.",
    ],
    outcomes: [
      "Every enquiry answered and qualified against your criteria.",
      "Clear ownership and routing to the right agent.",
      "A pipeline that reflects reality, not optimistic updates.",
    ],
    fit: "Best fit: 5–200 agents with high portal and WhatsApp volume.",
  },
  {
    id: "developers",
    number: "02",
    title: "Developers",
    intro:
      "Launch-day demand is easy. Launch-day follow-up is where the money leaks.",
    pains: [
      "Campaign spikes overwhelm the sales team.",
      "Buyers ask about payment plans, floor plans and handover dates.",
      "Serious buyers are buried in a list of raw registrations.",
    ],
    outcomes: [
      "Every launch enquiry captured and qualified by unit, budget and timeline.",
      "Showroom visits booked and assigned to the right sales person.",
      "Clean buyer summaries for the sales team, not raw exports.",
    ],
    fit: "Best fit: off-plan launches and multi-project sales teams.",
  },
  {
    id: "property-managers",
    number: "03",
    title: "Property managers",
    intro:
      "Every tenant message answered, logged and routed — without the inbox pile-up.",
    pains: [
      "Tenant requests arrive by WhatsApp, email and phone.",
      "Maintenance triage depends on one person's memory.",
      "Owners ask for updates that take hours to compile.",
    ],
    outcomes: [
      "Requests captured, categorised and routed to the right person.",
      "Clear status for tenants and a record for the team.",
      "Owner reporting without rebuilding the same spreadsheet.",
    ],
    fit: "Best fit: leasing portfolios and property management teams.",
  },
];

export const panels = {
  leadConversion: {
    title: "What the system handles",
    facts: [
      { label: "Channels", value: "WhatsApp, portals, web forms, email" },
      { label: "Qualification", value: "Budget, area, type, timeline, intent" },
      { label: "Routing", value: "Agent, team or round-robin rules" },
      { label: "Booking", value: "Google Calendar or Outlook" },
    ],
    note: "Integration access is confirmed in the technical assessment.",
  },
  software: {
    title: "Typical builds",
    facts: [
      { label: "CRM", value: "Custom lead and pipeline management" },
      { label: "Portals", value: "Property search, listings and enquiry flows" },
      { label: "Dashboards", value: "Sales, leasing and operations reporting" },
      { label: "Internal tools", value: "Approvals, documents and handovers" },
    ],
    note: "Stack selected per project. Source and documentation handed over.",
  },
  automation: {
    title: "What we connect",
    facts: [
      { label: "Messaging", value: "WhatsApp Business API and email" },
      { label: "Records", value: "CRM, spreadsheets and internal databases" },
      { label: "Scheduling", value: "Google Calendar and Outlook" },
      { label: "Portals", value: "Where official API access is available" },
    ],
    note: "Feasibility is confirmed before scope and price are fixed.",
  },
};
