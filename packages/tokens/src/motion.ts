/**
 * Motion tokens — durations and curves, as data.
 *
 * Every platform animates with its own machinery — Reanimated on the phone,
 * CSS transitions in the desktop WebView and the web apps — but the *timing*
 * is a design decision, and it used to live twice: `MOTION` in
 * `apps/mobile/src/theme/interaction.ts` and hardcoded `150ms/220ms/300ms`
 * in `apps/desktop/src/styles.css`. A change to one was a change the other
 * silently missed, and the symptom is two devices in the same house animating
 * the same state change at different speeds.
 *
 * This module carries numbers and curve data only — no Reanimated builders,
 * no CSS strings baked in. Each platform maps:
 *
 * - `apps/mobile` re-exports `MOTION` and feeds `EASING` names through
 *   Reanimated's `Easing` (`utils/motion.ts`).
 * - Web surfaces render a curve with `cssCubicBezier()` and durations as
 *   `--kg-motion-*` custom properties.
 */

/** Durations in milliseconds. Exits use `fast` on purpose — a row the user
 * just deleted should get out of the way, not linger. */
export const MOTION = {
  fast: 150,
  normal: 220,
  slow: 300,
} as const;

/** `[x1, y1, x2, y2]` — the four control points of a CSS cubic-bezier. */
export type CubicBezier = readonly [number, number, number, number];

/**
 * The three curves the product uses. The names are the contract; the tuples
 * are the CSS spellings of what the phone already does:
 *
 * - `enter` is Reanimated's `Easing.out(Easing.cubic)`.
 * - `exit` is `Easing.in(Easing.cubic)`.
 * - `spring` is the closest cubic-bezier overshoot to the
 *   `{ damping: 18, stiffness: 260, mass: 0.55 }` spring the phone's tab
 *   icons run (`TAB_SPRING` below). A real spring is not a bezier; if the
 *   spring parameters change, this approximation must be re-fitted or the
 *   two platforms stop agreeing on the one bounce a family sees daily.
 */
export const EASING = {
  enter: [0.33, 1, 0.68, 1],
  exit: [0.32, 0, 0.67, 0],
  spring: [0.34, 1.4, 0.64, 1],
} as const satisfies Record<string, CubicBezier>;

/**
 * The tab-selection spring, for platforms with a real spring solver.
 * `EASING.spring` is its bezier stand-in — change both or neither.
 */
export const TAB_SPRING = {
  damping: 18,
  stiffness: 260,
  mass: 0.55,
} as const;

/** A `CubicBezier` as the CSS `cubic-bezier(…)` function. */
export function cssCubicBezier(curve: CubicBezier): string {
  return `cubic-bezier(${curve.join(', ')})`;
}
