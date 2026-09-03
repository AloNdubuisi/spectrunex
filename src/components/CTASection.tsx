// src/components/CTASection.tsx
"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, Calendar, FileText, Phone, Users, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

export default function CTASection() {
  const ctaOptions = [
    {
      icon: Calendar,
      title: "Schedule a Demo",
      description: "See our platforms in action with a personalized walkthrough",
      action: "Book a demo",
      href: "/demo",
      color: "from-pan-orange to-pan-orange-hover",
    },
    {
      icon: MessageSquare,
      title: "Talk to an Expert",
      description: "Get personalized guidance from our cybersecurity experts",
      action: "Contact sales",
      href: "/contact",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: FileText,
      title: "Request a Proposal",
      description: "Receive a customized proposal for your organization",
      action: "Get proposal",
      href: "/proposal",
      color: "from-blue-500 to-indigo-500",
    },
  ];

  const quickLinks = [
    { icon: Phone, label: "Contact Sales", href: "/contact", desc: "(202) 948-9063" },
    { icon: Users, label: "Partner Portal", href: "/partners", desc: "For partners & resellers" },
    { icon: Globe, label: "Global Support", href: "/support", desc: "24/7/365 assistance" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#070A0F] via-[#0B0E14] to-[#070A0F] py-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:120px_120px] opacity-10" />
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-radial-orange opacity-10"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-radial-cyan opacity-10"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container-page relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" speed="fast" className="text-center mb-16">
          <p className="section-kicker">Here for you. Here for what's next.</p>
          <h2 className="section-heading mb-6">
            Ready to secure your organization?
          </h2>
          <p className="section-copy mx-auto">
            Get expert guidance, personalized demos, and tailored solutions from the cybersecurity leader.
          </p>
        </ScrollReveal>

        {/* CTA Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option, index) => (
            <ScrollReveal 
              key={index} 
              animation="scale" 
              delay={index * 0.2}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-sm transition-all hover:border-pan-orange/30 hover:shadow-2xl hover:shadow-black/30"
              >
                {/* Icon */}
                <div className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${option.color} p-4`}>
                  <option.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-white">{option.title}</h3>
                <p className="mb-6 text-sm text-slate-400">{option.description}</p>

                {/* Action Button */}
                <Link
                  href={option.href}
                  className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${option.color} px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-xl`}
                >
                  {option.action}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                {/* Decorative Elements */}
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-transparent via-white/2 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-transparent via-pan-orange/5 to-transparent opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Quick Links */}
        <ScrollReveal animation="fade-up" delay={0.6}>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-pan-orange/30 hover:bg-pan-orange/5"
                  >
                    <div className="rounded-lg bg-pan-orange/10 p-3">
                      <link.icon className="h-5 w-5 text-pan-orange" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{link.label}</div>
                      <div className="text-sm text-slate-400">{link.desc}</div>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 text-pan-orange opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Text */}
        <ScrollReveal animation="fade-up" delay={0.8} className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-pan-orange" />
              No obligation consultation
            </span>
            <span className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-pan-orange" />
              Tailored to your needs
            </span>
            <span className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-pan-orange" />
              24/7 global support
            </span>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} Spectrunex Networks, LLC. All trademarks are the property of their respective owners.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}