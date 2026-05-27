import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Code2, Compass, Wrench } from "lucide-react";
import Container from "@/components/layout/Container";

const ease = [0.16, 1, 0.3, 1] as const;

const principles = [
  {
    icon: Code2,
    title: "Senior teams, no junior army",
    body: "Every project gets senior engineers and designers. No billable-hour padding, no learning-on-your-time.",
  },
  {
    icon: Compass,
    title: "AI in the loop, humans in the seat",
    body: "We use AI on every commit. We also catch what AI gets wrong. The job rewards taste, judgment, and shipping.",
  },
  {
    icon: Wrench,
    title: "Real ownership",
    body: "You'll lead projects end-to-end — discovery, design partnership, shipping, post-launch. No hand-offs to nobody.",
  },
];

const roles: { title: string; type: string; location: string; brief: string }[] = [
  // NOTE TO EZZI TEAM:
  // Add real roles here when hiring. Until then this page shows the
  // 'no open roles' state — which is honest, and still collects interest.
];

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers — Ezzi Solutions AI</title>
        <meta name="description" content="Help us build the next 100 systems. Small senior team, AI-augmented workflow, real ownership of every project." />
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
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Careers
            </div>
            <h1 className="text-h1 mt-8 text-balance text-foreground">
              Help us build{" "}
              <span className="text-muted-foreground">the next 100 systems.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Small senior team. AI-augmented workflow. Real ownership of every
              project from discovery to launch. If that sounds like the job
              you&apos;ve been describing to your friends — let&apos;s talk.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* WHY HERE */}
      <section className="relative border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <div className="mb-12 max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              How we work
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              The job, in three sentences.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease, delay: i * 0.06 }}
                className="bg-surface p-8 md:p-10"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/50">
                  <p.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mt-8 text-lg font-semibold tracking-tight text-foreground md:text-xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* OPEN ROLES */}
      <section className="relative py-24 md:py-32">
        <Container>
          <div className="mb-12 max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              Open roles
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              {roles.length === 0 ? "No active roles" : `${roles.length} open roles`}
              {roles.length === 0 && (
                <span className="text-muted-foreground"> — but we&apos;re always reading.</span>
              )}
            </h2>
          </div>

          {roles.length === 0 ? (
            <div className="rounded-3xl border border-border bg-surface p-10 md:p-14">
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                We don&apos;t have specific roles posted right now — but we hire
                opportunistically when the right person reaches out. If you&apos;re a
                senior engineer or designer who likes the way we work, send a note
                and a portfolio. We respond to every one.
              </p>
              <Link
                to="/contact"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-glow active:scale-[0.98]"
              >
                Send an introduction
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {roles.map((r) => (
                <div key={r.title} className="rounded-2xl border border-border bg-surface p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                        {r.type} · {r.location}
                      </div>
                      <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {r.brief}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-2" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border bg-surface/30 py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2 text-foreground text-balance">
              Think we&apos;d work well together?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Send a portfolio, a code sample, or a project you&apos;re proud of —
              and what you&apos;d want from your next gig.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-glow active:scale-[0.98]"
              >
                Introduce yourself
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-foreground/40 hover:bg-surface active:scale-[0.98]"
              >
                Read about us first
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
