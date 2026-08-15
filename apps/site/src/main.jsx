import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { initI18n } from '@kidgate/i18n/web';
import { applyTheme } from '@kidgate/web-ui/theme';
import { initAnalytics } from './lib/analytics.js';
import '@kidgate/web-ui/index.css';

// Tokens onto `:root` before the first paint — the stylesheets hold only
// `var(--kg-…)`, so a frame drawn before this is a frame with no colours.
// `dark: true`: the web surfaces are designed dark, so they run the classic
// pack's dark palette — same tokens as a phone whose family chose dark.
applyTheme(undefined, true);

/*
 * Three counters — visits, and a download click per desktop. Never awaited: a
 * marketing page must not wait on a measurement script to paint, and a build
 * with no `VITE_GA_MEASUREMENT_ID` does nothing at all here.
 *
 * `apps/site/CLAUDE.md` records why this exists on a public page with no
 * consent banner, and what would change it.
 */
initAnalytics();

// The active language pack is fetched before the first paint, so a French
// visitor never sees an English frame that then swaps under them.
initI18n().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
});
