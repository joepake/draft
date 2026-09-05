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

export function touchParentPresenceIfDue(familyId, nowMs = Date.now()) {
  if (!familyId) {
    return Promise.resolve(null);
  }
  const last = readAll()[familyId];
  if (typeof last === 'number' && nowMs - last < ONCE_A_DAY_MS) {
    return Promise.resolve(null);
  }
  /*
   * Stamped only once the server has answered. The load this matters most on
   * — the first after a month away, the one that wakes a dormant family — is
   * the one a stamp-on-attempt would strand for another day if it failed. Two
   * tabs opening together may both pay for one call; that is a cheaper mistake
   * than the other one. The repository answers `null` on failure.
   */
  return deviceRepository.touchParentPresence(familyId).then(result => {
    if (result) {
      writeTouched(familyId, nowMs);
    }
    return result;
  });
}
