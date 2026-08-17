import { SEO } from "@/components/seo/SEO";
"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import {
  Briefcase,
  Users,
  Award,
  Zap,
  Mail,
  ArrowRight,
  ShieldCheck,
  Building2,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Wind,
  Sun,
  Grid,
  Scale,
  Cpu,
  LineChart,
  Layers,
  GraduationCap,
  Target,
  FileCheck,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { StandardHero } from "@/components/ui/StandardHero";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#06111F] text-white antialiased">
      <SEO title="Careers" description="Join the team at GoWindSun India Private Limited and engineer the future of renewable energy infrastructure." canonical="/careers" />
      
      {/* 1. HERO SECTION — Standard Global Dark Hero System */}
      <StandardHero
        title={
          <>
            Careers At <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
              GoWindSun Engineering
            </span>
          </>
        }
        subtitle="Call for Applications: Young & Mid-Career Professionals."
        description="Empowering talented engineers, wind energy analysts, solar EPC managers, power market specialists, and regulatory affairs experts to accelerate India's clean energy transition."
      />

      {/* 2. CALL FOR APPLICATIONS SECTION */}
      <section className="py-16 md:py-24 bg-[#06111F] border-t border-slate-800">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            
            {/* PROGRAMME INTRODUCTION */}
            <div className="bg-[#0B1E36] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-slate-700/80">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6 max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Call for Applications</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight uppercase">
                  Young &amp; Mid-Career Professionals – <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-amber-300">
                    Wind, Solar, Power Systems &amp; Regulatory Affairs
                  </span>
                </h2>

                <div className="space-y-4 text-slate-300 font-normal text-base sm:text-lg leading-relaxed">
                  <p>
                    We invite applications from young professionals and mid-career professionals who are passionate about India’s rapidly evolving renewable energy and power sector.
                  </p>
                  <p className="text-slate-400 text-sm sm:text-base">
                    The programme is intended to bring together professionals with practical experience and fresh perspectives to contribute to the development of wind and solar energy, power systems, renewable energy markets, grid integration and regulatory frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* AREAS OF INTEREST */}
            <div className="space-y-8">
              <div className="text-left space-y-2 border-l-4 border-[#0186D5] pl-4">
                <h3 className="text-xs font-mono font-bold text-[#0186D5] uppercase tracking-widest">
                  SPECIALIZATION DOMAINS
                </h3>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                  Areas of Interest
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Wind className="w-5 h-5 text-[#0186D5]" />,
                    title: "Wind Energy",
                    desc: "Project Development, Technology, Engineering, O&M and Commercial",
                    accent: "border-sky-500/30 bg-[#0B1E36]",
                  },
                  {
                    icon: <Sun className="w-5 h-5 text-[#F99D1C]" />,
                    title: "Solar Energy",
                    desc: "Project Development, Engineering, EPC and Operations",
                    accent: "border-amber-500/30 bg-[#0B1E36]",
                  },
                  {
                    icon: <Grid className="w-5 h-5 text-[#059669]" />,
                    title: "Power Systems",
                    desc: "Grid Integration, Transmission, Distribution and System Planning",
                    accent: "border-emerald-500/30 bg-[#0B1E36]",
                  },
                  {
                    icon: <LineChart className="w-5 h-5 text-indigo-400" />,
                    title: "Renewable Energy Markets",
                    desc: "Open Access, PPAs, Power Trading and C&I Procurement",
                    accent: "border-indigo-500/30 bg-[#0B1E36]",
                  },
                  {
                    icon: <Scale className="w-5 h-5 text-purple-400" />,
                    title: "Regulatory & Policy",
                    desc: "CERC/MERC, MNRE, Grid Code, Open Access and Renewable Energy Regulations",
                    accent: "border-purple-500/30 bg-[#0B1E36]",
                  },
                  {
                    icon: <Layers className="w-5 h-5 text-teal-400" />,
                    title: "Energy Storage & Hybrids",
                    desc: "Energy Storage, Hybrid Projects and Round-the-Clock (RTC) Renewable Energy",
                    accent: "border-teal-500/30 bg-[#0B1E36]",
                  },
                  {
                    icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
                    title: "Project Finance & Valuation",
                    desc: "Project Finance, Financial Modelling and Investment Structuring",
                    accent: "border-emerald-500/30 bg-[#0B1E36]",
                  },
                  {
                    icon: <Cpu className="w-5 h-5 text-sky-400" />,
                    title: "Digitalisation & Tech",
                    desc: "Digitalisation, Data Analytics and Emerging Technologies in Renewable Energy",
                    accent: "border-sky-500/30 bg-[#0B1E36]",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-2xl border ${item.accent} space-y-3 transition-all hover:border-[#0186D5]/60 hover:shadow-lg`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#06111F] border border-slate-700/80 shadow-sm shrink-0">
                        {item.icon}
                      </div>
                      <h5 className="text-lg font-bold text-white uppercase">{item.title}</h5>
                    </div>
                    <p className="text-sm text-slate-300 font-normal leading-relaxed pl-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* WHO CAN APPLY & WHAT WE ARE LOOKING FOR */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Who Can Apply */}
              <div className="bg-[#0B1E36] border border-slate-700/80 rounded-3xl p-8 space-y-6 shadow-md">
                <div className="flex items-center gap-3 border-b border-slate-700/80 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-white">Who Can Apply?</h4>
                    <p className="text-xs text-slate-400 font-mono">Eligibility &amp; Candidate Profiles</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-white font-bold text-base">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>Young Professionals</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal pl-6">
                      Engineers, MBAs, energy professionals and researchers who are beginning their careers and have a strong interest in the renewable energy sector.
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-700/70">
                    <div className="flex items-center gap-2 text-white font-bold text-base">
                      <CheckCircle2 className="w-4 h-4 text-[#0186D5] shrink-0" />
                      <span>Mid-Career Professionals</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal pl-6">
                      Professionals with relevant experience in renewable energy, utilities, power systems, project development, EPC, consulting, finance, regulation, policy or energy markets.
                    </p>
                  </div>
                </div>
              </div>

              {/* What We Are Looking For */}
              <div className="bg-[#0B1E36] border border-slate-700/80 rounded-3xl p-8 space-y-6 shadow-md">
                <div className="flex items-center gap-3 border-b border-slate-700/80 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 text-[#0186D5] flex items-center justify-center font-bold shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-white">What We Are Looking For</h4>
                    <p className="text-xs text-slate-400 font-mono">Core Competencies &amp; Mindset</p>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-slate-300 font-normal">
                  {[
                    "Strong technical, commercial or regulatory understanding",
                    "Practical exposure to the power or renewable energy sector",
                    "Ability to analyse industry challenges and develop solutions",
                    "Interest in innovation, policy and market development",
                    "Willingness to collaborate across industry, academia and government",
                    "Commitment to accelerating India’s clean energy transition",
                  ].map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#059669] mt-2 shrink-0" />
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* APPLICATION & SUBMISSION BOX */}
            <div className="bg-[#0B1E36] border-2 border-emerald-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-[#059669] flex items-center justify-center mx-auto shadow-inner">
                <FileCheck className="w-8 h-8 text-emerald-400" />
              </div>

              <div className="space-y-3 max-w-2xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
                  How to Submit Your Application
                </h3>
                <p className="text-base text-slate-300 font-normal leading-relaxed">
                  Interested professionals are invited to submit their CV/Profile along with a brief note highlighting their experience, area of expertise, and interest in renewable energy.
                </p>
              </div>

              <div className="pt-2 max-w-xl mx-auto space-y-4">
                <div className="p-6 rounded-2xl bg-[#06111F] border border-slate-700/80 space-y-3">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Official Application Submission Desk
                  </div>
                  <a
                    href="mailto:director@gowindsun.com?subject=Application%20-%20Young%20%26%20Mid-Career%20Professional%20Programme"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#059669] hover:bg-[#047857] text-white font-bold text-sm sm:text-base uppercase transition-all shadow-lg shadow-emerald-600/30"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Submit CV to director@gowindsun.com</span>
                  </a>
                </div>

                <p className="text-xs text-slate-400 font-mono">
                  Applications will be reviewed by GoWindSun senior executive management on a rolling basis.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

    </main>
  );
}
