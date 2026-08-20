"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SEO } from "@/components/seo/SEO";
import { StandardHero } from "@/components/ui/StandardHero";
import {
  Search,
  Filter,
  RotateCcw,
  Wind,
  Sun,
  Layers,
  MapPin,
  Zap,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Mail,
  ShieldCheck,
  X,
  ExternalLink,
  SlidersHorizontal,
  Activity,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import the EXACT 7 Excel-Derived Source-of-Truth Datasets
import { greenfieldWindExcelDataset } from "@/data/acquisition/windGreenfieldData";
import { shovelReadyWindExcelDataset } from "@/data/acquisition/windShovelReadyData";
import { operationalWindDataset } from "@/data/acquisition/windOperationalData";

import { solarGreenfieldDataset } from "@/data/acquisition/solarGreenfieldData";
import { solarShovelReadyDataset } from "@/data/acquisition/solarShovelReadyData";
import { solarOperationalDataset } from "@/data/acquisition/solarOperationalData";

import { hybridDataset } from "@/data/acquisition/hybridData";

// Unified Interface for Authentic Acquisition Project Records
export interface AuthenticProjectRecord {
  id: string;
  technology: "Wind" | "Solar" | "Hybrid";
  stage: "Greenfield" | "Shovel Ready" | "Operational";
  stateCode: string;
  stateName: string;
  district: string;
  ctuStu: string;
  capacityMW: string;
}

export default function ProjectsForAcquisitionMainPage() {
  // 1. Consolidate All 7 Excel Datasets into a Single Source of Truth
  const allProjects = useMemo<AuthenticProjectRecord[]>(() => {
    const list: AuthenticProjectRecord[] = [];

    const processDataset = (
      dataset: Record<string, Array<{ id: string; stateCode: string; stateName: string; district: string; ctuStu: string; capacityMW: string }>>,
      tech: "Wind" | "Solar" | "Hybrid",
      stage: "Greenfield" | "Shovel Ready" | "Operational"
    ) => {
      Object.entries(dataset).forEach(([rawCode, records]) => {
        const stateCode = rawCode === "IN-[#RJ]" ? "IN-RJ" : rawCode;
        records.forEach((rec) => {
          let cleanStateName = rec.stateName || "";
          if (!cleanStateName || cleanStateName.toUpperCase() === "KARNATAKA") cleanStateName = "Karnataka";
          if (stateCode === "IN-MH") cleanStateName = "Maharashtra";
          if (stateCode === "IN-GJ") cleanStateName = "Gujarat";
          if (stateCode === "IN-RJ") cleanStateName = "Rajasthan";
          if (stateCode === "IN-TN") cleanStateName = "Tamil Nadu";
          if (stateCode === "IN-KA") cleanStateName = "Karnataka";
          if (stateCode === "IN-MP") cleanStateName = "Madhya Pradesh";

          list.push({
            id: rec.id,
            technology: tech,
            stage: (rec as { stage?: "Greenfield" | "Shovel Ready" | "Operational" }).stage || stage,
            stateCode,
            stateName: cleanStateName,
            district: rec.district || "State Corridor",
            ctuStu: rec.ctuStu || "STU/CTU",
            capacityMW: rec.capacityMW || "Available on Request",
          });
        });
      });
    };

    // Wind Datasets
    processDataset(greenfieldWindExcelDataset, "Wind", "Greenfield");
    processDataset(shovelReadyWindExcelDataset, "Wind", "Shovel Ready");
    processDataset(operationalWindDataset, "Wind", "Operational");

    // Solar Datasets
    processDataset(solarGreenfieldDataset, "Solar", "Greenfield");
    processDataset(solarShovelReadyDataset, "Solar", "Shovel Ready");
    processDataset(solarOperationalDataset, "Solar", "Operational");

    // Hybrid Dataset
    processDataset(hybridDataset, "Hybrid", "Greenfield");

    return list;
  }, []);

  // 2. Filter State Hooks
  const [selectedTech, setSelectedTech] = useState<string>("ALL");
  const [selectedStage, setSelectedStage] = useState<string>("ALL");
  const [selectedState, setSelectedState] = useState<string>("ALL");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProject, setActiveModalProject] = useState<AuthenticProjectRecord | null>(null);

  // 3. Dynamic State Options based on active Technology & Stage filters
  const availableStates = useMemo(() => {
    const stateMap = new Map<string, string>();
    allProjects.forEach((p) => {
      const matchTech = selectedTech === "ALL" || p.technology.toLowerCase() === selectedTech.toLowerCase();
      const matchStage = selectedStage === "ALL" || p.stage.toLowerCase() === selectedStage.toLowerCase();
      if (matchTech && matchStage) {
        stateMap.set(p.stateCode, p.stateName);
      }
    });
    return Array.from(stateMap.entries()).map(([code, name]) => ({ code, name }));
  }, [allProjects, selectedTech, selectedStage]);

  // 4. Dynamic District Options based on active filters
  const availableDistricts = useMemo(() => {
    const distSet = new Set<string>();
    allProjects.forEach((p) => {
      const matchState = selectedState === "ALL" || p.stateCode === selectedState;
      const matchTech = selectedTech === "ALL" || p.technology.toLowerCase() === selectedTech.toLowerCase();
      const matchStage = selectedStage === "ALL" || p.stage.toLowerCase() === selectedStage.toLowerCase();
      if (matchState && matchTech && matchStage && p.district) {
        distSet.add(p.district);
      }
    });
    return Array.from(distSet).sort();
  }, [allProjects, selectedState, selectedTech, selectedStage]);

  // 5. State Change Handler (resets district)
  const handleStateChange = (code: string) => {
    setSelectedState(code);
    setSelectedDistrict("ALL");
  };

  // 6. Clear Filters Action
  const handleClearFilters = () => {
    setSelectedTech("ALL");
    setSelectedStage("ALL");
    setSelectedState("ALL");
    setSelectedDistrict("ALL");
    setSearchQuery("");
  };

  // 7. Filtered Projects List
  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const matchTech = selectedTech === "ALL" || p.technology.toLowerCase() === selectedTech.toLowerCase();
      const matchStage = selectedStage === "ALL" || p.stage.toLowerCase() === selectedStage.toLowerCase();
      const matchState = selectedState === "ALL" || p.stateCode === selectedState;
      const matchDistrict = selectedDistrict === "ALL" || p.district === selectedDistrict;

      const q = searchQuery.trim().toLowerCase();
      const matchQuery =
        !q ||
        p.district.toLowerCase().includes(q) ||
        p.stateName.toLowerCase().includes(q) ||
        p.capacityMW.toLowerCase().includes(q) ||
        p.ctuStu.toLowerCase().includes(q) ||
        p.technology.toLowerCase().includes(q) ||
        p.stage.toLowerCase().includes(q);

      return matchTech && matchStage && matchState && matchDistrict && matchQuery;
    });
  }, [allProjects, selectedTech, selectedStage, selectedState, selectedDistrict, searchQuery]);

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-emerald-600 selection:text-white">
      <SEO
        title="Renewable Energy Projects for Acquisition | GoWindSun India Private Limited"
        description="Explore renewable energy projects for acquisition across wind, solar and hybrid assets through GoWindSun's project acquisition platform."
        canonical="/projects-for-acquisition"
      />

      <StandardHero
        image="/images/projectsforacquisition/Projects For Acquisition.png"
        imageAlt="Renewable Energy Projects for Acquisition"
        theme="dark"
        title={
          <>
            Projects for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#0EA5E9] to-[#FBBF24]">
              Renewable Energy
            </span>{" "}
            <br />
            Acquisition
          </>
        }
        subtitle="Explore curated renewable energy acquisition opportunities across India by project type, state, and district."
        description="Filter bankable utility-scale wind, solar, and hybrid energy assets by technology, development stage, state, and district corridors for direct M&A, equity investment, and project acquisition."
      />

      {/* 2. PROMINENT HIGH-CONTRAST FILTER INTERFACE */}
      <section className="py-12 lg:py-16 bg-[#06111F] text-white border-y border-slate-800 relative">
        <Container>
          <div className="max-w-6xl mx-auto space-y-6">

            {/* Elevated Glassmorphic Filter Card Container */}
            <div className="bg-[#0A182A] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-950/60 relative overflow-hidden backdrop-blur-md">
              {/* Vibrant Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0186D5] via-[#059669] to-[#F97316]" />

              {/* Header Title & Reset */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-[11px] font-mono font-bold uppercase tracking-wider mb-2">
                    <Filter className="w-3.5 h-3.5" />
                    <span>Project Filter Portal</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                    Find Renewable Energy Projects
                  </h2>
                </div>

                {(selectedTech !== "ALL" || selectedStage !== "ALL" || selectedState !== "ALL" || selectedDistrict !== "ALL" || searchQuery) && (
                  <button
                    onClick={handleClearFilters}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-bold uppercase border border-slate-700 transition-colors cursor-pointer self-start md:self-auto shadow-md"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-sky-400" />
                    <span>Clear Filters</span>
                  </button>
                )}
              </div>

              {/* Filter Controls Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                {/* Filter 1 — State */}
                <div className="space-y-2">
                  <label className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>State</span>
                  </label>
                  <div className="relative">
                    <select
                      value={selectedState}
                      onChange={(e) => handleStateChange(e.target.value)}
                      className={`w-full text-white border rounded-xl pl-4 pr-10 py-3.5 text-xs sm:text-sm font-semibold appearance-none focus:outline-none focus:border-[#0186D5] focus:ring-2 focus:ring-[#0186D5]/40 transition-all cursor-pointer truncate ${selectedState !== "ALL"
                          ? "bg-[#0E2744] border-sky-400 ring-2 ring-sky-400/40 font-bold shadow-lg shadow-sky-950/50"
                          : "bg-[#06111F] border-slate-700/90 hover:border-slate-500"
                        }`}
                    >
                      <option value="ALL">All States</option>
                      {availableStates.map((st) => (
                        <option key={st.code} value={st.code}>
                          {st.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Filter 2 — District */}
                <div className="space-y-2">
                  <label className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                    <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>District</span>
                  </label>
                  <div className="relative">
                    <select
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      className={`w-full text-white border rounded-xl pl-4 pr-10 py-3.5 text-xs sm:text-sm font-semibold appearance-none focus:outline-none focus:border-[#0186D5] focus:ring-2 focus:ring-[#0186D5]/40 transition-all cursor-pointer truncate ${selectedDistrict !== "ALL"
                          ? "bg-[#0E2744] border-sky-400 ring-2 ring-sky-400/40 font-bold shadow-lg shadow-sky-950/50"
                          : "bg-[#06111F] border-slate-700/90 hover:border-slate-500"
                        }`}
                    >
                      <option value="ALL">All Districts</option>
                      {availableDistricts.map((dist) => (
                        <option key={dist} value={dist}>
                          {dist}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Filter 3 — Technology */}
                <div className="space-y-2">
                  <label className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Technology</span>
                  </label>
                  <div className="relative">
                    <select
                      value={selectedTech}
                      onChange={(e) => setSelectedTech(e.target.value)}
                      className={`w-full text-white border rounded-xl pl-4 pr-10 py-3.5 text-xs sm:text-sm font-semibold appearance-none focus:outline-none focus:border-[#0186D5] focus:ring-2 focus:ring-[#0186D5]/40 transition-all cursor-pointer truncate ${selectedTech !== "ALL"
                          ? "bg-[#0E2744] border-sky-400 ring-2 ring-sky-400/40 font-bold shadow-lg shadow-sky-950/50"
                          : "bg-[#06111F] border-slate-700/90 hover:border-slate-500"
                        }`}
                    >
                      <option value="ALL">All Technologies</option>
                      <option value="Wind">Wind</option>
                      <option value="Solar">Solar</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Filter 4 — Project Stage */}
                <div className="space-y-2">
                  <label className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Project Stage</span>
                  </label>
                  <div className="relative">
                    <select
                      value={selectedStage}
                      onChange={(e) => setSelectedStage(e.target.value)}
                      className={`w-full text-white border rounded-xl pl-4 pr-10 py-3.5 text-xs sm:text-sm font-semibold appearance-none focus:outline-none focus:border-[#0186D5] focus:ring-2 focus:ring-[#0186D5]/40 transition-all cursor-pointer truncate ${selectedStage !== "ALL"
                          ? "bg-[#0E2744] border-sky-400 ring-2 ring-sky-400/40 font-bold shadow-lg shadow-sky-950/50"
                          : "bg-[#06111F] border-slate-700/90 hover:border-slate-500"
                        }`}
                    >
                      <option value="ALL">All Stages</option>
                      <option value="Greenfield">Greenfield</option>
                      <option value="Shovel Ready">Shovel Ready</option>
                      <option value="Operational">Operational</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

              </div>

              {/* Vibrant Bottom Accent Gradient Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0186D5] via-[#059669] to-[#F97316]" />
            </div>

          </div>
        </Container>
      </section>

      {/* 3. RESULTS AREA & AUTHENTIC PROJECT CARDS GRID */}
      <section className="py-16 bg-slate-50 min-h-[600px]">
        <Container>
          <div className="max-w-6xl mx-auto space-y-8">

            {/* Result Counter & Active Filters Display */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
                  {filteredProjects.length} Project Opportunit{filteredProjects.length === 1 ? "y" : "ies"} Found
                </h3>
              </div>

              {/* Active Filter Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {selectedTech !== "ALL" && (
                  <span className="px-2.5 py-1 bg-sky-100 text-sky-800 rounded-md font-mono font-bold uppercase border border-sky-200">
                    Technology: {selectedTech}
                  </span>
                )}
                {selectedStage !== "ALL" && (
                  <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-md font-mono font-bold uppercase border border-emerald-200">
                    Stage: {selectedStage}
                  </span>
                )}
                {selectedState !== "ALL" && (
                  <span className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-md font-mono font-bold uppercase border border-amber-200">
                    State: {selectedState}
                  </span>
                )}
                {selectedDistrict !== "ALL" && (
                  <span className="px-2.5 py-1 bg-indigo-100 text-indigo-800 rounded-md font-mono font-bold uppercase border border-indigo-200">
                    District: {selectedDistrict}
                  </span>
                )}
              </div>
            </div>

            {/* Project Cards Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => {
                  const isWind = project.technology === "Wind";
                  const isSolar = project.technology === "Solar";
                  const isHybrid = project.technology === "Hybrid";

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all flex flex-col justify-between space-y-5 group relative overflow-hidden text-slate-900"
                    >
                      {/* Accent Top Bar */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1.5 ${isWind ? "bg-[#0186D5]" : isSolar ? "bg-[#F97316]" : "bg-[#059669]"
                          }`}
                      />

                      <div className="space-y-4 pt-1">
                        {/* Top Badges */}
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            {isWind && (
                              <span className="px-2.5 py-0.5 rounded-full bg-sky-50 text-[#0186D5] border border-sky-200 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                                <Wind className="w-3 h-3" />
                                Wind
                              </span>
                            )}
                            {isSolar && (
                              <span className="px-2.5 py-0.5 rounded-full bg-orange-50 text-[#F97316] border border-orange-200 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                                <Sun className="w-3 h-3" />
                                Solar
                              </span>
                            )}
                            {isHybrid && (
                              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#059669] border border-emerald-200 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                                <Layers className="w-3 h-3" />
                                Hybrid
                              </span>
                            )}

                            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-mono font-semibold uppercase">
                              {project.stage}
                            </span>
                          </div>

                          <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                            {project.stateCode}
                          </span>
                        </div>

                        {/* Location Header */}
                        <div>
                          <h4 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#0186D5] transition-colors leading-snug">
                            {project.district}
                          </h4>
                          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium mt-1">
                            <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                            <span>{project.stateName}, India</span>
                          </div>
                        </div>

                        {/* Core Excel Parameters Table Box */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 space-y-2 text-xs font-normal">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-500 font-medium">Capacity (MW):</span>
                            <span className="font-bold text-slate-900 font-mono text-sm">{project.capacityMW}</span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-slate-500 font-medium">Grid Evacuation:</span>
                            <span className="font-semibold text-slate-800 font-mono text-right truncate max-w-[170px]" title={project.ctuStu}>
                              {project.ctuStu}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Card Action Footer */}
                      <div className="pt-4 border-t border-slate-100">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 bg-slate-900 hover:bg-[#0186D5] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer group/btn"
                        >
                          <span>View Project Details</span>
                          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              /* EMPTY STATE IF 0 RESULTS MATCH */
              <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-5 shadow-sm max-w-xl mx-auto my-8">
                <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-200 text-[#0186D5] flex items-center justify-center mx-auto shadow-inner">
                  <Filter className="w-8 h-8 text-[#0186D5]" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-2xl font-extrabold text-slate-900">
                    No Projects Found
                  </h4>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    No acquisition opportunities currently match the selected filters. Try adjusting your technology, stage, state, or district parameters.
                  </p>
                </div>

                <button
                  onClick={handleClearFilters}
                  className="px-6 py-2.5 rounded-full bg-[#0186D5] hover:bg-[#0186D5]/90 text-white text-xs font-mono font-bold uppercase transition-all shadow-md shadow-sky-500/20 cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}

          </div>
        </Container>
      </section>

      {/* 4. DETAIL MODAL DIALOG FOR AUTHENTIC RECORD INSPECTION */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto relative text-slate-900"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-mono font-bold uppercase">
                      {activeModalProject.technology}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-mono font-semibold uppercase">
                      {activeModalProject.stage}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {activeModalProject.district}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-sky-600" />
                    <span>{activeModalProject.stateName}, India</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Detailed Technical Dossier Table */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  Excel Dossier Parameters
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="text-slate-500 font-mono uppercase text-[10px] block">State</span>
                    <span className="font-bold text-slate-900">{activeModalProject.stateName} ({activeModalProject.stateCode})</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="text-slate-500 font-mono uppercase text-[10px] block">Capacity MW</span>
                    <span className="font-bold text-slate-900 font-mono text-sm">{activeModalProject.capacityMW}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="text-slate-500 font-mono uppercase text-[10px] block">Grid (CTU / STU)</span>
                    <span className="font-bold text-slate-900 font-mono">{activeModalProject.ctuStu}</span>
                  </div>
                </div>
              </div>

              {/* Modal Inquiry Action */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`mailto:director@gowindsun.com?subject=Acquisition%20Inquiry%20-%20${encodeURIComponent(activeModalProject.district)}%20${encodeURIComponent(activeModalProject.technology)}%20(${encodeURIComponent(activeModalProject.capacityMW)})`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#059669] hover:bg-[#047857] text-white text-xs font-mono font-bold uppercase transition-all shadow-md shadow-emerald-600/30 w-full sm:w-auto"
                >
                  <Mail className="w-4 h-4" />
                  <span>Inquire on Acquisition</span>
                </a>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold w-full sm:w-auto text-center cursor-pointer"
                >
                  Close Dossier
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
