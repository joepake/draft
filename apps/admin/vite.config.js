import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Deployed to `draft-admin-five.vercel.app` since 2026-09-02, by decision.
 *
 * This file used to say there was no `build` script on purpose, because a build
 * is the first step to deploying a tool that can read every family's data. That
 * step has now been taken deliberately rather than by drift; `build:prod` exists
 * and `apps/admin/CLAUDE.md` rule 1 records what was accepted along with it.
 *
 * What actually gates the data is unchanged and is not in this file: every
 * endpoint verifies `request.auth.token.admin === true` server-side, and
 * `functions/admin/index.js` names the exact origins allowed to call them. A
 * deployment that is not in that list builds and signs in and then cannot read
 * anything.
 *
 * The dev server stays bound to 127.0.0.1 regardless — a public deployment is
 * not a reason to also expose the working copy on café Wi-Fi.
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
