"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { LineChart, Zap, RefreshCw, ShoppingBag, PieChart, ShieldCheck, Compass, ChevronRight, Check } from "lucide-react";

export const StrategicEnergyMarketSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const advisoryServices = [
    {
      id: "energy-trading-cppa",
      title: "Energy Trading & Corporate PPA Advisory",
      subtitle: "Corporate PPAs (CPPAs), Open Access, Third-Party & Group Captive",
      icon: Zap,
      badge: "CPPAs & Open Access",
      summary:
        "Strategic energy trading advisory for commercial and industrial (C&I) power consumers, developers, and IPPs. We structure Corporate Power Purchase Agreements (CPPAs), Third-Party Open Access sales, Group Captive models, and Virtual PPA contracts.",
      deliverables: [
        "Corporate Power Purchase Agreement (CPPA) drafting & tariff negotiations",
        "Third-Party Sale, Captive & Group Captive model financial evaluation",
        "Virtual PPA (VPPA) & synthetic green power contract structuring",
        "Cross-subsidy surcharge, wheeling & DISCOM Open Access approvals",
      ],
    },
    {
      id: "repowering-life-extension",
      title: "Repowering & Life-Extension Strategies",
      subtitle: "Maximizing Asset Value for Aging Wind & Solar Infrastructure",
      icon: RefreshCw,
      badge: "Repowering Strategy",
      summary:
        "Strategic repowering and life-extension assessments for aging wind turbine generators and legacy solar PV plants—upgrading technology, increasing land capacity utilization, and maximizing long-term energy generation and investment returns.",
      deliverables: [
        "Legacy wind mast & WTG repowering techno-commercial feasibility",
        "High-rating turbine replacement modeling (substituting low MW WTGs)",
        "Structural fatigue, foundation integrity & life extension audits",
        "Repowering regulatory policy liaison & grid capacity enhancement",
      ],
    },
    {
      id: "m-and-a-transaction",
      title: "Project Acquisitions, Divestments & M&A Support",
      subtitle: "Techno-Commercial Due Diligence, Asset Valuation & Mergers",
      icon: ShoppingBag,
      badge: "M&A & Divestment",
      summary:
        "End-to-end transaction support for greenfield and operational renewable energy asset acquisitions, portfolio divestments, mergers, and strategic equity investments—delivering technical due diligence, commercial assessments, and valuation reports.",
      deliverables: [
        "Techno-commercial due diligence & red-flag risk reports for acquirers",
        "Asset valuation, revenue yield modeling & cash flow audit",
        "Divestment positioning, asset packaging & buyer transaction support",
        "Contractual, PPA, land title & regulatory compliance sanity checks",
      ],
    },
    {
      id: "portfolio-strategy",
      title: "RE Portfolio Strategy & Investment Advisory",
      subtitle: "Corporate Decarbonization & Long-Term Business Planning",
      icon: PieChart,
      badge: "Portfolio Strategy",
      summary:
        "Strategic renewable energy portfolio planning, investment advisory, and business strategy formulation for developers, independent power producers (IPPs), commercial banks, infrastructure funds, and ESG-driven corporate consumers.",
      deliverables: [
        "Multi-megawatt renewable energy expansion roadmap formulation",
        "Capital allocation, risk management & ESG investment alignment",
        "Market entry strategy into India's central (SECI) & state power markets",
        "Bankable portfolio risk-return optimization modeling",
      ],
    },
    {
      id: "policy-regulatory-trends",
      title: "Policy Advisory, Market Trends & Regulatory Analysis",
      subtitle: "Navigating Evolving Central & State Renewable Energy Regulations",
      icon: ShieldCheck,
      badge: "Regulatory Intelligence",
      summary:
        "Actionable advisory on central and state renewable energy policies, regulatory amendments, tariff trends, Renewable Purchase Obligations (RPO), Renewable Energy Certificate (REC) markets, and Green Open Access rules.",
      deliverables: [
        "Central (CERC) & State (MERC, GERC, KERC, etc.) policy advisory",
        "Green Open Access & RPO compliance mechanism tracking",
        "Power exchange tariff forecasting & day-ahead market insights",
        "Regulatory dispute advisory & statutory compliance tracking",
      ],
    },
    {
      id: "emerging-clean-tech",
      title: "Green Hydrogen & BESS Strategic Consulting",
      subtitle: "Integrated Storage & Clean Hydrogen Fuel Ecosystems",
      icon: LineChart,
      badge: "Emerging Tech",
      summary:
        "Strategic advisory for emerging clean energy technologies—including Green Hydrogen electrolysers, Green Ammonia, utility-scale Battery Energy Storage Systems (BESS), and round-the-clock (RTC) hybrid renewable power structures.",
      deliverables: [
        "Green Hydrogen electrolyser technology selection & LCOH modeling",
        "Utility-scale BESS storage integration & ancillary grid market advisory",
        "Round-the-clock (RTC) green power supply architecture design",
        "Decarbonization strategy for heavy industrial & chemical sectors",
      ],
    },
    {
      id: "offshore-wind-advisory",
      title: "Offshore Wind Energy Advisory in India",
      subtitle: "Feasibility Studies, Regulatory Strategy & Supply Chain Assessment",
      icon: Compass,
      badge: "Offshore Wind",
      summary:
        "Specialized consulting services for offshore wind energy projects in India—covering offshore site feasibility, wind turbine technology evaluation, regulatory framework alignment (MNRE/NIWE offshore guidelines), and supply chain assessment.",
      deliverables: [
        "Offshore wind resource & bathymetric site feasibility screening",
        "Offshore wind turbine technology evaluation & seabed foundation review",
        "MNRE/NIWE offshore wind policy & leasing framework guidance",
        "Port infrastructure, logistics & maritime supply chain assessment",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#0D1B2A] text-slate-100 border-b border-slate-800">
      <Container>
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0F223A] border border-emerald-800/80 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            Category 04 — Capabilities Breakdown
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Strategic Advisory & Energy Market Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Energy trading, Corporate PPAs, asset repowering, M&A due diligence, portfolio strategy, Green Hydrogen, and offshore wind advisory in India.
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
                      ? "bg-emerald-950/80 border-emerald-500/60 text-white shadow-lg shadow-emerald-950/40"
                      : "bg-[#09131F] border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                  }`}
                >
                  <div className="flex items-center gap-3 pr-2">
                    <div
                      className={`p-2 rounded-lg ${
                        isActive ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-slate-400"
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
                      isActive ? "text-emerald-400 translate-x-1" : "text-slate-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Content Panel */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-2xl bg-[#09131F] border border-slate-700/80 shadow-2xl relative">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded bg-emerald-950/80 border border-emerald-700/60 text-emerald-300">
                {advisoryServices[activeTab].badge}
              </span>
              <span className="text-xs text-slate-400 font-mono">STRATEGIC DOSSIER</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {advisoryServices[activeTab].title}
            </h3>
            <div className="text-sm text-emerald-400 font-mono mb-6">
              {advisoryServices[activeTab].subtitle}
            </div>

            <p className="text-base text-slate-300 font-light leading-relaxed mb-8 border-b border-slate-800 pb-6">
              {advisoryServices[activeTab].summary}
            </p>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Strategic Scope & Client Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {advisoryServices[activeTab].deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-slate-200"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
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
