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

/**
 * Domains one ask may carry, and pending requests one device may hold.
 *
 * Deliberately the same number. A child picking from a list of what was just
 * refused asks for two or three sites at once — the browser extension's block
 * page, which sees one domain, is the surface the one-at-a-time rule was
 * written for, and it does not generalise to a list. Five is high enough that
 * a real ask is never truncated and low enough that the parent's inbox stays
 * answerable and a tap-storm stays bounded.
 *
 * **One document per domain regardless.** A batch writes five rows, not one
 * row holding five domains: a parent answers each site separately, so the ask
 * has to be shaped the way the answer is. What batching changes is the *rule*
 * — how many may be waiting — never the shape of a request.
 */
export const SITE_REQUEST_MAX_BATCH = 5;

/** Requests one device may have waiting. See `SITE_REQUEST_MAX_BATCH`. */
export const SITE_REQUEST_MAX_PENDING = 5;

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
  /**
   * Where this row sat in the ask that produced it.
   *
   * Written only for a batch of more than one, and read by exactly one thing:
   * `functions/triggers/siteRequests.js`, which pushes for index 0 and stays
   * silent for the rest. Without it a child picking five sites sends a parent
   * five notifications in one second, which is the same feature as a spam
   * button. Absent means a single ask — every request written before batching
   * existed, and every one the extension's block page still sends.
   *
   * No parent surface reads it: the inbox lists pending requests and a batch is
   * simply five of them. Do not start rendering "3 of 5" from this — a parent
   * who answers one has changed the meaning of the other four's count, and
   * nothing recomputes it.
   */
  batchIndex?: number;
  /**
   * Every domain in the batch, on the `batchIndex === 0` row only.
   *
   * It exists so the one push can name all of them: the trigger sees one
   * document, and `siteRequest.body` already interpolates `{{domain}}`, so a
   * joined list fills the sentence a parent reads in all fourteen languages
   * **without a new push string**. That is the whole reason this is stored
   * rather than queried — the alternative was a second key and fourteen
   * translations for a sentence that already exists.
   *
   * Never the source of truth for what was asked. Each domain has its own
   * document and its own answer; this is a copy for one notification, and a
   * parent approving one site does not rewrite it.
   */
  batchDomains?: string[];
}
