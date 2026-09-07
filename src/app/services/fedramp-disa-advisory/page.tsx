// src/app/services/fedramp-disa-advisory/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "FedRAMP & DoD DISA Advisory Services | Spectrunex",
  description: "Independent advisors helping organizations prepare cloud services for FedRAMP and DoD DISA consulting, assessment, and authorization.",
};

export default function FedrampDisaAdvisoryPage() {
  return (
    <div className="bg-[#050B14] text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* Hero Banner */}
      <section className="relative h-[360px] sm:h-[420px] overflow-hidden bg-[#0B0E14] flex items-center justify-center">
        <img
          src="/assets/img/services-bg.jpg"
          alt="FedRAMP Advisory"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent" />
        <div className="container-page relative z-10 text-center">
          <ScrollReveal animation="fade-up" speed="fast">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 block">
              AUTHORIZATION READINESS
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white max-w-3xl mx-auto leading-tight mb-6">
              FedRAMP & DoD DISA® Advisory Services That Accelerate Your Path to Authorization
            </h1>
            <Link className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition shadow-lg shadow-blue-600/30" href="/contact">
              Connect With Us <ArrowRight className="h-4 w-4"/>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro Overview Box */}
      <section className="py-16 bg-[#03070E] border-b border-white/10">
        <div className="container-page max-w-4xl">
          <ScrollReveal animation="fade-up" speed="normal">
            <div className="rounded-2xl bg-[#0B1324] border border-blue-900/60 p-8 sm:p-10 shadow-xl">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                Spectrunex&apos;s independent advisors can help your organization prepare your cloud service for FedRAMP & DoD DISA consulting, assessment, and authorization. Your FedRAMP consultant will lead you through the FedRAMP lifecycle and assist with establishing go-to-market strategies, boundary scoping, identifying gaps in compliance, remediation and architecture support, and navigating the assessment.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Customized Services & Two-Column Split */}
      <section className="py-24 border-b border-white/10">
        <div className="container-page">
          <ScrollReveal animation="fade-up" speed="fast">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white mb-4">
                Our Customized FedRAMP & DoD DISA Advisory Services
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <ScrollReveal animation="slide-left" className="lg:col-span-7 space-y-4" speed="normal">
              {[
                "Business case analysis to help determine the cost-benefit justification of achieving FedRAMP & DoD DISA authorization of your solution",
                "Establishment of a go-to-market strategy for your cloud products in the federal marketplace",
                "Assistance with navigating conversations with potential agency sponsors",
                "Security control implementation analysis, review, and remediation support",
                "Creation of a roadmap for FedRAMP & DoD DISA authorization to get you to market faster",
                "Technical architecture reviews and design support",
                "FedRAMP & DoD DISA security documentation development",
                "Assistance during 3PAO assessment with artifact collection, interviews, plan of action and milestones (POA&M) development, and documentation updates",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5"/>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal animation="slide-right" className="lg:col-span-5" speed="normal">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B1324]">
                <img
                  src="/assets/img/services-consulting.jpg"
                  alt="Advisors meeting"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Gap Analysis & Documentation Support Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal animation="zoom-in" className="h-full" speed="normal">
              <div className="rounded-2xl bg-[#0B1324] border border-white/10 p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-4">
                    FedRAMP & DoD Gap Analysis
                  </h3>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    Our experienced advisory team conducts several days of analysis and review, then advises project stakeholders about key steps in the lifecycle. Review process includes:
                  </p>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li>• Overview of FedRAMP & DoD DISA processes & paths</li>
                    <li>• Boundary scoping to ensure all interconnections are identified</li>
                    <li>• Analysis and review of security control implementations</li>
                    <li>• Recommendations for all unmet requirements</li>
                    <li>• Roadmap establishment for authorization readiness</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="zoom-in" className="h-full" speed="normal">
              <div className="rounded-2xl bg-[#0B1324] border border-white/10 p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-4">
                    FedRAMP & DoD Advisory & Documentation Support
                  </h3>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    We map each advisory service to a specific step of the FedRAMP process. Complete required documentation package includes:
                  </p>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li>• System Security Plan (SSP) & Information Security Policies</li>
                    <li>• Contingency Plan & Incident Response Plan</li>
                    <li>• Configuration Management Plan</li>
                    <li>• Digital Identity Workbook & Rules of Behavior</li>
                    <li>• FIPS 199 Security Categorization & Control Summary</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us & CTA */}
      <section className="py-24 bg-[#03070E]">
        <div className="container-page text-center max-w-3xl mx-auto">
          <ScrollReveal animation="fade-up" speed="fast">
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white mb-6">
              Why Choose Spectrunex for Your FedRAMP & DoD DISA Consultant?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10">
              We have helped numerous CSPs attain a FedRAMP ATO and DoD PA than many others in the industry. Our teams are highly experienced and well versed in NIST SP 800-53 and Department of Defense (DoD PA) requirements and how they relate to commercial cloud environments.
            </p>
            <Link className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-8 py-4 text-sm font-bold text-white transition shadow-lg shadow-blue-600/30" href="/contact">
              Connect With Us <ArrowRight className="h-4 w-4"/>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* <CTASection/> */}
    </div>
  );
}