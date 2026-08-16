import { SEO } from "@/components/seo/SEO";
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Wind, Sun, Layers, ShieldCheck, Zap, BarChart3, Building2, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { StandardHero } from "@/components/ui/StandardHero";

export default function ProjectsForAcquisitionMainPage() {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      <SEO title="Projects For Acquisition" description="Bankable utility-scale wind, solar, and hybrid project opportunities available for acquisition across India." canonical="/projects-for-acquisition" />
      {/* 1. Bespoke Hero Section */}
      <StandardHero
        title={
          <>
            Projects For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
              Acquisition.
            </span>
          </>
        }
        subtitle="Strategic transaction advisory, project screening, clear-title land verification, and M&A due diligence for utility-scale wind, solar, and hybrid energy assets across India."
        description="GoWindSun India Private Limited connects Independent Power Producers (IPPs), project developers, corporate investors, and institutional funds with bankable, high-CUF renewable energy acquisition opportunities, enabling efficient access to quality operating and development-stage assets."
        image="/PROJECTS FOR ACQUISITION.png"
        imageAlt="GoWindSun Projects for Acquisition"
      />

      {/* 2. Process & Advisory Framework */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-widest">
              OUR ROLE &amp; TRANSACTION PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              END-TO-END ASSET ACQUISITION ADVISORY
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              We facilitate transparent, bankable, and legally verified renewable energy asset acquisitions from early-stage greenfield land banks to commissioned operational projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900">Project Screening &amp; Due Diligence</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Independent technical due diligence, WRA/GHI yield validation, DPR audit, and legal clear-title land record verification.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900">Grid Evacuation &amp; Regulatory Clearance</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Verification of STU/CTU substation bay allocations, State Nodal Agency (SNA) approvals, and Open Access wheeling feasibility.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900">Transaction Structuring &amp; Closing</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Structuring 100% equity acquisitions, joint development agreements, Group Captive models, and long-term PPA off-take contracts.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Three Visually Distinct Category Navigation Cards */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-widest">
              EXPLORE BY ASSET CATEGORY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
              SELECT ACQUISITION DOMAIN
            </h2>
            <p className="text-slate-600 font-light text-sm sm:text-base">
              Explore interactive state-by-state project opportunities across Wind, Solar, and Hybrid energy corridors in India.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* CARD 1: WIND PROJECTS */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-[#06111F] text-white border border-slate-800 shadow-2xl flex flex-col justify-between space-y-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-3xl rounded-full" />
              
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Wind className="w-6 h-6 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest">
                    CATEGORY 01
                  </span>
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                    WIND PROJECTS
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Utility-scale wind energy project sites, high-hub height WTG micrositing, met mast WRA data campaigns, and EHV grid interconnection corridors.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 space-y-4 relative z-10">
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Interactive Map Explorer</span>
                  <span className="text-sky-400 font-bold">State Dossiers</span>
                </div>

                <Link href="/projects-for-acquisition/wind" className="block w-full">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group w-full bg-[#0186D5] hover:bg-[#0186D5]/90 text-white font-bold rounded-full py-3.5 text-xs uppercase tracking-wider cursor-pointer shadow-md shadow-sky-500/25 border border-sky-300/30"
                  >
                    <span>Explore Wind Map &amp; Opportunities</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* CARD 2: SOLAR PROJECTS */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl flex flex-col justify-between space-y-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full" />
              
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Sun className="w-6 h-6 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
                    CATEGORY 02
                  </span>
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                    SOLAR PROJECTS
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Clear-title ground-mounted solar park land parcels, high-GHI solar zones, tracker-ready sites, and STU/ISTS grid evacuation access.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 space-y-4 relative z-10">
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Interactive Map Explorer</span>
                  <span className="text-amber-400 font-bold">State Dossiers</span>
                </div>

                <Link href="/projects-for-acquisition/solar" className="block w-full">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group w-full bg-[#0186D5] hover:bg-[#0186D5]/90 text-white font-bold rounded-full py-3.5 text-xs uppercase tracking-wider cursor-pointer shadow-md shadow-sky-500/25 border border-sky-300/30"
                  >
                    <span>Explore Solar Map &amp; Opportunities</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* CARD 3: HYBRID PROJECTS */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-[#06111F] text-white border border-slate-800 shadow-2xl flex flex-col justify-between space-y-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full" />
              
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Layers className="w-6 h-6 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">
                    CATEGORY 03
                  </span>
                  <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                    HYBRID PROJECTS
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Co-located wind-solar hybrid project sites engineered for maximum Capacity Utilization Factor (CUF), shared pooling substations, and BESS readiness.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 space-y-4 relative z-10">
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Interactive Map Explorer</span>
                  <span className="text-emerald-400 font-bold">State Dossiers</span>
                </div>

                <Link href="/projects-for-acquisition/hybrid" className="block w-full">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group w-full bg-[#0186D5] hover:bg-[#0186D5]/90 text-white font-bold rounded-full py-3.5 text-xs uppercase tracking-wider cursor-pointer shadow-md shadow-sky-500/25 border border-sky-300/30"
                  >
                    <span>Explore Hybrid Map &amp; Opportunities</span>
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
