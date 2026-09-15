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
import ParentsCard from '../dashboard/ParentsCard.jsx';
import TrustedContactsCard from '../dashboard/TrustedContactsCard.jsx';
import BrandLogo from '@kidgate/web-ui/BrandLogo';
import Icon from '@kidgate/web-ui/Icon';
import { deviceIconName } from '../dashboard/deviceIcon.js';
import { ACCENT_IDS, getAccentDefinition } from '@kidgate/tokens/accents';
import { readDeviceBattery } from '@kidgate/core/domain/battery';
import { isAndroidLike, isDesktopLike } from '@kidgate/core/domain/platformFamily';
import { isKidGateOwnApp } from '@kidgate/core/domain/ownApp';
import { resolveActivityKind } from '@kidgate/core/domain/activityKind';
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
import { supportsTamperAlerts } from '@kidgate/core/domain/alertSupport';
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
import { RichText } from '@kidgate/web-ui/RichText';
import { useT } from '@kidgate/web-ui/useT';
import { getLocaleTag } from '@kidgate/i18n/web';
import Card from '../dashboard/Card.jsx';
import ControlsTab from '../dashboard/ControlsTab.jsx';

/**
 * The stored `status` field recomputed, which is what every other surface
 * shows. Hoisted so the sidebar rows and the header agree without threading a
 * clock through both.
 */
function deviceStatusOf(device) {
  return getEffectiveDeviceStatus(device, Date.now());
}

// No `icon` field: the bar draws words alone. Six glyphs beside six labels
// that already named the thing cost header height and said nothing twice.
const TABS = [
  { id: 'overview', labelKey: 'dash.tabOverview' },
  { id: 'screen', labelKey: 'dash.tabScreen' },
  { id: 'apps', labelKey: 'dash.tabApps' },
  { id: 'safety', labelKey: 'dash.tabSafety' },
  { id: 'controls', labelKey: 'dash.tabControls' },
  // Last, and the only tab that is about the family rather than the device on
  // screen: the report sums every device in the family, which is why it stays
  // rendered when no device is selected.
  { id: 'report', labelKey: 'dash.tabReport' },
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
 * The dot that says whether one device is reachable.
 *
 * It said it in colour alone once — a parent who cannot separate amber from
 * grey read six identical rows — so the sentence rides along as the label. It
 * is the same sentence `StatusPill` prints in the header, from the same map,
 * and the status is `getEffectiveDeviceStatus` rather than the stored field:
 * three minutes of silence is offline on every surface, and the rule also
 * refuses to call a device locked when it cannot lock, so a browser extension
 * carrying a stale `isLocked` from before that button was gated does not sit
 * amber here forever.
 */
function DeviceDot({ device }) {
  const { t } = useT();
  const status = deviceStatusOf(device);
  const label = t(STATUS_KEY[status] ?? STATUS_KEY.offline);
  return (
    <i
      className={`kid-dot tone-${
        status === 'online' ? 'good' : status === 'locked' ? 'warning' : 'muted'
      }`}
      role="img"
      aria-label={label}
      title={label}
    />
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
const GROUP_DOTS_SHOWN = 4;

function KidGroupHead({ group, open, containsActive, onToggle }) {
  const { t } = useT();
  const shown = group.devices.slice(0, GROUP_DOTS_SHOWN);
  const rest = group.devices.length - shown.length;
  return (
    <button
      className={`kid-group-head${open ? ' is-open' : ''}${
        containsActive && !open ? ' is-active' : ''
      }`}
      onClick={onToggle}
      aria-expanded={open}
    >
      {group.child ? (
        <>
          <ChildInitial name={group.child.name} colorIndex={group.child.colorIndex} />
          <span className="kid-group-name">{group.child.name}</span>
        </>
      ) : (
        <span className="kid-group-name">{t('dash.unassignedDevices')}</span>
      )}
      {/*
        Hidden from the reader that already hears every device: the rows are one
        `aria-expanded` away and each carries the same sentence on its own dot,
        so announcing the fold's summary as well says everything twice.
      */}
      <span className="kid-group-dots" aria-hidden="true">
        {shown.map(d => (
          <DeviceDot key={d.id} device={d} />
        ))}
        {rest > 0 && <span className="kid-group-more">+{rest}</span>}
      </span>
      {/* `chevronRight` turned by the stylesheet — the set has no down-chevron,
          and a second drawing of one arrow is what the shared icon set exists
          to prevent. */}
      <Icon name="chevronRight" size={14} className="kid-group-chevron" />
    </button>
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
  // A KidGate operator entered the account (`functions/admin/impersonate.js`).
  support_session: 'user',
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
  const [tab, setTab] = useState('overview');
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

        <div className="side-kids">
          <p className="side-title">{t('dash.children')}</p>
          {/*
            Only this list scrolls, not the rail: the heading above and the
            account footer below stay put however many children a family has.
            A rail that scrolled as one hid the footer behind four children.
          */}
          <div className="side-kids-scroll">
            {devices.length === 0 && (
              <p className="side-empty">{t('dash.noChildren')}</p>
            )}
            {deviceGroups.map(group => {
              /*
               * Every child is a group, including one who owns a single
               * device. It used to be a bare row — two rail lines saving one —
               * and the saving cost more than it bought: that row carried a
               * different avatar, a different first line and no chevron, so a
               * rail of four children showed two shapes and a parent had to
               * work out which of them were people. Consistency down the
               * column beats one line of height.
               */
              const open = openGroupKey === group.key;
              const containsActive = group.devices.some(d => d.id === deviceId);
              return (
                <div key={group.key} className={`kid-group${open ? ' is-open' : ''}`}>
                  <>
                    <KidGroupHead
                      group={group}
                      open={open}
                      containsActive={containsActive}
                      onToggle={() =>
                        setOpenGroupKey(key => (key === group.key ? null : group.key))
                      }
                    />
                    {open &&
                      group.devices.map(d => (
                        <DeviceRow
                          key={d.id}
                          device={d}
                          active={d.id === deviceId}
                          onSelect={() => setDeviceId(d.id)}
                          latestBuilds={latestBuilds}
                        />
                      ))}
                  </>
                </div>
              );
            })}
          </div>
        </div>

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
      </aside>

      <main className="dash-main">
        <header className="dash-top">
          <div>
            {/*
              Whose and which on one line. Stacked, the person spent a whole
              row saying one word and the header ran four rows deep before the
              first number on the page. What the stacking was for is unchanged:
              every figure below is about one child's device, and naming only
              the hardware made two iPads read as the same page twice.
            */}
            <div className="dash-top-name">
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

        {/*
          The rail asks which device; this row asks what about it. They were one
          column, so a parent scanning the rail read eleven rows that answered
          two different questions and had to learn which half they were in.
          Sticky, because the nav was on screen at any scroll depth while it
          lived in the rail and a tab bar that scrolls away is a worse nav than
          the one it replaced.
        */}
        <nav className="dash-tabs" aria-label={t('dash.manage')}>
          {visibleTabs.map(item => (
            <button
              key={item.id}
              className={`nav-item${tab === item.id ? ' is-active' : ''}`}
              onClick={() => setTab(item.id)}
              /* Which tab is showing, said to a screen reader as well as in
                 the brand ground the stylesheet fills the chip with. */
              aria-current={tab === item.id ? 'page' : undefined}
            >
              {t(item.labelKey)}
              {/* A bare figure beside "Overview" says nothing about what was
                  counted. `cardAttentionSub` is the sentence the Overview card
                  itself uses for the same number. */}
              {item.id === 'overview' && attention.length > 0 && (
                <span
                  className="nav-badge"
                  title={t('dash.cardAttentionSub', { count: attention.length })}
                >
                  {attention.length}
                </span>
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

        {/*
          Under the bar, not above it: these are the pane's first line rather
          than the title's last. In the header they were a third row inside a
          block that already ran four deep, and none of the three facts is one
          a parent reads before choosing a tab.

          Two lines still, when there is enough to fill both: is it working and
          is it here — read at a glance — then the ones a parent reads
          deliberately, and only once something looks wrong.
        */}
        {device && (
          <p className="dash-top-facts">
            {/* `deviceStatusOf`, never the stored `status` — the same rule the
                sidebar dot follows. This header read the field straight off the
                document, and `setDeviceLock` used to write `'online'` into it
                on every unlock, so a machine dead for a week said Online here
                for as long as the row existed. */}
            <StatusPill status={deviceStatusOf(device)} device={device} />
            <span className="dot-sep">·</span>
            {osLabel(device.platform, device.osVersion)}
            {device.lastActiveAt && (
              <>
                <span className="dot-sep">·</span>
                {t('dash.lastActive', { when: timeAgo(device.lastActiveAt) })}
              </>
            )}
            {/* Why that "last seen" is half an hour old on a working device.
                The app pack's sentence, the one the phone's family card now
                carries too — `docs/PRICING.md` §8 item 7. */}
            {slowBeatMinutes(device.beatIntervalMs) !== null && (
              <>
                <span className="dot-sep">·</span>
                {activityT('family.freeTierCadenceHint', {
                  minutes: slowBeatMinutes(device.beatIntervalMs),
                })}
              </>
            )}
            {/* A lone quiet fact joins this row rather than standing as a line
                of its own — `quietFacts` says why. */}
            {quietFacts.length === 1 && (
              <>
                <span className="dot-sep">·</span>
                {quietFacts[0]}
              </>
            )}
          </p>
        )}
        {device && quietFacts.length > 1 && (
          <p className="dash-top-facts dash-top-facts-quiet">{quietFacts}</p>
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

        {/* The report is about the family, so it survives having no device
            selected — a parent whose only device has just been removed can
            still read what the last weeks said. */}
        {/*
          A banner, on every tab but the report: a family with parked devices
          is owed the fact before any device screen means much, and on a tab
          that happened to have a device selected it would otherwise be one
          click away from the devices reading Paused.

          A banner rather than the sheet it used to draw here. On the free plan
          one device reports and the rest stay parked for good, so this is not
          a decision waiting to be made — it is a state, and a radio group with
          a confirm button over every screen kept asking a question that had
          already been answered. The sheet is one click away.
        */}
        {parking.parked.length > 0 && tab !== 'report' && (
          <ParkedDevicesCard
            devices={devices}
            parking={parking}
            canWrite={canWrite}
            busy={busy === 'monitored'}
            onChoose={chooseMonitored}
            onOpen={() => setMonitoredSheetOpen(true)}
          />
        )}

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
            loadError={reports?.error ?? null}
            loadFailed={Boolean(reports?.loadFailed)}
            hasFullAccess={hasFullAccess}
            onReload={reports?.reload}
          />
        )}

        {device && tab === 'overview' && (
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
                  {/* Where the list stops, not over it: a free feed ends at
                      today — a client query limit, since `firestore.rules`
                      cannot read the plan — and a parent reaching the bottom
                      could not tell a quiet week from a window that ends
                      there. The phone puts it in the same place. */}
                  <PremiumTeaser teaser={activityWindowTeaser} appT={activityT} />
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

            {/*
              Below the device, not above it. Both cards are about the family,
              and they opened this tab: a parent who had just picked a child's
              phone met "Parents (2)" and a contact list before one number
              about the phone. The tab a parent lands on is still where they
              live — there is no family screen on this surface — but they are
              read after the thing that was selected, not instead of it.

              Parents renders nothing at all for a joined co-parent: inviting,
              approving and removing are the owner's, the same rule the phone's
              Family screen applies. Trusted contacts is for both — the rules
              and the phone let a joined co-parent name one — and its title is
              the app pack's, the words the phone's Settings row says.
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
            {live && familyId && (
              <Card
                title={activityT('sos.trustedContactsTitle')}
                subtitle={activityT('sos.trustedContactsRowSubtitle')}
              >
                <TrustedContactsCard familyId={familyId} />
              </Card>
            )}
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

        {device && tab === 'controls' && (
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
          Last on the page, below whichever tab is open, and outside all six:
          renaming and unpairing are about the device the header names, not
          about one of the things the tabs divide it into. It sat above the tab
          bar until 2026-09-14, where a rename form a parent opens twice a year
          was the first card on every tab and read as that tab's own. Renders
          nothing for a joined co-parent — both are the owner's alone.
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
      </main>
    </div>
  );
}

/* ------------------------------------------------------------------ */
