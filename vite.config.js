/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    rollupOptions: {
      output: {
        // Defina variáveis de ambiente personalizadas para produção e desenvolvimento
        globals: {
          API_URL: process.env.NODE_ENV === 'production' ? 'https://www.brissy.com.br' : 'http://localhost:5170',
        },
      },
    },
  },
})
