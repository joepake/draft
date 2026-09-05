/**
 * The category contract for message-content monitoring — the enum both the
 * device, the Cloud Function that validates an alert, and the parent renderer
 * must agree on. The term tables and the matcher are logic and live in
 * `@kidgate/core/domain/messageKeywords`; only the shared vocabulary is here.
 *
 * A `message_alert` Activity carries one of these in `params.category`, the
 * `logChildMessageAlert` endpoint rejects anything else, and
 * `MessageKeywordPolicy.terms` is keyed by it.
 */

export const MESSAGE_ALERT_CATEGORIES = [
  'predator',
  'selfHarm',
  'explicit',
  'violence',
  'bullying',
  'drugs',
  // Legal-for-adults vices, kept apart from `drugs` on purpose: the
  // Vietnamese label for that one reads "ma tuy hoac chat cam" (narcotics
  // or banned substances), and alcohol and tobacco are neither. Filing
  // them there would have been cheaper and would have told a parent
  // something untrue about their child.
  'alcohol',
  'tobacco',
  'gambling',
  'profanity',
] as const;

export type MessageAlertCategory = (typeof MESSAGE_ALERT_CATEGORIES)[number];

export type MessageAlertSeverity = 'high' | 'medium' | 'low';

/**
 * Which surface the flagged word came off, carried on the activity row as
 * `params.direction`.
 *
 * These are three different consents and three different things for a parent to
 * read, so they must not render as one sentence. `incoming` is the notification
 * listener — a message that arrived. `outgoing` is the typing monitor — the
 * child's own words, a separate accessibility service and a separate switch.
 * `search` is what the child looked for, which is neither: nobody sent it and
 * nobody received it.
 *
 * **A row with no `direction` is `incoming`**, which is all the notification
 * listener could ever have produced and is what every device shipped before the
 * typing monitor writes.
 */
export const MESSAGE_ALERT_DIRECTIONS = ['incoming', 'outgoing', 'search'] as const;

export type MessageAlertDirection = (typeof MESSAGE_ALERT_DIRECTIONS)[number];

/** Type guard for a direction arriving off the wire. */
export function isMessageAlertDirection(
  value: unknown,
): value is MessageAlertDirection {
  return (
    typeof value === 'string' &&
    (MESSAGE_ALERT_DIRECTIONS as readonly string[]).includes(value)
  );
}

export const MESSAGE_ALERT_SEVERITY: Record<
  MessageAlertCategory,
  MessageAlertSeverity
> = {
  predator: 'high',
  selfHarm: 'high',
  explicit: 'high',
  violence: 'medium',
  bullying: 'medium',
  drugs: 'medium',
  // Medium, not low: `low` sits under the default `minSeverity` of 1, so a
  // category shipped at that rank would be invisible to every family that
  // never opened the severity setting — which is the same as not shipping.
  alcohol: 'medium',
  tobacco: 'medium',
  gambling: 'medium',
  profanity: 'low',
};

/** Numeric rank used on the wire and by the native scanner: high=2, low=0. */
export const MESSAGE_ALERT_SEVERITY_RANK: Record<MessageAlertSeverity, number> = {
  low: 0,
  medium: 1,
  high: 2,
};

/** Type guard for a category arriving off the wire (activity params, policy). */
export function isMessageAlertCategory(value: unknown): value is MessageAlertCategory {
  return (
    typeof value === 'string' &&
    (MESSAGE_ALERT_CATEGORIES as readonly string[]).includes(value)
  );
}

/**
 * Prefix of the activity params that carry a one-line gloss of `term` in one
 * parent language: `termGloss_vi`, `termGloss_en`, …
 *
 * A term is written in the child's language and a parent may not read it — a
 * Vietnamese parent shown `kms`, a diaspora parent shown `bay màu`. The gloss
 * is static data derived from the keyword packs (`@kidgate/i18n/messageKeywords`),
 * attached by the Cloud Function that writes the row, and is **never** a
 * translation of the child's message — no message content exists to translate.
 *
 * Flat keys on purpose: `ActivityParams` is `Record<string, string | number>`,
 * and a nested map would change every reader of every activity row for one
 * field on one type. A language with no gloss for a term has no key.
 */
export const MESSAGE_ALERT_TERM_GLOSS_PREFIX = 'termGloss_';

/** The param key holding the gloss for one language. */
export function termGlossParamKey(language: string): string {
  return `${MESSAGE_ALERT_TERM_GLOSS_PREFIX}${language}`;
}
