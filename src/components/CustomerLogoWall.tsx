// src/components/CustomerLogoWall.tsx
"use client";

import ScrollReveal from "@/components/ScrollReveal";

const logos = [
  "SERVICENOW",
  "WORKDAY",
  "SALESFORCE",
  "PALANTIR",
  "SNOWFLAKE",
  "CROWDSTRIKE",
  "DATADOG",
  "CLOUDFLARE",
];

export default function CustomerLogoWall() {
  return (
    <section className="bg-[#050B14] py-16 text-white font-sans border-b border-white/10">
      <div className="container-page">
        <ScrollReveal speed="fast" animation="fade-up">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-10">
            Trusted by innovative security leaders and global enterprises
          </p>
        </ScrollReveal>

        <ScrollReveal speed="normal" animation="zoom-in">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center opacity-70">
            {logos.map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center p-4 rounded-xl border border-white/5 bg-[#0B1324]/50 hover:opacity-100 transition">
                <span className="font-display font-black text-sm sm:text-base tracking-widest text-slate-300">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}