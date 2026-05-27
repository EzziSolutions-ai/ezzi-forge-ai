import { type ReactNode } from "react";

/**
 * Wraps a section in inverted (light) colors. Sets CSS variables locally so
 * every child that uses --background, --foreground, --border, etc. inherits
 * the light palette without needing per-component overrides.
 */
export default function LightSection({
  children,
  className = "",
  withGrain = true,
}: {
  children: ReactNode;
  className?: string;
  withGrain?: boolean;
}) {
  return (
    <section
      className={`light-section relative isolate ${withGrain ? "bg-light-grain" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
