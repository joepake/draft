/**
 * One row of a console's Firestore read tally — one path pattern's counts for
 * the day (`@kidgate/core/adapters/firestoreReadCounter`).
 *
 * Here because it crosses a process boundary: the phone sends the day's rows
 * to `touchParentPresence` as `reads`, and the server writes them to the log
 * as one `kg: 'reads'` line (`functions/lib/readTally.js`), which is where the
 * per-collection client reads are read back (2026-10-20 — GA4's API is closed
 * to this project's tooling).
 */
export interface ReadTally {
  /** The path with its document ids replaced by `{id}`. */
  pattern: string;
  /** `getDoc` calls plus documents returned by `getDocs`, plus `countDocs`. */
  oneShotReads: number;
  /** Listeners opened on this pattern. */
  listeners: number;
  /** Non-cached callbacks. The lower bound on this pattern's listener reads. */
  serverDeliveries: number;
  /** Documents carried by those callbacks. The upper bound. */
  docsDelivered: number;
}
