/**
 * The set of shipped UI languages.
 *
 * Lives in `schema` rather than in `@kidgate/i18n` because it is a **persisted
 * contract**, not just a translation concern: a user's language preference is
 * stored on their Firestore document, push copy is rendered server-side by
 * language code, and the native layers key their string resources off the same
 * list. `@kidgate/i18n` imports this — schema is the bottom of the stack.
 *
 * Adding a code here is step 1 of `docs/ADDING_A_LANGUAGE.md` and is the change
 * that makes the compiler point at the other four layers, because the packs are
 * typed `Record<AppLanguage, …>`. Do not add a code until you intend to finish
 * the checklist — a declared language with no pack falls back to English
 * silently, which reads as a bug rather than as an omission.
 *
 * Source: legacy `src/i18n/types.ts`.
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
] as const;

export type AppLanguage = (typeof SUPPORTED_LANGUAGES)[number];

/** Follow device locale until the user picks an explicit language. */
export type LanguagePreference = AppLanguage | 'system';

/**
 * Right-to-left languages, for layout mirroring.
 *
 * Derived from the list above rather than hand-maintained so a new RTL language
 * cannot be added to `SUPPORTED_LANGUAGES` and forgotten here.
 */
export const RTL_LANGUAGES: readonly AppLanguage[] = ['ar'];
