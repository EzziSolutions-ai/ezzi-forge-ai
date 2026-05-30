import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Plus, Zap, DollarSign, Cpu, X, Check } from "lucide-react";
import Container from "@/components/layout/Container";
import LightSection from "@/components/layout/LightSection";
import Footer from "@/components/layout/Footer";

import LandingNav from "@/components/landing/LandingNav";
import PainStrip from "@/components/landing/PainStrip";
import ComparisonTable from "@/components/landing/ComparisonTable";
import GuaranteeBlock from "@/components/landing/GuaranteeBlock";
import PrototypeQuoteForm from "@/components/landing/PrototypeQuoteForm";

import HeroIllustration from "@/components/sections/HeroIllustration";
import { caseStudies } from "@/data/caseStudies";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const claims = [
  { icon: Zap, metric: "60", suffix: "days", label: "Production launch" },
  { icon: DollarSign, metric: "40–70%", suffix: "less", label: "Than traditional agencies" },
  { icon: Cpu, metric: "3–5×", suffix: "faster", label: "Per engineer, per sprint" },
];

const objectionFaqs = [
  {
    q: "I already spent $5K on AI tool subscriptions — won't this just be more burn?",
    a: "Fair concern. The difference: AI tools sell you the option to build software. We sell you the software. Fixed scope, fixed price, fixed timeline, written before you commit. If the math doesn't work, we'll say so on the first call.",
  },
  {
    q: "Can you start from the prototype I already built, or do I throw it away?",
    a: "Depends what's there. We'll audit it on the discovery call. Sometimes the data model and UI sketches save weeks; sometimes the code itself is faster to rebuild than fix. Either way, your time spent isn't wasted — the requirements and edge cases you discovered all carry forward.",
  },
  {
    q: "How do I know you're not just another agency selling 'AI'?",
    a: "We use AI in our build cycle every day — code generation, test stubs, scoping, documentation. We can show you exactly where in our process it shows up. But the senior engineers on your project are real, paired with AI to ship 3–5× faster, not replaced by it.",
  },
  {
    q: "What if we run over the 60-day timeline?",
    a: "Your invoice is automatically reduced by 10%. Built into the quote. We've never paid it out — and that's not because of fine print. It's because we scope honestly. If 60 days isn't realistic, we say so upfront.",
  },
  {
    q: "Who actually owns the code if something goes wrong with you?",
    a: "You do, from day one. GitHub repo, IP assignment, deploy keys — all yours immediately. No proprietary platform, no vendor lock-in. If we got hit by a bus tomorrow, any competent engineering team could take over your codebase by Monday morning.",
  },
];

// 3 SMB-scale case studies that match this avatar
const featuredSlugs = ["royalsigns-crm", "jobsnap", "manufacturing-dashboard"];

export default function FromPrototypeToProduction() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const featuredCases = caseStudies.filter((c) => featuredSlugs.includes(c.slug));

  return (
    <>
      <Helmet>
        <title>From Prototype to Production — Ezzi Solutions AI</title>
        <meta
          name="description"
          content="You tried building software with an AI coding tool and got stuck at 60%. We ship the other 40% — in 60 days, on time, or you pay 10% less."
        />
        <meta property="og:title" content="From Prototype to Production — Ezzi Solutions AI" />
        <meta
          property="og:description"
          content="Your AI prototype is stuck at 60%. We ship the other 40%."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ─── STICKY BOOKMARK NAV ─── */}
      <LandingNav />

      {/* ─── HERO ─── */}
      <section id="top" className="relative isolate overflow-hidden pt-16">
        {/* Atmospheric workspace photo — uniformly visible across the hero */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        {/* Uniform ~55% darkening — photo stays visible, text stays readable */}
        <div className="absolute inset-0 -z-10 bg-background/55" />
        {/* Blue accent glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_75%_50%,rgba(59,130,246,0.22)_0%,transparent_70%)]" />
        {/* Bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" />

        <Container className="relative">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-12 md:py-28"
          >
            <div className="md:col-span-7">
              <motion.div variants={item} className="mb-8 inline-flex">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  For business owners who tried building it themselves
                </div>
              </motion.div>

              <motion.h1
                variants={item}
                className="text-h1 max-w-4xl text-balance text-foreground"
              >
                Your AI prototype is{" "}
                <span className="relative inline-block text-accent">
                  stuck at 60%.
                  <svg
                    aria-hidden
                    viewBox="0 0 300 12"
                    className="absolute -bottom-1 left-0 w-full text-accent/40"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8 Q 80 2 150 7 T 298 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                We ship the other 40%.
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                AI coding tools are excellent at making prototypes. They&apos;re not
                built for production. Senior engineers + AI build the rest — and ship it
                in <span className="text-foreground">60 days, on time, or you pay 10% less</span>.
              </motion.p>

              <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#quote"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("quote");
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 72;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-glow active:scale-[0.98]"
                >
                  Get a Quote
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#compare"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("compare");
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 72;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-foreground/40 hover:bg-surface active:scale-[0.98]"
                >
                  See how we compare
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>

              {/* 3 claims row */}
              <motion.div
                variants={item}
                className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3"
              >
                {claims.map((c) => (
                  <div key={c.label} className="bg-surface/60 p-6 backdrop-blur">
                    <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                      <c.icon className="h-3.5 w-3.5 text-accent" />
                      {c.label}
                    </div>
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="font-display text-3xl font-semibold tracking-tight text-foreground">
                        {c.metric}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                        {c.suffix}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hero illustration */}
            <motion.div variants={item} className="hidden md:col-span-5 md:block">
              <HeroIllustration
                variant="stuck-prototype"
                className="h-full w-full max-w-[640px]"
              />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ─── PROBLEM (Light) ─── */}
      <PainStrip />

      {/* ─── HOW IT WORKS (LIGHT) ─── */}
      <LightSection>
      <section id="how" className="relative scroll-mt-24 py-24 md:py-32">
        <Container>
          <div className="mb-14 max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              Here&apos;s what&apos;s actually going on
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              Vibe coding ≠ engineering.{" "}
              <span className="text-muted-foreground">There&apos;s a ceiling. You hit it.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
            <div className="bg-surface p-8 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-background/40 px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-muted-foreground">
                What AI tools do well
              </div>
              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Prototypes. Demos. The first 60%.
              </h3>
              <ul className="mt-7 space-y-3 border-t border-border pt-6">
                {[
                  "First screen, first feature, first happy-path",
                  "Visual scaffolding and rough data shape",
                  "A demo you can show to a friend",
                  "Good enough to validate that you want to build it",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface p-8 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-danger/40 bg-danger/10 px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-danger">
                What they don&apos;t do
              </div>
              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Production. Scale. The last 40%.
              </h3>
              <ul className="mt-7 space-y-3 border-t border-border pt-6">
                {[
                  "Architecture that survives the second feature",
                  "Real auth, payments, and integrations",
                  "Edge cases, error states, race conditions",
                  "Security, observability, and ownership",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-danger" strokeWidth={2.5} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The bridge — Ezzi positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="mt-12 rounded-3xl border border-border bg-surface/60 p-8 backdrop-blur md:mt-16 md:p-12"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
              The bridge
            </div>
            <h3 className="mt-4 text-h3 text-foreground text-balance md:text-3xl">
              We use the same AI tools you used.{" "}
              <span className="text-muted-foreground">
                We also use senior engineers. That&apos;s the difference between a
                prototype and a production system.
              </span>
            </h3>
          </motion.div>
        </Container>
      </section>
      </LightSection>

      {/* ─── COMPARISON (Light) ─── */}
      <ComparisonTable />

      {/* ─── GUARANTEE ─── */}
      <GuaranteeBlock />

      {/* ─── CASE STUDIES (Light) ─── */}
      <LightSection>
        <section id="work" className="relative scroll-mt-24 py-24 md:py-32">
          <Container>
            <div className="mb-14 max-w-2xl md:mb-20">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
                Selected work — your scale
              </div>
              <h2 className="text-h2 mt-5 text-foreground text-balance">
                Real businesses,{" "}
                <span className="text-muted-foreground">about the size of yours.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                We picked three from the portfolio — operators with revenues in the
                same band you operate at, with operational problems that look like the
                ones you&apos;re trying to solve.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              {featuredCases.map((c) => (
                <Link
                  key={c.slug}
                  to={`/case-studies/${c.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-border-strong"
                >
                  <div className="p-7 md:p-8">
                    <div className="flex items-start justify-between">
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                        № {c.no} · {c.year} · {c.industry}
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-2 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                    </div>
                    <div className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                      {c.name}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {c.blurb}
                    </p>
                    <div className="mt-6 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-2">
                      Shipped in {c.timeline}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </LightSection>

      {/* ─── FAQ (LIGHT) ─── */}
      <LightSection>
      <section id="faq" className="relative scroll-mt-24 py-24 md:py-32">
        <Container>
          <div className="mb-14 max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              The obvious questions
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              What you&apos;re probably thinking{" "}
              <span className="text-muted-foreground">right now.</span>
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-surface">
            {objectionFaqs.map((item, i) => (
              <button
                key={item.q}
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="block w-full border-b border-border text-left transition-colors last:border-b-0 hover:bg-surface-2/60"
                aria-expanded={openFaq === i}
              >
                <div className="flex items-start justify-between gap-6 px-6 py-6 md:px-8 md:py-7">
                  <div className="flex items-start gap-4 md:gap-6">
                    <span className="mt-1 hidden font-mono text-[11px] text-muted-2 md:inline-block">
                      0{i + 1}
                    </span>
                    <span className="text-base font-medium tracking-tight text-foreground md:text-lg">
                      {item.q}
                    </span>
                  </div>
                  <Plus
                    className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      openFaq === i ? "rotate-45 text-accent" : ""
                    }`}
                  />
                </div>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-7 pl-6 text-sm leading-relaxed text-muted-foreground md:px-8 md:pl-[88px] md:text-base">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
        </Container>
      </section>
      </LightSection>

      {/* ─── QUOTE FORM ─── */}
      <PrototypeQuoteForm />

      {/* ─── FOOTER (same as main site) ─── */}
      <Footer />
    </>
  );
}
