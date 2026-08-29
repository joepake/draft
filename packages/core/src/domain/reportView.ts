/**
 * A stored weekly report, as the numbers a surface actually puts on screen.
 *
 * `domain/familyReport` answers "which week is this and how long do we keep
 * it"; this answers "what does a reader see". They are separate because the
 * first is written by the Cloud Functions and the second by the clients, and
 * only the second has to survive being rendered twice — the dashboard draws a
 * DOM card, and the share button draws the same report onto a canvas as an
 * image a parent sends to the other parent.
 *
 * **Two renderings of one report is the failure this module exists to prevent.**
 * A share image that says "6h 20m" beside a page that says "6h 21m" is the same
 * class of bug as the hand-mirrored constant this monorepo was built to end
 * (rule 2 in the root `CLAUDE.md`) — nothing fails, the two just disagree, and
 * the one a parent forwards is the one nobody checked. So the derived figures
 * live here, both renderers read them, and neither computes its own.
 *
 * Pure and clock-free like the rest of `domain/`: a report carries its own
 * `fromDate`/`toDate`, so nothing here needs to know what today is. Formatting
 * needs a locale and a translator and stays at the call site.
 */

import type { FamilyReport, FamilyReportFinding } from '@kidgate/schema/familyReport';
import type { AppLanguage } from '@kidgate/schema/language';
import { MEANINGFUL_DELTA_MINUTES } from './digestFindings';

const DAY_MS = 24 * 60 * 60 * 1000;

/** Days a week has when the dates are unreadable — the report is still a week. */
const DEFAULT_PERIOD_DAYS = 7;

export type ReportTrendDirection = 'up' | 'down' | 'flat';

export interface ReportTrend {
  direction: ReportTrendDirection;
  /** Always positive; `direction` carries the sign. */
  deltaMinutes: number;
  /** Against last week's total. Zero when there is no baseline to divide by. */
  percent: number;
  /**
   * False for a family's first measured week.
   *
   * A renderer must not print "+100%" when last week is zero — the child did
   * not double anything, the product was not watching yet.
   */
  hasBaseline: boolean;
}

/**
 * How the two weeks compare.
 *
 * The threshold is `digestFindings`' own, imported rather than restated: a card
 * that called a 6-minute change "up" while the finding under it said the week
 * was flat would be one report contradicting itself on one screen.
 */
export function reportTrend(report: {
  screenMinutes: number;
  previousScreenMinutes: number;
}): ReportTrend {
  const recent = Math.max(0, report.screenMinutes || 0);
  const earlier = Math.max(0, report.previousScreenMinutes || 0);
  const delta = recent - earlier;

  if (earlier <= 0) {
    return {
      direction: 'flat',
      deltaMinutes: 0,
      percent: 0,
      hasBaseline: false,
    };
  }

  if (Math.abs(delta) < MEANINGFUL_DELTA_MINUTES) {
    return { direction: 'flat', deltaMinutes: 0, percent: 0, hasBaseline: true };
  }

  return {
    direction: delta > 0 ? 'up' : 'down',
    deltaMinutes: Math.abs(delta),
    percent: Math.round((Math.abs(delta) / earlier) * 100),
    hasBaseline: true,
  };
}

/**
 * The dashboard's tone names, from a finding's severity.
 *
 * `attention` is `warning` and not `critical` on purpose: the severity means
 * "lead with this", not "something is wrong with your child" — the note on
 * `FindingSeverity` in `digestFindings` says so — and a red banner over four
 * late nights reads as an accusation the product is in no position to make.
 * `critical` stays for the things that are actually broken, which a report is
 * never about.
 */
export function findingTone(
  severity: FamilyReportFinding['severity'],
): 'warning' | 'good' | 'muted' {
  if (severity === 'attention') return 'warning';
  if (severity === 'notable') return 'good';
  return 'muted';
}

/** Inclusive day count for `YYYY-MM-DD` bounds; 7 when either is unreadable. */
export function periodDays(fromDate: string, toDate: string): number {
  const from = Date.parse(`${fromDate}T00:00:00Z`);
  const to = Date.parse(`${toDate}T00:00:00Z`);
  if (!Number.isFinite(from) || !Number.isFinite(to) || to < from) {
    return DEFAULT_PERIOD_DAYS;
  }
  return Math.round((to - from) / DAY_MS) + 1;
}

export interface ReportStat {
  key: 'screenTime' | 'dailyAverage' | 'blockedApps' | 'blockedWebVisits';
  /** Minutes for the two duration stats, a plain count for the other two. */
  value: number;
  unit: 'minutes' | 'count';
}

/**
 * The four figures every rendering of a report shows, in one order.
 *
 * The daily average is derived here rather than at each call site because it is
 * the one number in the set that is not stored — and a page dividing by 7 while
 * an image divides by the report's own day count is precisely the drift the
 * module header warns about. A short first week is a real case: the digest job
 * runs against whatever days exist.
 */
export type ReportStats = [ReportStat, ReportStat, ReportStat, ReportStat];

/** A tuple, not an array: the first entry is the hero figure every renderer leads with. */
export function reportStats(report: FamilyReport): ReportStats {
  const days = Math.max(1, periodDays(report.fromDate, report.toDate));

  return [
    {
      key: 'screenTime',
      value: Math.max(0, report.screenMinutes || 0),
      unit: 'minutes',
    },
    {
      key: 'dailyAverage',
      value: Math.round(Math.max(0, report.screenMinutes || 0) / days),
      unit: 'minutes',
    },
    {
      key: 'blockedApps',
      value: Math.max(0, report.blockedAppOpens || 0),
      unit: 'count',
    },
    {
      key: 'blockedWebVisits',
      value: Math.max(0, report.blockedWebVisits || 0),
      unit: 'count',
    },
  ];
}

/**
 * The sentence this reader was sent, or the nearest one that exists.
 *
 * Reports store the narrative per locale because two parents in one family read
 * different languages and both were sent a sentence (see the note on
 * `narrative` in the schema). A parent who has since switched the dashboard to
 * a third language has no sentence of their own, and showing nothing would hide
 * the whole point of the report — so English, then whatever was written.
 *
 * Returns null only when no locale produced prose at all, which is the template
 * case and a real state: `source: 'template'` records it.
 */
export function reportNarrative(
  report: Pick<FamilyReport, 'narrative'>,
  language: AppLanguage | string,
): string | null {
  const narrative = report.narrative ?? {};
  const own = narrative[language as AppLanguage];
  if (typeof own === 'string' && own.trim()) {
    return own.trim();
  }

  const english = narrative.en;
  if (typeof english === 'string' && english.trim()) {
    return english.trim();
  }

  const any = Object.values(narrative).find(
    text => typeof text === 'string' && text.trim(),
  );
  return typeof any === 'string' ? any.trim() : null;
}

/**
 * `2026-W33` split for display, or null when the key is not one.
 *
 * A renderer wanting "Week 33" must not slice the string itself: the key is a
 * dedupe id first (the schema says so), and the two callers that parse it by
 * hand are two places to get the ISO year wrong in the last days of December.
 */
export function reportWeek(periodKey: string): { year: number; week: number } | null {
  const match = /^(\d{4})-W(\d{2})$/.exec(periodKey ?? '');
  if (!match) {
    return null;
  }
  return { year: Number(match[1]), week: Number(match[2]) };
}

export interface ReportChildRow {
  /**
   * The row's identity, for keying a list. A `childId` when the report grouped
   * by person, a `deviceId` when it fell back to hardware.
   */
  id: string;
  /**
   * Set only on a person row. Null when this row is a device, which is what a
   * report written before children existed, or by a family that has assigned
   * nothing, still produces.
   */
  childId: string | null;
  /** Set only on a device row, for the same reason inverted. */
  deviceId: string | null;
  name: string | null;
  /**
   * Devices added up. Two screens on at once is two minutes here — which is
   * what this column always meant, and what `share` has to be a share of.
   */
  screenMinutes: number;
  /**
   * Wall-clock minutes in front of any screen, on a person row that could be
   * measured. Null on a device row, and null on a person whose devices cannot
   * report a timeline — never render it as zero.
   */
  screenOnMinutes: number | null;
  /** The same figure for the week before, which `deltaMinutes` is derived from. */
  previousMinutes: number;
  /** Signed: positive is more screen time than the week before. */
  deltaMinutes: number;
  /** Share of the family's week, 0–100. Zero when the family measured nothing. */
  sharePercent: number;
  /** The device's own limit. Always null on a person row — see `hasLimit`. */
  dailyLimitMinutes: number | null;
  /**
   * Whether anything this row covers was measured against a Daily Limit.
   *
   * The column needs it because zero limit days has two meanings: a child who
   * stayed under every limit they had, and a child who never had one. A person
   * holds several devices with several limits, so there is no single number to
   * check for null the way a device row does.
   */
  hasLimit: boolean;
  limitDays: number;
  lateNights: number;
  topApp: { packageName: string; label: string; minutes: number } | null;
  /** The busiest child of the week, for the renderer to weight the row. */
  isBusiest: boolean;
}

/**
 * The comparison table, or an empty list when there is nothing to compare.
 *
 * **One row is not a comparison.** A family with a single child device would
 * see its own hero figure repeated under a heading, so the table is withheld
 * rather than rendered with one line — and every caller gets that decision from
 * here instead of each deciding for itself.
 *
 * Also empty for a report written before the field existed. Reports are kept
 * for a year, so that case outnumbers the others for a while yet.
 *
 * `sharePercent` is derived rather than stored because it is a ratio against a
 * total the report already carries, and a stored copy would be the one that
 * disagreed after a backfill. Percentages are rounded independently and will
 * not always sum to 100 — which is honest: the alternative is inventing a
 * remainder and attributing it to whichever child sorts last.
 */
export function reportChildren(report: FamilyReport): ReportChildRow[] {
  /*
   * People first, hardware second, and never a mix of the two.
   *
   * A family that has assigned its devices gets one row per child, which is the
   * comparison the table was always meant to be: a child with a phone, a laptop
   * and a television took three rows of the device version and won all of them.
   * Everyone else — a family mid-setup, and every report written before
   * `Child` existed — falls back to the device rows that week actually stored.
   *
   * Falling back rather than merging matters: the two are different units. A
   * table with two person rows and one stray device row would put a child's
   * union beside a device's total under one heading and invite the reader to
   * add them.
   */
  const people = report.people ?? [];
  const rows: ReportChildRow[] =
    people.length >= 2
      ? people.map(person => ({
          id: person.childId,
          childId: person.childId,
          deviceId: null,
          name: person.name ?? null,
          screenMinutes: Math.max(0, person.deviceMinutes || 0),
          screenOnMinutes: person.screenOnMinutes,
          previousMinutes: Math.max(0, person.previousDeviceMinutes || 0),
          dailyLimitMinutes: null,
          hasLimit: (person.limitedDevices || 0) > 0,
          limitDays: Math.max(0, person.limitDays || 0),
          lateNights: Math.max(0, person.lateNights || 0),
          topApp: person.topApp
            ? {
                // A person's top app is merged across platforms that name it
                // differently, so it has a list of package names rather than
                // one. The first is enough to resolve an icon.
                packageName: person.topApp.packageNames[0] ?? '',
                label: person.topApp.label,
                minutes: person.topApp.minutes,
              }
            : null,
          sharePercent: 0,
          deltaMinutes: 0,
          isBusiest: false,
        }))
      : (report.children ?? []).map(child => ({
          id: child.deviceId,
          childId: null,
          deviceId: child.deviceId,
          name: child.name ?? null,
          screenMinutes: Math.max(0, child.screenMinutes || 0),
          screenOnMinutes: null,
          previousMinutes: Math.max(0, child.previousScreenMinutes || 0),
          dailyLimitMinutes: child.dailyLimitMinutes ?? null,
          hasLimit: (child.dailyLimitMinutes ?? 0) > 0,
          limitDays: Math.max(0, child.limitDays || 0),
          lateNights: Math.max(0, child.lateNights || 0),
          topApp: child.topApp ?? null,
          sharePercent: 0,
          deltaMinutes: 0,
          isBusiest: false,
        }));

  if (rows.length < 2) {
    return [];
  }

  const familyMinutes = rows.reduce((total, row) => total + row.screenMinutes, 0);
  const busiest = rows.reduce(
    (best, row) => (row.screenMinutes > (best?.screenMinutes ?? -1) ? row : best),
    rows[0],
  );

  return rows
    .slice()
    .sort((a, b) => b.screenMinutes - a.screenMinutes)
    .map(row => ({
      ...row,
      deltaMinutes: row.screenMinutes - row.previousMinutes,
      sharePercent:
        familyMinutes > 0 ? Math.round((row.screenMinutes / familyMinutes) * 100) : 0,
      // Ties go to whichever sorted first; the flag only weights a row
      // visually, and two children on identical minutes have no busiest.
      isBusiest: familyMinutes > 0 && row.id === busiest?.id,
    }));
}
