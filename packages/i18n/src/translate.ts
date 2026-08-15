import type { AppLanguage } from '@kidgate/schema/language';
import { getLocale } from './locales';
import { translateIn } from './translateIn';
import type { TranslationParams } from './types';

/**
 * Pure translation lookup.
 *
 * The seam this file exists to draw: **looking a string up is portable, holding
 * the current language is not.** Selecting a locale involves device settings,
 * persistence and a re-render — all platform work — while resolving
 * `key + params + language` into a string is arithmetic on data.
 *
 * So the stateful runtime stays in `apps/mobile` (`react-native-localize`,
 * MMKV, `I18nManager`, dayjs) and calls in here with an explicit language.
 * A Cloud Function rendering an email, or a browser, does the same thing with
 * its own notion of "current".
 *
 * Extracted from the legacy `src/i18n/index.ts`. The lookup moved on to
 * `./translateIn`, which takes a pack instead of fetching one — this module is
 * that plus `getLocale`, and importing it still pulls all fourteen packs.
 * A consumer that needs a few namespaces of one language wants a door like
 * `./activityFeed` or `./legal` instead.
 */

export type { PluralCategory } from './translateIn';
export { FALLBACK_PLURAL_RULES, getNumberFormat, pluralCategory } from './translateIn';

/**
 * Resolve a key in `lang`, falling back to English, then to the key itself.
 */
export function translate(
  lang: AppLanguage,
  key: string,
  params?: TranslationParams,
): string {
  return translateIn(
    getLocale(lang),
    lang === 'en' ? null : getLocale('en'),
    lang,
    key,
    params,
  );
}
