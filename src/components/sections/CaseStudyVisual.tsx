// Abstract SVG patterns — one per visualPattern. Keeps detail pages
// distinct without resorting to stock screenshots or fake UI mocks.

import type { VisualPattern } from "@/data/caseStudies";

export default function CaseStudyVisual({
  pattern,
  className = "",
}: {
  pattern: VisualPattern;
  className?: string;
}) {
  switch (pattern) {
    case "wave":
      return <Wave className={className} />;
    case "pipeline":
      return <Pipeline className={className} />;
    case "document":
      return <Document className={className} />;
    case "configurator":
      return <Configurator className={className} />;
    case "kanban":
      return <Kanban className={className} />;
    case "chart":
      return <Chart className={className} />;
    case "table":
      return <TablePattern className={className} />;
    case "mobile":
      return <MobilePattern className={className} />;
  }
}

// ─── Patterns ─────────────────────────────────────────────────────

function Wave({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 240"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="wv-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgb(59 130 246 / 0)" />
          <stop offset="50%" stopColor="rgb(59 130 246 / 0.8)" />
          <stop offset="100%" stopColor="rgb(59 130 246 / 0)" />
        </linearGradient>
      </defs>
      {/* Voice waveform bars */}
      {Array.from({ length: 60 }).map((_, i) => {
        const seeded = Math.sin(i * 0.42) * Math.cos(i * 0.13) + Math.sin(i * 0.31);
        const h = 18 + Math.abs(seeded) * 78;
        return (
          <rect
            key={i}
            x={i * 10 + 4}
            y={120 - h / 2}
            width="3"
            height={h}
            rx="1.5"
            fill="url(#wv-fade)"
          />
        );
      })}
      {/* Mic icon-ish circle in center */}
      <circle cx="300" cy="120" r="18" fill="none" stroke="rgb(59 130 246 / 0.4)" strokeWidth="1" />
      <circle cx="300" cy="120" r="4" fill="rgb(59 130 246)" />
    </svg>
  );
}

function Pipeline({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 600 240" className={className}>
      {/* 4 stages with falling counts */}
      {[
        { label: "Reach", count: 100, x: 60 },
        { label: "Open", count: 64, x: 195 },
        { label: "Reply", count: 23, x: 330 },
        { label: "Meet", count: 9, x: 465 },
      ].map((s, i, arr) => (
        <g key={s.label}>
          <rect
            x={s.x}
            y={120 - s.count / 1.5}
            width="80"
            height={s.count / 1.5 * 2}
            rx="6"
            fill="rgb(10 10 10)"
            stroke="rgb(31 31 31)"
          />
          <rect
            x={s.x}
            y={120 - 4}
            width="80"
            height="8"
            rx="4"
            fill="rgb(59 130 246 / 0.5)"
          />
          <text
            x={s.x + 40}
            y={120 - s.count / 1.5 - 8}
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="11"
            fill="rgb(161 161 170)"
          >
            {s.count}
          </text>
          <text
            x={s.x + 40}
            y={120 + s.count / 1.5 + 18}
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9"
            letterSpacing="2"
            fill="rgb(113 113 122)"
          >
            {s.label.toUpperCase()}
          </text>
          {i < arr.length - 1 && (
            <line
              x1={s.x + 80}
              y1="120"
              x2={arr[i + 1].x}
              y2="120"
              stroke="rgb(42 42 42)"
              strokeDasharray="2 4"
            />
          )}
        </g>
      ))}
    </svg>
  );
}

function Document({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 600 240" className={className}>
      {/* Document with lines + accent block */}
      <rect x="180" y="20" width="240" height="200" rx="8" fill="rgb(10 10 10)" stroke="rgb(31 31 31)" />
      <rect x="200" y="40" width="120" height="8" rx="2" fill="rgb(59 130 246)" />
      <rect x="200" y="60" width="200" height="4" rx="1" fill="rgb(31 31 31)" />
      <rect x="200" y="74" width="180" height="4" rx="1" fill="rgb(31 31 31)" />
      <rect x="200" y="88" width="160" height="4" rx="1" fill="rgb(31 31 31)" />
      <rect x="200" y="110" width="80" height="4" rx="1" fill="rgb(31 31 31)" />
      <rect x="200" y="124" width="150" height="4" rx="1" fill="rgb(31 31 31)" />
      <rect x="200" y="138" width="200" height="4" rx="1" fill="rgb(31 31 31)" />
      <rect x="200" y="152" width="120" height="4" rx="1" fill="rgb(31 31 31)" />
      {/* Price line highlight */}
      <rect x="200" y="180" width="200" height="20" rx="4" fill="rgb(59 130 246 / 0.08)" stroke="rgb(59 130 246 / 0.3)" />
      <text x="210" y="194" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgb(59 130 246)">$ 47,500</text>
    </svg>
  );
}

function Configurator({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 600 240" className={className}>
      {/* Preview panel */}
      <rect x="40" y="30" width="320" height="180" rx="8" fill="rgb(10 10 10)" stroke="rgb(31 31 31)" />
      <text x="200" y="125" textAnchor="middle" fontFamily="Geist, sans-serif" fontWeight="700" fontSize="36" fill="rgb(59 130 246)" letterSpacing="2">
        YOUR SIGN
      </text>
      <text x="200" y="150" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="rgb(161 161 170)">LIVE PREVIEW</text>
      {/* Options panel */}
      <g transform="translate(390, 30)">
        {["MATERIAL", "FINISH", "MOUNT", "SIZE"].map((label, i) => (
          <g key={label} transform={`translate(0, ${i * 38})`}>
            <rect width="170" height="28" rx="6" fill="rgb(10 10 10)" stroke="rgb(31 31 31)" />
            <text x="14" y="18" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="rgb(113 113 122)">{label}</text>
            <circle cx="155" cy="14" r="4" fill="rgb(59 130 246)" />
          </g>
        ))}
        <rect y="172" width="170" height="32" rx="6" fill="rgb(59 130 246)" />
        <text x="85" y="192" textAnchor="middle" fontFamily="Geist, sans-serif" fontWeight="600" fontSize="11" fill="#fff" letterSpacing="0.5">Order: $182</text>
      </g>
    </svg>
  );
}

function Kanban({ className }: { className?: string }) {
  const cols = [
    { label: "Quote", count: 5 },
    { label: "Approved", count: 3 },
    { label: "Produce", count: 4 },
    { label: "Install", count: 2 },
  ];
  return (
    <svg aria-hidden viewBox="0 0 600 240" className={className}>
      {cols.map((col, ci) => (
        <g key={col.label} transform={`translate(${20 + ci * 145}, 20)`}>
          <text x="0" y="12" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="rgb(113 113 122)">
            {col.label.toUpperCase()} ({col.count})
          </text>
          {Array.from({ length: col.count }).map((_, i) => (
            <rect
              key={i}
              x="0"
              y={28 + i * 36}
              width="130"
              height="28"
              rx="6"
              fill="rgb(10 10 10)"
              stroke="rgb(31 31 31)"
            />
          ))}
          {/* highlight one card per column */}
          <rect x="0" y={28 + (col.count > 1 ? 1 : 0) * 36} width="130" height="28" rx="6" fill="rgb(59 130 246 / 0.08)" stroke="rgb(59 130 246 / 0.4)" />
        </g>
      ))}
    </svg>
  );
}

function Chart({ className }: { className?: string }) {
  // Throughput line + downtime bars
  const points = [40, 70, 60, 95, 80, 110, 100, 130, 120, 145, 140, 160];
  const pathD = points.map((y, i) => `${i === 0 ? "M" : "L"} ${30 + i * 50} ${220 - y}`).join(" ");
  return (
    <svg aria-hidden viewBox="0 0 600 240" className={className}>
      {/* Grid lines */}
      {[60, 110, 160, 210].map((y) => (
        <line key={y} x1="20" y1={y} x2="580" y2={y} stroke="rgb(31 31 31)" strokeDasharray="2 4" />
      ))}
      {/* Downtime bars */}
      {points.map((_, i) => {
        const h = 8 + (i % 3 === 1 ? 22 : 6);
        return (
          <rect
            key={i}
            x={20 + i * 50 + 8}
            y={220 - h}
            width="6"
            height={h}
            rx="2"
            fill="rgb(31 31 31)"
          />
        );
      })}
      {/* Throughput line */}
      <path d={pathD} stroke="rgb(59 130 246)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {points.map((y, i) => (
        <circle key={i} cx={30 + i * 50} cy={220 - y} r="3" fill="rgb(59 130 246)" />
      ))}
      <text x="30" y="20" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="rgb(113 113 122)">
        THROUGHPUT / SHIFT
      </text>
    </svg>
  );
}

function TablePattern({ className }: { className?: string }) {
  const rows = [
    { actor: "jane.doe", action: "READ", resource: "patient_002841", ok: true },
    { actor: "system", action: "EXPORT", resource: "audit_log", ok: true },
    { actor: "marc.k", action: "UPDATE", resource: "patient_004112", ok: true },
    { actor: "unknown", action: "READ", resource: "patient_002841", ok: false },
    { actor: "jane.doe", action: "READ", resource: "patient_004112", ok: true },
  ];
  return (
    <svg aria-hidden viewBox="0 0 600 240" className={className}>
      <rect x="20" y="20" width="560" height="200" rx="8" fill="rgb(10 10 10)" stroke="rgb(31 31 31)" />
      {/* Header */}
      <line x1="20" y1="46" x2="580" y2="46" stroke="rgb(31 31 31)" />
      {["TIME", "ACTOR", "ACTION", "RESOURCE", "OK"].map((h, i) => (
        <text
          key={h}
          x={40 + i * 110}
          y="38"
          fontFamily="JetBrains Mono, monospace"
          fontSize="9"
          letterSpacing="2"
          fill="rgb(113 113 122)"
        >
          {h}
        </text>
      ))}
      {rows.map((r, i) => (
        <g key={i} transform={`translate(0, ${60 + i * 30})`}>
          <line x1="20" y1="22" x2="580" y2="22" stroke="rgb(31 31 31)" />
          <text x="40" y="14" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgb(161 161 170)">14:0{i + 2}</text>
          <text x="150" y="14" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgb(250 250 250)">{r.actor}</text>
          <text x="260" y="14" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgb(161 161 170)">{r.action}</text>
          <text x="370" y="14" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgb(161 161 170)">{r.resource}</text>
          <circle cx="488" cy="10" r="4" fill={r.ok ? "rgb(34 197 94)" : "rgb(239 68 68)"} />
        </g>
      ))}
    </svg>
  );
}

function MobilePattern({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 600 240" className={className}>
      {/* Phone frame */}
      <rect x="240" y="15" width="120" height="210" rx="14" fill="rgb(10 10 10)" stroke="rgb(42 42 42)" strokeWidth="1.5" />
      <rect x="280" y="22" width="40" height="3" rx="1.5" fill="rgb(42 42 42)" />
      {/* Inside screen */}
      <rect x="248" y="32" width="104" height="186" rx="8" fill="rgb(5 5 5)" />
      {/* Header strip */}
      <text x="300" y="50" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="2" fill="rgb(113 113 122)">JOB · 248</text>
      {/* Status pill */}
      <rect x="266" y="58" width="68" height="16" rx="8" fill="rgb(59 130 246 / 0.1)" stroke="rgb(59 130 246 / 0.4)" />
      <circle cx="276" cy="66" r="3" fill="rgb(59 130 246)" />
      <text x="284" y="69" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgb(59 130 246)">IN PROGRESS</text>
      {/* Photo placeholders */}
      <rect x="256" y="82" width="42" height="42" rx="4" fill="rgb(15 15 15)" stroke="rgb(31 31 31)" />
      <rect x="302" y="82" width="42" height="42" rx="4" fill="rgb(15 15 15)" stroke="rgb(31 31 31)" />
      <rect x="256" y="130" width="42" height="42" rx="4" fill="rgb(15 15 15)" stroke="rgb(31 31 31)" />
      <rect x="302" y="130" width="42" height="42" rx="4" fill="rgb(15 15 15)" stroke="rgb(31 31 31)" />
      {/* Bottom button */}
      <rect x="256" y="184" width="88" height="22" rx="11" fill="rgb(59 130 246)" />
      <text x="300" y="199" textAnchor="middle" fontFamily="Geist, sans-serif" fontWeight="600" fontSize="9" fill="#fff">Log update</text>
      {/* Side annotation */}
      <text x="40" y="60" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="rgb(113 113 122)">
        OFFLINE-FIRST
      </text>
      <text x="40" y="78" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgb(161 161 170)">
        Syncs on signal
      </text>
      <line x1="40" y1="86" x2="240" y2="120" stroke="rgb(42 42 42)" strokeDasharray="3 4" />
    </svg>
  );
}
