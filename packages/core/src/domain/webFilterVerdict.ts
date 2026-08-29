/**
 * The web filter's allow/block decision, in TypeScript.
 *
 * Third implementation of one rule, and the first one tests can reach:
 * `apps/desktop/filter/PolicyEngine.swift` (macOS provider) and
 * `KidGateVpnService`'s Kotlin (Android/TV DNS tunnel) both hand-mirror this
 * order, and until schema codegen exists the mirrors are kept honest by the
 * comment at each. `apps/extension` consumes this one directly — a browser
 * extension is TypeScript all the way down, so it gets the real thing rather
 * than a fourth copy.
 *
 * The order is the contract, not a style choice, and it is the Swift engine's:
 *
 *   disabled → allow everything, record nothing
 *   DoH resolver → block (before the allow list — `DNS_BYPASS_DOMAINS` says
 *     why: a reachable resolver makes every other table decorative, so no
 *     parent toggle and no allow-list entry may open one)
 *   KidGate's own domain → allow (before `blockedDomains` — `KIDGATE_OWN_DOMAINS`
 *     says why: the parent console must survive a parent's own mistyped block)
 *   allowedDomains → allow
 *   blockedDomains → block
 *   blocked category → block
 *   no category at all && blockUnknown → block
 *   otherwise → allow
 *
 * `category` classifies against EVERY category, not only the blocked ones —
 * the parent's report rolls allowed days up by category too. `record` carries
 * the noise rule: infrastructure lookups are never a visit, but a blocked
 * lookup is always recorded whatever matched it.
 */

import type { WebFilterPolicy } from '@kidgate/schema/policy';
import {
  WEB_FILTER_CATEGORIES,
  type WebFilterCategory,
} from '@kidgate/schema/webActivity';
import {
  canonicalWebHost,
  isDnsBypassHost,
  isKidGateOwnHost,
  isWebNoiseHost,
  matchesAnyWebDomain,
  webCategoryFor,
} from './webFilterCategoryDomains';

export interface WebFilterVerdict {
  blocked: boolean;
  /** The category that decided it, or that merely classifies an allowed visit. */
  category: WebFilterCategory | null;
  /** Whether this lookup belongs in the child's web history. */
  record: boolean;
}

export function webFilterVerdict(
  policy: WebFilterPolicy,
  hostname: string,
): WebFilterVerdict {
  const host = canonicalWebHost(hostname);
  if (!host || !policy.enabled) {
    return { blocked: false, category: null, record: false };
  }

  const category = webCategoryFor(host, WEB_FILTER_CATEGORIES);

  if (isDnsBypassHost(host)) {
    return { blocked: true, category, record: true };
  }
  if (isKidGateOwnHost(host)) {
    return { blocked: false, category, record: !isWebNoiseHost(host) };
  }
  if (matchesAnyWebDomain(host, policy.allowedDomains)) {
    return { blocked: false, category, record: !isWebNoiseHost(host) };
  }
  if (matchesAnyWebDomain(host, policy.blockedDomains)) {
    return { blocked: true, category, record: true };
  }
  // Asked of the blocked set, not of `category`. A domain two tables both claim
  // gets exactly one label — the first in canonical order — so testing that
  // label for membership let a parent who blocked Dating and not Adult keep
  // reaching `ashleymadison.com`, which both tables list. Android and the TV
  // never had the bug: their loops only ever walk the enabled tables. This is
  // the same question, asked the same way.
  // `blockedCategories` is `string[]` in the schema, so a document written by
  // an older build can name a category this one has never heard of; narrowing
  // through the canonical list drops those rather than trusting them.
  const blockedBy = webCategoryFor(
    host,
    WEB_FILTER_CATEGORIES.filter(item => policy.blockedCategories.includes(item)),
  );
  if (blockedBy) {
    return { blocked: true, category: blockedBy, record: true };
  }
  if (category === null && policy.blockUnknown) {
    return { blocked: true, category: null, record: true };
  }
  return { blocked: false, category, record: !isWebNoiseHost(host) };
}
