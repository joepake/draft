import { createActivityRepository } from '@kidgate/core/repositories/activity';
import { createControlRepository } from '@kidgate/core/repositories/control';
import { createDeviceRepository } from '@kidgate/core/repositories/device';
import { createFamilyRepository } from '@kidgate/core/repositories/family';
import { createFamilyReportRepository } from '@kidgate/core/repositories/familyReport';
import { createLocationHistoryRepository } from '@kidgate/core/repositories/locationHistory';
import { createChildRepository } from '@kidgate/core/repositories/child';
import { createChildRulesRepository } from '@kidgate/core/repositories/childRules';
import { createLeaderboardRepository } from '@kidgate/core/repositories/leaderboard';
import { createRewardTaskRepository } from '@kidgate/core/repositories/rewardTask';
import { createSafetyCheckInRepository } from '@kidgate/core/repositories/safetyCheckIn';
import { createSosAlertRepository } from '@kidgate/core/repositories/sosAlert';
import { createSubscriptionRepository } from '@kidgate/core/repositories/subscription';
import { createTimeRequestRepository } from '@kidgate/core/repositories/timeRequest';
import { createSiteRequestRepository } from '@kidgate/core/repositories/siteRequest';
import { createUsageDayRepository } from '@kidgate/core/repositories/usageDay';
import { createWebHistoryRepository } from '@kidgate/core/repositories/webHistory';
import { getAppInventory as readAppInventory } from '@kidgate/core/repositories/appInventory';
import { getAppCategories as readAppCategories } from '@kidgate/core/repositories/appCategory';
import { fetchLatestBuilds } from '@kidgate/core/repositories/releaseConfig';
import { createApiAdapter } from './api.js';
import { createClockAdapter } from './clock.js';
import { createFirestoreAdapter } from './firestore.js';
import { createStorageAdapter } from './storage.js';

/**
 * Composition root: the one place this app decides which implementation each
 * repository gets.
 *
 * `apps/mobile/src/adapters/repositories.ts` is the same file over React
 * Native. Everything above this line is shared with the app; everything below
 * is the browser. That the two files can differ only in their four adapters is
 * the whole claim the ports layer makes.
 *
 * What this replaced: the dashboard used to read Firestore directly and
 * hand-roll `fetch` calls to the control endpoints, in parallel with the
 * repositories the app already had — collection names spelled out as string
 * literals in one app and derived from `@kidgate/schema/paths` in the other.
 */

const db = createFirestoreAdapter();
const api = createApiAdapter();
const storage = createStorageAdapter();

/**
 * Exported as well as injected: a screen that needs today's date key must get
 * it from the same clock the repositories counted the day with, or the chart
 * and the row it highlights disagree either side of local midnight.
 */
export const clock = createClockAdapter();

// Built first: safetyCheckIn takes it as a collaborator.
export const activityRepository = createActivityRepository({ db });

export const locationHistoryRepository = createLocationHistoryRepository({ db, clock });
export const timeRequestRepository = createTimeRequestRepository({ db, api, clock });
/* No `clock`: the cooldown this one obeys is the server's — see the repository. */
export const siteRequestRepository = createSiteRequestRepository({ db, api });
export const childRepository = createChildRepository({ db });
export const childRulesRepository = createChildRulesRepository({ api });
export const leaderboardRepository = createLeaderboardRepository({ db });
export const rewardTaskRepository = createRewardTaskRepository({ db, api });
export const sosAlertRepository = createSosAlertRepository({ db });
export const safetyCheckInRepository = createSafetyCheckInRepository({
  db,
  activities: activityRepository,
});
export const usageDayRepository = createUsageDayRepository({ db, clock });
export const webHistoryRepository = createWebHistoryRepository({ db });

/*
 * The app inventory, read only.
 *
 * No cascade half here: this surface never unpairs a device (`cascades: []`
 * below says so for the same reason), so the factory that carries
 * `deleteForDevice` stays in `apps/mobile`. Bare functions rather than a
 * repository object because neither has a collaborator — same shape as
 * `getAppCategories` beside it.
 */
export const getAppInventory = (userId, deviceId) =>
  readAppInventory(db, userId, deviceId);
export const getAppCategories = packageNames => readAppCategories(db, packageNames);
/*
 * Same shape again, and shared with `apps/mobile`'s parent surface: what the
 * newest published build is per platform, so this page can tell a device that
 * is behind from one that is fine. Two world-readable config documents, no
 * collaborators, no state.
 */
export const getLatestBuilds = () => fetchLatestBuilds(db);
export const familyRepository = createFamilyRepository({ db, storage });
export const familyReportRepository = createFamilyReportRepository({ db, api });
export const subscriptionRepository = createSubscriptionRepository({ db, api });

export const controlRepository = createControlRepository({
  db,
  api,
  clock,
  locationHistory: locationHistoryRepository,
});

/**
 * No cascades. The mobile app passes nine, because removing a device there has
 * to clean up everything hanging off it — including the four subcollections
 * that live *under* the device document, which Firestore leaves behind when the
 * parent goes. The dashboard has no delete-device action, and an empty list is
 * the honest way to say so; a populated one would claim a capability this
 * surface does not offer.
 */
export const deviceRepository = createDeviceRepository({
  db,
  api,
  clock,
  cascades: [],
});
