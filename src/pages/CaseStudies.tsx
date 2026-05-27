import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import HeroIllustration from "@/components/sections/HeroIllustration";
import CaseStudyVisual from "@/components/sections/CaseStudyVisual";
import { caseStudies, industries } from "@/data/caseStudies";

const ease = [0.16, 1, 0.3, 1] as const;

type FilterKey = "All" | (typeof industries)[number];
const filterKeys: FilterKey[] = ["All", ...industries];

const stats = [
  { value: "8", label: "Systems shipped" },
  { value: "6", label: "Industries" },
  { value: "100%", label: "On-time delivery" },
  { value: "8w", label: "Avg launch" },
];

export default function CaseStudies() {
  const [params, setParams] = useSearchParams();
  const initial = (params.get("industry") ?? "All") as FilterKey;
  const [filter, setFilter] = useState<FilterKey>(
    filterKeys.includes(initial) ? initial : "All",
  );

  const filtered = useMemo(
    () =>
      filter === "All"
        ? caseStudies
        : caseStudies.filter((c) => c.industry === filter),
    [filter],
  );

  const onFilter = (next: FilterKey) => {
    setFilter(next);
    const newParams = new URLSearchParams(params);
    if (next === "All") newParams.delete("industry");
    else newParams.set("industry", next);
    setParams(newParams, { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>Case Studies — Ezzi Solutions AI</title>
        <meta
          name="description"
          content="Real systems in production: voice-driven healthcare, sales automation, manufacturing dashboards, field operations apps. Eight case studies across six industries."
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
            className="grid grid-cols-1 gap-10 py-20 md:grid-cols-12 md:items-center md:gap-12 md:py-24">
            <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Selected work · Vol. 01 · 2026
            </div>

            <h1 className="text-h1 mt-8 text-balance text-foreground">
              Real systems.{" "}
              <span className="text-muted-foreground">Running in production today.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Eight projects across six industries — voice AI, sales platforms,
              manufacturing dashboards, field-ops apps. Each one shipped on a
              tight timeline; each one still in production.
            </p>
          
            </div>
            <div className="hidden md:col-span-5 md:block">
              <HeroIllustration variant="case-studies" className="h-full w-full max-w-[640px]" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="relative border-y border-border bg-surface/30">
        <Container>
          <div className="grid grid-cols-2 divide-y divide-border md:grid-cols-4 md:divide-x md:divide-y-0">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2 py-8 md:py-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">
                  {s.label}
                </div>
                <div className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── FILTERS + GRID ─── */}
      <section className="relative py-20 md:py-28">
        <Container>
          <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
                Browse the index
              </div>
              <div className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {filtered.length} {filtered.length === 1 ? "project" : "projects"}
                {filter !== "All" && (
                  <span className="text-muted-foreground"> · {filter}</span>
                )}
              </div>
            </div>

            {/* Filter chips */}
            <div className="-mx-2 flex flex-wrap items-center gap-1.5 overflow-x-auto px-2 pb-1 md:flex-nowrap md:overflow-visible md:pb-0">
              {filterKeys.map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => onFilter(k)}
                  className={`shrink-0 rounded-full border px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] transition-colors ${
                    filter === k
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border bg-background text-muted-foreground hover:border-border-strong hover:text-foreground"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {filtered.map((c, i) => (
              <motion.article
                key={c.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-strong"
              >
                <Link to={`/case-studies/${c.slug}`} className="block">
                  {/* Visual */}
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-2">
                    <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,rgba(59,130,246,0.16)_0%,transparent_70%)]" />
                    <div className="absolute inset-0 bg-dot-grid opacity-40" />
                    <CaseStudyVisual
                      pattern={c.visualPattern}
                      className="absolute inset-0 h-full w-full p-6"
                    />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-border-strong bg-background/60 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
                      № {c.no} · {c.year}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 md:p-7">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-[26px]">
                          {c.name}
                        </div>
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                          {c.industry}
                        </div>
                      </div>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-2 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {c.blurb}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-border bg-background/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-2xl border border-border bg-surface p-12 text-center">
              <p className="text-base text-muted-foreground">
                No case studies in this industry yet —{" "}
                <button
                  type="button"
                  onClick={() => onFilter("All")}
                  className="text-foreground underline-offset-2 hover:underline"
                >
                  show all
                </button>
                .
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="relative border-t border-border py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2 text-foreground text-balance">
              Ready to be the{" "}
              <span className="text-accent">next case study?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Send the rough idea and the rough budget. We send back a working plan,
              a written quote, and a timeline you can hold us to.
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
