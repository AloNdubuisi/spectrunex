// src/components/AIWorldSection.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AIWorldSection() {
  return (
    <section className="bg-[#050B14] py-24 text-white font-sans overflow-hidden border-b border-white/10">
      <div className="container-page">
        {/* Main Title */}
        <ScrollReveal speed="fast" animation="fade-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight mb-20">
            A new <span className="text-blue-500">AI world</span> is here
          </h2>
        </ScrollReveal>

        {/* Top Grid: The Good News & Bigger Circular Progress Rings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5">
            <ScrollReveal speed="fast" animation="slide-left">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">
                THE GOOD NEWS
              </span>
              <h3 className="text-3xl sm:text-4xl font-black font-display leading-tight mb-4">
                AI is rapidly transforming your organization
              </h3>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Ring 1 */}
            <ScrollReveal speed="fast" animation="slide-right" className="flex flex-col items-center sm:items-start text-center sm:text-left bg-[#0B1324] border border-white/10 rounded-2xl p-8 shadow-xl">
              <div className="relative flex items-center justify-center w-48 h-48 mb-6">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 176 176">
                  <circle cx="88" cy="88" r="74" stroke="currentColor" strokeWidth="12" className="text-white/10" fill="transparent" />
                  <circle cx="88" cy="88" r="74" stroke="currentColor" strokeWidth="12" className="text-blue-500" fill="transparent" strokeDasharray="465" strokeDashoffset="102" strokeLinecap="round" />
                </svg>
                <span className="absolute font-display font-black text-4xl text-white">78%</span>
              </div>
              <p className="font-display font-bold text-lg text-white mb-1">~1.5X growth</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                IN USAGE IN LAST 12 MONTHS
              </p>
            </ScrollReveal>

            {/* Ring 2 */}
            <ScrollReveal speed="fast" animation="slide-right" delay={0.05} className="flex flex-col items-center sm:items-start text-center sm:text-left bg-[#0B1324] border border-white/10 rounded-2xl p-8 shadow-xl">
              <div className="relative flex items-center justify-center w-48 h-48 mb-6">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 176 176">
                  <circle cx="88" cy="88" r="74" stroke="currentColor" strokeWidth="12" className="text-white/10" fill="transparent" />
                  <circle cx="88" cy="88" r="74" stroke="currentColor" strokeWidth="12" className="text-blue-500" fill="transparent" strokeDasharray="465" strokeDashoffset="28" strokeLinecap="round" />
                </svg>
                <span className="absolute font-display font-black text-4xl text-white">94%</span>
              </div>
              <p className="font-display font-bold text-lg text-white mb-1">development</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                ENTERPRISES USING GEN AI SOFTWARE
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Grid: Threat Stats & The Bad News */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal speed="fast" animation="slide-left">
              {/* Stat 1 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400">
                  <span>INCREASE IN EXPLOITED ZERO DAYS (YoY, 2023)</span>
                  <span className="text-blue-400 font-mono text-base font-black">56%</span>
                </div>
                <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full w-[56%]" />
                </div>
              </div>

              {/* Stat 2 */}
              <div className="space-y-2 pt-4">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400">
                  <span>INCREASE IN RANSOMWARE ATTACKS (YoY, 2023)</span>
                  <span className="text-blue-400 font-mono text-base font-black">73%</span>
                </div>
                <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full w-[73%]" />
                </div>
              </div>

              {/* Stat 3 */}
              <div className="space-y-2 pt-4">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400">
                  <span>INCREASE IN DATA BREACHES AND LEAKS (YoY, 2023)</span>
                  <span className="text-blue-400 font-mono text-base font-black">56%</span>
                </div>
                <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full w-[56%]" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 lg:pl-12">
            <ScrollReveal speed="fast" animation="slide-right">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">
                THE BAD NEWS
              </span>
              <h3 className="text-3xl sm:text-4xl font-black font-display leading-tight text-white">
                Attackers are supercharging their speed and scale.
              </h3>
            </ScrollReveal>
          </div>
        </div>

        {/* Why Spectrunex / Platformization Header & 3-Column Stats Grid */}
        <div className="space-y-12">
          <ScrollReveal speed="fast" animation="fade-up">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">
                  WHY SPECTRUNEX
                </span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display leading-tight text-white">
                  Platformization empowers you to harness AI-ready infrastructure. And leverage services powered by Precision AI<sup>®</sup> to keep everything secure.
                </h3>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition shadow-lg shadow-blue-600/25 whitespace-nowrap"
                >
                  See our platform approach <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* 3 Metric Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {/* Card 1 */}
            <ScrollReveal speed="fast" animation="slide-left" className="h-full">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0B1324] to-[#060D1A] p-8 flex flex-col justify-between h-full shadow-2xl hover:border-blue-500/50 transition-all">
                <div>
                  <div className="font-display font-black text-4xl sm:text-5xl text-blue-500 mb-3">
                    90 %
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-4">
                    reduction in MTTR
                  </h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4">
                  Drive innovation and digital transformation with AI.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal speed="fast" animation="zoom-in" delay={0.05} className="h-full">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0B1324] to-[#060D1A] p-8 flex flex-col justify-between h-full shadow-2xl hover:border-blue-500/50 transition-all">
                <div>
                  <div className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-blue-500 mb-3">
                    up to 30.9 B
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-4">
                    inline attacks blocked per day
                  </h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4">
                  Proactively monitor, analyze and prevent sophisticated threats in real time with less complexity, enabling secure growth and innovation for your organization.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal speed="fast" animation="slide-right" delay={0.1} className="h-full">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0B1324] to-[#060D1A] p-8 flex flex-col justify-between h-full shadow-2xl hover:border-blue-500/50 transition-all">
                <div>
                  <div className="font-display font-black text-4xl sm:text-5xl text-blue-500 mb-3">
                    480 B
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-4">
                    endpoints scanned daily
                  </h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4">
                  Enable better, faster security with an integrated suite of battle-tested, AI-driven products.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
}