/**
 * Three numbers, and deliberately no more.
 *
 * Visits, macOS download clicks, Windows download clicks. That is the whole
 * brief, and keeping it to that is what makes analytics on a public,
 * unauthenticated page defensible at all — every additional field here is one
 * more thing a privacy policy has to be true about.
 *
 * **Raw `gtag`, not the Firebase SDK.** `apps/site` has no Firebase dependency
 * and that is structural rather than incidental: these pages exist so the public
 * half of the product never downloads the Firebase SDK (see `App.jsx`).
 * `getAnalytics` would drag it back in for three counters.
 *
 * ## Consent
 *
 * `gtag` sets `_ga`, and under GDPR/ePrivacy that needs consent **before** it is
 * set. There is no banner in this repo. The decision to measure anyway was the
 * operator's, taken knowingly; `apps/site/CLAUDE.md` records it and what would
 * change it. What is here is the smallest version of that decision:
 *
 * - `VITE_ANALYTICS_ENABLED=false` turns it off in one line, per environment.
 * - `anonymize_ip` on, and Google Signals never enabled.
 * - No user id, no cross-site identifier, nothing about who is reading.
 * - Three events. A page view carries what gtag sends automatically and
 *   nothing added.
 */

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID ?? '';

/**
 * The kill switch, and the reason it defaults to on rather than off.
 *
 * A build with no measurement id measures nothing regardless, so the default
 * cannot accidentally turn something on: `.env.example` ships the id blank.
 * This is for the case where the id *is* set and measurement still has to stop
 * — a consent decision, a region, an incident — without a redeploy of code.
 */
const enabled =
  import.meta.env.VITE_ANALYTICS_ENABLED !== 'false' && MEASUREMENT_ID !== '';

let ready = false;

function gtag(...args) {
  // `dataLayer` is gtag's own queue and works before the script has loaded, so
  // an event fired during the first paint is not lost.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

/**
 * Load gtag, once.
 *
 * Called from `main.jsx` and never awaited — a marketing page must not wait on
 * a measurement script to paint, and if the script is blocked (an ad blocker,
 * a corporate proxy, a browser that refuses third-party requests) the page is
 * unaffected and the events queue harmlessly into a `dataLayer` nobody drains.
 */
export function initAnalytics() {
  if (ready || !enabled || typeof window === 'undefined') {
    return;
  }
  ready = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  document.head.appendChild(script);

  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID, {
    /*
     * The IP is truncated before it is stored. GA4 does this for every hit
     * regardless and the flag is redundant there — it is set anyway, because a
     * privacy claim that depends on a vendor's default staying a default is a
     * claim with no code behind it.
     */
    anonymize_ip: true,
  });
}

/**
 * A download button was pressed.
 *
 * One event with a `platform` parameter rather than two event names, so the
 * total and the split are both one query — and `platform` is already a
 * registered custom dimension shared with every other app in this property
 * (`scripts/ga-dimensions.mjs`), so this costs no new slot.
 *
 * Fired on the click and not on the navigation: the link may open a download
 * that never completes, and what is being counted is intent to install. The
 * other end of that funnel is `agent_started` from the agent itself.
 */
export function trackDownloadClick(platform) {
  if (!enabled) {
    return;
  }
  gtag('event', 'download_click', { platform });
}
