import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "problem", label: "Problem" },
  { id: "how", label: "How it works" },
  { id: "compare", label: "Compare" },
  { id: "work", label: "Case studies" },
  { id: "faq", label: "FAQ" },
] as const;

const NAV_OFFSET = 80; // sticky nav height + margin

export default function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("problem");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Scroll-y → background blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver → active section highlight
  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${NAV_OFFSET}px 0px -55% 0px`,
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    targets.forEach((t) => observerRef.current?.observe(t));
    return () => observerRef.current?.disconnect();
  }, []);

  const onAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET + 8;
    window.scrollTo({ top: y, behavior: "smooth" });
    // optimistic active update
    setActiveId(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-background/40 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2.5"
          aria-label="Ezzi Solutions AI — Home"
        >
          <img
            src="/logo-cube.png"
            alt=""
            width="32"
            height="32"
            className="h-7 w-7 select-none transition-transform duration-300 group-hover:scale-[1.04]"
            draggable={false}
          />
          <span className="flex flex-col leading-none">
            <span className="text-[13px] font-semibold tracking-tight text-foreground">
              Ezzi Solutions AI
            </span>
            <span className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.22em] text-muted-2">
              A Henagon Company
            </span>
          </span>
        </Link>

        {/* Bookmark chips — desktop centered, mobile horizontal scroll */}
        <nav className="-mx-2 flex flex-1 items-center gap-1 overflow-x-auto px-2 md:mx-0 md:justify-center md:overflow-visible">
          {sections.map((s) => {
            const isActive = activeId === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => onAnchorClick(e, s.id)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "shrink-0 rounded-full border px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] transition-colors",
                  isActive
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border bg-transparent text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
              >
                {s.label}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="#quote"
          onClick={(e) => onAnchorClick(e, "quote")}
          className="group hidden shrink-0 items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-glow active:scale-[0.98] md:inline-flex"
        >
          Get a Quote
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}
