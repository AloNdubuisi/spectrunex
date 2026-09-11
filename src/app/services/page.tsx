// src/app/services/page.tsx
import type { Metadata } from "next";
import ServicesOverviewSection from "@/components/ServicesOverviewSection";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

/* Rebuilt to match the reference Services page 1:1, replacing the previous
   card-grid + CTA + identity-section composition entirely (per request:
   "redesign and replicate the ENTIRE services page to match exactly this
   UI 100%" — the reference page is just the hero + image row + text
   columns below, nothing else, so ServicesGrid/RecommendedSection/
   CTASection/IdentitySection are no longer rendered here). They're still
   available as components if you want a CTA back on this page later.

   The old metadata also had third-party vendor product names baked into
   it — the same category of issue flagged throughout this project, just
   surfaced in page <meta> rather than visible copy. Replaced with copy
   describing Spectrunex's own services. Breadcrumb label updated from
   "Platforms & Solutions" to "Services" to match this page's heading. */

export const metadata: Metadata = {
  title: "Services | Spectrunex",
  description:
    "Explore Spectrunex's FedRAMP & DoD DISA advisory, cybersecurity staffing, and information assurance services for Federal, State, and private-sector customers.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
        ]}
      />

      <ServicesOverviewSection />
    </>
  );
}