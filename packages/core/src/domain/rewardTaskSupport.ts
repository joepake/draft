/**
 * Whether a reward task assigned to this device could ever be claimed on it.
 *
 * No `DeviceCapabilities` field carries this and none should: claiming rides
 * `POST /claimRewardTask` behind a live Firestore listener that a child screen
 * renders, which is a piece of an app rather than a native permission a probe
 * reports. So this is a platform list — plus the one thing a list cannot say.
 */

import type { DeviceCapabilities, DevicePlatform } from '@kidgate/schema/capabilities';

import { isBrowserOnlySurface } from './deviceSurface';

export interface RewardTaskSupportInput {
  /** `Device.platform`. Absent on records written before the field existed. */
  platform?: DevicePlatform | null;
  capabilities?: { webFilter?: DeviceCapabilities['webFilter'] } | null;
}

/**
 * The child agents that have a reward-task screen at all.
 *
 * `apps/tv` has none: no `RewardTaskRepository`, no claim listener, no screen.
 * A parent granting minutes to a television that can never present them to
 * claim is a reward nobody receives.
 */
export const REWARD_TASK_PLATFORMS: DevicePlatform[] = [
  'ios',
  'android',
  'macos',
  'windows',
];

/**
 * A browser is excluded before the list is consulted, and that order is the
 * point: `apps/extension` on a Mac reports `platform: 'macos'`, so the list on
 * its own says yes for a popup that has no reward screen, no claim listener and
 * nothing to spend a reward on — the currency is screen time, which this
 * surface neither measures nor grants.
 */
export function supportsRewardTasks(device: RewardTaskSupportInput): boolean {
  if (isBrowserOnlySurface(device)) {
    return false;
  }
  return REWARD_TASK_PLATFORMS.includes(device.platform ?? 'ios');
}
