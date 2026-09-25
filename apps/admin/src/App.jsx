import { useCallback, useEffect, useRef, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase.js';
import {
  fetchFamilyDetail,
  fetchFamilyList,
  fetchMetrics,
  searchFamilies,
} from './api.js';
import { LANGUAGES, useT } from './i18n.js';
import { clearCached, readCached, writeCached } from './sessionCache.js';
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
 *
 * Copy is English and Vietnamese, from `i18n.js` — local to this app rather
 * than `@kidgate/i18n`, for the four reasons that file states.
 */

const MIN_REASON_LENGTH = 12;

/** What `searchByName` refuses below, so the button refuses it first. */
const MIN_QUERY_LENGTH = 2;

/**
 * The filters a browse may apply, mirroring `PlanId` and `SubscriptionStatus`
 * in `packages/schema` — this app imports no `@kidgate/*` package (rule 2b), and
 * `getFamilyList` validates the value anyway, so a stale copy here refuses
 * server-side rather than returning a page that looks empty.
 *
 * Values are rendered raw on purpose: the table already prints `planId` and the
 * subscription status raw, so a translated option would name the filter one way
 * and the row it matched another.
 */
const FAMILY_PLAN_IDS = ['free', 'trial', 'premium'];
const FAMILY_STATUSES = ['active', 'expired', 'cancelled'];

/**
 * Rows per browse page, sent as `limit` — the server's own default is 50. Each
 * row costs four count reads on top of its document, so a smaller page is also
 * a cheaper one.
 */
const FAMILY_PAGE_SIZE = 20;

/** The per-row counts `getFamilyList` returns, and the header naming each. */
const FAMILY_COUNT_COLUMNS = [
  ['childCount', 'families.colChildren'],
  ['parentCount', 'families.colParents'],
  ['childDeviceCount', 'families.colChildDevices'],
  ['parentDeviceCount', 'families.colParentDevices'],
];

/**
 * Order rows by one count. A row without one — cached before the server sent
 * counts — sinks to the bottom in both directions rather than ranking as zero
 * among the families that genuinely have none. `sort` is stable, so ties keep
 * the server's uid order.
 */
function byCount(key, direction) {
  const sign = direction === 'asc' ? 1 : -1;
  return (a, b) => {
    const left = Number.isFinite(a[key]) ? a[key] : null;
    const right = Number.isFinite(b[key]) ? b[key] : null;
    if (left === null || right === null) {
      return Number(left === null) - Number(right === null);
    }
    return sign * (left - right);
  };
}

/**
 * The same fold `searchByName` applies server-side, including the `đ` that NFD
 * leaves alone — "Dung" has to find "Đũng" here exactly as it does there, or the
 * two ways of narrowing a list disagree about the same family.
 */
function fold(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

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
  families: (
    <>
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </>
  ),
};

/**
 * English / Tiếng Việt, on `.segmented` so it costs no new CSS.
 *
 * It appears on the sign-in screen as well as the console, because a language
 * that can only be chosen after signing in is not available to the one person
 * reading the sign-in screen.
 *
 * Each option is written in its own language — a Vietnamese reader looks for
 * "Tiếng Việt", not for whatever the current UI language calls it.
 */
function LanguageSwitch() {
  const { t, language, setLanguage } = useT();
  return (
    <div className="segmented" aria-label={t('common.language')}>
      {LANGUAGES.map(entry => (
        <button
          key={entry.code}
          type="button"
          lang={entry.code}
          className={language === entry.code ? 'is-active' : undefined}
          aria-pressed={language === entry.code}
          onClick={() => setLanguage(entry.code)}
        >
          {entry.name}
        </button>
      ))}
    </div>
  );
}

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
  const { t } = useT();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = useCallback(
    event => {
      event.preventDefault();
      setBusy(true);
      setError(false);
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
          // A flag rather than the sentence: the sentence is read at render
          // time, so switching language re-renders it instead of leaving the
          // previous language's error standing.
          setError(true);
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
        <h1 className="auth-title">{t('auth.title')}</h1>
        <p className="auth-sub">{t('auth.subtitle')}</p>
        <form onSubmit={submit}>
          <div className="field-group">
            <label className="field-label" htmlFor="op-email">
              {t('auth.email')}
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
              {t('auth.password')}
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
            {busy ? t('auth.signingIn') : t('auth.signIn')}
          </button>
        </form>
        {error ? (
          <div className="error-banner" style={{ marginTop: 14 }}>
            <span>{t('auth.wrongCredentials')}</span>
          </div>
        ) : null}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }}>
          <LanguageSwitch />
        </div>
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
 * token — the claim is granted out of band by `grant-operator-claim.js`, so a
 * token issued before that carries no mention of it. **This is the one forced
 * refresh**: no page mounts until it answers, so `api.js` reuses the token it
 * produced instead of forcing another per call. Fails closed: a token that
 * cannot be read is treated the same as "not an operator", never as "assume
 * yes".
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
  const { t } = useT();
  const couldNotConfirm = status === 'error';
  return (
    <div className="auth-shell">
      <main className="auth-card">
        <h1 className="auth-title">
          {couldNotConfirm ? t('auth.couldNotConfirm') : t('auth.notOperator')}
        </h1>
        <p className="auth-sub">
          {couldNotConfirm ? t('auth.claimUnreadable') : t('auth.claimAbsent')}
          <b>{email}</b>.
        </p>
        <div style={{ display: 'flex', gap: 8 }}>
          {couldNotConfirm ? (
            <button className="btn" style={{ flex: 1 }} onClick={onRetry}>
              {t('common.tryAgain')}
            </button>
          ) : null}
          <button
            className={couldNotConfirm ? 'btn btn-ghost' : 'btn'}
            style={{ flex: 1 }}
            onClick={() => signOut(auth)}
          >
            {t('common.signOut')}
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }}>
          <LanguageSwitch />
        </div>
      </main>
    </div>
  );
}

/**
 * The landing page, so it used to be fetched on every visit to it: three
 * `count()` queries and an audit row per sidebar click back to Overview. Now
 * once per `sessionCache.js` window, and Refresh when the operator wants now.
 */
function Metrics() {
  const { t, formatNumber } = useT();
  const [metrics, setMetrics] = useState(() => readCached('metrics'));
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(() => {
    setBusy(true);
    setError(null);
    fetchMetrics()
      .then(value => {
        writeCached('metrics', value);
        setMetrics(value);
      })
      .catch(metricsError => setError(metricsError.message))
      .finally(() => setBusy(false));
  }, []);

  useEffect(() => {
    if (!readCached('metrics')) {
      load();
    }
  }, [load]);

  /*
   * Two tiles, not three. `metrics.families` used to sit here too and is now
   * only in Report, where it carries a trend line — the same fact with more
   * information, and one number on one screen twice is a number a reader has
   * to reconcile. These two are what is *waiting for the operator*, which is
   * a different question from how big the product is.
   */
  return (
    <>
      <div className="section-head">
        <h2 className="section-title">{t('overview.waitingForYou')}</h2>
        <button className="btn btn-ghost" disabled={busy} onClick={load}>
          {busy ? t('common.loading') : t('common.refresh')}
        </button>
      </div>

      {error ? (
        <div className="error-banner">
          <span>{error}</span>
        </div>
      ) : null}

      {!metrics && !error ? <p className="muted">{t('common.loading')}</p> : null}

      {metrics ? (
        <div className="tile-grid">
          <Tile
            label={t('overview.pendingPairingCodes')}
            value={formatNumber(metrics.pendingPairingCodes)}
          />
          <Tile
            label={t('overview.supportReports')}
            value={formatNumber(metrics.supportReports)}
          />
        </div>
      ) : null}
    </>
  );
}

function Tile({ label, value }) {
  return (
    <div className="tile">
      <div className="tile-label">{label}</div>
      <div className="tile-value">{value}</div>
    </div>
  );
}

/** One entry per filter pair: a filtered browse is a different list. */
function familiesKey(planId, status) {
  return `families:${planId}|${status}`;
}

/**
 * Pick the cheapest lookup the input can support.
 *
 * A full email address and a uid each resolve in one document read; anything
 * else is a scan of the family collection, which is what makes searching by
 * name possible at all — Firestore matches neither substrings nor folded
 * diacritics. Sending `q` for a complete email would turn a one-read lookup
 * into a few thousand for no gain.
 *
 * A uid is 28 alphanumeric characters from Firebase Auth; the length test is
 * what stops a short name like "Minh" being sent as one and coming back 404
 * instead of finding the family.
 *
 * The same three branches as `OperatorHomeScreen.asQuery` on the phone, copied
 * rather than shared: an operator API client lives in the app that uses it
 * (`apps/admin/CLAUDE.md` rule 2b), so there is nowhere both surfaces could
 * reach these eight lines from.
 */
function familyQuery(raw) {
  const value = raw.trim();
  if (value.includes('@') && !value.endsWith('@')) {
    return { email: value };
  }
  if (/^[A-Za-z0-9]{20,128}$/.test(value)) {
    return { uid: value };
  }
  return { q: value };
}

/**
 * Every family a page at a time, and any family by name, email or uid.
 *
 * **One page since 2026-09-25, where there were two.** Family lookup had grown
 * the whole browse underneath it, so an operator met two reason boxes, two ways
 * to open the same family and two places its record appeared. The merge is in
 * the UI only — the three reads stay three endpoints with three audit shapes:
 *
 * - **Browse**, `fetchFamilyList`: loads on arrival with no reason (since
 *   2026-09-14 — a reason demanded before the first row appears is a password,
 *   not an account of anything) and returns no email. `getFamilyList` carries
 *   both decisions.
 * - **Search**, `searchFamilies`: runs on Enter, never per keystroke, and may
 *   return an email because the operator had to know something to type it.
 * - **Open**, `fetchFamilyDetail`: the read that returns an address, a device
 *   list and who else can see the children, and it still refuses without a
 *   stated reason. One person operates this product with no colleague to ask
 *   "why this family?" — the reason is the only thing that makes the audit log
 *   answerable months later.
 */
function Families() {
  const { t, formatNumber } = useT();
  const [reason, setReason] = useState('');
  const [planId, setPlanId] = useState('');
  const [status, setStatus] = useState('');
  const [query, setQuery] = useState('');
  // Leaving the page and coming back shows what this tab already paged through.
  const [rows, setRows] = useState(
    () => readCached(familiesKey(planId, status))?.rows ?? null,
  );
  const [cursor, setCursor] = useState(
    () => readCached(familiesKey(planId, status))?.cursor ?? null,
  );
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [detail, setDetail] = useState(null);
  const [opening, setOpening] = useState(null);
  const [sort, setSort] = useState(null);
  // A search's answer, or null while browsing. Held in state and never in the
  // session cache: it can carry email addresses, which the browse never does.
  const [found, setFound] = useState(null);
  const [searching, setSearching] = useState(false);

  const remaining = MIN_REASON_LENGTH - reason.trim().length;
  const ready = remaining <= 0;
  const canSearch = query.trim().length >= MIN_QUERY_LENGTH;

  /**
   * The reason travels with the list when one is typed, but typing it must not
   * re-fetch a page per keystroke — so it is read through a ref and `load`
   * depends on the filters alone, which are exactly the changes that invalidate
   * the rows already on screen.
   */
  const reasonRef = useRef(reason);
  reasonRef.current = reason;
  const rowsRef = useRef(rows);
  rowsRef.current = rows;

  const load = useCallback(
    next => {
      setBusy(true);
      setError(null);
      fetchFamilyList({
        reason: reasonRef.current.trim(),
        cursor: next,
        limit: FAMILY_PAGE_SIZE,
        planId,
        status,
      })
        .then(page => {
          // Appended rather than replaced: paging forward is reading more of
          // one list, and a cursor-based API has no way back to a page it has
          // already handed over. Cached whole for the same reason.
          const merged = next
            ? [...(rowsRef.current ?? []), ...page.families]
            : page.families;
          const nextCursor = page.nextCursor ?? null;
          writeCached(familiesKey(planId, status), {
            rows: merged,
            cursor: nextCursor,
          });
          setRows(merged);
          setCursor(nextCursor);
        })
        .catch(listError => setError(listError.message))
        .finally(() => setBusy(false));
    },
    [planId, status],
  );

  // The first page on arrival, and a fresh first page whenever a filter
  // changes — `load`'s identity changes with exactly those two. A list this
  // tab still holds for those filters is shown instead of read again; Reload
  // below always reads.
  useEffect(() => {
    const held = readCached(familiesKey(planId, status));
    if (held) {
      setRows(held.rows);
      setCursor(held.cursor);
      return;
    }
    load(null);
  }, [load, planId, status]);

  /**
   * One box, two jobs, told apart by what triggers them.
   *
   * Typing narrows the rows already fetched and reads nothing. Enter or the
   * button searches every family — a uid or a full email in one read, anything
   * else a scan of up to `NAME_SCAN_LIMIT` documents, which is why the search is
   * never wired to `onChange`: ten characters would be ten scans.
   */
  const search = useCallback(() => {
    const value = query.trim();
    if (value.length < MIN_QUERY_LENGTH) {
      return;
    }
    setSearching(true);
    setError(null);
    searchFamilies(familyQuery(value))
      .then(answer =>
        setFound({
          query: value,
          rows: answer.results ?? [],
          truncated: answer.truncated === true,
        }),
      )
      // A uid or email branch that matched nothing answers 404 with no message,
      // so it arrives here as `Request failed (404)` rather than as an empty
      // result set. Same meaning to the operator; not worth threading a status
      // code through `api.js` to say it twice.
      .catch(searchFailure => setError(searchFailure.message))
      .finally(() => setSearching(false));
  }, [query]);

  const backToList = () => {
    setFound(null);
    setQuery('');
  };

  /**
   * What the table shows. Browsing, plan and subscription were applied by the
   * server and the box narrows the loaded rows. Searching, the server matched
   * on the text alone, so the two selects narrow its answer here — a search
   * result carries both fields for exactly that.
   */
  const needle = found ? '' : fold(query);
  const visible = found
    ? found.rows.filter(
        family =>
          (!planId || family.planId === planId) &&
          (!status || family.subscriptionStatus === status),
      )
    : (rows ?? []).filter(
        family =>
          !needle ||
          fold(family.name).includes(needle) ||
          fold(family.uid).includes(needle),
      );

  /**
   * Sorting orders the rows on screen: the counts are computed per row, not
   * stored, so no index can order the whole collection by them. While a next
   * page exists the hint under the table says so.
   *
   * Descending first — "most devices" is the usual question — then ascending,
   * for the families with none, then back to the server's order.
   */
  const toggleSort = key =>
    setSort(current => {
      if (current?.key !== key) return { key, direction: 'desc' };
      return current.direction === 'desc' ? { key, direction: 'asc' } : null;
    });
  const shown = sort ? [...visible].sort(byCount(sort.key, sort.direction)) : visible;

  const open = useCallback(
    uid => {
      setOpening(uid);
      setError(null);
      setDetail(null);
      fetchFamilyDetail(uid, reason.trim())
        .then(setDetail)
        .catch(detailError => setError(detailError.message))
        .finally(() => setOpening(null));
    },
    [reason],
  );

  return (
    <div className="card">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <div className="field-group" style={{ flex: '1 1 160px' }}>
          <label className="field-label" htmlFor="families-plan">
            {t('families.filterPlan')}
          </label>
          <select
            className="field"
            id="families-plan"
            value={planId}
            onChange={event => setPlanId(event.target.value)}
          >
            <option value="">{t('families.filterAny')}</option>
            {FAMILY_PLAN_IDS.map(plan => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
          </select>
        </div>

        <div className="field-group" style={{ flex: '1 1 160px' }}>
          <label className="field-label" htmlFor="families-status">
            {t('families.filterStatus')}
          </label>
          <select
            className="field"
            id="families-status"
            value={status}
            onChange={event => setStatus(event.target.value)}
          >
            <option value="">{t('families.filterAny')}</option>
            {FAMILY_STATUSES.map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div className="field-group" style={{ flex: '2 1 320px' }}>
          <label className="field-label" htmlFor="families-query">
            {t('families.filterName')}
          </label>
          <div style={{ display: 'flex', gap: 12 }}>
            <input
              className="field"
              id="families-query"
              value={query}
              onChange={event => setQuery(event.target.value)}
              onKeyDown={event => {
                if (event.key === 'Enter') {
                  search();
                }
              }}
            />
            <button className="btn" disabled={!canSearch || searching} onClick={search}>
              {searching ? t('search.searching') : t('families.searchAll')}
            </button>
          </div>
        </div>
      </div>
      <div className="field-hint">{t('families.filterNameHint')}</div>

      <div className="field-group" style={{ marginTop: 14 }}>
        <label className="field-label" htmlFor="families-reason">
          {t('lookup.reason')}
        </label>
        <input
          className="field"
          id="families-reason"
          value={reason}
          onChange={event => setReason(event.target.value)}
        />
        <div className="field-hint">
          {remaining > 0
            ? t('families.reasonForOpening', { count: remaining })
            : t('families.reasonStored')}
        </div>
      </div>

      {found ? (
        <div className="ticket-meta" style={{ alignItems: 'center' }}>
          <button className="btn" onClick={backToList}>
            {t('families.backToList')}
          </button>
          <span>
            {visible.length === found.rows.length
              ? t('families.found', { count: found.rows.length, query: found.query })
              : t('families.foundFiltered', {
                  count: visible.length,
                  total: found.rows.length,
                  query: found.query,
                })}
          </span>
        </div>
      ) : (
        <button className="btn" disabled={busy} onClick={() => load(null)}>
          {busy && !rows ? t('families.loading') : t('families.reload')}
        </button>
      )}

      {error ? (
        <div className="error-banner" style={{ marginTop: 14 }}>
          <span>{error}</span>
        </div>
      ) : null}

      {found?.truncated ? (
        <p className="muted" style={{ marginTop: 14 }}>
          {t('search.truncated')}
        </p>
      ) : null}

      {found && found.rows.length === 0 ? (
        <p className="muted" style={{ marginTop: 14 }}>
          {t('search.noMatch')}
        </p>
      ) : null}

      {!found && rows && rows.length === 0 ? (
        <p className="muted" style={{ marginTop: 14 }}>
          {t('families.empty')}
        </p>
      ) : null}

      {!found && rows && rows.length > 0 && visible.length === 0 ? (
        <p className="muted" style={{ marginTop: 14 }}>
          {t('families.noneMatchLoaded')}
        </p>
      ) : null}

      {visible.length > 0 ? (
        <div className="table-scroll sticky-head" style={{ marginTop: 14 }}>
          <table className="table">
            <thead>
              <tr>
                <th>{t('search.colName')}</th>
                {/* Only a search answer carries an address — see `Families`. */}
                {found ? <th>{t('search.colEmail')}</th> : null}
                <th>{t('search.colPlan')}</th>
                <th>{t('families.colSubscription')}</th>
                {FAMILY_COUNT_COLUMNS.map(([key, label]) => {
                  const direction = sort?.key === key ? sort.direction : null;
                  return (
                    <th
                      key={key}
                      aria-sort={
                        direction === 'asc'
                          ? 'ascending'
                          : direction === 'desc'
                            ? 'descending'
                            : 'none'
                      }
                    >
                      <button
                        className={direction ? 'th-sort is-active' : 'th-sort'}
                        onClick={() => toggleSort(key)}
                      >
                        {t(label)}
                        <span className="sort-mark" aria-hidden="true">
                          {direction === 'asc' ? '▲' : direction === 'desc' ? '▼' : '↕'}
                        </span>
                      </button>
                    </th>
                  );
                })}
                <th>{t('families.colCreated')}</th>
                <th>{t('search.colUid')}</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {shown.map(family => (
                <tr key={family.uid}>
                  <td>{family.name ?? t('family.noName')}</td>
                  {found ? <td>{family.email ?? t('family.noEmail')}</td> : null}
                  <td>{family.planId ?? t('family.noPlan')}</td>
                  <td>{family.subscriptionStatus ?? t('families.noSubscription')}</td>
                  {/* `formatNumber` prints `—` for a missing count: a row
                      cached before the server returned counts, or one
                      served by a function not yet redeployed. */}
                  {FAMILY_COUNT_COLUMNS.map(([key]) => (
                    <td key={key}>{formatNumber(family[key])}</td>
                  ))}
                  <td>{stamp(family.createdAt)}</td>
                  <td>
                    <code>{family.uid}</code>
                  </td>
                  <td>
                    {/*
                      Opening a family is the read that still demands a
                      reason, so the button waits for one — the list above it
                      does not.
                    */}
                    <button
                      className="btn-ghost"
                      disabled={opening !== null || !ready}
                      title={ready ? undefined : t('families.reasonToOpen')}
                      onClick={() => open(family.uid)}
                    >
                      {opening === family.uid
                        ? t('families.opening')
                        : t('families.open')}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {!found && rows && rows.length > 0 ? (
        <div className="ticket-meta" style={{ marginTop: 12 }}>
          <span>
            {needle
              ? t('families.shownFiltered', {
                  count: visible.length,
                  loaded: rows.length,
                })
              : t('families.shown', { count: rows.length })}
          </span>
          {cursor ? (
            <button className="btn-ghost" disabled={busy} onClick={() => load(cursor)}>
              {busy
                ? t('families.loading')
                : t('families.loadMore', { count: FAMILY_PAGE_SIZE })}
            </button>
          ) : (
            <span>{t('families.end')}</span>
          )}
        </div>
      ) : null}
      {!found && sort && cursor ? (
        <div className="field-hint">
          {t('families.sortedLoaded', { count: rows.length })}
        </div>
      ) : null}

      {detail ? <FamilyDetail family={detail} /> : null}
    </div>
  );
}

function ago(iso, t) {
  if (!iso) {
    return null;
  }
  const parsed = Date.parse(iso);
  if (!Number.isFinite(parsed)) {
    return String(iso);
  }
  const hours = (Date.now() - parsed) / 3600000;
  if (hours < 1) {
    return t('time.justNow');
  }
  if (hours < 48) {
    return t('time.hoursAgo', { count: Math.round(hours) });
  }
  return t('time.daysAgo', { count: Math.round(hours / 24) });
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
  const { t } = useT();
  const devices = [...(family.childDevices ?? []), ...(family.parentDevices ?? [])];
  // Absent on a response from before `getFamilyDetail` returned them, which is
  // not the same as a family with no secondary parent — but the console and the
  // function deploy together, so the two cases cannot coexist for long.
  const members = family.members ?? [];
  const children = family.children ?? [];

  return (
    <div style={{ marginTop: 16 }}>
      <div className="tile-grid" style={{ marginBottom: 12 }}>
        <div className="tile">
          <div className="tile-label">{t('family.plan')}</div>
          <div className="tile-value" style={{ fontSize: 19 }}>
            {family.planId ?? t('family.noPlan')}
          </div>
          <div className="tile-label" style={{ marginTop: 4 }}>
            {family.subscriptionStatus
              ? t('family.subscription', { status: family.subscriptionStatus })
              : t('family.neverPurchased')}
          </div>
        </div>
        <div className="tile">
          <div className="tile-label">{t('family.trial')}</div>
          <div className="tile-value" style={{ fontSize: 19 }}>
            {family.trialStartedAt
              ? stamp(family.trialEndsAt)
              : t('family.trialNotStarted')}
          </div>
          <div className="tile-label" style={{ marginTop: 4 }}>
            {family.trialStartedAt
              ? t('family.trialStarted', { date: stamp(family.trialStartedAt) })
              : ''}
          </div>
        </div>
        <div className="tile">
          <div className="tile-label">{t('family.children')}</div>
          <div className="tile-value" style={{ fontSize: 19 }}>
            {family.childCount ?? 0}
          </div>
          <div className="tile-label" style={{ marginTop: 4 }}>
            {t('family.deviceSplit', {
              child: family.childDeviceCount,
              parent: family.parentDeviceCount,
            })}
          </div>
        </div>
        <div className="tile">
          <div className="tile-label">{t('family.signedUp')}</div>
          <div className="tile-value" style={{ fontSize: 19 }}>
            {stamp(family.createdAt)}
          </div>
          <div className="tile-label" style={{ marginTop: 4 }}>
            {family.email ?? t('family.noEmail')}
          </div>
        </div>
        {/*
         * The per-family half of the Time-to-purchase section on Report.
         * `firstPurchasedAt` is written once and never rewritten, so this is
         * the conversion date — not `subscription.updatedAt`, which every
         * renewal moves. Absent on a family that converted before the field
         * shipped and could not be backfilled.
         */}
        <div className="tile">
          <div className="tile-label">{t('family.firstPaid')}</div>
          <div className="tile-value" style={{ fontSize: 19 }}>
            {family.firstPurchasedAt
              ? stamp(family.firstPurchasedAt)
              : t('family.neverPaid')}
          </div>
          <div className="tile-label" style={{ marginTop: 4 }}>
            {family.firstPurchasedAt
              ? Number.isFinite(family.daysToPurchase)
                ? t('family.daysAfterSignup', { count: family.daysToPurchase })
                : t('family.noSignupDate')
              : family.subscriptionStatus
                ? t('family.paidBeforeRecorded')
                : ''}
          </div>
        </div>
      </div>

      {family.deletionState ? (
        <div className="status-strip" style={{ marginBottom: 12 }}>
          <span className="status-dot is-critical" />
          <span className="status-label">
            {t('family.deletionState', { status: family.deletionState.status })}
          </span>
          <span className="status-detail">
            {t('family.purgeAfter', { date: stamp(family.deletionState.purgeAfter) })}
            <code>purgeScheduledDeletions</code>
            {t('family.purgeBy')}
          </span>
        </div>
      ) : null}

      <div className="ticket-meta" style={{ marginBottom: 12 }}>
        <span>{family.name ?? t('family.noName')}</span>
        <span>{family.parentPinSet ? t('family.pinSet') : t('family.pinNotSet')}</span>
        <span>
          {family.messageAiConsent === null
            ? t('family.aiConsentNeverAsked')
            : family.messageAiConsent
              ? t('family.aiConsentOn')
              : t('family.aiConsentOff')}
        </span>
        <span>{t('family.uid', { uid: family.uid })}</span>
      </div>

      {devices.length === 0 ? (
        <p className="muted">{t('family.noDevices')}</p>
      ) : (
        <div className="table-scroll">
          <table className="table">
            <thead>
              <tr>
                <th>{t('family.colDevice')}</th>
                <th>{t('family.colRole')}</th>
                <th>{t('family.colPlatform')}</th>
                <th>{t('family.colOs')}</th>
                <th>{t('family.colApp')}</th>
                <th>{t('family.colBuild')}</th>
                <th>{t('family.colOta')}</th>
                <th>{t('family.colLang')}</th>
                <th>{t('family.colLastSeen')}</th>
                <th>{t('family.colDenied')}</th>
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
                  <td>
                    {ago(device.lastActiveAt, t) ?? '—'}
                    {/*
                      A parked device stops reporting on purpose, so without
                      this the column reads the same for a working free tier
                      and a dead install — the one question this table gets
                      opened to answer.
                    */}
                    {device.monitoringState === 'parked' ? (
                      <span className="faint"> {t('family.parked')}</span>
                    ) : null}
                  </td>
                  <td>
                    {device.deniedPermissions?.length > 0 ? (
                      <b>{device.deniedPermissions.join(', ')}</b>
                    ) : device.hasCapabilityProbe ? (
                      t('family.deniedNone')
                    ) : (
                      // Absent probe is unknown, never "nothing denied".
                      <span className="faint">{t('family.noProbe')}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/*
        The people, above the hardware that belongs to them. A child with no
        assigned device is the row a support case is usually about — nothing
        was ever enforced for that child — so the count is a column rather
        than something to derive from the device table above.
      */}
      {children.length > 0 ? (
        <>
          {/*
            Its own key, not the tile's `family.children`: that one labels a
            number ("Số trẻ" in Vietnamese) and reads wrong over a list of
            people.
          */}
          <div className="field-label" style={{ marginTop: 18 }}>
            {t('family.childrenList')}
          </div>
          <div className="table-scroll">
            <table className="table">
              <thead>
                <tr>
                  <th>{t('search.colName')}</th>
                  <th>{t('family.colChildDevices')}</th>
                  <th>{t('families.colCreated')}</th>
                </tr>
              </thead>
              <tbody>
                {children.map(child => (
                  <tr key={child.childId}>
                    <td>{child.name ?? t('family.noName')}</td>
                    <td>
                      {child.deviceCount === 0 ? (
                        <b>{t('family.childNoDevice')}</b>
                      ) : (
                        child.deviceCount
                      )}
                    </td>
                    <td>{stamp(child.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : null}

      {/*
        Secondary parents, and the empty case says so rather than rendering
        nothing. A member holds the same read access to location and web
        history the owner does, so "this family has none" is an answer a
        support case wants, not an absence to hide.
      */}
      <div className="field-label" style={{ marginTop: 18 }}>
        {t('family.members')}
      </div>
      {members.length === 0 ? (
        <p className="muted">{t('family.noMembers')}</p>
      ) : (
        <div className="table-scroll">
          <table className="table">
            <thead>
              <tr>
                <th>{t('family.colMember')}</th>
                <th>{t('family.colPlatform')}</th>
                <th>{t('family.colMemberAdded')}</th>
                <th>{t('family.colLastSeen')}</th>
                <th>{t('search.colUid')}</th>
              </tr>
            </thead>
            <tbody>
              {members.map(member => (
                <tr key={member.uid}>
                  <td>{member.label ?? t('family.noName')}</td>
                  <td>{member.platform ?? '—'}</td>
                  <td>{stamp(member.addedAt)}</td>
                  <td>{ago(member.lastActiveAt, t) ?? '—'}</td>
                  <td>
                    <code>{member.uid}</code>
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
 *
 * `labelKey`, not `label`: the sidebar and the topbar title both read it at
 * render time, so the language switch reaches both.
 */
const PAGES = [
  { key: 'overview', labelKey: 'nav.overview', icon: 'overview' },
  { key: 'report', labelKey: 'nav.report', icon: 'report' },
  { key: 'fleet', labelKey: 'nav.fleet', icon: 'fleet' },
  { key: 'support', labelKey: 'nav.support', icon: 'support' },
  { key: 'families', labelKey: 'nav.families', icon: 'families' },
];

/** Hashes that used to be pages. Family lookup became part of Families on 2026-09-25. */
const ROUTE_ALIASES = { lookup: 'families' };

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
    const hash = window.location.hash.replace(/^#\/?/, '');
    const key = ROUTE_ALIASES[hash] ?? hash;
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
  const { t } = useT();
  const [user, setUser] = useState(undefined);
  const [operatorStatus, retryOperatorCheck] = useOperatorStatus(user || null);
  const route = useHashRoute();

  useEffect(
    () =>
      onAuthStateChanged(auth, next => {
        // Families' names and words must not carry over to whoever signs in
        // next on this browser — `sessionCache.js`.
        if (!next) {
          clearCached();
        }
        setUser(next);
      }),
    [],
  );

  if (user === undefined) {
    return <p className="page-loading">{t('common.loading')}</p>;
  }
  if (!user) {
    return <SignIn />;
  }

  // Gate the whole home page on the claim, not each panel individually —
  // otherwise a non-operator briefly sees this app's layout and three
  // separately-failing panels before anything says why.
  if (operatorStatus === 'checking') {
    return <p className="page-loading">{t('common.checkingAccess')}</p>;
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
            <div className="sidebar-brand-sub">{t('nav.consoleName')}</div>
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
              {t(page.labelKey)}
            </a>
          ))}
        </nav>
        <div className="sidebar-foot">
          <div className="sidebar-user">{user.email}</div>
          <button className="btn btn-sidebar" onClick={() => signOut(auth)}>
            {t('common.signOut')}
          </button>
        </div>
      </aside>

      <div className="main">
        <header className="topbar">
          <h1 className="topbar-title">
            {t(PAGES.find(page => page.key === route)?.labelKey ?? 'nav.overview')}
          </h1>
          <div style={{ alignItems: 'center', display: 'flex', gap: 10 }}>
            <span className="muted">{t('nav.environment')}</span>
            <LanguageSwitch />
          </div>
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
            {route === 'overview' ? <Metrics /> : null}
            {route === 'report' ? <Report /> : null}
            {route === 'fleet' ? <Fleet /> : null}
            {route === 'support' ? <Support /> : null}
            {route === 'families' ? (
              <>
                <div className="section-head">
                  <h2 className="section-title">{t('nav.families')}</h2>
                </div>
                <Families />
              </>
            ) : null}
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
}
