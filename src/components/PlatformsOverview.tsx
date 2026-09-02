// src/components/PlatformsOverview.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, Lock, KeyRound } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const platformTabs = [
  {
    id: "network",
    name: "AI-Powered Network Security",
    title: "AI-POWERED NETWORK SECURITY",
    desc: "Securing everyone and everything from the latest threats in every location. Built for Zero Trust and powered by AI, the Strata™ Network Security Platform proactively monitors, analyzes and prevents sophisticated threats in real time with less complexity, enabling secure growth and innovation for your organization.",
    stats: [
      { value: "95%", label: "OF THE FORTUNE 100" },
      { value: "70 K", label: "CUSTOMERS" },
    ],
    actionText: "Explore Network Security",
    href: "/services",
    icon: <ShieldCheck className="h-4 w-4 text-blue-400" />,
    cards: [
      { title: "2025 Gartner® Magic Quadrant™ for Hybrid Mesh Firewall", category: "Gartner." },
      { title: "2026 Gartner® Magic Quadrant™ for SASE Platforms", category: "Gartner." },
      { title: "The Forrester Wave™: Enterprise Firewall Solutions", category: "FORRESTER" },
      { title: "Gartner® Magic Quadrant™ for Single-Vendor SASE", category: "Gartner." },
    ],
  },
  {
    id: "ops",
    name: "AI-Driven Security Operations",
    title: "AI-DRIVEN SECURITY OPERATIONS",
    desc: "Transform your SOC with autonomous threat detection, investigation, and remediation powered by Precision AI. Outpace attackers with automated workflows and unmatched visibility across your entire digital attack surface.",
    stats: [
      { value: "90%", label: "REDUCTION IN MTTR" },
      { value: "5x", label: "FASTER INVESTIGATION" },
    ],
    actionText: "Explore Security Operations",
    href: "/services",
    icon: <Cpu className="h-4 w-4 text-blue-400" />,
    cards: [
      { title: "Gartner® Market Guide for Managed Detection and Response", category: "Gartner." },
      { title: "The Forrester Wave™: Cybersecurity Incident Response Services", category: "FORRESTER" },
      { title: "IDC MarketScape: Worldwide Managed SIEM Services", category: "IDC" },
      { title: "Autonomous SOC: The Next Evolution in Security", category: "Analyst Report" },
    ],
  },
  {
    id: "cloud",
    name: "Real-Time Cloud Security",
    title: "REAL-TIME CLOUD SECURITY",
    desc: "Secure applications from code to cloud with comprehensive runtime protection, vulnerability management, and infrastructure-as-code scanning unified in a single industry-leading platform.",
    stats: [
      { value: "100%", label: "CODE-TO-CLOUD COVERAGE" },
      { value: "0-Day", label: "RUNTIME THREAT BLOCKING" },
    ],
    actionText: "Explore Cloud Security",
    href: "/services",
    icon: <Lock className="h-4 w-4 text-blue-400" />,
    cards: [
      { title: "Gartner® Magic Quadrant™ for Cloud-Native Application Protection Platforms", category: "Gartner." },
      { title: "The Forrester Wave™: Cloud-Native Application Protection Platforms", category: "FORRESTER" },
      { title: "Securing Modern Multi-Cloud Infrastructure", category: "Whitepaper" },
      { title: "DevSecOps Best Practices Guide", category: "Report" },
    ],
  },
  {
    id: "identity",
    name: "Next-Generation Identity Security",
    title: "NEXT-GENERATION IDENTITY SECURITY",
    desc: "Continuously verify user identity and device posture with adaptive access controls, preventing credential-based attacks and unauthorized lateral movement across hybrid environments.",
    stats: [
      { value: "100%", label: "CONTINUOUS VERIFICATION" },
      { value: "Zero", label: "TRUST COMPROMISE" },
    ],
    actionText: "Explore Identity Security",
    href: "/services",
    icon: <KeyRound className="h-4 w-4 text-blue-400" />,
    cards: [
      { title: "Gartner® Market Guide for Access Management", category: "Gartner." },
      { title: "Identity Threat Detection and Response (ITDR) Strategy", category: "Analyst Report" },
      { title: "Zero Trust Architecture Deployment Blueprint", category: "Blueprint" },
      { title: "Stopping Credential Stuffing Attacks", category: "Case Study" },
    ],
  },
];

export default function PlatformsOverview() {
  const [activeTab, setActiveTab] = useState(0);
  const currentPlatform = platformTabs[activeTab];

  return (
    <section className="bg-[#050B14] py-24 text-white font-sans overflow-hidden border-b border-white/10 relative">
      {/* Background Subtle Diagonal Grid Lines Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container-page relative z-10">
        {/* Section Header with Accent Bar */}
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="mb-16 max-w-2xl">
            <div className="h-1 w-16 bg-blue-600 rounded-full mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Introducing the Platforms, powered by Precision AI<sup>®</sup>
            </h2>
          </div>
        </ScrollReveal>

        {/* Active Platform Header Title */}
        <ScrollReveal speed="fast" animation="slide-left">
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-display tracking-widest text-white uppercase">
              {currentPlatform.title}
            </h3>
          </div>
        </ScrollReveal>

        {/* Main Split Grid: Description & Stats (Left) vs Report Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal speed="normal" animation="slide-left">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentPlatform.desc}
              </p>

              <div className="grid grid-cols-2 gap-8 pt-6">
                {currentPlatform.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="font-display font-black text-3xl sm:text-4xl text-white">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link
                  href={currentPlatform.href}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-blue-700 shadow-lg shadow-blue-600/25"
                >
                  {currentPlatform.actionText} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Cards Grid */}
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
                {currentPlatform.cards.map((card, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 p-6 transition-all duration-300 shadow-xl flex flex-col justify-between min-h-[160px] cursor-pointer"
                  >
                    <span className="font-bold text-xs uppercase tracking-wider opacity-80">
                      {card.category}
                    </span>
                    <h4 className="font-display font-bold text-sm sm:text-base leading-snug text-slate-950 group-hover:underline">
                      {card.title}
                    </h4>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Platform Sub-Navigation Tabs */}
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10 pt-6 gap-4">
            {platformTabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-3 text-left pb-4 relative transition ${
                  activeTab === idx
                    ? "text-white opacity-100"
                    : "text-slate-400 hover:text-white opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex-shrink-0">
                  {tab.icon}
                </div>
                <span className="font-display font-semibold text-xs sm:text-sm tracking-wide">
                  {tab.name}
                </span>
                {activeTab === idx && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}