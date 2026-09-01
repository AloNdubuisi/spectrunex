import Link from "next/link";
import { Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#03070D] text-white py-12 border-t border-white/10 font-sans">
      <div className="container-page flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
        <div className="flex flex-col">
          <Link href="/" className="flex items-center">
            <img
              src="./logo.png"
              alt="Spectrunex"
              className="h-10 sm:h-10 w-auto object-contain"
            />
          </Link>
          <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
            Technology built for missions. Security built for trust.
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-8 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-500" />
            5325 Westbard Ave, Bethesda, MD 20816
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-blue-500" />
            <a href="mailto:contracts@spectrunex.com">contracts@spectrunex.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-blue-500" />
            www.spectrunex.com
          </div>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition"
            aria-label="LinkedIn"
          >
            in
          </Link>
        </div>
      </div>

      <div className="container-page pt-8 text-center text-xs text-slate-500 font-mono">
        © {new Date().getFullYear()} — SPECTRUNEX, LLC. All Rights Reserved.
      </div>
    </footer>
  );
}