/**
 * The keyword tables that message-content monitoring scans against, delivered
 * to the device as data rather than compiled into it.
 *
 * **Why this is a pushed policy and not a bigger hardcoded list.** The built-in
 * seed in `@kidgate/core/domain/messageKeywords` (and its Kotlin twin) is a
 * small offline fallback — a few terms per category so a device that has never
 * fetched a policy still catches the gravest words. The real list is hundreds
 * to thousands of terms across fourteen languages, and that does not belong
 * hand-mirrored in two parity-pinned files: it bloats the mobile bundle (Metro
 * does not tree-shake) and the APK, and it cannot grow without an app release.
 * The web filter already solved this — the macOS provider ships no tables and
 * receives `ContentFilterRules` at runtime — and this is the same move for
 * words: the server owns the list, the device fetches and caches it, and a term
 * added server-side reaches every child without a build. See
 * `docs/FEASIBILITY.md`, "Message-content monitoring".
 *
 * A term is just a string and the payload stays one flat list per category —
 * but **which languages went into that list is now decided before it is
 * served**, not ignored. The scanner genuinely does not care, and that was the
 * problem: measured 2026-08-29, scanning all fourteen packs flagged 16 of 45
 * ordinary messages, because `rot` is German for "red" and English algospeak
 * for decay, `ana` and `mia` are Spanish and Italian names, and `ke` is Hindi
 * for "of". The device therefore asks for the languages it wants
 * (`DeviceControls.messageKeywordLanguages`, resolved by
 * `@kidgate/core/domain/messageKeywordLanguages`) and the server merges only
 * those packs. A client that asks for none still receives all fourteen, so an
 * older app's behaviour does not change under it.
 *
 * This shape crosses the wire (a Cloud Function serves it, the native listener
 * consumes it), so it stays plain and mechanically translatable — no maps of
 * maps, no optional cleverness. `version` lets the device skip re-applying a
 * policy it already holds.
 */

import type { MessageAlertCategory } from './messageAlert';

export interface MessageKeywordPolicy {
  /**
   * Monotonic version of the served list. The device stores the last version it
   * applied and ignores a payload whose version is not newer, so an unchanged
   * policy costs a fetch and no re-parse.
   */
  version: number;
  /**
   * Which language packs went into `terms`, echoed back so the device can tell
   * which question this payload answers. The `version` alone cannot: a parent
   * changing the selection does not move it.
   */
  languages?: readonly string[];
  /**
   * Terms per category. Every key is a `MessageAlertCategory`; a category may
   * be absent (the device keeps its seed for that one). Terms are lower-case.
   */
  terms: Partial<Record<MessageAlertCategory, readonly string[]>>;
  /**
   * The severity floor the device should apply unless the parent overrode it:
   * 2 = high only, 1 = medium and up, 0 = everything. Lets the product raise or
   * lower the default noise level without an app release, the same way the term
   * list itself moves. The parent's own choice, when made, still wins.
   */
  minSeverityDefault: number;
  /** When the server last regenerated this list. ISO 8601. */
  updatedAt: string;
}
