/**
 * What a device reports back. Read by the parent app, the dashboard, and the
 * weekly digest email, so the shapes have to agree across all three.
 */

import type { AppRef, IsoDate, IsoDateTime, Minutes } from './primitives';
import type { UsageTimeline } from './usageDay';

export interface AppUsage {
  app: AppRef;
  minutes: Minutes;
}

export interface UsageSnapshot {
  /** Device-local day. Usage is a human-day concept, not a UTC one. */
  date: IsoDate;
  totalMinutes: Minutes;
  /** Sorted descending. Truncated by the reporter, typically to 8 entries. */
  topApps: AppUsage[];
  /**
   * When those minutes happened, or absent on a platform that cannot say.
   *
   * `UsageTimeline` documents the shape. Absent on iOS by construction: Screen
   * Time hands this app cumulative thresholds and nothing finer, so there is no
   * honest way to fill it — see `docs/FEASIBILITY.md`. A caller must branch on
   * `DeviceCapabilities.usageTimeline` rather than on this being missing, since
   * a device that can report one still has none before its first sample.
   */
  timeline?: UsageTimeline;
}

export interface DomainVisit {
  domain: string;
  visits: number;
  blocked: boolean;
  lastSeenAt: IsoDateTime;
}

export interface BatteryStatus {
  /**
   * 0-100, or null when unknown.
   *
   * Null is not 0. A simulator and several OEM builds report nothing, and
   * showing a healthy phone at 0% sends a parent looking for a child who is
   * fine. Render null as "unknown" and never coerce it.
   */
  level: number | null;
  charging: boolean | null;
}

export interface LocationFix {
  latitude: number;
  longitude: number;
  /** Metres. Absent when the platform will not say. */
  accuracy?: number;
  at: IsoDateTime;
}

export interface DeviceIdentity {
  modelName: string | null;
  /** The name the child gave the device. Often the only human-recognisable label. */
  userAssignedName: string | null;
  osVersion: string | null;
  systemName: string | null;
}

export type PackageChangeType = 'installed' | 'removed';

export interface PackageChangeEvent {
  type: PackageChangeType;
  app: AppRef;
  at: IsoDateTime;
}

export interface UninstallProtectionStatus {
  supported: boolean;
  active: boolean;
  /**
   * Why it is not active, when it is not. Platform-specific reason string
   * intended for a setup screen, not for logic.
   */
  reason: string | null;
}

export interface WebFilterStatus {
  supported: boolean;
  active: boolean;
  reason: string | null;
}
