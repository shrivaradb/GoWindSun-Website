import React from "react";

interface IndiaFlagProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  animated?: boolean;
}

export const IndiaFlag: React.FC<IndiaFlagProps> = ({
  className = "w-10 h-7",
  width,
  height,
  animated = false,
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center flex-shrink-0 ${animated ? "group/flag" : ""}`}>
      <svg
        viewBox="0 0 900 600"
        width={width}
        height={height}
        className={`rounded-[3px] shadow-2xs inline-block align-middle flex-shrink-0 transition-transform duration-300 ${animated ? "group-hover/flag:scale-105" : ""
          } ${className}`}
        aria-hidden="true"
      >
        {/* Saffron Stripe */}
        <rect width="900" height="200" fill="#FF9933" />
        {/* White Stripe */}
        <rect y="200" width="900" height="200" fill="#FFFFFF" />
        {/* India Green Stripe */}
        <rect y="400" width="900" height="200" fill="#138808" />

        {/* Ashoka Chakra (Navy Blue #000080) */}
        <g transform="translate(450, 300)">
          {/* Outer Ring */}
          <circle r="90" fill="none" stroke="#000080" strokeWidth="8" />
          {/* Inner Hub */}
          <circle r="18" fill="#000080" />

          {/* 24 Spokes */}
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              y1="0"
              x2="0"
              y2="-90"
              stroke="#000080"
              strokeWidth="3.5"
              transform={`rotate(${i * 15})`}
            />
          ))}

          {/* Outer wheel perimeter teeth */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angleRad = (i * 15 * Math.PI) / 180;
            return (
              <circle
                key={`dot-${i}`}
                cx={78 * Math.sin(angleRad)}
                cy={-78 * Math.cos(angleRad)}
                r="3.5"
                fill="#000080"
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};
