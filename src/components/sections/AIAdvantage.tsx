import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

const ease = [0.16, 1, 0.3, 1] as const;

const stages = [
  {
    stage: "Scoping",
    traditional: "1–2 weeks of meetings + a 40-page document nobody reads.",
    ezzi: "A working plan in 3 days. Scoped from your existing systems, written like a contract.",
    delta: "−65%",
  },
  {
    stage: "Code",
    traditional: "Boilerplate, scaffolding, and refactors eat 50% of the build.",
    ezzi: "AI handles boilerplate; humans handle architecture, edge cases, and review.",
    delta: "−45%",
  },
  {
    stage: "QA",
    traditional: "Bug bashes 2 weeks before launch. Surprises that delay the date.",
    ezzi: "AI test generation runs all sprint. Bugs caught at the commit, not the launch.",
    delta: "−55%",
  },
  {
    stage: "Docs & handoff",
    traditional: "An exhausted Notion page handed over on the last day.",
    ezzi: "Docs written alongside the code, reviewed weekly, owned by you.",
    delta: "−70%",
  },
];

export default function AIAdvantage() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="mb-16 grid grid-cols-1 gap-10 md:mb-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              The AI advantage
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              Where the 60 days{" "}
              <span className="text-muted-foreground">comes from.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-14">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              AI compresses four specific phases of the build cycle, and we re-invest the time saved into design, testing, and your specific business logic.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border">
          {/* Header row */}
          <div className="grid grid-cols-12 gap-px border-b border-border bg-border">
            <div className="col-span-12 bg-surface px-6 py-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2 md:col-span-3">
              Phase
            </div>
            <div className="col-span-12 bg-surface px-6 py-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2 md:col-span-4">
              Traditional agency
            </div>
            <div className="col-span-12 bg-surface px-6 py-4 font-mono text-[10px] uppercase tracking-[0.22em] text-accent md:col-span-4">
              Ezzi with AI
            </div>
            <div className="col-span-12 bg-surface px-6 py-4 text-right font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2 md:col-span-1">
              Time
            </div>
          </div>

          {stages.map((row, i) => (
            <motion.div
              key={row.stage}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease, delay: i * 0.05 }}
              className="grid grid-cols-12 gap-px border-b border-border bg-border last:border-b-0"
            >
              <div className="col-span-12 bg-surface px-6 py-6 text-base font-semibold tracking-tight text-foreground md:col-span-3">
                {row.stage}
              </div>
              <div className="col-span-12 bg-surface px-6 py-6 text-sm leading-relaxed text-muted-foreground md:col-span-4">
                {row.traditional}
              </div>
              <div className="col-span-12 bg-surface px-6 py-6 text-sm leading-relaxed text-foreground md:col-span-4">
                {row.ezzi}
              </div>
              <div className="col-span-12 bg-surface px-6 py-6 text-right font-display text-xl font-semibold tracking-tight text-accent md:col-span-1">
                {row.delta}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
