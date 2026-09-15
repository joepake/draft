import { getLanguage, getLocaleTag } from '@kidgate/i18n/web';
import { activityTranslator, peekActivityFeed } from '@kidgate/i18n/activityFeed';
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

/**
 * The findings are the *app* key space, not this one.
 *
 * `reportCopy` is shared with the phone, so its keys are the phone's. Handing
 * it `t` from `@kidgate/i18n/web` meant every sentence had to exist twice, and
 * eleven of them never made the second trip — a report whose findings included
 * a finished task or an answered check-in printed the raw key, in every
 * language. It reads the same pack the feed does now.
 *
 * English until the language's chunk lands, for the reason
 * `useActivityTranslate` gives: `ReportPanel` mounts that hook, so the pack is
 * already on its way, and a sentence that settles a moment later beats a blank
 * panel. Keys this panel owns rather than shares still go through `translate`.
 */
function appTranslate(key, params) {
  const language = getLanguage();
  const pack = peekActivityFeed(language);
  return activityTranslator(pack ?? peekActivityFeed('en'), pack ? language : 'en')(
    key,
    params,
  );
}

const deps = {
  t: appTranslate,
  formatDuration: formatMinutes,
  formatTime: minuteOfDay =>
    new Intl.DateTimeFormat(getLocaleTag(), {
      hour: 'numeric',
      minute: '2-digit',
      timeZone: 'UTC',
    }).format(
      new Date(Date.UTC(2000, 0, 1, Math.floor(minuteOfDay / 60), minuteOfDay % 60)),
    ),
  formatDay: dayKey => formatDayKey(dayKey),
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
  return appTranslate('report.range', {
    from: formatDayKey(fromDate),
    to: formatDayKey(toDate),
  });
}

/** The report, worded, for both the page and the canvas beside it. */
export function reportPresentation(report, familyName) {
  // `Date.now()` so a report of a finished week, read the following week,
  // labels its compare bars with real date ranges instead of "This week".
  return buildReportPresentation(report, familyName, deps, Date.now());
}

/** The clipboard copy — the same figures and sentences the page shows. */
export function reportSummaryText(report, familyName, narrative) {
  return reportSummaryLines(
    report,
    familyName,
    deps,
    formatRange(report.fromDate, report.toDate),
    narrative,
  ).join('\n');
}
