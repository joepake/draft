/**
 * Which list to show for "what did they use today", and where it came from.
 *
 * Two sources describe the same day and only one of them exists for a free
 * family. `usageDays/{date}.topApps` is the premium Usage Reports document —
 * up to ten rows, written only when the family pays. `Device.topAppsToday` is
 * the top three, written on the device document for **everyone** on every
 * usage report (`functions/http/packageActivity.js`, `TOP_APPS_TODAY`), and it
 * is the whole of what the free tier is promised: "Today, top 3 apps"
 * (`docs/PRICING.md` §4).
 *
 * Until this existed the promise was false on both consoles. The phone's
 * `useTodayTopApps` and the dashboard's Top apps card both read the day
 * document and nothing else, so a free family saw the headline minutes and an
 * empty list under a Plans table that had just told them otherwise.
 *
 * ## The order, and why the device can beat the document
 *
 * The day document wins when it is **today's** and has rows — it is the fuller
 * answer. A stale row is not: the dashboard reads "the latest day" rather than
 * today, so a premium family's document from yesterday must not outrank the
 * device's list from an hour ago. `topAppsToday` carries no date of its own;
 * it is written in the same batch as `controls.usageDate`, so that field is
 * its date, and the same comparison `getScreenTimeUsage` already makes for the
 * headline minutes is the one made here.
 *
 * `source` is returned so a screen can say "top 3 — the full list is Premium"
 * only when that is what it is showing, rather than under a ten-row list.
 */

import type { Device } from '@kidgate/schema/device';
import type { UsageAppBreakdown } from '@kidgate/schema/usageDay';

export type TodayTopAppsSource = 'usageDay' | 'device' | 'none';

export interface TodayTopAppsInput {
  /**
   * The day document a listener answered with, or null when there is none —
   * a free family, a day nobody has reported yet, or a listener still waiting.
   * `date` is optional because the phone subscribes to today's document by
   * key and the dashboard hands over whichever day it holds last.
   */
  usageDay: {
    topApps: readonly UsageAppBreakdown[];
    minutes: number;
    date?: string;
  } | null;
  device: Pick<Device, 'topAppsToday' | 'controls'>;
  /** Today, `YYYY-MM-DD`, on the console's clock. */
  todayKey: string;
}

export interface TodayTopApps {
  apps: UsageAppBreakdown[];
  /**
   * The device total for the day, from the same source as the rows — every
   * app, not the sum of the rows, which on a capped list is always less.
   */
  totalMinutes: number;
  source: TodayTopAppsSource;
}

export function resolveTodayTopApps({
  usageDay,
  device,
  todayKey,
}: TodayTopAppsInput): TodayTopApps {
  const dayIsToday =
    usageDay !== null && (usageDay.date === undefined || usageDay.date === todayKey);

  if (usageDay && dayIsToday && usageDay.topApps.length > 0) {
    return {
      apps: [...usageDay.topApps],
      totalMinutes: usageDay.minutes,
      source: 'usageDay',
    };
  }

  const controls = device.controls;
  const deviceIsToday = controls?.usageDate === todayKey;
  const fromDevice = device.topAppsToday ?? [];

  if (deviceIsToday && fromDevice.length > 0) {
    return {
      apps: [...fromDevice],
      totalMinutes: controls?.minutesUsedToday ?? 0,
      source: 'device',
    };
  }

  /*
   * Nothing to list. The total still comes from whichever source is today's,
   * so a headline can be honest about the minutes even when no app earned a
   * row — a day of sub-minute opens, or a platform that reports no ranking.
   */
  return {
    apps: [],
    totalMinutes: deviceIsToday
      ? (controls?.minutesUsedToday ?? 0)
      : usageDay && dayIsToday
        ? usageDay.minutes
        : 0,
    source: 'none',
  };
}
