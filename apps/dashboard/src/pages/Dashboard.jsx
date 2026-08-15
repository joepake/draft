import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  isKnownPermission,
  permissionLabel,
  WEB_CATEGORY_KEYS,
  webCategoryLabel,
} from '../dashboard/labels.js';
import { activityCopy, useActivityTranslate } from '../dashboard/activityCopy.js';
import BrandLogo from '@kidgate/web-ui/BrandLogo';
import Icon, { platformIcon } from '@kidgate/web-ui/Icon';
import { readDeviceBattery } from '@kidgate/core/domain/battery';
import { resolveTaskStars } from '@kidgate/core/domain/rewardTasks';
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
import { t as translate } from '@kidgate/i18n/web';
import { useT } from '@kidgate/web-ui/useT';

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
 * What to do about a permission the child device reports as denied.
 *
 * The sentences are the app's own `protection.*` — the same words the child
 * device and the phone's Protection screen show for the same permission, read
 * through the feed's translator (`dashboard/activityCopy.js`). Writing web
 * copy for this would have been a second set of instructions for one set of
 * steps, in fourteen languages, free to drift from the screen the parent is
 * being told to open.
 *
 * Three permissions have no step of their own: `location`, `notifications` and
 * `camera` are ordinary OS prompts the child answers, so the generic line is
 * the honest instruction rather than a placeholder.
 */
const PERMISSION_FIX_KEY = {
  screenTime: 'protection.screenTimeAccessOff',
  overlay: 'protection.overlayOffForLock',
  batteryOptimization: 'protection.batteryOptimizationOff',
  exactAlarm: 'protection.exactAlarmOff',
  accessibility: 'protection.accessibilityOff',
  backgroundAppRefresh: 'protection.turnOnBackgroundUpdatesInSettings',
};

/**
 * Reads the module-level `t`: it is called from `useMemo` bodies and from
 * inside `map` callbacks whose component already re-renders on a language
 * change, so threading a hook through every call site would buy nothing.
 */
function timeAgo(iso) {
  const at = iso ? new Date(iso).getTime() : NaN;
  if (Number.isNaN(at)) return translate('time.never');
  const diff = Date.now() - at;
  const mins = Math.round(diff / 60000);
  if (mins < 1) return translate('time.justNow');
  if (mins < 60) return translate('time.minutes', { count: mins });
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return translate('time.hours', { count: hrs });
  return translate('time.days', { count: Math.round(hrs / 24) });
}

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

const STATUS_TONE = { online: 'good', offline: 'muted', locked: 'warning' };
const STATUS_KEY = {
  online: 'dash.statusOnline',
  offline: 'dash.statusOffline',
  locked: 'dash.statusLocked',
};

function StatusPill({ status }) {
  const { t } = useT();
  const known = STATUS_TONE[status] ? status : 'offline';
  return (
    <span className={`pill tone-${STATUS_TONE[known]}`}>
      <i className="pill-dot" aria-hidden="true" />
      {t(STATUS_KEY[known])}
    </span>
  );
}

const ACTIVITY_ICON = {
  app_blocked: 'ban',
  app_opened: 'play',
  app_installed: 'plus',
  app_removed: 'minus',
  place_enter: 'mapPin',
  place_exit: 'mapPin',
  tamper: 'alert',
  device_locked: 'lock',
  device_unlocked: 'unlock',
  screen_time: 'clock',
  emergency: 'lifebuoy',
};

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
}) {
  const {
    family,
    devices,
    activities,
    actorNames,
    checkIns,
    places,
    rewardTasks,
    leaderboard,
    sosAlerts,
    timeRequests,
    webHistory,
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

  const canWrite = actions?.canWrite ?? false;
  const live = Boolean(actions);

  async function run(key, fn, okMessage) {
    setBusy(key);
    setToast(null);
    try {
      await fn();
      if (okMessage) setToast({ tone: 'good', text: okMessage });
    } catch (e) {
      // Failures raised in the browser carry a key we own; anything relayed
      // from the Cloud Function arrives as server text and is shown as-is.
      setToast({
        tone: 'critical',
        text: e.messageKey ? t(e.messageKey) : e.message,
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
  // Same reading the phone shows, from the same function: the bar in the glyph
  // and the red under 20% are one rule, not one per surface.
  const battery = readDeviceBattery(device);

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
            name: device.childName,
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
    Object.entries(device.protectionStatus || {})
      .filter(([k, v]) => isKnownPermission(k) && v === 'denied')
      .forEach(([k]) =>
        items.push({
          id: `perm-${k}`,
          tone: 'critical',
          icon: 'alert',
          title: t('dash.attnPermissionOff', {
            permission: permissionLabel(t, k),
          }),
          meta: t('dash.attnPermissionOffMeta'),
          action: 'howToFix',
          permission: k,
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
  }, [device, c, t]);

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
  const todayApps = device?.usage?.[device.usage.length - 1]?.topApps ?? [];

  const web = (device && webHistory[device.id]) || [];
  const blockedByCategory = useMemo(() => {
    const map = {};
    web.forEach(w => {
      if (w.blockedVisits > 0 && w.category) {
        map[w.category] = (map[w.category] || 0) + w.blockedVisits;
      }
    });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [web]);
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

        <div className="side-section">
          <p className="side-title">{t('dash.children')}</p>
          {devices.length === 0 && <p className="side-empty">{t('dash.noChildren')}</p>}
          {devices.map(d => (
            <button
              key={d.id}
              className={`kid${d.id === deviceId ? ' is-active' : ''}`}
              onClick={() => setDeviceId(d.id)}
            >
              {/*
                The platform glyph, not the child's initial — the same call the
                phone's device card makes (`platformIcon`), so a Mac is the same
                picture on both surfaces. An initial said nothing a parent could
                not already read on the line beside it.
              */}
              <span className={`kid-avatar av-${d.platform}`}>
                <Icon name={platformIcon(d.platform)} size={18} />
              </span>
              <span className="kid-meta">
                <strong>{d.childName}</strong>
                {d.modelName && d.modelName !== d.childName && <em>{d.modelName}</em>}
              </span>
              <i
                className={`kid-dot tone-${d.status === 'online' ? 'good' : d.status === 'locked' ? 'warning' : 'muted'}`}
              />
            </button>
          ))}
        </div>

        <nav className="side-section side-nav">
          <p className="side-title">{t('dash.manage')}</p>
          {TABS.map(item => (
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
            </button>
          ))}
        </nav>

        <div className="side-foot">
          <span className="plan-pill">
            {t(family.plan === 'premium' ? 'dash.planPremium' : 'dash.planTrial')}
          </span>
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
            <h1>{device ? device.name : family.name}</h1>
            {device && (
              <p>
                <StatusPill status={device.status} />
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
              </p>
            )}
          </div>
          <div className="top-actions">
            {topActions}
            {device && (
              <>
                <button
                  className="btn"
                  disabled={busy === 'checkin'}
                  onClick={() =>
                    live &&
                    run(
                      'checkin',
                      () => actions.sendCheckIn(device),
                      t('dash.toastCheckIn', { name: device.childName }),
                    )
                  }
                >
                  {busy === 'checkin' ? t('dash.sending') : t('dash.checkIn')}
                </button>
                <button
                  className="btn btn-primary"
                  disabled={(live && !canWrite) || busy === 'lock'}
                  title={live && !canWrite ? t('dash.lockNeedsApp') : undefined}
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
              </>
            )}
          </div>
        </header>

        {live && !canWrite && (
          <div className="write-note">
            <strong>{t('dash.viewOnlyTitle')}</strong> {t('dash.viewOnlyBody')}
          </div>
        )}

        {toast && <div className={`toast tone-${toast.tone}`}>{toast.text}</div>}

        {/* The report is about the family, so it survives having no device
            selected — a parent whose only device has just been removed can
            still read what the last weeks said. */}
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
            onGenerate={reports?.generate}
          />
        )}

        {device && tab === 'overview' && (
          <>
            <div className="tiles">
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
              <StatTile
                icon="ban"
                label={t('dash.tileBlocked')}
                value={device.protectionCounters.appBlocked}
                meta={t('dash.tileBlockedMeta')}
              />
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
                <Card
                  title={t('dash.cardScreenTime')}
                  subtitle={t('dash.cardScreenTimeSub')}
                >
                  <UsageBars
                    data={device.usage}
                    limit={c.dailyLimitMinutes}
                    days={14}
                  />
                </Card>

                <Card title={t('dash.cardRecent')} subtitle={t('dash.cardRecentSub')}>
                  {(activities[device.id] || []).length === 0 && (
                    <p className="empty">{t('dash.cardRecentEmpty')}</p>
                  )}
                  <ul className="timeline">
                    {(activities[device.id] || []).map(a => {
                      const copy = activityCopy(a, activityT, device.name, actorNames);
                      return (
                        <li key={a.id}>
                          <span className={`tl-icon type-${a.type}`}>
                            <Icon name={ACTIVITY_ICON[a.type] || 'clock'} size={15} />
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
                                      resend: 'dash.attnResend',
                                      howToFix: 'dash.attnHowToFix',
                                      unlock: 'dash.attnUnlock',
                                    }[a.action],
                                  )}
                            </button>
                          )}
                          {fixOpen === a.id && (
                            <p className="attn-fix">
                              {activityT(
                                PERMISSION_FIX_KEY[a.permission] ??
                                  'protection.permissionOffOnChildDevice',
                              )}{' '}
                              {activityT('protection.openKidGateOnChildPhone')}
                            </p>
                          )}
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
                              {permissionLabel(t, k)}
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
                <AppBars apps={todayApps} limits={c.appLimits} />
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
            </Card>
          </>
        )}

        {device && tab === 'apps' && (
          <>
            <div className="grid-2">
              <Card title={t('dash.appUsageTitle')} subtitle={t('dash.appUsageSub')}>
                <AppBars apps={todayApps} limits={c.appLimits} />
              </Card>

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
                <p className="hint">{t('dash.perAppHint')}</p>
                <ul className="chips">
                  {c.appLimits.map(l => (
                    <li key={l.id}>
                      {l.label}{' '}
                      <em>{t('dash.perDay', { value: formatMinutes(l.minutes) })}</em>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

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
                <p className="hint">
                  {t(
                    device.platform === 'ios'
                      ? 'dash.filterHintIos'
                      : 'dash.filterHintAndroid',
                  )}
                </p>
              </Card>
            </div>
          </>
        )}

        {device && tab === 'safety' && (
          <div className="cols">
            <div>
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
                      style={{ left: `${28 + i * 24}%`, top: `${26 + (i % 2) * 22}%` }}
                    >
                      <i />
                      {p.name}
                    </span>
                  ))}
                  {device.lastLocation && (
                    <div className="map-badge">
                      <strong>
                        {device.lastLocation.placeName || t('dash.lastKnownLocation')}
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
              </Card>

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
            </div>

            <div>
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
                          {ci.location?.placeName ? `${ci.location.placeName} · ` : ''}
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
                      t('dash.toastCheckIn', { name: device.childName }),
                    )
                  }
                >
                  {busy === 'checkin2' ? t('dash.sending') : t('dash.sendCheckIn')}
                </button>
              </Card>

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
                      const copy = activityCopy(a, activityT, device.name, actorNames);
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
            </div>
          </div>
        )}

        {device && tab === 'controls' && (
          <ControlsTab
            device={device}
            rewardTasks={rewardTasks}
            leaderboard={leaderboard}
            readOnly={live && !canWrite}
          />
        )}
      </main>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Toggle({ on, onChange, label, disabled }) {
  const { t } = useT();
  return (
    <button
      className={`toggle${on ? ' is-on' : ''}`}
      onClick={() => !disabled && onChange(!on)}
      role="switch"
      aria-checked={on}
      aria-label={label}
      disabled={disabled}
      title={disabled ? t('dash.toggleInApp') : undefined}
    >
      <i />
    </button>
  );
}

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

function ControlsTab({ device, rewardTasks, leaderboard, readOnly }) {
  const { t } = useT();
  const c = device.controls;
  const [state, setState] = useState({
    appBlocking: c.appBlockingEnabled,
    webFilter: c.webFilterEnabled,
    location: c.locationSharingEnabled,
    schedule: c.scheduleEnabled,
  });
  const set = k => v => setState(s => ({ ...s, [k]: v }));

  const rows = [
    {
      key: 'schedule',
      title: t('dash.rowBlockedHours'),
      desc: t('dash.rowBlockedHoursDesc', {
        count: c.scheduleWindows.length,
        list: c.scheduleWindows.map(w => w.label || `${w.start}–${w.end}`).join(', '),
      }),
    },
    {
      key: 'appBlocking',
      title: t('dash.rowAppBlocking'),
      // Two independent counts, and the plural engine inflects on a single
      // `count` — so each half is pluralised on its own and then joined.
      desc: t('dash.rowAppBlockingDesc', {
        apps: t('dash.rowAppBlockingApps', { count: c.blockedAppCount }),
        categories: t('dash.rowAppBlockingCategories', {
          count: c.blockedCategoryCount,
        }),
      }),
    },
    {
      key: 'webFilter',
      title: t('dash.rowWebFilter'),
      desc: t('dash.rowWebFilterDesc', { count: c.webFilterCategories.length }),
    },
    {
      key: 'location',
      title: t('dash.rowLocation'),
      desc: device.lastLocation
        ? t('dash.rowLocationDesc', {
            when: timeAgo(device.lastLocation.updatedAt),
          })
        : t('dash.rowLocationNone'),
    },
  ];

  return (
    <>
      <div className="grid-2">
        <Card title={t('dash.limitCardTitle')} subtitle={t('dash.limitCardSub')}>
          <div className="limit-edit">
            <strong>
              {c.dailyLimitMinutes ? formatMinutes(c.dailyLimitMinutes) : t('dash.off')}
            </strong>
            <input
              type="range"
              min="30"
              max="480"
              step="15"
              defaultValue={c.dailyLimitMinutes ?? 180}
              aria-label={t('dash.limitAria')}
              disabled={readOnly}
            />
            <div className="limit-scale">
              <span>{t('dash.limitScaleMin')}</span>
              <span>{t('dash.limitScaleMax')}</span>
            </div>
          </div>
          <p className="hint">{t('dash.limitHint')}</p>
        </Card>

        <Card title={t('dash.whatsOnTitle')} subtitle={t('dash.whatsOnSub')}>
          <ul className="ctrl-rows">
            {rows.map(r => (
              <li key={r.key}>
                <span className="ctrl-body">
                  <strong>{r.title}</strong>
                  <em>{r.desc}</em>
                </span>
                <Toggle
                  on={state[r.key]}
                  onChange={set(r.key)}
                  label={r.title}
                  disabled={readOnly}
                />
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
          <ul className="chips chips-toggle">
            {WEB_CATEGORY_KEYS.map(key => {
              const on = c.webFilterCategories.includes(key);
              return (
                <li key={key} className={on ? 'is-on' : ''}>
                  {on && <Icon name="check" size={13} />}
                  {webCategoryLabel(t, key)}
                </li>
              );
            })}
          </ul>
          <p className="hint">{t('dash.dnsHint')}</p>
        </Card>

        <StarChartCard leaderboard={leaderboard} />

        <Card title={t('dash.rewardTasksTitle')} subtitle={t('dash.rewardTasksSub')}>
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
                    {t('dash.rewardTaskMeta', {
                      minutes: task.minutes,
                      cadence: task.cadence,
                    })}
                    {task.status === 'claimed' ? t('dash.rewardTaskWaiting') : ''}
                  </em>
                </span>
                {task.status === 'claimed' && (
                  <button
                    className="btn btn-sm"
                    disabled={readOnly}
                    title={readOnly ? t('dash.approveInApp') : undefined}
                  >
                    {t('dash.approve')}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
