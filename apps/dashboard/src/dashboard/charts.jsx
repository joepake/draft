import { useEffect, useRef, useState } from 'react';
import { getLocaleTag, t } from '@kidgate/i18n/web';
import { useT } from '@kidgate/web-ui/useT';
import {
  timelineAvailability,
  timelineMinutesUnmeasured,
  timelineRuns,
} from '@kidgate/core/domain/usageTimeline';

/** Actual pixel width of a container, so SVG text renders at its real size. */
export function useMeasure() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(entries => {
      setWidth(entries[0].contentRect.width);
    });
    ro.observe(el);
    setWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  return [ref, width];
}

/**
 * Reads the module-level `t` rather than the hook: it is a plain formatter
 * called from render bodies and `useMemo`, and every caller already re-renders
 * on a language change through the `useT()` above it.
 */
export function formatMinutes(min) {
  if (min == null) return t('viz.none');
  const h = Math.floor(min / 60);
  const m = Math.round(min % 60);
  if (h === 0) return t('viz.minutes', { count: m });
  if (m === 0) return t('viz.hours', { count: h });
  return t('viz.hoursMinutes', { hours: h, minutes: m });
}

function Tooltip({ x, y, children }) {
  return (
    <div className="viz-tip" style={{ left: x, top: y }}>
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * Screen time over time — stacked bars (screen time + bonus),
 * dashed reference line for the daily limit.
 * ---------------------------------------------------------------- */

export function UsageBars({ data, limit, days = 14 }) {
  const [ref, width] = useMeasure();
  const [hover, setHover] = useState(null);
  const { t: tr } = useT();

  const rows = data.slice(-days);
  const height = 240;
  // Narrow cards cannot spare a label gutter; there the legend's dashed swatch
  // carries the limit on its own.
  const narrow = width < 520;
  const showLimitLabel = limit != null && !narrow;
  const pad = { top: 18, right: showLimitLabel ? 74 : 12, bottom: 30, left: 40 };
  const plotW = Math.max(0, width - pad.left - pad.right);
  const plotH = height - pad.top - pad.bottom;

  const maxVal = Math.max(limit ?? 0, ...rows.map(r => r.minutes + r.bonusMinutes));
  const top = Math.ceil((maxVal * 1.12) / 60) * 60 || 60;
  const yFor = v => pad.top + plotH - (v / top) * plotH;

  const step = plotW / rows.length;
  const barW = Math.max(4, Math.min(26, step * 0.62));

  const ticks = [];
  for (let v = 0; v <= top; v += top <= 180 ? 60 : 120) ticks.push(v);

  const hasBonus = rows.some(r => r.bonusMinutes > 0);
  const hasOver = limit != null && rows.some(r => r.minutes + r.bonusMinutes > limit);

  return (
    <div className="viz" ref={ref}>
      {width > 0 && (
        <svg width={width} height={height} role="img" aria-label={tr('viz.byDay')}>
          {ticks.map(v => (
            <g key={v}>
              <line
                x1={pad.left}
                x2={width - pad.right}
                y1={yFor(v)}
                y2={yFor(v)}
                className="viz-grid"
              />
              <text
                x={pad.left - 8}
                y={yFor(v) + 4}
                className="viz-axis"
                textAnchor="end"
              >
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
            const cx = pad.left + step * i + step / 2;
            const x = cx - barW / 2;
            const total = r.minutes + r.bonusMinutes;
            const baseTop = yFor(r.minutes);
            const baseH = Math.max(2, pad.top + plotH - baseTop);
            const bonusH = r.bonusMinutes
              ? Math.max(2, (r.bonusMinutes / top) * plotH)
              : 0;
            // 2px surface gap keeps the two segments from reading as one bar.
            const bonusTop = baseTop - bonusH - (bonusH ? 2 : 0);
            const over = limit != null && total > limit;
            const isHover = hover?.i === i;

            return (
              <g
                key={r.date}
                onMouseEnter={() =>
                  setHover({
                    i,
                    x: cx,
                    y: bonusH ? bonusTop : baseTop,
                    row: r,
                    total,
                    over,
                  })
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
            );
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
            const showEvery = rows.length > 20 ? 5 : 2;
            if ((rows.length - 1 - i) % showEvery !== 0) return null;
            const d = new Date(r.date);
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
            );
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
  );
}

/* ---------------------------------------------------------------- *
 * Today's usage — a single hero figure in a progress ring.
 * ---------------------------------------------------------------- */

export function UsageRing({ used, limit, bonus = 0, size = 168 }) {
  const { t: tr } = useT();
  const stroke = 13;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const effectiveLimit = limit ? limit + bonus : null;
  const pct = effectiveLimit ? Math.min(1, used / effectiveLimit) : 0;
  const over = effectiveLimit != null && used >= effectiveLimit;

  return (
    <div className="ring" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          className="ring-track"
          strokeWidth={stroke}
        />
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
  );
}

/* ---------------------------------------------------------------- *
 * Per-app time — horizontal bars, with the app's own cap marked.
 * ---------------------------------------------------------------- */

/*
 * `apps` defaults rather than being required: the breakdown comes from a
 * `usageDays` row that does not exist until the child device has reported a
 * day, and a chart that throws takes the whole dashboard down with it — React
 * unmounts the tree and the parent gets a white page, not a missing card.
 */
export function AppBars({ apps = [], limits = [] }) {
  const { t: tr } = useT();
  const max = Math.max(...apps.map(a => a.minutes), ...limits.map(l => l.minutes), 1);

  if (apps.length === 0) {
    return <p className="empty">{tr('dash.appUsageEmpty')}</p>;
  }

  return (
    <ul className="hbars">
      {apps.map(a => {
        const cap = limits.find(l => l.id === a.packageName);
        const over = cap && a.minutes > cap.minutes;
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
        );
      })}
    </ul>
  );
}

/* ---------------------------------------------------------------- *
 * When the day was used — one 24h band, midnight to midnight.
 *
 * The band answers a question the daily total cannot, and the third
 * colour is the reason it is worth drawing at all: a total of "28
 * minutes" is the same number whether the child used the laptop for
 * half an hour or whether the agent was dead for most of the day, and
 * a parent has no way to tell those apart. Hatched means nobody was
 * watching. See `usageTimeline.ts`.
 * ---------------------------------------------------------------- */

const TIMELINE_TICKS = [0, 6, 12, 18, 24];
const TIMELINE_CLASS = { used: 'tl-used', idle: 'tl-idle', unknown: 'tl-unknown' };

/** `540` → `09:00`. The band's own labels, not a date format. */
function clockAt(minute) {
  const h = Math.floor(minute / 60) % 24;
  const m = minute % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

export function UsageDayTimeline({ day, platform, capability }) {
  const { t: tr } = useT();
  const availability = timelineAvailability({
    platform,
    capability,
    timeline: day?.timeline,
  });

  /*
   * Two different sentences for two different silences, and neither is a band.
   * An iPhone that cannot report one must not render as a day the child spent
   * off their phone — that is the failure this whole component exists to stop,
   * pointed the other way.
   */
  if (availability !== 'available') {
    return (
      <p className="tl-empty">
        {availability === 'unsupported'
          ? tr('viz.timelineUnsupported')
          : tr('viz.timelinePending')}
      </p>
    );
  }

  const runs = timelineRuns(day.timeline);
  const unmeasured = timelineMinutesUnmeasured(day.timeline);
  const hasIdle = runs.some(run => run.state === 'idle');

  return (
    <div className="tl">
      <div className="tl-hours">
        {TIMELINE_TICKS.map(h => (
          <span key={h} style={{ left: `${(h / 24) * 100}%` }}>
            {tr('viz.hours', { count: h })}
          </span>
        ))}
      </div>

      <div className="tl-track">
        {[6, 12, 18].map(h => (
          <i key={h} className="tl-tick" style={{ left: `${(h / 24) * 100}%` }} />
        ))}
        {runs.map(run => {
          const minutes = run.endMinute - run.startMinute + 1;
          return (
            <div
              key={run.startMinute}
              className={`tl-run ${TIMELINE_CLASS[run.state]}`}
              style={{
                left: `${(run.startMinute / 1440) * 100}%`,
                width: `${(minutes / 1440) * 100}%`,
              }}
              /*
               * A native title rather than a hover state with its own tooltip
               * node: a day is a few dozen runs and several of them are a
               * single minute wide, which is a target no pointer can hold.
               * The legend carries the meaning; this carries the detail.
               */
              title={`${clockAt(run.startMinute)}–${clockAt(run.endMinute + 1)} · ${tr(
                `viz.timeline${run.state === 'unknown' ? 'Unmeasured' : run.state === 'used' ? 'Used' : 'Idle'}`,
              )}`}
            />
          );
        })}
      </div>

      {/* Colour names only, as on the phone. Each carried its own duration
          next to a card whose total for the same day was smaller, because the
          two are counted differently on purpose — the total sums attributed
          seconds, the band marks every minute any part of which was used
          (`usageSnapshot` in `@kidgate/core/domain/foregroundUsage`). Two
          totals for one day teach a parent that the screen cannot count. This
          band answers *when*; the card answers *how much*. */}
      <div className="viz-legend">
        <span>
          <i className="dot tl-used-dot" />
          {tr('viz.timelineUsed')}
        </span>
        {/* A platform that builds the band from OS sessions (Android TV) never
            marks idle — every non-used minute stays unmeasured. A legend entry
            for a state the band cannot contain reads as data that failed to
            arrive, so each caveat state appears only on a day that has it. */}
        {hasIdle && (
          <span>
            <i className="dot tl-idle-dot" />
            {tr('viz.timelineIdle')}
          </span>
        )}
        {unmeasured > 0 && (
          <span title={tr('viz.timelineUnmeasuredHint')}>
            <i className="dot tl-unknown-dot" />
            {tr('viz.timelineUnmeasured')}
          </span>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * Blocked Hours — a week × 24h grid. Reading three overlapping time
 * ranges as text is the thing parents get wrong, so it is drawn.
 * ---------------------------------------------------------------- */

const DAY_INDEXES = [0, 1, 2, 3, 4, 5, 6];
const WINDOW_CLASS = ['win-1', 'win-2', 'win-3'];

function toMinutes(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

export function ScheduleGrid({ windows }) {
  const [hover, setHover] = useState(null);
  const { t: tr } = useT();

  // An overnight window spills into the next day; both halves are drawn so a
  // parent sees the block that actually lands on Tuesday morning.
  const segments = [];
  windows.forEach((w, wi) => {
    const start = toMinutes(w.start);
    const end = toMinutes(w.end);
    const days = w.days?.length ? w.days : [0, 1, 2, 3, 4, 5, 6];
    days.forEach(d => {
      if (end > start) {
        segments.push({ day: d, from: start, to: end, w, wi });
      } else {
        segments.push({ day: d, from: start, to: 1440, w, wi });
        segments.push({ day: (d + 1) % 7, from: 0, to: end, w, wi });
      }
    });
  });

  return (
    <div className="sched">
      <div className="sched-hours">
        {[0, 6, 12, 18, 24].map(h => (
          <span key={h} style={{ left: `${(h / 24) * 100}%` }}>
            {tr('viz.hours', { count: h })}
          </span>
        ))}
      </div>
      {DAY_INDEXES.map(d => (
        <div className="sched-row" key={d}>
          <span className="sched-day">{tr(`viz.day${d}`)}</span>
          <div className="sched-track">
            {[6, 12, 18].map(h => (
              <i
                key={h}
                className="sched-tick"
                style={{ left: `${(h / 24) * 100}%` }}
              />
            ))}
            {segments
              .filter(s => s.day === d)
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
  );
}
