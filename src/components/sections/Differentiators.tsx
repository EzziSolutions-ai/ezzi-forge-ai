import { motion } from "framer-motion";
import { Zap, DollarSign, Cpu } from "lucide-react";
import Container from "@/components/layout/Container";

const ease = [0.16, 1, 0.3, 1] as const;

const claims = [
  {
    metric: "60",
    suffix: "days",
    label: "Production launch — start to live",
    body:
      "We ship working production apps in under 60 days. Not prototypes. Not staging. Real software your customers use.",
    icon: Zap,
    accent: "Speed",
  },
  {
    metric: "40–70%",
    suffix: "less",
    label: "Than traditional agencies",
    body:
      "AI-augmented builds mean a small senior team can do what used to take ten devs. The math passes through to you.",
    icon: DollarSign,
    accent: "Cost",
  },
  {
    metric: "3–5×",
    suffix: "faster",
    label: "Per engineer, per sprint",
    body:
      "Our engineers pair with AI on every commit — scoping, code, tests, review. The whole cycle compresses.",
    icon: Cpu,
    accent: "Throughput",
  },
];

export default function Differentiators() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="mb-16 max-w-3xl md:mb-20">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
            Why teams pick Ezzi
          </div>
          <h2 className="text-h2 mt-5 text-foreground text-balance">
            Three numbers we put on the page —{" "}
            <span className="text-muted-foreground">because we can actually hit them.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
          {claims.map((c, i) => (
            <motion.article
              key={c.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="group relative bg-surface p-8 md:p-10"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">
                  <c.icon className="h-3.5 w-3.5 text-accent" />
                  {c.accent}
                </div>
                <span className="font-mono text-[10px] text-muted-2">0{i + 1}</span>
              </div>

              <div className="mt-12 flex items-baseline gap-2">
                <span className="font-display text-6xl font-semibold tracking-tight text-foreground md:text-7xl">
                  {c.metric}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {c.suffix}
                </span>
              </div>

              <div className="mt-3 font-medium text-foreground">{c.label}</div>

              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>

              <span className="pointer-events-none absolute inset-x-8 bottom-0 h-px translate-y-px scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100 md:inset-x-10" />
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
