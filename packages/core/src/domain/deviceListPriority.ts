/**
 * Which device needs the parent first, and why — as data, not sentences.
 *
 * Lifted from `apps/mobile/src/utils/deviceListPriority.ts`. The ordering is a
 * product decision (SOS above everything, a waiting check-in above a waiting
 * time request, setup problems above idle states) and it must be the same
 * ordering on the phone and the dashboard, or the two screens tell the family
 * different stories about who needs attention.
 *
 * Each status carries a `code` and the data its message needs; the surface
 * renders `messageKey` in its own language. Two codes need more than a key:
 * `protection-setup` interpolates a nested issue label, and `offline` formats
 * a relative time — both rendering concerns, so the raw material is handed
 * back instead.
 */

import type { Device } from '@kidgate/schema/device';
import { DEFAULT_DEVICE_CONTROLS } from '@kidgate/schema/deviceControls';
import { isWithinAnyScheduleWindow } from './scheduleWindow';
import { getEffectiveDeviceStatus } from './deviceStatus';
import { getProtectionSummaryKeys } from './protectionStatus';

export type DeviceListStatusTone = 'danger' | 'warning' | 'muted' | 'success';

export type DeviceListStatusCode =
  | 'sos'
  | 'check-in'
  | 'pending-requests'
  | 'paused'
  | 'blocked-hours'
  | 'inactive'
  | 'protection-setup'
  | 'offline'
  | 'daily-limit'
  | 'ready';

export interface DeviceListStatusKeys {
  code: DeviceListStatusCode;
  messageKey: string;
  /** Interpolation values that are plain data (counts). */
  params?: Record<string, number>;
  /**
   * `protection-setup` only: the first issue's label key, to be rendered and
   * interpolated as `issueLabel` — or absent, in which case `messageKey`
   * already carries the whole sentence.
   */
  issueLabelKey?: string;
  /** `offline` only: raw timestamp for the surface's relative-time formatter. */
  lastActiveAt?: string;
  tone: DeviceListStatusTone;
  priority: number;
}

export interface DeviceListContext {
  pendingRequestCount: number;
  showPendingInStatus: boolean;
  hasActiveSos: boolean;
  hasPendingCheckIn: boolean;
  timeTick?: number;
}

export function getDeviceListStatusKeys(
  device: Device,
  context: DeviceListContext,
  nowMs: number,
): DeviceListStatusKeys {
  const tick = new Date(context.timeTick ?? nowMs);
  const controls = device.controls ?? DEFAULT_DEVICE_CONTROLS;
  const inBlockedHours =
    controls.scheduleEnabled &&
    isWithinAnyScheduleWindow(controls.scheduleWindows, {
      minutesSinceMidnight: tick.getHours() * 60 + tick.getMinutes(),
      weekday: tick.getDay(),
    });
  const protectionSummary = getProtectionSummaryKeys(device, nowMs);
  const effectiveStatus = getEffectiveDeviceStatus(device, nowMs);

  if (context.hasActiveSos) {
    return {
      code: 'sos',
      messageKey: 'family.sosNeedsAttentionNow',
      tone: 'danger',
      priority: 1000,
    };
  }

  if (context.hasPendingCheckIn) {
    return {
      code: 'check-in',
      messageKey: 'family.waitingForCheckIn',
      tone: 'warning',
      priority: 900,
    };
  }

  if (context.pendingRequestCount > 0 && context.showPendingInStatus) {
    return {
      code: 'pending-requests',
      messageKey: 'family.timeRequestsWaiting',
      params: { count: context.pendingRequestCount },
      tone: 'warning',
      priority: 800,
    };
  }

  if (device.isLocked || effectiveStatus === 'locked') {
    return {
      code: 'paused',
      messageKey: 'family.youPausedThisDevice',
      tone: 'warning',
      priority: 700,
    };
  }

  if (inBlockedHours) {
    return {
      code: 'blocked-hours',
      messageKey: 'family.blockedHoursActiveNow',
      tone: 'warning',
      priority: 650,
    };
  }

  if (protectionSummary.level === 'inactive') {
    return {
      code: 'inactive',
      messageKey: 'family.inactiveOpenKidGate',
      tone: 'danger',
      priority: 600,
    };
  }

  if (protectionSummary.level === 'warning') {
    const issue = protectionSummary.issues[0];
    return {
      code: 'protection-setup',
      messageKey: issue ? 'family.protectionNeedsSetup' : protectionSummary.subtitleKey,
      ...(issue ? { issueLabelKey: issue.labelKey } : {}),
      tone: 'warning',
      priority: 550,
    };
  }

  if (effectiveStatus === 'offline') {
    return {
      code: 'offline',
      messageKey: device.lastActiveAt
        ? 'family.lastActiveDate'
        : 'family.lastActiveUnknown',
      ...(device.lastActiveAt ? { lastActiveAt: device.lastActiveAt } : {}),
      tone: 'muted',
      priority: 400,
    };
  }

  if (controls.dailyLimitMinutes) {
    return {
      code: 'daily-limit',
      messageKey: 'family.dailyLimitOn',
      tone: 'success',
      priority: 100,
    };
  }

  return {
    code: 'ready',
    messageKey: 'family.deviceReady',
    tone: 'success',
    priority: 0,
  };
}

/**
 * Order the family list: most urgent first, then by name.
 *
 * Status is derived once per device rather than inside the comparator.
 * `getDeviceListStatusKeys` is not cheap — it walks the protection summary
 * (which parses timestamps and every permission) and the blocked-hours
 * schedule — and a comparator runs O(n log n) times, twice per comparison, so
 * the old shape recomputed it dozens of times for a handful of devices. The
 * minute ticker re-runs this sort every 60s, which is what made that matter.
 */
export function sortDevicesByPriority(
  devices: Device[],
  contextFor: (deviceId: string) => DeviceListContext,
  nowMs: number,
): Device[] {
  const statusByDeviceId = new Map<string, DeviceListStatusKeys>();
  for (const device of devices) {
    statusByDeviceId.set(
      device.id,
      getDeviceListStatusKeys(device, contextFor(device.id), nowMs),
    );
  }

  return [...devices].sort((left, right) => {
    const leftPriority = statusByDeviceId.get(left.id)?.priority ?? 0;
    const rightPriority = statusByDeviceId.get(right.id)?.priority ?? 0;

    if (leftPriority !== rightPriority) {
      return rightPriority - leftPriority;
    }

    return left.name.localeCompare(right.name, undefined, {
      sensitivity: 'base',
    });
  });
}
