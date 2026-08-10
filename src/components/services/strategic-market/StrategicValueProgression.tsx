"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import {
  Globe,
  Compass,
  CheckCircle2,
  Briefcase,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const progressionSteps = [
  {
    step: "01",
    label: "MARKET INTELLIGENCE",
    title: "Regulatory Tracking & Policy Insights",
    icon: Globe,
    badge: "Step 01",
    description:
      "Tracking CERC/SERC tariff trends, Green Open Access rules, power exchange price dynamics, RPO targets, and regulatory policy shifts across central and state authorities in India.",
    deliverables: [
      "CERC & State SNA (MEDA, GEDA, KREDL, DISCOM) policy tracking",
      "Green Open Access & RPO compliance mechanism updates",
      "Power exchange tariff forecasting & day-ahead market insights",
    ],
  },
  {
    step: "02",
    label: "STRATEGY",
    title: "PPA Structuring & Decarbonization Frameworks",
    icon: Compass,
    badge: "Step 02",
    description:
      "Formulating Corporate PPA models (Third-Party, Captive, Group Captive, Virtual PPAs), repowering roadmaps for aging wind/solar assets, and corporate decarbonization strategy.",
    deliverables: [
      "Corporate Power Purchase Agreement (CPPA) tariff structuring",
      "Captive & Group Captive model financial & regulatory evaluation",
      "Multi-megawatt corporate decarbonization & RE expansion roadmap",
    ],
  },
  {
    step: "03",
    label: "DECISION",
    title: "Capital Allocation & LCOE / LCOH Analysis",
    icon: CheckCircle2,
    badge: "Step 03",
    description:
      "Risk-return optimization modeling, LCOE / LCOH technical analysis, technology selection (Green Hydrogen, BESS, WTG rating upgrades), and project bankability screening.",
    deliverables: [
      "LCOE / LCOH financial modeling & bankability evaluation",
      "Green Hydrogen electrolyser & BESS storage integration design",
      "Capital allocation & portfolio risk-return optimization",
    ],
  },
  {
    step: "04",
    label: "TRANSACTION",
    title: "M&A Due Diligence & Asset Valuation",
    icon: Briefcase,
    badge: "Step 04",
    description:
      "End-to-end transaction support for greenfield and operational asset acquisitions, portfolio divestments, red-flag due diligence, asset packaging, and contract negotiation.",
    deliverables: [
      "Techno-commercial due diligence & red-flag risk reports",
      "Asset valuation, revenue yield modeling & cash flow audit",
      "Divestment positioning, PPA title & land compliance review",
    ],
  },
  {
    step: "05",
    label: "VALUE",
    title: "Long-Term Yield & Commercial Return Unlocked",
    icon: TrendingUp,
    badge: "Step 05",
    description:
      "Unlocking maximum equity value, securing long-term tariff savings for C&I off-takers, extending asset operational life, and enhancing overall portfolio returns.",
    deliverables: [
      "Long-term C&I power purchase cost reduction & tariff security",
      "Asset repowering capacity boost & multi-decadal yield extension",
      "Bankable portfolio valuation enhancement for investors & IPPs",
    ],
  },
];

export const StrategicValueProgression: React.FC = () => {
  return (
    <section id="strategic-pipeline" className="py-24 bg-[#0A1628] text-white relative border-b border-slate-800">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            Commercial Value Framework
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Strategic Decision-Making Progression
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Our 5-stage strategic framework bridges raw energy market intelligence with boardroom decision-making, rigorous transaction execution, and multi-decadal commercial value.
          </p>
        </div>

        {/* 5-Step Horizontal Value Flow Bar */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-12 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
          {progressionSteps.map((st, idx) => (
            <div
              key={st.step}
              className={`p-3 rounded-lg border text-center transition-colors ${
                idx === 0
                  ? "bg-emerald-950/60 border-emerald-700/60 text-emerald-300"
                  : "bg-slate-900/60 border-slate-800 text-slate-300"
              }`}
            >
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                STEP {st.step}
              </div>
              <div className="text-xs font-mono font-extrabold tracking-wider mt-1 text-white flex items-center justify-center gap-1">
                <span>{st.label}</span>
                {idx < progressionSteps.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-slate-500 ml-1" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed 5-Step Progression Cards */}
        <div className="space-y-6">
          {progressionSteps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-lg relative overflow-hidden"
              >
                {/* Accent Vertical Bar */}
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-500 via-sky-500 to-amber-500" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pl-2 sm:pl-4">
                  {/* Step Number & Label */}
                  <div className="lg:col-span-3 space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                          STEP {st.step}
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

                  {/* Key Deliverable Bullets */}
                  <div className="lg:col-span-4 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                      EXECUTIVE DELIVERABLES
                    </div>
                    {st.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                        <span className="text-emerald-400 font-bold flex-shrink-0">›</span>
                        <span>{item}</span>
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
