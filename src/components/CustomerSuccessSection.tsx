// src/components/CustomerSuccessSection.tsx
"use client";

import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, Building2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const caseStudies = [
  {
    client: "Global Financial Institution",
    metric: "99.999%",
    label: "Uptime & Availability",
    desc: "Migrated legacy infrastructure to FedRAMP-authorized cloud environments with zero downtime.",
    category: "Financial Services",
  },
  {
    client: "Federal Defense Contractor",
    metric: "100%",
    label: "CMMC Level 2 Compliance",
    desc: "Achieved full readiness and ATO authorization 4 months ahead of projected schedule.",
    category: "Defense & Government",
  },
  {
    client: "Multi-Cloud Healthcare Provider",
    metric: "85%",
    label: "Reduction in Threat Response Time",
    desc: "Deployed automated AI-driven security operations and continuous posture management.",
    category: "Healthcare",
  },
];

export default function CustomerSuccessSection() {
  return (
    <section className="bg-[#050B14] py-24 text-white font-sans overflow-hidden border-b border-white/10 relative">
      <div className="container-page relative z-10">
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="max-w-3xl mb-16">
            <div className="h-1 w-16 bg-blue-600 rounded-full mb-6" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 block">
              PROVEN SUCCESS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Trusted by leading enterprises and government agencies worldwide
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {caseStudies.map((study, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08} speed="normal" animation="zoom-in" className="h-full">
              <div className="group rounded-2xl bg-[#0B1324] border border-blue-950/80 p-8 hover:border-blue-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                      {study.category}
                    </span>
                    <Building2 className="h-5 w-5 text-slate-500 group-hover:text-blue-400 transition" />
                  </div>
                  <div className="font-display font-black text-4xl sm:text-5xl text-white mb-2 tracking-tight">
                    {study.metric}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-4">
                    {study.label}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-3">
                    {study.client}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {study.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 group-hover:text-blue-300 transition"
                  >
                    Read case study <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}