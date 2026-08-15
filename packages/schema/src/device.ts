import type { DeviceControls, DeviceLocation } from './deviceControls';
import type { DevicePlace } from './devicePlace';
import type { ScreenTimeStatus } from './permissions';
import type {
  DeviceCapabilities,
  DeviceFormFactor,
  DevicePlatform,
} from './capabilities';

export type DeviceStatus = 'online' | 'offline' | 'locked';
export type ProtectionPermissionStatus =
  'authorized' | 'denied' | 'notDetermined' | 'restricted' | 'unavailable' | 'unknown';

/** All-time tallies from the tallyProtectionCounters Cloud Function. */
export interface DeviceProtectionCounters {
  appBlocked?: number;
  tamper?: number;
}

export interface DeviceProtectionStatus {
  screenTime: ScreenTimeStatus;
  location: ProtectionPermissionStatus;
  notifications: ProtectionPermissionStatus;
  camera?: ProtectionPermissionStatus;
  /** iOS Background App Refresh. Unavailable on Android. */
  backgroundAppRefresh?: ProtectionPermissionStatus;
  /** Android: draw-over-other-apps (lock overlay). */
  overlay?: ProtectionPermissionStatus;
  /** Android: ignoring battery optimizations. */
  batteryOptimization?: ProtectionPermissionStatus;
  /** Android 12+: schedule exact alarms for blocked hours. */
  exactAlarm?: ProtectionPermissionStatus;
  /** Android: Accessibility service for stable lock enforcement. */
  accessibility?: ProtectionPermissionStatus;
  lastCheckedAt?: string;
}

/**
 * The permissions a child device reports on, in the order a reader shows them.
 *
 * A runtime mirror of `DeviceProtectionStatus`'s keys, minus `lastCheckedAt`
 * which is a timestamp rather than a permission. It exists because a reader
 * needs to know *which keys are worth rendering*: the device writes whatever
 * the OS it is running knows about, so a protection field added by a newer app
 * appears in Firestore before anything can label it, and showing a parent a raw
 * `backgroundRefreshV2` is worse than leaving it out.
 *
 * Adding a permission means adding it here and to the interface above. The two
 * were kept in step by hand in `apps/dashboard` before this, which is the
 * mirroring `CLAUDE.md` rule 2 exists to stop.
 */
export const PROTECTION_PERMISSION_KEYS = [
  'screenTime',
  'location',
  'notifications',
  'camera',
  'backgroundAppRefresh',
  'overlay',
  'batteryOptimization',
  'exactAlarm',
  'accessibility',
] as const;

export type ProtectionPermissionKey = (typeof PROTECTION_PERMISSION_KEYS)[number];

export interface Device {
  id: string;
  name: string;
  /**
   * Which person in the family uses this device — `users/{uid}/children/{id}`.
   *
   * **Written by a parent only.** The device re-registers itself on every
   * launch under the family owner's uid, so `firestore.rules` pins this with
   * `childAssignmentSafe()`; without that guard a child phone could move itself
   * into a sibling's row and take the standings with it.
   *
   * Absent on every device paired before children existed, and on any device a
   * parent has not assigned. Absent means "counts for nobody", never "counts
   * for the first child".
   */
  childId?: string;
  role: 'child';
  platform?: DevicePlatform;
  /**
   * Phone or tablet, for the devices whose platform does not say. An iPad and
   * an iPhone are both `ios`; this is what separates them on a parent's screen.
   * Absent on records written before the device first reported it.
   */
  formFactor?: DeviceFormFactor;
  /** Marketing / model name, e.g. "iPhone 16 Pro Max". */
  modelName?: string;
  /** User-assigned name from device Settings, e.g. "Joe's iPhone". */
  deviceLabel?: string;
  osVersion?: string;
  /**
   * The KidGate build this device is running — `version` and `versionCode` from
   * the root `package.json`, as the device itself shipped them.
   *
   * Not derivable from anything else in the document, and absent until a device
   * reports one, so a record written by an older build reads as unknown rather
   * than as out of date.
   *
   * It exists because there is no update channel on the desktop: a parent
   * re-downloads the agent by hand, and until this field there was no way for
   * anyone — the parent's screen, the operator tool — to tell which machines
   * had actually been updated. On a phone the stores answer that; on a Mac
   * nothing did.
   *
   * `appBuild` is the integer a bug report has to carry. It is a string rather
   * than a number because Windows has no build number to report at all (NSIS
   * carries the semver only), and "absent" and "0" must not look alike.
   */
  appVersion?: string;
  appBuild?: string;
  status: DeviceStatus;
  lastActiveAt?: string;
  isLocked: boolean;
  controls?: DeviceControls;
  lastLocation?: DeviceLocation;
  places?: DevicePlace[];
  protectionStatus?: DeviceProtectionStatus;
  /**
   * The device's own capability probe — `ChildDeviceRecord.capabilities`, as a
   * parent screen reads it.
   *
   * Absent means the device publishes no probe, **never** that it cannot do the
   * thing being asked about: only the desktop agent and `apps/tv` write one, and
   * a phone reports permission statuses in `protectionStatus` instead. Anything
   * gating a screen on one field of this needs its own answer for the platforms
   * that stay silent — `domain/webFilterSupport` is that shape.
   */
  capabilities?: DeviceCapabilities;
  parentPinFailedAttempts?: number;
  parentPinLocked?: boolean;
  /** Deduped web-filter blocked visits since install (Android child only). */
  webFilterBlockedCount?: number;
  protectionCounters?: DeviceProtectionCounters;
  /**
   * Child phone battery, 0–100. Undefined until the device reports one —
   * never defaulted to 0, which would read as a dead phone.
   */
  batteryLevel?: number;
  batteryCharging?: boolean;
  /**
   * When the battery reading was taken. Distinct from `lastActiveAt`: the
   * background location upload refreshes battery without the app being open,
   * so the two can legitimately disagree.
   */
  batteryUpdatedAt?: string;
  /**
   * A parent asking this device for its position **now** — the id of that
   * request, cleared by the device once it has answered.
   *
   * Every other parent command reaches a child agent as a *state change*:
   * `isLocked`, the schedule and the daily limit are all fields of this
   * document, so a listener that reads the document sees them for free. "Locate
   * now" is the one genuine command in the product, and on a phone it is
   * delivered as an FCM data message (`location_request`,
   * `functions/http/location.js`). A desktop agent has no push token and never
   * will — see `apps/desktop/CLAUDE.md` on why web push in a WKWebView is not
   * the answer — so before this field the parent's button answered
   * `location/child-no-push-token` and told them to open KidGate on a phone
   * they were not holding.
   *
   * **An id rather than a boolean or a timestamp.** The device clears it by
   * writing `null`, and the id is what lets the agent tell a second request
   * from the snapshot that merely re-delivers the first — a listener fires on
   * every change to this document, and a boolean would be indistinguishable
   * from itself.
   *
   * Written by the Cloud Function (Admin SDK), never by a parent client, and
   * cleared by the child device: it is deliberately **not** under `controls`,
   * whose fields `firestore.rules` pins against child writes with
   * `parentControlsUnchanged()`. A child that clears its own request answers
   * nothing and is the same class of dishonesty as one that never uploads a
   * fix, which the rules already cannot prevent.
   */
  locationRequestId?: string | null;
}
