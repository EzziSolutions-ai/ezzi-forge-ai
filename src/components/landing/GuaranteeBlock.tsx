import { motion } from "framer-motion";
import { Shield, Clock, FileCheck, Code2, LifeBuoy } from "lucide-react";
import Container from "@/components/layout/Container";

const ease = [0.16, 1, 0.3, 1] as const;

const reversals = [
  {
    icon: Clock,
    label: "Written quote",
    value: "in 48 hours",
    body: "Not a sales call to schedule a sales call. A written quote.",
  },
  {
    icon: FileCheck,
    label: "Fixed scope",
    value: "fixed price",
    body: "No mid-build invoices for things you assumed were included.",
  },
  {
    icon: Code2,
    label: "You own the code",
    value: "day one",
    body: "GitHub repo, IP assignment, deploy keys. No vendor lock-in.",
  },
  {
    icon: LifeBuoy,
    label: "Post-launch support",
    value: "30 days, free",
    body: "Same-day response on issues. No retainer renewal trick.",
  },
];

export default function GuaranteeBlock() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background — modern architecture photo, photo CLEARLY visible */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      {/* Light dark veil — enough for type readability, lets photo come through */}
      <div className="absolute inset-0 -z-10 bg-background/55" />
      {/* Blue accent glow over the photo */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_30%_50%,rgba(59,130,246,0.28)_0%,transparent_70%)]" />
      {/* Top/bottom fade so the photo bleeds into adjacent sections */}
      <div className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-background to-transparent" />

      <Container>
        {/* The Big Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-surface/60 p-8 backdrop-blur md:p-12">
            {/* Subtle accent glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              <div className="md:col-span-2">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/40 bg-accent/15">
                  <Shield className="h-8 w-8 text-accent" strokeWidth={1.8} />
                </div>
              </div>

              <div className="md:col-span-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  The Ezzi guarantee
                </div>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  On time, or you pay <span className="text-accent">10% less.</span>
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  We give you a fixed timeline in the written quote. If we deliver one day
                  past it, your invoice is automatically reduced by 10%. We&apos;ve never
                  paid out. We don't plan to start now.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stacked reversals */}
        <div className="mt-12 grid grid-cols-1 gap-3 md:mt-16 md:grid-cols-4 md:gap-4">
          {reversals.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/40">
                <r.icon className="h-4 w-4 text-accent" />
              </div>
              <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                {r.label}
              </div>
              <div className="mt-1.5 font-display text-xl font-semibold tracking-tight text-foreground">
                {r.value}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground md:text-sm">
                {r.body}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
