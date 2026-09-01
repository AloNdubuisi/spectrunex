// src/app/contact/page.tsx
import type { Metadata } from "next";
import { Mail, Phone, MapPin, Radio, ShieldAlert } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Enterprise Sales & Incident Response",
  description:
    "Connect with Spectrunex cybersecurity experts for technical demonstrations, platform architecture scoping, or emergency Unit 42 incident response.",
  alternates: { canonical: "/contact" },
};

const details = [
  {
    icon: Phone,
    label: "Global Enterprise Sales",
    value: "(202) 948-9063",
    href: "tel:(202) 948-9063",
    sub: "Toll-free North America",
  },
  {
    icon: ShieldAlert,
    label: "Unit 42 Emergency Hotline",
    value: "(202) 948-9063",
    href: "tel:(202) 948-9063",
    sub: "24/7/365 Rapid Breach Response",
  },
  {
    icon: Mail,
    label: "Direct Email Inquiry",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    sub: "Architecture & Partner Requests",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`,
    sub: "8101 Sandy Spring Rd, Laurel, MD 20707",
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ]}
      />

      <section className="bg-[#0B0E14] border-b border-white/10 py-24 font-sans relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="container-page relative z-10">
          <ScrollReveal speed="fast" animation="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
              <Radio className="h-3.5 w-3.5 animate-pulse" />
              <span>Connect with Cybersecurity Specialists</span>
            </div>
            <h1 className="max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Talk to an Enterprise Security Architect
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Learn how Strata, Prisma Cloud, and Cortex XSIAM can protect your multi-cloud environment and automate security operations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-[#070A0F] font-sans">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ScrollReveal speed="normal" animation="fade-up">
              <ContactForm />
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal speed="normal" animation="zoom-in">
              <div className="rounded-3xl border border-white/10 bg-[#0F141E] p-8 shadow-2xl">
                <h2 className="font-display text-xl font-bold text-white mb-6">
                  Direct Contact Channels
                </h2>
                <ul className="space-y-6">
                  {details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-4 pb-4 border-b border-white/10 last:border-0 last:pb-0">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-400">
                        <detail.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-base font-semibold text-white hover:text-blue-300 transition block mt-0.5"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-white mt-0.5">{detail.value}</p>
                        )}
                        <p className="text-xs text-slate-500 mt-0.5">{detail.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}