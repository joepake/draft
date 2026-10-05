import type { AppLanguage } from '@kidgate/schema/language';
import { plans as enPlans } from './locales/en/plans';
import { translateIn, type LocaleTree } from './translateIn';
import type { TranslationParams } from './types';

/**
 * The app pack's `plans` namespace, for `apps/site`'s plan comparison.
 *
 * Same crossing as `userGuidePack` (the app key space, read on the web), one
 * namespace wide: the comparison's rows, cells and footnotes are sentences the
 * phone's Plans screen already says in fourteen languages, and a `home.*` twin
 * of each would be the same sentence in two packs with only one ever edited
 * again (`.claude/rules/i18n.md`). `activityFeed` would serve too, but it loads
 * thirty-odd namespaces a marketing page has no use for.
 *
 * English is bundled and the language on screen loads on demand, so the
 * section renders at once — in English for the beat a chunk takes, which is
 * what `useReveal` needs: it only observes what exists at mount.
 */
type PlansModule = Promise<{ plans: LocaleTree }>;

const IMPORTS: Record<AppLanguage, () => PlansModule> = {
  ar: () => import('./locales/ar/plans'),
  de: () => import('./locales/de/plans'),
  en: () => Promise.resolve({ plans: enPlans }),
  es: () => import('./locales/es/plans'),
  fr: () => import('./locales/fr/plans'),
  hi: () => import('./locales/hi/plans'),
  id: () => import('./locales/id/plans'),
  it: () => import('./locales/it/plans'),
  ja: () => import('./locales/ja/plans'),
  ko: () => import('./locales/ko/plans'),
  pt: () => import('./locales/pt/plans'),
  ru: () => import('./locales/ru/plans'),
  tr: () => import('./locales/tr/plans'),
  vi: () => import('./locales/vi/plans'),
};

export type PlansTranslate = (key: string, params?: TranslationParams) => string;

const EN: LocaleTree = { plans: enPlans };
const loaded = new Map<AppLanguage, LocaleTree>([['en', EN]]);

/** `plans.*` in `language` if its chunk has arrived, English until then. */
export function plansTranslator(language: AppLanguage): PlansTranslate {
  const pack = loaded.get(language);
  if (!pack) return (key, params) => translateIn(EN, null, 'en', key, params);
  return (key, params) =>
    translateIn(pack, language === 'en' ? null : EN, language, key, params);
}

/** Resolves once `plansTranslator(language)` answers in that language. */
export async function loadPlans(language: AppLanguage): Promise<void> {
  if (loaded.has(language) || !(language in IMPORTS)) return;
  const own = await IMPORTS[language]();
  loaded.set(language, { plans: own.plans });
}
