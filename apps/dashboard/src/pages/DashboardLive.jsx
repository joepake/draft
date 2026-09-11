import { useCallback, useEffect, useMemo, useState } from 'react';
import Dashboard from './Dashboard.jsx';
import Login from './Login.jsx';
import { AuthProvider, useAuth } from '../auth/AuthContext.jsx';
import { useFamilyData } from '../dashboard/useFamilyData.js';
import { useFamilyReports } from '../dashboard/useFamilyReports.js';
import { createActions } from '../dashboard/controlsApi.js';
import { useT } from '@kidgate/web-ui/useT';
import LanguagePicker from '@kidgate/web-ui/LanguagePicker';
import { trackScreen } from '../lib/analytics.js';

function Splash({ children }) {
  return (
    <div className="login">
      <div className="login-card login-card-slim">{children}</div>
    </div>
  );
}

/**
 * Auth lives here rather than around the whole app so the Firebase SDK stays
 * inside this lazily-loaded route — the marketing pages must not pay for it.
 */
export default function DashboardLive() {
  return (
    <AuthProvider>
      <LiveGate />
    </AuthProvider>
  );
}

function LiveGate() {
  const { user, loading, configured, signOut } = useAuth();
  const { t } = useT();
  const [deviceId, setDeviceId] = useState(null);
  const onDeviceChange = useCallback(id => setDeviceId(id), []);

  /*
   * The only screen change this app has: one route, three states, decided here.
   *
   * Reported from an effect rather than beside each `return`, so a re-render
   * that lands on the same screen does not count a second view — the gate
   * re-runs on every auth tick and on every device selection.
   */
  const screen =
    !configured || (!loading && !user) ? 'login' : loading ? 'splash' : 'dashboard';
  useEffect(() => {
    trackScreen(screen);
  }, [screen]);

  if (!configured || (!loading && !user)) {
    return <Login />;
  }

  if (loading) {
    return (
      <Splash>
        <p className="login-sub">{t('live.checkingSession')}</p>
      </Splash>
    );
  }

  return (
    <LiveDashboard
      user={user}
      deviceId={deviceId}
      onDeviceChange={onDeviceChange}
      signOut={signOut}
    />
  );
}

function LiveDashboard({ user, deviceId, onDeviceChange, signOut }) {
  const { canWrite } = useAuth();
  const { t } = useT();
  const { data, loading, error, familyId, unknownAccount } = useFamilyData(
    user,
    deviceId,
  );
  const reports = useFamilyReports(familyId);
  // No `getIdToken`: the API adapter reads the current session itself, which is
  // what lets a repository ask for `{ as: 'parent' }` and learn nothing about
  // how this platform proves it.
  /*
   * A joined co-parent signs in with their own uid and reads the owner's
   * family, so "am I the owner" is exactly whether the two match — the same
   * comparison `resolveFamilyRootForParent` makes server-side. Renaming and
   * unpairing are the owner's alone.
   */
  const isOwner = Boolean(familyId && user?.uid === familyId);
  const actions = useMemo(
    () => (familyId ? createActions({ familyId, canWrite, isOwner }) : null),
    [familyId, canWrite, isOwner],
  );

  if (loading) {
    return (
      <Splash>
        <p className="login-sub">{t('live.loadingFamily')}</p>
      </Splash>
    );
  }

  if (error) {
    return (
      <Splash>
        <h1>{t('live.loadFailedTitle')}</h1>
        <p className="login-sub">
          {/* The port's normalised code, not the JS SDK's `permission-denied`:
              every adapter maps its SDK's spelling onto the same enum. */}
          {error.code === 'permissionDenied' ? t('live.noAccess') : error.message}
        </p>
        <button className="btn btn-primary btn-block" onClick={signOut}>
          {t('common.signOut')}
        </button>
      </Splash>
    );
  }

  /*
   * Said here rather than inside the dashboard, and with the same words a
   * refused read gets, because it is the same fact: this account has no family
   * to show. The difference is only how it was discovered — a rules denial
   * there, an empty root here — and a parent does not need to know which.
   *
   * Sign out is the whole action. There is no pairing flow on the web
   * (`docs/BACKLOG.md`), so the way out of both cases is the same one.
   */
  if (unknownAccount) {
    return (
      <Splash>
        <h1>{t('live.noAccessTitle')}</h1>
        <p className="login-sub">{t('live.noAccess')}</p>
        <button className="btn btn-primary btn-block" onClick={signOut}>
          {t('common.signOut')}
        </button>
      </Splash>
    );
  }

  return (
    <Dashboard
      data={data}
      actions={actions}
      reports={reports}
      familyId={familyId}
      onDeviceChange={onDeviceChange}
      sideFooter={
        <div className="side-account">
          {/*
            The language picker, the way out and who you are: three facts about
            this browser rather than about the family on screen, so they share
            the footer's last block instead of taking three rows and a second
            rule of their own. The picker used to render from `Dashboard.jsx`,
            which is what put a full-width row between it and the sign-out it
            belongs beside.
          */}
          <div className="side-account-row">
            <LanguagePicker variant="side" />
            <button className="login-link" onClick={signOut}>
              {t('common.signOut')}
            </button>
          </div>
          {/* Email first, matching the app's getAccountDisplayLabel — a
              display name is often a placeholder like "Guest". Its own row:
              an address long enough to matter is one that truncates, and it
              should not be the thing that shortens the two controls above. */}
          <span className="side-account-email" title={user.email || ''}>
            {user.email || user.displayName}
          </span>
        </div>
      }
    />
  );
}
