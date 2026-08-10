"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ChevronRight, ShieldCheck, Building2, Zap, Award } from "lucide-react";

export const AdvisoryServicesHero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#06111F] border-b border-slate-800/80 overflow-hidden text-white">
      {/* Background Full-Width Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/technical-consulting-advisory-hero.png"
          alt="GoWindSun Technical Consulting & Advisory Engineering Assessment"
          fill
          className="object-cover object-center brightness-[0.38] contrast-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06111F]/95 via-[#06111F]/80 to-transparent" />
      </div>

      {/* Precision Grid Background Details */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none z-0" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/10 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
          <Link href="/" className="hover:text-sky-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/services" className="hover:text-sky-400 transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-sky-400">Advisory Services</span>
        </div>

        {/* Header Content */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-sky-950/80 border border-sky-800 text-sky-400 text-xs font-mono tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Pillar 02 — Strategic & Techno-Commercial Advisory</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            ADVISORY SERVICES
            <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium text-slate-300">
              Strategic, technical, commercial & regulatory transaction support.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl font-light">
            GoWindSun acts as a trusted technical advisor to equity investors, banks, infrastructure funds, utilities, OEMs, and commercial energy consumers—helping reduce energy costs, mitigate project execution risks, and navigate complex statutory frameworks.
          </p>
        </div>

        {/* Advisory Focus Cards */}
        <div className="mt-14 pt-10 border-t border-slate-800/90 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              Owner's Engineer
            </div>
            <div className="text-2xl font-black text-white">
              100% Independent
            </div>
            <p className="text-xs text-slate-400 mt-1">Protecting Owner & Investor Equity</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Building2 className="w-4 h-4" />
              Lender's Engineer
            </div>
            <div className="text-2xl font-black text-white">
              Bankable Audits
            </div>
            <p className="text-xs text-slate-400 mt-1">Techno-Commercial Due Diligence</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              C&I Open Access
            </div>
            <div className="text-2xl font-black text-white">
              PPA Structuring
            </div>
            <p className="text-xs text-slate-400 mt-1">Third-Party & Captive Power</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              Statutory Support
            </div>
            <div className="text-2xl font-black text-white">
              MNRE RLMM
            </div>
            <p className="text-xs text-slate-400 mt-1">Wind Type Certification Liaison</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
