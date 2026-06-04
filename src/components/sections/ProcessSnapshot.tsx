import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    week: "Week 1",
    title: "Discover & scope",
    body:
      "Stakeholder interviews, technical scoping, AI-augmented requirements gathering. You leave the week with a written plan and a written quote.",
  },
  {
    week: "Week 2",
    title: "Design",
    body:
      "Interfaces and data model in parallel. We design what we'll build, not what looks good in a portfolio.",
  },
  {
    week: "Weeks 3–6",
    title: "Build with AI",
    body:
      "Senior engineers pair with AI on every commit. Daily builds, weekly demos, no surprises at the end.",
  },
  {
    week: "Weeks 7–8",
    title: "Launch & iterate",
    body:
      "QA, deploy, knowledge transfer, and a 30-day support window built in. You own the code, the docs, and the future.",
  },
];

export default function ProcessSnapshot() {
  return (
    <section className="relative border-y border-border bg-surface/30 py-24 md:py-32">
      <Container>
        <div className="mb-16 grid grid-cols-1 gap-10 md:mb-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              The 60-day cycle
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              Four phases.{" "}
              <span className="text-muted-foreground">Eight weeks to live.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-14">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Our timelines aren't a wishlist. They're a contract. Below is the average
              shipping cadence, the one our case studies actually hit. Most projects come
              in at the lower end.
            </p>
            <Link
              to="/process"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
            >
              Read the full process
              <ArrowUpRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="relative">
          {/* Connecting line behind cards */}
          <div className="absolute left-0 right-0 top-[42px] hidden h-px bg-border md:block" />
          <div className="grid grid-cols-1 gap-px overflow-hidden md:grid-cols-4 md:gap-0">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                className="relative border-b border-border bg-background/40 px-6 py-8 md:border-b-0 md:border-r md:last:border-r-0 md:px-7 md:py-9"
              >
                <div className="relative z-10 mb-7 flex items-center gap-3">
                  <div className="grid h-7 w-7 place-items-center rounded-full border border-border-strong bg-background font-mono text-[11px] text-foreground">
                    {i + 1}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                    {s.week}
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
