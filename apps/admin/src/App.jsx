import { useCallback, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase.js';
import { fetchFamilyDetail, fetchMetrics } from './api.js';
import Report from './Report.jsx';
import Fleet from './Fleet.jsx';
import Support from './Support.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

/**
 * The operator tool. One user, on a desk, occasionally.
 *
 * The visual shell is deliberate — `theme.css` and the layout below were built
 * once `Report` gave this app something worth looking at. The functional
 * restraint from before still holds: no router (the sidebar scrolls to anchors
 * rather than navigating), no state library, no `@kidgate/*` UI dependency,
 * three sections on one page. Every screen added here is still another way to
 * reach family data.
 */

const MIN_REASON_LENGTH = 12;

/** Inline so the app keeps its zero-dependency rule; 16px, 1.5px stroke. */
function Icon({ path }) {
  return (
    <svg
      className="nav-icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}

const ICONS = {
  overview: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  report: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-5 3 3 5-7" />
    </>
  ),
  fleet: (
    <>
      <rect x="4" y="2" width="10" height="16" rx="2" />
      <path d="M9 15h.01" />
      <path d="M16 8h4a1 1 0 011 1v11a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2" />
    </>
  ),
  support: (
    <>
      <path d="M21 15a2 2 0 01-2 2H8l-4 4V5a2 2 0 012-2h13a2 2 0 012 2z" />
    </>
  ),
  lookup: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </>
  ),
};

/**
 * Email/password rather than Google Sign-In — decided 2026-09-01.
 *
 * The tradeoff, stated exactly rather than understated: this account is
 * whatever holds `admin: true`, and that claim is not scoped to this app.
 * `docs/OPERATOR_ACCESS.md` names a second factor on the operator account as
 * one of three controls left standing between a compromised operator account
 * and every family in the product, precisely because the claim also admits
 * `adminImpersonate` from `apps/mobile` — shipped in the App Store, reachable
 * from anywhere, gated by the claim alone. **This app being localhost-only
 * does not contain that risk**: a stolen bearer token works against
 * `functions/admin` from any HTTP client, on any network, whether or not this
 * UI ever ran outside a laptop — CORS stops a browser, not a client that sends
 * no `Origin` (`functions/admin/index.js`'s own comment on this).
 *
 * So the accepted tradeoff is real, not merely theoretical, and what remains
 * to bound it is the rate limiter on every endpoint, the impersonation kill
 * switch, and a genuinely strong password. **Enable Firebase Authentication's
 * built-in Multi-Factor Authentication (TOTP) on this account** in Console to
 * restore a comparable second factor without Google.
 *
 * The account itself is created once, by hand, in Firebase Console
 * (Authentication → Users → Add user) — never through this app and never
 * through a script, so no password ever passes through this codebase.
 */
function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const submit = useCallback(
    event => {
      event.preventDefault();
      setBusy(true);
      setError(null);
      signInWithEmailAndPassword(auth, email.trim(), password)
        .catch(signInError => {
          // Firebase's own codes distinguish "no such user" from "wrong
          // password"; the screen shows one generic message, matching
          // `functions/admin/CLAUDE.md` rule 5's reasoning for why 401 and 403
          // read the same. The code still goes to the console — this app has
          // no enumeration threat to protect against (localhost only, one
          // operator), so hiding it would only slow down the one person who
          // can ever see it.
          console.error(
            'operator sign-in failed:',
            signInError.code,
            signInError.message,
          );
          setError('Wrong email or password.');
        })
        .finally(() => setBusy(false));
    },
    [email, password],
  );

  return (
    <div className="auth-shell">
      <main className="auth-card">
        <div className="brand-mark" style={{ marginBottom: 18 }}>
          KG
        </div>
        <h1 className="auth-title">KidGate operator</h1>
        <p className="auth-sub">Everything you open here is logged.</p>
        <form onSubmit={submit}>
          <div className="field-group">
            <label className="field-label" htmlFor="op-email">
              Email
            </label>
            <input
              className="field"
              id="op-email"
              type="email"
              autoComplete="username"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>
          <div className="field-group">
            <label className="field-label" htmlFor="op-password">
              Password
            </label>
            <input
              className="field"
              id="op-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <button
            className="btn"
            style={{ width: '100%' }}
            type="submit"
            disabled={busy || !email.trim() || !password}
          >
            {busy ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
        {error ? (
          <div className="error-banner" style={{ marginTop: 14 }}>
            <span>{error}</span>
          </div>
        ) : null}
      </main>
    </div>
  );
}

/**
 * Is the signed-in account an operator? Checked client-side so a signed-in
 * non-operator sees a refusal screen instead of the admin home page.
 *
 * This is a courtesy, not the security boundary — `requireOperator` on every
 * `functions/admin` endpoint is that, and stays that, whatever this returns.
 * A browser is not a trusted environment: nothing stops a modified build from
 * skipping this check and calling the endpoints directly, which is exactly why
 * the server checks again on every request regardless.
 *
 * `getIdTokenResult(true)` forces a refresh rather than trusting a cached
 * token, matching `api.js`'s `call()` — the claim is granted out of band by
 * `grant-operator-claim.js`, so a token issued before that carries no mention
 * of it. Fails closed: a token that cannot be read is treated the same as
 * "not an operator", never as "assume yes".
 */
function useOperatorStatus(user) {
  const [status, setStatus] = useState('checking');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!user) {
      setStatus('checking');
      return undefined;
    }
    let cancelled = false;
    setStatus('checking');
    user
      .getIdTokenResult(true)
      .then(result => {
        if (!cancelled) {
          setStatus(result.claims.admin === true ? 'operator' : 'refused');
        }
      })
      .catch(() => {
        if (!cancelled) {
          setStatus('error');
        }
      });
    return () => {
      cancelled = true;
    };
  }, [user, attempt]);

  const retry = useCallback(() => setAttempt(value => value + 1), []);
  return [status, retry];
}

/**
 * A signed-in account that is not an operator. Distinct from `<SignIn>`
 * because the account is real and known — this is not the 401/403 oracle
 * `functions/admin` guards against, it is telling someone their own account
 * which is not an operator.
 */
function NotOperator({ email, status, onRetry }) {
  const couldNotConfirm = status === 'error';
  return (
    <div className="auth-shell">
      <main className="auth-card">
        <h1 className="auth-title">
          {couldNotConfirm ? 'Could not confirm access' : 'Not an operator account'}
        </h1>
        <p className="auth-sub">
          {couldNotConfirm
            ? 'The operator claim could not be read for '
            : 'This account does not hold the operator claim: '}
          <b>{email}</b>.
        </p>
        <div style={{ display: 'flex', gap: 8 }}>
          {couldNotConfirm ? (
            <button className="btn" style={{ flex: 1 }} onClick={onRetry}>
              Try again
            </button>
          ) : null}
          <button
            className={couldNotConfirm ? 'btn btn-ghost' : 'btn'}
            style={{ flex: 1 }}
            onClick={() => signOut(auth)}
          >
            Sign out
          </button>
        </div>
      </main>
    </div>
  );
}

function Metrics() {
  const [metrics, setMetrics] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMetrics()
      .then(setMetrics)
      .catch(metricsError => setError(metricsError.message));
  }, []);

  if (error) {
    return (
      <div className="error-banner">
        <span>{error}</span>
      </div>
    );
  }
  if (!metrics) {
    return <p className="muted">Loading…</p>;
  }

  /*
   * Two tiles, not three. `metrics.families` used to sit here too and is now
   * only in Report, where it carries a trend line — the same fact with more
   * information, and one number on one screen twice is a number a reader has
   * to reconcile. These two are what is *waiting for the operator*, which is
   * a different question from how big the product is.
   */
  return (
    <div className="tile-grid">
      <Tile label="Pending pairing codes" value={metrics.pendingPairingCodes} />
      <Tile label="Support reports" value={metrics.supportReports} />
    </div>
  );
}

function Tile({ label, value }) {
  return (
    <div className="tile">
      <div className="tile-label">{label}</div>
      <div className="tile-value">
        {typeof value === 'number' ? value.toLocaleString() : '—'}
      </div>
    </div>
  );
}

/**
 * Opening one family's record is a separate, logged action.
 *
 * The reason field is not decoration. One person operates this product with no
 * colleague to ask "why are you looking at this family?" — the stated reason is
 * the only thing that makes the audit log answerable months later.
 */
function FamilyLookup() {
  const [uid, setUid] = useState('');
  const [reason, setReason] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const remaining = MIN_REASON_LENGTH - reason.trim().length;
  const ready = uid.trim().length > 0 && remaining <= 0;

  const look = useCallback(() => {
    setBusy(true);
    setError(null);
    setResult(null);
    fetchFamilyDetail(uid.trim(), reason.trim())
      .then(setResult)
      .catch(lookupError => setError(lookupError.message))
      .finally(() => setBusy(false));
  }, [uid, reason]);

  return (
    <div className="card">
      <div style={{ display: 'flex', gap: 12 }}>
        <div className="field-group" style={{ flex: 1 }}>
          <label className="field-label" htmlFor="lookup-uid">
            Family owner uid
          </label>
          <input
            className="field"
            id="lookup-uid"
            value={uid}
            onChange={event => setUid(event.target.value)}
          />
        </div>
        <div className="field-group" style={{ flex: 2 }}>
          <label className="field-label" htmlFor="lookup-reason">
            Reason
          </label>
          <input
            className="field"
            id="lookup-reason"
            value={reason}
            onChange={event => setReason(event.target.value)}
          />
          <div className="field-hint">
            {remaining > 0
              ? `${remaining} more character${remaining === 1 ? '' : 's'} — stored in the audit log beside your name and the time.`
              : 'Stored in the audit log beside your name and the time.'}
          </div>
        </div>
      </div>

      <button className="btn" disabled={!ready || busy} onClick={look}>
        {busy ? 'Looking up…' : 'Look up'}
      </button>

      {error ? (
        <div className="error-banner" style={{ marginTop: 14 }}>
          <span>{error}</span>
        </div>
      ) : null}
      {result ? <FamilyDetail family={result} /> : null}
    </div>
  );
}

function ago(iso) {
  if (!iso) {
    return null;
  }
  const parsed = Date.parse(iso);
  if (!Number.isFinite(parsed)) {
    return String(iso);
  }
  const hours = (Date.now() - parsed) / 3600000;
  if (hours < 1) {
    return 'just now';
  }
  if (hours < 48) {
    return `${Math.round(hours)}h ago`;
  }
  return `${Math.round(hours / 24)}d ago`;
}

function stamp(iso) {
  return iso ? String(iso).slice(0, 10) : '—';
}

/**
 * The family, rendered rather than dumped.
 *
 * This used to be `JSON.stringify(result, null, 2)` in a `<pre>` — honest but
 * unreadable, and it made the endpoint's own shape the interface. The fields
 * that decide a support case are the plan, when the devices last checked in,
 * and which permissions they report as denied; those get their own place here.
 */
function FamilyDetail({ family }) {
  const devices = [...(family.childDevices ?? []), ...(family.parentDevices ?? [])];

  return (
    <div style={{ marginTop: 16 }}>
      <div className="tile-grid" style={{ marginBottom: 12 }}>
        <div className="tile">
          <div className="tile-label">Plan</div>
          <div className="tile-value" style={{ fontSize: 19 }}>
            {family.planId ?? 'none'}
          </div>
          <div className="tile-label" style={{ marginTop: 4 }}>
            {family.subscriptionStatus
              ? `subscription ${family.subscriptionStatus}`
              : 'never purchased'}
          </div>
        </div>
        <div className="tile">
          <div className="tile-label">Trial</div>
          <div className="tile-value" style={{ fontSize: 19 }}>
            {family.trialStartedAt ? stamp(family.trialEndsAt) : 'not started'}
          </div>
          <div className="tile-label" style={{ marginTop: 4 }}>
            {family.trialStartedAt ? `started ${stamp(family.trialStartedAt)}` : ''}
          </div>
        </div>
        <div className="tile">
          <div className="tile-label">Children</div>
          <div className="tile-value" style={{ fontSize: 19 }}>
            {family.childCount ?? 0}
          </div>
          <div className="tile-label" style={{ marginTop: 4 }}>
            {family.childDeviceCount} child · {family.parentDeviceCount} parent devices
          </div>
        </div>
        <div className="tile">
          <div className="tile-label">Signed up</div>
          <div className="tile-value" style={{ fontSize: 19 }}>
            {stamp(family.createdAt)}
          </div>
          <div className="tile-label" style={{ marginTop: 4 }}>
            {family.email ?? 'no email'}
          </div>
        </div>
      </div>

      {family.deletionState ? (
        <div className="status-strip" style={{ marginBottom: 12 }}>
          <span className="status-dot is-critical" />
          <span className="status-label">
            Account deletion {family.deletionState.status}
          </span>
          <span className="status-detail">
            Purge after {stamp(family.deletionState.purgeAfter)} —{' '}
            <code>purgeScheduledDeletions</code> carries it out for real.
          </span>
        </div>
      ) : null}

      <div className="ticket-meta" style={{ marginBottom: 12 }}>
        <span>{family.name ?? 'no family name'}</span>
        <span>parent PIN {family.parentPinSet ? 'set' : 'not set'}</span>
        <span>
          AI message consent{' '}
          {family.messageAiConsent === null
            ? 'never asked'
            : family.messageAiConsent
              ? 'on'
              : 'off'}
        </span>
        <span>uid {family.uid}</span>
      </div>

      {devices.length === 0 ? (
        <p className="muted">No devices.</p>
      ) : (
        <div className="table-scroll">
          <table className="table">
            <thead>
              <tr>
                <th>Device</th>
                <th>Role</th>
                <th>Platform</th>
                <th>OS</th>
                <th>App</th>
                <th>Build</th>
                <th>OTA</th>
                <th>Lang</th>
                <th>Last seen</th>
                <th>Denied</th>
              </tr>
            </thead>
            <tbody>
              {devices.map(device => (
                <tr key={`${device.role}:${device.deviceId}`}>
                  <td>
                    {device.name ?? device.modelName ?? device.deviceId.slice(0, 8)}
                  </td>
                  <td>{device.role}</td>
                  <td>{device.platform ?? '—'}</td>
                  <td>{device.osVersion ?? '—'}</td>
                  <td>{device.appVersion ?? '—'}</td>
                  <td>{device.appBuild ?? '—'}</td>
                  <td>{device.otaVersion ?? '—'}</td>
                  <td>{device.locale ?? '—'}</td>
                  <td>{ago(device.lastActiveAt) ?? '—'}</td>
                  <td>
                    {device.deniedPermissions?.length > 0 ? (
                      <b>{device.deniedPermissions.join(', ')}</b>
                    ) : device.hasCapabilityProbe ? (
                      'none'
                    ) : (
                      // Absent probe is unknown, never "nothing denied".
                      <span className="faint">no probe</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/**
 * The pages, in sidebar order. `key` is the hash route.
 *
 * A real route per page rather than anchors down one scroll, and not only for
 * looks: with every section mounted at once, opening the console fired
 * `adminMetrics`, `adminReport` and `adminSupportReports` together and wrote
 * three `operatorAuditLog` rows before the operator had clicked anything. The
 * log exists to answer "what did this account do"; three rows per page load is
 * how that answer gets buried. One page, one fetch, one row.
 */
const PAGES = [
  { key: 'overview', label: 'Overview', icon: 'overview' },
  { key: 'report', label: 'Report', icon: 'report' },
  { key: 'fleet', label: 'Fleet', icon: 'fleet' },
  { key: 'support', label: 'Support queue', icon: 'support' },
  { key: 'lookup', label: 'Family lookup', icon: 'lookup' },
];

/**
 * Hash routing, hand-rolled.
 *
 * `react-router` would be this app's first dependency beyond firebase and
 * react, for five static pages and no nested routes or params. The hash also
 * survives the Vite dev server without any server-side rewrite, which a path
 * router would need. An unknown hash falls back to the first page rather than
 * rendering nothing.
 */
function useHashRoute() {
  const read = () => {
    const key = window.location.hash.replace(/^#\/?/, '');
    return PAGES.some(page => page.key === key) ? key : PAGES[0].key;
  };
  const [route, setRoute] = useState(read);

  useEffect(() => {
    const onChange = () => setRoute(read());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}

export default function App() {
  const [user, setUser] = useState(undefined);
  const [operatorStatus, retryOperatorCheck] = useOperatorStatus(user || null);
  const route = useHashRoute();

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  if (user === undefined) {
    return <p className="page-loading">Loading…</p>;
  }
  if (!user) {
    return <SignIn />;
  }

  // Gate the whole home page on the claim, not each panel individually —
  // otherwise a non-operator briefly sees this app's layout and three
  // separately-failing panels before anything says why.
  if (operatorStatus === 'checking') {
    return <p className="page-loading">Checking access…</p>;
  }
  if (operatorStatus !== 'operator') {
    return (
      <NotOperator
        email={user.email}
        status={operatorStatus}
        onRetry={retryOperatorCheck}
      />
    );
  }

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-mark">KG</div>
          <div>
            <div className="sidebar-brand-name">KidGate</div>
            <div className="sidebar-brand-sub">Operator console</div>
          </div>
        </div>
        <nav className="nav">
          {PAGES.map(page => (
            <a
              key={page.key}
              className={`nav-link${route === page.key ? ' is-active' : ''}`}
              href={`#/${page.key}`}
              aria-current={route === page.key ? 'page' : undefined}
            >
              <Icon path={ICONS[page.icon]} />
              {page.label}
            </a>
          ))}
        </nav>
        <div className="sidebar-foot">
          <div className="sidebar-user">{user.email}</div>
          <button className="btn btn-sidebar" onClick={() => signOut(auth)}>
            Sign out
          </button>
        </div>
      </aside>

      <div className="main">
        <header className="topbar">
          <h1 className="topbar-title">
            {PAGES.find(page => page.key === route)?.label}
          </h1>
          <span className="muted">Production · kidgate</span>
        </header>

        {/*
          One page mounts at a time. `key` on the wrapper means switching pages
          unmounts the old one rather than leaving its state and its in-flight
          requests alive behind the new one.
        */}
        <main className="content" key={route}>
          {/*
            Per route, not around the whole shell: a page that throws must not
            take the sidebar with it, or the operator cannot navigate away from
            the broken one. `key={route}` also resets the boundary on
            navigation, so a crash on one page does not persist onto the next.
          */}
          <ErrorBoundary key={route}>
            {route === 'overview' ? (
              <>
                <div className="section-head">
                  <h2 className="section-title">Waiting for you</h2>
                </div>
                <Metrics />
              </>
            ) : null}
            {route === 'report' ? <Report /> : null}
            {route === 'fleet' ? <Fleet /> : null}
            {route === 'support' ? <Support /> : null}
            {route === 'lookup' ? (
              <>
                <div className="section-head">
                  <h2 className="section-title">Family lookup</h2>
                </div>
                <FamilyLookup />
              </>
            ) : null}
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
}
