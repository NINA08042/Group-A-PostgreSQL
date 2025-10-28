import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/Group-A-PostgreSQL/" : "/",
  plugins: [react()],
  server: {
    open: true,
  },
}));
