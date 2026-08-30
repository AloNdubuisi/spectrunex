import Link from "next/link";
import {
  Shield,
  Cloud,
  Cpu,
  Sparkles,
  Lock,
  Zap,
  Radio,
  FileCheck,
  Server,
  ArrowRight,
} from "lucide-react";
import { flagshipPlatforms } from "@/lib/site";

export default function ServicesGrid({ withDetails = false }: { withDetails?: boolean }) {
  return (
    <section className="py-24 bg-[#070A0F] text-white font-sans border-b border-pan-dark-border">
      <div className="container-page">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-pan-orange/40 bg-pan-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-pan-orange mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Product &amp; Solution Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display">
            Comprehensive enterprise cybersecurity platforms
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            From Next-Gen Firewalls to Cloud Native application defense and autonomous SecOps, explore the complete portfolio.
          </p>
        </div>

        <div className="space-y-16">
          {flagshipPlatforms.map((platform) => (
            <div
              key={platform.id}
              id={platform.id}
              className="rounded-3xl bg-[#0F141E] border border-pan-dark-border p-8 sm:p-12 hover:border-pan-orange/40 transition-all duration-300 shadow-2xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-pan-dark-border">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-pan-orange font-mono">
                      {platform.badge}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Precision AI™ Enabled
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white font-display">
                    {platform.trademark} — {platform.eyebrow}
                  </h3>
                  <p className="text-slate-300 text-base mt-2 max-w-2xl">
                    {platform.description}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-pan-orange hover:bg-pan-orange-hover px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition shadow-lg shadow-pan-orange/20"
                  >
                    Request Demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Detailed Platform Capabilities */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {platform.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-[#090D14] border border-pan-dark-border p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-8 w-8 rounded-lg bg-pan-cyan/10 text-pan-cyan flex items-center justify-center mb-3">
                        <Lock className="h-4 w-4" />
                      </div>
                      <h4 className="font-bold text-sm text-white mb-1">
                        {feature}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Automated zero-day prevention and unified policy orchestration.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span>Telemetry: Active</span>
                      <span className="text-emerald-400">99.9% Sla</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
