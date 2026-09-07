// src/app/services/itsm-support-services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "ITSM Support Services | Spectrunex",
  description: "ITIL-based IT Service Management methodology aligning operations and maintenance support with mission objectives.",
};

const itsmFeatures = [
  "Tier 0-4 Service Desk Management",
  "End-User Service Center Operations and Consolidation",
  "Incident and Problem Management",
  "Transition to Operations",
  "Operations Support",
  "Continuous Process Improvement",
  "Desktop Management Services",
  "Communication and Collaboration Services",
  "Business Management Solutions",
  "Strategic Sourcing Service Catalog",
  "Training and Consulting Services",
  "Management of Special Projects",
  "Configuration Management",
];

export default function ItsmSupportServicesPage() {
  return (
    <div className="bg-[#050B14] text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* Hero Banner */}
      <section className="relative h-[360px] sm:h-[420px] overflow-hidden bg-[#0B0E14] flex items-center justify-center">
        <img
          src="/assets/img/itsm-bg.jpg"
          alt="ITSM Support Services"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent" />
        <div className="container-page relative z-10 text-center">
          <ScrollReveal animation="fade-up" speed="fast">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 block">
              OPERATIONAL EXCELLENCE
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white max-w-3xl mx-auto leading-tight mb-6">
              ITSM Support Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              ITIL-based IT Service Management methodology delivering continuous process improvement and structured operational support.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview Intro with Placeholder Image */}
      <section className="py-24 border-b border-white/10">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal animation="slide-left" className="lg:col-span-6 space-y-6" speed="normal">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                Following an ITIL-based IT Service Management (ITSM) methodology, our team works with customers to plan, design, deliver and control services and solutions aligned with their mission and objectives. We require our technical staff to be ITIL trained and certified to ensure that operations and maintenance support services follow structured processes and procedures (e.g., Service Design, Release Management, Transition to Operations, Incident and Problem Management, Change Management, Quality Management, etc.)
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                We establish and track meaningful metrics, and integrate continuous process improvement. By combining the ideal mix of people, processes, and technology, we deliver services focused on meeting customers&apos; needs.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" className="lg:col-span-6" speed="normal">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B1324] aspect-[4/3] flex items-center justify-center text-slate-500 font-semibold text-sm">
                {/* Image Placeholder */}
                <img src="/assets/img/itsm.jpg" alt="ITSM image" 
                className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-[#03070E] border-b border-white/10">
        <div className="container-page">
          <ScrollReveal animation="fade-up" speed="fast">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white mb-4">
                Spectrunex&apos;s ITSM Support Services Include:
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itsmFeatures.map((feature, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.03} animation="zoom-in" className="h-full" speed="normal">
                <div className="rounded-2xl bg-[#0B1324] border border-white/10 p-6 h-full flex items-start gap-4">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-white leading-relaxed">{feature}</p>
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