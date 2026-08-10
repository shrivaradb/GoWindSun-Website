"use client";

import React from "react";
import { AcquisitionProject, ProjectCategory } from "@/types/acquisition";
import { getStateNameByCode } from "@/data/acquisitionProjects";
import { Button } from "@/components/ui/Button";
import { MapPin, Zap, Layers, ArrowUpRight, FolderX, ShieldCheck, CheckCircle2, Building2 } from "lucide-react";

interface ProjectStatePanelProps {
  selectedStateCode: string | null;
  projects: AcquisitionProject[];
  category: ProjectCategory;
}

export const ProjectStatePanel: React.FC<ProjectStatePanelProps> = ({
  selectedStateCode,
  projects,
  category,
}) => {
  const categoryTitle =
    category === "wind"
      ? "Wind Energy Projects"
      : category === "solar"
      ? "Utility & Industrial Solar Projects"
      : "Solar-Wind Hybrid Projects";

  const stateName = selectedStateCode ? getStateNameByCode(selectedStateCode) : "Select a State";

  // 1. Initial State before selection
  if (!selectedStateCode) {
    return (
      <div className="bg-[#0A1628] text-white border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-center items-center text-center space-y-5 h-full min-h-[460px]">
        <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 shadow-inner">
          <MapPin className="w-8 h-8 animate-bounce" />
        </div>
        <div className="space-y-2 max-w-md">
          <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
            SELECT A STATE ON THE MAP
          </h3>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            Click on any state boundary on the interactive India map to inspect available {categoryTitle} acquisition opportunities, land parcels, grid connectivity, and development milestones.
          </p>
        </div>
        <div className="pt-2 text-xs font-mono text-sky-400 uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          <span>Interactive State Dossier Ready</span>
        </div>
      </div>
    );
  }

  // 2. Empty State when state is selected but has no listed projects
  if (projects.length === 0) {
    return (
      <div className="bg-[#0A1628] text-white border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-6 h-full min-h-[460px]">
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                SELECTED STATE REGION
              </span>
              <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight">
                {stateName} ({selectedStateCode})
              </h3>
            </div>
            <span className="px-3 py-1 rounded bg-slate-800 text-slate-400 font-mono text-xs font-bold border border-slate-700">
              0 Listed Opportunities
            </span>
          </div>

          <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl text-center space-y-4 my-auto">
            <FolderX className="w-10 h-10 text-slate-500 mx-auto" />
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-white uppercase tracking-tight">
                No Projects Currently Listed
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-md mx-auto">
                There are currently no public acquisition opportunities listed for <strong className="text-white font-bold">{stateName}</strong> under the <span className="text-sky-400 capitalize">{category} Projects</span> category.
              </p>
            </div>
            <p className="text-xs text-slate-400 font-mono pt-2 border-t border-slate-800/80">
              Custom site identification and private land bank due diligence can be requested via our advisory desk.
            </p>
          </div>
        </div>

        <Button
          variant="primary"
          size="lg"
          className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-none py-3.5"
          onClick={() => {
            window.location.href = `/contact?subject=Acquisition Inquiry - ${stateName}`;
          }}
        >
          <span>Request Custom Site Identification for {stateName}</span>
          <ArrowUpRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    );
  }

  // 3. Active Project Dossier View
  const project = projects[0];

  return (
    <div className="bg-[#0A1628] text-white border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 flex flex-col justify-between h-full">
      {/* Panel Header */}
      <div className="space-y-3 pb-4 border-b border-slate-800">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ACQUISITION DOSSIER</span>
          </span>
          <span className="px-3 py-1 rounded bg-sky-950 text-sky-300 font-mono text-xs font-bold border border-sky-800/80 uppercase">
            {project.acquisitionStatus || "Open"}
          </span>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase leading-tight">
            {project.stateName}
          </h3>
          <p className="text-xs font-mono text-slate-400 pt-0.5">
            {project.district || project.location || "Regional Energy Corridor"}
          </p>
        </div>
      </div>

      {/* Structured Details Grid */}
      <div className="space-y-4">
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
          <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
            PROJECT NAME / TITLE
          </div>
          <div className="text-sm font-bold text-white leading-snug">
            {project.projectName || `${project.stateName} ${category.toUpperCase()} Opportunity`}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-1">
            <div className="font-mono text-slate-400 text-[11px] uppercase">Available Land</div>
            <div className="font-semibold text-slate-200">{project.availableLand || "Available upon request"}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-1">
            <div className="font-mono text-slate-400 text-[11px] uppercase">Land Area</div>
            <div className="font-semibold text-slate-200">{project.landArea || "Available upon request"}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-1">
            <div className="font-mono text-slate-400 text-[11px] uppercase">Potential Capacity</div>
            <div className="font-semibold text-sky-400 font-mono">{project.potentialCapacity || "Available upon request"}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-1">
            <div className="font-mono text-slate-400 text-[11px] uppercase">Development Status</div>
            <div className="font-semibold text-emerald-400">{project.developmentStage || "Available upon request"}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-1 sm:col-span-2">
            <div className="font-mono text-slate-400 text-[11px] uppercase">Grid Connectivity & Evacuation</div>
            <div className="font-semibold text-slate-200">{project.gridConnectivity || "Available upon request"}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-1 sm:col-span-2">
            <div className="font-mono text-slate-400 text-[11px] uppercase">Substation & Transmission Bay</div>
            <div className="font-semibold text-slate-200">{project.substation || "Available upon request"}</div>
          </div>
        </div>

        {project.additionalNotes && (
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-1">
            <div className="font-mono font-bold text-sky-400 uppercase text-[11px]">
              ADDITIONAL DOSSIER DETAILS
            </div>
            <p className="font-light leading-relaxed text-slate-300">{project.additionalNotes}</p>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-800">
        <Button
          variant="primary"
          size="lg"
          className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-none py-3.5 text-sm"
          onClick={() => {
            window.location.href = `/contact?subject=Acquisition Opportunity Inquiry - ${project.projectName || project.stateName}`;
          }}
        >
          <span>Inquire About {project.stateName} Opportunity</span>
          <ArrowUpRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};
