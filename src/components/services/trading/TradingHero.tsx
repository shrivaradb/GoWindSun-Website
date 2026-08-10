"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ArrowUpRight } from "lucide-react";

const flowNodes = [
  { step: "01", label: "RENEWABLE GENERATION", desc: "Wind, Solar & Hybrid Assets" },
  { step: "02", label: "POWER FLOW", desc: "STU & CTU Grid Evacuation" },
  { step: "03", label: "MARKET & REGULATION", desc: "Open Access & Tariff Rules" },
  { step: "04", label: "PROCUREMENT", desc: "Corporate PPA & Group Captive" },
  { step: "05", label: "C&I CONSUMER", desc: "Cost-Effective Green Power" },
];

export const TradingHero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#06111F] text-white overflow-hidden border-b border-slate-800">
      {/* Background Full-Width Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/re-trading.png"
          alt="GoWindSun Renewable Energy Trading - Power Flow Infrastructure"
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
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-300 mb-10">
          <Link href="/" className="hover:text-[#0186D5] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <Link href="/services" className="hover:text-[#0186D5] transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-[#0186D5]">Renewable Energy Trading</span>
        </div>

        {/* Hero Content Header */}
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 text-xs font-mono tracking-[0.25em] text-[#0186D5] uppercase mb-6">
            <span>COMMERCIAL ADVISORY</span>
            <span className="h-px w-8 bg-[#0186D5]" />
            <span>POWER PROCUREMENT & OPEN ACCESS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.04] uppercase font-sans">
            CONNECTING CLEAN POWER <br />
            WITH <span className="text-[#0186D5]">ENERGY DEMAND.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 items-end border-t border-slate-800 mt-10">
            <div className="md:col-span-8 space-y-4">
              <p className="text-xl sm:text-2xl text-slate-200 font-light leading-snug">
                Strategic transaction advisory, Corporate PPA structuring, Open Access feasibility, and renewable power sourcing for C&I consumers and IPP generators across India.
              </p>
              <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-2xl">
                GoWindSun enables commercial and industrial power off-takers to secure reliable, cost-effective green electricity through Third-Party Sale, Group Captive models, and Inter-State / Intra-State Open Access.
              </p>
            </div>

            <div className="md:col-span-4 flex justify-start md:justify-end">
              <Button
                variant="primary"
                size="lg"
                className="bg-[#0186D5] hover:bg-[#0186D5]/90 text-white font-bold text-sm px-7 py-3.5 rounded-none shadow-xl border border-sky-400/30"
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                <span>Discuss Your Requirement</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Animated Power Flow System Banner (Hero Visualization - No Cards!) */}
        <div className="mt-16 pt-8 border-t border-slate-800/90">
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#0186D5] mb-4">
            POWER FLOW & TRANSACTION SYSTEM
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {flowNodes.map((node, idx) => (
              <div
                key={node.step}
                className="p-4 bg-slate-950/70 border border-slate-800 relative group hover:border-[#0186D5] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#0186D5]">[{node.step}]</span>
                  {idx < flowNodes.length - 1 && (
                    <span className="text-xs font-mono text-slate-600 hidden lg:inline">→</span>
                  )}
                </div>
                <div className="text-xs font-black text-white tracking-wider uppercase mt-2 group-hover:text-[#0186D5] transition-colors">
                  {node.label}
                </div>
                <div className="text-[11px] text-slate-400 font-light mt-1">
                  {node.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
