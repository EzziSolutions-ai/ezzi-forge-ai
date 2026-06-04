import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Rocket, Building2 } from "lucide-react";
import Container from "@/components/layout/Container";

const ease = [0.16, 1, 0.3, 1] as const;

const paths = [
  {
    audience: "Startup founder",
    headline: "Be live in 60 days. Without burning a co-founder.",
    body:
      "Wireframe to App Store, idea to investor demo. We replace your search for a technical co-founder with a senior team that ships.",
    bullets: [
      "MVP scoping in 5 working days",
      "Investor-ready demo in 4 weeks",
      "Pre-seed and seed friendly pricing",
    ],
    href: "/case-studies?industry=saas",
    cta: "See startup case studies",
    icon: Rocket,
    badge: "FOR FOUNDERS",
  },
  {
    audience: "SMB owner",
    headline: "Modernize the operation. Without the agency drag.",
    body:
      "Replace spreadsheets, fragmented tools, and manual handoffs with software that runs your business: quoting, ops, field, compliance.",
    bullets: [
      "Audit & roadmap in week one",
      "Phased rollout, no big-bang risk",
      "Plays nice with your QuickBooks, HubSpot, etc.",
    ],
    href: "/case-studies?industry=ops",
    cta: "See ops case studies",
    icon: Building2,
    badge: "FOR OPERATORS",
  },
];

export default function DualPath() {
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="mb-16 max-w-3xl md:mb-20">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
            Two paths into Ezzi
          </div>
          <h2 className="text-h2 mt-5 text-foreground text-balance">
            We build for both kinds of operators:{" "}
            <span className="text-muted-foreground">
              founders shipping MVPs and SMBs replacing the spreadsheet.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {paths.map((p, i) => (
            <motion.div
              key={p.audience}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-colors hover:bg-surface-2 md:p-10"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-background/40 px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.22em] text-muted-foreground">
                  <p.icon className="h-3 w-3 text-accent" />
                  {p.badge}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">
                  Path 0{i + 1}
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {p.headline}
              </h3>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                {p.body}
              </p>

              <ul className="mt-8 space-y-3 border-t border-border pt-6">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={p.href}
                className="group/cta mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
              >
                {p.cta}
                <ArrowUpRight className="h-3.5 w-3.5 text-accent transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
              </Link>

              <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-accent/[0.05] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
