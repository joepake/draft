import { createFirestoreReadCounter } from '@kidgate/core/adapters/firestoreReadCounter';

/**
 * The Firestore read counter, wired into this app's one adapter — **dev builds
 * only**.
 *
 * It answers a question five rounds of reasoning got wrong: measured on
 * `kidgate`, roughly **590 reads an hour** cannot be attributed to anything, and
 * Cloud Monitoring does not break reads down by collection. `docs/DATA_RETENTION.md`
 * §9 has the measurements, §11 has why no further estimate should be believed
 * in place of counting.
 *
 * **This surface matters more than the phone for exactly one reason: a browser
 * tab stays open.** A phone app is backgrounded and, since 2026-09-05, drops its
 * device listener a minute later (`@kidgate/core/domain/consoleVisibility`). A
 * dashboard left open on a second monitor is the longest-lived reader this
 * product has, so if a listener is quietly re-delivering all day it will show
 * here first.
 *
 * `import.meta.env.DEV` is the whole safety story — in a production bundle
 * `wrapWithReadCounter` returns the port it was handed, Rollup drops the branch,
 * and nothing reaches `window`.
 *
 * From the browser console on a dev build:
 *
 * ```js
 * kidgateReads()       // the tally so far, heaviest path first
 * kidgateReadsReset()  // start a fresh window
 * ```
 *
 * Leave the tab alone for a while before reading it. The interesting number is
 * what accrues while nobody touches anything.
 */
const counter = import.meta.env.DEV ? createFirestoreReadCounter() : null;

/**
 * Wraps in a dev build, returns the port untouched in a production one.
 *
 * Called once, on the single adapter instance in `adapters/repositories.js`, so
 * every repository is counted without one of them knowing this exists.
 *
 * @param {import('@kidgate/ports/firestore').FirestorePort} port
 * @returns {import('@kidgate/ports/firestore').FirestorePort}
 */
export function wrapWithReadCounter(port) {
  if (!counter) {
    return port;
  }

  const wrapped = counter.wrap(port);

  window.kidgateReads = () => {
    const rows = counter.report();
    /*
     * `console.table` renders this well in a browser, which is the one place
     * this runs — the phone's copy logs lines instead, because a Hermes console
     * does not.
     *
     * The rule is disabled by hand rather than widened: this is a tool whose
     * entire job is to print, it exists only in a dev build, and a person typed
     * the call. Dressing a report up as a warning would be the dishonest fix.
     */
    // eslint-disable-next-line no-console
    console.table(rows);
    return rows;
  };
  window.kidgateReadsReset = () => {
    counter.reset();
    // eslint-disable-next-line no-console -- same reason as above.
    console.info('kidgate reads: counter reset');
  };

  return wrapped;
}
