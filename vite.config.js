import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Vite ignores $PORT on its own and just walks up from 5173 when the port is
  // taken, which leaves tooling that assigned a port pointing at nothing.
  server: process.env.PORT ? { port: Number(process.env.PORT), strictPort: true } : {},
})
