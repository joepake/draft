import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Terms from './pages/Terms.jsx'
import DeleteAccount from './pages/DeleteAccount.jsx'
import Support from './pages/Support.jsx'
import BrandLogo from './components/BrandLogo.jsx'
import LanguagePicker from './i18n/LanguagePicker.jsx'
import { useT } from './i18n/useT.js'
import './dashboard.css'

// Split out so the marketing and legal pages never download the Firebase SDK.
const DashboardLive = lazy(() => import('./pages/DashboardLive.jsx'))

function RouteFallback() {
  const { t } = useT()
  return (
    <div className="login">
      <div className="login-card login-card-slim">
        <p className="login-sub">{t('common.loading')}</p>
      </div>
    </div>
  )
}

/** Title and description live in index.html for crawlers; this keeps them in
 *  step with the language the reader actually picked. */
function useDocumentMeta() {
  const { t, language } = useT()

  useEffect(() => {
    document.title = t('meta.title')
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', t('meta.description'))
  }, [t, language])
}

function SiteHeader() {
  const { t } = useT()

  return (
    <header className="header">
      <Link to="/" className="brand">
        <span className="brand-mark" aria-hidden="true">
          <BrandLogo />
        </span>
        KidGate
      </Link>
      <nav className="nav" aria-label={t('nav.main')}>
        <NavLink to="/support">{t('nav.support')}</NavLink>
        <NavLink to="/privacy-policy">{t('nav.privacy')}</NavLink>
        <NavLink to="/terms">{t('nav.terms')}</NavLink>
        <LanguagePicker />
        <NavLink to="/dashboard" className="nav-cta">
          {t('nav.signIn')}
        </NavLink>
      </nav>
    </header>
  )
}

function SiteFooter() {
  const { t } = useT()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Link to="/" className="brand">
            <span className="brand-mark" aria-hidden="true">
              <BrandLogo />
            </span>
            KidGate
          </Link>
          <p className="footer-blurb">{t('footer.blurb')}</p>
        </div>

        <div>
          <h4>{t('footer.product')}</h4>
          <ul>
            <li>
              <Link to="/dashboard">{t('footer.dashboard')}</Link>
            </li>
            <li>
              <Link to="/support">{t('footer.supportGuides')}</Link>
            </li>
            <li>
              <a href="mailto:support@kidgate.app">{t('footer.contact')}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>{t('footer.legal')}</h4>
          <ul>
            <li>
              <Link to="/privacy-policy">{t('footer.privacyPolicy')}</Link>
            </li>
            <li>
              <Link to="/terms">{t('footer.terms')}</Link>
            </li>
            <li>
              <Link to="/delete-account">{t('footer.deleteData')}</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-base">
        <span>{t('footer.rights', { year: new Date().getFullYear() })}</span>
        <span>{t('footer.madeFor')}</span>
      </div>
    </footer>
  )
}

export default function App() {
  const { t } = useT()
  useDocumentMeta()

  // The dashboard and the sign-in screen bring their own shell — the marketing
  // header and footer would sit on top as a second, contradicting navigation.
  const isDashboard = useLocation().pathname.startsWith('/dashboard')

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        {t('nav.skip')}
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
