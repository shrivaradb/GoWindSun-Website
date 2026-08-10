"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { IndiaSvgMap } from "@/components/projects/IndiaSvgMap";
import { ProjectStatePanel } from "@/components/projects/ProjectStatePanel";
import { hybridProjectsData, getProjectsByState, getActiveStateCodes } from "@/data/acquisitionProjects";
import { Layers, ChevronRight, Compass, ShieldCheck, Activity, BatteryCharging } from "lucide-react";

export default function HybridProjectsPage() {
  const [selectedStateCode, setSelectedStateCode] = useState<string | null>("IN-RJ");
  const activeStateCodes = getActiveStateCodes("hybrid");
  const currentProjects = selectedStateCode ? getProjectsByState("hybrid", selectedStateCode) : [];

  return (
    <div className="bg-white min-h-screen text-slate-900 pt-28 pb-20">
      {/* 1. Dedicated Hybrid Intro Banner */}
      <section className="bg-[#06111F] text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <Container>
          <div className="space-y-6 max-w-4xl">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-300">
              <Link href="/projects-for-acquisition" className="hover:text-emerald-400 transition-colors">
                Projects for Acquisition
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-emerald-400 font-bold">Hybrid Projects</span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase">
              <Layers className="w-4 h-4 text-emerald-400 animate-spin-slow" />
              <span>CO-LOCATED WIND-SOLAR HYBRID &amp; BESS ASSETS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              HYBRID PROJECTS FOR <span className="text-emerald-400">ACQUISITION.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl">
              Explore co-located wind-solar hybrid project sites engineered for maximum Capacity Utilization Factor (CUF), shared EHV transmission pooling substations, and BESS energy storage readiness.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>CUF Improvement &amp; Shared Capex Efficiency</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <BatteryCharging className="w-3.5 h-3.5 text-sky-400" />
                <span>BESS Integration &amp; Peak Shaving</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>ISTS / STU Pooling Station Clearances</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Interactive Map & State Project Panel Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">
              INTERACTIVE STATE ACQUISITION MAP
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              SELECT STATE TO INSPECT HYBRID OPPORTUNITIES
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Click on an individual state on the interactive map below to load co-located hybrid project opportunities, land parcels, capacity, and development status.
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
                category="hybrid"
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
              <div className="text-xs font-mono font-bold text-emerald-700 uppercase">
                Co-Location Optimization
              </div>
              <h3 className="text-base font-bold text-slate-900">Complementary Generation Profiles</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Combining solar daytime peak with wind evening/night velocity to deliver near round-the-clock (RTC) green power and smooth generation curves.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-700 uppercase">
                Shared Transmission Infrastructure
              </div>
              <h3 className="text-base font-bold text-slate-900">Capex &amp; Opex Line Efficiency</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Optimizing high-voltage substation bays, land footprint, and transmission corridor lines to reduce interconnection Capex.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-700 uppercase">
                Battery Storage Readiness
              </div>
              <h3 className="text-base font-bold text-slate-900">BESS Frequency &amp; Ramp Control</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Preparedness for LFP containerized battery storage addition for grid frequency stabilization, peak shaving, and firm dispatch.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
