import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Code2, Smartphone, Globe, Layers, PenTool } from "lucide-react";
import Container from "@/components/layout/Container";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    label: "Custom Software",
    href: "/services/custom-software",
    blurb: "Operations platforms, internal tools, vertical SaaS, built for your specific workflow.",
    proof: "RoyalSigns CRM · Manufacturing Dashboard",
    icon: Code2,
    span: "md:col-span-3",
  },
  {
    label: "Mobile Apps",
    href: "/services/mobile-app",
    blurb: "iOS & Android: native-grade builds with React Native or Swift/Kotlin where it matters.",
    proof: "CareFlow · JobSnap",
    icon: Smartphone,
    span: "md:col-span-3",
  },
  {
    label: "Web Apps",
    href: "/services/web-app",
    blurb: "Production React platforms, fast, accessible, scalable.",
    proof: "RoyalSigns Studio · HC Compliance",
    icon: Globe,
    span: "md:col-span-2",
  },
  {
    label: "SaaS Products",
    href: "/services/saas",
    blurb: "Multi-tenant, billing-ready, AI-native SaaS.",
    proof: "BidMind AI · OutreachOS",
    icon: Layers,
    span: "md:col-span-2",
  },
  {
    label: "UI / UX Design",
    href: "/services/ui-ux",
    blurb: "Interfaces that earn their place on screen.",
    proof: "Across every project",
    icon: PenTool,
    span: "md:col-span-2",
  },
];

export default function ServicesSnapshot() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              What we ship
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              Five engagements.{" "}
              <span className="text-muted-foreground">One operating system underneath.</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            All services
            <ArrowUpRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-6 md:gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-border-strong hover:bg-surface-2 md:p-7 ${s.span}`}
            >
              <Link to={s.href} className="block">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/50">
                    <s.icon className="h-4 w-4 text-accent" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-2 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>

                <div className="mt-8 text-base font-semibold tracking-tight text-foreground md:text-lg">
                  {s.label}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                <div className="mt-6 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-2">
                  Proof · {s.proof}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
