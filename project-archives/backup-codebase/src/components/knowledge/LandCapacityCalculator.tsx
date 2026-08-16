"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { Compass, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const LandCapacityCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [techType, setTechType] = useState<"solar" | "wind" | "hybrid">("hybrid");
  const [capacityMW, setCapacityMW] = useState<number>(100);

  // Compute Acreage Requirements
  // Solar: ~3.8 Acres / MW
  // Wind: ~2.2 Acres / MW
  // Hybrid: ~2.8 Acres / MW (shared infrastructure efficiency)
  const getAcresPerMW = () => {
    switch (techType) {
      case "solar":
        return 3.8;
      case "wind":
        return 2.2;
      case "hybrid":
        return 2.8;
    }
  };

  const acresRequired = Math.round(capacityMW * getAcresPerMW());

  // Voltage Guidance
  const getVoltageGuidance = () => {
    if (capacityMW < 25) return "33 kV STU Substation";
    if (capacityMW <= 100) return "110 kV / 132 kV / 220 kV STU Substation";
    if (capacityMW <= 300) return "220 kV / 400 kV CTU (PGCIL) Substation";
    return "400 kV / 765 kV ISTS National Grid Corridor";
  };

  const getSubstationBayCount = () => {
    if (capacityMW <= 50) return "1 x 33/110kV Feeder Bay";
    if (capacityMW <= 150) return "1 x 220kV Dedicated Evacuation Bay";
    return "2 x 220kV/400kV Dual Circuit Transmission Bays";
  };

  return (
    <section className="py-16 bg-white text-slate-900 border-b border-slate-200">
      <Container>
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Section Heading */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0186D5] text-xs font-mono font-bold uppercase tracking-widest">
              <Compass className="w-4 h-4 text-[#0186D5]" />
              <span>TECHNICAL PLANNING WIDGET</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#1E4362] tracking-tight">
              LAND AREA &amp; GRID CAPACITY <span className="text-[#0186D5]">SIZING CALCULATOR</span>
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Calculate mandatory land bank acreage, recommended grid evacuation voltage levels, and substation bay requirements for utility-scale project development.
            </p>
          </div>

          {/* Calculator Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl">
            
            {/* Input Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Technology Selection */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase text-slate-700 tracking-wider block">
                  1. Select Generation Technology
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setTechType("solar")}
                    className={`py-3 px-2 rounded-xl text-xs font-mono font-bold uppercase border transition-all cursor-pointer ${
                      techType === "solar"
                        ? "bg-[#F97316] text-white border-orange-600 shadow-md"
                        : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                    }`}
                  >
                    Solar PV Array
                  </button>

                  <button
                    onClick={() => setTechType("wind")}
                    className={`py-3 px-2 rounded-xl text-xs font-mono font-bold uppercase border transition-all cursor-pointer ${
                      techType === "wind"
                        ? "bg-[#0186D5] text-white border-sky-600 shadow-md"
                        : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                    }`}
                  >
                    Wind Turbine
                  </button>

                  <button
                    onClick={() => setTechType("hybrid")}
                    className={`py-3 px-2 rounded-xl text-xs font-mono font-bold uppercase border transition-all cursor-pointer ${
                      techType === "hybrid"
                        ? "bg-[#059669] text-white border-emerald-600 shadow-md"
                        : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                    }`}
                  >
                    Wind-Solar Hybrid
                  </button>
                </div>
              </div>

              {/* 2. Target Project Capacity Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                  <span>2. Target Project Capacity (MW)</span>
                  <span className="text-[#0186D5] font-black text-base font-mono">
                    {capacityMW} MW
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={600}
                  step={10}
                  value={capacityMW}
                  onChange={(e) => setCapacityMW(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0186D5]"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>10 MW</span>
                  <span>100 MW</span>
                  <span>300 MW</span>
                  <span>600 MW</span>
                </div>
              </div>

              {/* Technical Rule Note */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1.5 shadow-xs">
                <div className="font-mono font-bold uppercase text-[#1E4362] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Land Acreage Sizing Baseline</span>
                </div>
                <p className="leading-relaxed">
                  {techType === "solar" && "Calculated at ~3.8 Acres per MW for bifacial modules with single-axis tracking."}
                  {techType === "wind" && "Calculated at ~2.2 Acres per MW for high-hub WTG micro-siting and transformer footprint."}
                  {techType === "hybrid" && "Calculated at ~2.8 Acres per MW featuring shared pooling substation footprint synergy."}
                </p>
              </div>

            </div>

            {/* Results Column (5 cols) */}
            <div className="lg:col-span-5 bg-[#06111F] text-white rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-2xl">
              
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest border-b border-slate-800 pb-3">
                  SIZING SPECIFICATION RESULTS
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-[11px] font-mono text-slate-400 uppercase font-bold">
                      Estimated Total Land Bank Required
                    </div>
                    <div className="text-2xl font-black text-amber-400 font-mono">
                      ~{acresRequired.toLocaleString()} <span className="text-sm font-bold text-white">Acres</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-[11px] font-mono text-slate-400 uppercase font-bold">
                      Recommended Grid Interconnection Voltage
                    </div>
                    <div className="text-lg font-black text-[#0186D5] font-mono leading-tight">
                      {getVoltageGuidance()}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-[11px] font-mono text-slate-400 uppercase font-bold">
                      Substation Bay Allocation Sizing
                    </div>
                    <div className="text-sm font-bold text-emerald-400 font-mono leading-snug">
                      {getSubstationBayCount()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action Button */}
              <Button
                variant="primary"
                size="lg"
                className="group w-full bg-[#0186D5] hover:bg-[#0186D5]/90 text-white font-bold rounded-xl py-3.5 text-xs uppercase tracking-wider shadow-lg shadow-sky-500/25 cursor-pointer"
                onClick={() => navigate("/contact")}
              >
                <span>Request Custom Site Due Diligence</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};
