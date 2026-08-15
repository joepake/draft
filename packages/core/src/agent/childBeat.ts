/**
 * A child device saying it is alive, on its own clock.
 *
 * **The only unconditional write a child agent makes, and that is the point.**
 * Everything else a device sends is gated on having something to report — usage
 * by `shouldReportUsage`, a fix by distance or silence, the battery by five
 * points. `lastActiveAt` cannot be gated that way, because it is the field every
 * parent surface reads online/offline off, against `OFFLINE_THRESHOLD_MS` in
 * `domain/deviceStatus`.
 *
 * `apps/desktop` learned this the expensive way: its `lastActiveAt` was
 * refreshed only as a side effect of a usage report or a location upload, so an
 * agent enforcing every rule correctly went **offline on the parent's screen
 * after three minutes** of an idle machine — and flapped during active use,
 * because the usage gate batches to five minutes and the threshold is three.
 *
 * It lives here rather than in that app because `apps/tv` was written from the
 * same mistaken assumption and shipped without any beat at all. The phone never
 * had the bug: `childActivityHeartbeat.ts` beats on its own, and
 * `functions/lib/deviceActivity.js` sets its server-side bump gate to two
 * minutes *because* the child app beats every one.
 */

import type { DeviceRegistrationRepository } from '@kidgate/core/repositories/deviceRegistration';
import type { Millis } from '@kidgate/schema/primitives';

/**
 * One minute.
 *
 * The ceiling is not negotiable and is three: `OFFLINE_THRESHOLD_MS`. A minute
 * leaves two beats of slack for a device waking, a slow network, or a beat that
 * ran late — which on Android TV is the likely case, since Doze and an OEM
 * battery manager both delay timers.
 */
export const ALIVE_MIN_INTERVAL_MS = 60_000;

export interface AliveBeatDeps {
  /**
   * For `updateChildDeviceHeartbeat` and nothing else.
   *
   * The registration repository rather than `ControlRepository` because the
   * write is one field on the device document and belongs beside the code that
   * created it — which is also where the phone's heartbeat writes.
   */
  registration: DeviceRegistrationRepository;
  /** The family owner's uid. A child device signs in under it. */
  uid: string;
  deviceId: string;
  /** Injected so a test does not wait a minute. Defaults to the system clock. */
  now?: (() => Millis) | undefined;
  onError?: ((error: unknown) => void) | undefined;
}

export interface AliveBeat {
  /**
   * Consider one beat. True when a write actually went out.
   *
   * Called from whatever loop the app already runs rather than owning a timer:
   * the two agents tick at different cadences for different reasons, and a third
   * interval in the process is a third thing to get throttled.
   */
  report(): Promise<boolean>;
}

export function createAliveBeat(deps: AliveBeatDeps): AliveBeat {
  const now = deps.now ?? (() => Date.now());
  let lastAliveAtMs = 0;

  return {
    async report(): Promise<boolean> {
      const nowMs = now();
      if (nowMs - lastAliveAtMs < ALIVE_MIN_INTERVAL_MS) {
        return false;
      }

      try {
        await deps.registration.updateChildDeviceHeartbeat(deps.uid, deps.deviceId);
        lastAliveAtMs = nowMs;
        return true;
      } catch (error) {
        /*
         * Not stamped, so the next beat retries rather than waiting out the
         * interval — the phone releases its throttle on failure for the same
         * reason. An unpaired device throws here every beat until the controls
         * listener notices the document is gone and stops it.
         *
         * Swallowed rather than raised, and for a stronger reason than the
         * other writes: this one is what says the agent is alive, so throwing
         * would be an error raised by the very code whose silence is the
         * symptom.
         */
        deps.onError?.(error);
        return false;
      }
    },
  };
}
