/**
 * Where `functions/http/qrClicks.js` lives, one URL per project.
 *
 * Same region and project pair `packages/core/src/adapters/httpApi.ts` builds
 * from `FIREBASE_PROJECT_ID` in the apps — `joevideotube` (dev) /
 * `kidgate` (prod), `asia-southeast1`. Hardcoded rather than a `VITE_`
 * variable: `import.meta.env.MODE` already tells this build which one it is
 * (`run:dev`/`build:dev` vs `run:prod`/`build:prod`), and a build-time fact
 * about which project a deploy talks to is not something a missing env file
 * should silently default away from.
 */
const QR_CLICK_URLS = {
  dev: 'https://asia-southeast1-joevideotube.cloudfunctions.net/qrClicks',
  prod: 'https://asia-southeast1-kidgate.cloudfunctions.net/qrClicks',
};

export const QR_CLICK_URL = QR_CLICK_URLS[import.meta.env.MODE] ?? QR_CLICK_URLS.prod;
