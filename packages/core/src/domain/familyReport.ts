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
  FamilyReportPerson,
} from '@kidgate/schema/familyReport';
import { childTopApps, childUsageTotals } from './childUsage';
import type { DigestDay, Finding } from './digestFindings';
import {
  DAYS_IN_WEEK,
  LATE_NIGHT_EVENING_FROM,
  LATE_NIGHT_MIN_MINUTES,
  LATE_NIGHT_MORNING_TO,
  LIMIT_HIT_MIN_DAYS,
  POSITIVE_MIN_REPORTED_DAYS,
  isPositiveFinding,
  pickFindings,
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
  /**
   * Who holds it, from `Device.childId`. Null on a device nobody has assigned.
   *
   * Optional because the field is: a device pairs, reports and enforces without
   * ever being assigned to a person, and a family mid-setup has several. Rows
   * with no `childId` still feed every device figure in the report; they are
   * simply absent from `people`, which is why the count of assigned devices is
   * worth surfacing rather than hiding.
   */
  childId?: string | null;
  dailyLimitMinutes: number | null;
  recent: DigestDay[];
  earlier: DigestDay[];
}

/**
 * What the family did with KidGate this week, as opposed to what its devices
 * measured.
 *
 * **The distinction is load-bearing, and it is why these three findings carry
 * no coverage gate.** Every usage-derived positive has to prove the week was
 * measured before it can say a child stopped on their own, because an agent
 * that was not running produces the same numbers. These are the opposite kind
 * of fact: an approved reward task, a request that reached a parent's phone, an
 * answered check-in — each is an event the *server* recorded, and none of them
 * can be faked by uninstalling anything. A child who quit the agent and still
 * completed four tasks did complete four tasks.
 *
 * Counts, never contents. What the child asked for and which site they wanted
 * stays out: this is the record that ends up in a prompt, and the header of
 * `functions/lib/digestNarrative.js` is explicit that the payload carries the
 * least it can.
 */
export interface FamilyEngagement {
  /** Reward tasks the parent approved this week. */
  tasksApproved: number;
  /** Bonus minutes those approvals granted. */
  bonusMinutes: number;
  /** Time and site requests the child sent, whatever the parent answered. */
  requestsSent: number;
  /** Safety check-ins answered, and how many were asked. */
  checkInsAnswered: number;
  checkInsAsked: number;
}

/** Below this, one task or one request is an accident rather than a habit. */
export const ENGAGEMENT_MIN_TASKS = 2;
export const ENGAGEMENT_MIN_REQUESTS = 2;
export const ENGAGEMENT_MIN_CHECK_INS = 2;

/**
 * The family's own week, as findings.
 *
 * `askedFirst` is the one worth explaining. A request is a child meeting a rule
 * head-on instead of going around it, and it is the single strongest thing this
 * product can observe about how enforcement is landing in a house — but it is
 * reported as what happened, never as praise for obedience. The rule says how
 * many requests were sent; a parent decides what that means, exactly as they do
 * with four late nights.
 *
 * Answered-vs-asked is kept whole for `checkedIn` rather than reduced to a
 * ratio: "three of four" is a fact, and "75%" is a grade.
 */
function engagementFindings(engagement?: FamilyEngagement): Finding[] {
  if (!engagement) {
    return [];
  }

  const found: Finding[] = [];

  if (engagement.tasksApproved >= ENGAGEMENT_MIN_TASKS) {
    found.push({
      kind: 'tasksDone',
      severity: 'info',
      params: {
        tasks: engagement.tasksApproved,
        bonusMinutes: Math.max(0, Math.round(engagement.bonusMinutes)),
      },
    });
  }

  if (engagement.requestsSent >= ENGAGEMENT_MIN_REQUESTS) {
    found.push({
      kind: 'askedFirst',
      severity: 'info',
      params: { requests: engagement.requestsSent },
    });
  }

  if (
    engagement.checkInsAsked >= ENGAGEMENT_MIN_CHECK_INS &&
    engagement.checkInsAnswered === engagement.checkInsAsked
  ) {
    found.push({
      kind: 'checkedIn',
      severity: 'info',
      params: {
        checkIns: engagement.checkInsAnswered,
        asked: engagement.checkInsAsked,
      },
    });
  }

  return found;
}

/** A child as `users/{uid}/children` holds them, for naming a row. */
export interface ReportChildIdentity {
  id: string;
  name: string | null;
  colorIndex: number;
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
    // Stored rather than joined at read time, so a device reassigned next month
    // does not rewrite whose week a parent already read. See the field's own
    // note in `@kidgate/schema/familyReport`.
    childId: child.childId ?? null,
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
 * The comparison table keyed by person instead of by hardware.
 *
 * The device rows this replaces were correct arithmetic answering the wrong
 * question. A child with a phone, a laptop and a television took three of the
 * five rows and won every one of them, and the family total counted the hour
 * the phone and the television were both on as two hours — which it is, in
 * device-hours, and is not in the only unit a parent thinks in.
 *
 * So the minutes come back twice: `deviceMinutes` as they always did, and
 * `screenOnMinutes` as the union of the timelines. `@kidgate/core/domain/childUsage`
 * owns that arithmetic and the reason the union is sometimes null.
 *
 * **Empty is the correct answer for a family that has assigned nothing.** Every
 * device carries an optional `childId`; a family mid-setup has none, and
 * inventing a person per device would rebuild the table this function exists to
 * replace while claiming it had been fixed. The schema documents the fallback a
 * renderer takes when this is empty.
 *
 * Children with no assigned device are dropped rather than shown at zero. A row
 * reading "0 minutes" for a child whose tablet nobody has assigned yet is a
 * statement about the setup wearing the clothes of a statement about the child.
 */
export function personRows(
  children: readonly ChildWeeks[],
  identities: readonly ReportChildIdentity[],
): FamilyReportPerson[] {
  const identityById = new Map(identities.map(child => [child.id, child]));
  const byChild = new Map<string, ChildWeeks[]>();

  for (const child of children) {
    const childId = child.childId;
    if (!childId || !identityById.has(childId)) {
      continue;
    }
    const bucket = byChild.get(childId);
    if (bucket) {
      bucket.push(child);
    } else {
      byChild.set(childId, [child]);
    }
  }

  const rows: FamilyReportPerson[] = [];

  for (const [childId, devices] of byChild) {
    const identity = identityById.get(childId);
    const recent = childUsageTotals(
      devices.map(device => ({
        deviceId: device.deviceId,
        name: device.name,
        days: device.recent,
      })),
    );
    const earlier = childUsageTotals(
      devices.map(device => ({
        deviceId: device.deviceId,
        name: device.name,
        days: device.earlier,
      })),
    );
    const apps = childTopApps(
      devices.map(device => ({
        deviceId: device.deviceId,
        name: device.name,
        days: device.recent,
      })),
      1,
    );

    // Days any one of this child's devices was at or over *its own* limit. A
    // union of days rather than a sum of them: a child who hit the phone's
    // limit and the tablet's limit on Tuesday has had one day over, and the
    // finding that quotes this number would otherwise say two.
    const overDays = new Set<string>();
    let limitedDevices = 0;
    for (const device of devices) {
      const limit = device.dailyLimitMinutes;
      if (!limit || limit <= 0) {
        continue;
      }
      limitedDevices += 1;
      for (const day of device.recent) {
        if (day.minutes >= limit) {
          overDays.add(day.date);
        }
      }
    }

    rows.push({
      childId,
      name: identity?.name ?? null,
      colorIndex: identity?.colorIndex ?? 0,
      deviceIds: devices.map(device => device.deviceId),
      deviceMinutes: recent.deviceMinutes,
      previousDeviceMinutes: earlier.deviceMinutes,
      screenOnMinutes: recent.screenOnMinutes,
      screenOnLowMinutes: recent.screenOnLowMinutes,
      screenOnHighMinutes: recent.screenOnHighMinutes,
      overlapMinutes: recent.overlapMinutes,
      coverage: recent.coverage,
      lateNights: recent.lateNights,
      limitDays: overDays.size,
      limitedDevices,
      topApp: apps[0]
        ? {
            label: apps[0].label,
            packageNames: apps[0].packageNames,
            minutes: apps[0].minutes,
          }
        : null,
    });
  }

  // Busiest first, so the row a parent opens the report to find is the first
  // one. Ties break on name for a stable order between two quiet weeks.
  return rows.sort(
    (a, b) =>
      b.deviceMinutes - a.deviceMinutes || (a.name ?? '').localeCompare(b.name ?? ''),
  );
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
  engagement?: FamilyEngagement,
): Finding[] {
  const named: Finding[] = [];

  for (const child of children) {
    const limit = child.dailyLimitMinutes;
    if (!limit || limit <= 0) {
      continue;
    }
    const days = child.recent.filter(day => day.minutes >= limit).length;
    // Null for a lone child: there is nobody to distinguish them from, and a
    // report that names the only child reads like a form letter.
    const child_ = children.length > 1 ? child.name : null;

    if (days >= LIMIT_HIT_MIN_DAYS) {
      named.push({
        kind: 'limitHitRepeatedly',
        severity: 'attention',
        params: { days, limitMinutes: limit },
        child: child_,
      });
      continue;
    }

    // The mirror, and per child for the same reason the overrun is: a limit
    // belongs to a device, so a family-wide total says nothing about whether
    // anybody's own limit held. Every condition is `limitRespected`'s in
    // `digestFindings`, restated here because that rule needs one week and one
    // limit and this loop has one of each per child.
    const total = child.recent.reduce((sum, day) => sum + Math.max(0, day.minutes), 0);
    if (days === 0 && child.recent.length >= DAYS_IN_WEEK && total >= limit) {
      named.push({
        kind: 'limitRespected',
        severity: 'info',
        params: { days: DAYS_IN_WEEK, limitMinutes: limit },
        child: child_,
      });
    }
  }

  // Positives computed over the *merged* week are only honest when every child
  // in it was measured. A family where one child reported all seven days and
  // another reported none merges to a full-looking week, and "no late nights"
  // is then a claim about the child who was dark. The per-child rules above
  // carry their own coverage; these cannot, so they are dropped wholesale.
  const covered =
    children.length > 0 &&
    children.every(child => child.recent.length >= POSITIVE_MIN_REPORTED_DAYS);
  const fromMerged = covered
    ? merged
    : merged.filter(finding => !isPositiveFinding(finding));

  // The merged list already dropped `limitHitRepeatedly` — `digestFindings`
  // only fires it when handed a single `dailyLimitMinutes`, and the family view
  // has none. Nothing here can therefore duplicate it.
  return pickFindings([...named, ...fromMerged, ...engagementFindings(engagement)]);
}
