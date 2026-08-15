import type { AppLanguage } from '@kidgate/schema/language';

/**
 * Per-language display metadata for pickers. Adding a language means adding
 * one entry here — the Record type turns a missing entry into a compile
 * error — plus a `settings.language<Name>` label key in every locale.
 *
 * `nativeName` is the language's own name for itself ("Tiếng Việt"), which
 * is the same in every UI language, so it lives here instead of the locales.
 */
export const LANGUAGE_META: Record<
  AppLanguage,
  { labelKey: string; nativeName: string }
> = {
  en: { labelKey: 'settings.languageEnglish', nativeName: 'English' },
  vi: { labelKey: 'settings.languageVietnamese', nativeName: 'Tiếng Việt' },
  es: { labelKey: 'settings.languageSpanish', nativeName: 'Español' },
  pt: {
    labelKey: 'settings.languagePortuguese',
    nativeName: 'Português (Brasil)',
  },
  de: { labelKey: 'settings.languageGerman', nativeName: 'Deutsch' },
  fr: { labelKey: 'settings.languageFrench', nativeName: 'Français' },
  ja: { labelKey: 'settings.languageJapanese', nativeName: '日本語' },
  ko: { labelKey: 'settings.languageKorean', nativeName: '한국어' },
  ar: { labelKey: 'settings.languageArabic', nativeName: 'العربية' },
  id: {
    labelKey: 'settings.languageIndonesian',
    nativeName: 'Bahasa Indonesia',
  },
  it: { labelKey: 'settings.languageItalian', nativeName: 'Italiano' },
  tr: { labelKey: 'settings.languageTurkish', nativeName: 'Türkçe' },
  hi: { labelKey: 'settings.languageHindi', nativeName: 'हिन्दी' },
  ru: { labelKey: 'settings.languageRussian', nativeName: 'Русский' },
};
