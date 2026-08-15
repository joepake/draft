import {
  DEFAULT_THEME_STYLE_ID,
  getThemeStyleDefinition,
  normalizeThemeStyleId,
  type ThemeStyleId,
} from './styles';

/** Stable IDs persisted in app settings. */
export type AccentId =
  | 'teal'
  | 'sky'
  | 'blue'
  | 'lime'
  | 'violet'
  | 'fuchsia'
  | 'pink'
  | 'berry'
  | 'orange'
  | 'rose'
  | 'green'
  | 'brown'
  | 'slate';

export const DEFAULT_ACCENT_ID: AccentId = 'teal';

export const ACCENT_IDS: AccentId[] = [
  'teal',
  'sky',
  'blue',
  'lime',
  'violet',
  'fuchsia',
  'pink',
  'berry',
  'orange',
  'rose',
  'green',
  'brown',
  'slate',
];

/**
 * What the picker offers per pack.
 *
 * Sweet keeps only the pink families: the pack is the candy one, and offering
 * teal buttons on a candy-pink page reads as a mistake rather than a choice.
 * The four are distinct by hue or lightness — hot pink, deep berry, red-leaning
 * rose, magenta fuchsia — the same ΔE budget the classic set is curated under.
 *
 * `berry` exists only for this list. Classic already fills its 4-wide picker
 * grid with 12 accents, and a 13th would orphan one swatch on a fifth row for
 * an accent that reads as pink's darker sibling next to the full spectrum.
 */
export const SWEET_ACCENT_IDS: AccentId[] = ['pink', 'berry', 'rose', 'fuchsia'];

const CLASSIC_ACCENT_IDS: AccentId[] = ACCENT_IDS.filter(id => id !== 'berry');

export function getAccentIdsForStyle(styleId: ThemeStyleId): AccentId[] {
  return styleId === 'sweet' ? SWEET_ACCENT_IDS : CLASSIC_ACCENT_IDS;
}

/**
 * Accent to land on when the active pack does not offer the current one:
 * entering sweet with a non-pink accent, or leaving it with `berry`. Pink is
 * the only accent both packs offer that is native to sweet, so it is the
 * nearest-kept mapping in both directions — same idea as `LEGACY_ACCENT_MAP`.
 */
export function coerceAccentForStyle(
  accentId: AccentId,
  styleId: ThemeStyleId,
): AccentId {
  return getAccentIdsForStyle(styleId).includes(accentId) ? accentId : 'pink';
}

/** Map retired picker IDs → nearest kept accent. */
const LEGACY_ACCENT_MAP: Record<string, AccentId> = {
  cyan: 'sky',
  // Retired for being perceptually indistinguishable from a kept neighbour:
  // purple/violet measured ΔE00 3.6, indigo/violet 6.5, amber/orange 6.9 and
  // emerald/green 8.7 — under ~10 they cannot be told apart as swatches.
  purple: 'fuchsia',
  indigo: 'violet',
  amber: 'orange',
  emerald: 'teal',
};

/**
 * Tokens that actually change with the chosen accent.
 *
 * Surfaces, borders and text deliberately live in `NEUTRAL_*` below instead.
 * When every surface is tinted with the accent, the whole app reads as a
 * themed template; spending the accent only on primary actions, status chips
 * and active icons is what makes it look deliberate.
 */
type AccentBrandTokens = {
  primary: string;
  primaryDark: string;
  primarySoft: string;
  /**
   * AA-safe text/icon color for accent-tinted content on a light surface —
   * `primarySoft` pills and `surface` alike. `primary` is tuned as a fill and
   * border color, and as *text* it fails WCAG AA (4.5:1) on `primarySoft` for
   * 7 of the 12 accents in light mode and 7 in dark. Keep `primary` for fills,
   * borders, and large display type; reach for `primaryStrong` for label text.
   */
  primaryStrong: string;
  secondary: string;
  secondarySoft: string;
  /**
   * Accent-filled hero panel — one of the few large accent areas left. Drawn
   * as a flat fill with no outline and no glow: a hero is one solid colour.
   */
  surfaceInverse: string;
};

/** Surfaces, lines and text. Identical across all 12 accents by design. */
type NeutralTokens = {
  background: string;
  backgroundDark: string;
  surface: string;
  text: string;
  textSecondary: string;
  textInverse: string;
  /**
   * Secondary / tertiary copy on a surface that is dark in *both* themes —
   * `backgroundDark`, i.e. the lock overlays. Safe to keep light-on-dark.
   */
  textOnDarkMuted: string;
  textOnDarkSubtle: string;
  border: string;
  /**
   * Edge of an elevated surface — cards, sheets, popovers.
   *
   * Separate from `border` because the two media need opposite things. In
   * light, a card separates itself with fill contrast plus `shadows.sm`, so
   * this is transparent and the card carries no outline. In dark, a shadow is
   * invisible against a near-black page and `surface` only clears the
   * background by ~1.1:1, so the hairline is the *only* thing giving a card an
   * edge and it has to be drawn.
   *
   * `border` keeps its own job in both themes: dividers, inputs, unselected
   * chips — lines that mean something rather than lines that lift a surface.
   */
  cardOutline: string;
  skeleton: string;
  /**
   * Sweep highlight over a skeleton bone. Must be *lighter* than `skeleton` in
   * both themes — `surface` only satisfies that in light mode, where white sits
   * above the bone; in dark it sits below it and the sweep read as a shadow
   * crossing the placeholder rather than a sheen.
   */
  skeletonSheen: string;
  shadow: string;
};

const NEUTRAL_LIGHT: NeutralTokens = {
  // Was #F7F8FA, which sits at roughly 1.03:1 against a white card — close
  // enough that a card could not separate itself from the page by fill, so
  // every card had to draw a grey outline to be visible at all. Deeper page +
  // the lifted `shadows.sm` do that job instead, and the outlines come off.
  background: '#EEF1F6',
  backgroundDark: '#0B0F14',
  surface: '#FFFFFF',
  text: '#0F172A',
  textSecondary: '#5B6676',
  textInverse: '#FFFFFF',
  textOnDarkMuted: '#E2E8F0',
  textOnDarkSubtle: '#CBD5E1',
  border: '#E4E7EC',
  cardOutline: 'transparent',
  skeleton: '#EDF0F4',
  skeletonSheen: '#FFFFFF',
  shadow: '#0B1220',
};

const NEUTRAL_DARK: NeutralTokens = {
  background: '#0B0E13',
  backgroundDark: '#07090D',
  // Nudged up from #151A22 (1.11:1 against the page — barely a surface at
  // all). Fill does part of the separating here; `cardOutline` does the rest.
  surface: '#1A212B',
  text: '#F8FAFC',
  // Raised from #98A4B4, which cleared AA on `surface` but only reached 3.59:1
  // on the deeper `primarySoft` tints — and secondary copy sits on soft-tinted
  // hero panels on a dozen screens. Still a clear step below `text` (8.7:1 vs
  // 15.5:1 on a card).
  textSecondary: '#AEB9C6',
  textInverse: '#0B0E13',
  // Identical to the light values on purpose: `backgroundDark` is dark in both
  // themes, so the text over it must not flip. The old dark-mode values were
  // mid-greys (and inverted — "muted" was darker than "subtle"), leaving the
  // lock-overlay copy at 4.19:1 on a near-black scrim.
  textOnDarkMuted: '#E2E8F0',
  textOnDarkSubtle: '#CBD5E1',
  // Both of these are read against `surface`, so raising `surface` had to
  // raise them too — at the old values a divider sat 1.14:1 and a skeleton bone
  // 1.04:1 against the card they were drawn on, i.e. invisible.
  border: '#2A3340',
  cardOutline: '#2F3947',
  skeleton: '#283040',
  skeletonSheen: '#3A4557',
  shadow: '#000000',
};

/**
 * The `sweet` style pack's neutrals — see `theme/styles.ts`.
 *
 * Same structure as the classic set above, and the same contrast budget: every
 * pair the classic comments call out (secondary copy on a surface and on the
 * accent's `primarySoft`, card fill against the page, hero copy on
 * `surfaceInverse`) is re-measured for these values across all 12 accents.
 *
 * What changes is hue and warmth. The classic page is a cool blue-grey over a
 * slate ink; this one is a candy pink over a plum ink, with borders, skeletons
 * and cards pulled onto the same warm axis. Nothing here is lighter or lower
 * contrast than its classic counterpart — "softer" is a hue decision, not an
 * excuse to wash text out.
 */
const NEUTRAL_LIGHT_SWEET: NeutralTokens = {
  /**
   * Saturated rather than off-white. The first attempt at this pack used a
   * near-white #FDEEF4, on the theory that a page tint should be subtle — and
   * the result was indistinguishable from classic on a phone screen. The page
   * is the largest surface in the app and the only one a pack can repaint
   * without touching a screen, so it has to actually carry colour. Still clears
   * the card by 1.15:1 of fill, which is more separation than classic has.
   */
  background: '#FCE7F0',
  backgroundDark: '#140A11',
  // Warm white, not pure white — a #FFFFFF card on a pink page reads as a hole
  // punched in it rather than as a card resting on it.
  surface: '#FFFAFC',
  text: '#3B1F33',
  // Warm counterpart to #5B6676, held above 4.5:1 on `surface` and on every
  // accent's `primarySoft`.
  textSecondary: '#6E4B5C',
  textInverse: '#FFFFFF',
  textOnDarkMuted: '#F3E3EC',
  textOnDarkSubtle: '#E2CBDA',
  border: '#F6D3E3',
  /**
   * Drawn, where classic leaves it transparent.
   *
   * Classic separates a card from the page with fill contrast plus a shadow,
   * which is the restrained way to do it. Sweet outlines instead: a rounded
   * shape with a visible edge on a tinted page reads as a *sticker* laid on the
   * surface, and that — more than the pink — is what makes the same layout feel
   * handmade rather than rendered.
   */
  cardOutline: '#F7D5E5',
  skeleton: '#FADCE9',
  skeletonSheen: '#FFFAFC',
  shadow: '#5B1233',
};

const NEUTRAL_DARK_SWEET: NeutralTokens = {
  background: '#120A10',
  backgroundDark: '#0C060A',
  surface: '#231825',
  text: '#FDF2F8',
  // The binding constraint is the *deepest* `primarySoft` in dark mode (green,
  // #14532D), not the card — secondary copy sits on soft-tinted hero panels on
  // a dozen screens. This clears 4.63:1 there, matching the classic pack's
  // 4.58:1, and still reads a clear step below `text` on a card (8.7:1 vs 15:1).
  textSecondary: '#CBB2C1',
  textInverse: '#120A10',
  // Unchanged between modes on purpose, exactly as in the classic pack:
  // `backgroundDark` is dark in both, so copy over it must not flip.
  textOnDarkMuted: '#F3E3EC',
  textOnDarkSubtle: '#E2CBDA',
  border: '#3A2A36',
  cardOutline: '#45313F',
  skeleton: '#33232F',
  skeletonSheen: '#493447',
  shadow: '#000000',
};

const NEUTRALS: Record<ThemeStyleId, { light: NeutralTokens; dark: NeutralTokens }> = {
  classic: { light: NEUTRAL_LIGHT, dark: NEUTRAL_DARK },
  sweet: { light: NEUTRAL_LIGHT_SWEET, dark: NEUTRAL_DARK_SWEET },
};

/**
 * Everything drawn *on* `surfaceInverse` — the hero panel.
 *
 * Split out of the neutrals because these do not follow dark mode; they follow
 * whether the hero panel itself is light or dark, which is now a per-pack
 * decision (`inverseIsLight` in `styles.ts`). Classic flips it with the theme;
 * sweet keeps the panel light in both modes, so its light-mode hero needs the
 * ink-on-light set that only dark mode used to reach.
 *
 * `textOnInverse` is the hero's primary copy. It was `textInverse` before,
 * which happened to be correct only because the two always agreed: the panel
 * was dark exactly when button fills were dark. A pack that lightens the panel
 * without lightening the buttons breaks that tie, and sharing one token would
 * have meant choosing between unreadable hero titles and unreadable button
 * labels.
 */
type InverseTokens = {
  textOnInverse: string;
  textOnInverseMuted: string;
  textOnInverseSubtle: string;
  /**
   * Inset well / hairline drawn on the panel. Hard-coded `rgba(255,255,255,…)`
   * was used for these in twelve places, which is a white veil over a white
   * panel as soon as the panel goes light — the usage wells and dividers inside
   * every hero simply vanished.
   */
  surfaceInverseWell: string;
  surfaceInverseHairline: string;
};

/** Ink on a deep, saturated panel. */
const INVERSE_ON_DARK: Record<ThemeStyleId, InverseTokens> = {
  classic: {
    textOnInverse: '#FFFFFF',
    textOnInverseMuted: '#F1F5F9',
    textOnInverseSubtle: '#E2E8F0',
    // 0.13 cleared the panel by ~1.15:1, so the usage well inside the child
    // hero read as haze rather than as an inset panel.
    surfaceInverseWell: 'rgba(255,255,255,0.18)',
    // 0.22 / 0.15 read as a smudge rather than a line once drawn at 1px —
    // outlined controls in there (the edit-name pill) had no discernible edge.
    surfaceInverseHairline: 'rgba(255,255,255,0.3)',
  },
  sweet: {
    textOnInverse: '#FFFFFF',
    textOnInverseMuted: '#FBEEF5',
    textOnInverseSubtle: '#F3DDE9',
    surfaceInverseWell: 'rgba(255,255,255,0.18)',
    surfaceInverseHairline: 'rgba(255,255,255,0.3)',
  },
};

/** Ink on a pale panel. */
const INVERSE_ON_LIGHT: Record<ThemeStyleId, InverseTokens> = {
  classic: {
    textOnInverse: '#0B0E13',
    textOnInverseMuted: '#475569',
    textOnInverseSubtle: '#52606E',
    surfaceInverseWell: 'rgba(15,23,42,0.1)',
    surfaceInverseHairline: 'rgba(15,23,42,0.22)',
  },
  sweet: {
    textOnInverse: '#3B1F33',
    /**
     * Measured against the *lightest* sweet hero panel across all 12 accents.
     * The ladder is compressed (7.8:1 / 5.3:1 / 4.8:1) against classic's,
     * because a pastel panel puts a hard ceiling on how pale secondary ink can
     * go before it drops under AA — on this panel the hierarchy is carried by
     * weight and size, not by how far the ink fades.
     */
    textOnInverseMuted: '#57394A',
    textOnInverseSubtle: '#5F3F51',
    surfaceInverseWell: 'rgba(59,31,51,0.12)',
    surfaceInverseHairline: 'rgba(59,31,51,0.26)',
  },
};

type SemanticTokens = {
  error: string;
  errorSoft: string;
  /** AA-safe text/icon color for error content on light surfaces. */
  errorStrong: string;
  success: string;
  successSoft: string;
  /** AA-safe text/icon color for success content on light surfaces. */
  successStrong: string;
  warning: string;
  warningSoft: string;
  /** AA-safe text/icon color for warning content on light surfaces. */
  warningStrong: string;
};

/**
 * Tokens computed in `resolvePalette` rather than hand-authored per accent.
 * All of them are alpha or cross-mode derivations of tokens above, so they
 * stay correct for all 12 accents without 24 more hex values to keep in sync.
 */
type DerivedTokens = {
  /**
   * Semantic colors for content drawn *on* `surfaceInverse`.
   *
   * Status tints on the hero panel need the semantic set built for the
   * opposite polarity of the panel: the bright dark-mode greens/ambers over a
   * deep panel, the deep light-mode ones over a pale panel. Keying this off
   * dark mode (or hard-coding rgba, which is the same mistake frozen) puts a
   * pale mint wash on a near-white panel.
   */
  successOnInverse: string;
  warningOnInverse: string;
  errorOnInverse: string;
  /**
   * Small uppercase section kickers — SECURITY, PREFERENCES, LEGAL.
   *
   * Classic keeps them grey: a kicker is navigation furniture and should not
   * compete with the content under it. Sweet colours them with the accent,
   * because in a pack whose whole point is warmth, the label that repeats down
   * every screen is free real estate — it costs no space and adds accent to
   * screens that are otherwise a stack of white cards.
   */
  sectionHeading: string;
  /**
   * Ring around the small accent-tinted icon bubbles that head every settings
   * row, status row and card.
   *
   * Transparent in classic — the bubble is a quiet container and an outline on
   * something 36pt across is noise. Sweet draws it, because that bubble is the
   * single most-repeated shape in the app: giving it an edge turns a row of
   * flat tinted discs into a row of stickers, everywhere, for one token.
   */
  bubbleOutline: string;
};

export type ResolvedPalette = AccentBrandTokens &
  NeutralTokens &
  InverseTokens &
  SemanticTokens &
  DerivedTokens;

/** `#RRGGBB` → `rgba(r,g,b,a)`. Non-hex input is returned untouched. */
export function withAlpha(color: string, alpha: number): string {
  const hex = color.trim();
  if (!/^#[0-9a-fA-F]{6}$/.test(hex)) {
    return color;
  }
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/**
 * What the `sweet` pack changes about an accent.
 *
 * Only the two tokens that paint *area*. `primary`, `primaryDark`,
 * `primaryStrong` and `secondary` are deliberately untouched: they colour
 * button fills, icon strokes and label text, all of which need the same
 * contrast in any pack, and pastel versions of them would leave every icon in
 * the app faint on a white card.
 *
 * `primarySoft` is the chip / icon-bubble tint and `surfaceInverse` the hero
 * panel. Between them they are most of the coloured pixels on a screen, which
 * is why re-tinting only the neutrals read as no change at all.
 */
type AccentStyleOverride = Partial<
  Pick<AccentBrandTokens, 'primarySoft' | 'secondarySoft' | 'surfaceInverse'>
>;

type AccentDefinition = {
  id: AccentId;
  label: string;
  /** Bright swatch shown in the picker (works on light backgrounds). */
  swatch: string;
  light: AccentBrandTokens;
  dark: AccentBrandTokens;
  /**
   * Applied on top of `light` when the sweet pack is active.
   *
   * Light mode only. Dark mode already draws its hero as a pale panel and its
   * soft tints as deep ones, so the geometry, the plum neutrals and the type
   * carry the pack there; re-tinting on top of that would only cost the accent
   * its identity in the one place it still shows.
   */
  sweetLight: AccentStyleOverride;
};

// Contrast ratios below are measured against the matching `*Soft` background
// with the WCAG 2.1 formula. Light mode needed darker `*Strong` values because
// the base semantic colors landed at 2.86–3.95:1, under the 4.5:1 AA floor for
// text under 18pt (soft pills use `typography.caption`, 12pt).
const SEMANTIC_LIGHT = {
  error: '#DC2626',
  errorSoft: '#FEE2E2',
  errorStrong: '#991B1B', // 6.80:1 on errorSoft
  success: '#059669',
  successSoft: '#D1FAE5',
  successStrong: '#065F46', // 6.78:1 on successSoft
  warning: '#D97706',
  warningSoft: '#FEF3C7',
  warningStrong: '#92400E', // 6.37:1 on warningSoft
} as const;

// Dark mode already cleared AA, so `*Strong` mirrors the base color.
const SEMANTIC_DARK = {
  error: '#F87171',
  errorSoft: '#450A0A',
  errorStrong: '#F87171', // 5.84:1 on errorSoft
  success: '#34D399',
  successSoft: '#064E3B',
  successStrong: '#34D399', // 5.06:1 on successSoft
  warning: '#FBBF24',
  warningSoft: '#451A03',
  warningStrong: '#FBBF24', // 8.97:1 on warningSoft
} as const;

/**
 * 12 curated accents × light/dark brand tokens.
 * Dark mode stays tinted (not pure B/W) but desaturated for night comfort.
 * Semantic status colors stay shared across accents.
 */
export const ACCENT_DEFINITIONS: AccentDefinition[] = [
  {
    id: 'teal',
    label: 'Teal',
    swatch: '#0F766E',
    light: {
      primary: '#0F766E',
      primaryDark: '#115E59',
      primarySoft: '#CCFBF1',
      primaryStrong: '#115E59',
      secondary: '#0369A1',
      secondarySoft: '#E0F2FE',
      surfaceInverse: '#115E59',
    },
    dark: {
      primary: '#2DD4BF',
      primaryDark: '#5EEAD4',
      primarySoft: '#134E4A',
      primaryStrong: '#5EEAD4',
      secondary: '#38BDF8',
      secondarySoft: '#0C4A6E',
      surfaceInverse: '#ECFEFF',
    },
    sweetLight: {
      primarySoft: '#99F6E4',
      secondarySoft: '#BAE6FD',
      surfaceInverse: '#5EEAD4',
    },
  },
  {
    id: 'sky',
    label: 'Sky',
    swatch: '#0369A1',
    light: {
      primary: '#0369A1',
      primaryDark: '#075985',
      primarySoft: '#E0F2FE',
      primaryStrong: '#075985',
      secondary: '#4F46E5',
      secondarySoft: '#E0E7FF',
      surfaceInverse: '#075985',
    },
    dark: {
      primary: '#38BDF8',
      primaryDark: '#7DD3FC',
      primarySoft: '#0C4A6E',
      primaryStrong: '#7DD3FC',
      secondary: '#818CF8',
      secondarySoft: '#312E81',
      surfaceInverse: '#F0F9FF',
    },
    sweetLight: {
      primarySoft: '#BAE6FD',
      secondarySoft: '#C7D2FE',
      surfaceInverse: '#7DD3FC',
    },
  },
  {
    id: 'blue',
    label: 'Blue',
    swatch: '#2563EB',
    light: {
      primary: '#2563EB',
      primaryDark: '#1D4ED8',
      primarySoft: '#DBEAFE',
      primaryStrong: '#1E40AF',
      secondary: '#7C3AED',
      secondarySoft: '#EDE9FE',
      surfaceInverse: '#1D4ED8',
    },
    dark: {
      primary: '#60A5FA',
      primaryDark: '#93C5FD',
      primarySoft: '#1E3A8A',
      primaryStrong: '#93C5FD',
      secondary: '#A78BFA',
      secondarySoft: '#4C1D95',
      surfaceInverse: '#EFF6FF',
    },
    sweetLight: {
      primarySoft: '#BFDBFE',
      secondarySoft: '#DDD6FE',
      surfaceInverse: '#93C5FD',
    },
  },
  {
    id: 'lime',
    label: 'Lime',
    swatch: '#4D7C0F',
    light: {
      primary: '#4D7C0F',
      primaryDark: '#3F6212',
      primarySoft: '#ECFCCB',
      primaryStrong: '#3F6212',
      secondary: '#0284C7',
      secondarySoft: '#E0F2FE',
      surfaceInverse: '#3F6212',
    },
    dark: {
      primary: '#A3E635',
      primaryDark: '#BEF264',
      primarySoft: '#1A2E05',
      primaryStrong: '#BEF264',
      secondary: '#38BDF8',
      secondarySoft: '#0C4A6E',
      surfaceInverse: '#F7FEE7',
    },
    sweetLight: {
      primarySoft: '#D9F99D',
      secondarySoft: '#BAE6FD',
      surfaceInverse: '#BEF264',
    },
  },
  {
    id: 'violet',
    label: 'Violet',
    swatch: '#7C3AED',
    light: {
      primary: '#7C3AED',
      primaryDark: '#6D28D9',
      primarySoft: '#EDE9FE',
      primaryStrong: '#5B21B6',
      secondary: '#DB2777',
      secondarySoft: '#FCE7F3',
      surfaceInverse: '#6D28D9',
    },
    dark: {
      primary: '#A78BFA',
      primaryDark: '#C4B5FD',
      primarySoft: '#4C1D95',
      primaryStrong: '#C4B5FD',
      secondary: '#F472B6',
      secondarySoft: '#831843',
      surfaceInverse: '#F5F3FF',
    },
    sweetLight: {
      primarySoft: '#DDD6FE',
      secondarySoft: '#FBCFE8',
      surfaceInverse: '#C4B5FD',
    },
  },
  {
    id: 'fuchsia',
    label: 'Fuchsia',
    swatch: '#C026D3',
    light: {
      primary: '#C026D3',
      primaryDark: '#86198F',
      primarySoft: '#FAE8FF',
      primaryStrong: '#86198F',
      secondary: '#7C3AED',
      secondarySoft: '#EDE9FE',
      surfaceInverse: '#86198F',
    },
    dark: {
      primary: '#E879F9',
      primaryDark: '#F0ABFC',
      primarySoft: '#701A75',
      primaryStrong: '#F0ABFC',
      secondary: '#A78BFA',
      secondarySoft: '#4C1D95',
      surfaceInverse: '#FDF4FF',
    },
    sweetLight: {
      primarySoft: '#F5D0FE',
      secondarySoft: '#DDD6FE',
      surfaceInverse: '#F0ABFC',
    },
  },
  {
    id: 'pink',
    label: 'Pink',
    swatch: '#DB2777',
    light: {
      primary: '#DB2777',
      primaryDark: '#BE185D',
      primarySoft: '#FCE7F3',
      primaryStrong: '#9D174D',
      secondary: '#7C3AED',
      secondarySoft: '#EDE9FE',
      surfaceInverse: '#BE185D',
    },
    dark: {
      primary: '#F472B6',
      primaryDark: '#F9A8D4',
      primarySoft: '#831843',
      primaryStrong: '#F9A8D4',
      secondary: '#A78BFA',
      secondarySoft: '#4C1D95',
      surfaceInverse: '#FDF2F8',
    },
    sweetLight: {
      primarySoft: '#FBCFE8',
      secondarySoft: '#DDD6FE',
      surfaceInverse: '#F9A8D4',
    },
  },
  {
    // Sweet-pack exclusive — see SWEET_ACCENT_IDS. Distinct from Pink the same
    // way Brown is from Orange: by lightness, not hue (pink-800 vs pink-600).
    id: 'berry',
    label: 'Berry',
    swatch: '#9D174D',
    light: {
      primary: '#9D174D',
      primaryDark: '#831843',
      primarySoft: '#FCE7F3',
      primaryStrong: '#831843',
      secondary: '#7C3AED',
      secondarySoft: '#EDE9FE',
      surfaceInverse: '#831843',
    },
    dark: {
      // Lightened to pink-500 rather than pink-300/400: berry's identity *is*
      // its depth, and the pastel shades all collapse into Pink's dark ramp.
      primary: '#EC4899',
      primaryDark: '#F472B6',
      primarySoft: '#500724',
      primaryStrong: '#F9A8D4',
      secondary: '#A78BFA',
      secondarySoft: '#4C1D95',
      surfaceInverse: '#FDF2F8',
    },
    sweetLight: {
      // One step deeper than Pink's overrides on both area tokens, so the two
      // stay tellable apart in the pack where both are offered. Both hold the
      // sweet ink ladder above AA (4.9:1 secondary copy on the chip tint,
      // 4.7:1 subtle ink on the hero).
      primarySoft: '#FAC2E1',
      secondarySoft: '#DDD6FE',
      surfaceInverse: '#F9A0D0',
    },
  },
  {
    id: 'orange',
    label: 'Orange',
    swatch: '#C2410C',
    light: {
      primary: '#C2410C',
      primaryDark: '#9A3412',
      primarySoft: '#FFEDD5',
      primaryStrong: '#9A3412',
      secondary: '#A16207',
      secondarySoft: '#FEF9C3',
      surfaceInverse: '#9A3412',
    },
    dark: {
      primary: '#FB923C',
      primaryDark: '#FDBA74',
      primarySoft: '#7C2D12',
      primaryStrong: '#FDBA74',
      secondary: '#FBBF24',
      secondarySoft: '#78350F',
      surfaceInverse: '#FFF7ED',
    },
    sweetLight: {
      primarySoft: '#FED7AA',
      secondarySoft: '#FEF08A',
      surfaceInverse: '#FDBA74',
    },
  },
  {
    id: 'rose',
    label: 'Rose',
    swatch: '#BE123C',
    light: {
      primary: '#BE123C',
      primaryDark: '#9F1239',
      primarySoft: '#FFE4E6',
      primaryStrong: '#9F1239',
      secondary: '#0284C7',
      secondarySoft: '#E0F2FE',
      surfaceInverse: '#9F1239',
    },
    dark: {
      primary: '#FB7185',
      primaryDark: '#FDA4AF',
      primarySoft: '#881337',
      primaryStrong: '#FDA4AF',
      secondary: '#38BDF8',
      secondarySoft: '#0C4A6E',
      surfaceInverse: '#FFF1F2',
    },
    sweetLight: {
      primarySoft: '#FECDD3',
      secondarySoft: '#BAE6FD',
      surfaceInverse: '#FDA4AF',
    },
  },
  {
    id: 'green',
    label: 'Green',
    swatch: '#15803D',
    light: {
      primary: '#15803D',
      primaryDark: '#166534',
      primarySoft: '#DCFCE7',
      primaryStrong: '#166534',
      secondary: '#0F766E',
      secondarySoft: '#CCFBF1',
      surfaceInverse: '#166534',
    },
    dark: {
      primary: '#4ADE80',
      primaryDark: '#86EFAC',
      primarySoft: '#14532D',
      primaryStrong: '#86EFAC',
      secondary: '#2DD4BF',
      secondarySoft: '#134E4A',
      surfaceInverse: '#F0FDF4',
    },
    sweetLight: {
      primarySoft: '#BBF7D0',
      secondarySoft: '#99F6E4',
      surfaceInverse: '#86EFAC',
    },
  },
  {
    id: 'brown',
    label: 'Brown',
    swatch: '#78350F',
    light: {
      // The one low-lightness accent (L* 30.8 against 40–49 for the rest), which
      // is what keeps it clear of Orange despite sitting 6° away in hue —
      // ΔE00 15.6 apart.
      primary: '#78350F',
      primaryDark: '#451A03',
      primarySoft: '#FFEDD5',
      primaryStrong: '#5C2A0C',
      secondary: '#0D9488',
      secondarySoft: '#CCFBF1',
      surfaceInverse: '#451A03',
    },
    dark: {
      // Brown has no light shade that stays brown — lightened it turns tan, and
      // tan lands on top of Orange. This caramel is the shade that keeps the
      // family and still clears every other accent (nearest is Sky/Blue, not
      // this one).
      primary: '#D2A679',
      primaryDark: '#E3C4A2',
      primarySoft: '#451A03',
      primaryStrong: '#E3C4A2',
      secondary: '#2DD4BF',
      secondarySoft: '#134E4A',
      surfaceInverse: '#FAF6F1',
    },
    sweetLight: {
      primarySoft: '#FED7AA',
      secondarySoft: '#99F6E4',
      surfaceInverse: '#E3C4A2',
    },
  },
  {
    id: 'slate',
    label: 'Neutral',
    swatch: '#475569',
    light: {
      primary: '#475569',
      primaryDark: '#334155',
      primarySoft: '#F1F5F9',
      primaryStrong: '#334155',
      secondary: '#0369A1',
      secondarySoft: '#E0F2FE',
      surfaceInverse: '#334155',
    },
    dark: {
      primary: '#94A3B8',
      primaryDark: '#CBD5E1',
      primarySoft: '#1E293B',
      primaryStrong: '#CBD5E1',
      secondary: '#38BDF8',
      secondarySoft: '#0C4A6E',
      surfaceInverse: '#F8FAFC',
    },
    sweetLight: {
      primarySoft: '#E2E8F0',
      secondarySoft: '#BAE6FD',
      surfaceInverse: '#CBD5E1',
    },
  },
];

const ACCENT_BY_ID = Object.fromEntries(
  ACCENT_DEFINITIONS.map(def => [def.id, def]),
) as Record<AccentId, AccentDefinition>;

export function isAccentId(value: unknown): value is AccentId {
  return typeof value === 'string' && value in ACCENT_BY_ID;
}

export function normalizeAccentId(value?: string | null): AccentId {
  if (isAccentId(value)) {
    return value;
  }
  if (typeof value === 'string') {
    // Read once and test the result: `value in LEGACY_ACCENT_MAP` does not
    // narrow an index signature, so under `noUncheckedIndexedAccess` the
    // lookup is still `AccentId | undefined`.
    const mapped = LEGACY_ACCENT_MAP[value];
    if (mapped) {
      return mapped;
    }
  }
  return DEFAULT_ACCENT_ID;
}

export function getAccentDefinition(accentId: AccentId): AccentDefinition {
  return ACCENT_BY_ID[accentId] ?? ACCENT_BY_ID[DEFAULT_ACCENT_ID];
}

export function resolvePalette(
  isDark: boolean,
  accentId: AccentId = DEFAULT_ACCENT_ID,
  styleId: ThemeStyleId = DEFAULT_THEME_STYLE_ID,
): ResolvedPalette {
  const style = normalizeThemeStyleId(styleId);
  const accent = getAccentDefinition(accentId);
  const semantic = isDark ? SEMANTIC_DARK : SEMANTIC_LIGHT;
  const neutral = isDark ? NEUTRALS[style].dark : NEUTRALS[style].light;

  const brand =
    !isDark && style === 'sweet'
      ? { ...accent.light, ...accent.sweetLight }
      : isDark
        ? accent.dark
        : accent.light;

  // Whether the hero panel is light is a pack decision, not a dark-mode one —
  // sweet keeps it light in both modes. Both the ink on the panel and the
  // status tints drawn on it follow the panel, not the theme.
  const inverseIsLight =
    getThemeStyleDefinition(style).inverseIsLight[isDark ? 'dark' : 'light'];
  const inverse = inverseIsLight ? INVERSE_ON_LIGHT[style] : INVERSE_ON_DARK[style];
  const onInverse = inverseIsLight ? SEMANTIC_LIGHT : SEMANTIC_DARK;

  return {
    ...brand,
    ...semantic,
    ...neutral,
    ...inverse,
    successOnInverse: onInverse.success,
    warningOnInverse: onInverse.warning,
    errorOnInverse: onInverse.error,
    sectionHeading: style === 'sweet' ? brand.primaryStrong : neutral.textSecondary,
    // 0.35 of `primary`: reads as a drawn edge against `primarySoft` without
    // becoming a second solid ring competing with the glyph inside it.
    bubbleOutline: style === 'sweet' ? withAlpha(brand.primary, 0.35) : 'transparent',
  };
}
