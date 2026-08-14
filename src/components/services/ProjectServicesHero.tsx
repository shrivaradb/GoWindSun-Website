"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export const ProjectServicesHero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex flex-col justify-start pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 bg-[#06111F] border-b border-slate-800/80 overflow-hidden text-white w-full">
      {/* Background Full-Width Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/project-development-epc-hero.png"
          alt="GoWindSun Renewable Energy Project Development & Turnkey EPC Execution"
          fill
          className="object-cover object-center brightness-[0.38] contrast-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06111F]/95 via-[#06111F]/80 to-transparent" />
      </div>

      {/* Precision Grid Background Details */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none z-0" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">

        {/* Header Content */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            PROJECT SERVICES
            <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium text-slate-300">
              End-to-end wind, solar & hybrid asset execution in India.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl font-light">
            GoWindSun supports project developers, IPPs, and institutional partners through every phase of project development—from greenfield site identification (~3,000 MW pipeline) and bankable resource measurement to grid evacuation, turnkey EPC, and operational asset recovery.
          </p>
        </div>
      </Container>
    </section>
  );
};
