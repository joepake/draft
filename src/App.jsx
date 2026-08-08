import { lazy, Suspense } from 'react'
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Terms from './pages/Terms.jsx'
import DeleteAccount from './pages/DeleteAccount.jsx'
import Support from './pages/Support.jsx'
import Icon from './components/Icon.jsx'
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

function SiteHeader() {
  return (
    <header className="header">
      <Link to="/" className="brand">
        <span className="brand-mark" aria-hidden="true">
          <Icon name="shield" />
        </span>
        KidGate
      </Link>
      <nav className="nav" aria-label="Main">
        <NavLink to="/support">Support</NavLink>
        <NavLink to="/privacy-policy">Privacy</NavLink>
        <NavLink to="/terms">Terms</NavLink>
        <NavLink to="/dashboard" className="nav-cta">
          Parent sign in
        </NavLink>
      </nav>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Link to="/" className="brand">
            <span className="brand-mark" aria-hidden="true">
              <Icon name="shield" />
            </span>
            KidGate
          </Link>
          <p className="footer-blurb">
            Parental control that helps families agree on screen time instead of
            fighting about it.
          </p>
        </div>

        <div>
          <h4>Product</h4>
          <ul>
            <li>
              <Link to="/dashboard">Parent dashboard</Link>
            </li>
            <li>
              <Link to="/support">Support &amp; guides</Link>
            </li>
            <li>
              <a href="mailto:kidgate.support@gmail.com">Contact us</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to="/delete-account">Delete your data</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-base">
        <span>&copy; {new Date().getFullYear()} KidGate. All rights reserved.</span>
        <span>Made for families on iOS and Android.</span>
      </div>
    </footer>
  )
}

export default function App() {
  // The dashboard and the sign-in screen bring their own shell — the marketing
  // header and footer would sit on top as a second, contradicting navigation.
  const isDashboard = useLocation().pathname.startsWith('/dashboard')

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {!isDashboard && <SiteHeader />}
      <main className="main" id="main">
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
      {!isDashboard && <SiteFooter />}
    </div>
  )
}
