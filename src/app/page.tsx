import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PillarsSection from "@/components/PillarsSection";
import StatsSection from "@/components/StatsSection";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";
import { ServicesJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Construction, Cleaning, Software & AI Automation`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <ServicesJsonLd />
      <Hero />
      <StatsSection />
      <PillarsSection />
      <ServicesGrid />
      <CTASection />
    </>
  );
}
