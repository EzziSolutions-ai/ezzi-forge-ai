import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import LightSection from "@/components/layout/LightSection";
import HeroIllustration from "@/components/sections/HeroIllustration";
import { services } from "@/data/services";
import Differentiators from "@/components/sections/Differentiators";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — Ezzi Solutions AI</title>
        <meta
          name="description"
          content="Five ways we ship software faster: custom software, mobile apps, web apps, SaaS products, UI/UX design. All built with AI, launched in weeks."
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
              Services
            </div>

            <h1 className="text-h1 mt-8 text-balance text-foreground">
              Five ways{" "}
              <span className="text-muted-foreground">we ship software faster.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Custom software, mobile apps, web platforms, SaaS products, and UI/UX
              design — each built around the same AI-augmented workflow that gets
              production apps live in under 60 days.
            </p>
          
            </div>
            <div className="hidden md:col-span-5 md:block">
              <HeroIllustration variant="services" className="h-full w-full max-w-[640px]" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* SERVICES BENTO */}
      <section className="relative pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-6 md:gap-4">
            {services.map((s, i) => {
              // First two get larger spans for visual hierarchy
              const span = i < 2 ? "md:col-span-3" : "md:col-span-2";
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-border-strong hover:bg-surface-2 md:p-8 ${span}`}
                >
                  <Link to={`/services/${s.slug}`} className="block">
                    <div className="flex items-start justify-between">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/50">
                        <s.icon className="h-5 w-5 text-accent" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-2 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                    </div>

                    <h2 className="mt-10 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {s.label}
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                      {s.tagline}
                    </p>

                    <div className="mt-7 border-t border-border pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-2">
                      Learn more →
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* DIFFERENTIATORS (reused from home, on light surface) */}
      <LightSection><Differentiators /></LightSection>

      {/* CTA */}
      <section className="relative border-t border-border py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2 text-foreground text-balance">
              Not sure which fits?{" "}
              <span className="text-muted-foreground">We&apos;ll tell you.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Send the rough idea — sometimes the right service isn&apos;t the one you
              think you need. We&apos;ll either confirm or suggest a better fit.
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
                Browse the work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
