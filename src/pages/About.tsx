import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import LightSection from "@/components/layout/LightSection";
import HeroIllustration from "@/components/sections/HeroIllustration";
import AIAdvantage from "@/components/sections/AIAdvantage";

const ease = [0.16, 1, 0.3, 1] as const;

const values = [
  {
    label: "Ship fast",
    body:
      "Software gets built faster than ever. We pass that compression through: to you, to your investors, to your customers.",
  },
  {
    label: "Build to last",
    body:
      "Fast and durable aren't trade-offs. We write code an engineering team can take over without learning a custom stack.",
  },
  {
    label: "Cut bloat",
    body:
      "We don't bill a junior army. Small senior team + AI = the same throughput, half the cost, none of the politics.",
  },
  {
    label: "Operator energy",
    body:
      "Our designers and engineers think like operators. The number on the dashboard moves, or the work doesn't count.",
  },
];

const numbers = [
  { value: "9", label: "Systems shipped" },
  { value: "6", label: "Industries" },
  { value: "60d", label: "Avg launch" },
  { value: "100%", label: "On-time delivery" },
  { value: "0", label: "Junior-army timesheets" },
  { value: "24/7", label: "Support uptime" },
];

const team = [
  // NOTE TO EZZI TEAM:
  // Replace with real team members before launch. Profile photos go in
  // /public/team/<slug>.jpg. Until then, these are placeholder roles.
  { name: "Founder", role: "Engineering & Strategy" },
  { name: "Senior Engineer", role: "Full-stack & AI" },
  { name: "Senior Designer", role: "Product & UX" },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Ezzi Solutions AI</title>
        <meta
          name="description"
          content="A small senior team building software the AI-first way. Part of Henagon. Custom software & apps, launched in weeks."
        />
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
              About us
            </div>
            <h1 className="text-h1 mt-8 text-balance text-foreground">
              A small senior team{" "}
              <span className="text-muted-foreground">building software the AI-first way.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We&apos;re Ezzi Solutions AI, part of Henagon. We build production software
              for startups and SMBs in eight weeks, using AI to compress the parts of the
              cycle that don&apos;t need a human, and senior engineers on the parts that do.
            </p>
          
            </div>
            <div className="hidden md:col-span-5 md:block">
              <HeroIllustration variant="about" className="h-full w-full max-w-[640px]" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ORIGIN STORY */}
      <section className="relative border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
                Origin
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Why Ezzi exists.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Most software agencies are built for a world that&apos;s gone. They charge
                six months to ship what should take eight weeks, staff a junior army on
                billable hours, and bury the actual senior work under three layers of
                project management.
              </p>
              <p>
                Meanwhile, founders raise smaller rounds and SMB owners run leaner. The
                math stopped working a long time ago, but the agencies didn&apos;t change.
              </p>
              <p>
                Ezzi was built for the world that&apos;s here: AI doing the compression,
                senior engineers doing the thinking, fixed timelines, no surprises, and
                code you actually own at the end. Same craft. Different math.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="relative py-24 md:py-32">
        <Container>
          <div className="mb-14 max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              How we operate
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              Four ideas{" "}
              <span className="text-muted-foreground">we don&apos;t bend on.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease, delay: i * 0.06 }}
                className="bg-surface p-8 md:p-10"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  Value {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {v.label}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* TEAM */}
      <section className="relative border-y border-border bg-surface/30 py-24 md:py-28">
        <Container>
          <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
                The team
              </div>
              <h2 className="text-h2 mt-5 text-foreground text-balance">
                Small.{" "}
                <span className="text-muted-foreground">Senior. AI-augmented.</span>
              </h2>
            </div>
            <div className="md:col-span-7 md:pt-14">
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                We stay deliberately small. Every project gets senior engineers and a
                senior designer, not a junior army with a senior reviewer on top.
                AI is what makes this possible.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
            {team.map((m, i) => (
              <div key={i} className="bg-surface p-8 md:p-10">
                <div className="flex aspect-square w-full items-center justify-center rounded-2xl border border-border bg-background/40 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">
                  Photo · TBD
                </div>
                <div className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                  {m.name}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                  {m.role}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-xl font-mono text-[11px] text-muted-2">
            Note: team profiles will be populated with real photos + names before launch.
          </p>
        </Container>
      </section>

      {/* AI ADVANTAGE (reused, now on light surface for contrast) */}
      <LightSection><AIAdvantage /></LightSection>

      {/* BY THE NUMBERS */}
      <section className="relative border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <div className="mb-14 max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              By the numbers
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              The receipts.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
            {numbers.map((n) => (
              <div key={n.label} className="bg-surface p-7 md:p-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                  {n.label}
                </div>
                <div className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  {n.value}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2 text-foreground text-balance">
              Want to work with us?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Either you have a project (in which case, hello). Or you want to join the
              team (in which case, also hello).
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
                to="/careers"
                className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-foreground/40 hover:bg-surface active:scale-[0.98]"
              >
                Join the team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
