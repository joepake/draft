import { useMemo, useState } from 'react';
import BarChart from './BarChart.jsx';
import Sparkline from './Sparkline.jsx';
import { dateKey, useRollup } from './useRollup.js';

/**
 * The daily rollup, read back.
 *
 * ## Why this is rows-with-sparklines rather than a wide table
 *
 * The first version was the raw grid — sixteen metric columns by N day rows,
 * scrolling sideways. It is complete and nearly unreadable: the operator's
 * actual question is "did anything move, and is anything wrong", and answering
 * it meant scanning horizontally across a scroll boundary. Sixteen **rows**,
 * each with its own trend line, answers it without scrolling at all. The raw
 * grid is still here, one disclosure below, because a number you want to read
 * exactly should not be trapped in a chart.
 *
 * ## Three rules, each with a reason in `docs/ADMIN_REPORTING.md`
 *
 * - **It does not poll.** Every load writes one `operatorAuditLog` row, and a
 *   30-second refresh would bury the one real family read under ~2,880 rows a
 *   day, defeating the log's only job.
 * - **One request for the whole page.** Cold start plus token refresh plus
 *   revocation check plus audit write is paid once, not per chart.
 * - **A missing day and a quiet day are drawn differently** — `—` in the
 *   table, a break in the sparkline, never a `0` and never a line drawn
 *   straight through the gap. Reading a gap as a zero is the failure this
 *   whole surface exists to catch.
 */

const RANGES = [7, 30, 90];

/**
 * Per-day metrics, one row each.
 *
 * `note` is not decoration. Four of these measure a narrower population than
 * their names suggest, and an operator reading `Screen minutes: 0` as "nobody
 * used their phone" would be drawing the wrong conclusion from a correct
 * number — the marker and the footnote are what stop that. `true` means the
 * premium-only footnote; a string is its own marker.
 */
const DAY_METRICS = [
  { key: 'newFamilies', label: 'New families' },
  { key: 'conversions', label: 'First purchases', note: '‡' },
  { key: 'activities', label: 'Activities, all types' },
  { key: 'tamper', label: 'Tamper', from: 'activityTypes' },
  { key: 'app_blocked', label: 'App blocked', from: 'activityTypes' },
  { key: 'message_alert', label: 'Message alerts', from: 'activityTypes' },
  { key: 'message_checked', label: 'Message cleared by AI', from: 'activityTypes' },
  { key: 'emergency', label: 'Emergency', from: 'activityTypes' },
  { key: 'sosAlerts', label: 'SOS alerts' },
  { key: 'safetyCheckIns', label: 'Safety check-ins' },
  { key: 'timeRequests', label: 'Time requests' },
  { key: 'siteRequests', label: 'Site requests' },
  { key: 'rewardTasksResolved', label: 'Reward tasks resolved' },
  { key: 'reportingDeviceDays', label: 'Reporting device-days', note: true },
  { key: 'screenMinutes', label: 'Screen minutes', note: true },
  { key: 'bonusMinutes', label: 'Bonus minutes', note: true },
  { key: 'webVisits', label: 'Web visits' },
  { key: 'webBlockedVisits', label: 'Web visits blocked' },
];

/**
 * How big the product is, right now. Point-in-time, read off the newest row
 * rather than summed — and each carries its own trend, which is why these are
 * tiles and the plan mix below is not.
 */
const SCALE_TILES = [
  { key: 'families', label: 'Families' },
  { key: 'childDevices', label: 'Child devices' },
  { key: 'parentDevices', label: 'Parent devices' },
];

/**
 * The plan split. Three counts that sum to Families, plus one that does not.
 *
 * `familiesTrialWindow` overlaps the others — trial is `trialStartedAt` still
 * inside the trial length, not a `planId` — so it sits below a divider rather
 * than beside them, and nothing here is ever drawn as one stacked bar.
 */
const PLAN_ROWS = [
  { key: 'familiesPlanPremium', label: 'Premium' },
  { key: 'familiesPlanFree', label: 'Free' },
  { key: 'familiesPlanMissing', label: 'Plan missing', note: true },
];

/**
 * The conversion histogram's buckets, in time order rather than by size.
 *
 * The keys and their edges are `CONVERSION_BUCKETS` in
 * `functions/lib/conversionStats.js`; the labels are here because they are
 * prose for one operator, not data. Order is the whole point — a distribution
 * sorted by height is not a curve.
 */
const CONVERSION_BUCKETS = [
  'd0',
  'd1',
  'd2_3',
  'd4_7',
  'd8_14',
  'd15_30',
  'd31_60',
  'd61_plus',
];

const CONVERSION_LABELS = {
  d0: 'Same day',
  d1: 'Next day',
  d2_3: '2–3 days',
  d4_7: '4–7 days',
  d8_14: '8–14 days',
  d15_30: '15–30 days',
  d31_60: '31–60 days',
  d61_plus: '61+ days',
};

/** `null` reads as "not measurable", never as zero days. */
function dayCount(value) {
  return Number.isFinite(value) ? `${value}d` : '—';
}

function valueOf(row, metric) {
  if (!row) {
    return null;
  }
  const value = metric.from ? row[metric.from]?.[metric.key] : row[metric.key];
  return Number.isFinite(value) ? value : null;
}

function format(value) {
  return Number.isFinite(value) ? value.toLocaleString() : '—';
}

/**
 * How healthy is the pipeline? The one question this page has to answer before
 * any number on it can be trusted.
 *
 * A row for yesterday means last night's job ran. Two or more days without one
 * means it is not running, and every metric below is stale rather than quiet —
 * which looks identical unless something says so.
 */
function health(rows) {
  const newest = rows.find(entry => entry.row);
  if (!newest) {
    return {
      tone: 'critical',
      label: 'No data',
      detail:
        'No rollup rows in this range. Deploy operatorMetricsDaily, or run scripts/run-operator-metrics.js --write.',
    };
  }
  const ageDays = Math.round(
    (Date.parse(`${dateKey(0)}T00:00:00.000Z`) -
      Date.parse(`${newest.date}T00:00:00.000Z`)) /
      86400000,
  );
  if (ageDays <= 1) {
    return {
      tone: 'good',
      label: 'Rollup healthy',
      detail: `Latest row ${newest.date}, written ${newest.row.writtenAt?.slice(0, 16).replace('T', ' ') ?? 'unknown'}.`,
    };
  }
  return {
    tone: ageDays >= 3 ? 'critical' : 'warning',
    label: `Rollup ${ageDays} days behind`,
    detail: `Latest row ${newest.date}. The nightly job has not written since — every number below is stale, not quiet.`,
  };
}

export default function Report() {
  const [days, setDays] = useState(30);
  const [showRaw, setShowRaw] = useState(false);
  // Shared with the Fleet page through `useRollup`, so moving between the two
  // costs no request and writes no extra audit row.
  const { data, error, busy, load } = useRollup(days);

  /**
   * Every date in the requested range, oldest first, whether or not the job
   * wrote it. This is what makes a gap visible in both the chart and the table.
   */
  const rows = useMemo(() => {
    if (!data) {
      return [];
    }
    const byDate = new Map((data.days ?? []).map(row => [row.date, row]));
    const out = [];
    for (const date of eachDate(data.from, data.to)) {
      out.push({ date, row: byDate.get(date) ?? null });
    }
    return out;
  }, [data]);

  const newestFirst = useMemo(() => [...rows].reverse(), [rows]);
  const status = useMemo(() => health(newestFirst), [newestFirst]);
  const latest = newestFirst.find(entry => entry.row)?.row ?? null;
  const missing = rows.filter(entry => !entry.row).length;

  return (
    <>
      <div className="section-head">
        <h2 className="section-title">Report</h2>
        <div style={{ alignItems: 'center', display: 'flex', gap: 8 }}>
          <div className="segmented">
            {RANGES.map(range => (
              <button
                key={range}
                className={range === days ? 'is-active' : undefined}
                onClick={() => setDays(range)}
              >
                {range}d
              </button>
            ))}
          </div>
          <button className="btn btn-ghost" disabled={busy} onClick={() => load(days)}>
            {busy ? 'Loading…' : 'Refresh'}
          </button>
        </div>
      </div>

      {error ? (
        <div className="error-banner" style={{ marginBottom: 20 }}>
          <span>{error}</span>
        </div>
      ) : null}

      {!data && !error ? <p className="muted">Loading…</p> : null}

      {data ? (
        <>
          <div className="status-strip">
            <span className={`status-dot is-${status.tone}`} />
            <span className="status-label">{status.label}</span>
            <span className="status-detail">{status.detail}</span>
            {missing > 0 ? (
              <span className="status-detail" style={{ marginLeft: 'auto' }}>
                {missing} of {rows.length} days have no row
              </span>
            ) : null}
          </div>

          {latest ? (
            <div className="report-top">
              <div className="tile-grid">
                {SCALE_TILES.map(tile => (
                  <div key={tile.key} className="tile">
                    <div className="tile-label">{tile.label}</div>
                    <div className="tile-value">{format(latest[tile.key])}</div>
                    <div className="tile-spark">
                      <Sparkline values={rows.map(entry => valueOf(entry.row, tile))} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="plan-card">
                <div className="tile-label">Plan mix</div>
                {PLAN_ROWS.map(row => (
                  <div key={row.key} className="plan-row">
                    <span className="plan-name">
                      {row.label}
                      {row.note ? <sup className="mark">†</sup> : null}
                    </span>
                    <span className="plan-value">{format(latest[row.key])}</span>
                  </div>
                ))}
                <div className="plan-divider" />
                <div className="plan-row">
                  <span className="plan-name">
                    In trial<sup className="mark">†</sup>
                  </span>
                  <span className="plan-value">
                    {format(latest.familiesTrialWindow)}
                  </span>
                </div>
              </div>
            </div>
          ) : null}

          {latest?.conversion ? (
            <>
              <div className="section-head">
                <h2 className="section-title">Time to purchase</h2>
                <span className="muted">
                  Every family that has ever paid, as of {latest.date} — not a range
                </span>
              </div>

              <div className="tile-grid" style={{ marginBottom: 12 }}>
                <div className="tile">
                  <div className="tile-label">Families ever paid</div>
                  <div className="tile-value">{format(latest.conversion.families)}</div>
                </div>
                <div className="tile">
                  <div className="tile-label">Median, signup → paid</div>
                  <div className="tile-value">
                    {dayCount(latest.conversion.fromSignup?.medianDays)}
                  </div>
                </div>
                <div className="tile">
                  <div className="tile-label">Median, trial → paid</div>
                  <div className="tile-value">
                    {dayCount(latest.conversion.fromTrial?.medianDays)}
                  </div>
                </div>
                <div className="tile">
                  <div className="tile-label">Conversion of all families</div>
                  <div className="tile-value">
                    {Number.isFinite(latest.families) && latest.families > 0
                      ? `${Math.round((latest.conversion.families / latest.families) * 100)}%`
                      : '—'}
                  </div>
                </div>
              </div>

              {latest.conversion.families > 0 && latest.conversion.families < 5 ? (
                <div className="status-strip" style={{ marginBottom: 12 }}>
                  <span className="status-dot is-warning" />
                  <span className="status-label">
                    {latest.conversion.families} paying{' '}
                    {latest.conversion.families === 1 ? 'family' : 'families'}
                  </span>
                  <span className="status-detail">
                    A median over this few is one family&rsquo;s purchase, not a trend.
                    Read the bars as anecdotes until the count reaches double figures.
                  </span>
                </div>
              ) : null}

              <div className="chart-grid">
                {[
                  {
                    key: 'fromSignup',
                    title: 'From signup',
                    sub: 'Days between the account being created and its first payment',
                    unknown:
                      'no createdAt on the family — a signup that predates the field',
                  },
                  {
                    key: 'fromTrial',
                    title: 'From trial start',
                    sub: 'Days between the first parent + child device pairing and the first payment',
                    unknown:
                      'never started a trial clock, or paired before the field existed',
                  },
                ].map(cut => {
                  const stats = latest.conversion[cut.key] ?? {};
                  return (
                    <div key={cut.key} className="chart-card">
                      <h3 className="chart-title">{cut.title}</h3>
                      <p className="chart-sub">{cut.sub}</p>
                      <BarChart
                        data={stats.buckets}
                        order={CONVERSION_BUCKETS}
                        labels={CONVERSION_LABELS}
                        total={stats.families}
                        emptyLabel="No family has converted with this measurable yet."
                      />
                      <p className="chart-sub" style={{ marginTop: 10 }}>
                        n = {format(stats.families)} · mean {dayCount(stats.meanDays)} ·
                        p25 {dayCount(stats.p25Days)} · p75 {dayCount(stats.p75Days)}
                        {stats.unknown > 0
                          ? ` · ${stats.unknown} not measurable (${cut.unknown})`
                          : ''}
                        {stats.invalid > 0
                          ? ` · ${stats.invalid} dated before the start — clock skew or a wrong backfill guess`
                          : ''}
                      </p>
                    </div>
                  );
                })}
              </div>
            </>
          ) : null}

          <div className="section-head">
            <h2 className="section-title">Daily activity</h2>
          </div>

          <div className="metric-list">
            <div className="metric-head">
              <span>Metric</span>
              <span>Latest</span>
              <span>Last {days} days</span>
              <span>Total</span>
            </div>
            {DAY_METRICS.map(metric => {
              const series = rows.map(entry => valueOf(entry.row, metric));
              const real = series.filter(Number.isFinite);
              const total = real.reduce((sum, value) => sum + value, 0);
              return (
                <div key={metric.key} className="metric-row">
                  <span className="metric-name">
                    {metric.label}
                    {metric.note ? (
                      <sup className="mark">
                        {metric.note === true ? '*' : metric.note}
                      </sup>
                    ) : null}
                  </span>
                  <span className="metric-num">{format(valueOf(latest, metric))}</span>
                  <Sparkline values={series} />
                  <span className="metric-num is-total">
                    {real.length > 0 ? total.toLocaleString() : '—'}
                  </span>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 14 }}>
            <button className="disclosure" onClick={() => setShowRaw(value => !value)}>
              {showRaw ? '▾ Hide raw daily values' : '▸ Show raw daily values'}
            </button>
          </div>

          {showRaw ? (
            <div className="table-scroll" style={{ marginTop: 12 }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    {DAY_METRICS.map(metric => (
                      <th key={metric.key}>{metric.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {newestFirst.map(entry => (
                    <tr key={entry.date} className={entry.row ? undefined : 'is-gap'}>
                      <td>{entry.date}</td>
                      {DAY_METRICS.map(metric => (
                        <td key={metric.key}>{format(valueOf(entry.row, metric))}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}

          <div className="footnotes">
            <p>
              <b>*</b> Premium only. <code>packageActivity.js</code> writes a{' '}
              <code>usageDays</code> document only for a family with premium access, so
              devices belonging to free families are absent from these three rows while
              being perfectly active. Read them as usage{' '}
              <i>among families entitled to usage reporting</i>, never as a
              device-active count.
            </p>
            <p>
              <b>†</b> <b>In trial</b> overlaps the plan counts rather than adding to
              them — trial is not a <code>planId</code>, it is{' '}
              <code>trialStartedAt</code> still inside the trial length, and a family in
              one usually carries <code>planId: free</code>. <b>Plan missing</b> should
              stay at zero; a number that climbs is a signup path that stopped writing
              the field.
            </p>
            <p>
              <b>‡</b> <b>First purchases</b> counts families paying for the{' '}
              <i>first time ever</i>, from <code>firstPurchasedAt</code>, which is
              written once and never rewritten. A renewal, a restore and a re-subscribe
              after a lapse are all invisible here — deliberately, since this is the
              number the <b>Time to purchase</b> section is built on. Families that
              converted before the field shipped (2026-09-05) count only if the backfill
              could date them.
            </p>
            <p>
              A dash is a day with no row, and the trend line breaks across it. A zero
              is a day the job ran and counted nothing.
            </p>
          </div>
        </>
      ) : null}
    </>
  );
}

function* eachDate(from, to) {
  const end = Date.parse(`${to}T00:00:00.000Z`);
  for (let time = Date.parse(`${from}T00:00:00.000Z`); time <= end; time += 86400000) {
    yield new Date(time).toISOString().slice(0, 10);
  }
}
