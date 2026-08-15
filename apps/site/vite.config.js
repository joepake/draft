import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { kidgateHead, SHARED_PUBLIC_DIR } from '@kidgate/web-ui/vite';

export default defineConfig({
  plugins: [
    react(),
    /*
     * English, and the same on every route, because a social crawler runs no
     * JavaScript — `useDocumentMeta` in src/App.jsx never reaches it, and this
     * app serves one HTML file for all six routes. Per-language or per-route
     * cards need prerendering, which is a build change and not an edit here.
     *
     * `www`, not the apex: the deployment 308-redirects the apex to it.
     */
    kidgateHead({
      origin: 'https://www.kidgate.app',
      title: 'KidGate — Parental control that respects your kid',
      description:
        "KidGate helps parents manage screen time, block apps, filter the web and stay in touch — without taking away a child's freedom.",
    }),
  ],
  publicDir: SHARED_PUBLIC_DIR,
  // Vite ignores $PORT on its own and just walks up from 5173 when the port is
  // taken, which leaves tooling that assigned a port pointing at nothing.
  server: process.env.PORT ? { port: Number(process.env.PORT), strictPort: true } : {},
});
