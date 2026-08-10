"use client";

import React from "react";
import { Container } from "@/components/ui/Container";

export const ServicesSpecTable: React.FC = () => {
  const matrixData = [
    {
      serviceGroup: "Project Planning & Development",
      targetStakeholders: "RE Developers, Investors, Utilities",
      technicalScope: "Site identification (~3,000 MW), Resource measurement, Encumbrance-free Land Acquisition, STU/CTU Grid Evacuation",
      standardsDeliverables: "P50/P75/P90 Bankable DPR, WAsP / PVSyst Yield Reports, Grid Interconnection Clearance",
    },
    {
      serviceGroup: "Owner's & Lender's Engineering",
      targetStakeholders: "Banks, Infrastructure Funds, Project Owners",
      technicalScope: "EPC & OEM Bid Evaluation, Contract Review, QA/QC Site Monitoring, Commissioning Verification",
      standardsDeliverables: "Independent Yield Audit, Milestone Drawdown Certification, Acceptance Testing Protocol",
    },
    {
      serviceGroup: "Corporate C&I Open Access PPA",
      targetStakeholders: "Manufacturing Units, Data Centers, SEZs",
      technicalScope: "Third-Party Sale, Captive & Group Captive Model Structuring, Cross-Subsidy & Banking Charge Financial Analysis",
      standardsDeliverables: "Long-term PPA Contracts, Tariff Savings Financial Models, DISCOM Open Access Approvals",
    },
    {
      serviceGroup: "MNRE RLMM & Type Certification",
      targetStakeholders: "Wind Turbine OEMs, Component Manufacturers",
      technicalScope: "Statutory RLMM Listing, Type Certification Coordination, NIWE Liaison, Grid Code Fault-Ride-Through (FRT)",
      standardsDeliverables: "MNRE RLMM Registration, Type Certificates, Fault-Ride-Through Test Verification",
    },
    {
      serviceGroup: "Performance & Asset Optimization",
      targetStakeholders: "Asset Owners, IPPs, O&M Contractors",
      technicalScope: "Field Data Analytics, Underperforming Asset Diagnostics, Root Cause Investigation, Yield Recovery Strategies",
      standardsDeliverables: "Root Cause Audit Dossiers, RoI Optimization Strategy, System Degradation Benchmarking",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <Container>
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
            Technical Specification Matrix
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Engineering Rigor & Deliverable Standards
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 font-light">
            Structured overview of technical scopes, target stakeholders, and bankable deliverables across GoWindSun's service spectrum.
          </p>
        </div>

        {/* Structured Engineering Matrix Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#06111F]">
          <table className="w-full text-left text-xs sm:text-sm text-slate-300">
            <thead className="bg-slate-950 text-slate-200 font-mono uppercase text-[11px] tracking-wider border-b border-slate-800">
              <tr>
                <th scope="col" className="p-4 sm:p-5 w-1/4">Service Discipline</th>
                <th scope="col" className="p-4 sm:p-5 w-1/4">Target Stakeholders</th>
                <th scope="col" className="p-4 sm:p-5 w-1/3">Technical Scope</th>
                <th scope="col" className="p-4 sm:p-5 w-1/4">Bankable Deliverables</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {matrixData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-white font-sans">{row.serviceGroup}</td>
                  <td className="p-4 sm:p-5 text-slate-300 font-light">{row.targetStakeholders}</td>
                  <td className="p-4 sm:p-5 text-slate-300 font-light leading-relaxed">{row.technicalScope}</td>
                  <td className="p-4 sm:p-5 text-emerald-400 font-mono text-xs">{row.standardsDeliverables}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};
