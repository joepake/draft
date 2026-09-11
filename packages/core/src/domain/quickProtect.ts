/**
 * "Protect {{child}} now?" — which switches the sheet offers, and what a
 * confirmed sheet writes.
 *
 * Two parent surfaces draw this: `QuickProtectSheet` on the phone, right after
 * a fresh pairing is assigned, and `QuickProtectCard` on the web, where the
 * trigger is the state rather than the event. They were written twice and
 * disagreed with themselves within a week — measured 2026-09-08: a child who
 * already held all five rules got a sheet with **no rows at all**, a chip row
 * offering to copy a sibling, and an apply button that silently replaced their
 * allow and block lists with that sibling's. Both halves of that came from the
 * same mistake, so the rule lives here once.
 *
 * The mistake: `alreadyOn` answers "is this switch off?", which is the whole
 * question in the defaults case — the starter set only flips booleans, and a
 * row for something already on is a tick that does nothing. It is the wrong
 * question the moment a **source** is picked. Copying a sibling changes
 * *values* — their hours, their minutes, their categories and site lists — and
 * every one of those is worth offering over a rule that is already on.
 *
 * The invariant that stops the silent overwrite: **only a key with a row is
 * ever written.** `buildQuickProtectRules` derives the plan itself and ignores
 * a picked key the plan does not carry, so a switch the parent could not see
 * cannot decide anything.
 */

import type { ChildRules } from '@kidgate/schema/childRules';

/** The five things the sheet can turn on, in the order it shows them. */
export type QuickProtectKey =
  'bedtime' | 'dailyLimit' | 'webFilter' | 'location' | 'videoHistory';

export const QUICK_PROTECT_KEYS: QuickProtectKey[] = [
  'bedtime',
  'dailyLimit',
  'webFilter',
  'location',
  'videoHistory',
];

/** The starter budget, deliberately generous: the point of the sheet is that
 * *something* protective is on, not that the number is right — the profile's
 * budget editor is one tap away for the family's own figure. */
export const STARTER_DAILY_LIMIT_MINUTES = 120;

export type QuickProtectFlags = Record<QuickProtectKey, boolean>;

/** One row the sheet should draw. */
export interface QuickProtectRowPlan {
  key: QuickProtectKey;
  /**
   * The child already holds this rule and the row exists only because the
   * picked source carries values that would take its place. The surfaces say
   * so in the hint — a switch that reads "turn on" while it is about to
   * overwrite a parent's own hours is the lie this flag exists to stop.
   */
  replaces: boolean;
}

/**
 * Whether this child has anything worth copying.
 *
 * Deliberately not `rules !== undefined`: `updateChildRules` stamps
 * `updatedAt` on every write, so a child whose rules were saved and then
 * cleared still carries the object and would be offered as a source that
 * copies nothing.
 */
export function hasCopyableRules(rules: ChildRules | undefined): boolean {
  if (!rules) {
    return false;
  }
  return (
    rules.scheduleEnabled === true ||
    typeof rules.dailyLimitMinutes === 'number' ||
    rules.webFilterEnabled === true ||
    rules.locationSharingEnabled === true ||
    rules.videoHistoryEnabled === true
  );
}

/**
 * What is already on for this child.
 *
 * `webFilter` reads both halves, because the row turns on both. SafeSearch is
 * a DNS rewrite the filter's own tunnel carries
 * (`@kidgate/core/domain/safeSearch`), so it is never offered apart from the
 * filter: on its own it is a switch that enforces nothing on Android or the
 * TV. A child with the filter on and SafeSearch off still sees the row, and
 * the patch fills in the missing half.
 */
export function quickProtectAlreadyOn(
  rules: ChildRules | undefined,
): QuickProtectFlags {
  return {
    bedtime: rules?.scheduleEnabled === true,
    dailyLimit: typeof rules?.dailyLimitMinutes === 'number',
    webFilter: rules?.webFilterEnabled === true && rules?.safeSearchEnabled === true,
    location: rules?.locationSharingEnabled === true,
    videoHistory: rules?.videoHistoryEnabled === true,
  };
}

/**
 * What a picked source actually carries values for.
 *
 * `location` and `videoHistory` are never copyable: both are a lone boolean,
 * and this sheet only ever turns protection **on** — a source with location
 * off would otherwise offer a row that switches a working rule off. Their
 * value is the same value the defaults write, so an already-on child has
 * nothing to be shown.
 */
export function quickProtectCopyable(
  source: ChildRules | undefined,
): QuickProtectFlags {
  return {
    bedtime: (source?.scheduleWindows?.length ?? 0) > 0,
    dailyLimit: typeof source?.dailyLimitMinutes === 'number',
    webFilter:
      (source?.webFilterCategories?.length ?? 0) > 0 ||
      (source?.webFilterAllowList?.length ?? 0) > 0 ||
      (source?.webFilterBlockList?.length ?? 0) > 0 ||
      typeof source?.webFilterAllowListOnly === 'boolean',
    location: false,
    videoHistory: false,
  };
}

/**
 * The rows to draw: everything not already on, plus everything the picked
 * source would replace.
 *
 * Pass no source for the defaults case and the answer is the old one — the
 * off switches, nothing else.
 */
export function quickProtectRowPlan(
  childRules: ChildRules | undefined,
  sourceRules: ChildRules | undefined,
): QuickProtectRowPlan[] {
  const alreadyOn = quickProtectAlreadyOn(childRules);
  const copyable = quickProtectCopyable(sourceRules);

  const plan: QuickProtectRowPlan[] = [];
  for (const key of QUICK_PROTECT_KEYS) {
    if (!alreadyOn[key]) {
      plan.push({ key, replaces: false });
    } else if (copyable[key]) {
      plan.push({ key, replaces: true });
    }
  }
  return plan;
}

/** The children worth offering as a source, this child excluded. */
export function quickProtectSources<T extends { id: string; rules?: ChildRules }>(
  childId: string | undefined,
  siblings: T[],
): T[] {
  return siblings.filter(
    entry => entry.id !== childId && hasCopyableRules(entry.rules),
  );
}

/**
 * Whether the sheet has anything at all to say — an off switch, or a sibling
 * whose values could replace what is on.
 *
 * The surfaces ask before drawing: the phone closes a sheet with nothing in
 * it, the web renders no card. Both used to show a titled, empty box.
 */
export function hasQuickProtectOffer(
  child: { id?: string; rules?: ChildRules } | undefined,
  siblings: { id: string; rules?: ChildRules }[],
): boolean {
  return (
    quickProtectRowPlan(child?.rules, undefined).length > 0 ||
    quickProtectSources(child?.id, siblings).length > 0
  );
}

export interface QuickProtectPatchInput {
  childRules: ChildRules | undefined;
  /** The picked sibling's rules, or undefined for the KidGate defaults. */
  sourceRules: ChildRules | undefined;
  /** Switch positions, keyed the same way as the plan. */
  picked: QuickProtectFlags;
  canUsePremiumControls: boolean;
}

export interface QuickProtectPatch {
  /**
   * The child-level fields to write. Field names are shared with
   * `DeviceControls`, so the phone can hand this straight to
   * `updateControlsRouted`.
   */
  rules: Partial<ChildRules>;
  /**
   * The shared budget, or null when the row was not offered or not ticked.
   * Separate because it is never fanned out as a control the way the rest are
   * (`@kidgate/schema/childRules`) — the phone seeds each device with it and
   * the web posts it beside the rules.
   */
  dailyLimitMinutes: number | null;
}

/**
 * What a confirmed sheet writes.
 *
 * The schedule window and the filter's lists stay absent without a source on
 * purpose: `DEFAULT_DEVICE_CONTROLS` already pre-fills 22:00–07:00 and the
 * twelve categories on the device document, so writing them again would
 * restate values the parent may since have edited on a sibling this same
 * fan-out reaches.
 */
export function buildQuickProtectRules(
  input: QuickProtectPatchInput,
): QuickProtectPatch {
  const { childRules, sourceRules, picked, canUsePremiumControls } = input;
  const plan = quickProtectRowPlan(childRules, sourceRules);
  const offered = new Set(plan.map(row => row.key));
  /** A key decides nothing unless the parent could see it and left it on. */
  const wanted = (key: QuickProtectKey) => offered.has(key) && picked[key];

  const rules: Partial<ChildRules> = {};

  if (wanted('bedtime')) {
    if (childRules?.scheduleEnabled !== true) {
      rules.scheduleEnabled = true;
    }
    if (sourceRules?.scheduleWindows?.length) {
      rules.scheduleWindows = sourceRules.scheduleWindows;
    }
  }

  if (wanted('webFilter') && canUsePremiumControls) {
    // Field by field rather than on the row's own "already on": that flag is
    // true only when both halves are on, so a child holding one of them must
    // still receive the other.
    if (childRules?.webFilterEnabled !== true) {
      rules.webFilterEnabled = true;
    }
    if (childRules?.safeSearchEnabled !== true) {
      rules.safeSearchEnabled = true;
    }
    // The sibling's own lists, including the sites they were allowed and
    // refused. Both surfaces say so on the row before the button rather than
    // after: an older child's approved list on a younger child is the one part
    // of a copy a parent could not have predicted from the row labels.
    if (sourceRules?.webFilterCategories?.length) {
      rules.webFilterCategories = sourceRules.webFilterCategories;
    }
    if (sourceRules?.webFilterAllowList?.length) {
      rules.webFilterAllowList = sourceRules.webFilterAllowList;
    }
    if (sourceRules?.webFilterBlockList?.length) {
      rules.webFilterBlockList = sourceRules.webFilterBlockList;
    }
    if (typeof sourceRules?.webFilterAllowListOnly === 'boolean') {
      rules.webFilterAllowListOnly = sourceRules.webFilterAllowListOnly;
    }
  }

  // Free-tier keys, so no premium gate: `FREE_TIER_CONTROL_KEYS` carries
  // `locationSharingEnabled`, and the server would accept the write from a
  // lapsed family too.
  if (wanted('location')) {
    rules.locationSharingEnabled = true;
  }
  if (wanted('videoHistory') && canUsePremiumControls) {
    rules.videoHistoryEnabled = true;
  }

  const dailyLimitMinutes = wanted('dailyLimit')
    ? (sourceRules?.dailyLimitMinutes ?? STARTER_DAILY_LIMIT_MINUTES)
    : null;

  return { rules, dailyLimitMinutes };
}
