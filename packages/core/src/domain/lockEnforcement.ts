import type { Device } from '@kidgate/schema/device';

/**
 * "Lock sent" is not "lock in force", and until 2026-08-28 no parent screen
 * could tell them apart.
 *
 * Both parent surfaces rendered `isLocked` — the field the parent themselves
 * wrote — so the tile said **Locked** the instant the write landed, and said
 * exactly the same thing about a television that was switched off, out of
 * range, or running a build with no push handler. That was the second half of
 * a real complaint ("the set kept playing while my phone said locked"), and it
 * survived the fix to the first half: a lock now arrives over FCM in about two
 * seconds, but a push can still fail on a box with no Play Services, where the
 * half-hourly poll is the honest fallback and the delay is real.
 *
 * ## What counts as evidence, per surface
 *
 * A device's own claim is only evidence when it is decided somewhere other
 * than the field the parent set:
 *
 * - **`apps/tv` and `apps/desktop` publish `lockEnforcement`.** Both decide
 *   their lock in a process that keeps running while JavaScript does not —
 *   `KidGateTvPolicyStore` in Kotlin, `policy.rs` in Rust — and read it back.
 * - **`apps/mobile` publishes none, on purpose.** Its overlay is rendered from
 *   `isDeviceLocked`, so a phone writing this field would be saying "I am
 *   locked because I was told to be". The honest signal there is the
 *   heartbeat: a phone that has checked in since the request holds the new
 *   policy and is running the code that draws the overlay.
 * - **`apps/extension` has no lock at all** (`capabilities.lock` is false).
 *   Nothing here special-cases it, because a parent surface should not be
 *   offering the lock button for it in the first place — `supportsLock` in
 *   `domain/controlSupport` is that gate.
 *
 * ## What this is not
 *
 * **Not a defence against a modified child build.** `lockEnforcement` is an
 * unguarded field on the device document, so the device writes its own answer
 * and could write a false one — but a build willing to lie about its lock is a
 * build that can simply not lock, which no field can catch. This exists to
 * stop an *honest* agent's silence being read as success, which is the case
 * that actually happens: a television that is switched off.
 *
 * ## Why `notApplied` is worth its own answer
 *
 * A device that reports `locked: false` **after** the request is not silent —
 * it has the policy and is not enforcing it. On a television that is a failed
 * overlay; on a Mac it is a lock window that could not open. Folding it into
 * "sent" would hide the one case where waiting longer changes nothing.
 */
export type LockEnforcementState =
  /** The parent has not locked this device. */
  | 'off'
  /** Requested, and nothing has confirmed it since. */
  | 'sent'
  /** The device confirmed it, after the request. */
  | 'inForce'
  /** The device answered after the request and said it is **not** locked. */
  | 'notApplied';

export interface LockEnforcementInput {
  isLocked: Device['isLocked'];
  lockRequestedAt?: Device['lockRequestedAt'];
  lockEnforcement?: Device['lockEnforcement'];
  lastActiveAt?: Device['lastActiveAt'];
}

function timeOf(value?: string): number | null {
  if (!value) {
    return null;
  }
  const ms = new Date(value).getTime();
  return Number.isNaN(ms) ? null : ms;
}

/**
 * Whether `answer` is at least as recent as the request.
 *
 * **A missing request time counts as answered.** Every device locked before
 * `lockRequestedAt` existed has none, and reading that as "never confirmed"
 * would put every one of them on "Lock sent" forever — a screen that cries
 * wolf about locks that have been in force for weeks. The comparison exists to
 * catch a *stale* answer, and with no request to be stale against there is
 * nothing to catch.
 */
function answersTheRequest(answer: number | null, requestedAt: number | null): boolean {
  if (answer === null) {
    return false;
  }
  return requestedAt === null || answer >= requestedAt;
}

export function resolveLockEnforcement(
  device: LockEnforcementInput,
): LockEnforcementState {
  if (!device.isLocked) {
    return 'off';
  }

  const requestedAt = timeOf(device.lockRequestedAt);
  const report = device.lockEnforcement;

  if (report && answersTheRequest(timeOf(report.at), requestedAt)) {
    return report.locked ? 'inForce' : 'notApplied';
  }

  /*
   * The fallback for a surface that publishes no report. It is deliberately
   * NOT applied when a report exists but is older than the request: a
   * television that answered before the parent pressed Lock and has beaten
   * since is a television whose beat proves it is alive and whose lock answer
   * proves nothing about the new request. Treating the beat as confirmation
   * there would let a stale answer be laundered into a fresh one.
   */
  if (!report && answersTheRequest(timeOf(device.lastActiveAt), requestedAt)) {
    return 'inForce';
  }

  return 'sent';
}
