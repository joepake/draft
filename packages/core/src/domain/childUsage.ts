/**
 * One person's week, assembled from every device they hold.
 *
 * Everything that counts in this product counted devices. `usageDays` are
 * written per device, `FamilyReportChild` is keyed by `deviceId` despite its
 * name, and `ChildDetailScreen` summed a child's devices with `+`. That is the
 * right arithmetic for the question "how many device-hours did this household
 * spend" and the wrong one for the question a parent actually asks, which is
 * "how long was my child in front of a screen".
 *
 * The two differ by however long the phone and the television were on at once,
 * and that gap is not small in the families that have more than one device —
 * which is exactly the families this file exists for.
 *
 * ## Two totals, both true, neither sufficient
 *
 * - **`deviceMinutes`** — the sum. A phone and a laptop used together for an
 *   hour is two hours here. This is what every existing surface already shows
 *   and what `usageDays.minutes` was measured to answer.
 * - **`screenOnMinutes`** — the union of the timelines. The same hour is one
 *   hour. This is wall clock out of the child's day.
 *
 * Publishing only the sum overstates; publishing only the union understates the
 * bill for a household with three screens. So both are returned, and the
 * difference between them is returned as `overlapMinutes` — a figure that is
 * itself the interesting one, because "used two devices at once for 41 minutes"
 * is a sentence about a child's evening that no per-device screen could say.
 *
 * ## When the union cannot be computed
 *
 * `UsageTimeline` is a capability, not a guarantee. iOS never publishes one —
 * Screen Time hands out cumulative thresholds and nothing finer, recorded in
 * `docs/FEASIBILITY.md` — so a child with an iPhone and a Mac has one device
 * that can say *when* and one that can only say *how much*.
 *
 * The honest answer there is a range, not a number. The truth is at least the
 * union of what was timed (and at least the largest untimed device on its own),
 * and at most that union plus every untimed device stacked end to end. Both
 * bounds are computed per day and then summed, which is tighter than bounding
 * the week as a whole and still correct.
 *
 * A renderer with `exact === false` must draw the range or draw nothing. It must
 * not quietly pick `screenOnHighMinutes` and call it the total: that is the sum
 * again, wearing a label that claims it is not.
 *
 * Pure and clock-free like the rest of `domain/`. Days arrive already selected
 * by whoever knows the timezone, which on the client is `UsageDayRepository` and
 * on the server is `collectDigestWeeks`.
 */

import type { UsageAppBreakdown, UsageTimeline } from '@kidgate/schema/usageDay';
import { USAGE_TIMELINE_MINUTES } from '@kidgate/schema/usageDay';
import { lateNightHits } from './digestFindings';
import {
  isTimeline,
  mergeTimelines,
  timelineMinutesUnmeasured,
  timelineMinutesUsed,
} from './usageTimeline';

export { lateNightHits } from './digestFindings';

/** One device-day, in the smallest shape both callers already have. */
export interface ChildUsageDay {
  /** Local day key, `YYYY-MM-DD`. */
  date: string;
  minutes: number;
  topApps?: readonly UsageAppBreakdown[];
  /**
   * Minutes the agent counted and then excluded — screensavers, launchers.
   * Absent on a platform that reports none; **never fabricate a zero**, which
   * would claim "this device excludes packages and saw none of them today".
   * Carried so a child report can name the same subtraction its per-device
   * sibling does instead of leaving the rows short of the headline.
   */
  idleMinutes?: number;
  /** Absent on a device that cannot report one. Never fabricate it. */
  timeline?: UsageTimeline;
}

/** One device belonging to the child, with the days it reported. */
export interface ChildUsageDevice {
  deviceId: string;
  /** What a parent called the device. Null when unnamed. */
  name: string | null;
  platform?: string | null;
  days: readonly ChildUsageDay[];
}

/**
 * One calendar day of one person, across their devices.
 *
 * `untimedDeviceIds` is why a day may be inexact, kept per day rather than per
 * week because a Mac that was off on Tuesday makes Tuesday exact and leaves
 * Wednesday a range — collapsing that to one flag for the week would mark five
 * exact days inexact.
 */
export interface ChildUsageDayTotal {
  date: string;
  /** Devices summed. Two screens at once is two minutes. */
  deviceMinutes: number;
  /** Union of the timelines, or null when no device reported one. */
  screenOnMinutes: number | null;
  /** Lower bound on wall-clock screen time for the day. */
  screenOnLowMinutes: number;
  /** Upper bound. Equal to the low bound when the day is exact. */
  screenOnHighMinutes: number;
  /** Every device that reported minutes also reported a timeline. */
  exact: boolean;
  /** Merged timeline, absent when nothing timed this day. For drawing. */
  timeline?: UsageTimeline;
  /** Devices with minutes but no timeline — the reason a day is a range. */
  untimedDeviceIds: string[];
}

export interface ChildUsageTotals {
  deviceMinutes: number;
  /**
   * Wall-clock minutes in front of any screen, or null when nothing this person
   * holds can report a timeline. Null is not zero and must not render as it.
   */
  screenOnMinutes: number | null;
  screenOnLowMinutes: number;
  screenOnHighMinutes: number;
  /** `deviceMinutes − screenOnMinutes`, and 0 when that cannot be known. */
  overlapMinutes: number;
  exact: boolean;
  /** Minutes any device observed, used or idle. */
  measuredMinutes: number;
  unmeasuredMinutes: number;
  /**
   * Measured over elapsed, 0–1, or null when no timeline exists at all.
   *
   * The honesty figure. A child whose agent was uninstalled on Wednesday reads
   * as a quiet week on every screen in this product; this is the number that
   * says otherwise, and a report that omits it is the flattering lie
   * `@kidgate/schema/usageDay` was written to prevent.
   */
  coverage: number | null;
  /** Nights inside the late window, counted on the merged timeline. */
  lateNights: number;
  days: ChildUsageDayTotal[];
}

/** One slice of the device split bar. */
export interface ChildDeviceShare {
  deviceId: string;
  name: string | null;
  platform?: string | null;
  minutes: number;
  /** Of `deviceMinutes`, 0–1. Zero for every device when nothing was used. */
  share: number;
  /** False for a device that can only say how much. Drives the "≈" affordance. */
  hasTimeline: boolean;
}

/**
 * One app across a person's devices.
 *
 * Grouped by normalised label rather than by package name, because Chrome is
 * `com.google.Chrome` on a Mac and `com.android.chrome` on a phone, and a child
 * report that lists "Chrome" twice has answered the device question again
 * instead of the person question. The package names are kept so a caller can
 * still resolve an icon, and so the grouping can be audited when it is wrong.
 */
export interface ChildAppTotal {
  /** The grouping key. Not for display. */
  key: string;
  label: string;
  minutes: number;
  packageNames: string[];
  deviceIds: string[];
}

function safeMinutes(value: number): number {
  return Number.isFinite(value) ? Math.max(0, Math.round(value)) : 0;
}

/**
 * Every device's days folded onto the calendar, one entry per date.
 *
 * Dates come back ascending, and only dates some device reported: a person with
 * no data has no rows rather than a zero-filled fortnight, because the caller
 * that wants a fixed-width chart already gap-fills (`UsageDayRepository.emptyRange`)
 * and the caller that wants a total would have to filter the padding back out.
 */
export function childUsageDays(
  devices: readonly ChildUsageDevice[],
): ChildUsageDayTotal[] {
  const byDate = new Map<
    string,
    {
      deviceMinutes: number;
      timelines: UsageTimeline[];
      untimed: number[];
      ids: string[];
    }
  >();

  for (const device of devices) {
    for (const day of device.days) {
      if (!day.date) {
        continue;
      }
      const entry = byDate.get(day.date) ?? {
        deviceMinutes: 0,
        timelines: [],
        untimed: [],
        ids: [],
      };
      const minutes = safeMinutes(day.minutes);
      entry.deviceMinutes += minutes;
      if (isTimeline(day.timeline)) {
        entry.timelines.push(day.timeline);
      } else if (minutes > 0) {
        // A device with no minutes and no timeline widens no bound and names no
        // gap: it reported a day it was not used, which the union already says.
        entry.untimed.push(minutes);
        entry.ids.push(device.deviceId);
      }
      byDate.set(day.date, entry);
    }
  }

  return [...byDate.entries()]
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    .map(([date, entry]) => {
      const timeline =
        entry.timelines.length > 0 ? mergeTimelines(entry.timelines) : undefined;
      const union = timeline ? timelineMinutesUsed(timeline) : null;
      const untimedTotal = entry.untimed.reduce((sum, value) => sum + value, 0);
      const untimedLargest = entry.untimed.reduce(
        (largest, value) => Math.max(largest, value),
        0,
      );

      /*
       * A union cannot exceed the sum it unions, so the day's own
       * `deviceMinutes` is a ceiling on every figure below it — the same
       * invariant `ScreenTimeSplit` assumes when it scales both bars against
       * the larger number.
       *
       * It has to be applied rather than assumed: a device whose timeline says
       * it ran longer than the `minutes` that device itself reported pushes the
       * union past the sum, and the parent gets a range whose top ("22h 46m")
       * is larger than the total printed one line below it ("22h 15m"). That is
       * arithmetic no reader can be talked out of. Clamping matches how
       * `overlapMinutes` already refuses to publish the negative that same
       * disagreement produces: a writer bug is not reported here.
       */
      const ceiling = Math.min(USAGE_TIMELINE_MINUTES, entry.deviceMinutes);

      // The untimed devices could have run entirely inside the union, or
      // entirely outside it. Nothing observed says which, so both ends are
      // reported and neither is presented as the answer.
      const low = Math.min(ceiling, Math.max(union ?? 0, untimedLargest));
      const high = Math.min(ceiling, (union ?? 0) + untimedTotal);

      return {
        date,
        deviceMinutes: entry.deviceMinutes,
        screenOnMinutes:
          entry.untimed.length === 0 && union !== null
            ? Math.min(ceiling, union)
            : null,
        screenOnLowMinutes: low,
        screenOnHighMinutes: high,
        exact: entry.untimed.length === 0 && union !== null,
        ...(timeline ? { timeline } : {}),
        untimedDeviceIds: entry.ids,
      };
    });
}

/**
 * The person's totals for the window the days cover.
 *
 * `coverage` divides by elapsed minutes rather than by 1440 × the number of
 * calendar days in the period, because the days handed in are the days that
 * exist: asking for thirty and getting eight means the device paired last week,
 * and scoring that family at 27% coverage would report a device fault where
 * there is none.
 */
export function childUsageTotals(
  devices: readonly ChildUsageDevice[],
): ChildUsageTotals {
  const days = childUsageDays(devices);

  let deviceMinutes = 0;
  let unionMinutes = 0;
  let low = 0;
  let high = 0;
  let measured = 0;
  let unmeasured = 0;
  let timedDays = 0;
  let exact = true;

  for (const day of days) {
    deviceMinutes += day.deviceMinutes;
    low += day.screenOnLowMinutes;
    high += day.screenOnHighMinutes;
    if (day.screenOnMinutes === null) {
      exact = false;
    } else {
      unionMinutes += day.screenOnMinutes;
    }
    if (day.timeline) {
      const dark = timelineMinutesUnmeasured(day.timeline);
      timedDays += 1;
      unmeasured += dark;
      measured += USAGE_TIMELINE_MINUTES - dark;
    }
  }

  // Computed over the whole run rather than accumulated day-by-day above: a
  // night is a pairing of one day's evening with the *next* day's morning
  // (see `lateNightHits`), so it cannot be decided from one day in isolation.
  const lateNights = lateNightHits(days).length;

  const screenOnMinutes = exact && timedDays > 0 ? unionMinutes : null;

  return {
    deviceMinutes,
    screenOnMinutes,
    screenOnLowMinutes: low,
    screenOnHighMinutes: high,
    // Never negative: a device whose reported `minutes` disagrees with its own
    // timeline is a bug at the writer, and a negative overlap on a parent's
    // screen would be this file reporting it in the least useful place.
    overlapMinutes:
      screenOnMinutes === null ? 0 : Math.max(0, deviceMinutes - screenOnMinutes),
    exact: exact && timedDays > 0,
    measuredMinutes: measured,
    unmeasuredMinutes: unmeasured,
    coverage: timedDays > 0 ? measured / (timedDays * USAGE_TIMELINE_MINUTES) : null,
    lateNights,
    days,
  };
}

/**
 * Which device took which share, largest first.
 *
 * Shares are of `deviceMinutes` and therefore of the sum, not of the union.
 * That is the only denominator the slices can add up to: an overlapping minute
 * belongs to two devices, so shares of wall-clock time would total more than
 * one and a stacked bar drawn from them would overflow its own track.
 */
export function childDeviceShares(
  devices: readonly ChildUsageDevice[],
): ChildDeviceShare[] {
  const rows = devices.map(device => {
    let minutes = 0;
    let hasTimeline = false;
    for (const day of device.days) {
      minutes += safeMinutes(day.minutes);
      if (isTimeline(day.timeline)) {
        hasTimeline = true;
      }
    }
    return {
      deviceId: device.deviceId,
      name: device.name,
      // Spread rather than assigned: under `exactOptionalPropertyTypes` an
      // explicit `undefined` is not the same as an absent optional field, and a
      // device document that never carried a platform must stay silent about it.
      ...(device.platform === undefined ? {} : { platform: device.platform }),
      minutes,
      share: 0,
      hasTimeline,
    } satisfies ChildDeviceShare;
  });

  const total = rows.reduce((sum, row) => sum + row.minutes, 0);
  return rows
    .map(row => ({ ...row, share: total > 0 ? row.minutes / total : 0 }))
    .sort((a, b) => b.minutes - a.minutes);
}

/**
 * The label a grouping key is built from.
 *
 * Case and punctuation only. Nothing here tries to know that "YT" is YouTube —
 * a mapping table of app aliases is a maintenance burden that goes stale
 * silently, and the failure mode of not having one is two rows where a parent
 * expected one, which is visible rather than wrong.
 */
function appKey(app: UsageAppBreakdown): string {
  const label = (app.label || app.packageName || '').toLowerCase();
  const stripped = label.replace(/[^a-z0-9]+/g, '');
  return stripped || app.packageName.toLowerCase();
}

/**
 * Minutes the top-apps list cannot show, for the "Other apps" row under it.
 *
 * The server keeps `USAGE_TOP_APPS_LIMIT` rows per day and every platform drops sub-minute
 * entries before reporting, so on a busy day the rows sum to visibly less
 * than the total printed above them — a parent asked exactly that question
 * ("if I used more than 8 apps, where is the rest?"), and a list that
 * silently loses the difference reads as the report having lost it.
 *
 * Clamped at zero because the two figures round independently: the total is
 * rounded once from seconds while each row rounds its own, so their
 * difference can be slightly negative on an honest day, and a negative
 * remainder is a rounding artefact, never information. The same noise can
 * make a small positive remainder — up to about half a minute per row — so
 * callers show the row for any remainder of a minute or more and accept that
 * the smallest values are approximate, the same trade `underAMinute` makes.
 *
 * Zero when the list is empty: with no rows at all the day is not "mostly
 * other apps", it is unreported, and the empty-state copy owns that story.
 */
export function otherAppsMinutes(
  totalMinutes: number,
  topApps: readonly { minutes: number }[],
): number {
  if (topApps.length === 0) {
    return 0;
  }
  const listed = topApps.reduce((sum, app) => sum + safeMinutes(app.minutes), 0);
  return Math.max(0, Math.round(safeMinutes(totalMinutes) - listed));
}

/** The apps that took the most of this person's window, largest first. */
export function childTopApps(
  devices: readonly ChildUsageDevice[],
  limit = 5,
): ChildAppTotal[] {
  const totals = new Map<
    string,
    {
      label: string;
      minutes: number;
      packageNames: Set<string>;
      deviceIds: Set<string>;
    }
  >();

  for (const device of devices) {
    for (const day of device.days) {
      for (const app of day.topApps ?? []) {
        const minutes = safeMinutes(app.minutes);
        if (minutes <= 0) {
          continue;
        }
        const key = appKey(app);
        const entry = totals.get(key) ?? {
          label: app.label || app.packageName,
          minutes: 0,
          packageNames: new Set<string>(),
          deviceIds: new Set<string>(),
        };
        entry.minutes += minutes;
        entry.packageNames.add(app.packageName);
        entry.deviceIds.add(device.deviceId);
        // Prefer a label that is not just the package name — one platform
        // publishes "YouTube" and another may publish "com.google.android.youtube",
        // and the readable one is the one a parent should be shown.
        if (app.label && app.label !== app.packageName) {
          entry.label = app.label;
        }
        totals.set(key, entry);
      }
    }
  }

  return [...totals.entries()]
    .map(([key, entry]) => ({
      key,
      label: entry.label,
      minutes: entry.minutes,
      packageNames: [...entry.packageNames],
      deviceIds: [...entry.deviceIds],
    }))
    .sort((a, b) => b.minutes - a.minutes)
    .slice(0, Math.max(0, limit));
}

/**
 * Devices grouped by the child they are assigned to, plus the unassigned ones.
 *
 * `Device.childId` is optional by design — a device pairs, reports and enforces
 * without ever being assigned — so every count per person has a residue, and a
 * screen that drops it silently tells a parent their family's total is smaller
 * than it is. The residue comes back as `unassigned` rather than under a
 * synthetic child, so a caller has to decide what to say about it.
 */
export function groupDevicesByChild<T extends { id: string; childId?: string }>(
  devices: readonly T[],
): { byChild: Map<string, T[]>; unassigned: T[] } {
  const byChild = new Map<string, T[]>();
  const unassigned: T[] = [];

  for (const device of devices) {
    const childId = device.childId;
    if (!childId) {
      unassigned.push(device);
      continue;
    }
    const bucket = byChild.get(childId);
    if (bucket) {
      bucket.push(device);
    } else {
      byChild.set(childId, [device]);
    }
  }

  return { byChild, unassigned };
}
