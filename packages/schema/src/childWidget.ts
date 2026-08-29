/**
 * What the CHILD's own home-screen widget reads. Sibling to
 * `@kidgate/schema/parentWidget` — same posture, different question.
 *
 * A parent's widget folds many children into a ranked list; a child's widget
 * answers one thing about the one device it sits on: **how much time is left
 * today**. Deliberately minutes-only — decided 2026-08-28 rather than mirroring
 * the parent card's used/limit/left breakdown, because a number a child could
 * quote back at a parent ("but it said 47 minutes!") is exactly the surface
 * this product does not want to hand out. A widget that says "40 min left"
 * says nothing about the limit, nothing about what has already been spent.
 *
 * **Removable by the child, same as any widget on either OS — this is
 * reassurance, not enforcement.** No lock, no schedule, no budget reads it;
 * removing it changes what the child sees, never what the device does.
 *
 * `KidGateChildWidgetStore.kt` and `KidGateChildWidgetStore.swift` mirror this
 * file. Change a key name and all three move together.
 */

export const CHILD_WIDGET_SNAPSHOT_KEY = 'kidgate_child_widget_snapshot';

export const CHILD_WIDGET_SNAPSHOT_VERSION = 1;

export interface ChildWidgetSnapshot {
  version: number;
  /** Wall clock at write time. The widget renders age from this, not freshness. */
  updatedAtMs: number;
  /** `YYYY-MM-DD` the minutes belong to. A widget waking after midnight is stale, not zero. */
  dateKey: string;
  /** BCP-47 tag the strings below were rendered in — see the schema note on why. */
  locale: string;
  /** "Screen Time today" — rendered by the app; the widget draws text it does not understand. */
  title: string;
  /**
   * The one sentence this widget exists to say: "1 hr 20 min left today",
   * "Limit reached", "Blocked Hours", "Device locked", or "No Daily Limit set" —
   * already localized. Never a raw minute count.
   */
  statusLine: string;
  /** 0..1, pre-clamped. Zero (and undrawn) when there is no limit to measure against. */
  progress: number;
  /** Drives the locked visual treatment (red, a lock glyph) independent of `progress`. */
  locked: boolean;
  /** False when this device has reported nothing today — the widget then hides the bar. */
  hasUsageData: boolean;
  /** "Updated 14:32" — the honesty line. See `ParentWidgetSnapshot.updatedLine` for the reasoning. */
  updatedLine: string;
}
