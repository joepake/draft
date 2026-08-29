/**
 * Reporting the domains a child device looked up — the write half of
 * `repositories/webHistory`, which is the parent's read half.
 *
 * One client for every platform that posts from TypeScript. `apps/mobile`'s
 * iOS drain (`childWebHistorySync.ts`) still posts through its own axios
 * client because that app has no `ApiPort` adapter until migration step 9;
 * the endpoint and body shape here are the same ones, and the desktop agent
 * is the first consumer.
 *
 * `as: 'session'` — the ID token alone — is deliberate and matches the
 * server: `logChildWebActivity` authenticates the family token plus the
 * `deviceId` claim and explicitly does **not** demand the child device
 * credential, because on Android it is called from the DNS tunnel's native
 * service where the Keychain credential is out of reach. Nothing here gates
 * enforcement, so a forged row costs an inaccurate log rather than an
 * unlocked device — the endpoint's own comment says so.
 */

import type { ApiPort } from '@kidgate/ports/api';
import type { IsoDate } from '@kidgate/schema/primitives';

/** Matches the server's per-call ceiling in `functions/http/webActivity.js`. */
export const MAX_WEB_ACTIVITY_ENTRIES_PER_UPLOAD = 120;

export interface WebActivityEntry {
  /** Registrable domain, lowercased, `www.` stripped. */
  domain: string;
  /** Visits since the last accepted upload — the server increments. */
  visits: number;
  /** Blocked lookups since the last accepted upload. */
  blockedVisits?: number;
  /** `WebFilterCategory` id, when the device classified the domain. */
  category?: string;
}

/**
 * A day's page loads by hour, index 0 = the device's local midnight.
 *
 * Local, not UTC, and for the same reason the date key is: a parent reading
 * "most of it after 22:00" is reading their child's evening.
 */
export interface WebActivityHours {
  visits: readonly number[];
  blocked: readonly number[];
}

/** 24 non-negative integers, whatever the caller had. */
function normalizeHours(values: readonly number[]): number[] {
  return Array.from({ length: 24 }, (_, hour) => {
    const value = Number(values[hour]);
    return Number.isFinite(value) && value > 0 ? Math.floor(value) : 0;
  });
}

/** A day with nothing in any bucket is a write nobody needs. */
function hasAnyHour(hours: WebActivityHours): boolean {
  return (
    hours.visits.some(value => value > 0) || hours.blocked.some(value => value > 0)
  );
}

export interface WebActivityRepositoryDeps {
  api: ApiPort;
}

export function createWebActivityRepository(deps: WebActivityRepositoryDeps) {
  const { api } = deps;

  return {
    /**
     * Ships one batch of increments. The caller owns the delta gate
     * (`domain/webHistoryDelta`) and must only advance it after this
     * resolves — a failed post has to be retried in full.
     */
    async report(
      userId: string,
      deviceId: string,
      date: IsoDate,
      entries: readonly WebActivityEntry[],
      /**
       * When in the day, for the surfaces that know.
       *
       * Optional because most do not: the macOS provider and the Android
       * tunnel report cumulative per-domain counters with no per-visit time,
       * and a zero-filled array from them would be a chart of nothing
       * presented as a measurement. Only a device publishing
       * `DeviceCapabilities.webActivityHours` sends this.
       */
      hours?: WebActivityHours,
    ): Promise<void> {
      if (entries.length === 0) {
        return;
      }
      await api.post(
        '/logChildWebActivity',
        {
          userId,
          deviceId,
          date,
          entries: entries.slice(0, MAX_WEB_ACTIVITY_ENTRIES_PER_UPLOAD).map(entry => ({
            domain: entry.domain,
            visits: entry.visits,
            ...(entry.blockedVisits ? { blockedVisits: entry.blockedVisits } : {}),
            ...(entry.category ? { category: entry.category } : {}),
          })),
          ...(hours && hasAnyHour(hours)
            ? {
                hours: normalizeHours(hours.visits),
                blockedHours: normalizeHours(hours.blocked),
              }
            : {}),
        },
        { as: 'session' },
      );
    },
  };
}

export type WebActivityRepository = ReturnType<typeof createWebActivityRepository>;
