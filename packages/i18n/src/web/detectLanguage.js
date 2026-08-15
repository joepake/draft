import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './languages.js';

/**
 * Best supported match for a list of BCP-47 tags, in the caller's order of
 * preference, or null when none of them is a language this product ships.
 *
 * Region subtags are dropped: `pt-BR`, `pt-PT` and `pt` all resolve to `pt`,
 * matching how the app collapses `vi-Latn-VN` to `vi`. Exact tags are tried
 * first so a future `pt-PT` pack would win over the `pt` fallback without this
 * function changing.
 *
 * Null rather than the default language, because the two callers want
 * different things from a miss: the browser detector below falls back to
 * English, while `?hl=` falling back to English would let a stray query
 * parameter override a reader's own stored choice.
 */
export function matchSupportedLanguage(tags) {
  for (const tag of tags) {
    const lower = String(tag).toLowerCase();
    if (SUPPORTED_LANGUAGES.includes(lower)) return lower;
    const base = lower.split(/[-_]/)[0];
    if (SUPPORTED_LANGUAGES.includes(base)) return base;
  }

  return null;
}

/** The browser's own preference order, falling back to English. */
export function detectBrowserLanguage() {
  const preferred =
    (typeof navigator !== 'undefined' &&
      (navigator.languages?.length
        ? navigator.languages
        : navigator.language
          ? [navigator.language]
          : [])) ||
    [];

  return matchSupportedLanguage(preferred) ?? DEFAULT_LANGUAGE;
}
