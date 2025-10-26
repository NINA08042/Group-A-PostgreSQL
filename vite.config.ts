import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 提供的环境变量
const isProd = import.meta.env.MODE === 'production'

export default defineConfig({
  plugins: [react()],
  base: isProd ? '/Group-A-PostgreSQL/' : '/',
  server: {
    open: true,
  },
})
