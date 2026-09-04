import type { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";
import RecommendedSection from "@/components/RecommendedSection";
import IdentitySection from "@/components/IdentitySection";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import { Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Cybersecurity Platforms & Solutions",
  description:
    "Explore Strata™ Network Security, Prisma® Cloud Security, and Cortex® Autonomous SecOps powered by Precision AI™.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Platforms & Solutions", url: `${siteConfig.url}/services` },
        ]}
      />

      <section className="bg-[#0B0E14] border-b border-pan-dark-border py-24 font-sans relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pan-orange/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="container-page relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-pan-cyan/40 bg-pan-cyan/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-pan-cyan mb-4">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Platform Portfolio</span>
          </div>
          <h1 className="max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Next-Generation Cybersecurity Platforms
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Engineered with deep learning, GenAI, and real-time telemetry to stop unknown threats before they disrupt your enterprise.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <RecommendedSection />
      <CTASection />
      <IdentitySection />
    </>
  );
}
