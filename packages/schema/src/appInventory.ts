/**
 * What is on a child's device, as opposed to what changed on it.
 *
 * The gap this closes, in one sentence: **both existing app signals are
 * change-triggered, so an app that was already installed when the family paired
 * is invisible to both, forever.** `anomaly.newApp` compares today's
 * `usageDays.topApps` against a 21-day baseline — an app installed before
 * pairing and used every day *is* the baseline. The `app_installed` feed
 * watches `PACKAGE_ADDED` and a `/Applications` diff; a transition that
 * happened before the watch was armed did not happen. `docs/FEASIBILITY.md`,
 * "The app inventory".
 *
 * ## Inventory is not activity, and the distinction is the whole design
 *
 * `apps/desktop`'s `set_install_watch_enabled` has always run this exact scan
 * and thrown the answer away, because "a parent gets forty notifications for
 * turning the feature on". That is true, and it is a fact about the **activity
 * feed**, not about the data: an inventory is a list a parent opens, an alert
 * is a thing that opens a parent. Nothing here enters `activities` and nothing
 * here pushes.
 *
 * ## One document, replaced whole
 *
 * A subcollection document rather than a field on `childDevices/{deviceId}`,
 * which every parent screen reads for every device on every render — a
 * 150-entry array there is paid for by screens that never look at it.
 *
 * Replaced wholesale by each scan rather than merged, because a merge cannot
 * express removal: an app uninstalled between two scans has to leave the list,
 * and `arrayRemove` on a list the device does not fully control is a second
 * source of truth for the same fact.
 *
 * ## What a scan can and cannot see
 *
 * Every agent that can do this answers a *launcher* query — `ACTION_MAIN` with
 * `CATEGORY_LAUNCHER` (plus `LEANBACK_LAUNCHER` on the television), or the
 * `/Applications` directories on a Mac. `apps/extension` is the exception and
 * answers a different question entirely: `chrome.management.getAll()`, so its
 * rows are the other **extensions** in that browser, not applications on the
 * machine, and they are namespaced by `browserExtensionId` below so no reader
 * can confuse the two. An app with no launcher entry is invisible to the
 * launcher query, and how much that misses on a real phone is **unmeasured**
 * (`docs/FEASIBILITY.md`, "What is unproven"). Nothing built on this may claim
 * completeness: `scannedAt` says what was seen and when, and the copy says
 * "found on this device", never "everything on this device".
 *
 * iOS contributes nothing and never will — FamilyControls hands back opaque
 * `ApplicationToken`s and enumerates nothing (`docs/FEASIBILITY.md`, the cliff
 * list). `DeviceCapabilities.appInventory` is how a parent screen learns that
 * rather than rendering an empty list that looks like a broken feature.
 */

import { appInventoryCollection } from './paths';

export { appInventoryCollection };

/**
 * The single document id.
 *
 * A fixed id rather than a generated one because there is exactly one current
 * answer per device: history would be a hundred near-identical lists nobody
 * reads, and the one genuinely interesting delta — what arrived since — is
 * already the `app_installed` feed's job.
 */
export const APP_INVENTORY_DOC_ID = 'current';

/**
 * Entries a single scan may publish.
 *
 * A launcher query on an ordinary phone returns 60–150; a Mac's
 * `/Applications` sweep is comparable; an Android TV is far smaller. The cap is
 * a bound on the write rather than an expected size — this is a client-supplied
 * list landing in a document, the same class of input the blocked-app list is
 * capped for, and an uncapped array is how one device makes a parent's screen
 * unopenable.
 *
 * Overflow is reported, never silent: `truncated` is what stops a partial list
 * reading as a complete one.
 */
export const MAX_INVENTORY_APPS = 300;

/** Longest label stored. Anything past this is a name nobody typed on purpose. */
export const MAX_INVENTORY_LABEL_LENGTH = 80;

/**
 * How often an agent re-scans.
 *
 * A day, because the answer changes about that often and the scan is the
 * cheapest thing either agent does. Deliberately **not** pairing-only: a device
 * paired before this shipped would otherwise never get an inventory at all.
 */
export const INVENTORY_RESCAN_INTERVAL_MS = 24 * 60 * 60 * 1000;

/** One app, as stored. */
export interface InventoryApp {
  /** Package name on Android, bundle identifier on macOS. The classifier's key. */
  id: string;
  /** What the device calls it. Falls back to `id` when the label will not load. */
  label: string;
  /**
   * When this device first saw the app, as epoch ms.
   *
   * **On a device's first scan this equals `scannedAt` for every entry, and
   * means "found on the device", not "installed then".** A first scan has no
   * previous list to diff against and cannot tell a decade-old app from
   * yesterday's; a renderer that presents the first inventory as a timeline is
   * inventing the one number nobody measured. Later scans genuinely know,
   * because they carry the previous entry forward.
   */
  firstSeenAt: number;
}

/** One device's inventory, as stored. */
export interface AppInventory {
  apps: InventoryApp[];
  /** Epoch ms of the scan that produced this list. */
  scannedAt: number;
  /** True when the device had more apps than `MAX_INVENTORY_APPS`. */
  truncated: boolean;
  /**
   * How many entries the scan actually saw, before the cap.
   *
   * Present so a truncated list can say by how much rather than only that it
   * was cut, and so a device reporting a wildly wrong count is visible.
   */
  totalSeen: number;
}

export function appInventoryDoc(userId: string, deviceId: string): string {
  return `${appInventoryCollection(userId, deviceId)}/${APP_INVENTORY_DOC_ID}`;
}

/**
 * Whether an identifier is worth storing and classifying.
 *
 * Mirrors the guard `functions/scheduled/classifyApps.js` applies to
 * `topApps[].packageName`, and for the same reason: a blank or absurd
 * identifier costs a model call and produces a row keyed by nothing. Kept here
 * so the device filters before the write rather than the server filtering after
 * it — a capped list should not spend its cap on garbage.
 */
export function isUsableInventoryId(id: unknown): id is string {
  return typeof id === 'string' && id.trim().length > 1 && id.length <= 200;
}

/**
 * What a browser extension's identifier is namespaced with.
 *
 * A Chrome extension id is 32 characters of `a`–`p` and nothing else —
 * `cjpalhdlnbpafiamejdnhcphjbkeiagm` — which names the app to nobody, human or
 * model. Left bare it would flow into the same places a package name does and
 * be **wrong in every one of them**: `classifyApps` would spend a Gemini call
 * asking what that string is and store whatever came back, permanently, in the
 * one `appCategories` row every family in the product reads; the parent's chip
 * would render that guess as fact; and a reader with only the id in hand has no
 * way to tell it is not an Android package.
 *
 * So the fact travels **in the identifier**, not in a lookup. Any code holding
 * one of these knows what it is without fetching the device it came from, which
 * is what stops the next entry point from having to remember the check. The
 * same reasoning that keeps `DevicePlatform` from inventing a value for Linux:
 * a shape that cannot be misread beats a convention that must be remembered.
 *
 * Deliberately not a heuristic on the id's own shape. `[a-p]{32}` is a real
 * signature and matching it would still be a guess made by a reader, at a
 * distance, about data it did not write — the writer knows, so the writer says.
 */
export const BROWSER_EXTENSION_ID_PREFIX = 'chrome-extension:';

/** Namespace a raw `chrome.management` id for storage. */
export function browserExtensionId(id: string): string {
  return `${BROWSER_EXTENSION_ID_PREFIX}${id}`;
}

/**
 * Whether this identifier names a browser extension rather than an app.
 *
 * Read by the parent surfaces (which show "Chrome Extension" and the extension
 * glyph in place of a category chip) and by `classifyApps`, which skips these
 * outright — see the prefix's own note for why classifying one is worse than
 * leaving it unclassified.
 */
export function isBrowserExtensionId(id: string): boolean {
  return id.startsWith(BROWSER_EXTENSION_ID_PREFIX);
}
