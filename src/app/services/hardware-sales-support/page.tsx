// src/app/services/hardware-sales-support/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Hardware Sales & Support | Spectrunex",
  description: "Sourcing, delivery, installation, and maintenance of enterprise servers, computers, firewalls, and data center hardware.",
};

const hardwareOfferings = [
  {
    title: "Data Centre, Structure Cabling Systems",
    image: "/assets/img/hardware-1.jpg",
  },
  {
    title: "CISCO Switch, Firewall, Wireless & Routers",
    image: "/assets/img/hardware-2.jpg",
  },
  {
    title: "Trend Micro, Tanium, SCCM, IBM BigFix, McAfee, KASPERSKY antivirus, UTM, and more",
    image: "/assets/img/hardware-3.jpg",
  },
  {
    title: "PC, Server & Storage Systems",
    image: "/assets/img/hardware-4.jpg",
  },
  {
    title: "Server & Switch Equipment Maintenance",
    image: "/assets/img/hardware-5.jpg",
  },
];

export default function HardwareSalesSupportPage() {
  return (
    <div className="text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* Hero Banner */}
      <section className="relative h-[360px] sm:h-[420px] overflow-hidden flex items-center justify-center">
        <img
          src="/assets/img/hardware-bg.jpg"
          alt="Hardware Sales & Support"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent" />
        <div className="container-page relative z-10 text-center">
          <ScrollReveal animation="fade-up" speed="fast">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 block">
              ENTERPRISE HARDWARE
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white max-w-3xl mx-auto leading-tight mb-6">
              Hardware Sales & Support
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Reliable sourcing, global delivery, installation, and ongoing maintenance for enterprise IT infrastructure.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview Intro */}
      <section className="py-20 border-b border-white/10 bg-[#03070E]">
        <div className="container-page max-w-4xl text-center">
          <ScrollReveal animation="fade-up" speed="normal">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              We offer servers, computers, computer accessories and services by sourcing from local market and from international market as well. Our team of experts is ready to serve you when you are worried due to lack of confidence in &ldquo;commitment of service&rdquo;. You are hereby requested to call us for any kind of requirement of computers, computer parts and services whatever and whenever you need.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-24 bg-[#050B14] border-b border-white/10">
        <div className="container-page">
          <ScrollReveal animation="fade-up" speed="fast">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white mb-4">
                Spectrunex also offer & Supply, Delivery & Installation of:
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareOfferings.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.04} animation="zoom-in" className="h-full" speed="normal">
                <div className="rounded-2xl bg-[#0B1324] border border-white/10 overflow-hidden h-full flex flex-col justify-between hover:border-blue-500/50 transition">
                  <div className="h-48 w-full bg-slate-900 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-center text-center">
                    <h3 className="font-display font-bold text-base text-white">{item.title}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}