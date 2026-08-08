import { lazy, Suspense } from 'react'
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Terms from './pages/Terms.jsx'
import DeleteAccount from './pages/DeleteAccount.jsx'
import Support from './pages/Support.jsx'
import './dashboard.css'

// Split out so the marketing and legal pages never download the Firebase SDK.
const DashboardLive = lazy(() => import('./pages/DashboardLive.jsx'))

function RouteFallback() {
  return (
    <div className="login">
      <div className="login-card login-card-slim">
        <p className="login-sub">Loading…</p>
      </div>
    </div>
  )
}

export default function App() {
  // The dashboard and the sign-in screen bring their own shell — the marketing
  // header and footer would sit on top as a second, contradicting navigation.
  const isDashboard = useLocation().pathname.startsWith('/dashboard')

  return (
    <div className="app">
      {!isDashboard && (
        <header className="header">
          <Link to="/" className="brand">
            KidGate
          </Link>
          <nav className="nav">
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            <NavLink to="/terms">Terms &amp; Conditions</NavLink>
            <NavLink to="/support">Support</NavLink>
          </nav>
        </header>
      )}
      <main className="main">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/delete-account" element={<DeleteAccount />} />
            <Route path="/support" element={<Support />} />
            <Route path="/dashboard" element={<DashboardLive />} />
          </Routes>
        </Suspense>
      </main>
      {!isDashboard && (
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} KidGate. All rights reserved.</p>
        </footer>
      )}
    </div>
  )
}
