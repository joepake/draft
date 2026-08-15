import type { AppLanguage } from '@kidgate/schema/language';
import { legal as en } from './locales/en/legal';

/**
 * The two legal documents, loaded one language at a time.
 *
 * `@kidgate/i18n/locales` is the wrong door for this one namespace: its
 * `index.ts` imports all fourteen packs statically — every screen string of
 * every app — and the only browser that renders these documents is
 * `apps/site`, a marketing site whose whole point is that it stays small and
 * crawlable. This subpath reaches `<lang>/legal` and nothing else, so a
 * reader who opens the Privacy Policy in Vietnamese fetches one chunk of legal
 * text rather than the phone's entire vocabulary.
 *
 * ## Why the site reads the app's key space at all
 *
 * `src/web/locales` is a separate key space on purpose (see its README) and
 * this is the documented exception rather than a hole in it. These documents
 * are not web copy that happens to resemble app copy — they are the same
 * document, and they were a second copy until August 2026: `apps/site` had its
 * own English JSX with a different effective date and a different section
 * count from the fourteen packs the apps rendered. One text, one place. The
 * apps no longer render it at all; they open the site.
 */
export interface LegalLink {
  readonly label: string;
  readonly url: string;
}

export interface LegalSection {
  readonly title: string;
  readonly body: string;
  /**
   * Structured rather than URLs inline in `body`, because the alternative is
   * regex-linkifying every legal document in fourteen languages to light up
   * the two places that actually need it — the bundled typeface's source and
   * its licence, in the Terms.
   */
  readonly links?: readonly LegalLink[];
}

export interface LegalDocument {
  readonly title: string;
  readonly effectiveDate: string;
  readonly intro: string;
  readonly sections: readonly LegalSection[];
}

export type LegalDocumentKey = 'privacyPolicy' | 'termsOfService';

export type LegalPack = Record<LegalDocumentKey, LegalDocument>;

/**
 * English is bundled statically because it is the fallback for a language
 * whose chunk fails to arrive, the same call `src/web/locales/index.js` makes
 * about its own default pack.
 */
const LOADERS: Record<
  Exclude<AppLanguage, 'en'>,
  () => Promise<{ legal: LegalPack }>
> = {
  vi: () => import('./locales/vi/legal'),
  es: () => import('./locales/es/legal'),
  pt: () => import('./locales/pt/legal'),
  de: () => import('./locales/de/legal'),
  fr: () => import('./locales/fr/legal'),
  ja: () => import('./locales/ja/legal'),
  ko: () => import('./locales/ko/legal'),
  ar: () => import('./locales/ar/legal'),
  id: () => import('./locales/id/legal'),
  it: () => import('./locales/it/legal'),
  tr: () => import('./locales/tr/legal'),
  hi: () => import('./locales/hi/legal'),
  ru: () => import('./locales/ru/legal'),
};

const cache: Partial<Record<AppLanguage, LegalPack>> = { en };

/**
 * The pack if it is already in memory, otherwise undefined.
 *
 * The caller renders nothing until this answers — never English-then-swap. A
 * legal document that visibly changes language a moment after it appears reads
 * as a page that could not decide which text applies to the reader.
 */
export function peekLegal(language: AppLanguage): LegalPack | undefined {
  return cache[language];
}

export async function loadLegal(language: AppLanguage): Promise<LegalPack> {
  const hit = cache[language];
  if (hit) return hit;

  const loader = LOADERS[language as Exclude<AppLanguage, 'en'>];
  if (!loader) return en;

  const module = await loader();
  cache[language] = module.legal;
  return module.legal;
}
