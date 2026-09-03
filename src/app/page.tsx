// src/app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PlatformsSection from "@/components/PlatformsSection";
import CustomerLogosSection from "@/components/CustomerLogosSection";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";
import StatisticsSection from "@/components/StatsSection";

export const metadata: Metadata = {
  title: "Spectrunex | Leader in Cybersecurity & Precision AI™",
  description: "Spectrunex helps organizations achieve FedRAMP, DoD DISA PA, CMMC, and other federal and state compliance while delivering enterprise-grade cybersecurity.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PlatformsSection />
      <StatisticsSection />
      <CustomerLogosSection />
      <ServicesGrid />
      <CTASection />
    </>
  );
}