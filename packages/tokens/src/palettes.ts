import { DEFAULT_ACCENT_ID, resolvePalette, type ResolvedPalette } from './accents';

export type ColorPalette = ResolvedPalette;

/** Default teal light palette (legacy export). Prefer `resolvePalette`. */
export const lightColors: ColorPalette = resolvePalette(false, DEFAULT_ACCENT_ID);

/** Default teal dark palette (legacy export). Prefer `resolvePalette`. */
export const darkColors: ColorPalette = resolvePalette(true, DEFAULT_ACCENT_ID);

export {
  ACCENT_DEFINITIONS,
  ACCENT_IDS,
  DEFAULT_ACCENT_ID,
  getAccentDefinition,
  isAccentId,
  resolvePalette,
} from './accents';
export type { AccentId } from './accents';
