"use client";

import React from "react";
import Image from "next/image";

export interface StandardHeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  theme?: "dark" | "light";
  children?: React.ReactNode;
}

export const StandardHero: React.FC<StandardHeroProps> = ({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  theme = "dark",
  children,
}) => {
  const isLight = theme === "light";

  return (
    <section
      className={`relative w-full min-h-[580px] lg:min-h-[640px] xl:min-h-[700px] flex items-center overflow-hidden py-28 lg:py-32 ${
        isLight ? "bg-white text-slate-900" : "bg-[#06111F] text-white"
      }`}
    >
      {/* Background Hero Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={imageAlt || "GoWindSun Hero Visual"}
            fill
            className="object-cover object-center brightness-[0.38] contrast-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06111F]/95 via-[#06111F]/80 to-transparent" />
        </div>
      )}

      {/* Decorative Accents when No Image */}
      {!image && !isLight && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none z-0" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none z-0" />
        </>
      )}

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 lg:py-6">
        <div className="max-w-4xl text-left">
          {/* Tier 1 H1 Title */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            {title}
          </h1>

          {/* Tier 2 Lead Subtitle */}
          {subtitle && (
            <p
              className={`text-2xl sm:text-3xl font-normal mt-4 ${
                isLight ? "text-slate-800" : "text-slate-200"
              }`}
            >
              {subtitle}
            </p>
          )}

          {/* Tier 3 Description */}
          {description && (
            <p
              className={`text-base sm:text-lg font-normal max-w-3xl mt-6 ${
                isLight ? "text-slate-700" : "text-slate-300"
              }`}
            >
              {description}
            </p>
          )}

          {/* Extra Children (e.g. Search Bar or Live Tickers) */}
          {children}
        </div>
      </div>
    </section>
  );
};
