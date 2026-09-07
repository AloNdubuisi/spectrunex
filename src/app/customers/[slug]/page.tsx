// src/app/customers/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Shield, Building2, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";

const caseStudiesData: Record<string, {
  company: string;
  industry: string;
  title: string;
  subtitle: string;
  metricValue: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  results: string[];
  quote: string;
  attribution: string;
  image: string;
}> = {
  "apex-defense": {
    company: "Apex Defense Systems",
    industry: "Defense & Federal Contracting",
    title: "Achieving CMMC Level 2 Readiness & Continuous Compliance",
    subtitle: "How a premier defense contractor streamlined audit preparation and secured critical infrastructure with Spectrunex.",
    metricValue: "60%",
    metricLabel: "Reduction in Audit Preparation Time",
    challenge: "Apex Defense Systems faced stringent cybersecurity maturation mandates under CMMC Level 2 and NIST SP 800-171. Managing disparate contractor endpoints and legacy compliance documentation introduced manual errors, slow remediation cycles, and high exposure risk during federal audits.",
    solution: "By deploying Spectrunex's integrated security architecture and automated compliance posture monitoring, Apex unified their asset inventory, implemented automated policy enforcement, and established real-time telemetry across all operational boundaries.",
    results: [
      "Achieved full readiness and ATO authorization 4 months ahead of schedule.",
      "Eliminated manual spreadsheet tracking in favor of automated continuous compliance controls.",
      "Secured controlled unclassified information (CUI) across distributed contractor environments."
    ],
    quote: "Spectrunex transformed our compliance posture, reducing audit preparation timelines by over 60% while strengthening our overall security perimeter against advanced threat vectors.",
    attribution: "Chief Information Security Officer, Apex Defense Systems",
    image: "/assets/img/customer-story-1.jpg",
  },
  "meridian-financial": {
    company: "Meridian Financial Group",
    industry: "Financial Services",
    title: "Transforming the SOC with Autonomous Threat Triage",
    subtitle: "Eliminating alert fatigue and accelerating mean time to remediation (MTTR) across global banking operations.",
    metricValue: "85%",
    metricLabel: "Faster Incident Investigation",
    challenge: "As a leading financial institution, Meridian processed millions of security events daily. Their legacy security operations center (SOC) was plagued by alert fatigue, manual triage delays, and siloed telemetry tools that hindered rapid threat containment.",
    solution: "Meridian integrated Spectrunex's AI-driven Security Operations platform, leveraging unified data lakes and autonomous investigation playbooks to automatically correlate alerts and neutralize sophisticated malware variants in seconds.",
    results: [
      "Reduced Mean Time to Remediation (MTTR) by 85% across global branches.",
      "Automated over 90% of routine Tier-1 alert triage and data enrichment workflows.",
      "Significantly enhanced analyst retention by eliminating repetitive alert review tasks."
    ],
    quote: "We’ve cut our mean time to remediation (MTTR) dramatically. The platform handles alert noise reduction effortlessly, allowing our core analysts to focus strictly on active, high-priority investigations.",
    attribution: "VP of Global Security Operations, Meridian Financial Group",
    image: "/assets/img/customer-story-2.jpg",
  },
  "horizon-cloud": {
    company: "Horizon Cloud Logistics",
    industry: "Global Cloud Logistics & Supply Chain",
    title: "Securing Multi-Cloud Infrastructure from Code to Runtime",
    subtitle: "Enforcing Zero Trust network access and comprehensive CNAPP protection across multi-cloud supply chains.",
    metricValue: "100%",
    metricLabel: "Code-to-Cloud Visibility",
    challenge: "Horizon Cloud Logistics scaled rapidly across AWS, Azure, and Kubernetes clusters, creating blind spots in cloud configurations, container registries, and API endpoints that exposed customer logistics data to potential compromise.",
    solution: "Horizon deployed Spectrunex's real-time cloud security platform, integrating shift-left vulnerability scanning in developer pipelines with automated runtime protection and strict Zero Trust network segmentation.",
    results: [
      "Achieved complete 100% code-to-cloud visibility across all multi-cloud environments.",
      "Blocked critical zero-day vulnerabilities in container images prior to production deployment.",
      "Maintained uninterrupted logistics uptime while enforcing strict least-privilege access."
    ],
    quote: "Platformization with Spectrunex gave us total visibility from code repositories to runtime production environments without introducing friction or slowing down developer velocity.",
    attribution: "Director of Cloud Architecture, Horizon Cloud Logistics",
    image: "/assets/img/customer-story-3.webp",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesData[slug];
  if (!study) return { title: "Case Study Not Found | Spectrunex" };
  return {
    title: `${study.title} | ${study.company} Case Study | Spectrunex`,
    description: study.subtitle,
  };
}

export default async function CustomerCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudiesData[slug];

  if (!study) {
    notFound();
  }

  return (
    <div className="bg-[#050B14] text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Breadcrumb Bar */}
      <div className="border-b border-white/10 bg-[#03070E] py-4">
        <div className="container-page">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-24 border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="container-page relative z-10">
          <ScrollReveal speed="fast" animation="fade-up">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-400 mb-6">
                <Building2 className="h-3.5 w-3.5" />
                <span>{study.industry} — {study.company}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display leading-[1.1] mb-6">
                {study.title}
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl">
                {study.subtitle}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Metric Banner */}
      <section className="py-12 bg-[#03070E] border-b border-white/10">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="font-display font-black text-5xl sm:text-6xl text-blue-500 mb-2">
                {study.metricValue}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {study.metricLabel}
              </div>
            </div>
            <div className="md:col-span-2 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
              <blockquote className="font-serif text-lg italic text-slate-200 leading-relaxed">
                &ldquo;{study.quote}&rdquo;
              </blockquote>
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-blue-400">
                {study.attribution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Body Content */}
      <section className="py-24 border-b border-white/10">
        <div className="container-page max-w-4xl">
          <div className="space-y-16">
            {/* Featured Image */}
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B1324]">
              <img
                src={study.image}
                alt={study.company}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>

            {/* The Challenge */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-white mb-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-500" /> The Challenge
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {study.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-white mb-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-500" /> The Spectrunex Solution
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {study.solution}
              </p>
            </div>

            {/* Business Impact & Results */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-white mb-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-500" /> Key Results & Impact
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {study.results.map((res, idx) => (
                  <div key={idx} className="flex items-start gap-4 rounded-2xl bg-[#0B1324] border border-white/10 p-6">
                    <CheckCircle2 className="h-6 w-6 text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-base text-slate-200 font-medium leading-relaxed">
                      {res}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <CTASection />
    </div>
  );
}