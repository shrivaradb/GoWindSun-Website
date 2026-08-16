"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Vision Pull-Quote Block (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              Corporate Vision
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
              <span className="text-5xl font-black text-emerald-400 leading-none">“</span>
              <p className="text-xl sm:text-2xl font-bold leading-snug tracking-tight text-white italic -mt-4">
                To be a trusted knowledge leader and preferred partner in renewable energy, energy transition, and emerging technologies—contributing meaningfully to India's energy security and decarbonization.
              </p>
              <div className="pt-4 border-t border-slate-800 text-xs uppercase font-bold tracking-widest text-slate-400">
                GoWindSun Vision Statement
              </div>
            </div>
          </div>

          {/* Right Column: Mission Essay List (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-slate-500">
                Operational Mandate
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Corporate Mission
              </h2>
            </div>

            <div className="space-y-6 pt-2">
              {[
                {
                  num: "01",
                  title: "Build India's Respected Integrated RE Platform",
                  desc: "Combining Consulting, EPC, Asset Development, and IPP capabilities into a unified bankable platform.",
                },
                {
                  num: "02",
                  title: "Identify & Optimize High-Value Assets",
                  desc: "Identify high-potential opportunities, optimize project performance, and deliver sustainable long-term returns.",
                },
                {
                  num: "03",
                  title: "Drive Innovation & Data-Driven Automation",
                  desc: "Pioneer advanced technologies, digitalization, automation, and data-driven decision-making in power generation.",
                },
                {
                  num: "04",
                  title: "Uphold Governance & Safety Standards",
                  desc: "Maintain the highest standards of integrity, transparency, safety, ethics, and corporate governance.",
                },
                {
                  num: "05",
                  title: "Empower Communities & Environmental Impact",
                  desc: "Foster collaboration, empower people, and create lasting environmental and social impact across India.",
                },
              ].map((m) => (
                <div key={m.num} className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0">
                  <span className="text-lg font-black text-emerald-700 shrink-0 mt-0.5">
                    {m.num}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{m.title}</h4>
                    <p className="text-sm text-slate-600 mt-0.5 font-normal leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
