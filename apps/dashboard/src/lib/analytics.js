/**
 * What the parent dashboard reports to Google Analytics.
 *
 * **This one uses the Firebase web SDK, and that is the difference from
 * `apps/desktop`.** The agent could not: it is served over Tauri's custom
 * protocol under a CSP that permits no third-party script, so `gtag.js` never
 * loads and `isSupported()` cannot be relied on — it hand-rolls the Measurement
 * Protocol instead (`apps/desktop/src/ga.ts` says why). This is an ordinary page
 * on an ordinary https origin, so `getAnalytics` works, and everything it brings
 * with it is the reason the dashboard has a data stream of its own:
 * `page_view`, `session_start`, `first_visit`, engagement time and referrers,
 * none of which an agent can produce.
 *
 * Its own **stream**, not its own secret. A parent opens this for two minutes
 * where a child's agent runs all day; sharing a stream would make "users"
 * meaningless — one family counting as 1 + N — and bury this app's engagement
 * under machines that never close.
 *
 * **Event names are the phone's** wherever the phone has one, because the same
 * parent does the same things from both. `apps/mobile`'s `AnalyticsService`
 * emits `login`, `logout`, `parent_device_lock`, `parent_check_in_request`,
 * `parent_time_request` and `parent_control`, and so does this. `platform: web`
 * is what separates the rows.
 *
 * **Nothing here identifies a child.** No device names, no app names, no
 * domains, no coordinates, no family id. Parameters are enums and booleans.
 */

import {
  getAnalytics,
  isSupported,
  logEvent,
  setUserProperties,
} from 'firebase/analytics';
import app, { isFirebaseConfigured } from './firebase';

/**
 * Consent is **not** asked for here, and that is an open decision rather than a
 * conclusion.
 *
 * `getAnalytics` sets its own cookies. This app is behind a sign-in and already
 * sets an auth cookie, which is why it was not treated the same way as the
 * public marketing site — but "already sets a cookie" is not the same as
 * consent under GDPR/PECR, and no banner exists anywhere in this repo yet. The
 * switch below is what makes turning it off a one-line change rather than a
 * revert: leave `VITE_ANALYTICS_ENABLED=false` in an environment that must not
 * measure until that decision is made. See `docs/SETUP_GOLIVE.md`.
 */
const consentAllows = import.meta.env.VITE_ANALYTICS_ENABLED !== 'false';

/**
 * The Firebase project, on every event.
 *
 * Same reason the desktop agent carries it: dev and production report into GA
 * properties that are not guaranteed to be distinct, and a production number
 * that quietly includes a developer's afternoon cannot be corrected afterwards.
 */
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID || '';

let instance = null;
let ready = false;

/**
 * Start analytics, or decide not to. Safe to call more than once.
 *
 * Async because `isSupported()` is: a browser with storage disabled, or a
 * privacy mode that blocks the measurement cookie, has to answer false rather
 * than have `getAnalytics` throw during the first render. Every failure here is
 * silent — a dashboard that will not paint because a measurement library was
 * unhappy is a worse product than one that measures nothing.
 */
export async function initAnalytics() {
  if (ready) {
    return instance;
  }
  ready = true;

  if (!isFirebaseConfigured || !consentAllows) {
    return null;
  }

  try {
    if (await isSupported()) {
      instance = getAnalytics(app);
    }
  } catch {
    instance = null;
  }
  return instance;
}

/**
 * One event.
 *
 * `platform: 'web'` on every one of them, matching what `apps/mobile` sends for
 * `Platform.OS` and what the desktop agent sends for `macos` / `windows`. It is
 * the dimension that lets one report answer "how often does a parent lock a
 * device" across all three rather than three reports nobody adds up.
 */
export function track(event, params) {
  if (!instance) {
    return;
  }
  try {
    logEvent(instance, event, {
      platform: 'web',
      project_id: projectId,
      ...params,
    });
  } catch {
    // Analytics must never block a parent flow. Same posture as the phone's
    // `AnalyticsService`, which swallows for the same reason.
  }
}

/** Mirrors `AnalyticsService.setUserRole`. Always `parent` from this app. */
export function setParentRole() {
  if (!instance) {
    return;
  }
  try {
    setUserProperties(instance, { user_role: 'parent' });
  } catch {
    // Ignore.
  }
}

/** `login` — the phone's event name and its `method` / `result` params. */
export function trackLogin(method, result) {
  track('login', { method, result });
  if (result === 'success') {
    setParentRole();
  }
}

export function trackLogout() {
  track('logout', { result: 'success' });
}

/**
 * A parent action on a child device, and how it ended.
 *
 * One event with an `action` rather than six events, because the question worth
 * asking is which controls parents actually reach for, and that is a
 * breakdown of one number rather than six unrelated ones. `parent_control` is
 * the phone's name for the same idea and takes the same shape.
 */
export function trackParentAction(action, result) {
  track('parent_control', { control: action, result });
}

/**
 * Lock and unlock, split out because the phone splits them.
 *
 * `parent_device_lock` carries the direction: an unlock is not a lock, and a
 * family whose parent locks ten times and never unlocks is a support case
 * rather than a happy one.
 */
export function trackDeviceLock(locked, result) {
  track('parent_device_lock', { locked, result });
}

export function trackCheckInRequest(result) {
  track('parent_check_in_request', { result });
}

/** `action` is `approve` or `deny`, exactly as the phone reports it. */
export function trackTimeRequest(action, result) {
  track('parent_time_request', { action, result });
}

export function trackRewardClaim(action, result) {
  track('parent_reward_task', { action, result });
}

/**
 * Which screen a parent is on, as a `page_view`.
 *
 * **Not a route change** — this app has one route (`/`, plus a catch-all
 * redirect), so gtag's own page view on load already covers navigation and
 * instrumenting the router would be a function with nothing to report.
 *
 * What it has instead is a gate: `LiveGate` renders Login, a session splash, or
 * the dashboard from the same URL. That is the only screen change here and the
 * only funnel worth a number — how many arrivals reach the dashboard rather
 * than stopping at the sign-in.
 *
 * `page_title` is GA4's own dimension, so this costs no custom-dimension slot;
 * the property is at 50 of 50. It carries a stable slug rather than a
 * translated heading, for the reason the desktop agent's screens do: fourteen
 * strings for one screen is a sum nobody remembers to do.
 */
export function trackScreen(screen) {
  track('page_view', { page_title: screen });
}

/**
 * An error the dashboard could not handle, as the same `app_error` the desktop
 * agent sends.
 *
 * There was nothing at all here before: no boundary, no `onerror`, no reporter.
 * A parent whose dashboard threw got a blank panel and nobody found out — the
 * agent has had crash reporting since the day it shipped and the screen parents
 * actually use had none.
 *
 * `message` is scrubbed the way `apps/desktop/src/telemetry.ts` scrubs it, and
 * for the same reason: a Firestore error carries the document path that failed,
 * and that path contains the family owner's uid.
 */
export function trackError(error, at) {
  const message = String(error?.message ?? error ?? '')
    .replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi, '<id>')
    .replace(/[A-Za-z0-9_-]{20,}/g, '<id>');

  track('app_error', {
    at,
    error_name: error?.name || 'Error',
    error_message: message.slice(0, 100),
    frame_1: String(error?.stack ?? '')
      .split('\n')[1]
      ?.trim()
      .slice(0, 100),
  });
}

/**
 * The two failures no component can catch for itself.
 *
 * Installed once from `main.jsx`. A React error boundary does not see either:
 * `unhandledrejection` is every `await` nobody attached a `catch` to, and
 * `onerror` covers what escapes an event handler.
 */
export function installErrorReporting() {
  window.addEventListener('error', event => {
    trackError(event.error ?? new Error(event.message), 'window.onerror');
  });
  window.addEventListener('unhandledrejection', event => {
    trackError(event.reason, 'unhandledrejection');
  });
}
