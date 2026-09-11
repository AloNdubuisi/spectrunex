// src/components/IndustryValidationSection.tsx
"use client";

import { useState } from "react";
import { X, Plus, ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface RecognitionItem {
  analyst: string;
  report: string;
  category: string;
  highlight: string;
}

const recognitions: RecognitionItem[] = [
  {
    analyst: "Gartner®",
    report: "Magic Quadrant™ for Hybrid Mesh Firewall",
    category: "Hybrid Mesh Firewall",
    highlight: "Named a Leader for completeness of vision and ability to execute in hybrid cloud environments.",
  },
  {
    analyst: "Gartner®",
    report: "Magic Quadrant™ for Single-Vendor SASE",
    category: "Single-Vendor SASE",
    highlight: "Positioned highest for converging SD-WAN and Security Service Edge (SSE) into a unified platform.",
  },
  {
    analyst: "Forrester Wave™",
    report: "Enterprise Firewall Solutions",
    category: "Enterprise Firewall Solutions",
    highlight: "Recognized as a Leader with the highest possible score in threat prevention and automated response.",
  },
  {
    analyst: "Forrester Wave™",
    report: "Zero Trust Network Access (ZTNA)",
    category: "Zero Trust Network Access (ZTNA)",
    highlight: "Awarded top ranking for least-privilege continuous inspection and application-level policy control.",
  },
  {
    analyst: "Frost & Sullivan",
    report: "Frost Radar™: SASE Platforms",
    category: "SASE Platforms",
    highlight: "Recognized as the Growth and Innovation Leader in enterprise cloud-delivered secure edge architectures.",
  },
  {
    analyst: "Gartner®",
    report: "Magic Quadrant™ for Network Firewalls",
    category: "Network Firewalls",
    highlight: "13 consecutive evaluations recognized as a Leader in enterprise-wide perimeter protection.",
  },
  {
    analyst: "Frost & Sullivan",
    report: "Frost Radar™: Zero Trust Architecture",
    category: "Zero Trust Platform Providers",
    highlight: "Recognized for risk mitigation across cloud, endpoint, and network environments.",
  },
  {
    analyst: "Gartner®",
    report: "Market Guide for Zero Trust Browser Security",
    category: "Zero Trust Browser Security",
    highlight: "Highlighted as a Representative Vendor for enterprise browser isolation and data loss prevention.",
  },
  {
    analyst: "Forrester Wave™",
    report: "Operational Technology (OT) Security",
    category: "Operational Technology Security",
    highlight: "Evaluated as a Leader in securing industrial control systems, IoT assets, and critical infrastructure.",
  },
  {
    analyst: "Gartner®",
    report: "Magic Quadrant™ for Security Service Edge (SSE)",
    category: "Security Service Edge",
    highlight: "Recognized for granular cloud access security broker (CASB) and advanced threat protection capabilities.",
  },
  {
    analyst: "ABI Research",
    report: "Industrial Firewall Assessment & Benchmark",
    category: "Industrial Firewall Assessment",
    highlight: "Top-ranked vendor in ruggedized network firewalls and machine learning inline inspection.",
  },
  {
    analyst: "Gartner®",
    report: "Magic Quadrant™ for SD-WAN",
    category: "SD-WAN",
    highlight: "Named a Leader for AI-powered autonomous operations and cloud-delivered application steering.",
  },
];

export default function IndustryValidationSection() {
  const [showList, setShowList] = useState(true);

  return (
    <section className="bg-white py-20 text-slate-900 font-sans lg:py-28">
      <div className="container-page">
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="w-16 border-t-2 border-blue-600" />
          <h2 className="mt-8 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Industry recognized.
            <br />
            Constantly innovating.
          </h2>
        </ScrollReveal>

        <ScrollReveal speed="fast" animation="fade-up" delay={0.1} className="mt-16">
          <div className="flex flex-wrap items-center gap-6">
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text font-display text-6xl font-black leading-none text-transparent sm:text-7xl">
              13&times;
            </span>
            <span className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Network Security Leader Recognitions
            </span>
            <button
              type="button"
              onClick={() => setShowList((v) => !v)}
              aria-expanded={showList}
              aria-label={showList ? "Hide recognitions" : "Show recognitions"}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              {showList ? (
                <X className="h-4 w-4" strokeWidth={2.5} />
              ) : (
                <Plus className="h-4 w-4" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </ScrollReveal>

        <AnimatePresence>
          {showList && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden mt-14"
            >
              <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                {recognitions.map((item, idx) => (
                  <div
                    key={idx}
                    className="group border-l-2 border-blue-600 pl-5 transition-all duration-200 hover:border-blue-700"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        {item.analyst}
                      </p>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Report
                      </span>
                    </div>

                    <h4 className="mt-1 text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.report}
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {item.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}