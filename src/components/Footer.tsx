"use client"
// src/components/Footer.tsx
import Link from "next/link";
import {
  Shield,
  Lock,
  Cpu,
  Globe,
  ArrowUpRight,
  Twitter,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ChevronRight
} from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Products & Platforms",
      links: [
        { label: "Network Security", href: "#" },
        { label: "Security Operations", href: "#" },
        { label: "Cloud Security", href: "#" },
        { label: "Identity Security", href: "#" },
        { label: "Threat Intelligence", href: "#" },
        { label: "Incident Response", href: "#" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "By Industry", href: "#" },
        { label: "By Use Case", href: "#" },
        { label: "Zero Trust", href: "#" },
        { label: "Cloud Security", href: "#" },
        { label: "AI Security", href: "#" },
        { label: "IoT Security", href: "#" },
      ],
    },
    {
      title: "Compliance & Advisory",
      links: [
        { label: "FedRAMP Authorization", href: "#" },
        { label: "DoD DISA PA / ILs", href: "#" },
        { label: "CMMC Readiness", href: "#" },
        { label: "Security Assessments", href: "#" },
        { label: "Risk Management", href: "#" },
        { label: "Compliance Consulting", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Learning Center", href: "#" },
        { label: "Blog & Insights", href: "#" },
        { label: "Events & Webinars", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Whitepapers", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Leadership", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Newsroom", href: "#" },
        { label: "Partners", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/spectrunex" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/spectrunex" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com/spectrunex" },
    { icon: Facebook, label: "Facebook", href: "https://facebook.com/spectrunex" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/spectrunex" },
  ];

  return (
    <footer className="bg-[#03070E] text-slate-400 font-sans border-t border-white/10">
      {/* Footer Top Section */}
      <div className="border-b border-white/10">
        <div className="container-page py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1D4ED8] text-white">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Need help? We're here for you.</h3>
                  <p className="text-sm text-slate-400">24/7/365 support from cybersecurity experts</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-pan-orange mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">Contact Sales</p>
                    <p className="text-sm text-slate-400">1-878-867-6643</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-pan-orange mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">Email Support</p>
                    <p className="text-sm text-slate-400">contracts@spectrunex.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:col-span-2">
                  <MapPin className="h-5 w-5 text-pan-orange mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-white">Spectrunex Office</p>
                    <p className="text-sm text-slate-400">3 Bethesda Metro Center, Suite 730, Bethesda, MD 20814</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:border-pan-orange/30 hover:bg-pan-orange/5">
                  <div>
                    <p className="font-medium text-white">Request a Demo</p>
                    <p className="text-xs text-slate-400">See our platforms in action</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-pan-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <div className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:border-pan-orange/30 hover:bg-pan-orange/5">
                  <div>
                    <p className="font-medium text-white">Support Portal</p>
                    <p className="text-xs text-slate-400">Get technical assistance</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-pan-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-page py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerLinks.map((column, index) => (
            <div key={index} className={index === 0 ? "col-span-2 md:col-span-3 lg:col-span-2" : ""}>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <span className="group flex cursor-default items-center text-sm text-slate-400 transition-colors hover:text-white">
                      <ChevronRight className="mr-2 h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                      {link.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 bg-[#02050A]">
        <div className="container-page py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand & Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Brand Logo */}
              <div className="flex h-10 w-10 items-center justify-center">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center">
                  <img
                    src="./logo.png"
                    alt="Spectrunex"
                    className="h-10 sm:h-10 w-auto object-contain"
                  />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <p>© {new Date().getFullYear()} Spectrunex Networks, LLC. All rights reserved.</p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full border border-pan-orange/30 bg-pan-orange/10 px-2 py-0.5 text-[10px] font-semibold text-pan-orange">
                    <Shield className="h-2.5 w-2.5" /> FedRAMP Ready
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-blue-400">
                    <Lock className="h-2.5 w-2.5" /> CMMC Compliant
                  </span>
                </div>
              </div>
            </div>

            {/* Social & Legal Links */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <span
                    key={social.label}
                    aria-label={social.label}
                    className="cursor-default rounded-lg p-2 text-slate-400 transition-all hover:bg-white/5 hover:text-pan-orange"
                  >
                    <social.icon className="h-5 w-5" />
                  </span>
                ))}
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="cursor-default hover:text-slate-300 transition">Privacy Policy</span>
                <span className="cursor-default hover:text-slate-300 transition">Terms of Service</span>
                <span className="cursor-default hover:text-slate-300 transition">Security Trust Center</span>
                <span className="cursor-default hover:text-slate-300 transition">Accessibility</span>
                <span className="cursor-default hover:text-slate-300 transition">Sitemap</span>
                <div className="flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5" />
                  <select className="bg-transparent text-xs focus:outline-none">
                    <option>English</option>
                    <option>Español</option>
                    <option>Français</option>
                    <option>Deutsch</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}