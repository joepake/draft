/**
 * What a device reports back. Read by the parent app, the dashboard, and the
 * weekly digest email, so the shapes have to agree across all three.
 */

import type { AppRef, IsoDate, IsoDateTime, Minutes } from './primitives';
import type { UsageHourlyApps, UsageTimeline } from './usageDay';

export interface AppUsage {
  app: AppRef;
  minutes: Minutes;
}

export interface UsageSnapshot {
  /** Device-local day. Usage is a human-day concept, not a UTC one. */
  date: IsoDate;
  totalMinutes: Minutes;
  /** Sorted descending. Truncated by the reporter to `USAGE_TOP_APPS_LIMIT`. */
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
  /**
   * Which apps were in front in each hour — `UsageDay.hourlyApps`, which this
   * becomes. Absent where the band is absent, and on the desktop, whose
   * Rust thread fills it into the request itself rather than through this
   * shape (`cloud.rs`). Present only with at least one hour in it.
   */
  hourlyApps?: UsageHourlyApps;
  /**
   * Minutes subtracted from `totalMinutes` because nobody was using the device
   * — see `UsageDay.idleMinutes`, which this becomes.
   *
   * Absent on a platform that excludes nothing. Present and zero is a real
   * claim and a different one: this agent does exclude packages, and today it
   * has seen none of them.
   */
  idleMinutes?: Minutes;
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

/**
 * How the platform arrived at a fix, as it reported it — Windows'
 * `PositionSource` names, because Windows is the one platform that says. A
 * desktop tower with its Wi-Fi radio off is still "located", from its IP
 * address, at the ISP's idea of the city: measured 2026-09-23 on a PC in
 * Hà Đông, `ip` at 20 000 m, pinned to Hoàn Kiếm lake 8 km away, where the
 * same machine with the radio on reports `wifi` at 51–212 m. CoreLocation and
 * the phones report no source; absent means unknown.
 *
 * `@kidgate/core/domain/locationFix` is the one place that turns this and
 * `accuracy` into "position" or "guess".
 */
export const POSITION_SOURCES = [
  'satellite',
  'wifi',
  'cellular',
  'ip',
  // Windows' user-set default location (Settings → Location) — not a measurement.
  'default',
  // A position the user asked the OS to blur.
  'obfuscated',
  'unknown',
] as const;

export type PositionSource = (typeof POSITION_SOURCES)[number];

export interface LocationFix {
  latitude: number;
  longitude: number;
  /** Metres. Absent when the platform will not say. */
  accuracy?: number;
  /** See `POSITION_SOURCES`. Absent when the platform does not say. */
  positionSource?: PositionSource;
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
