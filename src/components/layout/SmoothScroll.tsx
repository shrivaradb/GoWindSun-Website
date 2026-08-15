"use client";

import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  // 1. Initialize Lenis Smooth Scroll Instance
  useEffect(() => {
    // Disable browser automatic history scroll restoration
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // 2. Centralized Route Navigation Handler (Always Start at Top of New Pages)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = location.hash;

    if (hash && hash !== "#" && !hash.startsWith("#/")) {
      // Same-page anchor: Scroll smoothly to the target element
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(element, { immediate: false, duration: 1.0 });
        } else {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // New Route Navigation: ALWAYS reset scroll position to absolute top (0)
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }

      // Secondary RAF tick to ensure post-render DOM height recalculation maintains top scroll
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true });
        }
      });
    }
  }, [location.pathname, location.search, location.hash, location.key]);

  return <>{children}</>;
};


