/**
 * The sweet pack's decorative art, as data — the same reason `icons.ts` is
 * here. The pack's dressing (page wash, hero candy finish, tab-bar sprinkles,
 * lock-screen night sky, button sheen) was drawn once in `apps/mobile` with
 * `react-native-svg`, and `apps/desktop` renders the same screens in a
 * WebView. Two hand-kept copies of nineteen icon glyphs already drifted apart
 * once in this repo; these compositions are the same class of thing.
 *
 * What lives here: paths, positions, sizes, tints, layout tables — everything
 * both renderers draw. What deliberately does not: the animation *mechanism*.
 * The phone runs Reanimated loops, the desktop runs CSS keyframes, and the
 * timing numbers are documented beside each renderer with a pointer at the
 * other (the `EASING.spring` precedent — change both or neither).
 *
 * All positions are authored against phone portrait: full-page layers use a
 * 402×874 viewBox drawn with `slice` scaling, the hero uses 400×220, and
 * percentage positions are percentages of the host container. Fixed hex tints
 * rather than accent-derived on purpose — the sweet page neutrals are the same
 * for every accent the pack offers, so its decoration is too. The exceptions
 * take the accent's `primary` at the call site (`sweetHeroTints`).
 */

/** Four-point sparkle, radius 10, centred on (0,0). */
export const SPARKLE_PATH =
  'M0 -10 Q2.2 -2.2 10 0 Q2.2 2.2 0 10 Q-2.2 2.2 -10 0 Q-2.2 -2.2 0 -10 Z';

/** Heart, ~18 wide × 16 tall, centred on (0,0). */
export const HEART_PATH =
  'M0 6.5 C-5.5 2 -9 -1 -9 -4.5 C-9 -7.5 -6.8 -9.5 -4.2 -9.5 ' +
  'C-2.4 -9.5 -0.8 -8.5 0 -6.9 C0.8 -8.5 2.4 -9.5 4.2 -9.5 ' +
  'C6.8 -9.5 9 -7.5 9 -4.5 C9 -1 5.5 2 0 6.5 Z';

export type SprinkleShape = 'sparkle' | 'heart' | 'dot';

/** A sprinkle placed in viewBox coordinates. */
export type Sprinkle = {
  shape: SprinkleShape;
  x: number;
  y: number;
  /** Scale of the unit shape (dots use it as the radius). */
  size: number;
  rotate?: number;
};

/** `translate → rotate → scale` transform for a unit sprinkle path. */
export function sprinkleTransform(s: Sprinkle): string {
  return `translate(${s.x}, ${s.y}) rotate(${s.rotate ?? 0}) scale(${s.size / 10})`;
}

/** A position as a percentage of the host container. */
export type PercentPosition = `${number}%`;

/**
 * One animated sprinkle: a heart that beats or a sparkle that twinkles.
 * `left`/`top` are the item's centre; `delaySeconds` staggers the field so it
 * never pulses in unison.
 */
export type SweetTwinkle = {
  kind: 'heart' | 'sparkle';
  left: PercentPosition;
  top: PercentPosition;
  size: number;
  color: string;
  opacity: number;
  delaySeconds: number;
};

/* ---- page backdrop ------------------------------------------------------- */

export type SweetWashStop = { offset: number; color: string; opacity: number };

export type SweetBlob = {
  id: string;
  cx: number;
  cy: number;
  r: number;
  color: string;
  opacity: number;
};

export type SweetWash = {
  /**
   * Full-height vertical gradient laid under the blobs. Drawn stretched
   * (`preserveAspectRatio="none"`) so it always spans the real container
   * height. Every stop carries some tint: fully transparent middle offsets
   * read as a horizontal seam across tall screens.
   */
  flow: SweetWashStop[];
  /**
   * Top-half decoration only. The bottom band deliberately has no blobs: a
   * radial edge cropped by the `slice` viewBox lands at a different height on
   * every screen size, and on short ones it read as a colour jump above the
   * tab bar. The stretched flow gradient owns everything below the midline.
   */
  blobs: SweetBlob[];
  /** Tint pairs for sprinkles: `a` = coloured, `b` = pale. */
  sprinkleA: { color: string; opacity: number };
  sprinkleB: { color: string; opacity: number };
};

/** The fixed portrait composition every full-page layer is authored against. */
export const SWEET_PAGE_VIEWBOX = { width: 402, height: 874 } as const;

export const SWEET_BACKDROP_LIGHT_WASH: SweetWash = {
  flow: [
    { offset: 0, color: '#F8C4DF', opacity: 0.5 },
    { offset: 0.35, color: '#F9CFE4', opacity: 0.26 },
    { offset: 0.6, color: '#FBDCEB', opacity: 0.2 },
    { offset: 0.82, color: '#FFF0F6', opacity: 0.45 },
    { offset: 1, color: '#FFF5FA', opacity: 0.8 },
  ],
  blobs: [
    { id: 'rose', cx: 340, cy: 30, r: 230, color: '#F9A8D4', opacity: 0.6 },
    { id: 'lav', cx: 40, cy: 140, r: 250, color: '#C4B5FD', opacity: 0.5 },
    { id: 'peach', cx: 398, cy: 330, r: 210, color: '#FDBA74', opacity: 0.38 },
    { id: 'lav2', cx: -30, cy: 480, r: 200, color: '#C4B5FD', opacity: 0.26 },
  ],
  sprinkleA: { color: '#C2588C', opacity: 0.16 },
  sprinkleB: { color: '#FFFFFF', opacity: 0.65 },
};

export const SWEET_BACKDROP_DARK_WASH: SweetWash = {
  flow: [
    { offset: 0, color: '#A78BFA', opacity: 0.1 },
    { offset: 0.35, color: '#A78BFA', opacity: 0.04 },
    { offset: 0.65, color: '#F472B6', opacity: 0.04 },
    { offset: 1, color: '#F472B6', opacity: 0.09 },
  ],
  blobs: [
    { id: 'rose', cx: 350, cy: 40, r: 220, color: '#F472B6', opacity: 0.12 },
    { id: 'lav', cx: 40, cy: 120, r: 240, color: '#A78BFA', opacity: 0.14 },
    { id: 'lav2', cx: -30, cy: 480, r: 200, color: '#A78BFA', opacity: 0.07 },
  ],
  sprinkleA: { color: '#F9A8D4', opacity: 0.12 },
  sprinkleB: { color: '#FFFFFF', opacity: 0.08 },
};

/**
 * Static sprinkles, placed for phone portrait: colour in the top band around
 * the title, the side gutters, and the bottom corners — the zones cards
 * rarely cover. The title band (y ≲ 150) carries hearts and dots only; a
 * sparkle right behind the screen title read as clutter. No static heart in
 * the top-right corner either: the beating twinkle heart lives there, and the
 * pair sat close enough to read as a smudge.
 */
export const SWEET_BACKDROP_SPRINKLES: Array<Sprinkle & { tone: 'a' | 'b' }> = [
  { shape: 'sparkle', x: 383, y: 236, size: 9, tone: 'b' },
  { shape: 'sparkle', x: 24, y: 372, size: 10, rotate: 20, tone: 'a' },
  { shape: 'sparkle', x: 377, y: 560, size: 11, rotate: -15, tone: 'b' },
  { shape: 'sparkle', x: 48, y: 806, size: 12, rotate: 10, tone: 'a' },
  { shape: 'sparkle', x: 356, y: 812, size: 10, tone: 'b' },
  { shape: 'heart', x: 30, y: 236, size: 12, rotate: -14, tone: 'a' },
  { shape: 'heart', x: 200, y: 60, size: 11, rotate: -8, tone: 'b' },
  { shape: 'heart', x: 338, y: 676, size: 12, rotate: -10, tone: 'a' },
  { shape: 'heart', x: 36, y: 560, size: 11, rotate: 14, tone: 'b' },
  { shape: 'dot', x: 120, y: 150, size: 3, tone: 'a' },
  { shape: 'dot', x: 300, y: 190, size: 2.5, tone: 'b' },
  { shape: 'dot', x: 390, y: 420, size: 3, tone: 'a' },
  { shape: 'dot', x: 14, y: 470, size: 2.5, tone: 'b' },
  { shape: 'dot', x: 80, y: 700, size: 3, tone: 'b' },
  { shape: 'dot', x: 310, y: 750, size: 2.5, tone: 'a' },
  { shape: 'dot', x: 180, y: 830, size: 3, tone: 'b' },
  { shape: 'dot', x: 250, y: 120, size: 2, tone: 'a' },
];

/**
 * The animated layer over the static wash: five beating hearts, six twinkling
 * sparkles. Percent-positioned (the wash is a fixed-viewBox `slice`, so the
 * two coordinate spaces need not agree exactly); the fields avoid each other
 * and the static sprinkles by eye, with extra items in the bottom band so the
 * strip above the tab bar lives too. Delays all distinct on purpose. No
 * sparkles in the top ~17% — the title band keeps hearts and dots only.
 */
export const SWEET_BACKDROP_LIGHT_TWINKLES: SweetTwinkle[] = [
  {
    kind: 'heart',
    left: '88%',
    top: '6%',
    size: 17,
    color: '#EC4899',
    opacity: 0.42,
    delaySeconds: 0,
  },
  {
    kind: 'heart',
    left: '7%',
    top: '31%',
    size: 13,
    color: '#FFFFFF',
    opacity: 0.8,
    delaySeconds: 1.15,
  },
  {
    kind: 'heart',
    left: '4%',
    top: '48%',
    size: 11,
    color: '#EC4899',
    opacity: 0.35,
    delaySeconds: 1.8,
  },
  {
    kind: 'heart',
    left: '94%',
    top: '82%',
    size: 12,
    color: '#FFFFFF',
    opacity: 0.75,
    delaySeconds: 2.4,
  },
  {
    kind: 'heart',
    left: '68%',
    top: '8%',
    size: 10,
    color: '#EC4899',
    opacity: 0.3,
    delaySeconds: 2.9,
  },
  {
    kind: 'sparkle',
    left: '93%',
    top: '27%',
    size: 12,
    color: '#FFFFFF',
    opacity: 0.95,
    delaySeconds: 1.6,
  },
  {
    kind: 'sparkle',
    left: '86%',
    top: '56%',
    size: 11,
    color: '#EC4899',
    opacity: 0.42,
    delaySeconds: 0.9,
  },
  {
    kind: 'sparkle',
    left: '5%',
    top: '86%',
    size: 13,
    color: '#FFFFFF',
    opacity: 0.9,
    delaySeconds: 2.1,
  },
  {
    kind: 'sparkle',
    left: '48%',
    top: '88%',
    size: 12,
    color: '#EC4899',
    opacity: 0.38,
    delaySeconds: 0.6,
  },
];

export const SWEET_BACKDROP_DARK_TWINKLES: SweetTwinkle[] =
  SWEET_BACKDROP_LIGHT_TWINKLES.map(item => ({
    ...item,
    color: item.color === '#FFFFFF' ? '#FFFFFF' : '#F9A8D4',
    opacity: item.color === '#FFFFFF' ? 0.16 : 0.24,
  }));

/* ---- hero candy finish ---------------------------------------------------- */

/**
 * The glossy layer for `surfaceInverse` hero panels: a sheen from the
 * top-left, a shade into the bottom-right, soap bubbles in the corner and a
 * few sparkles. Composition is authored against this box and drawn with
 * `slice`; the sprinkles and bubbles are positioned outside it (percent / edge
 * offsets) so a taller card cannot crop them — see the mobile component's
 * header for the crop bug that forced that split.
 */
export const SWEET_HERO_VIEWBOX = { width: 400, height: 220 } as const;

/** The two radial washes, in viewBox coordinates. */
export const SWEET_HERO_SHEEN = { cx: 70, cy: 10, r: 260 } as const;
export const SWEET_HERO_SHADE = { cx: 400, cy: 240, r: 260 } as const;

/**
 * Tinting flips with the panel, not the page: in light mode the panel is a
 * saturated pastel, so the decor is white; in dark mode the panel is
 * near-white, where white is invisible — the decor takes a faint wash of the
 * accent instead. Everything sits under the panel's ink at low fill opacity,
 * so text contrast is untouched. `primary` is the active accent's.
 */
export function sweetHeroTints(isDark: boolean, primary: string) {
  return {
    sheenColor: isDark ? primary : '#FFFFFF',
    sheenOpacity: isDark ? 0.12 : 0.5,
    shadeColor: isDark ? primary : '#3B1F33',
    shadeOpacity: 0.08,
    bubbleColor: isDark ? primary : '#FFFFFF',
    bubbleOpacity: isDark ? 0.08 : 0.14,
    /** The outline-only ring bubble keeps its own step. */
    bubbleRingOpacity: isDark ? 0.2 : 0.35,
    sparkleColor: isDark ? primary : '#FFFFFF',
    sparkleOpacity: isDark ? 0.3 : 0.55,
  };
}

/**
 * Static sprinkles as percentages of the card (centre positions, kept ≥4% off
 * every edge so the sprite box clears the rounded corners). Sub-11px sprinkles
 * render at 0.8 of the sparkle opacity.
 */
export const SWEET_HERO_SPRINKLES: Array<{
  shape: 'sparkle' | 'heart';
  left: PercentPosition;
  top: PercentPosition;
  size: number;
  rotate?: number;
}> = [
  { shape: 'sparkle', left: '74%', top: '13%', size: 12, rotate: 15 },
  { shape: 'sparkle', left: '52%', top: '8%', size: 8 },
  { shape: 'sparkle', left: '18%', top: '92%', size: 9, rotate: -12 },
  { shape: 'heart', left: '90%', top: '36%', size: 11, rotate: 14 },
];

/**
 * Pulls the bubble cluster in from the card's right edge. Flush against the
 * corner, the big bubble lost most of itself to the corner clip and the group
 * read as a glitch at the card edge rather than as bubbles on the panel.
 */
export function sweetHeroBubbleInset(containerWidth: number): number {
  return Math.round(containerWidth * 0.2);
}

/**
 * Soap bubbles, in points from the card's bottom-right corner. `right` is
 * `sweetHeroBubbleInset(width) + rightOffset`. Negative `bottom` deliberately
 * hangs the big bubbles off the card edge; every host clips. `opacityScale`
 * dims the smaller filled bubble against the lead one; the ring uses
 * `bubbleRingOpacity` instead. `delaySeconds` staggers the bob so the cluster
 * rises as a wave, not as one rigid group.
 */
export type SweetHeroBubble = {
  diameter: number;
  rightOffset: number;
  bottom: number;
  ring?: boolean;
  opacityScale: number;
  delaySeconds: number;
};

export const SWEET_HERO_BUBBLES: SweetHeroBubble[] = [
  { diameter: 88, rightOffset: 0, bottom: -20, opacityScale: 1, delaySeconds: 0 },
  { diameter: 52, rightOffset: 78, bottom: -20, opacityScale: 0.75, delaySeconds: 1.1 },
  {
    diameter: 30,
    rightOffset: 63,
    bottom: 47,
    ring: true,
    opacityScale: 1,
    delaySeconds: 2.2,
  },
];

/**
 * The hero's animated twinkles. The heart sits at 92% not 94%: it beats up to
 * 1.22× its size, and at 94% the swell pushed its right lobe under the card
 * edge.
 */
export function sweetHeroTwinkles(color: string, opacity: number): SweetTwinkle[] {
  return [
    {
      kind: 'sparkle',
      left: '86%',
      top: '20%',
      size: 12,
      color,
      opacity,
      delaySeconds: 0.3,
    },
    {
      kind: 'sparkle',
      left: '10%',
      top: '80%',
      size: 9,
      color,
      opacity: opacity * 0.85,
      delaySeconds: 1.6,
    },
    {
      kind: 'heart',
      left: '92%',
      top: '58%',
      size: 10,
      color,
      opacity: opacity * 0.8,
      delaySeconds: 0.9,
    },
  ];
}

/* ---- tab bar --------------------------------------------------------------- */

/**
 * Living hearts and sparkles on the tab bar surface, under the icons and
 * labels. Placed in the gaps *between* the three tab items (item centres sit
 * at roughly 1/6, 3/6 and 5/6 of the width) and kept pale — the bar is chrome
 * the user reads constantly, so the sprinkles must decorate it without
 * competing with a single glyph or label.
 */
export const SWEET_TABBAR_LIGHT_TWINKLES: SweetTwinkle[] = [
  {
    kind: 'heart',
    left: '33%',
    top: '30%',
    size: 10,
    color: '#F472B6',
    opacity: 0.55,
    delaySeconds: 0.5,
  },
  {
    kind: 'sparkle',
    left: '67%',
    top: '34%',
    size: 9,
    color: '#A78BFA',
    opacity: 0.6,
    delaySeconds: 1.3,
  },
  {
    kind: 'sparkle',
    left: '5%',
    top: '46%',
    size: 8,
    color: '#F472B6',
    opacity: 0.45,
    delaySeconds: 2.2,
  },
  {
    kind: 'heart',
    left: '95%',
    top: '52%',
    size: 9,
    color: '#A78BFA',
    opacity: 0.5,
    delaySeconds: 3.1,
  },
  {
    kind: 'sparkle',
    left: '33%',
    top: '68%',
    size: 7,
    color: '#F9A8D4',
    opacity: 0.55,
    delaySeconds: 1.8,
  },
  {
    kind: 'heart',
    left: '67%',
    top: '70%',
    size: 7,
    color: '#F9A8D4',
    opacity: 0.5,
    delaySeconds: 2.7,
  },
];

export const SWEET_TABBAR_DARK_TWINKLES: SweetTwinkle[] =
  SWEET_TABBAR_LIGHT_TWINKLES.map(item => ({
    ...item,
    opacity: item.opacity * 0.35,
  }));

/* ---- lock screen ----------------------------------------------------------- */

/**
 * Night-sky dressing for the child lock screen: soft rose and violet glows in
 * the corners, faint scattered sprinkles, a couple of slow twinkles with one
 * small beating heart. The lock ground is `backgroundDark` in both light and
 * dark themes, so unlike the page backdrop this layer has a single variant.
 * Everything sits far under the copy — fills ≤0.14 on a near-black ground.
 */
export const SWEET_LOCK_BLOBS: SweetBlob[] = [
  { id: 'rose', cx: 340, cy: 60, r: 240, color: '#F472B6', opacity: 0.14 },
  { id: 'lav', cx: 30, cy: 180, r: 230, color: '#A78BFA', opacity: 0.12 },
  { id: 'base', cx: 200, cy: 900, r: 400, color: '#F9A8D4', opacity: 0.08 },
];

export const SWEET_LOCK_SPRINKLES: Array<
  Sprinkle & { color: string; opacity: number }
> = [
  {
    shape: 'sparkle',
    x: 60,
    y: 120,
    size: 11,
    rotate: -10,
    color: '#FFFFFF',
    opacity: 0.1,
  },
  {
    shape: 'sparkle',
    x: 350,
    y: 210,
    size: 9,
    rotate: 15,
    color: '#FFFFFF',
    opacity: 0.1,
  },
  {
    shape: 'sparkle',
    x: 30,
    y: 560,
    size: 10,
    rotate: 8,
    color: '#FFFFFF',
    opacity: 0.1,
  },
  {
    shape: 'sparkle',
    x: 372,
    y: 640,
    size: 11,
    rotate: -14,
    color: '#FFFFFF',
    opacity: 0.1,
  },
  {
    shape: 'heart',
    x: 330,
    y: 100,
    size: 12,
    rotate: 12,
    color: '#F9A8D4',
    opacity: 0.14,
  },
  {
    shape: 'heart',
    x: 48,
    y: 700,
    size: 11,
    rotate: -12,
    color: '#F9A8D4',
    opacity: 0.14,
  },
  { shape: 'dot', x: 140, y: 90, size: 2.5, color: '#FFFFFF', opacity: 0.12 },
  { shape: 'dot', x: 300, y: 700, size: 3, color: '#FFFFFF', opacity: 0.12 },
  { shape: 'dot', x: 210, y: 140, size: 2, color: '#FFFFFF', opacity: 0.12 },
];

export const SWEET_LOCK_TWINKLES: SweetTwinkle[] = [
  {
    kind: 'sparkle',
    left: '85%',
    top: '12%',
    size: 14,
    color: '#FFFFFF',
    opacity: 0.35,
    delaySeconds: 0.3,
  },
  {
    kind: 'sparkle',
    left: '12%',
    top: '68%',
    size: 12,
    color: '#F9A8D4',
    opacity: 0.4,
    delaySeconds: 1.4,
  },
  {
    kind: 'heart',
    left: '14%',
    top: '16%',
    size: 14,
    color: '#F472B6',
    opacity: 0.45,
    delaySeconds: 0.8,
  },
];

/* ---- buttons ---------------------------------------------------------------- */

/**
 * Candy finish for filled accent buttons: the fill deepens top-to-bottom
 * (`primary` → `primaryDark`) and a white sheen covers the upper `extent` of
 * the height at `opacity`, so the button reads as a glazed sweet rather than
 * a flat slab.
 */
export const SWEET_BUTTON_SHEEN = {
  color: '#FFFFFF',
  opacity: 0.28,
  extent: 0.55,
} as const;
