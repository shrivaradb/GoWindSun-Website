"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { HybridRecord } from "@/data/acquisition/hybridData";
import { getStateNameByCode } from "@/data/acquisition";
import { Button } from "@/components/ui/Button";
import { MapPin, FolderX, ShieldCheck, ArrowRight } from "lucide-react";

interface HybridStatePanelProps {
  selectedStateCode: string | null;
  records: HybridRecord[];
}

export const HybridStatePanel: React.FC<HybridStatePanelProps> = ({
  selectedStateCode,
  records,
}) => {
  const navigate = useNavigate();
  const stateName = selectedStateCode ? getStateNameByCode(selectedStateCode) : "Select a State";

  if (!selectedStateCode) {
    return (
      <div className="bg-white text-slate-900 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-center items-center text-center space-y-6 h-full min-h-[480px]">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#059669] shadow-inner">
          <MapPin className="w-8 h-8 animate-bounce" />
        </div>
        <div className="space-y-3 max-w-md">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#1E4362]">
            SELECT A STATE ON THE MAP
          </h3>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Click on any highlighted state on the interactive map to inspect available{" "}
            <strong className="text-[#059669]">Wind-Solar Hybrid Projects</strong>.
          </p>
        </div>
        <div className="pt-2 text-xs font-mono text-[#059669] uppercase tracking-widest flex items-center gap-2 font-bold">
          <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping" />
          <span>Hybrid Dossier Ready</span>
        </div>
      </div>
    );
  }

  if (records.length === 0) {
    return (
      <div className="bg-white text-slate-900 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6 h-full min-h-[480px]">
        <div className="space-y-5">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono font-bold text-[#059669] uppercase tracking-widest">
                SELECTED STATE REGION
              </span>
              <h3 className="text-2xl font-black text-[#1E4362] uppercase tracking-tight">
                {stateName}
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-mono text-xs font-bold border border-slate-200">
              0 Hybrid Records
            </span>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-4 my-auto">
            <FolderX className="w-12 h-12 text-slate-400 mx-auto" />
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-[#1E4362] uppercase tracking-tight">
                No Hybrid Records Listed
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-md mx-auto">
                There are currently no wind-solar hybrid records listed for{" "}
                <strong className="text-slate-900 font-bold">{stateName}</strong> in our dataset.
              </p>
            </div>
          </div>
        </div>

        <Button
          variant="primary"
          size="lg"
          className="group w-full bg-[#059669] hover:bg-[#059669]/90 text-white font-bold rounded-full py-3.5 text-xs uppercase tracking-wider shadow-md shadow-emerald-500/20"
          onClick={() => navigate("/contact")}
        >
          <span>Inquire About Hybrid Projects in {stateName}</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-900 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-start space-y-6 h-full">
      <div className="space-y-3 pb-4 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-[#059669] uppercase tracking-widest flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#4CA745]" />
            <span>HYBRID DATASET</span>
          </span>
          <span className="px-3 py-1 rounded-full font-mono text-xs font-bold border uppercase bg-emerald-50 text-[#059669] border-emerald-200">
            {records.length} {records.length === 1 ? "Record Available" : "Records Available"}
          </span>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#1E4362] tracking-tight uppercase leading-tight">
            {stateName}
          </h3>
        </div>
      </div>

      <div
        data-lenis-prevent="true"
        className="space-y-5 overflow-y-auto max-h-[520px] pr-1.5 overscroll-contain touch-pan-y"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {records.map((rec, idx) => (
          <div
            key={rec.id}
            className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-5 shadow-sm relative hover:border-emerald-300 transition-colors"
          >
            <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
              <span className="px-3 py-1 rounded text-xs font-mono font-bold uppercase bg-[#047857] text-white tracking-wider">
                Project Record {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                <div className="font-mono text-slate-500 text-[11px] uppercase font-bold tracking-wider">State</div>
                <div className="font-black text-[#1E4362] text-base sm:text-lg leading-tight">{rec.stateName}</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                <div className="font-mono text-slate-500 text-[11px] uppercase font-bold tracking-wider">District</div>
                <div className="font-black text-slate-900 text-base sm:text-lg leading-tight">{rec.district}</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                <div className="font-mono text-slate-500 text-[11px] uppercase font-bold tracking-wider">CTU / STU Evacuation</div>
                <div className="font-black text-[#059669] font-mono text-base sm:text-lg leading-tight">{rec.ctuStu}</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                <div className="font-mono text-slate-500 text-[11px] uppercase font-bold tracking-wider">Capacity in MW</div>
                <div className="font-black text-[#047857] font-mono text-base sm:text-lg leading-tight">{rec.capacityMW}</div>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="group w-full bg-[#059669] hover:bg-[#059669]/90 text-white font-bold rounded-full py-3.5 text-xs sm:text-sm uppercase tracking-wider shadow-sm cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              <span>Inquire About {rec.district}</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
