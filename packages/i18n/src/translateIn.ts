import type { AppLanguage } from '@kidgate/schema/language';
import { interpolate } from './interpolate';
import type { TranslationParams } from './types';

/**
 * The lookup itself, over a pack handed in rather than one fetched by language.
 *
 * Split out of `translate.ts` for one reason: that module imports
 * `./locales`, whose `index.ts` pulls all fourteen full packs statically —
 * every screen string of every app. A browser that needs eight namespaces of
 * one language must not pay for that, which is the same argument `legal.ts`
 * makes and the same one that keeps `apps/site` small.
 *
 * `translate.ts` is now this file plus `getLocale`, so there is still one
 * implementation of plural selection and number formatting. Two would drift,
 * and the drift would be invisible: both would render *something*.
 */

export type LocaleTree = Record<string, unknown>;

export type PluralCategory = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other';

/** Dotted key path into a locale pack. Returns undefined when absent. */
function lookupTranslation(pack: LocaleTree, key: string): string | undefined {
  const parts = key.split('.');
  let node: unknown = pack;

  for (const part of parts) {
    if (!node || typeof node !== 'object') {
      return undefined;
    }
    node = (node as LocaleTree)[part];
  }

  return typeof node === 'string' ? node : undefined;
}

const pluralRulesCache = new Map<AppLanguage, Intl.PluralRules | null>();

function getPluralRules(lang: AppLanguage): Intl.PluralRules | null {
  let rules = pluralRulesCache.get(lang);
  if (rules === undefined) {
    rules = null;
    if (typeof Intl !== 'undefined' && typeof Intl.PluralRules === 'function') {
      try {
        rules = new Intl.PluralRules(lang);
      } catch {
        rules = null;
      }
    }
    pluralRulesCache.set(lang, rules);
  }
  return rules;
}

const oneAtOne = (count: number): PluralCategory => (count === 1 ? 'one' : 'other');
const oneAtZeroOrOne = (count: number): PluralCategory =>
  count === 0 || count === 1 ? 'one' : 'other';
const otherOnly = (): PluralCategory => 'other';

/**
 * Hermes ships without `Intl.PluralRules` on some versions, so every supported
 * language needs an explicit fallback here — on device this is frequently the
 * real implementation, not a safety net. The `Record<AppLanguage, …>` type makes
 * adding a language without a rule a compile error.
 *
 * These implement the CLDR *integer* rules exactly. Counts in this app are whole
 * numbers, so the fractional branches of the spec are intentionally omitted.
 */
export const FALLBACK_PLURAL_RULES: Record<
  AppLanguage,
  (count: number) => PluralCategory
> = {
  en: oneAtOne,
  vi: otherOnly,
  es: oneAtOne,
  pt: oneAtZeroOrOne,
  de: oneAtOne,
  fr: oneAtZeroOrOne,
  ja: otherOnly,
  ko: otherOnly,
  ar: count => {
    if (count === 0) return 'zero';
    if (count === 1) return 'one';
    if (count === 2) return 'two';
    const mod100 = count % 100;
    if (mod100 >= 3 && mod100 <= 10) return 'few';
    if (mod100 >= 11 && mod100 <= 99) return 'many';
    return 'other';
  },
  id: otherOnly,
  it: oneAtOne,
  tr: oneAtOne,
  hi: oneAtZeroOrOne,
  ru: count => {
    const mod10 = count % 10;
    const mod100 = count % 100;
    if (mod10 === 1 && mod100 !== 11) return 'one';
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'few';
    return 'many';
  },
};

export function pluralCategory(lang: AppLanguage, count: number): PluralCategory {
  const rules = getPluralRules(lang);
  if (rules) {
    return rules.select(count) as PluralCategory;
  }
  return FALLBACK_PLURAL_RULES[lang](count);
}

/**
 * Languages with plural inflection use `key_<category>` variants (CLDR
 * categories zero/one/two/few/many/other), selected by a numeric `count` param.
 *
 * Lookup order: exact category, then `_other`, then the plain key — so a
 * language without inflection (Vietnamese, Japanese, Korean) simply keeps the
 * plain key and never needs variants.
 */
function lookupWithPlural(
  pack: LocaleTree,
  lang: AppLanguage,
  key: string,
  params?: TranslationParams,
): string | undefined {
  const count = params?.count;
  if (typeof count === 'number') {
    const category = pluralCategory(lang, count);
    const variant = lookupTranslation(pack, `${key}_${category}`);
    if (variant !== undefined) {
      return variant;
    }
    if (category !== 'other') {
      const other = lookupTranslation(pack, `${key}_other`);
      if (other !== undefined) {
        return other;
      }
    }
  }
  return lookupTranslation(pack, key);
}

const numberFormatCache = new Map<AppLanguage, Intl.NumberFormat | null>();

/**
 * Locale number formatter, or null on a runtime without `Intl`.
 *
 * Exported because `apps/mobile` needs the same instance to build its localized
 * digit table for Reanimated worklets, which run on the UI thread where `Intl`
 * is out of reach.
 */
export function getNumberFormat(lang: AppLanguage): Intl.NumberFormat | null {
  let format = numberFormatCache.get(lang);
  if (format === undefined) {
    format = null;
    if (typeof Intl !== 'undefined' && typeof Intl.NumberFormat === 'function') {
      try {
        format = new Intl.NumberFormat(lang);
      } catch {
        format = null;
      }
    }
    numberFormatCache.set(lang, format);
  }
  return format;
}

/**
 * Locale-aware digits for interpolated numbers — `1,440` in English, `1.440` in
 * Vietnamese.
 *
 * Lives here rather than in the app runtime so that a string rendered by a
 * Cloud Function into an email reads identically to the same string on screen.
 * Splitting it would have been invisible in tests and wrong in production.
 */
function formatParamValue(lang: AppLanguage, value: string | number | boolean): string {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return getNumberFormat(lang)?.format(value) ?? String(value);
  }
  return String(value);
}

/**
 * Resolve a key in `pack`, falling back to `fallbackPack`, then to the key.
 *
 * Returning the key rather than throwing is deliberate: a missing string should
 * degrade to something recognisable on screen, not take out the surrounding
 * view. The locale-parity tests are what stop that from shipping.
 */
export function translateIn(
  pack: LocaleTree,
  fallbackPack: LocaleTree | null,
  lang: AppLanguage,
  key: string,
  params?: TranslationParams,
): string {
  const format = (value: string | number | boolean) => formatParamValue(lang, value);

  const primary = lookupWithPlural(pack, lang, key, params);
  if (primary !== undefined) {
    return interpolate(primary, params, format);
  }

  if (fallbackPack) {
    const fallback = lookupWithPlural(fallbackPack, 'en', key, params);
    if (fallback !== undefined) {
      return interpolate(fallback, params, format);
    }
  }

  return key;
}
