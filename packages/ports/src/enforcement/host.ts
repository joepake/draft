import type { DeviceCapabilities } from '@kidgate/schema/capabilities';
import type { AppPolicyPort } from './appPolicy';
import type { DeviceIdentityPort } from './identity';
import type { LocationPort } from './location';
import type { LockPort } from './lock';
import type { BatteryPort, CameraPort, SosPort } from './peripherals';
import type { SchedulePort } from './schedule';
import type { TamperPort } from './tamper';
import type { UsagePort } from './usage';
import type { WebFilterPort } from './webFilter';

/**
 * Everything a child device can do, assembled from capability-scoped ports.
 *
 * One object per platform, constructed in the app and handed to
 * `@kidgate/core`. Replaces the legacy `ControlsService`, a single flat surface
 * of 55 methods that mixed iOS and Android specifics; that shape does not
 * survive a third platform, let alone a fifth.
 *
 * Optional ports are **absent** when unsupported, never present-and-throwing.
 * Callers branch on presence:
 *
 * ```ts
 * const fix = await host.location?.getCurrent();
 * ```
 *
 * Not on `Platform.OS`. A MacBook has a battery and an iMac does not, and both
 * are `macos`.
 *
 * Required ports are required because a device that cannot do them is not a
 * child device at all — there would be nothing to enforce.
 */
export interface EnforcementHost {
  identity: DeviceIdentityPort;

  /**
   * Probe what this device can actually do. Called at pairing and at every cold
   * start, then written to the device document — an OS upgrade or a revoked
   * permission changes the answer, and a stale capability set silently makes
   * the parent UI promise protection that is not there.
   */
  probeCapabilities(): Promise<DeviceCapabilities>;

  usage: UsagePort;
  appPolicy: AppPolicyPort;
  schedule: SchedulePort;
  lock: LockPort;
  tamper: TamperPort;

  /**
   * Absent when this device filters no web traffic at all.
   *
   * Optional rather than required, because `WebFilterPort.mechanism` excludes
   * `false` — a platform with no filter had no honest value to put there, and
   * the only ways to satisfy the interface were to name a mechanism it does not
   * have or to hand back a port whose methods do nothing. Both lie to the
   * parent UI, which reads this to decide what to promise.
   *
   * macOS is the case that surfaced it: `NEFilterDataProvider` needs a
   * NetworkExtension entitlement Apple grants by manual review, so a build
   * without that entitlement filters nothing. A child device that cannot filter
   * the web is still a child device — unlike, say, one that cannot lock.
   */
  webFilter?: WebFilterPort;

  location?: LocationPort;
  camera?: CameraPort;
  battery?: BatteryPort;
  sos?: SosPort;
}
