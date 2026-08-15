import { forActiveStyle, type ThemeStyleId } from './styles';

/**
 * A shadow token, declared structurally rather than as React Native's
 * `ShadowToken`.
 *
 * These fields *are* the token — RN's type merely annotated them. Spelling the
 * shape out here is what lets a browser read the same values, and keeps this
 * package free of any platform import. `apps/mobile` passes these straight to
 * a `StyleSheet`; the web apps map them onto `box-shadow`.
 */
export interface ShadowToken {
  shadowColor: string;
  shadowOpacity: number;
  shadowRadius: number;
  shadowOffset: { width: number; height: number };
  /** Android only — it ignores `shadowColor` below API 28. */
  elevation: number;
}

/**
 * Elevation as a soft, low-contrast lift rather than a grey smudge.
 *
 * Two properties both packs share:
 *
 * 1. Colour is a deep desaturated tone rather than black. Near-black shadows
 *    go muddy over tinted surfaces; a tinted dark reads as shade, not dirt.
 * 2. Large radius at low opacity. A tight, relatively opaque shadow looks like
 *    a drop shadow from a 2010s UI kit; a wide, faint one reads as height.
 *
 * React Native applies only one shadow per view, so the usual two-layer
 * contact + ambient stack is not expressible here. These are tuned as the
 * ambient layer, which is what carries the impression of depth. Android keeps
 * `elevation` — it ignores `shadowColor` below API 28.
 *
 * Where the packs differ is hue and spread. Classic casts a cool blue-black;
 * sweet casts plum, wider and softer, so a card looks like it is resting on
 * the pink page rather than cut out of it. Sweet keeps the same `elevation`
 * ladder because Android cannot express the colour anyway.
 */
const SCALES: Record<ThemeStyleId, Record<ShadowName, ShadowToken>> = {
  classic: {
    /**
     * Cards at rest. In light mode `cardOutline` is transparent and a white
     * card clears the page by only ~1.1:1 of fill, so this shadow is the entire
     * separation between a card and the background — at 0.07 a dense screen of
     * cards read as one flat sheet. Opacity carries that; the radius stays wide
     * so it still reads as height rather than as a hard drop shadow.
     */
    sm: {
      shadowColor: '#0B1220',
      shadowOpacity: 0.12,
      shadowRadius: 14,
      shadowOffset: { width: 0, height: 4 },
      elevation: 4,
    },
    /**
     * Raised cards, sticky headers, tab bar. Kept a step above `sm` in
     * *opacity* as well as radius — a wider blur at equal opacity reads as
     * weaker, not stronger, so matching `sm` here would invert the ladder.
     */
    md: {
      shadowColor: '#0B1220',
      shadowOpacity: 0.16,
      shadowRadius: 20,
      shadowOffset: { width: 0, height: 8 },
      elevation: 6,
    },
    /** Modals, popovers, anything floating over content. */
    lg: {
      shadowColor: '#0B1220',
      shadowOpacity: 0.22,
      shadowRadius: 32,
      shadowOffset: { width: 0, height: 14 },
      elevation: 10,
    },
  },
  sweet: {
    sm: {
      shadowColor: '#7A2E52',
      shadowOpacity: 0.16,
      shadowRadius: 20,
      shadowOffset: { width: 0, height: 6 },
      elevation: 4,
    },
    md: {
      shadowColor: '#7A2E52',
      shadowOpacity: 0.2,
      shadowRadius: 28,
      shadowOffset: { width: 0, height: 10 },
      elevation: 6,
    },
    lg: {
      shadowColor: '#7A2E52',
      shadowOpacity: 0.26,
      shadowRadius: 40,
      shadowOffset: { width: 0, height: 16 },
      elevation: 10,
    },
  },
};

export type ShadowName = 'sm' | 'md' | 'lg';

export const shadows: Record<ShadowName, ShadowToken> = {
  get sm() {
    return forActiveStyle(SCALES).sm;
  },
  get md() {
    return forActiveStyle(SCALES).md;
  },
  get lg() {
    return forActiveStyle(SCALES).lg;
  },
};
