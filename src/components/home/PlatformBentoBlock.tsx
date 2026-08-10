"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Compass, Hammer, Building2 } from "lucide-react";

export const PlatformBentoBlock: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-700">
            Platform Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Integrated Clean Energy Platform
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Unifying Greenfield Development, IPP Asset Ownership, Turnkey EPC Execution, and Strategic Advisory into a single bankable enterprise platform.
          </p>
        </div>

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* BENTO HERO BLOCK (8 Cols): Asset Development & Greenfield Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 bg-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-8 shadow-xl relative overflow-hidden"
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
                  GoWindSun has identified high-potential wind and solar greenfield development sites across India with an identified pipeline capacity of <strong>nearly 3,000 MW</strong> located near State (STU) and National (CTU) grid substations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>~3,000 MW Identified Site Pipeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Wind Mast Installation & Resource Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>STU & CTU Grid Evacuation Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bankable P50/P75/P90 DPR Yield Reports</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs font-bold uppercase tracking-widest text-slate-400 relative z-10">
              Greenfield Pipeline & Site Acquisition
            </div>
          </motion.div>

          {/* BENTO SIDE BLOCK (4 Cols): IPP Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 bg-emerald-50/70 p-8 rounded-3xl border border-emerald-200 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-emerald-700">02</span>
                <div className="p-3 rounded-2xl bg-white text-emerald-700 border border-emerald-200">
                  <Building2 className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900">
                IPP Asset Platform
              </h3>

              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                Dedicated Independent Power Producer platform developing, owning, operating, and managing renewable assets with equity, strategic, and portfolio participation for institutional capital.
              </p>
            </div>

            <div className="pt-4 border-t border-emerald-200 text-xs font-bold uppercase tracking-wider text-emerald-800">
              Independent Power Producer
            </div>
          </motion.div>

          {/* BENTO BOTTOM LEFT (6 Cols): Consulting & Advisory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-slate-300">03</span>
                <div className="p-3 rounded-2xl bg-slate-50 text-slate-800 border border-slate-200">
                  <Compass className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900">
                Consulting & Technical Advisory
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Integrated strategic, financial, and technical advisory providing Bankable DPRs (P50/P75/P90), Owner's Engineer, Lender's Engineer, Technical Due Diligence, Auction Advisory, and MNRE RLMM/Type Certification.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
              Techno-Commercial Advisory
            </div>
          </motion.div>

          {/* BENTO BOTTOM RIGHT (6 Cols): EPC Execution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black text-slate-300">04</span>
                <div className="p-3 rounded-2xl bg-slate-50 text-slate-800 border border-slate-200">
                  <Hammer className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900">
                Turnkey EPC & EHV Substation
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Engineering, procurement, and construction for utility solar, wind, hybrid, and BESS projects. EHV substation construction (33kV to 400kV), transmission line routing, SCADA, and SLDC grid synchronization.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
              Turnkey EPC Execution
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
