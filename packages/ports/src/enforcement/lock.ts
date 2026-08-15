import type { ShieldPolicy } from '@kidgate/schema/policy';

/**
 * Legacy origin: `ControlsService.applyShieldPolicy`, `syncLockOverlay`,
 * `setDeviceShieldEnabled`.
 */
export interface LockPort {
  apply(policy: ShieldPolicy): Promise<void>;

  /**
   * Re-assert the lock against the current policy.
   *
   * Needed because a lock is not a fact the OS remembers on the app's behalf.
   * An Android overlay dies with its process; an iOS shield survives but drifts
   * out of step with a policy that changed while the device was offline. Call
   * on foreground, on push, and after any policy write.
   */
  sync(): Promise<void>;
}
