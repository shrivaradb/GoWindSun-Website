"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import {
  Activity,
  Wrench,
  TrendingUp,
  ShieldCheck,
  RotateCw,
  ArrowRight,
} from "lucide-react";

const pipelineStages = [
  {
    stage: "01",
    label: "MONITOR",
    title: "Continuous SCADA & Field Telemetry",
    icon: Activity,
    color: "emerald",
    badge: "Stage 01",
    description:
      "Real-time supervisory data logging, SCADA integration, vibration monitoring, and high-frequency parameter tracking across wind turbines, solar PV arrays, BESS, and substation transformers.",
    points: [
      "24/7 SCADA data integration & alarm management",
      "WTG vibration analysis & gearbox oil health",
      "Solar PV inverter string performance telemetry",
    ],
  },
  {
    stage: "02",
    label: "MAINTAIN",
    title: "Preventive & Condition-Based Maintenance",
    icon: Wrench,
    color: "amber",
    badge: "Stage 02",
    description:
      "Structured preventive maintenance schedules combined with predictive condition monitoring (thermal imaging, oil breakdown testing) and 24/7 corrective emergency repair teams.",
    points: [
      "Scheduled electrical BoP & mechanical servicing",
      "Predictive thermography & insulation testing",
      "24/7 rapid breakdown response & spare replacement",
    ],
  },
  {
    stage: "03",
    label: "OPTIMIZE",
    title: "Underperforming Asset Diagnostics",
    icon: TrendingUp,
    color: "sky",
    badge: "Stage 03",
    description:
      "Root-cause failure investigation, yield degradation diagnostics, clipping & curtailment analysis, and spare parts inventory optimization to recover lost energy generation.",
    points: [
      "Root-cause audit of underperforming strings & WTGs",
      "Energy loss breakdown & generation recovery plans",
      "Strategic spare parts warehousing & AMC governance",
    ],
  },
  {
    stage: "04",
    label: "IMPROVE AVAILABILITY",
    title: "Plant Availability & Uptime Maximization",
    icon: ShieldCheck,
    color: "emerald",
    badge: "Stage 04",
    description:
      "Eliminating forced outages, optimizing grid downtime, streamlining planned outages, and enforcing strict HSE and technical compliance to guarantee 99%+ system availability.",
    points: [
      "Grid downtime minimization & outage scheduling",
      "Targeted system availability compliance (99%+)",
      "Continuous safety (HSE) & statutory compliance",
    ],
  },
  {
    stage: "05",
    label: "EXTEND ASSET LIFE",
    title: "Remaining Useful Life (RUL) & Repowering",
    icon: RotateCw,
    color: "amber",
    badge: "Stage 05",
    description:
      "Multi-decadal asset preservation, structural fatigue analysis, remaining useful life assessment, and repowering / life-extension strategies for aging renewable energy plants.",
    points: [
      "Structural fatigue & blade/tower integrity audits",
      "Remaining useful life (RUL) engineering dossiers",
      "Repowering feasibility & capacity enhancement",
    ],
  },
];

export const AssetLifecyclePipeline: React.FC = () => {
  return (
    <section id="asset-pipeline" className="py-24 bg-[#0A1628] text-white relative border-b border-slate-800">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            Operational Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Live Asset Performance Pipeline
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Our systematic 5-stage lifecycle framework ensures clean energy assets are continuously monitored, proactively maintained, and strategically optimized for maximum lifetime returns.
          </p>
        </div>

        {/* 5-Stage Stepped Horizontal Flow Bar */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-12 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
          {pipelineStages.map((st, idx) => (
            <div
              key={st.stage}
              className={`p-3 rounded-lg border text-center transition-colors ${
                idx === 0
                  ? "bg-emerald-950/60 border-emerald-700/60 text-emerald-300"
                  : "bg-slate-900/60 border-slate-800 text-slate-300"
              }`}
            >
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                STEP {st.stage}
              </div>
              <div className="text-xs font-mono font-extrabold tracking-wider mt-1 text-white flex items-center justify-center gap-1">
                <span>{st.label}</span>
                {idx < pipelineStages.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-slate-500 ml-1" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed 5-Stage Pipeline Cards */}
        <div className="space-y-6">
          {pipelineStages.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.stage}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-lg relative overflow-hidden"
              >
                {/* Stage Accent Line */}
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-500 via-sky-500 to-amber-500" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pl-2 sm:pl-4">
                  {/* Stage Number & Badge */}
                  <div className="lg:col-span-3 space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                          STAGE {st.stage}
                        </span>
                        <div className="text-xl font-black text-white tracking-wide font-mono">
                          {st.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="lg:col-span-5 space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {st.description}
                    </p>
                  </div>

                  {/* Key Operational Deliverable Bullets */}
                  <div className="lg:col-span-4 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                      OPERATIONAL PROTOCOLS
                    </div>
                    {st.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                        <span className="text-emerald-400 font-bold flex-shrink-0">›</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
