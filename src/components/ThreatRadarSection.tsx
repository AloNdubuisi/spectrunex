"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Radio,
  Flame,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";
import { threatIntelligenceNews } from "@/lib/site";

const activeVulnerabilities = [
  { cve: "CVE-2026-3819", severity: "CRITICAL 9.8", name: "AI Agent Remote Context Poisoning", platform: "Prisma AIRS Guarded", status: "Mitigated" },
  { cve: "CVE-2026-1142", severity: "HIGH 8.6", name: "Cloud Kubernetes Privilege Escalation", platform: "Cortex XDR Shield", status: "Blocked" },
  { cve: "CVE-2026-0921", severity: "CRITICAL 9.9", name: "Enterprise Edge VPN Buffer Overflow", platform: "Strata NGFW Inline Patch", status: "Immune" },
];

export default function ThreatRadarSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0B0E14] py-24 sm:py-32 text-white relative font-sans border-b border-pan-dark-border overflow-hidden"
      style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header with Fast Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div
            className={`max-w-2xl transition-all duration-600 ease-out transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-400 mb-4 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
              <Radio className="h-3.5 w-3.5 animate-pulse text-red-500" />
              <span>Unit 42® Threat Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Global threat intelligence powered by world-class researchers.
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Unit 42 monitors millions of active cyber telemetry endpoints worldwide to deliver proactive defense and emergency incident response.
            </p>
          </div>

          <div
            className={`flex-shrink-0 transition-all duration-600 delay-100 ease-out transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 hover:bg-red-500 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-xl shadow-red-600/30 hover:scale-105"
            >
              <AlertTriangle className="h-4 w-4" />
              Incident Response Hotline
            </Link>
          </div>
        </div>

        {/* Real-time Threat Radar Alert Bar with Fast Scale */}
        <div
          className={`rounded-3xl bg-[#111722] border border-white/10 p-6 sm:p-8 mb-12 shadow-2xl transition-all duration-700 delay-150 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
              <Flame className="h-4 w-4 text-[#FA582D] animate-bounce" />
              Active Zero-Day Advisory Ticker
            </span>
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              All Spectrunex Cloud Gateways Protected
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeVulnerabilities.map((vuln, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#090D14] border border-white/10 p-5 flex flex-col justify-between hover:border-[#FA582D]/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-white">
                      {vuln.cve}
                    </span>
                    <span className="text-[10px] font-bold text-red-400 bg-red-500/15 border border-red-500/30 px-2 py-0.5 rounded">
                      {vuln.severity}
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 font-medium line-clamp-1 mb-2">
                    {vuln.name}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">{vuln.platform}</span>
                  <span className="text-emerald-400 font-bold">{vuln.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unit 42 Featured Research Reports with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {threatIntelligenceNews.map((news, idx) => (
            <div
              key={news.id}
              className={`group relative rounded-3xl bg-[#0F141E] border border-white/10 p-8 transition-all duration-600 hover:border-[#FA582D]/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FA582D]/15 flex flex-col justify-between transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : `opacity-0 translate-y-12`
              }`}
              style={{ transitionDelay: `${250 + idx * 100}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FA582D] bg-[#FA582D]/10 px-3 py-1 rounded-full">
                    {news.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {news.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#FA582D] transition mb-3 leading-snug">
                  {news.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {news.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">{news.readTime}</span>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 font-bold text-[#00D2FF] group-hover:text-white transition uppercase tracking-wider"
                >
                  Read Briefing <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
