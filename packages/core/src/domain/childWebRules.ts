/**
 * The child-level web filter: the merge that seeds it and the coverage line
 * that keeps it honest.
 *
 * Gated 2026-08-26 (`docs/FEASIBILITY.md`, "Web filter policy moves from the
 * device to the child"). Not named "child policy" — `childPolicy.ts` beside
 * this file already means the policy of a child *device*, and the vocabulary
 * trap is documented in `.claude/rules/auth-vocabulary.md`.
 *
 * Two jobs, both pure, both shared by `apps/mobile` and `apps/dashboard` so
 * the two parent surfaces cannot disagree about the same child:
 *
 * - **The merge.** `Child.rules` is absent until a parent first saves at
 *   the child level, and the devices they hold may have diverged in the
 *   per-device era. The seed shown on that first open combines them toward
 *   the stricter reading everywhere it can — union of refused categories,
 *   union of block lists, enabled if any was enabled, allow-only if any was —
 *   with the one unavoidable loosening called out by name: the allow-list
 *   union un-blocks domains some device was still refusing, so the caller
 *   gets `loosenedAllowDomains` to say out loud rather than migrate silently.
 *
 * - **The coverage line.** One rule for the person, status per machine —
 *   "enforced on 2 of 3" with the reason each machine is out. This is what
 *   replaces the per-device struck-out cards without repeating the measured
 *   failure of 2026-08-23 (`.claude/rules/cross-platform.md`): a group's
 *   capability is never summarised into one word, and nothing here invents a
 *   green state the probe did not report.
 */

import type { ChildRules } from '@kidgate/schema/childRules';
import { CHILD_RULE_KEYS } from '@kidgate/schema/childRules';
import type { DeviceCapabilities, DevicePlatform } from '@kidgate/schema/capabilities';
import type { DeviceControls } from '@kidgate/schema/deviceControls';
import type { WebFilterCategory } from '@kidgate/schema/webActivity';
import {
  DEFAULT_WEB_FILTER_CATEGORIES,
  WEB_FILTER_CATEGORIES,
} from '@kidgate/schema/webActivity';
import { supportsWebFiltering } from './webFilterSupport';

type WebFilterControls = Pick<
  DeviceControls,
  | 'webFilterEnabled'
  | 'webFilterCategories'
  | 'webFilterAllowList'
  | 'webFilterBlockList'
  | 'webFilterAllowListOnly'
>;

export interface MergedChildWebRules {
  rules: ChildRules;
  /** True when any of the five fields differed across the devices. */
  diverged: boolean;
  /**
   * Allow-list domains NOT shared by every device — the loosening the union
   * introduces. Empty when the lists already agreed. A caller that shows the
   * merge must name these; unioning an allow list silently is un-blocking
   * sites a parent chose to keep blocked on some machine.
   */
  loosenedAllowDomains: string[];
}

function categoriesOf(controls: WebFilterControls | undefined): WebFilterCategory[] {
  return controls?.webFilterCategories ?? DEFAULT_WEB_FILTER_CATEGORIES;
}

function sortedUnique(values: readonly string[]): string[] {
  return [...new Set(values)].sort();
}

/**
 * One set of rules from several devices' worth, stricter wherever the fields
 * allow a stricter reading. An empty input returns the defaults a fresh
 * device would get — enabled stays false, because "no devices yet" must not
 * render as a filter that is on.
 */
export function mergeDeviceWebFilters(
  deviceControls: ReadonlyArray<WebFilterControls | undefined>,
): MergedChildWebRules {
  const present = deviceControls.filter(
    (controls): controls is WebFilterControls => controls !== undefined,
  );

  if (present.length === 0) {
    return {
      rules: {
        webFilterEnabled: false,
        webFilterCategories: [...DEFAULT_WEB_FILTER_CATEGORIES],
        webFilterAllowList: [],
        webFilterBlockList: [],
        webFilterAllowListOnly: false,
      },
      diverged: false,
      loosenedAllowDomains: [],
    };
  }

  const enabled = present.some(controls => controls.webFilterEnabled === true);
  const allowListOnly = present.some(
    controls => controls.webFilterAllowListOnly === true,
  );

  // Refused categories union in schema order, so two parents' screens list
  // them identically whatever order the device documents held.
  const categoryUnion = new Set<WebFilterCategory>();
  for (const controls of present) {
    for (const category of categoriesOf(controls)) {
      categoryUnion.add(category);
    }
  }
  const categories = WEB_FILTER_CATEGORIES.filter(category =>
    categoryUnion.has(category),
  );

  const allowLists = present.map(controls => controls.webFilterAllowList ?? []);
  const allowUnion = sortedUnique(allowLists.flat());
  const allowShared = allowUnion.filter(domain =>
    allowLists.every(list => list.includes(domain)),
  );
  const loosenedAllowDomains = allowUnion.filter(
    domain => !allowShared.includes(domain),
  );

  const blockList = sortedUnique(
    present.flatMap(controls => controls.webFilterBlockList ?? []),
  );

  const diverged =
    present.some(controls => (controls.webFilterEnabled === true) !== enabled) ||
    present.some(
      controls => (controls.webFilterAllowListOnly === true) !== allowListOnly,
    ) ||
    present.some(controls => categoriesOf(controls).length !== categories.length) ||
    loosenedAllowDomains.length > 0 ||
    present.some(
      controls =>
        sortedUnique(controls.webFilterBlockList ?? []).join(',') !==
        blockList.join(','),
    );

  return {
    rules: {
      webFilterEnabled: enabled,
      webFilterCategories: categories,
      webFilterAllowList: allowUnion,
      webFilterBlockList: blockList,
      webFilterAllowListOnly: allowListOnly,
    },
    diverged,
    loosenedAllowDomains,
  };
}

/** What one machine says about the one rule. Never summarised across rows. */
export type WebFilterCoverageState =
  'enforcing' | 'awaitingApproval' | 'configurationDisabled' | 'unsupported';

export interface WebFilterCoverageDevice {
  deviceId: string;
  /** What a parent called the device. Null when unnamed. */
  name: string | null;
  platform?: DevicePlatform | null;
  capabilities?: {
    webFilter?: DeviceCapabilities['webFilter'];
    webFilterBlocker?: DeviceCapabilities['webFilterBlocker'];
  } | null;
}

export interface WebFilterCoverageRow {
  deviceId: string;
  name: string | null;
  platform?: DevicePlatform | null;
  state: WebFilterCoverageState;
}

export interface WebFilterCoverage {
  /** Devices whose own probe (or fallback) says the filter can run. */
  enforcing: number;
  total: number;
  rows: WebFilterCoverageRow[];
}

/**
 * The coverage line's data: how many of this child's devices enforce the
 * rule, and the reason each non-enforcing one is out. `webFilterBlocker` is
 * the device saying *why* and what a person could click — the two states are
 * distinguished so "Waiting for approval on Mac" and "Switched off in
 * System Settings" render as themselves, not as one grey word.
 */
export function childWebFilterCoverage(
  devices: readonly WebFilterCoverageDevice[],
): WebFilterCoverage {
  const rows = devices.map((device): WebFilterCoverageRow => {
    const state: WebFilterCoverageState = supportsWebFiltering(device)
      ? 'enforcing'
      : (device.capabilities?.webFilterBlocker ?? 'unsupported');
    return {
      deviceId: device.deviceId,
      name: device.name,
      ...(device.platform === undefined ? {} : { platform: device.platform }),
      state,
    };
  });

  return {
    enforcing: rows.filter(row => row.state === 'enforcing').length,
    total: rows.length,
    rows,
  };
}

/**
 * Split a controls patch into the half that belongs to the child and the half
 * that stays on the device.
 *
 * The callers are the parent screens that edit controls for one device: when
 * that device is assigned to a child, every `CHILD_RULE_KEYS` field must go
 * through `updateChildRules` (the fan-out) and everything else through
 * `updateDeviceControls` — writing a child-rule field per-device on an
 * assigned machine is the write the next fan-out silently wipes. For an
 * unassigned device the caller sends both halves down the per-device path.
 */
export function splitChildRuleControls(patch: Partial<DeviceControls>): {
  childRules: Partial<ChildRules>;
  deviceControls: Partial<DeviceControls>;
} {
  const childRules: Partial<ChildRules> = {};
  const deviceControls: Partial<DeviceControls> = {};
  const ruleKeys: ReadonlyArray<string> = CHILD_RULE_KEYS;

  for (const [key, value] of Object.entries(patch)) {
    if (value === undefined) {
      continue;
    }
    if (ruleKeys.includes(key)) {
      (childRules as Record<string, unknown>)[key] = value;
    } else {
      (deviceControls as Record<string, unknown>)[key] = value;
    }
  }

  return { childRules, deviceControls };
}
