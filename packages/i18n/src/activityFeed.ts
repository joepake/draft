import type { AppLanguage } from '@kidgate/schema/language';
import { activities as enActivities } from './locales/en/activities';
import { appInventory as enAppInventory } from './locales/en/appInventory';
import { appLimits as enAppLimits } from './locales/en/appLimits';
import { blockedHours as enBlockedHours } from './locales/en/blockedHours';
import { checkIn as enCheckIn } from './locales/en/checkIn';
import { deviceDetail as enDeviceDetail } from './locales/en/deviceDetail';
import { family as enFamily } from './locales/en/family';
import { location as enLocation } from './locales/en/location';
import { messageMonitoring as enMessageMonitoring } from './locales/en/messageMonitoring';
import { leaderboard as enLeaderboard } from './locales/en/leaderboard';
import { nav as enNav } from './locales/en/nav';
import { shared as enShared } from './locales/en/shared';
import { notifications as enNotifications } from './locales/en/notifications';
import { supportReports as enSupportReports } from './locales/en/supportReports';
import { permissions as enPermissions } from './locales/en/permissions';
import { placeAlerts as enPlaceAlerts } from './locales/en/placeAlerts';
import { pairing as enPairing } from './locales/en/pairing';
import { plans as enPlans } from './locales/en/plans';
import { settings as enSettings } from './locales/en/settings';
import { protection as enProtection } from './locales/en/protection';
import { report as enReport } from './locales/en/report';
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
 * added the day those editors were built, `appInventory` on 2026-09-06 with the
 * flagged-app actions. Renaming the module and its three exports would touch
 * every call site for nothing a comment cannot say.
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
 * **What must NOT come through**: anything whose reader differs. `common` is
 * the standing example — the web's is genuinely different copy, not a
 * translation of the app's (`packages/i18n/CLAUDE.md`). An earlier note here
 * put `shared.edit` / `shared.cancel` in that camp and was wrong on the facts:
 * the web's `common` carries three keys, none of them those, so there was
 * nothing for them to disagree with. `shared` crosses. The test is whether the
 * sentence stays true when it crosses; `samePinToast` ends "Drag the map to
 * move the pin", the dashboard has no map, and that one stayed behind as a
 * `dash.*` key.
 *
 * **`nav` was the second standing example and stopped being one on
 * 2026-09-15.** Both packs still have a namespace by that name and they are
 * still different readers — the web's is marketing chrome (`nav.skip`,
 * `nav.privacy`), the app's is the parent tab bar — so a `nav.*` key is now
 * the one case where WHICH TRANSLATOR you call decides what you get. The four
 * section names cross because the dashboard's left menu is that same tab bar:
 * `nav.family` and its three siblings name the same four parts of the same
 * product, and copying them into fourteen web packs is the twin-sentence
 * drift this door exists to stop. The rest of the app's `nav` — `status`,
 * `sos`, every `*Tab` label — is phone anatomy and no web surface may read it.
 *
 * The hazard that leaves is reaching for the wrong translator: `t('nav.family')`
 * is the web pack, which has no such key. It renders the raw key, and
 * `yarn i18n:missing` is what fails on it — it checks every `t()` call against
 * the pack that call actually reads.
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
  appInventory: unknown;
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
  /** The star chart: the same feature, and the same words, on both consoles. */
  leaderboard: unknown;
  /** The push-preference screen: eight alert rows, quiet hours, the footnote. */
  notifications: unknown;
  /** A parent's own filed reports, and the form that files one. */
  supportReports: unknown;
  /** Edit, Cancel, Set, Not set — the words neither `dash.*` nor the web's
   *  `common` carries. */
  shared: unknown;
  /**
   * The four section names only — `family`, `activities`, `reports`,
   * `settings`. The dashboard's left menu is the phone's tab bar; the rest of
   * this namespace is phone anatomy. See the note above on why this one
   * crosses when `common` does not.
   */
  nav: unknown;
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
  /**
   * The weekly report, because `packages/core/domain/reportCopy` is shared and
   * the phone already says every finding. The dashboard used to hand that module
   * a translator over the web pack, which meant the same sentence in two packs —
   * and eleven findings that existed only on the phone printed as raw keys.
   */
  report: unknown;
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
  appInventory: enAppInventory,
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
  leaderboard: enLeaderboard,
  nav: enNav,
  shared: enShared,
  notifications: enNotifications,
  supportReports: enSupportReports,
  permissions: enPermissions,
  protection: enProtection,
  report: enReport,
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
  'appInventory',
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
  /* The star chart — the same feature on both parent surfaces, so the same
     sentences. */
  'leaderboard',
  /* The four section names the dashboard's left menu renders. The phone
     already says them in fourteen languages (`nav.family` and its three
     siblings drive the tab bar), and two parent surfaces naming the same
     section differently is exactly the drift this door exists to stop. */
  'nav',
  /* Push preferences and the support form — two whole screens `apps/dashboard`
     now renders, every sentence of which the phone already says. */
  'notifications',
  /* Generic UI words the web pack simply does not have — Edit, Cancel, Set,
     Not set, the compact duration labels. */
  'shared',
  'supportReports',
  'permissions',
  'protection',
  'report',
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
    appInventory: () => import('./locales/ar/appInventory'),
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
    report: () => import('./locales/ar/report'),
    screenTime: () => import('./locales/ar/screenTime'),
    rewardTask: () => import('./locales/ar/rewardTask'),
    sos: () => import('./locales/ar/sos'),
    timeRequest: () => import('./locales/ar/timeRequest'),
    webFilter: () => import('./locales/ar/webFilter'),
    nav: () => import('./locales/ar/nav'),
    shared: () => import('./locales/ar/shared'),
    notifications: () => import('./locales/ar/notifications'),
    supportReports: () => import('./locales/ar/supportReports'),
    leaderboard: () => import('./locales/ar/leaderboard'),
    videoHistory: () => import('./locales/ar/videoHistory'),
  },
  de: {
    activities: () => import('./locales/de/activities'),
    appInventory: () => import('./locales/de/appInventory'),
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
    report: () => import('./locales/de/report'),
    screenTime: () => import('./locales/de/screenTime'),
    rewardTask: () => import('./locales/de/rewardTask'),
    sos: () => import('./locales/de/sos'),
    timeRequest: () => import('./locales/de/timeRequest'),
    webFilter: () => import('./locales/de/webFilter'),
    nav: () => import('./locales/de/nav'),
    shared: () => import('./locales/de/shared'),
    notifications: () => import('./locales/de/notifications'),
    supportReports: () => import('./locales/de/supportReports'),
    leaderboard: () => import('./locales/de/leaderboard'),
    videoHistory: () => import('./locales/de/videoHistory'),
  },
  es: {
    activities: () => import('./locales/es/activities'),
    appInventory: () => import('./locales/es/appInventory'),
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
    report: () => import('./locales/es/report'),
    screenTime: () => import('./locales/es/screenTime'),
    rewardTask: () => import('./locales/es/rewardTask'),
    sos: () => import('./locales/es/sos'),
    timeRequest: () => import('./locales/es/timeRequest'),
    webFilter: () => import('./locales/es/webFilter'),
    nav: () => import('./locales/es/nav'),
    shared: () => import('./locales/es/shared'),
    notifications: () => import('./locales/es/notifications'),
    supportReports: () => import('./locales/es/supportReports'),
    leaderboard: () => import('./locales/es/leaderboard'),
    videoHistory: () => import('./locales/es/videoHistory'),
  },
  fr: {
    activities: () => import('./locales/fr/activities'),
    appInventory: () => import('./locales/fr/appInventory'),
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
    report: () => import('./locales/fr/report'),
    screenTime: () => import('./locales/fr/screenTime'),
    rewardTask: () => import('./locales/fr/rewardTask'),
    sos: () => import('./locales/fr/sos'),
    timeRequest: () => import('./locales/fr/timeRequest'),
    webFilter: () => import('./locales/fr/webFilter'),
    nav: () => import('./locales/fr/nav'),
    shared: () => import('./locales/fr/shared'),
    notifications: () => import('./locales/fr/notifications'),
    supportReports: () => import('./locales/fr/supportReports'),
    leaderboard: () => import('./locales/fr/leaderboard'),
    videoHistory: () => import('./locales/fr/videoHistory'),
  },
  hi: {
    activities: () => import('./locales/hi/activities'),
    appInventory: () => import('./locales/hi/appInventory'),
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
    report: () => import('./locales/hi/report'),
    screenTime: () => import('./locales/hi/screenTime'),
    rewardTask: () => import('./locales/hi/rewardTask'),
    sos: () => import('./locales/hi/sos'),
    timeRequest: () => import('./locales/hi/timeRequest'),
    webFilter: () => import('./locales/hi/webFilter'),
    nav: () => import('./locales/hi/nav'),
    shared: () => import('./locales/hi/shared'),
    notifications: () => import('./locales/hi/notifications'),
    supportReports: () => import('./locales/hi/supportReports'),
    leaderboard: () => import('./locales/hi/leaderboard'),
    videoHistory: () => import('./locales/hi/videoHistory'),
  },
  id: {
    activities: () => import('./locales/id/activities'),
    appInventory: () => import('./locales/id/appInventory'),
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
    report: () => import('./locales/id/report'),
    screenTime: () => import('./locales/id/screenTime'),
    rewardTask: () => import('./locales/id/rewardTask'),
    sos: () => import('./locales/id/sos'),
    timeRequest: () => import('./locales/id/timeRequest'),
    webFilter: () => import('./locales/id/webFilter'),
    nav: () => import('./locales/id/nav'),
    shared: () => import('./locales/id/shared'),
    notifications: () => import('./locales/id/notifications'),
    supportReports: () => import('./locales/id/supportReports'),
    leaderboard: () => import('./locales/id/leaderboard'),
    videoHistory: () => import('./locales/id/videoHistory'),
  },
  it: {
    activities: () => import('./locales/it/activities'),
    appInventory: () => import('./locales/it/appInventory'),
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
    report: () => import('./locales/it/report'),
    screenTime: () => import('./locales/it/screenTime'),
    rewardTask: () => import('./locales/it/rewardTask'),
    sos: () => import('./locales/it/sos'),
    timeRequest: () => import('./locales/it/timeRequest'),
    webFilter: () => import('./locales/it/webFilter'),
    nav: () => import('./locales/it/nav'),
    shared: () => import('./locales/it/shared'),
    notifications: () => import('./locales/it/notifications'),
    supportReports: () => import('./locales/it/supportReports'),
    leaderboard: () => import('./locales/it/leaderboard'),
    videoHistory: () => import('./locales/it/videoHistory'),
  },
  ja: {
    activities: () => import('./locales/ja/activities'),
    appInventory: () => import('./locales/ja/appInventory'),
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
    report: () => import('./locales/ja/report'),
    screenTime: () => import('./locales/ja/screenTime'),
    rewardTask: () => import('./locales/ja/rewardTask'),
    sos: () => import('./locales/ja/sos'),
    timeRequest: () => import('./locales/ja/timeRequest'),
    webFilter: () => import('./locales/ja/webFilter'),
    nav: () => import('./locales/ja/nav'),
    shared: () => import('./locales/ja/shared'),
    notifications: () => import('./locales/ja/notifications'),
    supportReports: () => import('./locales/ja/supportReports'),
    leaderboard: () => import('./locales/ja/leaderboard'),
    videoHistory: () => import('./locales/ja/videoHistory'),
  },
  ko: {
    activities: () => import('./locales/ko/activities'),
    appInventory: () => import('./locales/ko/appInventory'),
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
    report: () => import('./locales/ko/report'),
    screenTime: () => import('./locales/ko/screenTime'),
    rewardTask: () => import('./locales/ko/rewardTask'),
    sos: () => import('./locales/ko/sos'),
    timeRequest: () => import('./locales/ko/timeRequest'),
    webFilter: () => import('./locales/ko/webFilter'),
    nav: () => import('./locales/ko/nav'),
    shared: () => import('./locales/ko/shared'),
    notifications: () => import('./locales/ko/notifications'),
    supportReports: () => import('./locales/ko/supportReports'),
    leaderboard: () => import('./locales/ko/leaderboard'),
    videoHistory: () => import('./locales/ko/videoHistory'),
  },
  pt: {
    activities: () => import('./locales/pt/activities'),
    appInventory: () => import('./locales/pt/appInventory'),
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
    report: () => import('./locales/pt/report'),
    screenTime: () => import('./locales/pt/screenTime'),
    rewardTask: () => import('./locales/pt/rewardTask'),
    sos: () => import('./locales/pt/sos'),
    timeRequest: () => import('./locales/pt/timeRequest'),
    webFilter: () => import('./locales/pt/webFilter'),
    nav: () => import('./locales/pt/nav'),
    shared: () => import('./locales/pt/shared'),
    notifications: () => import('./locales/pt/notifications'),
    supportReports: () => import('./locales/pt/supportReports'),
    leaderboard: () => import('./locales/pt/leaderboard'),
    videoHistory: () => import('./locales/pt/videoHistory'),
  },
  ru: {
    activities: () => import('./locales/ru/activities'),
    appInventory: () => import('./locales/ru/appInventory'),
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
    report: () => import('./locales/ru/report'),
    screenTime: () => import('./locales/ru/screenTime'),
    rewardTask: () => import('./locales/ru/rewardTask'),
    sos: () => import('./locales/ru/sos'),
    timeRequest: () => import('./locales/ru/timeRequest'),
    webFilter: () => import('./locales/ru/webFilter'),
    nav: () => import('./locales/ru/nav'),
    shared: () => import('./locales/ru/shared'),
    notifications: () => import('./locales/ru/notifications'),
    supportReports: () => import('./locales/ru/supportReports'),
    leaderboard: () => import('./locales/ru/leaderboard'),
    videoHistory: () => import('./locales/ru/videoHistory'),
  },
  tr: {
    activities: () => import('./locales/tr/activities'),
    appInventory: () => import('./locales/tr/appInventory'),
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
    report: () => import('./locales/tr/report'),
    screenTime: () => import('./locales/tr/screenTime'),
    rewardTask: () => import('./locales/tr/rewardTask'),
    sos: () => import('./locales/tr/sos'),
    timeRequest: () => import('./locales/tr/timeRequest'),
    webFilter: () => import('./locales/tr/webFilter'),
    nav: () => import('./locales/tr/nav'),
    shared: () => import('./locales/tr/shared'),
    notifications: () => import('./locales/tr/notifications'),
    supportReports: () => import('./locales/tr/supportReports'),
    leaderboard: () => import('./locales/tr/leaderboard'),
    videoHistory: () => import('./locales/tr/videoHistory'),
  },
  vi: {
    activities: () => import('./locales/vi/activities'),
    appInventory: () => import('./locales/vi/appInventory'),
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
    report: () => import('./locales/vi/report'),
    screenTime: () => import('./locales/vi/screenTime'),
    rewardTask: () => import('./locales/vi/rewardTask'),
    sos: () => import('./locales/vi/sos'),
    timeRequest: () => import('./locales/vi/timeRequest'),
    webFilter: () => import('./locales/vi/webFilter'),
    nav: () => import('./locales/vi/nav'),
    shared: () => import('./locales/vi/shared'),
    notifications: () => import('./locales/vi/notifications'),
    supportReports: () => import('./locales/vi/supportReports'),
    leaderboard: () => import('./locales/vi/leaderboard'),
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
