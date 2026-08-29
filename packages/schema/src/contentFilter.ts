/**
 * The contract between the desktop agent and the macOS content-filter system
 * extension.
 *
 * Two process boundaries live here, which is why the shapes are schema rather
 * than something private to `apps/desktop`:
 *
 * - **Policy, downward.** The agent serialises `ContentFilterRules` to JSON and
 *   stores it under `CONTENT_FILTER_VENDOR_KEY` in the filter configuration's
 *   `vendorConfiguration`. NetworkExtension persists the configuration and
 *   restarts the provider when it changes, so the provider re-reads the rules
 *   in `startFilter` — **and keeps enforcing them across reboots while the
 *   agent is not running**, which is the property that makes this channel the
 *   right one for policy. A live IPC push would be simpler and would leave a
 *   freshly booted Mac unfiltered until login.
 *
 * - **History, upward.** The provider counts domain visits and the agent
 *   drains them over XPC on the extension's `NEMachServiceName`. Counts are
 *   **cumulative for the provider's local day**, never deltas: the drain is
 *   read-only, so a crashed upload re-reads the same numbers instead of losing
 *   a batch, and the agent's own watermark (`webHistoryDelta`) turns them into
 *   increments for `logChildWebActivity`.
 *
 * The provider is Swift and cannot import this package; it hand-mirrors these
 * shapes in `apps/desktop/filter/Rules.swift`. That mirror is tolerated the
 * way `functions/` mirrors are — named, commented, and kept small — until the
 * schema codegen step exists. Every table the rules carry is data built by
 * `@kidgate/core/domain/contentFilterPolicy`, so the Swift side holds no
 * domain list of its own to drift.
 */

import type { WebFilterPolicy } from './policy';

/**
 * Key inside `NEFilterProviderConfiguration.vendorConfiguration` whose value
 * is the JSON-encoded `ContentFilterRules`.
 *
 * A single string value rather than a nested dictionary because
 * `vendorConfiguration` is a plist: one opaque JSON string survives every
 * round-trip identically, which is what lets the agent compare "what I would
 * write" against "what is stored" byte for byte.
 */
export const CONTENT_FILTER_VENDOR_KEY = 'kidgateRules';

/**
 * Bumped when `ContentFilterRules` changes shape. A provider reading a newer
 * major than it was built for fails open (allow everything, report
 * `rulesVersionUnsupported`) rather than guessing at fields it does not know.
 */
export const CONTENT_FILTER_RULES_VERSION = 1;

/** One category's matching data. Order in the array is match precedence. */
export interface ContentFilterCategoryTable {
  /** `WebFilterCategory` id. A plain string here so the provider need not know the union. */
  id: string;
  /** Apex domains; a hostname matches when it equals one or is a subdomain of one. */
  domains: string[];
  /** Exact DNS labels that claim the category whatever the TLD. Empty for most. */
  labels: string[];
  /**
   * Fragments that claim the category **anywhere in the hostname**.
   *
   * The third and widest pass, and the only one that keeps up with a site that
   * spawns a new mirror every week: `porn` as a label matches `porn.com` and
   * nothing else, while `porn` as a fragment matches `free-pornhat.cfd` and
   * eight hundred others no list has ever held.
   *
   * Every entry was measured against a million real domains before it was
   * allowed in — see `WEB_FILTER_SUBSTRINGS_BY_CATEGORY` in
   * `@kidgate/core/domain/webFilterCategoryDomains`, which also records the
   * words that failed and why. Do not add one here; add it there, with the
   * measurement, and let it flow down.
   */
  substrings: string[];
}

/**
 * Everything the provider needs to answer a verdict and classify a visit.
 *
 * Self-contained on purpose: the provider ships **no tables of its own**, so a
 * list update is a policy save rather than an extension release, and the only
 * source of the data is `@kidgate/core/domain/webFilterCategoryDomains` — the
 * same tables the Android tunnel enforces, parity-tested against the Kotlin.
 */
export interface ContentFilterRules {
  v: number;
  policy: WebFilterPolicy;
  /** Every category, in `WEB_FILTER_CATEGORIES` order — classification uses all of them. */
  categories: ContentFilterCategoryTable[];
  /** Encrypted-DNS resolvers, refused whenever the filter runs. Not a category. */
  dnsBypassDomains: string[];
  /** Infrastructure noise never recorded as a visit (allowed traffic only). */
  noiseDomains: string[];
  /**
   * Hostnames no category may claim, whatever its tables say.
   *
   * Two lists on the client side arriving as one here, because the provider
   * does the same thing with both: `WEB_FILTER_NEVER_BLOCK` is help and
   * recovery services and is a safety promise, `SUBSTRING_EXCEPTIONS` is the
   * handful of innocent hostnames a fragment would otherwise claim. Both are in
   * `@kidgate/core/domain/webFilterCategoryDomains` with their own reasoning;
   * the distinction matters to whoever edits them and not to the matcher.
   *
   * A parent blocking one of these by hand still blocks it — this outranks the
   * category tables, never the parent.
   */
  neverBlockDomains: string[];
  /** Multi-part public suffixes for collapsing hosts to a registrable domain. */
  multiPartSuffixes: string[];
  /**
   * KidGate's own domains — absolute allow, checked before `policy.allowedDomains`
   * and before `policy.blockedDomains`. Unlike `neverBlockDomains`, a parent's
   * own block-list entry does **not** override this: the parent console must
   * survive a mistyped or malicious block of `kidgate.app` itself.
   */
  kidGateOwnDomains: string[];
}

/* ---- XPC ------------------------------------------------------------------ */

/**
 * The one request key and the one reply key. Both sides speak JSON strings
 * inside an XPC dictionary — the C xpc API is the lowest common denominator a
 * Rust agent and a Swift provider share, and one string field keeps the
 * framing trivial on both.
 */
export const CONTENT_FILTER_XPC_KEY = 'kidgate';

export type ContentFilterXpcOp = 'ping' | 'domainsToday';

export interface ContentFilterXpcRequest {
  op: ContentFilterXpcOp;
}

export interface ContentFilterPingReply {
  ok: boolean;
  /** `CONTENT_FILTER_RULES_VERSION` the provider decoded, 0 when none arrived. */
  rulesVersion: number;
  /** Whether a rules payload was decoded at the last `startFilter`. */
  rulesApplied: boolean;
  /** Provider process start, epoch ms — a restart resets the day's counters. */
  startedAtMs: number;
}

/** One domain's cumulative counts for the provider's local day. */
export interface ContentFilterDomainRow {
  /** Registrable domain, lowercased, `www.` stripped. */
  domain: string;
  /** Deduped visits, including the blocked ones. Cumulative for the day. */
  visits: number;
  /** The subset the filter refused. Cumulative for the day. */
  blockedVisits: number;
  /** `WebFilterCategory` id or null when no table claimed the domain. */
  category: string | null;
  /** Most recent lookup, epoch ms. */
  lastAtMs: number;
}

export interface ContentFilterDomainsReply {
  ok: boolean;
  /** The provider's local day the counts belong to, `YYYY-MM-DD`. */
  date: string;
  rows: ContentFilterDomainRow[];
}
