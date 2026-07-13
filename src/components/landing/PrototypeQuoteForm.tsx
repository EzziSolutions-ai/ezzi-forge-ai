import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import Container from "@/components/layout/Container";
import { submitLead } from "@/lib/submitLead";

// Leads are POSTed to /api/lead, which emails sales@ezzisolutions.ai (via
// Resend) and — if SLACK_WEBHOOK_URL is set in Vercel — also pings Slack.

const projectTypes = [
  "Internal tool / ops platform",
  "CRM / sales platform",
  "Customer-facing web app",
  "Mobile app (iOS / Android)",
  "Dashboard / analytics",
  "Something else",
] as const;

const budgets = ["$10K – $25K", "$25K – $50K", "$50K+"] as const;

// Spam-prevention: humans take at least this long to fill the form
const MIN_FILL_MS = 2_000;

export default function PrototypeQuoteForm() {
  const [projectType, setProjectType] = useState<(typeof projectTypes)[number]>(projectTypes[0]);
  const [budget, setBudget] = useState<(typeof budgets)[number]>(budgets[1]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const mountedAt = useRef<number>(0);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);

    // ── Spam guards ────────────────────────────────────────────
    // 1. Honeypot — bots fill this hidden field; real humans don't
    if ((fd.get("website") as string | null)?.trim()) {
      // Silently succeed so bots don't learn the trap
      setSubmitted(true);
      return;
    }
    // 2. Fill-time check — forms submitted in under 2s are likely bots
    if (Date.now() - mountedAt.current < MIN_FILL_MS) {
      setSubmitted(true);
      return;
    }

    // ── Send the lead → /api/lead emails sales@ezzisolutions.ai ──
    await submitLead({
      formType: "prototype",
      name: (fd.get("name") as string) ?? "",
      email: (fd.get("email") as string) ?? "",
      company: (fd.get("company") as string) ?? "",
      tool: (fd.get("tool") as string) ?? "",
      stuck: (fd.get("stuck") as string) ?? "",
      projectType,
      budget,
      website: (fd.get("website") as string) ?? "",
    });

    // Always confirm — we'd rather show success than block on a transient blip.
    setSubmitted(true);
  };

  return (
    <section id="quote" className="relative scroll-mt-24 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              Get a quote
            </div>
            <h2 className="text-h2 mt-5 text-foreground text-balance">
              Tell us what you tried.{" "}
              <span className="text-muted-foreground">We&apos;ll send back a real plan.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              A senior engineer reads every inbound, not a sales rep. You&apos;ll have
              a written quote in your inbox within 48 hours, or a clear &lsquo;not the
              right fit&rsquo; with a referral.
            </p>

            <ul className="mt-10 space-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-accent" />
                We can start from your existing prototype if useful
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-accent" />
                No NDA needed for the first conversation
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-accent" />
                Fixed timeline · 10% off if we&apos;re late
              </li>
            </ul>
          </div>

          <div className="md:col-span-7">
            {!submitted ? (
              <form
                onSubmit={onSubmit}
                className="light-section bg-light-grain relative rounded-3xl border border-border-strong p-7 shadow-[0_30px_80px_-20px_rgba(59,130,246,0.25)] ring-1 ring-border md:p-10"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                  <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
                  48-hour quote
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  Send us the story.
                </h3>

                {/* Honeypot — visually hidden but accessible to bots scraping the DOM */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden opacity-0"
                  tabIndex={-1}
                >
                  <label htmlFor="website">Website (leave blank)</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

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

                <div className="mt-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                    What were you trying to build?
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {projectTypes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setProjectType(t)}
                        className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                          projectType === t
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-border bg-background text-muted-foreground hover:border-border-strong hover:text-foreground"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <label
                    htmlFor="tool"
                    className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2"
                  >
                    Which AI coding tool did you try?
                  </label>
                  <input
                    id="tool"
                    name="tool"
                    type="text"
                    placeholder="e.g. Lovable, Bolt, Cursor, v0…"
                    className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-2 focus:border-border-strong focus:outline-none focus:ring-1 focus:ring-accent/40"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="stuck"
                    className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2"
                  >
                    Where did it break?
                  </label>
                  <textarea
                    id="stuck"
                    name="stuck"
                    required
                    rows={4}
                    placeholder="Was it the second feature? Integrations? Edge cases? Tell us what stopped you."
                    className="mt-2 w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-2 focus:border-border-strong focus:outline-none focus:ring-1 focus:ring-accent/40"
                  />
                </div>

                <div className="mt-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                    Rough budget
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                          budget === b
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-border bg-background text-muted-foreground hover:border-border-strong hover:text-foreground"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-glow active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto md:px-8"
                >
                  {submitting ? "Sending…" : "Send my situation"}
                  {!submitting && (
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </button>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                  Senior engineer replies within 48 hours · No NDA required first call
                </p>
              </form>
            ) : (
              <div className="light-section bg-light-grain rounded-3xl border border-border-strong p-10 shadow-[0_30px_80px_-20px_rgba(59,130,246,0.25)] ring-1 ring-border md:p-12">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
                  <Check className="h-5 w-5 text-accent" strokeWidth={2.5} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  Got it.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                  A senior engineer is reading your story today. You&apos;ll have a
                  written quote (or a clear &lsquo;not the right fit&rsquo;) within
                  48 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

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
