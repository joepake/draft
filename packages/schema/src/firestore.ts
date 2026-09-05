import type {
  DeviceMonitoringState,
  DeviceProtectionCounters,
  DeviceProtectionStatus,
  DeviceStatus,
  DeviceWebToday,
  DeviceWeekCounters,
} from './device';
import type { UsageAppBreakdown } from './usageDay';
import type { DeviceControls, DeviceLocation } from './deviceControls';
import type { DeviceMessageMonitoringState } from './messageMonitoringState';
import type { DevicePlace } from './devicePlace';
import type { MessageAiConsent } from './messageAiConsent';
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
   * The moment this family first paid, ever. **Written once and never
   * overwritten**, including by a renewal, a re-verify, a store notification or
   * a re-subscribe after a lapse.
   *
   * `subscription.updatedAt` cannot answer "how long did they take to buy":
   * every renewal, RTDN sync and expiry sweep rewrites it
   * (`functions/lib/subscriptions.js`), so a year-old customer looks like they
   * converted last Tuesday. This field exists because that question is
   * unanswerable after the fact — a family that converts before it is deployed
   * is permanently missing from the conversion series, which is why the
   * backfill script guesses (and marks its guesses) rather than leaving them
   * blank. `docs/ADMIN_REPORTING.md`.
   */
  firstPurchasedAt?: string | null;
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
  /**
   * The family screen-time board (`screenTimeBoard.ts`). Unlike the star
   * chart, **absent means off**: minutes compare a parent against a child, and
   * a family should ask for that rather than find it.
   */
  screenTimeBoardEnabled?: boolean;
  /**
   * Consent to the runtime AI message-analysis tier, written to this document
   * by `functions/http/messageAiConsent.js` and read from it by
   * `apps/mobile/src/services/messageAiConsent.ts`.
   *
   * It was declared only on `User` in `user.ts` — the app-facing shape — so the
   * document type omitted a field the document has always carried.
   */
  messageAiConsent?: MessageAiConsent;
  createdAt: string;
  updatedAt: string;
}

/**
 * Every field name a `users/{uid}` document carries, as a runtime list.
 *
 * It exists for readers that cannot see the type. `functions/` is outside the
 * yarn workspace and cannot import `@kidgate/schema`
 * (`functions/CLAUDE.md`), so a handler there reads `data.whatever` off an
 * untyped object: a misspelt or invented field name compiles, lints, tests
 * green, and returns `undefined` forever.
 *
 * That is not hypothetical. `functions/admin/handlers.js` read `plan`,
 * `trialEndsAt` and `deletionState` — none of which any document has ever had.
 * The operator's family-detail screen therefore showed "no plan" for a paying
 * family and no deletion for a family with a purge scheduled, from the day it
 * shipped, with nothing anywhere failing.
 * `__tests__/operatorUserFieldParity.test.ts` reads those handlers and checks
 * every field they take off a user document against this list.
 *
 * **Derive from this; never hand-copy it.** The assertions below make the list
 * and the interface fail to compile the moment they disagree, in either
 * direction — the same guard `ACTIVITY_TYPES` carries in `activity.ts`, added
 * there after a missing entry silently broke a screen.
 */
export const FIRESTORE_USER_FIELDS = [
  'id',
  'email',
  'name',
  'parentPinHash',
  'parentPinSet',
  'trialStartedAt',
  'planId',
  'subscription',
  'firstPurchasedAt',
  'leaderboardEnabled',
  'screenTimeBoardEnabled',
  'messageAiConsent',
  'createdAt',
  'updatedAt',
] as const satisfies ReadonlyArray<keyof FirestoreUser>;

/** Empty when the list is complete. A member here is a compile error below. */
type MissingFirestoreUserField = Exclude<
  keyof FirestoreUser,
  (typeof FIRESTORE_USER_FIELDS)[number]
>;
const _firestoreUserFieldsAreExhaustive: MissingFirestoreUserField extends never
  ? true
  : never = true;
void _firestoreUserFieldsAreExhaustive;

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
  /**
   * Where the device says it is — ISO 3166-1 alpha-2, uppercase.
   *
   * The **region the OS is configured for**, not a geolocation and not derived
   * from an IP: a family's location already lives behind a stated reason and an
   * audit entry, and this must never become a second path to it. Absent on any
   * platform that will not say (see `deviceRegion`), which is not the same as
   * a device outside every country.
   */
  country?: string;
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
  /**
   * How many OS user profiles the device carries, the reporting one included.
   *
   * `1` is the ordinary answer. More than one matters on Android TV: a box
   * with a child profile can misdirect the usage-access and overlay Settings
   * toggles into the profile's app-ops table (proven on a Sony BRAVIA,
   * `docs/FEASIBILITY.md` "K1/K2 reopened"), so this beside a `denied`
   * `protectionStatus` row is the operator's signal that the family is stuck
   * on a Settings defect rather than ignoring setup. Absent until a device
   * reports one — only `apps/tv` does today.
   */
  osUserCount?: number;
  /**
   * The KidGate build running on this device, written by every child agent
   * through `DeviceIdentity` — see `Device` in `./device` for what each field
   * means and why `appBuild` is a string and `otaVersion` a separate number.
   *
   * They were on `Device` and missing here, which is exactly the gap that let
   * the desktop agent write them through a raw `updateDoc` rather than through
   * registration: the record type could not describe what the agent was
   * storing.
   */
  appVersion?: string;
  appBuild?: string;
  otaVersion?: number;
  status: DeviceStatus;
  isLocked: boolean;
  lastActiveAt: string;
  /**
   * How often this device is currently beating — what `lastActiveAt` above is
   * to be judged against. See `Device.beatIntervalMs`; absent is the live
   * cadence.
   */
  beatIntervalMs?: number;
  /** The last "report now" a parent console sent. See `Device.reportRequestId`. */
  reportRequestId?: string;
  /** Monitored or parked. Absent means active — see `DeviceMonitoringState`. */
  monitoringState?: DeviceMonitoringState;
  /** The trailing week's counts, child-written. See `DeviceWeekCounters`. */
  weekCounters?: DeviceWeekCounters;
  /** Today's three most-used apps, for the free tier. See `Device.topAppsToday`. */
  topAppsToday?: UsageAppBreakdown[];
  createdAt: string;
  controls?: DeviceControls;
  lastLocation?: DeviceLocation;
  places?: DevicePlace[];
  protectionStatus?: DeviceProtectionStatus;
  /**
   * Whether message scanning is actually running on this device, as the
   * device itself reports it (`@kidgate/schema/messageMonitoringState`).
   * Missing here until now — `toDeviceView` had nothing to spread, so every
   * parent screen read `device.messageMonitoring` as permanently undefined.
   */
  messageMonitoring?: DeviceMessageMonitoringState;
  parentPinFailedAttempts?: number;
  parentPinLocked?: boolean;
  /** Deduped web-filter blocked visits since install (Android child only). */
  webFilterBlockedCount?: number;
  /** Written by `logChildWebActivity`, never by a client. */
  webToday?: DeviceWebToday;
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
  /** OS region, uppercase alpha-2. Same rules as `ParentDeviceRecord.country`. */
  country?: string;

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
