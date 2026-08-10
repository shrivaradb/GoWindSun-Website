"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Activity,
  ShieldCheck,
  Zap,
  Users,
  Wrench,
  Radio,
  Cpu,
} from "lucide-react";

export const AssetOperationsHero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#06111F] border-b border-slate-800 text-white overflow-hidden">
      {/* Background Full-Width Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/asset-management.png"
          alt="GoWindSun Asset Management & Operations Control Center"
          fill
          className="object-cover object-center brightness-[0.38] contrast-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06111F]/95 via-[#06111F]/80 to-transparent" />
      </div>

      {/* Precision Engineering Background Details */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none z-0" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 mb-8">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/services" className="hover:text-emerald-400 transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-emerald-400">Asset Management & Operations</span>
        </div>

        {/* Hero Main Content Header */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 text-xs font-mono tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Radio className="w-3.5 h-3.5" />
            <span>LIVE ASSET PERFORMANCE & O&M CONTROL CENTER</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            ASSET MANAGEMENT & OPERATIONS
            <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl font-medium text-slate-300">
              Keeping renewable energy assets reliable, available, and performing throughout their lifecycle.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
            GoWindSun delivers end-to-end Operations & Maintenance (O&M) services, plant reliability enhancement, specialist technical manpower deployment, preventive/predictive maintenance, and spare parts management across wind, solar, hybrid, BESS, and high-voltage grid infrastructure in India.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button
              variant="primary"
              size="lg"
              icon
              className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/50 border border-emerald-400/40"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Request Plant Reliability Audit
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-slate-900/80 hover:bg-slate-800 text-white border-slate-700 backdrop-blur-md"
              onClick={() => {
                const el = document.getElementById("asset-pipeline");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore O&M Protocols
            </Button>
          </div>
        </div>

        {/* Hero Standalone Metric Counter Cards (Using CountUp as per AGENTS.md rule) */}
        <div className="mt-16 pt-10 border-t border-slate-800/90 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              Resource Scope
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">
              <CountUp end={3000} prefix="~" suffix=" MW" duration={2.0} />
            </div>
            <p className="text-xs text-slate-400 mt-1 font-light">Site Assessment & Yield Analysis</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              Target Supported
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">
              <CountUp end={220} suffix="+ GW" duration={2.0} />
            </div>
            <p className="text-xs text-slate-400 mt-1 font-light">India RE Grid Capacity Goal</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-colors">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase tracking-wider mb-2">
              <Cpu className="w-4 h-4" />
              Substation Rating
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">
              <CountUp end={400} prefix="Up to " suffix=" kV" duration={2.0} />
            </div>
            <p className="text-xs text-slate-400 mt-1 font-light">HV/EHV Pooling & Grid Evacuation</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2">
              <Users className="w-4 h-4" />
              Field Operations
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">
              <CountUp end={24} suffix="/7" duration={1.5} />
            </div>
            <p className="text-xs text-slate-400 mt-1 font-light">Specialist Engineers & Technicians</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
