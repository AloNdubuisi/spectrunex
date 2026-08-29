import Link from "next/link";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, services, pillars } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-100 bg-navy text-slate-200">
      <div className="container-page grid grid-cols-1 gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <span className="font-display text-xl font-bold tracking-tight text-white">
            SPECTRUNEX
          </span>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {siteConfig.tagline} One partner for construction, cleaning,
            software, mobile, and AI automation.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={siteConfig.social.linkedin}
              aria-label="Spectrunex on LinkedIn"
              className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-steel-400 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.twitter}
              aria-label="Spectrunex on X"
              className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-steel-400 hover:text-white"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Services
          </h3>
          <ul className="mt-4 space-y-3">
            {services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services#${service.id}`}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Company
          </h3>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/about" className="text-sm text-slate-300 transition hover:text-white">
                About Spectrunex
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm text-slate-300 transition hover:text-white">
                All Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-slate-300 transition hover:text-white">
                Contact
              </Link>
            </li>
            {pillars.map((pillar) => (
              <li key={pillar.id}>
                <Link
                  href={`/services#${pillar.id}`}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {pillar.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-steel-400" />
              <span>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.region}{" "}
                {siteConfig.address.postalCode}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 flex-shrink-0 text-steel-400" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 flex-shrink-0 text-steel-400" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-slate-400 md:flex-row">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
