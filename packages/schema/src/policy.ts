/**
 * What a parent asked for. Every enforcement surface — iOS, Android, a browser
 * extension, a Windows service — reads the same policy and applies as much of
 * it as its capabilities allow.
 */

import type { AppRef, AppRefId, Minutes } from './primitives';
import type { ScheduleWindow } from './deviceControls';

export interface ShieldPolicy {
  /** Immediate lock, independent of schedule and limit. Parent pressed a button. */
  lock: boolean;
  /**
   * The parent has blocked hours switched **on** — not whether a window is
   * active at this instant.
   *
   * Worth stating because the same word means the other thing one layer down:
   * `apps/mobile`'s native bridge has its own `ShieldPolicy` whose
   * `scheduleActive` is the already-computed "is a window running right now",
   * because iOS and Android need a yes/no they can act on immediately. A host
   * that evaluates windows itself — `apps/desktop` does, through
   * `core/domain/scheduleWindow` — wants the switch, not the verdict, or a
   * curfew would never start after the policy was applied.
   */
  scheduleActive: boolean;
  appBlockingEnabled: boolean;
}

export interface WebFilterPolicy {
  enabled: boolean;
  /** Category identifiers the family blocks. Defined server-side, not here. */
  blockedCategories: string[];
  /** Always blocked, whatever the categories say. */
  blockedDomains: string[];
  /** Always allowed, overriding both categories and blocked domains. */
  allowedDomains: string[];
  /** Block sites with no category verdict. Strict, and it breaks things. */
  blockUnknown: boolean;
}

export interface AppPolicy {
  /** Blocked outright. */
  blocked: AppRef[];
  /** Per-app daily allowance. Absent means unlimited. */
  limits: Record<AppRefId, Minutes>;
}

export interface DevicePolicy {
  dailyLimitMinutes: Minutes | null;
  schedule: ScheduleWindow[];
  shield: ShieldPolicy;
  apps: AppPolicy;
  webFilter: WebFilterPolicy;
}

/**
 * Summary of what the child has actually selected on-device.
 *
 * Separate from `AppPolicy` because on iOS the parent never sees the list:
 * FamilyControls presents its own picker on the child device and returns only
 * counts and opaque tokens. This is the most the parent UI can honestly show.
 */
export interface BlockedAppsInfo {
  configured: boolean;
  appCount: number;
  categoryCount: number;
  totalCount: number;
  /** May be empty even when `totalCount` is not — iOS discloses nothing. */
  previewItems: AppRef[];
}
