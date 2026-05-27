import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import HeroIllustration from "@/components/sections/HeroIllustration";

const ease = [0.16, 1, 0.3, 1] as const;

const techPartners = [
  { name: "AWS", category: "Cloud" },
  { name: "Vercel", category: "Hosting" },
  { name: "Supabase", category: "Database" },
  { name: "OpenAI", category: "AI / LLM" },
  { name: "Anthropic", category: "AI / LLM" },
  { name: "Stripe", category: "Payments" },
  { name: "Auth0", category: "Auth" },
  { name: "Clerk", category: "Auth" },
  { name: "Twilio", category: "Comms" },
  { name: "SendGrid", category: "Email" },
  { name: "Mapbox", category: "Maps" },
  { name: "Cloudflare", category: "Edge / CDN" },
];

const integrationCategories = [
  { label: "Payments", items: ["Stripe", "PayPal", "Square", "Adyen"] },
  { label: "Auth & Identity", items: ["Auth0", "Clerk", "WorkOS", "Cognito"] },
  { label: "AI / LLM", items: ["OpenAI", "Anthropic", "Mistral", "Replicate"] },
  { label: "Data", items: ["Postgres", "Supabase", "PlanetScale", "TimescaleDB"] },
  { label: "Comms", items: ["Twilio", "SendGrid", "Resend", "Postmark"] },
  { label: "Business apps", items: ["QuickBooks", "HubSpot", "Salesforce", "Slack"] },
];

export default function Partners() {
  return (
    <>
      <Helmet>
        <title>Partners & Integrations — Ezzi Solutions AI</title>
        <meta name="description" content="Built on the best tools. Integrated with what you already use. Our partner stack across cloud, AI, payments, auth, and business apps." />
      </Helmet>

      {/* HERO */}
      <section className="relative isolate overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 -z-10 bg-hero-mesh opacity-80" />
        <div className="absolute inset-0 -z-10 bg-dot-grid opacity-40" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="grid grid-cols-1 gap-10 py-20 md:grid-cols-12 md:items-center md:gap-12 md:py-24">
            <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Partners & Integrations
            </div>
            <h1 className="text-h1 mt-8 text-balance text-foreground">
              Built on the best.{" "}
              <span className="text-muted-foreground">Integrated with what you already use.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We don&apos;t reinvent payments, auth, or AI inference. We use the
              best-in-class providers, with deep experience shipping them
              into production — and we integrate cleanly with whatever you already run.
            </p>
          
            </div>
            <div className="hidden md:col-span-5 md:block">
              <HeroIllustration variant="partners" className="h-full w-full max-w-[640px]" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* TECH PARTNERS GRID */}
      <section className="relative border-y border-border bg-surface/30 py-24 md:py-32">
        <Container>
          <div className="mb-14 max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              Technology partners
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              The stack underneath every Ezzi build.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3 lg:grid-cols-4">
            {techPartners.map((p) => (
              <div key={p.name} className="bg-surface px-6 py-7 md:px-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                  {p.category}
                </div>
                <div className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {p.name}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-xl font-mono text-[11px] text-muted-2">
            Note: partner badges + logo lockups will be added before launch where commercial relationships warrant them.
          </p>
        </Container>
      </section>

      {/* INTEGRATIONS BY CATEGORY */}
      <section className="relative py-24 md:py-32">
        <Container>
          <div className="mb-14 max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              Integration ecosystem
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              We plug into{" "}
              <span className="text-muted-foreground">what you already run.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {integrationCategories.map((cat) => (
              <div key={cat.label} className="bg-surface p-7 md:p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  {cat.label}
                </div>
                <ul className="mt-5 space-y-2.5">
                  {cat.items.map((it) => (
                    <li key={it} className="text-sm font-medium tracking-tight text-foreground">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* BECOME A PARTNER */}
      <section className="relative border-y border-border bg-surface/30 py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
                Partner with us
              </div>
              <h2 className="text-h2 mt-5 text-foreground text-balance">
                Agencies & studios{" "}
                <span className="text-muted-foreground">— let&apos;s talk.</span>
              </h2>
            </div>
            <div className="md:col-span-7 md:pt-14">
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                If you&apos;re a marketing agency, brand studio, or vertical consultancy
                that runs into engineering work you can&apos;t staff — we&apos;ll be your
                build partner. Referral commissions, white-label options, or co-marketing.
              </p>
              <Link
                to="/contact"
                className="group mt-10 inline-flex items-center gap-2 rounded-full border border-border-strong bg-background/60 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-foreground/40 hover:bg-surface active:scale-[0.98]"
              >
                Become a partner
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2 text-foreground text-balance">
              Have a specific integration in mind?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              If it has an API, we can integrate it. Send the system, the use case,
              and what success looks like.
            </p>
            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-glow active:scale-[0.98]"
            >
              Get a Quote
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
