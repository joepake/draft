/**
 * The same fourteen languages the mobile app ships (see the app's
 * `src/i18n/types.ts` and `languageMeta.ts`). Keeping the two lists identical
 * matters: a parent who set Portuguese on their phone expects the dashboard to
 * open in Portuguese too.
 */
export const SUPPORTED_LANGUAGES = [
  'en',
  'vi',
  'es',
  'pt',
  'de',
  'fr',
  'ja',
  'ko',
  'ar',
  'id',
  'it',
  'tr',
  'hi',
  'ru',
]

export const DEFAULT_LANGUAGE = 'en'

/**
 * `nativeName` is the language's own name for itself, which reads the same in
 * every UI language, so it lives here instead of in the locale packs.
 * `labelKey` resolves to the name in the language currently on screen.
 */
export const LANGUAGE_META = {
  en: { labelKey: 'language.english', nativeName: 'English' },
  vi: { labelKey: 'language.vietnamese', nativeName: 'Tiếng Việt' },
  es: { labelKey: 'language.spanish', nativeName: 'Español' },
  pt: { labelKey: 'language.portuguese', nativeName: 'Português (Brasil)' },
  de: { labelKey: 'language.german', nativeName: 'Deutsch' },
  fr: { labelKey: 'language.french', nativeName: 'Français' },
  ja: { labelKey: 'language.japanese', nativeName: '日本語' },
  ko: { labelKey: 'language.korean', nativeName: '한국어' },
  ar: { labelKey: 'language.arabic', nativeName: 'العربية' },
  id: { labelKey: 'language.indonesian', nativeName: 'Bahasa Indonesia' },
  it: { labelKey: 'language.italian', nativeName: 'Italiano' },
  tr: { labelKey: 'language.turkish', nativeName: 'Türkçe' },
  hi: { labelKey: 'language.hindi', nativeName: 'हिन्दी' },
  ru: { labelKey: 'language.russian', nativeName: 'Русский' },
}

/**
 * Arabic is the only right-to-left script shipped. The layout is *not*
 * mirrored, for the same reason the app pins LTR (see its `i18n/rtl.ts`): the
 * stylesheet is written with physical `margin-left` / `left:` offsets and
 * absolute positions, so flipping `dir` reverses the flex rows but leaves the
 * spacing and overlays on their original side — a half-mirrored page. Proper
 * mirroring is a stylesheet project (logical properties throughout); until it
 * lands, one predictable layout beats two broken ones.
 *
 * Kept as data rather than inlined so the eventual RTL work has one place to
 * start from.
 */
export const RTL_LANGUAGES = new Set(['ar'])

export function isRtlLanguage(lang) {
  return RTL_LANGUAGES.has(lang)
}
