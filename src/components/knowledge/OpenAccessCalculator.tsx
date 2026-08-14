"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { Calculator, ArrowRight, CheckCircle2, TrendingUp, DollarSign } from "lucide-react";

const STATE_CONFIGS = [
  { code: "MH", name: "Maharashtra", avgDiscomTariff: 9.2, landedCost: 4.9, cssExemption: true },
  { code: "GJ", name: "Gujarat", avgDiscomTariff: 8.5, landedCost: 4.7, cssExemption: true },
  { code: "RJ", name: "Rajasthan", avgDiscomTariff: 8.8, landedCost: 4.6, cssExemption: true },
  { code: "KA", name: "Karnataka", avgDiscomTariff: 8.2, landedCost: 4.8, cssExemption: true },
  { code: "TN", name: "Tamil Nadu", avgDiscomTariff: 8.9, landedCost: 4.9, cssExemption: true },
];

export const OpenAccessCalculator: React.FC = () => {
  const navigate = useNavigate();
  const [selectedStateCode, setSelectedStateCode] = useState<string>("MH");
  const [monthlyUnits, setMonthlyUnits] = useState<number>(500000); // 5 Lakh Units
  const [discomTariff, setDiscomTariff] = useState<number>(9.20);
  const [sourcingModel, setSourcingModel] = useState<"group-captive" | "third-party">("group-captive");

  const currentState = STATE_CONFIGS.find((s) => s.code === selectedStateCode) || STATE_CONFIGS[0];

  // Calculate landed cost based on model
  // Group Captive: CSS (~1.80/unit) and AS (~1.10/unit) are EXempt.
  // Third Party: CSS & AS apply (~2.20/unit total addition).
  const effectiveLandedCost =
    sourcingModel === "group-captive"
      ? currentState.landedCost
      : currentState.landedCost + 2.20;

  const savingsPerUnit = Math.max(0, discomTariff - effectiveLandedCost);
  const monthlySavingsRs = Math.round(monthlyUnits * savingsPerUnit);
  const annualSavingsRs = monthlySavingsRs * 12;
  const annualSavingsLakhs = (annualSavingsRs / 100000).toFixed(2);
  const savingsPercentage = discomTariff > 0 ? ((savingsPerUnit / discomTariff) * 100).toFixed(1) : "0.0";

  const handleStateChange = (code: string) => {
    setSelectedStateCode(code);
    const st = STATE_CONFIGS.find((s) => s.code === code);
    if (st) {
      setDiscomTariff(st.avgDiscomTariff);
    }
  };

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      <Container>
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Section Heading */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest">
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>INTERACTIVE DECISION UTILITY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
              OPEN ACCESS TARIFF <span className="text-emerald-400">SAVINGS ESTIMATOR</span>
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Estimate your annual electricity bill savings by transitioning your commercial or industrial facility to off-site Group Captive or Third-Party Open Access renewable power.
            </p>
          </div>

          {/* Calculator Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            
            {/* Input Controls Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Select State */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase text-slate-300 tracking-wider block">
                  1. Select Facility State Location
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {STATE_CONFIGS.map((st) => (
                    <button
                      key={st.code}
                      onClick={() => handleStateChange(st.code)}
                      className={`py-2.5 rounded-xl text-xs font-mono font-bold uppercase border transition-all cursor-pointer ${
                        selectedStateCode === st.code
                          ? "bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-500/20"
                          : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      {st.code}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Sourcing Model Selection */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase text-slate-300 tracking-wider block">
                  2. Choose Renewable Procurement Structure
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSourcingModel("group-captive")}
                    className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                      sourcingModel === "group-captive"
                        ? "bg-emerald-950/60 border-emerald-500 text-white"
                        : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <div className="text-xs font-bold font-mono text-emerald-400 uppercase">
                      Group Captive Model
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1 leading-tight">
                      26% Equity Share | Exemption from CSS &amp; Additional Surcharge
                    </div>
                  </button>

                  <button
                    onClick={() => setSourcingModel("third-party")}
                    className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                      sourcingModel === "third-party"
                        ? "bg-sky-950/60 border-sky-500 text-white"
                        : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <div className="text-xs font-bold font-mono text-sky-400 uppercase">
                      Third-Party Sale
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1 leading-tight">
                      Zero Equity | CSS &amp; Additional Surcharge Applicable
                    </div>
                  </button>
                </div>
              </div>

              {/* 3. Monthly Power Consumption Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  <span>3. Monthly Electricity Consumption</span>
                  <span className="text-emerald-400 font-black text-sm">
                    {(monthlyUnits / 100000).toFixed(1)} Lakh Units ({monthlyUnits.toLocaleString()} kWh)
                  </span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={5000000}
                  step={50000}
                  value={monthlyUnits}
                  onChange={(e) => setMonthlyUnits(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>1 Lakh Units (100k kWh)</span>
                  <span>25 Lakh Units</span>
                  <span>50 Lakh Units (5M kWh)</span>
                </div>
              </div>

              {/* 4. Current Discom Grid Tariff */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  <span>4. Existing Discom Grid Tariff (₹/kWh)</span>
                  <span className="text-amber-400 font-black text-sm">₹{discomTariff.toFixed(2)} / kWh</span>
                </div>
                <input
                  type="range"
                  min={6.5}
                  max={12.0}
                  step={0.1}
                  value={discomTariff}
                  onChange={(e) => setDiscomTariff(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>₹6.50/kWh</span>
                  <span>₹9.00/kWh (Avg C&amp;I)</span>
                  <span>₹12.00/kWh</span>
                </div>
              </div>

            </div>

            {/* Calculations & Results Output Column (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-3 flex items-center justify-between">
                  <span>ESTIMATED SAVINGS SUMMARY</span>
                  <span className="text-emerald-400 font-mono">({currentState.name})</span>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <div className="text-[11px] font-mono text-slate-400 uppercase font-bold">
                      Estimated Landed Green Tariff
                    </div>
                    <div className="text-xl font-black text-white font-mono">
                      ₹{effectiveLandedCost.toFixed(2)} <span className="text-xs font-normal text-slate-400">/ kWh</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 space-y-1">
                    <div className="text-[11px] font-mono text-emerald-400 uppercase font-bold">
                      Net Savings Per Unit
                    </div>
                    <div className="text-2xl font-black text-emerald-400 font-mono">
                      ₹{savingsPerUnit.toFixed(2)} <span className="text-xs font-normal text-emerald-300 font-sans">({savingsPercentage}% Reduction)</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-1">
                    <div className="text-[11px] font-mono text-amber-400 uppercase font-bold">
                      Projected Annual Savings
                    </div>
                    <div className="text-3xl font-black text-amber-400 font-mono">
                      ₹{annualSavingsLakhs} <span className="text-base font-bold text-white">Lakhs / Year</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Calculated for {currentState.name} Open Access Matrix</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Includes STU Wheeling Losses &amp; Discom Adjustments</span>
                  </div>
                </div>
              </div>

              {/* Call to Action Button */}
              <Button
                variant="primary"
                size="lg"
                className="group w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl py-3.5 text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/25 cursor-pointer"
                onClick={() => navigate("/contact")}
              >
                <span>Request Custom Corporate PPA Proposal</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};
