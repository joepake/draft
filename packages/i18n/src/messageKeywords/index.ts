/**
 * The message-monitoring keyword policy, split one file per language.
 *
 * **Why this lives in `@kidgate/i18n` but NOT in `src/locales`.** The locale
 * packs are translations: every language says the same things, and
 * `localeParity` fails when one is missing a key. These are not translations.
 * A term list is different *content* per language — Vietnamese teencode has no
 * German equivalent, and `sewerslide` has no Vietnamese one — so the lists are
 * different lengths on purpose and key parity is the wrong test entirely.
 * Filing them under `locales/` would either break that machinery or force it to
 * be weakened for everything else. They are language-partitioned data, which is
 * what this package is for; they are just not copy.
 *
 * **Nothing here is user-facing.** These strings are never rendered. Rule 5 of
 * the root `CLAUDE.md` is about what a parent reads; the category *labels* a
 * parent reads live in `locales/<lang>/messageMonitoring.ts` and are unrelated
 * to the words matched here.
 *
 * **The server reads this through codegen, not a copy.** `functions/` sits
 * outside the workspace, so `scripts/build-functions-shared.mjs` bundles this
 * module into `functions/lib/generated/messageKeywords.js` and
 * `functions/lib/messageKeywordSource.js` re-exports it. There is no
 * hand-mirrored second list; `yarn functions:shared:check` fails on drift.
 *
 * Adding a language: write `<code>.ts`, add it to `PACKS` below, bump
 * `MESSAGE_KEYWORD_VERSION`. A device skips a payload whose version it holds.
 */

import type { MessageAlertCategory } from '@kidgate/schema/messageAlert';
import { MESSAGE_ALERT_CATEGORIES } from '@kidgate/schema/messageAlert';
import { ar } from './ar';
import { de } from './de';
import { en } from './en';
import { es } from './es';
import { fr } from './fr';
import { hi } from './hi';
import { id } from './id';
import { it } from './it';
import { ja } from './ja';
import { ko } from './ko';
import { pt } from './pt';
import { ru } from './ru';
import { tr } from './tr';
import { vi } from './vi';
import type { MessageKeywordPack, MessageKeywordTerms } from './types';

export type { MessageKeywordPack, MessageKeywordTerms } from './types';

/**
 * Bump on every vocabulary change — the device skips a payload whose version it
 * already holds, so a term added without a bump reaches nobody.
 *
 * 7 → 8: split one file per language and filled the twelve that were empty.
 * 8 → 9: per-country teen slang, teencode and community codes. The addition
 *        that matters most is the last kind: `몸캠피싱`, `조건만남`, `援交`,
 *        `パパ活`, `闇バイト`, `синий кит`, `open bo`, `judol`, `packs`,
 *        `cheese pizza`. Those are not dictionary words a translator would
 *        reach for — they are how a specific harm is actually named in one
 *        country, and a list built by translating English misses every one.
 * 9 → 10: nine terms that are ordinary words somewhere replaced by phrases
 *        (`đá`→`đập đá`, `соль`→`купить соль`, `rot`→`rot in hell`,
 *        `ana`→`ana coach`), and twelve Japanese terms de-spaced. Measured:
 *        45 ordinary messages flagged 16 before, 1 after. **Every vocabulary
 *        change needs this bump** — a device holding the old number skips the
 *        payload, so a fix without a bump reaches nobody.
 * 10 → 11: restored `vi` gaps against a real WhatsApp thread that scanned
 *        16 violent/profane lines and matched 1 — `nện cho`, `mày thích
 *        chết`, `dit`/`dit lon` (the unaccented spelling, which the exact
 *        pass does not fold), and bare `vl` (dropped in the 7→8 file split).
 *        `con chó` and `láo nháo` went into `ambiguous` rather than `terms`:
 *        both read as an actual pet or ordinary scolding far more often than
 *        as an insult.
 */
export const MESSAGE_KEYWORD_VERSION = 11;

/** Every pack, keyed by language code. */
export const MESSAGE_KEYWORD_PACKS: Record<string, MessageKeywordPack> = {
  ar,
  de,
  en,
  es,
  fr,
  hi,
  id,
  it,
  ja,
  ko,
  pt,
  ru,
  tr,
  vi,
};

/**
 * Merge the named languages' packs, or every language when `languages` is
 * omitted.
 *
 * **Scoping is not an optimisation, it is a correctness fix.** Measured
 * 2026-08-29 over 45 ordinary messages across the fourteen languages: scanning
 * all fourteen packs flagged **16**, scanning only the message's own language
 * flagged 5. The collisions are not exotic — `rot` is English algospeak for
 * decay and German for "red"; `ana`, `mia` and `sui` are English self-harm
 * shorthand and everyday Spanish, Italian and French words; `ke` is Vietnamese
 * for ketamine and Hindi for "of". Every one of those matched on the exact
 * pass, which alerts a parent directly whenever the family has not turned the
 * AI tier on. A German child writing "the traffic light is red" was reported
 * for bullying.
 */
function merge(
  slot: 'terms' | 'ambiguous',
  languages?: readonly string[],
): Record<MessageAlertCategory, string[]> {
  const out = {} as Record<MessageAlertCategory, string[]>;
  for (const category of MESSAGE_ALERT_CATEGORIES) {
    out[category] = [];
  }
  const packs = languages
    ? languages.map(code => MESSAGE_KEYWORD_PACKS[code]).filter(Boolean)
    : Object.values(MESSAGE_KEYWORD_PACKS);
  for (const pack of packs as MessageKeywordPack[]) {
    const table: MessageKeywordTerms | undefined = pack[slot];
    if (!table) {
      continue;
    }
    for (const category of MESSAGE_ALERT_CATEGORIES) {
      for (const term of table[category] ?? []) {
        // The scanner returns the first matching term, so a duplicate is only
        // wasted bytes on every device — but two packs claiming the same word
        // is also a sign one of them copied rather than translated.
        if (!out[category].includes(term)) {
          out[category].push(term);
        }
      }
    }
  }
  return out;
}

/**
 * The terms for a chosen set of languages, in the shape the device policy
 * carries. An unknown code is ignored; an empty or omitted list means every
 * language, which is what an older client that does not ask for a subset gets.
 */
export function messageKeywordTermsFor(languages?: readonly string[]) {
  return merge('terms', languages?.length ? languages : undefined);
}

/** The ambiguous subset for the same languages. */
export function messageKeywordAmbiguousFor(languages?: readonly string[]) {
  return merge('ambiguous', languages?.length ? languages : undefined);
}

/** Every language's terms. Prefer `messageKeywordTermsFor` — see `merge`. */
export const MESSAGE_KEYWORD_TERMS = merge('terms');

/** The subset that must be confirmed by the AI tier rather than alerted on. */
export const MESSAGE_KEYWORD_AMBIGUOUS = merge('ambiguous');
