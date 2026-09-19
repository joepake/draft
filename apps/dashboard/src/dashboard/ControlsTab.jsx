import { useEffect, useMemo, useState } from 'react';
import { webCategoryGroupLabel, webCategoryLabel } from './labels.js';
import { useActivityTranslate } from './activityCopy.js';
import RewardTaskForm from './RewardTaskForm.jsx';
import ChildBudgetEditor from './ChildBudgetEditor.jsx';
import QuickProtectCard from './QuickProtectCard.jsx';
import Toggle from './Toggle.jsx';
import { timeAgo } from './timeAgo.js';
import { hasQuickProtectOffer } from '@kidgate/core/domain/quickProtect';
import {
  childRuleDivergence,
  hasRuleDivergence,
} from '@kidgate/core/domain/childRuleDivergence';
import { isDeviceParked } from '@kidgate/core/domain/deviceParking';
import {
  resolveLockedTeaser,
  resolveRewardTaskCapTeaser,
} from '@kidgate/core/domain/premiumTeaser';
import { REWARD_FREE_MAX_ACTIVE_TASKS_PER_DEVICE } from '@kidgate/schema/rewardTask';
import PremiumTeaser from './PremiumTeaser.jsx';
import { childMinutesUsedToday } from './childBudgetSpent.js';
import Icon from '@kidgate/web-ui/Icon';
import { WEB_FILTER_CATEGORY_GROUPS } from '@kidgate/core/domain/webFilterCategoryGroups';
import { WEB_FILTER_CATEGORIES } from '@kidgate/schema/webActivity';
import { resolveTaskStars } from '@kidgate/core/domain/rewardTasks';
import {
  supportsWebFiltering,
  webFilterBlockerKey,
} from '@kidgate/core/domain/webFilterSupport';
import {
  supportsAppBlocking,
  supportsDailyLimit,
  supportsSchedule,
  installApprovalMode,
} from '@kidgate/core/domain/controlSupport';
import {
  pendingInstallsFromActivities,
  resolveInstallApprovalPolicy,
  withApprovedPackage,
} from '@kidgate/core/domain/appInstallApproval';
import { supportsLocation } from '@kidgate/core/domain/locationSupport';
import { supportsSearchMonitoring } from '@kidgate/core/domain/alertSupport';
import { supportsSafeSearch } from '@kidgate/core/domain/safeSearchSupport';
import { supportsRewardTasks } from '@kidgate/core/domain/rewardTaskSupport';
import { formatMinutes } from './charts.jsx';
import { useT } from '@kidgate/web-ui/useT';

import Card from './Card.jsx';

/**
 * The Controls tab — every rule this device can be given, and the cards that
 * are about the family rather than the machine (reward tasks, the star chart).
 *
 * Nine hundred lines of `pages/Dashboard.jsx` until it moved here. What binds
 * it is in `apps/dashboard/CLAUDE.md`: gating is the device's own probe, a
 * rule that is off stays visible where one the device cannot hold disappears,
 * and an assigned device's child-level rules route through
 * `actions.updateChildRules`.
 */
/**
 * The family's star chart.
 *
 * Rendered in the Controls tab beside the reward tasks it counts, and it is the
 * one panel there that is about the family rather than the device on screen —
 * a child's stars come from every device they hold, not from the one selected
 * in the sidebar.
 */
function StarChartCard({ leaderboard }) {
  const { t } = useT();

  if (!leaderboard?.visible) {
    return (
      <Card title={t('dash.starChartTitle')} subtitle={t('dash.starChartSub')}>
        <p className="muted">{t('dash.starChartEmpty')}</p>
      </Card>
    );
  }

  return (
    <Card title={t('dash.starChartTitle')} subtitle={t('dash.starChartSub')}>
      <ul className="events">
        {leaderboard.rows.map(row => (
          <li key={row.childId}>
            <span className="ev-state tone-muted">{row.rank}</span>
            <span className="ev-body">
              <strong>{row.name}</strong>
              <em>{t('dash.starChartStars', { count: row.stars })}</em>
            </span>
            <span className="reward-stars" aria-hidden="true">
              <Icon name="star" size={13} />
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

/**
 * Which field of the device document each switch owns.
 *
 * Every one is a `PARENT_CONTROL_KEYS` entry, so the write goes through
 * `/updateDeviceControls` and needs a session the phone approved —
 * `firestore.rules` refuses these fields to a browser writing directly, and
 * that is the whole reason `readOnly` exists rather than being a nicety.
 */
const CONTROL_FIELDS = {
  schedule: 'scheduleEnabled',
  appBlocking: 'appBlockingEnabled',
  webFilter: 'webFilterEnabled',
  location: 'locationSharingEnabled',
  // Per-device like app blocking, not a child rule: an Android phone and the
  // Chrome extension on the same child read it through different agents, and
  // the phone's screen (`MessageAlertsScreen`) writes it per device too.
  search: 'searchMonitoringEnabled',
  // A child rule like the web filter it rides on: fanned out by the server.
  safeSearch: 'safeSearchEnabled',
  // Per-device: the approved list is package names on one machine, and the
  // server stamps the "since" line per device (`functions/http/controls.js`).
  installApproval: 'appInstallApprovalEnabled',
};

/** Where the slider sits for a family that has no daily limit set. */
const DEFAULT_LIMIT_MINUTES = 180;

export default function ControlsTab({
  device,
  rewardTasks,
  siteRequests,
  leaderboard,
  // screenTimeBoard, — dropped 2026-09-08 with the board
  readOnly,
  /** Premium. The filter's switch is free; its categories are not. */
  hasFullAccess = true,
  actions,
  run,
  busy,
  /** This device's feed rows, for the install-approval pending list. */
  activities = [],
  siblingDevices = [],
  /** The family's children, as a source the starter card can copy rules from. */
  familyChildren = [],
}) {
  const siblingDeviceIds = siblingDevices.map(other => other.id);
  /*
   * `siblingDevices` is every device of this child, this one included, and the
   * child's own rules ride on `device.child` — so the fold costs no read. Both
   * were already in hand, for the budget seed and the starter card.
   *
   * Not memoised: the caller builds `siblingDevices` with an inline `filter`,
   * so it is a new array every render and a `useMemo` over it would recompute
   * every time while claiming not to. The fold is a walk of ten keys across a
   * handful of devices.
   */
  const ruleDivergence = childRuleDivergence(
    device.child?.rules,
    siblingDevices.map(other => ({
      deviceId: other.id,
      name: other.name ?? null,
      parked: isDeviceParked(other),
      controls: other.controls,
    })),
  );
  const { t } = useT();
  const activityT = useActivityTranslate();
  const c = device.controls;
  const live = Boolean(actions);
  /*
   * App install quarantine. The pending list is read off the feed rather than
   * the inventory because the feed is immediate — the device posts the row
   * the moment the install lands — and it is re-read against the live
   * `approvedPackages` so an approval from the phone empties it here too.
   */
  const installMode = installApprovalMode(device);
  const installApproval = resolveInstallApprovalPolicy(c);
  const pendingInstalls = useMemo(
    () => pendingInstallsFromActivities(activities, installApproval, device.id),
    [activities, installApproval, device.id],
  );
  const approveInstall = packageName =>
    live &&
    run(
      `install-allow-${packageName}`,
      () =>
        actions.updateControls(device.id, {
          approvedPackages: withApprovedPackage(c.approvedPackages, packageName),
        }),
      t('dash.toastInstallAllowed'),
    );
  const [state, setState] = useState({
    appBlocking: c.appBlockingEnabled,
    webFilter: c.webFilterEnabled,
    location: c.locationSharingEnabled,
    schedule: c.scheduleEnabled,
    search: c.searchMonitoringEnabled === true,
    safeSearch: c.safeSearchEnabled === true,
    installApproval: c.appInstallApprovalEnabled === true,
  });

  /*
   * The document is the truth; this state is only what the parent sees while a
   * write is in the air. Re-synced whenever the device document changes, so a
   * rule the other parent flips on their phone moves this switch too — and so
   * the optimistic value below is corrected by the listener rather than
   * outliving it. Same effect `WebFilterScreen` runs on the phone.
   */
  useEffect(() => {
    setState({
      appBlocking: c.appBlockingEnabled,
      webFilter: c.webFilterEnabled,
      location: c.locationSharingEnabled,
      schedule: c.scheduleEnabled,
      search: c.searchMonitoringEnabled === true,
      safeSearch: c.safeSearchEnabled === true,
      installApproval: c.appInstallApprovalEnabled === true,
    });
  }, [
    c.appBlockingEnabled,
    c.webFilterEnabled,
    c.locationSharingEnabled,
    c.scheduleEnabled,
    c.searchMonitoringEnabled,
    c.appInstallApprovalEnabled,
    c.safeSearchEnabled,
  ]);

  /*
   * The filter's category set, optimistic for the same reason the switches
   * are. Kept apart from `state` above because it is a list rather than a
   * boolean and re-syncs on its own key — joining them would re-seed every
   * switch whenever one chip moved.
   */
  const webFilterTeaser = resolveLockedTeaser({
    id: 'webFilterAdvanced',
    hasFullAccess,
  });

  /*
   * `open` + `claimed` is what the server counts, and this card lists every
   * status: filtering to those two here rather than taking the array's length
   * keeps the wall at the number `rewardTask/too-many` actually refuses at.
   */
  const rewardCapTeaser = resolveRewardTaskCapTeaser({
    hasFullAccess,
    activeCount: (rewardTasks[device.id] || []).filter(
      task => task.status === 'open' || task.status === 'claimed',
    ).length,
    freeCap: REWARD_FREE_MAX_ACTIVE_TASKS_PER_DEVICE,
  });

  const [categories, setCategories] = useState(c.webFilterCategories ?? []);
  const storedCategories = (c.webFilterCategories ?? []).join(',');
  useEffect(() => {
    setCategories(storedCategories ? storedCategories.split(',') : []);
  }, [storedCategories]);

  const toggleCategory = async (category, value) => {
    const previous = categories;
    /*
     * Canonical order, not click order. The stored array is compared field by
     * field by the security rules and by the child device's policy key, so two
     * parents picking the same set must produce the same document — and one of
     * them is on the phone, where `WebFilterScreen` builds it exactly this way.
     */
    const next = WEB_FILTER_CATEGORIES.filter(item =>
      item === category ? value : previous.includes(item),
    );
    setCategories(next);
    const ok = await run('web-categories', () =>
      // A child rule, like the web-filter switch it belongs to: fanned out to
      // every sibling device by the server.
      device.childId
        ? actions.updateChildRules(device.childId, { webFilterCategories: next })
        : actions.updateControls(device.id, { webFilterCategories: next }),
    );
    if (!ok) setCategories(previous);
  };

  /**
   * Move the switch, then write it, then put it back if the write failed.
   *
   * Optimistic because the write is a Cloud Function round trip and a switch
   * that does not move until it returns reads as a broken control. Rolled back
   * explicitly because the alternative — leaving it where the parent put it —
   * is a dashboard showing a protection the device was never told about.
   *
   * With no `actions` there is no data layer behind this rendering at all, and
   * the switch stays a local one.
   */
  const set = key => async next => {
    setState(s => ({ ...s, [key]: next }));
    if (!live || readOnly) {
      return;
    }
    // Web filter, blocked hours and location sharing belong to the child
    // when the device is assigned to one: the server fans the write out to
    // every sibling device, so a Mac and the Chrome extension on it cannot
    // diverge again. App blocking stays per-device — its list of packages
    // only exists on the one machine. See docs/FEASIBILITY.md (2026-08-26).
    const childRuleSwitch =
      key === 'webFilter' ||
      key === 'schedule' ||
      key === 'location' ||
      key === 'safeSearch';
    const ok = await run(`ctrl-${key}`, () =>
      childRuleSwitch && device.childId
        ? actions.updateChildRules(device.childId, {
            [CONTROL_FIELDS[key]]: next,
          })
        : actions.updateControls(device.id, { [CONTROL_FIELDS[key]]: next }),
    );
    if (!ok) {
      // Back to what the document says rather than to `!next`: the two agree
      // for a plain switch, and only one of them is still right if the
      // listener delivered someone else's change while this was in flight.
      setState(s => ({ ...s, [key]: c[CONTROL_FIELDS[key]] }));
    }
  };

  /**
   * The minutes the parent is dragging towards, or null when the slider is
   * showing the device's own number.
   *
   * Null rather than a copy of the document value, because "no limit set" is a
   * real state the slider cannot sit on — it has no zero — and a draft that
   * started as `180` would make an untouched slider claim a three-hour limit
   * this family never set.
   */
  const [limitDraft, setLimitDraft] = useState(null);
  const limitShown = limitDraft ?? c.dailyLimitMinutes;
  const limitValue = limitDraft ?? c.dailyLimitMinutes ?? DEFAULT_LIMIT_MINUTES;

  /**
   * The child's shared daily budget, when the family has set one.
   *
   * Read from the **child** document rather than from `controls.childBudget`,
   * which is stamped only once a device reports usage: a parent who set a
   * budget on their phone a minute ago would otherwise still be handed the
   * slider below, and the first report would move it under them.
   *
   * `controls.dailyLimitMinutes` on an assigned device stopped being a number
   * a parent chooses on 2026-08-27. `reportChildUsage` now overwrites it on
   * every usage report with `deviceUsed + (budget − totalUsed)` — this
   * machine's share of what the child has left — so the slider was editing an
   * allocation the server recomputes, and a parent watched their own number
   * jump to one they never picked. The phone answered this by moving
   * `daily-limit` into `PERSON_LEVEL_ACTION_IDS` and editing the budget on the
   * child hub; this is the same answer for the surface that has no child hub
   * yet. Reading stays — a parent still needs to see where the day stands.
   */
  const childBudgetMinutes = device.child?.rules?.dailyLimitMinutes ?? null;
  /*
   * ASSIGNED, not "already has a budget" (2026-09-16). It read the latter, so
   * a child with no budget yet got the per-device slider — a number the next
   * report overwrites — and the only editor that could CREATE the budget was
   * the child hub's card, which is gone: the hub now reports the figure on the
   * Daily limit card and lands here, so here has to be able to set it from
   * nothing.
   */
  const budgetShared = Boolean(device.childId && device.child);
  /*
   * How much of the budget the child has spent — summed here from the same
   * device documents on screen, never from `controls.childBudget`.
   *
   * That stamp is this same arithmetic (`functions/lib/childBudget.js`) one
   * report earlier, and nothing invalidates it when the child's device set
   * changes: a device unassigned or moved to a sibling leaves its minutes in
   * every remaining stamp until the next report. Measured on the phone
   * 2026-09-06 — a child's family card read 18h40 against 16h43 on their own
   * screen. `getChildScreenTimeUsage` in `apps/mobile` is the same fold.
   *
   * Only a device whose stored day IS today counts, so a family whose devices
   * have all been off since yesterday reads nothing rather than yesterday's
   * figure under a heading that says today.
   */
  const budgetSpentMinutes = useMemo(
    () => (budgetShared ? childMinutesUsedToday(siblingDevices) : null),
    [budgetShared, siblingDevices],
  );

  // Cleared by the listener catching up, not by the write returning: dropping
  // the draft the moment the Cloud Function answered would show the old number
  // again for however long the snapshot takes to arrive.
  useEffect(() => {
    setLimitDraft(draft => (draft === c.dailyLimitMinutes ? null : draft));
  }, [c.dailyLimitMinutes]);

  // A different device is a different set of rules. A draft that outlived the
  // switch would put one child's minutes on another child's slider — and this
  // component is not remounted when the selection changes.
  useEffect(() => {
    setLimitDraft(null);
  }, [device.id]);

  /**
   * Written when the drag ends, never during it.
   *
   * `onChange` on a range input fires per pixel of travel, and each one here
   * would be a Cloud Function call — plus a burst of `parent_control` rows in
   * GA describing one decision. `onKeyUp` is the same commit for a parent
   * moving it with the arrow keys, where each press is already a whole step.
   */
  const commitLimit = async () => {
    // `budgetShared` renders no slider, so this cannot normally be reached —
    // it is here because the failure it prevents is silent: a write to
    // `controls.dailyLimitMinutes` on an assigned device is erased by the next
    // usage report, so a parent would be told it saved and see it revert.
    if (!live || readOnly || budgetShared || limitDraft === null) {
      return;
    }
    if (limitDraft === c.dailyLimitMinutes) {
      setLimitDraft(null);
      return;
    }
    const ok = await run('ctrl-limit', () =>
      actions.updateControls(device.id, { dailyLimitMinutes: limitDraft }),
    );
    if (!ok) {
      setLimitDraft(null);
    }
  };

  /*
   * The device's own answer, not this platform's reputation — the rule and its
   * fallback live in `@kidgate/core/domain/webFilterSupport`, shared with the
   * phone's device-detail cards so the two surfaces cannot disagree about the
   * same Mac. A device that filters nothing gets the row and the reason, never
   * a switch: an operable toggle over an agent with no filter is a parent
   * turning on a protection that was never going to run.
   */
  const canWebFilter = supportsWebFiltering(device);
  /*
   * A Mac that could filter and is waiting on a person beats the flat "not
   * supported": the same distinction the phone's card draws, from the same
   * field, so the two parent surfaces cannot describe one machine differently.
   * The key is the app key space's; `dash.*` carries this side's wording.
   */
  const filterBlocker = canWebFilter ? null : webFilterBlockerKey(device);

  const rows = [
    /*
     * Three of these four now answer from the device's own probe, as Web
     * filter already did. The row stays and the switch goes — the rule this
     * card states below — because a parent comparing two devices has to be
     * able to tell a rule that is off from one the device cannot hold. What
     * changed is that a browser extension used to be offered all four
     * switches, and writing any of them reached a document its worker has no
     * handler for.
     */
    {
      key: 'schedule',
      title: t('dash.rowBlockedHours'),
      desc: supportsSchedule(device)
        ? t('dash.rowBlockedHoursDesc', {
            count: c.scheduleWindows.length,
            list: c.scheduleWindows
              .map(w => w.label || `${w.start}–${w.end}`)
              .join(', '),
          })
        : t('dash.rowNotSupported'),
      unsupported: !supportsSchedule(device),
    },
    {
      key: 'appBlocking',
      title: t('dash.rowAppBlocking'),
      // Two independent counts, and the plural engine inflects on a single
      // `count` — so each half is pluralised on its own and then joined.
      desc: supportsAppBlocking(device)
        ? t('dash.rowAppBlockingDesc', {
            apps: t('dash.rowAppBlockingApps', { count: c.blockedAppCount }),
            categories: t('dash.rowAppBlockingCategories', {
              count: c.blockedCategoryCount,
            }),
          })
        : t('dash.rowNotSupported'),
      unsupported: !supportsAppBlocking(device),
    },
    {
      key: 'installApproval',
      title: t('dash.rowInstallApproval'),
      // The platform decides the shape (`installApprovalMode`): Android and
      // the TV quarantine, iOS hides the App Store, everything else has no
      // switch to offer and says so like the rows around it.
      desc:
        installMode === 'quarantine'
          ? t('dash.rowInstallApprovalDesc', { count: pendingInstalls.length })
          : installMode === 'denyInstalls'
            ? t('dash.rowInstallApprovalDescIos')
            : t('dash.rowNotSupported'),
      unsupported: installMode === null,
    },
    {
      key: 'webFilter',
      title: t('dash.rowWebFilter'),
      desc: canWebFilter
        ? t('dash.rowWebFilterDesc', { count: c.webFilterCategories.length })
        : filterBlocker === 'deviceDetail.webFilterAwaitingApproval'
          ? t('dash.rowWebFilterAwaitingApproval')
          : filterBlocker === 'deviceDetail.webFilterSwitchedOffOnDevice'
            ? t('dash.rowWebFilterSwitchedOff')
            : t('dash.rowNotSupported'),
      unsupported: !canWebFilter,
    },
    {
      key: 'location',
      title: t('dash.rowLocation'),
      desc: !supportsLocation(device)
        ? t('dash.rowNotSupported')
        : device.lastLocation
          ? t('dash.rowLocationDesc', {
              when: timeAgo(device.lastLocation.updatedAt),
            })
          : t('dash.rowLocationNone'),
      unsupported: !supportsLocation(device),
    },
    {
      key: 'search',
      title: t('dash.rowSearchMonitoring'),
      // Same wording as the phone's third switch, because it is the same
      // field — a parent reading both surfaces should meet one promise about
      // what leaves the device, not two.
      desc: supportsSearchMonitoring(device)
        ? activityT('messageMonitoring.parentSearchHint')
        : t('dash.rowNotSupported'),
      unsupported: !supportsSearchMonitoring(device),
    },
    {
      key: 'safeSearch',
      title: t('dash.rowSafeSearch'),
      desc: supportsSafeSearch(device)
        ? t('dash.rowSafeSearchDesc')
        : t('dash.rowNotSupported'),
      unsupported: !supportsSafeSearch(device),
    },
  ];

  return (
    <>
      {/*
        Which of this child's machines are actually on the rules below.

        Since the free tier's write gate (`docs/FEASIBILITY.md`, "Free tier: a
        parked device goes loosen-only") a parked device may refuse a tightening
        and keep an older, looser copy. The operator accepted that divergence —
        "one child with two rule sets is fine" — on the condition that the
        consoles say so, because every card under this line reads the CHILD
        document, and drawing "Web filter: strict" over a child whose tablet has
        been on last month's list since the trial ended is the product sounding
        confident about protection that is not running.

        Drawn only when they disagree: "on 3 of 3" answers a question nobody
        asked and teaches a parent to skip the line on the day it matters.
      */}
      {hasRuleDivergence(ruleDivergence) && (
        <Card
          title={activityT('family.rulesEnforcedOn', {
            enforced: ruleDivergence.enforcing,
            total: ruleDivergence.total,
          })}
        >
          <ul className="hint">
            {ruleDivergence.rows
              .filter(row => row.divergedKeys.length > 0)
              .map(row => (
                <li key={row.deviceId}>
                  {row.name} — {activityT('family.rulesPausedBehind')}
                </li>
              ))}
          </ul>
        </Card>
      )}

      {/*
        The starter set, for an assigned child nothing has ever been turned on
        for. The phone hangs this off the fresh-pairing hand-off; this surface
        has no pairing at all (`docs/BACKLOG.md`, "The web cannot add a
        device"), so the card reads the state instead of an event and
        disappears the moment all five are on.

        `canUsePremiumControls` is left at its default: this app cannot tell a
        running trial from a lapsed plan (`apps/dashboard/CLAUDE.md`, plans),
        so the server's refusal is the gate — greying a switch here would hide
        it from a family whose trial is still running.
      */}
      {device.childId &&
        device.child &&
        hasQuickProtectOffer(device.child, familyChildren) && (
          <Card
            title={activityT('family.quickProtectTitle', {
              childName: device.child.name ?? '',
            })}
          >
            <QuickProtectCard
              child={device.child}
              siblings={familyChildren}
              disabled={readOnly || !live}
              onApply={async ({ rules, budget }) => {
                if (Object.keys(rules).length > 0) {
                  await run('quick-protect', () =>
                    actions.updateChildRules(device.childId, rules),
                  );
                }
                if (budget !== null) {
                  // Never `updateChildRules({ dailyLimitMinutes })`: that writes
                  // the rule and leaves every assigned device locking on a stale
                  // share until its next usage report. Same call the budget
                  // editor below makes.
                  await run('quick-protect-budget', () =>
                    actions.setChildBudget(device.childId, budget, siblingDeviceIds),
                  );
                }
              }}
            />
          </Card>
        )}

      {/*
        Apps the device blocked on its own and is holding for the parent.

        Always rendered while the switch is on, even empty: the device decided
        this without a command, and a parent told "it does not open" has to be
        able to find the answer where they look for blocks, not only in a push
        they may have swiped away (`docs/FEASIBILITY.md`, "App install
        quarantine"). The Installed-apps card on the Overview shows the same
        rows from the daily scan; this one is the feed's immediate answer.
      */}
      {installMode === 'quarantine' && state.installApproval && (
        <Card
          title={t('dash.pendingInstallsTitle')}
          subtitle={t('dash.pendingInstallsSub')}
        >
          {pendingInstalls.length === 0 ? (
            <p className="empty">{t('dash.pendingInstallsEmpty')}</p>
          ) : (
            <ul className="events">
              {pendingInstalls.map(app => (
                <li key={app.packageName}>
                  <span className="ev-state tone-serious">
                    <Icon name="plus" size={13} />
                  </span>
                  <span className="ev-body">
                    <strong>{app.label}</strong>
                    <em>
                      {activityT('appInventory.pendingBadge')} ·{' '}
                      {timeAgo(app.installedAt)}
                    </em>
                  </span>
                  <button
                    className="btn btn-sm btn-primary"
                    disabled={readOnly || busy === `install-allow-${app.packageName}`}
                    title={readOnly ? t('dash.unlockToChange') : undefined}
                    onClick={() => approveInstall(app.packageName)}
                  >
                    {t('dash.installAllow')}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </Card>
      )}

      {/*
        Sites waiting on an answer, on the tab that holds the filter they
        would be allowed by. Only rendered while something is pending: an
        empty card here would be a permanent heading over nothing on a screen
        that already has six.

        The phone puts the same list on its Web Filter screen and its Family
        list. This surface has the Attention feed for the second half of that
        — a row there carries the Allow, and this card carries both answers.
      */}
      {siteRequests.length > 0 && (
        <Card title={t('dash.siteRequestsTitle')} subtitle={t('dash.siteRequestsSub')}>
          <ul className="events">
            {siteRequests.map(req => (
              <li key={req.id}>
                <span className="ev-state tone-warning">
                  <Icon name="globe" size={13} />
                </span>
                <span className="ev-body">
                  <strong>{req.domain}</strong>
                  <em>
                    {req.reason ? `${req.reason} · ` : ''}
                    {timeAgo(req.createdAt)}
                  </em>
                </span>
                <button
                  className="btn btn-sm"
                  disabled={readOnly || busy === `site-deny-${req.id}`}
                  title={readOnly ? t('dash.unlockToChange') : undefined}
                  onClick={() =>
                    live &&
                    run(`site-deny-${req.id}`, () =>
                      actions.resolveSiteRequest(req.id, false),
                    )
                  }
                >
                  {t('dash.siteRequestDeny')}
                </button>
                <button
                  className="btn btn-sm btn-primary"
                  disabled={readOnly || busy === `site-allow-${req.id}`}
                  title={readOnly ? t('dash.unlockToChange') : undefined}
                  onClick={() =>
                    live &&
                    run(
                      `site-allow-${req.id}`,
                      () => actions.resolveSiteRequest(req.id, true),
                      t('dash.toastSiteAllowed'),
                    )
                  }
                >
                  {t('dash.siteRequestAllow')}
                </button>
              </li>
            ))}
          </ul>
        </Card>
      )}

      <div className="grid-2">
        <Card title={t('dash.limitCardTitle')} subtitle={t('dash.limitCardSub')}>
          {/*
            The card stays, the slider goes — the same call the rows beside it
            make. A cap on the day's minutes needs something to measure them
            and something to stop; a browser extension publishes neither, and
            a slider over it would set a number nothing reads.
          */}
          {!supportsDailyLimit(device) ? (
            <p className="hint">{t('dash.rowNotSupported')}</p>
          ) : budgetShared ? (
            /*
              Read-only, because the number this device locks on is no longer a
              number a parent picks — see `childBudgetMinutes` above. The figure
              shown is the child's budget, not `controls.dailyLimitMinutes`,
              which is this machine's server-computed share of it and would read
              as a cap the family chose.
            */
            <>
              <div className="limit-edit">
                {/* `dash.off` when the child has no budget yet — the same word
                    the per-device branch prints for an absent limit, rather
                    than a dash a parent has to interpret. */}
                <strong>
                  {childBudgetMinutes
                    ? formatMinutes(childBudgetMinutes)
                    : t('dash.off')}
                </strong>
                <p className="hint">{t('dash.limitShared')}</p>
                {childBudgetMinutes && budgetSpentMinutes !== null ? (
                  <p className="hint">
                    {t('dash.limitSharedSpent', {
                      used: formatMinutes(budgetSpentMinutes),
                      limit: formatMinutes(childBudgetMinutes),
                    })}
                  </p>
                ) : null}
              </div>
              <p className="hint">{t('dash.limitSharedHint')}</p>
              {/*
                The budget itself IS editable — what stays read-only above is
                `controls.dailyLimitMinutes`, this machine's server-computed
                share of it. The slider was hidden in 2026-08-27 and the
                number behind it was left with no editor on this surface at
                all; this is that half, writing the child rule and seeding
                every assigned device through one repository call.
              */}
              <ChildBudgetEditor
                minutes={childBudgetMinutes}
                readOnly={readOnly}
                busy={busy === 'child-budget'}
                onSave={next =>
                  run('child-budget', () =>
                    actions.setChildBudget(device.childId, next, siblingDeviceIds),
                  )
                }
              />
            </>
          ) : (
            <>
              <div className="limit-edit">
                <strong>
                  {limitShown ? formatMinutes(limitShown) : t('dash.off')}
                </strong>
                <input
                  type="range"
                  min="30"
                  max="480"
                  step="15"
                  value={limitValue}
                  onChange={e => setLimitDraft(Number(e.target.value))}
                  onPointerUp={commitLimit}
                  onKeyUp={commitLimit}
                  aria-label={t('dash.limitAria')}
                  /*
                   * Not disabled while its own write is in flight, unlike the
                   * switches. A disabled input loses focus, so a parent stepping
                   * this with the arrow keys — one write per press — would have the
                   * slider taken out from under them mid-adjustment. A second write
                   * landing on top of the first is the same parent's later
                   * intention, which is the right answer anyway.
                   */
                  disabled={readOnly}
                />
                <div className="limit-scale">
                  <span>{t('dash.limitScaleMin')}</span>
                  <span>{t('dash.limitScaleMax')}</span>
                </div>
              </div>
              <p className="hint">{t('dash.limitHint')}</p>
            </>
          )}
        </Card>

        <Card title={t('dash.whatsOnTitle')} subtitle={t('dash.whatsOnSub')}>
          <ul className="ctrl-rows">
            {rows.map(r => (
              <li key={r.key} className={r.unsupported ? 'is-unsupported' : undefined}>
                <span className="ctrl-body">
                  <strong>{r.title}</strong>
                  <em>{r.desc}</em>
                </span>
                {/*
                 * The row stays and the switch goes. Hiding the row entirely
                 * would leave a parent comparing two devices unable to tell a
                 * rule that is off from one the device cannot hold.
                 */}
                {!r.unsupported && (
                  <Toggle
                    on={state[r.key]}
                    onChange={set(r.key)}
                    label={r.title}
                    // Its own write, not any write: a parent may flip Location
                    // while Blocked hours is still saving, and the two are
                    // independent fields on the same document.
                    disabled={readOnly || busy === `ctrl-${r.key}`}
                  />
                )}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid-2">
        <Card
          id="web-filter"
          title={t('dash.webFilterCatsTitle')}
          subtitle={t('dash.webFilterCatsSub')}
        >
          {/*
           * Follows the row above. A category list on a device with no filter
           * describes a policy nothing reads — and the DNS hint under it would
           * be telling a parent how an enforcement they do not have behaves.
           */}
          {canWebFilter ? (
            <>
              {/* Free filters on `DEFAULT_WEB_FILTER_CATEGORIES` and cannot
                  narrow or widen it: `functions/lib/freeTier.js` drops
                  `webFilterCategories` from the write rather than refusing it,
                  so a chip tapped here used to turn green, report no error and
                  be back the way it was on the next listener tick. */}
              <PremiumTeaser teaser={webFilterTeaser} appT={activityT} />
              {/* The same headings, in the same order, as the phone's Web
                  Filter screen — `WEB_FILTER_CATEGORY_GROUPS` is shared so a
                  family that sets a policy on the phone reads it back here
                  arranged the way they left it. */}
              {WEB_FILTER_CATEGORY_GROUPS.map(group => (
                <div key={group.id} className="chip-group">
                  <p className="chip-group-title">
                    {webCategoryGroupLabel(t, group.id)}
                  </p>
                  <ul className="chips chips-toggle">
                    {group.categories.map(key => {
                      const on = categories.includes(key);
                      return (
                        <li key={key} className={on ? 'is-on' : ''}>
                          <button
                            disabled={
                              readOnly || busy === 'web-categories' || !hasFullAccess
                            }
                            aria-pressed={on}
                            title={readOnly ? t('dash.unlockToChange') : undefined}
                            onClick={() => toggleCategory(key, !on)}
                          >
                            {on && <Icon name="check" size={13} />}
                            {webCategoryLabel(t, key)}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
              <p className="hint">{t('dash.dnsHint')}</p>
            </>
          ) : (
            <p className="hint">{t('dash.rowNotSupported')}</p>
          )}
        </Card>

        <StarChartCard leaderboard={leaderboard} />
        {/* The family screen-time board is dropped, here as on the phone —
            decided 2026-09-08 (docs/FEASIBILITY.md, D4). The switch that fed it
            is gone from Family detail, so this card could only draw a board
            nobody can turn on. Commented, not deleted.
        <FamilyScreenTimeCard board={screenTimeBoard} />
        */}

        {/*
          A reward is minutes of screen time, granted on a device that can
          present the task to claim. `apps/tv` has no claim screen and a
          browser extension has neither the screen nor anything to spend the
          minutes on — see `@kidgate/core/domain/rewardTaskSupport`.
        */}
        <Card
          id="reward-tasks"
          title={t('dash.rewardTasksTitle')}
          subtitle={t('dash.rewardTasksSub')}
        >
          {!supportsRewardTasks(device) ? (
            <p className="hint">{t('dash.rowNotSupported')}</p>
          ) : (
            <>
              {/* The same wall as the phone's, from the same fold: the server
                refuses the eleventh active task and nothing said so first. */}
              <PremiumTeaser teaser={rewardCapTeaser} appT={activityT} />
              <ul className="events">
                {(rewardTasks[device.id] || []).map(task => (
                  <li key={task.id}>
                    <span
                      className={`ev-state tone-${
                        task.status === 'approved'
                          ? 'good'
                          : task.status === 'claimed'
                            ? 'warning'
                            : 'muted'
                      }`}
                    >
                      <Icon
                        name={
                          task.status === 'approved'
                            ? 'check'
                            : task.status === 'claimed'
                              ? 'alert'
                              : 'clock'
                        }
                        size={13}
                      />
                    </span>
                    <span
                      className="reward-stars"
                      title={t('dash.rewardTaskStars', {
                        count: resolveTaskStars(task),
                      })}
                      aria-label={t('dash.rewardTaskStars', {
                        count: resolveTaskStars(task),
                      })}
                    >
                      {Array.from({ length: resolveTaskStars(task) }, (_, index) => (
                        <Icon key={index} name="star" size={11} />
                      ))}
                    </span>
                    <span className="ev-body">
                      <strong>{task.title}</strong>
                      <em>
                        {/*
                        `bonusMinutes` and `repeat` are the field names the
                        repository maps. This read `task.minutes` and
                        `task.cadence` until 2026-09-03 and rendered
                        "+undefined min · undefined" in fourteen languages —
                        nothing failed, because both halves were interpolated
                        into a string nobody asserted on.
                      */}
                        {t('dash.rewardTaskMeta', {
                          minutes: task.bonusMinutes,
                          cadence: t(
                            task.repeat === 'daily'
                              ? 'dash.rewardDaily'
                              : 'dash.rewardOnce',
                          ),
                        })}
                        {task.status === 'claimed' ? t('dash.rewardTaskWaiting') : ''}
                      </em>
                    </span>
                    {task.status === 'claimed' ? (
                      <>
                        {/* Both answers, and the Approve button had no `onClick`
                          at all until 2026-09-03 — `resolveRewardClaim` was
                          built and never called.

                          The busy key names the answer, not just the task: one
                          key for both could not say which was pressed, and a
                          pair of buttons that only go disabled reads as a
                          frozen card for the length of the round trip. Both go
                          disabled, the pressed one shows the ellipsis — the
                          same rule the phone's claims inbox follows. */}
                        <button
                          className="btn btn-sm"
                          disabled={
                            readOnly ||
                            busy === `reward-reject-${task.id}` ||
                            busy === `reward-approve-${task.id}`
                          }
                          title={readOnly ? t('dash.unlockToChange') : undefined}
                          onClick={() =>
                            run(`reward-reject-${task.id}`, () =>
                              actions.resolveRewardClaim(task.id, false),
                            )
                          }
                        >
                          {busy === `reward-reject-${task.id}`
                            ? '…'
                            : t('dash.rewardReject')}
                        </button>
                        <button
                          className="btn btn-sm btn-primary"
                          disabled={
                            readOnly ||
                            busy === `reward-approve-${task.id}` ||
                            busy === `reward-reject-${task.id}`
                          }
                          title={readOnly ? t('dash.unlockToChange') : undefined}
                          onClick={() =>
                            run(`reward-approve-${task.id}`, () =>
                              actions.resolveRewardClaim(task.id, true),
                            )
                          }
                        >
                          {busy === `reward-approve-${task.id}`
                            ? '…'
                            : t('dash.approve')}
                        </button>
                      </>
                    ) : (
                      task.status === 'open' && (
                        <button
                          className="btn btn-sm"
                          disabled={readOnly || busy === `reward-${task.id}`}
                          aria-label={t('dash.rewardDelete')}
                          title={
                            readOnly ? t('dash.unlockToChange') : t('dash.rewardDelete')
                          }
                          onClick={() =>
                            run(`reward-${task.id}`, () =>
                              actions.deleteRewardTask(task.id),
                            )
                          }
                        >
                          <Icon name="trash" size={13} />
                        </button>
                      )
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}

          {supportsRewardTasks(device) && (
            <RewardTaskForm
              device={device}
              readOnly={readOnly}
              busy={busy === 'reward-create'}
              onCreate={input =>
                run('reward-create', () => actions.createRewardTask(input))
              }
            />
          )}
        </Card>
      </div>
    </>
  );
}
