import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Container from "./Container";

const services = [
  { label: "Custom Software", href: "/services/custom-software", desc: "Bespoke systems built for scale" },
  { label: "Mobile Apps", href: "/services/mobile-app", desc: "iOS & Android, native-grade" },
  { label: "Web Apps", href: "/services/web-app", desc: "Production-ready React platforms" },
  { label: "SaaS Products", href: "/services/saas", desc: "Multi-tenant, billing-ready" },
  { label: "UI/UX Design", href: "/services/ui-ux", desc: "Interfaces that convert" },
];

const navLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="group inline-flex items-center"
          aria-label="Ezzi Solutions AI — Home"
        >
          <img
            src="/logo-ezzi-dark.png"
            alt="Ezzi Solutions AI"
            width="200"
            height="46"
            className="h-8 w-auto select-none transition-opacity duration-300 group-hover:opacity-80 md:h-9"
            draggable={false}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
              <ChevronDown className="h-3.5 w-3.5 opacity-60" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-3"
                >
                  <div className="rounded-2xl border border-border bg-surface/95 p-2 backdrop-blur-xl shadow-card">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        to={s.href}
                        className="group/item flex items-start justify-between gap-4 rounded-xl px-4 py-3 transition-colors hover:bg-surface-2"
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-foreground">{s.label}</span>
                          <span className="text-xs text-muted-foreground">{s.desc}</span>
                        </div>
                        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:opacity-100 group-hover/item:text-accent" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="group hidden items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-glow active:scale-[0.98] md:inline-flex"
          >
            Get a Quote
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-foreground lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 bg-background/98 backdrop-blur-2xl lg:hidden"
          >
            <Container className="flex h-[calc(100vh-4rem)] flex-col gap-1 overflow-y-auto pb-12 pt-8">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">
                Services
              </div>
              {services.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="flex items-center justify-between border-b border-border py-4 text-lg text-foreground"
                >
                  {s.label}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
              <div className="mb-4 mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">
                Company
              </div>
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="flex items-center justify-between border-b border-border py-4 text-lg text-foreground"
                >
                  {l.label}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-medium text-accent-foreground"
              >
                Get a Quote
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
