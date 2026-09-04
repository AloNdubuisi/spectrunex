// src/components/SolutionsSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Shield,
  Cloud,
  KeyRound,
  Cpu,
  Radio,
  Building2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface SolutionCategory {
  id: string;
  label: string;
  icon: typeof Sparkles;
  cards: {
    title: string;
    href: string;
  }[];
}

const solutionCategories: SolutionCategory[] = [
  {
    id: "ai-ecosystem",
    label: "Secure Your AI ecosystem",
    icon: Sparkles,
    cards: [
      {
        title: "Secure AI apps, agents, models, and data at every step",
        href: "/services#ai-security",
      },
      {
        title: "Secure the use of GenAI applications in the enterprise",
        href: "/services#genai-defense",
      },
    ],
  },
  {
    id: "network",
    label: "Secure your network",
    icon: Shield,
    cards: [
      {
        title: "Defend against unknown zero-day attacks inline with Next-Gen Firewalls",
        href: "/services#strata",
      },
      {
        title: "Deliver unified Zero Trust Network Architecture (ZTNA 2.0) across branches",
        href: "/services#ztna",
      },
    ],
  },
  {
    id: "cloud",
    label: "Secure your cloud",
    icon: Cloud,
    cards: [
      {
        title: "Protect multi-cloud infrastructure and container runtimes from code to cloud",
        href: "/services#prisma",
      },
      {
        title: "Prevent posture drift and enforce real-time compliance with CSPM",
        href: "/services#cloud-compliance",
      },
    ],
  },
  {
    id: "identities",
    label: "Secure Your Identities",
    icon: KeyRound,
    cards: [
      {
        title: "Continuous verification and risk scoring for human, machine, and agentic access",
        href: "/services#identity",
      },
      {
        title: "Discover shadow credentials and enforce privileged access governance",
        href: "/services#pam",
      },
    ],
  },
  {
    id: "soc",
    label: "Automate your SOC",
    icon: Cpu,
    cards: [
      {
        title: "Replace legacy SIEMs with autonomous SecOps and AI incident triage",
        href: "/services#cortex",
      },
      {
        title: "Reduce mean time to remediate (MTTR) by 92% with Cortex XSIAM",
        href: "/services#xsiam",
      },
    ],
  },
  {
    id: "threat-intel",
    label: "Threat intel and incident response services",
    icon: Radio,
    cards: [
      {
        title: "Elite Unit 42 incident responders available 24/7/365 globally",
        href: "/services#unit42",
      },
      {
        title: "Threat intelligence feeds and proactive proactive breach assessments",
        href: "/services#threat-hunting",
      },
    ],
  },
  {
    id: "industry",
    label: "Solutions by industry",
    icon: Building2,
    cards: [
      {
        title: "FedRAMP, DoD DISA PA, and CMMC compliance for federal and defense",
        href: "/services#federal-compliance",
      },
      {
        title: "Financial services, healthcare, and enterprise critical infrastructure security",
        href: "/services#enterprise-solutions",
      },
    ],
  },
];

export default function SolutionsSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("ai-ecosystem");

  const activeCategory =
    solutionCategories.find((cat) => cat.id === activeCategoryId) ||
    solutionCategories[0];

  return (
    <section className="relative min-h-[750px] overflow-hidden bg-[#070A0F] pt-24 pb-20 text-white selection:bg-[#1D4ED8] selection:text-white border-b border-white/5">
      {/* ── Background Hero Image with Left Gradient Fade ───────────────── */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {/* External Hero Image */}
          <img
            src="https://www.paloaltonetworks.com/content/dam/pan/en_US/images/homepage-2025/HP-AIRS-solutions.jpg"
            alt="Cybersecurity Architect working with AI Solutions"
            className="h-full w-full object-cover object-center lg:object-right opacity-85"
          />

          {/* Left Dark Gradient Overlay to guarantee maximum text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070A0F] via-[#070A0F]/90 to-transparent lg:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-transparent to-[#070A0F]/50" />
        </div>
      </div>

      <div className="container-page relative z-10">
        {/* Top Accent Line */}
        <div className="mb-6 flex items-center">
          <div className="h-[2px] w-36 bg-gradient-to-r from-[#1D4ED8] to-transparent sm:w-44" />
        </div>

        {/* Section Heading */}
        <div className="mb-14 sm:mb-18 max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight text-white leading-[1.12]">
            Secure whatever, <br />
            whenever, wherever — <br />
            with less complexity.
          </h2>
        </div>

        {/* Main Content Layout: Left Nav List + Right Floating Callout Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-end">
          {/* Left Column: Solution Selector Menu */}
          <div className="lg:col-span-5 space-y-3">
            {solutionCategories.map((category) => {
              const isActive = category.id === activeCategoryId;
              const IconComponent = category.icon;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`group flex w-full items-center gap-4 rounded-xl px-3 py-2.5 text-left transition-all duration-300 ${isActive
                      ? "text-white font-bold"
                      : "text-slate-400 hover:text-slate-200"
                    }`}
                >
                  {/* Icon */}
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center transition-colors ${isActive
                        ? "text-[#00D2FF]"
                        : "text-slate-500 group-hover:text-slate-300"
                      }`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>

                  {/* Label */}
                  <span className="text-sm sm:text-base tracking-tight">
                    {category.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Floating Interactive Cards */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
              >
                {activeCategory.cards.map((card, idx) => (
                  <Link
                    key={idx}
                    href={card.href}
                    className="group relative flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[#0B0E14]/75 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#00D2FF]/40 hover:bg-[#0B0E14]/90 hover:shadow-2xl hover:shadow-cyan-500/10 min-h-[140px]"
                  >
                    {/* Card Title */}
                    <p className="text-sm sm:text-[0.95rem] font-medium leading-snug text-white group-hover:text-[#00D2FF] transition-colors">
                      {card.title}
                    </p>

                    {/* Arrow Icon */}
                    <div className="shrink-0 mt-0.5">
                      <ArrowRight className="h-5 w-5 text-white/80 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-[#00D2FF]" />
                    </div>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
