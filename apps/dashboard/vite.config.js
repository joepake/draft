import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { kidgateHead, SHARED_PUBLIC_DIR } from '@kidgate/web-ui/vite';

/**
 * The dev server's way to the Cloud Functions, and why it is not a CORS entry.
 *
 * `functions/lib/http.js` answers with `Access-Control-Allow-Origin` for the three
 * deployed hosts and the desktop agent's four, and for nothing else.
 * `http://localhost:5173` is absent on purpose — that list is production's, and
 * `createParentWebSession` takes no bearer token, so widening it would let any page
 * a developer happens to serve on that port read the response. The browser reports
 * the refusal as a bare `TypeError: Failed to fetch` and the server logs nothing,
 * which is how the QR on the login screen died while the rest of the dashboard
 * looked fine: Firestore listeners have their own transport and never come here.
 *
 * A proxy answers it without touching production. The browser's request is
 * same-origin, so CORS never applies; Vite forwards it server-side, where CORS is
 * not a thing at all. `Origin` is stripped rather than forwarded, so
 * `logRejectedOrigin` does not print a `cors/origin-rejected` line into the
 * production logs for every request local development makes.
 *
 * **`command === 'serve'`, never `mode`.** Every build script here passes
 * `--mode prod` or `--mode dev`; neither is Vite's `production`, so
 * `import.meta.env.DEV` is true in *both* builds and a bundle that believed it
 * would ship pointing at a path that exists only on this machine.
 *
 * `vite preview` is a build, so it gets the real URL and the refusal comes back.
 * That is the honest answer — a previewed bundle is the one being deployed.
 */
const FUNCTIONS_PROXY_PATH = '/__functions';

export default defineConfig(({ command, mode }) => {
  const functionsUrl = loadEnv(mode, process.cwd(), '').VITE_FIREBASE_FUNCTIONS_URL;
  /*
   * No environment file, no proxy. A mode whose `.env.<mode>` is missing has no
   * functions URL either, and a proxy with an undefined target kills the dev
   * server at start-up — where the app's own answer to a missing config is to
   * serve with sign-in dead (`isFirebaseConfigured`).
   */
  const proxied = command === 'serve' && Boolean(functionsUrl);

  return {
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
    /*
     * The one place the swap happens, so `src/` reads the same variable in every
     * environment and no module has to know a dev server exists.
     */
    ...(proxied
      ? {
          define: {
            'import.meta.env.VITE_FIREBASE_FUNCTIONS_URL':
              JSON.stringify(FUNCTIONS_PROXY_PATH),
          },
        }
      : {}),
    // Vite ignores $PORT on its own and just walks up from 5173 when the port is
    // taken, which leaves tooling that assigned a port pointing at nothing.
    server: {
      ...(process.env.PORT ? { port: Number(process.env.PORT), strictPort: true } : {}),
      ...(proxied
        ? {
            proxy: {
              [FUNCTIONS_PROXY_PATH]: {
                target: functionsUrl,
                changeOrigin: true,
                rewrite: path => path.replace(FUNCTIONS_PROXY_PATH, ''),
                configure: proxy => {
                  proxy.on('proxyReq', proxyReq => proxyReq.removeHeader('origin'));
                },
              },
            },
          }
        : {}),
    },
  };
});
