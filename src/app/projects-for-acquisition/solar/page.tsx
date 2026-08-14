"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Sun, ShieldCheck, Activity, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SolarProjectsPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900 pt-28 pb-20">
      {/* 1. Dedicated Solar Intro Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <Container>
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-4 text-xs font-mono tracking-[0.25em] text-amber-400 uppercase">
              <span>SOLAR ASSET CATEGORIES</span>
              <span className="h-px w-8 bg-amber-400" />
              <span>UTILITY &amp; INDUSTRIAL SOLAR</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              SOLAR PROJECTS FOR <span className="text-amber-400">ACQUISITION.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl">
              Discover ground-mounted solar park land parcels, high-GHI solar zones, tracker-compatible acreage, and grid evacuation access categorized by project development stage.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Mono PERC / Bifacial PV Module Compatibility</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>NA Land &amp; Collector Clearances</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-sky-400" />
                <span>400kV / 220kV Pooling Substation Bays</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Three Solar Stage Selection Cards */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest">
              SELECT SOLAR DEVELOPMENT STAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              SOLAR PROJECT CATEGORIES
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Select a project stage below to view the interactive state-by-state acquisition map and detailed asset dossiers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* STAGE 1: GREENFIELD SOLAR */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#F97316] font-mono font-bold text-sm">
                  01
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#F97316] font-bold uppercase tracking-widest">
                    EARLY STAGE
                  </span>
                  <h3 className="text-xl font-black uppercase text-slate-900 tracking-tight">
                    GREENFIELD SOLAR
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  High-GHI ground-mounted solar land parcels, tracker-compatible acreage, title clearance pipeline, and STU/ISTS grid screening.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link href="/projects-for-acquisition/solar/greenfield" className="block w-full">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-full py-3 text-xs uppercase tracking-wider cursor-pointer shadow-md shadow-orange-500/20"
                  >
                    <span>View Greenfield Map</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* STAGE 2: SHOVEL READY SOLAR */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#F97316] font-mono font-bold text-sm">
                  02
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#F97316] font-bold uppercase tracking-widest">
                    PERMITTED STAGE
                  </span>
                  <h3 className="text-xl font-black uppercase text-slate-900 tracking-tight">
                    SHOVEL READY SOLAR
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Fully permitted solar park acreage with NA conversion complete, grid NOC secured, and ready for module &amp; tracker installation.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link href="/projects-for-acquisition/solar/shovel-ready" className="block w-full">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-full py-3 text-xs uppercase tracking-wider cursor-pointer shadow-md shadow-orange-500/20"
                  >
                    <span>View Shovel Ready Map</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* STAGE 3: OPERATIONAL SOLAR */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#F97316] font-mono font-bold text-sm">
                  03
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#F97316] font-bold uppercase tracking-widest">
                    COMMISSIONED ASSETS
                  </span>
                  <h3 className="text-xl font-black uppercase text-slate-900 tracking-tight">
                    OPERATIONAL SOLAR
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Fully commissioned ground-mounted solar plants with verified generation history, active PPA off-take, and synchronized evacuation.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link href="/projects-for-acquisition/solar/operational" className="block w-full">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-full py-3 text-xs uppercase tracking-wider cursor-pointer shadow-md shadow-orange-500/20"
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
