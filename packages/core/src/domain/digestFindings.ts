/**
 * What was worth saying about a family's week.
 *
 * The weekly digest currently carries four numbers — total minutes, the delta
 * against last week, blocked app opens, blocked sites — and picks one of three
 * sentences from them (`functions/scheduled/weeklyDigest.js`, `buildDigest`).
 * That is a report, not an observation: a week where the total barely moved but
 * the child was up past midnight four nights reads exactly like a quiet one.
 *
 * This module is the missing step. It takes the week as data and returns the
 * handful of things a parent would actually want pointed out, each as a `kind`
 * plus the numbers behind it. What renders them — a push string, an email
 * paragraph, a prompt handed to a model — is somebody else's problem, and
 * deliberately so: the same finding has to survive being turned into fourteen
 * languages and, eventually, into generated prose that must not invent a
 * number it was not given.
 *
 * **Params carry raw values, never formatted ones.** `formatDuration` needs a
 * locale and a translator, and dragging either into `packages/core` would break
 * the rule that keeps this package platform-free. A caller that has both —
 * `functions/lib/familyStats.js` does — formats at render time.
 *
 * Pure and clock-free, same as `scheduleWindow` and `usageTimeline` next door:
 * every day arrives as a record with its own date key, so a rule can be tested
 * by writing down a week rather than by faking a clock.
 */

import type { UsageAppBreakdown, UsageTimeline } from '@kidgate/schema/usageDay';
import { USAGE_TIMELINE_USED } from '@kidgate/schema/usageDay';

/**
 * Below this the two weeks are "about the same" and a comparison sentence
 * would be noise dressed up as a trend. Fifteen minutes across a whole week is
 * well inside the sampling error of both platforms' usage counters.
 *
 * Mirrored today in `functions/scheduled/weeklyDigest.js`, which had it first.
 * That copy is the one to delete when the digest starts consuming this module —
 * two thresholds that disagree would put a trend in the email and a flat week
 * in the push, from the same numbers.
 */
export const MEANINGFUL_DELTA_MINUTES = 15;

/**
 * A night counts as late only past this much use, so a single notification
 * check at 23:05 does not become "your child was up late".
 */
export const LATE_NIGHT_MIN_MINUTES = 10;

/** Nights below this are an ordinary variation, not a pattern worth a sentence. */
export const LATE_NIGHT_MIN_NIGHTS = 2;

/** At or past this many nights it stops being a habit and becomes the headline. */
export const LATE_NIGHT_ATTENTION_NIGHTS = 3;

/**
 * The late window, as minutes since local midnight, running 23:00 → 05:00.
 *
 * Split rather than a single range because it crosses midnight — the same
 * problem `scheduleWindow` solves for curfews, and solved the same way.
 */
export const LATE_NIGHT_EVENING_FROM = 23 * 60;
export const LATE_NIGHT_MORNING_TO = 5 * 60;

/** An app has to move by both of these to count as a surge, not a wobble. */
export const APP_SURGE_MIN_DELTA_MINUTES = 60;
export const APP_SURGE_MIN_RATIO = 1.5;

/** A new app is only worth naming once it has taken a real share of the week. */
export const NEW_TOP_APP_MIN_MINUTES = 60;

/** Days at or over the daily limit before it stops being an occasional overrun. */
export const LIMIT_HIT_MIN_DAYS = 3;

/** Blocking has to at least double *and* clear this floor to be a spike. */
export const BLOCKED_SPIKE_MIN_COUNT = 20;
export const BLOCKED_SPIKE_MIN_RATIO = 2;

/**
 * How many findings a caller gets back.
 *
 * A push notification holds two sentences and an email paragraph holds three.
 * Handing a renderer nine findings does not produce a richer digest, it
 * produces one that buries the thing that mattered — and handing nine to a
 * model produces a list read aloud. The cap is here rather than at each caller
 * so every surface agrees on which three won.
 */
export const MAX_FINDINGS = 3;

export type FindingKind =
  | 'usageUp'
  | 'usageDown'
  | 'usageFlat'
  | 'lateNight'
  | 'newTopApp'
  | 'appSurge'
  | 'limitHitRepeatedly'
  | 'blockedSpike'
  | 'quietWeek';

/**
 * How loudly to say it.
 *
 * `attention` is not "something is wrong with your child" — it is "this is the
 * line to lead with". Nothing in this module diagnoses anything; a parent
 * decides what four late nights mean in their house.
 */
export type FindingSeverity = 'info' | 'notable' | 'attention';

export interface Finding {
  kind: FindingKind;
  severity: FindingSeverity;
  /**
   * The numbers behind the finding, unformatted.
   *
   * Also the allow-list a generated sentence is checked against: a renderer
   * that hands these to a model can reject any output containing a number that
   * is not derived from this record, which makes an invented figure impossible
   * rather than unlikely.
   */
  params: Record<string, string | number>;
  /**
   * Whose week this is about, set by the caller when a family has more than one
   * child device.
   *
   * The rules here do not know about children — they take a week and return
   * what is true of it. `familyReport.familyFindings` runs the per-device rules
   * and tags what comes back, which keeps this module a pure function of one
   * week and leaves "which child" where the device documents are.
   *
   * Outside `params` on purpose: a name inside a param would have to appear in
   * the sentence, and that means a `{{child}}` slot in every finding string in
   * fourteen languages — including for the families with one child, who would
   * then read their own child's name in a report that could not be about
   * anybody else.
   */
  child?: string | null;
}

export interface DigestDay {
  /** Local day key, `YYYY-MM-DD`. */
  date: string;
  minutes: number;
  topApps: UsageAppBreakdown[];
  /**
   * Absent on a device that cannot report one — iOS never does. Rules that
   * need it skip the day rather than assuming the child was asleep, per the
   * three-state contract in `@kidgate/schema/usageDay`.
   */
  timeline?: UsageTimeline;
}

export interface DigestWeek {
  days: DigestDay[];
  blockedAppOpens: number;
  blockedWebVisits: number;
}

export interface DigestInput {
  thisWeek: DigestWeek;
  lastWeek: DigestWeek;
  /** Null when the family has not set one — the limit rules then do not fire. */
  dailyLimitMinutes: number | null;
}

function totalMinutes(week: DigestWeek): number {
  return week.days.reduce((sum, day) => sum + Math.max(0, day.minutes), 0);
}

/** Minutes per app across the week, keyed by package name. */
function appMinutes(week: DigestWeek): Map<string, { label: string; minutes: number }> {
  const totals = new Map<string, { label: string; minutes: number }>();

  for (const day of week.days) {
    for (const app of day.topApps) {
      const minutes = Math.max(0, Math.round(app.minutes));
      if (minutes <= 0) {
        continue;
      }
      const existing = totals.get(app.packageName);
      if (existing) {
        existing.minutes += minutes;
        // Keep the newest label: an app that was renamed mid-week should be
        // named the way the child's launcher names it now.
        existing.label = app.label || existing.label;
      } else {
        totals.set(app.packageName, { label: app.label, minutes });
      }
    }
  }

  return totals;
}

/**
 * Minutes used inside the late window, and how late it ran.
 *
 * The returned minute is on a **24–29 hour clock**: 23:40 is 1420, 00:30 the
 * next morning is 1470. One number that sorts correctly across midnight is
 * what lets "the latest night this week" be a `Math.max`. Renderers take
 * `latestMinute % 1440` to get a wall clock back.
 */
function lateNightOf(timeline: UsageTimeline): {
  minutes: number;
  latestMinute: number;
} {
  let minutes = 0;
  let latestMinute = -1;

  for (let index = LATE_NIGHT_EVENING_FROM; index < timeline.length; index += 1) {
    if (timeline[index] === USAGE_TIMELINE_USED) {
      minutes += 1;
      latestMinute = Math.max(latestMinute, index);
    }
  }

  for (let index = 0; index < LATE_NIGHT_MORNING_TO; index += 1) {
    if (timeline[index] === USAGE_TIMELINE_USED) {
      minutes += 1;
      latestMinute = Math.max(latestMinute, index + 1440);
    }
  }

  return { minutes, latestMinute };
}

function usageTrend(input: DigestInput): Finding | null {
  const recent = totalMinutes(input.thisWeek);
  const earlier = totalMinutes(input.lastWeek);

  // No baseline: a first week has nothing to be up or down against, and
  // "+18h vs 0" would read as an explosion rather than as a setup.
  if (earlier <= 0) {
    return null;
  }

  const delta = recent - earlier;

  if (Math.abs(delta) < MEANINGFUL_DELTA_MINUTES) {
    return {
      kind: 'usageFlat',
      severity: 'info',
      params: { totalMinutes: recent },
    };
  }

  return {
    kind: delta > 0 ? 'usageUp' : 'usageDown',
    severity: 'notable',
    params: {
      totalMinutes: recent,
      deltaMinutes: Math.abs(delta),
      percent: Math.round((Math.abs(delta) / earlier) * 100),
    },
  };
}

function lateNight(week: DigestWeek): Finding | null {
  let nights = 0;
  let latestMinute = -1;

  for (const day of week.days) {
    if (!day.timeline) {
      continue;
    }
    const late = lateNightOf(day.timeline);
    if (late.minutes >= LATE_NIGHT_MIN_MINUTES) {
      nights += 1;
      latestMinute = Math.max(latestMinute, late.latestMinute);
    }
  }

  if (nights < LATE_NIGHT_MIN_NIGHTS) {
    return null;
  }

  return {
    kind: 'lateNight',
    severity: nights >= LATE_NIGHT_ATTENTION_NIGHTS ? 'attention' : 'notable',
    params: { nights, latestMinute },
  };
}

function newTopApp(input: DigestInput): Finding | null {
  const recent = appMinutes(input.thisWeek);
  const earlier = appMinutes(input.lastWeek);

  let best: { packageName: string; label: string; minutes: number } | null = null;

  for (const [packageName, entry] of recent) {
    if (entry.minutes < NEW_TOP_APP_MIN_MINUTES) {
      continue;
    }
    // Present last week at any level: an app the child already used is not
    // news, however much it grew. That case is `appSurge`.
    if (earlier.has(packageName)) {
      continue;
    }
    if (!best || entry.minutes > best.minutes) {
      best = { packageName, label: entry.label, minutes: entry.minutes };
    }
  }

  if (!best) {
    return null;
  }

  return {
    kind: 'newTopApp',
    severity: 'notable',
    params: {
      packageName: best.packageName,
      label: best.label,
      minutes: best.minutes,
    },
  };
}

function appSurge(input: DigestInput): Finding | null {
  const recent = appMinutes(input.thisWeek);
  const earlier = appMinutes(input.lastWeek);

  let best: {
    packageName: string;
    label: string;
    minutes: number;
    delta: number;
  } | null = null;

  for (const [packageName, entry] of recent) {
    const before = earlier.get(packageName)?.minutes ?? 0;
    // Absent last week is `newTopApp`'s finding, not this one — reporting both
    // would spend two of three slots on one app.
    if (before <= 0) {
      continue;
    }
    const delta = entry.minutes - before;
    if (delta < APP_SURGE_MIN_DELTA_MINUTES) {
      continue;
    }
    if (entry.minutes < before * APP_SURGE_MIN_RATIO) {
      continue;
    }
    if (!best || delta > best.delta) {
      best = { packageName, label: entry.label, minutes: entry.minutes, delta };
    }
  }

  if (!best) {
    return null;
  }

  return {
    kind: 'appSurge',
    severity: 'notable',
    params: {
      packageName: best.packageName,
      label: best.label,
      minutes: best.minutes,
      deltaMinutes: best.delta,
    },
  };
}

function limitHitRepeatedly(input: DigestInput): Finding | null {
  const limit = input.dailyLimitMinutes;
  if (limit === null || limit <= 0) {
    return null;
  }

  const days = input.thisWeek.days.filter(day => day.minutes >= limit).length;
  if (days < LIMIT_HIT_MIN_DAYS) {
    return null;
  }

  return {
    kind: 'limitHitRepeatedly',
    severity: 'attention',
    params: { days, limitMinutes: limit },
  };
}

function blockedSpike(input: DigestInput): Finding | null {
  const candidates: { channel: 'app' | 'web'; recent: number; earlier: number }[] = [
    {
      channel: 'app',
      recent: input.thisWeek.blockedAppOpens,
      earlier: input.lastWeek.blockedAppOpens,
    },
    {
      channel: 'web',
      recent: input.thisWeek.blockedWebVisits,
      earlier: input.lastWeek.blockedWebVisits,
    },
  ];

  let best: { channel: 'app' | 'web'; recent: number; earlier: number } | null = null;

  for (const candidate of candidates) {
    if (candidate.recent < BLOCKED_SPIKE_MIN_COUNT) {
      continue;
    }
    // A first week of blocking has no ratio to clear; the floor above is the
    // whole test for it.
    if (
      candidate.earlier > 0 &&
      candidate.recent < candidate.earlier * BLOCKED_SPIKE_MIN_RATIO
    ) {
      continue;
    }
    if (!best || candidate.recent - candidate.earlier > best.recent - best.earlier) {
      best = candidate;
    }
  }

  if (!best) {
    return null;
  }

  return {
    kind: 'blockedSpike',
    severity: 'notable',
    params: {
      channel: best.channel,
      count: best.recent,
      previousCount: best.earlier,
    },
  };
}

/**
 * Fixed tie-break within a severity, so two weeks that produce the same
 * findings always order them the same way.
 *
 * Sorting on severity alone leaves the rest to `Array.prototype.sort`'s
 * stability and therefore to the order the rules happen to run in — which is
 * fine until a rule is inserted and every family's digest silently reorders.
 */
const KIND_PRIORITY: Record<FindingKind, number> = {
  limitHitRepeatedly: 0,
  lateNight: 1,
  blockedSpike: 2,
  appSurge: 3,
  newTopApp: 4,
  usageUp: 5,
  usageDown: 6,
  quietWeek: 7,
  usageFlat: 8,
};

const SEVERITY_RANK: Record<FindingSeverity, number> = {
  attention: 0,
  notable: 1,
  info: 2,
};

/**
 * The week, as the two or three things worth saying about it.
 *
 * Returns an empty array for a family with nothing measured — the digest job
 * already skips those (`sendWeeklyDigest` stamps the week marker and moves on),
 * and a finding built from a silent week would report an offline device as a
 * result.
 *
 * `quietWeek` is the one finding that exists to say nothing happened, and it is
 * why the digest is worth sending at all: every other notification in this
 * product fires because something went wrong, which leaves a parent having a
 * good month with no evidence the subscription does anything. It is returned
 * only when usage did not rise and no rule found anything to flag, so it can
 * never contradict a finding sitting next to it.
 */
export function digestFindings(input: DigestInput): Finding[] {
  if (totalMinutes(input.thisWeek) <= 0 && totalMinutes(input.lastWeek) <= 0) {
    return [];
  }

  const found = [
    limitHitRepeatedly(input),
    lateNight(input.thisWeek),
    blockedSpike(input),
    appSurge(input),
    newTopApp(input),
    usageTrend(input),
  ].filter((finding): finding is Finding => finding !== null);

  // `usageDown` is the one `notable` finding a quiet week can contain: less
  // screen time than last week and nothing flagged is the good news this digest
  // exists to deliver, not a reason to withhold it. `usageUp` fails the test on
  // its own severity, so it needs no separate clause.
  const quiet = found.every(
    finding => finding.severity === 'info' || finding.kind === 'usageDown',
  );

  if (quiet) {
    const week: Finding = {
      kind: 'quietWeek',
      severity: 'info',
      params: { totalMinutes: totalMinutes(input.thisWeek) },
    };
    return [
      week,
      // `usageFlat` says the same thing one line later; `usageDown` adds the
      // number that makes the quiet week concrete.
      ...found.filter(finding => finding.kind !== 'usageFlat'),
    ].slice(0, MAX_FINDINGS);
  }

  return found
    .slice()
    .sort(
      (a, b) =>
        SEVERITY_RANK[a.severity] - SEVERITY_RANK[b.severity] ||
        KIND_PRIORITY[a.kind] - KIND_PRIORITY[b.kind],
    )
    .slice(0, MAX_FINDINGS);
}

/**
 * Every numeric token a finding legitimately contains, as strings.
 *
 * The guard rail for generated prose: a renderer that asks a model to turn
 * findings into sentences can extract the digits from what comes back and
 * refuse anything not in this set. A model cannot then quote a figure it was
 * never handed, whatever the prompt says — which matters because the one thing
 * a parent must be able to trust in a report about their child is the numbers.
 *
 * Derived values a sentence may reasonably reach for are included: minutes
 * split into hours and remainder, and `latestMinute` as a wall clock, because
 * "1h 35m" and "23:40" are the forms a person actually reads.
 *
 * **It catches fabrication, not misattribution.** Every token in "this week
 * your child used 7 hours" can be legitimate while the sentence is false,
 * because 7 hours was last week's total. This is a floor under generated prose,
 * not a proof that it is true — the eval over real weeks is what has to catch
 * the rest, and a reviewer who assumes otherwise will ship the wrong thing.
 */
export function findingNumericTokens(findings: Finding[]): Set<string> {
  const tokens = new Set<string>();

  const add = (value: number): void => {
    if (Number.isFinite(value)) {
      tokens.add(String(value));
    }
  };

  for (const finding of findings) {
    for (const [key, value] of Object.entries(finding.params)) {
      if (typeof value !== 'number') {
        continue;
      }
      add(value);

      if (key === 'latestMinute') {
        const wall = ((value % 1440) + 1440) % 1440;
        add(Math.floor(wall / 60));
        add(wall % 60);
        continue;
      }

      if (key.endsWith('Minutes') || key === 'minutes') {
        add(Math.floor(value / 60));
        add(value % 60);
      }
    }
  }

  return tokens;
}
