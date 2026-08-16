"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Settings, Activity, Users, Wrench, ShieldCheck, Cpu, CheckCircle2 } from "lucide-react";

export const AssetManagementSection: React.FC = () => {
  const capabilities = [
    {
      num: "01",
      title: "Comprehensive O&M for Wind, Solar, Hybrid & BESS",
      icon: Settings,
      tag: "Turnkey O&M",
      image: "/images/services/bess_energy_storage.webp",
      imageAlt: "Turnkey O&M for Wind Solar Hybrid & BESS",
      description:
        "End-to-end Operations & Maintenance (O&M) services for utility-scale wind turbine generators (WTGs), solar PV power plants, co-located hybrid renewable systems, and containerized Battery Energy Storage Systems (BESS).",
      bullets: [
        "Comprehensive O&M for wind turbines, solar PV & hybrid plants",
        "Utility-grade BESS storage container O&M & BMS management",
        "Guaranteed plant availability & energy generation compliance",
      ],
    },
    {
      num: "02",
      title: "Substation & Transmission Infrastructure O&M",
      icon: Activity,
      tag: "EHV Substation O&M",
      image: "/images/services/ehv_substation_grid.webp",
      imageAlt: "Substation & Transmission Line O&M",
      description:
        "Operations and maintenance of high-voltage (HV) and extra-high-voltage (EHV) substations, 33kV to 400kV transformers, circuit breakers, pooling stations, overhead transmission lines, and associated electrical Balance of Plant (E-BoP).",
      bullets: [
        "O&M of 33kV to 400kV unit & pooling substations",
        "Overhead EHV transmission line & tower corridor maintenance",
        "Transformer oil testing, relay calibration & thermography",
      ],
    },
    {
      num: "03",
      title: "Plant Reliability & Availability Optimization",
      icon: ShieldCheck,
      tag: "Yield Enhancement",
      description:
        "Plant reliability improvement, system availability enhancement, energy yield optimization, and life extension studies to maximize multi-decadal asset performance and project return on investment (RoI).",
      bullets: [
        "Underperforming asset diagnostics & root-cause audits",
        "Plant availability enhancement & grid downtime reduction",
        "Remaining useful life (RUL) & structural fatigue studies",
      ],
    },
    {
      num: "04",
      title: "Skilled O&M Manpower Deployment & Management",
      icon: Users,
      tag: "Specialist Teams",
      image: "/images/services/engineers_site_inspection.webp",
      imageAlt: "Deployment of Skilled O&M Personnel",
      description:
        "Deployment and management of qualified, safety-trained O&M manpower—including site managers, electrical engineers, mechanical technicians, high-voltage specialists, and emergency response service teams.",
      bullets: [
        "Dedicated on-site managers, engineers & certified technicians",
        "24/7 high-voltage electrical & mechanical specialist teams",
        "HSE compliance, safety training & emergency response protocols",
      ],
    },
    {
      num: "05",
      title: "Preventive, Predictive & Corrective Maintenance",
      icon: Wrench,
      tag: "Uptime Maximization",
      description:
        "Structured preventive maintenance schedules, predictive analytics (vibration analysis, oil sampling, thermal imaging), and rapid corrective maintenance execution to minimize forced outages and maximize plant uptime.",
      bullets: [
        "Scheduled preventive maintenance & electrical testing",
        "Predictive condition monitoring (vibration & thermography)",
        "24/7 corrective breakdown response & emergency repair",
      ],
    },
    {
      num: "06",
      title: "Spare Parts Management & AMC Coordination",
      icon: Cpu,
      tag: "Inventory Optimization",
      description:
        "End-to-end spare parts management, critical inventory optimization, vendor coordination, warranty administration, and Annual Maintenance Contract (AMC) management across OEM suppliers.",
      bullets: [
        "Critical spare parts inventory & strategic warehousing",
        "OEM vendor coordination & warranty claim administration",
        "Comprehensive AMC & Long-Term Service Agreement (LTSA) management",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <Container>
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-100 text-amber-800 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            Category 03 — Capabilities Breakdown
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Asset Management & Operations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Delivering comprehensive O&M, plant reliability enhancement, manpower deployment, and spare parts management across wind, solar, hybrid, BESS, and high-voltage grid infrastructure in India.
          </p>
        </div>

        {/* Vertical List View */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const hasImage = Boolean(cap.image);
            return (
              <div key={idx} className="relative group">
                <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900 text-amber-400 font-mono text-xs sm:text-sm font-bold flex items-center justify-center border-4 border-white shadow-md">
                  {cap.num}
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-amber-600/40 hover:bg-amber-50/20 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-600/10 text-amber-700">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {cap.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded bg-slate-200/80 text-slate-700">
                      {cap.tag}
                    </span>
                  </div>

                  <div className={hasImage ? "grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6" : "mb-6"}>
                    <div className={hasImage ? "md:col-span-8 space-y-3" : "space-y-3"}>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                        {cap.description}
                      </p>
                    </div>

                    {hasImage && cap.image && (
                      <div className="md:col-span-4 relative h-44 w-full rounded-xl overflow-hidden shadow-md group">
                        <Image
                          src={cap.image}
                          alt={cap.imageAlt || cap.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
                    {cap.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
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
