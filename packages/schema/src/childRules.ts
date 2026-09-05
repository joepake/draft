/**
 * Rules that belong to the CHILD, not to a device: the web filter, blocked
 * hours, and location sharing.
 *
 * Gated 2026-08-26 in `docs/FEASIBILITY.md` ("Web filter policy moves from
 * the device to the child"; schedule and location joined the same fan-out the
 * same day). The defect this ends: a child with several devices had several
 * `DeviceControls`, a parent set the same rule several times, and nothing
 * said when the copies diverged — a site approved on one row stayed blocked
 * on the sibling row of the same machine.
 *
 * ## Where these live, and who writes them
 *
 * Stored under `rules` on `users/{uid}/children/{childId}` — but the field
 * is **client-immutable** (`childRulesUnchanged` in `firestore.rules`) and
 * written only by the `updateChildRules` Cloud Function. Two reasons, both
 * caught by the gate:
 *
 * - `/children` updates are open to any parent client, and web filtering is
 *   premium-gated through `updateDeviceControls` — a client-writable copy
 *   here would be the free-tier bypass.
 * - Sessions paired before the `deviceId` claim existed are unscoped, so
 *   `isFamilyParent()` alone cannot be trusted to exclude an old child
 *   session. The function verifies the family root and parent device
 *   credential instead of the token shape.
 *
 * ## How they reach the devices
 *
 * They don't, directly. The function **fans the fields out** into every
 * assigned `childDevices` doc's `controls` in one batched write, and the
 * `syncChildRulesOnAssignment` trigger re-copies them when a device is
 * assigned to the child. Enforcement — `controlsSync`, the Swift provider,
 * the Kotlin tunnel, the DNR compiler, `policy.rs` — reads exactly what it
 * read before this type existed. A device with no `childId` keeps its
 * per-device values; that fallback is the whole reason the same fields also
 * stay on `DeviceControls`.
 *
 * NOT here, deliberately: `aiWebDomains` (server-classified, stays on the
 * device document), and every capability or blocker field — one child, one
 * set of rules, but status is per machine and must never be summarised.
 *
 * The name is `ChildRules`, not "child policy": `core/domain/childPolicy.ts`
 * already means "policy of a child *device*" and the vocabulary trap is real.
 */

import type { ScheduleWindow } from './deviceControls';
import type { WebFilterCategory } from './webActivity';

export interface ChildRules {
  /** Every field optional: absent means "never saved at the child level" and
   * the per-device value stays authoritative for that field. */
  webFilterEnabled?: boolean;
  /** Categories the filter refuses. Same semantics as `DeviceControls`. */
  webFilterCategories?: WebFilterCategory[];
  /** Always reachable, whatever a category or allow-only mode would say. */
  webFilterAllowList?: string[];
  /** Always refused, on the platforms that honour a deny list. */
  webFilterBlockList?: string[];
  /** Allow-list-only browsing: everything else is refused. */
  webFilterAllowListOnly?: boolean;
  /** Forced SafeSearch / YouTube Restricted Mode. Same semantics as `DeviceControls`. */
  safeSearchEnabled?: boolean;
  /** Record which videos the child watched. Same semantics as `DeviceControls`. */
  videoHistoryEnabled?: boolean;
  /**
   * Blocked hours. Wall-clock windows carry no cross-device distortion —
   * 21:00 on the phone is 21:00 on the TV — which is why these two joined
   * the fan-out and `dailyLimitMinutes` did NOT: a cap fanned out per device
   * multiplies by the device count ("2h" on three devices is 6h of screen
   * time). What it needed instead is below, and it is built.
   */
  scheduleEnabled?: boolean;
  scheduleWindows?: ScheduleWindow[];
  /** Whether this child's devices report location. Free-tier writable. */
  locationSharingEnabled?: boolean;
  /**
   * The child's shared daily screen-time budget, in minutes. Null clears it.
   *
   * Deliberately NOT in `CHILD_RULE_KEYS`: fanned out as
   * `controls.dailyLimitMinutes` it would multiply by the device count —
   * "2h" on three devices is six hours.
   *
   * **Enforced since 2026-08-27, with no agent change.** `reportChildUsage`
   * sums the assigned devices' minutes on every report and rewrites each
   * device's `controls.dailyLimitMinutes` to `deviceUsed + (budget −
   * totalUsed)` — its share of what the child has left — alongside the
   * `controls.childBudget` stamp (date, used, limit) that parent screens
   * read. Every agent goes on locking locally against the field it always
   * did, so whichever machine reaches its own figure first locks, exactly
   * when the CHILD's combined total reaches the budget.
   *
   * Two consequences that are not obvious from the field name:
   * `controls.dailyLimitMinutes` on an assigned device is a server-computed
   * allocation rather than a number a parent chose — no parent surface may
   * offer it as an editor (`apps/mobile` keeps `daily-limit` in
   * `PERSON_LEVEL_ACTION_IDS`; `apps/dashboard` hides its slider) — and the
   * arithmetic lives in `functions/lib/childBudget.js`, where it is tested.
   * Remaining edges: `docs/FEASIBILITY.md`, traps 1–5.
   */
  dailyLimitMinutes?: number | null;
  /** Server stamp from the last `updateChildRules` write. */
  updatedAt?: string;
}

/**
 * The fields the fan-out copies onto `controls.*` of every assigned device.
 * This list is the contract between `updateChildRules`, the assignment
 * trigger and `resolveSiteRequest` — a field added to `ChildRules` and not
 * here silently stops reaching any device.
 *
 * Deliberately NOT here: `dailyLimitMinutes` (the multiplication trap above),
 * `appLimits` and `appBlockingEnabled` (package names only exist on the one
 * machine that holds them).
 */
export const CHILD_RULE_KEYS = [
  'webFilterEnabled',
  'webFilterCategories',
  'webFilterAllowList',
  'webFilterBlockList',
  'webFilterAllowListOnly',
  'scheduleEnabled',
  'scheduleWindows',
  'locationSharingEnabled',
  'safeSearchEnabled',
  'videoHistoryEnabled',
] as const satisfies ReadonlyArray<keyof ChildRules>;

export type ChildRuleKey = (typeof CHILD_RULE_KEYS)[number];
