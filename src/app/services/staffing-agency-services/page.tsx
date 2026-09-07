// src/app/services/staffing-agency-services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Cybersecurity Staffing Agency Services | Spectrunex",
  description: "Bridging the gap between talent and opportunity in cybersecurity through tailored staffing, training, and recruitment solutions.",
};

export default function StaffingAgencyPage() {
  return (
    <div className="bg-[#050B14] text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* Hero Banner */}
      <section className="relative h-[360px] sm:h-[420px] overflow-hidden bg-[#0B0E14] flex items-center justify-center">
        <img
          src="/assets/img/services-bg.jpg"
          alt="Staffing Agency"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent" />
        <div className="container-page relative z-10 text-center">
          <ScrollReveal animation="fade-up" speed="fast">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 block">
              WORKFORCE SOLUTIONS
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white max-w-3xl mx-auto leading-tight mb-6">
              Staffing Agency Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Spectrunex bridges the gap between talent and opportunity in cybersecurity through tailored staffing, training, and recruitment services.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Not Your Average Staffing Agency */}
      <section className="py-24 border-b border-white/10">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal animation="slide-left" className="lg:col-span-7 space-y-6" speed="normal">
              <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
                Not Your Average Staffing Agency
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                At Spectrunex, we&apos;re not just a staffing agency, we&apos;re your strategic partner in workforce management. Our end-to-end solutions go beyond simply identifying talent. We expertly manage the entire process, including talent search, candidate curation, and seamless onboarding support.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  { title: "Unmatched Expertise", desc: "Our team of experienced recruiters specialize in sourcing talent across all skill sets and industries." },
                  { title: "Global Reach", desc: "With the ability to source talent in more than 50 countries, we deliver international staffing solutions tailored to both small scale and large scale operations." },
                  { title: "Flexible and Cost Effective", desc: "We&apos;ll work within your budget, and you only pay after your candidate starts, ensuring a risk-free experience." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-1"/>
                    <div>
                      <h4 className="font-bold text-white text-base">{item.title}</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition shadow-lg shadow-blue-600/30" href="/contact">
                  Submit a Staffing Request <ArrowRight className="h-4 w-4"/>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-right" className="lg:col-span-5" speed="normal">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B1324]">
                <img
                  src="/assets/img/services-staffing.jpg"
                  alt="Team reviewing hiring"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Spectrunex for Staffing */}
      <section className="py-24 bg-[#03070E]">
        <div className="container-page text-center max-w-3xl mx-auto">
          <ScrollReveal animation="fade-up" speed="fast">
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white mb-6">
              Why Choose Spectrunex for Cybersecurity Staffing?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10">
              Whether you&apos;re an employer or a job seeker in the public or private sector, partnering with a specialized cybersecurity staffing agency like Spectrunex offers unmatched benefits.
            </p>
            <Link className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-8 py-4 text-sm font-bold text-white transition shadow-lg shadow-blue-600/30" href="/contact">
              Get Started Today <ArrowRight className="h-4 w-4"/>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* <CTASection/> */}
    </div>
  );
}