import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import Container from "./Container";

const cols = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/contact" },
      { label: "Partners", to: "/partners" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", to: "/case-studies" },
      { label: "Blog", to: "/blog" },
      { label: "Process", to: "/process" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
      { label: "Cookie Policy", to: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
              aria-label="Ezzi Solutions AI — Home"
            >
              <img
                src="/logo-full-dark.png"
                alt="Ezzi Solutions AI — A Henagon Company"
                className="h-9 w-auto select-none transition-transform duration-300 group-hover:scale-[1.03]"
                draggable={false}
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Custom software & apps — built with AI, launched in weeks.
            </p>
            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm text-foreground"
            >
              Start a project
              <ArrowUpRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">
                {col.title}
              </div>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Twitter"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-muted-2">
            © 2026 Ezzi Solutions AI — A Henagon Company. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
