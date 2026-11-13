/**
 * Agentack English content.
 *
 * Source of truth for English copy. Claims policy: no invented clients, logos,
 * statistics or compliance claims. Pricing ranges are indicative and are
 * confirmed in writing after the technical assessment.
 */

import { siteConfig } from "@/lib/site-config";

export const en = {
  site: {
    name: siteConfig.name,
    tagline: "AI lead conversion systems and custom software for Gulf real estate.",
    descriptor: "AI and software for real estate lead conversion.",
    email: siteConfig.email,
    url: siteConfig.url,
    primaryCta: { label: "Book a discovery call", href: "/contact#book" },
    secondaryCta: { label: "See what we build", href: "/solutions" },
  },

  nav: [
    { label: "Solutions", href: "/solutions" },
    { label: "Who we serve", href: "/who-we-serve" },
    { label: "Pricing", href: "/pricing" },
    { label: "Company", href: "/about" },
  ],

  markets: [
    "United Arab Emirates",
    "Saudi Arabia",
    "Qatar",
    "Kuwait",
    "Bahrain",
    "Oman",
  ],

  hero: {
    eyebrow: "AI & software for real estate",
    headline: "Turn property enquiries into booked viewings.",
    subtitle:
      "Agentack builds AI lead conversion systems and custom software for brokerages and developers in the UAE and wider GCC. Every enquiry captured, qualified and routed to the right agent — with the context to close.",
    primaryCta: { label: "Book a discovery call", href: "/contact#book" },
    secondaryCta: { label: "See what we build", href: "/solutions" },
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
  },

  leaks: {
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
  },

  flagship: {
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
    secondaryCta: { label: "Book a discovery call", href: "/contact#book" },
    disclaimer:
      "Every engagement starts with a technical assessment. Portal and CRM access is confirmed before scope and price are fixed.",
  },

  services: [
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
  ],

  stages: [
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
  ],

  features: [
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
  ],

  expertise: [
    {
      title: "Lead capture",
      description: "Portal, WhatsApp, web and email enquiries in one queue.",
    },
    {
      title: "Qualification",
      description:
        "Budget, area, property type, timeline and intent, applied consistently.",
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
      description:
        "Scheduled touches until there is a decision, not a dead thread.",
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
  ],

  audiences: [
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
  ],

  processSteps: [
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
  ],

  valuePoints: [
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
  ],

  pilot: {
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
  },

  pricing: {
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
  },

  proof: {
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
  },

  integrations: {
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
  },

  specialisms: {
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
  },

  subNiches: [
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
  ],

  faqs: [
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
  ],

  pricingFaqs: [
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
  ],

  leadFaqs: [
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
  ],

  softwareFaqs: [
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
  ],

  automationFeatures: [
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
  ],

  automationFaqs: [
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
  ],

  pilotFaqs: [
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
  ],

  contact: {
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
  },

  about: {
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
  },

  personas: [
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
  ],

  panels: {
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
  },

  pages: {
    home: {
      meta: {
        title: "AI lead conversion systems for Gulf real estate",
        description:
          "Agentack builds AI lead conversion systems and custom software for brokerages and developers across the GCC. Capture, qualify and convert property enquiries.",
      },
      marketsLabel: "Clients across the GCC",
      services: {
        eyebrow: "What we do",
        title: "Start with the leak that costs you most.",
        description:
          "Three connected capabilities. Most clients start with lead conversion, then extend into software and automation as the relationship grows.",
      },
      audience: {
        eyebrow: "Who we serve",
        title: "Built for the teams that handle the enquiries.",
        description:
          "We work with the businesses that own the lead, the agent and the follow-up.",
      },
      process: {
        eyebrow: "How we work",
        title: "Discovery, assessment, pilot, production.",
        description:
          "A written scope and clear success criteria before anything is built.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Clarity before the first conversation.",
        description: "The questions we hear most often, answered plainly.",
      },
      cta: {
        eyebrow: "Next step",
        headline: "Bring us your messiest enquiry flow.",
      },
    },

    solutions: {
      meta: {
        title: "Solutions",
        description:
          "AI lead conversion systems, custom real estate software and automation for brokerages, developers and property managers across the GCC.",
      },
      hero: {
        eyebrow: "Solutions",
        title: "Start with the workflow that costs you most.",
        description:
          "Capture and convert enquiries, replace spreadsheets and disconnected tools, or connect the systems you already run. Each engagement is scoped around a measurable outcome.",
        secondaryLabel: "See pricing",
      },
      services: {
        eyebrow: "Three capabilities",
        title: "Lead conversion first. Software and automation next.",
        description:
          "Most real estate businesses do not need another platform. They need the enquiry flow to work, and the software around it to reflect reality.",
      },
      expertise: {
        eyebrow: "What we build",
        title: "From first reply to signed deal.",
        description:
          "The components of a working real estate pipeline, delivered as one system or introduced one at a time.",
        actionLabel: "See the lead conversion system",
      },
      process: {
        eyebrow: "How we work",
        title: "Discovery, assessment, pilot, production.",
        description:
          "A written scope and clear success criteria before anything is built.",
      },
      cta: {
        eyebrow: "Next step",
        headline: "Tell us which workflow is leaking.",
      },
    },

    leadConversion: {
      meta: {
        title: "AI lead conversion for real estate",
        description:
          "Capture, qualify, route and follow up every property enquiry. Agentack builds AI lead conversion systems for brokerages and developers in the GCC.",
      },
      hero: {
        eyebrow: "AI lead conversion",
        title: "Every enquiry answered, qualified and owned.",
        description:
          "A lead conversion system for real estate: captures enquiries from every channel, applies your qualification rules, routes the lead to the right agent and books the viewing. Then it follows up.",
        secondaryLabel: "See the pilot",
      },
      pipeline: {
        eyebrow: "How it works",
        title: "Five stages, one system.",
        description:
          "Each stage is useful on its own. Together they close the gap between an enquiry and a viewing.",
      },
      features: {
        eyebrow: "Capabilities",
        title: "Built around your sales process.",
        description:
          "Not a generic chatbot. A configured workflow with your rules, your channels and your handover.",
      },
      audience: {
        eyebrow: "Who it is for",
        title: "Teams with more enquiries than follow-up.",
        description:
          "The system is designed for businesses where lead volume already exists and the bottleneck is response, ownership or follow-through.",
      },
      faq: {
        eyebrow: "Lead conversion FAQ",
        title: "The questions that decide the project.",
        description:
          "Straight answers on speed, qualification, guardrails and systems.",
      },
      cta: {
        eyebrow: "Next step",
        headline: "Show us your current enquiry flow.",
      },
    },

    customSoftware: {
      meta: {
        title: "Custom real estate software",
        description:
          "Custom CRMs, property portals, dashboards and internal tools for real estate businesses in the GCC. Built to fit your workflow and handed over to your team.",
      },
      hero: {
        eyebrow: "Real estate software",
        title: "Software built around how your team works.",
        description:
          "Off-the-shelf tools force your process into their model. We build CRMs, portals, dashboards and internal systems around the way your business actually runs — then hand over the source.",
        secondaryLabel: "See pricing",
      },
      expertise: {
        eyebrow: "What we build",
        title: "The system your operation is missing.",
        description:
          "From a focused internal tool to a full platform, scoped around the workflow that costs you most.",
        actionLabel: "Talk through your build",
      },
      values: {
        eyebrow: "Delivery principles",
        title: "Built to be owned, not rented.",
        description:
          "The commercial and engineering choices that decide whether software becomes an asset or a dependency.",
      },
      process: {
        eyebrow: "How we work",
        title: "Discovery, assessment, pilot, production.",
        description:
          "Software is scoped after the workflow and integrations are understood — not before.",
      },
      faq: {
        eyebrow: "Software FAQ",
        title: "Ownership, hosting and handover.",
        description:
          "The practical questions that come up before a build starts.",
      },
      cta: {
        eyebrow: "Next step",
        headline: "Replace the spreadsheet that runs the business.",
      },
    },

    automation: {
      meta: {
        title: "Automation and integrations",
        description:
          "Connect WhatsApp, your CRM, calendars and property portals into one reliable flow. Custom integrations built against official APIs for real estate businesses.",
      },
      hero: {
        eyebrow: "Automation & integrations",
        title: "Your systems should not need a human bridge.",
        description:
          "Most teams lose time copying leads between a portal, a spreadsheet, WhatsApp and the CRM. We connect the tools you already use — or replace the gap with a custom integration.",
        secondaryLabel: "See what we connect",
      },
      features: {
        eyebrow: "What we automate",
        title: "The work between the tools.",
        description:
          "Not automation for its own sake. The repetitive steps that slow down a lead, a viewing or a handover.",
      },
      process: {
        eyebrow: "How we work",
        title: "Access first, then scope.",
        description:
          "Integration feasibility is confirmed before price and timeline are fixed. If something cannot be connected cleanly, we say so.",
      },
      faq: {
        eyebrow: "Integration FAQ",
        title: "What can actually be connected.",
        description:
          "Honest answers on portals, WhatsApp, CRMs and failure handling.",
      },
      cta: {
        eyebrow: "Next step",
        headline: "Show us the manual step you repeat every day.",
      },
    },

    whoWeServe: {
      meta: {
        title: "Who we serve",
        description:
          "AI and software for real estate brokerages, developers and property managers across the GCC. Built around the workflows that decide whether a lead converts.",
      },
      hero: {
        eyebrow: "Who we serve",
        title: "Built for the teams that own the follow-up.",
        description:
          "We work with established brokerages, developers and property managers — the businesses where a missed enquiry has a measurable cost.",
        secondaryLabel: "See the solutions",
      },
      process: {
        eyebrow: "How we work",
        title: "A process built for early trust.",
        description:
          "No borrowed logos. A written scope, a measured pilot and a clean handover.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "What to expect before you engage.",
        description:
          "The questions that come up most often across all three audiences.",
      },
      cta: {
        eyebrow: "Next step",
        headline: "Tell us where your team loses the most time.",
      },
    },

    pricing: {
      meta: {
        title: "Pricing",
        description:
          "Indicative pricing for discovery, technical assessment, pilots, production builds and support. Written scope and fixed price before work starts.",
      },
      hero: {
        eyebrow: "Pricing",
        title: "Know the range before the first call.",
        description:
          "You do not need a sales call to know whether this is affordable. Ranges are published below. Final pricing is confirmed in writing after the technical assessment.",
        secondaryLabel: "How the pilot works",
      },
      factors: {
        eyebrow: "What changes the price",
        title: "Scope, access and complexity.",
        description:
          "Two projects with the same number of pages can differ by 10x once integrations and data quality are involved. The assessment exists to price that honestly.",
        driversTitle: "Main cost drivers",
        paymentsTitle: "Payment terms",
        thirdPartyNote:
          "Third-party API, cloud and messaging costs are billed separately unless explicitly included.",
      },
      faq: {
        eyebrow: "Pricing FAQ",
        title: "What the ranges include.",
        description:
          "The commercial questions that come up before a scope is agreed.",
      },
      cta: {
        eyebrow: "Next step",
        headline: "Start with a free discovery call.",
      },
    },

    pilot: {
      meta: {
        title: "Pilot programme",
        description:
          "A 2–4 week pilot on your real enquiries with a written scope, fixed price and success criteria agreed before development starts.",
      },
      hero: {
        eyebrow: "Pilot programme",
        title: "Prove it on one workflow. Then decide.",
        description:
          "A focused pilot on real enquiries, measured against criteria agreed before development. No long contract, no platform commitment, no guesswork.",
        primaryLabel: "Apply for a pilot",
        secondaryLabel: "See pricing",
      },
      checklist: {
        eyebrow: "Pilot scope",
        title: "What you get. What we need.",
        description:
          "A pilot works when the scope is narrow and the inputs are clear. This is the trade.",
        getTitle: "What you get",
        getItems: [
          "A working agent or automation on your real enquiries",
          "The integrations required for that one workflow",
          "Testing against agreed scenarios and criteria",
          "A written pilot report with the measured result",
          "A recommendation: continue, adjust or stop",
        ],
        needTitle: "What we need",
        needItems: [
          "Access to the relevant CRM, portal or messaging account",
          "Sample listings and real enquiry examples",
          "Your qualification criteria and routing rules",
          "Calendar access for viewing bookings",
          "One named reviewer for feedback and sign-off",
        ],
        note: "Arabic-language content requires a qualified native reviewer, either from your team or arranged separately.",
      },
      process: {
        eyebrow: "How the pilot runs",
        title: "Two to four weeks, one clear result.",
        description:
          "The scope stays tight so the outcome is easy to judge.",
      },
      faq: {
        eyebrow: "Pilot FAQ",
        title: "What to expect before you apply.",
        description:
          "Straight answers on scope, timing, success and what happens afterwards.",
      },
    },

    about: {
      meta: {
        title: "Company",
        description:
          "Agentack is a small engineering team building AI lead conversion systems and custom software for real estate businesses across the GCC.",
      },
      thesisEyebrow: "Why we exist",
      beliefs: {
        eyebrow: "What we believe",
        title: "Four principles that shape the work.",
        description:
          "They are not values on a wall. They decide what we build and what we refuse to promise.",
      },
      process: {
        eyebrow: "How we work",
        title: "Discovery, assessment, pilot, production.",
        description:
          "A written scope and clear success criteria before anything is built.",
      },
      engageEyebrow: "How we engage",
      engageBody:
        "Work starts with a discovery call, a written scope and agreed milestones. You get clear communication, named review points and a handover that leaves the system in your hands.",
      cta: {
        eyebrow: "Work with us",
        headline: "Let's look at where your enquiries leak.",
      },
    },

    contact: {
      meta: {
        title: "Book a discovery call",
        description:
          "Tell us how your enquiries flow today. A 30-minute call, a clear next step and a written scope if there is a fit.",
      },
      primaryBook: "Pick a time",
      primaryForm: "Start the form",
      secondaryBook: "Send a brief instead",
      secondaryForm: "Read the FAQ",
      faq: {
        eyebrow: "Before you send",
        title: "Clarity before the first conversation.",
        description: "The questions we hear most often, answered plainly.",
      },
    },

    privacy: {
      meta: {
        title: "Privacy policy",
        description:
          "How Agentack collects, uses and protects personal information submitted through the website.",
      },
      eyebrow: "Legal",
      title: "Privacy policy",
      updated:
        "How we collect, use and protect personal information. Last updated 13 November 2026.",
    },

    terms: {
      meta: {
        title: "Terms of service",
        description:
          "The terms that apply to use of the Agentack website and to client engagements.",
      },
      eyebrow: "Legal",
      title: "Terms of service",
      updated:
        "The terms that apply to this website and to client engagements. Last updated 12 November 2026.",
    },
  },

  legal: {
    privacySections: [
      {
        title: "Who we are",
        body: [
          "Agentack is a technology studio building AI and software for real estate businesses. This policy explains how we handle personal information collected through agentack.co.",
          "For privacy questions or requests, contact contact@agentack.co.",
        ],
      },
      {
        title: "What we collect",
        body: [
          "Information you submit through the contact form: name, work email, company, website, role, market, area of interest, indicative budget and your message.",
          "Basic technical information recorded by our hosting provider when a page is requested, such as IP address, browser type and the pages requested. We use it to keep the site secure and to diagnose faults.",
          "If you email us directly, we receive your email address, message and any attachments you choose to send.",
        ],
      },
      {
        title: "How we use it",
        body: [
          "To respond to your enquiry, arrange a call and prepare a scope or proposal.",
          "To understand which enquiries come from which channels and improve our content and services.",
          "To keep records of enquiries and engagements, and to meet legal or accounting obligations where they apply.",
          "We do not sell personal information or use it for unrelated advertising.",
        ],
      },
      {
        title: "Legal basis",
        body: [
          "Where consent is required, we rely on the consent you provide when submitting the form or asking us to contact you.",
          "We otherwise rely on legitimate business interests: responding to a request you initiated, operating the website securely and improving our services.",
        ],
      },
      {
        title: "Sharing and processors",
        body: [
          "We use service providers for hosting, CRM, email and scheduling. These may include our hosting provider, HubSpot, an email delivery provider and Cal.com.",
          "Providers process information on our instructions and under their own contractual and security commitments. We share only what is needed for the service.",
          "We may disclose information if required by law or to protect our rights, users or systems.",
        ],
      },
      {
        title: "International transfers",
        body: [
          "Our providers may process information outside your country. Where required, we rely on appropriate contractual safeguards offered by those providers.",
        ],
      },
      {
        title: "Retention",
        body: [
          "Enquiry records are kept for as long as needed to respond, manage a potential or active engagement and meet legal obligations.",
          "Server logs, if kept by our hosting provider, are retained for a short period for security and troubleshooting. You can ask us to delete information we are not required to keep.",
        ],
      },
      {
        title: "Your rights",
        body: [
          "Depending on where you live, you may have the right to access, correct, delete or restrict the use of your personal information, or to object to certain processing.",
          "Send requests to contact@agentack.co. We may need to verify your identity before acting.",
        ],
      },
      {
        title: "Cookies and storage",
        body: [
          "This website does not run analytics or advertising tracking. There are no analytics cookies and no third-party trackers on any page.",
          "The only value we store in your browser is your light or dark theme preference. It stays on your device and is not sent to us.",
          "If we add measurement later, we will update this policy first and ask for consent where the law requires it. You can clear stored values through your browser settings at any time.",
        ],
      },
      {
        title: "Changes",
        body: [
          "We may update this policy as the business, providers or legal requirements change. The latest version is always published on this page.",
        ],
      },
    ],
    termsSections: [
      {
        title: "Website use",
        body: [
          "This website is provided for information about Agentack and its services. You may use it for lawful purposes only.",
          "You may not attempt to disrupt the site, gain unauthorised access to systems or copy content for commercial use without permission.",
        ],
      },
      {
        title: "Services and proposals",
        body: [
          "Content on this site is indicative, not an offer capable of acceptance. Services are delivered under a written proposal or agreement that sets out scope, deliverables, timeline, price, acceptance criteria and payment terms.",
          "Where the website and a signed agreement differ, the signed agreement prevails.",
        ],
      },
      {
        title: "No guarantee of business outcomes",
        body: [
          "We commit to the deliverables and acceptance criteria agreed in writing. We do not guarantee revenue, lead volume, conversion rates, sales, rankings or other business outcomes, which depend on factors outside our control.",
          "Pilots validate technical and operational feasibility. They do not guarantee that a production system will produce a particular commercial result.",
        ],
      },
      {
        title: "Intellectual property",
        body: [
          "Website content, brand assets and written material remain the property of Agentack unless otherwise stated.",
          "Ownership of project code, designs and documentation is set out in the applicable agreement. Where handover is included, source code, documentation and deployment configuration are transferred on completion of payment.",
        ],
      },
      {
        title: "Client responsibilities",
        body: [
          "Clients are responsible for providing timely access to systems, data, reviewers and approvals, and for ensuring they have the right to share any data or credentials provided to us.",
          "Delays in access, feedback or approvals may affect the timeline and cost.",
        ],
      },
      {
        title: "Third-party services",
        body: [
          "Projects may depend on third-party APIs, portals, messaging providers, cloud infrastructure and payment providers. Their availability, pricing and terms are outside our control.",
          "Third-party subscription, API, messaging and infrastructure costs are billed separately unless explicitly included in the agreement.",
        ],
      },
      {
        title: "Payment",
        body: [
          "Payment terms are stated in the applicable proposal or agreement. Work may pause if invoices are overdue.",
          "Fees for completed work are payable even if a project is paused or terminated, as set out in the agreement.",
        ],
      },
      {
        title: "Confidentiality",
        body: [
          "Each party agrees to protect confidential information received from the other and to use it only for the purpose of the engagement.",
          "We may describe work publicly only with permission, or in anonymised form where confidentiality requires it.",
        ],
      },
      {
        title: "Limitation of liability",
        body: [
          "To the extent permitted by law, Agentack is not liable for indirect or consequential loss, loss of profit, loss of opportunity or loss of data arising from use of this website.",
          "Liability under a client engagement is governed by the limitations set out in the signed agreement.",
        ],
      },
      {
        title: "Termination",
        body: [
          "Either party may terminate an engagement as provided in the applicable agreement. On termination, the client pays for work performed and approved expenses incurred up to that point.",
        ],
      },
      {
        title: "Governing terms",
        body: [
          "The law and dispute process applicable to a client engagement are stated in the signed agreement. Nothing on this website creates a partnership, employment or agency relationship.",
        ],
      },
      {
        title: "Contact",
        body: ["Questions about these terms can be sent to contact@agentack.co."],
      },
    ],
  },

  form: {
    name: "Full name",
    email: "Work email",
    company: "Company name",
    website: "Website",
    websiteHint: "Optional.",
    role: "Your role",
    rolePlaceholder: "Select a role",
    market: "Main market",
    marketPlaceholder: "Select a market",
    interest: "What do you want to improve?",
    interestPlaceholder: "Select an area",
    budget: "Indicative budget",
    budgetPlaceholder: "Select a range",
    budgetHint: "Helps us suggest the right starting point.",
    message: "Where does the flow break today?",
    messageHint: "Two or three lines is plenty.",
    consent: "I agree to be contacted about this request.",
    submit: "Request a discovery call",
    sending: "Sending…",
    replyNote: "We reply within one business day.",
    successTitle: "Message received.",
    successUrgent:
      "If it is urgent, email us directly and we will pick it up from there.",
    sendAnother: "Send another enquiry",
    fallbackError:
      "Something went wrong. Please try again or email us directly.",
    networkError:
      "We could not reach the server. Please try again or email us directly.",
    honeypot: "Leave this field empty",
  },

  booking: {
    eyebrow: "Pick a time",
    title: "Book a 30-minute discovery call.",
    description:
      "Choose a slot that suits you. We will map your current enquiry flow, the systems you use and where follow-up breaks - then tell you honestly whether we can help.",
    iframeTitle: "Agentack discovery call booking calendar",
    notLoading: "Calendar not loading?",
    openNewTab: "Open it in a new tab",
    sendBrief: "send a short brief",
    or: "or",
    instead: "instead.",
  },

  ui: {
    skipToContent: "Skip to content",
    homeLabel: "Agentack home",
    primaryNav: "Primary",
    mobileNav: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
    languageSwitchAria: "Change language",
    languageOther: "العربية",
    footerSolutions: "Solutions",
    footerWhoWeServe: "Who we serve",
    footerCompany: "Company",
    rights: "© 2026 Agentack. All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
    backToTop: "Back to top",
    heroCardNote: "Budget, area and timeline captured",
    flowLabel: "The flow",
    whatWeBuild: "What we build:",
    vocabularyLabel: "The vocabulary we work in",
    pipelineStages: "Pipeline stages",
    stageLabel: "Stage",
    whereItBreaks: "Where it breaks",
    whatChanges: "What changes",
    seeSolutions: "See the solutions",
    whoWeServeHeading: "Who we serve",
    exploreSolution: "Explore solution",
  },

  footer: {
    columns: [
      {
        name: "Solutions",
        links: [
          { label: "AI lead conversion", href: "/solutions/lead-conversion" },
          { label: "Real estate software", href: "/solutions/custom-software" },
          {
            label: "Automation & integrations",
            href: "/solutions/automation-and-integrations",
          },
          { label: "Pricing", href: "/pricing" },
        ],
      },
      {
        name: "Who we serve",
        links: [
          { label: "Brokerages & agencies", href: "/who-we-serve#brokerages" },
          { label: "Developers", href: "/who-we-serve#developers" },
          { label: "Property managers", href: "/who-we-serve#property-managers" },
        ],
      },
      {
        name: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Pilot programme", href: "/pilot" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },

  notFound: {
    metaTitle: "Page not found",
    eyebrow: "404",
    title: "This page does not exist.",
    description:
      "The link may be old or mistyped. You can go back to the home page or see what we build.",
    home: "Back to home",
    solutions: "See solutions",
  },
};

export type SiteContent = typeof en;
