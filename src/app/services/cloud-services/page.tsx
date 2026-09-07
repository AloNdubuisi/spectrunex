// src/app/services/cloud-services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Cloud Services & Infrastructure Virtualization | Spectrunex",
  description: "Helping customers meet Federal Cloud First initiatives with PaaS, SaaS, IaaS, and secure multi-cloud architectures.",
};

const cloudFeatures = [
  "Cloud Solutions and Services (PaaS, SaaS, IaaS)",
  "Infrastructure Virtualization",
  "Cloud-based Application Development and Deployment",
  "Website and Application Migration",
  "Virtual Desktop Services and Applications",
  "Private, Public, and Hybrid Cloud Solutions Support Services",
];

export default function CloudServicesPage() {
  return (
    <div className="text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* Hero Banner */}
      <section className="relative h-[360px] sm:h-[420px] overflow-hidden flex items-center justify-center">
        <img
          src="/assets/img/cloud-service-bg.jpg"
          alt="Cloud Services"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent" />
        <div className="container-page relative z-10 text-center">
          <ScrollReveal animation="fade-up" speed="fast">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 block">
              MULTI-CLOUD INFRASTRUCTURE
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white max-w-3xl mx-auto leading-tight mb-6">
              Cloud Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Delivering PaaS, SaaS, IaaS, and comprehensive secure cloud solutions aligned with federal mandates.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview Intro */}
      <section className="py-24 border-b border-white/10">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal animation="slide-left" className="lg:col-span-6 space-y-6" speed="normal">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                Spectrunex helps customers meet Federal &ldquo;Cloud First&rdquo; initiatives by providing cloud solutions and services that include Platform as a Service (PaaS), Software as a Service (SaaS), and Infrastructure as a Service (IaaS). Our team possesses expertise in infrastructure virtualization, developing and deploying cloud-based applications, migrating websites and applications to the cloud, delivering virtual desktop services and applications, and implementing private, public, and hybrid cloud solutions.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Importantly, we support our customers in developing security strategies and frameworks for the cloud, which include identity management, networking, data, applications, and services. We apply and adhere to security guidelines and policies and regulations for identify management, information security, and security controls and checklists (e.g., FISMA, FIPS, HSPD-12, NIST, etc.).
              </p>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" className="lg:col-span-6" speed="normal">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B1324] aspect-[4/3] flex items-center justify-center text-slate-500 font-semibold text-sm">
                {/* Image Placeholder */}
                <img src="/assets/img/cloud-img.jpg" alt="Cloud Services image" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="py-24 bg-[#03070E] border-b border-white/10">
        <div className="container-page">
          <ScrollReveal animation="fade-up" speed="fast">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white mb-4">
                Spectrunex has also developed and deployed private cloud solutions for remote application and desktop services to create more effective security boundaries between mission and administrative IT systems and services.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudFeatures.map((feat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.04} animation="zoom-in" className="h-full" speed="normal">
                <div className="rounded-2xl bg-[#0B1324] border border-white/10 p-8 h-full flex flex-col justify-between">
                  <CheckCircle2 className="h-6 w-6 text-blue-400 mb-4" />
                  <h3 className="font-display font-bold text-lg text-white">{feat}</h3>
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