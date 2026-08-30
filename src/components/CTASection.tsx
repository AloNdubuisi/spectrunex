"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Lock } from "lucide-react";

export default function CTASection() {
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
      className="relative overflow-hidden bg-gradient-to-b from-[#0B0E14] via-[#111722] to-[#070A0F] py-24 sm:py-32 font-sans border-b border-pan-dark-border"
      style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
    >
      {/* Radiant Orange and Cyan Ambient Glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[#FA582D]/15 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div
        className={`max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10 text-center transition-all duration-700 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
        }`}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[#FA582D]/40 bg-[#FA582D]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FA582D] mb-6 shadow-[0_0_20px_rgba(250,88,45,0.4)]">
          <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "5s" }} />
          <span>Transform Your Cyber Defense</span>
        </div>

        <h2 className="mx-auto max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Ready to secure your enterprise with <span className="text-[#FA582D]">Precision AI™</span>?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed">
          Join over 65,000 global organizations safeguarding their networks, clouds, and operations with our unified security platforms.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#FA582D] hover:bg-[#ff6f47] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-xl shadow-[#FA582D]/30 hover:shadow-[#FA582D]/50 hover:scale-105 transform duration-300"
          >
            Get Free Security Assessment
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all backdrop-blur-sm hover:scale-105 transform duration-300"
          >
            Schedule Live Demo
          </Link>
        </div>

        {/* Reassurance Chips with Fast Stagger */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 hover:text-white transition">
            <ShieldCheck className="h-4 w-4 text-[#00D2FF]" /> Zero-Trust Verified
          </span>
          <span className="flex items-center gap-1.5 hover:text-white transition">
            <Lock className="h-4 w-4 text-emerald-400" /> SOC2 Type II &amp; ISO27001 Certified
          </span>
          <span className="flex items-center gap-1.5 hover:text-white transition">
            <Sparkles className="h-4 w-4 text-[#FA582D]" /> 24/7 Dedicated Support
          </span>
        </div>
      </div>
    </section>
  );
}
