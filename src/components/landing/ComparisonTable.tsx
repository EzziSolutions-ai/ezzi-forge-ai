import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import Container from "@/components/layout/Container";
import LightSection from "@/components/layout/LightSection";

const ease = [0.16, 1, 0.3, 1] as const;

type Cell =
  | { kind: "yes"; note?: string }
  | { kind: "no"; note?: string }
  | { kind: "partial"; note?: string }
  | { kind: "text"; value: string };

const rows: { label: string; diy: Cell; agency: Cell; ezzi: Cell }[] = [
  {
    label: "Time to production",
    diy: { kind: "text", value: "weeks → stuck" },
    agency: { kind: "text", value: "6+ months" },
    ezzi: { kind: "text", value: "60 days" },
  },
  {
    label: "Total cost",
    diy: { kind: "text", value: "$2K–$15K wasted" },
    agency: { kind: "text", value: "$100K+" },
    ezzi: { kind: "text", value: "40–70% less than agency" },
  },
  {
    label: "Production-ready architecture",
    diy: { kind: "no" },
    agency: { kind: "yes" },
    ezzi: { kind: "yes" },
  },
  {
    label: "Real integrations (Stripe, Auth, CRM)",
    diy: { kind: "partial", note: "if you wrestle with it" },
    agency: { kind: "yes" },
    ezzi: { kind: "yes" },
  },
  {
    label: "You own the code",
    diy: { kind: "yes" },
    agency: { kind: "yes" },
    ezzi: { kind: "yes" },
  },
  {
    label: "Senior engineers on your project",
    diy: { kind: "no" },
    agency: { kind: "partial", note: "junior army with senior reviewer" },
    ezzi: { kind: "yes", note: "every commit" },
  },
  {
    label: "Quote returned in",
    diy: { kind: "text", value: "n/a" },
    agency: { kind: "text", value: "2+ weeks" },
    ezzi: { kind: "text", value: "48 hours" },
  },
  {
    label: "Risk on missed deadline",
    diy: { kind: "text", value: "yours alone" },
    agency: { kind: "text", value: "change orders" },
    ezzi: { kind: "text", value: "10% off if we're late" },
  },
];

function CellRender({ cell }: { cell: Cell }) {
  if (cell.kind === "yes") {
    return (
      <div className="flex flex-col items-center gap-1">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/15">
          <Check className="h-3.5 w-3.5 text-accent" strokeWidth={3} />
        </span>
        {cell.note && (
          <span className="text-center text-[10.5px] leading-tight text-muted-foreground">
            {cell.note}
          </span>
        )}
      </div>
    );
  }
  if (cell.kind === "no") {
    return (
      <div className="flex flex-col items-center gap-1">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-danger/15">
          <X className="h-3.5 w-3.5 text-danger" strokeWidth={3} />
        </span>
        {cell.note && (
          <span className="text-center text-[10.5px] leading-tight text-muted-foreground">
            {cell.note}
          </span>
        )}
      </div>
    );
  }
  if (cell.kind === "partial") {
    return (
      <div className="flex flex-col items-center gap-1">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-warning/15">
          <Minus className="h-3.5 w-3.5 text-warning" strokeWidth={3} />
        </span>
        {cell.note && (
          <span className="text-center text-[10.5px] leading-tight text-muted-foreground">
            {cell.note}
          </span>
        )}
      </div>
    );
  }
  return (
    <div className="text-center text-sm font-medium tracking-tight text-foreground">
      {cell.value}
    </div>
  );
}

export default function ComparisonTable() {
  return (
    <LightSection>
      <section id="compare" className="relative scroll-mt-24 py-24 md:py-32">
        <Container>
          <div className="mb-14 max-w-2xl md:mb-20">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              How we compare
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              DIY AI tool vs traditional agency{" "}
              <span className="text-muted-foreground">vs Ezzi.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              The two ways people have tried to build software — and the third way that
              actually ships.
            </p>
          </div>

          {/* Desktop: grid table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="hidden overflow-hidden rounded-3xl border border-border md:block"
          >
            {/* Header row */}
            <div className="grid grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-px bg-border">
              <div className="bg-surface px-6 py-5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                What you get
              </div>
              <div className="bg-surface px-6 py-5 text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                  Option 01
                </div>
                <div className="mt-1 text-sm font-semibold tracking-tight text-foreground">
                  DIY AI Tools
                </div>
              </div>
              <div className="bg-surface px-6 py-5 text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                  Option 02
                </div>
                <div className="mt-1 text-sm font-semibold tracking-tight text-foreground">
                  Traditional Agency
                </div>
              </div>
              <div className="relative bg-accent/[0.06] px-6 py-5 text-center ring-1 ring-inset ring-accent/30">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  Recommended
                </div>
                <div className="mt-1 text-sm font-semibold tracking-tight text-foreground">
                  Ezzi Solutions AI
                </div>
              </div>
            </div>
            {/* Data rows */}
            {rows.map((r, i) => (
              <div
                key={r.label}
                className="grid grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-px bg-border"
              >
                <div className="flex items-center bg-surface px-6 py-5 text-sm font-medium tracking-tight text-foreground">
                  {r.label}
                </div>
                <div className="flex items-center justify-center bg-surface px-4 py-5">
                  <CellRender cell={r.diy} />
                </div>
                <div className="flex items-center justify-center bg-surface px-4 py-5">
                  <CellRender cell={r.agency} />
                </div>
                <div className="flex items-center justify-center bg-accent/[0.06] px-4 py-5 ring-1 ring-inset ring-accent/30">
                  <CellRender cell={r.ezzi} />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mobile: stacked cards */}
          <div className="space-y-4 md:hidden">
            {[
              { name: "DIY AI Tools", key: "diy" as const, accent: false },
              { name: "Traditional Agency", key: "agency" as const, accent: false },
              { name: "Ezzi Solutions AI", key: "ezzi" as const, accent: true },
            ].map((col) => (
              <div
                key={col.key}
                className={`overflow-hidden rounded-2xl border ${
                  col.accent
                    ? "border-accent bg-accent/[0.06] ring-1 ring-accent/30"
                    : "border-border bg-surface"
                }`}
              >
                <div className="border-b border-border px-5 py-4">
                  <div
                    className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
                      col.accent ? "text-accent" : "text-muted-2"
                    }`}
                  >
                    {col.accent ? "Recommended" : "Option"}
                  </div>
                  <div className="mt-1 text-base font-semibold tracking-tight text-foreground">
                    {col.name}
                  </div>
                </div>
                <ul className="divide-y divide-border">
                  {rows.map((r) => (
                    <li
                      key={r.label}
                      className="flex items-center justify-between gap-4 px-5 py-3.5"
                    >
                      <span className="text-xs text-muted-foreground">{r.label}</span>
                      <CellRender cell={r[col.key]} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </LightSection>
  );
}
