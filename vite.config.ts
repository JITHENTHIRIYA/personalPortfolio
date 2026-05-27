import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  /**
   * Routing base path:
   * - GitHub Pages deploys under `/<repo>/` (keep existing behavior)
   * - Vercel deploys at the domain root (must be `/`)
   */
  base: command === "build" && !process.env.VERCEL ? "/personalPortfolio/" : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
