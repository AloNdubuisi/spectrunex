"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Award, Star, ArrowRight } from "lucide-react";

const analystReports = [
  {
    institution: "Gartner® Magic Quadrant™",
    title: "Leader in Network Firewalls",
    badge: "12x Consecutive Leader",
    desc: "Positioned furthest in Completeness of Vision and highest in Ability to Execute for enterprise firewalls.",
    cta: "Read Gartner Report",
  },
  {
    institution: "Gartner® Magic Quadrant™",
    title: "Leader in Single-Vendor SASE",
    badge: "Recognized Leader",
    desc: "Delivering unified Zero Trust Network Access (ZTNA 2.0) and SD-WAN under Strata Cloud Manager.",
    cta: "Download Report",
  },
  {
    institution: "The Forrester Wave™",
    title: "Leader in Cloud Workload Security",
    badge: "Top Score",
    desc: "Prisma Cloud ranked as a market leader in automated vulnerability remediation and runtime container security.",
    cta: "View Forrester Wave",
  },
];

const customerLogos = [
  "SCHLUMBERGER",
  "CAESARS ENTERTAINMENT",
  "AUTODESK",
  "DISH NETWORK",
  "SALESFORCE",
  "SONY MUSIC",
];

export default function AnalystSection() {
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
      className="bg-[#070A0F] py-24 sm:py-32 text-white relative font-sans border-b border-pan-dark-border overflow-hidden"
      style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header with Fast Reveal */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-600 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-yellow-400 mb-4 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
            <Award className="h-3.5 w-3.5" />
            <span>Independent Industry Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Consistently recognized as the <span className="text-[#FA582D]">#1 Cybersecurity Leader</span>.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Major global analyst firms recognize our continuous innovation across network, cloud, and security operations.
          </p>
        </div>

        {/* Analyst Reports Grid with Staggered Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {analystReports.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl bg-[#0F141E] border border-white/10 p-8 sm:p-10 hover:border-yellow-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-600 flex flex-col justify-between transform ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{ transitionDelay: `${150 + idx * 100}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                    {item.institution}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-yellow-400 bg-yellow-400/10 px-2.5 py-0.5 rounded-full border border-yellow-400/20">
                    <Star className="h-3 w-3 fill-current" /> {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FA582D] hover:text-[#ff6f47] uppercase tracking-wider transition"
                >
                  {item.cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Logos Banner with Smooth Fade */}
        <div
          className={`pt-12 border-t border-white/10 text-center transition-all duration-700 delay-500 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-8">
            Trusted by 95 of the Fortune 100 enterprises worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70">
            {customerLogos.map((logo, idx) => (
              <span
                key={idx}
                className="text-sm sm:text-base font-bold tracking-widest text-slate-300 hover:text-[#FA582D] transition-colors duration-300 cursor-default hover:scale-105 transform inline-block"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
