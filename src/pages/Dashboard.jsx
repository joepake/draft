import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PERMISSION_LABELS, WEB_CATEGORY_LABELS } from '../dashboard/labels.js'
import {
  AppBars,
  formatMinutes,
  ScheduleGrid,
  UsageBars,
  UsageRing,
} from '../dashboard/charts.jsx'

const TABS = [
  { id: 'overview', label: 'Overview', icon: '◈' },
  { id: 'screen', label: 'Screen Time', icon: '◷' },
  { id: 'apps', label: 'Apps & Web', icon: '▤' },
  { id: 'safety', label: 'Safety', icon: '◎' },
  { id: 'controls', label: 'Controls', icon: '⚙' },
]

function timeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime()
  const mins = Math.round(diff / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.round(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  return `${Math.round(hrs / 24)}d ago`
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
        {icon && <i aria-hidden="true">{icon}</i>}
        {label}
      </span>
      <strong className="tile-value">{value}</strong>
      {meta && <span className="tile-meta">{meta}</span>}
    </div>
  )
}

function StatusPill({ status }) {
  const map = {
    online: { label: 'Online', tone: 'good' },
    offline: { label: 'Offline', tone: 'muted' },
    locked: { label: 'Locked', tone: 'warning' },
  }
  const s = map[status] ?? map.offline
  return (
    <span className={`pill tone-${s.tone}`}>
      <i className="pill-dot" aria-hidden="true" />
      {s.label}
    </span>
  )
}

const ACTIVITY_ICON = {
  app_blocked: '⛔',
  app_opened: '▶',
  app_installed: '＋',
  app_removed: '－',
  place_enter: '📍',
  place_exit: '📍',
  tamper: '⚠',
  device_locked: '🔒',
  device_unlocked: '🔓',
  screen_time: '◷',
  emergency: '🆘',
}

/* ------------------------------------------------------------------ */

export default function Dashboard({
  data,
  notice,
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

  const [deviceId, setDeviceId] = useState(devices[0]?.id ?? null)
  const [tab, setTab] = useState('overview')
  const [range, setRange] = useState(14)
  const [busy, setBusy] = useState(null)
  const [toast, setToast] = useState(null)

  // Actions are absent in the demo, where the buttons are deliberately inert.
  const canWrite = actions?.canWrite ?? false
  const live = Boolean(actions)

  async function run(key, fn, okMessage) {
    setBusy(key)
    setToast(null)
    try {
      await fn()
      if (okMessage) setToast({ tone: 'good', text: okMessage })
    } catch (e) {
      setToast({ tone: 'critical', text: e.message })
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
      .filter((t) => t.status === 'pending')
      .forEach((t) =>
        items.push({
          id: t.id,
          tone: 'warning',
          icon: '⏱',
          title: `${device.childName} asked for ${t.requestedMinutes} more minutes`,
          meta: t.reason ? `“${t.reason}” · ${timeAgo(t.createdAt)}` : timeAgo(t.createdAt),
          cta: 'Review',
        }),
      )
    ;(checkIns[device.id] || [])
      .filter((ci) => ci.status === 'missed')
      .forEach((ci) =>
        items.push({
          id: ci.id,
          tone: 'serious',
          icon: '◎',
          title: 'Check-In was missed',
          meta: `Sent ${timeAgo(ci.createdAt)} · no response`,
          cta: 'Resend',
        }),
      )
    Object.entries(device.protectionStatus || {})
      .filter(([k, v]) => PERMISSION_LABELS[k] && v === 'denied')
      .forEach(([k]) =>
        items.push({
          id: `perm-${k}`,
          tone: 'critical',
          icon: '⚠',
          title: `${PERMISSION_LABELS[k]} is turned off`,
          meta: 'Protection is weaker until this is restored on the child device',
          cta: 'How to fix',
        }),
      )
    if (c.dailyLimitExceeded) {
      items.push({
        id: 'limit',
        tone: 'warning',
        icon: '🔒',
        title: 'Daily Limit reached — device locked',
        meta: `${formatMinutes(c.minutesUsedToday)} used today`,
        cta: 'Unlock',
      })
    }
    if (device.batteryLevel != null && device.batteryLevel <= 25 && !device.batteryCharging) {
      items.push({
        id: 'batt',
        tone: 'serious',
        icon: '🔋',
        title: `Battery is low (${device.batteryLevel}%)`,
        meta: 'Location updates may pause if the phone dies',
      })
    }
    return items
  }, [device, c])

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
          <Link to="/">KidGate</Link>
          <span>{family.name}</span>
        </div>

        <div className="side-section">
          <p className="side-title">Children</p>
          {devices.length === 0 && (
            <p className="side-empty">No child devices paired yet.</p>
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
                <em>{d.modelName}</em>
              </span>
              <i className={`kid-dot tone-${d.status === 'online' ? 'good' : d.status === 'locked' ? 'warning' : 'muted'}`} />
            </button>
          ))}
        </div>

        <nav className="side-section side-nav">
          <p className="side-title">Manage</p>
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`nav-item${tab === t.id ? ' is-active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              <i aria-hidden="true">{t.icon}</i>
              {t.label}
              {t.id === 'overview' && attention.length > 0 && (
                <span className="nav-badge">{attention.length}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="side-foot">
          <span className="plan-pill">{family.plan}</span>
          <p>
            {family.parents.length} parents · {devices.length} child devices
          </p>
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
                {device.platform === 'ios' ? 'iOS' : 'Android'} {device.osVersion}
                {device.lastActiveAt && (
                  <>
                    <span className="dot-sep">·</span>
                    Last active {timeAgo(device.lastActiveAt)}
                  </>
                )}
                {device.batteryLevel != null && (
                  <>
                    <span className="dot-sep">·</span>
                    🔋 {device.batteryLevel}%
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
                      `${device.childName} will get a Check-In request.`,
                    )
                  }
                >
                  {busy === 'checkin' ? 'Sending…' : 'Check-In'}
                </button>
                <button
                  className="btn btn-primary"
                  disabled={(live && !canWrite) || busy === 'lock'}
                  title={
                    live && !canWrite
                      ? 'Locking requires the KidGate app on your phone'
                      : undefined
                  }
                  onClick={() =>
                    live &&
                    run('lock', () => actions.setLock(device.id, !device.isLocked))
                  }
                >
                  {busy === 'lock'
                    ? 'Working…'
                    : device.isLocked
                      ? 'Unlock'
                      : 'Lock device'}
                </button>
              </>
            )}
          </div>
        </header>

        {notice}

        {live && !canWrite && (
          <div className="write-note">
            <strong>Read-only on the web.</strong> Locking a device, changing
            limits and approving requests are signed with a credential that only
            lives on a paired parent phone — do those in the KidGate app.
            Check-Ins work from here.
          </div>
        )}

        {toast && <div className={`toast tone-${toast.tone}`}>{toast.text}</div>}

        {!device && (
          <section className="card">
            <h2>No child device yet</h2>
            <p className="hint">
              Open KidGate on your phone, go to <em>Family → + → Connect a child
              device</em>, and scan the QR code shown on your child&apos;s
              device. It will appear here within a few seconds of pairing.
            </p>
          </section>
        )}

        {device && tab === 'overview' && (
          <>
            <div className="tiles">
              <StatTile
                icon="◷"
                label="Screen time today"
                value={formatMinutes(stats.used)}
                meta={
                  stats.delta === 0
                    ? 'Same as the 7-day average'
                    : `${stats.delta > 0 ? '↑' : '↓'} ${Math.abs(stats.delta)}% vs 7-day average`
                }
                tone={stats.delta > 25 ? 'warning' : 'default'}
              />
              <StatTile
                icon="⛔"
                label="Blocked attempts"
                value={device.protectionCounters.appBlocked}
                meta="Apps stopped since install"
              />
              <StatTile
                icon="🌐"
                label="Sites filtered"
                value={device.webFilterBlockedCount}
                meta={blockedTotal ? `${blockedByCategory.length} categories hit` : 'Nothing blocked yet'}
              />
              <StatTile
                icon="⚠"
                label="Needs attention"
                value={attention.length}
                meta={attention.length ? 'Open items below' : 'All clear'}
                tone={attention.length ? 'warning' : 'good'}
              />
            </div>

            <div className="cols">
              <div>
                <Card title="Screen time" subtitle="Last 14 days, against the Daily Limit">
                  <UsageBars data={device.usage} limit={c.dailyLimitMinutes} days={14} />
                </Card>

                <Card title="Recent activity" subtitle="Newest first">
                  <ul className="timeline">
                    {(activities[device.id] || []).map((a) => (
                      <li key={a.id}>
                        <span className={`tl-icon type-${a.type}`} aria-hidden="true">
                          {ACTIVITY_ICON[a.type] || '•'}
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
                <Card title="Needs your attention" subtitle={`${attention.length} open`}>
                  {attention.length === 0 ? (
                    <p className="empty">Nothing to review. Protections look healthy.</p>
                  ) : (
                    <ul className="attn">
                      {attention.map((a) => (
                        <li key={a.id} className={`tone-${a.tone}`}>
                          <span className="attn-icon" aria-hidden="true">{a.icon}</span>
                          <span className="attn-body">
                            <strong>{a.title}</strong>
                            <em>{a.meta}</em>
                          </span>
                          {a.cta && (
                          <button
                            className="btn btn-sm"
                            disabled={live && !canWrite && a.cta !== 'Resend'}
                            title={
                              live && !canWrite && a.cta !== 'Resend'
                                ? 'Available in the KidGate app'
                                : undefined
                            }
                            onClick={() => {
                              if (!live) return
                              if (a.cta === 'Review') {
                                run(
                                  a.id,
                                  () => actions.resolveTimeRequest(a.id, true),
                                  'Extra time approved.',
                                )
                              } else if (a.cta === 'Resend') {
                                run(
                                  a.id,
                                  () => actions.sendCheckIn(device),
                                  'Check-In sent again.',
                                )
                              } else if (a.cta === 'Unlock') {
                                run(a.id, () => actions.setLock(device.id, false))
                              }
                            }}
                          >
                            {busy === a.id ? '…' : a.cta}
                          </button>
                        )}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>

                <Card
                  title="Protection health"
                  subtitle={`Checked ${timeAgo(device.protectionStatus.lastCheckedAt)}`}
                >
                  <ul className="perms">
                    {Object.entries(device.protectionStatus)
                      .filter(([k]) => PERMISSION_LABELS[k])
                      .map(([k, v]) => {
                        const ok = v === 'authorized'
                        return (
                          <li key={k}>
                            <span className={`perm-state ${ok ? 'tone-good' : 'tone-critical'}`}>
                              {ok ? '✓' : '✕'}
                            </span>
                            {PERMISSION_LABELS[k]}
                            <em>{ok ? 'Allowed' : 'Turned off'}</em>
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
              <Card title="Today" subtitle="Against the Daily Limit and any bonus earned">
                <div className="today">
                  <UsageRing
                    used={stats.used}
                    limit={c.dailyLimitMinutes}
                    bonus={c.bonusMinutesToday}
                  />
                  <ul className="today-stats">
                    <li>
                      <span>Used</span>
                      <strong>{formatMinutes(stats.used)}</strong>
                    </li>
                    <li>
                      <span>Left</span>
                      <strong className={stats.left === 0 ? 'tone-critical' : ''}>
                        {stats.left == null ? '—' : formatMinutes(stats.left)}
                      </strong>
                    </li>
                    <li>
                      <span>Daily Limit</span>
                      <strong>{c.dailyLimitMinutes ? formatMinutes(c.dailyLimitMinutes) : 'Off'}</strong>
                    </li>
                    <li>
                      <span>Bonus today</span>
                      <strong>{c.bonusMinutesToday ? `+${formatMinutes(c.bonusMinutesToday)}` : '—'}</strong>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card title="Top apps today" subtitle="Per-app caps shown as a marker">
                <AppBars apps={c.topApps} limits={c.appLimits} />
              </Card>
            </div>

            <Card
              title="Screen time trend"
              subtitle={`Last ${range} days`}
              action={
                <div className="seg">
                  {[7, 14, 30].map((d) => (
                    <button
                      key={d}
                      className={range === d ? 'is-active' : ''}
                      onClick={() => setRange(d)}
                    >
                      {d}d
                    </button>
                  ))}
                </div>
              }
            >
              <UsageBars data={device.usage} limit={c.dailyLimitMinutes} days={range} />
            </Card>

            <Card
              title="Blocked Hours"
              subtitle={
                c.scheduleEnabled
                  ? `${c.scheduleWindows.length} time ranges · the device stays locked inside the shaded blocks`
                  : 'Schedule is off'
              }
            >
              <ScheduleGrid windows={c.scheduleWindows} />
            </Card>
          </>
        )}

        {device && tab === 'apps' && (
          <>
            <div className="grid-2">
              <Card title="App usage today" subtitle="Time spent per app">
                <AppBars apps={c.topApps} limits={c.appLimits} />
              </Card>

              <Card title="App blocking" subtitle="Chosen on the child device with the Parent PIN">
                <div className="tiles tiles-inline">
                  <StatTile
                    label="Blocking"
                    value={c.appBlockingEnabled ? 'On' : 'Off'}
                    tone={c.appBlockingEnabled ? 'good' : 'muted'}
                  />
                  <StatTile label="Apps blocked" value={c.blockedAppCount} />
                  <StatTile label="Categories" value={c.blockedCategoryCount} />
                </div>
                <p className="hint">
                  Per-app caps run independently of the blocklist — “30 minutes of
                  TikTok” is a different decision from “no TikTok”.
                </p>
                <ul className="chips">
                  {c.appLimits.map((l) => (
                    <li key={l.id}>
                      {l.label} <em>{formatMinutes(l.minutes)}/day</em>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="grid-2">
              <Card title="Web activity" subtitle="Most visited domains, last 30 days">
                <table className="tbl">
                  <thead>
                    <tr>
                      <th>Domain</th>
                      <th className="num">Visits</th>
                      <th className="num">Blocked</th>
                      <th>Last seen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {web.map((w) => (
                      <tr key={w.domain}>
                        <td>
                          {w.domain}
                          {w.category && (
                            <span className="tag">{WEB_CATEGORY_LABELS[w.category]}</span>
                          )}
                        </td>
                        <td className="num">{w.visits}</td>
                        <td className={`num${w.blockedVisits ? ' tone-critical' : ''}`}>
                          {w.blockedVisits || '—'}
                        </td>
                        <td>{timeAgo(w.lastAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>

              <Card
                title="What the filter refused"
                subtitle={`${blockedTotal} blocked lookups, last 30 days`}
              >
                {blockedByCategory.length === 0 ? (
                  <p className="empty">Nothing has been blocked yet.</p>
                ) : (
                  <ul className="catbars">
                    {blockedByCategory.map(([cat, n], i) => (
                      <li key={cat}>
                        <div className="hbar-head">
                          <span className="hbar-label">
                            <i className={`dot dot-${(i % 3) + 1}`} />
                            {WEB_CATEGORY_LABELS[cat]}
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
                  {device.platform === 'ios'
                    ? 'On iOS the filter uses Apple’s adult-content control — per-category blocking is Android only.'
                    : 'Categories are enforced by the on-device DNS filter.'}
                </p>
              </Card>
            </div>
          </>
        )}

        {device && tab === 'safety' && (
          <div className="cols">
            <div>
              <Card
                title="Location"
                subtitle={
                  c.locationSharingEnabled
                    ? `Updated ${timeAgo(device.lastLocation.updatedAt)}`
                    : 'Sharing is off'
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
                  <div className="map-badge">
                    <strong>{device.lastLocation.placeName}</strong>
                    <em>{device.lastLocation.address}</em>
                  </div>
                </div>
                <ul className="places">
                  {(places[device.id] || []).map((p) => (
                    <li key={p.id}>
                      <span className={`perm-state ${p.inside ? 'tone-good' : 'tone-muted'}`}>
                        {p.inside ? '●' : '○'}
                      </span>
                      {p.name}
                      <em>
                        {p.radius}m ·{' '}
                        {[p.alertOnEnter && 'arrive', p.alertOnExit && 'leave']
                          .filter(Boolean)
                          .join(' + ') || 'no alerts'}
                      </em>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card title="SOS alerts" subtitle="Emergency signals from the child device">
                {(sosAlerts[device.id] || []).length === 0 ? (
                  <p className="empty">No SOS alerts. Test it once together so you both know how it works.</p>
                ) : (
                  <ul className="events">
                    {sosAlerts[device.id].map((s) => (
                      <li key={s.id}>
                        <span className="ev-state tone-critical">🆘</span>
                        <span className="ev-body">
                          <strong>{s.message}</strong>
                          <em>
                            {s.location?.placeName} ·{' '}
                            {s.status === 'acknowledged' ? 'acknowledged' : 'active'}
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
              <Card title="Check-Ins" subtitle="Ask your child to confirm they are safe">
                <ul className="events">
                  {(checkIns[device.id] || []).map((ci) => (
                    <li key={ci.id}>
                      <span
                        className={`ev-state tone-${
                          ci.status === 'safe' ? 'good' : ci.status === 'missed' ? 'critical' : 'warning'
                        }`}
                      >
                        {ci.status === 'safe' ? '✓' : ci.status === 'missed' ? '✕' : '…'}
                      </span>
                      <span className="ev-body">
                        <strong>
                          {ci.status === 'safe'
                            ? 'Confirmed safe'
                            : ci.status === 'missed'
                              ? 'No response'
                              : 'Waiting'}
                        </strong>
                        <em>
                          {ci.location?.placeName ? `${ci.location.placeName} · ` : ''}
                          {ci.status !== 'safe'
                            ? ci.requirePhoto
                              ? 'photo and location were requested'
                              : 'no reply yet'
                            : ci.photoSkipped
                              ? 'photo skipped'
                              : ci.requirePhoto
                                ? 'photo attached'
                                : 'no photo requested'}
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
                      `${device.childName} will get a Check-In request.`,
                    )
                  }
                >
                  {busy === 'checkin2' ? 'Sending…' : 'Send a Check-In now'}
                </button>
              </Card>

              <Card
                title="Protection alerts"
                subtitle={`${device.protectionCounters.tamper} events since install`}
              >
                <ul className="timeline">
                  {(activities[device.id] || [])
                    .filter((a) => a.type === 'tamper')
                    .map((a) => (
                      <li key={a.id}>
                        <span className="tl-icon type-tamper" aria-hidden="true">⚠</span>
                        <span className="tl-body">
                          <strong>{a.title}</strong>
                          <em>{a.description}</em>
                        </span>
                        <time>{timeAgo(a.createdAt)}</time>
                      </li>
                    ))}
                </ul>
                <p className="hint">
                  A protection alert means KidGate can enforce less than you set.
                  Restore the permission on the child device to clear it.
                </p>
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
  return (
    <button
      className={`toggle${on ? ' is-on' : ''}`}
      onClick={() => !disabled && onChange(!on)}
      role="switch"
      aria-checked={on}
      aria-label={label}
      disabled={disabled}
      title={disabled ? 'Change this in the KidGate app' : undefined}
    >
      <i />
    </button>
  )
}

function ControlsTab({ device, rewardTasks, readOnly }) {
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
      title: 'Blocked Hours',
      desc: `${c.scheduleWindows.length} time ranges · ${c.scheduleWindows
        .map((w) => w.label || `${w.start}–${w.end}`)
        .join(', ')}`,
    },
    {
      key: 'appBlocking',
      title: 'App Blocking',
      desc: `${c.blockedAppCount} apps · ${c.blockedCategoryCount} categories selected on the child device`,
    },
    {
      key: 'webFilter',
      title: 'Web Filter',
      desc: `${c.webFilterCategories.length} categories refused`,
    },
    {
      key: 'location',
      title: 'Location sharing',
      desc: device.lastLocation
        ? `Last update ${timeAgo(device.lastLocation.updatedAt)}`
        : 'No location yet',
    },
  ]

  return (
    <>
      <div className="grid-2">
        <Card title="Daily Limit" subtitle="Cap the minutes available each day">
          <div className="limit-edit">
            <strong>{c.dailyLimitMinutes ? formatMinutes(c.dailyLimitMinutes) : 'Off'}</strong>
            <input
              type="range"
              min="30"
              max="480"
              step="15"
              defaultValue={c.dailyLimitMinutes ?? 180}
              aria-label="Daily limit minutes"
              disabled={readOnly}
            />
            <div className="limit-scale">
              <span>30m</span>
              <span>8h</span>
            </div>
          </div>
          <p className="hint">
            Bonus minutes from reward tasks and approved time requests are added
            on top, for that day only.
          </p>
        </Card>

        <Card title="What is turned on" subtitle="Changes sync to the child device">
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
        <Card title="Web Filter categories" subtitle="Blocked content types">
          <ul className="chips chips-toggle">
            {Object.entries(WEB_CATEGORY_LABELS).map(([key, label]) => {
              const on = c.webFilterCategories.includes(key)
              return (
                <li key={key} className={on ? 'is-on' : ''}>
                  {on ? '✓ ' : ''}
                  {label}
                </li>
              )
            })}
          </ul>
          <p className="hint">
            Encrypted-DNS resolvers are always refused while the filter runs —
            leaving them reachable is what lets a browser route around every
            other category.
          </p>
        </Card>

        <Card title="Reward tasks" subtitle="Earn extra minutes by finishing tasks">
          <ul className="events">
            {(rewardTasks[device.id] || []).map((t) => (
              <li key={t.id}>
                <span
                  className={`ev-state tone-${
                    t.status === 'approved' ? 'good' : t.status === 'claimed' ? 'warning' : 'muted'
                  }`}
                >
                  {t.status === 'approved' ? '✓' : t.status === 'claimed' ? '!' : '○'}
                </span>
                <span className="ev-body">
                  <strong>{t.title}</strong>
                  <em>
                    +{t.minutes} min · {t.cadence}
                    {t.status === 'claimed' ? ' · waiting for your approval' : ''}
                  </em>
                </span>
                {t.status === 'claimed' && (
                  <button
                    className="btn btn-sm"
                    disabled={readOnly}
                    title={readOnly ? 'Approve in the KidGate app' : undefined}
                  >
                    Approve
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
