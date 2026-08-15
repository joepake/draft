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

export const INACTIVE_THRESHOLD_MS = 24 * 60 * 60 * 1000;

export type ProtectionLevel = 'protected' | 'warning' | 'inactive';

export interface ProtectionIssueKeys {
  key: string;
  labelKey: string;
  detailKey: string;
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

/**
 * Android TV reuses the Android agent, so when it ships it answers the
 * Android checklist — routing it through the iOS branch would ask a TV for
 * Screen Time.
 */
function isAndroidLike(platform: Device['platform']): boolean {
  return platform === 'android' || platform === 'androidtv';
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
      issues.push(notifications);
    }

    if (isAndroid) {
      const overlay = permissionIssue(
        'overlay',
        'protection.overlayPermission',
        protection.overlay,
      );
      if (overlay) {
        issues.push({ ...overlay, detailKey: 'protection.overlayOffForLock' });
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
        });
      }

      const exactAlarm = permissionIssue(
        'exact-alarm',
        'protection.exactAlarmPermission',
        protection.exactAlarm,
      );
      if (exactAlarm) {
        issues.push({ ...exactAlarm, detailKey: 'protection.exactAlarmOff' });
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
        });
      }
    }
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

  if (issues.length > 0) {
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
