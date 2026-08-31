// src/components/ServicesGrid.tsx
import Link from "next/link";
import { Cloud, Shield, Cpu, Lock, Terminal, Database, ArrowRight, Users as UsersIcon, GraduationCap as GraduationCapIcon, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface ServicesGridProps {
  withDetails?: boolean;
}

const servicesList = [
  {
    title: "FedRAMP Advisory & Readiness",
    desc: "Complete FedRAMP authorization support from scoping to ATO",
    icon: <Cloud className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "DoD DISA PA / ILs Support",
    desc: "Impact Level compliance and authorization assistance",
    icon: <Shield className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "CMMC Readiness & Prep",
    desc: "CMMC certification preparation and gap remediation",
    icon: <Lock className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "Security Assessments",
    desc: "Comprehensive security evaluations (PCI, ISO 27001, FedRAMP)",
    icon: <Cpu className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "Pen Test / Vulnerability Mgmt",
    desc: "Offensive security testing and continuous vulnerability management",
    icon: <Terminal className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "Managed Security Services",
    desc: "Continuous monitoring and security operations support",
    icon: <Database className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "Secure Application Development",
    desc: "Full-stack secure software development services",
    icon: <Lock className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "Cyber & IT Staffing",
    desc: "Expert security and IT professionals for your team",
    icon: <UsersIcon className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "Corporate & Private Training",
    desc: "Customized security awareness and technical training programs",
    icon: <GraduationCapIcon className="h-6 w-6 text-blue-400" />,
  },
];

export default function ServicesGrid({ withDetails = false }: ServicesGridProps) {
  return (
    <section className="py-24 bg-[#050B14] text-white font-sans">
      <div className="container-page">
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Product &amp; Solution Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display">
              Comprehensive Security Solutions
            </h2>
            <p className="mt-4 text-slate-300 text-base">
              End-to-end services to secure, certify, and scale your organization
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08} speed="normal" animation="zoom-in" className="h-full">
              <div
                className="group rounded-2xl bg-[#0B1324] border border-blue-950/60 p-8 hover:border-blue-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between h-full"
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="text-xs font-bold uppercase tracking-wider text-blue-400 group-hover:text-blue-300 transition inline-flex items-center gap-1.5"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}