import type { DevicePlace } from '@kidgate/schema/devicePlace';
import type { DeviceLocation } from '@kidgate/schema/deviceControls';
import type { LocationHistoryEntry } from '@kidgate/schema/locationHistory';
import { nearestPlaceWithin, relativeToNearestPlace, type CompassPoint } from './geo';
import { placeForFix } from './placeVisits';

export function getLocationHistoryTitle(entry: LocationHistoryEntry): string {
  return (
    entry.placeName?.trim() ||
    entry.address?.split(',')[0]?.trim() ||
    `${entry.latitude.toFixed(4)}, ${entry.longitude.toFixed(4)}`
  );
}

export function getLocationHistorySubtitle(entry: LocationHistoryEntry): string {
  if (entry.address && entry.address !== entry.placeName) {
    return entry.address;
  }

  return `${entry.latitude.toFixed(5)}, ${entry.longitude.toFixed(5)}`;
}

/**
 * The saved place nearest a fix, when HERE returned no address for it — the
 * raw-coordinate fallback above is a fact nobody reads as a place, and a
 * saved place close enough to name is worth showing instead. Kept out of
 * `getLocationHistorySubtitle` on purpose: turning that into "Near X" is
 * copy, and copy belongs where `t()` is called, not in a platform-free
 * domain function.
 */
export function nearbyLocationHistoryPlace(
  entry: LocationHistoryEntry,
  places: readonly { name: string; latitude: number; longitude: number }[],
) {
  if (entry.address && entry.address !== entry.placeName) {
    return null;
  }
  return nearestPlaceWithin(entry.latitude, entry.longitude, places);
}

/**
 * The saved place a fix is **inside**, for rows HERE could not name.
 *
 * `getLocationHistoryTitle` falls back to a coordinate pair, which is the one
 * thing on that row nobody reads as a place — and it does so while the product
 * already knows the answer: the family typed "Home" and gave it a radius, and
 * this fix is in it. Measured 2026-09-10: a whole trail rendered
 * `21.0295, 105.8315` as its title with "Near **Work**" underneath, because
 * `placeName` and `address` are only ever HERE's
 * (`functions/http/location.js` takes them from nothing else), and HERE had
 * named none of them.
 *
 * **Inside, never near.** `placeForFix` applies the radius *and* the accuracy
 * guard, so a fix whose error circle is wider than the fence cannot claim to be
 * in it; `nearbyLocationHistoryPlace` above is the 2 km "close enough to name"
 * question and stays the subtitle's, because "Home" as a title for a fix two
 * kilometres away would be a claim the data cannot support.
 *
 * Null when the row already carries a name, so a HERE answer always wins: that
 * is the street the child was actually on, and a saved place is the coarser
 * fact.
 */
export function savedPlaceForHistoryEntry(
  /* A trail row or a device's current fix — see `placeForFix` on the widening. */
  entry: DeviceLocation,
  places: readonly DevicePlace[],
): DevicePlace | null {
  if (entry.placeName?.trim() || entry.address?.trim()) {
    return null;
  }
  return placeForFix(entry, [...places]);
}

/** How far, and which way, a fix sits from the family's nearest saved place. */
export interface RelativePlaceLabel {
  placeName: string;
  /** Rounded for reading, with the unit it was rounded into. */
  distance: { unit: 'km' | 'm'; value: string };
  compass: CompassPoint;
}

/**
 * "12 km south of Home" — the answer for a fix nothing has named and no saved
 * place contains.
 *
 * The fallback under this one is a coordinate pair, and a coordinate pair is
 * the single thing on the row no parent reads. Measured 2026-09-11 against a
 * real screen: the title showed `13.2733, 109.3091` and the subtitle showed
 * `13.27331, 109.30914` — the same number twice, one digit apart, occupying
 * both readable lines of every row on a trail. A distance and a direction from
 * somewhere the family themselves named is computed from data already on the
 * device, costs no geocoding request, and survives a lapsed subscription.
 *
 * **Uncapped on purpose.** `nearestPlaceWithin` limits itself because "near" is
 * a claim; this is a measurement, and "1,043 km south of Home" is exactly as
 * true as "200 m south of Home". What it is *not* is a substitute for a place
 * name at that range — a parent a thousand kilometres out wants "Nha Trang",
 * which no free fallback here can produce (`docs/BACKLOG.md`).
 *
 * Null when the row is already named, when the fix sits **inside** a saved
 * place (`savedPlaceForHistoryEntry` answers that, and "0 m north of Home" is a
 * worse sentence than "Home"), or when the family has saved nothing.
 */
export function relativePlaceForHistoryEntry(
  entry: DeviceLocation,
  places: readonly DevicePlace[],
): RelativePlaceLabel | null {
  if (entry.placeName?.trim() || entry.address?.trim()) {
    return null;
  }
  if (savedPlaceForHistoryEntry(entry, places)) {
    return null;
  }
  const relative = relativeToNearestPlace(entry.latitude, entry.longitude, places);
  if (!relative) {
    return null;
  }
  return {
    placeName: relative.place.name,
    distance: formatDistanceParts(relative.meters),
    compass: relative.compass,
  };
}

/**
 * Metres rounded to something a person reads, and the unit to say it in.
 *
 * A string rather than a number because the precision is part of the answer:
 * `12.4` and `12` are different sentences, and a caller that received `12.4`
 * would have to re-derive which one this meant.
 *
 * **The decimal separator is a dot on every locale**, which is wrong for about
 * half of the fourteen and is knowingly left that way: `toLocaleString` needs
 * an ICU build Hermes does not carry on Android, and a wrong separator on one
 * number is a smaller defect than a distance that renders as `NaN` on a phone.
 * Worth revisiting if the app ever gains full ICU.
 */
export function formatDistanceParts(meters: number): {
  unit: 'km' | 'm';
  value: string;
} {
  if (!Number.isFinite(meters) || meters < 0) {
    return { unit: 'm', value: '0' };
  }
  if (meters < 1000) {
    // Ten-metre steps: the fix itself is rarely better than that, and "137 m"
    // claims a precision `accuracy` does not support.
    return { unit: 'm', value: String(Math.round(meters / 10) * 10) };
  }
  const km = meters / 1000;
  // One decimal while it still changes the picture; whole kilometres past ten,
  // where the tenth is noise beside the rounding already done to the fix.
  return { unit: 'km', value: km < 10 ? km.toFixed(1) : String(Math.round(km)) };
}

/**
 * The "12 km south of Home" sentence as **keys and parameters**, never as
 * words.
 *
 * `domain/` may not call `t()`, and two apps rendering this must not each write
 * their own assembly — `apps/mobile` had one and `apps/dashboard` would have
 * needed a second, which is how one fix comes to read two ways on two parent
 * screens. So the shape travels and each app performs the lookup, exactly as
 * `deviceConsents` hands over `labelKey` and `detailKey`.
 *
 * The compass key is spelled out rather than interpolated at the call site:
 * `yarn i18n:missing` scans for literal `t('ns.key')` calls, so a key built by
 * string concatenation reaches a parent as raw text with the gate green
 * (`.claude/rules/i18n.md`). Listing the eight here means every app that
 * renders this inherits that check.
 */
export function relativePlaceCopy(relative: RelativePlaceLabel): {
  key: string;
  place: string;
  distanceKey: string;
  distanceValue: string;
  compassKey: string;
} {
  return {
    key: 'location.awayFromPlace',
    place: relative.placeName,
    distanceKey:
      relative.distance.unit === 'km'
        ? 'location.distanceKm'
        : 'location.distanceMeters',
    distanceValue: relative.distance.value,
    compassKey: COMPASS_KEYS[relative.compass],
  };
}

const COMPASS_KEYS: Record<CompassPoint, string> = {
  n: 'location.compassN',
  ne: 'location.compassNe',
  e: 'location.compassE',
  se: 'location.compassSe',
  s: 'location.compassS',
  sw: 'location.compassSw',
  w: 'location.compassW',
  nw: 'location.compassNw',
};
