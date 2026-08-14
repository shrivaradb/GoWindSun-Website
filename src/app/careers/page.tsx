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
  Inbox,
  CheckCircle2,
  TrendingUp,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      
      {/* 1. HERO SECTION — Matches GoWindSun Light Design System */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-[#F8FAFC] border-b border-slate-200">
        <Container>
          <div className="max-w-4xl space-y-6">
            
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#059669] text-xs font-mono font-bold uppercase tracking-wider"
            >
              <Briefcase className="w-4 h-4 text-[#059669]" />
              <span>CAREERS AT GOWINDSUN</span>
            </motion.div>

            {/* Typography-Led Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
            >
              Building the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] via-[#0284C7] to-[#D97706]">
                Clean Energy.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal max-w-3xl"
            >
              Empowering talented engineers, wind energy analysts, solar EPC managers, and power market specialists to deliver world-class renewable energy infrastructure across utility-scale ecosystems.
            </motion.p>

            {/* Quick Stat Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap gap-3 font-mono text-xs text-slate-700"
            >
              <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2">
                <Users className="w-4 h-4 text-[#059669]" />
                <span>Multi-Disciplinary Engineering Culture</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#D97706]" />
                <span>Utility Wind, Solar & Storage Projects</span>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* 2. WHY GOWINDSUN / LIFE & WORK */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <Container>
          <div className="max-w-5xl mx-auto space-y-12">
            
            <div className="text-center space-y-3">
              <h2 className="text-xs font-mono font-bold text-[#059669] uppercase tracking-widest">
                LIFE & WORK AT GOWINDSUN
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                WHY JOIN OUR ENGINEERING TEAM
              </h3>
              <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
                At GoWindSun, we foster an environment of technical rigor, commercial innovation, and hands-on site experience in India's clean energy transition.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-[#0284C7]" />,
                  title: "High-Impact Infrastructure",
                  desc: "Work directly on ~3,000 MW greenfield wind & solar project pipelines, bankable yield assessments, and grid interconnection.",
                },
                {
                  icon: <Award className="w-6 h-6 text-[#D97706]" />,
                  title: "Engineering Excellence",
                  desc: "Collaborate with industry veterans using industry-standard tools (WAsP, OpenWind, PVSyst, SCADA, DigSILENT) for Bankable DPRs.",
                },
                {
                  icon: <HeartHandshake className="w-6 h-6 text-[#059669]" />,
                  title: "Growth & Ownership",
                  desc: "Clear career progression paths across engineering, asset management, strategic energy trading, and technical due diligence.",
                },
              ].map((val, idx) => (
                <div key={idx} className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 space-y-4 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    {val.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{val.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">{val.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* 3. CURRENT OPPORTUNITIES SECTION / PROFESSIONAL EMPTY STATE */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                CURRENT OPPORTUNITIES
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Active Career Positions & Technical Hiring Notices
              </p>
            </div>

            {/* PROFESSIONAL EMPTY STATE */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-12 text-center space-y-6 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#059669] flex items-center justify-center mx-auto shadow-inner">
                <Inbox className="w-8 h-8 text-[#059669]" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <h4 className="text-2xl font-extrabold text-slate-900">
                  We Currently Have No Open Positions
                </h4>
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  We currently have no open positions. Please check back soon for future opportunities as our project operations expand.
                </p>
              </div>

              {/* SPONTANEOUS CV SUBMISSION BOX */}
              <div className="pt-4 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 max-w-xl mx-auto space-y-3 font-mono text-xs">
                <span className="font-bold text-slate-900 uppercase tracking-wider block">
                  General Resume Submission
                </span>
                <p className="text-slate-600 font-sans text-xs">
                  Interested in future opportunities with GoWindSun? Send your updated CV and cover letter directly to our corporate email.
                </p>
                <a
                  href="mailto:director@gowindsun.com?subject=Spontaneous%20Job%20Application%20-%20GoWindSun"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#059669] hover:bg-[#047857] text-white font-bold uppercase transition-all shadow-md shadow-emerald-600/20"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send CV to director@gowindsun.com</span>
                </a>
              </div>
            </div>

            {/* Dark Navy Corporate Callout Banner */}
            <div className="bg-[#06111F] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-slate-800">
              <div className="space-y-2 text-center md:text-left">
                <div className="text-xs font-mono font-bold text-[#F99D1C] uppercase tracking-widest">
                  CORPORATE HEADQUARTERS
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                  GoWindSun India Private Limited
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl leading-relaxed">
                  Pune, Maharashtra – India. Delivering integrated clean energy infrastructure across wind, solar, hybrid, and BESS ecosystems.
                </p>
              </div>

              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full bg-[#059669] hover:bg-[#047857] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shrink-0 shadow-lg shadow-emerald-600/30"
              >
                Contact HR & Corporate
              </Link>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}
