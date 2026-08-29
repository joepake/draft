/**
 * How the nineteen web-filter categories are chunked for a parent to read.
 *
 * One table, read by both parent surfaces — `apps/mobile`'s Web Filter screen
 * and `apps/dashboard`'s category chips. It lives here for the reason
 * `supportsWebFilterCategories` does: two screens that describe the same
 * switches must not disagree about what they are, and a family that sets a
 * policy on the phone reads it back on the web.
 *
 * **Grouped by the decision, not by the subject.** "Would I let my child see
 * this" and "would I let my child spend the evening on this" are different
 * questions, and a parent answers them in different moods. `vpn` sits alone
 * under its own heading on purpose: it is not harmful content, it is the thing
 * that makes every other switch decorative, and burying it between Shopping
 * and Games loses exactly the context a parent needs in order not to turn it
 * off. The two AI rows stay together for the mirror-image reason — they are
 * deliberately two switches, and the shared heading is what shows a parent
 * where the difference lies.
 *
 * **Headings, never a collapse.** The screens render these open. A settings
 * screen exists so somebody can audit the state of nineteen switches; one that
 * hides that state behind a disclosure triangle has traded its whole purpose
 * for a shorter scroll. `apps/mobile`'s Web History screen does collapse its
 * sections, and the difference is the point: history is data to scan, this is
 * state to check.
 */

import {
  WEB_FILTER_CATEGORIES,
  type WebFilterCategory,
} from '@kidgate/schema/webActivity';

export type WebFilterCategoryGroupId =
  'harm' | 'contact' | 'bypass' | 'ai' | 'entertainment' | 'money';

export interface WebFilterCategoryGroup {
  id: WebFilterCategoryGroupId;
  categories: readonly WebFilterCategory[];
}

/**
 * Ordered as the screens draw them: what a filter is bought for first, then
 * the switch that keeps the rest working, then the newer judgement calls.
 */
export const WEB_FILTER_CATEGORY_GROUPS: readonly WebFilterCategoryGroup[] = [
  {
    id: 'harm',
    categories: [
      'adult',
      'selfHarm',
      'violence',
      'extremism',
      'drugs',
      'gambling',
      'gameGambling',
      'piracy',
    ],
  },
  /*
   * `dating` moved out of `harm` when `strangerChat` arrived, and the move is
   * the rule at the top of this file being applied rather than an exception to
   * it. Both are strangers reaching a child, both are answered in the same
   * breath, and a parent who blocks one and leaves the other open has almost
   * certainly not understood what they left open. Eight rows under one heading
   * is also the point where a list stops being scannable, which is the other
   * half of why this group exists rather than `harm` growing to ten.
   */
  { id: 'contact', categories: ['dating', 'strangerChat'] },
  { id: 'bypass', categories: ['vpn'] },
  { id: 'ai', categories: ['aiCompanion', 'aiAssistant'] },
  {
    id: 'entertainment',
    categories: ['social', 'videoStreaming', 'music', 'gaming'],
  },
  { id: 'money', categories: ['shopping', 'cryptoTrading'] },
];

/** The group a category belongs to, or null when nothing claims it. */
export function webFilterCategoryGroupOf(
  category: WebFilterCategory,
): WebFilterCategoryGroupId | null {
  for (const group of WEB_FILTER_CATEGORY_GROUPS) {
    if (group.categories.includes(category)) {
      return group.id;
    }
  }
  return null;
}

/**
 * Every category, in group order, flattened.
 *
 * Not the same order as `WEB_FILTER_CATEGORIES` and must not be used for a
 * stored array — that one is the canonical order the security rules and the
 * child's policy key compare field by field. This is a drawing order.
 */
export function webFilterCategoriesInGroupOrder(): WebFilterCategory[] {
  return WEB_FILTER_CATEGORY_GROUPS.flatMap(group => [...group.categories]);
}

/** True when the grouping covers the canonical list exactly once each. */
export function webFilterCategoryGroupsCoverAll(): boolean {
  const grouped = webFilterCategoriesInGroupOrder();
  return (
    grouped.length === WEB_FILTER_CATEGORIES.length &&
    new Set(grouped).size === WEB_FILTER_CATEGORIES.length &&
    WEB_FILTER_CATEGORIES.every(category => grouped.includes(category))
  );
}
