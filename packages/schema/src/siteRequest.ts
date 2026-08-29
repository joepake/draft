/**
 * A child asking a parent to unblock one website.
 *
 * The sibling of `timeRequest`: same three-state life, same one-pending-at-a-
 * time rule, same cooldown — a child refused a site and a child out of minutes
 * are the same person making the same kind of ask, and giving the two different
 * mechanics would mean two things for a parent to learn.
 *
 * What differs is what approval *does*. A time request grants
 * `bonusMinutesToday`, which expires at the child's midnight. Approving a site
 * appends the domain to that device's existing `DeviceControls.webFilterAllowList`
 * — the list the parent already edits by hand, that `resolveWebFilterPolicy`
 * already folds into the policy, and that every filter on every platform already
 * enforces above its category tables. No new enforcement, and no expiry: an
 * allowed site stays allowed until a parent removes it, in the one list they
 * would look in.
 *
 * **`functions/http/siteRequests.js` enforces the limits below.** These are not
 * client-side convenience checks; the server rejects an over-long domain and
 * answers a too-soon request with `siteRequest/cooldown`. The Cloud Functions
 * cannot import this package (`functions/CLAUDE.md`), so that file mirrors them
 * with a comment naming this one, and `serverConstantParity` fails on drift.
 */

export type SiteRequestStatus = 'pending' | 'approved' | 'denied';

/**
 * Wait before a child may send another. Matches `TIME_REQUEST_COOLDOWN_MS`
 * deliberately: one minute is long enough to stop a tap-storm and short enough
 * that a child who mistyped is not locked out of asking again.
 */
export const SITE_REQUEST_COOLDOWN_MS = 1 * 60 * 1000;

/** A hostname's maximum length in DNS. Anything longer is not a domain. */
export const SITE_REQUEST_MAX_DOMAIN_LENGTH = 253;

/** Free text a child may attach. Long enough for a sentence, not an essay. */
export const SITE_REQUEST_MAX_REASON_LENGTH = 200;

export interface SiteRequest {
  id: string;
  deviceId: string;
  deviceName: string;
  /**
   * The host, lowercased and without scheme, path or port — `khanacademy.org`.
   *
   * What the child's surface had in hand: the extension's block page carries it
   * in `?d=`, and the phone and the Mac take it from the refused navigation.
   * Approval appends exactly this string to `webFilterAllowList`, so it must be
   * the same shape that list already holds.
   */
  domain: string;
  reason?: string;
  status: SiteRequestStatus;
  createdAt: string;
  resolvedAt?: string;
}
