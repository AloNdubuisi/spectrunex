// src/app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import RecommendedSection from "@/components/RecommendedSection";
import AIWorldSection from "@/components/AIWorldSection";
import PlatformsOverview from "@/components/PlatformsOverview";
import AnalystSection from "@/components/AnalystSection";
import ThreatRadarSection from "@/components/ThreatRadarSection";
import IdentitySection from "@/components/IdentitySection";
import PillarsSection from "@/components/PillarsSection";
import OutcomesSection from "@/components/OutcomesSection";
import CustomerSuccessSection from "@/components/CustomerSuccessSection";
import ThreatIntelGridSection from "@/components/ThreatIntelGridSection";
import CustomerLogoWall from "@/components/CustomerLogoWall";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Spectrunex | Secure. Compliant. Ready to Scale.",
  description: "Spectrunex helps organizations achieve FedRAMP, DoD DISA PA, CMMC, and other federal and state compliance.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <RecommendedSection />
      <AIWorldSection />
      <PlatformsOverview />
      <AnalystSection />
      <ThreatRadarSection />
      <IdentitySection />
      <PillarsSection />
      <OutcomesSection />
      <CustomerSuccessSection />
      <ThreatIntelGridSection />
      <CustomerLogoWall />
      <ServicesGrid />
      <CTASection />
    </>
  );
}