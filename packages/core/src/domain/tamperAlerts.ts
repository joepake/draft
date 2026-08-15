/**
 * Tamper activity copy — which permission was flipped, in the reader's words.
 *
 * Lifted from `apps/mobile/src/utils/tamperAlerts.ts`. A tamper event is
 * written once by the child device and read on every parent surface, so the
 * mapping from stored params to copy has to be one implementation — a phone
 * and a dashboard disagreeing about *which protection was disabled* is worse
 * than a missed translation.
 *
 * `translate` is a parameter rather than an import: this package holds no
 * current language. Each surface passes its own.
 */

import type { TranslationParams } from '@kidgate/i18n/types';

export type TamperPermissionKey =
  | 'overlay'
  | 'accessibility'
  | 'screenTime'
  | 'batteryOptimization'
  | 'exactAlarm'
  | 'notifications'
  | 'location'
  | 'camera'
  | 'backgroundAppRefresh'
  /**
   * Not a permission: raised when the device clock or timezone is moved far
   * enough to shift blocked hours / the daily-limit day boundary. Enforcement
   * itself runs on server-corrected time, so this is the visibility half —
   * the parent gets told someone tried.
   */
  | 'deviceClock';

/**
 * The icon vocabulary these alerts draw from. A plain string union, not a
 * component type — each surface maps it onto its own icon set, and the mobile
 * `IconName` and web `Icon.jsx` both already carry these names.
 */
export type TamperIconName =
  | 'smartphone'
  | 'shield'
  | 'shieldAlert'
  | 'chart'
  | 'battery'
  | 'calendar'
  | 'bell'
  | 'mapPin'
  | 'camera'
  | 'refresh'
  | 'clock';

const PERMISSION_COPY: Record<
  TamperPermissionKey,
  { titleKey: string; bodyKey: string; icon: TamperIconName }
> = {
  overlay: {
    titleKey: 'activities.tamperOverlayTitle',
    bodyKey: 'activities.tamperOverlayBody',
    icon: 'smartphone',
  },
  accessibility: {
    titleKey: 'activities.tamperAccessibilityTitle',
    bodyKey: 'activities.tamperAccessibilityBody',
    icon: 'shield',
  },
  // One reason, two names: iOS calls this permission Screen Time, Android
  // calls it Usage access. These keys stay neutral because they are what gets
  // written into the activity doc — PLATFORM_COPY below carries the wording
  // the parent actually reads.
  screenTime: {
    titleKey: 'activities.tamperUsageAccessTitle',
    bodyKey: 'activities.tamperUsageAccessBody',
    icon: 'chart',
  },
  batteryOptimization: {
    titleKey: 'activities.tamperBatteryTitle',
    bodyKey: 'activities.tamperBatteryBody',
    icon: 'battery',
  },
  exactAlarm: {
    titleKey: 'activities.tamperExactAlarmTitle',
    bodyKey: 'activities.tamperExactAlarmBody',
    icon: 'calendar',
  },
  notifications: {
    titleKey: 'activities.tamperNotificationsTitle',
    bodyKey: 'activities.tamperNotificationsBody',
    icon: 'bell',
  },
  location: {
    titleKey: 'activities.tamperLocationTitle',
    bodyKey: 'activities.tamperLocationBody',
    icon: 'mapPin',
  },
  camera: {
    titleKey: 'activities.tamperCameraTitle',
    bodyKey: 'activities.tamperCameraBody',
    icon: 'camera',
  },
  backgroundAppRefresh: {
    titleKey: 'activities.tamperBackgroundRefreshTitle',
    bodyKey: 'activities.tamperBackgroundRefreshBody',
    icon: 'refresh',
  },
  deviceClock: {
    titleKey: 'activities.tamperDeviceClockTitle',
    bodyKey: 'activities.tamperDeviceClockBody',
    icon: 'clock',
  },
};

/**
 * Per-platform overrides for permissions the two operating systems name
 * differently. Sending a parent to look for "Screen Time" on an Android phone
 * — or "Usage access" on an iPhone — is an instruction they cannot follow.
 *
 * Only events written since `platform` was added to the activity params carry
 * a platform; older ones fall back to the neutral copy in PERMISSION_COPY.
 */
const PLATFORM_COPY: Partial<
  Record<
    TamperPermissionKey,
    Record<'ios' | 'android', { titleKey: string; bodyKey: string }>
  >
> = {
  screenTime: {
    ios: {
      titleKey: 'activities.tamperScreenTimeIosTitle',
      bodyKey: 'activities.tamperScreenTimeIosBody',
    },
    android: {
      titleKey: 'activities.tamperUsageAccessAndroidTitle',
      bodyKey: 'activities.tamperUsageAccessAndroidBody',
    },
  },
};

function resolveDevicePlatform(
  params?: Record<string, unknown> | null,
): 'ios' | 'android' | null {
  const raw = params?.platform;
  return raw === 'ios' || raw === 'android' ? raw : null;
}

/** Legacy descriptionKey → permission (old events used generic tamperTitle). */
const LEGACY_DESCRIPTION_TO_PERMISSION: Record<string, TamperPermissionKey> = {
  'activities.tamperOverlay': 'overlay',
  'activities.tamperAccessibility': 'accessibility',
  'activities.tamperUsageAccess': 'screenTime',
  'activities.tamperBattery': 'batteryOptimization',
  'activities.tamperExactAlarm': 'exactAlarm',
  'activities.tamperNotifications': 'notifications',
  'activities.tamperLocation': 'location',
  'activities.tamperCamera': 'camera',
  'activities.tamperBackgroundRefresh': 'backgroundAppRefresh',
  'activities.tamperOverlayBody': 'overlay',
  'activities.tamperAccessibilityBody': 'accessibility',
  'activities.tamperUsageAccessBody': 'screenTime',
  'activities.tamperBatteryBody': 'batteryOptimization',
  'activities.tamperExactAlarmBody': 'exactAlarm',
  'activities.tamperNotificationsBody': 'notifications',
  'activities.tamperLocationBody': 'location',
  'activities.tamperCameraBody': 'camera',
  'activities.tamperBackgroundRefreshBody': 'backgroundAppRefresh',
};

export function resolveTamperPermission(
  params?: Record<string, unknown> | null,
  descriptionKey?: string | null,
): TamperPermissionKey | null {
  const raw = params?.permission;
  if (typeof raw === 'string' && raw in PERMISSION_COPY) {
    return raw as TamperPermissionKey;
  }
  if (descriptionKey && LEGACY_DESCRIPTION_TO_PERMISSION[descriptionKey]) {
    return LEGACY_DESCRIPTION_TO_PERMISSION[descriptionKey];
  }
  return null;
}

export function getTamperActivityKeys(permission: TamperPermissionKey): {
  titleKey: string;
  descriptionKey: string;
} {
  const copy = PERMISSION_COPY[permission];
  return {
    titleKey: copy.titleKey,
    descriptionKey: copy.bodyKey,
  };
}

export function resolveTamperActivityCopy(
  activity: {
    titleKey?: string;
    descriptionKey?: string;
    title?: string;
    description?: string;
    params?: Record<string, unknown>;
  },
  translate: (key: string, params?: TranslationParams) => string,
): { title: string; description?: string | undefined; icon: TamperIconName } {
  const permission = resolveTamperPermission(activity.params, activity.descriptionKey);

  if (permission) {
    const copy = PERMISSION_COPY[permission];
    const platform = resolveDevicePlatform(activity.params);
    const platformCopy = platform ? PLATFORM_COPY[permission]?.[platform] : undefined;
    return {
      title: translate(platformCopy?.titleKey ?? copy.titleKey),
      description: translate(platformCopy?.bodyKey ?? copy.bodyKey),
      icon: copy.icon,
    };
  }

  // Generic fallback for unknown / very old events.
  if (activity.titleKey && activity.titleKey !== 'activities.tamperTitle') {
    return {
      title: translate(activity.titleKey, activity.params as TranslationParams),
      description: activity.descriptionKey
        ? translate(activity.descriptionKey, activity.params as TranslationParams)
        : activity.description,
      icon: 'shieldAlert',
    };
  }

  return {
    title: translate('activities.tamperFallbackTitle'),
    description:
      activity.description ||
      (activity.descriptionKey
        ? translate(activity.descriptionKey)
        : translate('activities.tamperFallbackBody')),
    icon: 'shieldAlert',
  };
}
