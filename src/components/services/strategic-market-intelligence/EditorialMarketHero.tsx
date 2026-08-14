"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export const EditorialMarketHero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex flex-col justify-start pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 bg-[#06111F] border-b border-slate-800/80 overflow-hidden text-white w-full">
      {/* Background Cinematic Energy Infrastructure Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/strategic_advisory_hero.png"
          alt="Strategic Advisory & Energy Markets - Global RE Network & Grid Integration"
          fill
          className="object-cover object-center brightness-[0.38] contrast-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06111F]/95 via-[#06111F]/80 to-transparent" />
      </div>

      {/* Precision Engineering Background Details */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none z-0" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10">


        {/* Editorial Layout Header */}
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.04] uppercase font-sans">
            STRATEGIC ADVISORY <br />
            <span className="text-emerald-400">& ENERGY MARKETS.</span>
          </h1>

          <div className="pt-8 border-t border-slate-700/60 mt-10 space-y-4 max-w-4xl">
            <p className="text-xl sm:text-2xl text-slate-200 font-light leading-snug">
              Understanding the forces shaping renewable-energy markets—turning policy trends, regulatory developments, and market signals into informed commercial decisions.
            </p>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
              GoWindSun provides corporate energy trading advisory, Corporate PPA structuring, asset repowering, M&A due diligence, portfolio strategy, Green Hydrogen, and offshore wind advisory across India.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
