/**
 * A device's inventory, turned into what a parent should be shown.
 *
 * Pure, clock-free, and it renders nothing: every surface gets rows plus i18n
 * keys and formats them itself, per the rule that keeps this package free of
 * `t()` and of a locale. `nowMs` arrives as an argument for the same reason
 * `protectionStatus` takes one.
 *
 * ## The four constraints, all inherited, none re-litigated here
 *
 * They come from the AI-classification gate (`docs/FEASIBILITY.md`), which
 * measured them, and this module's job is to obey rather than re-derive:
 *
 * 1. **Category may be shown. Risk flags may not.** `strangerChat` fired on
 *    Microsoft Teams in all three spike runs. There is no such field in
 *    `@kidgate/schema/aiApps` and nothing here invents one.
 * 2. **`system` and `none` are never mentioned.** `isShowableAppCategory`
 *    decides it. An inventory is where this bites hardest — a raw launcher
 *    query on a television is mostly the manufacturer's own furniture, and the
 *    #2 and #4 apps by minutes on the one real Android TV in the product are a
 *    screensaver and a launcher.
 * 3. **A serious category warns only at `confidence: 'high'`.**
 *    `isSeriousAppCategory` already refuses the rest. A guess landing on
 *    `dating` is the single mistake that would cost a family's trust outright.
 * 4. **Nothing is auto-blocked and nothing offers to block.** A parent-set
 *    remote block does not exist (`docs/FEASIBILITY.md`, "Parent-set app
 *    blocking" — the `ApplicationToken` kill-shot). This ends in a sentence.
 *
 * ## Unclassified is not harmless
 *
 * An app the nightly job has not reached yet has no row in `appCategories`, and
 * it lands in `unclassified` rather than in `other`. The two are different
 * claims — "we looked and it is ordinary" versus "we have not looked" — and
 * collapsing them is how a parent comes to read silence as an all-clear on the
 * one app that arrived this morning.
 */

import {
  isSeriousAppCategory,
  isShowableAppCategory,
  type AppCategory,
  type AppCategoryEntry,
} from '@kidgate/schema/aiApps';
import {
  isBrowserExtensionId,
  type AppInventory,
  type InventoryApp,
} from '@kidgate/schema/appInventory';

/**
 * Past this the inventory is stale enough to say so.
 *
 * Twice `INVENTORY_RESCAN_INTERVAL_MS`, not equal to it: a device that scans
 * daily and misses one pass because it was switched off is not a device with a
 * problem, and a banner that appears every time a laptop stays shut for a
 * weekend is a banner parents stop reading. The same argument as the amber
 * badge in `protectionStatus`.
 */
export const INVENTORY_STALE_AFTER_MS = 48 * 60 * 60 * 1000;

/**
 * How recently an app must have appeared to be called new.
 *
 * Only ever true on a device's *second* or later scan. Everything in a first
 * inventory carries `firstSeenAt === scannedAt` and is deliberately not "new" —
 * see `InventoryApp.firstSeenAt`, and `isFirstScan` below, which is what stops
 * a freshly paired phone reporting its entire contents as recent arrivals.
 */
export const INVENTORY_RECENT_MS = 7 * 24 * 60 * 60 * 1000;

export interface InventoryRow {
  id: string;
  label: string;
  /** Absent when nothing is stored, or when the stored row is unshowable. */
  category?: AppCategory;
  /** True only for a high-confidence serious category. Never a raw flag. */
  serious: boolean;
  /**
   * Publisher age rating, present only when positive.
   *
   * 0 means unknown and is the common answer. Nothing branches on it — see the
   * field's note in `@kidgate/schema/aiApps` for why asking a parent for a
   * child's age would not help either.
   */
  minAge?: number;
  firstSeenAt: number;
  /** Appeared since the previous scan, within `INVENTORY_RECENT_MS`. */
  recent: boolean;
  /**
   * This row is a browser extension, not an app on the machine.
   *
   * Read off the identifier's own namespace (`isBrowserExtensionId`), so it
   * needs no lookup and cannot disagree with the device that wrote it. A
   * surface renders "Chrome Extension" and the extension glyph in place of the
   * category chip, because these rows carry **no category and never will** —
   * `classifyApps` skips them on purpose, and `@kidgate/schema/appInventory`
   * says why.
   *
   * Which is also why they must not land in `unclassified`: that bucket means
   * "the nightly job has not reached this yet", a claim that resolves itself
   * in a day. Here nothing is coming, and a parent told an extension is
   * pending classification would be waiting for an answer no job will write.
   */
  isExtension: boolean;
}

export interface AppInventoryReport {
  /** High-confidence serious categories, alphabetical by label. */
  flagged: InventoryRow[];
  /** Everything else with a showable classification. */
  other: InventoryRow[];
  /** Not classified yet. Never merged into `other`. */
  unclassified: InventoryRow[];
  /**
   * Rows dropped as `system`/`none`.
   *
   * A count, not a list, and it exists so the numbers add up when someone
   * checks: a parent seeing "48 apps" against a phone they know holds 130 has
   * found a bug in their own trust rather than in the product. No surface has
   * to render it, and none should render it as an app list.
   */
  hiddenCount: number;
  scannedAt: number;
  stale: boolean;
  truncated: boolean;
  totalSeen: number;
  /**
   * Whether this is the device's first inventory.
   *
   * Load-bearing for copy, not decoration: on a first scan the report may not
   * say anything about *when* an app arrived, because it does not know. The
   * surface says "found on this device"; only later reports may say "added".
   */
  isFirstScan: boolean;
}

function toRow(
  app: InventoryApp,
  entry: AppCategoryEntry | null,
  scannedAt: number,
  nowMs: number,
  isFirstScan: boolean,
): InventoryRow {
  const showable = isShowableAppCategory(entry);
  // Spread rather than assigning `undefined`: `exactOptionalPropertyTypes` is on
  // repo-wide, so an absent classification has to be an absent key.
  return {
    id: app.id,
    label: app.label || app.id,
    ...(showable && entry ? { category: entry.category } : {}),
    serious: isSeriousAppCategory(entry),
    ...(entry && entry.minAge > 0 ? { minAge: entry.minAge } : {}),
    firstSeenAt: app.firstSeenAt,
    // Three separate gates, and dropping any one produces a wrong sentence.
    // Not the first scan (it knows nothing about arrival); seen after the scan
    // that established the baseline; and recently, measured against now rather
    // than against the scan, so an inventory nobody refreshed for a month does
    // not keep calling the same app new.
    recent:
      !isFirstScan &&
      app.firstSeenAt > scannedAt - INVENTORY_RECENT_MS &&
      nowMs - app.firstSeenAt < INVENTORY_RECENT_MS,
    isExtension: isBrowserExtensionId(app.id),
  };
}

function byLabel(a: InventoryRow, b: InventoryRow): number {
  return a.label.localeCompare(b.label);
}

/**
 * Build the report.
 *
 * `categories` is what `getAppCategories` returned — every identifier present,
 * mapping to null for the ordinary case of an app the nightly job has not
 * reached. A caller that passes an incomplete map gets those apps in
 * `unclassified`, which is the honest answer to "we did not look it up".
 */
export function buildAppInventoryReport(
  inventory: AppInventory,
  categories: ReadonlyMap<string, AppCategoryEntry | null>,
  nowMs: number,
): AppInventoryReport {
  // Every entry carrying the scan's own timestamp is what a first scan looks
  // like — it is the one shape that cannot have come from a diff. An empty
  // inventory counts as first too: there is no previous list behind it either.
  const isFirstScan =
    inventory.apps.length === 0 ||
    inventory.apps.every(app => app.firstSeenAt >= inventory.scannedAt);

  const flagged: InventoryRow[] = [];
  const other: InventoryRow[] = [];
  const unclassified: InventoryRow[] = [];
  let hiddenCount = 0;

  for (const app of inventory.apps) {
    const entry = categories.get(app.id) ?? null;
    if (entry && !isShowableAppCategory(entry)) {
      hiddenCount += 1;
      continue;
    }
    const row = toRow(app, entry, inventory.scannedAt, nowMs, isFirstScan);
    if (row.serious) {
      flagged.push(row);
    } else if (entry || row.isExtension) {
      // An extension is `other` with no entry, which is the one place in this
      // function where a missing classification is not a gap. Nothing will
      // ever classify it — see `InventoryRow.isExtension` — so `unclassified`
      // would promise an answer that is not coming.
      other.push(row);
    } else {
      unclassified.push(row);
    }
  }

  return {
    flagged: flagged.sort(byLabel),
    other: other.sort(byLabel),
    unclassified: unclassified.sort(byLabel),
    hiddenCount,
    scannedAt: inventory.scannedAt,
    stale: nowMs - inventory.scannedAt > INVENTORY_STALE_AFTER_MS,
    truncated: inventory.truncated,
    totalSeen: inventory.totalSeen,
    isFirstScan,
  };
}

/**
 * The one-line summary, as an i18n key plus its parameters.
 *
 * A key rather than a sentence because fourteen locales render it, and the
 * count has to reach the translator as a number so a language with plural
 * classes can do its own job with it.
 *
 * **There is no "all clear" key.** The nearest honest thing is "nothing
 * flagged", which is what `appInventory.summaryClear` says: an inventory that
 * cannot see a launcher-less app, and a classifier that has not reached every
 * row, together cannot support the sentence a parent would most like to read.
 * `docs/FEASIBILITY.md`, "What is unproven".
 */
export function appInventorySummaryKey(report: AppInventoryReport): {
  key: string;
  params: Record<string, number>;
} {
  const shown =
    report.flagged.length + report.other.length + report.unclassified.length;
  if (report.flagged.length > 0) {
    return {
      key: 'appInventory.summaryFlagged',
      params: { flagged: report.flagged.length, total: shown },
    };
  }
  return { key: 'appInventory.summaryClear', params: { total: shown } };
}
