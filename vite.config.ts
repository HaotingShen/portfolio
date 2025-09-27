import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    react(),
    tailwind()
  ],
  base: '/portfolio/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    watch: {
      usePolling: true,
      interval: 100
    },
    hmr: {
      overlay: true,
      // if you access via a different host/port, you can set:
      // host: 'localhost',
      // clientPort: 5173,
    }
  }
})