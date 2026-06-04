// =====================================================================
// CASE STUDIES — single source of truth
// ---------------------------------------------------------------------
// NOTE TO EZZI TEAM:
// The outcomes & quotes below are written to be directionally honest but
// have not been audited against shipped metrics. Before launch, replace:
//   • Each `outcomes` array with the real numbers you can defend
//   • Each `quote` block with a real client quote (or remove the field)
//   • Any tech stack lines that don't match the actual build
// Anything marked TODO is intentionally a placeholder.
// =====================================================================

export type Industry =
  | "Healthcare"
  | "Sales & Marketing"
  | "B2B SaaS"
  | "Sign Manufacturing"
  | "Manufacturing"
  | "Field Services";

export type VisualPattern =
  | "wave"
  | "pipeline"
  | "document"
  | "configurator"
  | "kanban"
  | "chart"
  | "table"
  | "mobile";

export type CaseStudy = {
  slug: string;
  no: string;            // "01", "02"…
  year: string;
  industry: Industry;
  name: string;
  tagline: string;       // short editorial headline
  blurb: string;         // 1–2 sentence summary for index card
  tags: string[];        // chip tags shown on index + detail
  timeline: string;      // e.g. "8 weeks", "12 weeks"
  stack: string[];       // tech stack
  challenge: string;     // 2–3 sentences
  solution: string;      // 2–3 sentences — what we built
  features: string[];    // bullet list of key features
  outcomes: { label: string; value: string }[];
  quote?: {              // optional — remove if not yet collected
    text: string;
    attribution: string;
  };
  visualPattern: VisualPattern;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "careflow",
    no: "01",
    year: "2025",
    industry: "Healthcare",
    name: "CareFlow",
    tagline: "Voice-driven patient operations.",
    blurb:
      "Spoken updates from caregivers turn into structured patient records, downstream workflows, and exception alerts, without anyone opening a form.",
    tags: ["Voice AI", "Patient records", "Workflow automation"],
    timeline: "10 weeks",
    stack: ["React Native", "Node.js", "PostgreSQL", "Whisper", "OpenAI", "HIPAA infra"],
    challenge:
      "A multi-site care provider was losing two hours of clinician time per shift to documentation. Voice notes existed in WhatsApp, structured records existed in the EHR, and the two never met. Reconciling them at end-of-shift was creating compliance gaps.",
    solution:
      "CareFlow turns a 30-second spoken update into a fully structured patient record, with the right fields, flags, and downstream tasks pre-populated. Clinicians talk; the system writes. Exceptions route to the right person automatically.",
    features: [
      "Real-time voice → structured EHR-ready record",
      "Clinician-trained vocabulary, not generic transcription",
      "Exception routing for missing vitals or red-flag terms",
      "HIPAA-aware audit trail on every utterance",
      "Works offline; syncs when the device reconnects",
    ],
    outcomes: [
      { label: "Documentation time", value: "−68%" },
      { label: "Records / shift / clinician", value: "12 → 27" },
      { label: "Audit-ready coverage", value: "100%" },
    ],
    quote: {
      text:
        "We were quoted six months by two other shops. Ezzi shipped CareFlow in ten weeks, on the price, and our nurses actually use it.",
      attribution: "VP Operations · Healthcare network (placeholder)",
    },
    visualPattern: "wave",
  },
  {
    slug: "outreachos",
    no: "02",
    year: "2024",
    industry: "Sales & Marketing",
    name: "OutreachOS",
    tagline: "Outbound that doesn't read like outbound.",
    blurb:
      "Multi-channel sequencing, AI personalization, and pipeline analytics in one workspace, replacing four disconnected tools for a sales-led startup.",
    tags: ["Multi-channel", "AI personalization", "Pipeline analytics"],
    timeline: "12 weeks",
    stack: ["Next.js", "tRPC", "Postgres", "Redis", "GPT-4o", "SendGrid", "Twilio"],
    challenge:
      "The founder was running outbound across email, LinkedIn, SMS, and calls through four separate tools that never agreed on who had touched a prospect. Half the team's time went to reconciling spreadsheets; the personalization that drove replies didn't survive scale.",
    solution:
      "OutreachOS pulls every channel into one workspace, with AI-drafted personalization grounded in the prospect's actual public footprint (not generic 'I noticed your role'). Reps approve, edit, or skip. Pipeline metrics reflect what each touch did, not just that it happened.",
    features: [
      "Multi-channel sequences (email, LinkedIn, SMS, calls)",
      "AI personalization grounded in real public signal, not noise",
      "Per-step pipeline analytics (open → reply → meeting → won)",
      "Auto-pause on negative signals (bounce, opt-out, recent purchase)",
      "Native integrations: Salesforce, HubSpot, Apollo, Clay",
    ],
    outcomes: [
      { label: "Tools consolidated", value: "4 → 1" },
      { label: "Reply-rate lift", value: "+3.4×" },
      { label: "SDR time saved", value: "9 hrs / wk" },
    ],
    quote: {
      text:
        "Less than half what the agencies quoted. Better tool than what we replaced. The kind of platform we'd have hired a CTO to build.",
      attribution: "Founder & CEO · B2B SaaS startup (placeholder)",
    },
    visualPattern: "pipeline",
  },
  {
    slug: "bidmind-ai",
    no: "03",
    year: "2024",
    industry: "B2B SaaS",
    name: "BidMind AI",
    tagline: "Proposals priced in minutes, not days.",
    blurb:
      "AI drafts, prices, and tailors bids from reusable templates and intelligent pricing, turning a week of proposal work into an afternoon.",
    tags: ["AI drafting", "Smart pricing", "Templates"],
    timeline: "14 weeks",
    stack: ["Next.js", "Postgres", "OpenAI", "Stripe", "Resend", "Vercel"],
    challenge:
      "A professional-services firm was losing deals on response time. Each proposal was a hand-assembled mix of past wins, pricing models, and scope variants, taking 8–12 hours per bid, with senior consultants doing junior work.",
    solution:
      "BidMind AI reads the brief, pulls relevant content blocks from past proposals, applies your pricing model with sensitivity bands, and produces a draft ready for senior review in 15 minutes. Each proposal trains the next.",
    features: [
      "Brief → first-draft proposal in 15 minutes",
      "Reusable content library with usage analytics",
      "Pricing engine with sensitivity bands and floor/ceiling guards",
      "One-click export to branded PDF / shareable link",
      "Win/loss feedback loop trains the model on what closes",
    ],
    outcomes: [
      { label: "Time per proposal", value: "10h → 30m" },
      { label: "Bids submitted / month", value: "8 → 31" },
      { label: "Win-rate (year over year)", value: "+19%" },
    ],
    visualPattern: "document",
  },
  {
    slug: "royalsigns-studio",
    no: "04",
    year: "2024",
    industry: "Sign Manufacturing",
    name: "RoyalSigns Studio",
    tagline: "Customers design their own sign. You make it.",
    blurb:
      "A browser-based sign designer with live preview and direct order intake, letting customers self-configure custom signage without a sales call.",
    tags: ["Drag & drop", "Live preview", "Order intake"],
    timeline: "11 weeks",
    stack: ["React", "Fabric.js", "Node.js", "Postgres", "Stripe", "AWS S3"],
    challenge:
      "Every custom sign quote started with a 20-minute phone call, photos, and a hand-drawn mockup. Sales reps were spending 60% of their week on quoting; conversions dropped on weekends when no one was on the phone.",
    solution:
      "Studio lets customers drag, type, and preview a sign in real-time against a live render of their wall. Pricing updates as they edit. They submit; the shop receives a print-ready file and a structured order. No phone call required.",
    features: [
      "Real-time render against wall photo upload",
      "Material, finish, and mounting picker with live pricing",
      "Direct order submission with print-ready file generation",
      "Mobile-friendly with touch-optimized editing",
      "Saved drafts let customers come back without losing work",
    ],
    outcomes: [
      { label: "Self-serve quotes", value: "0 → 70%" },
      { label: "Weekend bookings", value: "+4×" },
      { label: "Sales-call time", value: "−55%" },
    ],
    visualPattern: "configurator",
  },
  {
    slug: "royalsigns-crm",
    no: "05",
    year: "2025",
    industry: "Sign Manufacturing",
    name: "RoyalSigns CRM",
    tagline: "Quote → produce → install → invoice. One system.",
    blurb:
      "End-to-end operations covering quoting, production scheduling, install tracking, and invoicing, purpose-built for sign shops.",
    tags: ["Quoting", "Production tracking", "Invoicing"],
    timeline: "16 weeks",
    stack: ["React", "Node.js", "Postgres", "QuickBooks API", "Stripe", "Twilio"],
    challenge:
      "The shop had a quoting tool, a whiteboard for production, a Google Calendar for installs, and QuickBooks for invoicing. Nothing talked. Production capacity was guessed; installs slipped because no one saw the bottleneck.",
    solution:
      "A single system where every job moves through quoting → approved → produced → installed → invoiced. Capacity is calculated, not guessed. Customers get automated status texts at each stage. QuickBooks updates itself.",
    features: [
      "Job pipeline from quote to invoice with status SMS",
      "Production capacity planning based on materials and crew",
      "Install scheduling with route optimization",
      "Native QuickBooks sync (no double-entry)",
      "Per-job profitability dashboard",
    ],
    outcomes: [
      { label: "On-time install rate", value: "62% → 94%" },
      { label: "Admin hours / week", value: "−22h" },
      { label: "Cash collection lag", value: "−11 days" },
    ],
    visualPattern: "kanban",
  },
  {
    slug: "manufacturing-dashboard",
    no: "06",
    year: "2025",
    industry: "Manufacturing",
    name: "Manufacturing Dashboard",
    tagline: "Throughput, downtime, staffing: at a glance.",
    blurb:
      "Real-time operations dashboard for plant managers, combining throughput, downtime causes, and staffing into one screen with forecast overlays.",
    tags: ["Real-time KPIs", "Downtime tracking", "Forecasts"],
    timeline: "9 weeks",
    stack: ["React", "TypeScript", "PostgreSQL", "TimescaleDB", "Python", "Recharts"],
    challenge:
      "The plant had dashboards. Twelve of them, in twelve places. The morning huddle pulled numbers from MES, time-tracking, and Excel. By the time the meeting started, the data was four hours stale.",
    solution:
      "One screen, refreshing on a 30-second cadence, that ties together throughput, downtime-by-cause, and staffing utilization. Forecast overlays show whether the day is on pace by 9 a.m. Anomaly alerts route to the right supervisor's phone.",
    features: [
      "30-second cadence on throughput, downtime, and staffing",
      "Downtime-by-cause Pareto with drill-into-shift logs",
      "Forecast vs. actual overlay for live pace tracking",
      "Anomaly alerts via SMS / Slack to the right supervisor",
      "Mobile-friendly read-only view for walking-the-floor",
    ],
    outcomes: [
      { label: "Downtime visibility lag", value: "4h → 30s" },
      { label: "Throughput variance", value: "−18%" },
      { label: "Morning-huddle prep time", value: "−45m" },
    ],
    visualPattern: "chart",
  },
  {
    slug: "healthcare-compliance",
    no: "07",
    year: "2025",
    industry: "Healthcare",
    name: "Healthcare Compliance Platform",
    tagline: "Audit-ready, by default.",
    blurb:
      "Secure data platform with audit trails, role-based access, and compliance-grade encryption, designed so audits become exports, not events.",
    tags: ["Audit trails", "RBAC", "Encryption"],
    timeline: "18 weeks",
    stack: ["Next.js", "Node.js", "Postgres", "AWS KMS", "Auth0", "OpenTelemetry"],
    challenge:
      "Auditing the system used to mean a two-week scramble: manual log assembly, screenshots of access controls, and partial gaps that drew findings. The team needed compliance to be a byproduct of the architecture, not a project.",
    solution:
      "Every record-touch is immutably logged with the actor, the action, the rationale, and the policy that authorized it. RBAC is policy-driven, not role-driven. An audit becomes a date-range export, not a fire drill.",
    features: [
      "Immutable, append-only audit log for every PHI touch",
      "Policy-driven RBAC (attribute-based access control)",
      "Field-level encryption with customer-managed keys",
      "One-click date-range audit export, signed and verifiable",
      "Real-time anomaly detection on unusual access patterns",
    ],
    outcomes: [
      { label: "Audit prep time", value: "2 wks → 30m" },
      { label: "Audit findings", value: "7 → 0" },
      { label: "PHI access lag", value: "<100ms p95" },
    ],
    visualPattern: "table",
  },
  {
    slug: "jobsnap",
    no: "08",
    year: "2026",
    industry: "Field Services",
    name: "JobSnap",
    tagline: "Field-grade. Mobile-first. Built for crews.",
    blurb:
      "A field operations system for construction crews: job photos, daily reports, and live status from any device, in any signal condition.",
    tags: ["Mobile-first", "Daily reports", "Photo logs"],
    timeline: "13 weeks",
    stack: ["React Native", "Expo", "Node.js", "Postgres", "AWS S3", "Mapbox"],
    challenge:
      "Field crews were running on WhatsApp threads, printed job sheets, and end-of-day phone calls. Photo logs sat on personal phones. Daily reports were reconstructed from memory at 7pm. Office had no live picture of any site.",
    solution:
      "JobSnap puts the day's work in one mobile app: assigned jobs, photo logs by category, materials used, hours logged, daily report auto-drafted from the day's activity. Works offline; syncs on signal. Office sees status updates in real time.",
    features: [
      "Offline-first: works on a tablet in a basement",
      "Photo logs categorized by job phase (before / during / after)",
      "Auto-drafted daily reports from the day's activity log",
      "Live site map with crew location and job status",
      "Materials and hours captured at the moment, not from memory",
    ],
    outcomes: [
      { label: "Daily report quality", value: "2/5 → 4.6/5" },
      { label: "Office update lag", value: "8h → live" },
      { label: "Missed materials charges", value: "−83%" },
    ],
    visualPattern: "mobile",
  },
];

// ─── helpers ─────────────────────────────────────────────────────

export const industries: Industry[] = [
  "Healthcare",
  "Sales & Marketing",
  "B2B SaaS",
  "Sign Manufacturing",
  "Manufacturing",
  "Field Services",
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getNextCaseStudy(slug: string): CaseStudy {
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  return caseStudies[(idx + 1) % caseStudies.length];
}

export function getCaseStudiesByIndustry(industry: Industry | "All"): CaseStudy[] {
  if (industry === "All") return caseStudies;
  return caseStudies.filter((c) => c.industry === industry);
}
