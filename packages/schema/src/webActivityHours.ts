/**
 * `childDevices/{deviceId}/webActivityHours/{date}` — when in the day a child
 * browsed, as opposed to `webHistory`, which is what they opened.
 *
 * The collection is declared in `paths.ts` and its fields lived nowhere: the
 * endpoint that writes it and the repository that reads it each carried their
 * own bare `24`, which is the root `CLAUDE.md` rule 2 violation this file
 * closes. `docs/DATA_RETENTION.md` §8 has the record, including the two days it
 * spent documented as fixed before anyone wrote it.
 *
 * Only a surface that timestamps each visit writes here — today that is
 * `apps/extension` alone, gated on `DeviceCapabilities.webActivityHours`. The
 * Mac provider and the Android tunnel report cumulative per-domain counters
 * with no per-visit time and publish that capability as false, so a parent
 * screen asks the capability before it draws the chart.
 */

/**
 * Buckets in a day, one per hour of the **device's own local clock**, index 0
 * being its midnight.
 *
 * Not `Date`-derived and deliberately not a time zone: the device buckets
 * against the clock the child reads, and the day key travels with it, so a
 * chart drawn from these needs no offset and a family that moves house does
 * not retroactively re-bucket last week.
 */
export const WEB_ACTIVITY_HOUR_BANDS = 24;

/**
 * The document as Firestore stores it.
 *
 * `hours` is a **map keyed by the bucket index as a string**, not an array, and
 * that is load-bearing: Firestore can `FieldValue.increment` a nested field
 * (`hours.13`) and cannot increment an array element, and increments are what
 * let a five-minute upload cadence add up instead of overwrite. The map is
 * sparse — an hour with no page loads has no key — so a reader zero-fills to
 * `WEB_ACTIVITY_HOUR_BANDS` rather than trusting its length.
 *
 * The wire payload is the other shape: a client posts `hours` as a dense array
 * of exactly `WEB_ACTIVITY_HOUR_BANDS` numbers, and the endpoint turns it into
 * increments. Neither side may assume the other's.
 */
export interface WebActivityHoursDoc {
  /** `YYYY-MM-DD` on the device's local clock. Same value as the document id. */
  date: string;
  /** Page loads by hour. Keys are `'0'`–`'23'`; absent means none. */
  hours?: Record<string, number>;
  /** Blocked attempts by hour, same key space. */
  blockedHours?: Record<string, number>;
  /**
   * A Firestore server timestamp, **not** an ISO string — typed `unknown`
   * because this package models no SDK. Normalise it through
   * `@kidgate/core/domain/firestoreValue` if anything ever needs to read it;
   * nothing does today.
   */
  updatedAt?: unknown;
}
