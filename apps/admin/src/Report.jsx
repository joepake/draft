import { useMemo, useState } from 'react';
import BarChart from './BarChart.jsx';
import Sparkline from './Sparkline.jsx';
import { useT } from './i18n.js';
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
 *
 * The label is a key rather than a sentence, read at render time, so the
 * language switch reaches the metric list and the raw grid's headers alike.
 */
const DAY_METRICS = [
  { key: 'newFamilies' },
  { key: 'conversions', note: '‡' },
  { key: 'activities' },
  { key: 'tamper', from: 'activityTypes' },
  { key: 'app_blocked', from: 'activityTypes' },
  { key: 'message_alert', from: 'activityTypes' },
  { key: 'message_checked', from: 'activityTypes' },
  { key: 'emergency', from: 'activityTypes' },
  { key: 'sosAlerts' },
  { key: 'safetyCheckIns' },
  { key: 'timeRequests' },
  { key: 'siteRequests' },
  { key: 'rewardTasksResolved' },
  { key: 'reportingDeviceDays', note: true },
  { key: 'screenMinutes', note: true },
  { key: 'bonusMinutes', note: true },
  { key: 'webVisits' },
  { key: 'webBlockedVisits' },
];

/**
 * How big the product is, right now. Point-in-time, read off the newest row
 * rather than summed — and each carries its own trend, which is why these are
 * tiles and the plan mix below is not.
 */
const SCALE_TILES = [
  { key: 'families', labelKey: 'report.families' },
  { key: 'childDevices', labelKey: 'report.childDevices' },
  { key: 'parentDevices', labelKey: 'report.parentDevices' },
];

/**
 * The plan split. Three counts that sum to Families, plus one that does not.
 *
 * `familiesTrialWindow` overlaps the others — trial is `trialStartedAt` still
 * inside the trial length, not a `planId` — so it sits below a divider rather
 * than beside them, and nothing here is ever drawn as one stacked bar.
 */
const PLAN_ROWS = [
  { key: 'familiesPlanPremium', labelKey: 'report.planPremium' },
  { key: 'familiesPlanFree', labelKey: 'report.planFree' },
  { key: 'familiesPlanMissing', labelKey: 'report.planMissing', note: true },
];

/**
 * The conversion histogram's buckets, in time order rather than by size.
 *
 * The keys and their edges are `CONVERSION_BUCKETS` in
 * `functions/lib/conversionStats.js`; the labels live in `i18n.js` because
 * they are prose for one operator, not data. Order is the whole point — a
 * distribution sorted by height is not a curve.
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

/** `null` reads as "not measurable", never as zero days. */
function dayCount(value, t) {
  return Number.isFinite(value) ? t('report.dayCount', { count: value }) : '—';
}

function valueOf(row, metric) {
  if (!row) {
    return null;
  }
  const value = metric.from ? row[metric.from]?.[metric.key] : row[metric.key];
  return Number.isFinite(value) ? value : null;
}

/**
 * How healthy is the pipeline? The one question this page has to answer before
 * any number on it can be trusted.
 *
 * A row for yesterday means last night's job ran. Two or more days without one
 * means it is not running, and every metric below is stale rather than quiet —
 * which looks identical unless something says so.
 */
function health(rows, t) {
  const newest = rows.find(entry => entry.row);
  if (!newest) {
    return {
      tone: 'critical',
      label: t('report.noData'),
      detail: t('report.noDataDetail'),
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
      label: t('report.healthy'),
      detail: t('report.healthyDetail', {
        date: newest.date,
        writtenAt:
          newest.row.writtenAt?.slice(0, 16).replace('T', ' ') ?? t('common.unknown'),
      }),
    };
  }
  return {
    tone: ageDays >= 3 ? 'critical' : 'warning',
    label: t('report.behind', { count: ageDays }),
    detail: t('report.behindDetail', { date: newest.date }),
  };
}

export default function Report() {
  const { t, language, formatNumber } = useT();
  const [days, setDays] = useState(30);
  const [showRaw, setShowRaw] = useState(false);
  // Shared with the Fleet page through `useRollup`, so moving between the two
  // costs no request and writes no extra audit row.
  const { data, error, busy, load } = useRollup(days);

  const bucketLabels = useMemo(
    () => Object.fromEntries(CONVERSION_BUCKETS.map(key => [key, t(`bucket.${key}`)])),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `t` reads `language`
    [language],
  );

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
  const status = useMemo(
    () => health(newestFirst, t),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `t` reads `language`
    [newestFirst, language],
  );
  const latest = newestFirst.find(entry => entry.row)?.row ?? null;
  const missing = rows.filter(entry => !entry.row).length;

  return (
    <>
      <div className="section-head">
        <h2 className="section-title">{t('report.title')}</h2>
        <div style={{ alignItems: 'center', display: 'flex', gap: 8 }}>
          <div className="segmented">
            {RANGES.map(range => (
              <button
                key={range}
                className={range === days ? 'is-active' : undefined}
                onClick={() => setDays(range)}
              >
                {t('report.rangeDays', { count: range })}
              </button>
            ))}
          </div>
          <button className="btn btn-ghost" disabled={busy} onClick={() => load(days)}>
            {busy ? t('common.loading') : t('common.refresh')}
          </button>
        </div>
      </div>

      {error ? (
        <div className="error-banner" style={{ marginBottom: 20 }}>
          <span>{error}</span>
        </div>
      ) : null}

      {!data && !error ? <p className="muted">{t('common.loading')}</p> : null}

      {data ? (
        <>
          <div className="status-strip">
            <span className={`status-dot is-${status.tone}`} />
            <span className="status-label">{status.label}</span>
            <span className="status-detail">{status.detail}</span>
            {missing > 0 ? (
              <span className="status-detail" style={{ marginLeft: 'auto' }}>
                {t('report.missingDays', { missing, total: rows.length })}
              </span>
            ) : null}
          </div>

          {latest ? (
            <div className="report-top">
              <div className="tile-grid">
                {SCALE_TILES.map(tile => (
                  <div key={tile.key} className="tile">
                    <div className="tile-label">{t(tile.labelKey)}</div>
                    <div className="tile-value">{formatNumber(latest[tile.key])}</div>
                    <div className="tile-spark">
                      <Sparkline values={rows.map(entry => valueOf(entry.row, tile))} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="plan-card">
                <div className="tile-label">{t('report.planMix')}</div>
                {PLAN_ROWS.map(row => (
                  <div key={row.key} className="plan-row">
                    <span className="plan-name">
                      {t(row.labelKey)}
                      {row.note ? <sup className="mark">†</sup> : null}
                    </span>
                    <span className="plan-value">{formatNumber(latest[row.key])}</span>
                  </div>
                ))}
                <div className="plan-divider" />
                <div className="plan-row">
                  <span className="plan-name">
                    {t('report.inTrial')}
                    <sup className="mark">†</sup>
                  </span>
                  <span className="plan-value">
                    {formatNumber(latest.familiesTrialWindow)}
                  </span>
                </div>
              </div>
            </div>
          ) : null}

          {latest?.conversion ? (
            <>
              <div className="section-head">
                <h2 className="section-title">{t('report.timeToPurchase')}</h2>
                <span className="muted">
                  {t('report.timeToPurchaseSub', { date: latest.date })}
                </span>
              </div>

              <div className="tile-grid" style={{ marginBottom: 12 }}>
                <div className="tile">
                  <div className="tile-label">{t('report.familiesEverPaid')}</div>
                  <div className="tile-value">
                    {formatNumber(latest.conversion.families)}
                  </div>
                </div>
                <div className="tile">
                  <div className="tile-label">{t('report.medianSignup')}</div>
                  <div className="tile-value">
                    {dayCount(latest.conversion.fromSignup?.medianDays, t)}
                  </div>
                </div>
                <div className="tile">
                  <div className="tile-label">{t('report.medianTrial')}</div>
                  <div className="tile-value">
                    {dayCount(latest.conversion.fromTrial?.medianDays, t)}
                  </div>
                </div>
                <div className="tile">
                  <div className="tile-label">{t('report.conversionRate')}</div>
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
                    {t('report.fewPayers', { count: latest.conversion.families })}
                  </span>
                  <span className="status-detail">{t('report.fewPayersDetail')}</span>
                </div>
              ) : null}

              <div className="chart-grid">
                {[
                  {
                    key: 'fromSignup',
                    titleKey: 'report.fromSignup',
                    subKey: 'report.fromSignupSub',
                    unknownKey: 'report.fromSignupUnknown',
                  },
                  {
                    key: 'fromTrial',
                    titleKey: 'report.fromTrial',
                    subKey: 'report.fromTrialSub',
                    unknownKey: 'report.fromTrialUnknown',
                  },
                ].map(cut => {
                  const stats = latest.conversion[cut.key] ?? {};
                  return (
                    <div key={cut.key} className="chart-card">
                      <h3 className="chart-title">{t(cut.titleKey)}</h3>
                      <p className="chart-sub">{t(cut.subKey)}</p>
                      <BarChart
                        data={stats.buckets}
                        order={CONVERSION_BUCKETS}
                        labels={bucketLabels}
                        total={stats.families}
                        emptyLabel={t('report.noConversion')}
                      />
                      <p className="chart-sub" style={{ marginTop: 10 }}>
                        {t('report.stats', {
                          n: formatNumber(stats.families),
                          mean: dayCount(stats.meanDays, t),
                          p25: dayCount(stats.p25Days, t),
                          p75: dayCount(stats.p75Days, t),
                        })}
                        {stats.unknown > 0
                          ? t('report.statsUnknown', {
                              count: stats.unknown,
                              reason: t(cut.unknownKey),
                            })
                          : ''}
                        {stats.invalid > 0
                          ? t('report.statsInvalid', { count: stats.invalid })
                          : ''}
                      </p>
                    </div>
                  );
                })}
              </div>
            </>
          ) : null}

          <div className="section-head">
            <h2 className="section-title">{t('report.dailyActivity')}</h2>
          </div>

          <div className="metric-list">
            <div className="metric-head">
              <span>{t('report.colMetric')}</span>
              <span>{t('report.colLatest')}</span>
              <span>{t('report.colWindow', { count: days })}</span>
              <span>{t('report.colTotal')}</span>
            </div>
            {DAY_METRICS.map(metric => {
              const series = rows.map(entry => valueOf(entry.row, metric));
              const real = series.filter(Number.isFinite);
              const total = real.reduce((sum, value) => sum + value, 0);
              return (
                <div key={metric.key} className="metric-row">
                  <span className="metric-name">
                    {t(`metric.${metric.key}`)}
                    {metric.note ? (
                      <sup className="mark">
                        {metric.note === true ? '*' : metric.note}
                      </sup>
                    ) : null}
                  </span>
                  <span className="metric-num">
                    {formatNumber(valueOf(latest, metric))}
                  </span>
                  <Sparkline values={series} />
                  <span className="metric-num is-total">
                    {real.length > 0 ? formatNumber(total) : '—'}
                  </span>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 14 }}>
            <button className="disclosure" onClick={() => setShowRaw(value => !value)}>
              {showRaw ? t('report.hideRaw') : t('report.showRaw')}
            </button>
          </div>

          {showRaw ? (
            <div className="table-scroll" style={{ marginTop: 12 }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>{t('report.colDate')}</th>
                    {DAY_METRICS.map(metric => (
                      <th key={metric.key}>{t(`metric.${metric.key}`)}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {newestFirst.map(entry => (
                    <tr key={entry.date} className={entry.row ? undefined : 'is-gap'}>
                      <td>{entry.date}</td>
                      {DAY_METRICS.map(metric => (
                        <td key={metric.key}>
                          {formatNumber(valueOf(entry.row, metric))}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}

          {/*
            Each footnote is a run of translated prose with `<code>`, `<b>` and
            `<i>` between the pieces. The markup stays in JSX and the sentence
            is split where it interrupts, rather than putting tags inside a
            translated string where a translator can break the render.
          */}
          <div className="footnotes">
            <p>
              <b>*</b>
              {t('footnote.premiumA')}
              <code>packageActivity.js</code>
              {t('footnote.premiumB')}
              <code>usageDays</code>
              {t('footnote.premiumC')}
              <i>{t('footnote.premiumD')}</i>
              {t('footnote.premiumE')}
            </p>
            <p>
              <b>†</b> <b>{t('report.inTrial')}</b>
              {t('footnote.trialA')}
              <code>planId</code>
              {t('footnote.trialB')}
              <code>trialStartedAt</code>
              {t('footnote.trialC')}
              <code>planId: free</code>
              {t('footnote.trialD')}
              <b>{t('report.planMissing')}</b>
              {t('footnote.trialE')}
            </p>
            <p>
              <b>‡</b> <b>{t('metric.conversions')}</b>
              {t('footnote.firstA')}
              <i>{t('footnote.firstB')}</i>
              {t('footnote.firstC')}
              <code>firstPurchasedAt</code>
              {t('footnote.firstD')}
              <b>{t('report.timeToPurchase')}</b>
              {t('footnote.firstE')}
            </p>
            <p>{t('footnote.gap')}</p>
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
