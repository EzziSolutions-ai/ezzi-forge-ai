import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Container from "@/components/layout/Container";

const sections = [
  {
    h: "1. Agreement",
    p: [
      "By using this site or engaging Ezzi Solutions AI for services, you agree to these terms. If you don't, you shouldn't use the site or engage us.",
    ],
  },
  {
    h: "2. Services",
    p: [
      "We provide custom software development, design, and related consulting services. Every engagement is governed by a separate written agreement (statement of work) that takes precedence over these general terms where they conflict.",
    ],
  },
  {
    h: "3. Quotes & pricing",
    p: [
      "Quotes provided through this site are estimates based on the information you share. The final scope, price, and timeline are set in your statement of work and may differ from the initial estimate.",
    ],
  },
  {
    h: "4. Intellectual property",
    p: [
      "Code, designs, and other deliverables produced under a paid engagement are transferred to you upon final payment. We retain the right to reference completed work in our portfolio unless explicitly excluded in the statement of work.",
      "Site content (text, images, design) is © Ezzi Solutions AI — A Henagon Company. You may reference and link, but not reproduce.",
    ],
  },
  {
    h: "5. Confidentiality",
    p: [
      "We treat information you share as confidential. We're happy to sign your NDA — ours, if you don't have one, is mutual and standard.",
    ],
  },
  {
    h: "6. Limitation of liability",
    p: [
      "Our liability under any engagement is limited to fees paid for that engagement. We disclaim consequential, indirect, and special damages to the extent permitted by law.",
    ],
  },
  {
    h: "7. Termination",
    p: [
      "Either party may terminate an engagement under terms set in the statement of work. Default: 30 days' written notice; work completed to that point is owed in full.",
    ],
  },
  {
    h: "8. Governing law",
    p: [
      "These terms are governed by the laws of the jurisdiction specified in your statement of work. (Replace this section with your jurisdictional clause before launch.)",
    ],
  },
];

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service — Ezzi Solutions AI</title>
      </Helmet>

      <section className="relative pt-24 md:pt-32">
        <Container>
          <div className="mx-auto max-w-3xl py-20 md:py-24">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              Legal
            </div>
            <h1 className="text-h1 mt-5 text-foreground">Terms of Service</h1>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-2">
              Last updated · 27 May 2026
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              These are the general terms that govern your use of this site and any
              engagement with Ezzi Solutions AI.{" "}
              <span className="text-muted-2">
                (Template language — please have a lawyer in your jurisdiction review before launch.)
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
