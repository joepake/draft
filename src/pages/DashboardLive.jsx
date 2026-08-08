import { useCallback, useMemo, useState } from 'react'
import Dashboard from './Dashboard.jsx'
import Login from './Login.jsx'
import { AuthProvider, useAuth } from '../auth/AuthContext.jsx'
import { useFamilyData } from '../dashboard/useFamilyData.js'
import { createActions } from '../dashboard/controlsApi.js'
import { useT } from '../i18n/useT.js'

function Splash({ children }) {
  return (
    <div className="login">
      <div className="login-card login-card-slim">{children}</div>
    </div>
  )
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
  )
}

function LiveGate() {
  const { user, loading, configured, signOut } = useAuth()
  const { t } = useT()
  const [deviceId, setDeviceId] = useState(null)
  const onDeviceChange = useCallback((id) => setDeviceId(id), [])

  if (!configured || (!loading && !user)) {
    return <Login />
  }

  if (loading) {
    return (
      <Splash>
        <p className="login-sub">{t('live.checkingSession')}</p>
      </Splash>
    )
  }

  return (
    <LiveDashboard
      user={user}
      deviceId={deviceId}
      onDeviceChange={onDeviceChange}
      signOut={signOut}
    />
  )
}

function LiveDashboard({ user, deviceId, onDeviceChange, signOut }) {
  const { getIdToken, canWrite } = useAuth()
  const { t } = useT()
  const { data, loading, error, familyId } = useFamilyData(user, deviceId)
  const actions = useMemo(
    () => (familyId ? createActions({ familyId, getIdToken, canWrite }) : null),
    [familyId, getIdToken, canWrite],
  )

  if (loading) {
    return (
      <Splash>
        <p className="login-sub">{t('live.loadingFamily')}</p>
      </Splash>
    )
  }

  if (error) {
    return (
      <Splash>
        <h1>{t('live.loadFailedTitle')}</h1>
        <p className="login-sub">
          {error.code === 'permission-denied' ? t('live.noAccess') : error.message}
        </p>
        <button className="btn btn-primary btn-block" onClick={signOut}>
          {t('common.signOut')}
        </button>
      </Splash>
    )
  }

  return (
    <Dashboard
      data={data}
      actions={actions}
      onDeviceChange={onDeviceChange}
      sideFooter={
        <div className="side-account">
          {/* Email first, matching the app's getAccountDisplayLabel — a
              display name is often a placeholder like "Guest". */}
          <span title={user.email || ''}>{user.email || user.displayName}</span>
          <button className="login-link" onClick={signOut}>
            {t('common.signOut')}
          </button>
        </div>
      }
    />
  )
}
