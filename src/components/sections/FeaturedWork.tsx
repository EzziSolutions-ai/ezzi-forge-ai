import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";

const ease = [0.16, 1, 0.3, 1] as const;

const featured = [
  {
    no: "01",
    year: "2025",
    industry: "Healthcare",
    name: "CareFlow",
    blurb:
      "Voice-driven patient operations that turn spoken updates into structured records and downstream workflows.",
    tags: ["Voice AI", "Patient records", "Workflow automation"],
    href: "/case-studies/careflow",
  },
  {
    no: "02",
    year: "2024",
    industry: "Sales & Marketing",
    name: "OutreachOS",
    blurb:
      "Outbound engine combining multi-channel sequencing, AI personalization, and pipeline analytics in one workspace.",
    tags: ["Multi-channel", "AI personalization", "Pipeline analytics"],
    href: "/case-studies/outreachos",
  },
  {
    no: "03",
    year: "2026",
    industry: "Field Services",
    name: "JobSnap",
    blurb:
      "Field operations system for crews — job photos, daily reports, and live status from any device.",
    tags: ["Mobile-first", "Daily reports", "Photo logs"],
    href: "/case-studies/jobsnap",
  },
];

export default function FeaturedWork() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              Selected work
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              Real systems.{" "}
              <span className="text-muted-foreground">Running in production today.</span>
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            All case studies
            <ArrowUpRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {featured.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-strong"
            >
              <Link to={p.href} className="block">
                {/* Top: gradient placeholder canvas (replace with screenshot when available) */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-2">
                  <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_45%,rgba(59,130,246,0.18)_0%,transparent_70%)]" />
                  <div className="absolute inset-0 bg-dot-grid opacity-40" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-border-strong bg-background/60 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
                    № {p.no} · {p.year}
                  </div>
                  <div className="absolute bottom-5 left-5 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                    {p.name}
                  </div>
                  <div className="absolute bottom-5 right-5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                    {p.industry}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-7">
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border bg-background/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
                    <span className="text-sm font-medium text-foreground">View case study</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-2 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
