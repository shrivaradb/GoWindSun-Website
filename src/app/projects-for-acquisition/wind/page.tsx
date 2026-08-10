"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { IndiaSvgMap } from "@/components/projects/IndiaSvgMap";
import { ProjectStatePanel } from "@/components/projects/ProjectStatePanel";
import { windProjectsData, getProjectsByState, getActiveStateCodes } from "@/data/acquisitionProjects";
import { Wind, ChevronRight, Compass, ShieldCheck, Activity, BarChart3 } from "lucide-react";

export default function WindProjectsPage() {
  const [selectedStateCode, setSelectedStateCode] = useState<string | null>("IN-MH");
  const activeStateCodes = getActiveStateCodes("wind");
  const currentProjects = selectedStateCode ? getProjectsByState("wind", selectedStateCode) : [];

  return (
    <div className="bg-white min-h-screen text-slate-900 pt-28 pb-20">
      {/* 1. Dedicated Wind Intro Banner */}
      <section className="bg-[#06111F] text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <Container>
          <div className="space-y-6 max-w-4xl">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-300">
              <Link href="/projects-for-acquisition" className="hover:text-sky-400 transition-colors">
                Projects for Acquisition
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-sky-400 font-bold">Wind Projects</span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-sky-400 uppercase">
              <Wind className="w-4 h-4 text-sky-400 animate-spin-slow" />
              <span>UTILITY-SCALE WIND ENERGY ASSETS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              WIND PROJECTS FOR <span className="text-sky-400">ACQUISITION.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl">
              Explore utility-scale wind energy sites, calibrated met mast WRA data campaigns, high-hub height WTG micrositing, and EHV grid interconnection corridors across India&apos;s premier wind velocity states.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-sky-400" />
                <span>WAsP Aerodynamic Micro-Siting</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Clear-Title Land Due Diligence</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-amber-400" />
                <span>STU / CTU Evacuation Corridors</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Interactive Map & State Project Panel Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-widest">
              INTERACTIVE STATE ACQUISITION MAP
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              SELECT STATE TO INSPECT WIND OPPORTUNITIES
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Click on an individual state on the interactive map below to load state acquisition details, land parcels, capacity, and development status.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive SVG India Map Column */}
            <div className="lg:col-span-6">
              <IndiaSvgMap
                selectedState={selectedStateCode}
                onSelectState={(code) => setSelectedStateCode(code)}
                activeStateCodes={activeStateCodes}
              />
            </div>

            {/* Information Dossier Panel Column */}
            <div className="lg:col-span-6 h-full">
              <ProjectStatePanel
                selectedStateCode={selectedStateCode}
                projects={currentProjects}
                category="wind"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Supporting Technical Highlights */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-mono font-bold text-sky-700 uppercase">
                Met Mast WRA Validation
              </div>
              <h3 className="text-base font-bold text-slate-900">Bankable Wind Data</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                High-frequency data logging with calibrated anemometers, wind vane sensors, and temperature/pressure logging for bankable P50/P75/P90 DPR modeling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-mono font-bold text-sky-700 uppercase">
                Encumbrance-Free Title
              </div>
              <h3 className="text-base font-bold text-slate-900">Revenue & Land Due Diligence</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Verification of private, government, and leasehold land parcels, NA conversions, and State Nodal Agency (SNA) project sanctions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-mono font-bold text-sky-700 uppercase">
                Substation Grid Evacuation
              </div>
              <h3 className="text-base font-bold text-slate-900">High-Voltage Line Corridors</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Proximity verification to 132kV / 220kV / 400kV STU and ISTS pooling stations to ensure unhindered power evacuation.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
