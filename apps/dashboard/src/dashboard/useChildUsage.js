import { useEffect, useMemo, useRef, useState } from 'react';
import {
  childDeviceShares,
  childTopApps,
  childUsageTotals,
} from '@kidgate/core/domain/childUsage';
import { USAGE_TOP_APPS_LIMIT } from '@kidgate/schema/usageDay';
import { resolveTodayTopApps } from '@kidgate/core/domain/todayTopApps';
import { localDayKey } from '@kidgate/core/domain/weeklyReportSchedule';
import { usageDayRepository } from '../adapters/repositories.js';

/**
 * One child's usage, read across every device assigned to them.
 *
 * `useFamilyData` answers "what did this piece of hardware do" — it reads
 * `usageDays` for the one selected device. This answers "what did this person
 * do", which is a different query: one read per device, folded by
 * `@kidgate/core/domain/childUsage` rather than by `+`.
 *
 * **The folding is not summing, and that is the point.** A phone and a
 * television used for the same hour are two device-hours and one hour of the
 * child's evening; the domain returns both figures and the gap between them,
 * and refuses to guess when a device in the set cannot report a timeline.
 *
 * The web half of `apps/mobile/src/hooks/useChildUsage`. The fold was already
 * shared; what is written twice is the fetching, because the two surfaces hold
 * different repositories and different caches.
 *
 * **Reads rather than subscribes**, like the phone's: `usageDays` documents are
 * written once per sync, and a listener per device would hold a socket open per
 * device to observe an event that happens a few times an hour. Today's live
 * minutes come from `controls`, which already streams onto this page.
 */

/**
 * As many rows as a device-day carries, so the merged ranking can never be the
 * thing that hides an app: everything past it is summed into "other apps".
 */
export const CHILD_TOP_APPS_LIMIT = USAGE_TOP_APPS_LIMIT;

/**
 * How long a fetched window stays reusable — long enough to cover a parent
 * bouncing between two periods, short enough that today's ranking still moves.
 */
const CACHE_TTL_MS = 60_000;

/** Empty-but-valid, so the screen has the real shape before the read lands. */
const EMPTY_TOTALS = childUsageTotals([]);

export function useChildUsage(familyId, childDevices, days) {
  const [daysByDevice, setDaysByDevice] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasPartialError, setPartialError] = useState(false);
  const cacheRef = useRef({ scope: null, rows: new Map() });

  const todayKey = useMemo(() => {
    const now = Date.now();
    return localDayKey(now, -new Date(now).getTimezoneOffset());
  }, []);

  /*
   * A string, not the array: the device list streams, so its identity changes
   * on every battery reading, and depending on it directly would refetch a
   * month of usage per beat.
   */
  const deviceKey = useMemo(
    () =>
      childDevices
        .map(device => device.id)
        .sort()
        .join(','),
    [childDevices],
  );

  /*
   * Today's row is written on the device's own sync, so a parent watching at
   * 11:00 would read a morning's total hours late. Merged as a MAXIMUM rather
   * than an overwrite: the stored row can legitimately be ahead when the live
   * field is the stale one.
   */
  const liveToday = useMemo(() => {
    const live = {};
    for (const device of childDevices) {
      const controls = device.controls;
      if (!controls || controls.usageDate !== todayKey) continue;
      const minutes = Math.max(0, Math.round(controls.minutesUsedToday ?? 0));
      if (minutes > 0) live[device.id] = minutes;
    }
    return live;
  }, [childDevices, todayKey]);
  const liveKey = JSON.stringify(liveToday);

  useEffect(() => {
    const ids = deviceKey ? deviceKey.split(',') : [];
    if (!familyId || ids.length === 0) {
      setDaysByDevice({});
      setPartialError(false);
      setLoading(false);
      return undefined;
    }

    let cancelled = false;
    setLoading(true);
    setPartialError(false);

    const scope = `${familyId}|${deviceKey}|${todayKey}`;
    if (cacheRef.current.scope !== scope) {
      cacheRef.current = { scope, rows: new Map() };
    }
    const cache = cacheRef.current.rows;

    Promise.all(
      ids.map(deviceId => {
        const key = `${deviceId}:${days}`;
        const cached = cache.get(key);
        if (cached && Date.now() - cached.at < CACHE_TTL_MS) {
          return Promise.resolve({ deviceId, rows: cached.rows, ok: true });
        }
        return (
          usageDayRepository
            .fetchRecent(familyId, deviceId, days)
            .then(rows => {
              /* Only a good read is cached. A failed one caches nothing, so
               switching back to this period retries rather than remembering
               the device as empty for the life of the screen. */
              cache.set(key, { at: Date.now(), rows });
              return { deviceId, rows, ok: true };
            })
            /* Partial rather than fatal: three devices where one query was
             rejected still answers most of the question, and a screen that
             blanks entirely tells a parent less than one that shows two
             devices and says so. */
            .catch(() => ({ deviceId, rows: [], ok: false }))
        );
      }),
    ).then(results => {
      if (cancelled) return;
      const next = {};
      let failed = false;
      for (const result of results) {
        next[result.deviceId] = result.rows;
        if (!result.ok) failed = true;
      }
      setDaysByDevice(next);
      setPartialError(failed);
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
    // `todayKey` rolls the window forward at midnight for a page left open
    // across the boundary, at the cost of one refetch a day.
  }, [familyId, deviceKey, days, todayKey]);

  /** The domain's input shape, with today's live minutes folded in. */
  const usageDevices = useMemo(
    () =>
      childDevices.map(device => {
        const live = liveToday[device.id] ?? 0;
        const rows = daysByDevice[device.id] ?? [];
        return {
          deviceId: device.id,
          name: device.name ?? null,
          platform: device.platform ?? null,
          days: rows.map(row => {
            if (row.date !== todayKey) return row;
            /*
             * A free family has no `usageDays` document at all since
             * 2026-09-05 (`functions/http/packageActivity.js` gates the write
             * on `hasPremium`), so this fold ranked nothing for today or the
             * week while the month still held the rows written before that
             * date. `Device.topAppsToday` is written for everyone, and
             * `resolveTodayTopApps` is the same resolver the per-device cards
             * already read it through.
             */
            const today = resolveTodayTopApps({ usageDay: row, device, todayKey });
            return {
              ...row,
              minutes: Math.max(row.minutes, live),
              ...(row.topApps.length === 0 && today.apps.length > 0
                ? { topApps: today.apps }
                : {}),
            };
          }),
        };
      }),
    // `liveKey` rather than the object, so a re-render with equal live minutes
    // does not rebuild a month of rows for every device.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childDevices, daysByDevice, todayKey, liveKey],
  );

  const totals = useMemo(
    () => (usageDevices.length === 0 ? EMPTY_TOTALS : childUsageTotals(usageDevices)),
    [usageDevices],
  );
  const shares = useMemo(() => childDeviceShares(usageDevices), [usageDevices]);
  const apps = useMemo(
    () => childTopApps(usageDevices, CHILD_TOP_APPS_LIMIT),
    [usageDevices],
  );

  return { totals, shares, apps, usageDevices, isLoading, hasPartialError };
}
