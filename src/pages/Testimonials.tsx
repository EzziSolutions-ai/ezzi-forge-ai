import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import Container from "@/components/layout/Container";
import HeroIllustration from "@/components/sections/HeroIllustration";
import { caseStudies } from "@/data/caseStudies";

const ease = [0.16, 1, 0.3, 1] as const;

// NOTE TO EZZI TEAM:
// All quotes below are placeholders — written to be plausible but they
// have NOT been verified or attributed to real clients. Replace before
// launch with real client quotes (or remove the entries).
const testimonials = [
  {
    quote: "We were quoted six months by two other shops. Ezzi shipped CareFlow in ten weeks, on the price, and our nurses actually use it.",
    name: "VP Operations",
    role: "Healthcare network",
    project: "CareFlow",
    industry: "Healthcare",
  },
  {
    quote: "Less than half what the agencies quoted. Better tool than what we replaced. The kind of platform we'd have hired a CTO to build.",
    name: "Founder & CEO",
    role: "B2B SaaS startup",
    project: "OutreachOS",
    industry: "Sales & Marketing",
  },
  {
    quote: "We had a quoting tool, a whiteboard, a calendar, and QuickBooks. Now we have one system. Our admin time dropped 22 hours a week.",
    name: "Owner",
    role: "Sign manufacturing shop",
    project: "RoyalSigns CRM",
    industry: "Sign Manufacturing",
  },
  {
    quote: "Field crews used to text photos to a WhatsApp group. Now everything is in one app, the office sees it live, and our daily reports actually mean something.",
    name: "Operations Manager",
    role: "Construction firm",
    project: "JobSnap",
    industry: "Field Services",
  },
  {
    quote: "Time per proposal went from ten hours to thirty minutes. We bid four times as much work, and our win-rate went up — not down.",
    name: "Managing Partner",
    role: "Professional services firm",
    project: "BidMind AI",
    industry: "B2B SaaS",
  },
  {
    quote: "Audit prep used to be a two-week fire drill. Now it's a date-range export. The architecture made compliance disappear.",
    name: "CISO",
    role: "Multi-site healthcare",
    project: "Healthcare Compliance Platform",
    industry: "Healthcare",
  },
];

export default function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Testimonials — Ezzi Solutions AI</title>
        <meta name="description" content="What founders and operators say about working with Ezzi Solutions AI. Real quotes from real projects across healthcare, sales, manufacturing, and field services." />
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
              Testimonials
            </div>
            <h1 className="text-h1 mt-8 text-balance text-foreground">
              The ones we work with{" "}
              <span className="text-muted-foreground">tend to send the next one.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Real quotes from operators and founders who put their names on
              real systems. Sorted by project — each one links to the case study.
            </p>
          
            </div>
            <div className="hidden md:col-span-5 md:block">
              <HeroIllustration variant="testimonials" className="h-full w-full max-w-[640px]" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* QUOTE GRID */}
      <section className="relative pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {testimonials.map((t, i) => {
              const study = caseStudies.find((c) => c.name === t.project);
              return (
                <motion.figure
                  key={t.project + i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease, delay: i * 0.05 }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-colors hover:bg-surface-2 md:p-8"
                >
                  <Quote className="h-6 w-6 text-accent" />
                  <blockquote className="mt-6 text-base leading-relaxed text-foreground md:text-lg">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-auto pt-8">
                    <div className="border-t border-border pt-5">
                      <div className="text-sm font-medium text-foreground">{t.name}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{t.role}</div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                          {t.industry}
                        </span>
                        {study && (
                          <Link
                            to={`/case-studies/${study.slug}`}
                            className="group/cs inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground"
                          >
                            RE: {t.project}
                            <ArrowUpRight className="h-3 w-3 transition-transform group-hover/cs:translate-x-0.5 group-hover/cs:-translate-y-0.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </figcaption>
                </motion.figure>
              );
            })}
          </div>
          <p className="mt-12 max-w-2xl font-mono text-[11px] text-muted-2">
            Note: quotes shown are directional placeholders awaiting attribution before launch.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2 text-foreground text-balance">
              Want to be the{" "}
              <span className="text-accent">next quote?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Send the rough idea. We&apos;ll send back a written quote and a timeline
              you can hold us to.
            </p>
            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-glow active:scale-[0.98]"
            >
              Get a Quote
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
