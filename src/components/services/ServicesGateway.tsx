"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Wrench, Shield, CheckCircle2 } from "lucide-react";

export const ServicesGateway: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A1628] text-slate-100 border-b border-slate-800">
      <Container>
        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            Structured Services Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What Can GoWindSun Do For Your Renewable Energy Assets?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            GoWindSun delivers end-to-end solutions across two primary operational disciplines. Explore our dedicated service pages to understand how we support developers, investors, and industrial energy consumers.
          </p>
        </div>

        {/* 2-Column Split Pillar Gateway */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pillar 1: Project Services Card */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-b from-[#0F223A] to-[#0A192F] border border-slate-700/80 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Wrench className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 font-semibold">
                  PILLAR 01
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Project Services
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-light">
                Comprehensive onshore wind, utility solar, and hybrid energy project planning, site identification, grid evacuation, and performance optimization.
              </p>

              <div className="space-y-3 mb-8 border-t border-slate-800/80 pt-6">
                {[
                  "Greenfield Site Identification (~3,000 MW Pipeline)",
                  "Wind & Solar Resource Measurement (Bankable Data)",
                  "Encumbrance-Free Land Acquisition Support",
                  "STU & CTU Grid Evacuation & Connection Evaluation",
                  "Detailed Project Feasibility Reports (P50/P75/P90 DPR)",
                  "Turnkey Solar & Wind EPC & Structural Engineering",
                  "Performance Management & Underperforming Asset Diagnostics",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/services/project-services"
              className="inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-emerald-950/50"
            >
              <span>Explore Project Services →</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Pillar 2: Advisory Services Card */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-b from-[#0F223A] to-[#0A192F] border border-slate-700/80 hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/80 text-sky-300 font-semibold">
                  PILLAR 02
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Advisory Services
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-light">
                Multidisciplinary technical, commercial, financial, and regulatory advisory supporting developers, institutional investors, lenders, utilities, and commercial energy consumers.
              </p>

              <div className="space-y-3 mb-8 border-t border-slate-800/80 pt-6">
                {[
                  "Owner's Engineer & Owner's Representation Services",
                  "Lender's Engineer & Techno-Commercial Due Diligence",
                  "Corporate & Industrial (C&I) Open Access PPA Structuring",
                  "MNRE RLMM & Wind Turbine Type Certification Support",
                  "RE Auction Advisory, Tariff Modeling & Bidding Strategy",
                  "Power Sale Advisory, Energy Trading & REC Mechanisms",
                  "Market Intelligence, Technology Benchmarking & BESS Research",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/services/advisory-services"
              className="inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-sky-950/50"
            >
              <span>Explore Advisory Services →</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
