import type { DeviceControls, DeviceLocation } from './deviceControls';
import type { DevicePlace } from './devicePlace';
import type { DeviceMessageMonitoringState } from './messageMonitoringState';
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

/**
 * One day of browsing, summarised onto the device document by the server.
 *
 * Written by `logChildWebActivity` as it accepts a batch, so every surface that
 * reports web activity — the browser extension, the Mac content filter, the
 * Android tunnel, the TV tunnel — fills it without shipping any new code. It
 * exists so a parent list can say how much browsing happened today without
 * reading the `webHistory` subcollection once per device: the device document
 * is already streamed on the family screen, and the per-domain rows cost a read
 * each.
 *
 * `date` is the **child device's local date**, the same key the subcollection
 * is grouped by, and it is what makes this readable: a summary whose date is
 * not today describes a day that has ended, and must be rendered as that day or
 * not at all. Never treat a stale one as "today, zero".
 *
 * Not a replacement for `webFilterBlockedCount`, which is an all-time tally and
 * answers a different question.
 */
export interface DeviceWebToday {
  /** `YYYY-MM-DD`, on the child device's clock. */
  date: string;
  /**
   * Distinct domains recorded for that date — the count of `webHistory` rows,
   * taken after the batch landed, not a running sum of the batches.
   */
  sites: number;
  /** Page loads or lookups reported for that date. */
  visits: number;
  /** Refused lookups for that date. */
  blocked: number;
}

/**
 * A Parent PIN a child device can verify offline.
 *
 * The escape for a locked device that cannot reach the server: an Android TV
 * removed from its family keeps enforcing until JavaScript runs and hears about
 * it, which on that platform can be never. `functions/lib/offlinePinVerifier.js`
 * derives this and holds the reasoning, including why it is **not** the hash
 * `lib/pinHash.js` produces.
 *
 * **Every parameter travels with the value.** Raising the cost later must not
 * strand verifiers already sitting on devices, so a device derives with the
 * `iterations` it was handed rather than a constant it agreed on by memory, and
 * refuses outright on a `version` it does not know — an unlock that verifies
 * wrongly is worse than one that is unavailable.
 */
export interface ParentPinVerifier {
  /** Shape, not cost. Bumped only when the fields below change meaning. */
  version: number;
  /** `'pbkdf2-sha256'`. The only value emitted so far. */
  algorithm: string;
  iterations: number;
  /** base64. Random per PIN, shared by every device in the family. */
  salt: string;
  /** base64, the derived key. */
  hash: string;
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

/**
 * A child agent's own report of whether its lock is actually applied.
 *
 * Only worth writing from a surface that decides its lock somewhere other than
 * the field the parent set — see `Device.lockEnforcement`. `reason` is the
 * agent's own, so a device locked by a schedule while a parent lock is also
 * standing reports the reason it is enforcing rather than the one the parent
 * asked about; both mean the screen is covered.
 *
 * `at` is when the agent last looked, not when the lock began: agents write
 * this only when the answer changes, so a value hours old is a device that has
 * been steadily locked, not a stale one. How old it is allowed to be before a
 * parent screen stops trusting it is the reader's rule, not this shape's.
 */
export interface DeviceLockEnforcement {
  locked: boolean;
  reason?: 'parentLock' | 'schedule' | 'dailyLimit' | null;
  at: string;
}

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
  /** OS user profiles on the device, reporter included. See `ChildDeviceRecord.osUserCount`. */
  osUserCount?: number;
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
  /**
   * The OTA bundle this device has actually loaded — `config/ota`'s `version`,
   * as the running JavaScript was published under.
   *
   * A **second** number, not a refinement of the two above, and the reason is
   * the failure it exists to make visible: a phone can carry the newest native
   * build from the store and still be running a JS bundle from three releases
   * ago, because an OTA is applied on the next launch and a device that never
   * relaunches never applies one. `appVersion` says "up to date" for that phone
   * and means it — about the half of the app the store ships.
   *
   * Absent everywhere there is no OTA channel, which is every platform except
   * the phones: `apps/desktop` cannot have one (`updateCheck.ts` says why),
   * `apps/tv` has none yet, and a browser extension is updated by the store.
   * Absent must therefore never read as "behind".
   */
  otaVersion?: number;
  status: DeviceStatus;
  lastActiveAt?: string;
  isLocked: boolean;
  /**
   * When a parent last changed `isLocked`, server-stamped by `setDeviceLock`.
   *
   * `isLocked` is what the parent asked for. It says nothing about whether the
   * device ever received it, and until this field existed no parent screen
   * could tell the two apart: a television that was switched off, unreachable,
   * or running a build with no push handler read "Locked" the instant the write
   * landed, exactly like one with the overlay up.
   *
   * This is the *request* half of that comparison; `lockEnforcement` below is
   * the device's answer. Absent on every device locked before 2026-08-28, which
   * `domain/lockEnforcement` reads as "compare against nothing" rather than as
   * a lock that was never requested.
   */
  lockRequestedAt?: string;
  /**
   * What the device says about its own lock — the answer half.
   *
   * Written by the agents that can tell independently of the field the parent
   * set: `apps/tv` reads `KidGateTvPolicyStore` through `lockState()`, and
   * `apps/desktop` reads the Rust-owned lock window through `lockVisible()`.
   * Both decide their lock in a process that keeps running while JavaScript
   * does not, so their answer is evidence rather than a restatement.
   *
   * **`apps/mobile` deliberately writes none.** Its overlay is rendered from
   * `isDeviceLocked` — the same field the parent set — so a phone publishing
   * this would be answering "I am locked because I was told to be", which is
   * the sentence this field exists to stop a screen from believing.
   * `domain/lockEnforcement` falls back to the heartbeat for those surfaces.
   *
   * `apps/extension` publishes `lock: false` in its capabilities and has no
   * lock to confirm.
   */
  lockEnforcement?: DeviceLockEnforcement;
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
  /**
   * Whether message monitoring is running on this device right now, per half.
   *
   * A third structure beside `capabilities` and `protectionStatus` because it
   * answers a third question — `messageMonitoringState.ts` sets out which is
   * which and why an opt-in feature must not become a permission-checklist row.
   * Written by the Android agent only; absent everywhere else and on every
   * device paired before the field existed, where it reads as unknown.
   */
  messageMonitoring?: DeviceMessageMonitoringState;
  /**
   * The last controls policy this device actually pushed into its native
   * enforcement layer — the acknowledgement half of the rule write path.
   * `updateChildRules` returns a device *count* and nothing ever reported
   * whether a device applied the result; "enforced on N of M" on the parent
   * screens is a capability statement, not an observation.
   *
   * `fingerprint` covers only what a parent authors (schedule, filter policy,
   * limits, blocking) — never volatile derived state such as "in a window
   * right now" or the lock, which flip on their own and would bill a
   * document write (and a no-op trigger invocation) per flip. Written by the
   * child agent, gated on fingerprint change: at most one write per policy
   * edit. Absent on devices paired before the field, and on agents that do
   * not publish it yet (desktop, TV, extension — `docs/BACKLOG.md`).
   */
  appliedPolicy?: {
    fingerprint: string;
    /** Device wall-clock ms when the policy was applied natively. */
    atMs: number;
  };
  parentPinFailedAttempts?: number;
  parentPinLocked?: boolean;
  /**
   * The Parent PIN in a form this device can check with no network.
   *
   * Written only by `functions/http/parentPin.js` (Admin SDK) and pinned against
   * every client in `firestore.rules` — a child device authenticates under the
   * family owner's uid, so a writable verifier is a child planting a PIN it
   * knows and unlocking itself.
   *
   * Present on every child device of a family that has a PIN; the value is the
   * same for all of them, salt included, because it is one PIN. Absent until the
   * PIN is next set or next verified, which is why the offline unlock is not
   * available to a family the day it ships.
   */
  parentPinVerifier?: ParentPinVerifier;
  /** Deduped web-filter blocked visits since install (Android child only). */
  webFilterBlockedCount?: number;
  /** The server's summary of the last day this device reported browsing. */
  webToday?: DeviceWebToday;
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
