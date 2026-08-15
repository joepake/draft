/**
 * Local i18n types. The language contract itself — `AppLanguage`,
 * `SUPPORTED_LANGUAGES`, `LanguagePreference` — lives in
 * `@kidgate/schema/language`, because it is persisted (a user's preference is a
 * Firestore field, and the server renders push copy by code). Import it from
 * there; this file holds only what is purely a translation concern.
 */

export type TranslationParams = Record<
  string,
  string | number | boolean | null | undefined
>;
