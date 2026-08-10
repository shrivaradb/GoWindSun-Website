"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FileText, SearchCheck, Building2, ShieldCheck, Scale, Award, LineChart, ChevronRight, Check } from "lucide-react";

export const TechnicalConsultingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const advisoryServices = [
    {
      id: "dpr-feasibility",
      title: "Bankable DPRs & Feasibility Studies",
      subtitle: "Probabilistic Yield Modeling & Techno-Commercial Feasibility",
      icon: FileText,
      badge: "DPR & Yield",
      summary:
        "Preparation of bankable Detailed Project Reports (DPRs) and feasibility studies for wind, solar PV, wind-solar hybrid, and Battery Energy Storage Systems (BESS). We formulate bankable P50, P75, and P90 Annual Energy Production (AEP) yield estimations.",
      deliverables: [
        "Bankable P50, P75 & P90 Annual Energy Production (AEP) estimates",
        "WAsP and PVSyst simulation modeling & loss factor verification",
        "Levelized Cost of Energy (LCOE) & financial model parameter validation",
        "CAPEX, OPEX & financial sensitivity analysis for institutional lenders",
      ],
    },
    {
      id: "due-diligence-swot",
      title: "Technical Evaluation, Due Diligence & SWOT",
      subtitle: "Technology Assessment for Wind, Solar, BESS & Green Hydrogen",
      icon: SearchCheck,
      badge: "Due Diligence",
      summary:
        "Technical due diligence, benchmarking, equipment performance auditing, and SWOT analysis for wind turbines, solar PV modules, BESS enclosures, green hydrogen electrolysers, and integrated renewable energy assets.",
      deliverables: [
        "Wind turbine generator (WTG) & solar PV technology benchmarking",
        "BESS chemistry & battery management system (BMS) security audit",
        "Green hydrogen electrolyser technology evaluation & LCOH analysis",
        "Red-flag risk identification & techno-commercial due diligence reports",
      ],
    },
    {
      id: "statutory-permitting",
      title: "Statutory Approvals & Regulatory Liaison",
      subtitle: "Liaison with Central & State Nodal Agencies Across India",
      icon: Award,
      badge: "Statutory Clearances",
      summary:
        "End-to-end statutory approval management and regulatory liaison with government bodies including MNRE, NIWE, CTU/STU, State Nodal Agencies (MEDA, GEDA, KREDL, MPNRED, APNRED, TANGEDCO, etc.), DISCOMs, MoEFCC, CEA, aviation, and defense authorities.",
      deliverables: [
        "MNRE & NIWE statutory liaison & wind turbine model approvals",
        "State Nodal Agency (MEDA, GEDA, KREDL, MPNRED) project registrations",
        "CTU / STU grid connectivity & power evacuation clearances",
        "MoEFCC forest/environmental approvals & aviation/defense NOCs",
      ],
    },
    {
      id: "owners-lenders-engineer",
      title: "Owner's Engineer & Lender's Engineer",
      subtitle: "Independent Engineering Supervision for Equity & Debt Partners",
      icon: Building2,
      badge: "Independent Engineer",
      summary:
        "Acting as Owner's Engineer or Lender's Engineer, we provide independent technical oversight—design reviews, quality assurance, construction monitoring, milestone drawdown verification, testing supervision, and performance verification.",
      deliverables: [
        "Independent design & engineering drawing reviews",
        "Site QA/QC inspection & civil/electrical construction supervision",
        "Lender milestone drawdown certification & progress monitoring",
        "Commissioning supervision, acceptance testing & performance audits",
      ],
    },
    {
      id: "tender-bid-advisory",
      title: "Tender Advisory & Bid Management",
      subtitle: "Competitive Bidding Support for SECI & State DISCOM Auctions",
      icon: Scale,
      badge: "Auction Advisory",
      summary:
        "Strategic advisory and bid management support for renewable energy competitive tenders issued by SECI, CPSUs, State DISCOMs, and private corporate off-takers across solar, wind, hybrid, and storage auctions.",
      deliverables: [
        "Tariff financial modeling & competitive bid price optimization",
        "SECI & State DISCOM tender documentation & qualification review",
        "Project risk evaluation & penalty/curtailment clause analysis",
        "Reverse auction strategy & post-award project advisory",
      ],
    },
    {
      id: "contract-advisory",
      title: "Contract Advisory & Vendor Selection",
      subtitle: "EPC, Supply, Service & Long-Term O&M Contract Management",
      icon: ShieldCheck,
      badge: "Contract Structuring",
      summary:
        "Technical advisory on EPC, equipment supply, service, O&M, and long-term asset management contracts—defining technical scope, technical specifications, bid evaluations, contract negotiations, and vendor selections.",
      deliverables: [
        "EPC & OEM tender scope definition & technical specs drafting",
        "Vendor technical proposal evaluation & techno-commercial benchmarking",
        "Contract negotiations support & warranty/performance guarantee review",
        "O&M contract evaluation & long-term service agreement (LTSA) structuring",
      ],
    },
    {
      id: "repowering-life-extension",
      title: "Independent Engineering & Repowering",
      subtitle: "Life Extension & Operational Performance Improvement",
      icon: LineChart,
      badge: "Asset Optimization",
      summary:
        "Independent engineering reviews, technology selection, project optimization, remaining useful life (RUL) studies, repowering assessments, and operational performance improvement strategies for legacy renewable assets.",
      deliverables: [
        "Remaining useful life (RUL) assessment & structural fatigue audit",
        "Wind & solar asset repowering feasibility & yield gain modeling",
        "Operational performance troubleshooting & downtime reduction",
        "Technology upgrade roadmaps for aging wind and solar assets",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#0D1B2A] text-slate-100 border-b border-slate-800">
      <Container>
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sky-950 border border-sky-800 text-sky-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            Category 02 — Capabilities Breakdown
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Technical Consulting & Advisory Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Multidisciplinary technical, commercial, financial, and regulatory advisory supporting investors, developers, lenders, utilities, and off-takers across India’s clean energy ecosystem.
          </p>
        </div>

        {/* Dossier Matrix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation */}
          <div className="lg:col-span-4 space-y-2">
            {advisoryServices.map((service, idx) => {
              const Icon = service.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                    isActive
                      ? "bg-sky-950/80 border-sky-500/60 text-white shadow-lg shadow-sky-950/40"
                      : "bg-[#09131F] border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                  }`}
                >
                  <div className="flex items-center gap-3 pr-2">
                    <div
                      className={`p-2 rounded-lg ${
                        isActive ? "bg-sky-500 text-slate-950" : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold leading-tight">{service.title}</div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">{service.badge}</div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${
                      isActive ? "text-sky-400 translate-x-1" : "text-slate-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Content Panel */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-2xl bg-[#09131F] border border-slate-700/80 shadow-2xl relative">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded bg-sky-900/60 border border-sky-700/60 text-sky-300">
                {advisoryServices[activeTab].badge}
              </span>
              <span className="text-xs text-slate-400 font-mono">SPECIFICATION DOSSIER</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {advisoryServices[activeTab].title}
            </h3>
            <div className="text-sm text-sky-400 font-mono mb-6">
              {advisoryServices[activeTab].subtitle}
            </div>

            <p className="text-base text-slate-300 font-light leading-relaxed mb-8 border-b border-slate-800 pb-6">
              {advisoryServices[activeTab].summary}
            </p>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Core Deliverables & Scope of Expertise
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {advisoryServices[activeTab].deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-slate-200"
                  >
                    <div className="w-5 h-5 rounded-full bg-sky-500/10 text-sky-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
