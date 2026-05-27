import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import Container from "@/components/layout/Container";

export default function NotFound() {
  const { pathname } = useLocation();
  return (
    <>
      <Helmet>
        <title>404 — Ezzi Solutions AI</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="relative flex min-h-[70vh] items-center justify-center">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.5]" />
        <Container className="relative text-center">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent">404</div>
          <h1 className="mt-4 text-h1">Page not found</h1>
          <p className="mt-4 text-muted-foreground">
            No route matched <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-xs">{pathname}</code>
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:shadow-glow"
          >
            Back to home
          </Link>
        </Container>
      </section>
    </>
  );
}
