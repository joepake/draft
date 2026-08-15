import type { BatteryStatus } from '@kidgate/schema/telemetry';

export type PermissionStatus =
  'granted' | 'denied' | 'blocked' | 'undetermined' | 'unavailable';

/**
 * `blocked` is distinct from `denied`: the user said no permanently and the OS
 * will not prompt again, so the only path forward is a trip to Settings. UI has
 * to say something different for each.
 */

/** Legacy origin: `ControlsService.getCameraPermissionStatus`, `requestCameraPermission`. */
export interface CameraPort {
  getPermission(): Promise<PermissionStatus>;
  requestPermission(): Promise<PermissionStatus>;
}

/** Legacy origin: `ControlsService.getBatteryStatus`. */
export interface BatteryPort {
  /** Null for the whole reading when nothing usable came back. See `BatteryStatus.level`. */
  get(): Promise<BatteryStatus | null>;
}

/**
 * Child-initiated emergency signal, plus the escape hatch that suspends
 * enforcement so a locked device can still be used to call for help.
 *
 * Legacy origin: `ControlsService.beginSosEscape`, `clearSosEscape`,
 * `isSosEscapeActive`, `presentSosNotification`, `cancelSosNotification`.
 */
export interface SosPort {
  /**
   * Lift all shields temporarily.
   *
   * This exists for a reason that outranks every other rule in this package: a
   * child in trouble must be able to use the phone. Implementations must fail
   * open — if the escape cannot be recorded, lift the shield anyway.
   */
  beginEscape(): Promise<void>;
  clearEscape(): Promise<void>;
  isEscapeActive(): Promise<boolean>;

  presentNotification(title: string, body: string): Promise<void>;
  cancelNotification(): Promise<void>;
}
