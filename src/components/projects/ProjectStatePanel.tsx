"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { AcquisitionProject, ProjectCategory } from "@/types/acquisition";
import { getStateNameByCode } from "@/data/acquisition";
import { Button } from "@/components/ui/Button";
import { MapPin, FolderX, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

interface ProjectStatePanelProps {
  selectedStateCode: string | null;
  projects: AcquisitionProject[];
  category: ProjectCategory;
}

const PANEL_THEMES = {
  wind: {
    btnClass: "bg-[#0186D5] hover:bg-[#0186D5]/90 text-white shadow-sky-500/20",
    badgeClass: "bg-sky-50 text-[#0186D5] border-sky-200",
    textClass: "text-[#0186D5]",
    tagBg: "bg-[#0A4EA2]",
  },
  solar: {
    btnClass: "bg-[#F97316] hover:bg-[#EA580C] text-white shadow-orange-500/20",
    badgeClass: "bg-orange-50 text-[#F97316] border-orange-200",
    textClass: "text-[#F97316]",
    tagBg: "bg-[#C2410C]",
  },
  hybrid: {
    btnClass: "bg-[#059669] hover:bg-[#047857] text-white shadow-emerald-500/20",
    badgeClass: "bg-emerald-50 text-[#059669] border-emerald-200",
    textClass: "text-[#059669]",
    tagBg: "bg-[#047857]",
  },
};

export const ProjectStatePanel: React.FC<ProjectStatePanelProps> = ({
  selectedStateCode,
  projects,
  category,
}) => {
  const navigate = useNavigate();
  const theme = PANEL_THEMES[category] || PANEL_THEMES.wind;

  const categoryTitle =
    category === "wind"
      ? "Wind Energy Projects"
      : category === "solar"
      ? "Utility & Industrial Solar Projects"
      : "Solar-Wind Hybrid Projects";

  const stateName = selectedStateCode ? getStateNameByCode(selectedStateCode) : "Select a State";

  // 1. Initial State (No State Selected Yet)
  if (!selectedStateCode) {
    return (
      <div className="bg-white text-slate-900 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-center items-center text-center space-y-6 h-full min-h-[480px]">
        <div className={`w-16 h-16 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center ${theme.textClass} shadow-inner`}>
          <MapPin className="w-8 h-8 animate-bounce" />
        </div>
        <div className="space-y-3 max-w-md">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1E4362]">
            SELECT A STATE ON THE MAP
          </h3>
          <p className="text-sm text-slate-600 font-normal leading-relaxed">
            Click on any state boundary on the interactive India map to inspect available{" "}
            <strong className={theme.textClass}>{categoryTitle}</strong> acquisition opportunities, land parcels, grid connectivity, and development milestones.
          </p>
        </div>
        <div className={`pt-2 text-xs font-mono ${theme.textClass} uppercase tracking-widest flex items-center gap-2 font-bold`}>
          <span className={`w-2 h-2 rounded-full ${theme.btnClass.split(' ')[0]} animate-ping`} />
          <span>Interactive State Dossier Ready</span>
        </div>
      </div>
    );
  }

  // 2. Empty State (State Selected, 0 Projects Listed)
  if (projects.length === 0) {
    return (
      <div className="bg-white text-slate-900 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6 h-full min-h-[480px]">
        <div className="space-y-5">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <span className={`text-xs font-mono font-bold ${theme.textClass} uppercase tracking-widest`}>
                SELECTED STATE REGION
              </span>
              <h3 className="text-2xl font-black text-[#1E4362] uppercase tracking-tight">
                {stateName}
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-mono text-xs font-bold border border-slate-200">
              0 Listed Opportunities
            </span>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-4 my-auto">
            <FolderX className="w-12 h-12 text-slate-400 mx-auto" />
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-[#1E4362] uppercase tracking-tight">
                No Projects Currently Listed
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-md mx-auto">
                There are currently no public acquisition opportunities listed for{" "}
                <strong className="text-slate-900 font-bold">{stateName}</strong> under the{" "}
                <span className={`${theme.textClass} font-bold capitalize`}>{category} Projects</span> category.
              </p>
            </div>
            <p className="text-xs text-slate-500 font-mono pt-3 border-t border-slate-200">
              Custom site identification and private land bank due diligence can be requested via our advisory desk.
            </p>
          </div>
        </div>

        <Button
          variant="primary"
          size="lg"
          className={`group w-full ${theme.btnClass} font-bold rounded-full py-3.5 text-xs uppercase tracking-wider shadow-md`}
          onClick={() => navigate("/contact")}
        >
          <span>Request Custom Site Identification for {stateName}</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    );
  }

  // 3. Active Projects List State (Handles 1 or Multiple Projects for the State)
  return (
    <div className="bg-white text-slate-900 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-start space-y-6 h-full">
      {/* Header */}
      <div className="space-y-3 pb-4 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <span className={`text-xs font-mono font-bold ${theme.textClass} uppercase tracking-widest flex items-center gap-1.5`}>
            <ShieldCheck className="w-4 h-4 text-[#4CA745]" />
            <span>STATE ACQUISITION DOSSIER</span>
          </span>
          <span className={`px-3 py-1 rounded-full font-mono text-xs font-bold border uppercase ${theme.badgeClass}`}>
            {projects.length} {projects.length === 1 ? "Opportunity Available" : "Projects Available"}
          </span>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#1E4362] tracking-tight uppercase leading-tight">
            {stateName}
          </h3>
          <p className="text-xs font-mono text-slate-500 pt-0.5">
            Regional Energy Corridor
          </p>
        </div>
      </div>

      {/* Projects Container (Scrollable if Multiple Projects) */}
      <div
        data-lenis-prevent="true"
        tabIndex={0}
        aria-label="Project Information Panel"
        className="space-y-6 overflow-y-auto max-h-[520px] pr-1 overscroll-contain touch-pan-y focus:outline-none"
      >
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm relative"
          >
            <div className="flex items-center justify-between">
              <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase ${theme.tagBg} text-white`}>
                Project {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
              </span>
              <span className="text-xs font-mono font-bold text-[#4CA745] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{proj.acquisitionStatus || "Open"}</span>
              </span>
            </div>

            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#1E4362] leading-snug">
                {proj.projectName || `${proj.stateName} ${category.toUpperCase()} Asset`}
              </h4>
              <p className="text-xs text-slate-500 font-mono">
                Location: {proj.district || proj.location || "State Energy Zone"}
              </p>
            </div>

            {/* Structured Project Parameters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-1">
              <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-0.5">
                <div className="font-mono text-slate-400 text-[10px] uppercase">Available Land</div>
                <div className="font-semibold text-slate-800">{proj.availableLand || "On request"}</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-0.5">
                <div className="font-mono text-slate-400 text-[10px] uppercase">Land Area</div>
                <div className="font-semibold text-slate-800">{proj.landArea || "On request"}</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-0.5">
                <div className="font-mono text-slate-400 text-[10px] uppercase">Capacity</div>
                <div className={`font-semibold font-mono ${theme.textClass}`}>{proj.potentialCapacity || "On request"}</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-0.5">
                <div className="font-mono text-slate-400 text-[10px] uppercase">Development Status</div>
                <div className="font-semibold text-[#4CA745]">{proj.developmentStage || "On request"}</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-0.5 sm:col-span-2">
                <div className="font-mono text-slate-400 text-[10px] uppercase">Grid Connectivity & Evacuation</div>
                <div className="font-semibold text-slate-800">{proj.gridConnectivity || "On request"}</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-0.5 sm:col-span-2">
                <div className="font-mono text-slate-400 text-[10px] uppercase">Substation & Transmission Bay</div>
                <div className="font-semibold text-slate-800">{proj.substation || proj.nearestSubstation || "On request"}</div>
              </div>
            </div>

            {proj.additionalNotes && (
              <div className="p-3 rounded-xl bg-slate-100/80 border border-slate-200 text-xs space-y-1">
                <div className={`font-mono font-bold uppercase text-[10px] ${theme.textClass}`}>
                  DOSSIER NOTES
                </div>
                <p className="font-normal leading-relaxed text-slate-700">{proj.additionalNotes}</p>
              </div>
            )}

            <Button
              variant="primary"
              size="lg"
              className={`group w-full ${theme.btnClass} font-bold rounded-full py-3 text-xs uppercase tracking-wider shadow-sm`}
              onClick={() => navigate("/contact")}
            >
              <span>Inquire About {proj.projectName ? `Project 0${idx + 1}` : proj.stateName}</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
