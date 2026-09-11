import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Container from "@/components/layout/Container";

const LAST_UPDATED = "28 August 2026";
const CONTACT_EMAIL = "sales@ezzisolutions.ai";
const CONTACT_PHONE = "+1 (917) 697-8576";
const CONTACT_PHONE_HREF = "tel:+19176978576";
const CONTACT_ADDRESS = "440 Cobia Dr, Unit 1101, Katy, TX 77494";

type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

type Section = {
  id: string;
  h: string;
  blocks: Block[];
};

const sections: Section[] = [
  {
    id: "who-we-are",
    h: "Who we are",
    blocks: [
      {
        type: "p",
        text: "Ezzi Solutions AI (a Henagon company) builds custom software, web and mobile apps for startups and small businesses. This policy covers ezzisolutions.ai and the forms and emails that run through it. It does not cover software we build and hand over to clients — those products are governed by the client's own policy.",
      },
      {
        type: "p",
        text: "Ezzi Solutions AI is the business responsible for the personal information described here. You can reach us at " + CONTACT_ADDRESS + ", by phone at " + CONTACT_PHONE + ", or by email at " + CONTACT_EMAIL + ".",
      },
    ],
  },
  {
    id: "what-we-collect",
    h: "Information we collect",
    blocks: [
      {
        type: "p",
        text: "Information you give us. Our contact form, pricing quote form, prototype-to-production quote form, and newsletter signup ask for some combination of the following:",
      },
      {
        type: "list",
        items: [
          "Name and email address",
          "Phone number, if you use the chat widget or give it to us so we can text or call you",
          "Company name",
          "A description of your project or message, including project type, current stage, timeline, budget range, and the tools you are using",
        ],
      },
      {
        type: "p",
        text: "Only the email address is strictly required. Everything else is optional and helps us give you a useful answer instead of a generic one. Please do not send confidential material or special-category personal data (health, biometric, financial account numbers, and the like) through a website form — email us and we will arrange a secure channel.",
      },
      {
        type: "p",
        text: "Information collected automatically. When you browse the site, our hosting provider and analytics record standard technical data:",
      },
      {
        type: "list",
        items: [
          "IP address, browser type, device type, and operating system",
          "Pages viewed, referring page, and approximate location derived from IP (city or region level, not precise geolocation)",
          "Timestamps and basic request logs kept by our host for security and debugging",
        ],
      },
      {
        type: "p",
        text: "We do not ask for or store payment card details on this site. Billing for a paid engagement happens outside the website, under your statement of work.",
      },
    ],
  },
  {
    id: "how-we-use-it",
    h: "How we use your information",
    blocks: [
      {
        type: "list",
        items: [
          "To respond to your enquiry, prepare a quote, and discuss a possible engagement",
          "To send you an automatic confirmation email acknowledging your submission",
          "To send our newsletter, if you asked for it — every issue has an unsubscribe link",
          "To understand which pages and channels bring people to the site, in aggregate",
          "To keep the site secure and working: rate limiting, spam filtering, and debugging",
          "To meet legal, tax, and accounting obligations",
        ],
      },
      {
        type: "p",
        text: "We do not sell or rent your personal information, and we do not share it with third parties for their own marketing. We do not use automated decision-making that produces legal or similarly significant effects about you.",
      },
    ],
  },
  {
    id: "sms",
    h: "Text messages and the chat widget",
    blocks: [
      {
        type: "p",
        text: "The chat widget on this site is provided by LeadConnector. If you enter your phone number there, you are asking us to reply, and you consent to receive text messages and calls from Ezzi Solutions AI at that number, including messages sent by automated means. Consent is not a condition of purchase.",
      },
      {
        type: "p",
        text: "Message and data rates may apply, and message frequency varies. Reply STOP to any message to opt out, or HELP for help. Opting out of texts does not remove you from email, and vice versa.",
      },
      {
        type: "p",
        text: "No mobile information will be sold or shared with third parties or affiliates for marketing or promotional purposes. Phone numbers collected for SMS are used only to reply to you and deliver the messages you asked for. We share them with our messaging provider solely to send those messages, and text message originator opt-in data is never shared with anyone else.",
      },
    ],
  },
  {
    id: "legal-basis",
    h: "Legal basis for processing",
    blocks: [
      {
        type: "p",
        text: "If you are in the UK, EU, or another region with similar law, we rely on these bases:",
      },
      {
        type: "list",
        items: [
          "Legitimate interests — responding to enquiries, running and securing the site, and understanding aggregate traffic",
          "Consent — analytics cookies and newsletter emails, which you can withdraw at any time",
          "Contract — steps taken at your request before entering an agreement, and performing that agreement once signed",
          "Legal obligation — retaining records we are required by law to keep",
        ],
      },
    ],
  },
  {
    id: "cookies",
    h: "Cookies and analytics",
    blocks: [
      {
        type: "p",
        text: "This site uses Google Analytics 4 (measurement ID G-TNE1DVMGH7) to count visits and see which pages people read. It sets first-party cookies, typically named _ga and _ga_<container-id>, which store a randomly generated identifier so repeat visits are not double counted. These cookies usually expire after about two years.",
      },
      {
        type: "p",
        text: "We also use strictly necessary cookies and local storage for basic site function, such as remembering interface preferences, and the LeadConnector chat widget stores an identifier so your conversation persists as you move between pages. Those cannot be turned off without breaking the features they support.",
      },
      {
        type: "p",
        text: "We do not run advertising or retargeting pixels, and we do not build advertising profiles about you. You can opt out of analytics at any time by using your browser's cookie controls, a tracking-protection extension, or Google's opt-out add-on at tools.google.com/dlpage/gaoptout.",
      },
      {
        type: "p",
        text: "Web fonts are loaded from Google Fonts, which means your browser makes a request to Google's servers and Google receives your IP address as part of that request.",
      },
    ],
  },
  {
    id: "third-parties",
    h: "Service providers",
    blocks: [
      {
        type: "p",
        text: "We keep the stack small on purpose. These providers process data on our behalf, each under its own privacy policy and a data processing agreement where required:",
      },
      {
        type: "list",
        items: [
          "Vercel — hosting, content delivery, and server logs for the site and its form endpoint",
          "LeadConnector (HighLevel) — the chat widget, and the CRM and messaging platform that delivers our texts and calls",
          "Resend — delivery of the lead notification to our team and the confirmation email to you",
          "Google Analytics — aggregate site analytics",
          "Google Fonts — web font delivery",
          "Slack — an internal notification when a form is submitted, if enabled",
          "Google Workspace — the inbox where your message lands and the thread we reply on",
        ],
      },
      {
        type: "p",
        text: "We may also disclose information where the law requires it, to protect our rights or someone's safety, or to a successor entity in a merger or acquisition. If that last one ever happens, we will say so on this page.",
      },
    ],
  },
  {
    id: "transfers-retention",
    h: "International transfers and retention",
    blocks: [
      {
        type: "p",
        text: "Our providers operate globally, so your information may be processed in countries other than yours, including the United States. Where personal data leaves the UK or EEA, we rely on the transfer mechanisms our providers have in place, such as Standard Contractual Clauses and the EU-US Data Privacy Framework.",
      },
      {
        type: "p",
        text: "How long we keep things:",
      },
      {
        type: "list",
        items: [
          "Enquiries that do not become an engagement: up to 24 months, then deleted",
          "Client records: for the length of the engagement plus the period required for tax and legal purposes",
          "Newsletter subscribers: until you unsubscribe, plus a suppression record so we do not email you again by mistake",
          "Analytics data: retained on Google's default schedule, typically 14 months",
          "Server logs: short-term, on our host's standard retention",
        ],
      },
    ],
  },
  {
    id: "your-rights",
    h: "Your rights",
    blocks: [
      {
        type: "p",
        text: "Depending on where you live, you may have the right to:",
      },
      {
        type: "list",
        items: [
          "Access the personal information we hold about you and get a copy of it",
          "Correct information that is wrong or incomplete",
          "Delete your information, subject to records we must keep by law",
          "Object to or restrict processing based on legitimate interests",
          "Withdraw consent, including unsubscribing from the newsletter, without affecting processing done before you withdrew",
          "Receive your information in a portable, machine-readable format",
          "Not be discriminated against for exercising any of these rights",
        ],
      },
      {
        type: "p",
        text: "California residents: we do not sell or share personal information as those terms are defined by the CCPA and CPRA, and we do not process it for cross-context behavioural advertising.",
      },
      {
        type: "p",
        text: "To exercise any right, email " + CONTACT_EMAIL + ". We will respond within 30 days. We may ask a question or two to confirm it is really you before we act on a request. If you are in the UK or EEA and you are not satisfied with our response, you may complain to your local data protection authority.",
      },
    ],
  },
  {
    id: "security",
    h: "How we protect your information",
    blocks: [
      {
        type: "p",
        text: "The site is served over HTTPS, and data sent to our form endpoint is encrypted in transit. Our providers encrypt data at rest. Access to enquiries is limited to the people who need it to answer you, on accounts protected by multi-factor authentication. Form submissions are screened with a hidden honeypot field to drop bot traffic.",
      },
      {
        type: "p",
        text: "No system is perfectly secure. If a breach ever affects your personal information, we will notify you and the relevant regulator as the law requires.",
      },
    ],
  },
  {
    id: "children",
    h: "Children",
    blocks: [
      {
        type: "p",
        text: "This site is aimed at businesses and is not directed at children under 16. We do not knowingly collect information from children. If you believe a child has sent us personal information, email us and we will delete it.",
      },
    ],
  },
  {
    id: "changes",
    h: "Changes to this policy",
    blocks: [
      {
        type: "p",
        text: "If we change how we handle personal information, we will update this page and move the date at the top. Material changes will be flagged clearly. Continuing to use the site after an update means you accept the revised policy.",
      },
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Ezzi Solutions AI</title>
        <meta
          name="description"
          content="How Ezzi Solutions AI collects, uses, and protects your information: what our forms ask for, which providers we use, how long we keep data, and the rights you have."
        />
        <link rel="canonical" href="https://ezzisolutions.ai/privacy" />
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
              Last updated · {LAST_UPDATED}
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              Short version: we collect what you type into our forms so we can reply,
              plus basic analytics so we know which pages are worth keeping. We do not
              sell your information, and we do not run advertising trackers. The detail
              is below.
            </p>

            <nav aria-label="On this page" className="mt-12 rounded-xl border border-border bg-surface/40 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
                On this page
              </div>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {i + 1}. {s.h}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-14 space-y-10">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {i + 1}. {s.h}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {s.blocks.map((b, i) =>
                      b.type === "p" ? (
                        <p
                          key={i}
                          className="text-sm leading-relaxed text-muted-foreground md:text-base"
                        >
                          {b.text}
                        </p>
                      ) : (
                        <ul key={i} className="space-y-2.5 pl-1">
                          {b.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ),
                    )}
                  </div>
                </section>
              ))}

              <section id="contact" className="scroll-mt-28">
                <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {sections.length + 1}. Contact us
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Questions, corrections, or a request to delete your data? Email{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-foreground underline-offset-2 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>{" "}
                  or use the{" "}
                  <Link to="/contact" className="text-foreground underline-offset-2 hover:underline">
                    contact form
                  </Link>
                  . You can also read our{" "}
                  <Link to="/terms" className="text-foreground underline-offset-2 hover:underline">
                    Terms of Service
                  </Link>
                  .
                </p>
                <address className="mt-6 space-y-1 not-italic text-sm leading-relaxed text-muted-foreground md:text-base">
                  <div className="text-foreground">Ezzi Solutions AI</div>
                  <div>{CONTACT_ADDRESS}</div>
                  <div>
                    <a
                      href={CONTACT_PHONE_HREF}
                      className="underline-offset-2 hover:text-foreground hover:underline"
                    >
                      {CONTACT_PHONE}
                    </a>
                  </div>
                </address>
              </section>
            </div>

            <div className="mt-16 border-t border-border pt-8">
              <Link
                to="/"
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
              >
                ← Back home
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
