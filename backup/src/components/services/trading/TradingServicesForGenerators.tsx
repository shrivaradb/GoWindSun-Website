"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const generatorServices = [
  {
    num: "01",
    title: "OFFTAKER IDENTIFICATION & SCREENING",
    desc: "Identifying suitable commercial & industrial consumers based on power demand profiles, geographic location, industry sector, sustainability goals, and creditworthiness.",
  },
  {
    num: "02",
    title: "CORPORATE PPA MARKETING & CLOSURE",
    desc: "Supporting RE developers and IPPs in market assessment, customer outreach, commercial negotiations, bid preparation, proposal development, and transaction execution.",
  },
  {
    num: "03",
    title: "REVENUE & DISPATCH OPTIMIZATION",
    desc: "Structuring multi-buyer PPAs, Group Captive equity arrangements, and ISTS / Intra-State Open Access dispatch to maximize long-term asset revenues.",
  },
];

export const TradingServicesForGenerators: React.FC = () => {
  return (
    <section className="py-24 bg-[#06111F] text-white border-b border-slate-800 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Sourced Generator Services List */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0186D5]">
              RE GENERATORS & IPPs
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-[1.05]">
              CORPORATE PPA & OFF-TAKE <br />
              FOR RE GENERATORS.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed border-t border-slate-800 pt-4">
              Assisting renewable energy developers, IPPs, and asset owners in securing creditworthy corporate off-takers and structuring long-term revenue streams.
            </p>

            <div className="space-y-4 pt-2">
              {generatorServices.map((item) => (
                <div key={item.num} className="p-4 bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#0186D5]">[{item.num}]</span>
                    <h3 className="text-xs font-mono font-bold text-white uppercase">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Feature Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[360px] sm:h-[440px] w-full border border-slate-800 shadow-2xl overflow-hidden">
              <Image
                src="/images/trading/trading-grid-dispatch.png"
                alt="RE Generation Dispatch & Off-Take Coordination"
                fill
                className="object-cover object-center brightness-90 contrast-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-sky-300">
                GRID DISPATCH & POWER OFF-TAKE • INDIA REGIONS
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
