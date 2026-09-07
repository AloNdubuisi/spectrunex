// src/app/services/application-software-development/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Application & Software Development | Spectrunex",
  description: "End-to-end software engineering, architecture, maintenance, and support services tailored for federal and enterprise clients.",
};

const devLifecycleStages = [
  { 
    title: "APPLICATION DEVELOPMENT", 
    desc: "Providing end-to-end development from requirement analysis for deployment and rollout.",
    image: "/assets/img/app-dev-1.jpg"
  },
  { 
    title: "APPLICATION MAINTENANCE", 
    desc: "Changing or enhancing software to meet changing or increasing business demands in the post-rollout phase of an application.",
    image: "/assets/img/app-dev-2.jpg"
  },
  { 
    title: "APPLICATION SUPPORT", 
    desc: "Providing first, second, third line support and on-call support. On-call support further includes Gold (24x7), Silver and Bronze support.",
    image: "/assets/img/app-dev-3.jpg"
  },
  { 
    title: "APPLICATION INFUSION / MODERNIZATION", 
    desc: "Replacing, migrating and integrating legacy or bespoke systems with COTS products.",
    image: "/assets/img/app-dev-4.jpg"
  },
  { 
    title: "APPLICATION MANAGEMENT", 
    desc: "Spectrunex takes complete ownership of the outsourced suite of applications as per the agreed scope and manages the support. This typically involves transition management, project management, proactive risk and scope change management, quality management, SLA management etc.",
    image: "/assets/img/app-dev-5.jpg"
  },
];

export default function ApplicationSoftwareDevelopmentPage() {
  return (
    <div className="text-white font-sans selection:text-white">
      {/* Hero Banner */}
      <section className="relative h-[360px] sm:h-[420px] overflow-hidden flex items-center justify-center">
        <img
          src="/assets/img/application-bg.jpg"
          alt="Application & Software Development"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent" />
        <div className="container-page relative z-10 text-center">
          <ScrollReveal animation="fade-up" speed="fast">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 block">
              SOFTWARE ENGINEERING
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white max-w-3xl mx-auto leading-tight mb-6">
              Application & Software Development
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Custom software development, modernization, and lifecycle maintenance built for high-performance enterprise environments.
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
                Spectrunex&apos;s application and software development services span the entire software lifecycle. Our software engineers, developers, and architects combine agile practices with rigorous industry best practices. Whether your project calls for custom application development, system modernization, data migration, or database optimization, our solutions are engineered for maximum security, resilience, and business productivity.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                We work closely with our customers to ensure that developed software adheres strictly to compliance frameworks, information security protocols, and operational readiness standards.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" className="lg:col-span-5" speed="normal">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B1324] aspect-[4/3] flex items-center justify-center text-slate-500 font-semibold text-sm">
                <img src="/assets/img/application-img.jpg" alt="Application & Software Development image" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Lifecycle Stages */}
      <section className="py-24 bg-[#03070E] border-b border-white/10">
        <div className="container-page">
          <ScrollReveal animation="fade-up" speed="fast">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-2">
                ENTERPRISE DELIVERY
              </p>
              <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white mb-4">
                We hope to come to you with desired software at a reasonable cost. Spectrunex&apos;s services span the following application lifecycle stages:
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devLifecycleStages.map((stage, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05} animation="zoom-in" className="h-full" speed="normal">
                <div className="rounded-2xl bg-[#0B1324] border border-white/10 overflow-hidden h-full flex flex-col justify-between hover:border-blue-500/50 transition">
                  <div className="h-48 w-full bg-slate-900 overflow-hidden relative">
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">
                        STAGE 0{idx + 1}
                      </span>
                      <h3 className="font-display font-bold text-lg text-white mb-3">{stage.title}</h3>
                      <p className="text-sm text-slate-300 leading-relaxed">{stage.desc}</p>
                    </div>
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