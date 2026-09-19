/**
 * Whether a rule change makes a device's rules **looser**, key by key.
 *
 * The free tier's write gate (`docs/FEASIBILITY.md`, "Free tier: a parked
 * device goes loosen-only"). Parking decides what comes **up** off a device;
 * this decides what may go **down** to one. The two are independent by
 * construction — F4 of that entry — and a parked device keeps enforcing every
 * rule it already holds either way.
 *
 * **The product reason, in one line:** a parental-control configuration is not
 * static — a child grows, term starts, a holiday ends — so a set of rules that
 * can only be loosened is wrong within weeks, and the moment it is wrong is the
 * moment the family pays. Withholding *reports*, which is all parking did,
 * converts nobody: plenty of parents never wanted the reports.
 *
 * ## Why "no stricter" rather than "strictly looser"
 *
 * `isRelaxation` answers **true for an unchanged value**. The caller is a gate
 * asking "may this land on a parked device", and re-writing the value already
 * there enforces nothing new. Demanding a strict loosening would refuse the
 * commonest write of all — a parent saving a form where one field moved and
 * eleven did not.
 *
 * ## Absent means the default, and the defaults are `firestore.rules`'
 *
 * `parentControlsUnchanged()` reads every one of these with an explicit
 * fallback — `.get('webFilterEnabled', false)`, `.get('appLimits', [])`,
 * `.get('dailyLimitMinutes', null)`. A device that never had the field is a
 * device holding that default, so the comparison uses the same ones. Inventing
 * a different fallback here would make the gate and the rules file disagree
 * about what a blank device already permits.
 *
 * ## One path around it, left open deliberately
 *
 * "A parked device cannot be tightened" is true of every writer except one:
 * `functions/triggers/childRules.applyChildRulesOnAssignment` copies a child's
 * rules onto a device the moment a parent assigns it, without consulting this
 * fold. So unassign-and-reassign applies the full current ruleset to a parked
 * machine. That file carries the argument — briefly, refusing the copy would
 * leave a reassigned device enforcing the *previous* child's rules, a safety
 * hole traded for a billing one, and the "exploit" buys a parent stricter
 * controls on their own child's device.
 *
 * It is written here because this is the module somebody reads to believe the
 * gate is total, and it is not.
 *
 * ## Unknown keys are refused
 *
 * This is an enforcement gate, so it fails **closed**: a field nobody taught it
 * about cannot be written to a parked device at all. The alternative fails open
 * — a rule added to `parentControlsUnchanged` and forgotten here would be
 * silently tightenable on every parked device in the product, and nothing would
 * report it. A refusal is visible the first time somebody tries it.
 */

import type { AppLimit } from '@kidgate/schema/deviceControls';

/**
 * Turning a switch **off** is always the relaxation, monitors included.
 *
 * Uncontroversial for a restriction — the filter, blocked hours, app blocking.
 * Worth stating for the four monitoring switches (messages, outgoing messages,
 * search, video history) and for `locationSharingEnabled`, where "looser" reads
 * backwards from the parent's chair: they see *less*. It is still the right
 * direction, and on a parked device it is also academic — the device is not
 * reporting, so a monitor switched on there observes nothing and a monitor
 * switched off loses nothing. Refusing the off would be the product taking a
 * position on a field with no observable effect.
 */
const OFF_IS_LOOSER = [
  'scheduleEnabled',
  'webFilterEnabled',
  'webFilterAllowListOnly',
  'appBlockingEnabled',
  'safeSearchEnabled',
  'appInstallApprovalEnabled',
  'messageMonitoringEnabled',
  'messageMonitoringOutgoingEnabled',
  'searchMonitoringEnabled',
  'messageProfanityEnabled',
  'videoHistoryEnabled',
  'locationSharingEnabled',
] as const;

/**
 * A shorter list refuses less.
 *
 * `webFilterCategories` and `webFilterBlockList` are what the filter turns
 * away; `messageKeywordLanguages` is how many languages the keyword scanner
 * reads, so dropping one narrows what it looks at.
 */
const SHRINKING_IS_LOOSER = [
  'webFilterCategories',
  'webFilterBlockList',
  'messageKeywordLanguages',
] as const;

/**
 * A longer list permits more.
 *
 * `webFilterAllowList` is reachable whatever a category says;
 * `approvedPackages` is what the install quarantine lets through.
 */
const GROWING_IS_LOOSER = ['webFilterAllowList', 'approvedPackages'] as const;

/**
 * Null is loosest, and a bigger number is looser than a smaller one.
 *
 * Both fields mean "no ceiling" when absent. `dailyLimitMinutes` null is no
 * daily limit at all; `appInstallApprovalSinceMs` null is the quarantine off
 * (`resolveInstallApprovalPolicy` reads an absent stamp as off), and a **later**
 * line catches fewer installs, because the device compares each package's OS
 * install time against it.
 */
const HIGHER_IS_LOOSER = ['dailyLimitMinutes', 'appInstallApprovalSinceMs'] as const;

/**
 * Null is loosest, and an **earlier** end is looser than a later one.
 *
 * The mirror of `HIGHER_IS_LOOSER`, and the difference is what the number
 * means: those two are ceilings a rule stops at, while `browsingPausedUntil`
 * is a deadline the device is blocked *until*, so pushing it out blocks for
 * longer. Absent is not paused at all, which makes "Resume" the loosest thing
 * this field can say.
 */
const EARLIER_IS_LOOSER = ['browsingPausedUntil'] as const;

export type GatedRuleKey =
  | (typeof OFF_IS_LOOSER)[number]
  | (typeof SHRINKING_IS_LOOSER)[number]
  | (typeof GROWING_IS_LOOSER)[number]
  | (typeof HIGHER_IS_LOOSER)[number]
  | (typeof EARLIER_IS_LOOSER)[number]
  | 'appLimits'
  | 'scheduleWindows';

/** Every key this gate can answer for. The rest are refused — see the header. */
export const GATED_RULE_KEYS: readonly GatedRuleKey[] = [
  ...OFF_IS_LOOSER,
  ...SHRINKING_IS_LOOSER,
  ...GROWING_IS_LOOSER,
  ...HIGHER_IS_LOOSER,
  ...EARLIER_IS_LOOSER,
  'appLimits',
  'scheduleWindows',
];

function asStringSet(value: unknown): Set<string> {
  if (!Array.isArray(value)) {
    return new Set();
  }
  return new Set(value.filter((item): item is string => typeof item === 'string'));
}

/** Every member of `inner` is in `outer`. */
function isSubset(inner: Set<string>, outer: Set<string>): boolean {
  for (const item of inner) {
    if (!outer.has(item)) {
      return false;
    }
  }
  return true;
}

/**
 * `null` and `undefined` both mean "no ceiling"; anything unparseable is read
 * as one too, so a malformed value can never pass as a tighter cap than the
 * device already had.
 */
function ceiling(value: unknown): number | null {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    return null;
  }
  return value;
}

function isLooserCeiling(before: unknown, after: unknown): boolean {
  const from = ceiling(before);
  const to = ceiling(after);
  if (to === null) {
    // No ceiling at all is the loosest thing this field can say.
    return true;
  }
  if (from === null) {
    // Something where there was nothing.
    return false;
  }
  return to >= from;
}

/**
 * A deadline the device is blocked until: absent is loosest, earlier is looser.
 *
 * Unparseable reads as absent for the same reason a malformed ceiling does —
 * it must never pass as a longer pause than the device already had.
 */
function isLooserDeadline(before: unknown, after: unknown): boolean {
  const from = ceiling(before);
  const to = ceiling(after);
  if (to === null) {
    // Resume: the loosest thing this field can say.
    return true;
  }
  if (from === null) {
    // A pause where there was none — a new restriction, whatever its length.
    return false;
  }
  return to <= from;
}

function asAppLimits(value: unknown): Map<string, number> {
  const limits = new Map<string, number>();
  if (!Array.isArray(value)) {
    return limits;
  }
  for (const entry of value as AppLimit[]) {
    if (entry && typeof entry.id === 'string' && typeof entry.minutes === 'number') {
      limits.set(entry.id, entry.minutes);
    }
  }
  return limits;
}

/**
 * Per-app caps loosen by being **lifted or raised**, never by appearing.
 *
 * A cap the device did not have is a new restriction whatever its size, so a
 * package in `after` with no entry in `before` is a tightening. Dropping an
 * entry lifts that cap entirely and is the loosest move available. `label` is
 * cosmetic and never consulted — a parent renaming an app in the picker must
 * not read as a rule change.
 */
function isLooserAppLimits(before: unknown, after: unknown): boolean {
  const from = asAppLimits(before);
  const to = asAppLimits(after);
  for (const [id, minutes] of to) {
    const was = from.get(id);
    if (was === undefined || minutes < was) {
      return false;
    }
  }
  return true;
}

/**
 * Is `after` no stricter than `before` for this one key?
 *
 * Returns `false` for a key this module does not know — see the header on
 * failing closed.
 */
export function isRelaxation(key: string, before: unknown, after: unknown): boolean {
  if ((OFF_IS_LOOSER as readonly string[]).includes(key)) {
    // Absent is `false` here, matching `parentControlsUnchanged`'s fallback, so
    // the only refused move is off-to-on.
    return after !== true || before === true;
  }
  if ((SHRINKING_IS_LOOSER as readonly string[]).includes(key)) {
    return isSubset(asStringSet(after), asStringSet(before));
  }
  if ((GROWING_IS_LOOSER as readonly string[]).includes(key)) {
    return isSubset(asStringSet(before), asStringSet(after));
  }
  if ((HIGHER_IS_LOOSER as readonly string[]).includes(key)) {
    return isLooserCeiling(before, after);
  }
  if ((EARLIER_IS_LOOSER as readonly string[]).includes(key)) {
    return isLooserDeadline(before, after);
  }
  if (key === 'appLimits') {
    return isLooserAppLimits(before, after);
  }
  /*
   * Blocked Hours windows: unchanged only, deliberately.
   *
   * Comparing two sets of wall-clock windows for containment across midnight is
   * an interval algebra nobody has asked for, and the escape it would buy is
   * already bought by `scheduleEnabled` going off — which is what a parent
   * stuck with a bad trial setting actually needs. Recorded as a first cut in
   * the entry, not as the final answer.
   */
  if (key === 'scheduleWindows') {
    return JSON.stringify(after ?? []) === JSON.stringify(before ?? []);
  }
  return false;
}

/**
 * The keys in `patch` that would make `before` stricter — empty when the whole
 * patch may land on a parked device.
 *
 * A list rather than a boolean because the refusal has to be nameable: a parent
 * who saved six fields and had one refused is owed which one, and "the write
 * failed" over a form that mostly succeeded is the silent-drop failure
 * `ChildRulesFieldError` already exists to prevent.
 */
/**
 * Would a parked device refuse this patch **whole**?
 *
 * The question both parent consoles ask before spending a request: a patch
 * with nothing left to land has one possible answer, and `updateDeviceControls`
 * answers it 403 after a cold start. A patch that tightens only in part is not
 * this — the server takes the loosening half and names the rest in
 * `refusedKeys` — so `false` here means "send it", never "it will all land".
 *
 * Here rather than in each console because it was written twice within one
 * change, which is the shape of a rule two screens later disagree about.
 * Parking itself is `isDeviceParked`; this is only the fold over the keys.
 */
export function isWhollyTightening(
  before: Record<string, unknown> | null | undefined,
  patch: Record<string, unknown> | null | undefined,
): boolean {
  const keys = Object.keys(patch ?? {});
  return keys.length > 0 && tighteningKeys(before, patch).length === keys.length;
}

export function tighteningKeys(
  before: Record<string, unknown> | null | undefined,
  patch: Record<string, unknown> | null | undefined,
): string[] {
  if (!patch) {
    return [];
  }
  const current = before ?? {};
  return Object.keys(patch).filter(key => !isRelaxation(key, current[key], patch[key]));
}
