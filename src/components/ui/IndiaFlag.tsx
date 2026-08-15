import React, { useRef, useEffect } from "react";

interface IndiaFlagProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  animated?: boolean;
}

export const IndiaFlag: React.FC<IndiaFlagProps> = ({
  className = "w-12 h-12 sm:w-14 sm:h-14",
  width,
  height,
  animated = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Force fallback play if browser blocked initial play attempt
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    }
  }, []);

  return (
    <div
      className={`relative inline-flex items-center justify-center flex-shrink-0 border-0 outline-none bg-transparent transition-transform duration-300 ${
        animated ? "hover:scale-105" : ""
      } ${className}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-contain block border-0 bg-transparent mix-blend-multiply pointer-events-none"
        aria-label="Indian Independence Day Animation"
      >
        <source src="/images/indian_flag_animation.mp4" type="video/mp4" />
        <source src="/images/indian_flag_animation.webm" type="video/webm" />
        {/* Animated GIF fallback tag */}
        <img
          src="/images/indian_flag_animation.gif"
          alt="Indian Independence Day Animation"
          className="w-full h-full object-contain block mix-blend-multiply"
        />
      </video>
    </div>
  );
};



