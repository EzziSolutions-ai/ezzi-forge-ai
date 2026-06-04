import { Code2, Smartphone, Globe, Layers, PenTool, type LucideIcon } from "lucide-react";

export type ServiceSlug =
  | "custom-software"
  | "mobile-app"
  | "web-app"
  | "saas"
  | "ui-ux";

export type Service = {
  slug: ServiceSlug;
  label: string;
  icon: LucideIcon;
  tagline: string;        // hero one-liner
  blurb: string;          // service-card description (1 sentence)
  intro: string[];        // 2–3 paragraphs for "What it is"
  deliverables: string[]; // what you get
  stack: string[];        // tech & tools
  steps: { title: string; body: string }[]; // 4–5 step process
  caseSlugs: string[];    // links to /case-studies/:slug
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "custom-software",
    label: "Custom Software",
    icon: Code2,
    tagline: "Operations platforms, internal tools, vertical SaaS, built for your specific workflow.",
    blurb: "Bespoke systems built for scale.",
    intro: [
      "If your operation runs on spreadsheets stitched together with email and Slack, you don't need another off-the-shelf SaaS. You need software shaped to the workflow that's already in your team's heads.",
      "We build production-grade custom software for SMBs and startups: quoting tools, internal dashboards, vertical CRMs, operations platforms. Each one designed around your actual process, not a template.",
      "Most projects are live in 8–12 weeks, owned by you, deployable to your cloud.",
    ],
    deliverables: [
      "Custom-fit data model and workflows",
      "Web + mobile-responsive interfaces",
      "Role-based access control & audit logging",
      "Integrations with your existing tools (QuickBooks, HubSpot, Stripe, etc.)",
      "Production deployment + monitoring",
      "Operator handbook + 30-day support",
    ],
    stack: ["React", "TypeScript", "Node.js", "Postgres", "Prisma", "AWS / Vercel"],
    steps: [
      { title: "Workflow audit", body: "We map the real workflow, including the workarounds, before we draw a single screen." },
      { title: "Data model first", body: "The model drives the UI, not the other way around. Get it right early, save weeks later." },
      { title: "Iterative build", body: "Weekly demos against real workflows. Course-correct as the team uses the product." },
      { title: "Launch with hypercare", body: "Live deploy with 30-day same-day support window." },
    ],
    caseSlugs: ["royalsigns-crm", "manufacturing-dashboard"],
    faqs: [
      { q: "Do we own the source code?", a: "Yes. Full IP assignment on day one. You get GitHub access, deployment access, and documentation." },
      { q: "Can it integrate with our existing systems?", a: "Yes: QuickBooks, HubSpot, Stripe, Slack, Salesforce, and most modern APIs. If it has a REST or GraphQL endpoint, we integrate it." },
      { q: "What if our requirements change mid-build?", a: "Our process has weekly demos for exactly this reason. Small adjustments happen continuously; bigger pivots get re-scoped openly." },
    ],
  },
  {
    slug: "mobile-app",
    label: "Mobile Apps",
    icon: Smartphone,
    tagline: "iOS & Android, native-grade builds with React Native or Swift/Kotlin where it matters.",
    blurb: "iOS & Android, native-grade.",
    intro: [
      "Mobile is where most of your customers actually are, and where bad apps lose them the fastest. We build mobile apps that feel native, work offline, and survive App Store and Play Store review on the first try.",
      "Default stack is React Native for most builds (one codebase, real native performance). When the spec calls for it (heavy camera, AR, Bluetooth, deep OS integration), we go full native with Swift/Kotlin.",
      "Most apps ship to both stores in 8–14 weeks.",
    ],
    deliverables: [
      "iOS + Android apps from a shared codebase (or fully native when needed)",
      "App Store + Play Store submission and review handling",
      "Offline-first architecture with sync on signal",
      "Push notifications, deep linking, OTA updates",
      "Backend API + authentication + data sync",
      "Production analytics + crash reporting",
    ],
    stack: ["React Native", "Expo", "Swift / Kotlin", "Node.js", "Postgres", "Firebase"],
    steps: [
      { title: "Define the offline boundary", body: "What works on a tablet in a basement? What needs the network? We design for the worst connection." },
      { title: "Native-first UX", body: "Patterns that feel right on iOS feel right on iOS. We don't ship one design for both platforms." },
      { title: "Real-device testing", body: "Every commit tested on real hardware, not just simulators." },
      { title: "App Store handoff", body: "We handle the submission, the metadata, the screenshots, the review back-and-forth." },
    ],
    caseSlugs: ["jobsnap", "careflow"],
    faqs: [
      { q: "React Native or native: which?", a: "React Native for ~80% of apps (one codebase, near-native performance). Full native only when the spec needs heavy camera, AR, or deep OS integration. We'll tell you which fits in the scoping call." },
      { q: "Who handles App Store / Play Store submission?", a: "We do, including the screenshots, descriptions, and review back-and-forth. Usually a 2–7 day process." },
      { q: "Do you build for iPad and tablets?", a: "Yes, and we design for them specifically when relevant, not just stretched phone layouts." },
    ],
  },
  {
    slug: "web-app",
    label: "Web Apps",
    icon: Globe,
    tagline: "Production React platforms: fast, accessible, scalable.",
    blurb: "Production-ready React platforms.",
    intro: [
      "Modern web applications: admin panels, customer portals, configurators, multi-tenant platforms. Built on the same React / Next.js stack that powers most of the apps you use every day.",
      "Performance, accessibility, and SEO are baseline expectations, not premium add-ons. We hit Lighthouse 95+ on every project as a non-negotiable.",
      "Most web apps ship in 6–10 weeks for an MVP, 10–14 weeks for a full v1.",
    ],
    deliverables: [
      "React + Next.js application with SSR / SSG where it matters",
      "Authentication, authorization, and account management",
      "Real-time data updates (websockets / SSE)",
      "WCAG 2.1 AA accessibility baseline",
      "Lighthouse 95+ performance, SEO, accessibility",
      "Monitoring + analytics + error reporting",
    ],
    stack: ["Next.js", "TypeScript", "React Query", "Postgres", "Vercel", "Auth0 / Clerk"],
    steps: [
      { title: "Information architecture", body: "Routes, data, and access boundaries mapped before any UI is drawn." },
      { title: "Component system", body: "A small, opinionated component library. Everything builds on it, nothing one-off." },
      { title: "Continuous delivery", body: "Every PR deploys to a preview URL. Stakeholders can see and click every change." },
      { title: "Performance budget", body: "Performance and accessibility tested on every PR. Regressions fail CI, not production." },
    ],
    caseSlugs: ["royalsigns-studio", "healthcare-compliance"],
    faqs: [
      { q: "Can you work with our existing design system?", a: "Yes, we'll adopt your tokens, components, and brand guidelines. If you don't have one yet, we'll build a starter that scales." },
      { q: "Where do you deploy?", a: "Vercel, AWS, Cloudflare, or your own infra. We're not locked into a host." },
      { q: "Do you do SEO?", a: "Yes: meta tags, structured data, sitemaps, performance, and proper SSR/SSG strategy. We're not an SEO agency, but we ship sites that rank when the content is right." },
    ],
  },
  {
    slug: "saas",
    label: "SaaS Products",
    icon: Layers,
    tagline: "Multi-tenant, billing-ready, AI-native SaaS, from MVP to production-ready v1.",
    blurb: "Multi-tenant, billing-ready, AI-native.",
    intro: [
      "If you're building a SaaS product, you have a 100-item to-do list before the first customer can sign up. Multi-tenancy, billing, auth, role-based access, audit logs, admin tooling, the AI features that make you different. We've built it before.",
      "We ship SaaS MVPs in 10–14 weeks with everything a B2B buyer expects on day one: SSO, audit trail, billing, admin tools. AI features built in, not bolted on.",
      "If you raise a seed round on the MVP, we know how to evolve it into a v1 that lasts.",
    ],
    deliverables: [
      "Multi-tenant architecture with row-level security",
      "Stripe billing: subscriptions, usage-based, or hybrid",
      "Auth: email/password, SSO, magic links, OAuth",
      "Admin tooling for support and operations",
      "Audit log, customer-facing exports, GDPR-grade controls",
      "AI features integrated natively (not as a separate product)",
    ],
    stack: ["Next.js", "tRPC / GraphQL", "Postgres + RLS", "Stripe", "Clerk / WorkOS", "OpenAI / Anthropic APIs"],
    steps: [
      { title: "Pricing & packaging design", body: "Pricing affects every architectural choice. We design it before we model the schema." },
      { title: "Multi-tenant foundation", body: "Row-level security from day one. No 'we'll fix it later' tenant leaks." },
      { title: "Billing wired correctly", body: "Stripe webhooks, dunning, proration, edge cases. Not your founder's job to debug." },
      { title: "Production-grade observability", body: "Logging, tracing, alerting from day one. You'll see issues before customers do." },
    ],
    caseSlugs: ["bidmind-ai", "outreachos"],
    faqs: [
      { q: "Do you build the AI features or use external models?", a: "Both. The AI features themselves use Claude / GPT / open models depending on cost-and-capability fit. We build the surrounding system (prompting, fallbacks, monitoring, evaluation) that makes them production-grade." },
      { q: "Can you handle SOC 2 prep?", a: "We build with SOC 2 in mind (audit trails, RBAC, encryption, vendor logs), but the formal audit happens with a compliance partner like Vanta or Drata. We do the engineering side." },
      { q: "What about Stripe Connect / marketplaces?", a: "Yes, we've shipped both simple subscriptions and Connect-based marketplaces. Pricing model affects scope significantly." },
    ],
  },
  {
    slug: "ui-ux",
    label: "UI / UX Design",
    icon: PenTool,
    tagline: "Interfaces that earn their place on screen.",
    blurb: "Interfaces that convert.",
    intro: [
      "Every project we ship includes design. But sometimes the design is the project: a rebrand, a major redesign, a new flow that has to convert better than what's there.",
      "Our designers are operators, not decorators. They sit with engineers, they sit with founders, and they ship interfaces that work for the people using them, not just for screenshots in a portfolio.",
      "Standalone design engagements run 4–8 weeks; design-included builds add no separate timeline.",
    ],
    deliverables: [
      "Discovery + competitive teardown",
      "Information architecture and flow design",
      "Visual design system (tokens, components, variants)",
      "Hi-fi Figma mockups for every primary flow",
      "Interactive prototype for stakeholder testing",
      "Engineering handoff with annotated specs",
    ],
    stack: ["Figma", "FigJam", "Notion", "Maze (testing)", "Lottie"],
    steps: [
      { title: "Understand the actual problem", body: "Most design briefs are wrong on the first try. We push back early, not late." },
      { title: "Sketch wide, render narrow", body: "Many low-fidelity options. One direction that gets refined." },
      { title: "Test with real users", body: "Hi-fi prototype goes in front of 5–8 actual users before engineering starts." },
      { title: "Engineering-ready handoff", body: "Tokens, components, states, edge cases: written for the engineer, not the portfolio." },
    ],
    caseSlugs: ["royalsigns-studio", "outreachos"],
    faqs: [
      { q: "Can you redesign just one part of our product?", a: "Yes: focused redesigns of specific flows (onboarding, billing, settings) are some of our highest-ROI engagements." },
      { q: "Do you do brand design or just product?", a: "Primarily product UI/UX. For brand identity we partner with a small set of brand-only studios we trust." },
      { q: "How do you measure design success?", a: "Against the metric the product is supposed to move: conversion, activation, time-on-task, NPS. Design that doesn't move a number is decoration." },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
