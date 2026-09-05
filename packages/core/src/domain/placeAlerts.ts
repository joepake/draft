import type { DevicePlace } from '@kidgate/schema/devicePlace';
import { MAX_DEVICE_PLACES } from '@kidgate/schema/devicePlace';
import { distanceMeters } from './geo';

/**
 * Two pins this close are the same pin, not two places.
 *
 * Small on purpose. It exists to catch the one thing a parent cannot mean:
 * a second place saved without moving the map, so it inherited the child
 * device's last position from the first one. It is NOT a judgement about
 * whether two places are far enough apart to tell apart — that is a question
 * about the position fix, and it is answered on the server.
 */
export const PLACE_SAME_PIN_METERS = 25;

/**
 * Radius steps in metres. A free slider invites 137m; these are the sizes that
 * actually mean something — a building, a block, a campus, a neighbourhood.
 *
 * 50m used to head this list and was removed on 2026-08-26. A phone indoors
 * reports its position to somewhere between 30m and 80m, and a radius smaller
 * than the error is not a tighter geofence — it is one that fires on noise.
 * The step was never usable in a flat or a terraced house, which is most of
 * where this product runs. Places already saved at 50m keep their stored
 * value until edited; `nearestRadiusStep` then lifts them to 100.
 *
 * Moved here from `apps/mobile/src/components/location/PlaceEditorSheet.tsx`
 * on 2026-09-03, when `apps/dashboard` grew the second editor —
 * `docs/BACKLOG.md` had already named the hand-copied step list as the
 * `FreeTier.ts` failure waiting to happen at a smaller scale.
 */
export const PLACE_RADIUS_STEPS = [100, 150, 250, 400, 600, 1000] as const;

export function nearestRadiusStep(meters: number): number {
  return PLACE_RADIUS_STEPS.reduce((best, step) =>
    Math.abs(step - meters) < Math.abs(best - meters) ? step : best,
  );
}

/**
 * `name` and `samePin` refuse the save; `contained` only warns.
 *
 * Until 2026-08-26 there was a third rule — any pin within a flat 80m of
 * another was refused, whatever radius either place had. It refused places a
 * parent genuinely has (two buildings 80m apart in a dense city) while
 * happily accepting a pin 300m inside a 1000m place. It read as a statement
 * about coverage and never once looked at `radiusMeters`.
 */
export type PlaceConflictKind = 'name' | 'samePin' | 'contained';

export interface PlaceConflict {
  kind: PlaceConflictKind;
  /** The place already saved that the draft collides with. */
  place: DevicePlace;
  /** Centre-to-centre distance, rounded. Meaningless for `name`. */
  meters: number;
  /** False for `contained`: the parent knows their own neighbourhood. */
  blocking: boolean;
}

export function normalizePlaceName(name: string): string {
  return name.trim().replace(/\s+/g, ' ').toLowerCase();
}

export interface PlaceDraftForConflict {
  name: string;
  latitude: number;
  longitude: number;
  radiusMeters: number;
}

export function findPlaceConflict(
  places: DevicePlace[],
  draft: PlaceDraftForConflict,
  excludeId?: string | null,
): PlaceConflict | null {
  const nameKey = normalizePlaceName(draft.name);
  let warning: PlaceConflict | null = null;

  for (const place of places) {
    if (excludeId && place.id === excludeId) {
      continue;
    }

    const meters = Math.round(
      distanceMeters(draft.latitude, draft.longitude, place.latitude, place.longitude),
    );

    if (nameKey && normalizePlaceName(place.name) === nameKey) {
      return { kind: 'name', place, meters, blocking: true };
    }
    if (meters <= PLACE_SAME_PIN_METERS) {
      return { kind: 'samePin', place, meters, blocking: true };
    }

    // One centre sits inside the other circle. Legal — the server picks the
    // nearer place when both contain the device — but worth saying once,
    // because the alerts will not read the way the parent expects.
    if (!warning && meters <= Math.max(place.radiusMeters, draft.radiusMeters)) {
      warning = { kind: 'contained', place, meters, blocking: false };
    }
  }

  return warning;
}

/**
 * True if `places` already holds this place — the merge rule, which is a
 * narrower question than `findPlaceConflict`'s.
 *
 * Merging asks "is this the same place arriving twice", and it always is a
 * copy: the old copy-to-siblings flow regenerated the id per device but kept
 * the coordinates exactly. So same name, or the same pin. Anything looser
 * silently discards a place the family really has, in a list nobody is
 * looking at — which is what a flat 80m rule did here.
 */
export function siblingHasPlace(places: DevicePlace[], place: DevicePlace): boolean {
  const nameKey = normalizePlaceName(place.name);
  return places.some(existing => {
    if (nameKey && normalizePlaceName(existing.name) === nameKey) {
      return true;
    }
    return (
      distanceMeters(
        place.latitude,
        place.longitude,
        existing.latitude,
        existing.longitude,
      ) <= PLACE_SAME_PIN_METERS
    );
  });
}

/**
 * One family list from several devices' worth — the seed for the first
 * family-level save (2026-08-26: "Home" exists once for the whole family).
 *
 * Union in device order, deduped by `siblingHasPlace`, earlier copy wins.
 * Capped at `MAX_DEVICE_PLACES` because the server refuses longer lists
 * rather than truncating them.
 */
export function mergeDevicePlaces(
  lists: ReadonlyArray<readonly DevicePlace[] | undefined>,
): DevicePlace[] {
  const merged: DevicePlace[] = [];
  const seenIds = new Set<string>();
  for (const list of lists) {
    for (const place of list ?? []) {
      if (merged.length >= MAX_DEVICE_PLACES) {
        return merged;
      }
      if (siblingHasPlace(merged, place)) {
        continue;
      }
      // Ids were minted per device from Date.now(), so two DIFFERENT places
      // on two devices can collide. The server refuses a list with duplicate
      // ids whole — a colliding union would leave the family unable to save
      // anything, forever. Deterministic suffix, no randomness in domain/.
      let id = place.id;
      while (seenIds.has(id)) {
        id = `${id}-2`;
      }
      seenIds.add(id);
      merged.push({ ...place, id });
    }
  }
  return merged;
}

/**
 * The smallest radius worth offering, given how precisely this device reports
 * its position. A radius under roughly twice the error is not a smaller
 * geofence, it is a geofence that fires at random.
 *
 * Returns null when the device has not reported an accuracy — guessing one
 * would put a number in front of a parent that nothing measured.
 */
export function minimumUsefulRadiusMeters(
  accuracyMeters: number | null | undefined,
): number | null {
  if (
    typeof accuracyMeters !== 'number' ||
    !Number.isFinite(accuracyMeters) ||
    accuracyMeters <= 0
  ) {
    return null;
  }
  return Math.round(accuracyMeters * 2);
}
