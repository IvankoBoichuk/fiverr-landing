import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        oferta: path.resolve(__dirname, 'oferta.html'),
        privacy: path.resolve(__dirname, 'privacy-policy.html')
      }
    }
  },
  plugins: [react(), tailwindcss()],
})
