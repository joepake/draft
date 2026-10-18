/**
 * Online / offline / locked, derived the same way on every surface.
 *
 * Lifted from `apps/mobile/src/utils/device.ts`. Three minutes of silence is
 * the offline threshold everywhere — a dashboard disagreeing with the phone
 * about whether a child's device is online is the kind of wrongness a parent
 * notices immediately and neither app can explain.
 *
 * "Everywhere" now means "at a given cadence". The threshold moved to
 * `./reportCadence`, beside the beat interval it is derived from, because the
 * free tier beats every thirty minutes rather than every one: three minutes of
 * silence stops meaning a stopped device and starts meaning a device that is
 * simply not due yet. Both consoles must still agree with each other — that
 * rule is untouched — but what they agree on is now a function of the plan.
 */

import type { Device } from '@kidgate/schema/device';
import type { TranslationParams } from '@kidgate/i18n/types';
import { supportsLock } from './controlSupport';
import { resolveLockEnforcement } from './lockEnforcement';
import { INACTIVE_THRESHOLD_MS } from './protectionStatus';
import { offlineThresholdForBeat } from './reportCadence';
import {
  REPORT_REQUEST_MISSES_OFFLINE,
  REPORT_REQUEST_UNANSWERED_MS,
  reportRequestMisses,
  reportRequestedAtMs,
} from './reportRequest';

type TranslateFn = (key: string, params?: TranslationParams) => string;

export function getEffectiveDeviceStatus(
  device: Device,
  nowMs: number,
  /**
   * How much silence counts as offline.
   *
   * **Defaults to the window this device's own cadence earns it** — read from
   * `Device.beatIntervalMs`, which the agent writes on the heartbeat it
   * already makes. A free-tier device beats every thirty minutes
   * (`./reportCadence`), so judging it by the live three-minute window paints
   * a device that is working, enforcing and reporting exactly as designed as
   * dead, for every free family, permanently, on both consoles.
   *
   * The parameter stays for a caller that genuinely knows better, but no
   * console should need it: the device is the authority on what it is doing,
   * and a console deriving the answer from the family's plan would be wrong
   * about a lapse latch that has not cleared, a parked device, and an older
   * build. `offlineThresholdForBeat` clamps what the device claims.
   */
  thresholdMs: number = offlineThresholdForBeat(device.beatIntervalMs),
): Device['status'] {
  /*
   * `isLocked` only means something on a device that can lock.
   *
   * A browser extension publishes `lock: false` and its worker has no handler
   * for the field, so a row locked by an older build — or by a parent surface
   * that has not been updated — keeps a `true` nothing will ever act on. Read
   * literally, every one of those devices reports itself Locked forever, and
   * the button that would clear it is now hidden precisely because it does
   * nothing. The probe is what makes the field readable.
   */
  const locked = device.isLocked && supportsLock(device);

  /*
   * Ahead of the clock, and the only place the lock still is. A parked device
   * sends no beat at all (`docs/PRICING.md` §6), so read against `lastActiveAt`
   * it is "offline" within the hour and stays that way — every parked device,
   * on both consoles, painted red for a plan decision. It is not offline: it is
   * enforcing every rule it holds and has been told not to report. The lock
   * wins here for the same reason: silence is a plan decision on this device,
   * so it is not evidence about the lock, and a parent who locked a parked
   * device wants to see that it took.
   */
  if (device.monitoringState === 'parked') {
    return locked ? 'locked' : 'parked';
  }

  if (!device.lastActiveAt) {
    return 'offline';
  }

  const lastActiveMs = new Date(device.lastActiveAt).getTime();
  const age = nowMs - lastActiveMs;
  /*
   * A device this console asked to speak. Since 2026-09-27 an idle device
   * beats on a two-hour floor and answers a request within seconds
   * (`./reportCadence`), so the request the console sent on opening is the
   * evidence that settles the question, in both directions: answered means a
   * stamp newer than the request; **two asks in a row unanswered**, each
   * given `REPORT_REQUEST_UNANSWERED_MS` — long enough for a phone in Doze —
   * is offline whatever cadence the device published; and anything short of
   * that is the benefit of the doubt, because the alternative is a red flash
   * on every open, for every device, until the answer lands.
   *
   * **The count rides on the id** (`reportRequestMisses`, 2026-10-13). An
   * open console re-asks every `CONSOLE_REASK_INTERVAL_MS`, and each write
   * replaced the only request on the document, so the evidence that the last
   * one went unanswered was erased on every re-ask and the doubt re-armed for
   * the whole visit: a Windows PC silent eighteen hours read "Online" on
   * device detail. One miss can be a dropped push; two is a device that is
   * not there, and it stays offline across re-asks until it speaks.
   */
  const requestedAtMs = reportRequestedAtMs(device.reportRequestId);
  const awaitingAnswer = requestedAtMs !== null && requestedAtMs > lastActiveMs;
  const missed = awaitingAnswer
    ? reportRequestMisses(device.reportRequestId) +
      (nowMs - requestedAtMs > REPORT_REQUEST_UNANSWERED_MS ? 1 : 0)
    : 0;
  if (missed >= REPORT_REQUEST_MISSES_OFFLINE) {
    return 'offline';
  }
  /*
   * **The doubt stops where the protection summary says "inactive".** The
   * phone console re-asks every five minutes while the family screen is open,
   * so each new request re-armed it: a Windows PC silent for days showed a
   * green dot inside a red "1 offline over 24 hours" pill on the same card
   * (2026-10-04). Past `INACTIVE_THRESHOLD_MS` the request is no evidence.
   */
  const doubted = awaitingAnswer && age <= INACTIVE_THRESHOLD_MS;
  if (age > thresholdMs && !doubted) {
    return 'offline';
  }

  /*
   * **Behind the clock since 2026-09-15, and it used to be ahead of it.**
   *
   * `isLocked` is what the parent asked for, never what the device did, so a
   * device that had said nothing for a day flipped from Offline to Locked the
   * instant the button was pressed — a chip claiming the thing was reachable
   * while the protection summary on the same screen said it had not checked in
   * for 24 hours (`domain/protectionStatus`, `INACTIVE_THRESHOLD_MS`). One of
   * the two was lying and it was this one: silence is the only evidence either
   * of them has, and `setDeviceLock` writes no beat precisely so that it stays
   * that way (`functions/http/controls.js`).
   *
   * The lock is not lost by moving it down here. `domain/deviceListPriority`
   * reads `resolveLockEnforcement` off the raw fields, so a silent locked
   * device still carries **"Lock sent — waiting for the device"**, which is the
   * true sentence this chip had no way to say.
   */
  if (locked) {
    return 'locked';
  }

  return 'online';
}

/**
 * How recent a person's use must be for a console to say Online — operator's
 * rule, 2026-10-18.
 */
export const IN_USE_WINDOW_MS = 10 * 60_000;

/**
 * Whether the Online dot follows use (`Device.lastUsedAt`) on this device.
 * Every agent reports use — the band, the desktop's input clock, the
 * extension's `chrome.idle` — except the iPhone: Screen Time checkpoints fire
 * only at coarse marks of a day's total and the app uploads only when iOS
 * wakes it, so its dot keeps the check-in rule (operator, 2026-10-18).
 */
export function reportsUse(device: Pick<Device, 'platform'>): boolean {
  return device.platform !== 'ios';
}

/**
 * The tooltip under the "last active" / "last connected" line, for one device
 * or a child's set. "Last connected" means two different things and the note
 * must not mix them: on an iPhone, Online is reachability; anywhere else it is
 * use, and the line only says nobody has used the device lately — a TV with an
 * Offline chip must not be told "Online here means KidGate can reach it"
 * (2026-10-18).
 */
export function lastActivityInfoKey(
  activity: { used: boolean } | null,
  devices: readonly Pick<Device, 'platform'>[],
): string {
  if (activity?.used) {
    return 'deviceDetail.lastActiveInfo';
  }
  return devices.some(device => !reportsUse(device))
    ? 'deviceDetail.lastSeenInfo'
    : 'deviceDetail.lastSeenInfoNoUse';
}

/**
 * The status a console **shows** — the word, the dot, and the "n/m online"
 * count: Online means a person used the device in the last ten minutes
 * (keyboard, mouse, touch, or an app in front such as a video playing).
 *
 * `getEffectiveDeviceStatus` stays the reachability answer and still drives
 * every alert — the 24-hour inactive warning, the Check-In confirmation, the
 * lock — because a laptop nobody is using is not a fault. This only narrows
 * what the chip calls Online. Parked and Locked pass through, and a device
 * that cannot say when it was used (the iPhone) keeps the check-in rule
 * rather than reading Offline forever.
 */
export function getShownDeviceStatus(device: Device, nowMs: number): Device['status'] {
  const status = getChipDeviceStatus(getEffectiveDeviceStatus(device, nowMs), device);
  if (status !== 'online' || !reportsUse(device)) {
    return status;
  }
  const usedMs = device.lastUsedAt ? Date.parse(device.lastUsedAt) : NaN;
  return nowMs - usedMs <= IN_USE_WINDOW_MS ? 'online' : 'offline';
}

/**
 * The "last active" line a console prints: when a person last used the device
 * where the agent can tell, else when it last checked in.
 *
 * The two must never share a word. A check-in is what an idle Mac does the
 * moment a parent opens the app (`onReportRequest`), so printing it as
 * activity told a parent their machine was used two minutes ago while nobody
 * was near it (2026-10-18). `used: false` is the console's cue to say
 * "last connected" instead.
 */
export function lastActivity(source: {
  lastActiveAt?: string | null;
  lastUsedAt?: string | null;
}): { at: string; used: boolean } | null {
  if (source.lastUsedAt) {
    return { at: source.lastUsedAt, used: true };
  }
  if (source.lastActiveAt) {
    return { at: source.lastActiveAt, used: false };
  }
  return null;
}

/**
 * The status a chip may both **word and paint**.
 *
 * `getEffectiveDeviceStatus` answers `'locked'` off `isLocked`, which is what
 * the parent asked for and never what the device did. A phone that beat forty
 * seconds before the parent pressed Lock is inside the live window and has
 * answered nothing, so the chip said **Locked** while the row under it said
 * "Lock sent — waiting for the device" (`domain/deviceListPriority`) and the
 * web dashboard's pill said the same (`dash.statusLockSent`). Two sentences on
 * one screen, one of them untrue — reported on an iPhone, 2026-09-20.
 *
 * **Resolve once, here.** A chip derives three things from the status — the
 * word, the tone and the dot — and correcting only the word inside
 * `getDeviceStatusLabel` left an orange, unpulsing dot labelled "Online" on a
 * device that was simply reachable. Every caller reads this before any of the
 * three, so they agree by construction.
 *
 * The lock is not lost by dropping it: the row reads the raw fields and keeps
 * **"Lock sent — waiting for the device"**, the half that can say *which* lock
 * state this is. What a chip has room for is the honest claim — the device is
 * reachable.
 *
 * **A parked device is the exception, and the lock still wins there.** Its
 * silence is a plan decision (`docs/PRICING.md` §6), so
 * `resolveLockEnforcement` has only its heartbeat fallback to read and would
 * answer `sent` about every parked device forever. `getEffectiveDeviceStatus`
 * makes the same exception for the same reason.
 */
export function getChipDeviceStatus(
  status: Device['status'],
  device: Device,
): Device['status'] {
  if (status !== 'locked' || device.monitoringState === 'parked') {
    return status;
  }
  return resolveLockEnforcement(device) === 'inForce' ? 'locked' : 'online';
}

/**
 * The word a chip puts on one device's status.
 *
 * `device` is optional only for a caller that has already resolved the status
 * through `getChipDeviceStatus`; passing it twice is the same answer.
 */
export function getDeviceStatusLabel(
  status: Device['status'],
  t: TranslateFn,
  device?: Device,
): string {
  const shown = device ? getChipDeviceStatus(status, device) : status;
  if (shown === 'online') {
    return t('shared.online');
  }
  if (shown === 'locked') {
    return t('shared.locked');
  }
  // `family`, not `shared`: the dashboard reads this namespace through the
  // app pack and does not have `shared` on its list.
  if (shown === 'parked') {
    return t('family.devicePausedLabel');
  }
  return t('shared.offline');
}
