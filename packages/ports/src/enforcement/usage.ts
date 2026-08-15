import type { UsageSnapshot } from '@kidgate/schema/telemetry';

/**
 * Legacy origin: `ControlsService.getMonitoringStatus` (usage half),
 * `refreshTopAppsReport`.
 */
export interface UsagePort {
  /** Device-local today. */
  getToday(): Promise<UsageSnapshot>;

  /**
   * Ask the platform to recompute its usage report.
   *
   * Present because iOS DeviceActivity does not hand usage back on demand — a
   * report extension has to run out of process and write the result somewhere
   * the app can read it. Resolves false when the platform declined or has no
   * such mechanism; that is normal, not an error.
   */
  refresh(): Promise<boolean>;
}
