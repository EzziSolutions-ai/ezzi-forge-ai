import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Quote } from "lucide-react";
import Container from "@/components/layout/Container";

const ease = [0.16, 1, 0.3, 1] as const;

// NOTE TO EZZI TEAM:
// Replace these placeholder quotes with real client testimonials before launch.
// Pull from email replies, case-study interviews, or post-launch surveys.

const quotes = [
  {
    quote:
      "We were quoted six months by two other shops. Ezzi shipped it in 52 days, on the price, and the code is cleaner than what our in-house team writes.",
    name: "Operator quote (placeholder)",
    role: "VP Engineering · Healthcare SaaS",
    project: "CareFlow",
  },
  {
    quote:
      "They built a sales platform we now use to close every deal. Less than half the cost we were getting from agencies, and they actually used AI in the build.",
    name: "Founder quote (placeholder)",
    role: "CEO · B2B SaaS startup",
    project: "OutreachOS",
  },
];

export default function TestimonialsTeaser() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              What operators say
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              The ones we work with{" "}
              <span className="text-muted-foreground">tend to send the next one.</span>
            </h2>
          </div>
          <Link
            to="/testimonials"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            All testimonials
            <ArrowUpRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 md:p-10"
            >
              <Quote className="h-7 w-7 text-accent" />
              <blockquote className="mt-6 text-lg leading-relaxed tracking-tight text-foreground md:text-xl">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <div>
                  <div className="text-sm font-medium text-foreground">{q.name}</div>
                  <div className="text-xs text-muted-foreground">{q.role}</div>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                  RE: {q.project}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
