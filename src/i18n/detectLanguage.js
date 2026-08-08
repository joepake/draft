import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './languages.js'

/**
 * Best supported match for the browser's preferred languages, in the browser's
 * own order of preference.
 *
 * Region subtags are dropped: `pt-BR`, `pt-PT` and `pt` all resolve to `pt`,
 * matching how the app collapses `vi-Latn-VN` to `vi`. Exact tags are tried
 * first so a future `pt-PT` pack would win over the `pt` fallback without this
 * function changing.
 */
export function detectBrowserLanguage() {
  const preferred =
    (typeof navigator !== 'undefined' &&
      (navigator.languages?.length
        ? navigator.languages
        : navigator.language
          ? [navigator.language]
          : [])) ||
    []

  for (const tag of preferred) {
    const lower = String(tag).toLowerCase()
    if (SUPPORTED_LANGUAGES.includes(lower)) return lower
    const base = lower.split(/[-_]/)[0]
    if (SUPPORTED_LANGUAGES.includes(base)) return base
  }

  return DEFAULT_LANGUAGE
}
