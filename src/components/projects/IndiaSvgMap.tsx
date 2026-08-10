"use client";

import React, { useState } from "react";
import { INDIA_STATES } from "@/types/acquisition";

interface IndiaSvgMapProps {
  selectedState: string | null;
  onSelectState: (stateCode: string) => void;
  activeStateCodes: string[];
}

interface MapStatePath {
  code: string;
  name: string;
  path: string;
  labelCoords?: { x: number; y: number };
}

// Vector paths for Indian States calibrated for clean 650x720 SVG coordinate space
const STATE_PATHS: MapStatePath[] = [
  {
    code: "IN-JK",
    name: "Jammu & Kashmir",
    path: "M 220 90 L 260 60 L 300 70 L 320 110 L 290 150 L 230 140 Z",
    labelCoords: { x: 260, y: 105 },
  },
  {
    code: "IN-LA",
    name: "Ladakh",
    path: "M 260 60 L 330 30 L 400 70 L 360 120 L 300 70 Z",
    labelCoords: { x: 330, y: 70 },
  },
  {
    code: "IN-HP",
    name: "Himachal Pradesh",
    path: "M 260 140 L 300 120 L 330 150 L 290 180 Z",
    labelCoords: { x: 295, y: 150 },
  },
  {
    code: "IN-PB",
    name: "Punjab",
    path: "M 210 140 L 260 140 L 270 180 L 220 190 Z",
    labelCoords: { x: 240, y: 165 },
  },
  {
    code: "IN-HR",
    name: "Haryana",
    path: "M 230 190 L 280 180 L 290 220 L 250 240 Z",
    labelCoords: { x: 260, y: 210 },
  },
  {
    code: "IN-UT",
    name: "Uttarakhand",
    path: "M 300 150 L 350 160 L 340 200 L 290 180 Z",
    labelCoords: { x: 320, y: 175 },
  },
  {
    code: "IN-RJ",
    name: "Rajasthan",
    path: "M 110 200 L 220 190 L 260 250 L 240 330 L 150 350 L 90 270 Z",
    labelCoords: { x: 170, y: 270 },
  },
  {
    code: "IN-UP",
    name: "Uttar Pradesh",
    path: "M 280 200 L 350 200 L 440 260 L 390 310 L 290 250 Z",
    labelCoords: { x: 350, y: 250 },
  },
  {
    code: "IN-GJ",
    name: "Gujarat",
    path: "M 40 300 L 140 320 L 170 380 L 140 430 L 70 410 L 30 350 Z",
    labelCoords: { x: 95, y: 360 },
  },
  {
    code: "IN-MP",
    name: "Madhya Pradesh",
    path: "M 190 320 L 290 270 L 390 320 L 370 410 L 240 410 L 170 370 Z",
    labelCoords: { x: 275, y: 355 },
  },
  {
    code: "IN-BR",
    name: "Bihar",
    path: "M 440 250 L 510 250 L 520 290 L 440 300 Z",
    labelCoords: { x: 475, y: 275 },
  },
  {
    code: "IN-WB",
    name: "West Bengal",
    path: "M 510 270 L 540 250 L 550 340 L 510 370 L 500 310 Z",
    labelCoords: { x: 525, y: 310 },
  },
  {
    code: "IN-JH",
    name: "Jharkhand",
    path: "M 440 300 L 500 300 L 500 350 L 430 350 Z",
    labelCoords: { x: 465, y: 325 },
  },
  {
    code: "IN-CT",
    name: "Chhattisgarh",
    path: "M 360 340 L 420 340 L 420 440 L 370 460 L 350 400 Z",
    labelCoords: { x: 385, y: 395 },
  },
  {
    code: "IN-OD",
    name: "Odisha",
    path: "M 420 350 L 490 350 L 500 420 L 430 440 Z",
    labelCoords: { x: 460, y: 390 },
  },
  {
    code: "IN-MH",
    name: "Maharashtra",
    path: "M 140 420 L 240 400 L 330 420 L 330 480 L 230 520 L 140 470 Z",
    labelCoords: { x: 220, y: 460 },
  },
  {
    code: "IN-TS",
    name: "Telangana",
    path: "M 300 440 L 370 440 L 370 500 L 300 500 Z",
    labelCoords: { x: 335, y: 470 },
  },
  {
    code: "IN-AP",
    name: "Andhra Pradesh",
    path: "M 310 500 L 380 470 L 420 530 L 320 590 L 300 540 Z",
    labelCoords: { x: 350, y: 535 },
  },
  {
    code: "IN-KA",
    name: "Karnataka",
    path: "M 180 500 L 260 490 L 280 570 L 230 610 L 190 560 Z",
    labelCoords: { x: 230, y: 550 },
  },
  {
    code: "IN-GA",
    name: "Goa",
    path: "M 175 510 L 195 510 L 190 530 L 175 525 Z",
    labelCoords: { x: 185, y: 520 },
  },
  {
    code: "IN-TN",
    name: "Tamil Nadu",
    path: "M 230 600 L 310 580 L 300 680 L 240 680 Z",
    labelCoords: { x: 270, y: 635 },
  },
  {
    code: "IN-KL",
    name: "Kerala",
    path: "M 200 600 L 230 600 L 240 670 L 210 660 Z",
    labelCoords: { x: 220, y: 630 },
  },
  {
    code: "IN-SK",
    name: "Sikkim",
    path: "M 530 220 L 550 220 L 550 240 L 530 240 Z",
    labelCoords: { x: 540, y: 230 },
  },
  {
    code: "IN-AR",
    name: "Arunachal Pradesh",
    path: "M 580 180 L 640 180 L 630 220 L 570 210 Z",
    labelCoords: { x: 600, y: 195 },
  },
  {
    code: "IN-AS",
    name: "Assam",
    path: "M 560 220 L 620 220 L 610 250 L 550 250 Z",
    labelCoords: { x: 580, y: 235 },
  },
  {
    code: "IN-ML",
    name: "Meghalaya",
    path: "M 560 250 L 600 250 L 600 270 L 560 270 Z",
    labelCoords: { x: 580, y: 260 },
  },
  {
    code: "IN-TR",
    name: "Tripura",
    path: "M 580 270 L 600 270 L 595 295 L 580 290 Z",
    labelCoords: { x: 590, y: 282 },
  },
  {
    code: "IN-MN",
    name: "Manipur",
    path: "M 610 240 L 630 240 L 630 270 L 610 270 Z",
    labelCoords: { x: 620, y: 255 },
  },
  {
    code: "IN-MZ",
    name: "Mizoram",
    path: "M 605 270 L 625 270 L 620 305 L 605 300 Z",
    labelCoords: { x: 615, y: 287 },
  },
  {
    code: "IN-NL",
    name: "Nagaland",
    path: "M 615 210 L 635 210 L 630 240 L 615 235 Z",
    labelCoords: { x: 625, y: 225 },
  },
];

export const IndiaSvgMap: React.FC<IndiaSvgMapProps> = ({
  selectedState,
  onSelectState,
  activeStateCodes,
}) => {
  const [hoveredState, setHoveredState] = useState<MapStatePath | null>(null);

  return (
    <div className="relative w-full aspect-[650/720] bg-slate-900/90 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col justify-between">
      {/* Map Header Controls */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800 z-10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest">
            Interactive India State Map
          </span>
        </div>
        <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[#0186D5]" />
            <span>Listed Opportunities</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-slate-700" />
            <span>No Listing Listed</span>
          </div>
        </div>
      </div>

      {/* SVG Vector Map Canvas */}
      <div className="relative w-full h-full flex items-center justify-center py-2">
        <svg
          viewBox="0 0 660 720"
          className="w-full h-full max-h-[560px] drop-shadow-2xl transition-all duration-300"
        >
          <g>
            {STATE_PATHS.map((state) => {
              const isSelected = selectedState === state.code;
              const hasProjects = activeStateCodes.includes(state.code);
              const isHovered = hoveredState?.code === state.code;

              // Determine fill & stroke color dynamically based on GoWindSun theme
              let fill = "#1E293B"; // default slate-800
              let stroke = "#334155";
              let strokeWidth = 1.2;

              if (hasProjects) {
                fill = "#0E3A5D"; // deep sky blue
                stroke = "#0186D5";
              }

              if (isHovered) {
                fill = "#0186D5"; // Electric Blue
                stroke = "#FFFFFF";
                strokeWidth = 2;
              }

              if (isSelected) {
                fill = "#0A4EA2"; // Dark Blue
                stroke = "#4CA745"; // Emerald Accent
                strokeWidth = 2.5;
              }

              return (
                <g key={state.code} className="cursor-pointer group">
                  <path
                    d={state.path}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    className="transition-all duration-300 hover:brightness-125"
                    onMouseEnter={() => setHoveredState(state)}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => onSelectState(state.code)}
                  />

                  {/* Indicator Dot for Active States with Listings */}
                  {hasProjects && state.labelCoords && (
                    <circle
                      cx={state.labelCoords.x}
                      cy={state.labelCoords.y}
                      r={isSelected ? 6 : 4}
                      fill={isSelected ? "#4CA745" : "#38BDF8"}
                      stroke="#FFFFFF"
                      strokeWidth={1}
                      className="pointer-events-none transition-all duration-300"
                    />
                  )}

                  {/* State Name Short Label */}
                  {state.labelCoords && (
                    <text
                      x={state.labelCoords.x}
                      y={state.labelCoords.y + (hasProjects ? 12 : 4)}
                      textAnchor="middle"
                      className="text-[9px] font-mono font-bold fill-slate-300 pointer-events-none select-none opacity-80 group-hover:opacity-100 group-hover:fill-white transition-opacity"
                    >
                      {state.code.replace("IN-", "")}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>

        {/* Hover Tooltip Overlay */}
        {hoveredState && (
          <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md px-3.5 py-2 border border-slate-700 shadow-xl pointer-events-none z-30 space-y-0.5 rounded-lg">
            <div className="text-xs font-mono font-bold text-white uppercase">
              {hoveredState.name} ({hoveredState.code})
            </div>
            <div className="text-[11px] font-mono text-sky-400">
              {activeStateCodes.includes(hoveredState.code)
                ? "✓ Opportunities Available — Click to View"
                : "No Listed Opportunities — Click for Info"}
            </div>
          </div>
        )}
      </div>

      {/* Footer Instruction Banner */}
      <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between z-10">
        <span>Click any state boundary to load state project dossier</span>
        <span className="text-sky-400 font-bold">
          {selectedState
            ? `Selected: ${
                INDIA_STATES.find((s) => s.code === selectedState)?.name || selectedState
              }`
            : "Select a State"}
        </span>
      </div>
    </div>
  );
};
