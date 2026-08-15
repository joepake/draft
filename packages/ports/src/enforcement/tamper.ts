import type {
  PackageChangeEvent,
  UninstallProtectionStatus,
} from '@kidgate/schema/telemetry';

/**
 * Resisting removal, and noticing app installs.
 *
 * Legacy origin: `ControlsService.getUninstallProtectionStatus`,
 * `requestUninstallProtection`, `disableUninstallProtection`,
 * `consumePackageEvents`, `setPackageWatchEnabled`,
 * `configurePackageActivitySync`, `setPackageActivitySyncToken`.
 */
export interface TamperPort {
  getUninstallProtection(): Promise<UninstallProtectionStatus>;

  /** Resolves false when the user declined the prompt. Not an error. */
  requestUninstallProtection(): Promise<boolean>;

  /**
   * Turning protection off is a parent action and must never be reachable from
   * the child device UI. Implementations should require a fresh parent
   * credential, not merely an in-app navigation.
   */
  disableUninstallProtection(): Promise<void>;

  setPackageWatchEnabled(enabled: boolean): Promise<void>;

  /**
   * Drain the queue of install/remove events observed since the last call.
   *
   * Consuming, not reading: the native side buffers events while the JS
   * context is dead, and reading without clearing would replay them on every
   * foreground. Persist what you take before you take more.
   */
  consumeEvents(): Promise<PackageChangeEvent[]>;

  /**
   * Hand the native side enough to upload events on its own while the app is
   * not running. `idToken` expires; refresh it via `setSyncToken`.
   */
  configureSync(config: BackgroundSyncConfig): Promise<void>;
  setSyncToken(idToken: string): Promise<void>;
  setSyncEnabled(enabled: boolean): Promise<void>;
}

/**
 * Shared by every background uploader the native side runs (package events,
 * location). Deliberately carries an absolute URL rather than a route name —
 * the native side has no access to the app's environment switching.
 */
export interface BackgroundSyncConfig {
  syncUrl: string;
  userId: string;
  deviceId: string;
  idToken: string;
  intervalSeconds: number;
}
