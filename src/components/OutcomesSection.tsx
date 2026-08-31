// src/components/OutcomesSection.tsx
import {
  ShieldCheck,
  ClipboardCheck,
  Clock,
  BarChart3,
  ArrowUpRight,
  Handshake,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const outcomes = [
  {
    icon: <ShieldCheck className="h-9 w-9 text-blue-600" strokeWidth={1.5} />,
    title: "Risk Reduced",
    desc: "Identify & mitigate threats early",
  },
  {
    icon: <ClipboardCheck className="h-9 w-9 text-blue-600" strokeWidth={1.5} />,
    title: "Audit Ready",
    desc: "Documentation that stands up to scrutiny",
  },
  {
    icon: <Clock className="h-9 w-9 text-blue-600" strokeWidth={1.5} />,
    title: "Faster Authorization",
    desc: "Accelerate ATOs & certifications",
  },
  {
    icon: (
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <BarChart3 className="h-9 w-9 text-blue-600" strokeWidth={1.5} />
        <ArrowUpRight
          className="absolute -top-1 -right-1 h-4 w-4 text-blue-600"
          strokeWidth={2.5}
        />
      </span>
    ),
    title: "Lower Cost",
    desc: "Avoid rework and compliance delays",
  },
  {
    icon: <Handshake className="h-9 w-9 text-blue-600" strokeWidth={1.5} />,
    title: "Trusted Partner",
    desc: "Experienced, mission-focused team",
  },
  {
    icon: <Users className="h-9 w-9 text-blue-600" strokeWidth={1.5} />,
    title: "Scale With Confidence",
    desc: "Solutions that grow with your mission",
  },
];

export default function OutcomesSection() {
  return (
    <section className="py-16 bg-[#F1F5F9] text-slate-900 font-sans border-y border-slate-200">
      <div className="container-page">
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
              What You Actually Get
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Outcomes that matter to your organization
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:divide-x lg:divide-slate-200">
          {outcomes.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} speed="normal" animation="fade-up">
              <div
                className="flex flex-col items-center text-center px-6 py-6 h-full"
              >
                <div className="h-12 w-12 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm text-slate-900 mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-normal">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}