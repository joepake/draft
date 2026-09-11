import { deviceRepository } from '../adapters/repositories.js';

/**
 * "A parent is looking", said once a day from this browser
 * (`docs/PRICING.md` §6, §8 item 12).
 *
 * `touchParentPresence` stamps the family's `lastParentOpenAtMs` — the
 * dormancy reaper's only input — and wakes whatever that reaper parked. Once a
 * day, not once a load: the stamp only has to stay inside a thirty-day
 * window, and the wake only matters on the first open after a long absence,
 * which is exactly the open that has no recent stamp to be throttled by.
 *
 * Per family, like `reportSeen.js`: a parent who sits in two families should
 * count as present in both. `localStorage` can throw (private mode, a browser
 * set to block site data) and answers nothing then, which reads as "not yet
 * today" and costs one extra call — the safe direction.
 */
const STORAGE_KEY = 'kidgate.parentPresenceTouchedAt';
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

function writeTouched(familyId, atMs) {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...readAll(), [familyId]: atMs }),
    );
  } catch {
    // Nothing to do: the next load pays one extra call.
  }
}

/**
 * The call in flight for a family, so a second caller can wait on the first.
 *
 * `useFamilyData` fires this and does not await it, which is right — nothing
 * on the page should wait for a presence stamp. But the choose-a-device sheet
 * has to: a family the dormancy reaper parked looks exactly like a family owed
 * a choice, and this call is what wakes it. Asking first and waking a second
 * later is a question the parent had no reason to be asked. `apps/mobile`
 * waits on the same call for the same reason.
 */
const inFlight = new Map();

/**
 * Settles when this family's presence call does, or at once if none is due.
 *
 * Named and shaped after `apps/mobile`'s `waitForParentPresence`, and swallows
 * the failure the same way: a caller waiting on the wake has nothing to do
 * about a stamp that did not land.
 */
export function waitForParentPresence(familyId) {
  const call = inFlight.get(familyId);
  return call
    ? call.then(
        () => undefined,
        () => undefined,
      )
    : Promise.resolve();
}

export function touchParentPresenceIfDue(familyId, nowMs = Date.now()) {
  if (!familyId) {
    return Promise.resolve(null);
  }
  const last = readAll()[familyId];
  if (typeof last === 'number' && nowMs - last < ONCE_A_DAY_MS) {
    return Promise.resolve(null);
  }
  const pending = inFlight.get(familyId);
  if (pending) {
    return pending;
  }
  /*
   * Stamped only once the server has answered. The load this matters most on
   * — the first after a month away, the one that wakes a dormant family — is
   * the one a stamp-on-attempt would strand for another day if it failed. Two
   * tabs opening together may both pay for one call; that is a cheaper mistake
   * than the other one. The repository answers `null` on failure.
   */
  const call = deviceRepository
    .touchParentPresence(familyId)
    .then(result => {
      if (result) {
        writeTouched(familyId, nowMs);
      }
      return result;
    })
    .finally(() => {
      // Cleared either way: a failed call must be retried by the next load,
      // not remembered as settled for the life of the tab.
      inFlight.delete(familyId);
    });

  inFlight.set(familyId, call);
  return call;
}
