import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  isKnownPermission,
  permissionLabel,
  WEB_CATEGORY_KEYS,
  webCategoryLabel,
} from '../dashboard/labels.js'
import BrandLogo from '../components/BrandLogo.jsx'
import Icon from '../components/Icon.jsx'
import {
  AppBars,
  formatMinutes,
  ScheduleGrid,
  UsageBars,
  UsageRing,
} from '../dashboard/charts.jsx'
import LanguagePicker from '../i18n/LanguagePicker.jsx'
import { RichText } from '../i18n/RichText.jsx'
import { t as translate } from '../i18n/index.js'
import { useT } from '../i18n/useT.js'

const TABS = [
  { id: 'overview', labelKey: 'dash.tabOverview', icon: 'grid' },
  { id: 'screen', labelKey: 'dash.tabScreen', icon: 'clock' },
  { id: 'apps', labelKey: 'dash.tabApps', icon: 'apps' },
  { id: 'safety', labelKey: 'dash.tabSafety', icon: 'shield' },
  { id: 'controls', labelKey: 'dash.tabControls', icon: 'sliders' },
]

/**
 * Devices disagree about whether `osVersion` already names the platform —
 * iOS reports "iOS 18.7.8", Android often just "15" — so printing
 * "{platform} {osVersion}" gives "iOS iOS 18.7.8" on half the fleet.
 */
function osLabel(platform, osVersion) {
  const base = platform === 'ios' ? 'iOS' : 'Android'
  const version = (osVersion || '').trim()
  if (!version) return base
  return version.toLowerCase().startsWith(base.toLowerCase())
    ? version
    : `${base} ${version}`
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
}

function permissionState(value) {
  return PERMISSION_STATE[value] || PERMISSION_STATE.unknown
}

/**
 * Reads the module-level `t`: it is called from `useMemo` bodies and from
 * inside `map` callbacks whose component already re-renders on a language
 * change, so threading a hook through every call site would buy nothing.
 */
function timeAgo(iso) {
  const at = iso ? new Date(iso).getTime() : NaN
  if (Number.isNaN(at)) return translate('time.never')
  const diff = Date.now() - at
  const mins = Math.round(diff / 60000)
  if (mins < 1) return translate('time.justNow')
  if (mins < 60) return translate('time.minutes', { count: mins })
  const hrs = Math.round(mins / 60)
  if (hrs < 24) return translate('time.hours', { count: hrs })
  return translate('time.days', { count: Math.round(hrs / 24) })
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
  )
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
  )
}

const STATUS_TONE = { online: 'good', offline: 'muted', locked: 'warning' }
const STATUS_KEY = {
  online: 'dash.statusOnline',
  offline: 'dash.statusOffline',
  locked: 'dash.statusLocked',
}

function StatusPill({ status }) {
  const { t } = useT()
  const known = STATUS_TONE[status] ? status : 'offline'
  return (
    <span className={`pill tone-${STATUS_TONE[known]}`}>
      <i className="pill-dot" aria-hidden="true" />
      {t(STATUS_KEY[known])}
    </span>
  )
}

const ACTIVITY_ICON = {
  app_blocked: 'ban',
  app_opened: 'play',
  app_installed: 'plus',
  app_removed: 'minus',
  place_enter: 'pin',
  place_exit: 'pin',
  tamper: 'alert',
  device_locked: 'lock',
  device_unlocked: 'unlock',
  screen_time: 'clock',
  emergency: 'lifebuoy',
}

/* ------------------------------------------------------------------ */

export default function Dashboard({
  data,
  sideFooter,
  topActions,
  onDeviceChange,
  actions,
}) {
  const {
    family,
    devices,
    activities,
    checkIns,
    places,
    rewardTasks,
    sosAlerts,
    timeRequests,
    webHistory,
  } = data

  const { t } = useT()
  const [deviceId, setDeviceId] = useState(devices[0]?.id ?? null)
  const [tab, setTab] = useState('overview')
  const [range, setRange] = useState(14)
  const [busy, setBusy] = useState(null)
  const [toast, setToast] = useState(null)

  const canWrite = actions?.canWrite ?? false
  const live = Boolean(actions)

  async function run(key, fn, okMessage) {
    setBusy(key)
    setToast(null)
    try {
      await fn()
      if (okMessage) setToast({ tone: 'good', text: okMessage })
    } catch (e) {
      // Failures raised in the browser carry a key we own; anything relayed
      // from the Cloud Function arrives as server text and is shown as-is.
      setToast({
        tone: 'critical',
        text: e.messageKey ? t(e.messageKey) : e.message,
      })
    } finally {
      setBusy(null)
    }
  }

  // A device can appear (first pairing) or disappear (removal) while the
  // dashboard is open; the selection has to follow rather than dangle.
  useEffect(() => {
    if (devices.length === 0) {
      if (deviceId !== null) setDeviceId(null)
    } else if (!devices.some((d) => d.id === deviceId)) {
      setDeviceId(devices[0].id)
    }
  }, [devices, deviceId])

  useEffect(() => {
    onDeviceChange?.(deviceId)
  }, [deviceId, onDeviceChange])

  const device = devices.find((d) => d.id === deviceId) ?? null
  const c = device?.controls ?? null

  const stats = useMemo(() => {
    if (!device || !c) return null
    const last7 = device.usage.slice(-8, -1)
    const avg7 = last7.length
      ? Math.round(last7.reduce((s, d) => s + d.minutes, 0) / last7.length)
      : 0
    const used = c.minutesUsedToday
    const effLimit = c.dailyLimitMinutes ? c.dailyLimitMinutes + (c.bonusMinutesToday || 0) : null
    return {
      avg7,
      used,
      effLimit,
      left: effLimit ? Math.max(0, effLimit - used) : null,
      delta: avg7 ? Math.round(((used - avg7) / avg7) * 100) : 0,
    }
  }, [device, c])

  const attention = useMemo(() => {
    if (!device || !c) return []
    const items = []
    ;(timeRequests[device.id] || [])
      .filter((req) => req.status === 'pending')
      .forEach((req) =>
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
      )
    ;(checkIns[device.id] || [])
      .filter((ci) => ci.status === 'missed')
      .forEach((ci) =>
        items.push({
          id: ci.id,
          tone: 'serious',
          icon: 'lifebuoy',
          title: t('dash.attnCheckInMissed'),
          meta: t('dash.attnCheckInMissedMeta', { when: timeAgo(ci.createdAt) }),
          action: 'resend',
        }),
      )
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
        }),
      )
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
      })
    }
    if (device.batteryLevel != null && device.batteryLevel <= 25 && !device.batteryCharging) {
      items.push({
        id: 'batt',
        tone: 'serious',
        icon: 'battery',
        title: t('dash.attnBatteryLow', { level: device.batteryLevel }),
        meta: t('dash.attnBatteryLowMeta'),
      })
    }
    return items
  }, [device, c, t])

  const web = (device && webHistory[device.id]) || []
  const blockedByCategory = useMemo(() => {
    const map = {}
    web.forEach((w) => {
      if (w.blockedVisits > 0 && w.category) {
        map[w.category] = (map[w.category] || 0) + w.blockedVisits
      }
    })
    return Object.entries(map).sort((a, b) => b[1] - a[1])
  }, [web])
  const blockedTotal = blockedByCategory.reduce((s, [, v]) => s + v, 0)

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
          {devices.length === 0 && (
            <p className="side-empty">{t('dash.noChildren')}</p>
          )}
          {devices.map((d) => (
            <button
              key={d.id}
              className={`kid${d.id === deviceId ? ' is-active' : ''}`}
              onClick={() => setDeviceId(d.id)}
            >
              <span className={`kid-avatar av-${d.platform}`}>{d.initials}</span>
              <span className="kid-meta">
                <strong>{d.childName}</strong>
                {d.modelName && d.modelName !== d.childName && (
                  <em>{d.modelName}</em>
                )}
              </span>
              <i className={`kid-dot tone-${d.status === 'online' ? 'good' : d.status === 'locked' ? 'warning' : 'muted'}`} />
            </button>
          ))}
        </div>

        <nav className="side-section side-nav">
          <p className="side-title">{t('dash.manage')}</p>
          {TABS.map((item) => (
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
                {device.batteryLevel != null && (
                  <>
                    <span className="dot-sep">·</span>
                    <Icon name="battery" size={15} /> {device.batteryLevel}%
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

        {!device && (
          <section className="card">
            <h2>{t('dash.noDeviceTitle')}</h2>
            <RichText as="p" className="hint" text={t('dash.noDeviceBody')} />
          </section>
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
                  <UsageBars data={device.usage} limit={c.dailyLimitMinutes} days={14} />
                </Card>

                <Card title={t('dash.cardRecent')} subtitle={t('dash.cardRecentSub')}>
                  {(activities[device.id] || []).length === 0 && (
                    <p className="empty">{t('dash.cardRecentEmpty')}</p>
                  )}
                  <ul className="timeline">
                    {(activities[device.id] || []).map((a) => (
                      <li key={a.id}>
                        <span className={`tl-icon type-${a.type}`}>
                          <Icon name={ACTIVITY_ICON[a.type] || 'clock'} size={15} />
                        </span>
                        <span className="tl-body">
                          <strong>{a.title}</strong>
                          <em>{a.description}</em>
                        </span>
                        <time>{timeAgo(a.createdAt)}</time>
                      </li>
                    ))}
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
                      {attention.map((a) => (
                        <li key={a.id} className={`tone-${a.tone}`}>
                          <span className="attn-icon">
                            <Icon name={a.icon} size={16} />
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
                            // view-only session; the rest need the phone.
                            disabled={live && !canWrite && a.action !== 'resend'}
                            title={
                              live && !canWrite && a.action !== 'resend'
                                ? t('dash.attnAppOnly')
                                : undefined
                            }
                            onClick={() => {
                              if (!live) return
                              if (a.action === 'review') {
                                run(
                                  a.id,
                                  () => actions.resolveTimeRequest(a.id, true),
                                  t('dash.toastTimeApproved'),
                                )
                              } else if (a.action === 'resend') {
                                run(
                                  a.id,
                                  () => actions.sendCheckIn(device),
                                  t('dash.toastCheckInResent'),
                                )
                              } else if (a.action === 'unlock') {
                                run(a.id, () => actions.setLock(device.id, false))
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
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>

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
                        const state = permissionState(v)
                        return (
                          <li key={k}>
                            <span className={`perm-state tone-${state.tone}`}>
                              <Icon name={state.icon} size={13} />
                            </span>
                            {permissionLabel(t, k)}
                            <em>{t(state.labelKey)}</em>
                          </li>
                        )
                      })}
                  </ul>
                </Card>
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
                <AppBars apps={c.topApps} limits={c.appLimits} />
              </Card>
            </div>

            <Card
              title={t('dash.trendTitle')}
              subtitle={t('dash.trendSub', { count: range })}
              action={
                <div className="seg">
                  {[7, 14, 30].map((d) => (
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
                <AppBars apps={c.topApps} limits={c.appLimits} />
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
                  {c.appLimits.map((l) => (
                    <li key={l.id}>
                      {l.label}{' '}
                      <em>
                        {t('dash.perDay', { value: formatMinutes(l.minutes) })}
                      </em>
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
                    {web.map((w) => (
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
                        <td className={`num${w.blockedVisits ? ' tone-critical' : ''}`}>
                          {w.blockedVisits || t('viz.none')}
                        </td>
                        <td>{timeAgo(w.lastAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                  {(places[device.id] || []).map((p) => (
                    <li key={p.id}>
                      <span className={`perm-state ${p.inside ? 'tone-good' : 'tone-muted'}`}>
                        <Icon name={p.inside ? 'check' : 'pin'} size={13} />
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
                    {sosAlerts[device.id].map((s) => (
                      <li key={s.id}>
                        <span className="ev-state tone-critical">
                          <Icon name="lifebuoy" size={13} />
                        </span>
                        <span className="ev-body">
                          <strong>{s.message}</strong>
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
                  {(checkIns[device.id] || []).map((ci) => (
                    <li key={ci.id}>
                      <span
                        className={`ev-state tone-${
                          ci.status === 'safe' ? 'good' : ci.status === 'missed' ? 'critical' : 'warning'
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
                    .filter((a) => a.type === 'tamper')
                    .map((a) => (
                      <li key={a.id}>
                        <span className="tl-icon type-tamper">
                          <Icon name="alert" size={15} />
                        </span>
                        <span className="tl-body">
                          <strong>{a.title}</strong>
                          <em>{a.description}</em>
                        </span>
                        <time>{timeAgo(a.createdAt)}</time>
                      </li>
                    ))}
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
            readOnly={live && !canWrite}
          />
        )}
      </main>
    </div>
  )
}

/* ------------------------------------------------------------------ */

function Toggle({ on, onChange, label, disabled }) {
  const { t } = useT()
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
  )
}

function ControlsTab({ device, rewardTasks, readOnly }) {
  const { t } = useT()
  const c = device.controls
  const [state, setState] = useState({
    appBlocking: c.appBlockingEnabled,
    webFilter: c.webFilterEnabled,
    location: c.locationSharingEnabled,
    schedule: c.scheduleEnabled,
  })
  const set = (k) => (v) => setState((s) => ({ ...s, [k]: v }))

  const rows = [
    {
      key: 'schedule',
      title: t('dash.rowBlockedHours'),
      desc: t('dash.rowBlockedHoursDesc', {
        count: c.scheduleWindows.length,
        list: c.scheduleWindows
          .map((w) => w.label || `${w.start}–${w.end}`)
          .join(', '),
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
  ]

  return (
    <>
      <div className="grid-2">
        <Card title={t('dash.limitCardTitle')} subtitle={t('dash.limitCardSub')}>
          <div className="limit-edit">
            <strong>
              {c.dailyLimitMinutes
                ? formatMinutes(c.dailyLimitMinutes)
                : t('dash.off')}
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
            {rows.map((r) => (
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
            {WEB_CATEGORY_KEYS.map((key) => {
              const on = c.webFilterCategories.includes(key)
              return (
                <li key={key} className={on ? 'is-on' : ''}>
                  {on && <Icon name="check" size={13} />}
                  {webCategoryLabel(t, key)}
                </li>
              )
            })}
          </ul>
          <p className="hint">{t('dash.dnsHint')}</p>
        </Card>

        <Card title={t('dash.rewardTasksTitle')} subtitle={t('dash.rewardTasksSub')}>
          <ul className="events">
            {(rewardTasks[device.id] || []).map((task) => (
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
  )
}
