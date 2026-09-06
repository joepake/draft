import type { DeviceControls, DeviceLocation } from './deviceControls';
import type { DevicePlace } from './devicePlace';
import type { DeviceMessageMonitoringState } from './messageMonitoringState';
import type { ScreenTimeStatus } from './permissions';
import type {
  DeviceCapabilities,
  DeviceFormFactor,
  DevicePlatform,
} from './capabilities';
import type { UsageAppBreakdown } from './usageDay';

/**
 * `parked` is derived, never stored: `getEffectiveDeviceStatus` answers it for
 * a device whose `monitoringState` is `'parked'` (`docs/PRICING.md` §6). It is
 * in this union because that device is neither online nor offline — it is
 * quiet **by design**, still enforcing every rule, and a parent surface that
 * painted it red as "Offline" would be reporting a plan decision as a fault.
 * Nothing writes `status: 'parked'` to Firestore.
 */
export type DeviceStatus = 'online' | 'offline' | 'locked' | 'parked';
export type ProtectionPermissionStatus =
  'authorized' | 'denied' | 'notDetermined' | 'restricted' | 'unavailable' | 'unknown';

/** All-time tallies from the tallyProtectionCounters Cloud Function. */
export interface DeviceProtectionCounters {
  appBlocked?: number;
  tamper?: number;
}

/**
 * Whether this device is being watched, or kept and quiet.
 *
 * A family leaving the trial with more devices than its plan monitors does not
 * lose them: the parent chooses one to keep, and the rest are **parked**
 * (`docs/PRICING.md` §6). A parked device keeps enforcing every rule it holds —
 * the rules are already on it, and the device-document listener still delivers
 * any the parent changes — and stops reporting: no heartbeat, no usage, no
 * location, no counters. **SOS is the one exception, always.**
 *
 * What it buffers instead is uploaded when the family buys premium, and only
 * then. A device merely becoming the free tier's monitored one does not
 * backfill, or swapping the monitored device around the set would drain every
 * buffer for nothing.
 *
 * **Server-written, client-immutable.** Set by the trial-end sweep, by
 * `verifyPurchase` on renewal, and by the choose-a-device endpoint. A child
 * device could otherwise un-park itself, which is the one thing here worth
 * anything to it.
 *
 * **Absent means active**, which is what every device paired before this
 * existed is, and what a family inside its plan's allowance always is.
 */
export type DeviceMonitoringState = 'active' | 'parked';

/**
 * `users/{uid}/private/deviceParking` — the family's parking bookkeeping.
 *
 * **Server-only.** `firestore.rules` keeps `private/` from every client, so
 * nothing here is read by an app; the shape lives in this package because rule
 * 2 says shapes live here, and because `functions/lib/deviceParking.js` is not
 * the only writer any more (`scheduled/dormancyReaper.js`,
 * `http/parentPresence.js`). Every field is optional: the document is created
 * by whichever of them gets there first.
 */
export interface DeviceParkingState {
  /** The device a free family keeps watching. Absent until a parent chooses. */
  monitoredDeviceId?: string;
  /**
   * When the monitored slot was last moved by a parent — the swap cooldown's
   * anchor. Absent after an auto-pick, so the first correction is free.
   */
  changedAtMs?: number;
  /**
   * When a parent console last opened for this family, as
   * `touchParentPresence` stamps it. The dormancy reaper's only input.
   */
  lastParentOpenAtMs?: number;
  /**
   * Set by the reaper on its first visit to a family that predates the stamp,
   * so the thirty days count from rollout rather than parking every free
   * family on the day it shipped.
   */
  presenceSeededAtMs?: number;
  /** The devices the reaper parked, in the order it found them. */
  dormantDeviceIds?: string[];
  dormantSinceMs?: number;
}

/**
 * Counts over the trailing week — the free tier's whole answer to "what
 * happened", and the paid tier's tease.
 *
 * **Count free, detail paid** (`docs/PRICING.md` §4). A free family sees "12
 * sites blocked, 3 new apps this week" and cannot see which; a filter whose
 * effect a parent cannot observe gives them no reason to upgrade, and this is
 * the cheapest possible observation of it — two integers riding a write the
 * device already makes.
 *
 * **Why not the counters that already exist.** `webToday` is written by
 * `logChildWebActivity` as it accepts a batch, and that endpoint is
 * premium-gated: a free family never posts, so it never fills. Neither does it
 * span a week. `webFilterBlockedCount` is a child-written all-time tally, which
 * is the right writer and the wrong number — "blocked 12,483 sites" says
 * nothing a parent can act on, and a week is what makes it a sentence.
 * `protectionCounters` is all-time too, and about tampering.
 *
 * Rolling seven days, not a calendar week: a calendar week reads zero on
 * Monday morning, which is exactly when a parent opens the app.
 *
 * The device keeps the daily ring locally and publishes the sum
 * (`@kidgate/core/domain/weekCounters`). `date` is the last local day folded
 * in, and a console must render the window as of that date or not at all — the
 * same rule `DeviceWebToday` states, for the same reason: a stale count shown
 * as "this week" is a filter that looks like it stopped.
 */
export interface DeviceWeekCounters {
  /** `YYYY-MM-DD`, the last local day included, on the child device's clock. */
  date: string;
  /** Refused web lookups across the window. */
  blockedSites: number;
  /**
   * Apps first seen across the window.
   *
   * Absent where the platform cannot tell — a Mac, a television and a browser
   * extension see no installs — rather than zero, which claims none happened.
   */
  newApps?: number;
}

/**
 * The daily buckets `weekCounters` is summed from — bookkeeping, not a reading.
 *
 * **Server-written, from counts the child sends on its usage report.** The ring
 * could have lived on each device instead, and the schema comment above once
 * said it would; keeping it here is what makes the feature reach five child
 * surfaces without five copies of the same fold. An agent only has to count
 * what it already observes and put two integers on a request it already makes
 * (`reportChildUsage`, the one endpoint a free family still reaches) —
 * `@kidgate/core/domain/weekCounters` does the rest in one place.
 *
 * Seven entries at most, oldest first, keyed by the **child device's** local
 * date. Never read by a parent surface: `weekCounters` above is what a console
 * renders, and this is how that number is kept honest across a device that
 * spends most of a week asleep.
 *
 * **What a device sends is a reading of its day, not a batch of events**, and
 * today's bucket therefore takes the larger of the two rather than their sum.
 * Every counter on every surface is a running per-day total; the fold added
 * them until 2026-09-05, so a phone that refused twelve sites by noon added
 * twelve again on every report for the rest of the day. `foldWeekCounters`
 * carries the correction and why it belongs there rather than in four agents.
 */
export type DeviceWeekCounterBuckets = ReadonlyArray<{
  date: string;
  blockedSites: number;
  newApps: number;
}>;

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

/**
 * What a device answered a parent's "Update now" with.
 *
 * `OtaUpdateService.checkAndApply` returns one more value than this —
 * `'updated'` — and it is missing on purpose: see `Device.otaRequestResult`.
 * The rest map straight across, deliberately, so the value a parent reads is
 * the one the agent's own code path produced rather than a second vocabulary
 * translated into the first.
 */
export type DeviceOtaRequestStatus =
  /** The bundle on the device is already the published one. */
  | 'up_to_date'
  /** OTA is switched off for this build — a debug build, or `enabled: false`. */
  | 'skipped'
  /** The installed app is behind the store build; a bundle cannot fix that. */
  | 'store_update_required'
  /** Refused or threw. The reason is a Crashlytics non-fatal, not this field. */
  | 'failed';

export interface DeviceOtaRequestResult {
  /** Which request this answers — the `otaRequestId` the agent read. */
  requestId: string;
  status: DeviceOtaRequestStatus;
  /** Epoch ms, from the device's own clock. */
  atMs: number;
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
  /**
   * The trailing week's counts, child-written. See `DeviceWeekCounters` for
   * why the three counters beside it could not answer this.
   */
  weekCounters?: DeviceWeekCounters;
  /**
   * Server bookkeeping behind `weekCounters`. Not for a parent surface — see
   * `DeviceWeekCounterBuckets`.
   */
  weekCounterBuckets?: DeviceWeekCounterBuckets;
  protectionCounters?: DeviceProtectionCounters;
  /**
   * The three apps used most today, for a parent on the free tier.
   *
   * **Deliberately not `usageDays`.** `controls.topApps` travels to
   * `reportChildUsage` and is stored on `usageDays/{date}`, which is the
   * premium Usage Reports screen and the document the weekly digest reads — a
   * free family must never have one, or the Sunday job starts spending a model
   * call on them (`docs/PRICING.md` §7). Three labels on the device document
   * cost nothing extra: the write that carries them is the usage report the
   * device already makes.
   *
   * Three, not ten. This is the taste of the paid tier, not a smaller copy of
   * it — the full ranking, the timeline and the history are what a parent
   * upgrades for, and `USAGE_TOP_APPS_LIMIT` is the contract for that list, not
   * for this one.
   *
   * Rewritten whole on each report, and stamped by `usageDate` in `controls`,
   * which the same write sets. A reader must check that date: "today" on a
   * device that last reported on Sunday is Sunday's answer.
   */
  topAppsToday?: UsageAppBreakdown[];
  /**
   * Whether this device is monitored or parked. Absent means active — see
   * `DeviceMonitoringState`.
   */
  monitoringState?: DeviceMonitoringState;
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

  /**
   * "Report now" — set when a parent opens a console, so a free-tier device on
   * a thirty-minute cadence answers while somebody is actually looking.
   *
   * The id is compared against the last one the agent answered, exactly as
   * `locationRequestId` is, and for the same reason: a listener re-delivers
   * the current snapshot on reconnect, and a request that cannot be told from
   * its own echo is one the device performs twice.
   *
   * **Written by a parent client, not by a Cloud Function**, which is the one
   * way it differs from the field above. There is nothing here for the Admin
   * SDK to decide: the console already knows the plan and holds the device
   * document it is about to write, and the alternative — an HTTPS function per
   * app open — is a Cloud Run service, a deploy and an invocation to carry a
   * value the client already has. The phone half of the delivery still needs a
   * server, and it already has one: `notifyChildDeviceCommand` fires on this
   * write and turns it into a silent wake for `ios` and `android`
   * (`@kidgate/core/domain/reportRequest` decides which platforms need that).
   *
   * Not under `controls` — it is a request, not a rule, and `controls` is
   * pinned against child writes by `parentControlsUnchanged()`.
   */
  reportRequestId?: string | null;

  /**
   * "Update now" — a parent asking this device to pick up the newest JS bundle
   * rather than waiting for its next launch.
   *
   * Compared against the last id the agent answered, exactly as the two fields
   * above are, and written by a parent client for the same reason
   * `reportRequestId` is: the console already holds this document and there is
   * nothing here for a server to decide. The phone half of the delivery is
   * `notifyChildDeviceCommand`, which turns the write into a silent
   * `ota_request` wake — `@kidgate/core/domain/otaRequest` decides which
   * platforms may be asked at all and which need that push.
   *
   * **It names no bundle.** No URL, no version, no hash: the device reads
   * `config/ota` exactly as it does unprompted, so the allow-listed Storage
   * host and the published sha256 still stand between this field and the code
   * that runs. A request that could name a download would make a compromised
   * parent account into arbitrary code on a child's phone.
   *
   * Not under `controls` — a request is not a rule.
   */
  otaRequestId?: string | null;

  /**
   * What the device did about the request above. Written by the child agent.
   *
   * It exists because the failure is otherwise invisible: every refusal in
   * `OtaUpdateService` is a Crashlytics non-fatal, which nobody but an operator
   * can read, so a parent who pressed the button would watch a spinner forever
   * on a device whose install cannot succeed.
   *
   * **`updated` is deliberately not one of the values.** That outcome ends in a
   * restart — on Android through `ProcessPhoenix`, which exits the process hard
   * enough that a `SharedPreferences.apply()` can die with it
   * (`docs/SETUP_GOLIVE.md`, H2a) — so a write racing it is a write that
   * sometimes lands. `otaVersion` moving is the durable signal for success, and
   * both parent consoles already render it.
   */
  otaRequestResult?: DeviceOtaRequestResult | null;

  /**
   * How often this device is currently beating, in milliseconds — what it is
   * doing, not what its plan entitles it to.
   *
   * Written on the heartbeat it already makes, so it costs no write of its
   * own. It exists because the parent surfaces must judge silence against the
   * cadence the device actually keeps: a free-tier device speaks every thirty
   * minutes (`@kidgate/core/domain/reportCadence`), and against the live
   * three-minute window every one of them reads permanently offline.
   *
   * **The device answers this and no console works it out.** The dashboard
   * cannot — it has no `TRIAL_DAYS` and so cannot tell a running trial from a
   * lapsed one — and even the phone, which can read its own subscription,
   * would be wrong about a device whose lapse latch has not cleared yet, about
   * a parked device, and about a device still on an older build.
   *
   * **Absent means the live cadence**, which is what an older build keeps and
   * what `offlineThresholdForBeat` returns for it. Consumers clamp rather than
   * trust: the writer is the child device, and one that could name its own
   * offline window could name one it never misses.
   */
  beatIntervalMs?: number;
}
