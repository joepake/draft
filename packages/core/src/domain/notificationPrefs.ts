import {
  ALERT_PREF_KEYS,
  DEFAULT_QUIET_HOURS,
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

/** The only bound `functions/lib/alertPrefs.parseHhMm` accepts. */
const HH_MM = /^([01]\d|2[0-3]):[0-5]\d$/;

/**
 * Read the way the server reads it, so a screen never shows a window the
 * fan-out is not enforcing. Two shapes used to differ: an unparseable bound
 * (a cleared `<input type="time">` writes `''`) showed as 00:00 here while
 * the server used the default, and a zero-width window showed as on while the
 * server treated it as off. The zero-width one comes back as the default
 * window, switched off, so the next switch-on writes a real window rather than
 * re-writing the one the server refuses.
 */
export function normalizeQuietHours(value: unknown): QuietHours {
  const source =
    value && typeof value === 'object' ? (value as Record<string, unknown>) : {};

  const start =
    typeof source.start === 'string' && HH_MM.test(source.start)
      ? source.start
      : DEFAULT_QUIET_HOURS_START;
  const end =
    typeof source.end === 'string' && HH_MM.test(source.end)
      ? source.end
      : DEFAULT_QUIET_HOURS_END;

  if (start === end) {
    return { ...DEFAULT_QUIET_HOURS, enabled: false };
  }

  return {
    enabled: source.enabled === true,
    start,
    end,
  };
}

/** Whether a window may be written: both bounds `HH:mm`, and not equal. */
export function isValidQuietHoursWindow({
  start,
  end,
}: Pick<QuietHours, 'start' | 'end'>): boolean {
  return HH_MM.test(start) && HH_MM.test(end) && start !== end;
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
