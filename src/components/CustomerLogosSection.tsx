// src/components/StatsSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

/* ── Data ─────────────────────────────────────────────────────────────── */
/* PLACEHOLDER STATS — shaped to match the reference's three-card layout,
   but these numbers aren't sourced. Swap for your own cited figures before
   this ships; don't publish stats as fact without something to back them. */

const stats = [
  {
    prefix: "",
    value: 90,
    decimals: 0,
    suffix: "%",
    label: "reduction in MTTR",
    description: "Drive innovation and digital transformation with AI.",
  },
  {
    prefix: "up to",
    value: 30.9,
    decimals: 1,
    suffix: "B",
    label: "inline attacks blocked per day",
    description:
      "Proactively monitor, analyze, and prevent sophisticated threats in real time with less complexity.",
  },
  {
    prefix: "",
    value: 480,
    decimals: 0,
    suffix: "B",
    label: "endpoints scanned daily",
    description: "Enable better, faster security with an integrated, AI-driven product suite.",
  },
];

/* ── Real count-up (the original AnimatedCounter just rendered a static
   number despite the name) — counts from 0 to `value` once it scrolls
   into view, using an eased requestAnimationFrame loop. ─────────────── */

function AnimatedCounter({ value, decimals = 0, duration = 1.4 }: { value: number; decimals?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#070A0F] via-[#0B0E14] to-[#070A0F] py-24">
      {/* Background: dot-grid texture + slow-pulsing ambient orbs — kept from
          the original, recolored to a single brand-blue family instead of
          the orange/cyan/purple mix. */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-64 w-64 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(59,130,246,${0.1 - i * 0.02}) 0%, transparent 70%)`,
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 1.5 }}
          />
        ))}
      </div>

      <div className="container-page relative z-10">
        {/* Header: eyebrow + two-tone headline on the left, pill button on the
            right — matches the reference's asymmetric layout, not centered. */}
        <ScrollReveal animation="fade-up" speed="fast">
          <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
                Why Spectrunex
              </p>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Platformization empowers you to harness AI-ready infrastructure.{" "}
                <span className="text-blue-400">
                  And our AI-driven services keep everything secure.
                </span>
              </h2>
            </div>
            <a
              href="/platforms"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-400 hover:text-blue-300"
            >
              See our platform approach <span aria-hidden="true">→</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Stats grid — three cards, matching the reference exactly (no
            icons, no per-card progress bar; the original's 8-card,
            rainbow-colored, icon+progress-bar layout doesn't match it). */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8"
            >
              {/* faint diagonal line texture, confined to the card */}
              <svg className="pointer-events-none absolute right-0 top-0 h-40 w-40 opacity-[0.12]" aria-hidden="true">
                <g stroke="#3B82F6" strokeWidth="1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <line key={i} x1={i * 16} y1="0" x2={i * 16 - 100} y2="160" />
                  ))}
                </g>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900/10" />

              <div className="relative">
                <div className="mb-2 flex items-baseline gap-2">
                  {stat.prefix && (
                    <span className="text-lg font-semibold text-white">{stat.prefix}</span>
                  )}
                  <span className="text-4xl font-black text-blue-400">
                    <AnimatedCounter value={stat.value} decimals={stat.decimals} />
                    {stat.suffix === "%" ? " %" : ` ${stat.suffix}`}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">{stat.label}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}