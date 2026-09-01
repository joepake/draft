import { Component } from 'react';

/**
 * Turns a render crash into a readable message instead of a blank page.
 *
 * ## Why this exists
 *
 * React unmounts the whole tree when a component throws and nothing catches
 * it, so one bad render paints **white** — no message in the page, nothing in
 * the terminal, and the only clue in a console the operator has no reason to
 * have open. That failure mode cost real time twice in one session here: once
 * when `src/firebase.js` threw at module scope because `.env.local` did not
 * exist, and once on a page that would not open with no way to see why.
 *
 * A blank screen is the worst possible failure because it is indistinguishable
 * from a hang, a bad deploy, a network problem and a typo. Anything that names
 * the error beats it.
 *
 * ## Why the error text is shown in full
 *
 * This app is localhost-only and has exactly one user, who is also the person
 * who can fix the bug. Hiding a stack from them buys nothing — the usual
 * argument for a generic "something went wrong" is that a stranger might learn
 * something from it, and there are no strangers here.
 *
 * It is not a substitute for reading the console: `componentDidCatch` still
 * logs, so the full stack with source maps stays where devtools can walk it.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // The rendered card carries the message; the console carries the stack,
    // which is the half that says *where*.
    console.error('admin render crashed', error, info?.componentStack);
  }

  render() {
    const { error } = this.state;
    if (!error) {
      return this.props.children;
    }

    return (
      <div className="card" style={{ margin: 24 }}>
        <h2 className="chart-title">This screen crashed</h2>
        <p className="muted" style={{ marginTop: 0 }}>
          The rest of the console still works — pick another page in the sidebar. Full
          stack is in the browser console.
        </p>
        <pre className="code-block" style={{ marginTop: 12, whiteSpace: 'pre-wrap' }}>
          {error?.stack || String(error)}
        </pre>
        <button
          className="btn"
          style={{ marginTop: 12 }}
          onClick={() => this.setState({ error: null })}
        >
          Try rendering again
        </button>
      </div>
    );
  }
}
