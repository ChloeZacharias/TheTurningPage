import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  root: "src", // ensure Vite doesn’t write to root
  build: {
    outDir: "../dist", // relative to src/, final build goes to dist
    emptyOutDir: true,
  },
  base: "/TheTurningPage/",
});
