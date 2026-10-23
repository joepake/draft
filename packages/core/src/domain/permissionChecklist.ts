/**
 * Every grant a child device's setup asked for, with where it stands now —
 * the list both parent consoles draw on the Protection alerts screen.
 *
 * `getProtectionSummaryKeys` answers "is anything wrong" and lists only what
 * is. A parent asking "what did the child set up, and is all of it still on"
 * (2026-10-23) needs every row, the healthy ones included. Built only from
 * what devices already report — `protectionStatus` on phones and televisions,
 * the capability probe on every agent — so no child app changed for it.
 *
 * A step no device reports is absent, never drawn as unknown: Android has no
 * call that reads an OEM autostart switch, and the uninstall guard (device
 * admin) is not published yet. Choosing apps to block is a parent rule rather
 * than a grant, so it is not a row either.
 */

import type { Device } from '@kidgate/schema/device';
import type {
  ProtectionPermissionStatus,
  ScreenTimeStatus,
} from '@kidgate/schema/permissions';
import { isAndroidLike } from './platformFamily';

export type PermissionRowState =
  'allowed' | 'whileOpen' | 'off' | 'notAsked' | 'restricted' | 'unknown';

export interface PermissionRowKeys {
  key: string;
  labelKey: string;
  state: PermissionRowState;
}

/** What each state reads as, the same words on both consoles. */
export const PERMISSION_STATE_LABEL_KEYS: Record<PermissionRowState, string> = {
  allowed: 'protection.permissionStateAllowed',
  whileOpen: 'protection.permissionStateWhileOpen',
  off: 'protection.permissionStateOff',
  notAsked: 'protection.permissionStateNotAsked',
  restricted: 'protection.permissionStateRestricted',
  unknown: 'protection.permissionStateUnknown',
};

/** `null` is "this device has no such grant" — no row, never a default. */
function grantState(
  status: ProtectionPermissionStatus | undefined,
): PermissionRowState | null {
  switch (status) {
    case undefined:
    case 'unavailable':
      return null;
    case 'authorized':
      return 'allowed';
    // Location only while KidGate is open: the summary warns on it, and "On"
    // here would be the claim both consoles made until 2026-09-28.
    case 'foregroundOnly':
      return 'whileOpen';
    case 'denied':
      return 'off';
    // Held by iOS or a device manager, not switched off by the child.
    case 'restricted':
      return 'restricted';
    case 'notDetermined':
      return 'notAsked';
    default:
      return 'unknown';
  }
}

function screenTimeState(
  status: ScreenTimeStatus | undefined,
): PermissionRowState | null {
  switch (status) {
    case undefined:
    case 'unavailable':
      return null;
    case 'approved':
      return 'allowed';
    case 'denied':
      return 'off';
    default:
      return 'notAsked';
  }
}

/** Rows in the order the child's wizard asks for them. */
export function devicePermissionRows(
  device: Pick<
    Device,
    'platform' | 'protectionStatus' | 'capabilities' | 'controls' | 'messageMonitoring'
  >,
): PermissionRowKeys[] {
  const rows: PermissionRowKeys[] = [];
  const add = (key: string, labelKey: string, state: PermissionRowState | null) => {
    if (state) {
      rows.push({ key, labelKey, state });
    }
  };

  const status = device.protectionStatus;
  const caps = device.capabilities;
  const android = isAndroidLike(device.platform);

  if (status) {
    add(
      'screen-time',
      android ? 'tamperAlerts.watchedUsage' : 'tamperAlerts.watchedScreenTime',
      screenTimeState(status.screenTime),
    );
    if (android) {
      add(
        'accessibility',
        'tamperAlerts.watchedAccessibility',
        grantState(status.accessibility),
      );
      add('overlay', 'tamperAlerts.watchedOverlay', grantState(status.overlay));
    }
    add(
      'notifications',
      'tamperAlerts.watchedNotifications',
      grantState(status.notifications),
    );
    add('location', 'tamperAlerts.watchedLocation', grantState(status.location));
  } else if (caps) {
    // A desktop answers no checklist; its consents ride the probe instead.
    const pending = caps.pendingConsents ?? [];
    add(
      'location',
      'tamperAlerts.watchedLocation',
      pending.includes('location') ? 'notAsked' : caps.location ? 'allowed' : null,
    );
  }

  // The filter's consent is no checklist row on any platform — the device says
  // what stops it (`webFilterBlocker`). Only once the parent has asked for it.
  const blocker = caps?.webFilterBlocker;
  if (blocker || device.controls?.webFilterEnabled) {
    add(
      'web-filter',
      'deviceDetail.webFilter',
      blocker === 'awaitingApproval' ? 'notAsked' : blocker ? 'off' : 'allowed',
    );
  }

  if (status) {
    if (android) {
      add(
        'battery',
        'tamperAlerts.watchedBattery',
        grantState(status.batteryOptimization),
      );
      add(
        'exact-alarm',
        'tamperAlerts.watchedExactAlarm',
        grantState(status.exactAlarm),
      );
    } else {
      add(
        'background-app-refresh',
        'tamperAlerts.watchedBackgroundRefresh',
        grantState(status.backgroundAppRefresh),
      );
    }
  }

  // Only the halves somebody switched on: an optional step nobody took is not
  // a grant that went missing.
  const monitoring = device.messageMonitoring;
  if (monitoring) {
    const used = [monitoring.incoming, monitoring.outgoing].filter(
      half => half.enabled,
    );
    if (used.length > 0) {
      add(
        'message-monitoring',
        'messageMonitoring.title',
        used.every(half => half.granted) ? 'allowed' : 'off',
      );
    }
  }

  if (status) {
    add('camera', 'tamperAlerts.watchedCamera', grantState(status.camera));
    add('microphone', 'tamperAlerts.watchedMicrophone', grantState(status.microphone));
  } else if (caps) {
    const pending = caps.pendingConsents ?? [];
    add(
      'camera',
      'tamperAlerts.watchedCamera',
      pending.includes('camera') ? 'notAsked' : caps.camera ? 'allowed' : null,
    );
  }

  return rows;
}
