/**
 * Which push alerts this parent device wants, and when it wants to be left
 * alone.
 *
 * The values live on the parent device doc rather than in local storage
 * because muting is enforced server-side: by the time JS could read a local
 * flag, FCM has already drawn the banner. See functions/lib/alertPrefs.js —
 * the key list and quiet-hours defaults below mirror it, and
 * src/__tests__/serverConstantParity.test.ts fails if they drift.
 *
 * Per device, not per account: a parent with a phone and a tablet mutes the
 * tablet and keeps the phone loud, and the FCM token is per device anyway.
 */
export const ALERT_PREF_KEYS = [
  'appActivity',
  'placeAlerts',
  'tamperAlerts',
  'checkIn',
  'timeRequests',
  'rewardTasks',
  'weeklyDigest',
] as const;

export type AlertPrefKey = (typeof ALERT_PREF_KEYS)[number];

export type AlertPrefs = Record<AlertPrefKey, boolean>;

export interface QuietHours {
  enabled: boolean;
  /** `HH:mm`, on this device's own wall clock. */
  start: string;
  end: string;
}

export const DEFAULT_QUIET_HOURS_START = '22:00';
export const DEFAULT_QUIET_HOURS_END = '07:00';

export const DEFAULT_QUIET_HOURS: QuietHours = {
  enabled: false,
  start: DEFAULT_QUIET_HOURS_START,
  end: DEFAULT_QUIET_HOURS_END,
};

/**
 * Every alert on. Devices registered before this field existed have no map at
 * all, and those parents must keep hearing what they already hear — only an
 * explicit `false` mutes, on both sides of the wire.
 */
export const DEFAULT_ALERT_PREFS: AlertPrefs = ALERT_PREF_KEYS.reduce(
  (prefs, key) => ({ ...prefs, [key]: true }),
  {} as AlertPrefs,
);

export interface NotificationPrefs {
  alerts: AlertPrefs;
  quietHours: QuietHours;
}

export const DEFAULT_NOTIFICATION_PREFS: NotificationPrefs = {
  alerts: DEFAULT_ALERT_PREFS,
  quietHours: DEFAULT_QUIET_HOURS,
};
