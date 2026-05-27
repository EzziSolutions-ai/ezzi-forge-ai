import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

const industries = [
  "Healthcare",
  "Sales & Marketing",
  "B2B SaaS",
  "Manufacturing",
  "Field Services",
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function TrustStrip() {
  return (
    <section className="relative border-y border-border bg-surface/30">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col items-start gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-10"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
            Trusted in production across
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-10">
            {industries.map((label, idx) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-medium tracking-tight text-foreground md:text-base"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {label}
                {idx < industries.length - 1 && (
                  <span className="ml-6 hidden h-3 w-px bg-border-strong md:inline-block" />
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
