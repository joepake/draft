import type { WebFilterCategory } from './webActivity';

/**
 * A child device's browsing for one local day, as **one document** —
 * `users/{uid}/childDevices/{deviceId}/webDays/{date}` — since 2026-10-01.
 *
 * Until then every (day, registrable domain) was its own row in `webHistory`
 * and every ten-minute flush rewrote a dozen of them: 3,830 of the 5,400
 * writes two PCs made on 2026-09-30, seven in ten of the day
 * (`docs/DATA_RETENTION.md` §14, `docs/FEASIBILITY.md` "Web history as one
 * document per device per day"). The map keyed by domain takes the same
 * increments in one write, carries the hour bands `webActivityHours` held,
 * and gives a console one document per flush instead of a read per row.
 *
 * `logChildWebActivity` (Admin SDK) is the only writer; a monitored device
 * must not author its own browsing record, which is the posture
 * `firestore.rules` gives this path. Keys are registrable domains
 * (`@kidgate/core/domain/webDomainKey`), dots and all — Firestore treats a
 * key inside a map literal as a name, never as a path, and the spike that
 * proved it on 2026-10-01 is recorded in the feasibility entry.
 */
export interface WebDayDomain {
  visits: number;
  blockedVisits: number;
  /** ISO, the last flush that mentioned the domain. */
  lastAt: string;
  /** The device's own filter verdict, when it had one. */
  category?: WebFilterCategory | null;
  /** The classifier's label, when the cache had one at write time. */
  aiCategory?: WebFilterCategory | null;
}

export interface WebDay {
  date: string;
  /** The day's totals, incremented with the map so a reader needs no fold. */
  visits: number;
  blocked: number;
  /** Distinct domains in `domains`. */
  sites: number;
  domains: Record<string, WebDayDomain>;
  /** Page loads per hour band, `"0"`–`"23"`, the shape `WebActivityHoursDoc` had. */
  hours?: Record<string, number>;
  blockedHours?: Record<string, number>;
  updatedAt?: unknown;
}

/**
 * The first local day written as a day document. Readers fold the old rows
 * in for dates before it, and stop looking at them once retention has had
 * time to remove every row — `WEB_DAYS_ROWS_FALLBACK_DAYS` after it, which
 * is the `RETENTION_DAYS` the sweep keeps history for.
 */
export const WEB_DAYS_SINCE = '2026-10-01';
export const WEB_DAYS_ROWS_FALLBACK_DAYS = 30;

/** The most domains a day document holds; a flush past it stores nothing new. */
export const MAX_WEB_DAY_DOMAINS = 400;
