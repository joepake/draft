import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  isKnownPermission,
  permissionLabel,
  webCategoryLabel,
} from '../dashboard/labels.js';
import { activityCopy, useActivityTranslate } from '../dashboard/activityCopy.js';
import { getPlanState, getTrialEndsAt } from '../lib/trial.js';
import StepUpSheet from '../auth/StepUpSheet.jsx';
import ScheduleEditor from '../dashboard/ScheduleEditor.jsx';
import AppLimitsEditor from '../dashboard/AppLimitsEditor.jsx';
import PlacesEditor from '../dashboard/PlacesEditor.jsx';
import DeviceAdmin from '../dashboard/DeviceAdmin.jsx';
import MessageAlertsCard from '../dashboard/MessageAlertsCard.jsx';
import Toast from '../dashboard/Toast.jsx';
import { timeAgo } from '../dashboard/timeAgo.js';
import PlanCard from '../dashboard/PlanCard.jsx';
import ParkedDevicesCard from '../dashboard/ParkedDevicesCard.jsx';
import { waitForParentPresence } from '../dashboard/parentPresence.js';
import { resolveTodayTopApps } from '@kidgate/core/domain/todayTopApps';
import {
  resolveLockedTeaser,
  resolveTopAppsTeaser,
} from '@kidgate/core/domain/premiumTeaser';
import { otherAppsMinutes } from '@kidgate/core/domain/childUsage';
import PremiumTeaser from '../dashboard/PremiumTeaser.jsx';
import { localDayKey } from '@kidgate/core/domain/weeklyReportSchedule';
import {
  MONITORED_SWAP_COOLDOWN_MS,
  summariseParking,
} from '@kidgate/core/domain/deviceParking';
import TrustedContactsCard from '../dashboard/TrustedContactsCard.jsx';
import BrandLogo from '@kidgate/web-ui/BrandLogo';
import Icon from '@kidgate/web-ui/Icon';
import { deviceIconName } from '../dashboard/deviceIcon.js';
import { childMinutesUsedToday } from '../dashboard/childBudgetSpent.js';
import { readDeviceBattery } from '@kidgate/core/domain/battery';
import { isAndroidLike, isDesktopLike } from '@kidgate/core/domain/platformFamily';
import { isKidGateOwnApp } from '@kidgate/core/domain/ownApp';
import { resolveActivityKind } from '@kidgate/core/domain/activityKind';
import { buildAttention, buildFamilyAttention } from '../dashboard/attentionItems.js';
import AttentionRail from '../dashboard/AttentionRail.jsx';
import AttentionList from '../dashboard/AttentionList.jsx';
import { getProtectionSummaryKeys } from '@kidgate/core/domain/protectionStatus';
import { resolveLockEnforcement } from '@kidgate/core/domain/lockEnforcement';
import { hasUnseenWeeklyReport } from '@kidgate/core/domain/weeklyReportBadge';
import {
  readWeeklyReportSeen,
  writeWeeklyReportSeen,
} from '../dashboard/reportSeen.js';
import {
  appBlockingNoteKey,
  supportsAppBlocking,
  supportsAppLimits,
  supportsLock,
  supportsScreenTime,
} from '@kidgate/core/domain/controlSupport';
import {
  resolveInstallApprovalPolicy,
  withApprovedPackage,
} from '@kidgate/core/domain/appInstallApproval';
import { supportsLocation } from '@kidgate/core/domain/locationSupport';
import { supportsCheckIn } from '@kidgate/core/domain/checkInSupport';
import { supportsSos } from '@kidgate/core/domain/sosSupport';
import {
  supportsAppInstallAlerts,
  supportsTamperAlerts,
} from '@kidgate/core/domain/alertSupport';
import { resolveMessageMonitoringSummary } from '@kidgate/core/domain/messageMonitoringStatus';
import { LOCATION_STALE_AFTER_MS } from '@kidgate/core/domain/childLocation';
import {
  showsVideoHistoryCard,
  supportsVideoHistory,
  videoHistoryBlockerKey,
  videoHistoryUnavailableKey,
} from '@kidgate/core/domain/videoHistorySupport';
import { youtubeOpenTarget } from '@kidgate/core/domain/youtubeUrl';
import { supportsAppInventory } from '@kidgate/core/domain/appInventorySupport';
import { appInventorySummaryKey } from '@kidgate/core/domain/appInventoryReport';
import { useAppInventory } from '../dashboard/useAppInventory';
import { useLatestBuilds } from '../dashboard/useLatestBuilds.js';
import {
  formatBuildLabel,
  resolveBuildFreshness,
} from '@kidgate/core/domain/buildFreshness';
import { getEffectiveDeviceStatus } from '@kidgate/core/domain/deviceStatus';
import { resolveChildPresence } from '@kidgate/core/domain/childPresence';
import { resolveChildLocationView } from '@kidgate/core/domain/childLocation';
import { resolveChipTargetDevice } from '@kidgate/core/domain/familySummary';
import { slowBeatMinutes } from '@kidgate/core/domain/reportCadence';
import {
  AppBars,
  formatMinutes,
  ScheduleGrid,
  UsageBars,
  UsageDayTimeline,
  UsageRing,
} from '../dashboard/charts.jsx';
import ReportPanel from '../dashboard/ReportPanel.jsx';
import ChildInitial from '../dashboard/ChildInitial.jsx';
import DeviceDot, { STATUS_KEY, STATUS_TONE } from '../dashboard/DeviceDot.jsx';
import ChildHub from '../dashboard/ChildHub.jsx';
import ControlCenter from '../dashboard/ControlCenter.jsx';
import ReportHub from '../dashboard/ReportHub.jsx';
import ChildReport from '../dashboard/ChildReport.jsx';
import FamilySummaryRow, {
  ChildPills,
  childPills,
  useFamilyCounts,
} from '../dashboard/FamilySummary.jsx';
import FamilySettingsCard from '../dashboard/FamilySettingsCard.jsx';
import NotificationPrefsCard from '../dashboard/NotificationPrefsCard.jsx';
import SupportCard from '../dashboard/SupportCard.jsx';
import AccountCard from '../dashboard/AccountCard.jsx';
import ActivityFeed from '../dashboard/ActivityFeed.jsx';
import { activityIconName } from '../dashboard/activityIcon.js';
import { RichText } from '@kidgate/web-ui/RichText';
import { useT } from '@kidgate/web-ui/useT';
import { getLocaleTag } from '@kidgate/i18n/web';
import Card from '../dashboard/Card.jsx';
import ControlsTab from '../dashboard/ControlsTab.jsx';

/**
 * Phone width, where the left menu is a bottom bar.
 *
 * **In JavaScript, not only in CSS, because one block has to MOVE rather than
 * hide.** The rail's footer — plan, language, palette, sign out — has no place
 * in a four-icon bottom bar, and it is the Settings section that owns those
 * facts on a phone. CSS can hide it in one place and cannot re-parent it into
 * the other, and rendering it twice would put two language pickers on the page
 * for one setting. So the breakpoint is read here and the block is handed to
 * whichever of the two is on screen.
 *
 * 820px is the width the stylesheet already collapses the grid at; the two are
 * the same decision and must not drift.
 */
const COMPACT_QUERY = '(max-width: 820px)';

/**
 * Where the Attention rail fits beside the 54rem content column.
 *
 * Read here rather than only in CSS for the same reason as the rail's content:
 * the parked-device banner has to MOVE — into the rail where there is one, back
 * into the flow where there is not — and a copy in both places would be two
 * banners answering one question on a browser mid-resize.
 */
const WIDE_QUERY = '(min-width: 1180px)';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  );
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const mq = window.matchMedia(query);
    const onChange = event => setMatches(event.matches);
    // Not only on change: a browser resized across the breakpoint before this
    // mounted, and a device rotated during the first paint, both land here
    // with the initial value already stale.
    setMatches(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

/**
 * The stored `status` field recomputed, which is what every other surface
 * shows. Hoisted so the sidebar rows and the header agree without threading a
 * clock through both.
 */
function deviceStatusOf(device) {
  return getEffectiveDeviceStatus(device, Date.now());
}

// No `icon` field, and no bar to draw them in since 2026-09-16: the
// control-centre grid is the navigation, the way it is on the phone, and these
// are the five panels a card can push. The label still heads the panel it
// opens, which is the only place one of these words is read now.
//
// These are about ONE DEVICE and live inside the Family section, under the
// device a parent picked. `report` used to be the sixth and was the only one
// that was not — it sums every device in the family — which is why it is a
// section of its own now rather than a tab that ignored the header above it.
/**
 * The protection verdict's tone on the hero row.
 *
 * `warning` for a device that has gone quiet rather than `critical`: the level
 * says nothing was heard, not that something was refused, and the status pill
 * beside it already carries that fact in the register the whole page uses.
 */
const PROTECTION_TONE = {
  protected: 'good',
  warning: 'warning',
  inactive: 'warning',
  critical: 'critical',
};

const TABS = [
  { id: 'overview', labelKey: 'dash.tabOverview' },
  { id: 'screen', labelKey: 'dash.tabScreen' },
  { id: 'apps', labelKey: 'dash.tabApps' },
  { id: 'safety', labelKey: 'dash.tabSafety' },
  { id: 'controls', labelKey: 'dash.tabControls' },
];

/**
 * The left menu: the same four the phone's tab bar draws, in the same order,
 * named by the same keys.
 *
 * Two parent surfaces, one product — a parent who learned the phone should not
 * have to learn a second information architecture to read the same family on a
 * laptop. The labels come from the app pack (`nav.*`) rather than a `dash.*`
 * twin, so the two can never disagree about what a section is called; the
 * namespace is opened for the web in `packages/i18n/src/activityFeed.ts`.
 *
 * The phone's bar is capped at four by a 375pt screen. This one is not, and it
 * still carries four: the cap is what forced the phone to decide what the top
 * level *is*, and that decision is the part worth sharing.
 */
/**
 * The left menu, and it is one item shorter on a phone.
 *
 * **Requests & reports is a section on a rail and a row inside Settings on a
 * bottom bar** — the same content reached two ways, not two designs. A vertical
 * rail has room to name a fifth destination; a four-icon bottom bar does not,
 * and a fifth tab there would shrink every label to fit the one a parent opens
 * least.
 *
 * The phone resolves it the same way and always has: its Settings screen
 * carries a row that pushes `Routes.SupportReports`, glyph `mail`. So the
 * compact branch is not a fallback — it is what the other console does.
 */
const SUPPORT_SECTION = {
  id: 'support',
  labelKey: 'supportReports.title',
  icon: 'mail',
};

const SECTIONS = [
  { id: 'family', labelKey: 'nav.family', icon: 'home' },
  { id: 'activity', labelKey: 'nav.activities', icon: 'activity' },
  { id: 'report', labelKey: 'nav.reports', icon: 'chart' },
  SUPPORT_SECTION,
  { id: 'settings', labelKey: 'nav.settings', icon: 'settings' },
];

/** The bottom bar's four. Support moves inside Settings, it does not vanish. */
const COMPACT_SECTIONS = SECTIONS.filter(item => item.id !== SUPPORT_SECTION.id);

/**
 * Devices disagree about whether `osVersion` already names the platform —
 * iOS reports "iOS 18.7.8", Android often just "15" — so printing
 * "{platform} {osVersion}" gives "iOS iOS 18.7.8" on half the fleet.
 */
function osLabel(platform, osVersion) {
  const base =
    platform === 'ios'
      ? 'iOS'
      : platform === 'macos'
        ? 'macOS'
        : platform === 'windows'
          ? 'Windows'
          : platform === 'androidtv'
            ? 'Android TV'
            : 'Android';
  const version = (osVersion || '').trim();
  if (!version) return base;
  return version.toLowerCase().startsWith(base.toLowerCase())
    ? version
    : `${base} ${version}`;
}

/**
 * Permission states are not binary. Lumping everything that is not
 * `authorized` under "Turned off" accuses a parent of switching something off
 * that was in fact never asked for, and it disagrees with the attention list,
 * which counts only real denials.
 */
const PERMISSION_STATE = {
  authorized: { labelKey: 'dash.stateAllowed', tone: 'good', icon: 'check' },
  denied: { labelKey: 'dash.stateDenied', tone: 'critical', icon: 'ban' },
  notDetermined: {
    labelKey: 'dash.stateNotDetermined',
    tone: 'muted',
    icon: 'clock',
  },
  restricted: { labelKey: 'dash.stateRestricted', tone: 'warning', icon: 'alert' },
  unavailable: {
    labelKey: 'dash.stateUnavailable',
    tone: 'muted',
    icon: 'minus',
  },
  unknown: { labelKey: 'dash.stateUnknown', tone: 'muted', icon: 'clock' },
};

function permissionState(value) {
  return PERMISSION_STATE[value] || PERMISSION_STATE.unknown;
}

/**
 * One permission, two names — the split `@kidgate/core/domain/protectionStatus`
 * already makes for the phone's Protection screen, made here too.
 *
 * `screenTime` is the field every child device writes its usage grant into, and
 * Android calls that grant **Usage access**. This page printed Apple's word for
 * it on every device in the fleet, so a parent with an Android phone or an
 * Android TV was told to go and find a "Screen Time" setting their device has
 * never had — the same instruction the app deliberately avoids giving.
 *
 * The Android names come from the **app** key space, through `activityT`: they
 * are the words the child's own screen shows, already translated into all
 * fourteen packs, and writing web copy for them would be a second set of names
 * for one setting, free to drift. Every other permission keeps its `perm.*`
 * label — only this one is called two things.
 */
function permissionName(t, activityT, key, platform) {
  if (key === 'screenTime' && isAndroidLike(platform)) {
    return activityT('protection.usageAccessPermission');
  }
  return permissionLabel(t, key);
}

/**
 * Reads the module-level `t`: it is called from `useMemo` bodies and from
 * inside `map` callbacks whose component already re-renders on a language
 * change, so threading a hook through every call site would buy nothing.
 */

function StatTile({ label, value, meta, tone = 'default', icon }) {
  return (
    <div className={`tile tone-${tone}`}>
      <span className="tile-label">
        {icon && <Icon name={icon} size={15} />}
        {label}
      </span>
      <strong className="tile-value">{value}</strong>
      {meta && <span className="tile-meta">{meta}</span>}
    </div>
  );
}

/**
 * What a locked device is actually doing, as three different sentences.
 *
 * `isLocked` is what the parent asked for, and this pill used to render it as
 * though it were what happened — so a television that was switched off, out of
 * range, or running a build with no push handler said **Locked** exactly like
 * one with the overlay covering the room. `@kidgate/core/domain/lockEnforcement`
 * decides which of the three is true and which surfaces can answer at all; the
 * phone's family list reads the same fold through `getDeviceListStatusKeys`.
 *
 * `notApplied` keeps the warning tone rather than gaining a louder one: the
 * pill has three tones and inventing a fourth for this would mean a colour
 * nothing else on the page uses. The sentence is what carries it.
 */
const LOCK_STATE_KEY = {
  sent: 'dash.statusLockSent',
  notApplied: 'dash.statusLockNotApplied',
};

function StatusPill({ status, device }) {
  const { t } = useT();
  const known = STATUS_TONE[status] ? status : 'offline';
  /*
   * Off the raw fields, not off `known`.
   *
   * `getEffectiveDeviceStatus` stopped answering `'locked'` for a locked device
   * that has gone quiet (2026-09-15), which is what this pill wanted all along
   * — but reading the lock *through* it would then drop the three sentences
   * below on exactly the device they were written for: a television switched
   * off, which is the case `lockEnforcement` exists to name. `supportsLock` is
   * still the gate, so an extension carrying a stale `isLocked` says nothing.
   */
  const lockState =
    device && device.isLocked && supportsLock(device)
      ? resolveLockEnforcement(device)
      : null;
  const labelKey = (lockState && LOCK_STATE_KEY[lockState]) || STATUS_KEY[known];
  return (
    <span className={`pill tone-${STATUS_TONE[known]}`}>
      <i className="pill-dot" aria-hidden="true" />
      {t(labelKey)}
    </span>
  );
}

/**
 * One selectable device in the rail, always under its child's heading.
 *
 * It carried a second shape until 2026-09-15 — a child who owned exactly one
 * device was drawn as this row with the person's name and avatar on it,
 * instead of a heading over one row. It saved a line and cost the column its
 * consistency: two row shapes in one list, one of them with no chevron, and a
 * parent scanning the rail had to work out which rows were people.
 *
 * The leading tile is the device glyph from `deviceIconName` — the same call
 * the phone's device card makes, so a Mac is the same picture on both surfaces
 * and an iPad is not drawn as an iPhone here.
 */
function DeviceRow({ device, active, onSelect, latestBuilds }) {
  const { t } = useT();
  const outdated =
    resolveBuildFreshness(device, latestBuilds ?? {}).status === 'outdated';
  return (
    <button
      className={`kid${active ? ' is-active' : ''}`}
      onClick={onSelect}
      aria-current={active ? 'true' : undefined}
    >
      <span className={`kid-avatar av-${device.platform}`}>
        <Icon name={deviceIconName(device)} size={20} />
      </span>
      <span className="kid-meta">
        <strong>{device.name}</strong>
        {device.modelName && device.modelName !== device.name && (
          <em>{device.modelName}</em>
        )}
        {/*
          Which machine is on an old build, without opening each one in turn —
          the rail is where "which of these" gets asked. Only ever drawn on an
          outdated device: `unknown` is every row that has not reported a build
          yet and every platform with nothing published to compare against, and
          a mark for that would sit on most rails saying nothing.
        */}
        {outdated && <em className="kid-build-old">{t('dash.buildOutdated')}</em>}
      </span>
      <DeviceDot device={device} />
    </button>
  );
}

/**
 * The header of a child who owns more than one device — a disclosure, not a
 * label.
 *
 * The rail used to render every device of every child at once, so its height
 * was children × devices while the scroller it lives in is fixed. A family of
 * five hunted for one machine through a 14rem window. A parent works on one
 * child at a time, so only one group is open and the rest cost a row each.
 *
 * What a collapsed group must not lose is the answer the rail exists to give at
 * a glance — is anything wrong over there. So the closed row carries one dot
 * per device, exact rather than rolled up into a worst-of verdict that would
 * need a sentence of its own to be honest. Past four it stops drawing and
 * counts, because five dots in a 272px rail is a texture, not a reading.
 */

/**
 * @param expandable A group with no child behind it — the unassigned devices.
 *   It stays a disclosure, because there is no person to open a hub for.
 *   A child's row is a link into their hub instead, the way the phone's
 *   Family list is, so `aria-expanded` would be describing a fold that does
 *   not happen.
 */
function KidGroupHead({
  group,
  open,
  containsActive,
  onActivate,
  expandable,
  appT,
  pills = [],
  onlineCount = 0,
  stars = 0,
  hasActiveSos = false,
  usedMinutes = null,
  limitMinutes = null,
  onLockAll = null,
  lockBusy = false,
  readOnly = false,
}) {
  const { t } = useT();
  /*
   * Last active is worth a line in both states — online it is the proof behind
   * the green dot, offline it is the whole question. Folded across the set,
   * never per device: the most recent `lastActiveAt` of every machine the
   * child holds is the only honest reading of "when did we last hear".
   */
  const presence = resolveChildPresence(group.devices, Date.now());
  const lastActiveLabel = presence.lastActiveAt
    ? appT('family.lastActiveDate', { date: timeAgo(presence.lastActiveAt) })
    : presence.online
      ? null
      : appT('family.lastActiveUnknown');

  const meta =
    onlineCount > 0
      ? appT('family.metaOnlineCount', {
          count: group.devices.length,
          online: onlineCount,
        })
      : [
          appT('family.chipDeviceCount', { count: group.devices.length }),
          appT('family.healthOffline'),
        ].join(' · ');

  /*
   * The carried device's last fix, as one sentence: the place when we can name
   * one, the coordinates when we cannot, and the age of the fix either way —
   * a position with no time on it is the thing a parent most often misreads.
   */
  const carried = group.child
    ? resolveChildLocationView(group.child, group.devices).carried
    : null;
  const fix = carried?.lastLocation ?? null;
  const placeLabel = fix
    ? [
        fix.placeName ||
          (fix.nearbyPlaceName
            ? t('dash.nearPlace', { place: fix.nearbyPlaceName })
            : fix.latitude != null && fix.longitude != null
              ? `${fix.latitude.toFixed(5)}, ${fix.longitude.toFixed(5)}`
              : t('dash.lastKnownLocation')),
        fix.updatedAt ? timeAgo(fix.updatedAt) : null,
      ]
        .filter(Boolean)
        .join(' · ')
    : null;

  const lockable = group.devices.filter(supportsLock);
  const allLocked = lockable.length > 0 && lockable.every(d => d.isLocked);

  /*
   * The whole card opens the child, not just the name row: everything on it —
   * presence, screen time, the alert pills — describes the person, so a click
   * anywhere that is not one of the nested controls reads as "tell me more
   * about them". `apps/mobile`'s card carries the same note.
   *
   * A `div` with a role rather than a `button`, because a button may not
   * contain one and this card holds Lock all.
   */
  const activate = event => {
    if (event.target.closest('button')) return;
    onActivate();
  };

  return (
    <div
      className={`kid-card${open ? ' is-open' : ''}${
        containsActive && !open ? ' is-active' : ''
      }`}
      role="button"
      tabIndex={0}
      aria-expanded={expandable ? open : undefined}
      onClick={activate}
      onKeyDown={event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onActivate();
        }
      }}
    >
      <div className="kid-card-head">
        {group.child ? (
          <span className="kid-avatar-wrap">
            <ChildInitial
              name={group.child.name}
              colorIndex={group.child.colorIndex}
              size={44}
            />
            {/* The presence dot rides the avatar's corner, the way the phone
                draws it — one glance answers who, and whether. */}
            {/* The dot answers the PERSON, not a machine, so it reads
                `resolveChildPresence` rather than any one device's status. */}
            <i
              className={`kid-dot tone-${presence.online ? 'good' : 'muted'}`}
              aria-hidden="true"
            />
          </span>
        ) : null}
        <span className="kid-meta">
          <span className="kid-name-row">
            <strong>
              {group.child ? group.child.name : t('dash.unassignedDevices')}
            </strong>
            {hasActiveSos && (
              <span className="kid-sos">
                <Icon name="shieldAlert" size={12} />
                {appT('family.sos')}
              </span>
            )}
            {stars > 0 && (
              <span
                className="kid-stars"
                aria-label={appT('family.childStarsA11y', { count: stars })}
                title={appT('family.childStarsA11y', { count: stars })}
              >
                <Icon name="star" size={12} />
                {stars}
              </span>
            )}
          </span>
          <em>{meta}</em>
        </span>
        {/* Lock all sits in the card's header, where the phone puts it: it is
            about the person, and the card below it is what it acts on. */}
        {onLockAll && lockable.length > 0 && (
          <button
            className="btn btn-sm"
            disabled={readOnly || lockBusy}
            title={readOnly ? t('dash.unlockToChange') : undefined}
            aria-label={
              allLocked
                ? appT('family.unlockAllA11y', { childName: group.child?.name ?? '' })
                : appT('family.lockAllA11y', { childName: group.child?.name ?? '' })
            }
            onClick={() => onLockAll(lockable, allLocked)}
          >
            {allLocked ? appT('family.unlockAll') : appT('family.lockAll')}
          </button>
        )}
        <Icon name="chevronRight" size={16} className="kid-group-chevron" />
      </div>

      {/*
        Where they were. `resolveChildLocationView` picks WHICH machine answers
        — the designated carried device beats the freshest one, because "latest
        update wins" is the bug that makes the home tablet out-report the phone
        at school (`docs/CHILD_HUB.md`). A child with no capable device, or no
        fix yet, gets no line rather than a placeholder.
      */}
      {placeLabel && (
        <p className="kid-place">
          <Icon name="mapPin" size={12} />
          {placeLabel}
        </p>
      )}

      {lastActiveLabel && (
        <p className="kid-last-active">
          <Icon name="activity" size={12} />
          {lastActiveLabel}
        </p>
      )}

      {/*
        Today's screen time — the number this product is about, and the one the
        phone's card leads with. The figures sit ABOVE the bar rather than
        under it: they are the reading, and the bar is the picture of it.
        Nothing at all when no device reported today, because `0m` beside
        "today" reads as a quiet afternoon rather than as silence.
      */}
      {usedMinutes !== null && (
        <div className="kid-usage">
          <strong>
            {limitMinutes
              ? t('dash.limitSharedSpent', {
                  used: formatMinutes(usedMinutes),
                  limit: formatMinutes(limitMinutes),
                })
              : `${t('dash.todayTitle')} · ${formatMinutes(usedMinutes)}`}
          </strong>
          {limitMinutes ? (
            <span className="kid-usage-track">
              <span
                className={`kid-usage-fill${usedMinutes > limitMinutes ? ' is-over' : ''}`}
                style={{
                  width: `${Math.min(100, Math.round((usedMinutes / limitMinutes) * 100))}%`,
                }}
              />
            </span>
          ) : null}
        </div>
      )}

      <ChildPills pills={pills} appT={appT} />

      {/*
        Named chips, not anonymous dots: those said how many machines were
        reachable and never which. A chip whose device needs attention is
        tinted, so the card answers "which one" without being opened.
      */}
      <div className="kid-chips">
        {group.devices.map(d => (
          <span
            className={`kid-device-chip${
              getEffectiveDeviceStatus(d, Date.now()) === 'online' ? '' : ' is-alert'
            }`}
            key={d.id}
          >
            <Icon name={deviceIconName(d)} size={12} />
            <span>{d.name}</span>
            <DeviceDot device={d} />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function Dashboard({
  data,
  sideFooter,
  topActions,
  onDeviceChange,
  actions,
  /**
   * The weekly reports, from `useFamilyReports`. Null in any rendering that has
   * no data layer behind it — the tab then says there is nothing rather than
   * pretending to load forever.
   */
  reports = null,
  /**
   * The family root, for the per-family "already read" mark behind the Reports
   * dot. Null in a rendering with no data layer — the dot then never lights,
   * which is right: there is no week to have missed.
   */
  familyId = null,
  /** The signed-in uid — see `DashboardLive`. Null in a rendering with no auth. */
  accountId = null,
  accountEmail = null,
}) {
  const {
    family,
    devices,
    children,
    activities,
    familyActivities = [],
    familyTimeRequests = [],
    familyCheckIns = [],
    familySos = [],
    parentDevices = [],
    actorNames,
    checkIns,
    places,
    rewardTasks,
    leaderboard,
    // screenTimeBoard, — board dropped 2026-09-08 (docs/FEASIBILITY.md, D4)
    sosAlerts,
    timeRequests,
    siteRequests,
    webHistory,
    videoHistory,
  } = data;

  const { t, language } = useT();
  /*
   * Feed rows name keys in the app's key space (`activities.*`, `family.*`),
   * which `t` — the web key space — cannot see. This is the translator for
   * those; see `dashboard/activityCopy.js`.
   */
  const activityT = useActivityTranslate();
  const [deviceId, setDeviceId] = useState(devices[0]?.id ?? null);
  /**
   * Which of the four left-menu sections is open. `family` is the landing, the
   * way the phone opens on its Family tab.
   */
  const [section, setSection] = useState('family');
  const compact = useMediaQuery(COMPACT_QUERY);
  const wide = useMediaQuery(WIDE_QUERY);
  /**
   * Whether the Family section is showing the child list or one device.
   *
   * List first, device second — the phone's own shape: a parent is shown their
   * family and picks from it, rather than landing inside whichever device
   * happened to sort first. `deviceId` stays set while the list is open so
   * coming back re-opens the same device.
   */
  const [deviceOpen, setDeviceOpen] = useState(false);
  /**
   * The child whose hub is open, or null for the list.
   *
   * A third level rather than a flag, because the Family section is the
   * phone's stack: children, then one person, then one of their machines.
   * Leaving it set while a device is open is what lets Back land on the hub a
   * parent came through rather than at the top of the list.
   */
  const [openChildId, setOpenChildId] = useState(null);
  /** Whether the family-management cards are open, behind the family row. */
  const [familyOpen, setFamilyOpen] = useState(false);
  /** Whether Reports is showing the stored weekly sheet rather than its landing. */
  const [weekOpen, setWeekOpen] = useState(false);
  /** The child whose report is open, or null for the Reports landing. */
  const [reportChildId, setReportChildId] = useState(null);
  /** Whether Settings is showing Requests & reports. Compact widths only. */
  const [supportOpen, setSupportOpen] = useState(false);

  /*
   * A resize across the breakpoint keeps the parent on the page they were
   * reading, rather than on whichever container happens to survive.
   *
   * Without this, narrowing the window while Requests & reports is open leaves
   * `section` naming a menu item the bottom bar no longer has: no tab lights,
   * and the section renders with nothing to go back to. Widening has the
   * mirror problem — the row inside Settings would keep the page mounted while
   * a rail item for it sits right there, unhighlighted.
   */
  useEffect(() => {
    if (compact && section === SUPPORT_SECTION.id) {
      setSection('settings');
      setSupportOpen(true);
    } else if (!compact && supportOpen) {
      setSection(SUPPORT_SECTION.id);
      setSupportOpen(false);
    }
  }, [compact, section, supportOpen]);
  const [tab, setTab] = useState('overview');
  /** Whether the hero's protection row has this device's items open. */
  const [heroIssuesOpen, setHeroIssuesOpen] = useState(false);
  const [range, setRange] = useState(14);
  const [busy, setBusy] = useState(null);
  const [toast, setToast] = useState(null);
  /*
   * A toast clears itself. It used to stay until the next write started, so a
   * success from ten minutes ago sat over the page reading as the answer to
   * whatever had just been done. A failure gets twice as long: it is the only
   * place the reason is said, and it is read rather than glanced at.
   */
  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(
      () => setToast(null),
      toast.tone === 'critical' ? 9000 : 4500,
    );
    return () => clearTimeout(timer);
  }, [toast]);
  /** The PIN / QR sheet that unlocks write on this browser. */
  const [stepUpOpen, setStepUpOpen] = useState(false);

  /*
   * The Reports dot.
   *
   * The weekly digest is pushed once a week and this surface receives none of
   * it — a parent who reads the dashboard rather than the phone has no signal
   * that a new week exists. The mark is the signal, and unlike the phone it
   * costs nothing: `useFamilyReports` has already read the history by the time
   * the sidebar renders.
   */
  /**
   * The child whose report is open, resolved against the live roster.
   *
   * Resolved rather than stored whole, so a child removed by the other parent
   * while this page was open drops the report instead of rendering a name that
   * no longer exists — the same rule `childView` follows in the Family stack.
   */
  const reportChildView = useMemo(
    () =>
      reportChildId
        ? ((children ?? []).find(item => item.id === reportChildId) ?? null)
        : null,
    [reportChildId, children],
  );

  /** The newest stored week — the hub's compare card, and what Back returns to. */
  const latestReport = reports?.reports?.[0] ?? null;
  const latestReportKey = latestReport?.periodKey ?? null;
  const [reportSeenKey, setReportSeenKey] = useState(() =>
    readWeeklyReportSeen(familyId),
  );
  useEffect(() => {
    setReportSeenKey(readWeeklyReportSeen(familyId));
  }, [familyId]);
  useEffect(() => {
    // Opening the tab is being shown the report: the panel behind it renders
    // the week itself, not a link to it.
    if (section !== 'report' || !latestReportKey) return;
    writeWeeklyReportSeen(familyId, latestReportKey);
    setReportSeenKey(latestReportKey);
  }, [section, latestReportKey, familyId]);
  const reportUnseen = hasUnseenWeeklyReport(latestReportKey, reportSeenKey);

  /*
   * The write grant can expire while this page stays signed in, and the two
   * live in different places: `canWrite` reads the token's `roleHint` claim,
   * the expiry sits on the `parentWebSessions` document. The claim does not
   * expire with the document, so without this flag the banner would keep
   * saying "unlocked" while every control failed — a product that looks broken
   * rather than one that is locked.
   *
   * Set by `run` when a write comes back unauthenticated, cleared by a
   * successful step-up.
   */
  const [writeExpired, setWriteExpired] = useState(false);
  const canWrite = (actions?.canWrite ?? false) && !writeExpired;
  const live = Boolean(actions);

  /**
   * Run a parent write, and say whether it landed.
   *
   * The boolean is for callers that showed the change before the server agreed
   * — the control switches — and have to put it back when it did not. Every
   * other call site ignores it, and the toast is still the only place a failure
   * is explained.
   */
  async function run(key, fn, okMessage) {
    setBusy(key);
    setToast(null);
    try {
      /*
       * The resolved value when there is one, `true` when there is not.
       * Nearly every action here returns void and every one of those call
       * sites tests `if (!ok)`, so a bare `undefined` would read as failure —
       * while the invite mint genuinely has something to hand back.
       */
      const result = await fn();
      if (okMessage) setToast({ tone: 'good', text: okMessage });
      return result === undefined ? true : result;
    } catch (e) {
      /*
       * An expired write grant, rather than a failure the parent can do
       * anything about by retrying. Drop to read-only and reopen the step-up
       * in place: the page, the tab and the thing they were editing all stay
       * where they were, so re-arming is six digits rather than a dead end.
       */
      if (e.code === 'unauthenticated' || e.code === 'staleCredential') {
        setWriteExpired(true);
        setStepUpOpen(true);
      }
      // Failures raised in the browser carry a key we own; anything relayed
      // from the Cloud Function arrives as server text and is shown as-is.
      setToast({
        tone: 'critical',
        text: e.messageKey ? t(e.messageKey) : e.message,
      });
      return false;
    } finally {
      setBusy(null);
    }
  }

  /*
   * Parking, folded once from the devices — the only thing a client can read
   * about it (`@kidgate/core/domain/deviceParking`, `docs/PRICING.md` §6).
   */
  const parking = useMemo(() => summariseParking(devices), [devices]);

  /*
   * The sheet opens **unprompted** when `choicePending` — every device parked
   * and no survivor chosen, which is exactly what trial end leaves behind.
   * Same rule as `apps/mobile`'s `FamilyScreen`, deliberately: a parent
   * answers on whichever console they have open, and a phone that asks while
   * the browser only mentions it is two answers about one plan.
   *
   * Once per parked set, keyed by the ids rather than a boolean, so a family
   * parked again months later is asked again and a parent who closed it today
   * is not asked on every render. The inline card stays as the way back in.
   */
  const [monitoredSheetOpen, setMonitoredSheetOpen] = useState(false);
  const promptedParkedSetRef = useRef(null);
  useEffect(() => {
    if (parking.parked.length === 0) {
      promptedParkedSetRef.current = null;
      setMonitoredSheetOpen(false);
      return undefined;
    }
    if (!parking.choicePending) {
      // Somebody answered — from here, from a phone, from the other parent.
      setMonitoredSheetOpen(false);
      return undefined;
    }
    const key = [...parking.parked].sort().join(',');
    if (promptedParkedSetRef.current === key) {
      return undefined;
    }
    promptedParkedSetRef.current = key;
    /*
     * After the presence call, not off this snapshot. A family the dormancy
     * reaper parked looks exactly like a pending choice, and that call is the
     * one that wakes them; opening on the first snapshot would ask a
     * returning parent to choose a device a second before they get them all
     * back. `apps/mobile` waits on the same call for the same reason.
     */
    let cancelled = false;
    void waitForParentPresence(familyId).then(() => {
      if (!cancelled) {
        setMonitoredSheetOpen(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [familyId, parking]);

  /*
   * The cooldown is the one failure `run` cannot say. It arrives as a
   * `rateLimited` whose sentence lives in the app pack
   * (`family.monitoredCooldown`, with a `{{days}}` the web toast cannot fill),
   * so it is said here through `activityT` rather than mapped to a `dash.*` twin.
   */
  async function chooseMonitored(deviceId) {
    const chosen = devices.find(d => d.id === deviceId);
    setBusy('monitored');
    setToast(null);
    try {
      await actions.chooseMonitoredDevice(deviceId);
      setToast({
        tone: 'good',
        text: activityT('family.chooseMonitoredDone', { name: chosen?.name ?? '' }),
      });
    } catch (e) {
      if (e.code === 'unauthenticated' || e.code === 'staleCredential') {
        setWriteExpired(true);
        setStepUpOpen(true);
      }
      setToast({
        tone: 'critical',
        text:
          e.serverCode === 'monitored/cooldown'
            ? activityT('family.monitoredCooldown', {
                days: Math.round(MONITORED_SWAP_COOLDOWN_MS / 86_400_000),
              })
            : e.messageKey
              ? t(e.messageKey)
              : e.message,
      });
    } finally {
      setBusy(null);
    }
  }

  // A device can appear (first pairing) or disappear (removal) while the
  // dashboard is open; the selection has to follow rather than dangle.
  useEffect(() => {
    if (devices.length === 0) {
      if (deviceId !== null) setDeviceId(null);
    } else if (!devices.some(d => d.id === deviceId)) {
      setDeviceId(devices[0].id);
    }
  }, [devices, deviceId]);

  useEffect(() => {
    onDeviceChange?.(deviceId);
  }, [deviceId, onDeviceChange]);

  const device = devices.find(d => d.id === deviceId) ?? null;
  const c = device?.controls ?? null;
  /**
   * The device the main pane is actually showing, or null.
   *
   * `device` alone is not that question: it stays resolved while the Family
   * list is open (so returning re-opens the same one) and while a parent is
   * reading Activity, Reports or Settings, none of which are about a device.
   * Every device-scoped block downstream is gated on this instead — the header
   * name, the two header buttons, the tab bar and the five panels — so none of
   * them can draw one device's facts under another section's heading.
   */
  const deviceView = section === 'family' && deviceOpen ? device : null;
  /**
   * The child whose hub the pane is showing, or null.
   *
   * A device open beats a hub: the stack is children → person → machine, and
   * the deepest frame is the one on screen.
   */
  const childView = useMemo(() => {
    if (section !== 'family' || deviceOpen || !openChildId) return null;
    return (children ?? []).find(item => item.id === openChildId) ?? null;
  }, [section, deviceOpen, openChildId, children]);
  /** The child's own devices, which is what every card on the hub folds. */
  const childDevices = useMemo(
    () => (childView ? devices.filter(d => d.childId === childView.id) : []),
    [childView, devices],
  );

  /**
   * One frame up the Family stack, named by where it lands.
   *
   * A device opened from a child's hub goes back to that child, not to the top
   * of the list — the parent walked through them and undoing one step at a
   * time is what a stack means. A device with no child behind it, and the hub
   * itself, both go back to the list.
   */
  const back = useMemo(() => {
    if (deviceView) {
      /*
       * A panel is one frame deeper than the device, now that the tab bar is
       * gone: the control-centre grid IS the navigation, the way it is on the
       * phone, and a card pushes the panel it opens. Without this step Back
       * would skip the device a parent was reading and land on the list.
       */
      if (tab !== 'overview') {
        return { label: deviceView.name, go: () => setTab('overview') };
      }
      const parent = deviceView.childId
        ? (children ?? []).find(item => item.id === deviceView.childId)
        : null;
      return {
        label: parent ? parent.name : activityT('nav.family'),
        go: () => {
          setDeviceOpen(false);
          // Only when there is no person to land on: clearing it otherwise is
          // what would skip the hub the parent came through.
          if (!parent) setOpenChildId(null);
        },
      };
    }
    if (childView) {
      return { label: activityT('nav.family'), go: () => setOpenChildId(null) };
    }
    if (familyOpen) {
      return { label: activityT('nav.family'), go: () => setFamilyOpen(false) };
    }
    /* Compact only: on a rail this is its own menu item, and a Back out of a
       top-level section would be a step to nowhere. */
    if (section === 'settings' && supportOpen) {
      return {
        label: activityT('nav.settings'),
        go: () => setSupportOpen(false),
      };
    }
    if (section === 'report' && reportChildView) {
      return {
        label: activityT('nav.reports'),
        go: () => setReportChildId(null),
      };
    }
    /* Only when there is a landing to go back TO: with no stored report the
       sheet IS the section, and a Back that returned to an empty hub would be
       a step out of the only screen with the Generate button on it. */
    if (section === 'report' && weekOpen && latestReport) {
      return {
        label: activityT('nav.reports'),
        go: () => setWeekOpen(false),
      };
    }
    return null;
  }, [
    deviceView,
    tab,
    childView,
    familyOpen,
    children,
    activityT,
    section,
    weekOpen,
    latestReport,
    reportChildView,
    supportOpen,
  ]);

  /**
   * The tabs this device has anything to put in.
   *
   * The phone's rule, and `@kidgate/core/domain/deviceSurface` holds the
   * argument: a struck-out row teaches a parent something about their phone,
   * but a whole tab of them describes the product rather than the device. A
   * browser extension measures no minutes and sees no apps, so Screen time is
   * three charts of zero drawn like measurements, and Safety is three cards
   * that can structurally never fill.
   *
   * Apps survives on purpose — the web activity and the refused-domain
   * breakdown in it are this surface's *only* real data; it is the app-shaped
   * cards inside that are gated.
   *
   * `overview` is never dropped: it is where a device with nothing else still
   * says whether it is online.
   */
  const visibleTabs = useMemo(() => {
    if (!device) {
      return TABS;
    }
    const hasSafety =
      supportsLocation(device) || supportsSos(device) || supportsCheckIn(device);
    return TABS.filter(item => {
      if (item.id === 'screen') {
        return supportsScreenTime(device);
      }
      if (item.id === 'safety') {
        return hasSafety;
      }
      return true;
    });
  }, [device]);

  /*
   * A tab that has just been hidden — the parent switched from a phone to a
   * browser extension while standing on Screen time — would otherwise leave
   * the main pane blank with no nav item lit.
   */
  useEffect(() => {
    if (!visibleTabs.some(item => item.id === tab)) {
      setTab('overview');
    }
  }, [tab, visibleTabs]);

  /**
   * The sidebar list, grouped by the person rather than by the hardware.
   *
   * The heading has always read "Children" while the rows underneath were
   * devices, so a family with one child and two devices looked like two
   * children. Grouping is the whole fix: the child is named once, their
   * devices sit under them, and a device nobody has claimed falls into a
   * trailing group that says so instead of passing as a person.
   *
   * Children with no device are left out — this list is a device picker, and a
   * heading with nothing selectable under it is a dead end.
   */
  /*
   * Everything the Family summary row and the per-child pills count, folded
   * once for the whole family. The rule for WHICH chips and in what order is
   * `@kidgate/core/domain/familySummary`, shared with the phone.
   */
  const familyCounts = useFamilyCounts({
    devices,
    timeRequests: familyTimeRequests,
    checkIns: familyCheckIns,
    sosAlerts: familySos,
  });

  /**
   * Where a summary chip lands on this surface.
   *
   * The rule itself is shared — `resolveChipTargetDevice` deep-links only when
   * the chip is about exactly ONE device, and refuses to pick one of many,
   * because opening the first of two SOS alerts sends a parent to one
   * emergency and silently drops the other. What "no single target" means is
   * this surface's: the phone scrolls its list to the top, and here the list
   * is already on screen, so the chip simply does not move the page.
   *
   * `requests` never deep-links at all: the approve/deny inbox is the
   * Attention feed on a device's Overview, so one pending request opens that
   * device and several leave the parent where the list already is.
   */
  const openSummaryChip = key => {
    const idsFor = () => {
      if (key === 'sos') return [...familyCounts.sosDeviceIds];
      if (key === 'check-in') return [...familyCounts.pendingCheckInDeviceIds];
      if (key === 'requests') return [...familyCounts.pendingRequestsByDevice.keys()];
      const wanted = key === 'health-inactive' ? 'inactive' : 'warning';
      return devices
        .filter(device => familyCounts.byDevice.get(device.id)?.level === wanted)
        .map(device => device.id);
    };
    const target = resolveChipTargetDevice(idsFor());
    if (!target) return;
    setDeviceId(target);
    /* SOS and check-ins are read on Safety and Overview respectively — the
       same two panels `ControlCenter`'s own mapping sends those cards to. */
    setTab(key === 'sos' ? 'safety' : 'overview');
    setDeviceOpen(true);
  };

  /*
   * This week's stars per child, for the pill beside the name. `leaderboard`
   * is already ranked and memoised by the hook, so this only rebuilds when the
   * standings themselves do.
   */
  const starsByChild = useMemo(
    () => new Map((leaderboard?.rows ?? []).map(row => [row.childId, row.stars])),
    [leaderboard],
  );

  const deviceGroups = useMemo(() => {
    const byChild = new Map();
    const unassigned = [];
    for (const d of devices) {
      if (d.child) {
        const list = byChild.get(d.child.id);
        if (list) list.push(d);
        else byChild.set(d.child.id, [d]);
      } else {
        unassigned.push(d);
      }
    }
    const groups = (children ?? [])
      .filter(child => byChild.has(child.id))
      .map(child => ({ key: child.id, child, devices: byChild.get(child.id) }));
    if (unassigned.length > 0) {
      groups.push({ key: 'unassigned', child: null, devices: unassigned });
    }
    return groups;
  }, [devices, children]);

  /*
   * One group open at a time, and by default it is the one holding the selected
   * device — the rail's height is then children + one child's devices instead
   * of every device the family owns.
   *
   * Selection drives it rather than the other way round: opening a group must
   * not switch the device, because switching costs a pane of Firestore reads
   * for a machine the parent was only looking for. So a parent can open a
   * sibling's group, read its rows, and pick one — and the moment they pick,
   * this snaps back to following the selection.
   *
   * A group holding the selection can still be closed by hand. The header keeps
   * the brand bar while it is, so "you are here" never disappears from the rail.
   */
  const activeGroupKey = device ? (device.child?.id ?? 'unassigned') : null;
  const [openGroupKey, setOpenGroupKey] = useState(null);
  useEffect(() => {
    if (activeGroupKey) setOpenGroupKey(activeGroupKey);
  }, [activeGroupKey]);
  // Same reading the phone shows, from the same function: the bar in the glyph
  // and the red under 20% are one rule, not one per surface.
  const battery = readDeviceBattery(device);

  /*
   * "Which build is this device on, and is it the current one?" — the same
   * question `DeviceDetailHero` answers on the phone, through the same domain
   * function and the same three i18n keys, so the two parent surfaces cannot
   * disagree about one machine.
   *
   * Null on a device that has never reported a version, which is every record
   * written before the agents started sending one.
   */
  const latestBuilds = useLatestBuilds();
  const buildLine = useMemo(() => {
    const running = formatBuildLabel(device?.appVersion, device?.appBuild) || '';
    const freshness = resolveBuildFreshness(device, latestBuilds ?? {});
    if (freshness.status === 'outdated') {
      return {
        outdated: true,
        text: t(
          freshness.kind === 'app'
            ? 'dash.appVersionUpdate'
            : // A bundle behind needs a relaunch, not a download. See the same
              // branch in `DeviceDetailHero`.
              'dash.appVersionRestart',
          { running: running || freshness.running, latest: freshness.latest },
        ),
      };
    }
    return running ? { outdated: false, text: running } : null;
  }, [device, latestBuilds, t]);

  /*
   * The header's second line — settings reached, battery, build — built here
   * so the page can count it before deciding whether it is a line at all.
   *
   * With one fact on it, it is not: a Windows machine that reports a build and
   * neither a battery nor an applied policy left `1.0.0.39` sitting alone under
   * the status row, reading as a stray number rather than as a second line.
   * One joins the row above, two or more earn their own.
   */
  const quietFacts = !device
    ? []
    : [
        device.appliedPolicy && (
          // The agent's own word that the rules reached it, from the app pack —
          // the same sentence the phone's child hub says.
          <span key="policy">
            {activityT('family.settingsReachedDevice', {
              when: timeAgo(new Date(device.appliedPolicy.atMs).toISOString()),
            })}
          </span>
        ),
        battery && (
          <span key="battery" className={battery.isLow ? 'batt batt-low' : 'batt'}>
            <Icon
              name={battery.charging ? 'batteryCharging' : 'battery'}
              size={15}
              level={battery.level}
            />{' '}
            {battery.level}%
          </span>
        ),
        buildLine && (
          // Last: the one a parent goes looking for rather than reads. Drawn at
          // all only once the device has reported a version, so records written
          // before agents did stay silent instead of showing an empty field.
          <span key="build" className={buildLine.outdated ? 'build-old' : undefined}>
            {buildLine.text}
          </span>
        ),
      ].filter(Boolean);

  const stats = useMemo(() => {
    if (!device || !c) return null;
    const last7 = device.usage.slice(-8, -1);
    const avg7 = last7.length
      ? Math.round(last7.reduce((s, d) => s + d.minutes, 0) / last7.length)
      : 0;
    const used = c.minutesUsedToday;
    const effLimit = c.dailyLimitMinutes
      ? c.dailyLimitMinutes + (c.bonusMinutesToday || 0)
      : null;
    return {
      avg7,
      used,
      effLimit,
      left: effLimit ? Math.max(0, effLimit - used) : null,
      delta: avg7 ? Math.round(((used - avg7) / avg7) * 100) : 0,
    };
  }, [device, c]);

  /*
   * This device's open items. The fold itself is `dashboard/attentionItems.js`
   * — the rail beside the Family list runs the same one over every device, and
   * two derivations of "what needs a parent" is the drift `CLAUDE.md` names.
   */
  const attention = useMemo(
    () =>
      buildAttention({
        device,
        t,
        activityT,
        timeRequests: (device && timeRequests[device.id]) || [],
        siteRequests: (device && siteRequests[device.id]) || [],
        checkIns: (device && checkIns[device.id]) || [],
      }),
    [device, t, activityT, checkIns, timeRequests, siteRequests],
  );

  /*
   * The hero's verdict — `@kidgate/core/domain/protectionStatus`, the same fold
   * the phone's hero reads and the same one the rows below it come from, so the
   * row cannot say "Protected" over a list of three problems.
   */
  const protectionSummary = useMemo(
    () => (device ? getProtectionSummaryKeys(device, Date.now()) : null),
    [device],
  );

  /* A panel opened about one machine, left open onto another's list. */
  useEffect(() => setHeroIssuesOpen(false), [deviceId]);

  /*
   * The same question asked of the whole family, for the rail.
   *
   * Only the feeds that ARE family-wide go in: `familyTimeRequests` and
   * `familyCheckIns` carry every device's rows, while site requests are
   * subscribed per device (`useFamilyData`), so a pending domain on a machine
   * nobody has opened is invisible here. Recorded as a gap in this app's
   * `CLAUDE.md` rather than papered over with the open device's rows.
   */
  const familyAttention = useMemo(
    () =>
      buildFamilyAttention({
        devices,
        t,
        activityT,
        timeRequests: familyTimeRequests,
        checkIns: familyCheckIns,
      }),
    [devices, t, activityT, familyTimeRequests, familyCheckIns],
  );

  /*
   * The per-app breakdown lives on `usageDays/{date}`, never on the device
   * document — `reportChildUsage` stores it there and does not write it back
   * (see `DeviceControls.topApps`). Reading `controls.topApps` is what the
   * phone's `useTodayTopApps` exists to stop, and here it was undefined on
   * every real family, which took the whole tab down with it.
   *
   * The latest day rather than "today": the same row the timeline card reads,
   * so both cards describe one day rather than two.
   */
  /*
   * Since 2026-09-05 the device document is the second source: the top three
   * ride it for everyone (`Device.topAppsToday`), which is the whole of what a
   * free family is promised — and they have no day document at all. The
   * resolver is `@kidgate/core/domain/todayTopApps`, shared with the phone,
   * and it lets today on the device beat a stale latest row; the "Other apps"
   * remainder is computed against whichever day the rows came from.
   */
  const todayKey = localDayKey(Date.now(), -new Date().getTimezoneOffset());
  const todayTopApps = resolveTodayTopApps({
    usageDay: device?.usage?.[device.usage.length - 1] ?? null,
    device: device ?? {},
    todayKey,
  });
  const todayApps = todayTopApps.apps;
  const todayMinutes = todayTopApps.totalMinutes;

  /*
   * The day the Screen Time tab is about — whichever bar was clicked in the
   * trend chart, and today until one is.
   *
   * That tab only: the Apps tab has no chart to pick from, and its ranking
   * sits beside the per-app caps, which are enforced against today. A list
   * quietly following a selection made on another tab would be read as
   * today's and compared against them.
   */
  const [selectedUsageDate, setSelectedUsageDate] = useState(null);
  const visibleUsage = useMemo(
    () => (device?.usage ?? []).slice(-range),
    [device?.usage, range],
  );
  /*
   * A selection the chart no longer draws — the range was narrowed, or the
   * parent switched device — would leave the card describing a day with no bar
   * to point at. Null is today, which is what the chart opens on.
   */
  useEffect(() => {
    if (
      selectedUsageDate &&
      !visibleUsage.some(day => day.date === selectedUsageDate)
    ) {
      setSelectedUsageDate(null);
    }
  }, [selectedUsageDate, visibleUsage]);

  const screenDay =
    (selectedUsageDate
      ? visibleUsage.find(day => day.date === selectedUsageDate)
      : null) ?? null;
  const screenDayIsToday = !screenDay || screenDay.date === todayKey;
  /*
   * `resolveTodayTopApps` answers today's question — it falls back to
   * `Device.topAppsToday`, which carries no date beyond `controls.usageDate`.
   * Handed an older day it would answer with today's three under that day's
   * heading, so an older day reads its own document or shows nothing.
   */
  const screenTopApps = screenDayIsToday
    ? todayTopApps
    : {
        apps: screenDay.topApps ?? [],
        totalMinutes: screenDay.minutes ?? 0,
        source: screenDay.topApps?.length ? 'usageDay' : 'none',
      };
  /*
   * Which of the four plan states this family is in, or null.
   *
   * `VITE_TRIAL_DAYS` arrived on 2026-09-10 (`lib/trial.js`); before it, this
   * surface could not tell a running trial from an ended one and every gate
   * below asked `plan === 'premium'` instead. Null still means it cannot say —
   * a build with no declared duration — and each caller keeps its old
   * question in that case rather than assuming a length the server would not
   * honour.
   */
  const planState = getPlanState(family.plan === 'premium', family.trialStartedAt);

  /*
   * When this family's trial ran out, or null.
   *
   * Null covers three different things and every one of them means "do not put
   * a date on screen": no `VITE_TRIAL_DAYS` in this build, no
   * `trialStartedAt` (the clock starts at the first child pairing), or a
   * trial still running. `lib/trial.js` carries why a missing duration is
   * never assumed to be seven.
   */
  const trialEndsAt = (() => {
    const endsAt = getTrialEndsAt(family.trialStartedAt);
    if (!endsAt) {
      return null;
    }
    return endsAt.getTime() <= Date.now() ? endsAt : null;
  })();

  /*
   * The tail row under those three, for a free family.
   *
   * Only `trialEnded` lacks full access, matching the phone's
   * `isPremiumActive || !trialStartedAt || trialActive`. The fallback when the
   * state is unknown is the old coarse question, and it is chosen rather than
   * tolerated: being wrong that way costs one extra sentence under three apps
   * during a trial, while the other direction sells a paying family what they
   * already have.
   */
  const hasFullAccess = planState
    ? planState !== 'trialEnded'
    : family.plan === 'premium';
  /*
   * The band's offer, resolved beside the ranking's because both read the same
   * plan. `UsageDayTimeline` decides whether to draw it: a free family whose
   * device *cannot* report a timeline at all keeps the unsupported sentence,
   * since Premium would not buy them a band either.
   */
  const timelineTeaser = resolveLockedTeaser({ id: 'usageTimeline', hasFullAccess });

  /*
   * The teasers the phone had and this surface did not (rule 10, 2026-09-13).
   * Every one of these screens exists here too, and a free family opening them
   * on the web read an empty card with no sentence — the exact state the fold
   * was written for, left standing on one of the two parent consoles.
   *
   * **One per tab, not one per page.** The phone's "one per screen" rule maps
   * onto tabs here: a tab is what a parent has in front of them. So the apps
   * tab carries the web-history offer and falls back to video history only
   * when the filter has refused nothing this week — `resolveLockedTeaser`
   * declines `webHistory` without a number, and a tab with no offer beats a tab
   * with two. The screen tab already carries the ranking's and the band's; the
   * controls tab carries the filter's and the reward cap's.
   */
  const activityWindowTeaser = resolveLockedTeaser({
    id: 'activityWindow',
    hasFullAccess,
  });
  const webHistoryTeaser = resolveLockedTeaser({
    id: 'webHistory',
    hasFullAccess,
    weekCounters: device?.weekCounters,
    // The same server-corrected key the rest of this component reads, never a
    // fresh one: `isWeekCountersCurrent` compares against it, and two "todays"
    // in one render is how a stale week comes to be drawn as this one.
    todayKey,
  });
  const videoHistoryTeaser = webHistoryTeaser
    ? null
    : resolveLockedTeaser({ id: 'videoHistory', hasFullAccess });
  const messageAlertsTeaser = resolveLockedTeaser({
    id: 'messageAlerts',
    hasFullAccess,
  });
  const screenTopAppsTeaser = resolveTopAppsTeaser({
    hasFullAccess,
    source: screenTopApps.source,
    other: device?.topAppsOtherToday,
    dayIsToday: screenDayIsToday,
    rowCount: screenTopApps.apps.length,
    /*
     * The same subtraction `AppBars` draws as its "Other apps" row, for a
     * device the server never wrote `topAppsOtherToday` for — every one whose
     * `reportChildUsage` predates 2026-09-10. Without it this card printed a
     * remainder with no way to see inside it, the state the fold exists to
     * prevent.
     */
    fallbackOtherMinutes: otherAppsMinutes(
      screenTopApps.totalMinutes,
      screenTopApps.apps,
    ),
  });

  /*
   * What is installed, as opposed to what was used.
   *
   * `todayApps` above is screen time — an app nobody opened this week is not
   * in it, and neither existing app signal can see one that was already on the
   * device when the family paired. `docs/FEASIBILITY.md`, "The app inventory".
   */
  // The device's install quarantine, folded into the inventory so a pending
  // install renders as its own group — and re-folded the moment an approval
  // lands, since `device.controls` is the listener's live copy.
  const installApproval = device?.controls
    ? resolveInstallApprovalPolicy(device.controls)
    : null;
  const {
    report: inventory,
    markSafe,
    restoreFlag,
    savingAppId,
  } = useAppInventory(
    familyId,
    device?.id,
    installApproval,
    // The scope is the child when this device has one — a parent deciding an
    // app is fine has decided it about a person, not about a machine.
    device?.childId ?? null,
  );
  const inventorySummary = inventory ? appInventorySummaryKey(inventory) : null;
  /**
   * "How to block" — a sentence, not an act.
   *
   * No parent-set remote block exists on any platform in this product
   * (`docs/FEASIBILITY.md`, "Parent-set app blocking" and the Chromebook
   * gate's E2), so the button names the answer it shows rather than an act it
   * cannot perform. The copy is the app pack's existing hint, said the same
   * way on both parent surfaces.
   */
  const blockHelp = row =>
    setToast({
      tone: 'info',
      text: activityT(
        row.isExtension ? 'appInventory.blockHintExtension' : 'appInventory.blockHint',
      ),
    });
  /**
   * One flagged app, with the two answers a parent has to it.
   *
   * Both groups render through this — the classifier's flags and the ones
   * already answered — because they differ by a verb and a colour, and two
   * copies would drift the day one of them gains a third button. Every
   * sentence comes from the **app pack** through `activityT`: the phone says
   * all four already (`.claude/rules/i18n.md`).
   */
  const renderFlaggedRow = (row, isDismissed) => (
    <li key={row.id}>
      <span className={`ev-state ${isDismissed ? 'tone-good' : 'tone-serious'}`}>
        <Icon name={isDismissed ? 'shieldCheck' : 'shieldAlert'} size={13} />
      </span>
      <span className="ev-body">
        <strong>{row.label}</strong>
        {/* `appCat`, never `webCat`: that namespace is pinned to
            WEB_FILTER_CATEGORIES and carries no `bypass`, so a VPN would
            have rendered its raw key here. */}
        <em>{t(`appCat.${row.category}`)}</em>
      </span>
      <button className="btn btn-sm" onClick={() => blockHelp(row)}>
        {activityT('appInventory.howToBlock')}
      </button>
      <button
        className="btn btn-sm btn-primary"
        disabled={(live && !canWrite) || savingAppId === row.id}
        title={live && !canWrite ? t('dash.unlockToChange') : undefined}
        onClick={() =>
          run(`app-flag-${row.id}`, () =>
            isDismissed ? restoreFlag(row.id) : markSafe(row),
          )
        }
      >
        {activityT(isDismissed ? 'appInventory.undoSafe' : 'appInventory.markSafe')}
      </button>
    </li>
  );

  /*
   * What a per-app limit may be put on: apps this device reported, and only
   * those. The two signals answer different questions and both are needed —
   * today's usage carries the app a parent just watched climb the chart, and
   * the inventory carries one that is installed and rarely opened. Neither
   * alone is the list a parent expects to see.
   *
   * A typed package name is deliberately not offered: `com.tiktok` guessed
   * wrong writes a limit that matches nothing and reads, on this screen, as a
   * limit that is simply not working.
   *
   * KidGate itself is dropped from both signals (`isKidGateOwnApp`). The
   * inventory is where it got in: the macOS scan walks `/Applications` and the
   * Windows one reads the registry, so this product's own bundle is in the list
   * like any other — offered here as an app to put a daily cap on.
   */
  const limitCandidates = useMemo(() => {
    const byId = new Map();
    for (const app of todayApps) {
      if (app.packageName && !isKidGateOwnApp(app.packageName)) {
        byId.set(app.packageName, app.label || app.packageName);
      }
    }
    // All four groups the report splits the scan into, flattened: a flagged
    // app is exactly the one a parent came here to cap, and a pending install
    // is one they may want capped before they allow it.
    for (const group of ['pending', 'flagged', 'other', 'unclassified']) {
      for (const app of inventory?.[group] ?? []) {
        if (!byId.has(app.id) && !isKidGateOwnApp(app.id)) {
          byId.set(app.id, app.label || app.id);
        }
      }
    }
    return [...byId].map(([id, label]) => ({ id, label }));
  }, [todayApps, inventory]);
  const approveInstall = packageName =>
    live &&
    device &&
    run(
      `install-allow-${packageName}`,
      () =>
        actions.updateControls(device.id, {
          approvedPackages: withApprovedPackage(
            device.controls?.approvedPackages,
            packageName,
          ),
        }),
      t('dash.toastInstallAllowed'),
    );

  const web = useMemo(
    () => (device && webHistory[device.id]) || [],
    [device, webHistory],
  );
  /**
   * What the open device's control cards say they are set to.
   *
   * Every figure here is already on this page; the **reading** of each one —
   * "120 min/day", "Off", "Not set", and the verb under it — is
   * `@kidgate/core/domain/deviceControlState`, the phone's own switch moved up
   * so the two consoles cannot answer "is the filter on" differently.
   *
   * Null without a device: the child hub builds its own, over the set.
   */
  const controlFacts = useMemo(() => {
    if (!deviceView) return null;

    /* The newest recorded day, the way the phone's card reads it — "17 sites
       yesterday" is a fact a parent can act on, while a sum over whatever the
       page happened to fetch moves for reasons nobody can explain. Never
       capped here: this surface subscribes to the history document rather than
       to a card-sized page, so the count is the day's whole total. */
    const latestDate = web[0]?.date ?? null;
    const day = latestDate ? web.filter(entry => entry.date === latestDate) : [];

    const fixAt = deviceView.lastLocation?.updatedAt
      ? new Date(deviceView.lastLocation.updatedAt).getTime()
      : null;

    /* These four arrive as `{ [deviceId]: rows }`, not as arrays — the shape
       `useFamilyData.forDevice` publishes, and the one every other reader on
       this page indexes. */
    const deviceSos = sosAlerts[deviceView.id] ?? [];
    const deviceCheckIns = checkIns[deviceView.id] ?? [];

    return {
      controls: deviceView.controls ?? {},
      rewardTaskCount: (rewardTasks[deviceView.id] ?? []).length,
      sosActiveCount: deviceSos.filter(alert => alert.status === 'active').length,
      sosTotalCount: deviceSos.length,
      placeCount: (places[deviceView.id] ?? []).length,
      checkInStatus: deviceCheckIns[0]?.status ?? null,
      webHistory: day.length > 0 ? { sites: day.length, capped: false } : null,
      hasLocationFix: fixAt !== null,
      /* A day, from `@kidgate/core/domain/childLocation` — the same threshold
         every location surface here judges a fix by. The phone uses twice the
         background update interval it negotiated with the device, which no
         browser is told; this is the shared rule, and it is the conservative
         one. */
      locationStale: fixAt !== null && Date.now() - fixAt > LOCATION_STALE_AFTER_MS,
      reportsAppInstalls: supportsAppInstallAlerts(deviceView),
      listsInstalledApps: supportsAppInventory(deviceView),
      // One device, so the set is one long — the same resolver the phone's card
      // and this app's own Message Alerts banner read.
      messageSummary: resolveMessageMonitoringSummary([deviceView]),
      supportsVideoHistory: supportsVideoHistory(deviceView),
    };
  }, [checkIns, deviceView, places, rewardTasks, sosAlerts, web]);

  const videos = useMemo(
    () => (device && videoHistory?.[device.id]) || [],
    [device, videoHistory],
  );
  const blockedByCategory = useMemo(() => {
    const map = {};
    web.forEach(w => {
      if (w.blockedVisits > 0 && w.category) {
        map[w.category] = (map[w.category] || 0) + w.blockedVisits;
      }
    });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [web]);
  /*
   * Whether any bar above rests on a classifier guess rather than a table
   * match. `useFamilyData` already folded the two through
   * `webHistoryCategory`, so this only has to ask which one answered — and it
   * asks per device, so the caveat shows on the devices it is true for.
   * The phone's Web History screen carries the same sentence in the same
   * place, for the reason recorded there: this is where a parent turns rows
   * into a number.
   */
  const blockedGuessed = useMemo(
    () => web.some(w => w.blockedVisits > 0 && w.categorySource === 'ai'),
    [web],
  );
  const blockedTotal = blockedByCategory.reduce((s, [, v]) => s + v, 0);

  /*
   * Where the Attention rail is drawn: every section and every depth, wherever
   * the page is wide enough to hold a third column.
   *
   * It was the Family section's alone at first, on the argument that an open
   * device already carries its own items. That argument holds for the rows and
   * not for the column — what needs a parent does not stop being true while
   * they read a report, and a rail that appeared and vanished as they walked
   * the stack moved the page under them on every step. The overlap with a
   * device's own Attention card is a device's items inside the family's, which
   * is what a rail beside a page is for.
   */
  const railOpen = wide;

  /*
   * What a rail row's button does, and it is the device card's own wiring —
   * that card was the only place a time request could be approved on this
   * surface, so removing it moved the answers here rather than dropping them.
   *
   * `sourceId`, never the row's `id`: the rail prefixes ids with the device to
   * keep two phones' identical protection issues apart, and the endpoints take
   * the document's own id. The busy key stays the prefixed one — it is a spinner
   * on a row, not an argument.
   */
  const runAttentionAction = (item, known = null) => {
    // The hero passes the machine it is about; a rail row names one instead.
    const target = known ?? devices.find(d => d.id === item.deviceId);
    if (!live || !target) return;
    // A hero row is the device's own, so its id IS the document's.
    const documentId = item.sourceId ?? item.id;
    if (item.action === 'review') {
      run(
        item.id,
        () => actions.resolveTimeRequest(documentId, true),
        t('dash.toastTimeApproved'),
      );
    } else if (item.action === 'siteAllow') {
      run(
        item.id,
        () => actions.resolveSiteRequest(documentId, true),
        t('dash.toastSiteAllowed'),
      );
    } else if (item.action === 'resend') {
      run(item.id, () => actions.sendCheckIn(target), t('dash.toastCheckInResent'));
    } else if (item.action === 'unlock') {
      run(item.id, () => actions.setLock(target.id, false));
    }
  };

  /*
   * One banner, rendered in one of two places. On the free plan a family is
   * parked for months, so this is a state rather than a question — the rail is
   * where a state belongs; in the flow it pushed the list down on every visit.
   */
  const parkedBanner =
    parking.parked.length > 0 && section !== 'report' ? (
      <ParkedDevicesCard
        devices={devices}
        parking={parking}
        canWrite={canWrite}
        busy={busy === 'monitored'}
        onChoose={chooseMonitored}
        onOpen={() => setMonitoredSheetOpen(true)}
      />
    ) : null;

  return (
    <div className="dash">
      <aside className="dash-side">
        <div className="dash-brand">
          <Link to="/">
            <span className="brand-mark" aria-hidden="true">
              <BrandLogo />
            </span>
            KidGate
          </Link>
          <span>{family.name}</span>
        </div>

        {/*
          The sections, and nothing else. The child list used to be here and is
          the Family section's own content now: the rail asked "which device" at
          the same level as the page asked "what about the family", so a parent
          read one column that answered two questions — the same defect the
          per-device tab bar was pulled out of this rail to fix.

          Five on a rail, four on a bottom bar — see `SUPPORT_SECTION`.

          A glyph beside each label: this bar is also the phone-width bottom
          bar, where the icon is what stays legible once the label is two lines
          of Vietnamese.
        */}
        <nav className="side-nav" aria-label={t('dash.manage')}>
          {(compact ? COMPACT_SECTIONS : SECTIONS).map(item => (
            <button
              key={item.id}
              className={`nav-item${section === item.id ? ' is-active' : ''}`}
              /*
               * Pressing the section you are already in returns to its root —
               * the phone's tab bar has always done this, and without it a
               * parent three levels into a device pressed Family and nothing
               * moved. Family and Reports are the two with a stack to pop.
               */
              onClick={() => {
                if (section === item.id && item.id === 'family') {
                  setDeviceOpen(false);
                  setOpenChildId(null);
                  setFamilyOpen(false);
                }
                if (section === item.id && item.id === 'report') {
                  setWeekOpen(false);
                  setReportChildId(null);
                }
                if (section === item.id && item.id === 'settings') {
                  setSupportOpen(false);
                }
                setSection(item.id);
              }}
              aria-current={section === item.id ? 'page' : undefined}
            >
              <Icon name={item.icon} size={17} />
              <span className="nav-item-label">{activityT(item.labelKey)}</span>
              {/* A dot, not a count: what is behind it is a single report, and
                  `1` would invite the reader to work out what it counted. The
                  phone puts the same dot on the same tab. */}
              {item.id === 'report' && reportUnseen && (
                <span
                  className="nav-badge nav-badge-dot"
                  role="img"
                  aria-label={t('dash.tabReportNew')}
                  title={t('dash.tabReportNew')}
                />
              )}
              {/* No Attention count beside Family, deliberately. The rail says
                  it in words one column away, and a badge that counted the
                  family's open items would keep counting them at a parent
                  standing in Activity or Settings — sections those items are
                  not about. `familyAttention` exists now; putting a number on
                  this menu is still a separate decision. */}
            </button>
          ))}
        </nav>

        {/* Unchanged, and not rendered at all once the rail is a bottom bar:
            the Settings section takes the same block there rather than a
            second copy of it being drawn where nobody can reach it. */}
        {!compact && (
          <div className="side-foot">
            {/*
              Was a bare pill reading Premium or Trial. It now says which of the
              three states the family is in and where a plan is actually changed
              — buying stays on the phone, by decision (`PlanCard`).
            */}
            <PlanCard plan={family.plan} trialStartedAt={family.trialStartedAt} />
            {/* Classed because it is the one line in the footer a short rail can
                afford to drop — it counts what the list above it already shows,
                and nothing is done from it. */}
            <p className="side-count">
              {t('dash.parents', { count: family.parents.length })} ·{' '}
              {t('dash.devices', { count: devices.length })}
            </p>
            {/* The language picker moved into `sideFooter`'s account block, where
                it shares a row with Sign out. */}
            {sideFooter}
          </div>
        )}
      </aside>

      <main className="dash-main">
        <header className="dash-top">
          <div>
            {/*
              The way back out of a device, and only there. It is the phone's
              own affordance — Family lists the children, a device is pushed on
              top of it — and at phone width it is the only one, since the left
              menu is a bottom bar by then and cannot show where you are.
            */}
            {back && (
              <button
                className="dash-back"
                onClick={back.go}
                /* The destination, not the direction: "Back" says nothing to a
                   parent who arrived from a bookmark, and one frame up from a
                   device is usually a person rather than the list. */
                aria-label={back.label}
              >
                <Icon name="chevronLeft" size={15} />
                <span>{back.label}</span>
              </button>
            )}
            {/*
              Whose and which on one line. Stacked, the person spent a whole
              row saying one word and the header ran four rows deep before the
              first number on the page. What the stacking was for is unchanged:
              every figure below is about one child's device, and naming only
              the hardware made two iPads read as the same page twice.

              Off a device the heading is the section's own name — the same
              word the menu item beside it is lit with, so a parent who
              arrived by keyboard or came back to a tab knows where they are.
            */}
            <div className="dash-top-name">
              {deviceView?.child && (
                <p className="dash-top-owner">
                  <ChildInitial
                    name={deviceView.child.name}
                    colorIndex={deviceView.child.colorIndex}
                  />
                  <span>{deviceView.child.name}</span>
                </p>
              )}
              <h1>
                {/* A panel is a pushed screen now that the tab bar is gone, so
                    the heading is the panel's own name and the Back button
                    beside it carries the device's — the phone's stack, where
                    the title always names what is on screen. */}
                {deviceView
                  ? tab === 'overview'
                    ? deviceView.name
                    : t(TABS.find(item => item.id === tab)?.labelKey ?? 'dash.manage')
                  : childView
                    ? childView.name
                    : /* Compact only: the page is inside Settings, and the
                         section's own label would head it "Settings" while the
                         Back button beside it also said Settings. */
                      supportOpen
                      ? activityT(SUPPORT_SECTION.labelKey)
                      : section === 'family'
                        ? family.name
                        : activityT(
                            SECTIONS.find(item => item.id === section)?.labelKey ??
                              'nav.family',
                          )}
              </h1>
            </div>
          </div>
          <div className="top-actions">
            {topActions}
            {/*
              Both buttons are gone on a device that cannot do the thing, not
              disabled: a header button is a control, not a description, and
              this pair used to write to a browser extension that has no
              check-in listener and no handler for `isLocked` at all — which
              then reported itself Locked. The rows in the Controls tab are
              where "this device cannot" is said, because a parent comparing
              two devices needs to read it there.
            */}
            {deviceView && supportsCheckIn(device) && (
              <button
                className="btn"
                disabled={busy === 'checkin'}
                onClick={() =>
                  live &&
                  run(
                    'checkin',
                    () => actions.sendCheckIn(device),
                    t('dash.toastCheckIn', {
                      name: device.child?.name || device.name,
                    }),
                  )
                }
              >
                {busy === 'checkin' ? t('dash.sending') : t('dash.checkIn')}
              </button>
            )}
            {deviceView && supportsLock(device) && (
              <button
                className="btn btn-primary"
                disabled={(live && !canWrite) || busy === 'lock'}
                title={live && !canWrite ? t('dash.unlockToChange') : undefined}
                onClick={() =>
                  live &&
                  run('lock', () => actions.setLock(device.id, !device.isLocked))
                }
              >
                {busy === 'lock'
                  ? t('dash.working')
                  : device.isLocked
                    ? t('dash.unlock')
                    : t('dash.lockDevice')}
              </button>
            )}
          </div>
        </header>

        {/*
          No tab bar. The control-centre grid below is the navigation — the
          shape `apps/mobile`'s device detail has, where a card pushes the
          screen it opens and Back pops it. The bar was a second navigation for
          the same material: five words at the top of the pane, and under them a
          grid of cards landing on those same five panels.
        */}

        {/*
          The hero — the phone's `DeviceDetailHero`, drawn in a browser.

          It was two grey paragraphs under the title: a status pill, an OS, a
          "last active", then a battery and a build on a second line. Every fact
          was there and none of them was looked at, because a page about one
          machine opened with a run of 13px text and then a grid of cards.

          What the phone does and this now does too: the machine gets a face —
          its own glyph, the status beside it, the battery as a chip, and the
          protection verdict as a row a parent can open. What it deliberately
          does NOT repeat is the name: the header above already carries the
          child and the device, and the phone's hero is the only title on its
          screen.
        */}
        {deviceView && (
          <section className="card dev-hero">
            <div className="dev-hero-top">
              <span
                className={`dev-hero-glyph tone-${STATUS_TONE[deviceStatusOf(device)] ?? 'muted'}`}
              >
                <Icon name={deviceIconName(device)} size={24} />
              </span>
              <div className="dev-hero-facts">
                <p className="dash-top-facts">
                  {/* `deviceStatusOf`, never the stored `status` — the same rule
                      the sidebar dot follows. This header read the field
                      straight off the document, and `setDeviceLock` used to
                      write `'online'` into it on every unlock, so a machine dead
                      for a week said Online here for as long as the row
                      existed. */}
                  <StatusPill status={deviceStatusOf(device)} device={device} />
                  <span className="dot-sep">·</span>
                  {osLabel(device.platform, device.osVersion)}
                  {/* One "last seen", worded by the plan.

                      A free device is on the thirty-minute beat, so this line is
                      routinely old on a machine that is working perfectly, and
                      "Last active 52 minutes ago" beside a green Online pill
                      reads as a fault. The app pack's sentence names the plan
                      instead — the same one the phone's family card carries, no
                      `dash.*` twin (`docs/PRICING.md` §8 item 7). It **states
                      the age and does not promise a cadence**: a laptop that
                      sleeps reports nothing at all, and a card claiming "every
                      30 minutes" over an hour-old reading was the first version
                      of this and was wrong within a day. */}
                  {device.lastActiveAt && (
                    <>
                      <span className="dot-sep">·</span>
                      {slowBeatMinutes(device.beatIntervalMs) !== null
                        ? activityT('family.freeTierCadenceHint', {
                            date: timeAgo(device.lastActiveAt),
                          })
                        : t('dash.lastActive', {
                            when: timeAgo(device.lastActiveAt),
                          })}
                    </>
                  )}
                </p>
                {/* Settings reached, battery, build — the ones a parent reads
                    deliberately, and only once something looks wrong. They keep
                    their own line here at any count: the hero has the room the
                    bare header did not, so the rule about a lone fact joining
                    the row above went with the paragraphs. */}
                {quietFacts.length > 0 && (
                  <p className="dash-top-facts dash-top-facts-quiet">{quietFacts}</p>
                )}
              </div>
            </div>

            {/*
              The protection verdict, and the way into what is wrong with it.

              `getProtectionSummaryKeys` is the phone's own fold, so the two
              consoles cannot grade the same television differently. Open, it
              lists this device's items through the same renderer the rail uses
              — which is also what keeps them reachable under 1180px, where
              there is no rail at all.

              A device with nothing wrong still draws the row: "Protected" is
              the answer a parent came for, and a verdict that only appears when
              it is bad teaches them to read its absence.
            */}
            {protectionSummary && (
              <>
                <button
                  className={`dev-hero-protect tone-${PROTECTION_TONE[protectionSummary.level] ?? 'muted'}`}
                  aria-expanded={heroIssuesOpen}
                  disabled={attention.length === 0}
                  onClick={() => setHeroIssuesOpen(open => !open)}
                >
                  <span className="dev-hero-protect-icon">
                    <Icon
                      name={
                        protectionSummary.level === 'protected'
                          ? 'shieldCheck'
                          : 'shieldAlert'
                      }
                      size={16}
                    />
                  </span>
                  <span className="dev-hero-protect-body">
                    <strong>{activityT(protectionSummary.titleKey)}</strong>
                    <em>{activityT(protectionSummary.subtitleKey)}</em>
                  </span>
                  {attention.length > 0 && (
                    /* `chevronRight` turned by the stylesheet: there is no
                       up/down pair in `@kidgate/tokens/icons`, and inventing
                       one here would be a second drawing of a glyph the phone
                       renders from the same file. */
                    <span
                      className={`dev-hero-protect-count${heroIssuesOpen ? ' is-open' : ''}`}
                      /* What the number counts, because the words beside it
                         count something else: the verdict is about protection
                         and this is every open item on the machine, so a green
                         "Protected · 1" is two true facts and needs to say
                         which is which. Same sentence the rail's subtitle
                         uses. */
                      title={t('dash.cardAttentionSub', { count: attention.length })}
                    >
                      {attention.length}
                      <Icon name="chevronRight" size={14} />
                    </span>
                  )}
                </button>
                {heroIssuesOpen && attention.length > 0 && (
                  <AttentionList
                    items={attention}
                    appT={activityT}
                    /* The device is known here, so the row's raw id is the
                       document's own — `runAttentionAction` takes the machine
                       rather than looking one up by a row that has no
                       `deviceId`. */
                    onAction={item => runAttentionAction(item, device)}
                    busyId={busy}
                    readOnly={live && !canWrite}
                    className="dev-hero-issues"
                  />
                )}
              </>
            )}
          </section>
        )}

        {live && !canWrite && (
          <div className="write-note">
            <strong>{t('dash.unlockTitle')}</strong> {t('dash.unlockBody')}
            <button className="btn btn-sm" onClick={() => setStepUpOpen(true)}>
              {t('dash.unlockCta')}
            </button>
          </div>
        )}

        {stepUpOpen && (
          <StepUpSheet
            familyOwnerUserId={familyId}
            onClose={() => setStepUpOpen(false)}
            onUnlocked={() => {
              setStepUpOpen(false);
              // The new session is the one `canWrite` should be read against
              // again; the claim arrives with the refreshed token.
              setWriteExpired(false);
              setToast({ tone: 'good', text: t('dash.unlockedToast') });
            }}
          />
        )}

        {/* The live region and the box are one module — `Toast` says why. */}
        <Toast toast={toast} />

        {/*
          A banner, in every section but the report: a family with parked
          devices is owed the fact before any device screen means much, and in
          a section that happened to have a device open it would otherwise be
          one click away from the devices reading Paused.

          A banner rather than the sheet it used to draw here. On the free plan
          one device reports and the rest stay parked for good, so this is not
          a decision waiting to be made — it is a state, and a radio group with
          a confirm button over every screen kept asking a question that had
          already been answered. The sheet is one click away.
        */}
        {!railOpen && parkedBanner}

        {/*
          The same card over the page while nothing at all is reporting. It
          renders on the report tab too — a family with no device reporting is
          owed the question wherever they happen to be standing, and the card
          above is the only thing the report tab hides.
        */}
        {monitoredSheetOpen && (
          <ParkedDevicesCard
            devices={devices}
            parking={parking}
            canWrite={canWrite}
            busy={busy === 'monitored'}
            onChoose={chooseMonitored}
            onDismiss={() => setMonitoredSheetOpen(false)}
          />
        )}

        {/*
          The control centre, directly under the device it is about — the shape
          `apps/mobile`'s device detail has: a hero, then the grid. The cards
          and the rule greying each one out are `@kidgate/core/domain/
          deviceDetailActions`, the phone's own list moved up, so neither
          console can grow a card the other does not have.

          It IS the navigation, which is why it is gated on the device's own
          frame: a card pushes a panel, Back pops it, and the grid is what a
          parent returns to. Drawn above an open panel as well, it was a menu
          repeating the screen already below it.
        */}
        {deviceView && tab === 'overview' && (
          <ControlCenter
            device={deviceView}
            facts={controlFacts}
            appT={activityT}
            canUsePremiumControls={hasFullAccess}
            onOpen={next => setTab(next)}
          />
        )}

        {/*
          The Family landing: the child list that used to be the sidebar rail.
          It is the first thing a parent is shown, the way the phone's Family
          tab is — pick a person, then one of their devices, then what about
          it. The rail answered the first two questions in a column beside a
          page that was already answering the third.
        */}
        {section === 'family' && !deviceView && !childView && !familyOpen && (
          <section className="family-home">
            {/*
              What needs doing, before the list of who. The phone puts this
              row in the same place for the same reason: a parent opening the
              app is asking "is anything wrong", and a list of names answers
              that only after they have read every row.

              An actionable chip opens the section that answers it. The three
              healthy counts are readings and open nothing.
            */}
            <FamilySummaryRow
              chips={familyCounts.chips}
              appT={activityT}
              onChipPress={openSummaryChip}
            />
            {devices.length === 0 ? (
              <div className="card">
                <h2>{t('dash.noDeviceTitle')}</h2>
                <RichText as="p" className="hint" text={t('dash.noDeviceBody')} />
              </div>
            ) : (
              <div className="kid-list">
                {/*
                  The family itself, first — the phone opens its list with this
                  row, and without it the only way into "rename the family, add
                  a child, the star chart" was a section away in Settings while
                  the thing those act on was on screen here.
                */}
                <button className="family-row" onClick={() => setFamilyOpen(true)}>
                  <span className="family-row-icon">
                    <Icon name="home" size={20} />
                  </span>
                  <span className="kid-meta">
                    <strong>{family.name}</strong>
                    <em>{activityT('settings.familyDetailSubtitle')}</em>
                  </span>
                  <Icon name="chevronRight" size={16} />
                </button>
                {deviceGroups.map(group => {
                  /*
                   * Every child is a group, including one who owns a single
                   * device. It used to be a bare row — two lines saving one —
                   * and the saving cost more than it bought: that row carried
                   * a different avatar, a different first line and no chevron,
                   * so a list of four children showed two shapes and a parent
                   * had to work out which of them were people.
                   *
                   * A child's row opens their hub; only the unassigned group
                   * still folds, because there is no person behind it to open
                   * one for.
                   */
                  const expandable = !group.child;
                  const open = expandable && openGroupKey === group.key;
                  const containsActive = group.devices.some(d => d.id === deviceId);
                  return (
                    <div
                      key={group.key}
                      className={`kid-group${open ? ' is-open' : ''}`}
                    >
                      <KidGroupHead
                        group={group}
                        open={open}
                        containsActive={containsActive}
                        expandable={expandable}
                        appT={activityT}
                        pills={childPills(familyCounts, group.devices, group.child)}
                        onlineCount={
                          group.devices.filter(
                            d => familyCounts.byDevice.get(d.id)?.online,
                          ).length
                        }
                        stars={
                          group.child ? (starsByChild.get(group.child.id) ?? 0) : 0
                        }
                        hasActiveSos={group.devices.some(d =>
                          familyCounts.sosDeviceIds.has(d.id),
                        )}
                        usedMinutes={childMinutesUsedToday(group.devices)}
                        limitMinutes={group.child?.rules?.dailyLimitMinutes ?? null}
                        readOnly={live && !canWrite}
                        lockBusy={busy === `lock-all-${group.key}`}
                        onLockAll={
                          live
                            ? (lockable, allLocked) =>
                                run(`lock-all-${group.key}`, async () => {
                                  /* Each device in turn: `setLock` is per
                                     machine, and there is no child-level lock
                                     field an agent reads. */
                                  for (const device of lockable) {
                                    await actions.setLock(device.id, !allLocked);
                                  }
                                })
                            : null
                        }
                        onActivate={() =>
                          expandable
                            ? setOpenGroupKey(key =>
                                key === group.key ? null : group.key,
                              )
                            : setOpenChildId(group.child.id)
                        }
                      />
                      {open &&
                        group.devices.map(d => (
                          <DeviceRow
                            key={d.id}
                            device={d}
                            active={d.id === deviceId}
                            /* Selecting and opening are one gesture here, not
                               two: on the phone a device row IS the way into
                               the device, and a row that only highlighted
                               itself would be a control that does nothing a
                               parent can see. */
                            onSelect={() => {
                              setDeviceId(d.id);
                              setDeviceOpen(true);
                            }}
                            latestBuilds={latestBuilds}
                          />
                        ))}
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        )}

        {/* Behind the row above, not under the list: the phone pushes a screen
            for this, and shown inline it was three cards a parent had to
            scroll past every time they wanted a child. */}
        {section === 'family' && !deviceView && !childView && familyOpen && (
          <section className="family-home">
            <FamilySettingsCard
              family={family}
              children={children ?? []}
              devices={devices}
              onOpenChild={id => {
                setFamilyOpen(false);
                setOpenChildId(id);
              }}
              onOpenDevice={id => {
                setFamilyOpen(false);
                setDeviceId(id);
                setDeviceOpen(true);
              }}
              leaderboardEnabled={leaderboard?.enabled ?? true}
              actions={actions}
              run={run}
              busy={Boolean(busy)}
              canWrite={canWrite}
              live={live}
              appT={activityT}
            />
          </section>
        )}

        {/*
          The person, between the list and the machine. `docs/CHILD_HUB.md`
          holds the model both consoles share; what this call site owns is the
          stack — opening a device from here keeps `openChildId` set, so Back
          lands on the hub the parent came through rather than at the top.
        */}
        {childView && (
          <ChildHub
            child={childView}
            childDevices={childDevices}
            unassignedDevices={devices.filter(d => !d.childId)}
            allDevices={devices}
            actions={actions}
            run={run}
            busy={Boolean(busy)}
            canWrite={canWrite}
            live={live}
            appT={activityT}
            /* A grid card names the panel it wants as well as the machine —
               the hub's cards are the same actions the device detail draws,
               and landing on Overview every time would make one click into
               two. */
            onOpenDevice={(id, tab) => {
              setDeviceId(id);
              if (tab) setTab(tab);
              setDeviceOpen(true);
            }}
            onLeave={() => setOpenChildId(null)}
          />
        )}

        {section === 'activity' && (
          <ActivityFeed
            activities={familyActivities}
            devices={devices}
            children={children}
            actorNames={actorNames}
            appT={activityT}
            teaserSlot={
              <PremiumTeaser teaser={activityWindowTeaser} appT={activityT} />
            }
          />
        )}

        {/*
          Reports is a stack, like Family: the landing answers "how much today,
          and is that a lot", and the stored weekly sheet is one step behind it.
          The tab used to open on the sheet — written once a week, about a week
          already over — so the question a parent actually came with had no
          answer on this surface at all.

          The sheet still renders on its own whenever there is no stored report
          to land on: that empty state is where Generate lives, and hiding it
          behind a door a family cannot see would leave them no way in.
        */}
        {section === 'report' &&
          (reportChildView ? (
            <ChildReport
              child={reportChildView}
              childDevices={devices.filter(item => item.childId === reportChildView.id)}
              familyId={familyId}
              appT={activityT}
              /* The device's own report is one more step down, and it is the
                 same panel the Family section opens — a second copy scoped to
                 this stack would be the same three thousand lines twice. */
              onOpenDevice={id => {
                setDeviceId(id);
                setSection('family');
                setDeviceOpen(true);
                setTab('screen');
              }}
              onAssignDevice={() => {
                setSection('family');
                setOpenChildId(reportChildView.id);
                setDeviceOpen(false);
              }}
            />
          ) : weekOpen || !latestReport ? (
            <ReportPanel
              reports={reports?.reports ?? []}
              loading={Boolean(reports?.loading)}
              familyName={family.name}
              language={language}
              loadError={reports?.error ?? null}
              loadFailed={Boolean(reports?.loadFailed)}
              hasFullAccess={hasFullAccess}
              onReload={reports?.reload}
            />
          ) : (
            <ReportHub
              devices={devices}
              children={children}
              latest={latestReport}
              loading={Boolean(reports?.loading)}
              appT={activityT}
              onOpenWeek={() => setWeekOpen(true)}
              /*
                A child WITH devices opens their report, one step deeper in
                this section. One WITHOUT goes to their Family hub instead,
                where the assign row is — a report there could only ever say
                "no data". The phone splits the two destinations the same way.
              */
              onOpenChild={(childId, hasDevice) => {
                if (hasDevice) {
                  setReportChildId(childId);
                  return;
                }
                setSection('family');
                setOpenChildId(childId);
                setDeviceOpen(false);
              }}
              onOpenDevice={id => {
                setDeviceId(id);
                setSection('family');
                setDeviceOpen(true);
                setTab('screen');
              }}
            />
          ))}

        {/*
          Requests & reports, on its own. One mount, two ways in: the rail's
          fifth item on a wide screen, the Settings row on a bottom bar. A
          second copy behind the second door would be two subscriptions to one
          collection and two forms filing into it.
        */}
        {(section === SUPPORT_SECTION.id ||
          (section === 'settings' && supportOpen)) && (
          <section className="settings-home">
            <SupportCard
              accountId={accountId}
              accountEmail={accountEmail}
              familyId={familyId}
              familyName={family.name}
              appT={activityT}
            />
          </section>
        )}

        {section === 'settings' && !supportOpen && (
          <section className="settings-home">
            {/*
              The plan first, then the people, then the contacts — the phone's
              own order on its Settings tab. What is deliberately NOT here:
              anything about this browser rather than about the family. The
              language picker, the palette and Sign out live in the rail's
              footer and are rendered there once; on a phone-width screen the
              rail is a bottom bar with no footer, so the same block is handed
              to this section instead (`sideFooter`, below) rather than drawn
              twice and allowed to disagree.
            */}
            <Card title={activityT('plans.title')}>
              <PlanCard plan={family.plan} trialStartedAt={family.trialStartedAt} />
            </Card>

            {/*
              Managing parents is NOT here. It lives on the Family section's
              Parents tab (`FamilySettingsCard`), and it was drawn in both
              places until 2026-09-16 — one roster, two doors, each with its
              own invite form. Family is the right one: a co-parent is a member
              of the family, and the tab beside them lists the children and
              their devices.

              Trusted contacts stay, and the distinction is the reason. A parent
              has an account and can change what KidGate does; a trusted contact
              is a name and an email that gets told when a child presses SOS,
              with no account and no access at all. Grouping the two because
              both are people would have a parent expecting a contact to open
              the dashboard. The phone files it the same way — its row sits in
              Settings next to the SOS sound, among the alert routing.
            */}
            {live && familyId && (
              <Card
                title={activityT('sos.trustedContactsTitle')}
                subtitle={activityT('sos.trustedContactsRowSubtitle')}
              >
                <TrustedContactsCard familyId={familyId} />
              </Card>
            )}

            {/* Push preferences for the account's own phones. Renders nothing
                for a co-parent, whose devices live under their own root. */}
            <NotificationPrefsCard
              accountId={accountId}
              parentDevices={parentDevices}
              appT={activityT}
              canWrite={canWrite}
              live={live}
            />

            {/*
              A row, not the card, and ONLY on a bottom bar. A rail already has
              its own menu item for this, and drawing the row as well would put
              two doors to one page on screen at once — which is the duplicate
              the Parents card was just removed for.
            */}
            {compact && (
              <button
                className="card settings-row"
                onClick={() => setSupportOpen(true)}
              >
                <span className="settings-row-icon">
                  <Icon name={SUPPORT_SECTION.icon} size={17} />
                </span>
                {/* The rail's label, verbatim. The phone's row says "Report a
                  problem" and its screen says "Requests & reports", which is
                  two names for one destination — not a drift worth copying. */}
                <strong className="settings-row-copy">
                  {activityT('supportReports.title')}
                </strong>
                <Icon name="chevronRight" size={15} />
              </button>
            )}

            <AccountCard
              accountId={accountId}
              accountEmail={accountEmail}
              parentCount={family.parents.length}
              deviceCount={devices.length}
              appT={activityT}
            />

            {/* The account block, only where the footer that normally carries
                it is not on screen. One instance either way: two copies of a
                language picker is two places to change the language and one
                of them wrong. */}
            {compact && <div className="settings-account">{sideFooter}</div>}
          </section>
        )}

        {deviceView && tab === 'overview' && (
          <>
            {/*
              Two of these four are measurements, and a measurement no device
              took is the one thing a tile must not show: `0m` beside "today"
              reads as a quiet afternoon, not as a surface that counts no
              minutes. The sites tile stays — that number is the extension's
              own — and so does Attention.
            */}
            <div className="tiles">
              {supportsScreenTime(device) && (
                <StatTile
                  icon="clock"
                  label={t('dash.tileScreenToday')}
                  value={formatMinutes(stats.used)}
                  meta={
                    stats.delta === 0
                      ? t('dash.tileSameAsAverage')
                      : t(stats.delta > 0 ? 'dash.tileDeltaUp' : 'dash.tileDeltaDown', {
                          percent: Math.abs(stats.delta),
                        })
                  }
                  tone={stats.delta > 25 ? 'warning' : 'default'}
                />
              )}
              {supportsAppBlocking(device) && (
                <StatTile
                  icon="ban"
                  label={t('dash.tileBlocked')}
                  value={device.protectionCounters.appBlocked}
                  meta={t('dash.tileBlockedMeta')}
                />
              )}
              <StatTile
                icon="globe"
                label={t('dash.tileSites')}
                value={device.webFilterBlockedCount}
                meta={
                  blockedTotal
                    ? t('dash.tileCategoriesHit', { count: blockedByCategory.length })
                    : t('dash.tileNothingBlocked')
                }
              />
              <StatTile
                icon="alert"
                label={t('dash.tileAttention')}
                value={attention.length}
                meta={
                  attention.length ? t('dash.tileOpenItems') : t('dash.tileAllClear')
                }
                tone={attention.length ? 'warning' : 'good'}
              />
            </div>

            <div className="cols">
              <div>
                {supportsScreenTime(device) && (
                  <Card
                    title={t('dash.cardScreenTime')}
                    subtitle={t('dash.cardScreenTimeSub')}
                  >
                    <UsageBars
                      data={device.usage}
                      limit={c.dailyLimitMinutes}
                      days={14}
                    />
                    <p className="hint">
                      {t(
                        device.platform === 'androidtv'
                          ? 'dash.usageSyncNoteTv'
                          : 'dash.usageSyncNote',
                      )}
                    </p>
                  </Card>
                )}

                <Card title={t('dash.cardRecent')} subtitle={t('dash.cardRecentSub')}>
                  {(activities[device.id] || []).length === 0 && (
                    <p className="empty">{t('dash.cardRecentEmpty')}</p>
                  )}
                  <ul className="timeline">
                    {(activities[device.id] || []).map(a => {
                      const copy = activityCopy(a, activityT, device.name, actorNames);
                      // Glyph and tint from one answer. The tint class only has
                      // rules for tamper/app_blocked/device_locked, all three of
                      // which the kind passes straight through, so this changes
                      // no colour — it just stops the class claiming a `type`
                      // the icon beside it no longer agrees with.
                      const kind = resolveActivityKind(a);
                      return (
                        <li key={a.id}>
                          <span className={`tl-icon type-${kind}`}>
                            <Icon name={activityIconName(kind)} size={15} />
                          </span>
                          <span className="tl-body">
                            <strong>{copy.title}</strong>
                            <em>{copy.description}</em>
                          </span>
                          <time>{timeAgo(a.createdAt)}</time>
                        </li>
                      );
                    })}
                  </ul>
                  {/* Where the list stops, not over it: a free feed ends at
                      today — a client query limit, since `firestore.rules`
                      cannot read the plan — and a parent reaching the bottom
                      could not tell a quiet week from a window that ends
                      there. The phone puts it in the same place. */}
                  <PremiumTeaser teaser={activityWindowTeaser} appT={activityT} />
                </Card>
              </div>

              <div>
                {/* The Attention card stood here until 2026-09-16. It is the
                    rail's list now — one place per question, and the rail is on
                    screen on every section rather than one tab deep. The count
                    stays as a tile above, which is a reading rather than a
                    second copy of the rows. */}
                {/* Only the phone apps sync a permission checklist; a Mac or
                    PC never writes one, and an empty card with a blank
                    "last checked" would read as something being wrong. */}
                {Object.keys(device.protectionStatus).some(isKnownPermission) && (
                  <Card
                    title={t('dash.cardProtection')}
                    subtitle={t('dash.cardProtectionSub', {
                      when: timeAgo(device.protectionStatus.lastCheckedAt),
                    })}
                  >
                    <ul className="perms">
                      {Object.entries(device.protectionStatus)
                        .filter(([k]) => isKnownPermission(k))
                        .map(([k, v]) => {
                          const state = permissionState(v);
                          return (
                            <li key={k}>
                              <span className={`perm-state tone-${state.tone}`}>
                                <Icon name={state.icon} size={13} />
                              </span>
                              {permissionName(t, activityT, k, device.platform)}
                              <em>{t(state.labelKey)}</em>
                            </li>
                          );
                        })}
                    </ul>
                  </Card>
                )}
              </div>
            </div>

            {/*
              Parents and Trusted contacts used to close this tab. Both are
              about the family, and they sat under one child's phone because
              there was no family screen on this surface to put them on. There
              is one now — they are the Settings section's, where the phone
              keeps them.
            */}
          </>
        )}

        {deviceView && tab === 'screen' && (
          <>
            <div className="grid-2">
              <Card title={t('dash.todayTitle')} subtitle={t('dash.todaySub')}>
                <div className="today">
                  <UsageRing
                    used={stats.used}
                    limit={c.dailyLimitMinutes}
                    bonus={c.bonusMinutesToday}
                  />
                  <ul className="today-stats">
                    <li>
                      <span>{t('dash.used')}</span>
                      <strong>{formatMinutes(stats.used)}</strong>
                    </li>
                    <li>
                      <span>{t('dash.left')}</span>
                      <strong className={stats.left === 0 ? 'tone-critical' : ''}>
                        {stats.left == null ? t('viz.none') : formatMinutes(stats.left)}
                      </strong>
                    </li>
                    <li>
                      <span>{t('dash.dailyLimit')}</span>
                      <strong>
                        {c.dailyLimitMinutes
                          ? formatMinutes(c.dailyLimitMinutes)
                          : t('dash.off')}
                      </strong>
                    </li>
                    <li>
                      <span>{t('dash.bonusToday')}</span>
                      <strong>
                        {c.bonusMinutesToday
                          ? `+${formatMinutes(c.bonusMinutesToday)}`
                          : t('viz.none')}
                      </strong>
                    </li>
                  </ul>
                </div>
                {/*
                  Why this total is not live, said where the total is read.
                  Both halves are the free tier as built: the device beats every
                  thirty minutes rather than every one
                  (`@kidgate/core/domain/reportCadence`), and every other child
                  device is parked and reporting nothing at all (§6). Without
                  it a stale number is indistinguishable from a dead agent, on
                  the tier with the least reason to give us the benefit of the
                  doubt. App pack, not `dash.*`: the phone says both sentences
                  already (`.claude/rules/i18n.md`).
                */}
                {!hasFullAccess && (
                  <p className="hint">
                    {`${activityT('plans.teaserLiveNote')} ${activityT(
                      'plans.teaserDeviceNote',
                    )}`}
                  </p>
                )}
              </Card>

              <Card
                title={
                  screenDayIsToday
                    ? t('dash.topAppsTitle')
                    : t('dash.topAppsTitleDay', {
                        date: new Date(screenDay.date).toLocaleDateString(
                          getLocaleTag(),
                          { day: 'numeric', month: 'short' },
                        ),
                      })
                }
                subtitle={t('dash.topAppsSub')}
              >
                <AppBars
                  apps={screenTopApps.apps}
                  limits={c.appLimits}
                  totalMinutes={screenTopApps.totalMinutes}
                />
                {/*
                  The teaser carries both free cases now — under today's three
                  it measures the other seven, and on an empty older day it
                  says why there is nothing (a free family's history was never
                  written, `docs/PRICING.md` §4) with a way to act on it. The
                  bare `topAppsFreeHint` it replaced explained the same card
                  and gave the parent nothing to press. Never under a ten-row
                  list: `resolveTopAppsTeaser` declines on `rowCount`.
                */}
                {screenTopAppsTeaser && (
                  <PremiumTeaser teaser={screenTopAppsTeaser} appT={activityT} />
                )}
              </Card>
            </div>

            <Card
              title={t('dash.trendTitle')}
              subtitle={t('dash.trendSub', { count: range })}
              action={
                <div className="seg">
                  {[7, 14, 30].map(d => (
                    <button
                      key={d}
                      className={range === d ? 'is-active' : ''}
                      onClick={() => setRange(d)}
                    >
                      {t('dash.rangeDays', { count: d })}
                    </button>
                  ))}
                </div>
              }
            >
              {/*
                The bars are also the day picker for the Top apps card above.
                Above, not below, because the card order answers "what did they
                use" before "how has it been trending" — so the picked day
                carries its date in that card's own heading rather than relying
                on the parent connecting a highlighted bar to a card they have
                to scroll back to.
              */}
              <UsageBars
                data={device.usage}
                limit={c.dailyLimitMinutes}
                days={range}
                selectedDate={selectedUsageDate ?? todayKey}
                onSelectDate={date =>
                  setSelectedUsageDate(prev => (prev === date ? null : date))
                }
              />
              {/*
                A free family has no `usageDays` at all (`docs/PRICING.md` §4),
                so these bars are empty for them and an empty chart reads as one
                that failed rather than as the edge of the plan. A sentence and
                no button: the hour band below already carries this column's
                offer. App pack, like the two notes above — the phone says the
                same thing on its own 30-day card (`.claude/rules/i18n.md`).
              */}
              {!hasFullAccess && (
                <p className="hint">{activityT('plans.premiumHistoryNote')}</p>
              )}
            </Card>

            {/*
              Under the bars, because it is about the bar that was picked. A bar
              reading 28 minutes is a number a parent cannot interrogate; the
              band says whether that was half an hour of use or a day nobody was
              measuring — of that day, so it reads `screenDay` and falls back to
              the newest only when no bar is picked.
            */}
            <Card title={t('dash.timelineTitle')} subtitle={t('dash.timelineSub')}>
              <UsageDayTimeline
                day={screenDay ?? device.usage[device.usage.length - 1]}
                platform={device.platform}
                capability={device.capabilities?.usageTimeline}
                lockedSlot={
                  timelineTeaser ? (
                    <PremiumTeaser teaser={timelineTeaser} appT={activityT} />
                  ) : null
                }
              />
            </Card>

            <Card
              title={t('dash.blockedHoursTitle')}
              subtitle={
                c.scheduleEnabled
                  ? t('dash.blockedHoursSub', { count: c.scheduleWindows.length })
                  : t('dash.scheduleOff')
              }
            >
              <ScheduleGrid windows={c.scheduleWindows} />
              {/*
                The grid stays: reading three overlapping ranges as text is the
                thing parents get wrong, and that is as true while editing as
                it was when this card was read-only. The rows below are the
                edit surface, and the grid is what they are checked against.
              */}
              <ScheduleEditor
                windows={c.scheduleWindows}
                readOnly={live && !canWrite}
                busy={busy === 'schedule-windows'}
                onSave={next =>
                  run('schedule-windows', () =>
                    // Routed exactly like the switch above it: on an assigned
                    // device the schedule is the CHILD's rule and the server
                    // fans it out to every sibling. Writing this device's own
                    // controls would be wiped by the next fan-out.
                    device.childId
                      ? actions.updateChildRules(device.childId, {
                          scheduleWindows: next,
                        })
                      : actions.updateControls(device.id, {
                          scheduleWindows: next,
                        }),
                  )
                }
              />
            </Card>
          </>
        )}

        {deviceView && tab === 'apps' && (
          <>
            {/*
              The two app-shaped cards, on a tab that also holds the web ones.
              A browser extension sees its own tab and nothing else on the
              machine, so an app-usage bar chart there is an empty frame and the
              blocking tiles are three zeroes describing a feature the device
              does not have. The web cards below carry on regardless — they are
              the only data this surface produces.
            */}
            <div className="grid-2">
              {supportsScreenTime(device) && (
                <Card title={t('dash.appUsageTitle')} subtitle={t('dash.appUsageSub')}>
                  <AppBars
                    apps={todayApps}
                    limits={c.appLimits}
                    totalMinutes={todayMinutes}
                  />
                </Card>
              )}

              {(supportsAppBlocking(device) || supportsAppLimits(device)) && (
                <Card
                  title={t('dash.appBlockingTitle')}
                  subtitle={t('dash.appBlockingSub')}
                >
                  <div className="tiles tiles-inline">
                    <StatTile
                      label={t('dash.blockingLabel')}
                      value={c.appBlockingEnabled ? t('dash.on') : t('dash.off')}
                      tone={c.appBlockingEnabled ? 'good' : 'muted'}
                    />
                    <StatTile label={t('dash.appsBlocked')} value={c.blockedAppCount} />
                    <StatTile
                      label={t('dash.categories')}
                      value={c.blockedCategoryCount}
                    />
                  </div>
                  {/*
                    Best-effort blocking (desktop, TV) says so here, from the
                    same probe and the same app key the phone's card reads —
                    `supportsAppBlocking` counts that probe as yes on purpose.
                  */}
                  {appBlockingNoteKey(device) && (
                    <p className="hint">{activityT(appBlockingNoteKey(device))}</p>
                  )}
                  {/*
                    The three tiles above are summaries the DEVICE writes —
                    which apps are blocked is chosen in a native picker on the
                    child's machine, and on iOS the selection is an opaque
                    `ApplicationToken` that exists nowhere else. So blocking
                    stays read-only here on purpose; per-app limits do not,
                    because `appLimits` is a parent-owned list of package names.
                  */}
                  <p className="hint">{t('dash.perAppHint')}</p>
                  <AppLimitsEditor
                    limits={c.appLimits}
                    candidates={limitCandidates}
                    readOnly={live && !canWrite}
                    busy={busy === 'app-limits'}
                    onSave={next =>
                      run('app-limits', () =>
                        // Per-device, never routed: the package names exist on
                        // this one machine (`docs/CHILD_HUB.md`).
                        actions.updateControls(device.id, { appLimits: next }),
                      )
                    }
                  />
                </Card>
              )}
            </div>

            {/*
              What is on the device, beside what was used on it.
              Gated on its own probe rather than on `supportsScreenTime`: a
              television publishes `appInventory: true` and no install feed, and
              an iPhone publishes neither because FamilyControls enumerates
              nothing and never will.
            */}
            {supportsAppInventory(device) && (
              <Card
                title={t('dash.inventoryTitle')}
                subtitle={
                  inventorySummary
                    ? t(inventorySummary.key, inventorySummary.params)
                    : t('dash.inventorySub')
                }
              >
                {!inventory ? (
                  <p className="empty">{t('dash.inventoryEmpty')}</p>
                ) : (
                  <>
                    {/* Caveats before the rows: a parent who reads the list
                        first has already formed the conclusion these qualify. */}
                    {inventory.stale && (
                      <p className="hint">{activityT('appInventory.staleNote')}</p>
                    )}
                    {inventory.isFirstScan && (
                      <p className="hint">{t('dash.inventoryFirstScan')}</p>
                    )}
                    {/* Blocked by the device on its own, waiting on the
                        parent — above every category, with the answer on the
                        row. The Controls tab carries the same list off the
                        feed; this is the scan's copy of it. */}
                    {inventory.pending.length > 0 && (
                      <>
                        <p className="hint">{activityT('appInventory.pendingTitle')}</p>
                        <ul className="events">
                          {inventory.pending.map(row => (
                            <li key={row.id}>
                              <span className="ev-state tone-serious">
                                <Icon name="plus" size={13} />
                              </span>
                              <span className="ev-body">
                                <strong>{row.label}</strong>
                                <em>
                                  {activityT('appInventory.pendingBadge')}
                                  {row.installedAt
                                    ? ` · ${timeAgo(new Date(row.installedAt).toISOString())}`
                                    : ''}
                                </em>
                              </span>
                              <button
                                className="btn btn-sm btn-primary"
                                disabled={
                                  (live && !canWrite) ||
                                  busy === `install-allow-${row.id}`
                                }
                                title={
                                  live && !canWrite
                                    ? t('dash.unlockToChange')
                                    : undefined
                                }
                                onClick={() => approveInstall(row.id)}
                              >
                                {t('dash.installAllow')}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    {inventory.flagged.length > 0 && (
                      <>
                        <p className="hint">{t('dash.inventoryFlagged')}</p>
                        <ul className="events">
                          {inventory.flagged.map(row => renderFlaggedRow(row, false))}
                        </ul>
                      </>
                    )}
                    {/* Directly under the flags it answers: a dismissal has to
                        stay findable and reversible, or the summary above
                        reports "nothing flagged" as the classifier's verdict
                        when it is the parent's. */}
                    {inventory.dismissed.length > 0 && (
                      <>
                        <p className="hint">
                          {activityT('appInventory.dismissedTitle')}
                        </p>
                        <ul className="events">
                          {inventory.dismissed.map(row => renderFlaggedRow(row, true))}
                        </ul>
                      </>
                    )}
                    <div className="tiles tiles-inline">
                      <StatTile
                        label={t('dash.inventoryFlaggedLabel')}
                        value={inventory.flagged.length}
                        tone={inventory.flagged.length > 0 ? 'serious' : 'good'}
                      />
                      <StatTile
                        label={t('dash.inventoryOtherLabel')}
                        value={inventory.other.length}
                      />
                      {/* Its own tile, never folded into the one above:
                          "we looked and it is ordinary" and "we have not
                          looked" are different claims. */}
                      <StatTile
                        label={t('dash.inventoryUnknownLabel')}
                        value={inventory.unclassified.length}
                      />
                    </div>
                    <p className="hint">{activityT('appInventory.incompleteNote')}</p>
                  </>
                )}
              </Card>
            )}

            <div className="grid-2">
              <Card
                title={t('dash.webActivityTitle')}
                subtitle={t('dash.webActivitySub')}
              >
                {web.length === 0 && webHistoryTeaser ? (
                  /* `logChildWebActivity` is premium-gated, so this list is
                     empty for a free family forever, and "no sites yet" over a
                     running filter reads as a filter that stopped — on the tier
                     where the filter is most of what they can see. The week's
                     refusals are the number they do have, and the fold stays
                     silent until there is one. */
                  <PremiumTeaser teaser={webHistoryTeaser} appT={activityT} />
                ) : web.length === 0 ? (
                  <p className="empty">{t('dash.webActivityEmpty')}</p>
                ) : (
                  <div className="tbl-wrap">
                    <table className="tbl">
                      <thead>
                        <tr>
                          <th>{t('dash.colDomain')}</th>
                          <th className="num">{t('dash.colVisits')}</th>
                          <th className="num">{t('dash.colBlocked')}</th>
                          <th>{t('dash.colLastSeen')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {web.map(w => (
                          <tr key={w.domain}>
                            <td>
                              {w.domain}
                              {w.category && (
                                <span className="tag">
                                  {webCategoryLabel(t, w.category)}
                                </span>
                              )}
                            </td>
                            <td className="num">{w.visits}</td>
                            <td
                              className={`num${w.blockedVisits ? ' tone-critical' : ''}`}
                            >
                              {w.blockedVisits || t('viz.none')}
                            </td>
                            <td>{timeAgo(w.lastAt)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                <p className="hint">
                  {t(
                    device.platform === 'androidtv'
                      ? 'dash.webActivitySyncNoteTv'
                      : 'dash.webActivitySyncNote',
                  )}
                </p>
              </Card>

              <Card
                title={t('dash.filterRefusedTitle')}
                subtitle={t('dash.filterRefusedSub', { count: blockedTotal })}
              >
                {blockedByCategory.length === 0 ? (
                  <p className="empty">{t('dash.nothingBlockedYet')}</p>
                ) : (
                  <ul className="catbars">
                    {blockedByCategory.map(([cat, n], i) => (
                      <li key={cat}>
                        <div className="hbar-head">
                          <span className="hbar-label">
                            <i className={`dot dot-${(i % 3) + 1}`} />
                            {webCategoryLabel(t, cat)}
                          </span>
                          <span className="hbar-value">{n}</span>
                        </div>
                        <div className="hbar-track">
                          <div
                            className={`hbar-fill fill-${(i % 3) + 1}`}
                            style={{ width: `${(n / blockedTotal) * 100}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                {blockedGuessed ? (
                  <p className="hint">{t('dash.rollupNoteAi')}</p>
                ) : null}
                {/* Three mechanisms, not two. The Android sentence names a DNS
                    filter, which is what the phone's and the TV's VPN is and
                    what a Mac's NetworkExtension provider is not — a Mac fell
                    into it only because this branch had nowhere else to put
                    anything that was not an iPhone. */}
                <p className="hint">
                  {t(
                    device.platform === 'ios'
                      ? 'dash.filterHintIos'
                      : device.platform === 'macos'
                        ? 'dash.filterHintMacos'
                        : 'dash.filterHintAndroid',
                  )}
                </p>
                {/* Why a refusal count can be large with nobody at the
                    device — a television nobody switched on produced 770 in
                    a day. One sentence for every platform, and it says what
                    devices do rather than what this card contains, which is
                    what keeps it true where the filter counts openings
                    (the extension) or minutes (iOS) instead of lookups. */}
                <p className="hint">{t('dash.webBackgroundNote')}</p>
              </Card>

              {/* The card is drawn for a desktop too, and that is the change:
                  hiding it left a parent with a Mac or a PC no place to be told
                  the Chrome extension already reports this. The phone draws
                  the same card from the same rule (`showsVideoHistoryCard`),
                  the same sentence from the same key and the same three
                  steps, so the two consoles cannot describe one machine
                  differently. */}
              {showsVideoHistoryCard(device) && (
                <Card title={t('dash.videosTitle')} subtitle={t('dash.videosSub')}>
                  {!supportsVideoHistory(device) ? (
                    <>
                      <p className="empty">
                        {activityT(videoHistoryUnavailableKey(device))}
                      </p>
                      {isDesktopLike(device?.platform) ? (
                        /* The Attention feed's numbered fix list, reused:
                           the order is load-bearing here too, since the
                           switch in the last step exists only once the one
                           before it has produced a device to hold it. Six
                           steps rather than three, matching the phone — the
                           short version never said where the extension comes
                           from, which is the step a parent was stuck on. */
                        <>
                          <p className="hint">
                            {activityT('videoHistory.extensionGuideTitle')}
                          </p>
                          <ol className="attn-fix">
                            <li>{activityT('videoHistory.extensionStepOpenChrome')}</li>
                            <li>{activityT('videoHistory.extensionStepStore')}</li>
                            <li>{activityT('videoHistory.extensionStepSearch')}</li>
                            <li>{activityT('videoHistory.extensionStepInstall')}</li>
                            <li>{activityT('videoHistory.extensionStepConnect')}</li>
                            <li>{activityT('videoHistory.extensionStepEnable')}</li>
                          </ol>
                        </>
                      ) : null}
                    </>
                  ) : null}
                  {videoHistoryBlockerKey(device) ? (
                    <p className="empty">{activityT(videoHistoryBlockerKey(device))}</p>
                  ) : null}
                  {!supportsVideoHistory(device) ? null : videos.length === 0 &&
                    videoHistoryTeaser ? (
                    /* Structural: no free family has a video history to be
                       missing. Drawn only when the web-history offer above
                       declined, so this tab never sells twice. */
                    <PremiumTeaser teaser={videoHistoryTeaser} appT={activityT} />
                  ) : videos.length === 0 ? (
                    <p className="empty">{t('dash.videosEmpty')}</p>
                  ) : (
                    <div className="tbl-wrap">
                      <table className="tbl">
                        <thead>
                          <tr>
                            <th>{t('dash.colVideo')}</th>
                            <th>{t('dash.colChannel')}</th>
                            <th className="num">{t('dash.colViews')}</th>
                            <th>{t('dash.colLastSeen')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/*
                          The title opens YouTube, and the mark says whether it
                          opens the video or a search for it. Only the browser
                          extension knows a `videoId`; a row from the Android
                          app or the television has none and never will, so
                          `youtubeOpenTarget` falls back to a search on the
                          title and channel. Same rule, same copy, as the phone.
                        */}
                          {videos.map(v => {
                            const target = youtubeOpenTarget(v);
                            const openLabel = activityT(
                              target?.exact
                                ? 'videoHistory.openAction'
                                : 'videoHistory.searchAction',
                            );
                            return (
                              <tr key={`${v.date}:${v.id}`}>
                                <td>
                                  {target ? (
                                    <a
                                      className="video-link"
                                      href={target.url}
                                      target="_blank"
                                      rel="noreferrer"
                                      title={openLabel}
                                      aria-label={`${v.title} — ${openLabel}`}
                                    >
                                      {v.title}
                                      <span
                                        className="video-link-mark"
                                        aria-hidden="true"
                                      >
                                        {target.exact ? '↗' : '⌕'}
                                      </span>
                                    </a>
                                  ) : (
                                    v.title
                                  )}
                                </td>
                                <td>{v.channel || t('viz.none')}</td>
                                <td className="num">{v.views}</td>
                                <td>{timeAgo(v.lastAt)}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </Card>
              )}
            </div>
          </>
        )}

        {deviceView && tab === 'safety' && (
          <div className="cols">
            <div>
              {/*
                Each card carries its own rule, not just the tab. The three do
                not fail together: a Mac whose child refused Location still
                raises SOS, and the card that can never fill should not sit
                over the one that can.
              */}
              {supportsLocation(device) && (
                <Card
                  title={t('dash.locationTitle')}
                  subtitle={
                    !c.locationSharingEnabled
                      ? t('dash.locationSharingOff')
                      : device.lastLocation
                        ? t('dash.locationUpdated', {
                            when: timeAgo(device.lastLocation.updatedAt),
                          })
                        : t('dash.locationWaiting')
                  }
                >
                  <div className="map">
                    <div className="map-grid" aria-hidden="true" />
                    {(places[device.id] || []).map((p, i) => (
                      <span
                        key={p.id}
                        className={`map-place${p.inside ? ' is-inside' : ''}`}
                        style={{
                          left: `${28 + i * 24}%`,
                          top: `${26 + (i % 2) * 22}%`,
                        }}
                      >
                        <i />
                        {p.name}
                      </span>
                    ))}
                    {device.lastLocation && (
                      <div className="map-badge">
                        <strong>
                          {device.lastLocation.placeName ||
                            (device.lastLocation.relativePlace
                              ? /* "12 km south of Home" — the shape comes from
                                   `relativePlaceCopy` so this reads exactly as
                                   the phone does. */
                                activityT(device.lastLocation.relativePlace.key, {
                                  place: device.lastLocation.relativePlace.place,
                                  distance: activityT(
                                    device.lastLocation.relativePlace.distanceKey,
                                    {
                                      value:
                                        device.lastLocation.relativePlace.distanceValue,
                                    },
                                  ),
                                  direction: activityT(
                                    device.lastLocation.relativePlace.compassKey,
                                  ),
                                })
                              : device.lastLocation.nearbyPlaceName
                                ? t('dash.nearPlace', {
                                    place: device.lastLocation.nearbyPlaceName,
                                  })
                                : t('dash.lastKnownLocation'))}
                        </strong>
                        {device.lastLocation.address && (
                          <em>{device.lastLocation.address}</em>
                        )}
                        {/*
                          Why this badge is a coordinate pair, when the reason
                          is the paywall.

                          `placeName` and `address` both come from
                          `/reverseGeocodeLocation`, which is premium-gated: a
                          lapsed family gets a 403 and the client writes the
                          coordinates alone. Measured 2026-09-10 — every
                          request that day refused, on a family whose trial had
                          ended two days earlier — and this row said nothing
                          about it.

                          **Two conditions, and the second does the work the
                          missing constant cannot.** `family.plan !== 'premium'`
                          is all this surface has: there is no
                          `VITE_TRIAL_DAYS`, so it cannot tell a running trial
                          from an ended one and `PlanCard` records why guessing
                          is worse than not knowing. But a trial that is still
                          running has its fixes *named*, so requiring an unnamed
                          badge is what keeps this off a trial family's screen
                          without knowing the date.

                          Sentences from the app pack through `activityT`, never
                          a `dash.*` twin — `.claude/rules/i18n.md`. The phone
                          adds a dated sentence between these two; this surface
                          cannot date it, so it says the half it can.
                        */}
                        {family.plan !== 'premium' &&
                          !device.lastLocation.placeName &&
                          !device.lastLocation.address && (
                            <em>
                              {activityT('location.namesNeedPremium')} ·{' '}
                              {/*
                                The date only when this build was told the
                                trial length — `VITE_TRIAL_DAYS`, read through
                                `lib/trial.js`, which answers null rather than
                                assuming 7. Absent, the notice is the two
                                sentences it was before the constant existed;
                                present, it says the day like the phone does.
                              */}
                              {trialEndsAt
                                ? `${activityT('location.namesNeedPremiumTrialEnded', {
                                    date: trialEndsAt.toLocaleDateString(),
                                  })} `
                                : ''}
                              {activityT('location.namesNeedPremiumStill')}
                            </em>
                          )}
                      </div>
                    )}
                  </div>
                  {(places[device.id] || []).length === 0 && (
                    <p className="empty">{t('dash.noPlaces')}</p>
                  )}
                  <PlacesEditor
                    device={device}
                    readOnly={live && !canWrite}
                    busy={busy === 'places'}
                    onSave={next =>
                      run('places', () => actions.updateFamilyPlaces(next))
                    }
                  />
                  <ul className="places">
                    {(places[device.id] || []).map(p => (
                      <li key={p.id}>
                        <span
                          className={`perm-state ${p.inside ? 'tone-good' : 'tone-muted'}`}
                        >
                          <Icon name={p.inside ? 'check' : 'mapPin'} size={13} />
                        </span>
                        {p.name}
                        <em>
                          {p.radius ? t('dash.placeRadius', { meters: p.radius }) : ''}
                          {[
                            p.alertOnEnter && t('dash.placeArrive'),
                            p.alertOnExit && t('dash.placeLeave'),
                          ]
                            .filter(Boolean)
                            .join(' + ') || t('dash.placeNoAlerts')}
                        </em>
                      </li>
                    ))}
                  </ul>
                  <p className="hint">{activityT('location.syncNote')}</p>
                </Card>
              )}

              {supportsSos(device) && (
                <Card title={t('dash.sosTitle')} subtitle={t('dash.sosSub')}>
                  {(sosAlerts[device.id] || []).length === 0 ? (
                    <p className="empty">{t('dash.sosEmpty')}</p>
                  ) : (
                    <ul className="events">
                      {sosAlerts[device.id].map(s => (
                        <li key={s.id}>
                          <span className="ev-state tone-critical">
                            <Icon name="lifebuoy" size={13} />
                          </span>
                          <span className="ev-body">
                            {/* Same two-shape rule as the feed: a legacy row
                              carries frozen text, a current one a key. */}
                            <strong>
                              {s.messageKey
                                ? activityT(s.messageKey, s.params)
                                : s.message}
                            </strong>
                            <em>
                              {s.location?.placeName} ·{' '}
                              {t(
                                s.status === 'acknowledged'
                                  ? 'dash.sosAcknowledged'
                                  : 'dash.sosActive',
                              )}
                            </em>
                          </span>
                          <time>{timeAgo(s.createdAt)}</time>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              )}
            </div>

            <div>
              {supportsCheckIn(device) && (
                <Card title={t('dash.checkInsTitle')} subtitle={t('dash.checkInsSub')}>
                  <ul className="events">
                    {(checkIns[device.id] || []).map(ci => (
                      <li key={ci.id}>
                        <span
                          className={`ev-state tone-${
                            ci.status === 'safe'
                              ? 'good'
                              : ci.status === 'missed'
                                ? 'critical'
                                : 'warning'
                          }`}
                        >
                          <Icon
                            name={
                              ci.status === 'safe'
                                ? 'check'
                                : ci.status === 'missed'
                                  ? 'ban'
                                  : 'clock'
                            }
                            size={13}
                          />
                        </span>
                        <span className="ev-body">
                          <strong>
                            {t(
                              ci.status === 'safe'
                                ? 'dash.checkInSafe'
                                : ci.status === 'missed'
                                  ? 'dash.checkInMissed'
                                  : 'dash.checkInWaiting',
                            )}
                          </strong>
                          <em>
                            {ci.location?.placeName
                              ? `${ci.location.placeName} · `
                              : ''}
                            {t(
                              ci.status !== 'safe'
                                ? ci.requirePhoto
                                  ? 'dash.checkInPhotoRequested'
                                  : 'dash.checkInNoReply'
                                : ci.photoSkipped
                                  ? 'dash.checkInPhotoSkipped'
                                  : ci.requirePhoto
                                    ? 'dash.checkInPhotoAttached'
                                    : 'dash.checkInNoPhoto',
                            )}
                          </em>
                        </span>
                        <time>{timeAgo(ci.createdAt)}</time>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="btn btn-primary btn-block"
                    disabled={busy === 'checkin2'}
                    onClick={() =>
                      live &&
                      run(
                        'checkin2',
                        () => actions.sendCheckIn(device),
                        t('dash.toastCheckIn', {
                          name: device.child?.name || device.name,
                        }),
                      )
                    }
                  >
                    {busy === 'checkin2' ? t('dash.sending') : t('dash.sendCheckIn')}
                  </button>
                </Card>
              )}

              {/*
                Gone entirely where nothing files a tamper row, rather than
                struck out. This card's own rule (`apps/dashboard/CLAUDE.md`):
                a rule that is OFF stays visible so it can be told from one the
                device cannot hold — but a **measurement** disappears, and this
                is a measurement. It read "0 tamper alerts" over a television
                and a Chromebook extension until 2026-09-03: a number a parent
                takes as reassurance about something nothing was watching,
                which is what `.claude/rules/cross-platform.md` exists to
                catch. The phone answers it by never listing the screen.
              */}
              {supportsTamperAlerts(device) && (
                <Card
                  title={t('dash.protectionAlertsTitle')}
                  subtitle={t('dash.protectionAlertsSub', {
                    count: device.protectionCounters.tamper,
                  })}
                >
                  <ul className="timeline">
                    {(activities[device.id] || [])
                      .filter(a => a.type === 'tamper')
                      .map(a => {
                        const copy = activityCopy(
                          a,
                          activityT,
                          device.name,
                          actorNames,
                        );
                        return (
                          <li key={a.id}>
                            <span className="tl-icon type-tamper">
                              <Icon name="alert" size={15} />
                            </span>
                            <span className="tl-body">
                              <strong>{copy.title}</strong>
                              <em>{copy.description}</em>
                            </span>
                            <time>{timeAgo(a.createdAt)}</time>
                          </li>
                        );
                      })}
                  </ul>
                  <p className="hint">{t('dash.protectionAlertsHint')}</p>
                </Card>
              )}

              {/*
                Not gated on the capability, unlike the cards above it: the
                card's own first line is the honest answer for a device that
                cannot watch messages, and hiding it would leave the dashboard
                silent about the one state this whole feature exists to
                surface — a grant Android has revoked, which reads on every
                other screen as a quiet week. Every sentence in it comes from
                the app pack (`.claude/rules/i18n.md`).
              */}
              <Card
                title={activityT('messageMonitoring.actionTitle')}
                subtitle={activityT('messageMonitoring.heroSubtitle')}
              >
                <MessageAlertsCard
                  device={device}
                  activities={activities[device.id] || []}
                  readOnly={live && !canWrite}
                  actions={actions}
                  run={run}
                  busy={busy}
                  lockedTeaser={messageAlertsTeaser}
                />
              </Card>
            </div>
          </div>
        )}

        {deviceView && tab === 'controls' && (
          <ControlsTab
            device={device}
            /*
             * Every device this child holds, for the budget seed. The budget
             * is one number shared across them, so writing it on the selected
             * device alone would leave the siblings locking on a stale share
             * until their next usage report.
             */
            siblingDevices={devices.filter(
              other => device.childId && other.childId === device.childId,
            )}
            rewardTasks={rewardTasks}
            siteRequests={siteRequests[device.id] || []}
            familyChildren={children}
            leaderboard={leaderboard}
            readOnly={live && !canWrite}
            hasFullAccess={hasFullAccess}
            actions={actions}
            run={run}
            busy={busy}
            activities={activities[device.id] || []}
          />
        )}

        {/*
          Last on the page, below whichever tab is open, and outside all five:
          renaming and unpairing are about the device the header names, not
          about one of the things the tabs divide it into. Renders nothing for
          a joined co-parent — both are the owner's alone.

          **`deviceView`, not `device`.** `device` stays resolved while the
          Family list, Activity, Reports and Settings are open — it is the
          selection, not the thing on screen — so this card was drawn under the
          child list, under the weekly report, and under the account settings,
          each time naming a machine the page was not about.
        */}
        {deviceView && live && (
          <DeviceAdmin
            device={device}
            actions={actions}
            readOnly={live && !canWrite}
            busy={busy === `rename-${device.id}` || busy === `remove-${device.id}`}
            run={run}
          />
        )}
      </main>

      {/*
        The third column, and it is a column of the page's own grid rather than
        something floating over the content: the pane is capped at 54rem for
        readability and the cap left the right third of a desk browser empty.
      */}
      {railOpen && (
        <AttentionRail
          items={familyAttention}
          banner={parkedBanner}
          appT={activityT}
          onAction={runAttentionAction}
          busyId={busy}
          readOnly={live && !canWrite}
          onOpenDevice={id => {
            setDeviceId(id);
            setTab('overview');
            setDeviceOpen(true);
          }}
        />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
