// src/components/AnalystSection.tsx
import { Award, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const analysts = [
  {
    organization: "Gartner®",
    title: "Magic Quadrant™ Leader",
    description: "Recognized as a Leader in Network Firewalls and Cloud Security Platforms for consecutive years.",
    badge: "Industry Benchmark",
  },
  {
    organization: "Forrester Wave™",
    title: "Zero Trust Platforms Leader",
    description: "Cited for exceptional zero trust architecture, comprehensive telemetry, and automated threat prevention.",
    badge: "Top Evaluation",
  },
  {
    organization: "Unit 42®",
    title: "Global Threat Intelligence",
    description: "Unmatched proprietary telemetry tracking advanced persistent threats and nation-state cyber campaigns.",
    badge: "Research Excellence",
  },
];

export default function AnalystSection() {
  return (
    <section className="py-24 bg-[#050B14] text-white font-sans border-b border-white/10">
      <div className="container-page">
        <ScrollReveal speed="fast" animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
              <Award className="h-3.5 w-3.5" />
              <span>Analyst Validation &amp; Recognition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display">
              Validated by Leading Industry Analysts
            </h2>
            <p className="mt-4 text-slate-300 text-base">
              Independent recognition of our unwavering commitment to enterprise cyber protection and innovation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {analysts.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.12} speed="normal" animation="zoom-in" className="h-full">
              <div className="rounded-2xl bg-[#0B1324] border border-white/10 p-8 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between h-full shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">
                      {item.organization}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-white mb-3 font-display">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5">
                  <Link
                    href="/contact"
                    className="text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition inline-flex items-center gap-1.5"
                  >
                    Read Analyst Report <ArrowRight className="h-3.5 w-3.5" />
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