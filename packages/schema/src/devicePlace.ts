export interface DevicePlace {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  /** Geofence radius in meters. */
  radiusMeters: number;
  notifyOnEnter: boolean;
  notifyOnExit: boolean;
}

export const DEFAULT_PLACE_RADIUS_METERS = 150;
export const MAX_DEVICE_PLACES = 20;
/**
 * Longest place name, on every surface. Both editors stop typing here, and
 * `functions/lib/familyPlaces.js` slices past it; `apps/mobile`'s
 * `serverConstantParity` pins the two. Forty because that is what the phone's
 * editor always allowed — the server's sixty let the dashboard store names
 * the phone could not type.
 */
export const MAX_PLACE_NAME_LENGTH = 40;
