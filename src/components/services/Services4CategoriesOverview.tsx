"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight, CheckCircle2, HardHat, FileText, Settings, LineChart } from "lucide-react";

export const Services4CategoriesOverview: React.FC = () => {
  const categories = [
    {
      num: "01",
      title: "PROJECT DEVELOPMENT & EPC",
      subtitle: "Site Screening, Resource Assessment, Detailed Engineering & Turnkey EPC Execution",
      icon: HardHat,
      badge: "Category 01",
      image: "/images/services/wind_solar_hybrid.webp",
      imageAlt: "Project Development & EPC Infrastructure",
      description:
        "Identification, screening, and technical assessment of wind, solar, and hybrid project sites; comprehensive Wind Resource Assessment (WRA) including met mast installation, micro-siting, power evacuation planning, and turnkey EPC execution.",
      capabilities: [
        "Wind Resource Assessment (WRA), met mast installation & WAsP data logging",
        "Power evacuation planning (unit substations, pooling stations, HV/EHV transmission)",
        "Detailed engineering & design of wind, solar, hybrid, and BESS projects",
        "Civil works, WTG foundations, Electrical Balance of Plant (E-BoP), and commissioning",
      ],
      link: "/services/project-development-epc",
      buttonText: "Explore Project Development & EPC",
      theme: "emerald",
    },
    {
      num: "02",
      title: "TECHNICAL CONSULTING & ADVISORY SERVICES",
      subtitle: "Bankable DPR Preparation, Due Diligence, Owner's/Lender's Engineering & Statutory Clearances",
      icon: FileText,
      badge: "Category 02",
      image: "/images/services/engineers_site_inspection.webp",
      imageAlt: "Technical Consulting & Advisory Engineers",
      description:
        "Preparation of Detailed Project Reports (DPRs), techno-commercial due diligence, financial modelling, LCOE analysis, statutory approvals (e.g. MNRE, NIWE, CTU/STU, SNAs like MEDA, GEDA, KREDL, DISCOMs, Defence, Aviation, Pollution Control, CEIG etc.) and Owner's & Lender's engineering.",
      capabilities: [
        "Preparation of Detailed Project Reports (DPRs) and bankable feasibility studies",
        "Techno-commercial feasibility, financial modeling, LCOE analysis & bankability",
        "Statutory approvals, permitting & grid connectivity (MNRE, NIWE, CTU/STU, MEDA, GEDA)",
        "Owner's Engineer & Lender's Engineer services and progress monitoring",
      ],
      link: "/services/technical-consulting-advisory",
      buttonText: "Explore Technical Consulting & Advisory",
      theme: "sky",
    },
    {
      num: "03",
      title: "ASSET MANAGEMENT & OPERATIONS",
      subtitle: "Comprehensive O&M, Reliability Improvement, Maintenance & Manpower Deployment",
      icon: Settings,
      badge: "Category 03",
      image: "/images/services/bess_energy_storage.webp",
      imageAlt: "Asset Management & Operations Infrastructure",
      description:
        "Comprehensive Operations & Maintenance (O&M) services for wind turbines, solar PV plants, hybrid renewable energy projects, BESS, HV/EHV substations, pooling stations, transmission lines, and spare parts management.",
      capabilities: [
        "Operations & Maintenance (O&M) of wind, solar, hybrid, BESS & HV/EHV substations",
        "Preventive, predictive, and corrective maintenance planning & execution",
        "Deployment of skilled O&M manpower (site managers, engineers, technicians)",
        "Spare parts inventory optimization, vendor coordination & AMC management",
      ],
      link: "/services/asset-management-operations",
      buttonText: "Explore Asset Management & Operations",
      theme: "amber",
    },
    {
      num: "04",
      title: "STRATEGIC ADVISORY & ENERGY MARKET SERVICES",
      subtitle: "Energy Trading, Corporate CPPAs, Repowering, M&A Valuation & Emerging Tech",
      icon: LineChart,
      badge: "Category 04",
      image: "/images/services/ehv_substation_grid.webp",
      imageAlt: "Strategic Advisory & Energy Market Infrastructure",
      description:
        "Energy trading advisory (Corporate Power Purchase Agreements / CPPAs, Open Access, Group Captive, Virtual PPAs), repowering aging assets, M&A project acquisitions/divestments, Green Hydrogen, BESS, and Offshore Wind advisory.",
      capabilities: [
        "Energy trading advisory, Corporate PPAs (CPPAs), Open Access & Group Captive",
        "Repowering & life-extension strategies for aging wind and solar assets",
        "End-to-end M&A transaction support, technical due diligence & asset valuation",
        "Strategic consulting for Green Hydrogen, BESS, and Offshore Wind in India",
      ],
      link: "/services/strategic-advisory-energy-market",
      buttonText: "Explore Strategic Advisory & Energy Markets",
      theme: "emerald",
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            Four Core Operational Categories
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Engineering, Operating and Advising Across the Clean Energy Value Chain
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            GoWindSun delivers integrated lifecycle services across four distinct operational domains—supporting Investors/IPPs, Developers, Lenders, Utilities, OEMs and Commercial & Industrial Energy consumers across India.
          </p>
        </div>

        {/* 4 Category Detailed Blocks */}
        <div className="space-y-16">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={cat.num}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500/40 transition-all duration-300 shadow-sm"
              >
                {/* Image Block */}
                <div
                  className={`lg:col-span-5 relative h-64 sm:h-80 w-full rounded-xl overflow-hidden shadow-lg group ${
                    isEven ? "order-1" : "order-1 lg:order-2"
                  }`}
                >
                  <Image
                    src={cat.image}
                    alt={cat.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded bg-slate-900/90 text-emerald-400 font-mono text-xs font-bold border border-slate-700">
                    {cat.num}
                  </div>
                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-white px-3 py-1 rounded bg-slate-900/80 backdrop-blur-sm border border-slate-700">
                    {cat.badge}
                  </span>
                </div>

                {/* Content Block */}
                <div
                  className={`lg:col-span-7 space-y-4 ${
                    isEven ? "order-2" : "order-2 lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-600/10 text-emerald-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                      {cat.num} / 04
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                    {cat.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-mono text-emerald-700 font-medium">
                    {cat.subtitle}
                  </div>

                  <p className="text-slate-600 font-light leading-relaxed text-sm sm:text-base">
                    {cat.description}
                  </p>

                  {/* Bullet Capabilities */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-200">
                    {cat.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deep-Dive Sub-Page Action Button */}
                  <div className="pt-4">
                    <Link
                      href={cat.link}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md group"
                    >
                      <span>{cat.buttonText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
