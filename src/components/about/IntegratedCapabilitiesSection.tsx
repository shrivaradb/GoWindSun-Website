"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Compass, Hammer, Building2 } from "lucide-react";

export const IntegratedCapabilitiesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-700">
            Platform Structure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our 4 Integrated Platform Pillars
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Combining Consulting, EPC, Asset Development, and Independent Power Production (IPP) into a unified, bankable platform.
          </p>
        </div>

        {/* Asymmetric Bento Grid Layout with Rich Dark Logo-Sourced Colors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* BENTO HERO BLOCK (8 Cols): Pillar 01 - Asset Development (Dark Slate Navy) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-8 shadow-xl relative overflow-hidden group"
          >
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-emerald-400">01</span>
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> Core Growth Engine
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Asset Development & Greenfield Pipeline
                </h3>
                <p className="text-slate-300 text-base leading-relaxed max-w-2xl font-normal">
                  GoWindSun has identified high-potential wind and solar greenfield development sites across India with an identified pipeline capacity of <strong className="text-emerald-400 font-bold">~3,000 MW</strong> located near State (STU) and National (CTU) grid substations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>~3,000 MW Identified Site Pipeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Wind Mast Installation & Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>STU & CTU Grid Evacuation Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Encumbrance-Free Land Acquisition</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs font-bold uppercase tracking-widest text-emerald-400 relative z-10">
              Pillar 01 — Greenfield Development & Land Banking
            </div>
          </motion.div>

          {/* BENTO SIDE BLOCK (4 Cols): Pillar 02 - IPP Platform (Dark Deep Forest Emerald Green) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 bg-[#064E3B] text-white p-8 rounded-3xl border border-emerald-800 flex flex-col justify-between space-y-6 shadow-xl hover:border-emerald-700 transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-emerald-400">02</span>
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  <Building2 className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-white">
                IPP Asset Platform
              </h3>

              <p className="text-sm text-emerald-100/90 leading-relaxed font-normal">
                Dedicated Independent Power Producer platform developing, owning, operating, and managing renewable assets with equity, strategic, and portfolio participation for institutional capital.
              </p>

              <div className="space-y-2 pt-2 text-xs font-semibold text-emerald-200">
                <p>• Equity Participation Options</p>
                <p>• Institutional Co-Investments</p>
                <p>• Long-Term Offtake Cashflows</p>
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-800/80 text-xs font-bold uppercase tracking-wider text-emerald-300">
              Pillar 02 — Independent Power Producer
            </div>
          </motion.div>

          {/* BENTO BOTTOM LEFT (6 Cols): Pillar 03 - Consulting & Advisory (Dark Deep Ocean Sky Blue) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 bg-[#0C4A6E] text-white p-8 rounded-3xl border border-sky-800 flex flex-col justify-between space-y-6 shadow-xl hover:border-sky-700 transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-sky-300">03</span>
                <div className="p-3 rounded-2xl bg-sky-500/20 text-sky-200 border border-sky-500/40">
                  <Compass className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-white">
                Consulting & Technical Advisory
              </h3>

              <p className="text-sm text-sky-100/90 leading-relaxed font-normal">
                Integrated strategic, financial, and technical advisory providing Bankable DPRs (P50/P75/P90), Owner's Engineer, Lender's Engineer, Technical Due Diligence, Auction Advisory, and MNRE ALMM/Type Certification.
              </p>
            </div>

            <div className="pt-4 border-t border-sky-800/80 text-xs font-bold uppercase tracking-wider text-sky-300">
              Pillar 03 — Techno-Commercial Advisory
            </div>
          </motion.div>

          {/* BENTO BOTTOM RIGHT (6 Cols): Pillar 04 - EPC Execution (Dark Deep Amber Bronze) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-6 bg-[#78350F] text-white p-8 rounded-3xl border border-amber-800 flex flex-col justify-between space-y-6 shadow-xl hover:border-amber-700 transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-amber-300">04</span>
                <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-200 border border-amber-500/40">
                  <Hammer className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-white">
                Turnkey EPC & Grid Substation
              </h3>

              <p className="text-sm text-amber-100/90 leading-relaxed font-normal">
                Engineering, procurement, and construction for utility solar, wind, hybrid, and BESS projects. EHV substation construction (33kV to 400kV), transmission line routing, SCADA, and SLDC grid synchronization.
              </p>
            </div>

            <div className="pt-4 border-t border-amber-800/80 text-xs font-bold uppercase tracking-wider text-amber-300">
              Pillar 04 — EPC Execution & EHV Grid
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
