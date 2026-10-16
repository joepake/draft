/**
 * Client-side ceilings on the endpoints a person can press into a loop
 * (2026-10-15).
 *
 * A refusal here costs the server nothing — no invocation, no read, no push —
 * which a server-side limiter cannot offer: by the time it says no, the
 * request has already been billed. So every console refuses first, at numbers
 * a person never reaches and a stuck button or retry loop reaches at once.
 * The server keeps its own limits for whatever does not come through an app
 * (`functions/lib/rateLimit.js`); every number here is at or under the
 * server's, so this never lets through a request the server would refuse.
 *
 * Only endpoints a person triggers are listed. Cadence-driven traffic — the
 * agent sync, activity uploads, heartbeats, polls, geocoding — is absent on
 * purpose: its rate is set by code, and a ceiling there would drop data
 * rather than stop a person. Lock / Unlock is `domain/lockPress`, counted in
 * `toggleLock` before its read.
 */
export interface RequestLimit {
  windowMs: number;
  max: number;
  /** The body field the count is kept per, so one device's presses never spend another's. */
  per?: 'deviceId' | 'childId';
}

const MINUTE = 60 * 1000;
const TEN_MINUTES = 10 * MINUTE;

export const REQUEST_LIMITS: Readonly<Record<string, RequestLimit>> = {
  // A command the child device answers with a push. Same numbers as the server.
  '/requestChildRing': { windowMs: MINUTE, max: 2, per: 'deviceId' },
  '/requestChildLocation': { windowMs: MINUTE, max: 2, per: 'deviceId' },

  // Rules that fan out: a write per device, a trigger and a push behind each.
  '/updateDeviceControls': { windowMs: MINUTE, max: 30, per: 'deviceId' },
  '/updateChildRules': { windowMs: MINUTE, max: 20, per: 'childId' },
  '/updateFamilyPlaces': { windowMs: MINUTE, max: 10 },
  '/setParentPin': { windowMs: TEN_MINUTES, max: 5 },
  '/chooseMonitoredDevice': { windowMs: TEN_MINUTES, max: 3 },

  // A parent's answer that reaches the child.
  '/grantBonusMinutes': { windowMs: MINUTE, max: 10, per: 'deviceId' },
  '/resolveTimeRequest': { windowMs: MINUTE, max: 10 },
  '/resolveSiteRequest': { windowMs: MINUTE, max: 10 },
  '/resolveRewardClaim': { windowMs: MINUTE, max: 10 },
  '/resolveParentJoinRequest': { windowMs: MINUTE, max: 10 },
  '/createRewardTask': { windowMs: MINUTE, max: 20 },
  '/updateRewardTask': { windowMs: MINUTE, max: 20 },

  // A child asking — a push to every parent each time.
  '/createTimeRequest': { windowMs: TEN_MINUTES, max: 3, per: 'deviceId' },
  '/createSiteRequest': { windowMs: TEN_MINUTES, max: 5, per: 'deviceId' },
  '/claimRewardTask': { windowMs: MINUTE, max: 10 },

  // Paid or slow on the server: Gemini, the stores.
  '/generateWeeklyReport': { windowMs: MINUTE, max: 3 },
  '/verifySubscriptionPurchase': { windowMs: TEN_MINUTES, max: 10 },
  '/restoreSubscription': { windowMs: TEN_MINUTES, max: 5 },

  // Codes, PINs, sessions and mail.
  '/verifyParentPin': { windowMs: MINUTE, max: 10 },
  '/createPairingCode': { windowMs: TEN_MINUTES, max: 10 },
  '/redeemPairingCode': { windowMs: TEN_MINUTES, max: 10 },
  '/approveParentWebSession': { windowMs: TEN_MINUTES, max: 10 },
  '/revokeParentWebSession': { windowMs: MINUTE, max: 10 },
  '/requestPasswordReset': { windowMs: MINUTE, max: 3 },
  '/requestEmailVerification': { windowMs: MINUTE, max: 1 },
  '/appendSupportMessage': { windowMs: MINUTE, max: 10 },
  '/setMessageAiConsent': { windowMs: MINUTE, max: 10 },
};

/** The server's own refusal code, so a refusal here reads exactly like one from there. */
export const REQUEST_THROTTLED_CODE = 'rate/too-many-attempts';

/** One per app: counts every listed request it is asked about, in memory. */
export function createRequestThrottle(now: () => number = Date.now) {
  const sent = new Map<string, number[]>();

  return {
    /**
     * `null` when the request may go (and it is counted), otherwise how many
     * ms until it may. `path` may carry a query string; `body` is the request
     * body as an object.
     */
    check(path: string, body?: unknown): number | null {
      const route = path.split('?')[0] ?? path;
      const limit = REQUEST_LIMITS[route];
      if (!limit) {
        return null;
      }
      const scope =
        limit.per && body && typeof body === 'object'
          ? (body as Record<string, unknown>)[limit.per]
          : undefined;
      const key = typeof scope === 'string' ? `${route}:${scope}` : route;

      const at = now();
      const recent = (sent.get(key) ?? []).filter(t => at - t < limit.windowMs);
      if (recent.length >= limit.max) {
        sent.set(key, recent);
        return Math.max(0, (recent[0] ?? at) + limit.windowMs - at);
      }
      recent.push(at);
      sent.set(key, recent);
      return null;
    },
  };
}

export type RequestThrottle = ReturnType<typeof createRequestThrottle>;
