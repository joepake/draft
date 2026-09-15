import {
  ALERT_PREF_KEYS,
  DEFAULT_QUIET_HOURS_END,
  DEFAULT_QUIET_HOURS_START,
  type AlertPrefKey,
  type AlertPrefs,
  type NotificationPrefs,
  type QuietHours,
} from '@kidgate/schema/notificationPrefs';

/**
 * Coercion for notification preferences read back from Firestore.
 *
 * Behaviour, so it sits in `core/domain` rather than beside the shapes in
 * `@kidgate/schema` — that package holds types and contract constants and emits
 * no logic. Same split as `normalizeWebDomain`.
 *
 * These are deliberately forgiving: a preferences document written by an older
 * build is missing keys a newer one expects, and the correct reading of a
 * missing key is the default, not a crash on the settings screen.
 */

export function normalizeAlertPrefs(value: unknown): AlertPrefs {
  const source =
    value && typeof value === 'object' ? (value as Record<string, unknown>) : {};

  return ALERT_PREF_KEYS.reduce(
    (prefs, key) => ({ ...prefs, [key]: source[key] !== false }),
    {} as AlertPrefs,
  );
}

export function normalizeQuietHours(value: unknown): QuietHours {
  const source =
    value && typeof value === 'object' ? (value as Record<string, unknown>) : {};

  const start =
    typeof source.start === 'string' ? source.start : DEFAULT_QUIET_HOURS_START;
  const end = typeof source.end === 'string' ? source.end : DEFAULT_QUIET_HOURS_END;

  return {
    enabled: source.enabled === true,
    start,
    end,
  };
}

export function normalizeNotificationPrefs(
  data: Record<string, unknown> | undefined,
): NotificationPrefs {
  return {
    alerts: normalizeAlertPrefs(data?.notificationPrefs),
    quietHours: normalizeQuietHours(data?.quietHours),
  };
}

/** How many alert families are currently silenced, for the settings summary. */
export function countMutedAlerts(prefs: AlertPrefs): number {
  return ALERT_PREF_KEYS.filter(key => !prefs[key]).length;
}

export function isAlertPrefKey(value: string): value is AlertPrefKey {
  return (ALERT_PREF_KEYS as readonly string[]).includes(value);
}
