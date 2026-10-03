import { familyRepository } from '../adapters/repositories.js';

/**
 * This browser's zone on the signed-in account's own root, at most once a day
 * (`FirestoreUser.dashboardTimeZone`).
 *
 * The family's clock when no parent phone has published one
 * (`functions/lib/localHours.js`). The server records it when a QR sign-in is
 * redeemed or a PIN step-up passes (`functions/lib/dashboardTimeZone.js`); a
 * browser signed in with a password, Google or Apple and never unlocked makes
 * neither call, so a family whose parents only ever used such a browser was
 * timed on UTC+7. Decided 2026-09-28: a session that cannot change a control
 * may still publish this one field — a zone name, what every surface
 * publishes, never a location.
 *
 * The account's **own** root, not the family's: a joined parent's zone is
 * theirs, and the server reads every parent's root (`lib/parentPush.js`).
 *
 * Remembered per account with the zone it published, so a load in the same
 * zone within a day costs nothing; past that the repository reads the root
 * and writes only when the stored zone differs. `localStorage` can throw
 * (private mode, blocked site data) and answers nothing then — one read, the
 * safe direction.
 */
const STORAGE_KEY = 'kidgate.dashboardTimeZonePublished';
const ONCE_A_DAY_MS = 24 * 60 * 60 * 1000;

function readAll() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function writePublished(uid, timeZone, atMs) {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...readAll(), [uid]: { timeZone, atMs } }),
    );
  } catch {
    // Nothing to do: the next load pays one read.
  }
}

function browserTimeZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || null;
  } catch {
    return null;
  }
}

/** One call per account at a time — StrictMode mounts the caller twice. */
const inFlight = new Map();

export function publishDashboardTimeZoneIfDue(uid, nowMs = Date.now()) {
  const timeZone = browserTimeZone();
  if (!uid || !timeZone) {
    return Promise.resolve(false);
  }
  const last = readAll()[uid];
  if (last?.timeZone === timeZone && nowMs - last.atMs < ONCE_A_DAY_MS) {
    return Promise.resolve(false);
  }
  const pending = inFlight.get(uid);
  if (pending) {
    return pending;
  }
  // Remembered only once Firestore answered: a refused or offline write must
  // be retried by the next load, not settled for a day.
  const call = familyRepository
    .recordDashboardTimeZone(uid, timeZone)
    .then(wrote => {
      writePublished(uid, timeZone, nowMs);
      return wrote;
    })
    .finally(() => {
      inFlight.delete(uid);
    });
  inFlight.set(uid, call);
  return call;
}
