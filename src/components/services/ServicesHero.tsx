"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight, ChevronRight, Compass, HardHat, FileText, Settings, LineChart } from "lucide-react";

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex flex-col justify-start pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 bg-[#06111F] border-b border-slate-800/80 overflow-hidden text-white w-full">
      {/* Background Full-Width Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services/services-hero.png"
          alt="GoWindSun Integrated Renewable Energy Services Ecosystem"
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
        {/* Technical Typography Opening Header */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            SERVICES
            <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium text-slate-300">
              Engineering, developing, operating and advising across the renewable energy value chain.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl font-light">
            GoWindSun India Private Limited delivers integrated lifecycle solutions for wind, solar, hybrid power plants, and battery energy storage systems (BESS)—supporting India&apos;s 500 GW Panchamrit 2030 non-fossil capacity target across a ~3,000 MW identified greenfield site pipeline and India&apos;s 220+ GW renewable energy market landscape.
          </p>
        </div>
      </Container>
    </section>
  );
};
