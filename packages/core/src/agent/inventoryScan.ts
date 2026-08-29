/**
 * A child agent publishing what is installed on it.
 *
 * Here rather than in an app because **three agents can do it and all three
 * already had the hard half written**: `apps/desktop`'s `installedApps()` is a
 * Tauri command behind `NativeHost`, `apps/tv`'s is a `@ReactMethod` over
 * `LEANBACK_LAUNCHER`, and `apps/mobile`'s Android bridge gained the same call
 * with this change. Written inside any one of them it would be a copy waiting
 * to drift, which `docs/DESKTOP_ENFORCEMENT.md` lists seven prior examples of.
 *
 * ## Why this exists at all
 *
 * Both existing app signals are change-triggered — `anomaly.newApp` diffs
 * today's `topApps` against a 21-day baseline, and the `app_installed` feed
 * watches transitions — so an app already present when the family paired is
 * invisible to both, permanently. `docs/FEASIBILITY.md`, "The app inventory".
 *
 * ## Two throttles, and each covers what the other cannot
 *
 * **The stored `scannedAt` is the real gate.** An agent restarting — which on a
 * phone is most days, and on a Mac is every lid — would re-scan and re-write on
 * every launch if the interval lived only in memory. Same argument as
 * `shouldReportUsage`'s: the throttle has to survive a process that does not.
 *
 * **A per-process memory of that value is what stops the read.** `apps/tv`
 * calls this on its thirty-second tick and `apps/mobile` on every foreground,
 * so a version that fetched the document before deciding it was throttled cost
 * ~2,880 reads a day per television to learn the same "not yet". See
 * `lastScannedAt` below.
 *
 * Steady state is therefore **zero** reads and zero writes, once a day rising
 * to two reads and one write.
 *
 * ## What it must never become
 *
 * **Not a notification.** `apps/desktop` has run this exact scan since it was
 * written and discarded the answer, because "a parent gets forty notifications
 * for turning the feature on" — true, and a fact about the activity feed rather
 * than about the data. Nothing here writes an activity row, and the day
 * something wants to push about a newly-found app it must gate on
 * `report.isFirstScan` being false, or it will announce a phone's entire
 * contents the first time it runs.
 */

import {
  INVENTORY_RESCAN_INTERVAL_MS,
  type AppInventory,
} from '@kidgate/schema/appInventory';
import type { Millis } from '@kidgate/schema/primitives';
import type { FirestorePort } from '@kidgate/ports/firestore';
import { getAppInventory, publishAppInventory } from '../repositories/appInventory';

/** What an agent's own enumeration returns, in the shape both already use. */
export interface ScannedApp {
  id: string;
  label: string;
}

export interface InventoryScanDeps {
  db: FirestorePort;
  /** The family owner's uid — a child device signs in under it. */
  uid: string;
  deviceId: string;
  /**
   * The agent's own enumeration.
   *
   * Returning an empty list is treated as a failed scan and publishes nothing,
   * which is deliberate: on every platform that can do this at all, a device
   * with genuinely zero launchable apps does not exist, so an empty answer is
   * a refused permission or a query that threw. Publishing it would erase a
   * good inventory and tell the parent their child's phone is empty.
   */
  scan: () => Promise<readonly ScannedApp[]>;
  /** Injected so a test need not wait a day. Defaults to the system clock. */
  now?: (() => Millis) | undefined;
  /** Reported, never thrown — a failed scan must not cost the tick. */
  onError?: ((error: unknown) => void) | undefined;
}

export interface InventoryScanResult {
  /** Absent when the scan was skipped or refused. */
  published?: AppInventory;
  reason: 'published' | 'throttled' | 'empty' | 'failed';
}

/**
 * The last `scannedAt` this process knows about, per device.
 *
 * **Two throttles, and both are load-bearing.** The stored `scannedAt` is the
 * durable one and survives a restart; this is what stops the *read* that
 * discovers it. Without it `apps/tv` — which calls this on its thirty-second
 * tick, like the beat and the usage reporter beside it — would fetch one
 * document every thirty seconds forever, ~2,880 reads a day per television, to
 * learn the same "not yet" 2,879 times. `apps/mobile` scans on every
 * foreground and had the same shape.
 *
 * Exact rather than approximate: it caches the value the last read returned, so
 * it can only ever agree with the document. The device is the document's only
 * writer, so it cannot go stale underneath this — and an empty cache after a
 * restart costs exactly one read, which is the case it must not get wrong.
 */
const lastScannedAt = new Map<string, number>();

/** Exposed for tests, which must not inherit another test's answers. */
export function clearInventoryScanCache(): void {
  lastScannedAt.clear();
}

/**
 * Scan and publish if due.
 *
 * Safe to call on every tick — the throttle is the point of the function, not
 * something the caller arranges, and a call inside the window costs no
 * Firestore read at all. Never throws.
 */
export async function runInventoryScan(
  deps: InventoryScanDeps,
): Promise<InventoryScanResult> {
  const { db, uid, deviceId, scan } = deps;
  const now = deps.now ?? (() => Date.now());
  const key = `${uid}:${deviceId}`;

  try {
    const remembered = lastScannedAt.get(key);
    if (remembered !== undefined && now() - remembered < INVENTORY_RESCAN_INTERVAL_MS) {
      return { reason: 'throttled' };
    }

    const stored = await getAppInventory(db, uid, deviceId);
    const at = now();
    if (stored) {
      lastScannedAt.set(key, stored.scannedAt);
      if (at - stored.scannedAt < INVENTORY_RESCAN_INTERVAL_MS) {
        return { reason: 'throttled' };
      }
    }

    const scanned = await scan();
    if (scanned.length === 0) {
      // A genuine 0-app scan doesn't happen on any platform this runs on, so
      // this is always a refused permission or a rejected native call — but
      // until now it was indistinguishable from "not scanned yet" on every
      // screen that reads the published document. Route it through the same
      // diagnostic channel a thrown scan uses instead of staying silent.
      deps.onError?.(new Error('inventory scan resolved with 0 apps'));
      return { reason: 'empty' };
    }

    // `publishAppInventory` re-reads to carry `firstSeenAt` forward. One extra
    // document a day against the alternative — threading `stored` through and
    // having two functions that both believe they know the previous list.
    const published = await publishAppInventory(db, uid, deviceId, scanned, at);
    // Set from what was written rather than from `at`, so the memory throttle
    // and the document can never disagree about when the last scan happened.
    lastScannedAt.set(key, published.scannedAt);
    return { published, reason: 'published' };
  } catch (error) {
    deps.onError?.(error);
    return { reason: 'failed' };
  }
}
