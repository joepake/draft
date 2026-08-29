/**
 * Which languages' keyword packs a child device scans against.
 *
 * **Why this is a setting and not "all of them".** Measured 2026-08-29 over 45
 * ordinary messages spread across the fourteen launch languages: scanning every
 * pack flagged **16 of them**, scanning only the message's own language flagged
 * 5. The collisions are ordinary words, not edge cases —
 *
 *   `rot`  English algospeak for decay      German for "red"
 *   `ana`  English eating-disorder shorthand Spanish/Italian given name
 *   `mia`  the same                          Italian/Spanish for "my"
 *   `sui`  English shorthand for suicide     Italian for "on the"
 *   `ke`   Vietnamese for ketamine           Hindi for "of"
 *
 * — and every one matched on the **exact** pass, which alerts a parent directly
 * whenever the family has not switched the AI tier on. A German child writing
 * "the traffic light is red" was reported to their parent for bullying.
 *
 * **Why the device language alone is not the answer either.** Children receive
 * messages in languages their phone is not set to — English through games and
 * Discord above all — so a Vietnamese phone scanning only Vietnamese misses
 * `send nudes` and `cheese pizza` entirely. Hence: default to the device's
 * language, let the parent add up to two more, and do not add English silently.
 * Adding English is right for a Vietnamese family (the two barely collide) and
 * wrong for a German or Italian one, which is exactly the judgement a default
 * cannot make and a parent can.
 */

/**
 * How many languages a parent may pick. Three covers the real cases — a
 * household language, a schooling language, and English — without turning the
 * setting into the all-fourteen scan it exists to prevent.
 */
export const MESSAGE_KEYWORD_LANGUAGE_MAX = 3;

/**
 * Resolve the languages a device should ask the server for.
 *
 * `chosen` is the parent's selection (`DeviceControls.messageKeywordLanguages`);
 * `deviceLanguage` is what the child's app is running in. Unknown codes are
 * dropped, duplicates collapse, and the result is capped. **The result is never
 * empty**: a parent who somehow cleared every entry gets their device language
 * back rather than a device that scans nothing and reports "no concerning words
 * have been seen".
 */
export function resolveMessageKeywordLanguages(
  chosen: readonly string[] | undefined,
  deviceLanguage: string,
  supported: readonly string[],
): string[] {
  const known = new Set(supported);
  const out: string[] = [];

  for (const code of chosen ?? []) {
    const normalized = code.trim().toLowerCase();
    if (known.has(normalized) && !out.includes(normalized)) {
      out.push(normalized);
    }
    if (out.length === MESSAGE_KEYWORD_LANGUAGE_MAX) {
      break;
    }
  }

  if (out.length > 0) {
    return out;
  }

  const fallback = deviceLanguage.trim().toLowerCase();
  return known.has(fallback) ? [fallback] : ['en'];
}

/**
 * The cache key a device stores beside the policy version.
 *
 * The `?since=` shortcut compares versions alone, so a device whose language
 * selection changed would skip a payload it now needs — the version did not
 * move, the question did. Storing this alongside lets the device notice and
 * refetch in full.
 */
export function messageKeywordLanguageKey(languages: readonly string[]): string {
  return [...languages].sort().join(',');
}
