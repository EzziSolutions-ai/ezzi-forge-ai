import { motion } from "framer-motion";
import { AlertTriangle, Wrench, Layers, Clock } from "lucide-react";
import Container from "@/components/layout/Container";
import LightSection from "@/components/layout/LightSection";

const ease = [0.16, 1, 0.3, 1] as const;

const pains = [
  {
    icon: AlertTriangle,
    title: "It looked great in the demo.",
    body: "You signed up for the popular AI coding tool. The first screen came together in an hour. The first real feature broke the day you tried to use it with your team.",
  },
  {
    icon: Layers,
    title: "Feature two broke feature one.",
    body: "Every time you added something, something else stopped working. The codebase started feeling fragile. You spent more time fixing than building.",
  },
  {
    icon: Wrench,
    title: "Integrations turned into rabbit holes.",
    body: "Payments, login, user accounts, your existing CRM — every connection took a week, three rewrites, and a Stack Overflow tab you never closed.",
  },
  {
    icon: Clock,
    title: "Your time was the real cost.",
    body: "Subscription fees were nothing compared to the months you spent. You still don't have software you can put in front of a paying customer.",
  },
];

export default function PainStrip() {
  return (
    <LightSection>
      <section id="problem" className="relative scroll-mt-24 py-24 md:py-32">
        <Container>
          <div className="mb-14 max-w-2xl md:mb-20">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              Sound familiar?
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              You tried to build it yourself.{" "}
              <span className="text-muted-foreground">Here&apos;s where you got stuck.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
            {pains.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease, delay: i * 0.06 }}
                className="bg-surface p-8 md:p-10"
              >
                <div className="flex items-start gap-5">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background/40">
                    <p.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {p.body}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-base leading-relaxed text-muted-foreground md:mt-20 md:text-lg">
            <span className="text-foreground font-medium">This isn&apos;t your failure.</span>{" "}
            AI coding tools are excellent at one thing — making prototypes. They were never
            built for the last 40% that turns a prototype into a real product.
          </p>
        </Container>
      </section>
    </LightSection>
  );
}
