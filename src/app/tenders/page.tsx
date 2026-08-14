"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import {
  FileCheck,
  Search,
  Calendar,
  Building2,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
  Tag,
  Inbox,
  Filter,
  FileText,
  Mail,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface TenderItem {
  id: string;
  tenderId: string;
  title: string;
  authority: string;
  country: string;
  countryFlag: string;
  category: "Wind" | "Solar" | "Hybrid" | "Storage";
  scopeCapacity: string;
  submissionDeadline: string;
  publishedDate: string;
  status: "Open" | "Upcoming" | "Under Evaluation" | "Closed";
  description: string;
}

// Active Tenders Container (Empty by default to maintain authentic data rules)
const ACTIVE_TENDERS: TenderItem[] = [];

export default function TendersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredTenders = ACTIVE_TENDERS.filter((tender) => {
    const matchesSearch =
      tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.authority.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.tenderId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === "ALL" || tender.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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
              <FileCheck className="w-4 h-4 text-[#059669]" />
              <span>COMMERCIAL PROCUREMENT PORTAL</span>
            </motion.div>

            {/* Typography-Led Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
            >
              Renewable Energy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] via-[#0284C7] to-[#D97706]">
                Tenders & Procurement.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal max-w-3xl"
            >
              Official procurement portal tracking commercial opportunities, utility-scale wind & solar tenders, hybrid auctions, and turn-key EPC invitations across primary clean energy markets.
            </motion.p>

            {/* Quick Stat Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap gap-3 font-mono text-xs text-slate-700"
            >
              <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
                <span>Bankable Bid Qualification Support</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#0284C7]" />
                <span>Utility-Scale Wind, Solar & Storage</span>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* 2. CATEGORY SELECTOR & FILTER PORTAL */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto space-y-10">
            
            {/* Category Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Wind Energy Tenders", category: "Wind", desc: "Onshore & offshore wind turbine supply, EPC, and concession auctions.", color: "text-[#0284C7]", bg: "bg-sky-50/60 border-sky-200" },
                { title: "Solar PV Auctions", category: "Solar", desc: "Utility-scale ground-mounted solar PV power plant development tenders.", color: "text-[#D97706]", bg: "bg-amber-50/60 border-amber-200" },
                { title: "Hybrid Power Scopes", category: "Hybrid", desc: "Co-located solar-wind hybrid and peak-shaving energy procurement.", color: "text-slate-800", bg: "bg-slate-100/70 border-slate-200" },
                { title: "BESS & Grid Storage", category: "Storage", desc: "Standalone lithium-ion battery energy storage systems (BESS) auctions.", color: "text-[#059669]", bg: "bg-emerald-50/60 border-emerald-200" },
              ].map((card, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedCategory(selectedCategory === card.category ? "ALL" : card.category)}
                  className={`p-6 rounded-2xl border transition-all text-left space-y-3 cursor-pointer ${
                    selectedCategory === card.category
                      ? "ring-2 ring-[#059669] bg-white shadow-md border-emerald-400"
                      : `${card.bg} hover:shadow-sm hover:border-slate-300`
                  }`}
                >
                  <div className={`font-mono text-xs font-bold uppercase ${card.color}`}>
                    {card.category} PROCUREMENT
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">{card.desc}</p>
                </button>
              ))}
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                
                <div className="relative w-full sm:w-96">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by tender name, authority or ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#059669] transition-colors"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                  <Filter className="w-3.5 h-3.5 text-slate-400" />
                  <span>Category Filter: <strong className="text-slate-900">{selectedCategory}</strong></span>
                </div>

              </div>
            </div>

            {/* Tenders Display Section / Professional Empty State */}
            {filteredTenders.length > 0 ? (
              <div className="space-y-4">
                {filteredTenders.map((t) => (
                  <div key={t.id} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#0284C7] font-bold">{t.tenderId}</span>
                      <span className="text-[#059669] font-semibold">{t.status}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">{t.title}</h4>
                    <p className="text-xs text-slate-600">{t.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              /* PROFESSIONAL EMPTY STATE */
              <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-12 text-center space-y-5 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#059669] flex items-center justify-center mx-auto shadow-inner">
                  <Inbox className="w-8 h-8 text-[#059669]" />
                </div>

                <div className="space-y-2 max-w-lg mx-auto">
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    No Tenders Currently Available
                  </h3>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    New tender opportunities, procurement notices, and RFP documentation will be published here upon official release by issuing authorities.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#059669] hover:bg-[#047857] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md shadow-emerald-600/20"
                  >
                    <span>Submit Tender Inquiry / RFP</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}

            {/* Dark Navy Callout CTA Banner — Matching Website Footer/CTA Style */}
            <div className="bg-[#06111F] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-slate-800">
              <div className="space-y-2 text-center md:text-left">
                <div className="text-xs font-mono font-bold text-[#F99D1C] uppercase tracking-widest">
                  TENDER ADVISORY & BID MANAGEMENT
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                  Need Bid Qualification & DPR Assistance?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl leading-relaxed">
                  GoWindSun provides independent technical due diligence, bankable yield DPR compilation, tariff cost modeling, and Owner's Engineering support for tender submissions.
                </p>
              </div>

              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full bg-[#059669] hover:bg-[#047857] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shrink-0 shadow-lg shadow-emerald-600/30"
              >
                Contact Advisory Team
              </Link>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}
