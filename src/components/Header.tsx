"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Globe,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full font-sans bg-[#000000] text-white">
      {/* 1. Top Announcement Bar */}
      <div className="w-full bg-[#000000] border-b border-white/10 py-2.5 px-4">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between text-xs sm:text-sm">
          <button
            aria-label="Previous announcement"
            className="text-white hover:text-slate-300 transition p-1"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="text-center font-normal text-white px-4 truncate">
            Prisma AIRS AI Gateway is now generally available
          </div>

          <button
            aria-label="Next announcement"
            className="text-white hover:text-slate-300 transition p-1"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="w-full bg-[#000000] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Left: Palo Alto Networks Logo + Nav Links */}
          <div className="flex items-center gap-8 lg:gap-10">
            {/* Exact Palo Alto Networks Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              <svg
                width="34"
                height="32"
                viewBox="0 0 34 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                {/* 3 Iconic Orange Slashes / Parallelograms */}
                <path
                  d="M11.5 2L3 13.5H8.5L17 2H11.5Z"
                  fill="#FA582D"
                />
                <path
                  d="M19.5 2L11 13.5H16.5L25 2H19.5Z"
                  fill="#FA582D"
                />
                <path
                  d="M19 18.5L10.5 30H16L24.5 18.5H19Z"
                  fill="#FA582D"
                />
                <path
                  d="M27 18.5L18.5 30H24L32.5 18.5H27Z"
                  fill="#FA582D"
                />
              </svg>

              <div className="flex flex-col justify-center">
                <div className="flex items-baseline">
                  <span className="text-[23px] font-bold tracking-tight text-white font-sans lowercase leading-none">
                    spectrunex
                  </span>
                  <span className="text-[10px] text-white font-normal ml-0.5 relative -top-2">
                    ®
                  </span>
                </div>
                <span className="text-[7.5px] font-bold tracking-[0.28em] text-white uppercase text-right leading-none mt-0.5">
                  NETWORKS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-7 text-[15px] font-normal text-white">
              <Link href="/services" className="hover:text-slate-300 transition">
                Products
              </Link>
              <Link href="/services" className="hover:text-slate-300 transition">
                Solutions
              </Link>
              <Link href="/services" className="hover:text-slate-300 transition">
                Services
              </Link>
              <Link href="/services" className="hover:text-slate-300 transition">
                Industries
              </Link>
              <Link href="/services" className="hover:text-slate-300 transition">
                Partners
              </Link>
              <Link href="/services" className="hover:text-slate-300 transition">
                Resources
              </Link>
            </nav>
          </div>

          {/* Right: Search, Globe, Accounts & Support Pill, Demos and Trials Pill */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Search Icon */}
            <button
              aria-label="Search"
              className="text-white hover:text-slate-300 transition p-1.5"
            >
              <Search className="h-5 w-5" strokeWidth={1.75} />
            </button>

            {/* Globe Language Icon */}
            <button
              aria-label="Select Region"
              className="text-white hover:text-slate-300 transition p-1.5"
            >
              <Globe className="h-5 w-5" strokeWidth={1.75} />
            </button>

            {/* Accounts & Support Pill Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                className="flex items-center gap-2 rounded-full border border-white/40 bg-transparent hover:border-white px-4 py-2 text-[14px] font-medium text-white transition"
              >
                <span>Accounts &amp; Support</span>
                <ChevronDown className="h-4 w-4 text-white" />
              </button>

              {accountDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-[#111722] border border-white/15 p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 text-xs text-slate-200">
                  <Link
                    href="/contact"
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white"
                  >
                    Customer Support Portal
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white"
                  >
                    Partner Portal Login
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white"
                  >
                    Unit 42 Threat Intelligence
                  </Link>
                </div>
              )}
            </div>

            {/* Vibrant Coral/Orange "Demos and Trials" CTA Pill */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#FA582D] hover:bg-[#ff6f47] px-6 py-2.5 text-[14px] font-semibold text-white transition-all shadow-md hover:shadow-lg shadow-[#FA582D]/20"
            >
              Demos and Trials
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="xl:hidden text-white p-2"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0A0E14] border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="space-y-3 text-sm font-medium">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-[#FA582D] py-1"
            >
              Products
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-[#FA582D] py-1"
            >
              Solutions
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-[#FA582D] py-1"
            >
              Services
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-[#FA582D] py-1"
            >
              Industries
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-[#FA582D] py-1"
            >
              Partners
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white hover:text-[#FA582D] py-1"
            >
              Resources
            </Link>
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center rounded-full bg-[#FA582D] py-3 text-sm font-semibold text-white"
            >
              Demos and Trials
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}