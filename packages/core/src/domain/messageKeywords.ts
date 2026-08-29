/**
 * The keyword matcher behind message-content monitoring, and the small offline
 * seed it falls back to.
 *
 * **What this feature is, and what it deliberately is not.** The child agent
 * never uploads a message. An Android `NotificationListenerService` reads the
 * text of an incoming message notification *on the device*, runs it through
 * `scanMessageText` here, and posts an alert **only when a term matches** —
 * carrying the category and the single term that fired, never the surrounding
 * sentence. A parent learns "an explicit-content word was seen in WhatsApp at
 * 21:14", not what the child wrote. That is the Bark-shaped design the
 * feasibility gate settled on (`docs/FEASIBILITY.md`, "Message-content
 * monitoring"): the store-safe mechanism, and the one that stores the least.
 *
 * **The seed is a fallback, not the product.** `MESSAGE_ALERT_TERMS` below is a
 * handful of high-precision terms per category, in English and Vietnamese, so a
 * device that has never fetched a policy still catches the gravest words. The
 * real list — hundreds to thousands of terms across fourteen languages — lives
 * server-side and arrives as a `MessageKeywordPolicy` (`packages/schema`), the
 * same way the web filter ships no tables to the macOS provider. `scanMessageText`
 * takes an optional term table so the native scanner runs the pushed list when
 * it holds one and the seed when it does not. **Do not grow the seed into the
 * product** — a longer hand-kept list here means a longer hand-kept Kotlin twin,
 * a parity test over thousands of strings, and no way to update without a
 * release. Growth goes into the policy.
 *
 * The category vocabulary and severity map are the wire contract and live in
 * `@kidgate/schema/messageAlert`; the Kotlin twin `KidGateMessageKeywords`
 * mirrors the seed and is pinned by `messageKeywordsParity.test.ts` (rule 2).
 */

import {
  MESSAGE_ALERT_CATEGORIES,
  MESSAGE_ALERT_SEVERITY,
  MESSAGE_ALERT_SEVERITY_RANK,
  type MessageAlertCategory,
  type MessageAlertSeverity,
} from '@kidgate/schema/messageAlert';

export {
  MESSAGE_ALERT_CATEGORIES,
  MESSAGE_ALERT_SEVERITY,
  type MessageAlertCategory,
  type MessageAlertSeverity,
};

/** A term table: terms per category. The seed and a pushed policy share it. */
export type MessageKeywordTable = Partial<
  Record<MessageAlertCategory, readonly string[]>
>;

/**
 * The offline seed. Every entry is lower-case; the matcher lower-cases the
 * haystack once and compares. A term with no space and only ASCII letters is
 * matched on **whole-word** boundaries (so `ass` does not fire inside `class`);
 * anything else — a phrase, or a term carrying Vietnamese diacritics — is
 * matched as a substring.
 *
 * Kept small on purpose (see the file header). Breadth belongs in the pushed
 * `MessageKeywordPolicy`, not here.
 */
export const MESSAGE_ALERT_TERMS: Record<MessageAlertCategory, readonly string[]> = {
  predator: [
    "don't tell your parents",
    'our little secret',
    'delete this chat',
    'send me a pic',
    'are you home alone',
    'giữ bí mật nhé',
    'đừng nói với bố mẹ',
    'gửi ảnh cho anh',
  ],
  selfHarm: [
    'kill myself',
    'want to die',
    'kms',
    'muốn chết',
    'tự tử',
    'không muốn sống',
  ],
  explicit: ['nudes', 'send nudes', 'sexting', 'ảnh nóng', 'gửi ảnh sex'],
  violence: [
    'i will kill you',
    'beat you up',
    'bring a knife',
    'tao giết mày',
    'đánh mày',
  ],
  bullying: [
    'kill yourself',
    'kys',
    'nobody likes you',
    'mày nên chết đi',
    'không ai ưa mày',
  ],
  drugs: ['weed', 'vape', 'get high', 'cần sa', 'thuốc lắc', 'ma túy'],
  alcohol: ['uống rượu', 'rượu bia', 'get drunk', 'nhậu'],
  // 'vape' is deliberately absent — it is already in `drugs`, and a term in
  // two categories resolves to whichever comes first in CATEGORIES, which
  // is a silent way for a parent to see the wrong label.
  tobacco: ['thuốc lá', 'hút thuốc', 'thuốc lào'],
  gambling: ['cờ bạc', 'cá độ', 'đánh bạc', 'lô đề'],
  profanity: ['fuck', 'shit', 'địt', 'lồn', 'cặc'],
};

export interface MessageKeywordMatch {
  category: MessageAlertCategory;
  /** The term that fired — the flagged word, not the child's message. */
  term: string;
  severity: MessageAlertSeverity;
  /**
   * True when the term matched only after folding (diacritics stripped, leet
   * undone, separators removed). A fuzzy hit is **ambiguous by construction**
   * — folding erases the boundaries that make an exact hit trustworthy — so
   * the callers treat it as needing confirmation rather than alerting on it.
   * See `foldText`.
   */
  fuzzy: boolean;
}

/**
 * Zero-width characters. Not typography: a child evading a word filter types
 * one between two letters and the word still reads normally on screen.
 */
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]/g;

/** Combining marks — what NFD splits a Vietnamese vowel into. */
const COMBINING = /[\u0300-\u036F]/g;

/**
 * The exact haystack: what the matcher has always compared, plus the two
 * repairs that cost nothing and change no result that was already correct.
 *
 * **NFC is a bug fix, not a feature.** Vietnamese has two Unicode spellings of
 * the same visible letter — precomposed (`ế` = U+1EBF) and decomposed (`ế` =
 * `e` + U+0302 + U+0301) — and iOS/macOS keyboards and several messaging apps
 * emit the decomposed form. The seed terms are precomposed, so before this
 * every decomposed message missed **silently**: the text looks identical in a
 * log, and nothing anywhere reports a near-miss. Measured 2026-08-29.
 */
export function normalizeText(text: string): string {
  return text.normalize('NFC').toLowerCase().replace(ZERO_WIDTH, '');
}

/**
 * Leet substitutions, undone on the folded form only. Digits that are not in
 * this map survive, so a real number is still a number.
 */
const LEET: Record<string, string> = {
  '0': 'o',
  '1': 'i',
  '3': 'e',
  '4': 'a',
  '5': 's',
  '7': 't',
  '@': 'a',
  $: 's',
};

/**
 * The folded haystack: aggressively lossy, for catching how children actually
 * type rather than how a dictionary spells.
 *
 * Vietnamese teenagers type without diacritics (`muon chet`), in teencode
 * (`ko`, `bme`, `ns`), and evade filters with spacing (`n u d e s`), dots
 * (`s.e.x`), leet (`ch3t`) and stretching (`nuuuudes`). Measured against the
 * shipped matcher on 2026-08-29: **2 of 14** realistic Vietnamese phrasings hit.
 * Folding both sides of the comparison to a common form is the only shape that
 * does not turn into a combinatorial term list.
 *
 * Steps, in order — the Kotlin twin runs the identical sequence:
 *  1. normalize (NFC, lower-case, zero-width stripped)
 *  2. NFD, drop combining marks — `muốn` becomes `muon`
 *  3. `đ` → `d` — U+0111 is a distinct letter and NFD does not decompose it
 *  4. leet map
 *  5. drop everything but `[a-z0-9]` — kills spacing, dots and punctuation
 *  6. collapse runs of a repeated character to one — kills stretching
 *
 * **Step 5 removes spaces, so word boundaries do not survive folding.** That is
 * deliberate (it is what catches `n u d e s`) and it is also why every fuzzy hit
 * is ambiguous: `get high` folds to `gethigh`, which `forget highway` contains.
 * `MIN_FUZZY_LENGTH` and the caller's confirmation step are what make that
 * acceptable — do not "improve" this by alerting on fuzzy hits directly.
 *
 * **Some of the ambiguity is not reducible at all.** Measured 2026-08-29
 * against the pushed policy: `con di hoc ve muon nhe` ("I'll be home late from
 * school") folds onto the slur `con đĩ`, because the two differ by diacritics
 * and nothing else. No matching rule separates them — only the diacritics a
 * child did not type. That message must never reach a parent as an alert, and
 * the only reason it does not is that fuzzy hits are confirmed or dropped.
 */
export function foldText(text: string): string {
  const base = normalizeText(text)
    .normalize('NFD')
    .replace(COMBINING, '')
    .replace(/đ/g, 'd');

  let out = '';
  for (const ch of base) {
    const mapped = LEET[ch] ?? ch;
    if (mapped >= 'a' && mapped <= 'z') {
      out += mapped;
    } else if (mapped >= '0' && mapped <= '9') {
      out += mapped;
    }
  }
  return out.replace(/(.)\1+/g, '$1');
}

/**
 * Fold each whitespace-separated token on its own, so a short term can be
 * compared against a **whole word** rather than hunted for inside one.
 *
 * `foldText` deletes spaces, which is what catches `n u d e s` — but it also
 * means a three-letter term would match inside any longer word, which is why
 * short terms were declined outright at first. Measured 2026-08-29: that
 * declined the entire class of Vietnamese profanity, since every stem folds to
 * three letters (`địt`→`dit`, `lồn`→`lon`, `cặc`→`cac`). `dit me` and `địt mẹ`
 * fold to the identical string and only the second one matched.
 */
export function foldTokens(text: string): string[] {
  const out: string[] = [];
  for (const raw of normalizeText(text).split(/\s+/)) {
    const folded = foldText(raw);
    if (folded) {
      out.push(folded);
    }
  }
  return out;
}

/**
 * At or above this length a folded term is hunted for **inside** the folded
 * message, spaces and all removed — the test that catches `n u d e s` and
 * `s.e.x`.
 */
const MIN_FUZZY_LENGTH = 4;

/**
 * Below `MIN_FUZZY_LENGTH` a folded term must equal a **whole folded token**.
 * That is what makes `dit me` match `địt` while `dm` stays out of `admin`.
 *
 * It knowingly readmits the ambiguous short folds: `lon` is both `lồn` and a
 * can of drink, `cac` is both `cặc` and `các` ("the"), `dam` is both `đấm` and
 * an English word. Acceptable **only** because these arrive as fuzzy hits,
 * which are never alerted on directly — they are confirmed by the AI tier or
 * dropped — and because the categories they land in (`profanity`) sit below the
 * default severity floor. Do not reuse this threshold for an exact match.
 */
const MIN_FUZZY_TOKEN_LENGTH = 2;

const ASCII_WORD = /^[a-z]+$/;

/**
 * Folding and normalizing every term on every scan would be per-keystroke work
 * over a pushed policy of thousands of terms. The term set is bounded by the
 * policy, so a plain memo is enough.
 */
const normalizedTerms = new Map<string, string>();
const foldedTerms = new Map<string, string>();

function memo(cache: Map<string, string>, key: string, make: (v: string) => string) {
  const hit = cache.get(key);
  if (hit !== undefined) {
    return hit;
  }
  const made = make(key);
  cache.set(key, made);
  return made;
}

/**
 * Whole-word test for a single-word ASCII term, substring test otherwise.
 * `haystack` is already lower-cased by the caller.
 */
function haystackContainsTerm(haystack: string, term: string): boolean {
  if (term.includes(' ') || !ASCII_WORD.test(term)) {
    return haystack.includes(term);
  }

  let from = 0;
  for (;;) {
    const at = haystack.indexOf(term, from);
    if (at === -1) {
      return false;
    }
    const before = at === 0 ? '' : (haystack[at - 1] ?? '');
    const after = haystack[at + term.length] ?? '';
    // `_` counts as a word character. Measured 2026-08-29: without it the
    // term `vl` matched inside the file name `vl_report.pdf` on the EXACT
    // pass, which alerts a parent directly rather than asking for confirmation.
    const boundedBefore = before === '' || !/[a-z0-9_]/.test(before);
    const boundedAfter = after === '' || !/[a-z0-9_]/.test(after);
    if (boundedBefore && boundedAfter) {
      return true;
    }
    from = at + 1;
  }
}

/**
 * Scan one notification's text and return the most serious match, or null.
 *
 * Returns the first category in `MESSAGE_ALERT_CATEGORIES` order that has any
 * matching term, and the first matching term within it — so the alert names the
 * gravest concern, and the native side stops at the first hit rather than
 * collecting every flagged word in a group chat.
 *
 * `minSeverity` ignores lower-severity categories (profanity) a parent chose
 * not to hear about. `terms` overrides the seed per category — pass a pushed
 * `MessageKeywordPolicy.terms` to scan the server list; omit it for the seed. A
 * category the table omits falls back to the seed, so a partial policy never
 * blinds a category entirely.
 *
 * **Two passes, exact before fuzzy, and the order is the safety property.** The
 * exact pass is the matcher as it always was, so every alert that fired before
 * still fires with the same category and the same term. Only when it finds
 * nothing does the fold pass run, so folding can add a hit where there was
 * silence and can never rewrite one that already existed. A fold hit comes back
 * `fuzzy: true` and the caller must confirm it rather than alert on it.
 */
export function scanMessageText(
  text: string,
  minSeverity: MessageAlertSeverity = 'low',
  terms: MessageKeywordTable = MESSAGE_ALERT_TERMS,
): MessageKeywordMatch | null {
  if (!text) {
    return null;
  }
  const floor = MESSAGE_ALERT_SEVERITY_RANK[minSeverity];

  let tokens: string[] | null = null;

  const passes: Array<{ haystack: string; fuzzy: boolean }> = [
    { haystack: normalizeText(text), fuzzy: false },
    { haystack: foldText(text), fuzzy: true },
  ];

  for (const { haystack, fuzzy } of passes) {
    if (!haystack) {
      continue;
    }
    if (fuzzy && tokens === null) {
      tokens = foldTokens(text);
    }
    for (const category of MESSAGE_ALERT_CATEGORIES) {
      const severity = MESSAGE_ALERT_SEVERITY[category];
      if (MESSAGE_ALERT_SEVERITY_RANK[severity] < floor) {
        continue;
      }
      const list = terms[category] ?? MESSAGE_ALERT_TERMS[category];
      for (const term of list) {
        if (fuzzy) {
          const folded = memo(foldedTerms, term, foldText);
          // Long enough to survive without boundaries: hunt inside the joined
          // fold, which is what catches `n u d e s`. Too short for that: demand
          // a whole folded token, which is what catches `dit me` without
          // finding `dm` inside `admin`.
          const found =
            folded.length >= MIN_FUZZY_LENGTH
              ? haystack.includes(folded)
              : folded.length >= MIN_FUZZY_TOKEN_LENGTH &&
                (tokens ?? []).includes(folded);
          if (found) {
            return { category, term, severity, fuzzy: true };
          }
        } else if (
          haystackContainsTerm(haystack, memo(normalizedTerms, term, normalizeText))
        ) {
          return { category, term, severity, fuzzy: false };
        }
      }
    }
  }
  return null;
}
