import { useEffect } from 'react';
import { Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Terms from './pages/Terms.jsx';
import DeleteAccount from './pages/DeleteAccount.jsx';
import Support from './pages/Support.jsx';
import BrandLogo from '@kidgate/web-ui/BrandLogo';
import LanguagePicker from '@kidgate/web-ui/LanguagePicker';
import { useT } from '@kidgate/web-ui/useT';
import { isRtlLanguage } from '@kidgate/i18n/web/languages';
/*
 * The dashboard is a separate app now (`apps/dashboard`, dashboard.kidgate.app).
 *
 * It used to be a lazy route here, split out so these pages "never download the
 * Firebase SDK". Two deployments make that structural rather than a bundling
 * decision someone can undo: this app has no Firebase dependency to import.
 *
 * The URL moved to its own module when `pages/Support` turned out to need it
 * too — `[web dashboard](/dashboard)` in the locale packs was resolving to a
 * route this app does not have.
 */
import { DASHBOARD_AVAILABLE, DASHBOARD_URL } from './lib/dashboardUrl.js';
import { EMBED_INSET_TOP, IS_EMBEDDED } from './lib/embed.js';
import '@kidgate/web-ui/dashboard.css';

/**
 * Title and description live in index.html for crawlers; this keeps them in
 * step with the language the reader actually picked — and sets the layout
 * direction with them.
 *
 * **`dir` is set here rather than in `@kidgate/i18n/web`, and that is not
 * arbitrary.** The runtime is shared with `apps/dashboard`, whose stylesheet
 * still holds two dozen physical `margin-left` / `border-left` / `text-align:
 * right` declarations. Flipping `dir` there would reverse its flex rows and
 * leave every one of those offsets on its original side — the half-mirrored
 * page `packages/i18n/src/web/languages.js` describes, which is why Arabic was
 * pinned LTR in the first place. This site's stylesheet has been converted to
 * logical properties, so it can opt in; the dashboard opts in when its own
 * conversion lands.
 */
function useDocumentMeta() {
  const { t, language } = useT();

  useEffect(() => {
    document.title = t('meta.title');
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', t('meta.description'));
    // `lang` is set by the i18n runtime for screen-reader pronunciation; the
    // direction is this app's call, so it is set beside it rather than in it.
    document.documentElement.dir = isRtlLanguage(language) ? 'rtl' : 'ltr';
  }, [t, language]);
}

function SiteHeader() {
  const { t } = useT();

  return (
    <header className="header">
      <Link to="/" className="brand">
        <span className="brand-mark" aria-hidden="true">
          <BrandLogo />
        </span>
        KidGate
      </Link>
      {/*
        No Download entry. Every route here is a page; `#download` is a section
        of the home page, so it was the one nav item that could not light up as
        the current page and the one that did nothing when the reader was
        already on `/` at the wrong scroll position. The section is reached from
        the hero, from the footer's Product column, and from the redirect — that
        is enough for a strip that has to stay short enough to fit a phone.
      */}
      <nav className="nav" aria-label={t('nav.main')}>
        <NavLink to="/about">{t('nav.about')}</NavLink>
        <NavLink to="/support">{t('nav.support')}</NavLink>
        <NavLink to="/privacy-policy">{t('nav.privacy')}</NavLink>
        <NavLink to="/terms">{t('nav.terms')}</NavLink>
        <LanguagePicker />
        {/*
          Named for where it goes, not for what it asks of the reader.

          It read "Parent sign in" and led to `dashboard.kidgate.app`, which is
          a sign-in page only until a parent has a session — after that the same
          button is the way back to a dashboard they are already signed in to,
          and the label was describing a form rather than a destination.
        */}
        {/*
          Not live yet, so it is a label rather than a control — see
          `DASHBOARD_AVAILABLE`. It keeps the header's last slot instead of
          disappearing: the button is the only thing on this page that names
          the dashboard as a product a parent will get, and on a phone it is
          the only nav item left standing (`.nav a:not(.nav-cta)` is hidden
          under 600px). A span is not an `a`, so that rule does not reach it.

          "Coming soon" is a second element rather than a longer string: the
          two are already translated separately, and joining them would be a
          fifteenth wording to keep in step across fourteen packs.
        */}
        {DASHBOARD_AVAILABLE ? (
          <a href={DASHBOARD_URL} className="nav-cta">
            {t('nav.dashboard')}
          </a>
        ) : (
          <span className="nav-soon">
            {t('nav.dashboard')}
            <em>{t('common.comingSoon')}</em>
          </span>
        )}
      </nav>
    </header>
  );
}

function SiteFooter() {
  const { t } = useT();

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
              <Link to="/about">{t('footer.about')}</Link>
            </li>
            <li>
              {DASHBOARD_AVAILABLE ? (
                <a href={DASHBOARD_URL}>{t('footer.dashboard')}</a>
              ) : (
                <span className="footer-soon">
                  {t('footer.dashboard')}
                  <em>{t('common.comingSoon')}</em>
                </span>
              )}
            </li>
            <li>
              <Link to="/#download">{t('footer.download')}</Link>
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
        {/*
          `String(...)`, and it is the whole fix for "© 2.026 KidGate".

          `formatParamValue` in `@kidgate/i18n/web` runs `Intl.NumberFormat`
          over every numeric parameter, which is right for the counts and
          durations it exists for — 1440 has to read as 1.440 in German and
          ١٬٤٤٠ in Arabic. A year is not a quantity, it is an identifier, and
          the same rule turned 2026 into `2.026` in Vietnamese, German and
          Spanish, `2 026` in French and Russian, and `٢٬٠٢٦` in Arabic.

          The formatter is not the thing to change: it cannot tell a year from a
          count, and every other caller wants the grouping. Pass a string and
          the interpolation leaves it alone.
        */}
        <span>{t('footer.rights', { year: String(new Date().getFullYear()) })}</span>
        <span>{t('footer.madeFor')}</span>
      </div>
    </footer>
  );
}

export default function App() {
  const { t } = useT();
  useDocumentMeta();

  /*
   * Embedded in one of the apps: the routes, and nothing around them.
   *
   * `apps/mobile` and `apps/desktop` open About and the two legal documents as
   * a screen of their own, each with its own back button and its own title, so
   * this site's header and footer would be a second set of both inside a frame
   * 440 points wide. `src/lib/embed.js` carries the full argument, including
   * the footer link that navigates the desktop frame to a host its CSP
   * forbids.
   */
  if (IS_EMBEDDED) {
    return (
      <div className={EMBED_INSET_TOP ? 'app app--embed app--inset' : 'app app--embed'}>
        <main className="main" id="main">
          <SiteRoutes />
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        {t('nav.skip')}
      </a>
      <SiteHeader />
      <main className="main" id="main">
        <SiteRoutes />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* `apps/mobile` and `apps/desktop` open this path from their
              Settings screens, by absolute URL. Renaming it breaks a row
              already shipped inside installed apps — the same constraint
              `/download` carries. */}
      <Route path="/about" element={<About />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="/support" element={<Support />} />
      {/*
        `/download` was a page and is now the download section of the home
        page — one place that answers "where do I get it" for all four
        platforms instead of two pages answering it for two each.

        **The redirect stays for as long as the old URL can still be reached.**
        `config/desktopRelease` in Firestore holds the URL an installed desktop
        agent's update banner opens; the path is not compiled into any agent
        (`updateCheck.ts` reads it from the document and only checks the host),
        so pointing that field at `https://kidgate.app/#download` retires this
        route. Until then, and for every link and bookmark already published,
        this is what stops the banner landing on a 404.
      */}
      <Route path="/download" element={<Navigate to="/#download" replace />} />
    </Routes>
  );
}
