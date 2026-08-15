/**
 * Interaction tokens — how a control responds to being touched, as data.
 *
 * Moved up from `apps/mobile/src/theme/interaction.ts` once `apps/desktop`
 * turned out to be hand-copying the classic pack's press values into CSS.
 * What lives here is the decision; what stays in each app is the machinery
 * (a React Native `StyleSheet` on the phone, `:active` rules on the web).
 */

import { forActiveStyle, type ThemeStyleId } from './styles';

/** WCAG / iOS HIG minimum touch target. */
export const MIN_TOUCH_TARGET = 44;

/**
 * A control that is present and cannot act.
 *
 * 0.5, which is what `apps/mobile` already draws — `PairingCodeModal`,
 * `SwipeToDeleteRow`, `ParentNameSetupModal`, `PairingQrScanner`,
 * `TimeStepperField` and a dozen more each write `opacity: 0.5` by hand, and
 * two of them have drifted to 0.55. Named here because `apps/tv` was about to
 * pick a third number from scratch: a disabled control is the same statement on
 * every surface, and it should not be re-decided per screen.
 *
 * Distinct from `PRESS_FEEDBACK.opacity`, which is a control being pressed —
 * a different state, a different number, and briefly rather than persistently.
 */
export const DISABLED_OPACITY = 0.5;

/**
 * `maxFontSizeMultiplier` for text inside fixed-size chrome — status pills,
 * chips, badges, tab labels. These sit in containers whose height cannot grow
 * with the system font scale, so unbounded scaling clips or overlaps them.
 * 1.4 still honours a meaningful bump of the user's Larger Text setting.
 *
 * Do NOT apply this to body copy, titles, descriptions, or anything a user
 * reads rather than glances at — those must scale freely.
 */
export const MAX_FONT_SCALE_COMPACT = 1.4;

/**
 * Width of the line around an elevated surface, per pack.
 *
 * Classic draws a hairline — the thinnest line the screen can render, there to
 * give a dark-mode card an edge and to stay invisible in light mode. `'hairline'`
 * is a sentinel, not a number, because the number is the platform's: React
 * Native resolves it to `StyleSheet.hairlineWidth`, the web to `1px`.
 *
 * Sweet draws a real one. A hairline reads as a rendering artifact; at 1.5pt
 * the same rounded shape reads as *drawn*, which is what turns a card into a
 * sticker sitting on the page.
 *
 * Switching packs therefore shifts card contents by ~1pt. That is fine — a pack
 * switch repaints the entire app on purpose — but it is why this cannot be a
 * per-theme value: light/dark must stay layout-identical, packs need not.
 */
export type OutlineWidthToken = number | 'hairline';

export const OUTLINE = {
  classic: 'hairline',
  sweet: 1.5,
} as const satisfies Record<ThemeStyleId, OutlineWidthToken>;

export function outlineToken(): OutlineWidthToken {
  return forActiveStyle<OutlineWidthToken>(OUTLINE);
}

/**
 * How a control reacts to a finger, per style pack.
 *
 * Classic barely moves — 2% is the restrained, "this is a tool" amount.
 * Sweet presses properly in, because squash is the cheapest possible read of
 * playfulness and it costs nothing: same gesture, same timing, same code, the
 * control just behaves like something soft instead of something rigid.
 *
 * Both stay well inside the range where the label under the finger is still
 * legible mid-press; this is a squash, not a shrink animation.
 */
export type PressFeedback = { opacity: number; scale: number };

export const PRESS: Record<ThemeStyleId, PressFeedback> = {
  classic: {
    opacity: 0.88,
    scale: 0.98,
  },
  sweet: {
    opacity: 0.92,
    scale: 0.94,
  },
};

/** The active pack's press, resolved at property-access time. */
export const PRESS_FEEDBACK: PressFeedback = {
  get opacity() {
    return forActiveStyle(PRESS).opacity;
  },
  get scale() {
    return forActiveStyle(PRESS).scale;
  },
};
