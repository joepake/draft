/**
 * The weekly report, as sentences — for every surface that shows one.
 *
 * The dashboard had this logic first, in `apps/dashboard/src/dashboard/
 * reportCopy.js`, and it stayed there exactly as long as the report had one
 * reader. It has three now — the dashboard page, the image drawn beside it, and
 * the parent's phone — and the ones on the phone cannot import a browser
 * module: `packages/web-ui` and `packages/i18n/src/web` are both fenced off from
 * `apps/mobile` by `dependency-cruiser`, for the good reason that a React DOM
 * component in the mobile bundle fails on a device rather than at build time.
 *
 * So the wording lives here, next to `activityCopy`, `lockCopy` and
 * `timeRequestCopy`, which are the same shape and exist for the same reason: a
 * stored record is keys and numbers, and turning those into a sentence is the
 * one step every platform would otherwise write again.
 *
 * **The two key spaces spell these keys identically.** `report.*` exists in
 * `locales/<lang>` for the app and in `web/locales/<lang>` for the browser, with
 * the same names under it — which is what lets one module serve both. They are
 * still two packs and a copy fix has to land in each; see the i18n CLAUDE.md.
 *
 * Nothing here formats a duration or a clock: `formatDuration` is the app's own
 * (`utils/duration` on the phone, `formatMinutes` in the dashboard) so "1h 35m"
 * reads the same in the report as it does on the screen behind it.
 */

import type { TranslationParams } from '@kidgate/i18n/types';
import type { FamilyReport, FamilyReportFinding } from '@kidgate/schema/familyReport';
import {
  findingTone,
  reportStats,
  reportTrend,
  reportWeek,
  type ReportStat,
  type ReportTrend,
  reportChildren,
} from './reportView';

export type ReportTranslate = (key: string, params?: TranslationParams) => string;

/** Minutes as the reader's own duration format — "1h 35m", "45m". */
export type FormatReportDuration = (minutes: number) => string;

/** A minute of the day (0–1439) as a wall clock in the reader's convention. */
export type FormatReportTime = (minuteOfDay: number) => string;

export interface ReportCopyDeps {
  t: ReportTranslate;
  formatDuration: FormatReportDuration;
  /**
   * Optional: a 24-hour clock is the fallback, because `Intl` is a platform
   * question in this package — Hermes can ship without it — and every caller
   * that has a locale-aware formatter should pass its own.
   */
  formatTime?: FormatReportTime;
}

const STAT_LABEL_KEYS: Record<ReportStat['key'], string> = {
  screenTime: 'report.statScreenTime',
  dailyAverage: 'report.statDailyAverage',
  blockedApps: 'report.statBlockedApps',
  blockedWebVisits: 'report.statBlockedWebVisits',
};

/**
 * `latestMinute` back down to a wall clock.
 *
 * The finding counts on a 24–29 hour clock so "the latest night this week" can
 * be a `Math.max` across midnight (`lateNightOf` in `digestFindings`), which
 * makes 00:30 arrive as 1470. Every renderer has to undo that and none of them
 * should have to know why.
 */
export function wallClockMinute(minute: number | string | undefined): number {
  return (((Number(minute) || 0) % 1440) + 1440) % 1440;
}

function defaultTime(minuteOfDay: number): string {
  const hours = Math.floor(minuteOfDay / 60);
  const minutes = minuteOfDay % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

export function statLabel(key: ReportStat['key'], t: ReportTranslate): string {
  return t(STAT_LABEL_KEYS[key]);
}

/** Durations get formatted, counts stay numbers. */
export function statValue(stat: ReportStat, deps: ReportCopyDeps): string {
  return stat.unit === 'minutes' ? deps.formatDuration(stat.value) : String(stat.value);
}

/**
 * One finding as the line a parent reads, or null for a kind this build does
 * not know.
 *
 * Null rather than a placeholder: a report stored last year can carry a finding
 * a later version of the rules stopped producing, and a row reading
 * `blockedSpike` over three raw numbers is worse than a report with two lines
 * instead of three.
 */
export function findingSentence(
  finding: FamilyReportFinding,
  deps: ReportCopyDeps,
): string | null {
  const { t, formatDuration } = deps;
  const formatTime = deps.formatTime ?? defaultTime;
  const params = finding?.params ?? {};

  switch (finding?.kind) {
    case 'usageUp':
    case 'usageDown':
      return t(
        finding.kind === 'usageUp'
          ? 'report.findingUsageUp'
          : 'report.findingUsageDown',
        {
          percent: Number(params.percent ?? 0),
          delta: formatDuration(Number(params.deltaMinutes ?? 0)),
        },
      );

    case 'usageFlat':
      return t('report.findingUsageFlat', {
        total: formatDuration(Number(params.totalMinutes ?? 0)),
      });

    case 'lateNight':
      return t('report.findingLateNight', {
        count: Number(params.nights ?? 0),
        time: formatTime(wallClockMinute(params.latestMinute)),
      });

    case 'newTopApp':
      return t('report.findingNewTopApp', {
        app: String(params.label || params.packageName || ''),
        duration: formatDuration(Number(params.minutes ?? 0)),
      });

    case 'appSurge':
      return t('report.findingAppSurge', {
        app: String(params.label || params.packageName || ''),
        delta: formatDuration(Number(params.deltaMinutes ?? 0)),
        duration: formatDuration(Number(params.minutes ?? 0)),
      });

    case 'limitHitRepeatedly':
      return t('report.findingLimitHit', {
        count: Number(params.days ?? 0),
        limit: formatDuration(Number(params.limitMinutes ?? 0)),
      });

    case 'blockedSpike':
      return t(
        params.channel === 'web'
          ? 'report.findingBlockedWeb'
          : 'report.findingBlockedApps',
        {
          count: Number(params.count ?? 0),
          previous: Number(params.previousCount ?? 0),
        },
      );

    case 'quietWeek':
      return t('report.findingQuietWeek', {
        total: formatDuration(Number(params.totalMinutes ?? 0)),
      });

    default:
      return null;
  }
}

export function severityLabel(
  severity: FamilyReportFinding['severity'],
  t: ReportTranslate,
): string {
  if (severity === 'attention') return t('report.sevAttention');
  if (severity === 'notable') return t('report.sevNotable');
  return t('report.sevInfo');
}

/** The line under the hero figure. */
export function trendSentence(trend: ReportTrend, deps: ReportCopyDeps): string {
  if (!trend.hasBaseline) return deps.t('report.trendFirstWeek');
  if (trend.direction === 'flat') return deps.t('report.trendFlat');
  return deps.t(trend.direction === 'up' ? 'report.trendUp' : 'report.trendDown', {
    value: deps.formatDuration(trend.deltaMinutes),
  });
}

export interface ReportFindingLine {
  kind: string;
  text: string;
  tone: 'warning' | 'good' | 'muted';
  badge: string;
}

/** Every finding this build can word, in the order the digest ranked them. */
export function findingLines(
  report: Pick<FamilyReport, 'findings'>,
  deps: ReportCopyDeps,
): ReportFindingLine[] {
  return (report.findings ?? [])
    .map(finding => ({
      kind: finding.kind,
      text: findingSentence(finding, deps),
      tone: findingTone(finding.severity),
      badge: severityLabel(finding.severity, deps.t),
    }))
    .filter((line): line is ReportFindingLine => typeof line.text === 'string');
}

/**
 * Everything a rendering of the report needs, decided once.
 *
 * The dashboard card, the PNG drawn on a canvas beside it and the phone screen
 * all take this and lay it out; none of them derives a figure or picks a
 * sentence. Two renderings that disagree about one week is the failure the whole
 * report/`reportView` split exists to prevent — a parent forwards the one nobody
 * checked.
 */
export interface ReportPresentation {
  familyName: string;
  title: string;
  /** Empty when the period key is not an ISO week — never a raw id on screen. */
  week: string;
  hero: {
    label: string;
    value: string;
    trend: string;
    direction: ReportTrend['direction'];
  };
  compare: {
    thisWeek: { label: string; value: string; minutes: number };
    lastWeek: { label: string; value: string; minutes: number };
  };
  /** The three figures beside the hero, which is the fourth. */
  stats: { key: ReportStat['key']; label: string; value: string }[];
  findings: ReportFindingLine[];
  /**
   * The per-child comparison, already worded. Empty when there is nothing to
   * compare — one child, or a report written before the table existed — and a
   * renderer draws the section only when this has rows.
   */
  children: ReportChildLine[];
}

export interface ReportChildLine {
  deviceId: string;
  name: string;
  screenTime: string;
  share: string;
  change: string;
  limit: string;
  lateNights: string;
  topApp: string;
  /** The busiest child of the week, for a renderer to weight the row. */
  isBusiest: boolean;
}

/**
 * Mirrors `MEANINGFUL_DELTA_MINUTES` in `./digestFindings`.
 *
 * The same threshold the findings use, so a child the report declines to call a
 * trend is not labelled one in the table two inches below it.
 */
const MEANINGFUL_CHANGE_MINUTES = 15;

/** One row of the comparison table, as the strings its cells show. */
export function childLines(
  report: FamilyReport,
  deps: ReportCopyDeps,
): ReportChildLine[] {
  return reportChildren(report).map(row => ({
    deviceId: row.deviceId,
    name: row.name || deps.t('report.unnamedChild'),
    screenTime: deps.formatDuration(row.screenMinutes),
    share: `${row.sharePercent}%`,
    change:
      Math.abs(row.deltaMinutes) < MEANINGFUL_CHANGE_MINUTES
        ? deps.t('report.changeFlat')
        : deps.t(row.deltaMinutes > 0 ? 'report.changeUp' : 'report.changeDown', {
            value: deps.formatDuration(Math.abs(row.deltaMinutes)),
          }),
    /*
     * Two different absences, and rendering both as "0 days" would say the
     * second about the first: a child with no Daily Limit set was never
     * measured against one, while a child who had one and stayed under it is
     * the good outcome this column exists to show.
     */
    limit:
      row.dailyLimitMinutes === null
        ? deps.t('report.noLimit')
        : deps.t('report.limitDays', { count: row.limitDays }),
    lateNights:
      row.lateNights > 0 ? String(row.lateNights) : deps.t('report.lateNightsNone'),
    topApp: row.topApp
      ? `${row.topApp.label} · ${deps.formatDuration(row.topApp.minutes)}`
      : deps.t('report.noTopApp'),
    isBusiest: row.isBusiest,
  }));
}

export function buildReportPresentation(
  report: FamilyReport,
  familyName: string,
  deps: ReportCopyDeps,
): ReportPresentation {
  const stats = reportStats(report);
  const trend = reportTrend(report);
  const week = reportWeek(report.periodKey);
  const hero = stats[0];
  const thisWeek = Math.max(0, report.screenMinutes || 0);
  const lastWeek = Math.max(0, report.previousScreenMinutes || 0);

  return {
    familyName,
    title: deps.t('report.title'),
    week: week ? deps.t('report.weekOf', { week: week.week }) : '',
    hero: {
      label: statLabel(hero.key, deps.t),
      value: statValue(hero, deps),
      trend: trendSentence(trend, deps),
      direction: trend.direction,
    },
    compare: {
      thisWeek: {
        label: deps.t('report.barThisWeek'),
        value: deps.formatDuration(thisWeek),
        minutes: thisWeek,
      },
      lastWeek: {
        label: deps.t('report.barLastWeek'),
        value: deps.formatDuration(lastWeek),
        minutes: lastWeek,
      },
    },
    stats: stats.slice(1).map(stat => ({
      key: stat.key,
      label: statLabel(stat.key, deps.t),
      value: statValue(stat, deps),
    })),
    findings: findingLines(report, deps),
    children: childLines(report, deps),
  };
}

/**
 * The report as plain text, for a clipboard or an OS share sheet.
 *
 * Returned as lines rather than one string so a caller can join them the way
 * its platform wants — and so a test can assert on a line instead of on
 * whitespace.
 */
export function reportSummaryLines(
  report: FamilyReport,
  familyName: string,
  deps: ReportCopyDeps,
  rangeLabel: string,
): string[] {
  const view = buildReportPresentation(report, familyName, deps);
  const lines = [
    // The phone has no family name to hand — it is a dashboard read, and one
    // more Firestore fetch for a heading is not worth it. A bare em dash at the
    // head of a forwarded message is, so the name is optional here.
    familyName ? `${familyName} — ${view.title}` : view.title,
    rangeLabel,
    '',
    `${view.hero.label}: ${view.hero.value}`,
    ...view.stats.map(stat => `${stat.label}: ${stat.value}`),
    view.hero.trend,
  ];

  if (view.findings.length > 0) {
    lines.push('', `${deps.t('report.highlights')}:`);
    view.findings.forEach(finding => lines.push(`• ${finding.text}`));
  }

  return lines;
}
