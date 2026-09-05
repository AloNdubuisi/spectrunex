// src/app/network-security/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowRight, Cpu, Lock, Cloud } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import VideoHeroSection from "@/components/VideoHeroSection";
// import InsightsCarousel from "@/components/Insightscarousel";
// import CTASection from "@/components/CTASection";
import AnimatedNetworkBanner from "@/components/AnimatedNetworkBanner";
import PlatformApproachSection from "@/components/PlatformApproachSection";
import CustomerStoriesAccordion from "@/components/CustomerStoriesAccordion";
import IndustryValidationSection from "@/components/IndustryValidationSection";
import DiveDeeperSection from "@/components/DiveDeeperSection";
import EngageWithUsSection from "@/components/EngageWithUsSection";
import ReadyToMeetYouSection from "@/components/ReadyToMeetYouSection";


export const metadata: Metadata = {
    title: "AI-Powered Network Security | Spectrunex",
    description: "Secure everyone and everything from the latest threats with AI-powered Zero Trust network security, NGFW, and SASE platforms.",
};

const networkPillars = [
    {
        title: "Next-Generation Firewalls (NGFW)",
        desc: "Industry-first ML-powered NGFWs that inspect all traffic, decrypt TLS/SSL at scale, and stop zero-day threats inline.",
        icon: <Shield className="h-6 w-6 text-blue-400" />,
    },
    {
        title: "SASE",
        desc: "A comprehensive SASE solution, natively converging SD-WAN and security in a global cloud-delivered architecture.",
        icon: <Cloud className="h-6 w-6 text-blue-400" />,
    },
    {
        title: "AI-Powered Threat Prevention",
        desc: "Inline deep learning and machine learning models analyze threats in real time, neutralizing attacks before they impact operations.",
        icon: <Cpu className="h-6 w-6 text-blue-400" />,
    },
    {
        title: "Zero Trust Network Access (ZTNA 2.0)",
        desc: "Least-privilege access enforcement with continuous trust verification and continuous app-to-app inspection.",
        icon: <Lock className="h-6 w-6 text-blue-400" />,
    },
];

/* PLACEHOLDER — the original array here cited real, specific "2025/2026
   Gartner® Magic Quadrant™" and "Forrester Wave™" placements. Those are
   real analysts' real reports; claiming a placement Spectrunex hasn't
   actually received is a false-claim problem, not a copy nicety. Swapped
   for a generic "what we'd feature here" shape — replace with actual,
   verifiable analyst or customer recognition once you have it. */
const analystReports = [
    {
        category: "Industry Recognition",
        title: "Independent evaluation — Hybrid Mesh Firewall",
        desc: "Add your own analyst placement or certification once confirmed.",
    },
    {
        category: "Industry Recognition",
        title: "Independent evaluation — SASE Platforms",
        desc: "Add your own analyst placement or certification once confirmed.",
    },
    {
        category: "Customer Proof",
        title: "Enterprise Firewall Deployment",
        desc: "Swap in a real case study or benchmark result once available.",
    },
];

export default function NetworkSecurityPage() {
    return (
        <div className="bg-[#050B14] text-white font-sans selection:bg-blue-600 selection:text-white">
            {/* Hero: now video-backed via VideoHeroSection, reusing this page's
                own headline/copy/CTA (not the component's generic defaults) so
                the section reads the same as before, just with motion behind it.
                posterSrc points at the same still you were already using as the
                <img> background, so the section still looks right even before a
                real video file exists — only videoSrc is a placeholder path you
                need to fill in (see note below). */}
            <VideoHeroSection
                eyebrow="AI-Powered Network Security"
                heading={
                    <>
                        If it&apos;s AI connected, <br />
                        <span className="text-blue-500">you&apos;re AI protected.</span>
                    </>
                }
                copy="Our Network Security Platform, powered by advanced, AI-driven threat prevention."
                primaryCta={{ label: "Discover our solutions", href: "/contact" }}
                secondaryCta={null}
                videoSrc="./assets/video/network-security-bg.mp4"
                posterSrc="./assets/img/network-bg.webp"
            />

            {/* Trust Security feature strip: NOT a full-bleed edge-to-edge
                split — the photo is a smaller, contained tile that sits
                inside the same container-page padding as everything else on
                the page (so it lines up with the hero text/logo's left edge,
                not the viewport edge), with the heading beside it. */}
            <section className="border-b border-white/10 bg-[#050B14]">
                <div className="container-page py-16 lg:py-20">
                    <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
                        <div className="w-full max-w-md shrink-0 lg:w-2/5">
                            <img
                                src="./assets/img/dg-banner.webp"
                                alt="A professional checking his phone in front of an office building"
                                className="h-[260px] w-full object-cover sm:h-[320px]"
                            />
                        </div>
                        <ScrollReveal speed="fast" animation="fade-up">
                            <h2 className="max-w-lg font-display text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                                Automate certificate lifecycles with Next Generation Trust Security.
                            </h2>
                            <Link
                                href="/contact"
                                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700"
                            >
                                Learn how <ArrowRight className="h-4 w-4" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="border-b border-white/10 bg-[#03070E] py-16">
                <div className="container-page">
                    <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4 md:text-left">
                        <ScrollReveal speed="fast" animation="zoom-in">
                            <div className="mb-2 font-display text-4xl font-black text-blue-500 sm:text-5xl">95%</div>
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Of the Fortune 100 Protected</div>
                        </ScrollReveal>
                        <ScrollReveal speed="fast" animation="zoom-in" delay={0.05}>
                            <div className="mb-2 font-display text-4xl font-black text-blue-500 sm:text-5xl">70K+</div>
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Global Enterprise Customers</div>
                        </ScrollReveal>
                        <ScrollReveal speed="fast" animation="zoom-in" delay={0.1}>
                            <div className="mb-2 font-display text-4xl font-black text-blue-500 sm:text-5xl">30.9B</div>
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Inline Threats Blocked Daily</div>
                        </ScrollReveal>
                        <ScrollReveal speed="fast" animation="zoom-in" delay={0.15}>
                            <div className="mb-2 font-display text-4xl font-black text-blue-500 sm:text-5xl">100%</div>
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Zero Trust Architecture Coverage</div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
            {/* Animated Network Banner */}
            <AnimatedNetworkBanner />
            {/* Platform Approach Section */}
            <PlatformApproachSection />
            {/* Customer Stories Accordion */}
            <CustomerStoriesAccordion />
            {/* Industry Validation Section */}
            <IndustryValidationSection />
            {/* Dive Deeper Section */}
            <DiveDeeperSection />
            {/* Engage With Us Section */}
            <EngageWithUsSection />
            {/* Ready To Meet You Section */}
            <ReadyToMeetYouSection />
        </div>
    );
}