/**
 * Which of a history row's two labels a parent is shown, and where it came
 * from.
 *
 * A row carries up to two answers. `category` is what the child's device
 * decided from the shared tables — exact, and the same tables every platform
 * enforces. `aiCategory` is what `functions/scheduled/classifyWebDomains`
 * decided about a domain those tables had never heard of.
 *
 * **The problem this exists to solve is not a missing feature, it is a silent
 * one.** The classifier has been labelling the long tail nightly since it
 * shipped, into a server-only cache, and writing back only the six serious
 * categories — for *blocking*. A parent reading their history has been shown a
 * bare hostname for every domain the static tables missed, which is most of
 * the tail, while the answer already existed. Most parents cannot tell what a
 * hostname is; that is the whole reason the column is there.
 *
 * Two rules, and both are about not overstating what is known:
 *
 * - **The device's own tables win.** They are an exact match against a list
 *   somebody wrote on purpose; the classifier read a hostname and guessed
 *   well. When both have an answer the exact one is the answer.
 * - **The source travels with the label**, so a surface that wants to mark a
 *   guess as a guess can, and one that does not is at least not claiming
 *   otherwise by accident. Nothing here decides how it is drawn.
 *
 * Low-confidence classifications never reach a row at all — the writer drops
 * them — so anything arriving here has already cleared the same bar the
 * auto-block path uses.
 */

import type { WebFilterCategory, WebHistoryEntry } from '@kidgate/schema/webActivity';

export type WebHistoryCategorySource = 'filter' | 'ai';

export interface WebHistoryLabel {
  category: WebFilterCategory | null;
  /** Null exactly when `category` is — there is no source for "unknown". */
  source: WebHistoryCategorySource | null;
}

/**
 * @param entry Anything carrying the two fields, so a caller holding a
 *   narrower row (the dashboard rolls several days into one object) does not
 *   have to build a whole `WebHistoryEntry` to ask.
 */
export function webHistoryLabel(
  entry: Pick<WebHistoryEntry, 'category'> &
    Partial<Pick<WebHistoryEntry, 'aiCategory'>>,
): WebHistoryLabel {
  if (entry.category) {
    return { category: entry.category, source: 'filter' };
  }
  if (entry.aiCategory) {
    return { category: entry.aiCategory, source: 'ai' };
  }
  return { category: null, source: null };
}

/** The label alone, for the many callers that only group or count by it. */
export function webHistoryCategory(
  entry: Pick<WebHistoryEntry, 'category'> &
    Partial<Pick<WebHistoryEntry, 'aiCategory'>>,
): WebFilterCategory | null {
  return webHistoryLabel(entry).category;
}
