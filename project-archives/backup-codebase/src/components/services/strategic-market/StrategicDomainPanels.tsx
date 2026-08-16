"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, Zap, RefreshCw, ShoppingBag, Compass } from "lucide-react";

export const StrategicDomainPanels: React.FC = () => {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-semibold uppercase tracking-wider">
            Commercial & Advisory Domains
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Executive Advisory Pillars & Market Scope
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Unifying energy trading, corporate decarbonization, asset transaction advisory, repowering, and emerging clean technology in India.
          </p>
        </div>

        {/* 3 Domain Feature Bands */}
        <div className="space-y-16">
          {/* Pillar 01: Energy Trading, Corporate PPAs & Open Access */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500/40 transition-all duration-300 shadow-sm">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>PILLAR 01 — ENERGY TRADING & CORPORATE PPAs</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Corporate PPA Structuring & Open Access Advisory
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                Strategic energy trading advisory for commercial and industrial (C&I) power consumers, developers, and IPPs. We structure Corporate Power Purchase Agreements (CPPAs), Third-Party Open Access sales, Group Captive models, and Virtual PPA contracts across Indian state power markets.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Corporate PPA (CPPA) contract drafting & long-term tariff negotiations</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Third-Party Sale, Captive & Group Captive model financial evaluation</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Wheeling, cross-subsidy surcharge & DISCOM Open Access approvals</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-72 sm:h-80 w-full rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/services/ehv_substation_grid.png"
                alt="High Voltage Grid & Corporate Open Access Power Evacuation"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Pillar 02: Repowering & M&A Transaction Advisory */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500/40 transition-all duration-300 shadow-sm">
            <div className="lg:col-span-6 order-2 lg:order-1 relative h-72 sm:h-80 w-full rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/services/wind_solar_hybrid.png"
                alt="Renewable Energy Park Asset Repowering and M&A Transactions"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <div className="flex items-center gap-2 text-amber-700 text-xs font-mono font-bold uppercase tracking-wider">
                <RefreshCw className="w-4 h-4" />
                <span>PILLAR 02 — REPOWERING & M&A TRANSACTIONS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Asset Repowering & M&A Transaction Support
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                Techno-commercial advisory for repowering aging wind and solar assets alongside end-to-end transaction support for project acquisitions, portfolio divestments, mergers, asset packaging, and red-flag due diligence.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Legacy wind turbine repowering feasibility & high-rating WTG substitution</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Techno-commercial due diligence & red-flag risk dossiers for acquirers</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Asset valuation, revenue yield cash flow audit & buyer transaction support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 03: Green Hydrogen, BESS & Offshore Wind Advisory */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-500/40 transition-all duration-300 shadow-sm">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-sky-700 text-xs font-mono font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>PILLAR 03 — EMERGING TECH & OFFSHORE WIND</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Green Hydrogen, BESS & Offshore Wind Advisory
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                Specialized consulting for emerging clean technologies—including Green Hydrogen electrolysers, Green Ammonia, utility-scale BESS storage integration, Round-the-Clock (RTC) hybrid power design, and Offshore Wind feasibility in India.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span>Green Hydrogen electrolyser selection & LCOH financial cost modeling</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span>Utility-scale BESS storage integration & ancillary grid market advisory</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span>Offshore wind site screening, MNRE policy & maritime supply chain review</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-72 sm:h-80 w-full rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/services/bess_energy_storage.png"
                alt="Battery Energy Storage System BESS and Green Hydrogen Advisory"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
