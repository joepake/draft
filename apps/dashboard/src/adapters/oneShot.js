/**
 * **The browser reads once. It does not watch.**
 *
 * A live `onSnapshot` bills a read for every write to a watched document, per
 * open parent surface — and a dashboard tab is the longest-lived reader this
 * product has. `docs/DATA_RETENTION.md` §4 measures what that costs at rest:
 * three child devices beating at 60 s with two parents online is **8,640 reads
 * a day to keep a status dot green**, before a single panel is opened. The
 * phone is where a parent watches a family live; the web is the companion, and
 * it re-reads when they ask it to.
 *
 * Wrapping the PORT rather than the repositories is the whole point: `onDoc`
 * and `onQuery` are the only two subscriptions the port has, so this is the one
 * place the decision can be made, and no repository, hook or screen knows it
 * was. A listener added tomorrow is one-shot without anybody remembering.
 *
 * ## Why it is not "stop at the first snapshot"
 *
 * Firestore serves the local cache first and the server second. At page load
 * the memory cache is empty, so the first delivery IS the server's — but the
 * Refresh button re-runs these reads inside a session whose cache is warm, and
 * stopping at the first delivery would hand the parent the value they already
 * had and call it fresh. So: pass every delivery through, and stop once one is
 * server-backed. A cached delivery costs nothing; only the server one is
 * billed, which is the same single read a `get` would have paid.
 *
 * Two escapes, because "server-backed" is not always knowable:
 *
 * - **An empty query cannot be told apart from a cached one** — a
 *   `QuerySnapshot` carries no `fromCache` of its own, only its documents do
 *   (the same blind spot `firestoreReadCounter` documents). An empty result
 *   therefore stops the listener on its first delivery.
 * - **A hard ceiling**, in case neither ever arrives: offline, or a collection
 *   that stays empty. Without it a failed refresh would leave a listener alive
 *   for as long as the tab is, which is the bill this file exists to stop.
 */

/** Long enough for a slow connection to answer, short enough to bound the bill. */
const SETTLE_CEILING_MS = 15_000;

/**
 * Runs `start`, hands it a callback to close itself with, and guarantees the
 * listener is gone — even if the snapshot arrives synchronously, before
 * `start` has returned the unsubscribe it is supposed to be closed with.
 */
function readOnce(start) {
  let stop = null;
  let finished = false;
  const finish = () => {
    finished = true;
    if (stop) {
      stop();
      stop = null;
    }
  };
  const timer = setTimeout(finish, SETTLE_CEILING_MS);
  stop = start(() => {
    clearTimeout(timer);
    finish();
  });
  // The synchronous case: `finish` ran while `start` was still on the stack,
  // so it had nothing to call. Closing it here is what keeps a cache hit from
  // leaving a live listener behind.
  if (finished && stop) {
    stop();
    stop = null;
  }
  return () => {
    clearTimeout(timer);
    finish();
  };
}

/**
 * @param {import('@kidgate/ports/firestore').FirestorePort} port
 * @returns {import('@kidgate/ports/firestore').FirestorePort}
 */
export function wrapOneShot(port) {
  return {
    ...port,
    onDoc(path, onNext, onError) {
      return readOnce(done =>
        port.onDoc(
          path,
          snapshot => {
            onNext(snapshot);
            if (!snapshot.fromCache) done();
          },
          error => {
            onError(error);
            done();
          },
        ),
      );
    },
    onQuery(path, query, onNext, onError) {
      return readOnce(done =>
        port.onQuery(
          path,
          query,
          snapshot => {
            onNext(snapshot);
            const served = snapshot.docs.filter(doc => !doc.fromCache).length;
            if (served > 0 || snapshot.docs.length === 0) done();
          },
          error => {
            onError(error);
            done();
          },
        ),
      );
    },
  };
}
