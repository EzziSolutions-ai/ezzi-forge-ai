import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import LightSection from "@/components/layout/LightSection";
import HeroIllustration from "@/components/sections/HeroIllustration";

import TrustStrip from "@/components/sections/TrustStrip";
import Differentiators from "@/components/sections/Differentiators";
import DualPath from "@/components/sections/DualPath";
import ServicesSnapshot from "@/components/sections/ServicesSnapshot";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ProcessSnapshot from "@/components/sections/ProcessSnapshot";
import AIAdvantage from "@/components/sections/AIAdvantage";
import TestimonialsTeaser from "@/components/sections/TestimonialsTeaser";
import FAQSnippet from "@/components/sections/FAQSnippet";
import FinalCTA from "@/components/sections/FinalCTA";

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

const stats = [
  { value: "9", label: "Systems Shipped" },
  { value: "5", label: "Industries" },
  { value: "60d", label: "Avg Launch" },
  { value: "24/7", label: "Support" },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Ezzi Solutions AI: Custom software & apps, built with AI</title>
        <meta
          name="description"
          content="Ezzi Solutions AI ships production custom software and apps for startups and SMBs in under 60 days. AI-augmented engineers, 40–70% less than traditional agencies."
        />
        <meta property="og:title" content="Ezzi Solutions AI: Custom software & apps, built with AI" />
        <meta
          property="og:description"
          content="Custom software & apps: built with AI, launched in weeks."
        />
      </Helmet>

      {/* ───────────────── HERO ───────────────── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-mesh" />
        <div className="absolute inset-0 -z-10 bg-dot-grid opacity-[0.55]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="pointer-events-none absolute right-6 top-24 hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted-2 md:block">
          <span className="mr-2 inline-block h-px w-8 align-middle bg-border-strong" />
          v2026.1
        </div>

        <Container className="relative">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid min-h-[calc(100svh-5rem)] grid-cols-1 items-center gap-12 py-24 md:grid-cols-12 md:py-32"
          >
            <div className="md:col-span-7">
            <motion.div variants={item} className="mb-8 inline-flex">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                AI-Powered Software Studio
              </div>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-h1 max-w-5xl text-balance text-foreground"
            >
              Custom software & apps:{{" "}}
              <span className="relative inline-block text-accent">
                built with AI
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
              </span>
              , launched in weeks.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Ezzi Solutions AI ships production apps for startups and SMBs in under 60 days.
              AI-augmented engineers. 40–70% less than traditional agencies.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
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
                See Our Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            <motion.div variants={item} className="mt-20 md:mt-28">
              <div className="grid grid-cols-2 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface/40 backdrop-blur md:grid-cols-4 md:divide-x md:divide-y-0">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="group relative flex flex-col gap-2 px-6 py-6 transition-colors hover:bg-surface-2/60 md:px-8 md:py-7"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">
                      {s.label}
                    </div>
                    <div className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                      {s.value}
                    </div>
                    <span className="pointer-events-none absolute left-6 top-6 h-1 w-1 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100 md:left-8 md:top-7" />
                  </div>
                ))}
              </div>
            </motion.div>
            </div>

            <motion.div variants={item} className="hidden md:col-span-5 md:block">
              <HeroIllustration variant="home" className="h-full w-full max-w-[640px]" />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ───────────────── COMPOSED SECTIONS ───────────────── */}
      <TrustStrip />
      <LightSection><Differentiators /></LightSection>
      <DualPath />
      <LightSection><ServicesSnapshot /></LightSection>
      <FeaturedWork />
      <ProcessSnapshot />
      <LightSection><AIAdvantage /></LightSection>
      <TestimonialsTeaser />
      <LightSection><FAQSnippet /></LightSection>
      <FinalCTA />
    </>
  );
}
