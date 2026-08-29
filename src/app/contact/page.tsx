import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute consultation with Spectrunex about construction, cleaning, software, mobile apps, or AI automation.",
  alternates: { canonical: "/contact" },
};

const details = [
  {
    icon: MapPin,
    label: "Office",
    value: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri, 8:00 AM – 6:00 PM",
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

      <section className="bg-navy">
        <div className="container-page section-y">
          <p className="text-sm font-semibold uppercase tracking-wide text-steel-300">
            Contact
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s talk about your project
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Free 30-minute consultation, no obligation. Tell us what
            you&apos;re building, maintaining, or automating.
          </p>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-25 p-8 shadow-card">
              <h2 className="font-display text-lg font-bold text-navy-800">
                Reach us directly
              </h2>
              <ul className="mt-6 space-y-5">
                {details.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-navy-800 text-white">
                      <detail.icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-sm text-navy-700 hover:text-steel-600"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm text-navy-700">{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
