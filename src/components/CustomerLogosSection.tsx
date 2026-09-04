// src/components/CustomerLogosSection.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const unit42Stats = [
  {
    value: "200+",
    label: "threat researchers",
  },
  {
    value: "30 M",
    label: "malware samples analyzed per day",
  },
  {
    value: "1 K+",
    label: "incident response engagements a year",
  },
  {
    value: "150+",
    label: "trusted partner of law firms",
  },
];

const customerLogos = [
  {
    name: "Colgate-Palmolive",
    render: () => (
      <div className="flex items-center gap-1.5 opacity-75 hover:opacity-100 transition-opacity">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-black font-black text-[9px]">
          CP
        </div>
        <span className="font-bold tracking-tight text-white text-xs sm:text-sm uppercase font-sans">
          COLGATE-PALMOLIVE
        </span>
      </div>
    ),
  },
  {
    name: "Grant Thornton",
    render: () => (
      <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
        <div className="h-3.5 w-3.5 rounded-full border-2 border-white" />
        <span className="font-medium text-white text-xs sm:text-sm">
          Grant Thornton
        </span>
      </div>
    ),
  },
  {
    name: "Invest Bank",
    render: () => (
      <div className="flex items-center gap-1 opacity-75 hover:opacity-100 transition-opacity font-black text-white italic tracking-tighter text-sm sm:text-base">
        <span>INVEST</span>
        <span className="text-[#1D4ED8]">BANK</span>
      </div>
    ),
  },
  {
    name: "Sabre",
    render: () => (
      <div className="opacity-75 hover:opacity-100 transition-opacity font-serif font-black tracking-wider text-white text-base sm:text-lg italic">
        Sabre
      </div>
    ),
  },
  {
    name: "ADT",
    render: () => (
      <div className="flex items-center justify-center rounded-md bg-white/10 px-3 py-1 font-black text-white text-xs sm:text-sm tracking-widest border border-white/20 opacity-75 hover:opacity-100 transition-opacity">
        ADT
      </div>
    ),
  },
];

export default function CustomerLogosSection() {
  return (
    <section className="relative overflow-hidden bg-[#070A0F] pt-24 pb-20 text-white selection:bg-[#1D4ED8] selection:text-white border-b border-white/5">
      {/* Background Radial Ambiance */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#1D4ED8]/8 blur-[160px]" />
        <div className="absolute bottom-1/3 right-1/4 h-[450px] w-[450px] rounded-full bg-[#C43818]/10 blur-[180px]" />
      </div>

      <div className="container-page relative z-10">
        {/* Top Accent Line */}
        <div className="mb-6 flex items-center">
          <div className="h-[2px] w-36 bg-gradient-to-r from-[#1D4ED8] to-transparent sm:w-44" />
        </div>

        {/* Section Heading */}
        <div className="mb-14 sm:mb-18">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-white leading-[1.12]"
          >
            Intelligence-driven. <br />
            Response-ready.
          </motion.h2>
        </div>

        {/* Subtitle & Explore Unit 42 Action Row */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1D4ED8] mb-2 block">
              SERVICES
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
              Threat Intel & <br />
              Incident Response
            </h3>
          </div>

          <div>
            <Link
              href="/services#unit42"
              className="group inline-flex items-center gap-2 rounded-full border border-[#1D4ED8] px-6 py-2.5 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:bg-[#1D4ED8] hover:text-black hover:scale-105 active:scale-95"
            >
              <span>Explore Unit 42</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Two-Column Grid: Description & Stats (Left) + 2x2 Red-Orange Metric Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-24 sm:mb-28">
          {/* Left Column: Description & Dual Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <p className="text-base sm:text-lg leading-relaxed text-slate-300 mb-10 font-normal">
              Unit 42&apos;s world-renowned threat researchers, elite incident responders
              and expert security consultants will guide you with a threat-informed
              approach before, during and after an incident.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col">
                <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                  1 K+
                </span>
                <span className="text-[0.72rem] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-300">
                  MATTERS PER YEAR
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                  24 / 7 / 365
                </span>
                <span className="text-[0.72rem] sm:text-xs font-bold uppercase tracking-[0.14em] text-slate-300">
                  INCIDENT RESPONSE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Rust-Orange Cards with Concentric Radial Texture */}
          <div className="lg:col-span-7 relative">
            {/* Background Concentric Arc Texture */}
            <div
              className="pointer-events-none absolute -inset-10 sm:-inset-16 opacity-30 z-0 flex items-center justify-center overflow-hidden"
              aria-hidden="true"
            >
              <svg
                className="w-full h-full min-h-[440px]"
                viewBox="0 0 600 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {Array.from({ length: 14 }).map((_, i) => (
                  <circle
                    key={i}
                    cx="300"
                    cy="225"
                    r={80 + i * 24}
                    stroke="#1D4ED8"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                    opacity={0.7 - i * 0.045}
                  />
                ))}
              </svg>
            </div>

            {/* 2x2 Metric Cards Grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {unit42Stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                  className="group relative flex flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#1D4ED8] via-[#1E40AF] to-[#172554] border border-blue-500/30 p-7 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/30 min-h-[160px]"
                >
                  {/* Subtle Inner Glow */}
                  <div className="pointer-events-none absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <span className="font-display text-4xl sm:text-[2.65rem] font-black tracking-tight text-white mb-2">
                    {stat.value}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white/90 leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ── TRUSTED BY THE BEST Logo Wall ──────────────────────────────────── */}
      <div className="pt-14 pb-4">
        <div className="container-page text-center">
          <div className="mb-8 text-xs font-bold uppercase tracking-[0.24em] text-slate-300">
            TRUSTED BY THE BEST
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 lg:gap-20">
            {customerLogos.map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center">
                {logo.render()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}