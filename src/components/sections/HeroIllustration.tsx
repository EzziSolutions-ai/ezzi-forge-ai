/**
 * Custom-coded SVG hero illustrations — one per major page.
 * Each is distinct, anti-slop, and renders in pure SVG with subtle CSS animations.
 *
 * Usage:  <HeroIllustration variant="home" className="..." />
 */

import type { ReactElement } from "react";


export type HeroVariant =
  | "home"
  | "services"
  | "case-studies"
  | "process"
  | "about"
  | "contact"
  | "pricing"
  | "faq"
  | "careers"
  | "partners"
  | "testimonials"
  | "blog"
  | "stuck-prototype"
  | "generic";

export default function HeroIllustration({
  variant,
  className = "",
}: {
  variant: HeroVariant;
  className?: string;
}) {
  const map: Record<HeroVariant, () => ReactElement> = {
    home: HomeArt,
    services: ServicesArt,
    "case-studies": CaseStudiesArt,
    process: ProcessArt,
    about: AboutArt,
    contact: ContactArt,
    pricing: PricingArt,
    faq: FAQArt,
    careers: CareersArt,
    partners: PartnersArt,
    testimonials: TestimonialsArt,
    blog: BlogArt,
    generic: GenericArt,
    "stuck-prototype": StuckPrototypeArt,
  };
  const Comp = map[variant] ?? GenericArt;
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden>
      <Comp />
    </div>
  );
}

// ─── Shared gradient defs (reused via <defs> per illustration) ────

const Defs = ({ id }: { id: string }) => (
  <defs>
    <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="60%">
      <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.55" />
      <stop offset="60%" stopColor="rgb(59 130 246)" stopOpacity="0.10" />
      <stop offset="100%" stopColor="rgb(59 130 246)" stopOpacity="0" />
    </radialGradient>
    <linearGradient id={`${id}-stroke`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="rgb(96 165 250)" stopOpacity="0.85" />
      <stop offset="100%" stopColor="rgb(59 130 246)" stopOpacity="0.20" />
    </linearGradient>
    <linearGradient id={`${id}-fill`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="rgb(15 15 15)" />
      <stop offset="100%" stopColor="rgb(10 10 10)" />
    </linearGradient>
    <pattern id={`${id}-dots`} width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.8" fill="rgb(250 250 250)" fillOpacity="0.07" />
    </pattern>
  </defs>
);

// ─── HOME — Layered geometric cubes echoing the logo ──────────────

function HomeArt() {
  return (
    <svg viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <Defs id="hm" />
      <rect width="720" height="540" fill="url(#hm-dots)" />
      <circle cx="360" cy="270" r="280" fill="url(#hm-glow)" />

      {/* Orbiting tag pills */}
      <g transform="translate(70 80)">
        <rect width="220" height="40" rx="20" fill="url(#hm-fill)" stroke="rgb(59 130 246 / 0.35)" strokeWidth="1" />
        <circle cx="22" cy="20" r="4" fill="rgb(59 130 246)">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        <text x="40" y="25" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2" fill="rgb(250 250 250 / 0.85)">DEPLOY · 03:12 → LIVE</text>
      </g>

      <g transform="translate(440 110)">
        <rect width="200" height="40" rx="20" fill="url(#hm-fill)" stroke="rgb(59 130 246 / 0.35)" strokeWidth="1" />
        <text x="20" y="25" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2" fill="rgb(250 250 250 / 0.85)">SPRINT · WK 4 / 8</text>
      </g>

      <g transform="translate(60 410)">
        <rect width="240" height="40" rx="20" fill="url(#hm-fill)" stroke="rgb(59 130 246 / 0.35)" strokeWidth="1" />
        <circle cx="22" cy="20" r="4" fill="rgb(34 197 94)" />
        <text x="40" y="25" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2" fill="rgb(250 250 250 / 0.85)">TESTS · 247 PASSING</text>
      </g>

      <g transform="translate(450 430)">
        <rect width="200" height="40" rx="20" fill="url(#hm-fill)" stroke="rgb(59 130 246 / 0.35)" strokeWidth="1" />
        <text x="20" y="25" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2" fill="rgb(250 250 250 / 0.85)">COMMITS · 1,284</text>
      </g>

      {/* Center isometric stack — echoes logo */}
      <g transform="translate(360 270)">
        {/* Bottom cube */}
        <g opacity="0.55">
          <path d="M -80 30 L 0 70 L 80 30 L 0 -10 Z" fill="url(#hm-fill)" stroke="rgb(59 130 246 / 0.6)" strokeWidth="1.5" />
        </g>
        {/* Middle cube */}
        <g opacity="0.75">
          <path d="M -75 -20 L 0 18 L 75 -20 L 0 -58 Z" fill="url(#hm-fill)" stroke="rgb(59 130 246 / 0.8)" strokeWidth="1.5" />
          <path d="M -75 -20 L -75 -70 L 0 -108 L 0 -58 Z" fill="rgb(10 10 10)" stroke="rgb(59 130 246 / 0.55)" strokeWidth="1.5" />
          <path d="M 75 -20 L 75 -70 L 0 -108 L 0 -58 Z" fill="rgb(15 15 15)" stroke="rgb(59 130 246 / 0.7)" strokeWidth="1.5" />
        </g>
        {/* Top floating cube */}
        <g opacity="0.95" transform="translate(0 -130)">
          <path d="M -45 -10 L 0 12 L 45 -10 L 0 -32 Z" fill="rgb(59 130 246)" stroke="rgb(96 165 250)" strokeWidth="1.5">
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 -8; 0 0" dur="4s" repeatCount="indefinite" />
          </path>
        </g>
        {/* Connection lines */}
        <line x1="0" y1="-92" x2="0" y2="-60" stroke="rgb(59 130 246 / 0.5)" strokeWidth="1" strokeDasharray="2 3" />
      </g>
    </svg>
  );
}

// ─── SERVICES — Five overlapping cards, one floating up ──────────

function ServicesArt() {
  return (
    <svg viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <Defs id="sv" />
      <rect width="720" height="540" fill="url(#sv-dots)" />
      <circle cx="520" cy="270" r="240" fill="url(#sv-glow)" />

      {/* Five service cards in arc */}
      {[
        { x: 80, y: 380, rot: -14, label: "CUSTOM" },
        { x: 200, y: 320, rot: -7, label: "MOBILE" },
        { x: 320, y: 290, rot: 0, label: "WEB", highlight: true },
        { x: 440, y: 320, rot: 7, label: "SAAS" },
        { x: 560, y: 380, rot: 14, label: "UI/UX" },
      ].map((c, i) => (
        <g key={c.label} transform={`translate(${c.x} ${c.y}) rotate(${c.rot})`}>
          <rect width="100" height="140" rx="10" fill={c.highlight ? "rgb(59 130 246 / 0.10)" : "url(#sv-fill)"} stroke={c.highlight ? "rgb(59 130 246)" : "rgb(59 130 246 / 0.35)"} strokeWidth={c.highlight ? "1.5" : "1"} />
          <rect x="14" y="20" width="40" height="40" rx="8" fill={c.highlight ? "rgb(59 130 246 / 0.3)" : "rgb(31 31 31)"} />
          <rect x="14" y="74" width="60" height="6" rx="2" fill="rgb(31 31 31)" />
          <rect x="14" y="88" width="40" height="4" rx="2" fill="rgb(31 31 31)" />
          <text x="14" y="125" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill={c.highlight ? "rgb(59 130 246)" : "rgb(161 161 170)"}>
            {c.label}
          </text>
          <text x="14" y="138" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgb(113 113 122)">0{i + 1}</text>
        </g>
      ))}

      {/* Floating preview card */}
      <g transform="translate(280 90)">
        <rect width="180" height="120" rx="12" fill="url(#sv-fill)" stroke="rgb(59 130 246 / 0.55)" strokeWidth="1" />
        <rect x="14" y="14" width="60" height="6" rx="2" fill="rgb(59 130 246)" />
        <rect x="14" y="28" width="120" height="4" rx="2" fill="rgb(31 31 31)" />
        <rect x="14" y="40" width="100" height="4" rx="2" fill="rgb(31 31 31)" />
        <rect x="14" y="64" width="152" height="40" rx="6" fill="rgb(15 15 15)" />
        <rect x="22" y="76" width="80" height="4" rx="2" fill="rgb(59 130 246 / 0.4)" />
        <rect x="22" y="86" width="120" height="4" rx="2" fill="rgb(31 31 31)" />
        <animateTransform attributeName="transform" type="translate" values="280 90; 280 80; 280 90" dur="5s" repeatCount="indefinite" />
      </g>
    </svg>
  );
}

// ─── CASE STUDIES — Grid of case-study tiles ─────────────────────

function CaseStudiesArt() {
  const tiles = [
    { x: 60, y: 80, w: 180, h: 130, lab: "CAREFLOW" },
    { x: 260, y: 80, w: 200, h: 130, lab: "OUTREACH·OS" },
    { x: 480, y: 80, w: 180, h: 130, lab: "JOBSNAP" },
    { x: 60, y: 230, w: 200, h: 130, lab: "BIDMIND" },
    { x: 280, y: 230, w: 180, h: 130, lab: "MFG ·  DASH", h2: true },
    { x: 480, y: 230, w: 180, h: 130, lab: "ROYALSIGNS" },
    { x: 60, y: 380, w: 240, h: 100, lab: "HC ·  COMPLIANCE" },
    { x: 320, y: 380, w: 340, h: 100, lab: "STUDIO" },
  ];
  return (
    <svg viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <Defs id="cs" />
      <rect width="720" height="540" fill="url(#cs-dots)" />
      <circle cx="360" cy="270" r="320" fill="url(#cs-glow)" />
      {tiles.map((t, i) => (
        <g key={i} transform={`translate(${t.x} ${t.y})`}>
          <rect width={t.w} height={t.h} rx="12" fill="url(#cs-fill)" stroke={t.h2 ? "rgb(59 130 246)" : "rgb(59 130 246 / 0.3)"} strokeWidth={t.h2 ? "1.5" : "1"} />
          {t.h2 && <rect width={t.w} height={t.h} rx="12" fill="rgb(59 130 246 / 0.08)" />}
          <text x="14" y="24" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="2" fill="rgb(113 113 122)">№ 0{i + 1}</text>
          <text x="14" y={t.h - 18} fontFamily="Geist, sans-serif" fontWeight="600" fontSize="14" letterSpacing="-0.5" fill="rgb(250 250 250)">
            {t.lab}
          </text>
        </g>
      ))}
    </svg>
  );
}

// ─── PROCESS — Vertical 60-day timeline ──────────────────────────

function ProcessArt() {
  return (
    <svg viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <Defs id="pr" />
      <rect width="720" height="540" fill="url(#pr-dots)" />
      <circle cx="360" cy="270" r="260" fill="url(#pr-glow)" />
      {/* Vertical track */}
      <line x1="200" y1="60" x2="200" y2="480" stroke="rgb(31 31 31)" strokeWidth="2" />
      {/* Phases */}
      {[
        { y: 90, label: "WEEK 01 · DISCOVER", body: "Stakeholder interviews · written scope" },
        { y: 170, label: "WEEK 02 · DESIGN", body: "UI mocks · data model" },
        { y: 250, label: "WEEKS 03–05 · BUILD", body: "Daily builds · weekly demos", active: true },
        { y: 330, label: "WEEK 06 · QA", body: "E2E tests · accessibility audit" },
        { y: 410, label: "WEEKS 07–08 · LAUNCH", body: "Deploy · handoff · runbook" },
      ].map((p, i) => (
        <g key={i} transform={`translate(0 ${p.y})`}>
          <circle cx="200" cy="0" r={p.active ? "10" : "6"} fill={p.active ? "rgb(59 130 246)" : "rgb(10 10 10)"} stroke={p.active ? "rgb(96 165 250)" : "rgb(59 130 246 / 0.5)"} strokeWidth="1.5" />
          {p.active && (
            <circle cx="200" cy="0" r="10" fill="none" stroke="rgb(59 130 246)" strokeWidth="1">
              <animate attributeName="r" values="10;20;10" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
            </circle>
          )}
          <text x="225" y="-5" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2" fill="rgb(250 250 250 / 0.9)">
            {p.label}
          </text>
          <text x="225" y="14" fontFamily="Geist, sans-serif" fontSize="11" fill="rgb(161 161 170)">
            {p.body}
          </text>
        </g>
      ))}
    </svg>
  );
}

// ─── ABOUT — Stylized team avatars in formation ──────────────────

function AboutArt() {
  return (
    <svg viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <Defs id="ab" />
      <rect width="720" height="540" fill="url(#ab-dots)" />
      <circle cx="360" cy="270" r="260" fill="url(#ab-glow)" />
      {/* Three abstract avatar cards */}
      {[
        { x: 100, y: 150, lab: "FOUNDER", r: 1 },
        { x: 280, y: 110, lab: "ENGINEER", r: 0, lead: true },
        { x: 460, y: 150, lab: "DESIGNER", r: -1 },
      ].map((a, i) => (
        <g key={i} transform={`translate(${a.x} ${a.y}) rotate(${a.r})`}>
          <rect width="160" height="280" rx="14" fill="url(#ab-fill)" stroke={a.lead ? "rgb(59 130 246)" : "rgb(59 130 246 / 0.3)"} strokeWidth={a.lead ? "1.5" : "1"} />
          {/* Avatar circle */}
          <circle cx="80" cy="90" r="40" fill={a.lead ? "rgb(59 130 246 / 0.2)" : "rgb(20 20 20)"} stroke={a.lead ? "rgb(59 130 246)" : "rgb(31 31 31)"} strokeWidth="1.5" />
          <circle cx="80" cy="80" r="14" fill={a.lead ? "rgb(96 165 250)" : "rgb(82 82 82)"} />
          <path d={`M 50 130 Q 80 100 110 130`} fill={a.lead ? "rgb(96 165 250)" : "rgb(82 82 82)"} />
          {/* Info lines */}
          <rect x="20" y="160" width="120" height="4" rx="2" fill={a.lead ? "rgb(59 130 246)" : "rgb(31 31 31)"} />
          <rect x="20" y="172" width="80" height="4" rx="2" fill="rgb(31 31 31)" />
          <line x1="20" y1="200" x2="140" y2="200" stroke="rgb(31 31 31)" strokeWidth="0.5" />
          <text x="20" y="225" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill={a.lead ? "rgb(59 130 246)" : "rgb(113 113 122)"}>
            {a.lab}
          </text>
          <rect x="20" y="240" width="60" height="3" rx="1.5" fill="rgb(31 31 31)" />
          <rect x="20" y="248" width="100" height="3" rx="1.5" fill="rgb(31 31 31)" />
        </g>
      ))}
    </svg>
  );
}

// ─── CONTACT — Open envelope + arrow ─────────────────────────────

function ContactArt() {
  return (
    <svg viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <Defs id="ct" />
      <rect width="720" height="540" fill="url(#ct-dots)" />
      <circle cx="360" cy="270" r="240" fill="url(#ct-glow)" />

      {/* Background card stack */}
      <g transform="translate(160 130) rotate(-6)">
        <rect width="400" height="280" rx="14" fill="url(#ct-fill)" stroke="rgb(59 130 246 / 0.2)" strokeWidth="1" opacity="0.45" />
      </g>
      <g transform="translate(180 110) rotate(-2)">
        <rect width="400" height="280" rx="14" fill="url(#ct-fill)" stroke="rgb(59 130 246 / 0.35)" strokeWidth="1" opacity="0.7" />
      </g>

      {/* Front card */}
      <g transform="translate(200 100)">
        <rect width="400" height="300" rx="14" fill="url(#ct-fill)" stroke="rgb(59 130 246 / 0.6)" strokeWidth="1.5" />
        {/* Header */}
        <text x="24" y="36" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="rgb(59 130 246)">RE: NEW PROJECT</text>
        <line x1="24" y1="50" x2="376" y2="50" stroke="rgb(31 31 31)" />
        {/* Body lines */}
        <rect x="24" y="70" width="100" height="4" rx="2" fill="rgb(75 75 75)" />
        <rect x="24" y="88" width="320" height="4" rx="2" fill="rgb(40 40 40)" />
        <rect x="24" y="100" width="280" height="4" rx="2" fill="rgb(40 40 40)" />
        <rect x="24" y="112" width="300" height="4" rx="2" fill="rgb(40 40 40)" />
        <rect x="24" y="124" width="180" height="4" rx="2" fill="rgb(40 40 40)" />
        <rect x="24" y="150" width="80" height="4" rx="2" fill="rgb(75 75 75)" />
        <rect x="24" y="168" width="300" height="4" rx="2" fill="rgb(40 40 40)" />
        <rect x="24" y="180" width="260" height="4" rx="2" fill="rgb(40 40 40)" />
        {/* Send button */}
        <rect x="24" y="230" width="120" height="40" rx="20" fill="rgb(59 130 246)" />
        <text x="48" y="255" fontFamily="Geist, sans-serif" fontSize="12" fontWeight="600" fill="#fff">SEND</text>
        <path d="M 130 250 L 138 245 L 130 240 M 130 250 L 138 250" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Reply tag */}
        <g transform="translate(280 240)">
          <rect width="100" height="30" rx="15" fill="rgb(10 10 10)" stroke="rgb(59 130 246 / 0.5)" strokeWidth="1" />
          <circle cx="14" cy="15" r="4" fill="rgb(34 197 94)" />
          <text x="26" y="20" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1" fill="rgb(161 161 170)">REPLY · 48H</text>
        </g>
      </g>
    </svg>
  );
}

// ─── PRICING — Three stacked engagement cards ────────────────────

function PricingArt() {
  return (
    <svg viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <Defs id="pc" />
      <rect width="720" height="540" fill="url(#pc-dots)" />
      <circle cx="360" cy="270" r="240" fill="url(#pc-glow)" />
      {/* Stack of pricing tiers */}
      {[
        { y: 90, lab: "FIXED-SCOPE BUILD", price: "$" },
        { y: 200, lab: "SPRINT-BASED", price: "$$", lead: true },
        { y: 310, lab: "BUILD + RUN", price: "$$$" },
      ].map((t, i) => (
        <g key={i} transform={`translate(160 ${t.y})`}>
          <rect width="400" height="100" rx="14" fill={t.lead ? "rgb(59 130 246 / 0.10)" : "url(#pc-fill)"} stroke={t.lead ? "rgb(59 130 246)" : "rgb(59 130 246 / 0.35)"} strokeWidth={t.lead ? "1.5" : "1"} />
          <text x="24" y="32" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill={t.lead ? "rgb(96 165 250)" : "rgb(113 113 122)"}>
            ENGAGEMENT {String(i + 1).padStart(2, "0")}
          </text>
          <text x="24" y="62" fontFamily="Geist, sans-serif" fontWeight="600" fontSize="20" letterSpacing="-0.5" fill="rgb(250 250 250)">
            {t.lab}
          </text>
          <text x="24" y="84" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgb(161 161 170)">
            QUOTE WITHIN 48 HOURS
          </text>
          <text x="370" y="58" textAnchor="end" fontFamily="Geist, sans-serif" fontWeight="600" fontSize="28" fill={t.lead ? "rgb(96 165 250)" : "rgb(82 82 82)"}>
            {t.price}
          </text>
        </g>
      ))}
      <text x="360" y="450" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="3" fill="rgb(113 113 122)">
        — QUOTE-BASED PRICING —
      </text>
    </svg>
  );
}

// ─── FAQ — Stacked question cards ────────────────────────────────

function FAQArt() {
  return (
    <svg viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <Defs id="fq" />
      <rect width="720" height="540" fill="url(#fq-dots)" />
      <circle cx="360" cy="270" r="220" fill="url(#fq-glow)" />
      {[
        { y: 80, lab: "PRICING", q: "Why 40–70% less?" },
        { y: 160, lab: "TIMELINE", q: "Really 60 days?", open: true },
        { y: 240, lab: "OWNERSHIP", q: "Who owns the code?" },
        { y: 320, lab: "AI", q: "How AI-augmented?" },
        { y: 400, lab: "SUPPORT", q: "What after launch?" },
      ].map((f, i) => (
        <g key={i} transform={`translate(120 ${f.y})`}>
          <rect width="480" height="60" rx="10" fill={f.open ? "rgb(59 130 246 / 0.10)" : "url(#fq-fill)"} stroke={f.open ? "rgb(59 130 246)" : "rgb(59 130 246 / 0.3)"} strokeWidth="1" />
          <text x="20" y="24" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill={f.open ? "rgb(96 165 250)" : "rgb(113 113 122)"}>{f.lab}</text>
          <text x="20" y="44" fontFamily="Geist, sans-serif" fontSize="13" fontWeight="500" fill="rgb(250 250 250)">{f.q}</text>
          <g transform={`translate(450 30) ${f.open ? "rotate(45)" : ""}`}>
            <line x1="-6" y1="0" x2="6" y2="0" stroke={f.open ? "rgb(96 165 250)" : "rgb(113 113 122)"} strokeWidth="1.5" />
            <line x1="0" y1="-6" x2="0" y2="6" stroke={f.open ? "rgb(96 165 250)" : "rgb(113 113 122)"} strokeWidth="1.5" />
          </g>
        </g>
      ))}
    </svg>
  );
}

// ─── CAREERS — Workspace silhouette + plant ──────────────────────

function CareersArt() {
  return (
    <svg viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <Defs id="cr" />
      <rect width="720" height="540" fill="url(#cr-dots)" />
      <circle cx="360" cy="270" r="260" fill="url(#cr-glow)" />
      {/* Desk */}
      <line x1="80" y1="420" x2="640" y2="420" stroke="rgb(59 130 246 / 0.4)" strokeWidth="2" />
      {/* Monitor */}
      <g transform="translate(220 180)">
        <rect width="280" height="200" rx="10" fill="url(#cr-fill)" stroke="rgb(59 130 246 / 0.6)" strokeWidth="1.5" />
        <rect x="20" y="20" width="80" height="6" rx="2" fill="rgb(59 130 246)" />
        <rect x="20" y="38" width="180" height="4" rx="2" fill="rgb(40 40 40)" />
        <rect x="20" y="50" width="220" height="4" rx="2" fill="rgb(40 40 40)" />
        <rect x="20" y="80" width="240" height="40" rx="6" fill="rgb(15 15 15)" />
        <rect x="28" y="92" width="100" height="4" rx="2" fill="rgb(59 130 246 / 0.5)" />
        <rect x="28" y="104" width="160" height="4" rx="2" fill="rgb(40 40 40)" />
        <rect x="20" y="130" width="240" height="40" rx="6" fill="rgb(15 15 15)" />
        <rect x="28" y="142" width="80" height="4" rx="2" fill="rgb(34 197 94)" />
        <rect x="28" y="154" width="180" height="4" rx="2" fill="rgb(40 40 40)" />
        {/* Stand */}
        <rect x="125" y="200" width="30" height="20" fill="rgb(31 31 31)" />
        <rect x="100" y="220" width="80" height="6" rx="2" fill="rgb(40 40 40)" />
      </g>
      {/* Coffee */}
      <g transform="translate(140 360)">
        <rect width="40" height="50" rx="4" fill="rgb(31 31 31)" stroke="rgb(59 130 246 / 0.4)" />
        <ellipse cx="20" cy="5" rx="16" ry="3" fill="rgb(75 75 75)" />
        <path d="M 6 14 Q 14 8 22 12" stroke="rgb(96 165 250 / 0.6)" strokeWidth="1" fill="none" />
      </g>
      {/* Plant */}
      <g transform="translate(540 320)">
        <rect width="50" height="50" rx="6" fill="rgb(31 31 31)" stroke="rgb(59 130 246 / 0.4)" />
        <path d="M 10 0 Q 18 -30 26 0" fill="rgb(34 197 94 / 0.6)" />
        <path d="M 18 0 Q 30 -38 38 0" fill="rgb(34 197 94 / 0.8)" />
        <path d="M 25 0 Q 38 -25 42 0" fill="rgb(34 197 94 / 0.5)" />
      </g>
    </svg>
  );
}

// ─── PARTNERS — Connected node graph ─────────────────────────────

function PartnersArt() {
  const nodes = [
    { id: "ezzi", x: 360, y: 270, lab: "EZZI", r: 32, lead: true },
    { id: "aws", x: 180, y: 130, lab: "AWS", r: 24 },
    { id: "vercel", x: 540, y: 130, lab: "VERCEL", r: 24 },
    { id: "stripe", x: 120, y: 290, lab: "STRIPE", r: 24 },
    { id: "openai", x: 600, y: 290, lab: "OPENAI", r: 26 },
    { id: "supabase", x: 200, y: 430, lab: "SUPABASE", r: 24 },
    { id: "twilio", x: 520, y: 430, lab: "TWILIO", r: 24 },
  ];
  return (
    <svg viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <Defs id="pn" />
      <rect width="720" height="540" fill="url(#pn-dots)" />
      <circle cx="360" cy="270" r="260" fill="url(#pn-glow)" />
      {/* Connection lines */}
      {nodes.slice(1).map((n) => (
        <line key={n.id} x1="360" y1="270" x2={n.x} y2={n.y} stroke="rgb(59 130 246 / 0.35)" strokeWidth="1" strokeDasharray="3 4" />
      ))}
      {nodes.map((n) => (
        <g key={n.id} transform={`translate(${n.x} ${n.y})`}>
          <circle r={n.r} fill={n.lead ? "rgb(59 130 246)" : "rgb(15 15 15)"} stroke={n.lead ? "rgb(96 165 250)" : "rgb(59 130 246 / 0.6)"} strokeWidth="1.5" />
          {n.lead && (
            <circle r={n.r} fill="none" stroke="rgb(59 130 246)" strokeWidth="1">
              <animate attributeName="r" values={`${n.r}; ${n.r + 18}; ${n.r}`} dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
            </circle>
          )}
          <text textAnchor="middle" y="4" fontFamily="JetBrains Mono, monospace" fontSize={n.lead ? "11" : "9"} fontWeight={n.lead ? "600" : "400"} letterSpacing="1.5" fill={n.lead ? "#fff" : "rgb(250 250 250 / 0.9)"}>
            {n.lab}
          </text>
        </g>
      ))}
    </svg>
  );
}

// ─── TESTIMONIALS — Quote cards arranged ─────────────────────────

function TestimonialsArt() {
  return (
    <svg viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <Defs id="ts" />
      <rect width="720" height="540" fill="url(#ts-dots)" />
      <circle cx="360" cy="270" r="240" fill="url(#ts-glow)" />

      {/* Background cards */}
      <g transform="translate(80 200) rotate(-8)">
        <rect width="240" height="180" rx="12" fill="url(#ts-fill)" stroke="rgb(59 130 246 / 0.3)" opacity="0.6" />
      </g>
      <g transform="translate(420 220) rotate(6)">
        <rect width="240" height="180" rx="12" fill="url(#ts-fill)" stroke="rgb(59 130 246 / 0.3)" opacity="0.6" />
      </g>

      {/* Front quote */}
      <g transform="translate(220 130)">
        <rect width="300" height="240" rx="14" fill="url(#ts-fill)" stroke="rgb(59 130 246 / 0.6)" strokeWidth="1.5" />
        {/* Big quote mark */}
        <text x="24" y="62" fontFamily="Geist, sans-serif" fontSize="56" fontWeight="700" fill="rgb(59 130 246)">
          &ldquo;
        </text>
        <rect x="24" y="80" width="240" height="6" rx="2" fill="rgb(75 75 75)" />
        <rect x="24" y="96" width="200" height="6" rx="2" fill="rgb(75 75 75)" />
        <rect x="24" y="112" width="240" height="6" rx="2" fill="rgb(75 75 75)" />
        <rect x="24" y="128" width="140" height="6" rx="2" fill="rgb(75 75 75)" />
        <line x1="24" y1="170" x2="276" y2="170" stroke="rgb(31 31 31)" />
        <circle cx="40" cy="200" r="12" fill="rgb(31 31 31)" />
        <rect x="60" y="190" width="100" height="6" rx="2" fill="rgb(250 250 250 / 0.85)" />
        <rect x="60" y="202" width="140" height="4" rx="2" fill="rgb(82 82 82)" />
      </g>
    </svg>
  );
}

// ─── BLOG — Reader / editorial ───────────────────────────────────

function BlogArt() {
  return (
    <svg viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <Defs id="bl" />
      <rect width="720" height="540" fill="url(#bl-dots)" />
      <circle cx="360" cy="270" r="240" fill="url(#bl-glow)" />
      {/* Article card */}
      <g transform="translate(200 100)">
        <rect width="320" height="360" rx="14" fill="url(#bl-fill)" stroke="rgb(59 130 246 / 0.5)" strokeWidth="1.5" />
        {/* Image placeholder */}
        <rect x="20" y="20" width="280" height="120" rx="8" fill="rgb(59 130 246 / 0.1)" stroke="rgb(59 130 246 / 0.4)" />
        <circle cx="160" cy="80" r="20" fill="rgb(59 130 246 / 0.4)" />
        {/* Meta */}
        <text x="20" y="170" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="rgb(96 165 250)">PROCESS · 8 MIN READ</text>
        {/* Title */}
        <text x="20" y="200" fontFamily="Geist, sans-serif" fontSize="20" fontWeight="600" fill="rgb(250 250 250)">How we ship in 60 days</text>
        {/* Body */}
        <rect x="20" y="220" width="280" height="4" rx="2" fill="rgb(40 40 40)" />
        <rect x="20" y="232" width="260" height="4" rx="2" fill="rgb(40 40 40)" />
        <rect x="20" y="244" width="280" height="4" rx="2" fill="rgb(40 40 40)" />
        <rect x="20" y="256" width="200" height="4" rx="2" fill="rgb(40 40 40)" />
        <rect x="20" y="280" width="100" height="4" rx="2" fill="rgb(75 75 75)" />
        <rect x="20" y="292" width="280" height="4" rx="2" fill="rgb(40 40 40)" />
        <rect x="20" y="304" width="240" height="4" rx="2" fill="rgb(40 40 40)" />
        {/* Read more */}
        <rect x="20" y="330" width="110" height="20" rx="10" fill="rgb(10 10 10)" stroke="rgb(59 130 246 / 0.5)" />
        <text x="32" y="343" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1" fill="rgb(161 161 170)">READ MORE →</text>
      </g>
    </svg>
  );
}


// ─── STUCK PROTOTYPE — Broken UI on the left → production UI on the right ─

function StuckPrototypeArt() {
  return (
    <svg viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <Defs id="sp" />
      <rect width="720" height="540" fill="url(#sp-dots)" />
      <circle cx="540" cy="270" r="240" fill="url(#sp-glow)" />

      {/* LEFT: Broken prototype */}
      <g transform="translate(40 110)">
        <rect width="260" height="320" rx="12" fill="url(#sp-fill)" stroke="rgb(239 68 68 / 0.55)" strokeWidth="1.5" strokeDasharray="6 4" />
        {/* Tag */}
        <g transform="translate(16 14)">
          <rect width="78" height="22" rx="11" fill="rgb(239 68 68 / 0.15)" stroke="rgb(239 68 68 / 0.5)" strokeWidth="1" />
          <text x="11" y="15" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="rgb(248 113 113)">PROTOTYPE</text>
        </g>
        {/* Broken header */}
        <rect x="16" y="50" width="100" height="6" rx="2" fill="rgb(75 75 75)" />
        <rect x="16" y="64" width="220" height="4" rx="2" fill="rgb(40 40 40)" />
        {/* Half-built cards */}
        <rect x="16" y="88" width="100" height="80" rx="6" fill="rgb(15 15 15)" stroke="rgb(31 31 31)" />
        <rect x="22" y="100" width="40" height="4" rx="2" fill="rgb(59 130 246 / 0.5)" />
        <rect x="22" y="112" width="60" height="3" rx="1.5" fill="rgb(40 40 40)" />
        <rect x="22" y="120" width="50" height="3" rx="1.5" fill="rgb(40 40 40)" />
        {/* Broken card (jagged edges) */}
        <g transform="translate(128 88)">
          <path d="M 0 0 L 100 0 L 100 30 L 92 38 L 100 46 L 92 54 L 100 62 L 100 80 L 0 80 Z" fill="rgb(15 15 15)" stroke="rgb(239 68 68 / 0.6)" strokeWidth="1" strokeDasharray="3 3" />
          {/* Error icon */}
          <circle cx="50" cy="40" r="14" fill="rgb(239 68 68 / 0.15)" stroke="rgb(239 68 68)" strokeWidth="1.5" />
          <text x="50" y="46" textAnchor="middle" fontFamily="Geist, sans-serif" fontWeight="700" fontSize="18" fill="rgb(239 68 68)">!</text>
        </g>
        {/* Stuck progress bar */}
        <g transform="translate(16 188)">
          <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="rgb(113 113 122)">BUILD · STUCK AT 60%</text>
          <rect x="0" y="10" width="228" height="8" rx="4" fill="rgb(15 15 15)" stroke="rgb(31 31 31)" />
          <rect x="0" y="10" width="137" height="8" rx="4" fill="rgb(239 68 68 / 0.6)" />
          <line x1="137" y1="6" x2="137" y2="22" stroke="rgb(239 68 68)" strokeWidth="1.5" />
        </g>
        {/* Error log */}
        <g transform="translate(16 222)">
          <rect width="228" height="80" rx="6" fill="rgb(8 8 8)" stroke="rgb(31 31 31)" />
          <text x="10" y="18" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgb(239 68 68)">ERR · auth.users undefined</text>
          <text x="10" y="34" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgb(239 68 68 / 0.8)">ERR · stripe webhook 500</text>
          <text x="10" y="50" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgb(239 68 68 / 0.6)">ERR · db migration failed</text>
          <text x="10" y="66" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgb(113 113 122)">… 47 more</text>
        </g>
      </g>

      {/* Arrow / bridge */}
      <g transform="translate(310 250)">
        <line x1="0" y1="20" x2="80" y2="20" stroke="rgb(59 130 246)" strokeWidth="2" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;-8" dur="0.8s" repeatCount="indefinite" />
        </line>
        <path d="M 76 14 L 86 20 L 76 26" stroke="rgb(59 130 246)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="42" y="0" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="rgb(96 165 250)">EZZI</text>
        <text x="42" y="48" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="rgb(96 165 250)">60 DAYS</text>
      </g>

      {/* RIGHT: Production-ready */}
      <g transform="translate(410 110)">
        <rect width="260" height="320" rx="12" fill="url(#sp-fill)" stroke="rgb(59 130 246 / 0.8)" strokeWidth="1.5" />
        {/* Tag */}
        <g transform="translate(16 14)">
          <rect width="92" height="22" rx="11" fill="rgb(59 130 246 / 0.15)" stroke="rgb(59 130 246 / 0.6)" strokeWidth="1" />
          <circle cx="12" cy="11" r="3" fill="rgb(34 197 94)" />
          <text x="22" y="15" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="rgb(96 165 250)">PRODUCTION</text>
        </g>
        {/* Header */}
        <rect x="16" y="50" width="100" height="6" rx="2" fill="rgb(59 130 246)" />
        <rect x="16" y="64" width="220" height="4" rx="2" fill="rgb(75 75 75)" />
        <rect x="16" y="74" width="180" height="4" rx="2" fill="rgb(75 75 75)" />
        {/* Stat tiles */}
        <g transform="translate(16 96)">
          <rect width="105" height="48" rx="6" fill="rgb(15 15 15)" stroke="rgb(59 130 246 / 0.3)" />
          <text x="10" y="18" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="2" fill="rgb(113 113 122)">UPTIME</text>
          <text x="10" y="38" fontFamily="Geist, sans-serif" fontWeight="600" fontSize="18" fill="rgb(250 250 250)">99.97%</text>
        </g>
        <g transform="translate(135 96)">
          <rect width="105" height="48" rx="6" fill="rgb(15 15 15)" stroke="rgb(59 130 246 / 0.3)" />
          <text x="10" y="18" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="2" fill="rgb(113 113 122)">TESTS</text>
          <text x="10" y="38" fontFamily="Geist, sans-serif" fontWeight="600" fontSize="18" fill="rgb(96 165 250)">PASSING</text>
        </g>
        {/* Chart */}
        <g transform="translate(16 160)">
          <rect width="224" height="80" rx="6" fill="rgb(10 10 10)" stroke="rgb(31 31 31)" />
          <text x="10" y="18" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="2" fill="rgb(113 113 122)">TRAFFIC · LIVE</text>
          <path d="M 12 60 L 40 50 L 65 56 L 90 42 L 115 46 L 140 30 L 170 36 L 200 20 L 214 24" stroke="rgb(59 130 246)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <circle cx="214" cy="24" r="3" fill="rgb(59 130 246)">
            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
        {/* Status pills */}
        <g transform="translate(16 252)">
          <rect width="105" height="22" rx="11" fill="rgb(34 197 94 / 0.12)" stroke="rgb(34 197 94 / 0.45)" />
          <circle cx="12" cy="11" r="3" fill="rgb(34 197 94)" />
          <text x="22" y="15" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="rgb(34 197 94)">DEPLOYED</text>
        </g>
        <g transform="translate(135 252)">
          <rect width="105" height="22" rx="11" fill="rgb(59 130 246 / 0.12)" stroke="rgb(59 130 246 / 0.45)" />
          <text x="12" y="15" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="rgb(96 165 250)">CODE · YOURS</text>
        </g>
        {/* Bottom stat */}
        <g transform="translate(16 284)">
          <text x="0" y="12" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="rgb(113 113 122)">SHIPPED · 47 DAYS</text>
          <text x="224" y="12" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="rgb(34 197 94)">ON TIME ✓</text>
        </g>
      </g>
    </svg>
  );
}

// ─── GENERIC fallback — abstract isometric ───────────────────────

function GenericArt() {
  return (
    <svg viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <Defs id="gn" />
      <rect width="720" height="540" fill="url(#gn-dots)" />
      <circle cx="360" cy="270" r="280" fill="url(#gn-glow)" />
      <g transform="translate(360 270)">
        <path d="M -90 30 L 0 80 L 90 30 L 0 -20 Z" fill="rgb(15 15 15)" stroke="rgb(59 130 246 / 0.6)" strokeWidth="1.5" />
        <path d="M -90 30 L -90 -30 L 0 -80 L 0 -20 Z" fill="rgb(10 10 10)" stroke="rgb(59 130 246 / 0.4)" strokeWidth="1.5" />
        <path d="M 90 30 L 90 -30 L 0 -80 L 0 -20 Z" fill="rgb(20 20 20)" stroke="rgb(59 130 246 / 0.5)" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
