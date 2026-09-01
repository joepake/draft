import BarChart from './BarChart.jsx';
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

const PLATFORM_LABELS = {
  ios: 'iOS',
  android: 'Android',
  androidtv: 'Android TV',
  macos: 'macOS',
  windows: 'Windows',
  chromeos: 'ChromeOS',
};

const ACTIVE_LABELS = {
  hour: 'Within the hour',
  day: 'Within a day',
  week: 'Within a week',
  month: 'Within a month',
  stale: 'Over a month',
};

/** The permissions worth their own row. All nine are collected; these are the
 * ones whose loss stops enforcement rather than degrading a nicety. */
const PROTECTION_ROWS = [
  ['screenTime', 'Screen time'],
  ['accessibility', 'Accessibility'],
  ['overlay', 'Overlay'],
  ['location', 'Location'],
  ['notifications', 'Notifications'],
  ['batteryOptimization', 'Battery exemption'],
];

function relabel(table, labels) {
  const out = {};
  for (const [key, value] of Object.entries(table || {})) {
    out[labels[key] ?? key] = value;
  }
  return out;
}

/** Devices reporting each status for one permission, worst first. */
function permissionSummary(protection) {
  return PROTECTION_ROWS.map(([key, label]) => {
    const table = protection?.[key] || {};
    const reported = Object.values(table).reduce((sum, value) => sum + value, 0);
    return {
      key,
      label,
      denied: table.denied || 0,
      authorized: (table.authorized || 0) + (table.approved || 0),
      unavailable: table.unavailable || 0,
      notDetermined: table.notDetermined || 0,
      reported,
    };
  }).filter(row => row.reported > 0);
}

export default function Fleet() {
  /*
   * Reads the same rollup Report does. The range is irrelevant here — every
   * number on this page is point-in-time, taken from the newest row — but
   * asking for the same window means the shared cache serves both pages and
   * navigating between them costs nothing.
   */
  const { data, error, busy, load } = useRollup(30);

  const latest = [...(data?.days ?? [])].reverse().find(Boolean) ?? null;
  const fleet = latest?.fleet;

  const header = (
    <div className="section-head">
      <h2 className="section-title">Fleet</h2>
      <div style={{ alignItems: 'center', display: 'flex', gap: 10 }}>
        <span className="muted">As of {latest?.date ?? '—'}, not a range</span>
        <button className="btn btn-ghost" disabled={busy} onClick={() => load(30)}>
          {busy ? 'Loading…' : 'Refresh'}
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
        <p className="muted">Loading…</p>
      </>
    );
  }

  if (!fleet || !Number.isFinite(fleet.devices)) {
    return (
      <>
        {header}
        <div className="card">
          <p className="muted" style={{ margin: 0 }}>
            No fleet data in the latest rollup row. Deploy{' '}
            <code>operatorMetricsDaily</code> and run it once — this page arrives with
            the next row.
          </p>
        </div>
      </>
    );
  }

  const permissions = permissionSummary(fleet.protection);
  const active = fleet.lastActive || {};
  const reachable = (active.hour || 0) + (active.day || 0) + (active.week || 0);

  return (
    <>
      {header}
      <div className="tile-grid" style={{ marginBottom: 12 }}>
        <div className="tile">
          <div className="tile-label">Child devices</div>
          <div className="tile-value">{fleet.devices.toLocaleString()}</div>
        </div>
        <div className="tile">
          <div className="tile-label">Seen this week</div>
          <div className="tile-value">{reachable.toLocaleString()}</div>
        </div>
        <div className="tile">
          <div className="tile-label">Protection degraded</div>
          <div className="tile-value">{(fleet.degraded || 0).toLocaleString()}</div>
        </div>
        <div className="tile">
          <div className="tile-label">Dead push token</div>
          <div className="tile-value">
            {(fleet.pushTokenDead || 0).toLocaleString()}
          </div>
        </div>
        <div className="tile">
          <div className="tile-label">Unassigned to a child</div>
          <div className="tile-value">{(fleet.unassigned || 0).toLocaleString()}</div>
        </div>
      </div>

      {fleet.multiProfile > 0 ? (
        <div className="status-strip" style={{ marginBottom: 12 }}>
          <span className="status-dot is-critical" />
          <span className="status-label">
            {fleet.multiProfile} device{fleet.multiProfile === 1 ? '' : 's'} stuck
            behind a second OS profile
          </span>
          <span className="status-detail">
            A permission reads granted in Settings while the app sees nothing. The
            family cannot diagnose this and the app cannot fix it — the only cure is
            removing the second install. <code>docs/FEASIBILITY.md</code>, K1/K2.
          </span>
        </div>
      ) : null}

      <div className="chart-grid">
        <div className="chart-card">
          <h3 className="chart-title">Platform</h3>
          <p className="chart-sub">Child devices, by the OS they run</p>
          <BarChart
            data={relabel(fleet.platform, PLATFORM_LABELS)}
            total={fleet.devices}
          />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Form factor</h3>
          <p className="chart-sub">Absent on devices that predate the field</p>
          <BarChart data={fleet.formFactor} total={fleet.devices} />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Last seen</h3>
          <p className="chart-sub">
            Over a month is the closest signal to an uninstall the product has
          </p>
          <BarChart data={relabel(active, ACTIVE_LABELS)} total={fleet.devices} />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">App version</h3>
          <p className="chart-sub">The name a person reads — `1.0.0`</p>
          <BarChart data={fleet.appVersion} total={fleet.devices} />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Build number</h3>
          <p className="chart-sub">
            A string, not a number — Windows has none, so the field could not be numeric
          </p>
          <BarChart data={fleet.appBuild} total={fleet.devices} />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">OTA bundle</h3>
          <p className="chart-sub">
            Compare against <code>config/ota</code>. Unknown is desktop, TV and the
            extension, which have no OTA channel — not "behind"
          </p>
          <BarChart data={fleet.otaVersion} total={fleet.devices} />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">OS version</h3>
          <p className="chart-sub">Decides what a build may drop support for</p>
          <BarChart data={fleet.osVersion} total={fleet.devices} />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Device language</h3>
          <p className="chart-sub">Which of the 14 locale packs earn their keep</p>
          <BarChart data={fleet.locale} total={fleet.devices} />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">App blocking strength</h3>
          <p className="chart-sub">
            {fleet.noCapabilityProbe > 0
              ? `${fleet.noCapabilityProbe} device${fleet.noCapabilityProbe === 1 ? '' : 's'} published no probe — unknown, not "cannot"`
              : 'From the capability probe each device publishes'}
          </p>
          <BarChart
            data={fleet.appBlock}
            emptyLabel="No device has published a probe"
          />
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Web filter mechanism</h3>
          <p className="chart-sub">VPN, content filter, extension or DNS</p>
          <BarChart
            data={fleet.webFilter}
            emptyLabel="No device has published a probe"
          />
        </div>
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <h3 className="chart-title">Permission status</h3>
        <p className="chart-sub">
          Only devices that reported each permission are counted — one the device never
          mentioned is unknown, not denied.
        </p>
        {permissions.length === 0 ? (
          <p className="muted">No device has reported a protection status.</p>
        ) : (
          <div className="table-scroll">
            <table className="table">
              <thead>
                <tr>
                  <th>Permission</th>
                  <th>Granted</th>
                  <th>Denied</th>
                  <th>Not asked</th>
                  <th>Unavailable</th>
                  <th>Reported by</th>
                </tr>
              </thead>
              <tbody>
                {permissions.map(row => (
                  <tr key={row.key}>
                    <td>{row.label}</td>
                    <td>{row.authorized.toLocaleString()}</td>
                    <td>
                      {row.denied > 0 ? (
                        <b>{row.denied.toLocaleString()}</b>
                      ) : (
                        row.denied.toLocaleString()
                      )}
                    </td>
                    <td>{row.notDetermined.toLocaleString()}</td>
                    <td>{row.unavailable.toLocaleString()}</td>
                    <td>{row.reported.toLocaleString()}</td>
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
