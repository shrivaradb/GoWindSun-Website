"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { IndiaSvgMap } from "@/components/projects/IndiaSvgMap";
import { ProjectStatePanel } from "@/components/projects/ProjectStatePanel";
import { solarProjectsData, getProjectsByState, getActiveStateCodes } from "@/data/acquisitionProjects";
import { Sun, ChevronRight, Compass, ShieldCheck, Activity, Zap } from "lucide-react";

export default function SolarProjectsPage() {
  const [selectedStateCode, setSelectedStateCode] = useState<string | null>("IN-RJ");
  const activeStateCodes = getActiveStateCodes("solar");
  const currentProjects = selectedStateCode ? getProjectsByState("solar", selectedStateCode) : [];

  return (
    <div className="bg-white min-h-screen text-slate-900 pt-28 pb-20">
      {/* 1. Dedicated Solar Intro Banner */}
      <section className="bg-slate-950 text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <Container>
          <div className="space-y-6 max-w-4xl">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-300">
              <Link href="/projects-for-acquisition" className="hover:text-amber-400 transition-colors">
                Projects for Acquisition
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-amber-400 font-bold">Solar Projects</span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-amber-400 uppercase">
              <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              <span>UTILITY &amp; INDUSTRIAL SOLAR PV ASSETS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
              SOLAR PROJECTS FOR <span className="text-amber-400">ACQUISITION.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl">
              Discover clear-title ground-mounted solar park land parcels, high-GHI solar energy zones, tracker-compatible acreage, and ISTS / STU grid evacuation access across India.
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

      {/* 2. Interactive Map & State Project Panel Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest">
              INTERACTIVE STATE ACQUISITION MAP
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              SELECT STATE TO INSPECT SOLAR OPPORTUNITIES
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Click on an individual state on the interactive map below to load solar park opportunities, land acreage, capacity, and development status.
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
                category="solar"
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
              <div className="text-xs font-mono font-bold text-amber-700 uppercase">
                GHI &amp; Irradiance Screening
              </div>
              <h3 className="text-base font-bold text-slate-900">High Global Horizontal Irradiance</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Satellite &amp; ground-station GHI data verification for high annual specific yield (kWh/kWp) and optimal performance ratio (PR) modeling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-mono font-bold text-amber-700 uppercase">
                Land Acquisition &amp; Topography
              </div>
              <h3 className="text-base font-bold text-slate-900">Contour &amp; Soil Suitability</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Flat terrain screening, soil resistivity testing, flood risk assessment, and non-agricultural (NA) revenue conversion support.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-mono font-bold text-amber-700 uppercase">
                Power Evacuation &amp; PPA
              </div>
              <h3 className="text-base font-bold text-slate-900">Group Captive &amp; Third-Party PPA</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Open Access wheeling feasibility, STU/ISTS transmission clearance, and bankable corporate off-take PPA structuring.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
