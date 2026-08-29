import { childDeviceDoc } from '@kidgate/schema/paths';
import type { DeviceLockEnforcement } from '@kidgate/schema/device';
import type { FirestorePort } from '@kidgate/ports/firestore';

/**
 * A child agent saying whether its lock is **actually applied**.
 *
 * `isLocked` on the device document is what the parent asked for, and both
 * parent surfaces used to render it as though it were what happened — so a
 * television that was switched off, out of range, or running a build with no
 * push handler read "Locked" the instant the write landed.
 * `domain/lockEnforcement` is the reading half of the answer; this is the
 * writing half.
 *
 * **Only worth calling from an agent that decides its lock somewhere other
 * than the field the parent set.** `apps/tv` reads `KidGateTvPolicyStore`
 * through the bridge and `apps/desktop` reads the Rust-owned lock window; both
 * keep deciding while their JavaScript is suspended, so their answer is
 * evidence. A phone whose overlay is rendered from `isDeviceLocked` would be
 * reporting the parent's own instruction back to them, which is the sentence
 * this field exists to stop a screen from believing — `apps/mobile` therefore
 * writes none and the reader falls back to its heartbeat.
 *
 * ## Written only when the answer changes
 *
 * Both agents call this on a thirty-second tick. An ungated write would be a
 * Firestore write per device per half-minute, forever, and — worse than the
 * bill — each one wakes that device's own controls listener, which is the
 * channel every policy change arrives on. The dedupe is in memory and resets
 * with the process, so a restarted agent writes once more than it strictly
 * needs to; that is the cheap direction of the trade.
 */

export interface LockReportDeps {
  db: Pick<FirestorePort, 'updateDoc'>;
  uid: string;
  deviceId: string;
  /** ISO, from the agent's server-corrected clock — never `new Date()` here. */
  nowIso(): string;
  onError?(error: unknown): void;
}

export interface LockReportState {
  locked: boolean;
  reason?: DeviceLockEnforcement['reason'];
}

export interface LockReporter {
  /** True when this call actually wrote. */
  report(state: LockReportState): Promise<boolean>;
}

function fingerprint(state: LockReportState): string {
  return `${state.locked ? '1' : '0'}|${state.reason ?? ''}`;
}

export function createLockReporter(deps: LockReportDeps): LockReporter {
  let lastWritten: string | null = null;

  return {
    async report(state: LockReportState): Promise<boolean> {
      const next = fingerprint(state);
      if (next === lastWritten) {
        return false;
      }

      const payload: DeviceLockEnforcement = {
        locked: state.locked,
        reason: state.reason ?? null,
        at: deps.nowIso(),
      };

      try {
        await deps.db.updateDoc(childDeviceDoc(deps.uid, deps.deviceId), {
          lockEnforcement: payload,
        });
        lastWritten = next;
        return true;
      } catch (error) {
        /*
         * Not stamped, so the next tick retries rather than waiting for the
         * answer to change again — the alive beat releases its own throttle on
         * failure for the same reason. A refused write is also how an unpaired
         * device finds out, and that is the caller's to act on, not this one's.
         */
        deps.onError?.(error);
        return false;
      }
    },
  };
}
