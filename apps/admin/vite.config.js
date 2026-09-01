import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Localhost only, and there is no `build` script on purpose.
 *
 * This tool can read every family's data. Adding a build here is the first step
 * to deploying it, and an obscure URL is not a security control — the project's
 * Firebase project is `kidgate`, so `kidgate.web.app` is a five-second guess,
 * and any custom hostname appears in public Certificate Transparency logs.
 *
 * See apps/admin/CLAUDE.md.
 */
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,
    strictPort: true,
    // Refuse to serve on a LAN address: a bound 0.0.0.0 puts this on whatever
    // café Wi-Fi the laptop is on.
    host: '127.0.0.1',
  },
});
