// LOCATION: vite.config.ts

import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    reactRouter(), // <--- This is the RR7 plugin
    tsconfigPaths(),
  ],
});