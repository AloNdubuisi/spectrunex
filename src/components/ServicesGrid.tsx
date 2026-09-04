// src/components/ServicesGrid.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Cloud,
  Cpu,
  ShieldCheck,
  PlusCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Lock,
  Layers,
} from "lucide-react";
import Link from "next/link";

/* ── Platform Data Configuration ────────────────────────────────────────── */
interface AnalystAward {
  provider: "Gartner" | "Forrester" | "IDC";
  title: string;
}

interface PlatformData {
  id: string;
  tabLabel: string;
  icon: typeof Shield;
  kicker: string;
  titleLines: string[];
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
  ctaText: string;
  ctaHref: string;
  awards: AnalystAward[];
}

const platforms: PlatformData[] = [
  {
    id: "network-security",
    tabLabel: "AI-Powered Network Security",
    icon: Shield,
    kicker: "AI-POWERED NETWORK",
    titleLines: ["AI-POWERED NETWORK", "SECURITY"],
    description:
      "Securing everyone and everything from the latest threats in every location. Built for Zero Trust and powered by AI, the Strata™ Network Security Platform proactively monitors, analyzes and prevents sophisticated threats in real time with less complexity, enabling secure growth and innovation for your organization.",
    stats: [
      { value: "95%", label: "OF THE FORTUNE 100" },
      { value: "70 K", label: "CUSTOMERS" },
    ],
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
      {
        provider: "Gartner",
        title: "Gartner® Magic Quadrant™ for Security Service Edge (SSE)",
      },
      {
        provider: "Forrester",
        title: "The Forrester Wave™: Zero Trust Platform Providers",
      },
    ],
  },
  {
    id: "secops",
    tabLabel: "AI-Driven Security Operations",
    icon: Zap,
    kicker: "AI-DRIVEN SECURITY",
    titleLines: ["AI-DRIVEN SECURITY", "OPERATIONS"],
    description:
      "Transforming the SOC from reactive firefighting to autonomous, machine-speed defense. Cortex® XSIAM consolidates SIEM, SOAR, ASM, and XDR into a single unified AI-first platform that triages incidents in seconds, neutralizing threats before damage occurs.",
    stats: [
      { value: "92%", label: "REDUCTION IN MEAN TIME TO REMEDIATE" },
      { value: "4.8 B+", label: "ATTACKS PREVENTED DAILY" },
    ],
    ctaText: "Explore Security Operations",
    ctaHref: "/services#cortex",
    awards: [
      {
        provider: "Gartner",
        title: "2025 Gartner® Magic Quadrant™ for SIEM & Autonomous SecOps",
      },
      {
        provider: "Forrester",
        title: "The Forrester Wave™: Extended Detection and Response (XDR)",
      },
      {
        provider: "Gartner",
        title: "Gartner® Peer Insights™ Customers' Choice for XDR",
      },
      {
        provider: "Forrester",
        title: "The Forrester Wave™: Security Orchestration, Automation and Response",
      },
      {
        provider: "Gartner",
        title: "Gartner® Market Guide for Autonomous Security Platforms",
      },
      {
        provider: "IDC",
        title: "IDC MarketScape: Worldwide Modern SOC Platforms Leader",
      },
    ],
  },
  {
    id: "cloud-security",
    tabLabel: "Real-Time Cloud Security",
    icon: Cloud,
    kicker: "REAL-TIME CLOUD",
    titleLines: ["REAL-TIME CLOUD", "SECURITY"],
    description:
      "Complete Code-to-Cloud™ protection across AWS, Azure, GCP, and Kubernetes. Prisma® Cloud secures multi-cloud environments, protects generative AI applications with Prisma AIRS, and prevents critical vulnerabilities before deployment.",
    stats: [
      { value: "85%", label: "FASTER CLOUD THREAT RESOLUTION" },
      { value: "100%", label: "FEDRAMP HIGH & DISA PA READINESS" },
    ],
    ctaText: "Explore Cloud Security",
    ctaHref: "/services#prisma",
    awards: [
      {
        provider: "Gartner",
        title: "2025 Gartner® Magic Quadrant™ for Cloud-Native Application Protection Platforms (CNAPP)",
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
      {
        provider: "Gartner",
        title: "Gartner® Market Guide for Cloud Infrastructure Entitlement Mgmt",
      },
      {
        provider: "IDC",
        title: "IDC MarketScape: Worldwide Cloud Workload Security Leader",
      },
    ],
  },
  {
    id: "identity-security",
    tabLabel: "Next-Generation Identity Security",
    icon: ShieldCheck,
    kicker: "NEXT-GEN IDENTITY",
    titleLines: ["NEXT-GENERATION", "IDENTITY & AI SECURITY"],
    description:
      "Continuous identity verification, privileged access governance, and Precision AI™ threat hunting led by Unit 42. Enforce contextual Zero Trust across every human and non-human identity, machine agent, and API endpoint.",
    stats: [
      { value: "100+", label: "ELITE UNIT 42 THREAT RESEARCHERS" },
      { value: "< 10 min", label: "ACTIVE THREAT CONTAINMENT SLA" },
    ],
    ctaText: "Explore Identity & AI Defense",
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
      {
        provider: "Gartner",
        title: "Gartner® Peer Insights™ Leader for Privileged Access Management",
      },
      {
        provider: "IDC",
        title: "IDC MarketScape: Worldwide Incident Readiness & Response Leader",
      },
    ],
  },
];

export default function ServicesGrid() {
  const [activeTabId, setActiveTabId] = useState<string>(platforms[0].id);

  const activePlatform =
    platforms.find((p) => p.id === activeTabId) || platforms[0];

  return (
    <section className="relative overflow-hidden bg-[#070A0F] pt-20 pb-0 text-white selection:bg-[#FA582D] selection:text-white">
      {/* Subtle Background Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#FA582D]/8 blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 h-[420px] w-[420px] rounded-full bg-[#F59E0B]/6 blur-[160px]" />
      </div>

      <div className="container-page relative z-10">
        {/* Top Accent Line */}
        <div className="mb-6 flex items-center">
          <div className="h-[2px] w-28 bg-gradient-to-r from-[#FA582D] via-[#F59E0B] to-transparent sm:w-44" />
        </div>

        {/* Big Dynamic Tracked Accent Title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlatform.id + "-title"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mb-12 sm:mb-16"
          >
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[#2563EB] leading-[1.15]">
              {activePlatform.titleLines.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h3>
          </motion.div>
        </AnimatePresence>

        {/* Two Column Layout: Content (Left) & Recognition Grid (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-20 sm:mb-24">
          {/* Left Column: Description, Stats, CTA Button */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlatform.id + "-left"}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-between"
            >
              <p className="text-base sm:text-lg leading-relaxed text-slate-300 mb-10 font-normal">
                {activePlatform.description}
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-8 mb-10">
                {activePlatform.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                      {stat.value}
                    </span>
                    <span className="text-[0.72rem] sm:text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Primary Action Button (Pill shaped, vibrant yellow/orange gradient with dark text) */}
              <div>
                <Link
                  href={activePlatform.ctaHref}
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#FA582D] to-[#F59E0B] bg-[length:200%_auto] px-8 py-3.5 text-sm sm:text-base font-bold text-black transition-all duration-300 hover:bg-[position:right_center] hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 active:scale-95"
                >
                  <span>{activePlatform.ctaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Column: Analyst Recognition Cards with Background Hatch Texture */}
          <div className="lg:col-span-7 relative">
            {/* Background Diagonal Hatch Pattern in brand amber/orange */}
            <div
              className="pointer-events-none absolute -inset-6 sm:-inset-10 opacity-30 z-0 overflow-hidden"
              aria-hidden="true"
            >
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="diagonal-stripes"
                    width="24"
                    height="24"
                    patternTransform="rotate(45 0 0)"
                    patternUnits="userSpaceOnUse"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="24"
                      stroke="#FA582D"
                      strokeWidth="2.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
              </svg>
            </div>

            {/* Top Right "See all (+)" link */}
            <div className="relative z-10 flex justify-end mb-4 pr-1">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#FA582D] transition-colors"
              >
                <span>See all</span>
                <PlusCircle className="h-4 w-4 text-white" />
              </Link>
            </div>

            {/* Recognition Cards Grid (2x2 visible + 2 cards below peeking) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlatform.id + "-awards"}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
              >
                {activePlatform.awards.slice(0, 6).map((award, idx) => {
                  const isBottomRow = idx >= 4;
                  return (
                    <div
                      key={idx}
                      className={`group relative overflow-hidden rounded-2xl p-6 sm:p-7 shadow-lg transition-all duration-300 ${isBottomRow
                        ? "bg-gradient-to-b from-[#E59819] to-[#C8780A] opacity-70 hover:opacity-100"
                        : "bg-gradient-to-br from-[#F5A623] via-[#E59819] to-[#D97706] hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/20"
                        }`}
                    >
                      {/* Subtile Inner Glow on hover */}
                      <div className="pointer-events-none absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Provider Wordmark */}
                      <div className="mb-3 flex items-center justify-between">
                        {award.provider === "Gartner" ? (
                          <span className="font-sans text-2xl sm:text-[1.7rem] font-black tracking-tight text-black">
                            Gartner<span className="text-black">.</span>
                          </span>
                        ) : award.provider === "Forrester" ? (
                          <span className="font-serif text-xl sm:text-2xl font-black uppercase tracking-wider text-black">
                            FORRESTER
                          </span>
                        ) : (
                          <span className="font-sans text-xl sm:text-2xl font-black uppercase tracking-widest text-black">
                            IDC
                          </span>
                        )}
                      </div>

                      {/* Award Description Title */}
                      <p className="text-xs sm:text-[0.82rem] font-semibold text-black/90 leading-snug line-clamp-3">
                        {award.title}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}