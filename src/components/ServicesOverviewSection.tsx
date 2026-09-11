// src/components/ServicesOverviewSection.tsx
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const servicesData = [
  {
    src: "./assets/img/services-consulting.jpg",
    alt: "Advisors meeting with a client team around a conference table",
    title: "FedRAMP & DoD DISA® Advisory Services",
    slug: "fedramp-disa-advisory",
    kicker: "Authorization Readiness",
    copy: "Spectrunex independent advisors help prepare your cloud service for FedRAMP & DoD DISA consulting, assessment, and authorization through the entire lifecycle.",
    highlights: [
      "Go-to-market strategy & boundary scoping",
      "Compliance gap analysis and remediation",
      "Architecture support & assessment navigation",
    ],
  },
  {
    src: "./assets/img/services-staffing.jpg",
    alt: "Team reviewing hiring and staffing plans",
    title: "Staffing Agency Services",
    slug: "staffing-agency-services",
    kicker: "Talent Solutions",
    copy: "Whether you are an employer or a job seeker in the public or private sector, partnering with Spectrunex offers unmatched cybersecurity staffing benefits.",
    highlights: [
      "Specialist cybersecurity recruiting",
      "Global sourcing across 50+ countries",
      "Flexible, cost-effective engagement models",
    ],
  },
  {
    src: "./assets/img/services-security.jpg",
    alt: "Security-themed digital graphic",
    title: "Cyber Security",
    slug: "cyber-security",
    kicker: "Information Assurance",
    copy: "Our certified professionals provide security guidance and information assurance services across the SDLC and every infrastructure layer.",
    highlights: [
      "Assessment & Authorization (A&A) and ATO support",
      "FISMA compliance and audit reviews",
      "Risk and vulnerability assessments",
    ],
  },
  {
    src: "./assets/img/itsm.jpg",
    alt: "Service desk analysts supporting end users",
    title: "ITSM Support Services",
    slug: "itsm-support-services",
    kicker: "Operational Excellence",
    copy: "An ITIL-based IT Service Management methodology that aligns operations and maintenance support directly with your mission objectives.",
    highlights: [
      "Tier 0-4 service desk management",
      "Incident, problem & configuration management",
      "Transition to operations and continuous improvement",
    ],
  },
  {
    src: "./assets/img/cloud-img.jpg",
    alt: "Cloud infrastructure visualization",
    title: "Cloud Services",
    slug: "cloud-services",
    kicker: "Multi-Cloud Infrastructure",
    copy: "We help customers meet Federal “Cloud First” initiatives with PaaS, SaaS, and IaaS delivery plus secure private, public, and hybrid architectures.",
    highlights: [
      "Infrastructure virtualization & virtual desktops",
      "Website and application migration",
      "Cloud security strategy aligned to FISMA, FIPS & NIST",
    ],
  },
  {
    src: "./assets/img/application-img.jpg",
    alt: "Software engineers reviewing code on screen",
    title: "Application & Software Development",
    slug: "application-software-development",
    kicker: "Engineering & Modernization",
    copy: "End-to-end software engineering, architecture, maintenance, and support built for federal and enterprise programs.",
    highlights: [
      "Custom application development & management",
      "Legacy modernization and application infusion",
      "Ongoing maintenance and production support",
    ],
  },
  {
    src: "./assets/img/hardware-1.jpg",
    alt: "Data center racks and network equipment",
    title: "Hardware Sales & Support",
    slug: "hardware-sales-support",
    kicker: "Lifecycle Management",
    copy: "Sourcing, delivery, installation, and maintenance of enterprise servers, workstations, firewalls, and data center hardware.",
    highlights: [
      "Data centre & structured cabling systems",
      "Cisco switching, routing, wireless & firewalls",
      "PC, server, storage and equipment maintenance",
    ],
  },
];

export default function ServicesOverviewSection() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[280px] overflow-hidden bg-[#0B0E14] sm:h-[340px]">
        <img
          src="./assets/img/services-bg.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#050B14]/55" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <ScrollReveal speed="fast" animation="fade-up">
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">Services</h1>
            <p className="mt-2 text-xs font-bold text-white">
              <Link href="/" className="hover:text-blue-300">
                Home
              </Link>{" "}
              - Services
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Full services listing */}
      <section className="relative overflow-hidden bg-[#070A0F] py-20 text-white">
        {/* Subtle background glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#1D4ED8]/10 blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[420px] w-[420px] rounded-full bg-[#2563EB]/[0.08] blur-[160px]" />
        </div>

        <div className="container-page relative z-10">
          {/* Intro */}
          <ScrollReveal speed="fast" animation="fade-up">
            <div className="mb-14 max-w-3xl">
              <div className="mb-6 h-[2px] w-28 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-transparent sm:w-44" />
              <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#2563EB]">
                What We Deliver
              </p>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Seven service lines, one accountable partner
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
                Spectrunex supports Federal, State, and commercial customers across the full
                technology lifecycle &mdash; from authorization readiness and information
                assurance through the people, platforms, and hardware that keep systems
                running. Explore each service below.
              </p>
            </div>
          </ScrollReveal>

          {/* Service cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, idx) => (
              <ScrollReveal
                key={service.slug}
                delay={idx * 0.05}
                speed="normal"
                animation="zoom-in"
                className="h-full"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0F141E] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-600/20"
                >
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <img
                      src={service.src}
                      alt={service.alt}
                      className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F141E] via-[#0F141E]/40 to-transparent" />
                    <span className="absolute bottom-4 left-5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-blue-300">
                      {service.kicker}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-bold leading-snug text-white">
                        {service.title}
                      </h3>
                      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-blue-400 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    <p className="text-sm leading-relaxed text-slate-400">{service.copy}</p>

                    <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                      {service.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-blue-400" />
                          <span className="text-[0.82rem] leading-relaxed text-slate-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Closing CTA */}
          <ScrollReveal speed="normal" animation="fade-up">
            <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-[#0B1324] p-8 sm:p-10 md:flex-row md:items-center">
              <div>
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  Not sure which service fits your requirement?
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                  Tell us about your program and a Spectrunex advisor will map the right mix of
                  advisory, staffing, and delivery support.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700"
              >
                Connect With Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
