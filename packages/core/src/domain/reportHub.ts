/**
 * The Reports landing — today's figure, what it is compared against, and the
 * per-child and per-device rows under it.
 *
 * **Moved out of `apps/mobile`'s `ReportsScreen` on 2026-09-16, when
 * `apps/dashboard` grew the same screen.** The browser had the weekly report
 * sheet and nothing in front of it, so the question a parent actually opens
 * Reports with — *how much today, and is that a lot?* — had no answer there at
 * all.
 *
 * What is decided here is the arithmetic and the honesty rules. What each
 * surface still owns is the drawing: the phone stacks cards, the dashboard
 * lays the same four blocks out for a wider screen.
 *
 * ## Absent is not zero, and it is the whole of this file
 *
 * A device that has not reported today has not reported today. Every function
 * below answers `null` for that rather than `0`, because "0 minutes" is a
 * measurement — it says the child had the phone and did not use it — and a
 * silent agent says nothing of the kind. The failure is not hypothetical: a
 * family whose devices are all off since yesterday would read "Today 0m" under
 * a heading that promises today.
 *
 * ## The one rule the two consoles disagreed about
 *
 * `apps/mobile` folded this through `getScreenTimeUsage`, whose `hasUsageData`
 * is `true` whenever a daily limit exists — so a device with a limit and a
 * stale stamp counted as a measured zero. `apps/dashboard`'s
 * `childMinutesUsedToday` required the stored day to BE today, and argued the
 * case in its own comment. Both cannot be right, and the strict one is: a
 * limit is a setting a parent typed, not a reading from a device.
 *
 * `getScreenTimeUsage` is deliberately left alone — it also drives the child's
 * own lock screen, where a limit with no report yet really should draw an
 * empty bar rather than nothing.
 */

/**
 * A device document, as much of one as these folds read.
 *
 * Every field spells `undefined` out rather than relying on `?` alone: the repo
 * builds with `exactOptionalPropertyTypes`, and a caller holding a real device
 * object passes `childId: undefined` explicitly rather than omitting the key.
 */
export interface ReportHubDevice {
  id: string;
  childId?: string | null | undefined;
  controls?:
    | {
        /** The local day the figure below belongs to, `YYYY-MM-DD`. */
        usageDate?: string | null | undefined;
        minutesUsedToday?: number | null | undefined;
      }
    | null
    | undefined;
}

/**
 * Minutes each device reported **for today**, keyed by device id.
 *
 * A device that reported nothing today is absent from the map rather than
 * present at zero — every caller below depends on being able to tell those
 * apart.
 */
export function foldMinutesToday(
  devices: readonly ReportHubDevice[],
  todayKey: string,
): Map<string, number> {
  const byDevice = new Map<string, number>();
  for (const device of devices) {
    const controls = device.controls;
    if (!controls || controls.usageDate !== todayKey) {
      continue;
    }
    byDevice.set(device.id, Math.max(0, Math.round(controls.minutesUsedToday ?? 0)));
  }
  return byDevice;
}

/**
 * The family's day so far — a sum of DEVICES, not of children.
 *
 * Two screens on at once is two device-hours and this number never claims to
 * be an hour of anyone's evening; the per-child report is where that
 * distinction is drawn against the usage documents, which is one more reason
 * every row here opens one.
 *
 * Null when nothing has reported.
 */
export function sumMinutesToday(byDevice: ReadonlyMap<string, number>): number | null {
  if (byDevice.size === 0) {
    return null;
  }
  let total = 0;
  for (const minutes of byDevice.values()) {
    total += minutes;
  }
  return total;
}

/**
 * How stale the newest stored week may be and still be what today is compared
 * against.
 *
 * A week's report covers up to the Sunday just gone, so a parent opening this
 * on the following Saturday is reading a six-day-old average and that is
 * exactly right. Ten days allows for that plus slack. Beyond it the newest
 * stored report is a week the digest job **missed**, and the bar under
 * "Today" would be comparing this afternoon against a fortnight ago while the
 * label still said "Daily average" — wrong in a way nothing on screen admits.
 */
export const MAX_AVERAGE_AGE_DAYS = 10;

/**
 * The stored week over seven days, or null when there is no week recent
 * enough to divide.
 *
 * `toDate` is a `YYYY-MM-DD` day key; the age is whole days, so a report
 * finished today is age 0.
 */
export function resolveDailyAverage(
  latest: { screenMinutes: number; toDate: string } | null | undefined,
  nowMs: number,
): number | null {
  if (!latest) {
    return null;
  }
  const finishedMs = Date.parse(`${latest.toDate}T00:00:00Z`);
  if (!Number.isFinite(finishedMs)) {
    return null;
  }
  const ageDays = Math.floor((nowMs - finishedMs) / 86_400_000);
  if (ageDays > MAX_AVERAGE_AGE_DAYS) {
    return null;
  }
  return Math.round(latest.screenMinutes / 7);
}

export interface ChildReportRow<C extends { id: string }> {
  child: C;
  /** Null when none of their devices reported today. */
  minutes: number | null;
  /**
   * Whether this child has any device at all.
   *
   * A row for a child with none must not open a report that could only ever
   * say "no data" — both consoles send it to the assign flow instead.
   */
  hasDevice: boolean;
}

/** One row per child, in the order given. */
export function buildChildReportRows<C extends { id: string }>(
  children: readonly C[],
  devices: readonly ReportHubDevice[],
  byDevice: ReadonlyMap<string, number>,
): ChildReportRow<C>[] {
  return children.map(child => {
    const owned = devices.filter(device => device.childId === child.id);
    const measured = owned.filter(device => byDevice.has(device.id));
    return {
      child,
      minutes:
        measured.length === 0
          ? null
          : measured.reduce((sum, device) => sum + (byDevice.get(device.id) ?? 0), 0),
      hasDevice: owned.length > 0,
    };
  });
}

/**
 * The scale a set of bars shares.
 *
 * Siblings drawn against their own maxima say nothing about each other — every
 * child's bar would be full. Absent figures contribute nothing rather than
 * dragging the scale to zero.
 */
export function reportPeak(values: readonly (number | null)[]): number {
  let peak = 0;
  for (const value of values) {
    if (value !== null && value > peak) {
      peak = value;
    }
  }
  return peak;
}

/**
 * A bar's width as a percentage of the shared peak.
 *
 * **A family that used nothing still gets a visible seat.** A zero-width bar
 * reads as a rendering failure rather than as a reading, so the floor applies
 * to any measured figure — a measured zero included. An absent figure gets no
 * bar at all, which is the distinction this whole module exists for.
 */
export function reportBarPercent(
  minutes: number | null,
  peak: number,
  minPercent = 4,
): number | null {
  if (minutes === null) {
    return null;
  }
  if (peak <= 0) {
    return minPercent;
  }
  return Math.max(minPercent, Math.min(100, Math.round((minutes / peak) * 100)));
}
