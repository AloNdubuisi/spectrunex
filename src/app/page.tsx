import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AIWorldSection from "@/components/AIWorldSection";
import PlatformsOverview from "@/components/PlatformsOverview";
import PrecisionAISimulator from "@/components/PrecisionAISimulator";
import ThreatRadarSection from "@/components/ThreatRadarSection";
import RecommendedSection from "@/components/RecommendedSection";
import AnalystSection from "@/components/AnalystSection";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Leader in Cybersecurity Protection & Precision AI™`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AIWorldSection />
      <PlatformsOverview />
      <PrecisionAISimulator />
      <ThreatRadarSection />
      <RecommendedSection />
      <AnalystSection />
      <CTASection />
    </>
  );
}