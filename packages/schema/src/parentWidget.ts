/**
 * What the parent's home-screen widget reads, and the only place its shape is
 * declared.
 *
 * Not a Firestore document — this one never leaves the phone. It is written by
 * the running app into a store the OS widget process can read (an App Group
 * `UserDefaults` suite on iOS, `SharedPreferences` on Android) and read back by
 * code in two other languages. That is exactly the shape that rule 2 exists
 * for: a widget is a separate process that cannot import a single line of this
 * app, so the alternative to declaring the contract once here is a Kotlin
 * `String` constant and a Swift `String` constant hand-copied from a
 * TypeScript one, drifting silently the first time a field is renamed.
 *
 * `KidGateWidgetStore.kt` and `KidGateWidgetSnapshot.swift` mirror this file.
 * Both carry a pointer back here; change a key name and all three move.
 *
 * ## Why the rows carry rendered text
 *
 * Every other copy surface in this product renders from `packages/i18n` at the
 * point of display, and native code that draws its own strings is the bug
 * `.claude/rules/i18n.md` was written about. A widget breaks the assumption
 * underneath that rule: the widget process has no bundle, no `t()`, and no idea
 * which of the fourteen languages the parent picked in Settings — it would
 * render in whatever language the *operating system* is set to, which is a
 * different answer for anyone running an English phone in Vietnamese.
 *
 * So the app renders the sentences with `t()` while it still can, and the
 * widget lays out text it does not understand. Copy still lives in
 * `packages/i18n` and nowhere else; only the moment of rendering moves. The two
 * chrome strings a widget needs *before* the first snapshot exists — its name
 * in the gallery, and its empty state — cannot come this way, and are the only
 * KidGate strings that live in Android's `values-<code>` string resources and
 * the iOS widget target's `.lproj` tables.
 *
 * ## Why it is a snapshot and not a query
 *
 * Neither platform lets a widget read Firestore: iOS gives a timeline provider
 * a few seconds and no bridge, and Android's `AppWidgetProvider` is a broadcast
 * receiver with the same ten-second ceiling every receiver has. Both refresh on
 * a budget the OS decides (WidgetKit rations reloads per day;
 * `updatePeriodMillis` floors at 30 minutes). The widget therefore shows the
 * last thing the app saw, stamped, and says how old that is — never a spinner
 * it cannot resolve.
 */

/** Suite key holding the JSON below. Same string on both platforms. */
export const PARENT_WIDGET_SNAPSHOT_KEY = 'kidgate_parent_widget_snapshot';

/**
 * Rows the ARRAY carries before it stops — the ceiling handed to native, not
 * necessarily the ceiling drawn. Each platform still caps its own render on
 * top of this, because the two devices this truncates for do not agree on
 * how much a row costs:
 *
 * - **iOS**: `systemMedium` is not taller than `systemSmall` — same ~155pt
 *   frame, only wider. The renderer used to let medium show more rows than
 *   small on the wrong assumption that it had more height; it does not, and
 *   both families cap at the same two rows (`KidGateWidgetEntryView.rows`).
 * - **Android**: the grid cell is genuinely taller at default placement, but
 *   `resizeMode="horizontal|vertical"` lets a parent shrink it to one cell-row
 *   (~110dp) with no scroll and no clip-safe fallback — content past the
 *   bottom edge is simply cut. Three is the count that still fits there.
 *
 * A family with six children sees the three the fold ranked highest — the
 * headline still counts every child, so the total is never a lie about a
 * subset.
 */
export const PARENT_WIDGET_MAX_ROWS = 3;

/** Snapshot format. Bumped when a field changes meaning, never when one is added. */
export const PARENT_WIDGET_SNAPSHOT_VERSION = 1;

export interface ParentWidgetChildRow {
  childId: string;
  /** The child's name as the parent typed it. Never a device model. */
  name: string;
  /** Index into `@kidgate/tokens`' accent list, same convention as `Child.colorIndex`. */
  colorIndex: number;
  /**
   * The child's accent, resolved to `#RRGGBB` by the app at write time.
   *
   * Resolved rather than shipped as the index, because the mapping from
   * `colorIndex` to a colour depends on the parent's active theme pack —
   * something only the running app knows. The widget parses the hex and
   * nothing else, so the avatar on the home screen and the avatar in the app
   * are always the same colour without native code carrying a copy of the
   * palette. Same posture as the strings: render while you still can.
   */
  accentColor: string;
  usedMinutes: number;
  /** Null when this child has no daily limit — the bar is then not drawn at all. */
  limitMinutes: number | null;
  /** 0..1, and 0 when there is no limit. Pre-clamped so the widget never has to. */
  progress: number;
  exceeded: boolean;
  /**
   * False when no device of this child's reported anything today.
   *
   * The widget draws `statusLine` and no number in that case: a zero here reads
   * as "used nothing", which is a different and unearned claim.
   */
  hasUsageData: boolean;
  deviceCount: number;
  /**
   * One sentence, already in the parent's language: how much is left, that the
   * limit is spent, or that nothing has been reported today.
   */
  statusLine: string;
}

export interface ParentWidgetSnapshot {
  version: number;
  /** Wall clock at write time. The widget renders age from this, not freshness. */
  updatedAtMs: number;
  /** `YYYY-MM-DD` the minutes belong to. A widget waking after midnight is stale, not zero. */
  dateKey: string;
  /** BCP-47 tag the strings below were rendered in. Lets the widget pick RTL layout. */
  locale: string;
  /** "Usage today" — the widget's own heading, rendered by the app. */
  title: string;
  /** Total across every child, formatted ("4 hr 20 min"). Empty when nothing reported. */
  totalLine: string;
  /**
   * "Updated 14:32" — when this snapshot was written, as a rendered sentence.
   *
   * On the widget it is the honesty line: the snapshot only moves while the
   * app runs, so a total that has not changed all afternoon is
   * indistinguishable from a fresh one without it — the same reasoning as the
   * `usage.reportedAt` stamp on the usage report. Rendered by the app (word
   * and clock format are both locale work); the widget hides it once
   * `dateKey` goes stale, because "Updated 21:03" with no date reads as
   * today's 21:03.
   */
  updatedLine: string;
  /** Shown instead of rows when `rows` is empty and the parent has children with no data. */
  emptyLine: string;
  /** Ranked, then truncated to `PARENT_WIDGET_MAX_ROWS`. */
  rows: ParentWidgetChildRow[];
  /** Children the family has, including any past the row cap. */
  childCount: number;
}
