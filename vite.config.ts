import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👇 base must match your repo name for GitHub Pages
  base: '/Portfolio/',
  build: {
    outDir: 'dist', // default output folder
    assetsDir: 'assets', // folder for static assets
  },
  server: {
    port: 3000, // local dev server port
    open: true, // auto-open browser
  },
})
