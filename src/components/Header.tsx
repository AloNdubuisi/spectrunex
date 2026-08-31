// src/components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

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
          <div className="relative group py-2">
            <Link href="/services" className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition">
              SERVICES <ChevronDown className="h-3.5 w-3.5" />
            </Link>
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
          <Link href="/services" onClick={() => setOpen(false)} className="block text-base font-semibold text-slate-300">SERVICES</Link>
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