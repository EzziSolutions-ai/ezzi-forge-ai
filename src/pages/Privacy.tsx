import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Container from "@/components/layout/Container";

const sections = [
  {
    h: "1. What we collect",
    p: [
      "When you submit the quote form or contact form, we collect the information you give us: typically name, email, company, project description, and a rough budget. That's it.",
      "When you visit the site, we use privacy-respecting analytics that count page views without tracking individual visitors. We do not use third-party advertising trackers.",
    ],
  },
  {
    h: "2. How we use it",
    p: [
      "We use your information to respond to your inquiry, send a quote, and (with your explicit consent) send occasional product updates. We don't sell, rent, or share your information with third parties for marketing.",
    ],
  },
  {
    h: "3. Cookies",
    p: [
      "We use essential cookies for site functionality and analytics cookies for privacy-respecting aggregate stats. We don't use advertising or tracking cookies.",
    ],
  },
  {
    h: "4. Third-party services",
    p: [
      "We may use third-party services for email (e.g., Resend), analytics, and form processing. Each provider operates under its own privacy policy.",
    ],
  },
  {
    h: "5. Your rights",
    p: [
      "You can request access to, correction of, or deletion of any personal information we hold about you. Email hello@ezzisolutions.ai and we'll respond within 30 days.",
    ],
  },
  {
    h: "6. Data security",
    p: [
      "We use modern encryption in transit and at rest. We limit access to personal information to people who need it to do their jobs.",
    ],
  },
  {
    h: "7. Changes to this policy",
    p: [
      "If we update this policy materially, we'll post the change here and update the 'Last updated' date below.",
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Ezzi Solutions AI</title>
      </Helmet>

      <section className="relative pt-24 md:pt-32">
        <Container>
          <div className="mx-auto max-w-3xl py-20 md:py-24">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              Legal
            </div>
            <h1 className="text-h1 mt-5 text-foreground">Privacy Policy</h1>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-2">
              Last updated · 27 May 2026
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              We try to keep this short and in plain English. This page tells you what
              we collect, what we do with it, and what rights you have.{" "}
              <span className="text-muted-2">
                (This is template language: replace with your jurisdiction&apos;s legal review before launch.)
              </span>
            </p>

            <div className="mt-14 space-y-10">
              {sections.map((s) => (
                <section key={s.h}>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {s.h}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {s.p.map((para) => (
                      <p key={para.slice(0, 30)} className="text-sm leading-relaxed text-muted-foreground md:text-base">
                        {para}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              <section>
                <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  Contact
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Questions? Email{" "}
                  <a href="mailto:hello@ezzisolutions.ai" className="text-foreground underline-offset-2 hover:underline">
                    hello@ezzisolutions.ai
                  </a>{" "}
                  or use the{" "}
                  <Link to="/contact" className="text-foreground underline-offset-2 hover:underline">
                    contact form
                  </Link>
                  .
                </p>
              </section>
            </div>

            <div className="mt-16 border-t border-border pt-8">
              <Link to="/" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground">
                ← Back home
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
