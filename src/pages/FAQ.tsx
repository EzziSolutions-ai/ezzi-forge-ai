import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Search } from "lucide-react";
import Container from "@/components/layout/Container";
import HeroIllustration from "@/components/sections/HeroIllustration";

const ease = [0.16, 1, 0.3, 1] as const;

type Category = "Pricing" | "Timeline" | "Process" | "Ownership" | "Support" | "AI";

const faqs: { category: Category; q: string; a: string }[] = [
  // PRICING
  { category: "Pricing", q: "Why are you 40–70% less than traditional agencies?",
    a: "Two reasons. (1) AI compresses the parts of the build that don't need a human — boilerplate, scaffolding, test stubs, internal docs. (2) We run lean senior teams, no junior army with billable hours. The savings pass through to you." },
  { category: "Pricing", q: "What does a typical project cost?",
    a: "Most engagements run between $15K and $80K depending on scope. We don't publish fixed prices because the work isn't a fixed product — but we return a written quote within 48 hours of your inquiry." },
  { category: "Pricing", q: "Do you offer equity-based pricing for early-stage startups?",
    a: "Occasionally — for pre-seed founders building something we believe in, we'll structure a hybrid (reduced cash + equity). Reach out and tell us the story." },
  { category: "Pricing", q: "Do I pay upfront or in installments?",
    a: "Typically 50% to start, 50% on launch. For longer engagements we move to monthly billing tied to milestones." },

  // TIMELINE
  { category: "Timeline", q: "Can you really ship a production app in 60 days?",
    a: "Yes — that's our baseline. The 60-day clock starts when scope is locked. Most projects come in at 45–55 days. Larger platforms (multi-product SaaS, regulated industries) take 90–120, and we say so upfront." },
  { category: "Timeline", q: "What slows projects down?",
    a: "Almost always one of: scope creep, slow stakeholder feedback, or third-party API delays. We flag all three at week one and re-quote if scope changes mid-build." },
  { category: "Timeline", q: "Can you start next week?",
    a: "Usually. We hold capacity ~2 weeks out for new projects. If you need an immediate start, ask — sometimes there's room." },

  // PROCESS
  { category: "Process", q: "Do you sign an NDA?",
    a: "Not for the first conversation. If we move forward, we'll sign yours or send ours — usually mutual is cleanest." },
  { category: "Process", q: "Will I see progress while you build?",
    a: "Yes — daily builds deploy to a private staging URL, and we run a 15-minute Friday demo every week. No 'six-week black box' surprises." },
  { category: "Process", q: "Do you do design too, or just engineering?",
    a: "Both. Every project includes UX/UI from a senior designer. If you already have Figma designs, we'll work from yours. We can also do design-only engagements." },
  { category: "Process", q: "What if our requirements change mid-build?",
    a: "Small adjustments happen continuously — that's why we do weekly demos. Bigger pivots get re-scoped openly: new written quote, new timeline if needed, no drama." },

  // OWNERSHIP
  { category: "Ownership", q: "Who owns the code?",
    a: "You do. On day one. You get the GitHub repo, the IP assignment, the deploy access, and the documentation. No retainer-lockin, no proprietary platform you're stuck on." },
  { category: "Ownership", q: "Will another team be able to take over the codebase?",
    a: "Yes — we deliberately use boring, mainstream tools (TypeScript, React, Postgres, etc.) so any competent engineering team can pick it up without learning a custom stack." },
  { category: "Ownership", q: "Do I keep the design files too?",
    a: "Yes — Figma file ownership transfers at handoff, including the component system and tokens." },

  // SUPPORT
  { category: "Support", q: "What happens after launch?",
    a: "30 days of free post-launch support — bug fixes, small adjustments, the inevitable 'one more thing' from the field. After day 30, you choose: hire us for ongoing work, hire someone else, or run it yourself." },
  { category: "Support", q: "Do you offer ongoing support contracts?",
    a: "Yes — our Build+Run engagement model includes a monthly retainer for monitoring, support, and feature work. No commitment beyond the current month." },
  { category: "Support", q: "What's your response time on a production issue?",
    a: "Same-day during the free support window. Build+Run retainers get same-day response with severity tiers (P0 within 1hr, P1 within 4hr)." },

  // AI
  { category: "AI", q: "What does your AI-augmented workflow actually look like?",
    a: "AI pairs with our engineers on scoping, code generation, code review, test generation, and documentation. A senior engineer ships what used to require a small team, with better quality control and fewer bugs in production." },
  { category: "AI", q: "Are you replacing engineers with AI?",
    a: "No. We're using AI to make senior engineers more effective. Every line of code is reviewed by a human; every architecture decision is made by a human. AI does the grunt work; humans do the thinking." },
  { category: "AI", q: "Will my product have AI features in it?",
    a: "Only if AI features make sense for your product. Sometimes the best AI work is what we use internally to ship faster — and the actual product has zero LLM calls. We design what works." },
  { category: "AI", q: "Which AI tools do you use?",
    a: "Claude (Anthropic), GPT-5 / GPT-4o (OpenAI), Cursor for in-editor pairing, GitHub Copilot for inline completions. We try new tools constantly; we don't lock to one vendor." },
];

const allCategories = ["All", "Pricing", "Timeline", "Process", "Ownership", "Support", "AI"] as const;
type Filter = (typeof allCategories)[number];

export default function FAQ() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [openKey, setOpenKey] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      if (filter !== "All" && f.category !== filter) return false;
      if (q && !f.q.toLowerCase().includes(q) && !f.a.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [filter, query]);

  return (
    <>
      <Helmet>
        <title>FAQ — Ezzi Solutions AI</title>
        <meta name="description" content="Pricing, timeline, process, ownership, support, and AI workflow — every question we hear before the first call." />
      </Helmet>

      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 -z-10 bg-hero-mesh opacity-80" />
        <div className="absolute inset-0 -z-10 bg-dot-grid opacity-40" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="grid grid-cols-1 gap-10 py-20 md:grid-cols-12 md:items-center md:gap-12 md:py-24">
            <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              FAQ
            </div>
            <h1 className="text-h1 mt-8 text-balance text-foreground">
              Questions{" "}
              <span className="text-muted-foreground">we hear before the first call.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Pricing, timeline, process, ownership, support, AI — the full set of
              answers. If something&apos;s missing, ask us directly.
            </p>
          
            </div>
            <div className="hidden md:col-span-5 md:block">
              <HeroIllustration variant="faq" className="h-full w-full max-w-[640px]" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SEARCH + FILTER */}
      <section className="relative pb-10 md:pb-16">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-sm">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-2" />
              <input
                type="search"
                placeholder="Search questions…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-surface px-11 py-3 text-sm text-foreground placeholder:text-muted-2 focus:border-border-strong focus:outline-none focus:ring-1 focus:ring-accent/40"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`shrink-0 rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] transition-colors ${
                    filter === cat
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border bg-background text-muted-foreground hover:border-border-strong hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* LIST */}
      <section className="relative pb-24 md:pb-32">
        <Container>
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-border bg-surface p-12 text-center">
              <p className="text-base text-muted-foreground">
                Nothing matches that search.{" "}
                <button
                  type="button"
                  onClick={() => { setQuery(""); setFilter("All"); }}
                  className="text-foreground underline-offset-2 hover:underline"
                >
                  Clear filters
                </button>
                {" "}or{" "}
                <Link to="/contact" className="text-foreground underline-offset-2 hover:underline">
                  ask us directly
                </Link>
                .
              </p>
            </div>
          ) : (
            <div className="overflow-hidden rounded-3xl border border-border bg-surface">
              {filtered.map((item, i) => {
                const key = `${item.category}-${i}`;
                const isOpen = openKey === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    className="block w-full border-b border-border text-left transition-colors last:border-b-0 hover:bg-surface-2/60"
                  >
                    <div className="flex items-start justify-between gap-6 px-6 py-6 md:px-8 md:py-7">
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2 md:w-24">
                          {item.category}
                        </span>
                        <span className="text-base font-medium tracking-tight text-foreground md:text-lg">
                          {item.q}
                        </span>
                      </div>
                      <Plus className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-45 text-accent" : ""}`} />
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-7 text-sm leading-relaxed text-muted-foreground md:px-8 md:pl-[152px] md:text-base">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border bg-surface/30 py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2 text-foreground text-balance">
              Question not here?{" "}
              <span className="text-muted-foreground">Ask us.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              We&apos;ll add anything that comes up enough times.
            </p>
            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-glow active:scale-[0.98]"
            >
              Send a question
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
