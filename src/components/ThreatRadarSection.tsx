// src/components/ThreatRadarSection.tsx
"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function ThreatRadarSection() {
  return (
    <section className="bg-[#050B14] py-24 text-white font-sans overflow-hidden border-b border-white/10 relative">
      <div className="container-page relative z-10">
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="max-w-3xl">
            <div className="h-1 w-16 bg-blue-600 rounded-full mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight mb-6">
              Advanced Threat Intelligence & Real-Time Monitoring
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Continuous threat detection and automated remediation to protect your critical assets against sophisticated zero-day attacks and cyber threats.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}