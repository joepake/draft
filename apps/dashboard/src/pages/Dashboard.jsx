import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  isKnownPermission,
  permissionLabel,
  webCategoryGroupLabel,
  webCategoryLabel,
} from '../dashboard/labels.js';
import { activityCopy, useActivityTranslate } from '../dashboard/activityCopy.js';
import StepUpSheet from '../auth/StepUpSheet.jsx';
import ScheduleEditor from '../dashboard/ScheduleEditor.jsx';
import AppLimitsEditor from '../dashboard/AppLimitsEditor.jsx';
import RewardTaskForm from '../dashboard/RewardTaskForm.jsx';
import PlacesEditor from '../dashboard/PlacesEditor.jsx';
import ChildBudgetEditor from '../dashboard/ChildBudgetEditor.jsx';
import DeviceAdmin from '../dashboard/DeviceAdmin.jsx';
import MessageAlertsCard from '../dashboard/MessageAlertsCard.jsx';
import Toggle from '../dashboard/Toggle.jsx';
import { timeAgo } from '../dashboard/timeAgo.js';
import PlanCard from '../dashboard/PlanCard.jsx';
import ParkedDevicesCard from '../dashboard/ParkedDevicesCard.jsx';
import { resolveTodayTopApps } from '@kidgate/core/domain/todayTopApps';
import { localDayKey } from '@kidgate/core/domain/weeklyReportSchedule';
import {
  MONITORED_SWAP_COOLDOWN_MS,
  summariseParking,
} from '@kidgate/core/domain/deviceParking';
import ParentsCard from '../dashboard/ParentsCard.jsx';
import BrandLogo from '@kidgate/web-ui/BrandLogo';
import Icon from '@kidgate/web-ui/Icon';
import { deviceIconName } from '../dashboard/deviceIcon.js';
import { ACCENT_IDS, getAccentDefinition } from '@kidgate/tokens/accents';
import { readDeviceBattery } from '@kidgate/core/domain/battery';
import { isAndroidLike } from '@kidgate/core/domain/platformFamily';
import { resolveActivityKind } from '@kidgate/core/domain/activityKind';
import { WEB_FILTER_CATEGORY_GROUPS } from '@kidgate/core/domain/webFilterCategoryGroups';
import { WEB_FILTER_CATEGORIES } from '@kidgate/schema/webActivity';
import { resolveTaskStars } from '@kidgate/core/domain/rewardTasks';
import { getProtectionSummaryKeys } from '@kidgate/core/domain/protectionStatus';
import { resolveLockEnforcement } from '@kidgate/core/domain/lockEnforcement';
import { hasUnseenWeeklyReport } from '@kidgate/core/domain/weeklyReportBadge';
import {
  readWeeklyReportSeen,
  writeWeeklyReportSeen,
} from '../dashboard/reportSeen.js';
import {
  supportsWebFiltering,
  webFilterBlockerKey,
} from '@kidgate/core/domain/webFilterSupport';
import {
  supportsAppBlocking,
  supportsAppLimits,
  supportsDailyLimit,
  supportsLock,
  supportsSchedule,
  supportsScreenTime,
  installApprovalMode,
} from '@kidgate/core/domain/controlSupport';
import {
  pendingInstallsFromActivities,
  resolveInstallApprovalPolicy,
  withApprovedPackage,
} from '@kidgate/core/domain/appInstallApproval';
import { supportsLocation } from '@kidgate/core/domain/locationSupport';
import { supportsCheckIn } from '@kidgate/core/domain/checkInSupport';
import { supportsSos } from '@kidgate/core/domain/sosSupport';
import {
  supportsSearchMonitoring,
  supportsTamperAlerts,
} from '@kidgate/core/domain/alertSupport';
import { supportsSafeSearch } from '@kidgate/core/domain/safeSearchSupport';
import {
  supportsVideoHistory,
  videoHistoryBlockerKey,
} from '@kidgate/core/domain/videoHistorySupport';
import { supportsAppInventory } from '@kidgate/core/domain/appInventorySupport';
import { appInventorySummaryKey } from '@kidgate/core/domain/appInventoryReport';
import { useAppInventory } from '../dashboard/useAppInventory';
import { useLatestBuilds } from '../dashboard/useLatestBuilds.js';
import { resolveBuildFreshness } from '@kidgate/core/domain/buildFreshness';
import { supportsRewardTasks } from '@kidgate/core/domain/rewardTaskSupport';
import { getEffectiveDeviceStatus } from '@kidgate/core/domain/deviceStatus';
import {
  AppBars,
  formatMinutes,
  ScheduleGrid,
  UsageBars,
  UsageDayTimeline,
  UsageRing,
} from '../dashboard/charts.jsx';
import LanguagePicker from '@kidgate/web-ui/LanguagePicker';
import ReportPanel from '../dashboard/ReportPanel.jsx';
import { RichText } from '@kidgate/web-ui/RichText';
import { useT } from '@kidgate/web-ui/useT';

/**
 * The stored `status` field recomputed, which is what every other surface
 * shows. Hoisted so the sidebar rows and the header agree without threading a
 * clock through both.
 */
function deviceStatusOf(device) {
  return getEffectiveDeviceStatus(device, Date.now());
}

const TABS = [
  { id: 'overview', labelKey: 'dash.tabOverview', icon: 'grid' },
  { id: 'screen', labelKey: 'dash.tabScreen', icon: 'clock' },
  { id: 'apps', labelKey: 'dash.tabApps', icon: 'apps' },
  { id: 'safety', labelKey: 'dash.tabSafety', icon: 'shield' },
  { id: 'controls', labelKey: 'dash.tabControls', icon: 'sliders' },
  // Last, and the only tab that is about the family rather than the device on
  // screen: the report sums every device in the family, which is why it stays
  // rendered when no device is selected.
  { id: 'report', labelKey: 'dash.tabReport', icon: 'fileText' },
];

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
 * Issues the attention feed leaves to the part of this page that already
 * answers them — see the filter in `attention` for why each one.
 */
const PROTECTION_ISSUES_SHOWN_ELSEWHERE = new Set(['inactive', 'web-filter-blocked']);

/**
 * A glyph per issue, so the feed reads as a list of different problems rather
 * than a column of identical warning triangles. `alert` is the fallback and is
 * correct for anything new: a row with no icon of its own is still a row.
 */
const PROTECTION_ISSUE_ICON = {
  'screen-time': 'clock',
  'missing-status': 'alert',
  location: 'mapPin',
  notifications: 'bell',
  overlay: 'lock',
  batteryOptimization: 'battery',
  exactAlarm: 'clock',
  // No accessibility glyph in `@kidgate/tokens/icons`; a hand is what the
  // grant is about and `userCheck` is the nearest honest one.
  accessibility: 'userCheck',
  backgroundAppRefresh: 'refresh',
  'consent-camera': 'camera',
  'consent-location': 'mapPin',
};

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
function Card({ title, subtitle, action, className = '', children }) {
  return (
    <section className={`card ${className}`}>
      {(title || action) && (
        <header className="card-head">
          <div>
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
          {action}
        </header>
      )}
      {children}
    </section>
  );
}

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

// `parked` is muted, not critical: a parked device is quiet by design — the
// free plan watching one device and this being another (`docs/PRICING.md` §6)
// — and the pill that painted it red was reporting a plan as a fault.
const STATUS_TONE = {
  online: 'good',
  offline: 'muted',
  locked: 'warning',
  parked: 'muted',
};
const STATUS_KEY = {
  online: 'dash.statusOnline',
  offline: 'dash.statusOffline',
  locked: 'dash.statusLocked',
  parked: 'dash.statusPaused',
};

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
  const lockState =
    known === 'locked' && device ? resolveLockEnforcement(device) : null;
  const labelKey = (lockState && LOCK_STATE_KEY[lockState]) || STATUS_KEY[known];
  return (
    <span className={`pill tone-${STATUS_TONE[known]}`}>
      <i className="pill-dot" aria-hidden="true" />
      {t(labelKey)}
    </span>
  );
}

/**
 * A child's initial in their own accent — the browser's `ChildAvatar`.
 *
 * The colour comes from `@kidgate/tokens` rather than from a palette invented
 * here, and `colorIndex` is taken modulo the list exactly as the schema says,
 * so a child is the same colour on the phone and in this tab. Two surfaces
 * inventing their own child colours is worse than neither having any: a parent
 * would learn one mapping and read the other one wrong.
 */
function ChildInitial({ name, colorIndex = 0 }) {
  const accent = getAccentDefinition(
    ACCENT_IDS[colorIndex % ACCENT_IDS.length] ?? ACCENT_IDS[0],
  );
  return (
    <span className="kid-initial" style={{ background: accent.swatch }}>
      {(name || '?').trim().charAt(0).toUpperCase()}
    </span>
  );
}

/**
 * Keyed on `resolveActivityKind`, not on the stored `type`.
 *
 * `screen_time` is the catch-all `parseActivityType` stamps on anything it does
 * not recognise, and four features write through it — check-ins, a location
 * refresh, time requests and reward tasks — so keying on `type` drew a clock
 * over every one of them. `apps/mobile` renders the same feed and had the same
 * defect; the split lives in `@kidgate/core` so the two cannot drift.
 */
const ACTIVITY_ICON = {
  app_blocked: 'ban',
  app_opened: 'play',
  app_installed: 'plus',
  app_removed: 'minus',
  // Entering and leaving are opposite events and shared one glyph here. The
  // phone has drawn `home` for an arrival since the feed was written.
  place_enter: 'home',
  place_exit: 'mapPin',
  tamper: 'alert',
  message_alert: 'message',
  // Flagged text the child typed into a search box — the copy says
  // "Concerning search", so a speech bubble was describing the wrong event.
  search_alert: 'search',
  // A watched word the AI tier cleared, not an alert. The feed here renders
  // the row's own titleKey/descriptionKey, so the copy is already right; this
  // map only decides the glyph, and without an entry the row draws the
  // unknown-activity fallback. The dedicated "checked and cleared" section
  // lives on `apps/mobile`'s Message Alerts screen, which this app has no
  // equivalent of — recorded in docs/BACKLOG.md beside the rest of that gap.
  message_checked: 'message',
  device_locked: 'lock',
  device_unlocked: 'unlock',
  // Whatever is left in the bucket once the four below are taken out of it:
  // a legacy usage row, or a `type` this build does not know.
  screen_time: 'clock',
  check_in: 'userCheck',
  // `refresh`, not `mapPin`: a parent asking for a fresh fix, and `mapPin`
  // already means "left a place" above.
  location_request: 'refresh',
  // Time being asked for, not time already spent — hence not the clock.
  time_request: 'hourglass',
  reward_task: 'star',
  web_filter: 'globe',
  emergency: 'lifebuoy',
};

/**
 * The unknown-row glyph. It used to be `clock`, which made a row this build
 * cannot identify indistinguishable from a screen-time one — the map's own
 * fallback quietly asserting the same thing the overloaded `type` did.
 */
const ACTIVITY_ICON_FALLBACK = 'activity';

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
}) {
  const {
    family,
    devices,
    children,
    activities,
    actorNames,
    checkIns,
    places,
    rewardTasks,
    leaderboard,
    screenTimeBoard,
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
  const [tab, setTab] = useState('overview');
  const [range, setRange] = useState(14);
  const [busy, setBusy] = useState(null);
  const [toast, setToast] = useState(null);
  /** Which attention row has its steps open. One at a time. */
  const [fixOpen, setFixOpen] = useState(null);
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
  const latestReportKey = reports?.reports?.[0]?.periodKey ?? null;
  const [reportSeenKey, setReportSeenKey] = useState(() =>
    readWeeklyReportSeen(familyId),
  );
  useEffect(() => {
    setReportSeenKey(readWeeklyReportSeen(familyId));
  }, [familyId]);
  useEffect(() => {
    // Opening the tab is being shown the report: the panel behind it renders
    // the week itself, not a link to it.
    if (tab !== 'report' || !latestReportKey) return;
    writeWeeklyReportSeen(familyId, latestReportKey);
    setReportSeenKey(latestReportKey);
  }, [tab, latestReportKey, familyId]);
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
   * `report` and `overview` are never dropped: the first is about the family,
   * and the second is where a device with nothing else still says whether it
   * is online.
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
    const running = device?.appVersion?.trim() || '';
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

  const attention = useMemo(() => {
    if (!device || !c) return [];
    const items = [];
    (timeRequests[device.id] || [])
      .filter(req => req.status === 'pending')
      .forEach(req =>
        items.push({
          id: req.id,
          tone: 'warning',
          icon: 'clock',
          title: t('dash.attnMoreMinutes', {
            // The person if a parent has named one, the hardware otherwise —
            // "Bí asked for 15 more minutes" beats "iPad asked", and neither is
            // available for a device assigned to nobody.
            name: device.child?.name || device.name,
            minutes: req.requestedMinutes,
          }),
          meta: req.reason
            ? t('dash.attnReason', {
                reason: req.reason,
                when: timeAgo(req.createdAt),
              })
            : timeAgo(req.createdAt),
          action: 'review',
        }),
      );
    /*
      One action, and it is Allow — the same call the time-request row above
      makes with `review`, which approves. Declining lives in the Controls
      tab's card, where both answers sit side by side; this list is for the
      one move a parent most often wants, not for a decision surface.
    */
    (siteRequests[device.id] || []).forEach(req =>
      items.push({
        id: req.id,
        tone: 'warning',
        icon: 'globe',
        title: t('dash.attnSiteRequest', {
          name: device.child?.name || device.name,
          domain: req.domain,
        }),
        meta: req.reason
          ? t('dash.attnReason', {
              reason: req.reason,
              when: timeAgo(req.createdAt),
            })
          : timeAgo(req.createdAt),
        action: 'siteAllow',
      }),
    );
    (checkIns[device.id] || [])
      .filter(ci => ci.status === 'missed')
      .forEach(ci =>
        items.push({
          id: ci.id,
          tone: 'serious',
          icon: 'lifebuoy',
          title: t('dash.attnCheckInMissed'),
          meta: t('dash.attnCheckInMissedMeta', { when: timeAgo(ci.createdAt) }),
          action: 'resend',
        }),
      );
    /*
     * Everything wrong with this device's protection, from the fold the phone
     * reads — `@kidgate/core/domain/protectionStatus`.
     *
     * This page used to derive its own: denied permissions off
     * `protectionStatus` with a local `PERMISSION_FIX_KEY` table for the fix
     * sentence, plus `pendingConsentCopy` beside it. That was a second opinion
     * about one question, and it was a narrower one in three ways a parent
     * could feel — it only ever saw `denied`, so a permission that was never
     * asked for (`notDetermined`) or refused by iOS (`restricted`) reached
     * nobody on the web; it had one sentence where the phone has the **steps**
     * (`hintKeys`, the ones the child's own setup screens render); and it knew
     * nothing about the issues that come from the capability probe rather than
     * from the checklist, which is every issue a Mac, a PC or a television can
     * have.
     *
     * Two issue keys are dropped, both because this page already answers them
     * better in their own place, and dropping them here is what keeps one
     * answer per question:
     *
     * - `inactive` — the device's own status dot and its "last seen" line say
     *   this at the top of the page, on every tab.
     * - `web-filter-blocked` — the Web filter row on the Controls tab carries
     *   it in this key space's own words. It is also the one issue that sets
     *   `needsPlatformName`, and a `{{platform}}` placeholder has no app-side
     *   label to fill it with here.
     */
    getProtectionSummaryKeys(device, Date.now())
      .issues.filter(issue => !PROTECTION_ISSUES_SHOWN_ELSEWHERE.has(issue.key))
      .forEach(issue =>
        items.push({
          id: `protection-${issue.key}`,
          // `info` is an issue that costs a feature and no enforcement — a
          // refused camera on a Mac. Listed, never dressed as a broken rule.
          tone: issue.severity === 'info' ? 'warning' : 'critical',
          icon: PROTECTION_ISSUE_ICON[issue.key] ?? 'alert',
          // The app key space, through `activityT`: the same sentences the
          // phone's issues sheet shows for the same device, already in
          // fourteen packs.
          title: activityT(issue.labelKey),
          meta: activityT(issue.detailKey),
          action: 'howToFix',
          /*
           * Absent for the issues nobody has written steps for — iOS Screen
           * Time, location, the television's filter consent. The renderer
           * falls back to the one sentence it can honestly say, which is where
           * to go and look. Guessing a path through somebody else's Settings
           * app costs a walk across the house and the trust in the next
           * instruction.
           */
          fixKeys: issue.hintKeys,
        }),
      );
    if (c.dailyLimitExceeded) {
      items.push({
        id: 'limit',
        tone: 'warning',
        icon: 'lock',
        title: t('dash.attnLimitReached'),
        meta: t('dash.attnLimitReachedMeta', {
          used: formatMinutes(c.minutesUsedToday),
        }),
        action: 'unlock',
      });
    }
    // `readDeviceBattery` rather than a threshold written here: this row said
    // "battery low" at 25% while the reading beside the device name only went
    // red under 20, so the page disagreed with itself about the same phone.
    const batt = readDeviceBattery(device);
    if (batt?.isLow) {
      items.push({
        id: 'batt',
        tone: 'serious',
        icon: 'battery',
        level: batt.level,
        title: t('dash.attnBatteryLow', { level: batt.level }),
        meta: t('dash.attnBatteryLowMeta'),
      });
    }
    return items;
  }, [device, c, t, activityT, checkIns, timeRequests, siteRequests]);

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
  const todayTopApps = resolveTodayTopApps({
    usageDay: device?.usage?.[device.usage.length - 1] ?? null,
    device: device ?? {},
    todayKey: localDayKey(Date.now(), -new Date().getTimezoneOffset()),
  });
  const todayApps = todayTopApps.apps;
  const todayMinutes = todayTopApps.totalMinutes;

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
  const inventory = useAppInventory(familyId, device?.id, installApproval);
  const inventorySummary = inventory ? appInventorySummaryKey(inventory) : null;

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
   */
  const limitCandidates = useMemo(() => {
    const byId = new Map();
    for (const app of todayApps) {
      if (app.packageName) byId.set(app.packageName, app.label || app.packageName);
    }
    // All four groups the report splits the scan into, flattened: a flagged
    // app is exactly the one a parent came here to cap, and a pending install
    // is one they may want capped before they allow it.
    for (const group of ['pending', 'flagged', 'other', 'unclassified']) {
      for (const app of inventory?.[group] ?? []) {
        if (!byId.has(app.id)) byId.set(app.id, app.label || app.id);
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

        <div className="side-section side-kids">
          <p className="side-title">{t('dash.children')}</p>
          {/*
            Only this list scrolls, not the rail: the heading above and the
            Manage nav below stay put however many children a family has.
            A rail that scrolled as one hid the nav behind four children.
          */}
          <div className="side-kids-scroll">
            {devices.length === 0 && (
              <p className="side-empty">{t('dash.noChildren')}</p>
            )}
            {deviceGroups.map(group => (
              <div key={group.key} className="kid-group">
                <p className="kid-group-title">
                  {group.child ? (
                    <>
                      <ChildInitial
                        name={group.child.name}
                        colorIndex={group.child.colorIndex}
                      />
                      <span>{group.child.name}</span>
                    </>
                  ) : (
                    t('dash.unassignedDevices')
                  )}
                </p>
                {group.devices.map(d => (
                  <button
                    key={d.id}
                    className={`kid${d.id === deviceId ? ' is-active' : ''}`}
                    onClick={() => setDeviceId(d.id)}
                  >
                    {/*
                    The device glyph, not the child's initial — the same call
                    the phone's device card makes (`deviceIconName`), so a Mac
                    is the same picture on both surfaces and an iPad is not
                    drawn as an iPhone here while the phone app draws the
                    tablet. The initial belongs to the group heading now, where
                    it names a person once instead of once per row.

                    It reads the surface rule, not `deviceGlyph` alone: the
                    extension registers under the platform it was installed on,
                    so this rail drew a Mac and the extension running on it as
                    two identical laptops until the rule was shared.
                  */}
                    <span className={`kid-avatar av-${d.platform}`}>
                      <Icon name={deviceIconName(d)} size={20} />
                    </span>
                    <span className="kid-meta">
                      <strong>{d.name}</strong>
                      {d.modelName && d.modelName !== d.name && <em>{d.modelName}</em>}
                      {/*
                      Which machine is on an old build, without opening each one
                      in turn — the rail is where "which of these" gets asked.
                      Only ever drawn on an outdated device: `unknown` is every
                      row that has not reported a build yet and every platform
                      with nothing published to compare against, and a mark for
                      that would sit on most rails saying nothing.
                    */}
                      {resolveBuildFreshness(d, latestBuilds ?? {}).status ===
                        'outdated' && (
                        <em className="kid-build-old">{t('dash.buildOutdated')}</em>
                      )}
                    </span>
                    {/*
                    `getEffectiveDeviceStatus`, not the stored `status` field.
                    Three minutes of silence is offline on every surface, and
                    the rule also refuses to call a device locked when it
                    cannot lock — a browser extension carrying a stale
                    `isLocked` from before that button was gated would
                    otherwise sit amber here forever.
                  */}
                    <i
                      className={`kid-dot tone-${
                        deviceStatusOf(d) === 'online'
                          ? 'good'
                          : deviceStatusOf(d) === 'locked'
                            ? 'warning'
                            : 'muted'
                      }`}
                    />
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        <nav className="side-section side-nav">
          <p className="side-title">{t('dash.manage')}</p>
          {visibleTabs.map(item => (
            <button
              key={item.id}
              className={`nav-item${tab === item.id ? ' is-active' : ''}`}
              onClick={() => setTab(item.id)}
            >
              <Icon name={item.icon} size={17} />
              {t(item.labelKey)}
              {item.id === 'overview' && attention.length > 0 && (
                <span className="nav-badge">{attention.length}</span>
              )}
              {/* A dot, where the Attention badge beside it is a count: what is
                  behind this one is a single report, and `1` would invite the
                  reader to work out what the other numbers meant. */}
              {item.id === 'report' && reportUnseen && (
                <span
                  className="nav-badge nav-badge-dot"
                  role="img"
                  aria-label={t('dash.tabReportNew')}
                  title={t('dash.tabReportNew')}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="side-foot">
          {/*
            Was a bare pill reading Premium or Trial. It now says which of the
            three states the family is in and where a plan is actually changed
            — buying stays on the phone, by decision (`PlanCard`).
          */}
          <PlanCard plan={family.plan} trialStartedAt={family.trialStartedAt} />
          <p>
            {t('dash.parents', { count: family.parents.length })} ·{' '}
            {t('dash.devices', { count: devices.length })}
          </p>
          <LanguagePicker variant="side" />
          {sideFooter}
        </div>
      </aside>

      <main className="dash-main">
        <header className="dash-top">
          <div>
            {/* Whose, then which. Every number below this line is about one
                child's device, and the page used to name only the hardware —
                so two iPads read as the same page twice. */}
            {device?.child && (
              <p className="dash-top-owner">
                <ChildInitial
                  name={device.child.name}
                  colorIndex={device.child.colorIndex}
                />
                <span>{device.child.name}</span>
              </p>
            )}
            <h1>{device ? device.name : family.name}</h1>
            {device && (
              <p>
                <StatusPill status={device.status} device={device} />
                <span className="dot-sep">·</span>
                {osLabel(device.platform, device.osVersion)}
                {device.lastActiveAt && (
                  <>
                    <span className="dot-sep">·</span>
                    {t('dash.lastActive', { when: timeAgo(device.lastActiveAt) })}
                  </>
                )}
                {battery && (
                  <>
                    <span className="dot-sep">·</span>
                    <span className={battery.isLow ? 'batt batt-low' : 'batt'}>
                      <Icon
                        name={battery.charging ? 'batteryCharging' : 'battery'}
                        size={15}
                        level={battery.level}
                      />{' '}
                      {battery.level}%
                    </span>
                  </>
                )}
                {/*
                  The build, and whether it is the current one. Last in the row
                  because it is the only segment a parent reads deliberately
                  rather than at a glance — and it is drawn at all only once the
                  device has reported a version, so the rows written before
                  agents did stay silent instead of showing an empty field.
                */}
                {buildLine && (
                  <>
                    <span className="dot-sep">·</span>
                    <span className={buildLine.outdated ? 'build-old' : undefined}>
                      {buildLine.text}
                    </span>
                  </>
                )}
              </p>
            )}
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
            {device && supportsCheckIn(device) && (
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
            {device && supportsLock(device) && (
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

        {toast && <div className={`toast tone-${toast.tone}`}>{toast.text}</div>}

        {/*
          Under the header rather than inside a tab: renaming and unpairing are
          about the device on screen, not about one of the six things the tabs
          divide it into. Renders nothing for a joined co-parent — both are the
          owner's alone.
        */}
        {device && live && (
          <DeviceAdmin
            device={device}
            actions={actions}
            readOnly={live && !canWrite}
            busy={busy === `rename-${device.id}` || busy === `remove-${device.id}`}
            run={run}
          />
        )}

        {/* The report is about the family, so it survives having no device
            selected — a parent whose only device has just been removed can
            still read what the last weeks said. */}
        {/*
          Above everything, on every tab but the report: a family with parked
          devices has a decision owed before any device screen means much, and
          on a tab that happened to have a device selected the card would
          otherwise be one click away from the four devices reading Paused.
        */}
        {parking.parked.length > 0 && tab !== 'report' && (
          <ParkedDevicesCard
            devices={devices}
            parking={parking}
            canWrite={canWrite}
            busy={busy === 'monitored'}
            onChoose={chooseMonitored}
          />
        )}

        {!device && tab !== 'report' && (
          <section className="card">
            <h2>{t('dash.noDeviceTitle')}</h2>
            <RichText as="p" className="hint" text={t('dash.noDeviceBody')} />
          </section>
        )}

        {tab === 'report' && (
          <ReportPanel
            reports={reports?.reports ?? []}
            loading={Boolean(reports?.loading)}
            familyName={family.name}
            language={language}
            generating={Boolean(reports?.generating)}
            generateError={reports?.error ?? null}
            loadFailed={Boolean(reports?.loadFailed)}
            onGenerate={reports?.generate}
            onReload={reports?.reload}
          />
        )}

        {device && tab === 'overview' && (
          <>
            {/*
              Family-level, on the tab a parent lands on. It renders nothing at
              all for a joined co-parent — inviting, approving and removing are
              the owner's, the same rule the phone's Family screen applies.
            */}
            {live && actions?.isOwner && (
              <Card title={t('dash.parents', { count: family.parents.length })}>
                <ParentsCard
                  members={family.members ?? []}
                  actions={actions}
                  run={run}
                  busy={
                    busy === 'parent-invite' ||
                    busy === 'parent-join' ||
                    busy === 'parent-remove'
                  }
                />
              </Card>
            )}
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
                            <Icon
                              name={ACTIVITY_ICON[kind] || ACTIVITY_ICON_FALLBACK}
                              size={15}
                            />
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
                </Card>
              </div>

              <div>
                <Card
                  title={t('dash.cardAttention')}
                  subtitle={t('dash.cardAttentionSub', { count: attention.length })}
                >
                  {attention.length === 0 ? (
                    <p className="empty">{t('dash.cardAttentionEmpty')}</p>
                  ) : (
                    <ul className="attn">
                      {attention.map(a => (
                        <li key={a.id} className={`tone-${a.tone}`}>
                          <span className="attn-icon">
                            {/* `level` is the battery row's alone; every other
                                item leaves it undefined and draws as before. */}
                            <Icon name={a.icon} size={16} level={a.level} />
                          </span>
                          <span className="attn-body">
                            <strong>{a.title}</strong>
                            <em>{a.meta}</em>
                          </span>
                          {a.action && (
                            <button
                              className="btn btn-sm"
                              // Resending a Check-In is a plain Firestore write the
                              // rules already allow, so it stays available to a
                              // view-only session; the rest need the phone. So do
                              // the steps for a denied permission: they are text,
                              // and a parent who cannot write still has to read
                              // them to fix the device in their hand.
                              disabled={
                                live &&
                                !canWrite &&
                                a.action !== 'resend' &&
                                a.action !== 'howToFix'
                              }
                              title={
                                live &&
                                !canWrite &&
                                a.action !== 'resend' &&
                                a.action !== 'howToFix'
                                  ? t('dash.attnAppOnly')
                                  : undefined
                              }
                              aria-expanded={
                                a.action === 'howToFix' ? fixOpen === a.id : undefined
                              }
                              onClick={() => {
                                // Reads its own state and writes nothing, so it
                                // works in a rendering with no data layer too.
                                if (a.action === 'howToFix') {
                                  setFixOpen(fixOpen === a.id ? null : a.id);
                                  return;
                                }
                                if (!live) return;
                                if (a.action === 'review') {
                                  run(
                                    a.id,
                                    () => actions.resolveTimeRequest(a.id, true),
                                    t('dash.toastTimeApproved'),
                                  );
                                } else if (a.action === 'siteAllow') {
                                  run(
                                    a.id,
                                    () => actions.resolveSiteRequest(a.id, true),
                                    t('dash.toastSiteAllowed'),
                                  );
                                } else if (a.action === 'resend') {
                                  run(
                                    a.id,
                                    () => actions.sendCheckIn(device),
                                    t('dash.toastCheckInResent'),
                                  );
                                } else if (a.action === 'unlock') {
                                  run(a.id, () => actions.setLock(device.id, false));
                                }
                              }}
                            >
                              {busy === a.id
                                ? '…'
                                : t(
                                    {
                                      review: 'dash.attnReview',
                                      siteAllow: 'dash.siteRequestAllow',
                                      resend: 'dash.attnResend',
                                      howToFix: 'dash.attnHowToFix',
                                      unlock: 'dash.attnUnlock',
                                    }[a.action],
                                  )}
                            </button>
                          )}
                          {fixOpen === a.id &&
                            (a.fixKeys ? (
                              /* Steps carried on the item: a walk through a
                                 screen, numbered, rather than one sentence
                                 about a switch. */
                              <ol className="attn-fix">
                                {a.fixKeys.map(key => (
                                  <li key={key}>{activityT(key)}</li>
                                ))}
                              </ol>
                            ) : (
                              /* No steps written for this one. The row's own
                                 `meta` already says what is wrong, so the only
                                 thing left to add is where to go — never a
                                 guessed path through somebody else's Settings
                                 app. */
                              <p className="attn-fix">
                                {activityT('protection.openKidGateOnChildPhone')}
                              </p>
                            ))}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>

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
          </>
        )}

        {device && tab === 'screen' && (
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
              </Card>

              <Card title={t('dash.topAppsTitle')} subtitle={t('dash.topAppsSub')}>
                <AppBars
                  apps={todayApps}
                  limits={c.appLimits}
                  totalMinutes={todayMinutes}
                />
                {/* Only under the device's three — never under a ten-row list. */}
                {todayTopApps.source === 'device' && family.plan !== 'premium' && (
                  <p className="hint">{t('dash.topAppsFreeHint')}</p>
                )}
              </Card>
            </div>

            {/*
              Above the trend, because it answers the question the trend
              raises. A bar that reads 28 minutes is a number a parent cannot
              interrogate; the band under it says whether that was half an hour
              of use or a day nobody was measuring.
            */}
            <Card title={t('dash.timelineTitle')} subtitle={t('dash.timelineSub')}>
              <UsageDayTimeline
                day={device.usage[device.usage.length - 1]}
                platform={device.platform}
                capability={device.capabilities?.usageTimeline}
              />
            </Card>

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
              <UsageBars data={device.usage} limit={c.dailyLimitMinutes} days={range} />
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

        {device && tab === 'apps' && (
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
                      <p className="hint">{t('dash.inventoryStale')}</p>
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
                        <p className="hint">{t('dash.inventoryPending')}</p>
                        <ul className="events">
                          {inventory.pending.map(row => (
                            <li key={row.id}>
                              <span className="ev-state tone-serious">
                                <Icon name="plus" size={13} />
                              </span>
                              <span className="ev-body">
                                <strong>{row.label}</strong>
                                <em>
                                  {t('dash.pendingInstallBlocked')}
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
                        <ul className="chips">
                          {inventory.flagged.map(row => (
                            <li key={row.id}>
                              {/* `appCat`, never `webCat`: that namespace is
                                  pinned to WEB_FILTER_CATEGORIES and carries
                                  no `bypass`, so a VPN would have rendered its
                                  raw key here. */}
                              {row.label} <em>{t(`appCat.${row.category}`)}</em>
                            </li>
                          ))}
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
                    <p className="hint">{t('dash.inventoryIncomplete')}</p>
                  </>
                )}
              </Card>
            )}

            <div className="grid-2">
              <Card
                title={t('dash.webActivityTitle')}
                subtitle={t('dash.webActivitySub')}
              >
                {web.length === 0 ? (
                  <p className="empty">{t('dash.webActivityEmpty')}</p>
                ) : (
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

              {supportsVideoHistory(device) && (
                <Card title={t('dash.videosTitle')} subtitle={t('dash.videosSub')}>
                  {videoHistoryBlockerKey(device) ? (
                    <p className="empty">{activityT(videoHistoryBlockerKey(device))}</p>
                  ) : null}
                  {videos.length === 0 ? (
                    <p className="empty">{t('dash.videosEmpty')}</p>
                  ) : (
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
                        {videos.map(v => (
                          <tr key={`${v.date}:${v.id}`}>
                            <td>{v.title}</td>
                            <td>{v.channel || t('viz.none')}</td>
                            <td className="num">{v.views}</td>
                            <td>{timeAgo(v.lastAt)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </Card>
              )}
            </div>
          </>
        )}

        {device && tab === 'safety' && (
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
                            (device.lastLocation.nearbyPlaceName
                              ? t('dash.nearPlace', {
                                  place: device.lastLocation.nearbyPlaceName,
                                })
                              : t('dash.lastKnownLocation'))}
                        </strong>
                        {device.lastLocation.address && (
                          <em>{device.lastLocation.address}</em>
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
                  <p className="hint">{t('dash.locationSyncNote')}</p>
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
                />
              </Card>
            </div>
          </div>
        )}

        {device && tab === 'controls' && (
          <ControlsTab
            device={device}
            /*
             * Every device this child holds, for the budget seed. The budget
             * is one number shared across them, so writing it on the selected
             * device alone would leave the siblings locking on a stale share
             * until their next usage report.
             */
            siblingDeviceIds={devices
              .filter(other => device.childId && other.childId === device.childId)
              .map(other => other.id)}
            rewardTasks={rewardTasks}
            siteRequests={siteRequests[device.id] || []}
            leaderboard={leaderboard}
            screenTimeBoard={screenTimeBoard}
            readOnly={live && !canWrite}
            actions={actions}
            run={run}
            busy={busy}
            activities={activities[device.id] || []}
          />
        )}
      </main>
    </div>
  );
}

/* ------------------------------------------------------------------ */

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
 * The family screen-time board — minutes per person this week, fewest
 * first, parents beside the children where they opted in. The switch is on
 * the phone (`FamilyDetailScreen`), owner only, like the star chart's; this
 * surface reads. Hidden entirely while off: a card that says "turn it on in
 * the app" would sit on every dashboard for a feature most families never
 * asked for, whereas the star chart's empty state answers a family that
 * already has two children and is looking for it.
 */
function FamilyScreenTimeCard({ board }) {
  const { t } = useT();

  if (!board?.enabled) {
    return null;
  }
  if (!board.visible) {
    return (
      <Card
        title={t('dash.familyScreenTimeTitle')}
        subtitle={t('dash.familyScreenTimeSub')}
      >
        <p className="muted">{t('dash.familyScreenTimeEmpty')}</p>
      </Card>
    );
  }

  return (
    <Card
      title={t('dash.familyScreenTimeTitle')}
      subtitle={t('dash.familyScreenTimeSub')}
    >
      <ul className="events">
        {board.rows.map(row => (
          <li key={row.participantId}>
            <span className="ev-state tone-muted">{row.rank}</span>
            <span className="ev-body">
              <strong>{row.name || t('dash.familyScreenTimeParent')}</strong>
              <em>
                {row.kind === 'parent'
                  ? t('dash.familyScreenTimeParent')
                  : t('dash.familyScreenTimeDays', { count: row.daysReported })}
              </em>
            </span>
            <span className="ev-time">{formatMinutes(row.weekMinutes)}</span>
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

function ControlsTab({
  device,
  rewardTasks,
  siteRequests,
  leaderboard,
  screenTimeBoard,
  readOnly,
  actions,
  run,
  busy,
  /** This device's feed rows, for the install-approval pending list. */
  activities = [],
  siblingDeviceIds = [],
}) {
  const { t } = useT();
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
  const budgetShared = Boolean(childBudgetMinutes && childBudgetMinutes > 0);
  /*
   * How much of the budget the child has spent, summed server-side across
   * their devices by the same call that stamped it.
   *
   * Carries the same freshness caveat as `minutesUsedToday` beside it on the
   * Screen tab — both are stamped by a report, so a family whose devices have
   * all been off since yesterday reads yesterday's figure under a heading that
   * says today. That is a property of this whole screen rather than of this
   * card, and fixing it in one place would leave two cards disagreeing about
   * the same day (`docs/TODO.md`).
   */
  const budgetStamp = c.childBudget ?? null;

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
        ? t('dash.rowSearchMonitoringDesc')
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
                      {t('dash.pendingInstallBlocked')} · {timeAgo(app.installedAt)}
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
                <strong>{formatMinutes(childBudgetMinutes)}</strong>
                <p className="hint">{t('dash.limitShared')}</p>
                {budgetStamp ? (
                  <p className="hint">
                    {t('dash.limitSharedSpent', {
                      used: formatMinutes(budgetStamp.usedMinutes),
                      limit: formatMinutes(budgetStamp.limitMinutes),
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
                            disabled={readOnly || busy === 'web-categories'}
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
        <FamilyScreenTimeCard board={screenTimeBoard} />

        {/*
          A reward is minutes of screen time, granted on a device that can
          present the task to claim. `apps/tv` has no claim screen and a
          browser extension has neither the screen nor anything to spend the
          minutes on — see `@kidgate/core/domain/rewardTaskSupport`.
        */}
        <Card title={t('dash.rewardTasksTitle')} subtitle={t('dash.rewardTasksSub')}>
          {!supportsRewardTasks(device) ? (
            <p className="hint">{t('dash.rowNotSupported')}</p>
          ) : (
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
                        {busy === `reward-approve-${task.id}` ? '…' : t('dash.approve')}
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
