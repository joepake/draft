/**
 * Coercion for values Firestore hands back.
 *
 * A `Timestamp` arrives as an SDK object, not a string, and every SDK spells it
 * differently. `FirestorePort` deliberately does not model it — a port that
 * exposed one SDK's Timestamp class would not be implementable over REST. So
 * repositories normalise here, accepting whatever shape arrived.
 *
 * Moved from the legacy `src/utils/firestore.ts`.
 */

/** Anything with `toDate()` — every Firestore SDK's Timestamp satisfies this. */
interface DateLike {
  toDate(): Date;
}

function hasToDate(value: unknown): value is DateLike {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as DateLike).toDate === 'function'
  );
}

/**
 * A Firestore timestamp, an ISO string, or nothing, as an ISO string.
 *
 * Returns undefined rather than "now" for a missing value: a row with no
 * `createdAt` has not been written by the server yet, and dating it to read
 * time would silently sort it to the top of a feed it does not belong at.
 */
export function timestampToIso(value: unknown): string | undefined {
  if (!value) {
    return undefined;
  }
  if (typeof value === 'string') {
    return value;
  }
  if (hasToDate(value)) {
    return value.toDate().toISOString();
  }
  return undefined;
}

/**
 * The same value as epoch milliseconds.
 *
 * Undefined for the same reason `timestampToIso` returns it, plus one more that
 * matters to its first caller: a `serverTimestamp()` this device has written but
 * the server has not yet resolved reads back as null from the local cache, and
 * `agent/serverTimeOffset` must not mistake that for a clock reading.
 */
export function timestampToMillis(value: unknown): number | undefined {
  const iso = timestampToIso(value);
  if (iso === undefined) {
    return undefined;
  }
  const millis = Date.parse(iso);
  return Number.isFinite(millis) ? millis : undefined;
}
