"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const matrix = [
  {
    stakeholder: "Project Developers & IPPs",
    need: "Risk mitigation, bankable DPRs, site access",
    value: "Identified ~3000 MW site pipeline, bankable P50/P75/P90 DPRs, micro-siting, CTU/STU evacuation, and turnkey EPC execution.",
  },
  {
    stakeholder: "Investors & Infrastructure Funds",
    need: "Carefully vetted assets & risk-adjusted returns",
    value: "Equity participation, portfolio risk management, technical due diligence, and transparent long-term asset governance.",
  },
  {
    stakeholder: "Banks & Financial Institutions",
    need: "Independent risk review & model validation",
    value: "Lender's Technical Engineer advisory, construction monitoring, contractual review, and financial model validation.",
  },
  {
    stakeholder: "Commercial & Industrial (C&I) Consumers",
    need: "Electricity cost reduction & ESG compliance",
    value: "Open Access PPA advisory (Third-party, Captive, Group Captive), SLDC approval support, and long-term tariff certainty.",
  },
  {
    stakeholder: "Utilities & System Operators",
    need: "High-availability grid dispatch & stability",
    value: "EHV substation engineering (33kV-400kV), IEC 61850 SCADA integration, and CEA grid-compliant synchronization.",
  },
  {
    stakeholder: "Equipment OEMs & Manufacturers",
    need: "Regulatory model approvals & market access",
    value: "MNRE ALMM (Approved List of Models & Manufacturers) registration, Type Certification support, and regulatory liaison.",
  },
  {
    stakeholder: "Local Communities & Environment",
    need: "Sustainable economic impact & decarbonization",
    value: "Decarbonization, sustainable economic development, local employment creation, and ethical corporate governance.",
  },
];

export const StakeholderValueSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-700">
            Stakeholder Alignment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Who We Create Value For
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Engineering-grade alignment of technical feasibility, commercial viability, and risk-mitigated returns across key sector stakeholders.
          </p>
        </div>

        {/* Structured Engineering Specification Table (No Cards!) */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6 w-1/4">Stakeholder Group</th>
                  <th className="py-4 px-6 w-1/4">Primary Requirement</th>
                  <th className="py-4 px-6 w-1/2">GoWindSun Value Delivered</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                {matrix.map((row, idx) => (
                  <motion.tr
                    key={row.stakeholder}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="py-5 px-6 font-bold text-slate-900 align-top">
                      {row.stakeholder}
                    </td>
                    <td className="py-5 px-6 font-medium text-slate-600 align-top">
                      {row.need}
                    </td>
                    <td className="py-5 px-6 leading-relaxed align-top font-normal">
                      {row.value}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
};
