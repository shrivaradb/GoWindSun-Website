"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Wind, Compass, ShieldCheck, Activity, ArrowRight, Layers, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { StandardHero } from "@/components/ui/StandardHero";

export default function WindProjectsPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      {/* 1. Dedicated Wind Intro Banner */}
      <StandardHero
        title={
          <>
            Wind Projects For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
              Acquisition.
            </span>
          </>
        }
        subtitle="Utility-Scale Wind Asset Acquisition & Site Pipeline Across India."
        description="Bankable onshore wind turbine sites, micrositing assessments, wind resource data verification, clear-title land packages, and evacuation approval due diligence for IPPs and investors."
        image="/WIND PROJECTS FOR ACQUISITION.png"
        imageAlt="Wind Projects for Acquisition"
      />

      {/* 2. Three Wind Stage Selection Cards */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-widest">
              SELECT WIND DEVELOPMENT STAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              WIND PROJECT CATEGORIES
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Select a project stage below to view the interactive state-by-state acquisition map and detailed asset dossiers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* STAGE 1: GREENFIELD WIND */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0186D5] font-mono font-bold text-sm">
                  01
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#0186D5] font-bold uppercase tracking-widest">
                    EARLY STAGE
                  </span>
                  <h3 className="text-xl font-black uppercase text-slate-900 tracking-tight">
                    GREENFIELD WIND
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Early-stage wind sites with calibrated Met Mast WRA campaigns, land leasehold identification, and STU grid corridor screening.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link href="/projects-for-acquisition/wind/greenfield" className="block w-full">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group w-full bg-[#0186D5] hover:bg-[#0186D5]/90 text-white font-bold rounded-full py-3 text-xs uppercase tracking-wider cursor-pointer shadow-md shadow-sky-500/20"
                  >
                    <span>View Greenfield Map</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* STAGE 2: SHOVEL READY WIND */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0186D5] font-mono font-bold text-sm">
                  02
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#0186D5] font-bold uppercase tracking-widest">
                    PERMITTED STAGE
                  </span>
                  <h3 className="text-xl font-black uppercase text-slate-900 tracking-tight">
                    SHOVEL READY WIND
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Fully permitted land-secured wind projects with grid evacuation NOC in-hand, ready for immediate EPC civil execution and turbine erection.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link href="/projects-for-acquisition/wind/shovel-ready" className="block w-full">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group w-full bg-[#0186D5] hover:bg-[#0186D5]/90 text-white font-bold rounded-full py-3 text-xs uppercase tracking-wider cursor-pointer shadow-md shadow-sky-500/20"
                  >
                    <span>View Shovel Ready Map</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* STAGE 3: OPERATIONAL WIND */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0186D5] font-mono font-bold text-sm">
                  03
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#0186D5] font-bold uppercase tracking-widest">
                    COMMISSIONED ASSETS
                  </span>
                  <h3 className="text-xl font-black uppercase text-slate-900 tracking-tight">
                    OPERATIONAL WIND
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Commissioned wind farms with verified generation track records, active utility/corporate PPAs, and synchronized EHV evacuation lines.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link href="/projects-for-acquisition/wind/operational" className="block w-full">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group w-full bg-[#0186D5] hover:bg-[#0186D5]/90 text-white font-bold rounded-full py-3 text-xs uppercase tracking-wider cursor-pointer shadow-md shadow-sky-500/20"
                  >
                    <span>View Operational Map</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>
    </div>
  );
}
