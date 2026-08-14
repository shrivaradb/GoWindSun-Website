"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const TradingHero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex flex-col justify-start pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 bg-[#06111F] border-b border-slate-800/80 overflow-hidden text-white w-full">
      {/* Background Full-Width Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/re-trading.png"
          alt="GoWindSun Renewable Energy Trading - Power Flow Infrastructure"
          fill
          className="object-cover object-center brightness-[0.38] contrast-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06111F]/95 via-[#06111F]/80 to-transparent" />
      </div>

      {/* Precision Engineering Background Details */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none z-0" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        {/* Hero Content Header */}
        <div className="max-w-5xl space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.04] uppercase font-sans">
            CONNECTING CLEAN POWER <br />
            WITH <span className="text-[#0186D5]">ENERGY DEMAND.</span>
          </h1>

          <div className="pt-6 border-t border-slate-800/80 space-y-4">
            <p className="text-xl sm:text-2xl text-slate-200 font-light leading-snug">
              Strategic transaction advisory, Corporate PPA structuring, Open Access feasibility, and renewable power sourcing for C&I consumers and IPP generators across India.
            </p>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl">
              GoWindSun enables commercial and industrial power off-takers to secure{" "}
              <strong className="font-semibold text-slate-100">reliable, cost-effective green electricity</strong>{" "}
              through{" "}
              <strong className="font-semibold text-slate-100">Third-Party Sale, Group Captive, and Inter-State / Intra-State Open Access</strong>{" "}
              models.
            </p>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl">
              We optimise your{" "}
              <strong className="font-semibold text-slate-100">total electricity cost</strong>{" "}
              by designing the most suitable renewable power procurement structure based on your{" "}
              <strong className="font-semibold text-slate-100">consumption profile, tariff, contract demand, subsidy position, Open Access charges, and renewable energy requirements</strong>.
            </p>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl">
              Our approach combines{" "}
              <strong className="font-semibold text-slate-100">commercial optimisation with renewable energy sourcing</strong>,{" "}
              helping businesses transition to clean power while improving cost efficiency and long-term energy security.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
