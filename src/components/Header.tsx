// src/components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { label: "FedRAMP® Advisory Services", href: "/services#fedramp-advisory" },
  { label: "Cyber Security", href: "/services#cyber-security" },
  { label: "Cloud Services", href: "/services#cloud-services" },
  { label: "Infrastructure Services", href: "/services#infrastructure-services" },
  { label: "Application & Software Development", href: "/services#application-software-development" },
  { label: "Hardware Sales & Support", href: "/services#hardware-sales-support" },
  { label: "ITSM Support Services", href: "/services#itsm-support-services" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#060D1A]/95 backdrop-blur-md border-b border-white/10 text-white font-sans">
      <div className="container-page flex items-center justify-between py-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="./logo.png"
            alt="Spectrunex"
            className="h-10 sm:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-white hover:text-blue-400 transition">
            HOME
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-300 hover:text-white transition">
            ABOUT US
          </Link>

          {/* Services — hover dropdown */}
          <div className="relative group py-2">
            <Link
              href="/services"
              className="flex items-center gap-1 text-sm font-medium text-slate-300 transition group-hover:text-white"
            >
              SERVICES <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </Link>

            {/* Dropdown panel: hidden by default, shown on hover/focus of the
                trigger or the panel itself (invisible/opacity so it stays
                keyboard/focus-accessible rather than unmounting). A small
                pt-2 spacer above keeps the hover path continuous between
                the link and the panel. */}
            <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 invisible transition-all duration-150 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible">
              <ul className="overflow-hidden rounded-xl border border-white/10 bg-[#0B1220] py-2 shadow-2xl">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="block px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-blue-400"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link href="/government" className="text-sm font-medium text-slate-300 hover:text-white transition">
            GOVERNMENT
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-300 hover:text-white transition">
            CONTACT US
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-blue-700 shadow-lg shadow-blue-600/25"
          >
            Book a Consultation <span className="text-lg leading-none">→</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="lg:hidden p-2 text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#060D1A] px-6 py-6 space-y-4">
          <Link href="/" onClick={() => setOpen(false)} className="block text-base font-semibold text-white">HOME</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block text-base font-semibold text-slate-300">ABOUT US</Link>

          {/* Services — expandable on mobile since there's no hover */}
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
              className="flex w-full items-center justify-between text-base font-semibold text-slate-300"
            >
              SERVICES
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="mt-3 space-y-3 border-l border-white/10 pl-4">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setOpen(false)}
                    className="block text-sm font-medium text-slate-400 hover:text-white"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/government" onClick={() => setOpen(false)} className="block text-base font-semibold text-slate-300">GOVERNMENT</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block text-base font-semibold text-slate-300">CONTACT US</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="w-full text-center block rounded-md bg-blue-600 py-3 text-sm font-bold text-white uppercase">
            Book a Consultation →
          </Link>
        </div>
      )}
    </header>
  );
}