import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Check, Plus } from "lucide-react";
import Container from "@/components/layout/Container";
import { type Service } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ServicePageTemplate({ service }: { service: Service }) {
  const [open, setOpen] = useState<number | null>(0);
  const featuredCases = caseStudies.filter((c) => service.caseSlugs.includes(c.slug));

  return (
    <>
      <Helmet>
        <title>{`${service.label} | Ezzi Solutions AI`}</title>
        <meta name="description" content={service.tagline} />
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
            className="max-w-4xl py-20 md:py-24"
          >
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
              <span>/</span>
              <span className="text-foreground">{service.label}</span>
            </div>

            <div className="mt-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface/60 backdrop-blur">
              <service.icon className="h-6 w-6 text-accent" />
            </div>

            <h1 className="text-h1 mt-8 text-balance text-foreground">{service.label}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-foreground md:text-xl">
              {service.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-glow active:scale-[0.98]"
              >
                Get a Quote
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/pricing"
                className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-foreground/40 hover:bg-surface active:scale-[0.98]"
              >
                See pricing & engagement models
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* WHAT IT IS */}
      <section className="relative border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
                What it is
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                The work, plainly.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6">
              {service.intro.map((p) => (
                <p key={p.slice(0, 40)} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT YOU GET */}
      <section className="relative py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
                Deliverables
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                What you get.
              </h2>
            </div>
            <div className="md:col-span-8">
              <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
                {service.deliverables.map((d) => (
                  <li key={d} className="bg-surface px-6 py-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15">
                        <Check className="h-3 w-3 text-accent" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium tracking-tight text-foreground">{d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="relative border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <div className="mb-14 max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              How we do it
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              The {service.steps.length}-step process.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {service.steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="bg-surface p-7 md:p-8"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                  Step {i + 1}
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* TECH STACK */}
      <section className="relative py-20 md:py-24">
        <Container>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              Tools we reach for
            </div>
            <ul className="flex flex-wrap gap-2 md:justify-end">
              {service.stack.map((t) => (
                <li key={t} className="rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[10.5px] tracking-tight text-foreground">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* FEATURED CASE STUDIES */}
      {featuredCases.length > 0 && (
        <section className="relative border-y border-border bg-surface/30 py-24 md:py-32">
          <Container>
            <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                  <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
                  Selected work
                </div>
                <h2 className="text-h2 mt-5 text-foreground text-balance">
                  We&apos;ve done this before.
                </h2>
              </div>
              <Link to="/case-studies" className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                All case studies
                <ArrowUpRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
              {featuredCases.map((c) => (
                <Link
                  key={c.slug}
                  to={`/case-studies/${c.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-border-strong"
                >
                  <div className="p-7 md:p-8">
                    <div className="flex items-start justify-between">
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                        № {c.no} · {c.year} · {c.industry}
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-2 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                    </div>
                    <div className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{c.name}</div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* PRICING INDICATOR */}
      <section className="relative py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface/60 p-8 backdrop-blur md:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              Pricing
            </div>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Quotes are scoped to your specific build. Most {service.label.toLowerCase()} engagements
              run between $15K and $80K. You&apos;ll receive a written quote in 48 hours.
            </p>
            <Link
              to="/pricing"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
            >
              See engagement models
              <ArrowUpRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <div className="mb-12 max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              Common questions
            </div>
            <h2 className="mt-5 text-h2 text-foreground text-balance">
              Questions{" "}
              <span className="text-muted-foreground">we hear before the first call.</span>
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-background">
            {service.faqs.map((item, i) => (
              <button
                key={item.q}
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="block w-full border-b border-border text-left transition-colors last:border-b-0 hover:bg-surface/40"
              >
                <div className="flex items-start justify-between gap-6 px-6 py-6 md:px-8 md:py-7">
                  <span className="text-base font-medium tracking-tight text-foreground md:text-lg">{item.q}</span>
                  <Plus className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${open === i ? "rotate-45 text-accent" : ""}`} />
                </div>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-7 text-sm leading-relaxed text-muted-foreground md:px-8 md:text-base">
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

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2 text-foreground text-balance">
              Building a {service.label.toLowerCase()} project?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Send us the rough idea. We&apos;ll send back a written plan, a written quote,
              and a timeline you can hold us to.
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
