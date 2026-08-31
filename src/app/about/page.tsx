// src/app/about/page.tsx
import type { Metadata } from "next";
import { ShieldCheck, Cpu, Globe, Users, Sparkles } from "lucide-react";
import CTASection from "@/components/CTASection";
import AnalystSection from "@/components/AnalystSection";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Spectrunex | Leading Enterprise Cybersecurity Partner",
  description:
    "Spectrunex is the global cybersecurity leader, protecting the digital way of life by delivering continuous innovation through Precision AI™.",
  alternates: { canonical: "/about" },
};

const corePillars = [
  {
    icon: Cpu,
    title: "Precision AI™ Innovation",
    desc: "Pioneering the intersection of deep learning, machine learning, and generative AI to stop sophisticated zero-day attacks before execution.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Trust by Design",
    desc: "Eliminating implicit trust across networks, cloud workloads, and user identities with continuous verification at every layer.",
  },
  {
    icon: Globe,
    title: "Global Scale & Telemetry",
    desc: "Protecting over 65,000 global enterprises across 150+ countries with billions of telemetry signals processed daily.",
  },
  {
    icon: Users,
    title: "Elite Unit 42 Intelligence",
    desc: "World-renowned threat researchers and forensic responders tracking nation-state actors and ransomware cartels in real time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ]}
      />

      <section className="bg-[#0B0E14] border-b border-white/10 py-24 font-sans relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="container-page relative z-10">
          <ScrollReveal speed="fast" animation="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Our Mission</span>
            </div>
            <h1 className="max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Securing the Digital Way of Life
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              We are the cybersecurity partner of choice, protecting thousands of enterprise organizations from complex cyber risks with the power of Precision AI™.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-[#070A0F] font-sans border-b border-white/10">
        <div className="container-page grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {corePillars.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} speed="normal" animation="zoom-in" className="h-full">
              <div
                className="rounded-2xl bg-[#0F141E] border border-white/10 p-8 hover:border-blue-500/50 transition flex flex-col justify-between h-full"
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-6">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-xl text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <AnalystSection />
      <CTASection />
    </>
  );
}