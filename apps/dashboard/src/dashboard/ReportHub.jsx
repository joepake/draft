import { useMemo } from 'react';
import Icon from '@kidgate/web-ui/Icon';
import { supportsScreenTime } from '@kidgate/core/domain/controlSupport';
import { localDayKey } from '@kidgate/core/domain/weeklyReportSchedule';
import { reportBarLabels } from '@kidgate/core/domain/reportCopy';
import {
  buildChildReportRows,
  foldMinutesToday,
  reportBarPercent,
  reportPeak,
  resolveDailyAverage,
  sumMinutesToday,
} from '@kidgate/core/domain/reportHub';
import ChildInitial from './ChildInitial.jsx';
import { deviceIconName } from './deviceIcon.js';
import { formatMinutes } from './charts.jsx';

/**
 * The Reports landing — the web half of `apps/mobile`'s `ReportsScreen`.
 *
 * **What a parent opens Reports to ask is "how much today, and is that a
 * lot?"** This surface answered neither: it opened straight onto the stored
 * weekly sheet, which is written once a week and is about a week that is
 * already over. The phone has put four blocks in front of that sheet since the
 * tab existed — today against the daily average, the week, then the family
 * broken down by person and by machine — and this is those four.
 *
 * **None of the arithmetic is decided here.** It is
 * `@kidgate/core/domain/reportHub`, shared with the phone, because the rule
 * that matters is an honesty rule: a device that has not reported today is
 * absent, not zero, and two consoles must not disagree about whether a
 * switched-off phone was a quiet day.
 *
 * Every sentence is the app pack's, through `appT` — the phone has said all of
 * this in fourteen languages already.
 */

/** Unmeasured, which is not zero. The phone draws the same mark. */
const NO_FIGURE = '—';

/**
 * One bar of a comparison.
 *
 * Always a pair, never alone: "2h 10m today" is a reading, and "2h 10m today
 * against a 1h 40m average" is the statement a parent can act on. An absent
 * figure draws its track and no fill, so the row keeps its place in the grid
 * instead of collapsing and shifting the one beside it.
 */
function CompareBar({ label, minutes, peak, muted = false }) {
  const percent = reportBarPercent(minutes, peak);
  return (
    <span className={`rhub-bar${muted ? ' is-muted' : ''}`}>
      <span className="rhub-bar-label">{label}</span>
      <span className="rhub-bar-track">
        {percent !== null && (
          <span className="rhub-bar-fill" style={{ width: `${percent}%` }} />
        )}
      </span>
      <span className="rhub-bar-value">
        {minutes === null ? NO_FIGURE : formatMinutes(minutes)}
      </span>
    </span>
  );
}

/** A bare track, for the rows that carry their figure in the line above. */
function RowBar({ minutes, peak }) {
  const percent = reportBarPercent(minutes, peak);
  return (
    <span className="rhub-bar-track">
      {percent !== null && (
        <span className="rhub-bar-fill" style={{ width: `${percent}%` }} />
      )}
    </span>
  );
}

export default function ReportHub({
  devices = [],
  children = [],
  latest = null,
  loading = false,
  appT,
  onOpenWeek,
  onOpenChild,
  onOpenDevice,
}) {
  /*
   * The viewer's own midnight, the way every day-keyed reading on this surface
   * resolves it — a device stamps `usageDate` in its local day, and a parent
   * reading "today" means theirs.
   */
  const todayKey = useMemo(() => {
    const now = Date.now();
    return localDayKey(now, -new Date(now).getTimezoneOffset());
  }, []);

  const byDevice = useMemo(
    () => foldMinutesToday(devices, todayKey),
    [devices, todayKey],
  );
  const todayTotal = useMemo(() => sumMinutesToday(byDevice), [byDevice]);
  const dailyAverage = useMemo(() => resolveDailyAverage(latest, Date.now()), [latest]);
  const heroPeak = reportPeak([todayTotal, dailyAverage]);

  const childRows = useMemo(
    () => buildChildReportRows(children, devices, byDevice),
    [children, devices, byDevice],
  );
  const childPeak = useMemo(
    () => reportPeak(childRows.map(row => row.minutes)),
    [childRows],
  );

  /*
   * Only devices that measure minutes. Every row opens a usage report, and a
   * browser extension publishes `screenTime: false` — that row would open a
   * panel with nothing in it, which is worse than not offering it. The child
   * rows above sum minutes, so a device reporting none contributes nothing
   * there either way.
   */
  const reportable = useMemo(() => devices.filter(supportsScreenTime), [devices]);
  /* Against the family's own busiest machine, not against the child scale: a
     tablet and a phone answer different questions, and one shared peak would
     flatten every row on the quieter list. */
  const devicePeak = useMemo(() => reportPeak([...byDevice.values()]), [byDevice]);

  const weekLabels = useMemo(
    () =>
      latest
        ? reportBarLabels(
            latest,
            {
              t: appT,
              formatDuration: formatMinutes,
              formatDay: dayKey =>
                new Date(`${dayKey}T00:00:00`).toLocaleDateString(undefined, {
                  day: 'numeric',
                  month: 'short',
                }),
            },
            Date.now(),
          )
        : null,
    [latest, appT],
  );

  return (
    <section className="report-hub">
      {/* ---- Today ---- */}
      <div className="card rhub-hero">
        <span className="rhub-label">{appT('report.hubToday')}</span>
        {/*
          A device list still loading is not a family with nothing to report,
          and saying so before the subscription lands puts a flat denial on
          screen for a beat and then replaces it with a figure. The dash is the
          same mark every unmeasured figure here uses.
        */}
        {todayTotal === null && loading ? (
          <strong className="rhub-hero-value">{NO_FIGURE}</strong>
        ) : todayTotal === null ? (
          <p className="hint">{appT('report.hubTodayEmpty')}</p>
        ) : (
          <strong className="rhub-hero-value">{formatMinutes(todayTotal)}</strong>
        )}

        {/* The average is what makes today's figure a statement rather than a
            reading, so the pair is drawn only when both halves exist. */}
        {dailyAverage !== null && todayTotal !== null && (
          <div className="rhub-bars">
            <CompareBar
              label={appT('report.hubToday')}
              minutes={todayTotal}
              peak={heroPeak}
            />
            <CompareBar
              label={appT('report.statDailyAverage')}
              minutes={dailyAverage}
              peak={heroPeak}
              muted
            />
          </div>
        )}
      </div>

      {/* ---- The stored week, and the door to the full sheet ---- */}
      {latest && (
        <button className="card rhub-week" onClick={onOpenWeek}>
          <span className="rhub-week-head">
            <span className="rhub-week-copy">
              <span className="rhub-label">{appT('report.title')}</span>
              {/* Once the bars carry their own date ranges this line would
                  repeat the first bar's label verbatim. */}
              {!weekLabels?.dated && (
                <em className="rhub-week-range">
                  {appT('report.range', {
                    from: latest.fromDate,
                    to: latest.toDate,
                  })}
                </em>
              )}
            </span>
            <Icon name="chevronRight" size={16} />
          </span>
          <span className="rhub-bars">
            <CompareBar
              label={weekLabels?.thisWeek ?? appT('report.barThisWeek')}
              minutes={latest.screenMinutes}
              peak={Math.max(latest.screenMinutes, latest.previousScreenMinutes)}
            />
            <CompareBar
              label={weekLabels?.lastWeek ?? appT('report.barLastWeek')}
              minutes={latest.previousScreenMinutes}
              peak={Math.max(latest.screenMinutes, latest.previousScreenMinutes)}
              muted
            />
          </span>
        </button>
      )}

      {/* ---- By child ---- */}
      {childRows.length > 0 && (
        <div className="rhub-section">
          <h3 className="rhub-section-title">{appT('report.hubByChild')}</h3>
          <ul className="rhub-list">
            {childRows.map(row => (
              <li key={row.child.id}>
                {/* A child with no device opens the assign flow rather than a
                    report that could only ever say "no data" — the phone's own
                    branch, and the reason `hasDevice` is carried at all. */}
                <button
                  className="rhub-row"
                  onClick={() => onOpenChild(row.child.id, row.hasDevice)}
                >
                  <ChildInitial
                    name={row.child.name}
                    colorIndex={row.child.colorIndex}
                    size={32}
                  />
                  <span className="rhub-row-body">
                    <span className="rhub-row-head">
                      <strong>{row.child.name}</strong>
                      <em>
                        {!row.hasDevice
                          ? appT('report.hubChildUnassigned')
                          : row.minutes === null
                            ? NO_FIGURE
                            : formatMinutes(row.minutes)}
                      </em>
                    </span>
                    {/* Siblings share one scale, or the comparison between them
                        means nothing. */}
                    {row.hasDevice && <RowBar minutes={row.minutes} peak={childPeak} />}
                  </span>
                  <Icon name="chevronRight" size={14} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ---- By device ---- */}
      {reportable.length > 0 && (
        <div className="rhub-section">
          <h3 className="rhub-section-title">{appT('report.hubByDevice')}</h3>
          <ul className="rhub-list">
            {reportable.map(device => {
              const minutes = byDevice.has(device.id) ? byDevice.get(device.id) : null;
              return (
                <li key={device.id}>
                  <button className="rhub-row" onClick={() => onOpenDevice(device.id)}>
                    <span className="rhub-row-icon">
                      <Icon name={deviceIconName(device)} size={16} />
                    </span>
                    <span className="rhub-row-body">
                      <span className="rhub-row-head">
                        <strong>{device.name}</strong>
                        <em>{minutes === null ? NO_FIGURE : formatMinutes(minutes)}</em>
                      </span>
                      <RowBar minutes={minutes} peak={devicePeak} />
                    </span>
                    <Icon name="chevronRight" size={14} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
