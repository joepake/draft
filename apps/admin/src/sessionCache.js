/**
 * Responses already paid for, kept while the tab lives so navigation is free.
 *
 * `key={route}` in `App.jsx` unmounts a page when the operator leaves it, and a
 * page that fetches on mount would pay for every sidebar click: a cold start, a
 * revocation check and **an `operatorAuditLog` row**, for data nobody expects
 * to be live. The support queue and the family list are read a few times a day,
 * not watched — `useRollup.js` makes the same argument for the report.
 *
 * Three rules:
 *
 * - **Memory only, never `localStorage`.** Unlike the rollup's product-wide
 *   counts, the family list and support tickets are families' words and names;
 *   they must not outlive the tab on disk. A reload starts empty.
 * - **Fresh for five minutes, then fetched on the next visit.** A tab left open
 *   all day would otherwise show the morning's queue as current. Every page
 *   that reads through here keeps an explicit Refresh that ignores the age.
 * - **Cleared on sign-out** (`App.jsx`), so the next account on this browser
 *   starts from nothing.
 *
 * Not cached, on purpose: `fetchFamilyDetail` (each open is its own reasoned,
 * audited act), `searchFamilies` (the operator typed it — they asked), and
 * every write.
 */

const FRESH_FOR_MS = 5 * 60 * 1000;

const entries = new Map();

export function readCached(key) {
  const entry = entries.get(key);
  if (!entry) {
    return null;
  }
  if (Date.now() - entry.at > FRESH_FOR_MS) {
    entries.delete(key);
    return null;
  }
  return entry.value;
}

export function writeCached(key, value) {
  entries.set(key, { value, at: Date.now() });
}

/** Every entry under `prefix` — a write, or a Refresh, invalidates its family. */
export function dropCached(prefix) {
  for (const key of entries.keys()) {
    if (key.startsWith(prefix)) {
      entries.delete(key);
    }
  }
}

export function clearCached() {
  entries.clear();
}
