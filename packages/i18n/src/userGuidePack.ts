import type { AppLanguage } from '@kidgate/schema/language';
import { translateIn, type LocaleTree } from './translateIn';
import type { TranslationParams } from './types';

/**
 * The app pack's `userGuide` namespace, for `apps/dashboard`'s guide.
 *
 * **Not one of `activityFeed`'s NAMESPACES, on purpose.** That door loads
 * every namespace it lists on every visit, and this one is ~45 KB of source
 * per language read only by a parent who opens the guide — so it loads on the
 * first open, the language on screen plus English behind it. Same crossing as
 * that file (the app key space, read on the web, never through
 * `@kidgate/i18n/locales`), one namespace wide.
 */
type GuideModule = Promise<{ userGuide: LocaleTree }>;

const IMPORTS: Record<AppLanguage, () => GuideModule> = {
  ar: () => import('./locales/ar/userGuide'),
  de: () => import('./locales/de/userGuide'),
  en: () => import('./locales/en/userGuide'),
  es: () => import('./locales/es/userGuide'),
  fr: () => import('./locales/fr/userGuide'),
  hi: () => import('./locales/hi/userGuide'),
  id: () => import('./locales/id/userGuide'),
  it: () => import('./locales/it/userGuide'),
  ja: () => import('./locales/ja/userGuide'),
  ko: () => import('./locales/ko/userGuide'),
  pt: () => import('./locales/pt/userGuide'),
  ru: () => import('./locales/ru/userGuide'),
  tr: () => import('./locales/tr/userGuide'),
  vi: () => import('./locales/vi/userGuide'),
};

export type UserGuidePack = {
  /** `userGuide.*` keys only, English behind the language on screen. */
  t: (key: string, params?: TranslationParams) => string;
  /** The raw namespace, for `readGuideSteps` in `@kidgate/core/domain/userGuide`. */
  guide: LocaleTree;
};

const cache = new Map<AppLanguage, Promise<UserGuidePack>>();

export function loadUserGuide(language: AppLanguage): Promise<UserGuidePack> {
  const lang: AppLanguage = language in IMPORTS ? language : 'en';
  const hit = cache.get(lang);
  if (hit) return hit;

  const loading = Promise.all([IMPORTS[lang](), IMPORTS.en()]).then(([own, en]) => {
    const pack = { userGuide: own.userGuide };
    const fallback = lang === 'en' ? null : { userGuide: en.userGuide };
    return {
      t: (key: string, params?: TranslationParams) =>
        translateIn(pack, fallback, lang, key, params),
      guide: own.userGuide,
    };
  });
  // A failed chunk must not stay cached — the next open asks again.
  loading.catch(() => cache.delete(lang));
  cache.set(lang, loading);
  return loading;
}
