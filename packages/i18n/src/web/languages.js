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
];

export const DEFAULT_LANGUAGE = 'en';

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
};

/**
 * Arabic is the only right-to-left script shipped.
 *
 * **`apps/site` now mirrors; `apps/dashboard` still does not.** The stylesheet
 * project this comment used to defer has landed for one of the two: every
 * physical `margin-left` / `border-right` / `text-align: left` in
 * `@kidgate/web-ui/index.css` is a logical property, so the site sets
 * `document.documentElement.dir` from this set and lays out correctly in both
 * directions. `dashboard.css` still holds two dozen physical declarations, and
 * flipping `dir` there would reverse its flex rows while leaving every offset
 * on its original side — the half-mirrored page that is worse than a
 * consistently LTR one, and the same reason the phone pins LTR
 * (`apps/mobile/src/i18n/rtl.ts`).
 *
 * So the direction is applied **per app, by the app** (`useDocumentMeta` in
 * `apps/site/src/App.jsx`), not by this runtime — a shared runtime setting
 * `dir` would turn it on for the dashboard too, which is not ready. This module
 * answers "which languages are RTL"; it does not decide who acts on it.
 */
export const RTL_LANGUAGES = new Set(['ar']);

export function isRtlLanguage(lang) {
  return RTL_LANGUAGES.has(lang);
}
