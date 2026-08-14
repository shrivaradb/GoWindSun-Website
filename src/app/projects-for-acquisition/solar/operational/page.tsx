"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { IndiaSvgMap } from "@/components/projects/IndiaSvgMap";
import { SolarOperationalStatePanel } from "@/components/projects/SolarOperationalStatePanel";
import { solarOperationalDataset } from "@/data/acquisition/solarOperationalData";
import { Compass, ShieldCheck, Activity } from "lucide-react";

export default function OperationalSolarProjectsPage() {
  const [selectedStateCode, setSelectedStateCode] = useState<string | null>(null);
  const activeStateCodes = Object.keys(solarOperationalDataset);
  const currentRecords = selectedStateCode ? solarOperationalDataset[selectedStateCode] || [] : [];

  return (
    <div className="bg-white min-h-screen text-slate-900 w-full pt-28 pb-20">
      {/* Intro Banner — Group B Layout & 3-Tier Typography */}
      <section className="bg-[#06111F] text-white py-16 flex flex-col justify-center relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white tracking-tight leading-tight">
              OPERATIONAL SOLAR ASSETS <br />
              <span className="text-amber-400">COMMISSIONED &amp; GENERATING.</span>
            </h1>

            <p className="text-2xl sm:text-3xl font-normal text-slate-200 mt-4">
              Revenue-Generating Solar Parks &amp; Operational PPA Portfolios.
            </p>

            <p className="text-base sm:text-lg font-normal text-slate-300 max-w-3xl mt-6">
              Utility-scale operational solar power plant opportunities with active power generation history, mapped by District, State, CTU/STU, and MW Capacity.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map & State Project Panel */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-widest">
              INTERACTIVE STATE MAP — OPERATIONAL SOLAR
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              SELECT STATE TO INSPECT OPERATIONAL SOLAR ASSETS
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              Click on an individual state on the interactive map below to load Operational Solar project records mapped by District, State, CTU/STU, and Capacity in MW.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <IndiaSvgMap
                selectedState={selectedStateCode}
                onSelectState={(code) => setSelectedStateCode(code)}
                activeStateCodes={activeStateCodes}
                category="solar"
              />
            </div>

            <div className="lg:col-span-6 h-full">
              <SolarOperationalStatePanel
                selectedStateCode={selectedStateCode}
                records={currentRecords}
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
