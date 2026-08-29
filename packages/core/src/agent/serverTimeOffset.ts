/**
 * Server time on a device whose clock the child can set.
 *
 * `adapters/systemClock` has taken an `offsetMs` function since it was written,
 * with a header explaining why enforcement must not read `Date.now()` straight
 * — and every one of the four agents constructed it with the default, which is
 * zero. The mechanism was there and nothing fed it: winding a Mac, a television
 * or a Chromebook forward past a bedtime ended the bedtime. This is what feeds
 * it.
 *
 * **The reading is free, and that is why it is this reading.** These agents do
 * not talk to Cloud Functions over `fetch`, so the phone's trick — the `Date`
 * header on every API response, `apps/mobile/src/services/time/serverTime.ts` —
 * has no equivalent here; they speak to Firestore through an SDK that exposes no
 * headers. But `agent/childBeat` already writes `lastActiveAt:
 * serverTimestamp()` once a minute, and `agent/controlsSync` already holds a
 * listener on that same document. The resolved value coming back down that
 * listener *is* the server's clock. No extra read, no extra write, no new
 * endpoint.
 *
 * **Only a server snapshot may be believed.** Firestore resolves a pending
 * `serverTimestamp()` locally as null or as an estimate taken from this
 * device's clock — so a cached snapshot would feed the device's own clock back
 * in as the server's and confidently derive an offset of zero, which is exactly
 * the failure this file exists to stop. `controlsSync` passes the value only
 * from snapshots with `fromCache === false`.
 *
 * **What this does not fix.** The offset is correct as of the last server
 * snapshot. A child who moves the clock *between* snapshots moves the corrected
 * time with it, until the next one lands — a minute or so on these agents, since
 * the heartbeat writes every minute and the listener delivers what the write
 * resolves to. Closing that gap needs a monotonic clock the child cannot reach
 * (`apps/desktop`'s `clock.rs` has one; a television does not), and no platform
 * here has one reachable from JavaScript.
 *
 * The reading is also late by one network hop — the server stamped the write,
 * we compare against the clock at delivery — which biases the offset by a few
 * hundred milliseconds. Every threshold above it is measured in minutes.
 */

import {
  CLOCK_SKEW_ALERT_DEDUPE_MS,
  MAX_REASONABLE_OFFSET_MS,
  isClockSkewed,
  isClockTampered,
  offsetFromServerTime,
} from '@kidgate/core/domain/clockSkew';
import { timestampToMillis } from '@kidgate/core/domain/firestoreValue';
import type { Millis } from '@kidgate/schema/primitives';
import type { StoragePort } from '@kidgate/ports/storage';

const OFFSET_STORAGE_KEY = 'kidgate.serverTimeOffsetMs';

/**
 * Below this, a new reading is not written to storage.
 *
 * A snapshot arrives about once a minute and the offset moves by the jitter of
 * one network hop each time. Persisting every one of those is a storage write a
 * minute, for the life of the process, to record a number that has not
 * meaningfully changed — on a television that is MMKV, on the extension it is
 * `chrome.storage.local`, and neither is free.
 */
const PERSIST_EPSILON_MS = 1_000;

export interface ServerTimeOffsetDeps {
  storage: StoragePort;
  /** The raw device clock. Injected for tests; never corrected — it is the input. */
  now?: (() => Millis) | undefined;
  onError?: ((error: unknown) => void) | undefined;
}

export interface ServerTimeOffset {
  /**
   * Read the last known offset back from storage.
   *
   * Await it before enforcing anything if the caller can. An agent that starts
   * offline — a television at power-on, a laptop opened on a plane — has no
   * snapshot to learn from and would otherwise enforce on the clock the child
   * left set until the network came back.
   */
  hydrate(): Promise<void>;
  /** Milliseconds to add to the device clock. Hand this to `createSystemClock`. */
  offsetMs(): Millis;
  /** A `lastActiveAt` from a **server** snapshot. Anything else is ignored. */
  observeServerTimestamp(value: unknown): void;
  /** The device clock disagrees with the server by more than ordinary drift. */
  isSkewed(): boolean;
  /**
   * True when the parent should be told, at most once per dedupe window.
   *
   * Consuming rather than reporting, because the caller writing the activity
   * row is the only thing that knows the write went out — and two callers
   * asking the same question must not both alert.
   */
  takeTamperAlert(): boolean;
}

export function createServerTimeOffset(deps: ServerTimeOffsetDeps): ServerTimeOffset {
  const now = deps.now ?? (() => Date.now());

  let offset: Millis = 0;
  let persisted: Millis = 0;
  let lastAlertAtMs = 0;

  const persist = (next: Millis): void => {
    if (Math.abs(next - persisted) < PERSIST_EPSILON_MS) {
      return;
    }
    persisted = next;
    deps.storage.set(OFFSET_STORAGE_KEY, String(next)).catch(error => {
      // Reported and not retried: the offset in memory is already correct, and
      // what is lost is one cold start's head start, not this run's enforcement.
      deps.onError?.(error);
    });
  };

  return {
    async hydrate(): Promise<void> {
      try {
        const stored = await deps.storage.get(OFFSET_STORAGE_KEY);
        if (stored === null) {
          return;
        }
        // Bounded like a live reading is: a value written by an older build, or
        // hand-edited on disk by a child who went looking, gets no more trust
        // than one off the wire.
        const candidate = Number(stored);
        if (
          !Number.isFinite(candidate) ||
          Math.abs(candidate) >= MAX_REASONABLE_OFFSET_MS
        ) {
          return;
        }
        offset = candidate;
        persisted = candidate;
      } catch (error) {
        deps.onError?.(error);
      }
    },

    offsetMs(): Millis {
      return offset;
    },

    observeServerTimestamp(value: unknown): void {
      const next = offsetFromServerTime(timestampToMillis(value), now());
      if (next === null) {
        return;
      }
      offset = next;
      persist(next);
    },

    isSkewed(): boolean {
      return isClockSkewed(offset);
    },

    takeTamperAlert(): boolean {
      if (!isClockTampered(offset)) {
        return false;
      }
      const at = now();
      if (at - lastAlertAtMs < CLOCK_SKEW_ALERT_DEDUPE_MS) {
        return false;
      }
      lastAlertAtMs = at;
      return true;
    },
  };
}
