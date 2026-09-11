// src/components/ServicesGrid.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Cloud,
  ShieldCheck,
  PlusCircle,
  ArrowRight,
  Zap,
  Server,
  Users,
  Code,
  Layers,
} from "lucide-react";
import Link from "next/link";

interface ServiceCardItem {
  title: string;
  description: string;
  href: string;
}

interface PlatformData {
  id: string;
  tabLabel: string;
  icon: typeof Shield;
  kicker: string;
  titleLines: string[];
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
  ctaText: string;
  ctaHref: string;
  servicesList: ServiceCardItem[];
}

const platforms: PlatformData[] = [
  {
    id: "network-security",
    tabLabel: "AI-Powered Network Security",
    icon: Shield,
    kicker: "AI-POWERED NETWORK",
    titleLines: ["AI-POWERED NETWORK", "SECURITY"],
    description:
      "Securing the systems your mission depends on, wherever they run. Spectrunex designs Zero Trust network architectures and delivers the switching, routing, wireless, firewall, and cabling work behind them — then stays on to maintain what we build.",
    stats: [
      { value: "95%", label: "OF THE FORTUNE 100" },
      { value: "70 K", label: "CUSTOMERS" },
    ],
    ctaText: "Explore All Services",
    ctaHref: "/services",
    servicesList: [
      {
        title: "FedRAMP & DoD DISA® Advisory Services",
        description: "Independent advisors helping prepare cloud services for compliance, assessment, and authorization.",
        href: "/services/fedramp-disa-advisory",
      },
      {
        title: "Staffing Agency Services",
        description: "Bridging talent and opportunity through tailored cybersecurity workforce solutions.",
        href: "/services/staffing-agency-services",
      },
      {
        title: "Cyber Security",
        description: "Information assurance, SDLC protection, and comprehensive risk management.",
        href: "/services/cyber-security",
      },
      {
        title: "ITSM Support Services",
        description: "ITIL-based service management, tier 0-4 service desks, and operations support.",
        href: "/services/itsm-support-services",
      },
      {
        title: "Cloud Services",
        description: "PaaS, SaaS, IaaS, infrastructure virtualization, and Federal Cloud First solutions.",
        href: "/services/cloud-services",
      },
      {
        title: "Application & Software Development",
        description: "Custom software engineering, modernization, and lifecycle maintenance.",
        href: "/services/application-software-development",
      },
      {
        title: "Hardware Sales & Support",
        description: "Sourcing, delivery, installation, and maintenance of enterprise hardware systems.",
        href: "/services/hardware-sales-support",
      },
    ],
  },
];

export default function ServicesGrid() {
  const [activeTabId, setActiveTabId] = useState<string>(platforms[0].id);

  const activePlatform =
    platforms.find((p) => p.id === activeTabId) || platforms[0];

  return (
    <section className="relative overflow-hidden bg-[#070A0F] pt-20 pb-0 text-white selection:bg-[#1D4ED8] selection:text-white">
      {/* Subtle Background Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#1D4ED8]/8 blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 h-[420px] w-[420px] rounded-full bg-[#F59E0B]/6 blur-[160px]" />
      </div>

      <div className="container-page relative z-10">
        {/* Top Accent Line */}
        <div className="mb-6 flex items-center">
          <div className="h-[2px] w-28 bg-gradient-to-r from-[#1D4ED8] via-[#F59E0B] to-transparent sm:w-44" />
        </div>

        {/* Big Dynamic Tracked Accent Title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlatform.id + "-title"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mb-12 sm:mb-16"
          >
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[#2563EB] leading-[1.15]">
              {activePlatform.titleLines.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h3>
          </motion.div>
        </AnimatePresence>

        {/* Two Column Layout: Content (Left) & Services Grid Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-20 sm:mb-24">
          {/* Left Column: Description, Stats, CTA Button */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlatform.id + "-left"}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-between"
            >
              <p className="text-base sm:text-lg leading-relaxed text-slate-300 mb-10 font-normal">
                {activePlatform.description}
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-8 mb-10">
                {activePlatform.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                      {stat.value}
                    </span>
                    <span className="text-[0.72rem] sm:text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Primary Action Button */}
              <div>
                <Link
                  href={activePlatform.ctaHref}
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#1D4ED8] to-[#F59E0B] bg-[length:200%_auto] px-8 py-3.5 text-sm sm:text-base font-bold text-black transition-all duration-300 hover:bg-[position:right_center] hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 active:scale-95"
                >
                  <span>{activePlatform.ctaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Column: Service Cards Grid replacing Analyst Awards */}
          <div className="lg:col-span-7 relative">
            {/* Background Diagonal Hatch Pattern */}
            <div
              className="pointer-events-none absolute -inset-6 sm:-inset-10 opacity-30 z-0 overflow-hidden"
              aria-hidden="true"
            >
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="diagonal-stripes"
                    width="24"
                    height="24"
                    patternTransform="rotate(45 0 0)"
                    patternUnits="userSpaceOnUse"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="24"
                      stroke="#1D4ED8"
                      strokeWidth="2.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
              </svg>
            </div>

            {/* Top Right "See all (+)" link */}
            <div className="relative z-10 flex justify-end mb-4 pr-1">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#1D4ED8] transition-colors"
              >
                <span>See all services</span>
                <PlusCircle className="h-4 w-4 text-white" />
              </Link>
            </div>

            {/* Services Cards Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlatform.id + "-services"}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
              >
                {activePlatform.servicesList.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className="group relative overflow-hidden rounded-2xl p-6 sm:p-7 shadow-xl border border-blue-500/30 bg-gradient-to-br from-[#1D4ED8] via-[#1E40AF] to-[#172554] hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Subtle Inner Glow on hover */}
                    <div className="pointer-events-none absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      <div className="mb-3 flex items-center justify-end">
                        <ArrowRight className="h-4 w-4 text-white/70 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <h4 className="font-display font-bold text-base text-white mb-2 leading-snug">
                        {service.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-[0.84rem] text-white/80 leading-relaxed mt-3">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}