import { useEffect, useRef } from "react";

export default function IMCLogo({ width = "100%", maxWidth = 420, className = "" }) {
  const shimRef = useRef(null);

  useEffect(() => {
    const el = shimRef.current;
    if (!el) return;
    let frame;
    let t = 0;
    const animate = () => {
      t += 0.012;
      const x = 50 + 45 * Math.sin(t);
      el.setAttribute("x1", `${x - 20}%`);
      el.setAttribute("x2", `${x + 20}%`);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={className}
      style={{
        width,
        maxWidth,
        display: "inline-block",
        borderRadius: 10,
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(0,0,0,0.55), 0 2px 8px rgba(180,60,10,0.18)",
      }}
    >
      <svg
        viewBox="0 0 420 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: "auto" }}
        role="img"
        aria-label="IMC Logo"
      >
        <defs>
          {/* Main background gradient */}
          <radialGradient id="bgGrad" cx="40%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#6b1a06" />
            <stop offset="50%" stopColor="#3d0e02" />
            <stop offset="100%" stopColor="#1a0601" />
          </radialGradient>

          {/* Grid texture pattern */}
          <pattern id="grid" width="18" height="18" patternUnits="userSpaceOnUse">
            <path d="M 18 0 L 0 0 0 18" fill="none" stroke="#7a2510" strokeWidth="0.4" opacity="0.5" />
          </pattern>

          {/* Shimmer gradient (animated) */}
          <linearGradient id="shimmer" x1="20%" y1="0%" x2="40%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.06" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="shimmerLine" ref={shimRef} x1="20%" y1="0%" x2="40%" y2="0%">
            <stop offset="0%" stopColor="#ff9966" stopOpacity="0" />
            <stop offset="50%" stopColor="#ff9966" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ff9966" stopOpacity="0" />
          </linearGradient>

          {/* Gauge needle gradient */}
          <linearGradient id="needleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6633" />
            <stop offset="100%" stopColor="#ffaa44" />
          </linearGradient>

          {/* Metal/chrome text gradient */}
          <linearGradient id="textGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#e8d8c8" />
            <stop offset="60%" stopColor="#c8b090" />
            <stop offset="100%" stopColor="#a07848" />
          </linearGradient>

          {/* Ruler tick gradient */}
          <linearGradient id="rulerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c0835a" stopOpacity="0.2" />
            <stop offset="20%" stopColor="#e09060" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#e09060" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#c0835a" stopOpacity="0.2" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="textShadow">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#ff6600" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Background */}
        <rect width="420" height="120" fill="url(#bgGrad)" />
        <rect width="420" height="120" fill="url(#grid)" />
        <rect width="420" height="120" fill="url(#shimmer)" />

        {/* ─── SPEEDOMETER / GAUGE ─── */}
        {/* Outer bezel ring */}
        <circle cx="52" cy="56" r="36" fill="#1a0601" stroke="#7a3318" strokeWidth="2" />
        <circle cx="52" cy="56" r="34" fill="none" stroke="#5a2010" strokeWidth="0.8" />

        {/* Gauge face */}
        <circle cx="52" cy="56" r="32" fill="#0e0402" />
        <circle cx="52" cy="56" r="30" fill="none" stroke="#3a1608" strokeWidth="1" />

        {/* Tick marks on gauge - arc from ~210° to ~330° (bottom arc excluded) */}
        {Array.from({ length: 13 }).map((_, i) => {
          const angle = (210 + i * 10) * (Math.PI / 180);
          const isMajor = i % 3 === 0;
          const r1 = isMajor ? 22 : 24;
          const r2 = 28;
          const x1 = 52 + r1 * Math.cos(angle);
          const y1 = 56 + r1 * Math.sin(angle);
          const x2 = 52 + r2 * Math.cos(angle);
          const y2 = 56 + r2 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={isMajor ? "#d08040" : "#7a4020"}
              strokeWidth={isMajor ? 1.5 : 0.8}
            />
          );
        })}

        {/* Speed arc background */}
        <path
          d="M 26 73 A 28 28 0 1 1 78 73"
          fill="none"
          stroke="#2a0e04"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Speed arc colored */}
        <path
          d="M 26 73 A 28 28 0 0 1 52 28"
          fill="none"
          stroke="#c04010"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M 52 28 A 28 28 0 0 1 72 42"
          fill="none"
          stroke="#ff6020"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Needle — pointing ~60° (upper right zone) */}
        <line
          x1="52" y1="56"
          x2={52 + 22 * Math.cos(-20 * Math.PI / 180)}
          y2={56 + 22 * Math.sin(-20 * Math.PI / 180)}
          stroke="url(#needleGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Center cap */}
        <circle cx="52" cy="56" r="4" fill="#d06020" />
        <circle cx="52" cy="56" r="2.5" fill="#ff9944" />

        {/* Gauge label */}
        <text x="52" y="68" textAnchor="middle" fill="#b06030" fontSize="5" fontFamily="serif" letterSpacing="1">
          km/h
        </text>

        {/* Outer chrome ring highlight */}
        <circle cx="52" cy="56" r="36" fill="none" stroke="#c07040" strokeWidth="0.5" opacity="0.4" />

        {/* ─── IMC TEXT ─── */}
        <text
          x="102"
          y="78"
          fontFamily="'Georgia', 'Times New Roman', serif"
          fontSize="62"
          fontWeight="bold"
          letterSpacing="6"
          fill="url(#textGrad)"
          filter="url(#textShadow)"
        >
          IMC
        </text>

        {/* Subtle text highlight top edge */}
        <text
          x="102"
          y="78"
          fontFamily="'Georgia', 'Times New Roman', serif"
          fontSize="62"
          fontWeight="bold"
          letterSpacing="6"
          fill="none"
          stroke="rgba(255,200,140,0.12)"
          strokeWidth="0.5"
        >
          IMC
        </text>

        {/* ─── RULER / MEASUREMENT BAR ─── */}
        {/* Ruler base line */}
        <line x1="14" y1="102" x2="406" y2="102" stroke="url(#rulerGrad)" strokeWidth="1" />
        <line x1="14" y1="101" x2="406" y2="101" stroke="rgba(255,150,80,0.15)" strokeWidth="0.5" />

        {/* Shimmer line over ruler */}
        <line x1="14" y1="102" x2="406" y2="102" stroke="url(#shimmerLine)" strokeWidth="1.5" />

        {/* Ruler ticks */}
        {Array.from({ length: 79 }).map((_, i) => {
          const x = 14 + i * 5;
          const isMajor = i % 10 === 0;
          const isMid = i % 5 === 0;
          const tickH = isMajor ? 8 : isMid ? 5 : 3;
          const tickColor = isMajor ? "#e09060" : isMid ? "#b06040" : "#7a4028";
          const tickW = isMajor ? 1.2 : 0.7;
          return (
            <line
              key={i}
              x1={x} y1={102 - tickH}
              x2={x} y2={102}
              stroke={tickColor}
              strokeWidth={tickW}
              opacity={isMajor ? 1 : isMid ? 0.8 : 0.5}
            />
          );
        })}

        {/* Major tick numbers */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => {
          const x = 14 + n * 50;
          return (
            <text key={n} x={x} y={117} textAnchor="middle" fill="#a06030" fontSize="5.5"
              fontFamily="'Courier New', monospace" opacity="0.7">
              {n * 5}
            </text>
          );
        })}

        {/* Edge end caps on ruler */}
        <line x1="14" y1="96" x2="14" y2="104" stroke="#c07040" strokeWidth="1.5" />
        <line x1="406" y1="96" x2="406" y2="104" stroke="#c07040" strokeWidth="1.5" />

        {/* Subtle vignette overlay */}
        <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
          <stop offset="60%" stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.45)" />
        </radialGradient>
        <rect width="420" height="120" fill="url(#vignette)" />
      </svg>
    </div>
  );
}