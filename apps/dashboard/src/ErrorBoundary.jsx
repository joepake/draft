import { Component } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import { trackError } from './lib/analytics';

/**
 * The last thing between a render error and a white page.
 *
 * `installErrorReporting()` in `main.jsx` hears `window.onerror` and
 * `unhandledrejection`, and **React catches a render throw before either of
 * them sees it** — so until this existed, a bad document field blanked the
 * whole dashboard and reported nothing. `trackError`'s own note already says
 * "no boundary, no `onerror`, no reporter"; the reporter landed, the boundary
 * did not.
 *
 * Not a rare shape here: `Dashboard.jsx` draws live Firestore documents whose
 * optional fields arrive from four different agents.
 *
 * `apps/mobile` has a boundary of its own (`CrashlyticsErrorBoundary`) and it
 * is not this one — React Native components, and a Crashlytics SDK a browser
 * has no half of.
 */

/**
 * The fallback is its own function so it can use hooks: the boundary has to be
 * a class (React exposes the lifecycle nowhere else) and a class cannot call
 * `useT`. i18n is initialised before the first render in `main.jsx`, so the
 * pack is always there by the time anything can throw.
 *
 * The sentence says the family's settings are untouched, and that is the
 * point of it. A blank page in a parental-control product reads as "the rules
 * are gone", which is a different fear from a shop losing a basket.
 */
function CrashPane({ message }) {
  const { t } = useT();
  return (
    <div className="crash" role="alert">
      <h1>{t('common.crashTitle')}</h1>
      <p>{t('common.crashBody')}</p>
      {/* A full document load, never a `reset()` back into the same tree:
          whatever threw is still in the props it would re-render from, so
          clearing the flag loops straight back into the same throw. */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => window.location.reload()}
      >
        {t('common.crashReload')}
      </button>
      {/* Dev only, and never to a parent: an exception string names internals,
          is not translated, and can carry a document path. */}
      {import.meta.env.DEV && message ? (
        <pre className="crash-msg">{message}</pre>
      ) : null}
    </div>
  );
}

export default class ErrorBoundary extends Component {
  state = { failed: false, message: '' };

  static getDerivedStateFromError(error) {
    return {
      failed: true,
      message: error instanceof Error ? error.message : String(error ?? ''),
    };
  }

  componentDidCatch(error) {
    /*
     * `trackError`, not a `track` of its own — it scrubs uids and long ids out
     * of the message first, and a Firestore error carries the path that
     * failed, which contains the family owner's uid. A second reporting call
     * here is how that scrub gets bypassed.
     */
    trackError(error, 'react-boundary');
  }

  render() {
    if (this.state.failed) {
      return <CrashPane message={this.state.message} />;
    }
    return this.props.children;
  }
}
