// src/components/ThreatIntelGridSection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const allThreatCards = [
  {
    category: "UNIT 42 THREAT INTEL",
    title: "Novel Phishing Campaigns Targeting Enterprise Cloud Admins via SEO Poisoning",
    date: "Research",
    href: "/services",
    badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    filter: "research",
  },
  {
    category: "ANALYST REPORT",
    title: "From Linear to Complex: An Upgrade in Ransomware Encryption Tactics",
    date: "Whitepaper",
    href: "/services",
    badgeColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    filter: "whitepaper",
  },
  {
    category: "ZERO-DAY ADVISORY",
    title: "Active Exploitation of Edge Gateway Vulnerabilities: Mitigation Blueprint",
    date: "Advisory",
    href: "/services",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    filter: "advisory",
  },
  {
    category: "EXECUTIVE BRIEF",
    title: "Securing AI Infrastructure Against Prompt Injection and Model Inversion",
    date: "Brief",
    href: "/services",
    badgeColor: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    filter: "brief",
  },
  {
    category: "CASE STUDY",
    title: "How Global Defense Contractors Achieved Continuous CMMC Compliance",
    date: "Success Story",
    href: "/services",
    badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    filter: "research",
  },
  {
    category: "WEBINAR",
    title: "Autonomous SOC Operations: Eliminating Alert Fatigue with Precision AI",
    date: "On-Demand",
    href: "/services",
    badgeColor: "text-orange-400 border-orange-500/30 bg-orange-500/10",
    filter: "webinar",
  },
];

const categories = [
  { id: "all", label: "All Intelligence" },
  { id: "research", label: "Threat Research" },
  { id: "whitepaper", label: "Whitepapers" },
  { id: "advisory", label: "Advisories" },
  { id: "webinar", label: "Webinars" },
];

export default function ThreatIntelGridSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCards = allThreatCards.filter((card) => {
    const matchesCategory = selectedFilter === "all" || card.filter === selectedFilter;
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-[#050B14] py-24 text-white font-sans overflow-hidden border-b border-white/10 relative">
      <div className="container-page relative z-10">
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <div className="h-1 w-16 bg-blue-600 rounded-full mb-6" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 block">
                UNIT 42 & THREAT INTELLIGENCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
                Latest research, advisories, and threat briefings
              </h2>
            </div>

            {/* Interactive Search Bar */}
            <div className="relative w-full lg:w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <Search className="h-4 w-4" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search threat reports..."
                className="w-full rounded-full bg-[#0B1324] border border-white/10 pl-10 pr-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition shadow-inner"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-6 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition ${selectedFilter === cat.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-[#0B1324] border border-white/10 text-slate-400 hover:text-white"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.length > 0 ? (
            filteredCards.map((card, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05} speed="normal" animation="zoom-in" className="h-full">
                <div className="group rounded-2xl bg-[#0B1324] border border-blue-950/80 p-8 hover:border-blue-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between h-full cursor-pointer">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${card.badgeColor}`}>
                        {card.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {card.date}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white mb-4 group-hover:text-blue-400 transition leading-snug tracking-tight">
                      {card.title}
                    </h3>
                  </div>
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400 group-hover:text-blue-300 transition inline-flex items-center gap-1.5">
                      Read brief <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-slate-400 text-sm">
              No matching threat research reports found. Try adjusting your search query.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}