import type { DeviceIdentity } from '@kidgate/schema/telemetry';

/** Legacy origin: `ControlsService.getDeviceInfo`, `getDeviceName`. */
export interface DeviceIdentityPort {
  /**
   * Null when nothing usable came back — a simulator, or a platform that
   * discloses no model information. Callers are background syncs that must not
   * fail over a missing device name.
   */
  getIdentity(): Promise<DeviceIdentity | null>;
}
