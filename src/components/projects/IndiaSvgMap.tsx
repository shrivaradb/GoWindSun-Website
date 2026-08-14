"use client";

import React, { useState, useEffect } from "react";
import IndiaMapData from "@svg-maps/india";
import { INDIA_STATES, ProjectCategory } from "@/types/acquisition";
import { motion, AnimatePresence } from "framer-motion";
import { Minimize2 } from "lucide-react";

interface IndiaSvgMapProps {
  selectedState: string | null;
  onSelectState: (stateCode: string) => void;
  activeStateCodes: string[];
  category?: ProjectCategory; // "wind" | "solar" | "hybrid"
}

interface SvgLocation {
  id: string;
  name: string;
  path: string;
}

// Map between @svg-maps/india SVG location IDs and standard IN-XX state codes
const SVG_ID_TO_STATE_CODE: Record<string, string> = {
  ap: "IN-AP",
  ar: "IN-AR",
  as: "IN-AS",
  br: "IN-BR",
  ct: "IN-CT",
  ga: "IN-GA",
  gj: "IN-GJ",
  hr: "IN-HR",
  hp: "IN-HP",
  jh: "IN-JH",
  ka: "IN-KA",
  kl: "IN-KL",
  mp: "IN-MP",
  mh: "IN-MH",
  mn: "IN-MN",
  ml: "IN-ML",
  mz: "IN-MZ",
  nl: "IN-NL",
  or: "IN-OD",
  pb: "IN-PB",
  rj: "IN-RJ",
  sk: "IN-SK",
  tn: "IN-TN",
  ts: "IN-TS",
  tr: "IN-TR",
  up: "IN-UP",
  ut: "IN-UT",
  wb: "IN-WB",
  dl: "IN-DL",
  jk: "IN-JK",
  la: "IN-LA",
};

// Mathematically Exact ViewBoxes for All States in @svg-maps/india (Centered & Scaled to Fill Viewport)
const STATE_ZOOM_VIEWBOXES: Record<string, string> = {
  "IN-MH": "67.6 342.8 224.3 185.0",  // Maharashtra
  "IN-RJ": "0.0 147.9 238.9 217.8",   // Rajasthan
  "IN-KA": "109.6 421.6 122.0 194.2", // Karnataka
  "IN-TN": "155.4 533.7 112.1 151.5", // Tamil Nadu
  "IN-GJ": "0.0 287.3 171.2 135.2",   // Gujarat
  "IN-MP": "94.9 232.4 238.7 173.1",  // Madhya Pradesh (100% Exact Bounding Center)
  "IN-AP": "218.9 469.4 89.2 103.3",  // Andhra Pradesh
  "IN-UP": "162.6 144.7 205.3 200.4", // Uttar Pradesh
  "IN-TG": "175.1 398.0 124.0 117.1", // Telangana
  "IN-OD": "257.2 336.0 165.9 138.3", // Odisha
  "IN-WB": "356.5 224.7 110.2 170.0", // West Bengal
  "IN-KL": "127.9 552.9 76.9 124.5",  // Kerala
  "IN-PB": "107.0 102.5 88.0 98.2",   // Punjab
  "IN-HR": "119.4 143.2 89.5 102.8",  // Haryana
  "IN-BR": "301.1 225.2 135.4 99.3",  // Bihar
  "IN-JH": "302.3 276.0 126.5 101.4", // Jharkhand
  "IN-CT": "239.3 295.6 112.9 184.4", // Chhattisgarh
  "IN-HP": "142.7 85.5 95.5 94.9",   // Himachal Pradesh
  "IN-UT": "184.3 129.9 96.4 90.8",   // Uttarakhand
  "IN-JK": "68.8 0.0 207.7 158.6",    // Jammu & Kashmir
};

// Theme configurations for Wind (Blue), Solar (Orange), and Hybrid (Green)
const CATEGORY_THEMES = {
  wind: {
    activeFill: "#D0E8F8",       // Soft Electric Sky Blue
    activeStroke: "#0186D5",     // Electric Blue
    hoverFill: "#0186D5",        // Electric Blue
    hoverStroke: "#FFFFFF",
    selectedFill: "#0A4EA2",     // Dark Blue
    selectedStroke: "#38BDF8",   // Sky Blue Stroke
    badgeHex: "#0186D5",
    textAccentClass: "text-[#0186D5]",
    pulseClass: "bg-[#0186D5]",
  },
  solar: {
    activeFill: "#FFEDD5",       // Warm Solar Orange Tint
    activeStroke: "#F97316",     // Solar Orange
    hoverFill: "#F97316",        // Solar Orange
    hoverStroke: "#FFFFFF",
    selectedFill: "#C2410C",     // Deep Solar Orange
    selectedStroke: "#FDBA74",   // Warm Gold Stroke
    badgeHex: "#F97316",
    textAccentClass: "text-[#F97316]",
    pulseClass: "bg-[#F97316]",
  },
  hybrid: {
    activeFill: "#D1FAE5",       // Soft Mint Green Tint
    activeStroke: "#059669",     // Emerald Green
    hoverFill: "#059669",        // Emerald Green
    hoverStroke: "#FFFFFF",
    selectedFill: "#047857",     // Deep Emerald Green
    selectedStroke: "#6EE7B7",   // Mint Stroke
    badgeHex: "#059669",
    textAccentClass: "text-[#059669]",
    pulseClass: "bg-[#059669]",
  },
};

export const IndiaSvgMap: React.FC<IndiaSvgMapProps> = ({
  selectedState,
  onSelectState,
  activeStateCodes,
  category = "wind",
}) => {
  const [hoveredLocation, setHoveredLocation] = useState<SvgLocation | null>(null);

  const locations = (IndiaMapData.locations || []) as SvgLocation[];
  const theme = CATEGORY_THEMES[category] || CATEGORY_THEMES.wind;

  // Global Click & Esc Listener: Click ANYWHERE on screen or press 'Esc' to reset zoom to original map
  useEffect(() => {
    if (!selectedState) return;

    const handleGlobalClick = () => {
      onSelectState("");
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onSelectState("");
      }
    };

    // Attach click listener on next tick so initial state click doesn't trigger instant reset
    const timer = setTimeout(() => {
      window.addEventListener("click", handleGlobalClick);
    }, 50);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", handleGlobalClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedState, onSelectState]);

  // Determine current SVG ViewBox (focused state if selected, otherwise full India map)
  const targetViewBox =
    selectedState && STATE_ZOOM_VIEWBOXES[selectedState]
      ? STATE_ZOOM_VIEWBOXES[selectedState]
      : "0 0 612 696";

  return (
    <div className="relative w-full bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-xl flex flex-col justify-between space-y-4 overflow-hidden">
      {/* Map Header & Legend */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-100 gap-3 z-10">
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${theme.pulseClass} animate-pulse`} />
          <h3 className="text-xs font-mono font-bold text-[#1E4362] uppercase tracking-widest">
            Geographic India {category.toUpperCase()} Map
          </h3>
        </div>

        {/* Dynamic Category Legend */}
        <div className="flex items-center gap-4 text-xs font-mono text-slate-600">
          <div className="flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-sm border"
              style={{ backgroundColor: theme.selectedFill, borderColor: theme.selectedStroke }}
            />
            <span className="font-semibold text-slate-800">Selected</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: theme.hoverFill }} />
            <span className="font-semibold text-slate-800">Listed State</span>
          </div>
        </div>
      </div>

      {/* SVG Map Canvas Container */}
      <div
        className="relative w-full flex items-center justify-center min-h-[440px] sm:min-h-[520px] cursor-pointer"
        onClick={() => {
          if (selectedState) onSelectState("");
        }}
      >
        <svg
          viewBox={targetViewBox}
          className="w-full h-auto max-h-[580px] drop-shadow-md select-none transition-all duration-700 ease-in-out"
        >
          <g>
            {locations.map((loc) => {
              const stateCode = SVG_ID_TO_STATE_CODE[loc.id] || loc.id.toUpperCase();
              const isSelected = selectedState === stateCode;
              const hasProjects = activeStateCodes.includes(stateCode);
              const isHovered = hoveredLocation?.id === loc.id;

              let fill = "#F1F5F9";
              let stroke = "#CBD5E1";
              let strokeWidth = 0.8;

              if (hasProjects) {
                fill = theme.activeFill;
                stroke = theme.activeStroke;
                strokeWidth = 1.2;
              }

              if (isHovered) {
                fill = theme.hoverFill;
                stroke = theme.hoverStroke;
                strokeWidth = 2;
              }

              if (isSelected) {
                fill = theme.selectedFill;
                stroke = theme.selectedStroke;
                strokeWidth = 2.5;
              }

              return (
                <path
                  key={loc.id}
                  id={loc.id}
                  d={loc.path}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  aria-label={loc.name}
                  className="transition-colors duration-200 cursor-pointer focus:outline-none"
                  onMouseEnter={() => setHoveredLocation(loc)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isSelected) {
                      // Clicking the already zoomed/selected state resets to original map
                      onSelectState("");
                    } else {
                      // Selecting a new state zooms into that state
                      onSelectState(stateCode);
                    }
                  }}
                />
              );
            })}
          </g>
        </svg>

        {/* Hover Tooltip Card */}
        <AnimatePresence>
          {hoveredLocation && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute top-3 left-3 bg-[#1E4362]/95 backdrop-blur-md text-white px-4 py-2.5 rounded-2xl border border-white/20 shadow-2xl pointer-events-none z-30 space-y-0.5"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-white">
                {hoveredLocation.name}
              </div>
              <div className="text-[11px] font-mono" style={{ color: theme.activeFill }}>
                {activeStateCodes.includes(SVG_ID_TO_STATE_CODE[hoveredLocation.id] || "")
                  ? `✓ ${category.toUpperCase()} Opportunities Mapped — Click to Inspect`
                  : "No Projects Currently Listed"}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Map Footer Helper Bar */}
      <div className="pt-3 border-t border-slate-100 text-xs font-mono text-slate-500 flex items-center justify-between z-10">
        <span>
          {selectedState
            ? "Click anywhere on screen or press 'Esc' key to reset map view"
            : "Click any state to view state dossier"}
        </span>
        
        {selectedState ? (
          <button
            type="button"
            onClick={() => onSelectState("")}
            className="flex items-center gap-1 font-bold text-[#0186D5] hover:underline cursor-pointer"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            <span>Reset View</span>
          </button>
        ) : (
          <span className={`font-bold ${theme.textAccentClass}`}>
            Select a State
          </span>
        )}
      </div>
    </div>
  );
};
