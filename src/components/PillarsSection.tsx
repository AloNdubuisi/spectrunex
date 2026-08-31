// src/components/PillarsSection.tsx
import { Check, ClipboardList, CheckCircle2, Shield, Lock, GraduationCap, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

type ThemeKey = "blue" | "teal" | "orange";

const themes: Record<ThemeKey, {
  cardBg: string;
  cardBorder: string;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  divider: string;
  checkBg: string;
}> = {
  blue: {
    cardBg: "bg-blue-50/70",
    cardBorder: "border-blue-100",
    iconBg: "bg-blue-100",
    iconBorder: "border-blue-200/70",
    iconColor: "text-blue-600",
    divider: "bg-blue-200/80",
    checkBg: "bg-blue-600",
  },
  teal: {
    cardBg: "bg-teal-50/70",
    cardBorder: "border-teal-100",
    iconBg: "bg-teal-100",
    iconBorder: "border-teal-200/70",
    iconColor: "text-teal-600",
    divider: "bg-teal-200/80",
    checkBg: "bg-teal-500",
  },
  orange: {
    cardBg: "bg-orange-50/70",
    cardBorder: "border-orange-100",
    iconBg: "bg-orange-100",
    iconBorder: "border-orange-200/70",
    iconColor: "text-orange-700",
    divider: "bg-orange-200/80",
    checkBg: "bg-orange-500",
  },
};

const pillars: {
  theme: ThemeKey;
  title: string;
  description: string;
  icon: (colorClass: string) => JSX.Element;
  bullets: string[];
}[] = [
  {
    theme: "blue",
    title: "Compliance & Authorization",
    description: "FedRAMP®, DoD DISA, CMMC readiness, scoping, gaps, remediation.",
    icon: (color) => (
      <span className="relative inline-flex h-7 w-7 items-center justify-center">
        <ClipboardList className={`h-7 w-7 ${color}`} strokeWidth={1.75} />
        <CheckCircle2
          className={`h-3.5 w-3.5 ${color} absolute -bottom-1 -right-1 rounded-full bg-white`}
          strokeWidth={2.5}
        />
      </span>
    ),
    bullets: ["FedRAMP Readiness", "CMMC Preparation", "DoD DISA PA Support", "Audit Prep"],
  },
  {
    theme: "teal",
    title: "Cybersecurity & Risk",
    description: "Offensive/defensive security, managed security, risk prioritization.",
    icon: (color) => (
      <span className="relative inline-flex h-7 w-7 items-center justify-center">
        <Shield className={`h-7 w-7 ${color}`} strokeWidth={1.75} />
        <Lock className={`h-3 w-3 ${color} absolute`} strokeWidth={2.5} />
      </span>
    ),
    bullets: ["Penetration Testing", "Risk Assessments", "Managed Security", "Vulnerability Mgmt"],
  },
  {
    theme: "orange",
    title: "Build & Enable",
    description: "Secure app dev, staffing, and training to scale your mission.",
    icon: (color) => (
      <span className="relative inline-flex h-7 w-7 items-end justify-center">
        <GraduationCap className={`h-6 w-6 ${color} absolute -top-1`} strokeWidth={1.75} />
        <Users className={`h-4 w-4 ${color} absolute bottom-0`} strokeWidth={1.75} />
      </span>
    ),
    bullets: ["Secure Development", "IT Staffing", "Training Programs", "DevSecOps"],
  },
];

export default function PillarsSection() {
  return (
    <section className="py-20 bg-white text-slate-900 font-sans">
      <div className="container-page">
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">
              FAST CLARITY. REAL RESULTS.
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-display">
              Three pillars that drive enterprise security and compliance success
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const t = themes[pillar.theme];
            return (
              <ScrollReveal key={idx} delay={idx * 0.15} speed="normal" animation="zoom-in">
                <div
                  className={`h-full rounded-2xl border ${t.cardBorder} ${t.cardBg} p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between`}
                >
                  <div>
                    <div
                      className={`h-14 w-14 rounded-full ${t.iconBg} border ${t.iconBorder} flex items-center justify-center mb-6`}
                    >
                      {pillar.icon(t.iconColor)}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-display">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                    <div className={`my-6 h-px w-full ${t.divider}`} />
                    <ul className="space-y-3">
                      {pillar.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-center gap-2.5 text-sm font-medium text-slate-800"
                        >
                          <span
                            className={`h-4 w-4 rounded-full ${t.checkBg} flex items-center justify-center flex-shrink-0`}
                          >
                            <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}