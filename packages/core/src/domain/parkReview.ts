/**
 * What a family loses the ability to switch on, once the trial ends.
 *
 * The preventive half of the free tier's write gate (`docs/FEASIBILITY.md`,
 * "Free tier: a parked device goes loosen-only"), listed in that entry as the
 * review screen "so the cliff is never a surprise".
 *
 * ## Why it can only be useful DURING the trial
 *
 * The order on the server is park first, choose second:
 * `scheduled/trialLifecycle` calls `parkExcessDevices` at `trialEndsMs`, and the
 * parent picks a survivor afterwards. By the time `ChooseMonitoredDeviceSheet`
 * opens, every device is already parked and already loosen-only. A review
 * offered there would be a receipt, not a choice.
 *
 * ## And why "what is OFF" is the thing to review
 *
 * The obvious reading — show what will be frozen — is the wrong way round.
 * Loosening is never refused, so a rule set too **strict** during the trial is
 * not a trap: a ten-minute daily limit can be raised afterwards, which is the
 * case that prompted this whole feature. What cannot be undone is the other
 * direction. A protection left **off** at trial end can never be switched on
 * for a parked device, and nothing on any screen says so while there is still
 * time to act.
 *
 * ## The list is derived, not written down
 *
 * Which way is "off" for each key is asked of `isRelaxation` — the same fold
 * the server gate runs — rather than restated here. A protection whose
 * direction changes cannot leave this screen quietly telling a parent they are
 * safe.
 *
 * **The first cut of this file got the question wrong**, and the tests caught
 * it: it asked whether a key could still be *tightened*, which after the park
 * is false for every key on every device, so a family with everything switched
 * on was warned about all of it. The question is whether the value sitting
 * there is already the loosest one.
 */

import type { DeviceControls } from '@kidgate/schema/deviceControls';
import { isRelaxation } from './ruleRelaxation';

/**
 * The restrictions a parent would regret leaving off, and nothing else.
 *
 * **Not the monitoring switches.** Messages, search, video history and location
 * sharing are gated the same way by `ruleRelaxation`, and switching one on for a
 * parked device is refused too — but a parked device reports nothing, so a
 * monitor that could not be switched on there would have observed nothing
 * anyway. Listing them would pad a warning screen with items that cost the
 * family nothing, which is how a warning screen stops being read.
 */
const REVIEWED_PROTECTIONS = [
  'dailyLimitMinutes',
  'scheduleEnabled',
  'webFilterEnabled',
  'webFilterAllowListOnly',
  'appBlockingEnabled',
  'safeSearchEnabled',
  'appInstallApprovalEnabled',
] as const;

export type ReviewedProtection = (typeof REVIEWED_PROTECTIONS)[number];

/**
 * What each protection is called, in keys both consoles already render.
 *
 * **Not one new feature name.** Every one of these sentences exists in all
 * fourteen packs because a screen already says it — naming a feature by
 * inventing a key and translating the English is the failure
 * `.claude/rules/i18n.md` names, and it produces a warning screen that calls
 * Blocked Hours something the Blocked Hours screen does not.
 *
 * Shared rather than per-app for the reason every list in `domain/` is: two
 * parent surfaces naming one protection differently is the drift this package
 * exists to end.
 */
export const PARK_REVIEW_LABEL_KEYS: Record<ReviewedProtection, string> = {
  dailyLimitMinutes: 'deviceDetail.dailyLimit',
  scheduleEnabled: 'deviceDetail.blockedHours',
  webFilterEnabled: 'deviceDetail.webFilter',
  webFilterAllowListOnly: 'webFilter.allowListOnlyLabel',
  appBlockingEnabled: 'deviceDetail.blockedApps',
  safeSearchEnabled: 'webFilter.safeSearchLabel',
  appInstallApprovalEnabled: 'blockedApps.installApprovalTitle',
};

/**
 * The loosest value this key admits — a switch off, or no daily limit at all.
 *
 * **The question is not "could this be tightened later".** After the park
 * nothing can be tightened, so that asks something every key answers the same
 * way. The question is whether the value sitting there **is** the loosest one,
 * because that is the family stuck without the protection rather than merely
 * stuck with a weak setting.
 */
function loosestValue(key: ReviewedProtection): boolean | null {
  return key === 'dailyLimitMinutes' ? null : false;
}

export interface ParkReviewDevice {
  deviceId: string;
  /** What a parent called the device. Null when unnamed. */
  name: string | null;
  controls?: Partial<DeviceControls> | null;
}

export interface ParkReviewRow {
  deviceId: string;
  name: string | null;
  /**
   * Protections that are off now, and could not be switched on once this device
   * is parked. Empty means nothing is at stake on this machine.
   */
  lockedOffKeys: ReviewedProtection[];
}

export interface ParkReview {
  rows: ParkReviewRow[];
  /** Devices with at least one protection that would become unreachable. */
  atRisk: number;
  total: number;
}

/**
 * What each of these devices would lose the ability to gain, if the trial ended
 * now.
 *
 * Every device is passed in, including the one the parent will later keep: this
 * runs **before** the choice exists, and pretending to know which machine
 * survives would be the product answering a question it has not asked yet. The
 * chosen one keeps everything, and that is what the copy says.
 */
export function parkReview(devices: readonly ParkReviewDevice[]): ParkReview {
  const rows = devices.map((device): ParkReviewRow => {
    const held = device.controls as Record<string, unknown> | null | undefined;
    const lockedOffKeys = REVIEWED_PROTECTIONS.filter(key =>
      /*
       * Read it as: starting from the loosest this key goes, would arriving at
       * what the device holds count as a relaxation? Only if the device is
       * already there — every other value is a tightening from the loosest, and
       * the gate says so. One call, and it is the gate's own opinion of each
       * key's direction rather than a second copy of it here.
       */
      isRelaxation(key, loosestValue(key), held?.[key]),
    );
    return {
      deviceId: device.deviceId,
      name: device.name,
      lockedOffKeys: [...lockedOffKeys],
    };
  });

  return {
    rows,
    atRisk: rows.filter(row => row.lockedOffKeys.length > 0).length,
    total: rows.length,
  };
}

/**
 * Whether there is anything worth warning about.
 *
 * A family that has switched everything on before their trial ends must not be
 * shown this screen at all — a warning with nothing in it is the one a parent
 * learns to dismiss before reading, and it would then be dismissed on the day it
 * had something to say.
 */
export function hasParkReviewRisk(review: ParkReview): boolean {
  return review.atRisk > 0;
}
