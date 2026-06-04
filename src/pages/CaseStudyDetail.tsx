import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Check, Quote } from "lucide-react";
import Container from "@/components/layout/Container";
import CaseStudyVisual from "@/components/sections/CaseStudyVisual";
import { getCaseStudy, getNextCaseStudy } from "@/data/caseStudies";

const ease = [0.16, 1, 0.3, 1] as const;

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudy(slug) : undefined;

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  const next = getNextCaseStudy(study.slug);

  return (
    <>
      <Helmet>
        <title>{`${study.name}: ${study.industry} | Ezzi Solutions AI`}</title>
        <meta
          name="description"
          content={`${study.tagline} ${study.blurb}`}
        />
        <meta property="og:title" content={`${study.name}: ${study.industry}`} />
        <meta property="og:description" content={study.blurb} />
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
            className="py-16 md:py-20"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <Link to="/case-studies" className="hover:text-foreground transition-colors">
                Case Studies
              </Link>
              <span>/</span>
              <span>{study.industry}</span>
              <span>/</span>
              <span className="text-foreground">№ {study.no}</span>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <h1 className="text-h1 text-balance text-foreground">{study.name}</h1>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground md:text-xl">
                  {study.tagline}
                </p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {study.blurb}
                </p>

                <ul className="mt-10 flex flex-wrap gap-2">
                  {study.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border bg-surface/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* At-a-glance */}
              <div className="md:col-span-5">
                <div className="rounded-3xl border border-border bg-surface/60 p-7 backdrop-blur md:p-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                    <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
                    At a glance
                  </div>
                  <dl className="mt-7 divide-y divide-border">
                    <Row label="Industry" value={study.industry} />
                    <Row label="Year" value={study.year} />
                    <Row label="Timeline" value={study.timeline} />
                    <Row label="Stack" value={study.stack.join(" · ")} small />
                  </dl>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ─── VISUAL ─── */}
      <section className="relative pb-24 md:pb-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="relative overflow-hidden rounded-3xl border border-border bg-surface"
          >
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(59,130,246,0.16)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-dot-grid opacity-40" />
            <div className="relative px-6 py-14 md:px-20 md:py-20">
              <CaseStudyVisual
                pattern={study.visualPattern}
                className="mx-auto h-auto w-full max-w-3xl"
              />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ─── THE CHALLENGE ─── */}
      <section className="relative border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
                The challenge
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Where they were stuck.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                {study.challenge}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── THE SOLUTION + FEATURES ─── */}
      <section className="relative py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
                What we built
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                The solution.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                {study.solution}
              </p>

              {/* Features list */}
              <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
                {study.features.map((f) => (
                  <li key={f} className="bg-surface px-6 py-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15">
                        <Check className="h-3 w-3 text-accent" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium tracking-tight text-foreground">
                        {f}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="relative border-y border-border bg-surface/30 py-20 md:py-24">
        <Container>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              Built with
            </div>
            <ul className="flex flex-wrap gap-2 md:justify-end">
              {study.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-background/60 px-3.5 py-1.5 font-mono text-[10.5px] tracking-tight text-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ─── OUTCOMES ─── */}
      <section className="relative py-24 md:py-32">
        <Container>
          <div className="mb-12 max-w-2xl md:mb-16">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              Outcome
            </div>
            <h2 className="mt-5 text-h2 text-foreground text-balance">
              What changed{" "}
              <span className="text-muted-foreground">after launch.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
            {study.outcomes.map((o, i) => (
              <motion.div
                key={o.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="bg-surface p-8 md:p-10"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                  {o.label}
                </div>
                <div className="mt-6 font-display text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
                  {o.value}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── QUOTE (optional) ─── */}
      {study.quote && (
        <section className="relative border-t border-border bg-surface/30 py-24 md:py-28">
          <Container>
            <motion.figure
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease }}
              className="mx-auto max-w-3xl text-center"
            >
              <Quote className="mx-auto h-8 w-8 text-accent" />
              <blockquote className="mt-8 text-2xl leading-snug tracking-tight text-foreground md:text-3xl">
                &ldquo;{study.quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-10 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                {study.quote.attribution}
              </figcaption>
            </motion.figure>
          </Container>
        </section>
      )}

      {/* ─── NEXT CASE STUDY ─── */}
      <section className="relative py-20 md:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                Next case study
              </div>
              <div className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {next.name}
              </div>
              <div className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {next.blurb}
              </div>
            </div>
            <Link
              to={`/case-studies/${next.slug}`}
              className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-foreground/40 hover:bg-surface active:scale-[0.98]"
            >
              Read {next.name}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="relative border-t border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2 text-foreground text-balance">
              Building something like {study.name}?
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

// ─── helpers ─────────────────────────────────────────────────────

function Row({
  label,
  value,
  small,
}: {
  label: string;
  value: string;
  small?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0">
      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">
        {label}
      </dt>
      <dd
        className={`text-right font-medium text-foreground ${
          small ? "text-xs leading-relaxed text-muted-foreground" : "text-sm"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}
