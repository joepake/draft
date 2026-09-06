import { createActivityRepository } from '@kidgate/core/repositories/activity';
import { createControlRepository } from '@kidgate/core/repositories/control';
import { createDeviceRepository } from '@kidgate/core/repositories/device';
import { createFamilyRepository } from '@kidgate/core/repositories/family';
import { createFamilyReportRepository } from '@kidgate/core/repositories/familyReport';
import { createLocationHistoryRepository } from '@kidgate/core/repositories/locationHistory';
import { createChildRepository } from '@kidgate/core/repositories/child';
import { createChildRulesRepository } from '@kidgate/core/repositories/childRules';
import { createFamilyPlacesRepository } from '@kidgate/core/repositories/familyPlaces';
import { createParentInviteRepository } from '@kidgate/core/repositories/parentInvite';
import { createLeaderboardRepository } from '@kidgate/core/repositories/leaderboard';
import { createScreenTimeBoardRepository } from '@kidgate/core/repositories/screenTimeBoard';
import { createRewardTaskRepository } from '@kidgate/core/repositories/rewardTask';
import { createSafetyCheckInRepository } from '@kidgate/core/repositories/safetyCheckIn';
import { createSosAlertRepository } from '@kidgate/core/repositories/sosAlert';
import { createSubscriptionRepository } from '@kidgate/core/repositories/subscription';
import { createTimeRequestRepository } from '@kidgate/core/repositories/timeRequest';
import { createSiteRequestRepository } from '@kidgate/core/repositories/siteRequest';
import { createUsageDayRepository } from '@kidgate/core/repositories/usageDay';
import { createWebHistoryRepository } from '@kidgate/core/repositories/webHistory';
import { createVideoHistoryRepository } from '@kidgate/core/repositories/videoHistory';
import { createAppFlagDismissalRepository } from '@kidgate/core/repositories/appFlagDismissal';
import {
  createAppInventoryRepository,
  getAppInventory as readAppInventory,
} from '@kidgate/core/repositories/appInventory';
import { getAppCategories as readAppCategories } from '@kidgate/core/repositories/appCategory';
import { fetchLatestBuilds } from '@kidgate/core/repositories/releaseConfig';
import { createApiAdapter } from './api.js';
import { createClockAdapter } from './clock.js';
import { createFirestoreAdapter } from './firestore.js';
import { wrapWithReadCounter } from './readCounter.js';
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

/*
 * Wrapped in dev builds only — `wrapWithReadCounter` hands the port back
 * untouched in a production bundle. Here rather than at any call site
 * because this is the one adapter instance: everything below takes `db`.
 * A tab left open is this product's longest-lived reader, which is what
 * makes this surface worth counting. `docs/DATA_RETENTION.md` §9.
 */
const db = wrapWithReadCounter(createFirestoreAdapter());
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
export const childRulesRepository = createChildRulesRepository({
  api,
  /*
   * A thunk, not the repository itself: `controlRepository` is declared
   * further down this file, so passing the value here would read it before
   * its initialiser has run. The arrow defers the lookup to call time.
   */
  controls: {
    updateControls: (userId, deviceId, controls) =>
      controlRepository.updateControls(userId, deviceId, controls),
  },
});
/* Places are family-level and the write is whole-list: one endpoint, no db. */
export const familyPlacesRepository = createFamilyPlacesRepository({ api });
/*
 * Minting an invite and answering a join request need only a signed-in parent
 * — no device credential, no web step-up. The code alone grants nothing: the
 * owner still approves the request it produces.
 */
export const parentInviteRepository = createParentInviteRepository({ api });
export const leaderboardRepository = createLeaderboardRepository({ db });
export const screenTimeBoardRepository = createScreenTimeBoardRepository({ db });
export const rewardTaskRepository = createRewardTaskRepository({ db, api });
export const sosAlertRepository = createSosAlertRepository({ db });
export const safetyCheckInRepository = createSafetyCheckInRepository({
  db,
  activities: activityRepository,
});
export const usageDayRepository = createUsageDayRepository({ db, clock });
export const webHistoryRepository = createWebHistoryRepository({ db });
export const videoHistoryRepository = createVideoHistoryRepository({ db });

/*
 * The app inventory, read only.
 *
 * The read half. Bare functions rather than a repository object because neither
 * has a collaborator — same shape as `getAppCategories` beside it. The cascade
 * half is `appInventoryRepository` below, built since 2026-09-03 because this
 * surface now unpairs devices too.
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
 * **The eleven cascades, and why an empty list stopped being honest.**
 *
 * It was empty until 2026-09-03 with a comment saying the dashboard had no
 * delete-device action. It has one now, so the list has to be the phone's —
 * every collection, in particular the five that live *under* the device
 * document, which Firestore leaves behind when the parent goes. A partial list
 * is the 2026-08-23 defect exactly: an unpaired television reporting `0p used`
 * beside a six-minute YouTube row, the total from the deleted document and the
 * row from the survivors (`docs/BACKLOG.md`).
 *
 * Kept in step with `apps/mobile`'s composition root by hand. Nothing tests
 * that the two lists agree, which is the reason this comment names the count.
 */
export const appInventoryRepository = createAppInventoryRepository({ db });
/**
 * The parent's answers to flagged apps — read AND written here, unlike the
 * inventory beside it, because the list is the parent's own opinion and no
 * agent publishes or reads it (`@kidgate/schema/appFlagDismissal`).
 */
export const appFlagDismissalRepository = createAppFlagDismissalRepository({
  db,
});

export const deviceRepository = createDeviceRepository({
  db,
  api,
  clock,
  cascades: [
    timeRequestRepository,
    siteRequestRepository,
    rewardTaskRepository,
    safetyCheckInRepository,
    sosAlertRepository,
    activityRepository,
    // The five under the device document itself.
    usageDayRepository,
    locationHistoryRepository,
    webHistoryRepository,
    videoHistoryRepository,
    appInventoryRepository,
    // Device-scoped answers only — a child-scoped document outlives the
    // machine on purpose (`createAppFlagDismissalRepository`).
    appFlagDismissalRepository,
  ],
});
