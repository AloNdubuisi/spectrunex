import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Youtube,
  Globe,
  ShieldCheck,
  Lock,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#05070B] border-t border-pan-dark-border text-slate-300 font-sans">
      {/* Top Compliance & Certification Seals Banner */}
      <div className="border-b border-pan-dark-border bg-[#080B10] py-6">
        <div className="container-page flex flex-wrap items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-pan-orange" />
            <span className="font-semibold text-white">ENTERPRISE COMPLIANCE SEALS:</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px]">
            <span className="flex items-center gap-1 text-slate-300">
              <CheckCircle className="h-3.5 w-3.5 text-emerald-400" /> FedRAMP High Authorized
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <CheckCircle className="h-3.5 w-3.5 text-emerald-400" /> SOC 2 Type II Certified
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <CheckCircle className="h-3.5 w-3.5 text-emerald-400" /> ISO/IEC 27001
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <CheckCircle className="h-3.5 w-3.5 text-emerald-400" /> HIPAA &amp; GDPR Compliant
            </span>
          </div>
        </div>
      </div>

      {/* Main 5-Column Navigation Grid */}
      <div className="container-page py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Column 1: Brand & Platforms */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-pan-orange mb-4">
            Products &amp; Platforms
          </h3>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link href="/services" className="hover:text-white transition">
                Strata™ Next-Gen Firewalls
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Strata Cloud Manager
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Prisma® Cloud (CNAPP)
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Prisma AIRS (AI Security)
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Cortex® XSIAM SecOps
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Cortex XDR &amp; XSOAR
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition text-pan-cyan font-semibold">
                Precision AI™ Copilots
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Solutions */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
            Solutions
          </h3>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link href="/services" className="hover:text-white transition">
                Secure AI by Design
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Zero Trust Enterprise
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Cloud Security &amp; DevSecOps
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Autonomous SOC Transformation
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Ransomware &amp; Extortion Defense
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Hybrid Workforce &amp; SASE
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Threat Research */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
            Unit 42® Research
          </h3>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link href="/services" className="hover:text-white transition">
                Live Global Threat Radar
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                2026 Threat Reports
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Security Advisories &amp; CVEs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition text-red-400 font-semibold">
                Emergency Incident Hotline
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Cyber Risk Retainer
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Threat Briefings &amp; Podcasts
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Services & Support */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
            Services &amp; Support
          </h3>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link href="/services" className="hover:text-white transition">
                Professional Security Consulting
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Managed Threat Hunting (MDR)
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Cyber Range &amp; Education
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Customer Support Portal
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Technical Documentation
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Partner Ecosystem
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5: Company & Direct Contact */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
            Company
          </h3>
          <ul className="space-y-2.5 text-xs mb-6">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Spectrunex
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                Leadership &amp; Board
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                Newsroom &amp; Press
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                Careers &amp; Culture
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Global Sales
              </Link>
            </li>
          </ul>

          <div className="space-y-2 text-xs text-slate-400 pt-2 border-t border-pan-dark-border">
            <p className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-pan-orange" />
              <span>1-800-732-8786</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-pan-orange" />
              <span>contact@spectrunex.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Social & Legal Bar */}
      <div className="border-t border-pan-dark-border bg-[#030508] py-8">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-display font-black tracking-wider text-white text-sm uppercase">
                SPECTRU<span className="text-pan-orange">NEX</span>
              </span>
            </Link>
            <span>
              © {year} {siteConfig.legalName}. All rights reserved.
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spectrunex on LinkedIn"
              className="p-2 rounded-full border border-pan-dark-border hover:border-pan-orange hover:text-white transition"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spectrunex on X"
              className="p-2 rounded-full border border-pan-dark-border hover:border-pan-orange hover:text-white transition"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spectrunex on YouTube"
              className="p-2 rounded-full border border-pan-dark-border hover:border-pan-orange hover:text-white transition"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link href="/contact" className="hover:text-white transition">
              Privacy Statement
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Trust Center
            </Link>
            <Link href="/contact" className="hover:text-white transition flex items-center gap-1">
              <Globe className="h-3.5 w-3.5 text-pan-cyan" /> Region: United States
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
