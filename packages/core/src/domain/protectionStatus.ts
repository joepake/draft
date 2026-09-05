/**
 * Whether a child device's protections actually hold, as i18n keys.
 *
 * Lifted from `apps/mobile/src/utils/protectionStatus.ts`, which rendered
 * sentences with the app's stateful `t()`. The decisions — what counts as
 * inactive, which permission states are a problem, when a lock will not bite —
 * are the same questions the dashboard answers about the same device document,
 * so they live here and every surface renders the keys in its own language.
 *
 * Time arrives as `nowMs` rather than being read from the device clock, per
 * the same rule as everything else in `domain/`: staleness is compared against
 * wall time and a test has to be able to say what time it is.
 */

import type { Device, ProtectionPermissionStatus } from '@kidgate/schema/device';

import { isAndroidLike } from './platformFamily';
import { pendingConsentCopy } from './deviceConsents';
import { webFilterBlockerKey } from './webFilterSupport';

export const INACTIVE_THRESHOLD_MS = 24 * 60 * 60 * 1000;

export type ProtectionLevel = 'protected' | 'warning' | 'inactive';

export interface ProtectionIssueKeys {
  key: string;
  labelKey: string;
  detailKey: string;
  /**
   * `detailKey` carries a `{{platform}}` placeholder the renderer must fill.
   *
   * The only such copy so far is the web-filter blocker, which is worded per
   * device — "Waiting for approval on Apple TV" — and the platform's display
   * name is an app-side string this package cannot build. A flag rather than
   * the value, so a renderer that forgets it fails visibly (`{{platform}}` on
   * screen) instead of quietly dropping the device from the sentence.
   */
  needsPlatformName?: boolean;
  /**
   * How to grant it, in order, as i18n keys — empty when nobody has written it.
   *
   * **The summary named every problem and no fix.** A parent read "Usage
   * access" on a device across the room and had to work out the rest
   * themselves; the steps existed all along, in the packs the child's own setup
   * screens render. This carries them to the other side of the wire rather than
   * writing a second set.
   *
   * A list because a grant is a walk through Settings, not a sentence. Absent
   * is honest and the renderer must handle it: iOS Screen Time, location and
   * the television's filter consent have no written steps yet, and inventing
   * them here would be fourteen locales of guesswork about somebody else's
   * Settings app.
   */
  hintKeys?: string[];
  /**
   * Whether this issue is why the device's badge turns amber. Absent means yes.
   *
   * Every issue was a warning until consents that are not protections started
   * arriving here. A refused camera on a Mac costs the photo on an SOS and
   * costs nothing else: blocked hours still bite, the daily limit still bites,
   * the filter still filters. Rendering "Needs attention" over a machine that
   * is enforcing every rule its parent set would spend the one badge this
   * product has on something it does not mean — and a badge that is amber on
   * healthy devices is a badge parents stop reading, which is the failure that
   * matters here rather than the missed photo.
   *
   * `'info'` issues are still **listed**. They appear in the hero's chips and
   * in the issues sheet exactly as the others do, because being invisible is
   * the state this field exists to end. Only the level ignores them.
   */
  severity?: 'warning' | 'info';
}

export interface ProtectionSummaryKeys {
  level: ProtectionLevel;
  titleKey: string;
  subtitleKey: string;
  issues: ProtectionIssueKeys[];
  inactive: boolean;
}

/**
 * Only the phone apps sync a permission checklist into `protectionStatus`.
 * The desktop agent has no OS grants to chase — its lock is a fullscreen
 * window and its usage is agent-measured — so an absent `protectionStatus`
 * there is the normal state, not a setup problem. Treating it as one put a
 * permanent "Needs attention" on every Mac and PC and made `canEnforceLock`
 * refuse a lock that needs no permission at all.
 *
 * Legacy documents without a platform are phones, so `undefined` stays on
 * the checklist side.
 */
function reportsProtectionChecklist(platform: Device['platform']): boolean {
  return platform !== 'macos' && platform !== 'windows';
}

function isStale(nowMs: number, timestamp?: string): boolean {
  if (!timestamp) {
    return true;
  }

  const time = new Date(timestamp).getTime();
  return Number.isNaN(time) || nowMs - time > INACTIVE_THRESHOLD_MS;
}

/**
 * The child app has not checked in for a day (or never has).
 *
 * Anything that depends on the child device acting on a push — check-in,
 * locate — should say so up front rather than reporting success for a request
 * nobody is there to receive.
 */
export function isDeviceInactive(device: Device, nowMs: number): boolean {
  return isStale(nowMs, device.lastActiveAt);
}

function permissionIssue(
  key: string,
  labelKey: string,
  status: ProtectionPermissionStatus | undefined,
): ProtectionIssueKeys | null {
  if (!status || status === 'authorized' || status === 'unavailable') {
    return null;
  }

  switch (status) {
    case 'denied':
      return { key, labelKey, detailKey: 'protection.permissionOffOnChildDevice' };
    case 'notDetermined':
      return { key, labelKey, detailKey: 'protection.permissionNotSetUpYet' };
    case 'restricted':
      return { key, labelKey, detailKey: 'protection.permissionRestrictedByIos' };
    case 'unknown':
      return { key, labelKey, detailKey: 'protection.permissionStatusUnknown' };
    default:
      return null;
  }
}

export function getProtectionSummaryKeys(
  device: Device,
  nowMs: number,
): ProtectionSummaryKeys {
  const protection = device.protectionStatus;
  const inactive = isStale(nowMs, device.lastActiveAt);
  const issues: ProtectionIssueKeys[] = [];

  if (inactive) {
    issues.push({
      key: 'inactive',
      labelKey: 'protection.kidGateOffline',
      detailKey: 'protection.childAppMayBeOffline',
    });
  }

  if (!reportsProtectionChecklist(device.platform)) {
    // Desktop: no checklist to wait for. Health is `lastActiveAt` above and
    // the agent's own Settings screen.
  } else if (!protection) {
    issues.push({
      key: 'missing-status',
      labelKey: 'protection.statusNotUpdatedYet',
      detailKey: 'protection.openKidGateOnChildPhone',
    });
  } else {
    const isAndroid = isAndroidLike(device.platform);
    const screenTimeUnavailable = protection.screenTime === 'unavailable';

    if (!screenTimeUnavailable && protection.screenTime !== 'approved') {
      issues.push({
        key: 'screen-time',
        labelKey: isAndroid
          ? 'protection.usageAccessPermission'
          : 'protection.screenTimePermission',
        detailKey:
          protection.screenTime === 'denied'
            ? isAndroid
              ? 'protection.usageAccessOff'
              : 'protection.screenTimeAccessOff'
            : isAndroid
              ? 'protection.usageAccessSetupIncomplete'
              : 'protection.screenTimeSetupIncomplete',
        /*
         * The three steps the child's own Usage-access banner already renders,
         * reused rather than rewritten. **Android side only**: iOS Screen Time
         * is a different flow with no written steps, and a list that said
         * "Find KidGate and turn on Usage access" to an iPhone owner would be
         * worse than the sentence above it.
         */
        ...(isAndroid
          ? {
              hintKeys: [
                'screenTime.usageAccessStepOpenSettings',
                'screenTime.usageAccessStepFindKidGate',
                'screenTime.usageAccessStepReturn',
              ],
            }
          : {}),
      });
    }

    const location = permissionIssue(
      'location',
      'protection.locationPermission',
      protection.location,
    );
    if (location) {
      issues.push(location);
    }

    const notifications = permissionIssue(
      'notifications',
      'protection.notificationsPermission',
      protection.notifications,
    );
    if (notifications) {
      issues.push({
        ...notifications,
        hintKeys: ['permissions.notificationsOpenSettings'],
      });
    }

    if (isAndroid) {
      const overlay = permissionIssue(
        'overlay',
        'protection.overlayPermission',
        protection.overlay,
      );
      if (overlay) {
        issues.push({
          ...overlay,
          detailKey: 'protection.overlayOffForLock',
          // The same hints the child device's own permission list renders —
          // `apps/mobile`'s child HomeScreen has shown these for as long as the
          // grants have existed, to the one person who is not the parent.
          hintKeys: [
            'permissions.overlayStepAllow',
            'screenTime.usageAccessStepReturn',
          ],
        });
      }

      const battery = permissionIssue(
        'battery',
        'protection.batteryOptimizationPermission',
        protection.batteryOptimization,
      );
      if (battery) {
        issues.push({
          ...battery,
          detailKey: 'protection.batteryOptimizationOff',
          hintKeys: ['permissions.batteryOptimizationHint'],
        });
      }

      const exactAlarm = permissionIssue(
        'exact-alarm',
        'protection.exactAlarmPermission',
        protection.exactAlarm,
      );
      if (exactAlarm) {
        issues.push({
          ...exactAlarm,
          detailKey: 'protection.exactAlarmOff',
          hintKeys: ['permissions.exactAlarmHint'],
        });
      }

      const accessibility = permissionIssue(
        'accessibility',
        'protection.accessibilityPermission',
        protection.accessibility,
      );
      if (accessibility) {
        issues.push({
          ...accessibility,
          detailKey: 'protection.accessibilityOff',
          /*
           * Four lines rather than the one this used to carry, and the fourth
           * is the warning.
           *
           * This is the grant with the most frightening dialog in front of it —
           * Android says KidGate "can observe your actions" in the largest type
           * on the screen — and a parent walking to the child's phone with one
           * sentence of instruction meets that cold. The child's own wizard
           * says what it means before the button; a parent reading the same
           * issue on a different device gets the same sentence.
           */
          hintKeys: [
            'permissions.accessibilityStepOpenSettings',
            'permissions.accessibilityStepFindKidGate',
            'permissions.accessibilityStepTurnOn',
            'permissions.accessibilityWarningNote',
          ],
        });
      }
    } else {
      const backgroundAppRefresh = permissionIssue(
        'background-app-refresh',
        'protection.backgroundUpdates',
        protection.backgroundAppRefresh,
      );
      if (backgroundAppRefresh) {
        issues.push({
          ...backgroundAppRefresh,
          detailKey:
            protection.backgroundAppRefresh === 'restricted'
              ? 'protection.backgroundUpdatesRestricted'
              : 'protection.turnOnBackgroundUpdatesInSettings',
          /*
           * Two hints when Low Power Mode is the cause, because that one is not
           * findable: the Background App Refresh toggle is dimmed and nothing
           * on that screen says why.
           */
          hintKeys:
            protection.backgroundAppRefresh === 'restricted'
              ? [
                  'permissions.backgroundRefreshLowPowerHint',
                  'permissions.backgroundRefreshHint',
                ]
              : ['permissions.backgroundRefreshHint'],
        });
      }
    }
  }

  /*
   * A grant the device is still waiting for, that no checklist row covers.
   *
   * **The gap this closes, reported from a real living room:** a Sony BRAVIA
   * with three of its four grants made — usage access, overlay, accessibility —
   * and the VPN consent behind web filtering never accepted. Every row the
   * checklist knows about was green, so the hero said "Protected. KidGate's
   * protections are working well." on a television filtering nothing.
   *
   * The consent is deliberately absent from `DeviceProtectionStatus`: the
   * schema has no VPN row, and the device reports it as
   * `DeviceCapabilities.webFilterBlocker` instead — see `TvPermissionFacts`.
   * That was the right place to put the fact and the wrong place to leave it,
   * because this summary is what a parent reads to decide the device is set up.
   *
   * Outside the checklist branch on purpose: it is a capability the device
   * publishes, so it applies to a Mac awaiting extension approval exactly as it
   * does to a television awaiting a consent dialog, and neither of those
   * platforms answers a permission checklist at all.
   */
  const filterBlockerKey = webFilterBlockerKey(device);
  if (filterBlockerKey) {
    issues.push({
      key: 'web-filter-blocked',
      labelKey: 'deviceDetail.webFilter',
      detailKey: filterBlockerKey,
      needsPlatformName: true,
      /*
       * The Mac's approval is written; the television's is not.
       *
       * `macos.setupFilterApprovalBody` is what the agent's own setup screen
       * says, and a parent walking to the Mac needs the same words. Android TV
       * grants this through a `VpnService` consent dialog and nobody has
       * written those steps in fourteen locales yet — recorded in
       * `docs/BACKLOG.md` rather than guessed at here, because a wrong path
       * through somebody's Settings app wastes a walk across the house.
       */
      ...(device.platform === 'macos'
        ? { hintKeys: ['macos.setupFilterApprovalBody'] }
        : {}),
    });
  }

  /*
   * Consents the device is waiting on that no checklist covers.
   *
   * The web-filter blocker above is the same gap, found first: a fact the
   * device published, that reached no parent. These two go one further —
   * `getProtectionSummaryKeys` skips the permission checklist for desktops
   * entirely, so a Mac whose camera was never allowed had **no** channel to
   * the parent at all. The child device's own checklist is behind the Parent
   * PIN, which is exactly where a parent does not look.
   *
   * `'info'`, not a warning: neither consent is an enforcement rule. See
   * `ProtectionIssueKeys.severity`.
   */
  for (const consent of pendingConsentCopy(device)) {
    issues.push({
      key: `consent-${consent.consent}`,
      labelKey: consent.labelKey,
      detailKey: consent.detailKey,
      /*
       * No `{{platform}}` here, unlike the filter blocker above. That sentence
       * is read on a family list where one device among several is waiting;
       * these are read on the device's own card, where naming it again is a
       * stutter — and the dashboard has no app-side platform label to fill the
       * placeholder with, so a shared sentence that needed one would print
       * `{{platform}}` on one of the two surfaces.
       */
      hintKeys: consent.hintKeys,
      severity: 'info',
    });
  }

  if (inactive) {
    return {
      level: 'inactive',
      titleKey: 'protection.inactive',
      subtitleKey: 'protection.openKidGateToSyncProtections',
      issues,
      inactive,
    };
  }

  // `info` issues are listed and do not colour the badge — see `severity`.
  if (issues.some(issue => issue.severity !== 'info')) {
    return {
      level: 'warning',
      titleKey: 'protection.needsAttention',
      subtitleKey: isAndroidLike(device.platform)
        ? 'protection.protectionsNeedSetupAndroid'
        : 'protection.protectionsNeedSetupIos',
      issues,
      inactive,
    };
  }

  return {
    level: 'protected',
    titleKey: 'protection.protected',
    subtitleKey: 'protection.protectionsLookHealthy',
    issues,
    inactive,
  };
}

const missingStatusIssue = (): ProtectionIssueKeys => ({
  key: 'missing-status',
  labelKey: 'protection.statusNotUpdatedYet',
  detailKey: 'protection.openKidGateOnChildPhone',
});

/**
 * Android lock needs Overlay + Accessibility. Without both, child can leave
 * KidGate and use other apps even when Firestore says locked.
 */
function getAndroidLockEnforcementIssues(device: Device): ProtectionIssueKeys[] {
  const protection = device.protectionStatus;
  if (!protection) {
    return [missingStatusIssue()];
  }

  const issues: ProtectionIssueKeys[] = [];

  const requireAuthorized = (
    key: string,
    labelKey: string,
    status: ProtectionPermissionStatus | undefined,
    offDetailKey: string,
  ) => {
    if (status === 'authorized') {
      return;
    }
    if (
      !status ||
      status === 'unknown' ||
      status === 'unavailable' ||
      status === 'notDetermined'
    ) {
      issues.push({
        key,
        labelKey,
        detailKey: 'protection.openKidGateOnChildPhone',
      });
      return;
    }
    issues.push({ key, labelKey, detailKey: offDetailKey });
  };

  requireAuthorized(
    'overlay',
    'protection.overlayPermission',
    protection.overlay,
    'protection.overlayOffForLock',
  );
  requireAuthorized(
    'accessibility',
    'protection.accessibilityPermission',
    protection.accessibility,
    'protection.accessibilityOff',
  );

  return issues;
}

/**
 * iOS lock runs entirely through FamilyControls/ManagedSettings, which is a
 * no-op until the child approves Screen Time — and the native call resolves
 * `true` either way (applyShieldPolicy in KidGateControls.swift). Without this
 * gate the parent taps Lock, Firestore flips to `isLocked`, the card reads
 * "Locked", and the child's phone is untouched.
 */
function getIosLockEnforcementIssues(device: Device): ProtectionIssueKeys[] {
  const protection = device.protectionStatus;
  if (!protection) {
    return [missingStatusIssue()];
  }

  // Simulator / unsupported iOS build: no Screen Time API at all, so there is
  // nothing the parent can fix and blocking the tap would be a dead end.
  if (protection.screenTime === 'unavailable') {
    return [];
  }

  if (protection.screenTime === 'approved') {
    return [];
  }

  return [
    {
      key: 'screen-time',
      labelKey: 'protection.screenTimePermission',
      detailKey:
        protection.screenTime === 'denied'
          ? 'protection.screenTimeAccessOff'
          : 'protection.screenTimeSetupIncomplete',
    },
  ];
}

/** What still has to be granted on the child device before a lock will bite. */
export function getLockEnforcementIssueKeys(device: Device): ProtectionIssueKeys[] {
  if (!reportsProtectionChecklist(device.platform)) {
    // The desktop lock is a fullscreen window the agent draws itself; no OS
    // grant precedes it, so there is never anything to list here.
    return [];
  }
  /*
   * **The device's own probe outranks this checklist**, the same precedence the
   * device-detail cards already give it (`supportedBy` over `supportedOn` in
   * `apps/mobile`). The checklist infers the lock from named permissions; the
   * probe *derives* it from what the agent can actually do — and the two came
   * apart the day the TV's lock learned to ride the accessibility service:
   * `TYPE_ACCESSIBILITY_OVERLAY` needs no overlay permission, so a Sony whose
   * overlay toggle writes nothing (measured — the app-op stayed untouched
   * through a dozen presses) still locks fine, while this list would have kept
   * the parent's Lock button behind "overlay: denied" forever.
   *
   * `=== true` and nothing looser: an absent probe is unknown, never a yes —
   * phones publish no probe and stay on the permission checklist below — and a
   * probe that says `lock: false` should fall through to the list too, because
   * the list is what names the grants that would fix it.
   */
  if (device.capabilities?.lock === true) {
    return [];
  }
  return isAndroidLike(device.platform)
    ? getAndroidLockEnforcementIssues(device)
    : getIosLockEnforcementIssues(device);
}

/** Body copy for the "lock not ready" alert — the required steps differ. */
export function getLockNotReadyBodyKey(platform: Device['platform']): string {
  return isAndroidLike(platform)
    ? 'protection.lockNotReadyBody'
    : 'protection.lockNotReadyBodyIos';
}

export function canEnforceLock(device: Device): boolean {
  return getLockEnforcementIssueKeys(device).length === 0;
}
