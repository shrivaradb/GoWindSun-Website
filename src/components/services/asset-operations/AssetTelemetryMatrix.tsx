"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export const AssetTelemetryMatrix: React.FC = () => {
  const operationsMatrix = [
    {
      scope: "WTG & Solar PV Plant O&M",
      stakeholders: "Asset Owners, IPPs, Yield Investors",
      protocol: "Preventive & Predictive Maintenance",
      deliverable: "98%+ Guaranteed Availability Audit & Monthly Generation Reports",
    },
    {
      scope: "BESS & Storage Container O&M",
      stakeholders: "Utilities, Grid Operators, IPPs",
      protocol: "BMS Telemetry & Cell Thermal Balancing",
      deliverable: "Battery Degradation Benchmarking & Round-Trip Efficiency Audit",
    },
    {
      scope: "EHV Substation & Transmission",
      stakeholders: "State Utilities (STU), CTU, IPPs",
      protocol: "DGA Oil Testing, Relay Calibration & Thermography",
      deliverable: "Grid Interconnection Compliance & Substation Maintenance Dossier",
    },
    {
      scope: "Underperforming Plant Recovery",
      stakeholders: "Lenders, Banks, Distressed Asset Funds",
      protocol: "Root-Cause Diagnostics & Yield Recovery Audit",
      deliverable: "RoI Optimization Strategy & System Degradation Dossier",
    },
    {
      scope: "Site Manpower & HSE Governance",
      stakeholders: "Project Developers, Plant Managers",
      protocol: "24/7 Specialist Engineering & HSE Patrols",
      deliverable: "Zero-Harm HSE Audit Log & Certified Operations Manpower",
    },
    {
      scope: "Spare Parts & OEM Warranty",
      stakeholders: "WTG OEMs, Component Suppliers",
      protocol: "Strategic Warehousing & Claim Governance",
      deliverable: "Long Term Service Agreement (LTSA) Governance Report & Optimised Inventory Master Schedule",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            CONTROL CENTER TELEMETRY DOSSIER
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
            OPERATIONAL DELIVERABLES & TECHNICAL MATRIX
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 font-light">
            Structured overview of operational protocols, target stakeholders, and bankable deliverables across GoWindSun's asset management portfolio.
          </p>
        </div>

        {/* Console Telemetry Dossier Matrix Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#06111F]">
          <table className="w-full text-left text-xs sm:text-sm text-slate-300 font-mono">
            <thead className="bg-slate-950 text-slate-200 uppercase text-[11px] tracking-wider border-b border-slate-800">
              <tr>
                <th scope="col" className="p-4 sm:p-5 w-1/4 text-emerald-400">OPERATIONAL SCOPE</th>
                <th scope="col" className="p-4 sm:p-5 w-1/4">TARGET STAKEHOLDERS</th>
                <th scope="col" className="p-4 sm:p-5 w-1/4 text-amber-400">MAINTENANCE PROTOCOL</th>
                <th scope="col" className="p-4 sm:p-5 w-1/4 text-sky-400">BANKABLE DELIVERABLES</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {operationsMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-white font-sans">{row.scope}</td>
                  <td className="p-4 sm:p-5 text-slate-300 font-light">{row.stakeholders}</td>
                  <td className="p-4 sm:p-5 text-amber-300/90 font-light">{row.protocol}</td>
                  <td className="p-4 sm:p-5 text-emerald-400 text-xs">{row.deliverable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};
