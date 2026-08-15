/**
 * When the day was used, as 1440 characters — one per minute, midnight first.
 *
 * `UsageTimeline` in `@kidgate/schema` holds the wire contract and the reason
 * it is a readable string rather than a packed bitfield. This file is the
 * arithmetic: build one, mark a span, read it back as runs a UI can draw.
 *
 * **Three states, ordered by how much was observed**, and every write here
 * respects that order:
 *
 * ```
 * used (#)  >  idle (.)  >  unknown (-)
 * ```
 *
 * A mark never downgrades a minute. That is what makes the marking
 * order-independent — the agent marks a span used when it sampled one, idle
 * when it sampled nothing in front, and unknown across the gap it was not
 * running for, and those spans overlap at their shared minute. Whichever
 * arrives last, the minute keeps the strongest claim anyone could make about
 * it. Letting a later `-` overwrite a `#` would mean an agent restart erasing
 * the minute it restarted in.
 *
 * Pure and clock-free: callers hand in minutes since local midnight, because
 * "which minute is it" is a question about a timezone and a device clock, and
 * `ClockPort` already owns both. That is also what lets every rule below be
 * tested without a fake clock.
 *
 * **Kotlin and Swift will need this same arithmetic** when a platform other
 * than the desktop agent starts producing timelines — Android builds one from
 * `UsageStatsManager.queryEvents`. The alphabet is in `@kidgate/schema` for
 * exactly that reason; keep this file mechanically translatable.
 */

import {
  USAGE_TIMELINE_IDLE,
  USAGE_TIMELINE_MINUTES,
  USAGE_TIMELINE_UNKNOWN,
  USAGE_TIMELINE_USED,
  type UsageTimeline,
} from '@kidgate/schema/usageDay';

export type TimelineState = 'unknown' | 'idle' | 'used';

/** One stretch of the day in a single state. Inclusive of both ends. */
export interface TimelineRun {
  state: TimelineState;
  /** Minutes since local midnight, 0–1439. */
  startMinute: number;
  endMinute: number;
}

const CHAR_OF: Record<TimelineState, string> = {
  unknown: USAGE_TIMELINE_UNKNOWN,
  idle: USAGE_TIMELINE_IDLE,
  used: USAGE_TIMELINE_USED,
};

const STATE_OF: Record<string, TimelineState> = {
  [USAGE_TIMELINE_UNKNOWN]: 'unknown',
  [USAGE_TIMELINE_IDLE]: 'idle',
  [USAGE_TIMELINE_USED]: 'used',
};

/** Higher wins when two marks land on one minute. */
const RANK: Record<TimelineState, number> = { unknown: 0, idle: 1, used: 2 };

export function emptyTimeline(): UsageTimeline {
  return USAGE_TIMELINE_UNKNOWN.repeat(USAGE_TIMELINE_MINUTES);
}

/**
 * Exactly 1440 characters from the alphabet, and nothing else.
 *
 * Used by the Cloud Function to refuse a malformed upload and by the parent UI
 * to refuse to draw one. A device's timeline is attacker-controlled input like
 * every other field it reports — see the date pinning in `reportChildUsage`.
 */
export function isTimeline(value: unknown): value is UsageTimeline {
  if (typeof value !== 'string' || value.length !== USAGE_TIMELINE_MINUTES) {
    return false;
  }
  for (const char of value) {
    if (STATE_OF[char] === undefined) {
      return false;
    }
  }
  return true;
}

/**
 * Anything into a valid timeline, losing whatever cannot be trusted.
 *
 * The one caller that matters is a restart: an agent that shipped before this
 * field existed has a persisted usage state with no timeline in it, and a
 * device whose stored blob was truncated has half of one. Both restore as a
 * day nobody measured, which is true of every minute the current process did
 * not see anyway.
 */
export function normaliseTimeline(value: unknown): UsageTimeline {
  return isTimeline(value) ? value : emptyTimeline();
}

/**
 * Mark every minute the span touches, without downgrading any of them.
 *
 * Both ends inclusive, because a span is a stretch of wall clock rather than a
 * count of minutes: a sample at 09:00:50 covering the previous thirty seconds
 * touches 08:59 and 09:00, and crediting one of them would lose half of every
 * interval the sampler ever takes.
 *
 * Out-of-range and reversed spans are ignored rather than clamped. Reversed is
 * a clock that moved backwards, which `applyForegroundSample` already refuses
 * to credit; clamping it would invent a mark at midnight.
 */
export function markTimeline(
  timeline: UsageTimeline,
  fromMinute: number,
  toMinute: number,
  state: TimelineState,
): UsageTimeline {
  const current = normaliseTimeline(timeline);
  const from = Math.floor(fromMinute);
  const to = Math.floor(toMinute);

  if (!Number.isFinite(from) || !Number.isFinite(to) || to < from) {
    return current;
  }

  const start = Math.max(0, from);
  const end = Math.min(USAGE_TIMELINE_MINUTES - 1, to);
  if (end < start) {
    return current;
  }

  const char = CHAR_OF[state];
  const chars = current.split('');
  let changed = false;
  for (let minute = start; minute <= end; minute += 1) {
    const existing = STATE_OF[chars[minute] as string] ?? 'unknown';
    if (RANK[state] > RANK[existing]) {
      chars[minute] = char;
      changed = true;
    }
  }
  // The same string back when nothing moved, so a caller comparing references
  // can skip a write. Thirty seconds of idle inside an already-idle minute is
  // the common case, not the rare one.
  return changed ? chars.join('') : current;
}

/**
 * One day across several devices, minute by minute.
 *
 * A family with a phone and a tablet has two timelines for the same day, and
 * the question a digest asks — "was this child on a screen at 23:40" — is
 * answered by either of them saying yes. So the merge is the same precedence
 * every write here already respects: `used` beats `idle` beats `unknown`, and
 * a device that was not running cannot erase a minute another device observed.
 *
 * Minutes, deliberately, are **not** what this is for. Two devices used at once
 * is one minute of the child's evening but two minutes of screen time, and
 * collapsing them here would quietly under-report a total that
 * `usageDays.minutes` already sums correctly per device. This answers *when*,
 * never *how much*.
 *
 * An empty list is a day nobody measured, which is what an absent timeline
 * means everywhere else.
 */
export function mergeTimelines(timelines: readonly UsageTimeline[]): UsageTimeline {
  const valid = timelines.filter(isTimeline);
  if (valid.length === 0) {
    return emptyTimeline();
  }
  if (valid.length === 1) {
    return valid[0] as UsageTimeline;
  }

  const chars = new Array<string>(USAGE_TIMELINE_MINUTES);
  for (let minute = 0; minute < USAGE_TIMELINE_MINUTES; minute += 1) {
    let best: TimelineState = 'unknown';
    for (const timeline of valid) {
      const state = STATE_OF[timeline[minute] as string] ?? 'unknown';
      if (RANK[state] > RANK[best]) {
        best = state;
      }
    }
    chars[minute] = CHAR_OF[best];
  }
  return chars.join('');
}

/** How many minutes were observed as used. */
export function timelineMinutesUsed(timeline: UsageTimeline): number {
  let used = 0;
  for (const char of normaliseTimeline(timeline)) {
    if (char === USAGE_TIMELINE_USED) {
      used += 1;
    }
  }
  return used;
}

/** How many minutes nobody was watching. The honesty number. */
export function timelineMinutesUnmeasured(timeline: UsageTimeline): number {
  let unknown = 0;
  for (const char of normaliseTimeline(timeline)) {
    if (char === USAGE_TIMELINE_UNKNOWN) {
      unknown += 1;
    }
  }
  return unknown;
}

/**
 * The day as stretches, for drawing.
 *
 * A renderer wants runs, not 1440 nodes: a typical day is a few dozen of them,
 * and a band built from one element per minute is a thousand-odd boxes that
 * lay out on every resize. Both ends inclusive, so a run's width in minutes is
 * `endMinute - startMinute + 1`.
 */
export function timelineRuns(timeline: UsageTimeline): TimelineRun[] {
  const chars = normaliseTimeline(timeline);
  const runs: TimelineRun[] = [];
  let startMinute = 0;
  let state = STATE_OF[chars[0] as string] ?? 'unknown';

  for (let minute = 1; minute < USAGE_TIMELINE_MINUTES; minute += 1) {
    const next = STATE_OF[chars[minute] as string] ?? 'unknown';
    if (next !== state) {
      runs.push({ state, startMinute, endMinute: minute - 1 });
      startMinute = minute;
      state = next;
    }
  }
  runs.push({ state, startMinute, endMinute: USAGE_TIMELINE_MINUTES - 1 });
  return runs;
}

/**
 * What a parent screen may honestly draw for one device-day.
 *
 * Three answers, because "there is no band here" has three different causes
 * and a UI that renders them alike tells a parent something false about at
 * least two:
 *
 * - `available` — a timeline arrived. Draw it.
 * - `unsupported` — this device can never report one. iOS, permanently: Screen
 *   Time hands out cumulative thresholds and nothing finer
 *   (`docs/FEASIBILITY.md`). Say so, in the amber "not supported on this
 *   device" register the Web Filter row already uses.
 * - `pending` — a device that could report one has not yet. A Mac paired ten
 *   minutes ago, or an Android on a build that predates the feature. Waiting,
 *   not incapable, and not a day the child spent off the device.
 *
 * The stored timeline outranks the claimed capability on purpose: data that
 * exists beats a flag that says it should not, and the reverse ordering would
 * hide a real report behind a stale capability probe.
 */
export type TimelineAvailability = 'available' | 'unsupported' | 'pending';

export function timelineAvailability(device: {
  /** `DeviceCapabilities.platform`, or whatever the device document carries. */
  platform?: string | null;
  /** `DeviceCapabilities.usageTimeline`, when the device publishes a probe. */
  capability?: boolean | null;
  /** `UsageDay.timeline` for the day being drawn. */
  timeline?: unknown;
}): TimelineAvailability {
  if (isTimeline(device.timeline)) {
    return 'available';
  }
  if (device.platform === 'ios' || device.capability === false) {
    return 'unsupported';
  }
  return 'pending';
}
