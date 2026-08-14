"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export const IppHero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex flex-col justify-start pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 bg-[#06111F] border-b border-slate-800/80 overflow-hidden text-white w-full">
      {/* Background Full-Width Cinematic Renewable Energy Visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ipp/ipp-hero.png"
          alt="GoWindSun IPP Platform - Utility Scale Renewable Energy Asset Platform"
          fill
          className="object-cover object-center brightness-[0.42] contrast-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06111F]/95 via-[#06111F]/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
      </div>

      <Container className="relative z-10">


        {/* Hero Architectural Header */}
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.04] uppercase font-sans">
            DEVELOPING, OWNING & <br />
            OPERATING HIGH-QUALITY <br />
            <span className="text-sky-400">RENEWABLE ASSETS.</span>
          </h1>

          <div className="pt-8 border-t border-slate-800 mt-10 space-y-4 max-w-4xl">
            <p className="text-xl sm:text-2xl text-slate-200 font-light leading-snug">
              GoWindSun India Private Limited is dedicated to developing, owning, operating, and managing high-quality renewable energy assets across India.
            </p>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-2xl">
              Leveraging deep industry expertise, strategic partnerships, and extensive market knowledge, we identify and develop renewable energy opportunities that offer long-term value and sustainable growth.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
