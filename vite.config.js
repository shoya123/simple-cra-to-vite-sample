import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    server: {
      port: 3001,
    },
    preview: {
      port: 3001,
    },
    plugins: [
      react(),
      eslint(),
      tsconfigPaths(),
      svgr(),
      EnvironmentPlugin("all", { prefix: "REACT_APP" }),
    ],
  };
});
