import type { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";
import { BreadcrumbJsonLd, ServicesJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Construction, commercial cleaning, custom software development, mobile app development, and AI automation — nine services across three pillars.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
        ]}
      />

      <section className="bg-navy">
        <div className="container-page section-y">
          <p className="text-sm font-semibold uppercase tracking-wide text-steel-300">
            Services
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Everything it takes to build, run, and modernize your
            organization
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Construction and facilities, software and mobile products, and AI
            automation — scoped, delivered, and supported by one team.
          </p>
        </div>
      </section>

      <ServicesGrid withDetails />
      <CTASection />
    </>
  );
}
