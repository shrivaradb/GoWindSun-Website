"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";

export const IppStrategicAdvantages: React.FC = () => {
  return (
    <section className="py-24 bg-[#06111F] text-white border-b border-slate-800 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[360px] sm:h-[440px] w-full border border-slate-800 shadow-2xl overflow-hidden">
              <Image
                src="/images/ipp/ipp-long-term-value.webp"
                alt="Long-Term Renewable Energy Asset Infrastructure Value"
                fill
                className="object-cover object-center brightness-90 contrast-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-sky-300">
                STU & CTU GRID INTERCONNECTION • INDIA MARKET
              </div>
            </div>
          </div>

          {/* Right Sourced Facts & Editorial Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-sky-400">
              MACRO DRIVERS
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-[1.05]">
              INDIA’S RENEWABLE ENERGY <br />
              INVESTMENT LANDSCAPE.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed border-t border-slate-800 pt-4">
              India has set an ambitious target of achieving <strong className="text-white font-bold">500 GW of non-fossil fuel-based electricity generation capacity by 2030</strong>. Driven by strong economic growth, supportive government policies, and increasing power demand, India presents unparalleled opportunities for stable and sustainable infrastructure investments.
            </p>

            {/* Standalone Metric Counter Block (AGENTS.md Rule 1) */}
            <div className="p-4 bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-sky-400">NATIONAL NON-FOSSIL TARGET</div>
                <div className="text-xs text-slate-400 font-light">Electricity generation capacity target by 2030</div>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                <CountUp end={500} suffix=" GW" duration={2.2} />
              </div>
            </div>

            <div className="space-y-4 pt-1">
              <div className="p-4 bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="text-xs font-mono font-bold text-sky-400">LONG-TERM REVENUE VISIBILITY</div>
                <div className="text-xs text-slate-300 font-light">Renewable energy projects benefit from long-term power purchase agreements (PPAs), captive consumption arrangements, and open access contracts that provide predictable cash flows.</div>
              </div>

              <div className="p-4 bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="text-xs font-mono font-bold text-sky-400">SUSTAINABLE GROWTH MARKET</div>
                <div className="text-xs text-slate-300 font-light">India's growing electricity demand and commitment to clean energy ensure continued expansion of the renewable energy sector.</div>
              </div>

              <div className="p-4 bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="text-xs font-mono font-bold text-sky-400">STRONG GOVERNMENT SUPPORT & ESG ALIGNMENT</div>
                <div className="text-xs text-slate-300 font-light">Policy initiatives, renewable purchase obligations (RPOs), transmission infrastructure development, and alignment with ESG goals.</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
