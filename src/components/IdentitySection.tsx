// src/components/IdentitySection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, Lock, KeyRound } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const operationalTabs = [
  { id: "network", name: "Network Security", icon: <ShieldCheck className="h-4 w-4 text-blue-400" /> },
  { id: "ops", name: "AI-Driven Security Operations", icon: <Cpu className="h-4 w-4 text-blue-400" /> },
  { id: "cloud", name: "Real-Time Cloud Security", icon: <Lock className="h-4 w-4 text-blue-400" /> },
  { id: "identity", name: "Next-Generation Identity Security", icon: <KeyRound className="h-4 w-4 text-blue-400" /> },
];

const identityCards = [
  {
    category: "Gartner.",
    title: "Gartner® Market Guide for Access Management",
  },
  {
    category: "ANALYST REPORT",
    title: "Identity Threat Detection and Response (ITDR) Strategy",
  },
  {
    category: "BLUEPRINT",
    title: "Zero Trust Architecture Deployment Blueprint",
  },
  {
    category: "CASE STUDY",
    title: "Stopping Credential Stuffing Attacks Across Hybrid Environments",
  },
];

export default function IdentitySection() {
  const [activeTab, setActiveTab] = useState(3);

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
              Next-Generation <br /> Identity Security
            </h2>
          </div>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Description & Stats */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal speed="normal" animation="slide-left">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed tracking-normal">
                Continuously verify user identity and device posture with adaptive access controls, preventing credential-based attacks and unauthorized lateral movement across hybrid environments.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-1">
                  <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                    100%
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    CONTINUOUS VERIFICATION
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                    Zero
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    TRUST COMPROMISE
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-blue-700 shadow-lg shadow-blue-600/25"
                >
                  Explore Identity Security →
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Brand Blue Analyst Cards */}
          <div className="lg:col-span-7">
            <ScrollReveal speed="normal" animation="slide-right">
              <div className="flex justify-end mb-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-300 hover:text-white transition"
                >
                  See all <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {identityCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl bg-[#0B1324] border border-blue-900/60 hover:border-blue-500/60 text-white p-6 transition-all duration-300 shadow-xl flex flex-col justify-between min-h-[160px] cursor-pointer"
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