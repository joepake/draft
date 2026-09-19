/**
 * Which of a child's devices are actually holding the child's current rules.
 *
 * The honesty half of the free tier's write gate (`docs/FEASIBILITY.md`, "Free
 * tier: a parked device goes loosen-only"). The gate itself is
 * `domain/ruleRelaxation` plus `functions/lib/childRules`; this is what stops
 * the product lying about the result.
 *
 * **The problem it exists for.** Since 2026-08-26 a child's web filter, blocked
 * hours and location sharing are one value on `children/{id}`. The write gate
 * means a parked device can refuse a tightening and keep an older, looser copy
 * — F2 of that entry, the kill-shot the operator accepted in those words: "one
 * child with two rule sets is fine." Accepting the divergence is a product
 * decision. **Rendering the child document as though it were the whole truth is
 * not** — a console showing "Web filter: strict" over a child with two devices
 * on last month's category list is telling a parent something untrue about
 * their child's protection.
 *
 * ## Two axes, and this is only one of them
 *
 * A parked device has a **reporting** state and a **rule** state, and they are
 * independent. The status chip keeps meaning reporting — Paused, never Offline
 * (`docs/PRICING.md` §4) — and this answers the other question, for the places
 * rules are edited. Collapsing both into one word repeats the defect fixed on
 * 2026-09-17 in `domain/childPresence`, where one enum carried two orthogonal
 * facts and the lock swallowed the park.
 *
 * ## Not the same question as `childWebFilterCoverage`
 *
 * That one asks whether a machine **can** run the filter at all — a capability,
 * answered by its own probe. This asks whether it holds the **current value**. A
 * Mac can be perfectly capable and three weeks stale, and a phone can hold every
 * current value and have no filter to run them on. Both feed the sentence a
 * parent reads; neither substitutes for the other, and neither is summarised
 * into one word (`.claude/rules/cross-platform.md`, measured 2026-08-23).
 */

import type { ChildRuleKey, ChildRules } from '@kidgate/schema/childRules';
import { CHILD_RULE_KEYS } from '@kidgate/schema/childRules';
import type { DeviceControls } from '@kidgate/schema/deviceControls';
import { isRelaxation } from './ruleRelaxation';

export interface DivergenceDevice {
  deviceId: string;
  /** What a parent called the device. Null when unnamed. */
  name: string | null;
  /** `Device.monitoringState === 'parked'` — the only reason a device can lag. */
  parked: boolean;
  controls?: Partial<DeviceControls> | null;
}

export interface DivergenceRow {
  deviceId: string;
  name: string | null;
  parked: boolean;
  /** Child-level rules this device holds a different value for. */
  divergedKeys: ChildRuleKey[];
}

export interface ChildRuleDivergence {
  /** Devices holding every child-level value the parent has saved. */
  enforcing: number;
  total: number;
  rows: DivergenceRow[];
  /** Every key diverging on at least one device, for a per-rule line. */
  divergedKeys: ChildRuleKey[];
}

/**
 * Does this device hold the same value the child does, for one key?
 *
 * Mutual relaxation **is** equality, and reusing it rather than writing a second
 * comparator is deliberate: each key's notion of sameness is already decided in
 * `ruleRelaxation` and tested there — categories compare as sets, per-app caps
 * ignore their labels, an absent field means the documented default. A separate
 * equality here would be a second opinion about all of that, and the two would
 * disagree the first time either moved.
 */
function holdsSameValue(
  key: string,
  childValue: unknown,
  deviceValue: unknown,
): boolean {
  return (
    isRelaxation(key, childValue, deviceValue) &&
    isRelaxation(key, deviceValue, childValue)
  );
}

/**
 * How many of this child's devices hold the rules the parent last saved, and
 * which keys each lagging one is behind on.
 *
 * Only the keys actually present in `rules` are compared: absent means the
 * parent has never saved at the child level, so the device's own value stays
 * authoritative for that field and is not a divergence
 * (`packages/schema/src/childRules.ts`).
 *
 * **An unparked device is never counted as diverged.** It takes every fan-out as
 * it happens, and an un-park converges it (`convergeUnparkedRules`), so a
 * difference read there is a write still in flight rather than a state a parent
 * can act on. Reporting it would make the line flicker on every save.
 */
export function childRuleDivergence(
  rules: ChildRules | null | undefined,
  devices: readonly DivergenceDevice[],
): ChildRuleDivergence {
  const compared = CHILD_RULE_KEYS.filter(key => rules?.[key] !== undefined);

  const rows = devices.map((device): DivergenceRow => {
    const held = device.controls as Record<string, unknown> | null | undefined;
    const divergedKeys = device.parked
      ? compared.filter(key => !holdsSameValue(key, rules?.[key], held?.[key]))
      : [];
    return {
      deviceId: device.deviceId,
      name: device.name,
      parked: device.parked,
      divergedKeys,
    };
  });

  const divergedKeys = compared.filter(key =>
    rows.some(row => row.divergedKeys.includes(key)),
  );

  return {
    enforcing: rows.filter(row => row.divergedKeys.length === 0).length,
    total: rows.length,
    rows,
    divergedKeys,
  };
}

/**
 * Whether the coverage line is worth drawing at all.
 *
 * A family whose devices all agree must not be shown "enforced on 3 of 3" — it
 * answers a question nobody asked, and it trains a parent to skip the line on
 * the day one device does fall behind.
 */
export function hasRuleDivergence(divergence: ChildRuleDivergence): boolean {
  return divergence.enforcing < divergence.total;
}
