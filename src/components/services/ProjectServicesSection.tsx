"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MapPin, Compass, ShieldAlert, Cpu, BarChart3, Sun, Navigation, CheckCircle } from "lucide-react";

export const ProjectServicesSection: React.FC = () => {
  const projectServicesList = [
    {
      num: "01",
      title: "Greenfield Site Identification (~3,000 MW Pipeline)",
      icon: MapPin,
      tag: "Site Development",
      image: "/images/services/wind_solar_hybrid.webp",
      imageAlt: "Greenfield Wind Solar Hybrid Site Pipeline",
      description:
        "GoWindSun has identified high-potential sites for wind, solar, and hybrid project development across India with an aggregate capacity potential of nearly 3,000 MW. We evaluate nearest STU and CTU state and national grid sub-stations to facilitate asset acquisition for investors and developers.",
      highlights: [
        "Identified ~3,000 MW greenfield asset potential",
        "STU and CTU grid sub-station proximity mapping",
        "Ideal for Wind-Solar Hybrid co-located projects",
      ],
    },
    {
      num: "02",
      title: "Wind & Solar Resource Measurement",
      icon: Compass,
      tag: "Data Bankability",
      image: "/images/services/wind_mast_assessment.webp",
      imageAlt: "Wind Resource Assessment Mast",
      description:
        "We design, develop, and manage comprehensive energy measurement campaigns. Our services include wind mast installation, wind data logging, solar irradiation measurement, and meteorological data analysis to produce bankable, investor-grade project datasets.",
      highlights: [
        "Calibrated wind mast erection & sensor deployment",
        "High-frequency data logging & quality control",
        "Bankable resource reports for financial closure",
      ],
    },
    {
      num: "03",
      title: "Land Acquisition & Land Banking Support",
      icon: ShieldAlert,
      tag: "Risk Mitigation",
      description:
        "Land acquisition is one of the most critical risks in Indian renewable energy development due to socio-economic diversity and complex local permitting. We support developers in acquiring encumbrance-free land parcels to establish long-term land banks.",
      highlights: [
        "Clear-title & encumbrance-free land verification",
        "State policy & revenue department liaison",
        "Right-of-Way (RoW) & transmission corridor support",
      ],
    },
    {
      num: "04",
      title: "Grid Connection & Evacuation Engineering",
      icon: Navigation,
      tag: "Power Evacuation",
      image: "/images/services/ehv_substation_grid.webp",
      imageAlt: "Extra High Voltage EHV Substation Grid Evacuation",
      description:
        "Designing and optimizing grid connection architecture to deliver maximum generated power with minimal transmission losses and zero curtailment. We evaluate existing and planned STU and CTU sub-station capacities in collaboration with transmission utilities.",
      highlights: [
        "Curtailment-free power evacuation evaluation",
        "STU / CTU inter-connection point assessment",
        "Transmission line corridor optimization",
      ],
    },
    {
      num: "05",
      title: "Micro-Siting & Wind Turbine Yield Analysis",
      icon: Cpu,
      tag: "Aerodynamic Engineering",
      description:
        "Our wind resource specialists perform detailed site identification, feasibility studies, wind mast data analysis, turbine power curve validation, WAsP flow modeling, and micro-siting to maximize energy capture and minimize array loss.",
      highlights: [
        "Micro-siting of wind turbines for wake loss reduction",
        "Multi-vendor turbine power curve validation",
        "Complex terrain wind flow modeling",
      ],
    },
    {
      num: "06",
      title: "Bankable Detailed Project Feasibility Report (DPR)",
      icon: BarChart3,
      tag: "Financial Engineering",
      description:
        "We conduct comprehensive energy yield analysis on wind and solar PV plants, delivering bankable P50, P75, and P90 Annual Energy Production (AEP) estimations to underpin robust techno-commercial financial models for lenders and equity partners.",
      highlights: [
        "P50, P75 & P90 AEP probabilistic yield estimations",
        "CAPEX / OPEX cost structure modeling",
        "Bankable DPR reports accepted by major financiers",
      ],
    },
    {
      num: "07",
      title: "Utility-Scale Ground-Mounted Solar PV",
      icon: Sun,
      tag: "Solar Infrastructure",
      image: "/images/services/wind_solar_hybrid.webp",
      imageAlt: "Utility-Scale Ground-Mounted Solar PV Infrastructure",
      description:
        "Feasibility studies, structural engineering, and EPC execution of utility-scale ground-mounted solar PV projects across India, optimizing land layout and energy yields.",
      highlights: [
        "High-efficiency bifacial module & tracker integration",
        "Optimized land layout & structural civil engineering",
        "Utility grid evacuation & SCADA telemetry integration",
      ],
    },
    {
      num: "08",
      title: "Project Performance Management & Asset Optimization",
      icon: BarChart3,
      tag: "Asset Recovery",
      image: "/images/services/engineers_site_inspection.webp",
      imageAlt: "Project Performance Diagnostic Engineers",
      description:
        "Acting as Owner’s Representative, we manage operational asset performance across the full project lifecycle. We capture real-time field operational data, identify underperforming assets, investigate root causes, and execute engineering optimizations to maximize RoI.",
      highlights: [
        "Underperforming asset diagnostic & root cause analysis",
        "Field telemetry & generation loss recovery strategies",
        "Owner’s representative monitoring for yield maximization",
      ],
    },
  ];

  return (
    <section id="project-services" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            Pillar 01 — Project Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Project Services Across the Renewable Energy Lifecycle
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            We support project developers, independent power producers (IPPs), and investors to plan, engineer, execute, and optimize wind and solar energy assets across India while mitigating development and operational risks.
          </p>
        </div>

        {/* Technical Architectural List View (Vertical Rule Blueprint Structure with Varied Small Images) */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {projectServicesList.map((service, idx) => {
            const Icon = service.icon;
            const hasImage = Boolean(service.image);
            return (
              <div key={idx} className="relative group">
                {/* Number Badge Indicator */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900 text-emerald-400 font-mono text-xs sm:text-sm font-bold flex items-center justify-center border-4 border-white shadow-md">
                  {service.num}
                </div>

                {/* Content Block */}
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-emerald-600/40 hover:bg-emerald-50/20 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-600/10 text-emerald-700">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {service.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded bg-slate-200/80 text-slate-700">
                      {service.tag}
                    </span>
                  </div>

                  {/* Asymmetric Content & Small Editorial Image Layout */}
                  <div className={hasImage ? "grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6" : "mb-6"}>
                    <div className={hasImage ? "md:col-span-8 space-y-3" : "space-y-3"}>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>

                    {hasImage && service.image && (
                      <div className="md:col-span-4 relative h-44 w-full rounded-xl overflow-hidden shadow-md group">
                        <Image
                          src={service.image}
                          alt={service.imageAlt || service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                      </div>
                    )}
                  </div>

                  {/* Highlights Bullet Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
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
