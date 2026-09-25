import { useMemo } from 'react';
import BarChart from './BarChart.jsx';
import { useT } from './i18n.js';
import { useRollup } from './useRollup.js';

/**
 * What the installed base actually looks like, right now.
 *
 * ## Why this could not exist before
 *
 * The rollup answered everything with `count()`, which returns one number and
 * groups by nothing. Every question on this screen — which platform, which
 * version, which permission — is a *grouping*, so none of them were
 * answerable, and the gap read as "we decided not to report platforms" rather
 * than "the tool could not". `fleet()` in `functions/lib/operatorMetrics.js`
 * reads the device documents instead, which is affordable precisely here:
 * devices are ~1.5 per family in total, against ~70 events per family per day.
 *
 * ## The one screen this product needs more than any other
 *
 * KidGate promises to block apps and sites on a child's device, and that
 * promise fails **silently**: an Android accessibility service gets revoked, a
 * macOS system extension is never approved, a TV writes its grant to the wrong
 * OS profile. The family cannot tell, and the child has no reason to mention
 * it. `protectionStatus` is the device saying so out loud, and until now
 * nothing read it across families.
 *
 * Two rules the counts obey, both from the schema's own repeated warning that
 * **absent is unknown, never false**:
 *
 * - A device with no `capabilities` probe is counted as *unprobed*, never as
 *   "cannot". Old installs and platforms that publish nothing would otherwise
 *   look like failures.
 * - A permission the device did not report is not counted at all, rather than
 *   counted as denied.
 */

/**
 * Platform names are the OS vendors' own spelling and do not translate — the
 * only label map on this page that stays a constant.
 */
const PLATFORM_LABELS = {
  ios: 'iOS',
  android: 'Android',
  androidtv: 'Android TV',
  macos: 'macOS',
  windows: 'Windows',
  chromeos: 'ChromeOS',
};

/**
 * The shipped locale packs, by the name a person calls the language — in the
 * language currently on screen.
 *
 * The list is hard-coded rather than imported from `@kidgate/schema` because
 * this app has no dependency on the workspace packages (`CLAUDE.md` rule 2b).
 * A code the list does not know still draws, under its own key: a new language
 * reads as unlabelled here, never as missing.
 */
const LOCALE_CODES = [
  'en',
  'vi',
  'es',
  'pt',
  'de',
  'fr',
  'ja',
  'ko',
  'ar',
  'id',
  'it',
  'tr',
  'hi',
  'ru',
  'unknown',
];

/**
 * `AppBlockStrength` and `WebFilterMechanism` both carry `false` as a real
 * member — "this device cannot do it at all" — and a bucket key is a string, so
 * the chart was drawing the word `false` beside a bar. Read as a broken value
 * rather than as the answer it is, which is the one reading this screen must
 * not invite: a device that cannot block apps is the most important row here.
 *
 * `unknown` is the third state and stays distinct from both. It is a device
 * that published no capability probe, which the schema is repeatedly explicit
 * about: **absent is unknown, never false.**
 *
 * Every label is kept inside the chart's 116px label column — in both packs.
 * What `strong` and `best-effort` cost a family belongs in the subtitle, where
 * there is room to say it, rather than in a label that would arrive truncated.
 */

/** The permissions worth their own row. All nine are collected; these are the
 * ones whose loss stops enforcement rather than degrading a nicety. */
const PROTECTION_KEYS = [
  'screenTime',
  'accessibility',
  'overlay',
  'location',
  'notifications',
  'batteryOptimization',
];

/**
 * Devices reporting each status for one permission, worst first.
 *
 * `unknown` is whatever is left of `reported` once the named columns are
 * taken, not `table.unknown` alone, so every row sums to its last column. It
 * did not: `restricted` and `unknown` were counted in `reported` and drawn
 * nowhere, and a row that does not add up reads as a bug in the table rather
 * than as a status the table forgot. A value no column knows lands there too.
 */
function permissionSummary(protection, t) {
  return PROTECTION_KEYS.map(key => {
    const table = protection?.[key] || {};
    const reported = Object.values(table).reduce((sum, value) => sum + value, 0);
    const row = {
      key,
      label: t(`permission.${key}`),
      denied: table.denied || 0,
      authorized: (table.authorized || 0) + (table.approved || 0),
      unavailable: table.unavailable || 0,
      notDetermined: table.notDetermined || 0,
      restricted: table.restricted || 0,
      reported,
    };
    row.unknown =
      reported -
      row.denied -
      row.authorized -
      row.unavailable -
      row.notDetermined -
      row.restricted;
    return row;
  }).filter(row => row.reported > 0);
}

/** Lock states in the order a lock moves through them, good news first. */
const LOCK_ORDER = ['inForce', 'notApplied', 'unconfirmed', 'waiting'];

/**
 * Sum of some keys of a rollup map, or `undefined` when the map itself is
 * absent — a row written before the field existed. `formatNumber` draws that
 * as `—` rather than `0`, which would claim a count nobody took.
 */
function sumOf(table, keys) {
  if (!table) return undefined;
  return keys.reduce((sum, key) => sum + (table[key] || 0), 0);
}

export default function Fleet() {
  const { t, language, formatNumber } = useT();
  /*
   * Reads the same rollup Report does. The range is irrelevant here — every
   * number on this page is point-in-time, taken from the newest row — but
   * asking for the same window means the shared cache serves both pages and
   * navigating between them costs nothing.
   */
  const { data, error, busy, load } = useRollup(30);

  // Rebuilt when the language changes and not on every render: each of these
  // is a whole map handed to a chart, and a new object identity per render
  // would defeat any memoisation `BarChart` grows later.
  const labels = useMemo(
    () => ({
      active: {
        hour: t('active.hour'),
        day: t('active.day'),
        week: t('active.week'),
        month: t('active.month'),
        stale: t('active.stale'),
      },
      formFactor: {
        phone: t('formFactor.phone'),
        tablet: t('formFactor.tablet'),
        laptop: t('formFactor.laptop'),
        desktop: t('formFactor.desktop'),
        tv: t('formFactor.tv'),
        unknown: t('formFactor.unknown'),
      },
      locale: Object.fromEntries(LOCALE_CODES.map(code => [code, t(`lang.${code}`)])),
      appBlock: {
        false: t('appBlock.false'),
        strong: t('appBlock.strong'),
        'best-effort': t('appBlock.bestEffort'),
        unknown: t('appBlock.unknown'),
      },
      webFilter: {
        false: t('webFilter.false'),
        vpn: t('webFilter.vpn'),
        contentFilter: t('webFilter.contentFilter'),
        extension: t('webFilter.extension'),
        dns: t('webFilter.dns'),
        unknown: t('webFilter.unknown'),
      },
      /** Absent `osVersion`, which is an old install, not a version. */
      unknown: { unknown: t('value.unknown') },
      lock: Object.fromEntries(LOCK_ORDER.map(key => [key, t(`lock.${key}`)])),
      webFilterBlocker: {
        awaitingApproval: t('webFilterBlocker.awaitingApproval'),
        configurationDisabled: t('webFilterBlocker.configurationDisabled'),
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `t` reads `language`
    [language],
  );

  const latest = [...(data?.days ?? [])].reverse().find(Boolean) ?? null;
  const fleet = latest?.fleet;

  /**
   * Alpha-2 rendered in the operator's language by `Intl.DisplayNames` — no
   * 250-row table to ship or translate. Built from the keys actually present,
   * which is why it is not in the `labels` memo above: `unknown` is the absence
   * of a region rather than one, and anything that is not two letters is left
   * as it came so a bad value is visible instead of guessed at.
   */
  const countryLabels = useMemo(() => {
    if (!fleet?.country) return undefined;
    const names = new Intl.DisplayNames([language], { type: 'region' });
    return Object.fromEntries(
      Object.keys(fleet.country).map(code => [
        code,
        /^[A-Z]{2}$/.test(code) ? (names.of(code) ?? code) : t('value.unknown'),
      ]),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `t` reads `language`
  }, [fleet?.country, language]);

  const header = (
    <div className="section-head">
      <h2 className="section-title">{t('fleet.title')}</h2>
      <div style={{ alignItems: 'center', display: 'flex', gap: 10 }}>
        <span className="muted">{t('fleet.asOf', { date: latest?.date ?? '—' })}</span>
        <button className="btn btn-ghost" disabled={busy} onClick={() => load(30)}>
          {busy ? t('common.loading') : t('common.refresh')}
        </button>
      </div>
    </div>
  );

  if (error) {
    return (
      <>
        {header}
        <div className="error-banner">
          <span>{error}</span>
        </div>
      </>
    );
  }

  if (!data && busy) {
    return (
      <>
        {header}
        <p className="muted">{t('common.loading')}</p>
      </>
    );
  }

  if (!fleet || !Number.isFinite(fleet.devices)) {
    return (
      <>
        {header}
        <div className="card">
          <p className="muted" style={{ margin: 0 }}>
            {t('fleet.noRollup', { job: 'operatorMetricsDaily' })}
          </p>
        </div>
      </>
    );
  }

  const permissions = permissionSummary(fleet.protection, t);
  const active = fleet.lastActive || {};
  const reachable = (active.hour || 0) + (active.day || 0) + (active.week || 0);
  const parents = fleet.parents;
  const lockNotEnforced = sumOf(fleet.lock, ['notApplied', 'unconfirmed']);
  const webFilterBlocked = sumOf(fleet.webFilterBlocker, [
    'awaitingApproval',
    'configurationDisabled',
  ]);
  const ota = fleet.otaPublished;
  // Rows written before this field carry no `otaPublished` key at all; a row
  // that read a missing `config/ota` carries `null`. Different sentences.
  const otaNote =
    ota === undefined
      ? t('fleet.nextRollup')
      : ota === null
        ? t('fleet.otaNoConfig')
        : ota.enabled
          ? t('fleet.otaPublished', {
              ios: ota.ios ?? '—',
              android: ota.android ?? '—',
            })
          : t('fleet.otaDisabled');

  return (
    <>
      {header}
      <div className="tile-grid" style={{ marginBottom: 12 }}>
        <div className="tile">
          <div className="tile-label">{t('fleet.childDevices')}</div>
          <div className="tile-value">{formatNumber(fleet.devices)}</div>
        </div>
        <div className="tile">
          <div className="tile-label">{t('fleet.seenThisWeek')}</div>
          <div className="tile-value">{formatNumber(reachable)}</div>
        </div>
        <div className="tile">
          <div className="tile-label">{t('fleet.degraded')}</div>
          <div className="tile-value">{formatNumber(fleet.degraded || 0)}</div>
        </div>
        {/*
          These two next to each other on purpose. A parked device is quiet by
          design and ages into the same "stale" bucket as a dead install, so
          the silent count on its own read as "this much of the fleet is
          broken" when some of it was the free tier working correctly.
        */}
        <div className="tile">
          <div className="tile-label">{t('fleet.parked')}</div>
          <div className="tile-value">
            {formatNumber(fleet.monitoring?.parked || 0)}
          </div>
        </div>
        <div className="tile">
          <div className="tile-label">{t('fleet.silentNotParked')}</div>
          <div className="tile-value">{formatNumber(fleet.silentNotParked || 0)}</div>
        </div>
        <div className="tile">
          <div className="tile-label">{t('fleet.pushTokenDead')}</div>
          <div className="tile-value">{formatNumber(fleet.pushTokenDead || 0)}</div>
        </div>
        <div className="tile">
          <div className="tile-label">{t('fleet.unassigned')}</div>
          <div className="tile-value">{formatNumber(fleet.unassigned || 0)}</div>
        </div>
      </div>

      {fleet.multiProfile > 0 ? (
        <div className="status-strip" style={{ marginBottom: 12 }}>
          <span className="status-dot is-critical" />
          <span className="status-label">
            {t('fleet.multiProfile', { count: fleet.multiProfile })}
          </span>
          <span className="status-detail">
            {t('fleet.multiProfileDetail')}
            <code>docs/FEASIBILITY.md</code>
            {t('fleet.multiProfileRef')}
          </span>
        </div>
      ) : null}

      {/*
        The other end of every alert. The tiles above describe the child's
        device; none of them says whether anyone is on the receiving end of an
        SOS from it, and a family whose every parent phone lost its token looks
        perfectly healthy from the device's side.
      */}
      <h3 className="chart-title">{t('fleet.parentsTitle')}</h3>
      <p className="chart-sub">{t('fleet.parentsSub')}</p>
      <div className="tile-grid" style={{ marginBottom: 12 }}>
        <div className="tile">
          <div className="tile-label">{t('fleet.familiesLive')}</div>
          <div className="tile-value">{formatNumber(parents?.familiesLive)}</div>
        </div>
        <div className="tile">
          <div className="tile-label">{t('fleet.noParentPush')}</div>
          <div className="tile-value">
            {formatNumber(parents?.familiesNoParentPush)}
          </div>
        </div>
        <div className="tile">
          <div className="tile-label">{t('fleet.parentIdle')}</div>
          <div className="tile-value">{formatNumber(parents?.familiesParentIdle)}</div>
        </div>
        <div className="tile">
          <div className="tile-label">{t('fleet.parentPushDead')}</div>
          <div className="tile-value">{formatNumber(parents?.pushDead)}</div>
        </div>
      </div>

      {parents?.familiesNoParentPush > 0 ? (
        <div className="status-strip" style={{ marginBottom: 12 }}>
          <span className="status-dot is-critical" />
          <span className="status-label">
            {t('fleet.noParentPushStrip', { count: parents.familiesNoParentPush })}
          </span>
          <span className="status-detail">{t('fleet.noParentPushDetail')}</span>
        </div>
      ) : null}

      <h3 className="chart-title">{t('fleet.enforcementTitle')}</h3>
      <p className="chart-sub">{t('fleet.enforcementSub')}</p>
      <div className="tile-grid" style={{ marginBottom: 12 }}>
        <div className="tile">
          <div className="tile-label">{t('fleet.lockNotEnforced')}</div>
          <div className="tile-value">{formatNumber(lockNotEnforced)}</div>
        </div>
        <div className="tile">
          <div className="tile-label">{t('fleet.webFilterBlocked')}</div>
          <div className="tile-value">{formatNumber(webFilterBlocked)}</div>
        </div>
        <div className="tile">
          <div className="tile-label">{t('fleet.pinLocked')}</div>
          <div className="tile-value">
            {formatNumber(sumOf(fleet.parentPin, ['locked']))}
          </div>
        </div>
        <div className="tile">
          <div className="tile-label">{t('fleet.pinFailing')}</div>
          <div className="tile-value">
            {formatNumber(sumOf(fleet.parentPin, ['failing']))}
          </div>
        </div>
      </div>

      <div className="chart-grid">
        <div className="chart-card">
          <h3 className="chart-title">{t('fleet.platform')}</h3>
          <p className="chart-sub">{t('fleet.platformSub')}</p>
          <BarChart
            data={fleet.platform}
            labels={PLATFORM_LABELS}
            total={fleet.devices}
          />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">{t('fleet.formFactor')}</h3>
          <p className="chart-sub">{t('fleet.formFactorSub')}</p>
          <BarChart
            data={fleet.formFactor}
            labels={labels.formFactor}
            total={fleet.devices}
          />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">{t('fleet.lastSeen')}</h3>
          <p className="chart-sub">{t('fleet.lastSeenSub')}</p>
          <BarChart data={active} labels={labels.active} total={fleet.devices} />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">{t('fleet.appVersion')}</h3>
          <p className="chart-sub">
            {t('fleet.appVersionSub')}
            {otaNote}
          </p>
          <BarChart
            data={fleet.appVersion}
            labels={labels.unknown}
            total={fleet.devices}
          />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">{t('fleet.osVersion')}</h3>
          <p className="chart-sub">{t('fleet.osVersionSub')}</p>
          <BarChart
            data={fleet.osVersion}
            labels={labels.unknown}
            total={fleet.devices}
          />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">{t('fleet.locale')}</h3>
          <p className="chart-sub">{t('fleet.localeSub')}</p>
          <BarChart data={fleet.locale} labels={labels.locale} total={fleet.devices} />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">{t('fleet.country')}</h3>
          {/*
            No `total`: every other chart on this page counts devices and this
            one counts **families**, so a share against `fleet.devices` would
            read as a percentage of something it is not. The reason it counts
            families is the suppression that used to fold small buckets into
            `other` — off today, see `COUNTRY_MIN_FAMILIES` in
            `functions/lib/operatorMetrics.js`, so every country is named and a
            bucket of one names that family. `unknown` is a device that has not
            reported one yet, which is every device until it next launches.
          */}
          <p className="chart-sub">{t('fleet.countrySub')}</p>
          <BarChart
            data={fleet.country}
            emptyLabel={t('fleet.countryEmpty')}
            labels={countryLabels}
          />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">{t('fleet.appBlock')}</h3>
          <p className="chart-sub">
            {t('fleet.appBlockSub')}
            {fleet.noCapabilityProbe > 0
              ? t('fleet.noProbeCount', { count: fleet.noCapabilityProbe })
              : t('fleet.fromProbe')}
          </p>
          <BarChart
            data={fleet.appBlock}
            labels={labels.appBlock}
            emptyLabel={t('fleet.noProbePublished')}
          />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">{t('fleet.webFilter')}</h3>
          <p className="chart-sub">{t('fleet.webFilterSub')}</p>
          <BarChart
            data={fleet.webFilter}
            labels={labels.webFilter}
            emptyLabel={t('fleet.noProbePublished')}
          />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">{t('fleet.webFilterBlocker')}</h3>
          <p className="chart-sub">{t('fleet.webFilterBlockerSub')}</p>
          <BarChart
            data={fleet.webFilterBlocker}
            labels={labels.webFilterBlocker}
            emptyLabel={
              fleet.webFilterBlocker
                ? t('fleet.webFilterBlockerEmpty')
                : t('fleet.nextRollup')
            }
          />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">{t('fleet.lock')}</h3>
          <p className="chart-sub">{t('fleet.lockSub')}</p>
          {/*
            Not `order`, which draws every state at zero and would show four
            empty rows instead of "no lock standing". Rebuilt in `LOCK_ORDER`
            so bars that tie keep that order through the chart's stable sort.
          */}
          <BarChart
            data={
              fleet.lock &&
              Object.fromEntries(LOCK_ORDER.map(key => [key, fleet.lock[key] || 0]))
            }
            labels={labels.lock}
            emptyLabel={fleet.lock ? t('fleet.noLocks') : t('fleet.nextRollup')}
          />
        </div>
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <h3 className="chart-title">{t('fleet.permissionStatus')}</h3>
        <p className="chart-sub">{t('fleet.permissionSub')}</p>
        {permissions.length === 0 ? (
          <p className="muted">{t('fleet.noProtectionReported')}</p>
        ) : (
          <div className="table-scroll">
            <table className="table">
              <thead>
                <tr>
                  <th>{t('fleet.colPermission')}</th>
                  <th>{t('fleet.colGranted')}</th>
                  <th>{t('fleet.colDenied')}</th>
                  <th>{t('fleet.colNotAsked')}</th>
                  <th>{t('fleet.colUnavailable')}</th>
                  <th>{t('fleet.colRestricted')}</th>
                  <th>{t('fleet.colUnknown')}</th>
                  <th>{t('fleet.colReportedBy')}</th>
                </tr>
              </thead>
              <tbody>
                {permissions.map(row => (
                  <tr key={row.key}>
                    <td>{row.label}</td>
                    <td>{formatNumber(row.authorized)}</td>
                    <td>
                      {row.denied > 0 ? (
                        <b>{formatNumber(row.denied)}</b>
                      ) : (
                        formatNumber(row.denied)
                      )}
                    </td>
                    <td>{formatNumber(row.notDetermined)}</td>
                    <td>{formatNumber(row.unavailable)}</td>
                    <td>{formatNumber(row.restricted)}</td>
                    <td>{formatNumber(row.unknown)}</td>
                    <td>{formatNumber(row.reported)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
