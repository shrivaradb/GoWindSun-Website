"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { ChevronRight, Wrench, Zap, Compass, Navigation } from "lucide-react";

export const ProjectServicesHero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#06111F] border-b border-slate-800/80 overflow-hidden text-white">
      {/* Background Full-Width Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/project-development-epc-hero.png"
          alt="GoWindSun Renewable Energy Project Development & Turnkey EPC Execution"
          fill
          className="object-cover object-center brightness-[0.38] contrast-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06111F]/95 via-[#06111F]/80 to-transparent" />
      </div>

      {/* Precision Grid Background Details */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none z-0" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/services" className="hover:text-emerald-400 transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-emerald-400">Project Services</span>
        </div>

        {/* Header Content */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono tracking-wider uppercase">
            <Wrench className="w-3.5 h-3.5" />
            <span>Pillar 01 — Project Engineering & Lifecycle</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            PROJECT SERVICES
            <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium text-slate-300">
              End-to-end wind, solar & hybrid asset execution in India.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl font-light">
            GoWindSun supports project developers, IPPs, and institutional partners through every phase of project development—from greenfield site identification (~3,000 MW pipeline) and bankable resource measurement to grid evacuation, turnkey EPC, and operational asset recovery.
          </p>
        </div>

        {/* Metric Cards (CountUp Rule Compliant) */}
        <div className="mt-14 pt-10 border-t border-slate-800/90 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              Greenfield Pipeline
            </div>
            <div className="text-3xl font-black text-white">
              ~<CountUp end={3000} duration={2.0} /> <span className="text-lg font-bold text-slate-400">MW</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Identified Site Potential in India</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4" />
              Yield Modeling
            </div>
            <div className="text-2xl font-black text-white">
              P50 / 75 / 90
            </div>
            <p className="text-xs text-slate-400 mt-1">Bankable DPR AEP Estimates</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Navigation className="w-4 h-4" />
              Grid Interconnection
            </div>
            <div className="text-2xl font-black text-white">
              STU & CTU
            </div>
            <p className="text-xs text-slate-400 mt-1">State & National Evacuation</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Wrench className="w-4 h-4" />
              Turnkey EPC
            </div>
            <div className="text-2xl font-black text-white">
              Utility Solar PV
            </div>
            <p className="text-xs text-slate-400 mt-1">Ground-Mounted & Commercial Tech</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
