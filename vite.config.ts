import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Group-A-PostgreSQL/",
  plugins: [react()],
  assetsInclude: ["**/*.md"]
});
