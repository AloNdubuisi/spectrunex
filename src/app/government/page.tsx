// src/app/government/page.tsx
import type { Metadata } from "next";
import { ShieldCheck, Building2, FileCheck, Award, Sparkles, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Government & Public Sector Solutions | Spectrunex",
  description:
    "Empowering federal, state, and defense agencies with FedRAMP®, CMMC, and DoD DISA PA compliant cybersecurity and infrastructure.",
  alternates: { canonical: "/government" },
};

const govSolutions = [
  {
    title: "Federal & Defense Compliance",
    desc: "Complete advisory and technical implementation for FedRAMP, DoD DISA ILs, and NIST frameworks.",
    icon: ShieldCheck,
  },
  {
    title: "CMMC Cybersecurity Readiness",
    desc: "Defensive posture assessments, gap remediation, and audit preparation for Defense Industrial Base (DIB) contractors.",
    icon: FileCheck,
  },
  {
    title: "Mission-Critical IT Staffing",
    desc: "Cleared security professionals and elite engineers embedded directly into government agency projects.",
    icon: Building2,
  },
];

export default function GovernmentPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Government", url: `${siteConfig.url}/government` },
        ]}
      />

      <section className="bg-[#0B0E14] border-b border-pan-dark-border py-24 font-sans relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="container-page relative z-10">
          <ScrollReveal speed="fast" animation="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Public Sector &amp; Defense</span>
            </div>
            <h1 className="max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Securing Government Missions at Every Level
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Spectrunex delivers rigorous compliance, elite cybersecurity operations, and trusted technical manpower to federal, state, and defense agencies.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-[#070A0F] font-sans border-b border-pan-dark-border">
        <div className="container-page">
          <ScrollReveal speed="fast" animation="fade-up">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
                Tailored Solutions for Public Sector Mandates
              </h2>
              <p className="mt-4 text-slate-300 text-base">
                Meeting stringent government regulatory requirements with automated, verifiable security frameworks.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {govSolutions.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} speed="normal" animation="zoom-in" className="h-full">
                <div className="rounded-2xl bg-[#0F141E] border border-pan-dark-border p-8 hover:border-blue-500/50 transition flex flex-col justify-between h-full">
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-6">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-xl text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/5">
                    <Link
                      href="/contact"
                      className="text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition inline-flex items-center gap-1.5"
                    >
                      Request Agency Briefing <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}