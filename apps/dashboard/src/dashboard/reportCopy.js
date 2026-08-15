import { t as translate, getLocaleTag } from '@kidgate/i18n/web';
import {
  buildReportPresentation,
  reportSummaryLines,
} from '@kidgate/core/domain/reportCopy';
import { formatMinutes } from './charts.jsx';

/**
 * The browser's binding to `@kidgate/core/domain/reportCopy`.
 *
 * The wording used to live here. It moved into `core` when the report reached
 * the phone, which cannot import anything under `@kidgate/i18n/web` or
 * `packages/web-ui` — what is left in this file is the three things that are
 * genuinely this platform's: the current language, the browser's duration
 * format, and `Intl` for dates and clocks.
 *
 * `Intl` stops at this boundary on purpose. `packages/core` runs under Hermes
 * too, where it may not exist at all, so the shared module takes a time
 * formatter and the phone passes its own.
 */

const deps = {
  t: translate,
  formatDuration: formatMinutes,
  formatTime: minuteOfDay =>
    new Intl.DateTimeFormat(getLocaleTag(), {
      hour: 'numeric',
      minute: '2-digit',
      timeZone: 'UTC',
    }).format(
      new Date(Date.UTC(2000, 0, 1, Math.floor(minuteOfDay / 60), minuteOfDay % 60)),
    ),
};

/** `2026-08-10` as a short local date, or the raw key if it is not one. */
export function formatDayKey(dayKey) {
  const at = Date.parse(`${dayKey}T00:00:00Z`);
  if (!Number.isFinite(at)) return dayKey || '';
  return new Intl.DateTimeFormat(getLocaleTag(), {
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  }).format(new Date(at));
}

export function formatRange(fromDate, toDate) {
  return translate('report.range', {
    from: formatDayKey(fromDate),
    to: formatDayKey(toDate),
  });
}

/** The report, worded, for both the page and the canvas beside it. */
export function reportPresentation(report, familyName) {
  return buildReportPresentation(report, familyName, deps);
}

/** The clipboard copy — the same figures and sentences the page shows. */
export function reportSummaryText(report, familyName) {
  return reportSummaryLines(
    report,
    familyName,
    deps,
    formatRange(report.fromDate, report.toDate),
  ).join('\n');
}
