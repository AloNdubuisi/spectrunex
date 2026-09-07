// src/app/services/cyber-security/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
// import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Cyber Security & Information Assurance Services | Spectrunex",
  description: "Protecting valuable information and property across the SDLC with certified information assurance professionals.",
};

const cybersecurityServices = [
  { title: "Information Assurance Services", desc: "Comprehensive protection across infrastructure and applications." },
  { title: "Assessment and Authorization (A&A)", desc: "Guiding systems through rigorous compliance and ATO lifecycles." },
  { title: "Federal Information Security Management Act (FISMA) Compliance & Audit Reviews", desc: "Ensuring adherence to federal standards." },
  { title: "HSPD-12 Support and Services", desc: "Secure identification and credential management solutions." },
  { title: "Risk and Vulnerability Assessment and Reviews", desc: "Proactive identification of architectural security gaps." },
  { title: "Evaluation of Various Technologies and Products", desc: "Objective analysis of emerging cybersecurity tools." },
  { title: "Provide Security Architectural Considerations and Recommendations", desc: "Designing robust enterprise defense grids." },
  { title: "Develop, Document and Maintain IT Processes Methods and Tools", desc: "Standardizing operational security workflows." },
  { title: "Develop Mitigation Recommendations", desc: "Actionable risk management and remediation planning." },
  { title: "Develop, Update and Review IT Security Policy, Procedures & Standards", desc: "Tailored to departmental and federal requirements." },
  { title: "POA&Ms & Configuration Management Plans", desc: "Managing milestones, incident response plans, and rules of behavior." },
  { title: "Conduct Vulnerability Scans and Penetration Testing", desc: "Simulating real-world threat actors to test resilience." },
];

export default function CyberSecurityPage() {
  return (
    <div className="bg-[#050B14] text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* Hero Banner */}
      <section className="relative h-[360px] sm:h-[420px] overflow-hidden bg-[#0B0E14] flex items-center justify-center">
        <img
          src="/assets/img/staff-security-bg.jpg"
          alt="Cyber Security"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent" />
        <div className="container-page relative z-10 text-center">
          <ScrollReveal animation="fade-up" speed="fast">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 block">
              ENTERPRISE DEFENSE
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white max-w-3xl mx-auto leading-tight mb-6">
              Cyber Security
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Protecting your valuable information and assets from theft, corruption, and unauthorized activity while ensuring productivity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview Intro */}
      <section className="py-24 border-b border-white/10">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal animation="slide-left" className="lg:col-span-7 space-y-6" speed="normal">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                Spectrunex knows the objective is to protect your valuable information and property from theft, corruption, natural disasters, or unauthorized activity while allowing the information and property to remain accessible and productive to its intended users. Spectrunex takes a proactive approach to IT security and risk management that our customers have grown to depend on and trust.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Our team of certified professionals provides security guidance and information assurance services to Federal, State, and Private customers throughout the System Development Lifecycle (SDLC) including each layer of the infrastructure and applications.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" className="lg:col-span-5" speed="normal">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B1324]">
                <img
                  src="/assets/img/cyber-sec.jpg"
                  alt="Cybersecurity digital graphic"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid Matrix */}
      <section className="py-24 border-b border-white/10 bg-[#03070E]">
        <div className="container-page">
          <ScrollReveal animation="fade-up" speed="fast">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white mb-4">
                Each of our cyber security and information assurance services follows our best practice approach including a comprehensive risk management process.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cybersecurityServices.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.03} animation="zoom-in" className="h-full" speed="normal">
                <div className="rounded-2xl bg-[#0B1324] border border-white/10 p-8 h-full flex flex-col justify-between hover:border-blue-500/50 transition">
                  <div>
                    <div className="h-10 w-10 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-4 font-black text-sm">
                      0{idx + 1}
                    </div>
                    <h3 className="font-display font-bold text-lg text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* <CTASection/> */}
    </div>
  );
}