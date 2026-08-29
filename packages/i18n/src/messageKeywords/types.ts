import type { MessageAlertCategory } from '@kidgate/schema/messageAlert';

/** Terms per category. A pack may omit a category it has nothing for. */
export type MessageKeywordTerms = Partial<
  Record<MessageAlertCategory, readonly string[]>
>;

/**
 * One language's contribution to the message-monitoring keyword policy.
 *
 * `ambiguous` is the subset of `terms` that must not alert a parent on its own
 * — a word with an innocent reading, which the AI tier confirms before anything
 * is sent. A term listed here that is not in `terms` is a mistake and the
 * sanity test fails on it.
 */
export interface MessageKeywordPack {
  terms: MessageKeywordTerms;
  ambiguous?: MessageKeywordTerms;
}
