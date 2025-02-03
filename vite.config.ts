import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: "eslint ./src/**/*.{ts,tsx}",
        useFlatConfig: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
