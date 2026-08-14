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
  LineChart,
  TrendingUp,
  ShieldCheck,
  Zap,
  Globe,
  PieChart,
  Briefcase,
} from "lucide-react";

export const StrategicMarketHero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#06111F] border-b border-slate-800 text-white overflow-hidden">
      {/* Editorial Market Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-sky-600/10 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10">


        {/* Hero Main Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Market Intelligence & Headline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 text-xs font-mono tracking-wider uppercase">
              <LineChart className="w-3.5 h-3.5" />
              <span>EXECUTIVE ADVISORY & ENERGY MARKET INTELLIGENCE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              STRATEGIC ADVISORY & ENERGY MARKETS
              <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl font-medium text-slate-300">
                Turning energy-market intelligence into informed commercial decisions.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              GoWindSun delivers executive strategic advisory across energy trading (Corporate PPAs, Open Access, Group Captive), repowering aging assets, M&A project acquisitions/divestments, portfolio strategy, Green Hydrogen, and Offshore Wind advisory across India.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                icon
                className="bg-[#0186D5] hover:bg-[#0186D5]/90 text-white shadow-xl shadow-sky-950/50 border border-sky-400/40 rounded-full"
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                Schedule Strategic Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-slate-900/80 hover:bg-slate-800 text-white border-slate-700 backdrop-blur-md"
                onClick={() => {
                  const el = document.getElementById("strategic-pipeline");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Value Framework
              </Button>
            </div>
          </div>

          {/* Right Column: Featured Energy Market Image with Overlay Executive Callouts */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl p-2"
            >
              <div className="relative h-[380px] sm:h-[440px] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/services/ehv_substation_grid.png"
                  alt="Energy Markets Grid Infrastructure & Corporate PPA Strategy"
                  fill
                  className="object-cover object-center brightness-90 contrast-105"
                  priority
                />

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06111F] via-transparent to-transparent opacity-80" />

                {/* Executive Callout Badge 1 (Top Left) */}
                <div className="absolute top-4 left-4 backdrop-blur-md bg-slate-950/85 border border-emerald-500/40 rounded-lg px-3 py-2 text-white shadow-lg flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-emerald-500/20 text-emerald-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">C&I ENERGY TRADING</div>
                    <div className="text-xs font-mono font-bold text-emerald-400">CORPORATE PPAs & OPEN ACCESS</div>
                  </div>
                </div>

                {/* Executive Callout Badge 2 (Bottom Right) */}
                <div className="absolute bottom-4 right-4 backdrop-blur-md bg-slate-950/85 border border-sky-500/40 rounded-lg px-3 py-2 text-white shadow-lg flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-sky-500/20 text-sky-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">TRANSACTION SUPPORT</div>
                    <div className="text-xs font-mono font-bold text-sky-300">M&A & ASSET VALUATION</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Quantitative Metrics (Using CountUp as per AGENTS.md rule) */}
        <div className="mt-16 pt-10 border-t border-slate-800/90 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2">
              <TrendingUp className="w-4 h-4" />
              Technical Scope
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">
              <CountUp end={3000} prefix="~" suffix=" MW" duration={2.0} />
            </div>
            <p className="text-xs text-slate-400 mt-1 font-light">Site Screening & Evacuation Scope</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-colors">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase tracking-wider mb-2">
              <Globe className="w-4 h-4" />
              National Goal
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">
              <CountUp end={220} suffix="+ GW" duration={2.0} />
            </div>
            <p className="text-xs text-slate-400 mt-1 font-light">RE Target Strategy Alignment</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider mb-2">
              <PieChart className="w-4 h-4" />
              Regulatory Reach
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">
              <CountUp end={100} prefix="" suffix="%" duration={1.8} />
            </div>
            <p className="text-xs text-slate-400 mt-1 font-light">CERC & State SNA Regulatory Coverage</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              Transaction Quality
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">
              Bankable
            </div>
            <p className="text-xs text-slate-400 mt-1 font-light">Due Diligence & Red-Flag Audit</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
