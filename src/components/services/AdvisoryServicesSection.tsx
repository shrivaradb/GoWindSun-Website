"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ShieldCheck, Building2, SearchCheck, Zap, Award, LineChart, BookOpen, ChevronRight, Check } from "lucide-react";

export const AdvisoryServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const advisoryServices = [
    {
      id: "owners-engineer",
      title: "Owner's Engineer Services",
      subtitle: "Protecting Owner Interests Throughout Project Lifecycle",
      icon: ShieldCheck,
      badge: "Owner Advisory",
      summary:
        "As Owner's Engineer, GoWindSun acts solely in the interest of project owners and equity investors to ensure optimal technical execution, quality assurance, schedule adherence, and maximum Return on Investment (RoI).",
      deliverables: [
        "EPC & OEM supplier proposal evaluation",
        "Wind turbine & PV equipment selection",
        "Commercial contract review & negotiation support",
        "Construction monitoring & QA/QC supervision",
        "Lender technical coordination & reporting",
        "Commissioning & acceptance testing verification",
        "Operational performance review & O&M audit",
      ],
    },
    {
      id: "lenders-engineer",
      title: "Lender's Engineer Services",
      subtitle: "Independent Techno-Commercial Risk Assessment for Financiers",
      icon: Building2,
      badge: "Project Finance",
      summary:
        "We provide independent technical advisory services to commercial banks, NBFCs, international infrastructure funds, and debt providers to support bankable financing decisions.",
      deliverables: [
        "Independent energy yield & resource audit",
        "Technology suitability & degradation assessment",
        "Balance of Plant (BoP) & civil design review",
        "Grid interconnection & transmission risk analysis",
        "Contractual risk & liquidated damages review",
        "Financial model technical parameter validation",
        "Construction milestone & draw-down monitoring",
      ],
    },
    {
      id: "due-diligence",
      title: "Technical Due Diligence & M&A Advisory",
      subtitle: "Asset Condition Assessment & Acquisition Due Diligence",
      icon: SearchCheck,
      badge: "Asset Valuation",
      summary:
        "Comprehensive techno-commercial due diligence for investors, acquirers, and developers evaluating operational renewable energy portfolios, greenfield assets, or corporate acquisitions.",
      deliverables: [
        "Turbine & solar module condition assessment",
        "Historical energy yield & loss analysis",
        "Remaining useful life evaluation (RLE)",
        "Regulatory compliance & PPA sanity audit",
        "Asset valuation & yield optimization roadmap",
        "Red-flag risk identification reports",
        "Transaction support & divestment advisory",
      ],
    },
    {
      id: "c-i-ppa",
      title: "Corporate C&I Open Access PPA Advisory",
      subtitle: "Green Power Sourcing & PPA Structuring for Enterprise Consumers",
      icon: Zap,
      badge: "C&I Energy",
      summary:
        "Helping Commercial & Industrial (C&I) electricity consumers lower energy costs, fulfill Renewable Purchase Obligations (RPO), and achieve ESG decarbonization targets through Open Access power procurement.",
      deliverables: [
        "Third-Party Sale, Captive & Group Captive model structuring",
        "Intra-State & Inter-State (ISTS) Open Access evaluation",
        "Tariff comparison financial modeling vs. DISCOM utility rates",
        "Cross-subsidy, wheeling & banking charge impact analysis",
        "PPA contract drafting, escalation & security negotiation",
        "Developer sourcing & power offtake strategy",
        "Regulatory approval & DISCOM clearance advisory",
      ],
    },
    {
      id: "rlmm-cert",
      title: "MNRE RLMM & Type Certification Advisory",
      subtitle: "Regulatory Compliance Support for OEMs & Manufacturers",
      icon: Award,
      badge: "Regulatory & Compliance",
      summary:
        "Guiding wind turbine manufacturers (OEMs) and developers through statutory approvals, MNRE Revised List of Models and Manufacturers (RLMM) listing, and wind turbine Type Certification.",
      deliverables: [
        "MNRE RLMM listing documentation & submission",
        "Wind turbine Type Certificate verification & audit",
        "NIWE (National Institute of Wind Energy) technical liaison",
        "Grid code compliance & fault-ride-through (FRT) certification",
        "Component design review & manufacturing QA checks",
        "Regulatory approval management for central & state bodies",
      ],
    },
    {
      id: "auctions-trading",
      title: "RE Auctions, Bidding & Energy Trading Advisory",
      subtitle: "Competitive Bidding Strategy & Energy Market Participation",
      icon: LineChart,
      badge: "Market Strategy",
      summary:
        "Advising developers and power generators in participating in SECI, state utility, and merchant power auctions to maximize project returns and revenue realization.",
      deliverables: [
        "Tariff financial modeling & bid price optimization",
        "SECI & State DISCOM competitive auction bidding support",
        "Merchant market participation & Power Exchange trading",
        "Renewable Energy Certificate (REC) trading strategy",
        "Day-ahead & real-time scheduling & forecasting advisory",
        "Corporate PPA & merchant revenue stack structuring",
      ],
    },
    {
      id: "market-research",
      title: "Research & Market Intelligence",
      subtitle: "Custom Sector Analytics & Emerging Clean Tech Intelligence",
      icon: BookOpen,
      badge: "Sector Research",
      summary:
        "Delivering customized market intelligence, technology benchmarking, and strategic policy research for government bodies, corporations, technology providers, and investors.",
      deliverables: [
        "Wind, Solar & Hybrid market trend analysis",
        "Battery Energy Storage System (BESS) market integration",
        "Green Hydrogen & Green Ammonia market opportunities",
        "Policy, regulatory & tariff trend forecasting",
        "Competitive landscape & OEM technology benchmarking",
        "International clean energy market entry research",
      ],
    },
  ];

  return (
    <section id="advisory-services" className="py-24 bg-[#0D1B2A] text-slate-100 border-b border-slate-800">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sky-950 border border-sky-800/80 text-sky-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            Pillar 02 — Advisory & Consulting
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Techno-Commercial & Strategic Advisory Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Navigating regulatory complexities, technology evolution, and financial structuring with independent, multidisciplinary advisory tailored to India's clean energy transition.
          </p>
        </div>

        {/* Advisory Matrix Layout: Left Navigation + Right Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Technical Navigation Tabs */}
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

          {/* Right Column: Active Specification Card Display */}
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
