import { useCallback, useMemo, useState } from 'react'
import Dashboard from './Dashboard.jsx'
import Login from './Login.jsx'
import { AuthProvider, useAuth } from '../auth/AuthContext.jsx'
import { useFamilyData } from '../dashboard/useFamilyData.js'
import { createActions } from '../dashboard/controlsApi.js'

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
  const [deviceId, setDeviceId] = useState(null)
  const onDeviceChange = useCallback((id) => setDeviceId(id), [])

  if (!configured || (!loading && !user)) {
    return <Login />
  }

  if (loading) {
    return (
      <Splash>
        <p className="login-sub">Checking your session…</p>
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
  const { getIdToken } = useAuth()
  const { data, loading, error, familyId } = useFamilyData(user, deviceId)
  const actions = useMemo(
    () => (familyId ? createActions({ familyId, getIdToken }) : null),
    [familyId, getIdToken],
  )

  if (loading) {
    return (
      <Splash>
        <p className="login-sub">Loading your family…</p>
      </Splash>
    )
  }

  if (error) {
    return (
      <Splash>
        <h1>Could not load your family</h1>
        <p className="login-sub">
          {error.code === 'permission-denied'
            ? 'This account does not have access to a KidGate family. Sign in with the parent account you use in the app.'
            : error.message}
        </p>
        <button className="btn btn-primary btn-block" onClick={signOut}>
          Sign out
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
          <span title={user.email || ''}>{user.displayName || user.email}</span>
          <button className="login-link" onClick={signOut}>
            Sign out
          </button>
        </div>
      }
    />
  )
}
