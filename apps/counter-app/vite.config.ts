import { defineConfig } from 'vite'
import dns from 'dns'
import react from '@vitejs/plugin-react'

dns.setDefaultResultOrder('verbatim')


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000
  },
  build: {
    outDir: 'dist', // The output directory
  }
})
