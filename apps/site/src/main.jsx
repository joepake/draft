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
// Light, and never the visitor's `prefers-color-scheme`: the phone starts light,
// so a parent arriving from an ad sees the app they are about to install. The
// site ran dark until 2026-10 and read as a surveillance tool to the parents it
// is selling to — the opposite of its headline.
applyTheme();

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
