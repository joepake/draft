import { useEffect, useMemo, useState } from 'react';
import Icon from '@kidgate/web-ui/Icon';
import { useT } from '@kidgate/web-ui/useT';
import { getSeriesSwatch } from '@kidgate/tokens/accents';
import {
  THIN_COVERAGE,
  childDeviceShares,
  childTopApps,
  lateNightHits,
  otherAppsMinutes,
} from '@kidgate/core/domain/childUsage';
import { reportBarPercent, reportPeak } from '@kidgate/core/domain/reportHub';
import { isBandTooThin } from '@kidgate/core/domain/usageTimeline';
import ChildInitial from './ChildInitial.jsx';
import Toast from './Toast.jsx';
import { deviceIconName } from './deviceIcon.js';
import {
  AppCategoryLine,
  AppCategoryNote,
  UsageDayTimeline,
  formatMinutes,
} from './charts.jsx';
import { useAppCategories } from './useAppCategories.js';
import { buildChildShareModel, shareChildReportImage } from './childShareCard.js';
import { CHILD_TOP_APPS_LIMIT, useChildUsage } from './useChildUsage.js';

/**
 * One child's report — the web half of `apps/mobile`'s `ChildReportScreen`.
 *
 * **The question is about a person, not a piece of hardware**, and that is why
 * none of the arithmetic lives here. `@kidgate/core/domain/childUsage` folds
 * the devices, and the fold is not a sum: a phone and a television used for the
 * same hour are two device-hours and one hour of the child's evening. The
 * domain returns both figures, the gap between them, and refuses to guess when
 * a device in the set cannot report a timeline — which is why the hero can read
 * `≥ 4h 10m` rather than a number it cannot stand behind.
 *
 * **What this file owns is the drawing**, and one rule about it: a figure the
 * data cannot support is never rendered as a zero. `—` is the mark for
 * unmeasured, the same one every other report surface uses.
 *
 * Every sentence is the app pack's `childReport.*`, through `appT`; the handful
 * of `t('dash.*')` calls are the browser's own chrome.
 */

/** The three windows, and the days each reads. The phone's own list. */
const PERIODS = [
  { id: 'today', days: 1, labelKey: 'childReport.periodToday' },
  { id: 'week', days: 7, labelKey: 'childReport.periodWeek' },
  { id: 'month', days: 30, labelKey: 'childReport.periodMonth' },
];

/** Unmeasured, which is not zero. */
const NO_FIGURE = '—';

/** A day key rendered the reader's way, not ISO. */
function shortDay(dateKey, options) {
  return new Date(`${dateKey}T00:00:00`).toLocaleDateString(undefined, options);
}

/**
 * The device split, as a ring.
 *
 * A `conic-gradient` rather than SVG arcs or a charting library: each slice is
 * a single fraction, and the ring is a background with a hole punched by the
 * inner disc. Nothing to load, and it scales with the font.
 */
function DeviceDonut({ slices, totalMinutes, label }) {
  const stops = useMemo(() => {
    let at = 0;
    const parts = [];
    for (const slice of slices) {
      const end = at + slice.fraction * 100;
      parts.push(`${slice.color} ${at}% ${end}%`);
      at = end;
    }
    return parts.join(', ');
  }, [slices]);

  return (
    <div
      className="creport-donut"
      style={slices.length > 0 ? { background: `conic-gradient(${stops})` } : undefined}
      role="img"
      aria-label={label}
    >
      <span className="creport-donut-hole">
        <strong>{totalMinutes > 0 ? formatMinutes(totalMinutes) : NO_FIGURE}</strong>
      </span>
    </div>
  );
}

export default function ChildReport({
  child,
  childDevices,
  familyId,
  appT,
  onOpenDevice,
  onAssignDevice,
}) {
  const { t } = useT();
  // Today is the default: a parent opening a child's report is asking what is
  // happening now, and the wider windows are one click above the hero.
  const [period, setPeriod] = useState('today');
  /** A day picked out of the bar chart, which narrows every card below it. */
  const [pickedDate, setPickedDate] = useState(null);
  /** The share result, said once and then gone. */
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    if (!notice) return undefined;
    const timer = setTimeout(() => setNotice(null), 4000);
    return () => clearTimeout(timer);
  }, [notice]);

  const days = PERIODS.find(entry => entry.id === period)?.days ?? 7;
  const { totals, shares, apps, usageDevices, isLoading, hasPartialError } =
    useChildUsage(familyId, childDevices, days);

  /** Dropped silently when a period switch leaves the date outside the window. */
  const scopeDate =
    pickedDate !== null && totals.days.some(day => day.date === pickedDate)
      ? pickedDate
      : null;

  /*
   * Shares and apps over the focused day, by the same domain arithmetic that
   * produced the period figures — filter the fold's input, run the fold. A
   * second code path computing "one day's shares" its own way is how the ring
   * and the rows would eventually disagree.
   */
  const scoped = useMemo(() => {
    if (scopeDate === null) return null;
    const scopedDevices = usageDevices.map(device => ({
      ...device,
      days: device.days.filter(day => day.date === scopeDate),
    }));
    return {
      shares: childDeviceShares(scopedDevices),
      apps: childTopApps(scopedDevices, CHILD_TOP_APPS_LIMIT),
    };
  }, [usageDevices, scopeDate]);

  const activeShares = scoped?.shares ?? shares;
  const activeApps = scoped?.apps ?? apps;
  // Read once for the ranking, off the repository's session memo — the device
  // tab's own cards pay nothing for the apps this list already asked about.
  const appCategories = useAppCategories(
    activeApps.map(app => app.packageNames[0] ?? ''),
  );
  const activeDeviceMinutes = scoped
    ? scoped.shares.reduce((sum, row) => sum + row.minutes, 0)
    : totals.deviceMinutes;

  /*
   * Assigned from the device list, which is stable across a period switch:
   * keying off the sorted share order would recolour every device the moment a
   * quiet week reordered them. `getSeriesSwatch` is the phone's own picker, so
   * a device wears the same colour on both surfaces.
   */
  const colorByDevice = useMemo(() => {
    const map = {};
    childDevices.forEach((device, index) => {
      map[device.id] = getSeriesSwatch(index);
    });
    return map;
  }, [childDevices]);

  const deviceColor = id => colorByDevice[id] ?? getSeriesSwatch(0);

  const hasUsage = totals.deviceMinutes > 0 || totals.screenOnMinutes !== null;

  /**
   * The per-day form of the hero figure — "17h 28m this week" has to be divided
   * before it means anything. Over the days that reported, not over the window:
   * a child whose agent was dead on four of seven days has a three-day average.
   * Never for a one-day window, where it would restate the hero.
   */
  const dailyAverage =
    days <= 1 || totals.days.length === 0
      ? null
      : Math.round(
          (totals.screenOnMinutes ?? totals.screenOnLowMinutes) / totals.days.length,
        );

  const lateNightDates = useMemo(
    () => lateNightHits(totals.days).map(hit => hit.date),
    [totals.days],
  );

  const dayPeak = useMemo(
    () => reportPeak(totals.days.map(day => day.deviceMinutes)),
    [totals.days],
  );

  /**
   * The newest day some device actually timed.
   *
   * The band cannot show a period — it is a 24-hour strip — so with nothing
   * picked it falls back to the latest measured day rather than to nothing.
   * Derived rather than pushed into state by an effect, which is what makes a
   * period switch that leaves the picked date outside the window recover on
   * its own.
   */
  const latestMeasuredDate = useMemo(() => {
    for (let index = totals.days.length - 1; index >= 0; index -= 1) {
      if (totals.days[index]?.timeline) return totals.days[index].date;
    }
    return null;
  }, [totals.days]);

  const bandDate = scopeDate ?? latestMeasuredDate;
  /** The merged strip: every device's timeline laid over one another. */
  const bandDay = useMemo(
    () => totals.days.find(day => day.date === bandDate) ?? null,
    [totals.days, bandDate],
  );
  const bandTooThin = isBandTooThin(bandDay?.timeline);

  const coverageIsThin =
    hasUsage && (totals.coverage === null || totals.coverage < THIN_COVERAGE);

  /** Everything past the ranked rows, so the list can never be what hides an app. */
  const otherMinutes = otherAppsMinutes(activeDeviceMinutes, activeApps);

  const scopeLabel = scopeDate
    ? shortDay(scopeDate, { day: 'numeric', month: 'short' })
    : appT(PERIODS.find(entry => entry.id === period)?.labelKey ?? '');

  /**
   * The report as a picture, for the other parent.
   *
   * **Drawn, never a screenshot of this page.** The image is one card — the
   * hero and one section under it — for the reason the phone's
   * `ShareableChildReportCard` records: a parent forwarding it is answering
   * one question, and the hour band and the app ranking below would make the
   * picture long without making it clearer. Which section goes in follows the
   * window, again as on the phone: Today has no "day" inside it, so it shares
   * the device split; the wider two share the day column, which is where they
   * differ from each other.
   *
   * Every string is taken from what is already on screen rather than
   * re-derived, so the picture cannot disagree with the page it came from.
   */
  async function handleShare() {
    try {
      const model = buildChildShareModel({
        childName: child.name,
        periodLabel: scopeLabel,
        title: appT('childReport.title'),
        heroLabel: appT('childReport.heroScreenOn'),
        heroValue: !hasUsage
          ? NO_FIGURE
          : totals.screenOnMinutes !== null
            ? formatMinutes(totals.screenOnMinutes)
            : appT('childReport.heroAtLeast', {
                value: formatMinutes(totals.screenOnLowMinutes),
              }),
        rangeNote: !totals.exact && hasUsage ? appT('childReport.heroRangeNote') : null,
        splitRows: hasUsage
          ? [
              {
                label: appT('childReport.heroScreenOn'),
                value: formatMinutes(
                  totals.screenOnMinutes ?? totals.screenOnLowMinutes,
                ),
                fraction:
                  (totals.screenOnMinutes ?? totals.screenOnLowMinutes) /
                  Math.max(1, totals.deviceMinutes),
              },
              {
                label: appT('childReport.barCombined'),
                value: formatMinutes(totals.deviceMinutes),
                fraction: 1,
              },
            ]
          : [],
        stats: hasUsage
          ? [
              ...(dailyAverage !== null
                ? [
                    {
                      value: formatMinutes(dailyAverage),
                      label: appT('report.statDailyAverage'),
                    },
                  ]
                : []),
              {
                value: String(lateNightDates.length),
                label: appT('childReport.wellLateNights'),
                ...(lateNightDates.length > 0 ? { tone: 'warning' } : {}),
              },
            ]
          : [],
        coverageNote: coverageIsThin
          ? totals.coverage === null
            ? appT('childReport.coverageNone')
            : appT('childReport.coverage', {
                percent: Math.round(totals.coverage * 100),
              })
          : null,
        sectionTitle: appT(
          days <= 1 ? 'childReport.sectionDevices' : 'childReport.sectionDays',
        ),
        devices:
          days <= 1
            ? activeShares.map(row => ({
                name: row.name ?? '',
                value: formatMinutes(row.minutes),
                percent: Math.round(row.share * 100),
                color: deviceColor(row.deviceId),
              }))
            : [],
        days:
          days > 1
            ? totals.days.map(day => ({
                minutes: day.deviceMinutes,
                label: shortDay(day.date, { day: 'numeric', month: 'short' }),
              }))
            : [],
      });
      const result = await shareChildReportImage(
        model,
        `kidgate-${child.name}-${period}.png`,
      );
      if (result === 'downloaded') {
        setNotice({ tone: 'good', text: t('report.imageSaved') });
      }
    } catch {
      /* Canvas export is the one action here a browser can simply refuse — an
         older Safari, a locked-down enterprise profile. The copy points at the
         fallback rather than asking the parent to try again. */
      setNotice({ tone: 'critical', text: t('report.shareFailed') });
    }
  }

  if (childDevices.length === 0) {
    return (
      <section className="creport">
        <div className="card">
          <p className="empty">{appT('childReport.emptyNoDevices')}</p>
          <button className="btn btn-primary" onClick={onAssignDevice}>
            {appT('childReport.emptyAssign')}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="creport">
      {/* ---- Who, and which window ---- */}
      <div className="creport-head">
        <ChildInitial name={child.name} colorIndex={child.colorIndex} size={36} />
        <span className="creport-head-copy">
          <strong>{child.name}</strong>
          <em>{appT('childReport.devicesCount', { count: childDevices.length })}</em>
        </span>
        {/* Only once there is something to picture. A share button over a
            report that reads "—" hands the other parent an empty card. */}
        {hasUsage && (
          <button className="btn btn-sm creport-share" onClick={handleShare}>
            <Icon name="share" size={15} />
            {t('report.shareImage')}
          </button>
        )}
      </div>

      {/* One at a time, and it clears itself — a success from ten minutes ago
          sitting over the page reads as the answer to whatever just happened. */}
      <Toast toast={notice} />

      <nav className="family-tabs" aria-label={appT('childReport.title')}>
        {PERIODS.map(entry => (
          <button
            key={entry.id}
            className={`chip${period === entry.id ? ' is-active' : ''}`}
            aria-current={period === entry.id ? 'page' : undefined}
            onClick={() => {
              setPeriod(entry.id);
              // The picked day belongs to the window it was picked in.
              setPickedDate(null);
            }}
          >
            {appT(entry.labelKey)}
          </button>
        ))}
      </nav>

      {/* ---- The hero ---- */}
      <div className="card creport-hero">
        <div className="creport-figure-row">
          <span className="creport-figure-label">
            {appT('childReport.heroScreenOn')}
          </span>
          {/*
            A dash, never a zero. "0m" is the flattering lie this screen exists
            to refuse, and a loading state that tells it for half a second still
            tells it.
          */}
          <strong className="creport-figure">
            {isLoading || !hasUsage
              ? NO_FIGURE
              : totals.screenOnMinutes !== null
                ? formatMinutes(totals.screenOnMinutes)
                : /*
                    The floor, prefixed "≥". The upper bound is capped at the
                    sum, so it would repeat the "all devices added up" figure
                    below — and that sum counts a minute on two screens twice.
                    One true number a parent can act on beats two they have to
                    reconcile.
                  */
                  appT('childReport.heroAtLeast', {
                    value: formatMinutes(totals.screenOnLowMinutes),
                  })}
          </strong>
        </div>

        {!isLoading && !hasUsage && (
          <p className="creport-hero-empty">{appT('childReport.heroEmpty')}</p>
        )}

        {!totals.exact && hasUsage && (
          <p className="creport-hero-note">{appT('childReport.heroRangeNote')}</p>
        )}

        {/* The two totals as two bars, because the gap between them IS the
            finding: added up, a minute on two screens counts twice. */}
        {hasUsage && (
          <div className="creport-split">
            <span className="rhub-bar">
              <span className="rhub-bar-label">{appT('childReport.heroScreenOn')}</span>
              <span className="rhub-bar-track">
                <span
                  className="rhub-bar-fill"
                  style={{
                    width: `${reportBarPercent(
                      totals.screenOnMinutes ?? totals.screenOnLowMinutes,
                      totals.deviceMinutes,
                    )}%`,
                  }}
                />
              </span>
              <span className="rhub-bar-value">
                {/*
                  A range only while it IS one. When every device that reported
                  minutes reported no timeline, core caps the upper bound at the
                  sum, and on a single-device day that equals the lower bound —
                  "7h 9m – 7h 9m" reads as a broken widget rather than as a
                  bounded figure.
                */}
                {totals.screenOnMinutes !== null
                  ? formatMinutes(totals.screenOnMinutes)
                  : totals.screenOnHighMinutes > totals.screenOnLowMinutes
                    ? appT('childReport.heroRange', {
                        low: formatMinutes(totals.screenOnLowMinutes),
                        high: formatMinutes(totals.screenOnHighMinutes),
                      })
                    : formatMinutes(totals.screenOnLowMinutes)}
              </span>
            </span>
            <span className="rhub-bar is-muted">
              <span className="rhub-bar-label">{appT('childReport.barCombined')}</span>
              <span className="rhub-bar-track">
                <span className="rhub-bar-fill" style={{ width: '100%' }} />
              </span>
              <span className="rhub-bar-value">
                {formatMinutes(totals.deviceMinutes)}
              </span>
            </span>
          </div>
        )}

        {/* Without this the parent sees one bar shorter than the other and is
            left to guess why. The overlap is named when it can be known. */}
        {hasUsage && (
          <p className="creport-hero-note">
            {totals.overlapMinutes > 0
              ? appT('childReport.heroOverlap', {
                  value: formatMinutes(totals.overlapMinutes),
                })
              : appT('childReport.barsExplain')}
          </p>
        )}

        {/* Two wells, value over label — scannable in one sweep. */}
        {hasUsage && (
          <div className="creport-stats">
            {dailyAverage !== null && (
              <span className="creport-stat">
                <strong>{formatMinutes(dailyAverage)}</strong>
                <em>{appT('report.statDailyAverage')}</em>
              </span>
            )}
            <span className="creport-stat">
              <strong className={lateNightDates.length > 0 ? 'is-warning' : ''}>
                {lateNightDates.length}
              </strong>
              <em>{appT('childReport.wellLateNights')}</em>
            </span>
          </div>
        )}

        {/* The nights themselves. Clicking one focuses every card below on that
            day, which is the question the count raised. */}
        {lateNightDates.length > 0 && (
          <div className="creport-nights">
            {lateNightDates.map(date => (
              <button
                key={date}
                className={`chip tone-warning is-action${date === scopeDate ? ' is-active' : ''}`}
                onClick={() =>
                  setPickedDate(previous => (previous === date ? null : date))
                }
              >
                <Icon name="moon" size={12} />
                {shortDay(date, {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'numeric',
                })}
              </button>
            ))}
          </div>
        )}

        {/*
          An exception, not a status line. Coverage at 97% is the normal case,
          and printing it would put a fourth hedge under a number that already
          carries three; it is worth saying only when it changes how the figure
          above should be read. `THIN_COVERAGE` is core's, so the phone draws
          the line in the same place.
        */}
        {coverageIsThin && (
          <p className="creport-coverage">
            <Icon name="alert" size={13} />
            {totals.coverage === null
              ? appT('childReport.coverageNone')
              : appT('childReport.coverage', {
                  percent: Math.round(totals.coverage * 100),
                })}
          </p>
        )}
      </div>

      {/* Partial rather than fatal: two devices out of three still answers most
          of the question, and saying so beats a blank screen. */}
      {hasPartialError && (
        <p className="creport-coverage">
          <Icon name="alert" size={13} />
          {appT('childReport.partialError')}
        </p>
      )}

      {/* ---- Day by day ---- */}
      {totals.days.length > 1 && (
        <div className="card creport-card">
          <header className="creport-card-head">
            <h3>{appT('childReport.sectionDays')}</h3>
            {scopeDate && (
              // The one visible latch of the day focus. Its label is the day;
              // its press is the way back out, which is why the spoken label
              // names the action instead.
              <button
                className="chip is-active is-action"
                onClick={() => setPickedDate(null)}
                aria-label={appT('childReport.backToPeriod')}
              >
                <Icon name="close" size={11} />
                {scopeLabel}
              </button>
            )}
          </header>
          <ul className="creport-days">
            {totals.days.map(day => (
              <li key={day.date}>
                <button
                  className={`creport-day${day.date === scopeDate ? ' is-active' : ''}`}
                  // Clicking the selected day again is the other way out.
                  onClick={() =>
                    setPickedDate(previous => (previous === day.date ? null : day.date))
                  }
                  title={`${shortDay(day.date, { day: 'numeric', month: 'short' })} · ${formatMinutes(day.deviceMinutes)}`}
                >
                  <span className="creport-day-track">
                    <span
                      className="creport-day-fill"
                      style={{
                        height: `${reportBarPercent(day.deviceMinutes, dayPeak)}%`,
                      }}
                    />
                  </span>
                  <span className="creport-day-label">
                    {shortDay(day.date, { day: 'numeric' })}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ---- When the screens were on ----
       *
       * One day, never a period: a 24-hour strip of a fortnight is a texture
       * rather than a chart. Which day is the parent's to pick from the bars
       * above; with nothing picked it is the latest day something timed.
       *
       * The band itself is `UsageDayTimeline` — the same component the device
       * Screen Time tab draws, reading the same `@kidgate/core/domain/
       * usageTimeline` runs as the phone's `UsageTimelineBand`. Three surfaces,
       * one decoder, so none of them can disagree about what a minute meant.
       */}
      {bandDay?.timeline && (
        <div className="card creport-card">
          <header className="creport-card-head">
            <h3>{appT('childReport.sectionWhen')}</h3>
            <em className="creport-scope">
              {bandDate === latestMeasuredDate
                ? appT('childReport.bandLatestDay')
                : shortDay(bandDate, { day: 'numeric', month: 'short' })}
            </em>
          </header>

          {bandTooThin ? (
            <p className="empty">{appT('childReport.bandTooThin')}</p>
          ) : (
            <>
              <p className="creport-band-label">{appT('childReport.bandMerged')}</p>
              <UsageDayTimeline day={bandDay} capability />

              {/* One strip per device under the merged one. A band that goes
                  quiet at nine in the evening raises "which machine?", and the
                  merged strip cannot answer it. The glyph carries the device's
                  own colour from the split below, so the two read together. */}
              {usageDevices.map(entry => {
                const device = childDevices.find(item => item.id === entry.deviceId);
                const row = entry.days.find(day => day.date === bandDate);
                return (
                  <div className="creport-band-block" key={entry.deviceId}>
                    <p className="creport-band-head">
                      <span
                        className="creport-swatch creport-swatch-sm"
                        style={{ background: deviceColor(entry.deviceId) }}
                      >
                        {device && <Icon name={deviceIconName(device)} size={11} />}
                      </span>
                      {entry.name ?? NO_FIGURE}
                    </p>
                    <UsageDayTimeline
                      day={row}
                      platform={entry.platform}
                      capability={device?.capabilities?.usageTimeline}
                    />
                  </div>
                );
              })}
            </>
          )}
        </div>
      )}

      {/* ---- Which device ---- */}
      <div className="card creport-card">
        <header className="creport-card-head">
          <h3>{appT('childReport.sectionDevices')}</h3>
          <em className="creport-scope">{scopeLabel}</em>
        </header>
        <DeviceDonut
          slices={activeShares.map(row => ({
            fraction: row.share,
            color: deviceColor(row.deviceId),
          }))}
          totalMinutes={activeDeviceMinutes}
          label={appT('childReport.sectionDevices')}
        />
        <ul className="creport-rows">
          {activeShares.map(row => {
            const device = childDevices.find(item => item.id === row.deviceId);
            return (
              <li key={row.deviceId}>
                <button
                  className="rhub-row"
                  onClick={() => onOpenDevice(row.deviceId)}
                  aria-label={appT('childReport.openDeviceReport', {
                    name: row.name ?? '',
                  })}
                >
                  <span
                    className="creport-swatch"
                    style={{ background: deviceColor(row.deviceId) }}
                  >
                    {device && <Icon name={deviceIconName(device)} size={13} />}
                  </span>
                  <span className="rhub-row-body">
                    <span className="rhub-row-head">
                      <strong>{row.name ?? NO_FIGURE}</strong>
                      <em>{formatMinutes(row.minutes)}</em>
                    </span>
                    <span className="rhub-bar-track">
                      <span
                        className="rhub-bar-fill"
                        style={{
                          width: `${Math.max(2, Math.round(row.share * 100))}%`,
                          background: deviceColor(row.deviceId),
                        }}
                      />
                    </span>
                  </span>
                  <Icon name="chevronRight" size={14} />
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ---- Most used ---- */}
      <div className="card creport-card">
        <header className="creport-card-head">
          <h3>{appT('childReport.sectionApps')}</h3>
          <em className="creport-scope">{scopeLabel}</em>
        </header>
        {activeApps.length === 0 ? (
          <p className="empty">{appT('childReport.appsEmpty')}</p>
        ) : (
          <ul className="creport-apps">
            {activeApps.map(app => (
              <li key={app.key}>
                <span className="creport-app-head">
                  <strong>{app.label}</strong>
                  <em>{formatMinutes(app.minutes)}</em>
                </span>
                {/* What the app is, under its name — the phone's row carries
                    the same line from the same `appCategories` row. Keyed on
                    the first package: the rows are grouped by label, and
                    Chrome on a Mac and Chrome on a phone are one kind. */}
                <AppCategoryLine
                  appT={appT}
                  entry={appCategories.get(app.packageNames[0] ?? '') ?? null}
                />
                <span className="rhub-bar-track">
                  <span
                    className="rhub-bar-fill"
                    style={{
                      width: `${reportBarPercent(
                        app.minutes,
                        activeApps[0]?.minutes ?? 0,
                      )}%`,
                    }}
                  />
                </span>
                {/* Grouped by label, not by package: Chrome is one app to a
                    parent even though it is two ids across a Mac and a phone. */}
                {app.deviceIds.length > 1 && (
                  <em className="creport-app-devices">
                    {appT('childReport.appOnDevices', {
                      count: app.deviceIds.length,
                    })}
                  </em>
                )}
              </li>
            ))}
            {/* Everything past the ranked rows, summed rather than dropped, so
                the list can never be the thing that hides an app. No bar: it is
                a fact about the period, not an app, and a bar would invite
                comparing it against the rows it is the complement of. */}
            {otherMinutes >= 1 && (
              <li className="creport-app-other">
                <span className="creport-app-head">
                  <strong>{t('dash.topAppsOther')}</strong>
                  <em>{formatMinutes(otherMinutes)}</em>
                </span>
              </li>
            )}
          </ul>
        )}
        <AppCategoryNote appT={appT} entries={appCategories.values()} />
      </div>
    </section>
  );
}
