import { DEFAULT_DEVICE_CONTROLS } from '@kidgate/schema/deviceControls';
import { nearestPlaceWithin } from '@kidgate/core/domain/geo';
import {
  relativePlaceCopy,
  relativePlaceForHistoryEntry,
  savedPlaceForHistoryEntry,
} from '@kidgate/core/domain/locationHistory';
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
   * Three answers before a coordinate pair, in falling order of what they
   * claim — and the middle one was missing here until 2026-09-10.
   *
   * `placeName` is HERE's and wins: it is the street the child was actually
   * on. `savedPlaceForHistoryEntry` is next — the place the fix sits *inside*,
   * named by the family, free of any geocoding request, and the answer
   * `apps/mobile` renders. `nearestPlaceWithin` is last and the weakest, since
   * "near" is not "at".
   *
   * Skipping the middle one was a regression this file inherited rather than
   * made: `NEARBY_PLACE_RADIUS_METERS` tightened from 2 km to 100 m on the
   * same day, which is safe on the phone precisely *because* the containing
   * place answers first there. Here it meant a fix inside a 150 m Home fence —
   * up to 150 m from the centre, so outside the new band — rendered as raw
   * coordinates on the web while the phone said "Home". One fix, two parent
   * surfaces, two answers, which `.claude/rules/cross-platform.md` exists to
   * stop.
   */
  const savedPlace =
    !currentPlace && record.lastLocation
      ? savedPlaceForHistoryEntry(record.lastLocation, record.places ?? [])
      : null;
  /*
   * The free tier's own name for the fix, written by the **child** device
   * (`DeviceLocation.areaName`). Nothing is looked up here: the child asked a
   * free provider as it uploaded, so both parent consoles read one field and
   * this surface needs no geocoder of its own.
   */
  const areaName =
    !currentPlace && !savedPlace ? record.lastLocation?.areaName?.trim() || null : null;
  /*
   * And the last thing before a coordinate pair: how far, and which way, from
   * the nearest place the family named. Computed from what is already here —
   * `relativePlaceCopy` hands over keys so this renders the same sentence
   * `apps/mobile` does rather than a second wording of it.
   */
  const relative =
    !currentPlace && !savedPlace && !areaName && record.lastLocation
      ? relativePlaceForHistoryEntry(record.lastLocation, record.places ?? [])
      : null;
  const nearbyPlace =
    !currentPlace &&
    !savedPlace &&
    !areaName &&
    !relative &&
    record.lastLocation &&
    !record.lastLocation.address
      ? nearestPlaceWithin(
          record.lastLocation.latitude,
          record.lastLocation.longitude,
          record.places ?? [],
        )
      : null;
  const lastLocation = record.lastLocation
    ? {
        ...record.lastLocation,
        /*
         * The containing place travels as the row's own name rather than as a
         * "near" label: `Dashboard.jsx` wraps `nearbyPlaceName` in the
         * "Near {{place}}" sentence, and that sentence would be wrong for a
         * fix that is not near the place but in it.
         */
        ...(savedPlace ? { placeName: savedPlace.name } : {}),
        /*
         * Both travel as the row's own name rather than as a "near" label:
         * `Dashboard.jsx` wraps `nearbyPlaceName` in "Near {{place}}", and
         * that sentence is wrong for an area the fix is *in* and wrong again
         * for one that already states its own distance.
         */
        ...(areaName ? { placeName: areaName } : {}),
        /*
         * The distance travels as a **shape**, not a sentence: this file only
         * renames and derives, and `t()` belongs where a component can reach
         * the app pack (`Dashboard.jsx`, through `useActivityTranslate`). The
         * keys are `relativePlaceCopy`'s, shared with `apps/mobile` so one fix
         * cannot read two ways on two parent consoles.
         */
        ...(relative ? { relativePlace: relativePlaceCopy(relative) } : {}),
        nearbyPlaceName: nearbyPlace?.name ?? null,
      }
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
