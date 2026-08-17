"use client";

import React, { useState, useEffect } from "react";
import IndiaMapData from "@svg-maps/india";
import { ProjectCategory } from "@/types/acquisition";
import { motion, AnimatePresence } from "framer-motion";
import { Minimize2, Compass, Zap, Sun, Wind, Layers } from "lucide-react";

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

// Mathematically Exact ViewBoxes for All States in @svg-maps/india
const STATE_ZOOM_VIEWBOXES: Record<string, string> = {
  "IN-MH": "67.6 342.8 224.3 185.0",  // Maharashtra
  "IN-RJ": "0.0 147.9 238.9 217.8",   // Rajasthan
  "IN-KA": "109.6 421.6 122.0 194.2", // Karnataka
  "IN-TN": "155.4 533.7 112.1 151.5", // Tamil Nadu
  "IN-GJ": "0.0 287.3 171.2 135.2",   // Gujarat
  "IN-MP": "94.9 232.4 238.7 173.1",  // Madhya Pradesh
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

// District project site marker coordinates overlay
const STATE_DISTRICT_MARKERS: Record<string, Array<{ district: string; x: number; y: number }>> = {
  "IN-MH": [
    { district: "Solapur", x: 165, y: 462 },
    { district: "Buldhana", x: 172, y: 375 },
    { district: "Dhule", x: 122, y: 368 },
    { district: "Latur", x: 215, y: 428 },
    { district: "Aurangabad", x: 152, y: 408 },
    { district: "Satara", x: 142, y: 472 },
  ],
  "IN-RJ": [
    { district: "Jaisalmer", x: 62, y: 238 },
    { district: "Bikaner", x: 88, y: 262 },
    { district: "Pratapgarh", x: 148, y: 318 },
  ],
  "IN-KA": [
    { district: "Vijayapura", x: 168, y: 448 },
    { district: "Chitradurga", x: 158, y: 508 },
  ],
  "IN-TN": [
    { district: "Tuticorin", x: 198, y: 638 },
    { district: "Virudhunagar", x: 208, y: 618 },
    { district: "Coimbatore", x: 184, y: 588 },
  ],
  "IN-GJ": [
    { district: "Kutch", x: 48, y: 328 },
    { district: "Rajkot", x: 68, y: 368 },
    { district: "Banaskantha", x: 108, y: 318 },
  ],
  "IN-AP": [
    { district: "Anantapur", x: 242, y: 508 },
    { district: "Kadapa", x: 262, y: 528 },
  ],
  "IN-MP": [
    { district: "Ratlam", x: 148, y: 288 },
    { district: "Rewa", x: 278, y: 268 },
  ],
};

// Light-Mode Theme configurations for Wind, Solar, and Hybrid
const CATEGORY_THEMES = {
  wind: {
    gradientId: "lightWindGrad",
    activeFill: "url(#lightWindGrad)",
    activeStroke: "#0284C7",
    hoverFill: "#0284C7",
    hoverStroke: "#FFFFFF",
    selectedFill: "#0369A1",
    selectedStroke: "#0284C7",
    badgeHex: "#0186D5",
    textAccentClass: "text-[#0186D5]",
    pulseClass: "bg-[#0186D5]",
    icon: Wind,
  },
  solar: {
    gradientId: "lightSolarGrad",
    activeFill: "url(#lightSolarGrad)",
    activeStroke: "#EA580C",
    hoverFill: "#EA580C",
    hoverStroke: "#FFFFFF",
    selectedFill: "#C2410C",
    selectedStroke: "#EA580C",
    badgeHex: "#F97316",
    textAccentClass: "text-[#F97316]",
    pulseClass: "bg-[#F97316]",
    icon: Sun,
  },
  hybrid: {
    gradientId: "lightHybridGrad",
    activeFill: "url(#lightHybridGrad)",
    activeStroke: "#059669",
    hoverFill: "#059669",
    hoverStroke: "#FFFFFF",
    selectedFill: "#047857",
    selectedStroke: "#059669",
    badgeHex: "#059669",
    textAccentClass: "text-[#059669]",
    pulseClass: "bg-[#059669]",
    icon: Layers,
  },
};

export const IndiaSvgMap: React.FC<IndiaSvgMapProps> = ({
  selectedState,
  onSelectState,
  activeStateCodes,
  category = "wind",
}) => {
  const [hoveredLocation, setHoveredLocation] = useState<SvgLocation | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const locations = (IndiaMapData.locations || []) as SvgLocation[];
  const theme = CATEGORY_THEMES[category] || CATEGORY_THEMES.wind;
  const CategoryIcon = theme.icon;

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

  const targetViewBox =
    selectedState && STATE_ZOOM_VIEWBOXES[selectedState]
      ? STATE_ZOOM_VIEWBOXES[selectedState]
      : "0 0 612 696";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative w-full bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-xl flex flex-col justify-between space-y-4 overflow-hidden gpu-layer">
      {/* Background Decorative Tech Pattern & Subtle Light Radial Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-50/60 via-slate-50/80 to-white pointer-events-none" />
      
      {/* Map Header & Legend */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-100 gap-3 z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 shadow-sm flex items-center justify-center">
            <CategoryIcon className={`w-4 h-4 ${theme.textAccentClass}`} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${theme.pulseClass} animate-ping`} />
              <h3 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-widest">
                Interactive {category.toUpperCase()} Projects Map
              </h3>
            </div>
            <p className="text-[11px] font-mono text-slate-500">
              Utility-Scale Project Locations Across India
            </p>
          </div>
        </div>

        {/* Dynamic Category Legend */}
        <div className="flex items-center gap-4 text-xs font-mono text-slate-600 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm border" style={{ backgroundColor: theme.selectedFill, borderColor: theme.selectedStroke }} />
            <span className="font-semibold text-slate-900">Selected State</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm border border-sky-400" style={{ backgroundColor: theme.badgeHex }} />
            <span className="font-semibold text-slate-800">Mapped Assets</span>
          </div>
        </div>
      </div>

      {/* SVG Map Canvas Container */}
      <div
        className="relative w-full flex items-center justify-center min-h-[440px] sm:min-h-[520px] cursor-pointer group"
        onMouseMove={handleMouseMove}
        onClick={() => {
          if (selectedState) onSelectState("");
        }}
      >
        <svg
          viewBox={targetViewBox}
          className="w-full h-auto max-h-[580px] select-none transition-all duration-700 ease-in-out filter drop-shadow-sm"
        >
          {/* Light-Mode SVG Definitions for Vector Gradients, Filters & Patterns */}
          <defs>
            {/* Wind Light Sky Blue Vector Gradient */}
            <linearGradient id="lightWindGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.95" />
            </linearGradient>

            {/* Solar Light Warm Orange Vector Gradient */}
            <linearGradient id="lightSolarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFEDD5" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FED7AA" stopOpacity="0.95" />
            </linearGradient>

            {/* Hybrid Light Emerald Vector Gradient */}
            <linearGradient id="lightHybridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D1FAE5" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#A7F3D0" stopOpacity="0.95" />
            </linearGradient>

            {/* Inactive State Clean Light Slate Gradient */}
            <linearGradient id="lightInactiveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" stopOpacity="1" />
              <stop offset="100%" stopColor="#F1F5F9" stopOpacity="1" />
            </linearGradient>

            {/* Clean Light-Mode Vector Grid Pattern */}
            <pattern id="lightVectorGridPattern" width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#E2E8F0" strokeWidth="0.4" strokeDasharray="1,3" />
            </pattern>

            {/* Soft Shadow Filter */}
            <filter id="lightShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0F172A" floodOpacity="0.12" />
            </filter>
          </defs>

          {/* Background Light Vector Grid Mesh Overlay */}
          <rect width="612" height="696" fill="url(#lightVectorGridPattern)" opacity="0.6" />

          {/* Latitude & Longitude Coordinate Lines */}
          <g stroke="#CBD5E1" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5">
            <line x1="0" y1="200" x2="612" y2="200" />
            <line x1="0" y1="400" x2="612" y2="400" />
            <line x1="0" y1="600" x2="612" y2="600" />
            <line x1="150" y1="0" x2="150" y2="696" />
            <line x1="300" y1="0" x2="300" y2="696" />
            <line x1="450" y1="0" x2="450" y2="696" />
          </g>

          {/* Main India SVG State Path Layers */}
          <g className="gpu-layer">
            {locations.map((loc) => {
              const stateCode = SVG_ID_TO_STATE_CODE[loc.id] || loc.id.toUpperCase();
              const isSelected = selectedState === stateCode;
              const hasProjects = activeStateCodes.includes(stateCode);
              const isHovered = hoveredLocation?.id === loc.id;

              let fill = "url(#lightInactiveGrad)";
              let stroke = "#CBD5E1";
              let strokeWidth = 0.7;
              let filterAttr = undefined;

              if (hasProjects) {
                fill = theme.activeFill;
                stroke = theme.activeStroke;
                strokeWidth = 1.3;
              }

              if (isHovered) {
                fill = theme.hoverFill;
                stroke = theme.hoverStroke;
                strokeWidth = 2.2;
                filterAttr = "url(#lightShadow)";
              }

              if (isSelected) {
                fill = theme.selectedFill;
                stroke = theme.selectedStroke;
                strokeWidth = 2.8;
                filterAttr = "url(#lightShadow)";
              }

              return (
                <path
                  key={loc.id}
                  id={loc.id}
                  d={loc.path}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  filter={filterAttr}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  aria-label={loc.name}
                  className="transition-all duration-300 cursor-pointer focus:outline-none"
                  onMouseEnter={() => setHoveredLocation(loc)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isSelected) {
                      onSelectState("");
                    } else {
                      onSelectState(stateCode);
                    }
                  }}
                />
              );
            })}

            {/* Dynamic District Site Markers & Vector Animations when State is Selected */}
            {selectedState && STATE_DISTRICT_MARKERS[selectedState] && (
              <g className="pointer-events-none">
                {STATE_DISTRICT_MARKERS[selectedState].map((m, idx) => (
                  <g key={idx} transform={`translate(${m.x}, ${m.y})`}>
                    {/* Animated Concentric Sonar Pulse Rings */}
                    <circle r="9" fill="none" stroke={theme.activeStroke} opacity="0.6" strokeWidth="0.8">
                      <animate attributeName="r" values="5;14;5" dur="2.2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0.15;0.8" dur="2.2s" repeatCount="indefinite" />
                    </circle>

                    {/* Pin Backdrop Circle */}
                    <circle r="4.5" fill="#FFFFFF" stroke={theme.activeStroke} strokeWidth="1.5" className="drop-shadow-md" />

                    {/* Animated SVG Vector Graphic Icon */}
                    {category === "wind" ? (
                      /* Wind Turbine Node with Animated Spinning Blades */
                      <g transform="scale(0.55)">
                        <path d="M -0.4 4 L 0.4 4 L 0.2 -2 L -0.2 -2 Z" fill={theme.selectedFill} />
                        <circle cx="0" cy="-2" r="0.9" fill={theme.selectedFill} />
                        {/* Spinning Rotor Blades */}
                        <g>
                          <path d="M 0 -2 Q 0.6 -5 0.1 -6.8 Q -0.4 -5 0 -2 Z" fill={theme.selectedFill} />
                          <path d="M 0 -2 Q 4.2 -0.8 5.2 -2.2 Q 3.6 -3 0 -2 Z" fill={theme.selectedFill} />
                          <path d="M 0 -2 Q -3.6 -3 -5.2 -2.2 Q -4.2 -0.8 0 -2 Z" fill={theme.selectedFill} />
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 0 -2"
                            to="360 0 -2"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                        </g>
                      </g>
                    ) : category === "solar" ? (
                      /* Solar PV Sun Node with Radiating Rays */
                      <g transform="scale(0.6)">
                        <circle cx="0" cy="0" r="2.2" fill={theme.selectedFill} />
                        <path
                          d="M 0 -4 L 0 -2.6 M 0 2.6 L 0 4 M -4 0 L -2.6 0 M 2.6 0 L 4 0 M -2.8 -2.8 L -1.9 -1.9 M 1.9 1.9 L 2.8 2.8 M -2.8 2.8 L -1.9 1.9 M 1.9 -1.9 L 2.8 -2.8"
                          stroke={theme.selectedFill}
                          strokeWidth="0.9"
                          strokeLinecap="round"
                        />
                      </g>
                    ) : (
                      /* Hybrid Lightning/Energy Pulse Icon */
                      <g transform="scale(0.55)">
                        <path d="M 0.5 -4 L -2 0 L 0.5 0 L -0.5 4 L 2 0 L -0.5 0 Z" fill={theme.selectedFill} />
                      </g>
                    )}

                    {/* District Name Label Badge */}
                    <text
                      x="0"
                      y="-8"
                      textAnchor="middle"
                      fill="#000000"
                      fontSize="5.0"
                      fontWeight="600"
                      fontFamily="sans-serif"
                      className="uppercase font-mono tracking-wider pointer-events-none"
                    >
                      {m.district}
                    </text>
                  </g>
                ))}
              </g>
            )}
          </g>

          {/* Clean Light-Mode Vector Compass Rose */}
          <g transform="translate(560, 40) scale(0.7)" opacity="0.7" className="pointer-events-none">
            <circle cx="0" cy="0" r="18" fill="none" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2,2" />
            <path d="M 0 -16 L 4 0 L 0 16 L -4 0 Z" fill="#0284C7" />
            <path d="M -16 0 L 0 4 L 16 0 L 0 -4 Z" fill="#94A3B8" />
            <text x="0" y="-20" textAnchor="middle" fill="#0284C7" fontSize="8" fontWeight="bold" fontFamily="monospace">N</text>
          </g>
        </svg>

        {/* Floating Tooltip Card */}
        <AnimatePresence>
          {hoveredLocation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              style={{
                left: `${mousePos.x + 15}px`,
                top: `${mousePos.y - 15}px`,
              }}
              className="absolute bg-white/95 backdrop-blur-md text-slate-900 px-4 py-2.5 rounded-2xl border border-slate-200 shadow-2xl pointer-events-none z-30 space-y-0.5"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <Zap className={`w-3.5 h-3.5 ${theme.textAccentClass}`} />
                <span>{hoveredLocation.name}</span>
              </div>
              <div className="text-[11px] font-mono text-slate-600">
                {activeStateCodes.includes(SVG_ID_TO_STATE_CODE[hoveredLocation.id] || "")
                  ? `✓ ${category.toUpperCase()} Assets Available — Click to View`
                  : "No Pipeline Assets Currently Listed"}
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
            : "Click any highlighted state to inspect state dossier"}
        </span>

        {selectedState ? (
          <button
            type="button"
            onClick={() => onSelectState("")}
            className="flex items-center gap-1.5 font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors cursor-pointer"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            <span>Reset Map View</span>
          </button>
        ) : (
          <span className={`font-bold flex items-center gap-1 ${theme.textAccentClass}`}>
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Interactive Region Map</span>
          </span>
        )}
      </div>
    </div>
  );
};
