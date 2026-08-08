import { useEffect, useRef, useState } from 'react'
import { getLocaleTag, t } from '../i18n/index.js'
import { useT } from '../i18n/useT.js'

/** Actual pixel width of a container, so SVG text renders at its real size. */
export function useMeasure() {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width)
    })
    ro.observe(el)
    setWidth(el.getBoundingClientRect().width)
    return () => ro.disconnect()
  }, [])

  return [ref, width]
}

/**
 * Reads the module-level `t` rather than the hook: it is a plain formatter
 * called from render bodies and `useMemo`, and every caller already re-renders
 * on a language change through the `useT()` above it.
 */
export function formatMinutes(min) {
  if (min == null) return t('viz.none')
  const h = Math.floor(min / 60)
  const m = Math.round(min % 60)
  if (h === 0) return t('viz.minutes', { count: m })
  if (m === 0) return t('viz.hours', { count: h })
  return t('viz.hoursMinutes', { hours: h, minutes: m })
}

function Tooltip({ x, y, children }) {
  return (
    <div className="viz-tip" style={{ left: x, top: y }}>
      {children}
    </div>
  )
}

/* ---------------------------------------------------------------- *
 * Screen time over time — stacked bars (screen time + bonus),
 * dashed reference line for the daily limit.
 * ---------------------------------------------------------------- */

export function UsageBars({ data, limit, days = 14 }) {
  const [ref, width] = useMeasure()
  const [hover, setHover] = useState(null)
  const { t: tr } = useT()

  const rows = data.slice(-days)
  const height = 240
  // Narrow cards cannot spare a label gutter; there the legend's dashed swatch
  // carries the limit on its own.
  const narrow = width < 520
  const showLimitLabel = limit != null && !narrow
  const pad = { top: 18, right: showLimitLabel ? 74 : 12, bottom: 30, left: 40 }
  const plotW = Math.max(0, width - pad.left - pad.right)
  const plotH = height - pad.top - pad.bottom

  const maxVal = Math.max(
    limit ?? 0,
    ...rows.map((r) => r.minutes + r.bonusMinutes),
  )
  const top = Math.ceil((maxVal * 1.12) / 60) * 60 || 60
  const yFor = (v) => pad.top + plotH - (v / top) * plotH

  const step = plotW / rows.length
  const barW = Math.max(4, Math.min(26, step * 0.62))

  const ticks = []
  for (let v = 0; v <= top; v += top <= 180 ? 60 : 120) ticks.push(v)

  const hasBonus = rows.some((r) => r.bonusMinutes > 0)
  const hasOver =
    limit != null && rows.some((r) => r.minutes + r.bonusMinutes > limit)

  return (
    <div className="viz" ref={ref}>
      {width > 0 && (
        <svg width={width} height={height} role="img" aria-label={tr('viz.byDay')}>
          {ticks.map((v) => (
            <g key={v}>
              <line
                x1={pad.left}
                x2={width - pad.right}
                y1={yFor(v)}
                y2={yFor(v)}
                className="viz-grid"
              />
              <text x={pad.left - 8} y={yFor(v) + 4} className="viz-axis" textAnchor="end">
                {v === 0 ? '0' : tr('viz.hours', { count: v / 60 })}
              </text>
            </g>
          ))}

          {limit != null && (
            <g>
              <line
                x1={pad.left}
                x2={width - pad.right}
                y1={yFor(limit)}
                y2={yFor(limit)}
                className="viz-limit"
              />
              {showLimitLabel && (
                <text
                  x={width - pad.right + 8}
                  y={yFor(limit)}
                  className="viz-limit-label"
                  textAnchor="start"
                  dominantBaseline="middle"
                >
                  {tr('viz.limit', { value: formatMinutes(limit) })}
                </text>
              )}
            </g>
          )}

          {rows.map((r, i) => {
            const cx = pad.left + step * i + step / 2
            const x = cx - barW / 2
            const total = r.minutes + r.bonusMinutes
            const baseTop = yFor(r.minutes)
            const baseH = Math.max(2, pad.top + plotH - baseTop)
            const bonusH = r.bonusMinutes ? Math.max(2, (r.bonusMinutes / top) * plotH) : 0
            // 2px surface gap keeps the two segments from reading as one bar.
            const bonusTop = baseTop - bonusH - (bonusH ? 2 : 0)
            const over = limit != null && total > limit
            const isHover = hover?.i === i

            return (
              <g
                key={r.date}
                onMouseEnter={() =>
                  setHover({ i, x: cx, y: bonusH ? bonusTop : baseTop, row: r, total, over })
                }
                onMouseLeave={() => setHover(null)}
              >
                <rect
                  x={cx - step / 2}
                  y={pad.top}
                  width={step}
                  height={plotH}
                  fill="transparent"
                />
                <rect
                  x={x}
                  y={baseTop}
                  width={barW}
                  height={baseH}
                  rx="4"
                  className={`viz-bar${over ? ' is-over' : ''}${isHover ? ' is-hover' : ''}`}
                />
                {bonusH > 0 && (
                  <rect
                    x={x}
                    y={bonusTop}
                    width={barW}
                    height={bonusH}
                    rx="4"
                    className={`viz-bar-bonus${isHover ? ' is-hover' : ''}`}
                  />
                )}
              </g>
            )
          })}

          <line
            x1={pad.left}
            x2={width - pad.right}
            y1={pad.top + plotH}
            y2={pad.top + plotH}
            className="viz-baseline"
          />

          {rows.map((r, i) => {
            // Counted back from the newest day, so the last label is always
            // shown and never lands next to its neighbour.
            const showEvery = rows.length > 20 ? 5 : 2
            if ((rows.length - 1 - i) % showEvery !== 0) return null
            const d = new Date(r.date)
            return (
              <text
                key={r.date}
                x={pad.left + step * i + step / 2}
                y={height - 10}
                className="viz-axis"
                textAnchor="middle"
              >
                {d.toLocaleDateString(getLocaleTag(), {
                  day: 'numeric',
                  month: 'numeric',
                })}
              </text>
            )
          })}
        </svg>
      )}

      {hover && (
        <Tooltip x={Math.min(Math.max(hover.x, 82), width - 82)} y={hover.y}>
          <strong>
            {new Date(hover.row.date).toLocaleDateString(getLocaleTag(), {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
            })}
          </strong>
          <span>
            <i className="dot dot-1" /> {tr('viz.screenTime')}{' '}
            {formatMinutes(hover.row.minutes)}
          </span>
          {hover.row.bonusMinutes > 0 && (
            <span>
              <i className="dot dot-2" /> {tr('viz.bonus')}{' '}
              {formatMinutes(hover.row.bonusMinutes)}
            </span>
          )}
          {hover.over && <span className="tip-warn">{tr('viz.overLimit')}</span>}
        </Tooltip>
      )}

      <div className="viz-legend">
        <span>
          <i className="dot dot-1" /> {tr('viz.screenTime')}
        </span>
        {hasBonus && (
          <span>
            <i className="dot dot-2" /> {tr('viz.bonusEarned')}
          </span>
        )}
        {hasOver && (
          <span>
            <i className="dot dot-over" /> ⚠ {tr('viz.overLimit')}
          </span>
        )}
        {limit != null && (
          <span>
            <i className="dashline" /> {tr('viz.dailyLimit')}
          </span>
        )}
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- *
 * Today's usage — a single hero figure in a progress ring.
 * ---------------------------------------------------------------- */

export function UsageRing({ used, limit, bonus = 0, size = 168 }) {
  const { t: tr } = useT()
  const stroke = 13
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const effectiveLimit = limit ? limit + bonus : null
  const pct = effectiveLimit ? Math.min(1, used / effectiveLimit) : 0
  const over = effectiveLimit != null && used >= effectiveLimit

  return (
    <div className="ring" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={r} className="ring-track" strokeWidth={stroke} />
        {effectiveLimit && (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            className={`ring-value${over ? ' is-over' : ''}`}
            strokeWidth={stroke}
            strokeDasharray={`${c * pct} ${c}`}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        )}
      </svg>
      <div className="ring-center">
        <strong>{formatMinutes(used)}</strong>
        <span>
          {effectiveLimit
            ? tr('viz.ofLimit', { value: formatMinutes(effectiveLimit) })
            : tr('viz.noLimit')}
        </span>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- *
 * Per-app time — horizontal bars, with the app's own cap marked.
 * ---------------------------------------------------------------- */

export function AppBars({ apps, limits = [] }) {
  const { t: tr } = useT()
  const max = Math.max(...apps.map((a) => a.minutes), ...limits.map((l) => l.minutes), 1)

  return (
    <ul className="hbars">
      {apps.map((a) => {
        const cap = limits.find((l) => l.id === a.packageName)
        const over = cap && a.minutes > cap.minutes
        return (
          <li key={a.packageName}>
            <div className="hbar-head">
              <span className="hbar-label">{a.label}</span>
              <span className={`hbar-value${over ? ' is-over' : ''}`}>
                {formatMinutes(a.minutes)}
                {cap && <em> / {formatMinutes(cap.minutes)}</em>}
              </span>
            </div>
            <div className="hbar-track">
              <div
                className={`hbar-fill${over ? ' is-over' : ''}`}
                style={{ width: `${(a.minutes / max) * 100}%` }}
              />
              {cap && (
                <span
                  className="hbar-cap"
                  style={{ left: `${(cap.minutes / max) * 100}%` }}
                  title={tr('viz.limit', { value: formatMinutes(cap.minutes) })}
                />
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

/* ---------------------------------------------------------------- *
 * Blocked Hours — a week × 24h grid. Reading three overlapping time
 * ranges as text is the thing parents get wrong, so it is drawn.
 * ---------------------------------------------------------------- */

const DAY_INDEXES = [0, 1, 2, 3, 4, 5, 6]
const WINDOW_CLASS = ['win-1', 'win-2', 'win-3']

function toMinutes(hhmm) {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

export function ScheduleGrid({ windows }) {
  const [hover, setHover] = useState(null)
  const { t: tr } = useT()

  // An overnight window spills into the next day; both halves are drawn so a
  // parent sees the block that actually lands on Tuesday morning.
  const segments = []
  windows.forEach((w, wi) => {
    const start = toMinutes(w.start)
    const end = toMinutes(w.end)
    const days = w.days?.length ? w.days : [0, 1, 2, 3, 4, 5, 6]
    days.forEach((d) => {
      if (end > start) {
        segments.push({ day: d, from: start, to: end, w, wi })
      } else {
        segments.push({ day: d, from: start, to: 1440, w, wi })
        segments.push({ day: (d + 1) % 7, from: 0, to: end, w, wi })
      }
    })
  })

  return (
    <div className="sched">
      <div className="sched-hours">
        {[0, 6, 12, 18, 24].map((h) => (
          <span key={h} style={{ left: `${(h / 24) * 100}%` }}>
            {tr('viz.hours', { count: h })}
          </span>
        ))}
      </div>
      {DAY_INDEXES.map((d) => (
        <div className="sched-row" key={d}>
          <span className="sched-day">{tr(`viz.day${d}`)}</span>
          <div className="sched-track">
            {[6, 12, 18].map((h) => (
              <i key={h} className="sched-tick" style={{ left: `${(h / 24) * 100}%` }} />
            ))}
            {segments
              .filter((s) => s.day === d)
              .map((s, i) => (
                <div
                  key={i}
                  className={`sched-block ${WINDOW_CLASS[s.wi % 3]}`}
                  style={{
                    left: `${(s.from / 1440) * 100}%`,
                    width: `${((s.to - s.from) / 1440) * 100}%`,
                  }}
                  onMouseEnter={() => setHover(s)}
                  onMouseLeave={() => setHover(null)}
                />
              ))}
          </div>
        </div>
      ))}
      <div className="viz-legend">
        {windows.map((w, i) => (
          <span key={i}>
            <i className={`dot ${WINDOW_CLASS[i % 3]}-dot`} />
            {w.label || tr('viz.blocked')} · {w.start}–{w.end}
          </span>
        ))}
      </div>
      {hover && (
        <div className="sched-hint">
          {hover.w.label || tr('viz.blockedHours')} · {hover.w.start}–{hover.w.end}
        </div>
      )}
    </div>
  )
}
