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
