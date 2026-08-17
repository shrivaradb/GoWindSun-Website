import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/",
  resolve: {
    alias: {
      "next/image": path.resolve(__dirname, "./src/lib/next-compat/image.tsx"),
      "next/link": path.resolve(__dirname, "./src/lib/next-compat/link.tsx"),
      "next/navigation": path.resolve(__dirname, "./src/lib/next-compat/navigation.tsx"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          animation: ["framer-motion", "gsap", "lenis"],
          icons: ["lucide-react"],
        },
      },
    },
  },
});
