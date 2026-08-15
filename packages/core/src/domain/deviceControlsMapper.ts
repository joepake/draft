import {
  DEFAULT_DEVICE_CONTROLS,
  type AppLimit,
  type BlockedAppPreviewItem,
  type DeviceControls,
  type DeviceLocation,
  type ScheduleWindow,
} from '@kidgate/schema/deviceControls';
import type {
  DeviceProtectionCounters,
  DeviceProtectionStatus,
} from '@kidgate/schema/device';
import {
  DEFAULT_PLACE_RADIUS_METERS,
  type DevicePlace,
} from '@kidgate/schema/devicePlace';
import {
  DEFAULT_WEB_FILTER_CATEGORIES,
  MAX_WEB_FILTER_LIST_ENTRIES,
  WEB_FILTER_CATEGORIES,
  type WebFilterCategory,
} from '@kidgate/schema/webActivity';
import { timestampToIso } from './firestoreValue';
import { normalizeWebDomain } from './webDomain';

/**
 * Reading a child device document back into `DeviceControls`.
 *
 * Deliberately total and deliberately forgiving: every field falls back to a
 * default rather than throwing. A control document is written by four different
 * writers (parent app, child app, two Cloud Functions) across app versions that
 * ship months apart, so a partially-populated one is the normal case, not a
 * corrupt one. Refusing to parse it would take out the screen a parent uses to
 * see whether their child's phone is protected.
 *
 * Shared by the control and device repositories; extracted from the legacy
 * `ControlRepository.mapControlsFromSnapshot`.
 */

function parseAppLimits(value: unknown): AppLimit[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.flatMap(entry => {
    if (!entry || typeof entry !== 'object') {
      return [];
    }
    const row = entry as Record<string, unknown>;
    // `id` is what native enforcement matches on — the package name on Android,
    // an opaque token on iOS. A row without one cannot be enforced, so it is
    // dropped rather than kept as a limit that silently never applies.
    const id = typeof row.id === 'string' ? row.id.trim() : '';
    const minutes = Number(row.minutes);
    if (!id || !Number.isFinite(minutes)) {
      return [];
    }
    return [
      {
        id,
        label: typeof row.label === 'string' ? row.label : id,
        minutes: Math.max(0, Math.floor(minutes)),
      } satisfies AppLimit,
    ];
  });
}

function parseWebFilterCategories(value: unknown): WebFilterCategory[] {
  if (!Array.isArray(value)) {
    return DEFAULT_WEB_FILTER_CATEGORIES;
  }
  const allowed = WEB_FILTER_CATEGORIES as string[];
  return value.filter(
    (entry): entry is WebFilterCategory =>
      typeof entry === 'string' && allowed.includes(entry),
  );
}

/**
 * Normalise, de-duplicate and cap a domain list.
 *
 * The cap matters: these lists ride inside the device document that every
 * parent screen reads, and an unbounded one written by a determined user would
 * make that document expensive for the whole family.
 */
function parseWebDomainList(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }
  const seen = new Set<string>();
  for (const entry of value) {
    if (typeof entry !== 'string') {
      continue;
    }
    const domain = normalizeWebDomain(entry);
    if (domain) {
      seen.add(domain);
    }
    if (seen.size >= MAX_WEB_FILTER_LIST_ENTRIES) {
      break;
    }
  }
  return [...seen];
}

function parseScheduleWindows(value: unknown): ScheduleWindow[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.flatMap(entry => {
    if (!entry || typeof entry !== 'object') {
      return [];
    }
    const row = entry as Record<string, unknown>;
    if (typeof row.start !== 'string' || typeof row.end !== 'string') {
      return [];
    }
    const days = Array.isArray(row.days)
      ? row.days.filter((day): day is number => typeof day === 'number')
      : undefined;
    return [
      {
        start: row.start,
        end: row.end,
        // Absent means every day — which is what a window written before the
        // field existed meant, so an old schedule keeps behaving as it did.
        ...(days && days.length > 0 ? { days } : {}),
        ...(typeof row.label === 'string' ? { label: row.label } : {}),
      } as ScheduleWindow,
    ];
  });
}

function parseBlockedAppPreview(value: unknown): BlockedAppPreviewItem[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.flatMap(entry => {
    if (!entry || typeof entry !== 'object') {
      return [];
    }
    const row = entry as Record<string, unknown>;
    const label = typeof row.label === 'string' ? row.label.trim() : '';
    if (!label) {
      return [];
    }
    const kind = row.kind === 'category' || row.kind === 'website' ? row.kind : 'app';
    return [{ kind, label } satisfies BlockedAppPreviewItem];
  });
}

export function parseDeviceControls(data?: Record<string, unknown>): DeviceControls {
  const controls = data?.controls as Record<string, unknown> | undefined;
  if (!controls) {
    return DEFAULT_DEVICE_CONTROLS;
  }

  const scheduleWindows = parseScheduleWindows(controls.scheduleWindows);
  const num = (value: unknown, fallback: number) =>
    typeof value === 'number' && Number.isFinite(value) ? value : fallback;

  return {
    dailyLimitMinutes:
      typeof controls.dailyLimitMinutes === 'number'
        ? controls.dailyLimitMinutes
        : null,
    appLimits: parseAppLimits(controls.appLimits),
    scheduleEnabled: Boolean(controls.scheduleEnabled),
    scheduleWindows:
      scheduleWindows.length > 0
        ? scheduleWindows
        : DEFAULT_DEVICE_CONTROLS.scheduleWindows,
    locationSharingEnabled: Boolean(controls.locationSharingEnabled),
    webFilterEnabled: Boolean(controls.webFilterEnabled),
    webFilterCategories: parseWebFilterCategories(controls.webFilterCategories),
    webFilterAllowList: parseWebDomainList(controls.webFilterAllowList),
    webFilterBlockList: parseWebDomainList(controls.webFilterBlockList),
    webFilterAllowListOnly: controls.webFilterAllowListOnly === true,
    screenTimeAuthorized: Boolean(controls.screenTimeAuthorized),
    appBlockingEnabled: Boolean(controls.appBlockingEnabled),
    blockedAppsConfigured: Boolean(controls.blockedAppsConfigured),
    blockedAppCount: num(controls.blockedAppCount, 0),
    blockedCategoryCount: num(controls.blockedCategoryCount, 0),
    blockedAppPreview: parseBlockedAppPreview(controls.blockedAppPreview),
    minutesUsedToday: num(controls.minutesUsedToday, 0),
    usageDate: typeof controls.usageDate === 'string' ? controls.usageDate : null,
    dailyLimitExceeded: controls.dailyLimitExceeded === true,
    // Null while a device has never reported, and null on a child's own copy of
    // its controls — the field is server-stamped, so the writer never has it.
    usageReportedAt: timestampToIso(controls.usageReportedAt) ?? null,
    bonusMinutesToday: num(controls.bonusMinutesToday, 0),
    bonusGrantedAtMs:
      typeof controls.bonusGrantedAtMs === 'number' ? controls.bonusGrantedAtMs : null,
  } as DeviceControls;
}

/** The device's last known position, or undefined if it has never reported one. */
export function parseLastLocation(
  data?: Record<string, unknown>,
): DeviceLocation | undefined {
  const location = data?.lastLocation as Record<string, unknown> | undefined;
  if (
    !location ||
    typeof location.latitude !== 'number' ||
    typeof location.longitude !== 'number'
  ) {
    return undefined;
  }

  const text = (value: unknown) =>
    typeof value === 'string' && value.trim() ? value.trim() : null;

  return {
    latitude: location.latitude,
    longitude: location.longitude,
    updatedAt: typeof location.updatedAt === 'string' ? location.updatedAt : '',
    placeName: text(location.placeName),
    address: text(location.address),
    addressDetail:
      location.addressDetail === 'basic' || location.addressDetail === 'detailed'
        ? location.addressDetail
        : null,
  };
}

/**
 * Geofences the parent drew, stored as an array on the device document.
 *
 * A place with no usable coordinate pair is dropped rather than defaulted: a
 * geofence at (0, 0) is a real point in the Gulf of Guinea, and an alert fired
 * from it would be indistinguishable from a genuine one.
 */
export function parseDevicePlaces(data?: Record<string, unknown>): DevicePlace[] {
  const places = data?.places;
  if (!Array.isArray(places)) {
    return [];
  }

  return places.flatMap(entry => {
    const place = entry as Record<string, unknown> | null;
    if (
      !place ||
      typeof place.id !== 'string' ||
      typeof place.latitude !== 'number' ||
      typeof place.longitude !== 'number'
    ) {
      return [];
    }

    return [
      {
        id: place.id,
        name: typeof place.name === 'string' ? place.name : '',
        latitude: place.latitude,
        longitude: place.longitude,
        radiusMeters:
          typeof place.radiusMeters === 'number' && place.radiusMeters > 0
            ? place.radiusMeters
            : DEFAULT_PLACE_RADIUS_METERS,
        notifyOnEnter: place.notifyOnEnter === true,
        notifyOnExit: place.notifyOnExit === true,
      },
    ];
  });
}

/**
 * Permission state the child device reports about itself.
 *
 * Passed through per key rather than validated against the enum. The set of
 * permissions grows with each OS release — Android 12 added exact alarms, and a
 * future one will add something else — and a device running a newer app than
 * this parser must not have its report silently emptied. A reader that does not
 * recognise a key ignores it; `apps/dashboard/src/dashboard/labels.js` is where
 * that decision is made for the web.
 */
export function parseProtectionStatus(
  data?: Record<string, unknown>,
): DeviceProtectionStatus | undefined {
  const status = data?.protectionStatus as Record<string, unknown> | undefined;
  if (!status || typeof status !== 'object') {
    return undefined;
  }

  const mapped: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(status)) {
    if (typeof value === 'string') {
      mapped[key] = value;
    }
  }

  // The one non-enum field, and the one written as a Firestore timestamp by
  // some app versions and an ISO string by others. Normalised here so no
  // reader has to know which version wrote the document it is looking at.
  const lastCheckedAt = timestampToIso(status.lastCheckedAt);
  if (lastCheckedAt) {
    mapped.lastCheckedAt = lastCheckedAt;
  } else {
    delete mapped.lastCheckedAt;
  }

  return mapped as unknown as DeviceProtectionStatus;
}

/** All-time tallies written by the `tallyProtectionCounters` Cloud Function. */
export function parseProtectionCounters(
  data?: Record<string, unknown>,
): DeviceProtectionCounters {
  const counters = data?.protectionCounters as Record<string, unknown> | undefined;
  const count = (value: unknown) =>
    typeof value === 'number' && Number.isFinite(value) ? value : 0;

  return {
    appBlocked: count(counters?.appBlocked),
    tamper: count(counters?.tamper),
  };
}
