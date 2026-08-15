/**
 * The type scale, both style packs, no font families.
 *
 * Lifted out of `apps/mobile/src/theme/typography.ts`, which keeps the half
 * this cannot have: `face()` branches on `Platform.OS` to name a Baloo 2
 * PostScript face or an Android font family. Everything else — the nine steps,
 * their sizes, line heights, per-pack weights and per-pack tracking — is plain
 * numbers, and a browser needs exactly those.
 *
 * **Sizes and line heights are identical across packs on purpose.** A pack
 * switch must not reflow a single screen, so weight and tracking carry the
 * whole difference. Keep it that way when adding a step.
 */

import { forActiveStyle, type ThemeStyleId } from './styles';

export type TypeName =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'bodySmall'
  | 'caption'
  | 'overline'
  | 'button';

export interface TypeToken {
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number;
  /** Set the text in caps rather than relying on this — see `overline`. */
  uppercase?: boolean;
}

/**
 * `lineHeight` is spelled as size × ratio so the leading of each step is
 * legible and survives a size change.
 *
 * No ratio may drop below 1.14, the natural line box of the re-cut Baloo 2 the
 * sweet pack uses (`apps/mobile/scripts/patch-baloo-metrics.py`). `display` is
 * the tightest step at 39/34 = 1.147 and has almost no room left.
 */
const leading = (fontSize: number, ratio: number) => Math.round(fontSize * ratio);

/**
 * Optical tracking. Type set at a single tracking value looks loose at display
 * sizes and cramped at caption sizes, because letterforms do not scale their
 * sidebearings linearly.
 *
 * Sweet gives the large steps back most of their tracking: tight display type
 * is an editorial/utility signal, and letting headlines breathe is what makes
 * the same words read as friendly rather than terse.
 */
const TRACKING = {
  classic: {
    display: -0.8,
    title: -0.4,
    body: 0,
    caption: 0.1,
    overline: 0.8,
    /** CTA labels sit between title and body: snug, but not headline-tight. */
    button: -0.2,
  },
  sweet: {
    display: -0.2,
    title: 0,
    body: 0.1,
    caption: 0.2,
    overline: 1,
    button: 0.1,
  },
} as const satisfies Record<ThemeStyleId, Record<string, number>>;

/**
 * Sweet takes every heading up one step. Both packs bottom out at the same body
 * weight: heavier body copy at 16pt is harder to read, not friendlier.
 */
const WEIGHTS = {
  classic: {
    display: 700,
    h1: 700,
    h2: 600,
    h3: 600,
    body: 400,
    bodySmall: 400,
    caption: 400,
    overline: 800,
    button: 600,
  },
  sweet: {
    display: 800,
    h1: 800,
    h2: 700,
    h3: 700,
    body: 400,
    bodySmall: 400,
    caption: 400,
    overline: 800,
    button: 600,
  },
} as const satisfies Record<ThemeStyleId, Record<TypeName, number>>;

function buildScale(styleId: ThemeStyleId): Record<TypeName, TypeToken> {
  const weight = WEIGHTS[styleId];
  const tracking = TRACKING[styleId];

  return {
    /** Hero numbers and screen-owning titles. Pair with tabular figures. */
    display: {
      fontSize: 34,
      fontWeight: weight.display,
      lineHeight: leading(34, 1.15),
      letterSpacing: tracking.display,
    },
    h1: {
      fontSize: 30,
      fontWeight: weight.h1,
      lineHeight: leading(30, 1.2),
      letterSpacing: tracking.display,
    },
    h2: {
      fontSize: 22,
      fontWeight: weight.h2,
      lineHeight: leading(22, 1.27),
      letterSpacing: tracking.title,
    },
    h3: {
      fontSize: 18,
      fontWeight: weight.h3,
      lineHeight: leading(18, 1.33),
      letterSpacing: tracking.title,
    },
    body: {
      fontSize: 16,
      fontWeight: weight.body,
      lineHeight: leading(16, 1.5),
      letterSpacing: tracking.body,
    },
    bodySmall: {
      fontSize: 14,
      fontWeight: weight.bodySmall,
      lineHeight: leading(14, 1.43),
      letterSpacing: tracking.body,
    },
    caption: {
      fontSize: 12,
      fontWeight: weight.caption,
      lineHeight: leading(12, 1.33),
      letterSpacing: tracking.caption,
    },
    /** Small all-caps section kicker. Set the text itself in caps. */
    overline: {
      fontSize: 11,
      fontWeight: weight.overline,
      lineHeight: leading(11, 1.45),
      letterSpacing: tracking.overline,
      uppercase: true,
    },
    /**
     * CTA / control labels. Body-sized but semibold, with per-pack tracking —
     * use this rather than `body` plus a hand-rolled weight.
     */
    button: {
      fontSize: 16,
      fontWeight: weight.button,
      lineHeight: leading(16, 1.5),
      letterSpacing: tracking.button,
    },
  };
}

const SCALES: Record<ThemeStyleId, Record<TypeName, TypeToken>> = {
  classic: buildScale('classic'),
  sweet: buildScale('sweet'),
};

/** The scale for a named pack, without touching the active-pack state. */
export function typeScaleFor(styleId: ThemeStyleId): Record<TypeName, TypeToken> {
  return SCALES[styleId];
}

/**
 * The active pack's scale.
 *
 * A getter, not a snapshot — `styles.ts` resolves the pack from mutable module
 * state, so reading this before `setActiveThemeStyle` runs would freeze the
 * wrong pack. Same hidden ordering requirement as `radius` and `shadows`.
 */
export const typeScale: Record<TypeName, TypeToken> = {
  get display() {
    return forActiveStyle(SCALES).display;
  },
  get h1() {
    return forActiveStyle(SCALES).h1;
  },
  get h2() {
    return forActiveStyle(SCALES).h2;
  },
  get h3() {
    return forActiveStyle(SCALES).h3;
  },
  get body() {
    return forActiveStyle(SCALES).body;
  },
  get bodySmall() {
    return forActiveStyle(SCALES).bodySmall;
  },
  get caption() {
    return forActiveStyle(SCALES).caption;
  },
  get overline() {
    return forActiveStyle(SCALES).overline;
  },
  get button() {
    return forActiveStyle(SCALES).button;
  },
};
