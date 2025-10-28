import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


const mode = process.env.NODE_ENV || "development";
const basePath = mode === "production" ? "/Group-A-PostgreSQL/" : "/";

export default defineConfig({
  plugins: [react()],
  base: basePath,
  server: {
    open: true,
  },
});
