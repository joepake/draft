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
 * **Both web apps mirror since 2026-10-25.** Every physical `margin-left` /
 * `border-right` / `text-align: left` in `@kidgate/web-ui/index.css` and, since
 * that day, in `dashboard.css` is a logical property, so each app sets
 * `document.documentElement.dir` from this set. What stays physical in
 * `dashboard.css` is deliberate: the charts (`direction: ltr` on `.viz`, `.tl`,
 * `.sched`, `.hbar-track`), the toggle knob and the QR code text. The phone
 * still pins LTR (`apps/mobile/src/i18n/rtl.ts`) — its styles are not
 * converted, and a half-mirrored screen is worse than a consistently LTR one.
 *
 * The direction is applied **per app, by the app** (`useDocumentMeta` in
 * `apps/site/src/App.jsx`, `App.jsx` in `apps/dashboard`), not by this runtime.
 * This module answers "which languages are RTL"; it does not decide who acts
 * on it.
 */
export const RTL_LANGUAGES = new Set(['ar']);

export function isRtlLanguage(lang) {
  return RTL_LANGUAGES.has(lang);
}
