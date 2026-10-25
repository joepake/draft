/**
 * What each control card SAYS it is set to, and what its button offers.
 *
 * The grid itself — which cards exist, their copy, their icons, the rule that
 * greys one out — is `./deviceDetailActions`. This is the other half: given the
 * device's own documents, the **state** each card reports. "120", "Off", "Not
 * set", "Waiting", and the verb under it: Edit limit, Set up, Turn on, View.
 *
 * **Moved out of `apps/mobile` on 2026-09-16, when `apps/dashboard` grew the
 * same grid.** It was written twice there already — `useDeviceDetailScreen`'s
 * `getActionQuickInfo` and `useChildControlCenter`'s — so a third copy in the
 * browser was not the first duplicate, it was the one that made the drift
 * certain. The dashboard's cards drew the feature's description and nothing
 * about the machine, so a parent could not tell a two-hour daily limit from no
 * limit at all. Same move, and the same reason, as the grid beside it.
 *
 * Three things deliberately did NOT move, because they are the phone card's
 * chrome rather than the device's state: the detail lines under the value, the
 * `alertText` ribbon, and the progress bar. Each is composed from figures the
 * caller already formats in its own conventions, and each surface has a
 * different amount of room for them.
 *
 * Keys, never sentences (root rule 1). `count` rides along for the caller's
 * plural: every `unitKey` here is given `{ count }`, and the ones with no
 * placeholder ignore it.
 *
 * ## Absent is not zero
 *
 * Every optional fact below means "this surface did not ask", and a card whose
 * fact is absent returns `null` — the caller then shows the feature's
 * description, the way both consoles did before this existed. It is the same
 * rule the free-tier counters obey (`.claude/rules/child-agent-shared.md`), and
 * it is not theoretical: the dashboard's child hub subscribes to no per-child
 * SOS, place or app-install feed, and defaulting those to `0` printed "No
 * alerts", "No places" and "Unavailable" over three features that were working.
 * A count of `0` is a measurement and still renders.
 */

import type { Device } from '@kidgate/schema/device';

import { supportsTamperAlerts } from './alertSupport';
import { dailyLimitOrNone } from './dailyLimit';
import { getProtectionSummaryKeys, type ProtectionLevel } from './protectionStatus';

/**
 * - `active` — the rule is on, the feed has something: the ordinary case.
 * - `idle` — off, not set, nothing yet: the resting state of a control a
 *   parent has not used. Quiet on both consoles.
 * - `attention` — asks the parent for something now: protection down, an
 *   unanswered SOS, a running pause, a Check-In waiting. Coloured on both.
 *
 * `idle` was split out of `attention` on 2026-10-25. One tone for both meant
 * the phone drew "Protection inactive" as quietly as "Off", and the dashboard
 * drew every "Off" in amber.
 */
export type ControlCardTone = 'active' | 'idle' | 'attention' | 'roadmap';

export interface ControlCardStatus {
  /**
   * The headline figure, when the state is a quantity. `null` when the state
   * is a word — then `valueKey` names it.
   */
  count: number | null;
  /**
   * The count is a floor, not a total — render it as `12+`.
   *
   * Only the web-history card produces this: the fetch may have stopped
   * part-way through the day, and claiming a total it cannot see is worse than
   * admitting the reading is partial.
   */
  countCapped: boolean;
  /** The word, when `count` is null. */
  valueKey: string | null;
  /** What the count is a count OF, or null for a number that is its own sentence. */
  unitKey: string | null;
  tone: ControlCardTone;
  /** The verb under the card. */
  actionLabelKey: string;
}

/** The device controls these states are read from. */
export interface ControlStateControls {
  dailyLimitMinutes?: number | null;
  scheduleEnabled?: boolean;
  scheduleWindows?: readonly unknown[];
  appLimits?: readonly unknown[] | null;
  blockedAppsConfigured?: boolean;
  blockedAppCount?: number;
  blockedCategoryCount?: number;
  appBlockingEnabled?: boolean;
  webFilterEnabled?: boolean;
  videoHistoryEnabled?: boolean;
  locationSharingEnabled?: boolean;
  /** Epoch ms a browsing pause runs until, read against `ControlStateFacts.nowMs`. */
  browsingPausedUntil?: number | null;
}

export interface ControlStateFacts {
  controls: ControlStateControls;
  /** Every reward task on the device — the card reports the set, not the open ones. */
  rewardTaskCount?: number;
  sosActiveCount?: number;
  sosTotalCount?: number;
  placeCount?: number;
  /** The newest check-in's status, or null when the device has never had one. */
  checkInStatus?: 'pending' | 'safe' | 'missed' | null;
  /** The newest recorded day. Null when nothing has been recorded. */
  webHistory?: { sites: number; capped: boolean } | null;
  /**
   * Whether a position has arrived, and whether it is old enough to distrust.
   *
   * Staleness is the caller's to decide: the phone measures it against the
   * background update interval it negotiated with the device, which no browser
   * knows.
   */
  hasLocationFix?: boolean;
  locationStale?: boolean;
  /**
   * The install feed and the app list are two probes. The card reports the feed
   * first ("Monitoring on"); a machine that only lists what is installed — the
   * television — reads "Lists installed apps", never a monitoring it lacks.
   */
  reportsAppInstalls?: boolean;
  listsInstalledApps?: boolean;
  /**
   * `Device.parentBlockedApps.length` — a parent's Blocks from the console,
   * over a set the sum. Root, not `controls`, so it arrives as a fact; absent
   * is none. Counted whatever the switch says, as the agents enforce them.
   */
  parentBlockedCount?: number;
  /**
   * `getProtectionSummaryKeys(device).level` — the same verdict the device hero
   * and the Protection Alerts screen read, so the card cannot say "Watching"
   * over a device whose grant was switched off. Over a set, the worst level
   * among the devices that file tamper alerts.
   *
   * Absent keeps the card's old answer rather than going silent: a console
   * that has not been taught this fact would otherwise lose the card to the
   * "Coming soon" fallback. Feeding it is each console's job.
   */
  protectionLevel?: ProtectionLevel;
  /** From `resolveMessageMonitoringSummary`, which already answers in keys. */
  messageSummary?: { valueKey: string; tone: ControlCardTone } | null;
  /** False on a machine whose watches are recorded by the browser extension. */
  supportsVideoHistory?: boolean;
  /**
   * `videoHistoryAwaitingGrant` — an Android phone whose reader lacks the
   * notification-access grant. Absent means nothing is known to be missing.
   */
  videoHistoryAwaitingGrant?: boolean;
  /**
   * The reading console's own clock, for the one card whose value is a
   * countdown.
   *
   * Passed rather than read: this module is pure, and the number is what the
   * PARENT is looking at — the device enforces the same pause against its own
   * server-corrected clock (`./contentFilterPolicy.isBrowsingPaused`). Absent
   * is "this surface did not ask", as everywhere else here, so the card keeps
   * the feature's description rather than reporting a pause it cannot time.
   */
  nowMs?: number;
}

function counted(
  count: number,
  unitKey: string | null,
  tone: ControlCardTone,
  actionLabelKey: string,
  countCapped = false,
): ControlCardStatus {
  return { count, countCapped, valueKey: null, unitKey, tone, actionLabelKey };
}

function worded(
  valueKey: string,
  tone: ControlCardTone,
  actionLabelKey: string,
): ControlCardStatus {
  return {
    count: null,
    countCapped: false,
    valueKey,
    unitKey: null,
    tone,
    actionLabelKey,
  };
}

/**
 * One card's state, or `null` for an action with none to report.
 *
 * `null` is the honest answer for a card that is a door rather than a switch —
 * the caller falls back to the action's own description, which is what both
 * consoles showed before this existed.
 */
export function resolveControlCardStatus(
  actionId: string,
  facts: ControlStateFacts,
): ControlCardStatus | null {
  const controls = facts.controls;

  switch (actionId) {
    case 'daily-limit': {
      // A stored full day is none (`dailyLimitOrNone`). Unset says "Not set",
      // the short word its neighbours use when off — "No limit" at the
      // value's size outweighed every card beside it (2026-10-24).
      const minutes = dailyLimitOrNone(controls.dailyLimitMinutes) ?? 0;
      return minutes > 0
        ? counted(
            minutes,
            'deviceDetail.minsPerDay',
            'active',
            'deviceDetail.editLimit',
          )
        : worded('shared.notSet', 'idle', 'deviceDetail.setLimit');
    }

    case 'schedule': {
      const windows = controls.scheduleWindows?.length ?? 0;
      return controls.scheduleEnabled
        ? counted(
            windows,
            'deviceDetail.timeRanges',
            'active',
            'deviceDetail.editHours',
          )
        : worded('shared.off', 'idle', 'deviceDetail.setHours');
    }

    case 'reward-tasks': {
      const tasks = facts.rewardTaskCount;
      if (tasks === undefined) {
        return null;
      }
      return tasks > 0
        ? counted(tasks, 'deviceDetail.rewardTasksUnit', 'active', 'shared.manage')
        : worded('shared.notSet', 'idle', 'shared.setUp');
    }

    case 'web-filter':
      return controls.webFilterEnabled
        ? worded('shared.on', 'active', 'shared.manage')
        : worded('shared.off', 'idle', 'shared.turnOn');

    case 'pause-browsing': {
      if (facts.nowMs === undefined) {
        return null;
      }
      const until = controls.browsingPausedUntil;
      const leftMs = typeof until === 'number' ? until - facts.nowMs : 0;
      /*
       * Minutes left, never the end time: the card is read at a glance and
       * "until 19:40" makes the parent do the subtraction. Floored at one,
       * because a pause with forty seconds to run is still blocking and a "0"
       * over a device that cannot reach the web is the one wrong answer.
       *
       * No unit, as on the SOS and Places cards — the number is the whole
       * sentence, and each console says which minutes these are in the line it
       * has room for (the phone replaces the detail with
       * `deviceDetail.pauseBrowsingLeft`).
       *
       * A running pause is `attention` and a device browsing normally is
       * `idle`: the tone is what a parent scans the grid for, and the card
       * worth finding is the one still blocking. "Not paused" is the resting
       * state of every device and must not nag — and must not shout either:
       * as `active` its "Off" sat in black at display size like a rule in
       * force (2026-10-25).
       */
      /*
       * The verb differs from every other card's, because the press does. A
       * running pause ends on the press with no confirmation and no screen in
       * between (`useDeviceDetailScreen`, `Dashboard.pressPauseBrowsing`), so
       * "Manage" over a number is the one card where that word promises a
       * panel the parent never reaches — and giving the web back is the only
       * thing they are looking for while it reads "43".
       */
      return leftMs > 0
        ? counted(
            Math.max(1, Math.round(leftMs / 60_000)),
            null,
            'attention',
            'deviceDetail.pauseBrowsingResume',
          )
        : worded('deviceDetail.pauseBrowsingOff', 'idle', 'shared.manage');
    }

    case 'web-history': {
      const day = facts.webHistory;
      if (day === undefined) {
        return null;
      }
      return day
        ? counted(
            day.sites,
            'deviceDetail.webHistorySitesUnit',
            'active',
            'shared.view',
            day.capped,
          )
        : worded('shared.none', 'idle', 'shared.view');
    }

    case 'request-check-in': {
      if (facts.checkInStatus === undefined) {
        return null;
      }
      if (facts.checkInStatus === 'pending') {
        return worded('deviceDetail.waiting', 'attention', 'shared.view');
      }
      if (facts.checkInStatus === 'safe') {
        return worded('shared.done', 'active', 'shared.view');
      }
      return worded('shared.ready', 'idle', 'shared.view');
    }

    case 'location': {
      if (!controls.locationSharingEnabled) {
        return worded('shared.off', 'idle', 'shared.setUp');
      }
      if (!facts.hasLocationFix) {
        return worded('deviceDetail.waiting', 'idle', 'shared.openMap');
      }
      // An old fix is the device being quiet, which the hero already says —
      // not something this card can ask the parent to fix.
      return facts.locationStale
        ? worded('shared.offline', 'idle', 'shared.openMap')
        : worded('shared.live', 'active', 'shared.openMap');
    }

    case 'sos-alerts': {
      const total = facts.sosTotalCount;
      if (total === undefined) {
        return null;
      }
      const active = facts.sosActiveCount ?? 0;
      if (active > 0) {
        // No unit, as on the phone: the number is the whole sentence, and a
        // red "2" beside the word "alerts" reads slower than a red 2.
        return counted(active, null, 'attention', 'shared.view');
      }
      // Answered and quiet: nothing to look at, so it rests with the cards
      // that are off rather than lighting up like one in use.
      return total > 0
        ? worded('deviceDetail.sosAllClear', 'idle', 'shared.view')
        : worded('shared.none', 'idle', 'shared.view');
    }

    case 'apps': {
      /*
       * Blocking, per-app limits and the app list on one card since
       * 2026-10-24. The figure is the strongest rule in force — what is
       * blocked, then what is capped — and only with neither does the card
       * fall back to what the device reports about its apps.
       *
       * A pick counts once the child has picked AND the switch is on: a
       * picked list with the switch off blocks nothing, so it reads Off with
       * Turn on rather than a count (prod 2026-10-13, `foldChildAppBlocking`).
       * A parent's Block counts always — no switch gates it.
       */
      const picksInForce =
        controls.blockedAppsConfigured === true && controls.appBlockingEnabled === true;
      const parentBlocked = facts.parentBlockedCount ?? 0;
      if (picksInForce || parentBlocked > 0) {
        return counted(
          (picksInForce
            ? (controls.blockedAppCount ?? 0) + (controls.blockedCategoryCount ?? 0)
            : 0) + parentBlocked,
          'deviceDetail.appsBlockedUnit',
          'active',
          'shared.manage',
        );
      }
      const limits = controls.appLimits?.length ?? 0;
      if (limits > 0) {
        return counted(
          limits,
          'deviceDetail.appsLimitedUnit',
          'active',
          'shared.manage',
        );
      }
      if (controls.blockedAppsConfigured === true) {
        return worded('shared.off', 'idle', 'shared.turnOn');
      }
      if (
        facts.reportsAppInstalls === undefined &&
        facts.listsInstalledApps === undefined
      ) {
        return null;
      }
      if (facts.reportsAppInstalls === true) {
        return worded('appAlerts.statusOn', 'active', 'shared.manage');
      }
      // Lists what is installed, reports no installs or removals: "Monitoring
      // on" over that machine promised a feed it does not have.
      if (facts.listsInstalledApps === true) {
        return worded('appAlerts.statusInventory', 'active', 'shared.manage');
      }
      // An iPhone: nothing listed or reported, and blocking still to set up —
      // "Unavailable" here would hide the one part it can do.
      return worded('shared.notSet', 'idle', 'shared.setUp');
    }

    case 'message-alerts': {
      const summary = facts.messageSummary;
      return summary ? worded(summary.valueKey, summary.tone, 'shared.view') : null;
    }

    case 'place-alerts': {
      const places = facts.placeCount;
      if (places === undefined) {
        return null;
      }
      return places > 0
        ? counted(places, null, 'active', 'shared.view')
        : worded('deviceDetail.noPlacesYet', 'idle', 'shared.view');
    }

    case 'tamper-alerts':
      // No switch and no count: the agent watches for tampering whenever it is
      // running at all. But a grant switched off, or an agent silent for a day,
      // is the state this card exists to expose — "Watching" over it was the
      // card vouching for protection that was not there.
      switch (facts.protectionLevel) {
        case 'warning':
          return worded('protection.needsAttention', 'attention', 'shared.view');
        case 'inactive':
          return worded('protection.inactive', 'attention', 'shared.view');
        default:
          return worded('tamperAlerts.statusOn', 'active', 'shared.view');
      }

    case 'video-history':
      /*
       * A Mac or PC draws this card without being able to record — the screen
       * behind it offers the Chrome extension. "Off" would read as a switch
       * the parent forgot, so the value names the route instead.
       */
      if (facts.supportsVideoHistory === false) {
        return worded('videoHistory.viaExtension', 'idle', 'shared.view');
      }
      if (controls.videoHistoryEnabled !== true) {
        return worded('shared.off', 'idle', 'shared.view');
      }
      // Switched on, but the phone's reader has no grant to run on: "Recording"
      // here was the card vouching for a list that stays empty.
      return facts.videoHistoryAwaitingGrant === true
        ? worded('deviceDetail.waiting', 'attention', 'shared.view')
        : worded('deviceDetail.videoHistoryOn', 'active', 'shared.view');

    default:
      return null;
  }
}

/**
 * The verbs that only open the card's screen. A phone card draws these as a
 * chevron, not a button — a button is kept for a press that does something
 * (turn on, set up, open the map, give the web back), and for every card
 * asking the parent for something, whatever its verb.
 */
const OPEN_ONLY_ACTIONS: ReadonlySet<string> = new Set([
  'shared.view',
  'shared.manage',
  'deviceDetail.editLimit',
  'deviceDetail.editHours',
]);

export function isOpenOnlyActionKey(actionLabelKey: string): boolean {
  return OPEN_ONLY_ACTIONS.has(actionLabelKey);
}

type AppBlockingControls = Pick<
  ControlStateControls,
  | 'blockedAppsConfigured'
  | 'blockedAppCount'
  | 'blockedCategoryCount'
  | 'appBlockingEnabled'
>;

/**
 * The app-blocking controls of a child's whole set, for the child hub on
 * both consoles. Configured is any-of and the counts sum; **on means one
 * machine has its OWN list and its OWN switch** — what the agent enforces
 * (`./childPolicy`). The phone hub read the list alone and said
 * "On" over a set blocking nothing (2026-10-13).
 */
export function foldChildAppBlocking(
  devices: readonly { controls?: AppBlockingControls | null }[],
): AppBlockingControls {
  const sum = (read: (c: AppBlockingControls) => number | undefined) =>
    devices.reduce((total, d) => total + (d.controls ? (read(d.controls) ?? 0) : 0), 0);
  return {
    blockedAppsConfigured: devices.some(
      d => d.controls?.blockedAppsConfigured === true,
    ),
    blockedAppCount: sum(c => c.blockedAppCount),
    blockedCategoryCount: sum(c => c.blockedCategoryCount),
    appBlockingEnabled: devices.some(
      d =>
        d.controls?.blockedAppsConfigured === true &&
        d.controls.appBlockingEnabled === true,
    ),
  };
}

/** Worst first: a switched-off grant outranks a device that has gone quiet. */
const PROTECTION_LEVEL_RANK: Record<ProtectionLevel, number> = {
  protected: 0,
  inactive: 1,
  warning: 2,
};

/**
 * The `protectionLevel` fact of a child's whole set, for the child hub on both
 * consoles: the worst verdict among the devices that file tamper alerts at all,
 * and `undefined` when none does — a television has no verdict to be worst at,
 * and the card is not drawn for a set made only of those.
 */
export function foldChildProtectionLevel(
  devices: readonly Device[],
  nowMs: number,
): ProtectionLevel | undefined {
  let worst: ProtectionLevel | undefined;
  for (const device of devices) {
    if (!supportsTamperAlerts(device)) {
      continue;
    }
    const level = getProtectionSummaryKeys(device, nowMs).level;
    if (
      worst === undefined ||
      PROTECTION_LEVEL_RANK[level] > PROTECTION_LEVEL_RANK[worst]
    ) {
      worst = level;
    }
  }
  return worst;
}
