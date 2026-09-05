/**
 * Reading the gloss of a flagged term in the parent's language.
 *
 * The Cloud Function that writes a `message_alert` (and a `message_checked`)
 * row attaches `termGloss_<lang>` params for every language that has a gloss
 * for the term — see `@kidgate/schema/messageAlert` for the key and
 * `@kidgate/i18n/messageKeywords` for where the glosses come from. A parent
 * surface asks for the one language it is rendering in and gets a string or
 * nothing; it never sees the other thirteen.
 *
 * Pure. Shared by the phone's Message Alerts screen and anything the dashboard
 * grows, so the two cannot disagree about when a gloss is worth a line.
 */
import type { ActivityParams } from '@kidgate/schema/activity';
import { termGlossParamKey } from '@kidgate/schema/messageAlert';

/**
 * The gloss to print under `term`, or `null` when there is nothing to add.
 *
 * Nothing to add covers three cases, all silent: a row written before glosses
 * existed, a term the parent's own language pack already owns (the generator
 * writes none for those), and a gloss that merely repeats the term — `weed`
 * glossed as "weed" is a line that says nothing.
 */
export function termGlossFor(
  params: ActivityParams | undefined,
  language: string,
): string | null {
  const raw = params?.[termGlossParamKey(language)];
  if (typeof raw !== 'string') return null;
  const gloss = raw.trim();
  if (!gloss) return null;
  const term = typeof params?.term === 'string' ? params.term.trim() : '';
  if (term && gloss.toLowerCase() === term.toLowerCase()) return null;
  return gloss;
}
