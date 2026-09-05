import type { AppLanguage } from '@kidgate/schema/language';
import { activities as enActivities } from './locales/en/activities';
import { appLimits as enAppLimits } from './locales/en/appLimits';
import { blockedHours as enBlockedHours } from './locales/en/blockedHours';
import { checkIn as enCheckIn } from './locales/en/checkIn';
import { deviceDetail as enDeviceDetail } from './locales/en/deviceDetail';
import { family as enFamily } from './locales/en/family';
import { location as enLocation } from './locales/en/location';
import { messageMonitoring as enMessageMonitoring } from './locales/en/messageMonitoring';
import { permissions as enPermissions } from './locales/en/permissions';
import { placeAlerts as enPlaceAlerts } from './locales/en/placeAlerts';
import { pairing as enPairing } from './locales/en/pairing';
import { plans as enPlans } from './locales/en/plans';
import { settings as enSettings } from './locales/en/settings';
import { protection as enProtection } from './locales/en/protection';
import { rewardTask as enRewardTask } from './locales/en/rewardTask';
import { screenTime as enScreenTime } from './locales/en/screenTime';
import { sos as enSos } from './locales/en/sos';
import { timeRequest as enTimeRequest } from './locales/en/timeRequest';
import { webFilter as enWebFilter } from './locales/en/webFilter';
import { translateIn, type LocaleTree } from './translateIn';
import type { TranslationParams } from './types';

/**
 * The app key space, loaded one language at a time, for the web to read.
 *
 * **The name is narrower than the job, since 2026-09-03.** It began as the feed
 * translator and is now also the door `apps/dashboard`'s parent editors read
 * their labels through — `appLimits`, `blockedHours` and `placeAlerts` were
 * added the day those editors were built. Renaming the module and its three
 * exports would touch every call site for nothing a comment cannot say.
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
 * ## And why the three editor namespaces come through the same door
 *
 * Nothing stores those keys, so the argument above does not apply to them. A
 * plainer one does: the phone already says every sentence a place, a blocked
 * hour or an app limit needs, in fourteen languages. Measured 2026-09-03, the
 * dashboard's first pass at these editors added twenty-nine `dash.*` keys of
 * which twenty-seven had a twin here — copied values, so no translator worked
 * twice, but the same sentence now sat in two packs and only one of them
 * would be edited next time. That is the drift this file was built against,
 * arriving through the other door.
 *
 * **What must NOT come through**: anything whose reader differs. `common` and
 * `nav` are the standing example — the web's are genuinely different copy, not
 * a translation of the app's (`packages/i18n/CLAUDE.md`). The test is whether
 * the sentence stays true when it crosses; `samePinToast` ends "Drag the map
 * to move the pin", the dashboard has no map, and that one stayed behind as a
 * `dash.*` key.
 *
 * ## Why not `@kidgate/i18n/locales`
 *
 * That index imports all fourteen full packs statically — every screen string
 * of every app, about 3.9 MB of source, in a parent's browser tab. This door
 * reaches the namespaces in `NAMESPACES`, in the language on screen plus
 * English, and nothing else.
 *
 * ## The failure mode of that list
 *
 * `translateIn` returns the **key itself** for anything outside it. So a
 * namespace nobody remembered to add does not fall back to English — it puts
 * `permissions.accessibilityHint` on screen, in every language, with every
 * other test green. That is what `hintKeys` did until 2026-09-03;
 * `packages/core/…/__tests__/protectionHintKeys.test.ts` is the guard, and it
 * checks the list against the thing that must match it rather than against its
 * own siblings.
 */

export interface ActivityFeedPack extends LocaleTree {
  activities: unknown;
  /** Not feed rows — parent-editor labels. See the note above. */
  appLimits: unknown;
  blockedHours: unknown;
  placeAlerts: unknown;
  /** The parent-invite handshake, said once for both owner surfaces. */
  pairing: unknown;
  /** Plan status only — buying stays on the phone. */
  plans: unknown;
  /** Only the member-removal confirmation is read from here. */
  settings: unknown;
  checkIn: unknown;
  /** Rename and unpair, said once for both parent surfaces. */
  deviceDetail: unknown;
  family: unknown;
  location: unknown;
  /**
   * The whole Message Alerts screen, not feed rows — the notice, the switches,
   * the category labels and the per-category advice. `apps/dashboard` renders
   * that screen too since 2026-09-03, and every sentence on it already exists
   * here in fourteen languages.
   */
  messageMonitoring: unknown;
  /**
   * Not feed rows either — the **steps** a protection issue carries.
   *
   * `getProtectionSummaryKeys` hands every issue a `hintKeys` list naming the
   * walk through Settings that fixes it, and those keys live in `permissions`
   * and `screenTime`. Neither namespace came through this door until now, so
   * `translateIn` fell through to returning the key and a parent who pressed
   * "How to fix" on the web read `permissions.accessibilityHint` — the literal
   * string, in all fourteen languages, exactly the failure `webCat.selfHarm`
   * was.
   */
  permissions: unknown;
  protection: unknown;
  rewardTask: unknown;
  /** `usageAccessStep*` — the other half of the same `hintKeys` lists. */
  screenTime: unknown;
  sos: unknown;
  timeRequest: unknown;
  /** `siteRequestApproved` and its three siblings — the parent's answer to a
   *  child asking for one website. Written by `resolveSiteRequest`. */
  webFilter: unknown;
}

/**
 * English is bundled statically: it is the fallback for any key a translation
 * has not caught up with, and for a chunk that fails to arrive.
 */
const en: ActivityFeedPack = {
  activities: enActivities,
  appLimits: enAppLimits,
  blockedHours: enBlockedHours,
  placeAlerts: enPlaceAlerts,
  pairing: enPairing,
  plans: enPlans,
  settings: enSettings,
  checkIn: enCheckIn,
  deviceDetail: enDeviceDetail,
  family: enFamily,
  location: enLocation,
  messageMonitoring: enMessageMonitoring,
  permissions: enPermissions,
  protection: enProtection,
  rewardTask: enRewardTask,
  screenTime: enScreenTime,
  sos: enSos,
  timeRequest: enTimeRequest,
  webFilter: enWebFilter,
};

/** The namespaces a feed row can name. Anything outside them falls to `en`. */
const NAMESPACES = [
  'activities',
  'videoHistory',
  'appLimits',
  'blockedHours',
  'placeAlerts',
  'pairing',
  'plans',
  'settings',
  'checkIn',
  'deviceDetail',
  'family',
  'location',
  'messageMonitoring',
  'permissions',
  'protection',
  'rewardTask',
  'screenTime',
  'sos',
  'timeRequest',
  'webFilter',
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
    appLimits: () => import('./locales/ar/appLimits'),
    blockedHours: () => import('./locales/ar/blockedHours'),
    placeAlerts: () => import('./locales/ar/placeAlerts'),
    pairing: () => import('./locales/ar/pairing'),
    plans: () => import('./locales/ar/plans'),
    settings: () => import('./locales/ar/settings'),
    checkIn: () => import('./locales/ar/checkIn'),
    deviceDetail: () => import('./locales/ar/deviceDetail'),
    family: () => import('./locales/ar/family'),
    location: () => import('./locales/ar/location'),
    messageMonitoring: () => import('./locales/ar/messageMonitoring'),
    permissions: () => import('./locales/ar/permissions'),
    protection: () => import('./locales/ar/protection'),
    screenTime: () => import('./locales/ar/screenTime'),
    rewardTask: () => import('./locales/ar/rewardTask'),
    sos: () => import('./locales/ar/sos'),
    timeRequest: () => import('./locales/ar/timeRequest'),
    webFilter: () => import('./locales/ar/webFilter'),
    videoHistory: () => import('./locales/ar/videoHistory'),
  },
  de: {
    activities: () => import('./locales/de/activities'),
    appLimits: () => import('./locales/de/appLimits'),
    blockedHours: () => import('./locales/de/blockedHours'),
    placeAlerts: () => import('./locales/de/placeAlerts'),
    pairing: () => import('./locales/de/pairing'),
    plans: () => import('./locales/de/plans'),
    settings: () => import('./locales/de/settings'),
    checkIn: () => import('./locales/de/checkIn'),
    deviceDetail: () => import('./locales/de/deviceDetail'),
    family: () => import('./locales/de/family'),
    location: () => import('./locales/de/location'),
    messageMonitoring: () => import('./locales/de/messageMonitoring'),
    permissions: () => import('./locales/de/permissions'),
    protection: () => import('./locales/de/protection'),
    screenTime: () => import('./locales/de/screenTime'),
    rewardTask: () => import('./locales/de/rewardTask'),
    sos: () => import('./locales/de/sos'),
    timeRequest: () => import('./locales/de/timeRequest'),
    webFilter: () => import('./locales/de/webFilter'),
    videoHistory: () => import('./locales/de/videoHistory'),
  },
  es: {
    activities: () => import('./locales/es/activities'),
    appLimits: () => import('./locales/es/appLimits'),
    blockedHours: () => import('./locales/es/blockedHours'),
    placeAlerts: () => import('./locales/es/placeAlerts'),
    pairing: () => import('./locales/es/pairing'),
    plans: () => import('./locales/es/plans'),
    settings: () => import('./locales/es/settings'),
    checkIn: () => import('./locales/es/checkIn'),
    deviceDetail: () => import('./locales/es/deviceDetail'),
    family: () => import('./locales/es/family'),
    location: () => import('./locales/es/location'),
    messageMonitoring: () => import('./locales/es/messageMonitoring'),
    permissions: () => import('./locales/es/permissions'),
    protection: () => import('./locales/es/protection'),
    screenTime: () => import('./locales/es/screenTime'),
    rewardTask: () => import('./locales/es/rewardTask'),
    sos: () => import('./locales/es/sos'),
    timeRequest: () => import('./locales/es/timeRequest'),
    webFilter: () => import('./locales/es/webFilter'),
    videoHistory: () => import('./locales/es/videoHistory'),
  },
  fr: {
    activities: () => import('./locales/fr/activities'),
    appLimits: () => import('./locales/fr/appLimits'),
    blockedHours: () => import('./locales/fr/blockedHours'),
    placeAlerts: () => import('./locales/fr/placeAlerts'),
    pairing: () => import('./locales/fr/pairing'),
    plans: () => import('./locales/fr/plans'),
    settings: () => import('./locales/fr/settings'),
    checkIn: () => import('./locales/fr/checkIn'),
    deviceDetail: () => import('./locales/fr/deviceDetail'),
    family: () => import('./locales/fr/family'),
    location: () => import('./locales/fr/location'),
    messageMonitoring: () => import('./locales/fr/messageMonitoring'),
    permissions: () => import('./locales/fr/permissions'),
    protection: () => import('./locales/fr/protection'),
    screenTime: () => import('./locales/fr/screenTime'),
    rewardTask: () => import('./locales/fr/rewardTask'),
    sos: () => import('./locales/fr/sos'),
    timeRequest: () => import('./locales/fr/timeRequest'),
    webFilter: () => import('./locales/fr/webFilter'),
    videoHistory: () => import('./locales/fr/videoHistory'),
  },
  hi: {
    activities: () => import('./locales/hi/activities'),
    appLimits: () => import('./locales/hi/appLimits'),
    blockedHours: () => import('./locales/hi/blockedHours'),
    placeAlerts: () => import('./locales/hi/placeAlerts'),
    pairing: () => import('./locales/hi/pairing'),
    plans: () => import('./locales/hi/plans'),
    settings: () => import('./locales/hi/settings'),
    checkIn: () => import('./locales/hi/checkIn'),
    deviceDetail: () => import('./locales/hi/deviceDetail'),
    family: () => import('./locales/hi/family'),
    location: () => import('./locales/hi/location'),
    messageMonitoring: () => import('./locales/hi/messageMonitoring'),
    permissions: () => import('./locales/hi/permissions'),
    protection: () => import('./locales/hi/protection'),
    screenTime: () => import('./locales/hi/screenTime'),
    rewardTask: () => import('./locales/hi/rewardTask'),
    sos: () => import('./locales/hi/sos'),
    timeRequest: () => import('./locales/hi/timeRequest'),
    webFilter: () => import('./locales/hi/webFilter'),
    videoHistory: () => import('./locales/hi/videoHistory'),
  },
  id: {
    activities: () => import('./locales/id/activities'),
    appLimits: () => import('./locales/id/appLimits'),
    blockedHours: () => import('./locales/id/blockedHours'),
    placeAlerts: () => import('./locales/id/placeAlerts'),
    pairing: () => import('./locales/id/pairing'),
    plans: () => import('./locales/id/plans'),
    settings: () => import('./locales/id/settings'),
    checkIn: () => import('./locales/id/checkIn'),
    deviceDetail: () => import('./locales/id/deviceDetail'),
    family: () => import('./locales/id/family'),
    location: () => import('./locales/id/location'),
    messageMonitoring: () => import('./locales/id/messageMonitoring'),
    permissions: () => import('./locales/id/permissions'),
    protection: () => import('./locales/id/protection'),
    screenTime: () => import('./locales/id/screenTime'),
    rewardTask: () => import('./locales/id/rewardTask'),
    sos: () => import('./locales/id/sos'),
    timeRequest: () => import('./locales/id/timeRequest'),
    webFilter: () => import('./locales/id/webFilter'),
    videoHistory: () => import('./locales/id/videoHistory'),
  },
  it: {
    activities: () => import('./locales/it/activities'),
    appLimits: () => import('./locales/it/appLimits'),
    blockedHours: () => import('./locales/it/blockedHours'),
    placeAlerts: () => import('./locales/it/placeAlerts'),
    pairing: () => import('./locales/it/pairing'),
    plans: () => import('./locales/it/plans'),
    settings: () => import('./locales/it/settings'),
    checkIn: () => import('./locales/it/checkIn'),
    deviceDetail: () => import('./locales/it/deviceDetail'),
    family: () => import('./locales/it/family'),
    location: () => import('./locales/it/location'),
    messageMonitoring: () => import('./locales/it/messageMonitoring'),
    permissions: () => import('./locales/it/permissions'),
    protection: () => import('./locales/it/protection'),
    screenTime: () => import('./locales/it/screenTime'),
    rewardTask: () => import('./locales/it/rewardTask'),
    sos: () => import('./locales/it/sos'),
    timeRequest: () => import('./locales/it/timeRequest'),
    webFilter: () => import('./locales/it/webFilter'),
    videoHistory: () => import('./locales/it/videoHistory'),
  },
  ja: {
    activities: () => import('./locales/ja/activities'),
    appLimits: () => import('./locales/ja/appLimits'),
    blockedHours: () => import('./locales/ja/blockedHours'),
    placeAlerts: () => import('./locales/ja/placeAlerts'),
    pairing: () => import('./locales/ja/pairing'),
    plans: () => import('./locales/ja/plans'),
    settings: () => import('./locales/ja/settings'),
    checkIn: () => import('./locales/ja/checkIn'),
    deviceDetail: () => import('./locales/ja/deviceDetail'),
    family: () => import('./locales/ja/family'),
    location: () => import('./locales/ja/location'),
    messageMonitoring: () => import('./locales/ja/messageMonitoring'),
    permissions: () => import('./locales/ja/permissions'),
    protection: () => import('./locales/ja/protection'),
    screenTime: () => import('./locales/ja/screenTime'),
    rewardTask: () => import('./locales/ja/rewardTask'),
    sos: () => import('./locales/ja/sos'),
    timeRequest: () => import('./locales/ja/timeRequest'),
    webFilter: () => import('./locales/ja/webFilter'),
    videoHistory: () => import('./locales/ja/videoHistory'),
  },
  ko: {
    activities: () => import('./locales/ko/activities'),
    appLimits: () => import('./locales/ko/appLimits'),
    blockedHours: () => import('./locales/ko/blockedHours'),
    placeAlerts: () => import('./locales/ko/placeAlerts'),
    pairing: () => import('./locales/ko/pairing'),
    plans: () => import('./locales/ko/plans'),
    settings: () => import('./locales/ko/settings'),
    checkIn: () => import('./locales/ko/checkIn'),
    deviceDetail: () => import('./locales/ko/deviceDetail'),
    family: () => import('./locales/ko/family'),
    location: () => import('./locales/ko/location'),
    messageMonitoring: () => import('./locales/ko/messageMonitoring'),
    permissions: () => import('./locales/ko/permissions'),
    protection: () => import('./locales/ko/protection'),
    screenTime: () => import('./locales/ko/screenTime'),
    rewardTask: () => import('./locales/ko/rewardTask'),
    sos: () => import('./locales/ko/sos'),
    timeRequest: () => import('./locales/ko/timeRequest'),
    webFilter: () => import('./locales/ko/webFilter'),
    videoHistory: () => import('./locales/ko/videoHistory'),
  },
  pt: {
    activities: () => import('./locales/pt/activities'),
    appLimits: () => import('./locales/pt/appLimits'),
    blockedHours: () => import('./locales/pt/blockedHours'),
    placeAlerts: () => import('./locales/pt/placeAlerts'),
    pairing: () => import('./locales/pt/pairing'),
    plans: () => import('./locales/pt/plans'),
    settings: () => import('./locales/pt/settings'),
    checkIn: () => import('./locales/pt/checkIn'),
    deviceDetail: () => import('./locales/pt/deviceDetail'),
    family: () => import('./locales/pt/family'),
    location: () => import('./locales/pt/location'),
    messageMonitoring: () => import('./locales/pt/messageMonitoring'),
    permissions: () => import('./locales/pt/permissions'),
    protection: () => import('./locales/pt/protection'),
    screenTime: () => import('./locales/pt/screenTime'),
    rewardTask: () => import('./locales/pt/rewardTask'),
    sos: () => import('./locales/pt/sos'),
    timeRequest: () => import('./locales/pt/timeRequest'),
    webFilter: () => import('./locales/pt/webFilter'),
    videoHistory: () => import('./locales/pt/videoHistory'),
  },
  ru: {
    activities: () => import('./locales/ru/activities'),
    appLimits: () => import('./locales/ru/appLimits'),
    blockedHours: () => import('./locales/ru/blockedHours'),
    placeAlerts: () => import('./locales/ru/placeAlerts'),
    pairing: () => import('./locales/ru/pairing'),
    plans: () => import('./locales/ru/plans'),
    settings: () => import('./locales/ru/settings'),
    checkIn: () => import('./locales/ru/checkIn'),
    deviceDetail: () => import('./locales/ru/deviceDetail'),
    family: () => import('./locales/ru/family'),
    location: () => import('./locales/ru/location'),
    messageMonitoring: () => import('./locales/ru/messageMonitoring'),
    permissions: () => import('./locales/ru/permissions'),
    protection: () => import('./locales/ru/protection'),
    screenTime: () => import('./locales/ru/screenTime'),
    rewardTask: () => import('./locales/ru/rewardTask'),
    sos: () => import('./locales/ru/sos'),
    timeRequest: () => import('./locales/ru/timeRequest'),
    webFilter: () => import('./locales/ru/webFilter'),
    videoHistory: () => import('./locales/ru/videoHistory'),
  },
  tr: {
    activities: () => import('./locales/tr/activities'),
    appLimits: () => import('./locales/tr/appLimits'),
    blockedHours: () => import('./locales/tr/blockedHours'),
    placeAlerts: () => import('./locales/tr/placeAlerts'),
    pairing: () => import('./locales/tr/pairing'),
    plans: () => import('./locales/tr/plans'),
    settings: () => import('./locales/tr/settings'),
    checkIn: () => import('./locales/tr/checkIn'),
    deviceDetail: () => import('./locales/tr/deviceDetail'),
    family: () => import('./locales/tr/family'),
    location: () => import('./locales/tr/location'),
    messageMonitoring: () => import('./locales/tr/messageMonitoring'),
    permissions: () => import('./locales/tr/permissions'),
    protection: () => import('./locales/tr/protection'),
    screenTime: () => import('./locales/tr/screenTime'),
    rewardTask: () => import('./locales/tr/rewardTask'),
    sos: () => import('./locales/tr/sos'),
    timeRequest: () => import('./locales/tr/timeRequest'),
    webFilter: () => import('./locales/tr/webFilter'),
    videoHistory: () => import('./locales/tr/videoHistory'),
  },
  vi: {
    activities: () => import('./locales/vi/activities'),
    appLimits: () => import('./locales/vi/appLimits'),
    blockedHours: () => import('./locales/vi/blockedHours'),
    placeAlerts: () => import('./locales/vi/placeAlerts'),
    pairing: () => import('./locales/vi/pairing'),
    plans: () => import('./locales/vi/plans'),
    settings: () => import('./locales/vi/settings'),
    checkIn: () => import('./locales/vi/checkIn'),
    deviceDetail: () => import('./locales/vi/deviceDetail'),
    family: () => import('./locales/vi/family'),
    location: () => import('./locales/vi/location'),
    messageMonitoring: () => import('./locales/vi/messageMonitoring'),
    permissions: () => import('./locales/vi/permissions'),
    protection: () => import('./locales/vi/protection'),
    screenTime: () => import('./locales/vi/screenTime'),
    rewardTask: () => import('./locales/vi/rewardTask'),
    sos: () => import('./locales/vi/sos'),
    timeRequest: () => import('./locales/vi/timeRequest'),
    webFilter: () => import('./locales/vi/webFilter'),
    videoHistory: () => import('./locales/vi/videoHistory'),
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
