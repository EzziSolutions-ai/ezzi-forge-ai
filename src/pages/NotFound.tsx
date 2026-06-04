import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not Found: Ezzi Solutions AI</title>
      </Helmet>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-mesh opacity-80" />
        <div className="absolute inset-0 -z-10 bg-dot-grid opacity-40" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" />

        <Container className="relative">
          <div className="flex min-h-[calc(100svh-5rem)] flex-col items-start justify-center py-24 md:py-32">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-2">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-border-strong" />
              Error · 404
            </div>
            <div className="mt-6 font-display text-7xl font-semibold tracking-tight text-foreground md:text-9xl">
              404
            </div>
            <h1 className="text-h2 mt-6 max-w-2xl text-foreground text-balance">
              This page doesn&apos;t exist.{" "}
              <span className="text-muted-foreground">Or doesn&apos;t exist yet.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Either the URL is wrong, or we haven&apos;t shipped this page yet.
              Either way, we suggest one of these:
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-glow active:scale-[0.98]"
              >
                Back home
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/case-studies"
                className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-foreground/40 hover:bg-surface active:scale-[0.98]"
              >
                Browse the work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
