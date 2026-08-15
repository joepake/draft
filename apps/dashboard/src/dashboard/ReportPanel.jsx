import { useEffect, useMemo, useState } from 'react';
import BrandLogo from '@kidgate/web-ui/BrandLogo';
import Icon from '@kidgate/web-ui/Icon';
import { useT } from '@kidgate/web-ui/useT';
import { reportNarrative, reportWeek } from '@kidgate/core/domain/reportView';
import { formatMinutes } from './charts.jsx';
import { formatRange, reportPresentation, reportSummaryText } from './reportCopy.js';
import { buildShareModel, shareReportImage } from './shareCard.js';

/**
 * The weekly report, as a sheet.
 *
 * Laid out as a document rather than as another grid of dashboard tiles,
 * because this is the one screen in the product that leaves it: a parent saves
 * it as an image or prints it to PDF and sends it to the other parent, who has
 * no sidebar around it to explain what they are looking at. So the sheet
 * carries its own brand mark, its own family name and its own date range, and
 * the controls that produced it sit outside the frame.
 *
 * Everything it prints comes from `@kidgate/core/domain/reportView` and
 * `reportCopy.js` — the same two modules the share image reads. Nothing on this
 * page computes a figure of its own.
 */

const TREND_ICON = { up: 'alert', down: 'check', flat: 'activity' };

function ReportBar({ label, value, minutes, peak, variant }) {
  const width = peak > 0 ? Math.max(4, Math.round((minutes / peak) * 100)) : 4;
  return (
    <div className={`report-bar report-bar-${variant}`}>
      <span className="report-bar-label">{label}</span>
      <span className="report-bar-track">
        <span className="report-bar-fill" style={{ width: `${width}%` }} />
      </span>
      <span className="report-bar-value">{value}</span>
    </div>
  );
}

export default function ReportPanel({
  reports,
  loading,
  familyName,
  language,
  onGenerate,
  generating,
  generateError,
}) {
  const { t } = useT();
  const [selectedKey, setSelectedKey] = useState(null);
  const [notice, setNotice] = useState(null);

  // The newest report is the one to open, and "newest" changes under the
  // screen: the Sunday job can land while the tab is open, and pressing
  // generate adds a week in front of the one being read.
  const report = useMemo(() => {
    if (reports.length === 0) return null;
    return reports.find(entry => entry.periodKey === selectedKey) ?? reports[0];
  }, [reports, selectedKey]);

  useEffect(() => {
    if (!notice) return undefined;
    const timer = setTimeout(() => setNotice(null), 4000);
    return () => clearTimeout(timer);
  }, [notice]);

  const view = useMemo(() => {
    if (!report) return null;
    return {
      ...reportPresentation(report, familyName),
      week: reportWeek(report.periodKey),
      narrative: reportNarrative(report, language),
    };
    // `language` rather than `t`: the sentences come from `reportCopy`, which
    // binds the module-level translator, so what has to invalidate this memo is
    // the reader switching language — that changes both the wording and which
    // stored narrative they are shown.
  }, [report, familyName, language]);

  async function handleImage() {
    try {
      const result = await shareReportImage(
        buildShareModel(report, familyName),
        `kidgate-${report.periodKey}.png`,
      );
      if (result === 'downloaded')
        setNotice({ tone: 'good', text: t('report.imageSaved') });
    } catch {
      // Canvas export is the one action here that a browser can simply refuse
      // — an older Safari, a locked-down enterprise profile. The copy points at
      // the fallback rather than asking the parent to try again.
      setNotice({ tone: 'critical', text: t('report.shareFailed') });
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(reportSummaryText(report, familyName));
      setNotice({ tone: 'good', text: t('report.copied') });
    } catch {
      setNotice({ tone: 'critical', text: t('report.shareFailed') });
    }
  }

  if (loading) {
    return (
      <section className="card">
        <p className="hint">{t('common.loading')}</p>
      </section>
    );
  }

  if (!report) {
    return (
      <section className="card report-empty">
        <Icon name="fileText" size={30} />
        <h2>{t('report.emptyTitle')}</h2>
        <p className="hint">{t('report.emptyBody')}</p>
        {generateError && <p className="report-error">{generateError}</p>}
        <button
          className="btn btn-primary"
          disabled={generating || !onGenerate}
          onClick={onGenerate}
        >
          {generating ? t('report.generating') : t('report.generate')}
        </button>
      </section>
    );
  }

  const peak = Math.max(report.screenMinutes, report.previousScreenMinutes, 1);

  return (
    <div className="report">
      <div className="report-actions">
        <button
          className="btn"
          disabled={generating || !onGenerate}
          onClick={onGenerate}
        >
          <Icon name="sparkles" size={16} />
          {generating ? t('report.generating') : t('report.generate')}
        </button>
        <span className="report-actions-gap" />
        <button className="btn" onClick={handleCopy}>
          <Icon name="fileText" size={16} />
          {t('report.copySummary')}
        </button>
        <button className="btn" onClick={() => window.print()}>
          <Icon name="fileText" size={16} />
          {t('report.sharePdf')}
        </button>
        <button className="btn btn-primary" onClick={handleImage}>
          <Icon name="share" size={16} />
          {t('report.shareImage')}
        </button>
      </div>

      {notice && <div className={`toast tone-${notice.tone}`}>{notice.text}</div>}
      {generateError && <div className="toast tone-critical">{generateError}</div>}

      <article className="report-sheet">
        <header className="report-sheet-head">
          <span className="report-brand">
            <span className="brand-mark" aria-hidden="true">
              <BrandLogo />
            </span>
            KidGate
          </span>
          <span className="report-week">
            {view.week ? t('report.weekOf', { week: view.week.week }) : ''}
          </span>
        </header>

        <h2 className="report-title">{familyName}</h2>
        <p className="report-range">
          {t('report.title')}
          <span className="dot-sep">·</span>
          {formatRange(report.fromDate, report.toDate)}
          <span className="dot-sep">·</span>
          {t(
            report.trigger === 'manual'
              ? 'report.triggerManual'
              : 'report.triggerScheduled',
          )}
        </p>

        <section className="report-hero">
          <div className="report-hero-main">
            <span className="report-hero-label">{view.hero.label}</span>
            <strong className="report-hero-value">{view.hero.value}</strong>
            <span className={`report-trend is-${view.hero.direction}`}>
              <Icon name={TREND_ICON[view.hero.direction]} size={15} />
              {view.hero.trend}
            </span>
          </div>

          <div className="report-compare">
            <ReportBar
              variant="now"
              label={view.compare.thisWeek.label}
              value={view.compare.thisWeek.value}
              minutes={view.compare.thisWeek.minutes}
              peak={peak}
            />
            <ReportBar
              variant="before"
              label={view.compare.lastWeek.label}
              value={view.compare.lastWeek.value}
              minutes={view.compare.lastWeek.minutes}
              peak={peak}
            />
          </div>
        </section>

        <div className="report-stats">
          {view.stats.map(stat => (
            <div className="report-stat" key={stat.key}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        {view.narrative && (
          <section className="report-quote">
            <h3>{t('report.narrativeTitle')}</h3>
            <p>{view.narrative}</p>
          </section>
        )}

        {view.findings.length > 0 && (
          <section className="report-findings">
            <h3>{t('report.highlights')}</h3>
            <ul>
              {view.findings.map(finding => (
                <li key={finding.kind} className={`tone-${finding.tone}`}>
                  <span className="report-finding-badge">{finding.badge}</span>
                  <p>{finding.text}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {view.children.length > 0 && (
          <section className="report-children">
            <h3>{t('report.childrenTitle')}</h3>
            <p className="hint">{t('report.childrenNote')}</p>
            <div className="report-table-wrap">
              <table className="report-table">
                <thead>
                  <tr>
                    <th scope="col">{t('report.colChild')}</th>
                    <th scope="col">{t('report.colScreenTime')}</th>
                    <th scope="col">{t('report.colShare')}</th>
                    <th scope="col">{t('report.colChange')}</th>
                    <th scope="col">{t('report.colLimit')}</th>
                    <th scope="col">{t('report.colLateNights')}</th>
                    <th scope="col">{t('report.colTopApp')}</th>
                  </tr>
                </thead>
                <tbody>
                  {view.children.map(row => (
                    <tr
                      key={row.deviceId}
                      className={row.isBusiest ? 'is-busiest' : undefined}
                    >
                      <th scope="row">
                        {row.name}
                        {row.isBusiest && (
                          <span className="report-table-flag">
                            {t('report.busiest')}
                          </span>
                        )}
                      </th>
                      <td>{row.screenTime}</td>
                      <td>{row.share}</td>
                      <td>{row.change}</td>
                      <td>{row.limit}</td>
                      <td>{row.lateNights}</td>
                      <td>{row.topApp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <p className="report-fine">
          {t('report.finePrint', { from: report.fromDate, to: report.toDate })}
        </p>
      </article>

      <section className="card report-history">
        <header className="card-head">
          <div>
            <h2>{t('report.historyTitle')}</h2>
          </div>
        </header>
        {reports.length === 1 && <p className="hint">{t('report.historyEmpty')}</p>}
        <div className="report-history-list">
          {reports.map(entry => {
            const week = reportWeek(entry.periodKey);
            return (
              <button
                key={entry.periodKey}
                className={`report-chip${entry.periodKey === report.periodKey ? ' is-active' : ''}`}
                onClick={() => setSelectedKey(entry.periodKey)}
              >
                <strong>
                  {week ? t('report.weekOf', { week: week.week }) : entry.periodKey}
                </strong>
                <span>{formatMinutes(entry.screenMinutes)}</span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
