/**
 * Which four children a parent's home-screen widget shows, and what each row
 * says — as keys, never as rendered text.
 *
 * The same posture as `lockCopy` and `activityCopy` beside it: `packages/core`
 * must not import `@kidgate/i18n`, and the caller that renders knows the
 * parent's language. What lives here is the part two surfaces would otherwise
 * each get slightly wrong — the ranking, the row cap, and the choice of which
 * sentence a row deserves.
 *
 * `apps/mobile` renders this into `ParentWidgetSnapshot` (`@kidgate/schema/
 * parentWidget`) and hands the result to native. Nothing else consumes it yet;
 * `apps/desktop` is the obvious second caller the day a Mac menu-bar summary
 * exists, which is why the fold is here rather than in the phone.
 *
 * ## Ranking, and why it is not alphabetical
 *
 * A widget is read in about a second, from a home screen, usually to answer one
 * question: is anyone over? So a child who has spent their limit sorts first,
 * then the heaviest usage, and a child with nothing reported sinks — that row
 * carries no number and is the least useful thing a small widget could spend a
 * line on. Alphabetical would be stable and useless: the parent of four would
 * see the same four names in the same order whatever the day did.
 *
 * The order is total within itself: two children with identical usage break on
 * `childId`, so the widget does not reshuffle between two reloads that saw the
 * same data.
 *
 * ## What a row cannot say
 *
 * `usage: null` means no assigned device of that child's reported anything
 * today, which is the honest reading of a phone that is off, out of signal, or
 * has not synced since midnight. It is not zero minutes, and the row says so
 * with `usage.noUsageDataYet` rather than drawing a bar at 0%. Conflating the
 * two is the same mistake `getChildScreenTimeUsage` returns `null` to avoid.
 */

import { PARENT_WIDGET_MAX_ROWS } from '@kidgate/schema/parentWidget';

/**
 * A sentence the caller will render.
 *
 * `durationMinutes` is deliberately *not* a `TranslationParams` bag. Two of the
 * three status keys take a slot holding a formatted duration ("1 hr 20 min"),
 * not a minute count, and a params object would have made passing the raw
 * number a one-character mistake that renders "80 left today". The caller has
 * to run the minutes through `usageDuration` to fill `durationSlot`, and the
 * types make that the only thing it can do.
 */
export interface ParentWidgetCopy {
  key: string;
  durationMinutes?: number;
  /** Which `{{slot}}` in `key` the formatted duration goes into. */
  durationSlot?: 'remaining' | 'used';
}

/**
 * Today's screen time for one child, already folded across their devices.
 *
 * Shaped to match what `getChildScreenTimeUsage` returns on the phone, so the
 * caller passes it straight through rather than re-deriving anything. Null when
 * that fold found no device with data for today.
 */
export interface ParentWidgetChildUsage {
  usedMinutes: number;
  limitMinutes: number | null;
  exceeded: boolean;
}

export interface ParentWidgetChildInput {
  childId: string;
  name: string;
  colorIndex: number;
  usage: ParentWidgetChildUsage | null;
  /** Assigned devices. Zero is legal — a child can exist before any hardware does. */
  deviceCount: number;
}

export interface ParentWidgetRowDraft {
  childId: string;
  name: string;
  colorIndex: number;
  usedMinutes: number;
  limitMinutes: number | null;
  progress: number;
  exceeded: boolean;
  hasUsageData: boolean;
  deviceCount: number;
  status: ParentWidgetCopy;
}

export interface ParentWidgetDraft {
  /** Heading. Always the same key; here so the caller renders one list, not two. */
  title: ParentWidgetCopy;
  /**
   * Household total, or null when no child reported anything.
   *
   * Minutes, not a sentence — the caller runs it through `usageDuration`, which
   * already owns the hour boundary and the fourteen unit forms.
   */
  totalMinutes: number | null;
  empty: ParentWidgetCopy;
  rows: ParentWidgetRowDraft[];
  childCount: number;
}

/**
 * Every key below already ships for the phone's own usage screens — not one new
 * English string. `lockCopy` makes the same promise for the same reason: a
 * widget is a fifth surface for a sentence to be worded differently on.
 */
const TITLE_KEY = 'usage.usageToday';
const EMPTY_KEY = 'usage.noUsageDataYet';
const LIMIT_REACHED_KEY = 'usage.dailyLimitReached';
const LEFT_TODAY_KEY = 'usage.minutesLeftToday';
const USED_TODAY_KEY = 'usage.minutesUsedTodayShort';

/**
 * The one thing a row's sentence must never do is imply a limit that is not
 * set. Three cases, in the order a parent cares about them: spent, remaining,
 * and — with no limit to measure against — simply how much.
 *
 * `remaining` and `used` arrive as pre-rendered duration strings because the
 * hour boundary lives in `usageDuration` and this module will not hold a second
 * copy of it. The caller substitutes; see `renderParentWidgetSnapshot` on the
 * phone.
 */
function statusFor(usage: ParentWidgetChildUsage | null): ParentWidgetCopy {
  if (!usage) {
    return { key: EMPTY_KEY };
  }
  if (usage.limitMinutes && usage.limitMinutes > 0) {
    if (usage.exceeded) {
      return { key: LIMIT_REACHED_KEY };
    }
    return {
      key: LEFT_TODAY_KEY,
      durationMinutes: usage.limitMinutes - usage.usedMinutes,
      durationSlot: 'remaining',
    };
  }
  return {
    key: USED_TODAY_KEY,
    durationMinutes: usage.usedMinutes,
    durationSlot: 'used',
  };
}

function progressFor(usage: ParentWidgetChildUsage | null): number {
  if (!usage?.limitMinutes || usage.limitMinutes <= 0) {
    return 0;
  }
  return Math.min(Math.max(usage.usedMinutes, 0) / usage.limitMinutes, 1);
}

/**
 * Over first, then heaviest, then anyone with data at all, then by id.
 *
 * The last tiebreak is what keeps two consecutive widget reloads from swapping
 * two identical rows — a widget that reorders itself for no visible reason
 * reads as broken even when every number on it is right.
 */
function rank(a: ParentWidgetRowDraft, b: ParentWidgetRowDraft): number {
  if (a.exceeded !== b.exceeded) {
    return a.exceeded ? -1 : 1;
  }
  if (a.hasUsageData !== b.hasUsageData) {
    return a.hasUsageData ? -1 : 1;
  }
  if (a.usedMinutes !== b.usedMinutes) {
    return b.usedMinutes - a.usedMinutes;
  }
  return a.childId < b.childId ? -1 : a.childId > b.childId ? 1 : 0;
}

export function buildParentWidgetDraft(
  children: ReadonlyArray<ParentWidgetChildInput>,
  options?: { maxRows?: number },
): ParentWidgetDraft {
  const maxRows = options?.maxRows ?? PARENT_WIDGET_MAX_ROWS;

  const rows = children
    .map<ParentWidgetRowDraft>(child => ({
      childId: child.childId,
      name: child.name,
      colorIndex: child.colorIndex,
      usedMinutes: Math.max(0, child.usage?.usedMinutes ?? 0),
      limitMinutes: child.usage?.limitMinutes ?? null,
      progress: progressFor(child.usage),
      exceeded: child.usage?.exceeded ?? false,
      hasUsageData: child.usage !== null,
      deviceCount: child.deviceCount,
      status: statusFor(child.usage),
    }))
    .sort(rank);

  // Every child counts toward the total, including the ones past the row cap —
  // a household total that silently meant "the top four" would be a number the
  // parent could not reconcile with the app.
  const reporting = rows.filter(row => row.hasUsageData);

  return {
    title: { key: TITLE_KEY },
    totalMinutes: reporting.length
      ? reporting.reduce((sum, row) => sum + row.usedMinutes, 0)
      : null,
    empty: { key: EMPTY_KEY },
    rows: rows.slice(0, Math.max(0, maxRows)),
    childCount: children.length,
  };
}
