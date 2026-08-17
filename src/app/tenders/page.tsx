import { SEO } from "@/components/seo/SEO";
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
  Wind,
  Sun,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { StandardHero } from "@/components/ui/StandardHero";

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
  requirements: string[];
}

// Active Tenders Official Notices
const ACTIVE_TENDERS: TenderItem[] = [
  {
    id: "tender-1",
    tenderId: "GWS-TND-2026-001",
    title: "1. Operational Wind & Solar Power Projects Acquisition",
    authority: "GoWindSun India Private Limited",
    country: "India",
    countryFlag: "🇮🇳",
    category: "Wind",
    scopeCapacity: "WTG > 1.5 MW / Utility Solar",
    submissionDeadline: "Open / Rolling Basis",
    publishedDate: "Active Notice",
    status: "Open",
    description: "We are seeking operational wind and solar power projects for acquisition across India. For wind projects, the individual wind turbine capacity should be greater than 1.5 MW per turbine. Preference will be given to projects with strong operational performance, established grid connectivity, and clear title and regulatory documentation.",
    requirements: [
      "Wind turbine capacity > 1.5 MW per turbine",
      "Strong operational performance history",
      "Established grid connectivity & sub-station allocation",
      "Clear title land and valid regulatory documentation",
    ],
  },
  {
    id: "tender-2",
    tenderId: "GWS-TND-2026-002",
    title: "2. Acquisition of Shovel-Ready Wind & Solar Project Sites",
    authority: "GoWindSun India Private Limited",
    country: "India",
    countryFlag: "🇮🇳",
    category: "Solar",
    scopeCapacity: "Shovel-Ready Permitted Sites",
    submissionDeadline: "Open / Rolling Basis",
    publishedDate: "Active Notice",
    status: "Open",
    description: "We are seeking shovel-ready wind and solar energy project sites across India with secured land and grid connectivity. Such projects should be development-ready and capable of moving immediately into construction, subject to final due diligence and transaction closure.",
    requirements: [
      "Secured land packages with clear title",
      "Established STU/CTU grid connectivity approval",
      "Valid statutory approvals & development permits",
      "Immediate commencement of development & construction",
    ],
  },
  {
    id: "tender-3",
    tenderId: "GWS-TND-2026-003",
    title: "3. Invitation to High-Consumption Industrial & Commercial Consumers",
    authority: "GoWindSun India Private Limited",
    country: "India",
    countryFlag: "🇮🇳",
    category: "Hybrid",
    scopeCapacity: "15–25 Year Corporate PPAs",
    submissionDeadline: "Open / Rolling Basis",
    publishedDate: "Active Notice",
    status: "Open",
    description: "GoWindSun India Private Limited invites high electricity-consuming industrial and commercial consumers across Maharashtra, Gujarat, Karnataka, Tamil Nadu, Rajasthan, and Madhya Pradesh to explore long-term renewable energy procurement through Power Purchase Agreements (PPAs) ranging from 15 to 25 years. Our objective is to help C&I consumers optimise their electricity costs, improve long-term tariff visibility, reduce dependence on conventional grid power, and accelerate their transition towards clean energy. We work with established renewable energy developers and IPPs to structure bankable, reliable, and commercially competitive renewable energy solutions tailored to the consumer’s load profile and energy requirements.",
    requirements: [
      "High-consumption C&I off-takers in MH, GJ, KA, TN, RJ & MP",
      "Long-term PPA structuring (15 to 25 years)",
      "Optimised electricity cost & long-term tariff visibility",
      "Tailored PPA solutions matching consumer load profile",
    ],
  },
  {
    id: "tender-4",
    tenderId: "GWS-TND-2026-004",
    title: "4. Invitation to HV–EHV & Renewable Energy Equipment Suppliers",
    authority: "GoWindSun India Private Limited",
    country: "India",
    countryFlag: "🇮🇳",
    category: "Storage",
    scopeCapacity: "HV–EHV & Equipment Supply Partnering",
    submissionDeadline: "Open / Rolling Basis",
    publishedDate: "Active Notice",
    status: "Open",
    description: "GoWindSun India Private Limited invites reputed manufacturers, authorised suppliers, EPC partners, and technology providers to associate with us for our growing portfolio of wind, solar, hybrid and renewable energy projects across India. Preference will be given to suppliers with proven project experience, relevant BIS/IEC certifications, strong manufacturing capabilities, competitive pricing, reliable delivery schedules and robust technical and after-sales support. We welcome partnerships for solar, wind and hybrid projects, HV/EHV substations, grid evacuation infrastructure, transmission lines, repowering and brownfield projects, with opportunities for long-term supplier association across GoWindSun’s renewable energy portfolio.",
    requirements: [
      "Solar PV Modules / Panels & Mounting Systems; Solar Inverters / PCS",
      "Power & Auxiliary Transformers; Circuit Breakers, Isolators, CTs, PTs/CVTs & Surge Arresters",
      "HV/EHV Cables, Conductors, OPGW & Transmission-line Accessories; Substation Gantries & Busbars",
      "Protection, Control, SCADA, Automation, Earthing & Lightning Systems (BIS/IEC Certified)",
    ],
  },
];

export default function TendersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredTenders = ACTIVE_TENDERS.filter((tender) => {
    const matchesSearch =
      tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.authority.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.tenderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "ALL" ||
      tender.category === selectedCategory ||
      (selectedCategory === "Wind" && tender.description.toLowerCase().includes("wind")) ||
      (selectedCategory === "Solar" && tender.description.toLowerCase().includes("solar")) ||
      (selectedCategory === "Hybrid" && (tender.description.toLowerCase().includes("hybrid") || tender.description.toLowerCase().includes("ppa"))) ||
      (selectedCategory === "Storage" && (tender.description.toLowerCase().includes("storage") || tender.description.toLowerCase().includes("hv") || tender.description.toLowerCase().includes("equipment")));

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#06111F] text-white antialiased">
      <SEO
        title="Renewable Energy Tenders | GoWindSun India Pvt Ltd"
        description="Active renewable energy tenders, project procurement notices, land acquisition RFPs, and C&I Corporate PPA off-take invitations across India."
        canonical="/tenders"
      />
      
      {/* 1. HERO SECTION — Standard Global Dark Hero System */}
      <StandardHero
        image="/images/tenders_procurement_hero.png"
        imageAlt="Renewable Energy Tenders and Procurement"
        title={
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400">
            Tenders &amp; Procurement
          </span>
        }
        subtitle="Active Commercial Procurement Notices & Project Acquisition RFPs."
        description="Official procurement portal tracking commercial opportunities, utility-scale wind & solar tenders, hybrid auctions, and turn-key EPC invitations across primary clean energy markets in India."
      />

      {/* 2. CATEGORY SELECTOR & FILTER PORTAL */}
      <section className="py-16 md:py-24 bg-[#06111F] border-t border-slate-800">
        <Container>
          <div className="max-w-5xl mx-auto space-y-10">
            
            {/* Filter & Search Bar */}
            <div className="bg-[#0A1728] border border-slate-700/80 rounded-2xl p-6 shadow-md space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                
                <div className="relative w-full sm:w-96">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by tender name, authority or ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#06111F] border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#0186D5] transition-colors"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Filter className="w-3.5 h-3.5 text-slate-400" />
                  <span>Filter: <strong className="text-white">{selectedCategory}</strong> ({filteredTenders.length} Active Notice{filteredTenders.length === 1 ? "" : "s"})</span>
                </div>

              </div>
            </div>

            {/* ACTIVE TENDERS DISPLAY SECTION */}
            {filteredTenders.length > 0 ? (
              <div className="space-y-8">
                {filteredTenders.map((tender) => (
                  <div
                    key={tender.id}
                    className="bg-[#0B1E36] border-2 border-slate-700/80 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl hover:border-[#0186D5]/60 transition-all relative overflow-hidden text-white"
                  >
                    {/* Top Meta Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-700/80 pb-4">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-[#06111F] text-white border border-slate-700 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                          {tender.tenderId}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-[#0186D5] text-xs font-mono font-bold">
                          {tender.scopeCapacity}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {tender.title}
                      </h3>
                      <p className="text-base text-slate-300 font-normal leading-relaxed">
                        {tender.description}
                      </p>
                    </div>

                    {/* Key Requirements List */}
                    <div className="bg-[#06111F] border border-slate-700/80 rounded-2xl p-5 space-y-3">
                      <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                        Key Eligibility &amp; Technical Criteria
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {tender.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-normal">
                            <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action & Submission Footer */}
                    <div className="flex justify-end pt-2 border-t border-slate-700/70">
                      <a
                        href={`mailto:director@gowindsun.com?subject=Tender%20Proposal%20-%20${encodeURIComponent(tender.tenderId)}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#059669] hover:bg-[#047857] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md shadow-emerald-600/30 w-full sm:w-auto justify-center"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Submit Tender Dossier / Proposal</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* EMPTY STATE IF SEARCH RETURNS 0 RESULTS */
              <div className="bg-[#0B1E36] border border-slate-700/80 rounded-3xl p-12 text-center space-y-5 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-[#0186D5] flex items-center justify-center mx-auto shadow-inner">
                  <Inbox className="w-8 h-8 text-[#0186D5]" />
                </div>
                <div className="space-y-2 max-w-lg mx-auto">
                  <h3 className="text-2xl font-extrabold text-white">
                    No Matching Tenders Found
                  </h3>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    No active procurement notices match your search term or category filter. Try clearing your filter criteria or submit a general inquiry to our team.
                  </p>
                </div>
                <button
                  onClick={() => { setSearchTerm(""); setSelectedCategory("ALL"); }}
                  className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-bold uppercase border border-slate-700"
                >
                  Reset Filters
                </button>
              </div>
            )}

          </div>
        </Container>
      </section>

    </main>
  );
}
