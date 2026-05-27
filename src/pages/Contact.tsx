import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Calendar,
  Github,
  Linkedin,
  Twitter,
  Check,
} from "lucide-react";
import Container from "@/components/layout/Container";

const ease = [0.16, 1, 0.3, 1] as const;

const quickFaqs = [
  {
    q: "How soon will I hear back?",
    a: "Within 48 hours, every time — usually faster. A senior engineer reads every inbound, not a sales rep.",
  },
  {
    q: "Do you sign an NDA?",
    a: "Not needed for the first conversation. If we move forward, we&apos;ll sign yours or send ours.",
  },
  {
    q: "What if my project is small?",
    a: "We take projects from $10K. Below that, we&apos;ll point you toward a tool, a template, or a friend who works that price band.",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to backend / Resend / Formspree before launch
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact — Ezzi Solutions AI</title>
        <meta
          name="description"
          content="Talk to a senior engineer about your project. Most quotes returned within 48 hours."
        />
      </Helmet>

      {/* ─── HERO ─── */}
      <section className="relative isolate overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 -z-10 bg-hero-mesh opacity-80" />
        <div className="absolute inset-0 -z-10 bg-dot-grid opacity-40" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-4xl py-20 md:py-24"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Currently accepting projects
            </div>

            <h1 className="text-h1 mt-8 text-balance text-foreground">
              Let&apos;s talk{" "}
              <span className="text-muted-foreground">about your project.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Send the rough idea — what you&apos;re building, when you need it, what
              you can spend. A senior engineer replies within 48 hours.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ─── TWO-COLUMN: FORM + INFO ─── */}
      <section className="relative pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
            {/* FORM */}
            <div className="md:col-span-7">
              {!submitted ? (
                <motion.form
                  onSubmit={onSubmit}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease }}
                  className="rounded-3xl border border-border bg-surface p-7 md:p-10"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                    <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
                    Start a conversation
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    Tell us what you&apos;re building.
                  </h2>

                  <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <Field label="Your name" name="name" placeholder="Jane Founder" required />
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      placeholder="jane@yourco.com"
                      required
                    />
                  </div>

                  <div className="mt-5">
                    <Field label="Company" name="company" placeholder="YourCo Inc." />
                  </div>

                  <div className="mt-5">
                    <Field
                      label="Subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="What are you working on? Where are you stuck? What does success look like?"
                      className="mt-2 w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-2 focus:border-border-strong focus:outline-none focus:ring-1 focus:ring-accent/40"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-glow active:scale-[0.98] md:w-auto md:px-8"
                  >
                    Send message
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                    Need a written quote instead?{" "}
                    <Link to="/pricing" className="text-foreground underline-offset-2 hover:underline">
                      Use the quote form
                    </Link>
                    .
                  </p>
                </motion.form>
              ) : (
                <div className="rounded-3xl border border-border bg-surface p-10 md:p-12">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
                    <Check className="h-5 w-5 text-accent" strokeWidth={2.5} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                    Got it.
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    A senior engineer will reply within 48 hours. If it&apos;s urgent,
                    email{" "}
                    <a
                      href="mailto:hello@ezzisolutions.ai"
                      className="text-foreground underline-offset-2 hover:underline"
                    >
                      hello@ezzisolutions.ai
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>

            {/* INFO */}
            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
                className="space-y-4"
              >
                <InfoCard
                  icon={Mail}
                  label="Email"
                  value="hello@ezzisolutions.ai"
                  href="mailto:hello@ezzisolutions.ai"
                />
                <InfoCard
                  icon={Calendar}
                  label="Book a call"
                  value="30-min discovery on Cal.com"
                  href="https://cal.com/"
                  external
                  hint="Replace with your Cal.com / Calendly link before launch"
                />
                <InfoCard
                  icon={MapPin}
                  label="Hours"
                  value="Mon–Fri · 9am–6pm ET"
                />

                <div className="rounded-2xl border border-border bg-surface p-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                    Follow
                  </div>
                  <div className="mt-4 flex items-center gap-2.5">
                    {[
                      { Icon: Twitter, label: "Twitter", href: "#" },
                      { Icon: Linkedin, label: "LinkedIn", href: "#" },
                      { Icon: Github, label: "GitHub", href: "#" },
                    ].map(({ Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── QUICK FAQ ─── */}
      <section className="relative border-y border-border bg-surface/30 py-24 md:py-28">
        <Container>
          <div className="mb-12 max-w-2xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              Common questions
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              Before you write the message —{" "}
              <span className="text-muted-foreground">three quick answers.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {quickFaqs.map((item, i) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-6 md:p-7"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground md:text-lg">
                  {item.q}
                </h3>
                <p
                  className="mt-3 text-sm leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: item.a }}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">More questions before you reach out?</p>
            <Link
              to="/faq"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
            >
              Read the full FAQ
              <ArrowUpRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

// ─── Sub-components ─────────────────────────────────────────────

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-2 focus:border-border-strong focus:outline-none focus:ring-1 focus:ring-accent/40"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
  external,
  hint,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  hint?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-background/50">
        <Icon className="h-4 w-4 text-accent" />
      </div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
          {label}
        </div>
        <div className="mt-1 text-base font-medium tracking-tight text-foreground">{value}</div>
        {hint && (
          <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-2 opacity-70">
            {hint}
          </div>
        )}
      </div>
      {href && (
        <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-2 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
      )}
    </div>
  );

  if (!href) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-6">{inner}</div>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group block rounded-2xl border border-border bg-surface p-6 transition-colors hover:bg-surface-2"
    >
      {inner}
    </a>
  );
}
