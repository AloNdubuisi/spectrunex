// src/components/PlatformApproachSection.tsx
import {
  Zap,
  Settings,
  Grid2x2,
  Bug,
  Share2,
  Server,
  Globe,
  Cloud,
  CloudCog,
  Smartphone,
  Building2,
  Home,
  Landmark,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

/* Replicates the reference's dark "platform approach" module: a staggered
   problem-statement intro followed by the "The Platform" panel (two-column
   text + radial hub-and-spoke diagram). The six-item section nav shown in
   the original reference ("Today's Challenges / The Platform / Proven
   Success / Industry Validation / Deep Dive / Engage With Us") has been
   removed per request — this component now only ever shows the one panel,
   so there's no tab state to manage anymore.

   Two things changed from the literal reference, same reasoning as every
   other section in this project:

   1. The diagram's center label in the reference is a third-party
      vendor's registered product name, not a generic label, so it's
      swapped for Spectrunex's own platform name.
   2. The reference's accent color here is gold/amber. Every other section
      on this site was deliberately recolored to Spectrunex's single blue
      brand hue rather than the original's multi-color treatment (see
      ServicesGrid/CustomerLogosSection/StatsSection), so this diagram
      uses blue-400/500 instead of introducing a second accent color.

   The staggered fade-in of the three intro lines approximates the
   reference's scroll-pinned reveal using ScrollReveal (same tool used
   everywhere else on this site) rather than true scroll-jacking — a true
   pinned/sticky-scrub effect is a much heavier, easier-to-break addition;
   say the word if you actually want that instead of this approximation. */

type Satellite = {
  label: string;
  icon: typeof Server;
  angle: number; // degrees, 0 = right, -90 = top, clockwise
};

const satellites: Satellite[] = [
  { label: "Data Center", icon: Server, angle: -90 },
  { label: "Internet", icon: Globe, angle: -45 },
  { label: "SaaS", icon: Cloud, angle: 0 },
  { label: "Mobile", icon: Smartphone, angle: 45 },
  { label: "Branch", icon: Building2, angle: 90 },
  { label: "Home", icon: Home, angle: 135 },
  { label: "Campus", icon: Landmark, angle: 180 },
  { label: "Public Cloud", icon: CloudCog, angle: -135 },
];

const DIAGRAM_SIZE = 380;
const CENTER = DIAGRAM_SIZE / 2;
const RING_RADIUS = 170;
const HUB_RADIUS = 92;
const NODE_SIZE = 56;

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(rad), y: CENTER + radius * Math.sin(rad) };
}

function PlatformDiagram() {
  return (
    <div className="relative mx-auto h-[300px] w-[300px] sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px]">
      <svg viewBox={`0 0 ${DIAGRAM_SIZE} ${DIAGRAM_SIZE}`} className="absolute inset-0 h-full w-full">
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RING_RADIUS}
          fill="none"
          stroke="rgba(96, 165, 250, 0.35)"
          strokeWidth={1.5}
        />
        {satellites.map((sat) => {
          const outer = polar(sat.angle, RING_RADIUS);
          const inner = polar(sat.angle, HUB_RADIUS);
          return (
            <line
              key={sat.label}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              stroke="rgba(96, 165, 250, 0.35)"
              strokeWidth={1.5}
            />
          );
        })}
      </svg>

      {/* Hub */}
      <div
        className="absolute flex flex-col items-center justify-center rounded-full text-center shadow-lg shadow-blue-900/40"
        style={{
          left: CENTER - HUB_RADIUS,
          top: CENTER - HUB_RADIUS,
          width: HUB_RADIUS * 2,
          height: HUB_RADIUS * 2,
          background: "radial-gradient(circle, #60A5FA 0%, #2563EB 100%)",
        }}
      >
        <div className="absolute left-3 top-3 text-[#0B1533]/70">
          <Zap className="h-4 w-4" strokeWidth={2} />
        </div>
        <div className="absolute right-3 top-3 text-[#0B1533]/70">
          <Settings className="h-4 w-4" strokeWidth={2} />
        </div>
        <div className="absolute bottom-3 left-3 text-[#0B1533]/70">
          <Grid2x2 className="h-4 w-4" strokeWidth={2} />
        </div>
        <div className="absolute bottom-3 right-3 text-[#0B1533]/70">
          <Bug className="h-4 w-4" strokeWidth={2} />
        </div>
        <Share2 className="mb-1 h-4 w-4 text-[#0B1533]/70" strokeWidth={2} />
        <p className="px-4 text-[10px] font-black uppercase leading-tight tracking-wide text-[#0B1533] sm:text-xs">
          Spectrunex
          <br />
          Network Security
          <br />
          Platform
        </p>
      </div>

      {/* Satellites */}
      {satellites.map((sat) => {
        const pos = polar(sat.angle, RING_RADIUS);
        const Icon = sat.icon;
        return (
          <div
            key={sat.label}
            className="absolute flex flex-col items-center gap-1.5"
            style={{
              left: pos.x - NODE_SIZE / 2,
              top: pos.y - NODE_SIZE / 2,
              width: NODE_SIZE,
            }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-[#050B14] text-white">
              <Icon className="h-4 w-4" strokeWidth={1.75} />
            </div>
            <span className="whitespace-nowrap text-[10px] font-medium text-slate-400">
              {sat.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function PlatformApproachSection() {
  return (
    <section className="bg-[#050B14] text-white font-sans">
      {/* Problem-statement intro */}
      <div className="container-page py-24 lg:py-32">
        <ScrollReveal speed="fast" animation="fade-up">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            The Platform Approach
          </p>
          <h2 className="max-w-2xl font-display text-2xl font-medium leading-snug text-slate-300 sm:text-3xl lg:text-4xl">
            Today&apos;s disconnected infrastructure makes network security
            complex and difficult to manage.
          </h2>
        </ScrollReveal>

        <ScrollReveal speed="fast" animation="fade-up" delay={0.15} className="mt-24 lg:mt-32">
          <p className="max-w-md text-lg text-slate-500 sm:text-xl">
            Adding more tools leads to fragmented data and incomplete
            visibility&hellip;
          </p>
        </ScrollReveal>

        <ScrollReveal speed="fast" animation="fade-up" delay={0.3} className="mt-24 lg:mt-32">
          <p className="max-w-md text-lg text-slate-500 sm:text-xl">
            &hellip;leaving your network vulnerable to increasingly
            sophisticated attacks.
          </p>
        </ScrollReveal>
      </div>

      {/* The Platform panel — text + radial hub diagram */}
      <div className="container-page py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <ScrollReveal speed="fast" animation="fade-up">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Network Security Platform
            </p>
            <h3 className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
              Simplify operations, consistently enforce security policies,
              and protect against advanced threats with{" "}
              <span className="text-blue-400">one unified platform.</span>
            </h3>
          </ScrollReveal>

          <ScrollReveal speed="fast" animation="zoom-in" delay={0.1}>
            <PlatformDiagram />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}