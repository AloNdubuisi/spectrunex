import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PillarsSection from "@/components/PillarsSection";
import OutcomesSection from "@/components/OutcomesSection";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spectrunex | Secure. Compliant. Ready to Scale.",
  description: "Spectrunex helps organizations achieve FedRAMP, DoD DISA PA, CMMC, and other federal and state compliance.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PillarsSection />
      <OutcomesSection />
      <ServicesGrid />
      <CTASection />
    </>
  );
}