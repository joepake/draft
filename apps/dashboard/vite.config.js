import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { kidgateHead, SHARED_PUBLIC_DIR } from '@kidgate/web-ui/vite';

export default defineConfig({
  plugins: [
    react(),
    /*
     * `noindex`, and its own title: everything here is behind a sign-in. An
     * indexed login screen wins nothing and competes with kidgate.app for the
     * brand query; the marketing title this file used to carry was also the
     * one a parent saw on their own bookmark.
     */
    kidgateHead({
      origin: 'https://dashboard.kidgate.app',
      title: 'KidGate — Parent dashboard',
      description:
        "Sign in to read your family's screen time, blocked apps, location and weekly report from any browser.",
      noindex: true,
    }),
  ],
  publicDir: SHARED_PUBLIC_DIR,
  // Vite ignores $PORT on its own and just walks up from 5173 when the port is
  // taken, which leaves tooling that assigned a port pointing at nothing.
  server: process.env.PORT ? { port: Number(process.env.PORT), strictPort: true } : {},
});
