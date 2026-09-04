// src/components/CTASection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Shield,
  Cloud,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Platform Configuration ────────────────────────────────────────── */
interface AnalystAward {
  provider: "Gartner" | "Forrester" | "Frost & Sullivan" | "IDC";
  title: string;
}

interface PlatformData {
  id: string;
  tabLabel: string;
  icon: typeof Zap;
  themeColor: string;
  ctaBgColor?: string;
  themeBgGradient: string;
  themeCardGradient: string;
  themeGlow: string;
  titleLines: string[];
  description: string;
  ctaText: string;
  ctaHref: string;
  awards: AnalystAward[];
}

const platforms: PlatformData[] = [
  {
    id: "secops",
    tabLabel: "AI-Driven Security Operations",
    icon: Zap,
    themeColor: "#1D4ED8",
    ctaBgColor: "#1D4ED8",
    themeBgGradient: "from-[#1D4ED8]/10 via-[#2563EB]/5 to-transparent",
    themeCardGradient: "from-[#1D4ED8] via-[#00C853] to-[#009624]",
    themeGlow: "rgba(29, 78, 216, 0.4)",
    titleLines: ["AI-DRIVEN SECURITY", "OPERATIONS"],
    description:
      "Transform the SOC and enable better, faster security with the #1 AI-driven SecOps platform powered by unified data, artificial intelligence, and end-to-end autonomous triage.",
    ctaText: "Explore SecOps",
    ctaHref: "/services#cortex",
    awards: [
      {
        provider: "Gartner",
        title: "Gartner® Magic Quadrant™ for Endpoint Protection Platforms",
      },
      {
        provider: "Forrester",
        title: "The Forrester Wave™: Managed Detection and Response Services",
      },
      {
        provider: "Frost & Sullivan",
        title: "Frost & Sullivan MDR Radar Leader",
      },
      {
        provider: "Forrester",
        title: "Forrester Wave™: Extended Detection And Response Platforms, Q2 2024",
      },
    ],
  },
  {
    id: "network-security",
    tabLabel: "AI-Powered Network Security",
    icon: Shield,
    themeColor: "#2563EB",
    themeBgGradient: "from-[#2563EB]/10 via-[#3B82F6]/5 to-transparent",
    themeCardGradient: "from-[#F5A623] via-[#E59819] to-[#D97706]",
    themeGlow: "rgba(37, 99, 235, 0.4)",
    titleLines: ["AI-POWERED NETWORK", "SECURITY"],
    description:
      "Securing everyone and everything from the latest threats in every location. Built for Zero Trust and powered by AI, the Strata™ Network Security Platform proactively monitors, analyzes and prevents sophisticated threats in real time.",
    ctaText: "Explore Network Security",
    ctaHref: "/services#strata",
    awards: [
      {
        provider: "Gartner",
        title: "2025 Gartner® Magic Quadrant™ for Hybrid Mesh Firewall",
      },
      {
        provider: "Gartner",
        title: "2026 Gartner® Magic Quadrant™ for SASE Platforms",
      },
      {
        provider: "Forrester",
        title: "The Forrester Wave™: Enterprise Firewall Solutions",
      },
      {
        provider: "Gartner",
        title: "Gartner® Magic Quadrant™ for Single-Vendor SASE",
      },
    ],
  },
  {
    id: "cloud-security",
    tabLabel: "Real-Time Cloud Security",
    icon: Cloud,
    themeColor: "#00D2FF",
    themeBgGradient: "from-[#00D2FF]/10 via-[#0284C7]/5 to-transparent",
    themeCardGradient: "from-[#00D2FF] via-[#0284C7] to-[#0369A1]",
    themeGlow: "rgba(0, 210, 255, 0.4)",
    titleLines: ["REAL-TIME CLOUD", "SECURITY"],
    description:
      "Complete Code-to-Cloud™ protection across AWS, Azure, GCP, and Kubernetes. Prisma® Cloud secures multi-cloud environments, protects generative AI applications with Prisma AIRS, and prevents critical vulnerabilities before deployment.",
    ctaText: "Explore Cloud Security",
    ctaHref: "/services#prisma",
    awards: [
      {
        provider: "Gartner",
        title: "2025 Gartner® Magic Quadrant™ for CNAPP",
      },
      {
        provider: "Forrester",
        title: "The Forrester Wave™: Cloud Workload Security Leader",
      },
      {
        provider: "Gartner",
        title: "Gartner® Innovation Leader in AI Security & LLM Defense",
      },
      {
        provider: "Forrester",
        title: "The Forrester Wave™: Cloud Security Posture Management",
      },
    ],
  },
  {
    id: "identity-security",
    tabLabel: "Next-Generation Identity Security",
    icon: ShieldCheck,
    themeColor: "#A855F7",
    themeBgGradient: "from-[#A855F7]/10 via-[#9333EA]/5 to-transparent",
    themeCardGradient: "from-[#C084FC] via-[#A855F7] to-[#7E22CE]",
    themeGlow: "rgba(168, 85, 247, 0.4)",
    titleLines: ["NEXT-GENERATION", "IDENTITY SECURITY"],
    description:
      "Continuous identity verification, privileged access governance, and Precision AI™ threat hunting led by Unit 42. Enforce contextual Zero Trust across every human and non-human identity, machine agent, and API endpoint.",
    ctaText: "Explore Identity Security",
    ctaHref: "/services#identity",
    awards: [
      {
        provider: "Gartner",
        title: "2025 Gartner® Magic Quadrant™ for Identity Threat Detection & Response (ITDR)",
      },
      {
        provider: "Forrester",
        title: "The Forrester Wave™: Incident Response & Threat Hunting Services",
      },
      {
        provider: "Gartner",
        title: "Gartner® Market Guide for Identity Governance & Administration",
      },
      {
        provider: "Forrester",
        title: "The Forrester Wave™: Zero Trust Identity Security",
      },
    ],
  },
];

export default function CTASection() {
  const [activeTabId, setActiveTabId] = useState<string>("secops");

  const activePlatform =
    platforms.find((p) => p.id === activeTabId) || platforms[0];

  return (
    <section className="relative overflow-hidden bg-[#070A0F] pt-24 pb-0 text-white selection:bg-[#1D4ED8] selection:text-black">
      {/* Dynamic Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full blur-[160px] transition-all duration-700 opacity-20"
          style={{ backgroundColor: activePlatform.themeColor }}
        />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-emerald-950/20 blur-[130px]" />
      </div>

      <div className="container-page relative z-10">
        {/* Big Dynamic Tracked Accent Title with Fast Scroll Reveal */}
        <ScrollReveal speed="fast" animation="fade-up">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlatform.id + "-title"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mb-14 sm:mb-18"
            >
              <h2
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black uppercase tracking-[0.16em] sm:tracking-[0.24em] leading-[1.12]"
                style={{ color: activePlatform.themeColor }}
              >
                {activePlatform.titleLines.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>

        {/* Two Column Layout with Fast Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 sm:mb-28">
          {/* Left Column: Description & Action Button */}
          <ScrollReveal speed="fast" animation="slide-left" className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlatform.id + "-content"}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col items-start"
              >
                <p className="text-base sm:text-lg leading-relaxed text-slate-200 mb-10 font-normal max-w-xl">
                  {activePlatform.description}
                </p>

                {/* Action Button */}
                <Link
                  href={activePlatform.ctaHref}
                  className="group inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-sm sm:text-base font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                  style={{
                    backgroundColor:
                      activePlatform.ctaBgColor || activePlatform.themeColor,
                    boxShadow: `0 10px 25px -5px ${activePlatform.ctaBgColor
                        ? "rgba(0, 230, 118, 0.4)"
                        : activePlatform.themeGlow
                      }`,
                  }}
                >
                  <span>{activePlatform.ctaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>

          {/* Right Column: Analyst Recognition Cards with Fast Scroll Reveal */}
          <ScrollReveal speed="fast" animation="slide-right" className="lg:col-span-7 relative">
            {/* Background Radar / Concentric Oval Lines Texture */}
            <div
              className="pointer-events-none absolute -inset-10 sm:-inset-16 opacity-30 z-0 flex items-center justify-center overflow-hidden"
              aria-hidden="true"
            >
              <svg
                className="w-full h-full min-h-[420px]"
                viewBox="0 0 600 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {Array.from({ length: 18 }).map((_, i) => (
                  <ellipse
                    key={i}
                    cx="300"
                    cy="200"
                    rx={70 + i * 22}
                    ry={35 + i * 14}
                    stroke={activePlatform.themeColor}
                    strokeWidth="1.5"
                    strokeDasharray="4 8"
                    opacity={0.8 - i * 0.04}
                  />
                ))}
              </svg>
            </div>

            {/* Recognition Cards Grid (2x2) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlatform.id + "-awards-grid"}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              >
                {activePlatform.awards.map((award, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-2xl p-6 sm:p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-[#1D4ED8]"
                    style={{ backgroundColor: "#1D4ED8" }}
                  >
                    {/* Inner Highlight Layer */}
                    <div className="pointer-events-none absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Logo/Wordmark */}
                    <div className="mb-4 flex items-center min-h-[32px]">
                      {award.provider === "Gartner" ? (
                        <span className="font-sans text-2xl sm:text-[1.65rem] font-black tracking-tight text-white">
                          Gartner<span className="text-white">.</span>
                        </span>
                      ) : award.provider === "Forrester" ? (
                        <span className="font-serif text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
                          FORRESTER
                        </span>
                      ) : award.provider === "Frost & Sullivan" ? (
                        <span className="font-serif text-xs sm:text-[0.85rem] font-black tracking-[0.24em] uppercase text-white">
                          F R O S T & S U L L I V A N
                        </span>
                      ) : (
                        <span className="font-sans text-xl sm:text-2xl font-black uppercase tracking-widest text-white">
                          IDC
                        </span>
                      )}
                    </div>

                    {/* Award Details */}
                    <p className="text-xs sm:text-[0.82rem] font-semibold text-white leading-snug">
                      {award.title}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}