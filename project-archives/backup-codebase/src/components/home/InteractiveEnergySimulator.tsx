"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Sun, Wind, Sliders, Zap, Leaf, IndianRupee, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const InteractiveEnergySimulator: React.FC = () => {
  const [techType, setTechType] = useState<"solar" | "wind" | "hybrid">("hybrid");
  const [capacityMW, setCapacityMW] = useState<number>(50);
  const [tariffRate, setTariffRate] = useState<number>(6.5); // INR per kWh commercial tariff

  // Calculation formulas based on India solar/wind capacity factors
  const getYieldDetails = () => {
    let cuFactor = 0.22; // Solar average CUF ~22%
    let windCuFactor = 0.38; // Wind average CUF ~38%

    let annualGWh = 0;
    if (techType === "solar") {
      annualGWh = (capacityMW * 8760 * cuFactor) / 1000;
    } else if (techType === "wind") {
      annualGWh = (capacityMW * 8760 * windCuFactor) / 1000;
    } else {
      // Hybrid combined average CUF ~45% due to time diversity
      annualGWh = (capacityMW * 8760 * 0.45) / 1000;
    }

    const co2MitigatedTons = Math.round(annualGWh * 820); // ~820 tons CO2 per GWh in India grid
    const annualSavingsCrores = ((annualGWh * 1000000 * tariffRate) / 10000000).toFixed(2);
    const estimatedLandAcres = techType === "solar" ? capacityMW * 4 : techType === "wind" ? capacityMW * 6 : capacityMW * 4.5;

    return {
      annualGWh: annualGWh.toFixed(1),
      co2MitigatedTons: co2MitigatedTons.toLocaleString("en-IN"),
      annualSavingsCrores,
      estimatedLandAcres: Math.round(estimatedLandAcres),
    };
  };

  const results = getYieldDetails();

  return (
    <Section id="simulator" className="bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          badge="Engineering Simulation"
          title="Interactive Renewable Yield & ROI Calculator"
          subtitle="Estimate annual gigawatt-hour (GWh) yield, carbon reduction, and financial impact tailored to your enterprise scale."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Panel (6 Cols) */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <Sliders className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-bold text-slate-900">Project Parameters</h3>
              </div>
              <span className="text-xs font-semibold text-slate-500">CEA Standards</span>
            </div>

            {/* Tech Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Technology Configuration
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "solar", label: "Solar PV", icon: Sun },
                  { id: "wind", label: "Wind Energy", icon: Wind },
                  { id: "hybrid", label: "Solar-Wind Hybrid", icon: Zap },
                ].map((item) => {
                  const Icon = item.icon;
                  const active = techType === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setTechType(item.id as any)}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-2 transition-all ${
                        active
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-md"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Capacity Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Target Infrastructure Capacity
                </label>
                <span className="text-lg font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                  {capacityMW} MW
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={250}
                step={5}
                value={capacityMW}
                onChange={(e) => setCapacityMW(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
                <span>5 MW (Industrial)</span>
                <span>100 MW (Utility Park)</span>
                <span>250 MW (Mega Project)</span>
              </div>
            </div>

            {/* Grid Tariff Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Discom Industrial Tariff Benchmark
                </label>
                <span className="text-base font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200">
                  ₹{tariffRate} / kWh
                </span>
              </div>
              <input
                type="range"
                min={4.5}
                max={9.5}
                step={0.5}
                value={tariffRate}
                onChange={(e) => setTariffRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
            </div>
          </div>

          {/* Simulation Output Dashboard (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              key={`${techType}-${capacityMW}-${tariffRate}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-8"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Calculated Yield Matrix
                </span>
                <span className="text-xs font-semibold text-slate-500">Simulated Output</span>
              </div>

              {/* Metric 1: Annual Energy Yield */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-sky-600 mb-1">
                    <Zap className="w-4 h-4" />
                    <span className="text-xs font-bold text-slate-500">Annual Output</span>
                  </div>
                  <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    {results.annualGWh} <span className="text-sm font-normal text-slate-500">GWh</span>
                  </p>
                  <p className="text-[11px] text-slate-500">High-availability grid dispatch</p>
                </div>

                {/* Metric 2: CO2 Avoided */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-600 mb-1">
                    <Leaf className="w-4 h-4" />
                    <span className="text-xs font-bold text-slate-500">CO2 Avoided</span>
                  </div>
                  <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    {results.co2MitigatedTons} <span className="text-sm font-normal text-slate-500">Tons</span>
                  </p>
                  <p className="text-[11px] text-slate-500">ESG zero-carbon credit</p>
                </div>
              </div>

              {/* Metric 3: Financial Tariff Savings */}
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                    <IndianRupee className="w-4 h-4" /> Annual Offtake Value
                  </span>
                  <span className="text-xs font-bold text-emerald-700">PPA Savings</span>
                </div>
                <p className="text-4xl font-black text-slate-900 tracking-tight">
                  ₹{results.annualSavingsCrores} <span className="text-lg font-bold text-emerald-700">Cr / Year</span>
                </p>
                <p className="text-xs text-slate-600">
                  Estimated land footprint: ~{results.estimatedLandAcres} acres required.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <p className="text-xs text-slate-500">
                  Looking for a detailed PVSyst feasibility report?
                </p>
                <Button
                  variant="primary"
                  size="sm"
                  icon
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                >
                  Request Detailed Study
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
