// src/components/AnalystSection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Cpu, Lock, KeyRound } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const operationalTabs = [
  { id: "network", name: "Network Security", icon: <ShieldCheck className="h-4 w-4 text-blue-400" /> },
  { id: "ops", name: "AI-Driven Security Operations", icon: <Cpu className="h-4 w-4 text-blue-400" /> },
  { id: "cloud", name: "Real-Time Cloud Security", icon: <Lock className="h-4 w-4 text-blue-400" /> },
  { id: "identity", name: "Next-Generation Identity Security", icon: <KeyRound className="h-4 w-4 text-blue-400" /> },
];

const analystCards = [
  {
    category: "Gartner.",
    title: "2026 Gartner® Magic Quadrant™ for Endpoint Protection Platforms",
  },
  {
    category: "FORRESTER",
    title: "Forrester Cybersecurity IR Services Wave",
  },
  {
    category: "FROST & SULLIVAN",
    title: "Frost & Sullivan Radar for Extended Detection And Response",
  },
  {
    category: "FORRESTER",
    title: "Detection And Response Platforms, Q2 2024",
  },
];

export default function AnalystSection() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="bg-[#050B14] py-24 text-white font-sans overflow-hidden border-b border-white/10 relative">
      {/* Background Radar / Globe Lines Motif in Brand Blue */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15 overflow-hidden">
        <div className="w-[850px] h-[850px] rounded-full border border-dashed border-blue-500/50 flex items-center justify-center">
          <div className="w-[650px] h-[650px] rounded-full border border-blue-500/30 flex items-center justify-center" />
        </div>
      </div>

      <div className="container-page relative z-10">
        {/* Header Title with precise tracking and leading */}
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-blue-400 uppercase leading-[1.05]">
              AI-Driven Security <br /> Operations
            </h2>
          </div>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Description & Stats */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal speed="normal" animation="slide-left">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed tracking-normal">
                Transform the SOC and enable better, faster security with the #1 AI-driven SecOps platform powered by unified data, artificial intelligence and automation.ghhhhhhhhhh
              </p>

              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-1">
                  <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                    700+
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    PARTNER INTEGRATIONS
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                    480 B
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    ENDPOINTS SCANNED DAILY
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1D4ED8] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-blue-700 shadow-lg shadow-blue-600/25"
                >
                  Explore SecOps →
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Brand Blue Analyst Cards */}
          <div className="lg:col-span-7">
            <ScrollReveal speed="normal" animation="slide-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {analystCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl bg-[#1D4ED8] border border-blue-900/60 hover:border-blue-500/60 text-white p-6 transition-all duration-300 shadow-xl flex flex-col justify-between min-h-[160px] cursor-pointer"
                  >
                    <span className="font-bold text-xs uppercase tracking-[0.15em] text-blue-400">
                      {card.category}
                    </span>
                    <h4 className="font-display font-bold text-sm sm:text-base leading-snug tracking-tight group-hover:text-blue-300 transition">
                      {card.title}
                    </h4>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}