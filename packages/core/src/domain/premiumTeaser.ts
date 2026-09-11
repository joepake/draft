/**
 * Where a free family is told what Premium would add, and on what evidence.
 *
 * ## Why this is a module and not a sentence in each screen
 *
 * The free tier's rule is **count free, detail paid** (`docs/PRICING.md` §5):
 * a parent sees "12 sites blocked this week" and buys Premium to learn which
 * twelve. That only works if the number and the offer arrive together. Until
 * this existed they did not — exactly one screen in the product said anything
 * (`usage.topAppsFreeHint`), and every other free-limited surface rendered a
 * bare empty state. A web-history screen with no rows reads as a filter that
 * stopped working, not as a feature behind a paywall, on the tier whose whole
 * visible output is that number.
 *
 * Two parent surfaces render these (`apps/mobile` and `apps/dashboard`, rule
 * 10), so the decision of *whether* to offer, and *what evidence* to offer it
 * on, is made once here and drawn twice.
 *
 * ## The three rules the decision encodes
 *
 * 1. **Never over data that exists.** These return copy for a list's tail or
 *    for an empty screen. Nothing here blurs, masks or withholds a reading the
 *    family is entitled to — a free family's own numbers are the argument, and
 *    hiding them removes the reason to upgrade rather than creating one.
 * 2. **A proof-backed teaser needs its proof.** `blockedSites` at zero is a
 *    measurement, and selling web history to a family whose filter has refused
 *    nothing is selling detail about an empty week. Those ids answer `null`
 *    until there is a number, and the screen keeps its ordinary empty state.
 * 3. **One per screen.** Enforced by construction — a screen calls this once —
 *    rather than by a rule this module could check. It is also why the two
 *    chart surfaces have no id: the hour band and the 30-day trend sit on the
 *    same scroll as the app ranking, which already carries the offer, and a
 *    page selling three times is an advert whatever each line says.
 *
 * ## Structural versus proof-backed
 *
 * A **proof-backed** id has a free-tier counter measuring exactly what the paid
 * tier would detail, so the offer leads with it. A **structural** id has none,
 * because the free tier does not observe the thing at all: no free family has a
 * location trail, a video history or a per-child report to count. Those still
 * offer, because the alternative is an empty screen that explains nothing — but
 * they lead with what the screen is for rather than with a number.
 *
 * The bodies are the §4 plan table said one row at a time, at the moment the
 * row is missed. That is the point of the placement: a parent weighing $6.99
 * against a comparison table is guessing, and the same parent looking at a
 * screen that says "two hours across seven more apps — Premium names them" is
 * not.
 */

import type { DeviceTopAppsOther, DeviceWeekCounters } from '@kidgate/schema/device';
import type { TodayTopAppsSource } from './todayTopApps';
import { isWeekCountersCurrent } from './weekCounters';

export type PremiumTeaserId =
  | 'topApps'
  | 'webHistory'
  | 'videoHistory'
  | 'locationTrail'
  | 'activityWindow'
  | 'childReport'
  | 'messageAlerts';

/**
 * The free-tier reading the offer leads with, or `null` on a structural id.
 *
 * `params` carries raw numbers. A surface formats `minutes` with its own
 * duration helper before rendering — the phone and the dashboard write "1h 20m"
 * differently, and a module that imports no platform cannot pick.
 */
export interface PremiumTeaserProof {
  key: string;
  params: { count?: number; minutes?: number };
}

export interface PremiumTeaser {
  id: PremiumTeaserId;
  /** The free reading, when there is one. */
  proof: PremiumTeaserProof | null;
  /** What Premium adds here, one sentence, from `docs/PRICING.md` §4. */
  bodyKey: string;
  /** The shared call to action. */
  ctaKey: string;
}

const CTA_KEY = 'plans.teaserCta';

/**
 * One body per id, and each is its §4 row rather than a slogan.
 *
 * Kept as a table so the set is visible in one place: a body that stops being
 * true when the plan table moves is found by reading this, not by grepping nine
 * screens. `docs/PRICING.md` §8 is the list of what has to move together then.
 */
const BODY_KEYS: Record<PremiumTeaserId, string> = {
  topApps: 'plans.teaserTopApps',
  webHistory: 'plans.teaserWebHistory',
  videoHistory: 'plans.teaserVideoHistory',
  locationTrail: 'plans.teaserLocationTrail',
  activityWindow: 'plans.teaserActivityWindow',
  childReport: 'plans.teaserChildReport',
  messageAlerts: 'plans.teaserMessageAlerts',
};

/**
 * The cadence sentence, for the one place a parent compares plans rather than
 * misses a feature.
 *
 * §3 is that the paywall runs along cadence — "Free: the same controls, synced
 * slowly. Premium: live." It is the most honest single reason to upgrade and
 * the least useful thing to repeat on nine screens, so it is exported for a
 * summary surface to render once and is deliberately part of no teaser.
 */
export const PREMIUM_LIVE_NOTE_KEY = 'plans.teaserLiveNote';

/**
 * The tail row under a free family's top three.
 *
 * Four conditions, each removing a way of lying:
 *
 * - **`hasFullAccess`** — a paying family is looking at the full ranking and
 *   has nothing to be offered.
 * - **`source !== 'device'`** — the rows came from `usageDays`, so this is the
 *   ten-row premium list and there is no free tail to describe. The same guard
 *   the existing hint uses (`docs/PRICING.md` §4, `topAppsFreeHint`).
 * - **`other.minutes > 0`** — zero is a measurement: the three really were the
 *   whole day, and a row claiming otherwise invents the feature it is selling.
 * - **`apps > 0` decides which sentence.** A remainder spread across apps too
 *   small to rank is real time and no countable list; `apps` absent (a capped
 *   ranking) takes the same minutes-only sentence rather than guessing.
 */
export function resolveTopAppsTeaser(input: {
  hasFullAccess: boolean;
  source: TodayTopAppsSource;
  other: DeviceTopAppsOther | null | undefined;
}): PremiumTeaser | null {
  const { hasFullAccess, source, other } = input;
  if (hasFullAccess || source !== 'device') {
    return null;
  }

  const minutes = other?.minutes ?? 0;
  if (!Number.isFinite(minutes) || minutes <= 0) {
    return null;
  }

  const apps = other?.apps;
  const countable = typeof apps === 'number' && apps > 0;

  return {
    id: 'topApps',
    proof: {
      key: countable ? 'plans.teaserProofOtherApps' : 'plans.teaserProofOtherMinutes',
      params: countable ? { count: apps, minutes } : { minutes },
    },
    bodyKey: BODY_KEYS.topApps,
    ctaKey: CTA_KEY,
  };
}

/**
 * The offer that stands in for an empty screen a free family cannot fill.
 *
 * `weekCounters` is passed for the one id with a counter of its own —
 * `webHistory`, whose free number is the filter's refusals for the week. It is
 * read through `isWeekCountersCurrent`, so a device that has been off for a
 * fortnight offers nothing rather than selling history against a window that
 * ended before the parent was looking: a stale count rendered as "this week" is
 * the failure that function exists to prevent, and it is worse here, where the
 * number is the whole argument.
 *
 * Every other id is structural and offers whenever the family is on the free
 * tier — the screen is empty either way, and an empty screen that says why is
 * strictly more honest than one that does not.
 */
export function resolveLockedTeaser(input: {
  id: Exclude<PremiumTeaserId, 'topApps'>;
  hasFullAccess: boolean;
  weekCounters?: DeviceWeekCounters | null;
  todayKey?: string;
}): PremiumTeaser | null {
  const { id, hasFullAccess, weekCounters, todayKey } = input;
  if (hasFullAccess) {
    return null;
  }

  const teaser: PremiumTeaser = {
    id,
    proof: null,
    bodyKey: BODY_KEYS[id],
    ctaKey: CTA_KEY,
  };

  if (id !== 'webHistory') {
    return teaser;
  }

  const blocked = weekCounters?.blockedSites ?? 0;
  const current =
    todayKey === undefined ? false : isWeekCountersCurrent(weekCounters, todayKey);
  if (!current || blocked <= 0) {
    /*
     * Nothing refused this week, or a window too old to name. The screen keeps
     * its own empty state, which already allows that the filter may simply have
     * had nothing to stop — a truer sentence than an upsell would be here.
     */
    return null;
  }

  return {
    ...teaser,
    proof: { key: 'plans.teaserProofBlocked', params: { count: blocked } },
  };
}
