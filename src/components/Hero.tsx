"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#000000] isolate min-h-[85vh] lg:min-h-[88vh] flex items-center"
      style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
    >
      {/* 1. Ultra-realistic Sunset Skyscraper Executive Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-right lg:bg-center bg-no-repeat opacity-95"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2600&auto=format&fit=crop")',
        }}
        aria-hidden="true"
      />

      {/* Dark Vignette Overlay for Crisp Typography Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/85 to-[#000000]/25 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent z-0" />

      {/* 2. Executive Silhouette & 3D Blue Prism Matrix Graphic Overlay */}
      <div className="absolute inset-y-0 right-0 z-10 w-full lg:w-3/5 pointer-events-none flex items-center justify-end overflow-hidden">
        {/* Right Stage: Executive Businesswoman with Blue Prism Cage */}
        <div className="relative w-[600px] lg:w-[750px] h-[550px] lg:h-[650px] flex items-center justify-center mr-0 lg:mr-8">
          {/* Executive Asian Businesswoman Image Cutout */}
          <div
            className="absolute right-12 bottom-0 w-[360px] lg:w-[420px] h-[520px] lg:h-[610px] bg-contain bg-bottom bg-no-repeat z-10"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop")',
              filter: "brightness(0.98) contrast(1.06) drop-shadow(0 25px 45px rgba(0,0,0,0.85))",
              maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
            }}
          />

          {/* Palo Alto Signature 3D Blue Vertical Prism Bars / Diamond Matrix Grid */}
          <svg
            className="absolute inset-0 w-full h-full z-20 pointer-events-none opacity-90"
            viewBox="0 0 700 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="drop-shadow(0px 0px 16px rgba(29, 78, 216, 0.75))">
              {/* Slats Left Wing */}
              <path d="M120 230L145 200V390L120 420V230Z" fill="#1D4ED8" fillOpacity="0.85" />
              <path d="M150 180L175 150V430L150 460V180Z" fill="#2563EB" fillOpacity="0.9" />
              <path d="M180 140L205 110V470L180 500V140Z" fill="#3B82F6" fillOpacity="0.95" />
              <path d="M210 100L235 70V510L210 540V100Z" fill="#2563EB" fillOpacity="0.9" />
              <path d="M240 70L265 40V540L240 570V70Z" fill="#1D4ED8" fillOpacity="0.95" />

              {/* Slats Center Crown */}
              <path d="M270 50L295 20V560L270 590V50Z" fill="#3B82F6" />
              <path d="M300 40L325 10V570L300 600V40Z" fill="#60A5FA" />
              <path d="M330 50L355 20V560L330 590V50Z" fill="#3B82F6" />

              {/* Slats Right Wing */}
              <path d="M360 70L385 40V540L360 570V70Z" fill="#1D4ED8" fillOpacity="0.95" />
              <path d="M390 100L415 70V510L390 540V100Z" fill="#2563EB" fillOpacity="0.9" />
              <path d="M420 140L445 110V470L420 500V140Z" fill="#3B82F6" fillOpacity="0.95" />
              <path d="M450 180L475 150V430L450 460V180Z" fill="#2563EB" fillOpacity="0.9" />
              <path d="M480 230L505 200V390L480 420V230Z" fill="#1D4ED8" fillOpacity="0.85" />
            </g>

            <circle cx="295" cy="20" r="4" fill="#93C5FD" filter="drop-shadow(0 0 8px #60A5FA)" />
            <circle cx="325" cy="10" r="5" fill="#FFFFFF" filter="drop-shadow(0 0 10px #93C5FD)" />
            <circle cx="355" cy="20" r="4" fill="#93C5FD" filter="drop-shadow(0 0 8px #60A5FA)" />
          </svg>
        </div>
      </div>

      {/* 3. Left Content Area with 43px Helvetica Typography */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 w-full relative z-20 py-20 lg:py-28">
        <div className="max-w-2xl">
          {/* Main Headline exact 43px in Helvetica */}
          <h1
            className="text-[36px] sm:text-[40px] lg:text-[43px] font-bold leading-[1.15] tracking-tight text-white"
            style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
          >
            <span className="block text-white">Control the chaos.</span>
            <span className="block text-[#67E8F9] mt-1">Secure every identity.</span>
          </h1>

          {/* Subtitle Paragraph */}
          <p
            className="mt-6 text-[17px] sm:text-[19px] font-normal leading-relaxed text-white max-w-xl"
            style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
          >
            Introducing Idira®, the next-generation identity security platform that secures every identity for the AI enterprise.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-6">
            {/* Primary Electric Blue Button */}
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1D4ED8] hover:bg-[#1E40AF] px-7 py-3.5 text-[15px] font-semibold text-white transition-all shadow-lg shadow-[#1D4ED8]/30 hover:scale-[1.02]"
              style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
            >
              Discover Idira
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Secondary Text Link with Underline */}
            <Link
              href="/services"
              className="text-[15px] font-semibold text-white hover:text-slate-200 underline underline-offset-8 decoration-white transition"
              style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
            >
              Read the launch blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}