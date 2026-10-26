import type { IconName } from './icons';

/**
 * A glyph per app category, not per app — shared by the phone and the
 * dashboard so an app classified "gambling" draws the same dice on both.
 *
 * Neither the app inventory nor the install feed has a per-app icon to draw
 * (`docs/FEASIBILITY.md`), so a row's own classification stands in for one.
 * Shares glyphs with the phone's `WEB_FILTER_CATEGORY_ICONS` for every
 * category the two taxonomies hold in common. Keyed by
 * `@kidgate/schema/aiApps`' `AppCategory`; tokens import no schema.
 *
 * `system`/`none` are never a shown row's category.
 */
export const APP_CATEGORY_ICONS: Partial<Record<string, IconName>> = {
  adult: 'eyeOff',
  gambling: 'dice',
  gameGambling: 'crown',
  dating: 'heart',
  drugs: 'pill',
  violence: 'alert',
  piracy: 'ban',
  bypass: 'unlock',
  social: 'message',
  messaging: 'mail',
  community: 'users',
  videoStreaming: 'play',
  shortVideo: 'camera',
  gaming: 'gamepad',
  music: 'music',
  shopping: 'cart',
  browser: 'globe',
  // A hammer (Xcode's), not the gear the Apps list uses for a row's settings.
  devTools: 'hammer',
  creative: 'palette',
  productivity: 'pencil',
  reading: 'book',
  fileSharing: 'share',
  education: 'fileText',
  utility: 'sliders',
};

/** An app nothing has classified yet — the plain app glyph, not a guessed kind. */
export const UNCLASSIFIED_APP_ICON: IconName = 'apps';

/** Fallback for a category with no glyph of its own — kept in step with `utility`'s. */
export const DEFAULT_APP_CATEGORY_ICON: IconName = APP_CATEGORY_ICONS.utility ?? 'grid';
