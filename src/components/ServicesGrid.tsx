// src/components/ServicesGrid.tsx
import {
  Cloud,
  BadgeCheck,
  Shield,
  Star,
  Settings,
  Search,
  BarChart3,
  Target,
  Monitor,
  SquareCode,
  Users,
  GraduationCap,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const servicesList = [
  {
    title: "FedRAMP Advisory & Readiness",
    desc: "Complete FedRAMP authorization support from scoping to ATO",
    icon: (
      <span className="relative inline-flex h-11 w-11 items-center justify-center">
        <Cloud className="h-11 w-11 text-blue-400" strokeWidth={1.5} />
        <BadgeCheck
          className="absolute -bottom-1 -right-1 h-4 w-4 text-blue-400 bg-[#0B1324] rounded-full"
          strokeWidth={2}
        />
      </span>
    ),
  },
  {
    title: "DoD DISA PA / ILs Support",
    desc: "Impact Level compliance and authorization assistance",
    icon: (
      <span className="relative inline-flex h-11 w-11 items-center justify-center">
        <Shield className="h-11 w-11 text-blue-400" strokeWidth={1.5} />
        <Star className="absolute h-4 w-4 text-blue-400 -translate-y-0.5" strokeWidth={2} fill="currentColor" />
      </span>
    ),
  },
  {
    title: "CMMC Readiness & Prep",
    desc: "CMMC certification preparation and gap remediation",
    icon: <Settings className="h-11 w-11 text-blue-400" strokeWidth={1.5} />,
  },
  {
    title: "Security Assessments",
    desc: "Comprehensive security evaluations (PCI, ISO 27001, FedRAMP)",
    icon: (
      <span className="relative inline-flex h-11 w-11 items-center justify-center">
        <Search className="h-11 w-11 text-blue-400" strokeWidth={1.5} />
        <BarChart3
          className="absolute h-3 w-3 text-blue-400 -translate-x-1 -translate-y-1"
          strokeWidth={2}
        />
      </span>
    ),
  },
  {
    title: "Pen Test / Vulnerability Mgmt",
    desc: "Offensive security testing and continuous vulnerability management",
    icon: <Target className="h-11 w-11 text-blue-400" strokeWidth={1.5} />,
  },
  {
    title: "Managed Security Services",
    desc: "Continuous monitoring and security operations support",
    icon: (
      <span className="relative inline-flex h-11 w-11 items-center justify-center">
        <Monitor className="h-11 w-11 text-blue-400" strokeWidth={1.5} />
        <Shield
          className="absolute h-4 w-4 text-blue-400 bg-[#0B1324] -translate-y-1.5"
          strokeWidth={2}
          fill="#0B1324"
        />
      </span>
    ),
  },
  {
    title: "Secure Application Development",
    desc: "Full-stack secure software development services",
    icon: <SquareCode className="h-11 w-11 text-blue-400" strokeWidth={1.5} />,
  },
  {
    title: "Cyber & IT Staffing",
    desc: "Expert security and IT professionals for your team",
    icon: <Users className="h-11 w-11 text-blue-400" strokeWidth={1.5} />,
  },
  {
    title: "Corporate & Private Training",
    desc: "Customized security awareness and technical training programs",
    icon: <GraduationCap className="h-11 w-11 text-blue-400" strokeWidth={1.5} />,
  },
];

/** Faint dot-and-line network decoration, matching the ambient background texture. */
function NetworkBackdrop() {
  const dots = [
    [88, 6], [94, 14], [80, 10], [97, 24], [90, 30],
    [76, 22], [83, 34], [70, 12], [60, 4], [98, 40],
  ];
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g stroke="#38BDF8" strokeWidth="0.5" opacity="0.35">
        {dots.map(([x1, y1], i) => {
          const [x2, y2] = dots[(i + 1) % dots.length];
          return (
            <line
              key={i}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
            />
          );
        })}
      </g>
      {dots.map(([x, y], i) => (
        <circle key={i} cx={`${x}%`} cy={`${y}%`} r="1.6" fill="#7DD3FC" />
      ))}
    </svg>
  );
}

export default function ServicesGrid({ withDetails = false }: { withDetails?: boolean }) {
  return (
    <section className="relative overflow-hidden py-24 bg-[#050B14] text-white font-sans">
      <NetworkBackdrop />
      <div className="container-page relative">
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display">
              Comprehensive Security Solutions
            </h2>
            <p className="mt-3 text-sky-400 text-sm sm:text-base font-medium">
              End-to-end services to secure, certify, and scale your organization
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08} speed="normal" animation="zoom-in" className="h-full">
              <div className="rounded-2xl bg-[#0B1324] border border-blue-600/30 p-8 hover:border-blue-500/60 transition-all duration-300 shadow-xl flex flex-col justify-start h-full">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-white font-display mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
                {withDetails && (
                  <div className="mt-5 pt-4 border-t border-white/10 text-xs uppercase tracking-[0.2em] text-sky-300/80">
                    Advisory • Design • Delivery
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}