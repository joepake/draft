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
 * 3. **One per screen, and the hour band is the stated exception.** Enforced by
 *    construction — a screen calls this once — rather than by a rule this
 *    module could check. The 30-day trend still has no id: it sits on the same
 *    scroll as the app ranking, which already carries the offer, and a page
 *    selling three times is an advert whatever each line says. The band was in
 *    that sentence until 2026-09-12 and could not stay. An empty band renders
 *    `timelinePending` — "no sample yet" — to a family the server writes no
 *    `usageDays` for at all (`docs/PRICING.md` §4), so the sentence promises a
 *    reading that is never coming. A second offer on one scroll is worse than
 *    nothing; a wait that never ends is worse than both.
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
  | 'messageAlerts'
  | 'webFilterAdvanced'
  | 'weeklyReport'
  | 'usageTimeline'
  | 'rewardTaskCap';

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
  /*
   * The two ids whose screen a free family *can* open and act on, which is why
   * they are here rather than absent like per-app limits or place alerts: those
   * sit behind a locked device-detail card that already carries the crown and
   * the route to Plans, so a teaser inside them would never be drawn. These two
   * are reachable — the web filter is a free control key (`FreeTier.ts`) whose
   * categories and lists are not, and the weekly report is a Reports-tab row
   * whose generate button is refused by `requirePremiumAccess`
   * (`functions/http/familyReport.js`). Both were a control that bounced or a
   * button that failed, with nothing on screen saying why.
   */
  webFilterAdvanced: 'plans.teaserWebFilterAdvanced',
  weeklyReport: 'plans.teaserWeeklyReport',
  /*
   * The hour band, and the one id refused on a **capability** as well as on a
   * plan. An iPhone can never report a timeline whatever the family pays —
   * Screen Time hands out cumulative thresholds and nothing finer
   * (`./usageTimeline`) — so the two band components draw this only where
   * `timelineAvailability` answers `pending`, and leave `unsupported` its own
   * sentence. Selling a band to a family whose device cannot draw one is the
   * one thing worse than the empty wait this replaces.
   */
  usageTimeline: 'plans.teaserUsageTimeline',
  /*
   * The only id that is a **cap** rather than a feature the free tier lacks.
   * Reward tasks are free; the eleventh active one is not
   * (`resolveRewardTaskCapTeaser`).
   */
  rewardTaskCap: 'plans.teaserRewardTasks',
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
 * The tail row under a free family's top three — and the whole card on a day
 * the free tier was never promised.
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
 *
 * ## The older day, which has no tail at all
 *
 * `dayIsToday: false` is the second shape, and it is structural rather than
 * proof-backed: the free tier's three ride the device document and carry only
 * today (`docs/PRICING.md` §4), so a past day has no counter to lead with and
 * no rows to sit under — the card is empty, and until this existed both parent
 * surfaces filled it with a bare sentence and no way to act on it.
 *
 * **`rowCount` is what keeps rule 1 true.** A family that downgraded still has
 * its old `usageDays` documents, and those rows are a reading they are entitled
 * to; offering over them would be selling detail already on screen. A teaser
 * only ever replaces an empty card.
 */
export function resolveTopAppsTeaser(input: {
  hasFullAccess: boolean;
  source: TodayTopAppsSource;
  other: DeviceTopAppsOther | null | undefined;
  /** The day on screen. Defaults to today — the tail-row case. */
  dayIsToday?: boolean;
  /** Rows the card is already drawing. A teaser never covers a reading. */
  rowCount?: number;
  /**
   * The remainder the **card itself** is already drawing, for a device whose
   * document carries no `topAppsOtherToday`.
   *
   * Read only when that field is absent, never when it says zero: absent means
   * nothing measured it — a `syncChildAgent` older than 2026-09-10 wrote no
   * such field, so every device it has not reported to since carries none —
   * while zero is a measurement, and the three really were the whole day.
   *
   * Not an invention. Both parent surfaces already print this number as an
   * "Other apps" row from `otherAppsMinutes(total, rows)` — the day's total
   * less the listed rows — which left the screen in exactly the state this fold
   * exists to prevent: a visible remainder the parent cannot see inside, with
   * nothing saying why or offering the way in. The teaser takes that row's
   * place and says both. Minutes only: subtraction cannot say how many apps are
   * behind it, and `apps` absent already means "cannot say how many".
   */
  fallbackOtherMinutes?: number;
}): PremiumTeaser | null {
  const {
    hasFullAccess,
    source,
    other,
    dayIsToday = true,
    rowCount = 0,
    fallbackOtherMinutes = 0,
  } = input;
  if (hasFullAccess) {
    return null;
  }

  if (!dayIsToday) {
    return rowCount > 0
      ? null
      : { id: 'topApps', proof: null, bodyKey: BODY_KEYS.topApps, ctaKey: CTA_KEY };
  }

  if (source !== 'device') {
    return null;
  }

  /*
   * The server's number when there is one, the card's own subtraction when the
   * field was never written. `measured` is what keeps the two apart: a stored
   * zero ends the offer here, an absent field falls through to the row the
   * screen is already showing.
   */
  const measured = typeof other?.minutes === 'number';
  const minutes = measured ? other!.minutes : Math.round(fallbackOtherMinutes);
  if (!Number.isFinite(minutes) || minutes <= 0) {
    return null;
  }

  const apps = measured ? other?.apps : undefined;
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
 * The one teaser drawn over a screen **full** of the family's own data, and the
 * only one with a wall behind it rather than an absence.
 *
 * Reward tasks are free (`docs/PRICING.md` §5 — a child who experiences KidGate
 * only as punishment is what makes a family uninstall rather than lapse), and
 * capped instead: ten active, twenty on Premium. `functions/http/rewardTasks.js`
 * enforces it and refuses the eleventh create with `rewardTask/too-many` — a
 * refusal both consoles rendered as a toast *after* the parent had typed the
 * task, with nothing beforehand saying a limit existed.
 *
 * **Only at the wall.** Below the cap there is nothing true to say: a family
 * with three tasks is missing nothing, and a standing "Premium allows more" over
 * a working screen is an advert. `activeCount` is `open` plus `claimed` — the
 * two statuses the server counts; including `approved` would draw the wall at a
 * number nothing refuses at.
 *
 * The proof carries the count, not the cap: it is the family's own measurement,
 * and a sentence naming "10" would need re-translating in fourteen packs the day
 * the cap moves.
 */
export function resolveRewardTaskCapTeaser(input: {
  hasFullAccess: boolean;
  /** Tasks `open` or `claimed` right now. */
  activeCount: number;
  /** The free cap — `REWARD_FREE_MAX_ACTIVE_TASKS_PER_DEVICE`. */
  freeCap: number;
}): PremiumTeaser | null {
  const { hasFullAccess, activeCount, freeCap } = input;
  if (hasFullAccess || activeCount < freeCap) {
    return null;
  }

  return {
    id: 'rewardTaskCap',
    proof: {
      key: 'plans.teaserProofRewardTasks',
      params: { count: activeCount },
    },
    bodyKey: BODY_KEYS.rewardTaskCap,
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
