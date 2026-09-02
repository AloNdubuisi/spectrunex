// src/components/Footer.tsx
import Link from "next/link";
import { Shield, Lock, Cpu, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#03070E] text-slate-400 font-sans border-t border-white/10 pt-16 pb-12">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 text-white font-display font-bold text-xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-black text-sm shadow-md">
                S
              </span>
              <span>SPECTRUNEX</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Spectrunex delivers enterprise-grade cybersecurity, FedRAMP authorization advisory, and advanced compliance solutions to secure mission-critical systems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                <Shield className="h-3.5 w-3.5" /> FedRAMP Ready
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                <Lock className="h-3.5 w-3.5" /> CMMC Compliant
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-4">
              Platforms
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services" className="hover:text-white transition">Network Security</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Security Operations</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Cloud Security (CNAPP)</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Identity Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-4">
              Compliance & Advisory
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/government" className="hover:text-white transition">FedRAMP Authorization</Link></li>
              <li><Link href="/government" className="hover:text-white transition">DoD DISA PA / ILs</Link></li>
              <li><Link href="/government" className="hover:text-white transition">CMMC Readiness</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Security Assessments</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Careers <ArrowUpRight className="inline h-3 w-3" /></Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Press & Media</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Spectrunex, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition">Terms of Service</Link>
            <Link href="/security" className="hover:text-slate-400 transition">Security Trust Center</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}