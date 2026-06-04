import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Plus } from "lucide-react";
import Container from "@/components/layout/Container";

const ease = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    q: "Can you really ship a production app in 60 days?",
    a: "Yes. That's our baseline, not a marketing claim. The 60-day clock starts when scope is locked. Most projects come in at 45–55 days. Larger platforms (multi-product SaaS, regulated industries) take 90–120, and we say so upfront.",
  },
  {
    q: "Why are you 40–70% less than traditional agencies?",
    a: "Two reasons. (1) AI compresses the parts of the build that don't need a human: boilerplate, scaffolding, test stubs, internal docs. (2) We run lean senior teams, no junior army with billable hours. The savings pass through to you.",
  },
  {
    q: "Who owns the code?",
    a: "You do. On day one. You get the GitHub repo, the IP assignment, the deploy access, and the docs. No retainer-lockin, no proprietary platform you're stuck on.",
  },
  {
    q: "What does your AI-augmented workflow actually look like?",
    a: "AI pairs with our engineers on scoping, code generation, code review, test generation, and documentation. A senior engineer ships what used to require a small team, with better quality control and fewer bugs in production. We share the workflow openly on the Process page.",
  },
  {
    q: "Do you do design, or just engineering?",
    a: "Both. Every project includes UX/UI from a senior designer. If you already have designs in Figma, we'll work from yours.",
  },
];

export default function FAQSnippet() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              Common questions
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              The five things{" "}
              <span className="text-muted-foreground">most founders ask before the first call.</span>
            </h2>
          </div>
          <Link
            to="/faq"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            Full FAQ
            <ArrowUpRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-surface">
          {faqs.map((item, i) => (
            <button
              key={item.q}
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="block w-full border-b border-border text-left transition-colors last:border-b-0 hover:bg-surface-2/60"
              aria-expanded={open === i}
            >
              <div className="flex items-start justify-between gap-6 px-6 py-6 md:px-8 md:py-7">
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="mt-1 hidden font-mono text-[11px] text-muted-2 md:inline-block">
                    0{i + 1}
                  </span>
                  <span className="text-base font-medium tracking-tight text-foreground md:text-lg">
                    {item.q}
                  </span>
                </div>
                <Plus
                  className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                    open === i ? "rotate-45 text-accent" : ""
                  }`}
                />
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
                    <div className="px-6 pb-7 pl-6 text-sm leading-relaxed text-muted-foreground md:px-8 md:pl-[88px] md:text-base">
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
  );
}
