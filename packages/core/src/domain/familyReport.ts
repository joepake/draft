/**
 * Which week a report is about, and how long it is kept.
 *
 * The ISO week stamp started life inside `functions/scheduled/weeklyDigest.js`
 * as the once-per-week dedupe marker, and stayed there while it had one caller.
 * It has two now — the Sunday job and the button a parent presses — and the two
 * must agree exactly: a button that computes a different key for the same week
 * writes a second report of a week that already has one, which is the duplicate
 * this key exists to prevent.
 *
 * Pure and clock-free like everything else in `domain/`: the caller hands in the
 * instant, because "which week is it" is a question about a timezone and the
 * digest already answers that with the family's own UTC offset.
 */

import type {
  FamilyReport,
  FamilyReportChild,
  FamilyReportFinding,
} from '@kidgate/schema/familyReport';
import type { DigestDay, Finding } from './digestFindings';
import {
  LATE_NIGHT_EVENING_FROM,
  LATE_NIGHT_MIN_MINUTES,
  LATE_NIGHT_MORNING_TO,
  LIMIT_HIT_MIN_DAYS,
  MAX_FINDINGS,
} from './digestFindings';
import { USAGE_TIMELINE_USED } from '@kidgate/schema/usageDay';
import { mergeTimelines } from './usageTimeline';

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * How long a stored report is kept, in days.
 *
 * Longer than the thirty days `usageDays` survive, and that asymmetry is
 * deliberate rather than an oversight: a report is an aggregate — hours and app
 * names — not the minute-by-minute timeline it was computed from, and a history
 * screen holding four entries is not a history. A year of weekly reports is
 * roughly fifty-two small documents per family and is the thing the screen
 * exists to show.
 *
 * It is still a retention decision and not a technical one. If it should match
 * the raw data instead, this constant is the only place to change, and
 * `cleanupUsageRetention` sweeps whatever it says.
 */
export const REPORT_RETENTION_DAYS = 365;

/**
 * `2026-W33` for the ISO week containing `atMs`.
 *
 * ISO weeks start on Monday and belong to the year containing their Thursday,
 * which is why the arithmetic below jumps to Thursday first — a plain
 * "week number since January 1st" disagrees with ISO in the last days of
 * December and would give two adjacent reports the same key across a new year.
 */
export function isoWeekKey(atMs: number): string {
  const date = new Date(atMs);
  date.setUTCHours(0, 0, 0, 0);
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  const yearStart = Date.UTC(date.getUTCFullYear(), 0, 1);
  const week = Math.ceil(((date.getTime() - yearStart) / DAY_MS + 1) / 7);
  return `${date.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

/**
 * The document id for one family's report of one period.
 *
 * Deriving the id from the period rather than letting Firestore generate one is
 * what makes the dedupe a `create` that fails rather than a read-then-write that
 * races. Two presses of the button in the same second are two writes to the same
 * path, and the second one loses.
 */
export function reportId(kind: FamilyReport['kind'], periodKey: string): string {
  return `${kind}_${periodKey}`;
}

/**
 * Whether a stored report is still the one the current week would produce.
 *
 * A parent pressing the button on Sunday evening, after the scheduled job has
 * already run, should see what was sent — not a second generation that words the
 * same week differently. Anything older is a different week and a new report.
 */
export function isCurrentPeriod(report: { periodKey: string }, atMs: number): boolean {
  return report.periodKey === isoWeekKey(atMs);
}

/**
 * Findings as they are stored, with anything unexpected dropped.
 *
 * The stored copy is read back by a history screen months later and by whatever
 * evaluates the model, so it is worth being strict about on the way in: a
 * finding whose params carry an object rather than a number would render as
 * `[object Object]` to a parent and would quietly poison a numeric check.
 */
export function toStoredFindings(
  findings: readonly FamilyReportFinding[],
): FamilyReportFinding[] {
  return findings.map(finding => ({
    kind: String(finding.kind),
    severity: finding.severity,
    params: Object.fromEntries(
      Object.entries(finding.params ?? {}).filter(
        ([, value]) => typeof value === 'string' || typeof value === 'number',
      ),
    ),
  }));
}

/**
 * One child device's fortnight, before anything is summed.
 *
 * `collectDigestWeeks` produces these; everything below turns them into either
 * the family's merged view or the per-child table. Keeping the two derivations
 * next to each other is the point — they have to agree on what a week is, and
 * the first version of this disagreed by summing before anyone could ask which
 * child a figure belonged to.
 */
export interface ChildWeeks {
  deviceId: string;
  name: string | null;
  dailyLimitMinutes: number | null;
  recent: DigestDay[];
  earlier: DigestDay[];
}

function sumMinutes(days: readonly DigestDay[]): number {
  return days.reduce((total, day) => total + Math.max(0, day.minutes), 0);
}

/**
 * Every child's days folded into one family week.
 *
 * Minutes sum — a phone and a tablet used at once really are two minutes of
 * screen time — while timelines merge by `mergeTimelines`, which answers *when*
 * rather than how much. The two fields genuinely want different arithmetic and
 * getting that backwards under-reports a total the devices already measured
 * correctly.
 */
export function mergeChildWeeks(children: readonly ChildWeeks[]): {
  recent: DigestDay[];
  earlier: DigestDay[];
} {
  const fold = (pick: (child: ChildWeeks) => DigestDay[]): DigestDay[] => {
    const byDate = new Map<
      string,
      { minutes: number; topApps: DigestDay['topApps']; timelines: string[] }
    >();

    for (const child of children) {
      for (const day of pick(child)) {
        const entry = byDate.get(day.date) ?? {
          minutes: 0,
          topApps: [],
          timelines: [],
        };
        entry.minutes += Math.max(0, day.minutes);
        entry.topApps.push(...day.topApps);
        if (day.timeline) {
          entry.timelines.push(day.timeline);
        }
        byDate.set(day.date, entry);
      }
    }

    return [...byDate.entries()]
      .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
      .map(([date, entry]) => ({
        date,
        minutes: entry.minutes,
        topApps: entry.topApps,
        // Absent rather than a merged blank: a family whose devices cannot
        // report a timeline must not read as one that was measured and found
        // asleep.
        ...(entry.timelines.length > 0
          ? { timeline: mergeTimelines(entry.timelines) }
          : {}),
      }));
  };

  return { recent: fold(c => c.recent), earlier: fold(c => c.earlier) };
}

/** Nights this child used the device inside the late window. */
function lateNights(days: readonly DigestDay[]): number {
  let nights = 0;
  for (const day of days) {
    if (!day.timeline) {
      continue;
    }
    let minutes = 0;
    for (let i = LATE_NIGHT_EVENING_FROM; i < day.timeline.length; i += 1) {
      if (day.timeline[i] === USAGE_TIMELINE_USED) minutes += 1;
    }
    for (let i = 0; i < LATE_NIGHT_MORNING_TO; i += 1) {
      if (day.timeline[i] === USAGE_TIMELINE_USED) minutes += 1;
    }
    if (minutes >= LATE_NIGHT_MIN_MINUTES) {
      nights += 1;
    }
  }
  return nights;
}

/** The app that took the most of this child's week, if any did. */
function topApp(days: readonly DigestDay[]): FamilyReportChild['topApp'] {
  const totals = new Map<string, { label: string; minutes: number }>();
  for (const day of days) {
    for (const app of day.topApps) {
      const minutes = Math.max(0, Math.round(app.minutes));
      if (minutes <= 0) continue;
      const seen = totals.get(app.packageName);
      if (seen) {
        seen.minutes += minutes;
        seen.label = app.label || seen.label;
      } else {
        totals.set(app.packageName, { label: app.label, minutes });
      }
    }
  }

  let best: FamilyReportChild['topApp'] = null;
  for (const [packageName, entry] of totals) {
    if (!best || entry.minutes > best.minutes) {
      best = { packageName, label: entry.label, minutes: entry.minutes };
    }
  }
  return best;
}

/**
 * One row of the comparison table.
 *
 * Deterministic throughout — nothing here reaches the model. The table is the
 * answer to the first question a parent of two children asks about a
 * family-level figure, and that answer must be the same every time it is read.
 */
export function childRow(child: ChildWeeks): FamilyReportChild {
  const limit = child.dailyLimitMinutes;
  return {
    deviceId: child.deviceId,
    name: child.name,
    screenMinutes: sumMinutes(child.recent),
    previousScreenMinutes: sumMinutes(child.earlier),
    dailyLimitMinutes: limit,
    limitDays:
      limit && limit > 0 ? child.recent.filter(day => day.minutes >= limit).length : 0,
    lateNights: lateNights(child.recent),
    topApp: topApp(child.recent),
  };
}

/**
 * Findings the family sees, with per-child ones named.
 *
 * `familyFindings` runs the shared rules over the merged week — that is the
 * story the narrative tells — and then adds back the one rule summing made
 * impossible. `limitHitRepeatedly` compares a day against a Daily Limit, and a
 * limit belongs to a device: the merged version had to be switched off for
 * every family with two children, because a family-wide total over one child's
 * limit reports an overrun that never happened. Run per child it is correct
 * again, and it carries the name so the sentence can say whose it was.
 *
 * The cap still applies across the combined list. Three findings is what a push
 * holds and what a model can turn into two sentences without reading a list
 * aloud, however many children the family has.
 */
export function familyFindings(
  merged: readonly Finding[],
  children: readonly ChildWeeks[],
): Finding[] {
  const named: Finding[] = [];

  for (const child of children) {
    const limit = child.dailyLimitMinutes;
    if (!limit || limit <= 0) {
      continue;
    }
    const days = child.recent.filter(day => day.minutes >= limit).length;
    if (days < LIMIT_HIT_MIN_DAYS) {
      continue;
    }
    named.push({
      kind: 'limitHitRepeatedly',
      severity: 'attention',
      params: { days, limitMinutes: limit },
      // Null for a lone child: there is nobody to distinguish them from, and a
      // report that names the only child reads like a form letter.
      child: children.length > 1 ? child.name : null,
    });
  }

  // The merged list already dropped `limitHitRepeatedly` — `digestFindings`
  // only fires it when handed a single `dailyLimitMinutes`, and the family view
  // has none. Nothing here can therefore duplicate it.
  const severityRank = { attention: 0, notable: 1, info: 2 } as const;
  return [...named, ...merged]
    .sort((a, b) => severityRank[a.severity] - severityRank[b.severity])
    .slice(0, MAX_FINDINGS);
}
