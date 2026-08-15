/**
 * Style packs — the third theme axis, alongside dark mode and accent.
 *
 * Dark mode decides how bright the app is and the accent decides which colour
 * the buttons are; neither can change how the app *feels*. A style pack does:
 * it swaps the neutral layer (page, surfaces, text, lines) wholesale, so the
 * same accent reads as a utility tool in one pack and as something warm and
 * playful in the other.
 *
 * Deliberately not labelled by gender. The trigger was parents and daughters
 * finding the default too cold, but shipping a "girl mode" would be both
 * unnecessary and worse product: the pack is a taste preference, offered to
 * everyone, and either device role can pick either one.
 *
 * A pack reaches four layers, because colour alone could not carry it: every
 * tinted thing on screen — hero panels, chips, buttons, icons — is drawn from
 * the accent, so re-tinting only the page left the app looking unchanged.
 *
 *  1. Neutrals — page, surfaces, ink, lines (`accents.ts`).
 *  2. Accent overrides — chips and hero panels per accent (`accents.ts`).
 *  3. Geometry — corner radii and elevation (`radius.ts`, `shadows.ts`).
 *  4. Type — weights and tracking (`typography.ts`).
 *
 * Layers 3 and 4 are read as static module imports by ~90 screens, so they are
 * resolved through `getActiveThemeStyle()` at property-access time rather than
 * being passed down. See `SCALES` below.
 */

/** Stable IDs persisted in app settings. */
export type ThemeStyleId = 'classic' | 'sweet';

export const DEFAULT_THEME_STYLE_ID: ThemeStyleId = 'classic';

export const THEME_STYLE_IDS: ThemeStyleId[] = ['classic', 'sweet'];

type ThemeStyleDefinition = {
  id: ThemeStyleId;
  /**
   * Whether `surfaceInverse` — the big hero panel — is a *light* surface.
   *
   * Classic draws it as a deep slab of the accent in light mode and flips to a
   * near-white panel in dark. Sweet keeps it light in both: a saturated slab is
   * the single largest thing on most screens, and leaving it dark is most of
   * why re-tinting the page alone read as no change at all.
   *
   * Everything drawn *on* that panel keys off this rather than off `isDark`:
   * the ink, the muted copy, the inset wells, and the status tints.
   */
  inverseIsLight: { light: boolean; dark: boolean };
  /**
   * Swatches for the picker card. Drawn as a miniature of the pack — page
   * colour behind, a card on top, an accent dot on the card — because the
   * difference between the packs is exactly those three surfaces, and a single
   * colour chip cannot show it.
   *
   * Two sets, because the miniature must show what the pack looks like in the
   * theme the user is currently in — a light thumbnail inside a dark app
   * promises the wrong thing. Read through `getThemeStylePreview`.
   */
  preview: {
    background: string;
    surface: string;
    accent: string;
  };
  previewDark: {
    background: string;
    surface: string;
    accent: string;
  };
  /**
   * Accent this pack is designed around. Applied on first switch only, and
   * only when the accent is still untouched at its default — see
   * `setThemeStyleId` in the settings store.
   */
  suggestedAccentId: string;
};

export const THEME_STYLE_DEFINITIONS: ThemeStyleDefinition[] = [
  {
    id: 'classic',
    inverseIsLight: { light: false, dark: true },
    preview: {
      background: '#EEF1F6',
      surface: '#FFFFFF',
      accent: '#0F766E',
    },
    // The pack's dark neutrals plus its suggested accent's dark primary.
    previewDark: {
      background: '#0B0E13',
      surface: '#1A212B',
      accent: '#2DD4BF',
    },
    suggestedAccentId: 'teal',
  },
  {
    id: 'sweet',
    inverseIsLight: { light: true, dark: true },
    preview: {
      background: '#FCE7F0',
      surface: '#FFFAFC',
      accent: '#F9A8D4',
    },
    previewDark: {
      background: '#120A10',
      surface: '#231825',
      accent: '#F472B6',
    },
    suggestedAccentId: 'pink',
  },
];

const STYLE_BY_ID = Object.fromEntries(
  THEME_STYLE_DEFINITIONS.map(def => [def.id, def]),
) as Record<ThemeStyleId, ThemeStyleDefinition>;

export function isThemeStyleId(value: unknown): value is ThemeStyleId {
  return typeof value === 'string' && value in STYLE_BY_ID;
}

export function normalizeThemeStyleId(value?: string | null): ThemeStyleId {
  return isThemeStyleId(value) ? value : DEFAULT_THEME_STYLE_ID;
}

export function getThemeStyleDefinition(styleId: ThemeStyleId): ThemeStyleDefinition {
  return STYLE_BY_ID[styleId] ?? STYLE_BY_ID[DEFAULT_THEME_STYLE_ID];
}

/** Picker miniature for a pack, in the theme the user is currently in. */
export function getThemeStylePreview(
  styleId: ThemeStyleId,
  isDark: boolean,
): ThemeStyleDefinition['preview'] {
  const def = getThemeStyleDefinition(styleId);
  return isDark ? def.previewDark : def.preview;
}

/**
 * The pack currently on screen, for the token modules that cannot receive it.
 *
 * Colours reach a screen through `useStyles`, which re-runs its factory when
 * the palette changes. Radii, shadows and type do not: ~90 screens import them
 * as plain module values (`radius.lg`), and threading a theme argument through
 * all of them is a migration, not a feature.
 *
 * Those modules read this instead, at property-access time. It works because a
 * pack switch also changes the palette, so every `useStyles` factory re-runs
 * and re-reads the geometry on the same commit.
 *
 * Deliberately a module-local rather than a store read: `theme.store` imports
 * this module, so importing the store back would close an import cycle.
 * `theme.store` pushes the value here on every change instead.
 */
let activeStyleId: ThemeStyleId = DEFAULT_THEME_STYLE_ID;

export function setActiveThemeStyle(styleId: ThemeStyleId): void {
  activeStyleId = normalizeThemeStyleId(styleId);
}

export function getActiveThemeStyle(): ThemeStyleId {
  return activeStyleId;
}

/**
 * Picks the active pack's entry out of a per-pack table.
 *
 * Tables are built once at module load and only indexed here, so a token read
 * returns the *same object identity* for the whole life of a pack — style
 * factories and `React.memo` comparisons downstream stay stable.
 */
export function forActiveStyle<T>(table: Record<ThemeStyleId, T>): T {
  return table[activeStyleId] ?? table[DEFAULT_THEME_STYLE_ID];
}
