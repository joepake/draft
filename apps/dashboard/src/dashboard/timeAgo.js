import { t as translate } from '@kidgate/i18n/web';

/**
 * "8 minutes ago" for an ISO timestamp, in the language on screen.
 *
 * Lifted out of `pages/Dashboard.jsx` on 2026-09-03 for the Message Alerts
 * card, which stamps every alert row. Read through the module-level `translate`
 * rather than the hook because this is called from render — a second copy
 * rounding minutes differently is how two rows about the same event come to
 * carry different times.
 */
export function timeAgo(iso) {
  const at = iso ? new Date(iso).getTime() : NaN;
  if (Number.isNaN(at)) return translate('time.never');
  const diff = Date.now() - at;
  const mins = Math.round(diff / 60000);
  if (mins < 1) return translate('time.justNow');
  if (mins < 60) return translate('time.minutes', { count: mins });
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return translate('time.hours', { count: hrs });
  return translate('time.days', { count: Math.round(hrs / 24) });
}
