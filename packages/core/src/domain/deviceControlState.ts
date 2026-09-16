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

export type ControlCardTone = 'active' | 'attention' | 'roadmap';

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
  /** Either probe answering yes lights the card — a TV lists apps and reports no installs. */
  reportsAppInstalls?: boolean;
  listsInstalledApps?: boolean;
  /** From `resolveMessageMonitoringSummary`, which already answers in keys. */
  messageSummary?: { valueKey: string; tone: ControlCardTone } | null;
  /** False on a machine whose watches are recorded by the browser extension. */
  supportsVideoHistory?: boolean;
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
      const minutes = controls.dailyLimitMinutes ?? 0;
      return minutes > 0
        ? counted(
            minutes,
            'deviceDetail.minsPerDay',
            'active',
            'deviceDetail.editLimit',
          )
        : worded('shared.unlimited', 'attention', 'deviceDetail.setLimit');
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
        : worded('shared.off', 'attention', 'deviceDetail.setHours');
    }

    case 'app-limits': {
      const limits = controls.appLimits?.length ?? 0;
      return limits > 0
        ? counted(limits, 'deviceDetail.appLimitsUnit', 'active', 'shared.edit')
        : worded('shared.off', 'attention', 'deviceDetail.appLimitsSetUp');
    }

    case 'app-blocking': {
      /*
       * "Not set", not "Set up": the value is a STATE, and its siblings say
       * Off / None / Ready. A verb here reads as a command and duplicates the
       * button under it.
       */
      if (!controls.blockedAppsConfigured) {
        return worded('shared.notSet', 'attention', 'shared.setUp');
      }
      const apps = controls.blockedAppCount ?? 0;
      const categories = controls.blockedCategoryCount ?? 0;
      const enabled = controls.appBlockingEnabled === true;
      return counted(
        apps + categories || apps || categories,
        'deviceDetail.items',
        enabled ? 'active' : 'attention',
        enabled ? 'deviceDetail.manageApps' : 'shared.turnOn',
      );
    }

    case 'reward-tasks': {
      const tasks = facts.rewardTaskCount;
      if (tasks === undefined) {
        return null;
      }
      return tasks > 0
        ? counted(tasks, 'deviceDetail.rewardTasksUnit', 'active', 'shared.manage')
        : worded('shared.notSet', 'attention', 'shared.setUp');
    }

    case 'web-filter':
      return controls.webFilterEnabled
        ? worded('shared.on', 'active', 'shared.manage')
        : worded('shared.off', 'attention', 'shared.turnOn');

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
        : worded('shared.none', 'attention', 'shared.view');
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
      return worded('shared.ready', 'attention', 'shared.view');
    }

    case 'location': {
      if (!controls.locationSharingEnabled) {
        return worded('shared.off', 'attention', 'shared.setUp');
      }
      if (!facts.hasLocationFix) {
        return worded('deviceDetail.waiting', 'attention', 'shared.openMap');
      }
      return facts.locationStale
        ? worded('shared.offline', 'attention', 'shared.openMap')
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
      return total > 0
        ? worded('deviceDetail.sosAllClear', 'active', 'shared.view')
        : worded('shared.none', 'attention', 'shared.view');
    }

    case 'apps': {
      if (
        facts.reportsAppInstalls === undefined &&
        facts.listsInstalledApps === undefined
      ) {
        return null;
      }
      const observed =
        facts.reportsAppInstalls === true || facts.listsInstalledApps === true;
      return worded(
        observed ? 'appAlerts.statusOn' : 'appAlerts.statusOff',
        observed ? 'active' : 'roadmap',
        'shared.view',
      );
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
        : worded('deviceDetail.noPlacesYet', 'attention', 'shared.view');
    }

    case 'tamper-alerts':
      // No switch and no count: the agent watches for tampering whenever it is
      // running at all, so the card reports that it is on and opens the log.
      return worded('tamperAlerts.statusOn', 'active', 'shared.view');

    case 'video-history':
      /*
       * A Mac or PC draws this card without being able to record — the screen
       * behind it offers the Chrome extension. "Off" would read as a switch
       * the parent forgot, so the value names the route instead.
       */
      if (facts.supportsVideoHistory === false) {
        return worded('videoHistory.viaExtension', 'attention', 'shared.view');
      }
      return controls.videoHistoryEnabled === true
        ? worded('deviceDetail.videoHistoryOn', 'active', 'shared.view')
        : worded('shared.off', 'attention', 'shared.view');

    default:
      return null;
  }
}
