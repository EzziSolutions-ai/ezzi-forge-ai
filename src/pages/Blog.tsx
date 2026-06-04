import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Container from "@/components/layout/Container";
import HeroIllustration from "@/components/sections/HeroIllustration";

const ease = [0.16, 1, 0.3, 1] as const;

// NOTE TO EZZI TEAM:
// Empty for now — once you publish posts, add entries here (or wire to MDX/CMS).
// Until then, this page makes the empty state intentional + collects subscribers.
const posts: { slug: string; title: string; excerpt: string; date: string; category: string }[] = [];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Insights | Ezzi Solutions AI</title>
        <meta name="description" content="Lessons from shipping AI-powered software for startups and SMBs. Process notes, case-study deep-dives, opinions on the craft." />
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
              Insights · Vol. 01 incoming
            </div>
            <h1 className="text-h1 mt-8 text-balance text-foreground">
              Lessons from shipping{" "}
              <span className="text-muted-foreground">AI-powered software.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Process notes, case-study deep-dives, and opinions on the craft.
              Less than the average tech blog, more than the average studio. Subscribe
              to get the next one when it lands.
            </p>
          
            </div>
            <div className="hidden md:col-span-5 md:block">
              <HeroIllustration variant="blog" className="h-full w-full max-w-[640px]" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CONTENT */}
      <section className="relative py-20 md:py-28">
        <Container>
          {posts.length === 0 ? (
            <div className="rounded-3xl border border-border bg-surface p-10 md:p-14">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
                <div className="md:col-span-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                    <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
                    Coming soon
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                    First posts shipping with the site.
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                    We&apos;d rather publish one essay worth reading than ten that aren&apos;t.
                    The first cohort lands shortly. Drop your email and we&apos;ll send it.
                  </p>
                </div>
                <div className="md:col-span-7">
                  <form
                    onSubmit={(e) => { e.preventDefault(); /* TODO: wire to newsletter */ }}
                    className="rounded-2xl border border-border bg-background p-6 md:p-8"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                      Get the first issue
                    </div>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <div className="relative flex-1">
                        <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-2" />
                        <input
                          type="email"
                          required
                          placeholder="you@yourco.com"
                          className="w-full rounded-full border border-border bg-surface px-11 py-3 text-sm text-foreground placeholder:text-muted-2 focus:border-border-strong focus:outline-none focus:ring-1 focus:ring-accent/40"
                        />
                      </div>
                      <button
                        type="submit"
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-glow active:scale-[0.98]"
                      >
                        Subscribe
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                    <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                      One email per post · Unsubscribe at any time
                    </p>
                  </form>

                  <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
                    {[
                      { tag: "Process", note: "How we ship in 60 days" },
                      { tag: "Engineering", note: "AI workflow patterns" },
                      { tag: "Case studies", note: "Behind real builds" },
                    ].map((t) => (
                      <div key={t.tag} className="rounded-xl border border-border bg-background px-4 py-3">
                        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">{t.tag}</div>
                        <div className="mt-1.5 text-sm text-foreground">{t.note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Real post grid (left here for when posts land)
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-border-strong"
                >
                  <div className="p-7 md:p-8">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                      {p.category} · {p.date}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
