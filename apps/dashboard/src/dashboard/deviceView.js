import { DEFAULT_DEVICE_CONTROLS } from '@kidgate/schema/deviceControls';
import { nearestPlaceWithin } from '@kidgate/core/domain/geo';
import { t } from '@kidgate/i18n/web';

/**
 * Turn a stored child-device record into the shape the dashboard renders.
 *
 * `apps/mobile/src/repositories/deviceView.ts` is the same idea for the app,
 * and the two deliberately differ: a phone renders a card and the browser a
 * row, so neither should have to accept the other's field names.
 *
 * What is *not* here is the parsing — every field arrives already coerced by
 * `packages/core`, which is the point. This file only renames and derives.
 */

function initialsOf(name) {
  const trimmed = (name || '').trim();
  return trimmed ? trimmed[0].toUpperCase() : '?';
}

export function toDeviceView(record) {
  // The record's own name is empty when the device reported none of the three
  // things that might identify it; the fallback is copy, so it belongs here
  // and not in a platform-free package.
  const name = record.name || t('dash.fallbackDevice');
  const controls = { ...DEFAULT_DEVICE_CONTROLS, ...(record.controls ?? {}) };
  const currentPlace = record.lastLocation?.placeName || null;
  /*
   * HERE returns no `address` for plenty of real fixes, and the badge below
   * used to just hide its second line then — no fallback to raw coordinates
   * exists on this surface. A saved place nearby is worth naming even when
   * the fix does not sit inside its geofence; `@kidgate/core/domain/geo`
   * carries the same threshold `apps/mobile`'s location screens use, so the
   * two parent surfaces cannot disagree about the same fix.
   */
  const nearbyPlace =
    !currentPlace && record.lastLocation && !record.lastLocation.address
      ? nearestPlaceWithin(
          record.lastLocation.latitude,
          record.lastLocation.longitude,
          record.places ?? [],
        )
      : null;
  const lastLocation = record.lastLocation
    ? { ...record.lastLocation, nearbyPlaceName: nearbyPlace?.name ?? null }
    : null;

  return {
    id: record.deviceId,
    name,
    // Which person uses it, when a parent has said. The name is joined on in
    // `useFamilyData` (`child` below), which is the layer that reads the
    // `children` collection.
    //
    // There used to be a `childName` here holding the *device's* name, and five
    // call sites read it as a person — "Ask iPad Pro for a check-in". The field
    // is gone rather than corrected, so nothing can quietly keep the old
    // meaning.
    childId: record.childId,
    child: null,
    initials: initialsOf(record.name),
    platform: record.platform,
    modelName: record.modelName || record.deviceLabel || '',
    osVersion: record.osVersion || '',
    /*
     * The build this device is running, for `domain/buildFreshness`. Spread
     * rather than defaulted: every field here is optional on the record and
     * absent has to survive, or a device that has never reported a version
     * becomes indistinguishable from one running an old one.
     */
    ...(record.appVersion ? { appVersion: record.appVersion } : {}),
    ...(record.appBuild ? { appBuild: record.appBuild } : {}),
    ...(record.otaVersion !== undefined ? { otaVersion: record.otaVersion } : {}),
    status: record.isLocked ? 'locked' : record.status || 'offline',
    isLocked: record.isLocked,
    lastActiveAt: record.lastActiveAt || undefined,
    /*
     * The cadence this device keeps and the last "report now" it was sent.
     * `getEffectiveDeviceStatus` judges `lastActiveAt` against the first — a
     * free-tier device beats every thirty minutes, and against the live
     * three-minute window every one of them reads permanently offline — and
     * `requestDeviceReports` throttles on the second. This app cannot work
     * either out for itself: it has no `TRIAL_DAYS` and so cannot tell a
     * running trial from a lapsed one (`docs/BACKLOG.md`).
     */
    beatIntervalMs: record.beatIntervalMs,
    reportRequestId: record.reportRequestId,
    /*
     * The free tier's whole visible output, plus whether this device is
     * parked. Absent means something in all three — no counts yet, no report
     * yet, active — so none is defaulted.
     */
    weekCounters: record.weekCounters,
    topAppsToday: record.topAppsToday,
    // What those three leave out — the tail row's number. Absent means the
    // server has not measured it, never zero.
    topAppsOtherToday: record.topAppsOtherToday,
    monitoringState: record.monitoringState,
    monitoredChangedAt: record.monitoredChangedAt,
    batteryLevel: record.batteryLevel,
    batteryCharging: Boolean(record.batteryCharging),
    lastLocation,
    controls,
    protectionStatus: record.protectionStatus ?? {},
    /*
     * The device's own capability probe, when it publishes one. Only the
     * desktop agent does today — a phone reports permission statuses instead
     * (see `childProtectionStatus.ts`), which is why every reader here has to
     * treat an absent probe as "unknown" rather than as "cannot".
     */
    capabilities: record.capabilities ?? null,
    protectionCounters: record.protectionCounters ?? { appBlocked: 0, tamper: 0 },
    webFilterBlockedCount: record.webFilterBlockedCount ?? 0,
    /*
     * The list as stored, untouched.
     *
     * Places are FAMILY-level: `updateFamilyPlaces` fans one list into every
     * child device's `places`, so any device's copy is the family's list. The
     * editor writes the whole list back and needs the stored field names and
     * the coordinates, both of which the renamed view below drops — and
     * `findPlaceConflict` cannot answer `samePin` or `contained` without them.
     */
    familyPlaces: record.places ?? [],
    places: (record.places ?? []).map(place => ({
      id: place.id,
      name: place.name,
      radius: place.radiusMeters,
      alertOnEnter: place.notifyOnEnter,
      alertOnExit: place.notifyOnExit,
      // Derived from the reported place *name*, not from the coordinates: the
      // child device evaluates the geofence itself and reports which place it
      // is in, and recomputing that here from a position minutes old would
      // sometimes contradict the device that is actually standing there.
      inside: currentPlace != null && currentPlace === place.name,
    })),
    usage: [],
  };
}
