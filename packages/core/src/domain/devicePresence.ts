/**
 * One heartbeat, two places it can be written — and the rule for reading it.
 *
 * Since 2026-09-23 a child agent beats into `devicePresence/{deviceId}`
 * (`@kidgate/schema/devicePresence`) rather than onto the device document,
 * because a write to `childDevices/{id}` is delivered to the device's own
 * policy listener, to every open parent console and to `onChildDeviceUpdated`
 * — about ten billable operations for a timestamp
 * (`docs/FEASIBILITY.md`, "The heartbeat is billed three times").
 *
 * The device document keeps its `lastActiveAt` all the same, and it is still
 * written: by agents that have no update channel (`apps/desktop`, `apps/tv`)
 * for as long as they are installed, by registration once per launch, and by
 * the server on a device-document write it was making anyway. So a reader has
 * two candidates and **takes whichever is newer**, which is what lets the new
 * collection ship without a cutover day: an un-updated Mac stays online on
 * every console, and an updated one stops paying for the trigger.
 *
 * Shared with `functions/` through the codegen bridge
 * (`scripts/build-functions-shared.mjs`), because the operator page, the
 * parking sweep and the fleet metrics all read the same pair — and a second
 * copy of "newer wins" is how one of them comes to paint a device offline that
 * another shows green.
 */

export interface PresenceReading {
  /** ISO, or nothing for a device that never reported through this path. */
  lastActiveAt?: string | null;
  /** The cadence the stamp is judged against. Absent is the live cadence. */
  beatIntervalMs?: number;
}

/** Milliseconds of an ISO stamp, or `null` for anything unparseable. */
function stampMs(value: string | null | undefined): number | null {
  if (!value) {
    return null;
  }
  const ms = Date.parse(value);
  return Number.isFinite(ms) ? ms : null;
}

/**
 * The reading a console should believe, from the device document's own pair
 * and the presence document's.
 *
 * Newer `lastActiveAt` wins **as a pair**: `beatIntervalMs` travels with the
 * stamp it describes, because the agent writes them in one call and a console
 * judges the one against the other (`offlineThresholdForBeat`). Mixing the
 * newest stamp with the other source's interval would judge a free-tier beat
 * by the live window, which is the "permanently Offline" failure
 * `domain/reportCadence` exists to prevent.
 *
 * A source with no stamp contributes nothing — an interval on its own says
 * how often something beats, not when it last did.
 */
export function newerPresence(
  legacy: PresenceReading,
  presence: PresenceReading | null | undefined,
): PresenceReading {
  const legacyMs = stampMs(legacy.lastActiveAt);
  const presenceMs = presence ? stampMs(presence.lastActiveAt) : null;

  if (presenceMs === null) {
    return legacyMs === null ? {} : legacy;
  }
  if (legacyMs === null || presenceMs >= legacyMs) {
    return presence as PresenceReading;
  }
  return legacy;
}
