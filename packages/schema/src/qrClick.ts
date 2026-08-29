/**
 * One counter document per QR campaign source — how many times a printed
 * code was scanned, nothing about who scanned it.
 *
 * `functions/http/qrClicks.js` is the only writer, over the Admin SDK; no
 * rule grants a client read or write here, so it does not appear in
 * `firestore.rules` at all. `apps/site`'s `/get` redirect is the only caller,
 * unauthenticated and public — `source` is therefore never trusted past this
 * shape: whitelisted, capped, rate-limited server-side. See that file for the
 * why of both.
 */

/** A source name's maximum length — enough for `flyer_school_hanoi_2026`. */
export const QR_CLICK_SOURCE_MAX_LENGTH = 40;

/** What a `source` (and so a document id) may contain. */
export const QR_CLICK_SOURCE_PATTERN = /^[a-z0-9_-]+$/;

export interface QrClick {
  /** Scans counted for this source. Never decreases. */
  count: number;
  /** ISO timestamp of the most recent scan. */
  lastClickAt: string;
}
