"use client";

import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Play,
  ShieldAlert,
  Bot,
  CheckCircle,
  Clock,
  ArrowRight,
  Database,
  Cpu,
} from "lucide-react";

const simulationScenarios = [
  {
    id: "ransomware",
    title: "Autonomous Ransomware Containment",
    platform: "Cortex® XSIAM",
    attackType: "Multi-Stage Credential Dumping & Lateral Movement",
    timeSaved: "Reduced from 4 hours to 1.8 seconds",
    prompt: "Precision AI: Anomaly detected on host 'srv-finance-04' with high-entropy disk encryption activity.",
    logs: [
      { step: "00:00.01", text: "Deep learning engine detects abnormal VSS shadow-copy deletion attempt", status: "detected" },
      { step: "00:00.04", text: "Autonomous endpoint isolation executed via Cortex agent", status: "action" },
      { step: "00:00.12", text: "Revoked compromised Kerberos ticket & quarantined lateral network ports", status: "action" },
      { step: "00:00.35", text: "Zero business disruption. Executive incident summary compiled automatically.", status: "resolved" },
    ],
  },
  {
    id: "genai",
    title: "GenAI & LLM Prompt Injection Defense",
    platform: "Prisma® AIRS",
    attackType: "Indirect Prompt Injection & PII Exfiltration",
    timeSaved: "Inline real-time inspection with zero model latency",
    prompt: "Precision AI: User query to internal Enterprise LLM contains obfuscated base64 jailbreak instructions.",
    logs: [
      { step: "00:00.02", text: "Prisma AIRS inspects semantic payload at the API gateway layer", status: "detected" },
      { step: "00:00.05", text: "Flagged adversarial jailbreak pattern attempting system prompt override", status: "action" },
      { step: "00:00.08", text: "Inline sanitization and PII redaction applied before reaching foundation model", status: "action" },
      { step: "00:00.15", text: "Threat neutralized. Compliance event logged to audit stream.", status: "resolved" },
    ],
  },
  {
    id: "zeroday",
    title: "Zero-Day Inline Malware Neutralization",
    platform: "Strata™ Next-Gen Firewall",
    attackType: "Polymorphic Encrypted C2 Beaconing",
    timeSaved: "Blocked before first packet delivery to cloud workload",
    prompt: "Precision AI: Unseen encrypted session exhibiting beaconing behavior to suspicious dynamic DNS host.",
    logs: [
      { step: "00:00.01", text: "Inline Deep Learning analyzes packet metadata without decrypting private data", status: "detected" },
      { step: "00:00.03", text: "Identified novel malware strain signature with 99.98% confidence score", status: "action" },
      { step: "00:00.06", text: "Generated global WildFire signature and propagated to all enterprise firewalls", status: "action" },
      { step: "00:00.11", text: "Session dropped. Global fleet immunised across edge and data center.", status: "resolved" },
    ],
  },
];

export default function PrecisionAISimulator() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeScenarioId, setActiveScenarioId] = useState("ransomware");
  const [running, setRunning] = useState(false);
  const [simulatedIndex, setSimulatedIndex] = useState(4);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scenario = simulationScenarios.find((s) => s.id === activeScenarioId) || simulationScenarios[0];

  const handleRunSimulation = () => {
    setRunning(true);
    setSimulatedIndex(0);

    const interval = setInterval(() => {
      setSimulatedIndex((prev) => {
        if (prev >= 3) {
          clearInterval(interval);
          setRunning(false);
          return 4;
        }
        return prev + 1;
      });
    }, 450);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#070A0F] py-24 sm:py-32 text-white relative font-sans border-b border-pan-dark-border overflow-hidden"
      style={{ fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif' }}
    >
      {/* Dynamic Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-pan-orange/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Heading with Fast Reveal */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-600 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FA582D]/40 bg-[#FA582D]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FA582D] mb-4 shadow-[0_0_20px_rgba(250,88,45,0.3)]">
            <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Interactive Security Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Experience <span className="text-[#FA582D]">Precision AI™</span> in action.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            See how our unified AI engines detect, analyze, and neutralize advanced nation-state attacks in milliseconds.
          </p>
        </div>

        {/* Interactive Scenario Switcher with Fast Stagger */}
        <div
          className={`flex flex-wrap items-center justify-center gap-3 mb-10 transition-all duration-600 delay-100 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {simulationScenarios.map((item) => {
            const isActive = activeScenarioId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveScenarioId(item.id);
                  setSimulatedIndex(4);
                  setRunning(false);
                }}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border ${
                  isActive
                    ? "bg-[#FA582D] text-white border-[#FA582D] shadow-xl shadow-[#FA582D]/30 scale-105"
                    : "bg-[#0F141E] text-slate-300 border-white/10 hover:border-slate-400 hover:text-white"
                }`}
              >
                <Cpu className="h-4 w-4" />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Live Simulation Terminal Console with Bouncing Elevation */}
        <div
          className={`max-w-4xl mx-auto rounded-3xl bg-[#0C1018] border border-white/15 shadow-2xl overflow-hidden transition-all duration-700 delay-200 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          {/* Console Header Bar */}
          <div className="bg-[#111722] border-b border-white/10 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-300 font-bold">
                PRECISION-AI-ENGINE :: {scenario.platform.toUpperCase()}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#00D2FF] bg-[#00D2FF]/10 px-2.5 py-1 rounded">
                Attack Type: {scenario.attackType}
              </span>
              <button
                onClick={handleRunSimulation}
                disabled={running}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#FA582D] hover:bg-[#ff6f47] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md hover:scale-105 disabled:opacity-50"
              >
                <Play className="h-3 w-3 fill-current" />
                {running ? "Simulating..." : "Replay Attack"}
              </button>
            </div>
          </div>

          {/* Console Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* AI Prompt Input Bar */}
            <div className="rounded-2xl bg-[#070A0F] border border-white/10 p-4 flex items-start gap-3">
              <Bot className="h-5 w-5 text-[#FA582D] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono text-[#FA582D] font-bold uppercase">
                  Telemetry Trigger:
                </p>
                <p className="text-sm text-slate-200 font-mono mt-0.5">
                  {scenario.prompt}
                </p>
              </div>
            </div>

            {/* Step-by-Step AI Remediation Execution */}
            <div className="space-y-3 font-mono text-xs sm:text-sm">
              {scenario.logs.map((log, idx) => {
                const isStepVisible = idx <= simulatedIndex;
                return (
                  <div
                    key={idx}
                    className={`rounded-xl p-3.5 border transition-all duration-400 transform flex items-start justify-between gap-4 ${
                      isStepVisible
                        ? log.status === "detected"
                          ? "bg-red-500/10 border-red-500/40 text-red-200 scale-100"
                          : log.status === "action"
                          ? "bg-yellow-500/10 border-yellow-500/40 text-yellow-200 scale-100"
                          : "bg-emerald-500/10 border-emerald-500/40 text-emerald-200 scale-100"
                        : "opacity-15 border-transparent bg-transparent scale-95"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-slate-400 font-bold">{log.step}</span>
                      <span>{log.text}</span>
                    </div>
                    {isStepVisible && (
                      <span className="flex-shrink-0">
                        {log.status === "resolved" ? (
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                        ) : log.status === "detected" ? (
                          <ShieldAlert className="h-4 w-4 text-red-400" />
                        ) : (
                          <Clock className="h-4 w-4 text-yellow-400 animate-spin" />
                        )}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Summary Benchmark Outcome */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-[#00D2FF]">
                <Database className="h-4 w-4" />
                <span>ROI Metric: <strong className="text-white">{scenario.timeSaved}</strong></span>
              </div>
              <span className="font-mono text-emerald-400 font-semibold">
                STATUS: THREAT CONFINED &amp; ELIMINATED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
