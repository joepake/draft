import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { initI18n } from '@kidgate/i18n/web';
import { initAnalytics, installErrorReporting } from './lib/analytics';
import { applyTheme } from '@kidgate/web-ui/theme';
import '@kidgate/web-ui/index.css';

// Tokens onto `:root` before the first paint — the stylesheets hold only
// `var(--kg-…)`, so a frame drawn before this is a frame with no colours.
// `dark: true`: the web surfaces are designed dark, so they run the classic
// pack's dark palette — same tokens as a phone whose family chose dark.
applyTheme(undefined, true);

/*
 * Analytics starts alongside the app and is never awaited.
 *
 * `isSupported()` does a round of storage probing, and a dashboard that waited
 * for a measurement library before painting would be a slower product in
 * exchange for nothing. Every failure inside is swallowed; the worst outcome is
 * a session that goes uncounted.
 *
 * Deliberately after `initI18n` is *started* rather than inside its callback:
 * the two are unrelated, and chaining them would make the first paint wait on
 * the slower of the two.
 */
void initAnalytics();

/*
 * Before the first render, so an error thrown while mounting is reported too.
 * The listeners are cheap and cost nothing when analytics is off — `track`
 * returns early with no instance.
 */
installErrorReporting();

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
