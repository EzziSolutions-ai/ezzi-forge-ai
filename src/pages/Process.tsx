import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import Container from "@/components/layout/Container";

const ease = [0.16, 1, 0.3, 1] as const;

const phases = [
  {
    weeks: "Week 1",
    label: "Discover & scope",
    headline: "Stakeholder interviews, technical scoping, written plan.",
    body:
      "Five working days of structured conversations with the people who will use the system, the people paying for it, and the people who'll keep it running. We leave the week with a written technical plan, a written scope, and a written quote.",
    deliverables: [
      "Stakeholder interview notes (every voice captured)",
      "Technical architecture diagram",
      "Written scope with acceptance criteria",
      "Fixed quote with timeline guarantee",
    ],
  },
  {
    weeks: "Week 2",
    label: "Design",
    headline: "Interfaces and data model — in parallel.",
    body:
      "We design what we'll build, not what looks good in a portfolio. UI mocks for every primary flow plus the data model that backs them. Senior designer + senior engineer working together so nothing drifts between visual and structural design.",
    deliverables: [
      "Figma mockups for every primary user flow",
      "Component system with documented variants",
      "Database schema and API contract draft",
      "Mid-week + end-of-week stakeholder review",
    ],
  },
  {
    weeks: "Weeks 3–5",
    label: "Build with AI",
    headline: "Daily builds, weekly demos, no surprises at the end.",
    body:
      "Senior engineers pair with AI on every commit — scoping, generation, code review, test stubs, documentation. You see a working demo every Friday. Bugs are caught at the commit, not the launch.",
    deliverables: [
      "Daily builds pushed to a private staging URL",
      "Weekly Friday demo (15 minutes, no slides)",
      "Tests written alongside features, not after",
      "Documentation grows with the codebase, not at the end",
    ],
  },
  {
    weeks: "Week 6",
    label: "QA & polish",
    headline: "End-to-end testing on the real flows.",
    body:
      "Automated test coverage hits the spec, then we run the system through every real-world flow we identified in week one. Browser-grade testing, mobile-grade testing, integration-grade testing. Whatever signal we missed surfaces here, not after launch.",
    deliverables: [
      "Full automated test suite (unit + integration + e2e)",
      "Cross-browser, cross-device testing",
      "Load and performance benchmarks",
      "Accessibility audit (WCAG 2.1 AA baseline)",
    ],
  },
  {
    weeks: "Weeks 7–8",
    label: "Launch & handoff",
    headline: "You own the code, the keys, the docs. Day one.",
    body:
      "Production deployment, monitoring, alerting, and a real handoff. We don't disappear into a retainer — we make sure you can run, iterate, and extend the system without us by week 9.",
    deliverables: [
      "Production deployment with monitoring & alerts",
      "Operator runbook (incidents, rollbacks, scaling)",
      "Source code + IP assignment + GitHub access",
      "Live handoff session with your team",
    ],
  },
  {
    weeks: "30 days post-launch",
    label: "Support window",
    headline: "Hypercare without the lock-in retainer.",
    body:
      "Thirty days of free post-launch support — bug fixes, small adjustments, the inevitable 'one more thing' from the field. After day 30, you decide: hire us for ongoing work, hire someone else, or run it yourself. No subscription auto-renew.",
    deliverables: [
      "Same-day response on production issues",
      "Free small adjustments + bug fixes",
      "Weekly check-in for the first month",
      "Optional Build+Run continuation (no commitment)",
    ],
  },
];

const tools = [
  {
    category: "AI",
    items: ["Claude · Anthropic", "GPT-5 / GPT-4o · OpenAI", "Cursor", "GitHub Copilot"],
  },
  {
    category: "Engineering",
    items: ["TypeScript", "React / React Native", "Node.js / Python", "Postgres / Supabase"],
  },
  {
    category: "Design",
    items: ["Figma", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    category: "Ops",
    items: ["Vercel / AWS / Fly.io", "Linear", "GitHub Actions", "OpenTelemetry"],
  },
];

const sampleTimeline = [
  { week: "W1", phase: "Discover", days: 5 },
  { week: "W2", phase: "Design", days: 5 },
  { week: "W3", phase: "Build", days: 5 },
  { week: "W4", phase: "Build", days: 5 },
  { week: "W5", phase: "Build", days: 5 },
  { week: "W6", phase: "QA", days: 5 },
  { week: "W7", phase: "Launch", days: 5 },
  { week: "W8", phase: "Handoff", days: 5 },
];

const phaseColor = {
  Discover: "bg-accent/30",
  Design: "bg-accent/40",
  Build: "bg-accent",
  QA: "bg-accent/55",
  Launch: "bg-accent/70",
  Handoff: "bg-accent/30",
} as const;

export default function Process() {
  return (
    <>
      <Helmet>
        <title>Process — How we ship in 60 days · Ezzi Solutions AI</title>
        <meta
          name="description"
          content="Six phases. Eight weeks. The exact workflow that gets production apps live in under 60 days — what you get at each step, the tools we use, and how AI compresses the cycle."
        />
      </Helmet>

      {/* ─── HERO ─── */}
      <section className="relative isolate overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 -z-10 bg-hero-mesh opacity-80" />
        <div className="absolute inset-0 -z-10 bg-dot-grid opacity-40" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-4xl py-20 md:py-24"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              The 60-day cycle
            </div>

            <h1 className="text-h1 mt-8 text-balance text-foreground">
              How we go from idea{" "}
              <span className="text-muted-foreground">to live product in 60 days.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Six phases. Eight weeks. Every project we&apos;ve shipped has hit
              this timeline — not because we&apos;re lucky, because the workflow
              is built around it.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ─── SAMPLE TIMELINE BAR ─── */}
      <section className="relative pb-20 md:pb-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="overflow-hidden rounded-3xl border border-border bg-surface p-7 md:p-10"
          >
            <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                  Sample project timeline
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  Eight weeks, live.
                </h2>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                Day 0 → Day 56
              </div>
            </div>

            <div className="mt-10 grid grid-cols-8 gap-1.5">
              {sampleTimeline.map((d) => (
                <div key={d.week} className="flex flex-col gap-2">
                  <div
                    className={`h-12 rounded-md ${phaseColor[d.phase as keyof typeof phaseColor]}`}
                    title={`${d.week} — ${d.phase}`}
                  />
                  <div className="text-center font-mono text-[9px] uppercase tracking-[0.16em] text-muted-2">
                    {d.week}
                  </div>
                  <div className="text-center text-[10px] font-medium tracking-tight text-muted-foreground">
                    {d.phase}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-7 md:grid-cols-4">
              <Stat label="Stakeholder interviews" value="6–10" />
              <Stat label="Weekly demos" value="8" />
              <Stat label="Commits per day" value="~20" />
              <Stat label="Post-launch support" value="30 days" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ─── PHASE DETAIL ─── */}
      <section className="relative py-20 md:py-28">
        <Container>
          <div className="mb-14 max-w-3xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              The six phases
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              What happens —{" "}
              <span className="text-muted-foreground">and what you get — at each step.</span>
            </h2>
          </div>

          <div className="space-y-4 md:space-y-6">
            {phases.map((p, i) => (
              <motion.article
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease, delay: i * 0.05 }}
                className="overflow-hidden rounded-3xl border border-border bg-surface md:grid md:grid-cols-12"
              >
                <div className="border-b border-border p-7 md:col-span-4 md:border-b-0 md:border-r md:p-10">
                  <div className="flex items-center gap-3">
                    <div className="grid h-8 w-8 place-items-center rounded-full border border-border-strong bg-background font-mono text-[11px] text-foreground">
                      {i + 1}
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                      {p.weeks}
                    </span>
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    {p.label}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-foreground md:text-lg">
                    {p.headline}
                  </p>
                </div>

                <div className="p-7 md:col-span-8 md:p-10">
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {p.body}
                  </p>

                  <div className="mt-7 border-t border-border pt-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                      You&apos;ll receive
                    </div>
                    <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                      {p.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm text-foreground">
                          <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15">
                            <Check className="h-3 w-3 text-accent" strokeWidth={3} />
                          </div>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── TOOLS ─── */}
      <section className="relative border-y border-border bg-surface/30 py-24 md:py-28">
        <Container>
          <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
                The stack we use
              </div>
              <h2 className="text-h2 mt-5 text-foreground text-balance">
                Boring tools.{" "}
                <span className="text-muted-foreground">Used well.</span>
              </h2>
            </div>
            <div className="md:col-span-7 md:pt-14">
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                We don&apos;t chase frameworks. We use the tools that ship — and we use them
                consistently across every project so your team can take over the codebase
                without learning a custom stack.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {tools.map((cat) => (
              <div key={cat.category} className="bg-surface p-7 md:p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  {cat.category}
                </div>
                <ul className="mt-5 space-y-2.5">
                  {cat.items.map((it) => (
                    <li key={it} className="text-sm font-medium tracking-tight text-foreground">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2 text-foreground text-balance">
              Ready to start{" "}
              <span className="text-accent">your 60 days?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Send the rough idea. We&apos;ll send back the written plan, the written
              quote, and the timeline you can hold us to.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-glow active:scale-[0.98]"
              >
                Get a Quote
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/case-studies"
                className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-foreground/40 hover:bg-surface active:scale-[0.98]"
              >
                See projects we&apos;ve shipped
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">{label}</div>
      <div className="mt-1.5 font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
        {value}
      </div>
    </div>
  );
}
