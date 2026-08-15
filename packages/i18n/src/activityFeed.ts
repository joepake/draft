import type { AppLanguage } from '@kidgate/schema/language';
import { activities as enActivities } from './locales/en/activities';
import { checkIn as enCheckIn } from './locales/en/checkIn';
import { family as enFamily } from './locales/en/family';
import { location as enLocation } from './locales/en/location';
import { protection as enProtection } from './locales/en/protection';
import { rewardTask as enRewardTask } from './locales/en/rewardTask';
import { sos as enSos } from './locales/en/sos';
import { timeRequest as enTimeRequest } from './locales/en/timeRequest';
import { translateIn, type LocaleTree } from './translateIn';
import type { TranslationParams } from './types';

/**
 * The activity feed's copy, loaded one language at a time.
 *
 * ## Why the web reads the app's key space here
 *
 * `src/web/locales` is a separate key space on purpose (see its README), and
 * this is a documented exception like `legal.ts`, not a hole in it. Feed rows
 * are stored as `titleKey` + `params` — never a rendered sentence — and the
 * keys are written by the child device and by Cloud Functions in the *app* key
 * space (`activities.appInstalledTitle`, `family.deviceUnlocked`). Any surface
 * that shows the feed has to read that key space or it is not showing the same
 * event.
 *
 * `apps/dashboard` did neither: it humanised the key, so a parent read
 * "App Installed Title / App Installed Body" in every language. Copying the
 * namespaces into the web packs was the other option and is the one this repo
 * exists to refuse — the child device gains a key, thirteen web packs do not,
 * and the humanised key comes back with no test able to see it.
 *
 * ## Why not `@kidgate/i18n/locales`
 *
 * That index imports all fourteen full packs statically — every screen string
 * of every app, about 3.9 MB of source, in a parent's browser tab. This door
 * reaches the eight namespaces the feed can name, in the language on screen
 * plus English, and nothing else.
 */

export interface ActivityFeedPack extends LocaleTree {
  activities: unknown;
  checkIn: unknown;
  family: unknown;
  location: unknown;
  protection: unknown;
  rewardTask: unknown;
  sos: unknown;
  timeRequest: unknown;
}

/**
 * English is bundled statically: it is the fallback for any key a translation
 * has not caught up with, and for a chunk that fails to arrive.
 */
const en: ActivityFeedPack = {
  activities: enActivities,
  checkIn: enCheckIn,
  family: enFamily,
  location: enLocation,
  protection: enProtection,
  rewardTask: enRewardTask,
  sos: enSos,
  timeRequest: enTimeRequest,
};

/** The namespaces a feed row can name. Anything outside them falls to `en`. */
const NAMESPACES = [
  'activities',
  'checkIn',
  'family',
  'location',
  'protection',
  'rewardTask',
  'sos',
  'timeRequest',
] as const;

type Namespace = (typeof NAMESPACES)[number];

/**
 * One import per language per namespace rather than a template-literal path: a
 * bundler can only split what it can see statically, which is the same trade
 * `legal.ts` makes for `apps/site`.
 */
type NamespaceImports = Record<Namespace, () => Promise<Record<string, unknown>>>;

async function loadFrom(lang: Exclude<AppLanguage, 'en'>): Promise<ActivityFeedPack> {
  const imports = IMPORTS[lang];
  const modules = await Promise.all(NAMESPACES.map(namespace => imports[namespace]()));

  const pack = { ...en } as Record<string, unknown>;
  NAMESPACES.forEach((namespace, index) => {
    pack[namespace] = modules[index]?.[namespace];
  });
  return pack as ActivityFeedPack;
}

const IMPORTS: Record<Exclude<AppLanguage, 'en'>, NamespaceImports> = {
  ar: {
    activities: () => import('./locales/ar/activities'),
    checkIn: () => import('./locales/ar/checkIn'),
    family: () => import('./locales/ar/family'),
    location: () => import('./locales/ar/location'),
    protection: () => import('./locales/ar/protection'),
    rewardTask: () => import('./locales/ar/rewardTask'),
    sos: () => import('./locales/ar/sos'),
    timeRequest: () => import('./locales/ar/timeRequest'),
  },
  de: {
    activities: () => import('./locales/de/activities'),
    checkIn: () => import('./locales/de/checkIn'),
    family: () => import('./locales/de/family'),
    location: () => import('./locales/de/location'),
    protection: () => import('./locales/de/protection'),
    rewardTask: () => import('./locales/de/rewardTask'),
    sos: () => import('./locales/de/sos'),
    timeRequest: () => import('./locales/de/timeRequest'),
  },
  es: {
    activities: () => import('./locales/es/activities'),
    checkIn: () => import('./locales/es/checkIn'),
    family: () => import('./locales/es/family'),
    location: () => import('./locales/es/location'),
    protection: () => import('./locales/es/protection'),
    rewardTask: () => import('./locales/es/rewardTask'),
    sos: () => import('./locales/es/sos'),
    timeRequest: () => import('./locales/es/timeRequest'),
  },
  fr: {
    activities: () => import('./locales/fr/activities'),
    checkIn: () => import('./locales/fr/checkIn'),
    family: () => import('./locales/fr/family'),
    location: () => import('./locales/fr/location'),
    protection: () => import('./locales/fr/protection'),
    rewardTask: () => import('./locales/fr/rewardTask'),
    sos: () => import('./locales/fr/sos'),
    timeRequest: () => import('./locales/fr/timeRequest'),
  },
  hi: {
    activities: () => import('./locales/hi/activities'),
    checkIn: () => import('./locales/hi/checkIn'),
    family: () => import('./locales/hi/family'),
    location: () => import('./locales/hi/location'),
    protection: () => import('./locales/hi/protection'),
    rewardTask: () => import('./locales/hi/rewardTask'),
    sos: () => import('./locales/hi/sos'),
    timeRequest: () => import('./locales/hi/timeRequest'),
  },
  id: {
    activities: () => import('./locales/id/activities'),
    checkIn: () => import('./locales/id/checkIn'),
    family: () => import('./locales/id/family'),
    location: () => import('./locales/id/location'),
    protection: () => import('./locales/id/protection'),
    rewardTask: () => import('./locales/id/rewardTask'),
    sos: () => import('./locales/id/sos'),
    timeRequest: () => import('./locales/id/timeRequest'),
  },
  it: {
    activities: () => import('./locales/it/activities'),
    checkIn: () => import('./locales/it/checkIn'),
    family: () => import('./locales/it/family'),
    location: () => import('./locales/it/location'),
    protection: () => import('./locales/it/protection'),
    rewardTask: () => import('./locales/it/rewardTask'),
    sos: () => import('./locales/it/sos'),
    timeRequest: () => import('./locales/it/timeRequest'),
  },
  ja: {
    activities: () => import('./locales/ja/activities'),
    checkIn: () => import('./locales/ja/checkIn'),
    family: () => import('./locales/ja/family'),
    location: () => import('./locales/ja/location'),
    protection: () => import('./locales/ja/protection'),
    rewardTask: () => import('./locales/ja/rewardTask'),
    sos: () => import('./locales/ja/sos'),
    timeRequest: () => import('./locales/ja/timeRequest'),
  },
  ko: {
    activities: () => import('./locales/ko/activities'),
    checkIn: () => import('./locales/ko/checkIn'),
    family: () => import('./locales/ko/family'),
    location: () => import('./locales/ko/location'),
    protection: () => import('./locales/ko/protection'),
    rewardTask: () => import('./locales/ko/rewardTask'),
    sos: () => import('./locales/ko/sos'),
    timeRequest: () => import('./locales/ko/timeRequest'),
  },
  pt: {
    activities: () => import('./locales/pt/activities'),
    checkIn: () => import('./locales/pt/checkIn'),
    family: () => import('./locales/pt/family'),
    location: () => import('./locales/pt/location'),
    protection: () => import('./locales/pt/protection'),
    rewardTask: () => import('./locales/pt/rewardTask'),
    sos: () => import('./locales/pt/sos'),
    timeRequest: () => import('./locales/pt/timeRequest'),
  },
  ru: {
    activities: () => import('./locales/ru/activities'),
    checkIn: () => import('./locales/ru/checkIn'),
    family: () => import('./locales/ru/family'),
    location: () => import('./locales/ru/location'),
    protection: () => import('./locales/ru/protection'),
    rewardTask: () => import('./locales/ru/rewardTask'),
    sos: () => import('./locales/ru/sos'),
    timeRequest: () => import('./locales/ru/timeRequest'),
  },
  tr: {
    activities: () => import('./locales/tr/activities'),
    checkIn: () => import('./locales/tr/checkIn'),
    family: () => import('./locales/tr/family'),
    location: () => import('./locales/tr/location'),
    protection: () => import('./locales/tr/protection'),
    rewardTask: () => import('./locales/tr/rewardTask'),
    sos: () => import('./locales/tr/sos'),
    timeRequest: () => import('./locales/tr/timeRequest'),
  },
  vi: {
    activities: () => import('./locales/vi/activities'),
    checkIn: () => import('./locales/vi/checkIn'),
    family: () => import('./locales/vi/family'),
    location: () => import('./locales/vi/location'),
    protection: () => import('./locales/vi/protection'),
    rewardTask: () => import('./locales/vi/rewardTask'),
    sos: () => import('./locales/vi/sos'),
    timeRequest: () => import('./locales/vi/timeRequest'),
  },
};

const cache: Partial<Record<AppLanguage, ActivityFeedPack>> = { en };

/** The pack if it is already in memory, otherwise undefined. */
export function peekActivityFeed(language: AppLanguage): ActivityFeedPack | undefined {
  return cache[language];
}

export async function loadActivityFeed(
  language: AppLanguage,
): Promise<ActivityFeedPack> {
  const hit = cache[language];
  if (hit) return hit;

  if (!(language in IMPORTS)) return en;

  const pack = await loadFrom(language as Exclude<AppLanguage, 'en'>);
  cache[language] = pack;
  return pack;
}

/**
 * A `translate` for `resolveActivityCopy` — same signature the phone hands it,
 * bound to one loaded pack with English behind it.
 */
export function activityTranslator(
  pack: ActivityFeedPack,
  language: AppLanguage,
): (key: string, params?: TranslationParams) => string {
  return (key, params) =>
    translateIn(pack, language === 'en' ? null : en, language, key, params);
}
