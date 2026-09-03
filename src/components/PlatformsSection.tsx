// src/components/AIThreatLandscapeSection.tsx
"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

/* ── Data ─────────────────────────────────────────────────────────────── */
/* PLACEHOLDER STATS — mirrors the reference layout's numbers so the shape
   of the section is real, but these five figures are not sourced. Swap
   every value + `source` below for your own cited data before shipping;
   don't publish stats as fact without a citation you can stand behind. */

const ringStats = [
  { percent: 78, value: "78%", headline: "~1.5X growth", caption: "IN USAGE IN LAST 12 MONTHS", source: "placeholder — replace with sourced figure" },
  { percent: 94, value: "94%", headline: "development", caption: "ENTERPRISES USING GEN AI SOFTWARE", source: "placeholder — replace with sourced figure" },
];

const barStats = [
  { percent: 56, caption: "INCREASE IN EXPLOITED ZERO DAYS (YoY)", source: "placeholder — replace with sourced figure" },
  { percent: 73, caption: "INCREASE IN RANSOMWARE ATTACKS (YoY)", source: "placeholder — replace with sourced figure" },
  { percent: 56, caption: "INCREASE IN DATA BREACHES AND LEAKS (YoY)", source: "placeholder — replace with sourced figure" },
];

/* ── Ring stat — bigger (260px), and the arc draws itself on scroll-in via
   framer-motion's pathLength (handles the stroke-dasharray math for you). ─ */

function RingStat({ percent, value, headline, caption }: (typeof ringStats)[number]) {
  const r = 108;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-[260px] w-[260px]">
        <svg viewBox="0 0 260 260" className="h-full w-full -rotate-90">
          {/* track */}
          <circle cx="130" cy="130" r={r} fill="none" stroke="#2A3140" strokeWidth="18" />
          {/* value arc — animates from empty to `percent` the moment it scrolls into view */}
          <motion.circle
            cx="130"
            cy="130"
            r={r}
            fill="none"
            stroke="#3B82F6"
            strokeWidth="18"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: percent / 100 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-white">{value}</span>
        </div>
      </div>
      <p className="mt-6 text-3xl font-bold text-blue-400">{headline}</p>
      <p className="mt-2 max-w-[200px] text-xs font-bold uppercase tracking-wider text-slate-400">
        {caption}
      </p>
    </div>
  );
}

/* ── Bar stat — taller, and the fill grows from 0 to `percent` on scroll-in. ─ */

function BarStat({ percent, caption, index }: (typeof barStats)[number] & { index: number }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wider text-slate-300">{caption}</p>
      <div className="mt-3 flex items-center gap-4">
        <div className="h-5 flex-1 rounded-full bg-white/5">
          <motion.div
            className="h-5 rounded-full bg-gradient-to-r from-blue-900/20 to-blue-500"
            initial={{ width: "0%" }}
            whileInView={{ width: `${percent}%` }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.12 }}
          />
        </div>
        <span className="w-16 shrink-0 text-2xl font-bold text-white">{percent}%</span>
      </div>
    </div>
  );
}

export default function AIThreatLandscapeSection() {
  return (
    <section className="section-y relative overflow-hidden bg-gradient-to-b from-[#070A0F] to-[#0B0E14]">
      {/* Background elements: soft blue glows + a faint diagonal line texture,
          matching the reference's ambient decoration, recolored to brand blue. */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue-400/10 blur-[120px]" />
        <svg
          className="absolute -right-10 top-0 h-64 w-64 opacity-[0.08]"
          aria-hidden="true"
        >
          <g stroke="#3B82F6" strokeWidth="1">
            {Array.from({ length: 14 }).map((_, i) => (
              <line key={i} x1={i * 18} y1="0" x2={i * 18 - 120} y2="260" />
            ))}
          </g>
        </svg>
      </div>

      <div className="container-page relative z-10">
        <ScrollReveal animation="fade-up" speed="fast">
          <h2 className="section-heading mb-16">
            A new <span className="text-blue-500">AI world</span> is here
          </h2>
        </ScrollReveal>

        {/* Good news: narrative left, ring stats right */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <ScrollReveal animation="fade-up" speed="fast">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
              The good news
            </p>
            <h3 className="max-w-sm text-3xl font-bold leading-tight text-white sm:text-4xl">
              AI is rapidly transforming your organization
            </h3>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-16">
            {ringStats.map((stat) => (
              <RingStat key={stat.caption} {...stat} />
            ))}
          </div>
        </div>

        {/* Bad news: bar stats left, narrative right — columns flip */}
        <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-9">
            {barStats.map((stat, index) => (
              <BarStat key={stat.caption} {...stat} index={index} />
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={0.15} speed="fast">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
              The bad news
            </p>
            <h3 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Attackers are supercharging their speed and scale.
            </h3>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}