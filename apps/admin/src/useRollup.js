import { useCallback, useEffect, useState } from 'react';
import { fetchReport } from './api.js';

/**
 * The daily rollup, fetched once and shared by every page that needs it.
 *
 * ## Why a module-level cache rather than a fetch per page
 *
 * Report and Fleet read the same `adminReport` response. Once the sidebar
 * became real navigation, a naive version would fetch on every mount — so
 * clicking between the two would cost a cold start, a forced token refresh, a
 * revocation check and, worst of all, **an `operatorAuditLog` row each time**.
 * That log's job is answering "what did this account do while it was
 * compromised", and a page that writes a row per tab click buries the answer
 * in navigation noise. Same reason the report does not poll.
 *
 * So the payload lives here, outside React, and survives navigation. Refresh
 * is explicit — a button, never a timer.
 *
 * The cache is deliberately not cleared on sign-out: it holds no personal
 * data, only product-wide counts, and the page is gone from memory anyway.
 * `localStorage` still backs the first paint across a reload.
 */

const CACHE_KEY = 'kidgate.operator.report.v1';

/** Shared across every consumer, so the second page to mount pays nothing. */
let cache = null;
let inFlight = null;
const listeners = new Set();

function readStored() {
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    // Private window, cleared site data, storage blocked. Not an error here.
    return null;
  }
}

function writeStored(value) {
  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(value));
  } catch {
    // The page works without it; it only loses the instant first paint.
  }
}

function publish(next) {
  cache = next;
  for (const listener of listeners) {
    listener(next);
  }
}

/** `YYYY-MM-DD` in UTC — the key the rollup writes under. */
export function dateKey(daysAgo) {
  const date = new Date();
  date.setUTCHours(12, 0, 0, 0);
  date.setUTCDate(date.getUTCDate() - daysAgo);
  return date.toISOString().slice(0, 10);
}

export function useRollup(days) {
  const [state, setState] = useState(
    () => cache ?? { data: readStored(), days, error: null, busy: false },
  );

  useEffect(() => {
    const listener = next => setState({ ...next });
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);

  const load = useCallback(range => {
    // One request in flight at a time: two pages mounting together must not
    // both fetch, and neither must a double-click on Refresh.
    if (inFlight) {
      return inFlight;
    }
    publish({ ...(cache ?? {}), busy: true, error: null });
    inFlight = fetchReport(dateKey(range), dateKey(0))
      .then(data => {
        writeStored(data);
        publish({ data, days: range, error: null, busy: false });
      })
      .catch(error =>
        publish({ ...(cache ?? {}), days: range, error: error.message, busy: false }),
      )
      .finally(() => {
        inFlight = null;
      });
    return inFlight;
  }, []);

  // Fetch when nothing is cached, or when the range being asked for differs
  // from the range that was fetched. Navigating back to a page it already has
  // does nothing.
  useEffect(() => {
    if (!cache?.data || cache.days !== days) {
      load(days);
    }
  }, [days, load]);

  return { ...state, load };
}
