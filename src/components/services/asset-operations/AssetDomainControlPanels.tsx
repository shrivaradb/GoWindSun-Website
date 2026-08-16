"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, ShieldCheck, Zap, Users, Settings, Wrench } from "lucide-react";

export const AssetDomainControlPanels: React.FC = () => {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-100 text-amber-800 text-xs font-mono font-semibold uppercase tracking-wider">
            Operational Disciplines
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            End-to-End Asset Operations Spectrum
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Preserving and managing utility-scale renewable generation, battery storage, high-voltage substations, and field engineering personnel across India.
          </p>
        </div>

        {/* 3 Domain Feature Bands */}
        <div className="space-y-16">
          {/* Domain 01: Turnkey O&M for Wind, Solar, Hybrid & BESS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500/40 transition-all duration-300 shadow-sm">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider">
                <Settings className="w-4 h-4" />
                <span>DOMAIN 01 — GENERATION & STORAGE ASSETS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Turnkey O&M for Wind, Solar PV, Hybrid & BESS
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                Full-scope Operations & Maintenance (O&M) for utility-scale wind turbine generators (WTGs), ground-mounted solar PV plants, co-located solar-wind hybrid systems, and containerized Battery Energy Storage Systems (BESS).
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive O&M for wind turbines, solar PV & hybrid plants</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Utility-grade BESS storage container O&M & BMS health management</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Guaranteed plant availability & annual generation compliance</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-72 sm:h-80 w-full rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/asset-ops/asset-ops-bess-storage.webp"
                alt="Battery Energy Storage System BESS and Renewable O&M"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Domain 02: High-Voltage Grid & Substation Infrastructure O&M */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500/40 transition-all duration-300 shadow-sm">
            <div className="lg:col-span-6 order-2 lg:order-1 relative h-72 sm:h-80 w-full rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/asset-ops/asset-ops-grid-substation.webp"
                alt="Extra High Voltage Substation and Transmission Grid O&M"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <div className="flex items-center gap-2 text-amber-700 text-xs font-mono font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>DOMAIN 02 — HIGH-VOLTAGE GRID INFRASTRUCTURE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Substation & EHV Transmission Corridor Operations
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                Operations and preventive maintenance of high-voltage (HV) and extra-high-voltage (EHV) substations, 33kV to 400kV transformers, circuit breakers, pooling stations, transmission lines, and electrical Balance of Plant (E-BoP).
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>O&M of 33kV to 400kV pooling & grid interconnection substations</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Overhead EHV transmission line & tower corridor patrol inspection</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Transformer DGA oil analysis, protection relay calibration & thermography</span>
                </div>
              </div>
            </div>
          </div>

          {/* Domain 03: On-Site Technical Personnel & Spare Parts Optimization */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-500/40 transition-all duration-300 shadow-sm">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-sky-700 text-xs font-mono font-bold uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>DOMAIN 03 — MANPOWER & INVENTORY CONTROL</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Skilled Field Engineers & Spare Parts Governance
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                Deployment of certified O&M manpower—including site managers, high-voltage electrical engineers, WTG technicians, HSE officers, and emergency response teams alongside strategic spare parts warehousing and AMC management.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span>Dedicated on-site managers, electrical engineers & certified technicians</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span>24/7 high-voltage breakdown response & HSE safety compliance</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span>Critical spare parts inventory, warehousing & OEM warranty administration</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-72 sm:h-80 w-full rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/asset-ops/asset-ops-field-maintenance.webp"
                alt="Skilled Renewable Energy Field Engineers Site Inspection & Wind Maintenance"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
