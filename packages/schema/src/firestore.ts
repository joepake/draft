import type {
  DeviceProtectionCounters,
  DeviceProtectionStatus,
  DeviceStatus,
} from './device';
import type { DeviceControls, DeviceLocation } from './deviceControls';
import type { DevicePlace } from './devicePlace';
import type { PlanId } from './plan';
import type { UserSubscription } from './subscription';
import type { AppLanguage } from './language';
import type {
  DeviceCapabilities,
  DeviceFormFactor,
  DevicePlatform,
} from './capabilities';

export interface FirestoreUser {
  id: string;
  email: string;
  name: string;
  parentPinHash?: string | null;
  /** Non-sensitive "a parent PIN exists" flag maintained by setParentPin CF. */
  parentPinSet?: boolean;
  /** Set once when the account first has 1 parent + 1 child device. Never reset. */
  trialStartedAt?: string | null;
  planId?: PlanId;
  subscription?: UserSubscription | null;
  /**
   * Whether siblings see each other's star standings.
   *
   * Absent means on, so a family that already has two children does not have to
   * find a switch to get the feature. It is here rather than nowhere because
   * comparing children against each other is a parenting choice some families
   * want nothing to do with, and the honest answer to that is an off switch
   * rather than an argument.
   */
  leaderboardEnabled?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ParentDeviceRecord {
  deviceId: string;
  name: string;
  platform: DevicePlatform;
  /** Phone or tablet — the half of "which device is this" `platform` omits. */
  formFactor?: DeviceFormFactor;
  modelName?: string;
  deviceLabel?: string;
  osVersion?: string;
  lastActiveAt: string;
  createdAt: string;
  /** Language Cloud Functions render this device's push copy in. */
  locale?: AppLanguage;
  /** Joined via invite code (secondary parent) — cannot remove other parents. */

  // Push token lifecycle. Written by the device on registration and refresh,
  // deleted on sign-out; `pushTokenInvalidAt` is the server's side of it.
  fcmToken?: string;
  fcmTokenUpdatedAt?: string;
  /**
   * When FCM rejected this device's token as unregistered — the app was
   * removed, its data cleared, or the token expired.
   *
   * Server-written, and written together with the removal of `fcmToken`, so
   * the pair reads as "there was a token, it died, here is when". Registering
   * a fresh token clears it again. See `functions/lib/pushTokenHealth.js`.
   */
  pushTokenInvalidAt?: string;
}

export interface ChildDeviceRecord {
  deviceId: string;
  name: string;
  /** Which child uses it. Parent-assigned; see `Device.childId`. */
  childId?: string;
  platform: DevicePlatform;
  /** Phone or tablet — the half of "which device is this" `platform` omits. */
  formFactor?: DeviceFormFactor;
  modelName?: string;
  deviceLabel?: string;
  osVersion?: string;
  status: DeviceStatus;
  isLocked: boolean;
  lastActiveAt: string;
  createdAt: string;
  controls?: DeviceControls;
  lastLocation?: DeviceLocation;
  places?: DevicePlace[];
  protectionStatus?: DeviceProtectionStatus;
  parentPinFailedAttempts?: number;
  parentPinLocked?: boolean;
  /** Deduped web-filter blocked visits since install (Android child only). */
  webFilterBlockedCount?: number;
  protectionCounters?: DeviceProtectionCounters;
  /**
   * The device's own capability probe, written at pairing and re-published when
   * a permission changes.
   *
   * Optional because only the desktop agent publishes one — `apps/mobile`
   * reports permission statuses in `protectionStatus` instead, since a phone
   * has permissions where a Mac has capabilities. **Absent means the device
   * does not publish a probe, never that it cannot do the thing being asked
   * about**; a reader wanting one specific answer needs its own fallback for
   * the platforms that stay silent.
   */
  capabilities?: DeviceCapabilities;
  /** Child phone battery, 0-100. Absent until the device first reports one. */
  batteryLevel?: number;
  batteryCharging?: boolean;
  batteryUpdatedAt?: string;
  /** Language Cloud Functions render this device's push copy in. */
  locale?: AppLanguage;

  // Push token lifecycle — same three fields as ParentDeviceRecord, and see
  // the notes there.
  fcmToken?: string;
  fcmTokenUpdatedAt?: string;
  /**
   * When FCM rejected this device's token as unregistered, `fcmToken` having
   * been removed at the same moment.
   *
   * On a child device this is the closest thing the product has to proof that
   * KidGate was uninstalled — `docs/FEASIBILITY.md` covers why a stale
   * `lastActiveAt` is not. Nothing reads it yet; it is being collected to
   * measure how quickly FCM notices.
   */
  pushTokenInvalidAt?: string;
}
