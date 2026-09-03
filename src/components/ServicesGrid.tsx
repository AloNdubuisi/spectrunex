// src/components/ServicesGrid.tsx
"use client";

import {
  Cloud,
  Shield,
  Target,
  Search,
  Users,
  GraduationCap,
  Settings,
  FileText,
  Globe,
  Lock,
  Cpu,
  Zap,
  ArrowRight,
  BarChart3,
  Monitor,
  SquareCode,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const services = [
  {
    icon: Shield,
    title: "Threat Intelligence & Incident Response",
    subtitle: "Unit 42®",
    description: "World-renowned threat researchers, elite incident responders and expert security consultants guide you with a threat-informed approach.",
    stats: [
      { value: "1K+", label: "matters per year" },
      { value: "24/7/365", label: "incident response" },
      { value: "200+", label: "threat researchers" },
    ],
    color: "orange",
    features: ["Threat Intelligence", "Incident Response", "Security Consulting"],
  },
  {
    icon: Cloud,
    title: "Cloud Security & Compliance",
    subtitle: "Advisory Services",
    description: "Complete FedRAMP authorization support, DoD DISA PA compliance, CMMC readiness, and cloud security assessments.",
    stats: [
      { value: "100%", label: "FedRAMP success rate" },
      { value: "500+", label: "federal agencies" },
      { value: "CMMC", label: "certified partners" },
    ],
    color: "cyan",
    features: ["FedRAMP Advisory", "DoD DISA PA", "CMMC Readiness"],
  },
  {
    icon: Target,
    title: "Security Assessments & Testing",
    subtitle: "Offensive Security",
    description: "Comprehensive security evaluations, penetration testing, vulnerability management, and continuous security monitoring.",
    stats: [
      { value: "99.9%", label: "vulnerability coverage" },
      { value: "48h", label: "average response time" },
      { value: "PCI DSS", label: "certified assessors" },
    ],
    color: "blue",
    features: ["Penetration Testing", "Vulnerability Mgmt", "Security Assessments"],
  },
  {
    icon: Users,
    title: "Managed Security Services",
    subtitle: "24/7/365 SOC",
    description: "Continuous monitoring, security operations support, managed detection and response, and expert security staffing.",
    stats: [
      { value: "24/7", label: "security monitoring" },
      { value: "< 10min", label: "threat response" },
      { value: "100+", label: "security analysts" },
    ],
    color: "purple",
    features: ["Managed SOC", "MDR Services", "Security Staffing"],
  },
  {
    icon: GraduationCap,
    title: "Training & Certification",
    subtitle: "Education Services",
    description: "Customized security awareness programs, technical training, certification preparation, and corporate security education.",
    stats: [
      { value: "10K+", label: "professionals trained" },
      { value: "95%", label: "certification pass rate" },
      { value: "CISSP", label: "certified instructors" },
    ],
    color: "green",
    features: ["Security Awareness", "Technical Training", "Certification Prep"],
  },
  {
    icon: Settings,
    title: "Implementation & Integration",
    subtitle: "Professional Services",
    description: "Platform deployment, integration services, configuration management, and ongoing optimization support.",
    stats: [
      { value: "1000+", label: "successful deployments" },
      { value: "30 days", label: "average time to value" },
      { value: "99.9%", label: "uptime SLA" },
    ],
    color: "orange",
    features: ["Platform Deployment", "Integration Services", "Configuration Mgmt"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B0E14] to-[#070A0F] py-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:100px_100px] opacity-10" />
        <div className="absolute left-1/3 top-1/4 h-64 w-64 animate-float rounded-full bg-radial-orange opacity-5" />
        <div className="absolute right-1/3 bottom-1/4 h-96 w-96 animate-float rounded-full bg-radial-cyan opacity-5" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container-page relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" speed="fast" className="text-center mb-16">
          <p className="section-kicker">Expert Services</p>
          <h2 className="section-heading mb-6">
            Intelligence-driven. Response-ready.
          </h2>
          <p className="section-copy mx-auto">
            Unit 42's world-renowned threat researchers, elite incident responders and expert security consultants 
            will guide you with a threat-informed approach before, during and after an incident.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal 
              key={index} 
              animation="scale" 
              delay={index * 0.1}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-sm transition-all hover:border-pan-orange/30 hover:shadow-2xl hover:shadow-black/30"
              >
                {/* Service Icon */}
                <div className={`mb-6 inline-flex rounded-2xl p-4 ${
                  service.color === "orange" ? "bg-pan-orange/10" :
                  service.color === "cyan" ? "bg-cyan-500/10" :
                  service.color === "blue" ? "bg-blue-500/10" :
                  service.color === "purple" ? "bg-purple-500/10" :
                  "bg-green-500/10"
                }`}>
                  <service.icon className={`h-8 w-8 ${
                    service.color === "orange" ? "text-pan-orange" :
                    service.color === "cyan" ? "text-cyan-400" :
                    service.color === "blue" ? "text-blue-400" :
                    service.color === "purple" ? "text-purple-400" :
                    "text-green-400"
                  }`} />
                </div>

                {/* Service Content */}
                <div className="mb-6">
                  <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
                  <p className="mb-4 text-sm font-semibold text-pan-orange">{service.subtitle}</p>
                  <p className="mb-6 text-sm text-slate-400">{service.description}</p>
                  
                  {/* Stats */}
                  <div className="mb-6 grid grid-cols-3 gap-3">
                    {service.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`text-lg font-bold ${
                          service.color === "orange" ? "text-pan-orange" :
                          service.color === "cyan" ? "text-cyan-400" :
                          service.color === "blue" ? "text-blue-400" :
                          service.color === "purple" ? "text-purple-400" :
                          "text-green-400"
                        }`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                        <div className={`h-1.5 w-1.5 rounded-full ${
                          service.color === "orange" ? "bg-pan-orange" :
                          service.color === "cyan" ? "bg-cyan-400" :
                          service.color === "blue" ? "bg-blue-400" :
                          service.color === "purple" ? "bg-purple-400" :
                          "bg-green-400"
                        }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Link */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <button className="flex items-center gap-2 text-sm font-semibold text-pan-orange hover:text-pan-orange-light">
                    Learn more about {service.subtitle}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent via-white/2 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal animation="fade-up" delay={0.7} className="mt-16">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="mb-3 text-2xl font-bold text-white">Trusted by the best</h3>
                <p className="text-slate-400">
                  150+ law firms, 500+ federal agencies, and thousands of enterprises trust 
                  our threat intelligence and incident response services.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <button className="rounded-full bg-gradient-to-r from-pan-orange to-pan-orange-hover px-8 py-3 text-sm font-bold text-white transition-all hover:scale-105">
                  Request incident response
                </button>
                <button className="rounded-full border border-white/20 bg-transparent px-8 py-3 text-sm font-bold text-white transition-all hover:border-pan-orange/50 hover:bg-pan-orange/5">
                  Contact Unit 42
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}