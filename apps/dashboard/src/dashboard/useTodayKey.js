import { useCallback, useSyncExternalStore } from 'react';
import { dayKeyInZone, msUntilNextDayInZone } from '@kidgate/core/domain/timeZone';
import { localDayKey } from '@kidgate/core/domain/weeklyReportSchedule';

/**
 * Today on this browser's calendar, `YYYY-MM-DD` — the day this surface's
 * ranges and pickers are keyed on.
 *
 * A device's usage **stamp** is judged on the device's own calendar when it
 * has published a zone (`useReaderToday` below, `reportHub.usageTodayKey`):
 * `usageDate` is written on its clock. This key is the fallback for a device
 * that has not, and the day every `usageDays` range here ends on.
 *
 * The same answer as `clock.today()`, which `usageDayRepository.fetchRecent`
 * ends its range on, so the range and the day read beside it cannot disagree.
 */
export function viewerTodayKey(nowMs = Date.now()) {
  return localDayKey(nowMs, -new Date(nowMs).getTimezoneOffset());
}

/** A second past the next local midnight; `Date` does the daylight-saving sums. */
function msUntilNextLocalDay(nowMs) {
  const next = new Date(nowMs);
  next.setHours(24, 0, 1, 0);
  return next.getTime() - nowMs;
}

function subscribe(onChange) {
  let timer;
  const arm = () => {
    timer = setTimeout(() => {
      onChange();
      arm();
    }, msUntilNextLocalDay(Date.now()));
  };
  // A laptop asleep across midnight fires no timer on time; the tab coming
  // back is the second trigger, as the phone's AppState check is.
  const onVisible = () => {
    if (document.visibilityState === 'visible') onChange();
  };
  arm();
  document.addEventListener('visibilitychange', onVisible);
  return () => {
    clearTimeout(timer);
    document.removeEventListener('visibilitychange', onVisible);
  };
}

/**
 * `viewerTodayKey`, re-rendering the caller when the day rolls over — this
 * surface's twin of `apps/mobile`'s `useTodayDateKey`.
 *
 * It was read once and kept: `useFamilyData` read today's usage document on
 * the day the page opened, and `ReportHub` and `useChildUsage` memoised the
 * key for the life of the component, so a tab left open overnight judged
 * this morning's stamps against yesterday. A string snapshot compares by
 * value, so a check that finds the same day re-renders nothing.
 */
export function useTodayKey() {
  return useSyncExternalStore(subscribe, viewerTodayKey);
}

/** The distinct zones a set of devices published, sorted — a stable key. */
export function zonesOf(devices) {
  const zones = new Set();
  for (const device of devices ?? []) {
    if (typeof device?.timeZone === 'string' && device.timeZone) {
      zones.add(device.timeZone);
    }
  }
  return [...zones].sort().join(',');
}

/*
 * One snapshot object per zone set, replaced only when a day key in it moves,
 * because `useSyncExternalStore` compares snapshots by identity.
 */
const readerTodays = new Map();

function readerToday(zoneKey, nowMs = Date.now()) {
  const key = viewerTodayKey(nowMs);
  const zones = zoneKey ? zoneKey.split(',') : [];
  const stamp = [key, ...zones.map(zone => dayKeyInZone(zone, nowMs) ?? '')].join('|');
  const held = readerTodays.get(zoneKey);
  if (held && held.stamp === stamp) return held.today;
  const today = { key, nowMs };
  readerTodays.set(zoneKey, { stamp, today });
  return today;
}

function subscribeDays(zoneKey, onChange) {
  const zones = zoneKey ? zoneKey.split(',') : [];
  let timer;
  const arm = () => {
    const nowMs = Date.now();
    const delays = [
      msUntilNextLocalDay(nowMs),
      ...zones.map(zone => msUntilNextDayInZone(zone, nowMs)).filter(ms => ms !== null),
    ];
    timer = setTimeout(
      () => {
        onChange();
        arm();
      },
      Math.min(...delays),
    );
  };
  const onVisible = () => {
    if (document.visibilityState === 'visible') onChange();
  };
  arm();
  document.addEventListener('visibilitychange', onVisible);
  return () => {
    clearTimeout(timer);
    document.removeEventListener('visibilitychange', onVisible);
  };
}

/**
 * The reader's day **and the instant it was read**, `{ key, nowMs }` — what
 * `@kidgate/core/domain/reportHub` needs to judge each device's usage stamp on
 * that device's own calendar (`usageTodayKey`), the rule the phone applies too.
 *
 * Re-renders when the browser's day rolls over **or any of these zones' days
 * does**: a Mac in Berlin starts a fresh day six hours after a parent in
 * Hanoi, and a tab left open across that instant must stop showing its
 * yesterday as today. Pass `zonesOf(devices)`, a string, so the subscription
 * is keyed on the zones and not on an array rebuilt every render.
 */
export function useReaderToday(zoneKey = '') {
  const subscribeZones = useCallback(
    onChange => subscribeDays(zoneKey, onChange),
    [zoneKey],
  );
  const snapshot = useCallback(() => readerToday(zoneKey), [zoneKey]);
  return useSyncExternalStore(subscribeZones, snapshot);
}
