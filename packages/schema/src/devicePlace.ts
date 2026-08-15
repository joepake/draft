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
