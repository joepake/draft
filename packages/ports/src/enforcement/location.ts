import type { LocationFix } from '@kidgate/schema/telemetry';
import type { BackgroundSyncConfig } from './tamper';

export type AlwaysLocationOutcome =
  'granted' | 'whenInUseOnly' | 'denied' | 'unavailable';

/**
 * Legacy origin: `ControlsService.requestLocationPermission`,
 * `requestAlwaysLocationPermission`, `getCurrentLocation`,
 * `startLocationUpdates`, `stopLocationUpdates`,
 * `configureBackgroundLocationSync`, `setBackgroundLocationSyncToken`,
 * `setBackgroundLocationSyncEnabled`.
 */
export interface LocationPort {
  requestPermission(): Promise<boolean>;

  /**
   * Background location is a second, separate grant on both iOS and Android,
   * and on iOS it cannot be asked for until foreground access is already held.
   * `whenInUseOnly` is the common outcome and is not a failure — it means
   * live location works while the child has the app open and nothing more.
   */
  requestAlwaysPermission(): Promise<AlwaysLocationOutcome>;

  /** Null when no fix is available yet. Callers must not treat null as 0,0. */
  getCurrent(): Promise<LocationFix | null>;

  startUpdates(): Promise<void>;
  stopUpdates(): Promise<void>;

  configureSync(config: BackgroundSyncConfig): Promise<void>;
  setSyncToken(idToken: string): Promise<void>;
  setSyncEnabled(enabled: boolean): Promise<void>;
}
