import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

export default function PlaceholderPage({
  title,
  pageTitle,
}: {
  title: string;
  pageTitle?: string;
}) {
  const t = pageTitle ?? `${{title}}: Ezzi Solutions AI`;
  return (
    <>
      <Helmet>
        <title>{t}</title>
        <meta name="description" content={`${{title}}: coming soon at Ezzi Solutions AI.`} />
      </Helmet>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.5]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto flex max-w-2xl flex-col items-center text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
              In Progress
            </div>
            <h1 className="text-h1 text-balance">{title}</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Coming soon. We're crafting this page with the same care as the products we build.
            </p>
            <Link
              to="/"
              className="mt-10 inline-flex items-center gap-1.5 rounded-full border border-border-strong px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Back to home
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
