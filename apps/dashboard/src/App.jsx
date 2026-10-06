import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLive from './pages/DashboardLive.jsx';
import AuthAction, { readAuthAction } from './pages/AuthAction.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
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

export default function App() {
  const { t } = useT();
  // At the root: Firebase appends its query to whatever URL the console holds,
  // and `/` needs no route of its own (`docs/EMAIL_TEMPLATES.md`).
  const authAction = readAuthAction();

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        {t('nav.skip')}
      </a>
      <main className="main" id="main">
        {/* Inside `main` and not around the whole app, so the skip link above
            survives a crash and the fallback lands where a screen reader is
            already pointed. */}
        <ErrorBoundary>
          {authAction ? (
            <AuthAction {...authAction} />
          ) : (
            <Routes>
              <Route path="/" element={<DashboardLive />} />
              {/* Anything else on this host is a stale bookmark from when the
                  dashboard was a route on the marketing site. */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          )}
        </ErrorBoundary>
      </main>
    </div>
  );
}
