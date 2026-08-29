/**
 * From the parent's controls document to what the macOS content filter
 * enforces.
 *
 * Two translations live here and both are pure:
 *
 * - `resolveWebFilterPolicy` turns `DeviceControls` into the schema's
 *   `WebFilterPolicy`. Android does this translation inside its native
 *   modules; this is the platform-free version for hosts that take the policy
 *   through `WebFilterPort`.
 *
 * - `buildContentFilterRules` wraps that policy with every table the provider
 *   needs — categories, DoH resolvers, noise, suffixes — so the Swift side
 *   ships no data of its own. The result is what the agent stores in the
 *   filter configuration's `vendorConfiguration`.
 */

import type { DeviceControls } from '@kidgate/schema/deviceControls';
import type { WebFilterPolicy } from '@kidgate/schema/policy';
import {
  CONTENT_FILTER_RULES_VERSION,
  type ContentFilterRules,
} from '@kidgate/schema/contentFilter';
import {
  DEFAULT_WEB_FILTER_CATEGORIES,
  WEB_FILTER_CATEGORIES,
} from '@kidgate/schema/webActivity';
import {
  DNS_BYPASS_DOMAINS,
  KIDGATE_OWN_DOMAINS,
  MULTI_PART_SUFFIXES,
  WEB_FILTER_DOMAINS_BY_CATEGORY,
  WEB_FILTER_LABELS_BY_CATEGORY,
  SUBSTRING_EXCEPTIONS,
  WEB_FILTER_NEVER_BLOCK,
  WEB_FILTER_SUBSTRINGS_BY_CATEGORY,
  WEB_NOISE_DOMAINS,
} from './webFilterCategoryDomains';

/**
 * What the parent's switches mean as a `WebFilterPolicy`.
 *
 * The one non-obvious line is `allowListOnly`. The setting means "everything
 * not on the allow list is refused", and the policy shape has no such flag —
 * it composes instead: block every category **and** block sites with no
 * category verdict, leaving `allowedDomains` as the only way through. That
 * composition is exact, and it keeps the schema's policy shape platform-free
 * rather than growing a Mac-only field.
 */
export function resolveWebFilterPolicy(
  controls: Pick<
    DeviceControls,
    | 'webFilterEnabled'
    | 'webFilterCategories'
    | 'webFilterAllowList'
    | 'webFilterBlockList'
    | 'webFilterAllowListOnly'
  >,
  /**
   * Server-classified serious-category domains (`aiWebDomains` on the device
   * document — see `@kidgate/schema/aiWebDomains`). Folded into
   * `blockedDomains` rather than into a category table so every platform that
   * already honours the parent's block list enforces them with no further
   * change — and the allow list still outranks them, which is the safety
   * valve for a wrong classification. Not part of `DeviceControls` on
   * purpose: the parent's block-list editor must never see, re-save, or
   * truncate a machine-written list.
   */
  aiBlockedDomains?: readonly string[],
): WebFilterPolicy {
  const allowListOnly = controls.webFilterAllowListOnly === true;
  const blockedDomains = aiBlockedDomains?.length
    ? [...new Set([...(controls.webFilterBlockList ?? []), ...aiBlockedDomains])]
    : [...(controls.webFilterBlockList ?? [])];

  return {
    enabled: controls.webFilterEnabled === true,
    blockedCategories: allowListOnly
      ? [...WEB_FILTER_CATEGORIES]
      : [...(controls.webFilterCategories ?? DEFAULT_WEB_FILTER_CATEGORIES)],
    blockedDomains,
    allowedDomains: [...(controls.webFilterAllowList ?? [])],
    blockUnknown: allowListOnly,
  };
}

/** The vendor payload, ready to serialise. Deterministic for equal policies. */
export function buildContentFilterRules(policy: WebFilterPolicy): ContentFilterRules {
  return {
    v: CONTENT_FILTER_RULES_VERSION,
    policy,
    categories: WEB_FILTER_CATEGORIES.map(id => ({
      id,
      domains: [...WEB_FILTER_DOMAINS_BY_CATEGORY[id]],
      labels: [...(WEB_FILTER_LABELS_BY_CATEGORY[id] ?? [])],
      substrings: [...(WEB_FILTER_SUBSTRINGS_BY_CATEGORY[id] ?? [])],
    })),
    dnsBypassDomains: [...DNS_BYPASS_DOMAINS],
    noiseDomains: [...WEB_NOISE_DOMAINS],
    // Two source lists, one payload field — the schema says why.
    neverBlockDomains: [...WEB_FILTER_NEVER_BLOCK, ...SUBSTRING_EXCEPTIONS],
    multiPartSuffixes: [...MULTI_PART_SUFFIXES],
    kidGateOwnDomains: [...KIDGATE_OWN_DOMAINS],
  };
}

/**
 * The serialised payload the agent writes and compares.
 *
 * One canonical serialisation, used both to store and to detect change: the
 * tables are constants of the build, so two runs of this function differ only
 * when the parent's policy does — which makes string equality the whole
 * "should I save again?" decision, with no version counter to persist.
 */
export function contentFilterRulesJson(policy: WebFilterPolicy): string {
  return JSON.stringify(buildContentFilterRules(policy));
}

/**
 * A string that changes exactly when the policy does — `childPolicyKey`'s
 * web-filter term. Lists are sorted because the parent app has no stable
 * order for them, and a reordered allow list is not a policy change.
 */
export function contentFilterPolicyKey(policy: WebFilterPolicy): string {
  return [
    policy.enabled,
    [...policy.blockedCategories].sort().join(','),
    [...policy.blockedDomains].sort().join(','),
    [...policy.allowedDomains].sort().join(','),
    policy.blockUnknown,
  ].join('~');
}
