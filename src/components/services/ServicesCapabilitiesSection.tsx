"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wind, Sun, Boxes, BatteryCharging, Activity, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export const ServicesCapabilitiesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <Container>
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            Core Service Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            What Services Does GoWindSun Provide?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            GoWindSun delivers integrated renewable energy capabilities across project planning, site identification, utility-scale solar execution, battery storage, high-voltage grid infrastructure, and strategic advisory.
          </p>
        </div>

        {/* Varied Composition Grid */}
        <div className="space-y-16">
          {/* Service 1: Ground-Mounted & Commercial Solar PV (Horizontal Split - Image Left) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500/40 transition-all duration-300">
            <div className="lg:col-span-5 relative h-64 sm:h-80 w-full rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/images/services/wind_solar_hybrid.png"
                alt="Utility Ground-Mounted Solar PV Infrastructure"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-slate-900/90 text-emerald-400 border border-slate-700">
                Utility Ground-Mounted Solar PV
              </span>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                  <Sun className="w-5 h-5" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Utility Ground-Mounted & Commercial Solar PV
                </h3>
              </div>
              <p className="text-slate-600 font-light leading-relaxed text-sm sm:text-base">
                Engineering, feasibility studies, structural framing, and turnkey EPC execution for utility-scale ground-mounted solar power plants and commercial solar arrays across India.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  "Utility ground-mounted solar (10MW - 250MW+)",
                  "Detailed solar engineering & PVSyst yield analysis",
                  "High-efficiency bifacial module & tracker integration",
                  "Commercial rooftop & industrial solar installation",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  href="/services/project-development-epc"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 group"
                >
                  <span>Read detailed Solar Project Development & EPC Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2: Wind Energy Engineering & Resource Measurement (Horizontal Split - Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500/40 transition-all duration-300">
            <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-sky-100 text-sky-700">
                  <Wind className="w-5 h-5" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Wind Energy Engineering & Resource Measurement
                </h3>
              </div>
              <p className="text-slate-600 font-light leading-relaxed text-sm sm:text-base">
                Grid-connected onshore wind energy project development, meteorological wind mast deployment, wind data analysis, turbine micro-siting, WAsP aerodynamic yield modeling, and high-voltage grid interconnection.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  "Wind mast installation & bankable data logging",
                  "WAsP flow modeling & micro-siting optimization",
                  "Turbine power curve validation (3.3MW - 5.0MW+)",
                  "Identified ~3,000 MW greenfield wind/hybrid pipeline",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  href="/services/project-services"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800 group"
                >
                  <span>Explore Wind Project Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 w-full rounded-xl overflow-hidden shadow-lg group order-1 lg:order-2">
              <Image
                src="/images/services/wind_mast_assessment.png"
                alt="Wind Resource Assessment Mast"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-slate-900/90 text-sky-400 border border-slate-700">
                Wind Mast & Data Logging
              </span>
            </div>
          </div>

          {/* Service 3 & 4: Hybrid Projects & Battery Storage (2-Column Bento Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Wind-Solar Hybrid */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300">
              <div>
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 group">
                  <Image
                    src="/images/services/wind_solar_hybrid.png"
                    alt="Wind-Solar Hybrid Project"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                </div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-1.5 rounded bg-emerald-100 text-emerald-700">
                    <Boxes className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Wind-Solar Hybrid Power Plants
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-4">
                  Co-located wind and solar PV generation designed to maximize capacity utilization factors (CUF), smoothen generation curves, and optimize shared pooling substations.
                </p>
              </div>
              <Link
                href="/services/project-services"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
              >
                <span>Hybrid Project Details →</span>
              </Link>
            </div>

            {/* Card 2: BESS */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300">
              <div>
                <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 group">
                  <Image
                    src="/images/services/bess_energy_storage.png"
                    alt="Battery Energy Storage System BESS"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                </div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-1.5 rounded bg-amber-100 text-amber-700">
                    <BatteryCharging className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Battery Energy Storage Systems (BESS)
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-4">
                  Utility-grade containerized LFP storage infrastructure providing frequency regulation, peak load shifting, microgrid resiliency, and spinning reserve capabilities.
                </p>
              </div>
              <Link
                href="/services/project-services"
                className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 hover:text-amber-800"
              >
                <span>BESS Infrastructure Details →</span>
              </Link>
            </div>
          </div>

          {/* Service 5 & 6: Grid Integration & Strategic Advisory (Split Banner Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl">
            <div className="lg:col-span-5 relative h-64 sm:h-80 w-full rounded-xl overflow-hidden shadow-md group">
              <Image
                src="/images/services/engineers_site_inspection.png"
                alt="Renewable Energy Advisory & Engineering Inspection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-slate-950/90 text-sky-400 border border-slate-700">
                Owner's & Lender's Engineering
              </span>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sky-950 border border-sky-800 text-sky-400 text-xs font-mono font-semibold uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                Strategic Advisory & Transaction Support
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Independent Techno-Commercial & Regulatory Advisory
              </h3>
              <p className="text-slate-300 font-light leading-relaxed text-sm sm:text-base">
                GoWindSun provides multidisciplinary technical due diligence, bankable P50/P75/P90 DPR yield assessments, Owner's & Lender's engineering, Corporate C&I Open Access PPA structuring, and MNRE ALMM wind turbine type certification.
              </p>
              <div className="pt-2">
                <Link
                  href="/services/advisory-services"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md"
                >
                  <span>Explore All 7 Advisory Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
