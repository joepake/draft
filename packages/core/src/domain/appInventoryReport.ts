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
import {
  appFlagDismissed,
  type AppFlagDismissal,
} from '@kidgate/schema/appFlagDismissal';
import type { AppInstallApprovalPolicy } from '@kidgate/schema/policy';
import { installApprovalState, type InstallApprovalState } from './appInstallApproval';

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
 * Only ever true on a device's *second* or later scan, and only for a row that
 * arrived after the baseline. Everything in a first inventory carries
 * `firstSeenAt === scannedAt` and is deliberately not "new" — see
 * `InventoryApp.firstSeenAt`, `isFirstScan` below, and `baselineAt` in
 * `buildAppInventoryReport`, which together are what stop a freshly paired
 * device reporting its entire contents as recent arrivals.
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
  /** Appeared after the baseline scan, within `INVENTORY_RECENT_MS`. */
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
  /** The OS's install time where the device reported one. */
  installedAt?: number;
  /**
   * Where this row stands with the app install quarantine, when the parent
   * has it on and the app arrived after the line. Absent for every other row —
   * an app that was never in question is not "approved".
   */
  installState?: InstallApprovalState;
}

export interface AppInventoryReport {
  /**
   * Installed after the parent switched approval on and not yet approved —
   * blocked on the device right now, waiting on the parent. Newest install
   * first. **Removed from the three buckets below**, so a surface renders it
   * as its own group above them rather than a pill the eye slides past: the
   * device decided this on its own, and a parent who missed the push has to
   * find it where they look for blocks (`docs/FEASIBILITY.md`, "App install
   * quarantine"). Empty while the switch is off.
   */
  pending: InventoryRow[];
  /** High-confidence serious categories, alphabetical by label. */
  flagged: InventoryRow[];
  /**
   * Flagged, and the parent has said it is fine.
   *
   * Its own group rather than a merge into `other`, and that is the whole
   * design: a dismissal must stay **visible and reversible**. Folded into the
   * ordinary list, the summary above would report "nothing flagged" — the
   * parent's claim, said in the classifier's voice — with no way back to what
   * was waved off. The same argument as "there is no all-clear key" below.
   *
   * A row leaves this group on its own when the classifier changes its mind:
   * the dismissal records the category it answered, so a reclassified app is a
   * new claim and lands back in `flagged`.
   */
  dismissed: InventoryRow[];
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
   * Every shown row is a browser extension, so the whole screen should say so.
   *
   * `InventoryRow.isExtension` answers per row; this answers for the list, and
   * a surface needs both. The rows carry the chip and the glyph; **the page
   * around them carries a noun** — a title, a summary sentence, the note about
   * what a scan cannot see — and rendering "7 apps" over a list of seven Chrome
   * extensions is wrong in the one place a parent reads first.
   *
   * Derived rather than plumbed. The alternative is passing the device down and
   * asking whether its `webFilter` is `'extension'`, which both parent surfaces
   * would have to remember to do; the identifiers already say what they are
   * (`@kidgate/schema/appInventory`), so a list of them says it too. An empty
   * inventory is false — there is no vocabulary to switch to and nothing to say
   * it about.
   */
  isExtensionInventory: boolean;
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
  baselineAt: number,
  nowMs: number,
  isFirstScan: boolean,
  installApproval: AppInstallApprovalPolicy | null,
): InventoryRow {
  const showable = isShowableAppCategory(entry);
  /*
   * The OS's install time is the honest number and the one the device itself
   * compares. A row published before the field existed has none; for those,
   * on a scan that is not the first, "first seen after the line" is the best
   * available stand-in — it can only be later than the true install, so it
   * never quarantines a row the device would let through, and it stops the
   * parent's list going blank for a day after this ships. A first scan gets no
   * stand-in: `firstSeenAt` there is the scan time, not an arrival.
   */
  const installedAt =
    typeof app.installedAt === 'number'
      ? app.installedAt
      : !isFirstScan && app.firstSeenAt > 0
        ? app.firstSeenAt
        : null;
  const installState = installApprovalState(app.id, installedAt, installApproval);
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
    // Not the first scan (it knows nothing about arrival); seen *after* the
    // scan that established the baseline, which is what `baselineAt` is; and
    // recently, measured against now rather than against the scan, so an
    // inventory nobody refreshed for a month does not keep calling the same
    // app new.
    recent:
      !isFirstScan &&
      app.firstSeenAt > baselineAt &&
      nowMs - app.firstSeenAt < INVENTORY_RECENT_MS,
    isExtension: isBrowserExtensionId(app.id),
    ...(typeof app.installedAt === 'number' ? { installedAt: app.installedAt } : {}),
    ...(installState ? { installState } : {}),
  };
}

function byInstalledDesc(a: InventoryRow, b: InventoryRow): number {
  return (b.installedAt ?? b.firstSeenAt) - (a.installedAt ?? a.firstSeenAt);
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
  /**
   * The device's quarantine policy (`resolveInstallApprovalPolicy` off its
   * controls), or null/absent while the switch is off. Optional so a caller
   * that has no controls in hand — a test, a summary — still gets a report.
   */
  installApproval: AppInstallApprovalPolicy | null = null,
  /**
   * Flags this scope's parent has already answered
   * (`@kidgate/core/repositories/appFlagDismissal`). Optional and empty by
   * default, so every existing caller and every test keeps the classifier's
   * own answer.
   */
  dismissals: readonly AppFlagDismissal[] = [],
): AppInventoryReport {
  // Every entry carrying the scan's own timestamp is what a first scan looks
  // like — it is the one shape that cannot have come from a diff. An empty
  // inventory counts as first too: there is no previous list behind it either.
  const isFirstScan =
    inventory.apps.length === 0 ||
    inventory.apps.every(app => app.firstSeenAt >= inventory.scannedAt);

  /*
   * When the baseline was taken — the earliest `firstSeenAt` in the list.
   *
   * **This is what "new" is measured against, and reading it off the current
   * scan instead was a bug a parent saw.** Every row of a device's first scan
   * is stamped with that scan's time and carried forward unchanged; from the
   * *second* scan onwards `isFirstScan` is false, so the old gate — "first
   * seen inside the last seven days" — was true for the entire baseline, and
   * a browser paired yesterday showed New against every extension it has,
   * for a week. Measured 2026-09-06 on a real Chrome row: 7 of 7.
   *
   * Derived rather than stored. It is the same class of answer `isFirstScan`
   * already derives from the same field, it needs no schema change, and it
   * corrects every document already written — a stored `baselineAt` would fix
   * only devices that scanned again. Its one soft edge is a device whose
   * entire baseline has since been uninstalled: the floor moves up and the
   * oldest survivors stop being called new. That under-reports an arrival,
   * which is the direction `mapApps` already chose for an unreadable row.
   *
   * Zeroes are skipped — a row written before `firstSeenAt` existed reads 0
   * and would drag the floor to the epoch, making everything look new again.
   */
  let baselineAt = Number.POSITIVE_INFINITY;
  for (const app of inventory.apps) {
    if (app.firstSeenAt > 0 && app.firstSeenAt < baselineAt) {
      baselineAt = app.firstSeenAt;
    }
  }
  if (!Number.isFinite(baselineAt)) {
    // Nothing usable to compare against: no row may claim to be an arrival.
    baselineAt = inventory.scannedAt;
  }

  const pending: InventoryRow[] = [];
  const flagged: InventoryRow[] = [];
  const dismissed: InventoryRow[] = [];
  const other: InventoryRow[] = [];
  const unclassified: InventoryRow[] = [];
  let hiddenCount = 0;

  for (const app of inventory.apps) {
    const entry = categories.get(app.id) ?? null;
    if (entry && !isShowableAppCategory(entry)) {
      hiddenCount += 1;
      continue;
    }
    const row = toRow(app, entry, baselineAt, nowMs, isFirstScan, installApproval);
    if (row.installState === 'pending') {
      // Its own group, before any category: blocked right now, by the device,
      // and the parent is the only thing that changes that.
      pending.push(row);
    } else if (row.serious) {
      // A flag the parent has already answered leaves the warning group —
      // still classified, still serious, still listed, but under their own
      // heading rather than under the classifier's. `appFlagDismissed` compares
      // the category, so an app reclassified since is flagged again.
      if (row.category && appFlagDismissed(dismissals, row.id, row.category)) {
        dismissed.push(row);
      } else {
        flagged.push(row);
      }
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

  const shown =
    pending.length +
    flagged.length +
    dismissed.length +
    other.length +
    unclassified.length;

  return {
    pending: pending.sort(byInstalledDesc),
    flagged: flagged.sort(byLabel),
    dismissed: dismissed.sort(byLabel),
    other: other.sort(byLabel),
    unclassified: unclassified.sort(byLabel),
    // Every row, not most of them: a browser that somehow reported one real
    // application beside its extensions is not a browser this vocabulary
    // describes, and the app wording is the safe answer for a mixed list.
    isExtensionInventory:
      shown > 0 &&
      pending.every(row => row.isExtension) &&
      flagged.every(row => row.isExtension) &&
      dismissed.every(row => row.isExtension) &&
      other.every(row => row.isExtension) &&
      unclassified.every(row => row.isExtension),
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
 *
 * **A browser gets its own two keys rather than a `{{noun}}` hole.** Word order
 * and agreement differ across the fourteen packs, and a machine word posted
 * into a sentence is the thing no translator can fix — the same reason
 * `messageAlertBodyOutgoing` is a separate key from `messageAlertBody` rather
 * than one string with a direction in it.
 */
export function appInventorySummaryKey(report: AppInventoryReport): {
  key: string;
  params: Record<string, number>;
} {
  // Dismissed rows are counted, never dropped: the total says how many apps
  // are on the device, and an app does not leave the phone because a parent
  // decided it was fine.
  const shown =
    report.flagged.length +
    report.dismissed.length +
    report.other.length +
    report.unclassified.length;
  if (report.flagged.length > 0) {
    return {
      key: report.isExtensionInventory
        ? 'appInventory.summaryFlaggedExtension'
        : 'appInventory.summaryFlagged',
      params: { flagged: report.flagged.length, total: shown },
    };
  }
  return {
    key: report.isExtensionInventory
      ? 'appInventory.summaryClearExtension'
      : 'appInventory.summaryClear',
    params: { total: shown },
  };
}
