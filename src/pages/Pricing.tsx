import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Mic2,
  Send,
  Brain,
  Wrench,
  ShoppingBag,
  HardHat,
  Boxes,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import Container from "@/components/layout/Container";

const ease = [0.16, 1, 0.3, 1] as const;

const projectTypes = [
  {
    icon: Mic2,
    name: "Voice / AI-driven operations app",
    proof: "CareFlow",
    fit: "Healthcare and ops-heavy SMBs that want spoken updates → structured records",
  },
  {
    icon: Send,
    name: "Outbound / sales automation platform",
    proof: "OutreachOS",
    fit: "Sales-led startups consolidating multi-channel + AI personalization",
  },
  {
    icon: Brain,
    name: "AI-powered SaaS product",
    proof: "BidMind AI",
    fit: "B2B SaaS founders building AI-native products from day one",
  },
  {
    icon: Wrench,
    name: "Custom industry software",
    proof: "RoyalSigns CRM · Manufacturing Dashboard",
    fit: "Established SMBs replacing spreadsheets and patched-together tools",
  },
  {
    icon: ShoppingBag,
    name: "Customer-facing configurator",
    proof: "RoyalSigns Studio",
    fit: "E-commerce + custom-order shops that need live preview + ordering",
  },
  {
    icon: HardHat,
    name: "Field / mobile operations app",
    proof: "JobSnap",
    fit: "Construction and field-services crews logging from any device",
  },
];

const included = [
  "Discovery & technical scoping",
  "UX / UI design",
  "AI-augmented development",
  "Automated + manual QA",
  "Deployment & launch support",
  "30-day post-launch support",
  "Knowledge transfer & documentation",
  "Full code ownership, day one",
];

const engagements = [
  {
    icon: Boxes,
    name: "Fixed-scope build",
    blurb: "Best for MVPs with a clear spec or wireframes.",
    points: ["Fixed price, fixed timeline", "Written acceptance criteria", "One milestone, one launch"],
    badge: "Most common",
  },
  {
    icon: Sparkles,
    name: "Sprint-based",
    blurb: "Best for evolving products that need optionality.",
    points: ["Two-week sprints", "Backlog you control", "Pause or extend any sprint"],
    badge: "For SaaS",
  },
  {
    icon: RefreshCw,
    name: "Build + Run",
    blurb: "Best for SMBs wanting an ongoing partnership.",
    points: ["Build phase + monthly retainer", "Live monitoring + support", "Feature pipeline on tap"],
    badge: "For operators",
  },
];

const stages = ["Idea", "Wireframes", "Have specs", "Existing product"] as const;
const timelines = ["ASAP", "1–3 months", "3–6 months", "Just exploring"] as const;
const budgets = ["< $10K", "$10K – $25K", "$25K – $50K", "$50K+"] as const;

export default function Pricing() {
  const [stage, setStage] = useState<(typeof stages)[number]>("Idea");
  const [timeline, setTimeline] = useState<(typeof timelines)[number]>("1–3 months");
  const [budget, setBudget] = useState<(typeof budgets)[number]>("$10K – $25K");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to backend / Resend / Formspree before launch
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Pricing & Packages — Ezzi Solutions AI</title>
        <meta
          name="description"
          content="Quote-based pricing for AI-powered software & app development. Most quotes returned within 48 hours."
        />
      </Helmet>

      {/* ─── HERO ─── */}
      <section className="relative isolate overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 -z-10 bg-hero-mesh opacity-90" />
        <div className="absolute inset-0 -z-10 bg-dot-grid opacity-40" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-4xl py-20 md:py-28"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Pricing & Packages
            </div>

            <h1 className="text-h1 mt-8 text-balance text-foreground">
              Pricing built for startups.{" "}
              <span className="text-muted-foreground">Quotes built for clarity.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Every project is quote-based — we&apos;d rather price the work, not your
              wallet. Tell us what you&apos;re building, and you&apos;ll have a written
              quote in 48 hours.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ─── PROJECT TYPES ─── */}
      <section className="relative py-24 md:py-32">
        <Container>
          <div className="mb-14 max-w-2xl md:mb-20">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              The six things we build
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              Six project types.{" "}
              <span className="text-muted-foreground">All running in production today.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {projectTypes.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-border-strong hover:bg-surface-2"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/50">
                    <p.icon className="h-4 w-4 text-accent" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-base font-semibold tracking-tight text-foreground md:text-lg">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.fit}</p>
                <div className="mt-6 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-2">
                  Proof · {p.proof}
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="relative border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
                Always in scope
              </div>
              <h2 className="text-h2 mt-5 text-foreground text-balance">
                What you get,{" "}
                <span className="text-muted-foreground">every time.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Every engagement includes the same eight things. Beyond that, scope
                is shaped to your specific build.
              </p>
            </div>
            <div className="md:col-span-7">
              <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
                {included.map((line) => (
                  <li key={line} className="bg-surface px-6 py-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15">
                        <Check className="h-3 w-3 text-accent" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium tracking-tight text-foreground">
                        {line}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── ENGAGEMENT MODELS ─── */}
      <section className="relative py-24 md:py-32">
        <Container>
          <div className="mb-14 max-w-2xl md:mb-20">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              How we work together
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              Three engagement models —{" "}
              <span className="text-muted-foreground">pick what fits the project.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {engagements.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-colors hover:bg-surface-2 md:p-10"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/50">
                    <m.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="rounded-full border border-border-strong bg-background/40 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.22em] text-muted-foreground">
                    {m.badge}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {m.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.blurb}</p>
                <ul className="mt-7 space-y-3 border-t border-border pt-6">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── QUOTE FORM ─── */}
      <section className="relative border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
                Request a quote
              </div>
              <h2 className="text-h2 mt-5 text-foreground text-balance">
                Send the rough idea.{" "}
                <span className="text-muted-foreground">Get a written quote in 48 hours.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                We&apos;ll either return a written quote, suggest a different scope that
                fits your budget, or — if we&apos;re not the right fit — point you to
                someone who is.
              </p>

              <ul className="mt-10 space-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  No NDA needed for the first conversation
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  We respond to every inbound within 48 hours
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  No hard sell — we book ~1 in 3 projects we&apos;re asked about
                </li>
              </ul>
            </div>

            <div className="md:col-span-7">
              {!submitted ? (
                <form
                  onSubmit={onSubmit}
                  className="rounded-3xl border border-border bg-surface p-7 md:p-9"
                >
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <Field label="Your name" name="name" placeholder="Jane Founder" required />
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      placeholder="jane@yourco.com"
                      required
                    />
                  </div>

                  <div className="mt-5">
                    <Field label="Company" name="company" placeholder="YourCo Inc." />
                  </div>

                  <ChipGroup
                    label="Where are you?"
                    options={stages}
                    value={stage}
                    onChange={setStage}
                  />
                  <ChipGroup
                    label="Timeline"
                    options={timelines}
                    value={timeline}
                    onChange={setTimeline}
                  />
                  <ChipGroup
                    label="Rough budget"
                    options={budgets}
                    value={budget}
                    onChange={setBudget}
                  />

                  <div className="mt-7">
                    <label
                      htmlFor="brief"
                      className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2"
                    >
                      Tell us about the project
                    </label>
                    <textarea
                      id="brief"
                      name="brief"
                      required
                      rows={5}
                      placeholder="What are you building? Who's it for? Where are you stuck?"
                      className="mt-2 w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-2 focus:border-border-strong focus:outline-none focus:ring-1 focus:ring-accent/40"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-glow active:scale-[0.98] md:w-auto md:px-8"
                  >
                    Send quote request
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                    By submitting, you agree to our{" "}
                    <Link to="/privacy" className="underline-offset-2 hover:underline">
                      privacy policy
                    </Link>
                    . We reply within 48 hours.
                  </p>
                </form>
              ) : (
                <div className="rounded-3xl border border-border bg-surface p-10 md:p-12">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
                    <Check className="h-5 w-5 text-accent" strokeWidth={2.5} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                    Got it — quote incoming.
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    You&apos;ll hear from a senior engineer within 48 hours. If it&apos;s
                    urgent, ping us at <span className="text-foreground">hello@ezzisolutions.ai</span>.
                  </p>
                  <Link
                    to="/case-studies"
                    className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                  >
                    Browse case studies while you wait
                    <ArrowUpRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── CLOSING PROMISE ─── */}
      <section className="relative py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2 text-foreground text-balance">
              Most quotes returned{" "}
              <span className="text-accent">within 48 hours.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              No back-and-forth. No discovery call to schedule a discovery call. A
              written quote, a written scope, and a date you can hold us to.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/process"
                className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-foreground/40 hover:bg-surface active:scale-[0.98]"
              >
                See the full process
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

// ─── Sub-components ─────────────────────────────────────────────

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-2 focus:border-border-strong focus:outline-none focus:ring-1 focus:ring-accent/40"
      />
    </div>
  );
}

function ChipGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="mt-7">
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
        {label}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
              value === opt
                ? "border-accent bg-accent/10 text-accent"
                : "border-border bg-background text-muted-foreground hover:border-border-strong hover:text-foreground"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
