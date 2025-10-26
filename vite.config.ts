import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 检测当前是否为生产环境（GitHub Pages）
const isProd = process.env.NODE_ENV === 'production'

// 在本地环境中 base 是 '/'，在 GitHub Pages 部署时是 '/Group-A-PostgreSQL/'
export default defineConfig({
  plugins: [react()],
  base: isProd ? '/Group-A-PostgreSQL/' : '/',
  server: {
    open: true, // 启动时自动打开浏览器
  },
})
