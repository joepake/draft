import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLive from './pages/DashboardLive.jsx';
import { useT } from '@kidgate/web-ui/useT';
import '@kidgate/web-ui/dashboard.css';

/**
 * The parent dashboard, at dashboard.kidgate.app.
 *
 * No marketing shell: this app never renders the site header or footer, which
 * used to be suppressed by a path check inside one combined app. Two
 * deployments make that structural — a second, contradicting navigation is not
 * something a routing mistake can put back.
 *
 * The public pages live in `apps/site` and are linked to by absolute URL.
 */

const SITE_URL = import.meta.env.VITE_SITE_URL ?? 'https://kidgate.app';

export default function App() {
  const { t } = useT();

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        {t('nav.skip')}
      </a>
      <main className="main" id="main">
        <Routes>
          <Route path="/" element={<DashboardLive />} />
          {/* Anything else on this host is a stale bookmark from when the
              dashboard was a route on the marketing site. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="footer footer-slim">
        <a href={SITE_URL}>{t('nav.backToSite') ?? 'kidgate.app'}</a>
      </footer>
    </div>
  );
}
