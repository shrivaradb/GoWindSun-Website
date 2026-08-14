"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, Compass, MapPin, Navigation, ShieldCheck, HardHat, Cpu, Activity, BarChart3, Layers, Building2, FileText, Zap, Award } from "lucide-react";

export const ProjectDevelopmentEpcSection: React.FC = () => {
  return (
    <div className="space-y-24 pb-16 text-slate-900">
      {/* SECTION 1: SITE IDENTIFICATION & SCREENING (Editorial Feature Opening) */}
      <section className="bg-white pt-16 sm:pt-20 pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Feature Image Frame */}
            <div className="lg:col-span-6 relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-200">
              <Image
                src="/images/services/wind_solar_hybrid.png"
                alt="Greenfield Wind Solar Hybrid Site Pipeline"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="px-3 py-1 rounded bg-emerald-600 text-xs font-mono font-bold uppercase tracking-wider">
                  Lifecycle Phase 01
                </span>
                <h4 className="text-xl font-bold pt-2">Greenfield RE Corridor Screening</h4>
                <p className="text-xs text-slate-300 font-light">Site identification & technical feasibility assessment across India</p>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Phase 01 — Site Screening & Assessment</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Identification, Screening & Technical Assessment of RE Sites
              </h2>

              <p className="text-slate-600 font-light leading-relaxed text-base sm:text-lg">
                GoWindSun executes greenfield site identification, screening, and technical assessment for wind, solar, and hybrid project sites across high-potential RE corridors in India. We systematically evaluate land availability, terrain suitability, state-specific policies, and proximity to STU and CTU national grid substations.
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-200">
                <div className="flex items-start gap-3 text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Greenfield site screening for utility-scale wind, solar & hybrid power projects</span>
                </div>
                <div className="flex items-start gap-3 text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>STU & CTU sub-station capacity evaluation & grid margin checks</span>
                </div>
                <div className="flex items-start gap-3 text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>State RE policy, environmental, forest & defense constraint analysis</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: WIND RESOURCE ASSESSMENT (Two-Column Offset Spread) */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sky-100 text-sky-800 text-xs font-mono font-semibold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>Phase 02 — Wind Resource Assessment (WRA)</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Comprehensive Wind Resource Assessment & Met Mast Campaigns
              </h2>

              <p className="text-slate-600 font-light leading-relaxed text-base">
                End-to-end Wind Resource Assessment (WRA) campaigns including lattice met mast installation, operation and maintenance, high-frequency data acquisition, data quality verification, WAsP aerodynamic micro-siting, energy yield modeling, and site-specific wind turbine generator (WTG) selection.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                  <div className="text-xs font-mono font-bold text-sky-700 uppercase">Met Mast Erection</div>
                  <p className="text-xs text-slate-600 font-light">Calibrated sensors, logger setup & continuous O&M</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                  <div className="text-xs font-mono font-bold text-sky-700 uppercase">WAsP Flow Modeling</div>
                  <p className="text-xs text-slate-600 font-light">Micro-siting & terrain aerodynamic yield simulation</p>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-200">
                <div className="flex items-start gap-2.5 text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span>High-accuracy wind velocity, direction, pressure & temperature data logging</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span>Site-specific wind turbine generator (WTG) model evaluation & hub height matching</span>
                </div>
              </div>
            </div>

            {/* Right Met Mast Image Frame */}
            <div className="lg:col-span-6 relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-200 order-1 lg:order-2">
              <Image
                src="/images/services/wind_mast_assessment.png"
                alt="Wind Resource Assessment Met Mast Erection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-slate-900/90 text-sky-400 font-mono text-xs font-bold border border-slate-700">
                WRA & Yield Modeling
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="px-3 py-1 rounded bg-sky-600 text-xs font-mono font-bold uppercase tracking-wider">
                  Bankable Data Campaigns
                </span>
                <h4 className="text-lg font-bold pt-1">Calibrated Sensor Met Masts</h4>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: LAND IDENTIFICATION & ACQUISITION (Matching Page Flow & Split Card Layout) */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-100 text-amber-800 text-xs font-mono font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Phase 03 — Land & RoW Clearances</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Land Identification, Title Due Diligence & Acquisition Support
              </h2>

              <p className="text-slate-600 font-light leading-relaxed text-base">
                Overcoming complex socio-economic and state revenue land acquisition challenges across India with encumbrance-free title verification, nodal agency liaison, and Right-of-Way (RoW) transmission line clearance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xs font-mono font-bold text-amber-700 uppercase">Clear-Title Acquisition</div>
                  <p className="text-xs text-slate-600 font-light">Encumbrance-free private, government & leasehold title verification</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xs font-mono font-bold text-amber-700 uppercase">Revenue & Nodal Liaison</div>
                  <p className="text-xs text-slate-600 font-light">District Collectors & State Nodal Agency NA land conversions</p>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-200">
                <div className="flex items-start gap-2.5 text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Support for private, government & leasehold land identification & WTG micro-siting</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Transmission line corridor RoW clearance & substation access road acquisition</span>
                </div>
              </div>
            </div>

            {/* Right Land Acquisition Image Card (Matching Phase 01 & Phase 02 Style) */}
            <div className="lg:col-span-6 relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-200">
              <Image
                src="/images/land-acquisition.jpeg"
                alt="Land Identification Title Due Diligence and RoW Clearance"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-slate-900/90 text-amber-400 font-mono text-xs font-bold border border-slate-700">
                Land & RoW Advisory
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="px-3 py-1 rounded bg-amber-600 text-xs font-mono font-bold uppercase tracking-wider">
                  Encumbrance-Free Land Bank
                </span>
                <h4 className="text-lg font-bold pt-1">Title Due Diligence & Nodal Agency Liaison</h4>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: POWER EVACUATION & SUBSTATION ENGINEERING (Asymmetric Bento Grid) */}
      <section className="bg-slate-900 text-white py-20">
        <Container>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Navigation className="w-3.5 h-3.5" />
              <span>Phase 04 — Substation & Power Evacuation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Power Evacuation Planning, Substations & EHV Transmission Systems
            </h2>
            <p className="mt-3 text-slate-300 font-light text-base leading-relaxed">
              Design and turnkey EPC execution of unit substations, pooling substations, extra-high-voltage (EHV) power transformers, overhead transmission lines, and utility-scale solar PV integration connecting projects to STU and CTU national grids.
            </p>
          </div>

          {/* Asymmetric 7-5 Bento Split Frame */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left High-Voltage Substation Image */}
            <div className="lg:col-span-7 relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <Image
                src="/images/pdepc/pdepc-substation-evacuation.png"
                alt="HV/EHV Substation & Grid Evacuation Infrastructure EPC"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="px-3 py-1 rounded bg-emerald-600 text-xs font-mono font-bold uppercase tracking-wider text-white">
                  33kV - 400kV Grid Inter-Connection
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Substation EPC & EHV Overhead Lines</h3>
                <p className="text-xs text-slate-300 font-light">Unit substations, pooling stations & EHV line erection</p>
              </div>
            </div>

            {/* Right Solar & Grid Technical Breakdown */}
            <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-slate-600 flex-shrink-0">
                    <Image
                      src="/images/services/epc_project_development_hero.png"
                      alt="Solar PV & Wind Grid Integration EPC"
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">Clean Energy Integration</span>
                    <h4 className="text-base font-bold text-white">Solar PV & Grid Evacuation</h4>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Complete electrical design and evacuation planning for ground-mounted solar, wind farms, and hybrid pooling stations under CTU/STU grid standards.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-700 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>33kV to 400kV Pooling Substation Design & Civil EPC</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Extra-High Voltage (EHV) Overhead Transmission Lines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Curtailment-Free Power Evacuation & SCADA Interface</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: DETAILED ENGINEERING, TURNKEY EPC & SITE PERSONNEL (Widescreen Site Spotlight) */}
      <section className="bg-white py-20">
        <Container>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <HardHat className="w-3.5 h-3.5" />
              <span>Phase 05 — Turnkey EPC, Commissioning & Manpower</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Turnkey EPC Execution, Civil Works, BESS & Site Personnel
            </h2>
            <p className="mt-3 text-slate-600 font-light text-base leading-relaxed">
              End-to-end EPC execution of wind, solar, hybrid, and BESS projects—civil engineering, WTG foundations, Electrical Balance of Plant (E-BoP), commissioning, technical manpower deployment, QA/QC, and HSE management.
            </p>
          </div>

          {/* Widescreen Site Inspection Spotlight */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Site Engineers Image */}
            <div className="lg:col-span-6 relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-2xl group">
              <Image
                src="/images/pdepc/pdepc-civil-engineers.png"
                alt="Engineers Site Inspection & Construction Supervision"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="px-3 py-1 rounded bg-slate-900 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border border-slate-700">
                  On-Site Technical Manpower
                </span>
                <h4 className="text-xl font-bold pt-1">Experienced Site Engineers & QA/QC</h4>
                <p className="text-xs text-slate-300 font-light">Supervision of WTG erection, foundation civil works & commissioning</p>
              </div>
            </div>

            {/* Right BESS & Detailed Engineering Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-slate-300 flex-shrink-0">
                    <Image
                      src="/images/pdepc/pdepc-bess-execution.png"
                      alt="BESS Battery Energy Storage System Engineering"
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-700 font-bold uppercase">Engineering-Led Optimization</span>
                    <h4 className="text-lg font-bold text-slate-900">Detailed Engineering & BESS Design</h4>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Detailed civil and electrical engineering for wind, solar, hybrid, and Battery Energy Storage Systems (BESS). Value engineering, optimal equipment selection, and civil/electrical plant design to minimize CAPEX.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>WTG foundation civil engineering, turbine erection & Electrical BoP installation</span>
                </div>
                <div className="flex items-start gap-3 text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Qualified technical manpower deployment (site managers, QA/QC & HSE safety engineers)</span>
                </div>
                <div className="flex items-start gap-3 text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Testing, commissioning, grid synchronization & initial performance monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
