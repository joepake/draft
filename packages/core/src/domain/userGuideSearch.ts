/**
 * Search inside the User guide, entirely on the client — the phone and the
 * dashboard both, so a query finds the same topics on either console.
 *
 * The guide is locale data the client already holds, so there is nothing
 * to fetch and nothing to send: the index is built once per language from the
 * same `t()` calls and step lists the screens render, and a query is matched
 * against it on every keystroke. Seventeen-odd topics of a few hundred words
 * each — a linear scan is well under a millisecond and needs no index format.
 *
 * A topic's optional `keywords` line holds what a parent types that the copy
 * never says — brand names, OEMs, OS permission names, the word for the
 * problem rather than the feature. It is indexed and never shown.
 *
 * **Not `foldText` from `messageKeywords`.** That fold keeps `[a-z0-9]` only,
 * which is right for catching evasions of a Latin keyword and would turn every
 * Arabic, Devanagari, Cyrillic, Hangul and Japanese string into the empty
 * string. This fold removes only what a searcher leaves out — case, Latin
 * diacritics (`gioi han` finds `Giới hạn`), Arabic short vowels, punctuation —
 * and leaves every script's letters alone.
 */
import {
  getUserGuideTopic,
  USER_GUIDE_GROUPS,
  type UserGuideTopicId,
} from './userGuide';

/** Latin/Greek/Cyrillic combining marks — what NFD splits `ớ` or `й` into. */
const COMBINING = /[̀-ͯ]/g;

/** Arabic harakat and the superscript alef: optional marks nobody types. */
const HARAKAT = /[ً-ٰٟ]/g;

/** The `[[…]]` chip markers inside step values (`GuideStepText`). */
const CHIP_MARKERS = /\[\[|\]\]/g;

/**
 * Punctuation that separates words, in every script the packs use. Written
 * out rather than `\p{P}`: Unicode property escapes are not a guarantee on
 * every Hermes this app ships to, and a regex that throws at module load takes
 * the whole screen with it.
 */
const SEPARATORS =
  /[\s.,;:!?¿¡'"`“”‘’‚„«»‹›()[\]{}<>\-‐–—/\\|·•…、。，．！？：；「」『』（）《》〈〉【】،؛؟۔।॥]+/g;

/** Letters NFD leaves whole, folded to what a searcher types instead. */
const LETTER_FOLDS: Record<string, string> = {
  đ: 'd',
  ı: 'i',
  ß: 'ss',
  œ: 'oe',
  æ: 'ae',
  ø: 'o',
};
const LETTER_FOLD = /[đıßœæø]/g;

/**
 * `String.prototype.normalize` is ES2015, and Hermes implements it through the
 * platform (`java.text.Normalizer`, CoreFoundation). If a build ever ships
 * without it, search degrades to case-insensitive exact matching rather than
 * throwing — diacritics then have to be typed, and nothing else changes.
 */
function normalizeSafe(text: string, form: 'NFD' | 'NFKC'): string {
  try {
    return text.normalize(form);
  } catch {
    return text;
  }
}

/**
 * The comparable form of a guide string or a query. Both sides go through the
 * same function, so whatever it does it does symmetrically.
 *
 *  1. NFKC — full-width Latin and half-width kana to their ordinary forms
 *  2. lower-case — Turkish `İ` becomes `i` + U+0307, which step 3 drops
 *  3. NFD, then drop combining marks and harakat — `muốn` → `muon`
 *  4. the letters NFD does not split: `đ` → `d`, `ı` → `i`, `ß` → `ss`
 *  5. chip markers and punctuation to single spaces
 *
 * Hangul stays decomposed after step 3, on purpose: `하` is then a prefix of
 * `한`, so a Korean query matches while the last syllable is still being typed.
 */
export function foldForSearch(text: string): string {
  const decomposed = normalizeSafe(normalizeSafe(text, 'NFKC').toLowerCase(), 'NFD');
  return decomposed
    .replace(COMBINING, '')
    .replace(HARAKAT, '')
    .replace(LETTER_FOLD, ch => LETTER_FOLDS[ch] ?? ch)
    .replace(CHIP_MARKERS, ' ')
    .replace(SEPARATORS, ' ')
    .trim();
}

/**
 * `foldForSearch` for one code point, separators kept as single spaces and
 * nothing trimmed — so the fold of a string can be laid out piece by piece and
 * every folded character traced to the character it came from. Pinned to
 * `foldForSearch` by test over every guide string in fourteen packs.
 */
function foldPiece(ch: string): string {
  return normalizeSafe(normalizeSafe(ch, 'NFKC').toLowerCase(), 'NFD')
    .replace(COMBINING, '')
    .replace(HARAKAT, '')
    .replace(LETTER_FOLD, letter => LETTER_FOLDS[letter] ?? letter)
    .replace(SEPARATORS, ' ');
}

/**
 * `foldForSearch` with the accents kept (still NFD, lower-case, separators to
 * spaces): what an accented query word is compared against. Harakat go in both
 * forms — nobody types them.
 */
function markedForSearch(text: string): string {
  return normalizeSafe(normalizeSafe(text, 'NFKC').toLowerCase(), 'NFD')
    .replace(HARAKAT, '')
    .replace(CHIP_MARKERS, ' ')
    .replace(SEPARATORS, ' ')
    .trim();
}

/**
 * Kana, Han and Hangul — scripts where a word boundary is not a space, so a
 * query word may match anywhere and a letter of theirs counts as a boundary.
 */
const UNSPACED = /[ᄀ-ᇿ぀-ヿ㐀-鿿가-힯豈-﫿]/;

/**
 * Below this length a query word must start a word. Vietnamese is where it
 * bit: once accents go, `hỗ trợ` is `ho tro`, and `ho` sits inside `khóa`,
 * `thoại`, `hộp`, `cho` while `tro` sits inside `trong` — 34 of 36 topics
 * matched. A longer fragment inside a word is a compound (`zeit` in
 * `Bildschirmzeit`) and still matches.
 */
const ANYWHERE_FROM = 4;

/**
 * One word of the query. `sensitive` when the parent typed an accent: then the
 * accent has to be there too, so `hỗ` stops matching `hộ` and `họ`. A word
 * typed bare still matches every accented form — `gioi han` finds `Giới hạn`.
 */
type Term = {
  folded: string;
  marked: string;
  sensitive: boolean;
  anywhere: boolean;
};

function termsOf(query: string): Term[] {
  const folded = foldForSearch(query).split(' ').filter(Boolean);
  const marked = markedForSearch(query).split(' ').filter(Boolean);
  const aligned = marked.length === folded.length;
  return folded.map((word, i) => {
    const mark = aligned ? (marked[i] ?? word) : word;
    return {
      folded: word,
      marked: mark,
      sensitive: mark !== word,
      anywhere: word.length >= ANYWHERE_FROM || UNSPACED.test(word),
    };
  });
}

/** Where a match may begin: anywhere, or at the start of a word. */
function startsWord(text: string, at: number): boolean {
  const before = text[at - 1];
  return before === undefined || before === ' ' || UNSPACED.test(before);
}

function occursIn(text: string, needle: string, anywhere: boolean): boolean {
  for (let at = text.indexOf(needle); at !== -1; at = text.indexOf(needle, at + 1)) {
    if (anywhere || startsWord(text, at)) {
      return true;
    }
  }
  return false;
}

/** Exposed for the test that pins `foldPiece` to `foldForSearch`. */
export function foldByPieces(text: string): string {
  let folded = '';
  for (const ch of text) {
    folded += foldPiece(ch);
  }
  return folded.replace(/ +/g, ' ').trim();
}

/**
 * Where the query's words sit inside `text`, as `[start, end)` ranges of
 * `text` itself — what a result row bolds. Same rules as the search, so only
 * what made a row match is bold: folded text (`gioi han` lights up `Giới hạn`),
 * short words only at a word start, an accent typed is an accent required.
 * Each folded character remembers the code point it came from, so a range
 * never splits a letter from its accent, a surrogate pair, or a Hangul
 * syllable from the jamo a half-typed query matched. Overlapping and touching
 * ranges are merged.
 *
 * A query of several words said as a phrase in `text` bolds the phrase, not
 * each word wherever it lands — `ho tro` lights `hỗ trợ`, not the `hộ` of
 * `hộp` beside it. `phraseOnly` is for a result the search kept because it
 * says the phrase (`UserGuideSearchHit.phrase`): a line of it without the
 * phrase is then left plain rather than lit word by word.
 */
export function matchRanges(
  text: string,
  query: string,
  phraseOnly = false,
): [number, number][] {
  const terms = termsOf(query);
  if (terms.length === 0) {
    return [];
  }

  let folded = '';
  const startOf: number[] = [];
  const endOf: number[] = [];
  let at = 0;
  for (const ch of text) {
    const piece = foldPiece(ch);
    for (let k = 0; k < piece.length; k++) {
      startOf.push(at);
      endOf.push(at + ch.length);
    }
    folded += piece;
    at += ch.length;
  }

  if (terms.length > 1) {
    const phrases = phraseRanges(text, folded, startOf, endOf, terms);
    if (phrases.length > 0 || phraseOnly) {
      return mergeRanges(phrases);
    }
  }

  const found: [number, number][] = [];
  for (const term of terms) {
    let hit = folded.indexOf(term.folded);
    while (hit !== -1) {
      // Both indexes are inside `folded`, so neither read can miss.
      const start = startOf[hit] ?? 0;
      const end = endOf[hit + term.folded.length - 1] ?? 0;
      if (
        (term.anywhere || startsWord(folded, hit)) &&
        (!term.sensitive ||
          markedForSearch(text.slice(start, end)).startsWith(term.marked))
      ) {
        found.push([start, end]);
      }
      hit = folded.indexOf(term.folded, hit + term.folded.length);
    }
  }
  return mergeRanges(found);
}

function mergeRanges(found: [number, number][]): [number, number][] {
  const merged: [number, number][] = [];
  for (const range of [...found].sort((a, b) => a[0] - b[0])) {
    const last = merged[merged.length - 1];
    if (last && range[0] <= last[1]) {
      last[1] = Math.max(last[1], range[1]);
    } else {
      merged.push([range[0], range[1]]);
    }
  }
  return merged;
}

/**
 * `adjacentIn`'s rule — every word but the last whole, the last a prefix,
 * accents where typed — over the piece-by-piece fold `matchRanges` builds, as
 * ranges of the original text from the first word to the end of the match.
 */
function phraseRanges(
  text: string,
  folded: string,
  startOf: number[],
  endOf: number[],
  terms: Term[],
): [number, number][] {
  const words: [number, number][] = [];
  for (let k = 0; k < folded.length;) {
    if (folded[k] === ' ') {
      k++;
      continue;
    }
    let end = k;
    while (end < folded.length && folded[end] !== ' ') {
      end++;
    }
    words.push([k, end]);
    k = end;
  }
  // The original text behind `length` folded characters from `from`.
  const rawOf = (from: number, length: number) =>
    text.slice(startOf[from] ?? 0, endOf[from + length - 1] ?? 0);

  const last = terms.length - 1;
  const found: [number, number][] = [];
  for (let i = 0; i + last < words.length; i++) {
    const phrase = terms.every((term, j) => {
      const [from, to] = words[i + j] ?? [0, 0];
      const word = folded.slice(from, to);
      return j < last
        ? word === term.folded &&
            (!term.sensitive ||
              markedForSearch(rawOf(from, word.length)) === term.marked)
        : word.startsWith(term.folded) &&
            (!term.sensitive ||
              markedForSearch(rawOf(from, term.folded.length)).startsWith(term.marked));
    });
    const first = words[i];
    const lastWord = words[i + last];
    const lastTerm = terms[last];
    if (phrase && first && lastWord && lastTerm) {
      found.push([
        startOf[first[0]] ?? 0,
        endOf[lastWord[0] + lastTerm.folded.length - 1] ?? 0,
      ]);
    }
  }
  return found;
}

/** How far into a quoted line the first match may sit before it is cut. */
const SNIPPET_LEAD = 40;

/**
 * A quoted step or tip, cut so its first match is on screen. The row clamps
 * the quote to two lines, and a step that names the matched word at its end
 * showed the parent everything but the reason it was listed.
 */
// ponytail: counts characters, not measured width — a narrow phone or a
// wide script can still clamp the match away; measure the line if that shows.
export function snippetAroundMatch(
  text: string,
  query: string,
  phraseOnly = false,
): string {
  const first = matchRanges(text, query, phraseOnly)[0];
  if (!first || first[0] <= SNIPPET_LEAD) {
    return text;
  }
  const from = text.lastIndexOf(' ', first[0] - SNIPPET_LEAD / 2);
  return `…${text.slice(from > 0 ? from + 1 : first[0] - SNIPPET_LEAD / 2)}`;
}

/**
 * What a guide result quotes: the summary, or the step or tip that matched,
 * cut so the match is on screen.
 */
export function guideSnippet(
  hit: UserGuideSearchHit,
  query: string,
  t: (key: string, params?: Record<string, string | number>) => string,
): string {
  switch (hit.snippet.kind) {
    case 'step':
      return `${t('userGuide.stepLabel', { n: hit.snippet.index + 1 })} · ${snippetAroundMatch(hit.snippet.text, query, hit.phrase)}`;
    case 'tip':
      return `${t('userGuide.tipTitle')} · ${snippetAroundMatch(hit.snippet.text, query, hit.phrase)}`;
    default:
      return t(`userGuide.topics.${hit.topicId}.summary`);
  }
}

/** A guide string with its chip markers removed, for display as a snippet. */
export function stripChipMarkers(text: string): string {
  return text.replace(/\[\[(.+?)\]\]/g, '$1');
}

/**
 * A searchable line, word by word in both forms. `markedWords[i]` is
 * `words[i]` with its accents; the two splits align because the forms differ
 * only in marks, and where they cannot (a word made only of marks) the bare
 * words stand in, which only makes an accented query lenient there.
 */
type FoldedField = {
  raw: string;
  folded: string;
  words: string[];
  markedWords: string[];
};

function fold(raw: string): FoldedField {
  const folded = foldForSearch(raw);
  const words = folded.split(' ');
  const markedWords = markedForSearch(raw).split(' ');
  return {
    raw,
    folded,
    words,
    markedWords: markedWords.length === words.length ? markedWords : words,
  };
}

export type UserGuideSearchEntry = {
  topicId: UserGuideTopicId;
  title: FoldedField;
  keywords: FoldedField | null;
  summary: FoldedField;
  group: FoldedField;
  tip: FoldedField | null;
  steps: FoldedField[];
};

export type UserGuideSearchSnippet =
  | { kind: 'summary' }
  | { kind: 'step'; index: number; text: string }
  | { kind: 'tip'; text: string };

export type UserGuideSearchHit = {
  topicId: UserGuideTopicId;
  snippet: UserGuideSearchSnippet;
  /**
   * Kept because it says the query as a phrase. Highlight with `phraseOnly`,
   * so the row bolds the phrase and nothing word by word.
   */
  phrase: boolean;
};

/**
 * Where the detail screen should land: a step's index, or the tip. A route
 * param, so a number or a string rather than the snippet object.
 */
export type UserGuideFocus = number | 'tip';

/** Nothing to land on when the title or summary matched — the top is right. */
export function focusOfHit(hit: UserGuideSearchHit): UserGuideFocus | undefined {
  switch (hit.snippet.kind) {
    case 'step':
      return hit.snippet.index;
    case 'tip':
      return 'tip';
    default:
      return undefined;
  }
}

/**
 * Build the index for one language, in the order the guide lists its topics.
 *
 * `t` is the screen's own translator, so a key missing from a pack is indexed
 * as the English the screen shows, not as the raw key. `stepsOf` is the same
 * step list the detail screen renders, in the same language.
 */
export function buildUserGuideSearchIndex(
  t: (key: string) => string,
  stepsOf: (topicId: UserGuideTopicId) => string[],
): UserGuideSearchEntry[] {
  const entries: UserGuideSearchEntry[] = [];
  for (const group of USER_GUIDE_GROUPS) {
    const groupTitle = fold(t(`userGuide.groups.${group.id}.title`));
    for (const topicId of group.topicIds) {
      const topic = getUserGuideTopic(topicId);
      if (!topic) {
        continue;
      }
      const tipKey = `userGuide.topics.${topic.id}.tip`;
      const tip = t(tipKey);
      const keywordsKey = `userGuide.topics.${topic.id}.keywords`;
      const keywords = t(keywordsKey);
      entries.push({
        topicId: topic.id,
        title: fold(t(`userGuide.topics.${topic.id}.title`)),
        keywords: keywords && keywords !== keywordsKey ? fold(keywords) : null,
        summary: fold(t(`userGuide.topics.${topic.id}.summary`)),
        group: groupTitle,
        tip: tip && tip !== tipKey ? fold(tip) : null,
        steps: stepsOf(topic.id).map(fold),
      });
    }
  }
  return entries;
}

/**
 * Where a match counts most. A word in the title is what the parent meant; a
 * keyword was put there for exactly this query; the same word in step six of
 * an unrelated topic is a mention.
 */
const WEIGHT = {
  title: 8,
  keywords: 6,
  summary: 4,
  group: 2,
  detail: 1,
} as const;

/** One query word inside one word of the line, accent and all if typed. */
function termIn(field: FoldedField, term: Term): boolean {
  return field.words.some(
    (word, i) =>
      occursIn(word, term.folded, term.anywhere) &&
      (!term.sensitive ||
        occursIn(field.markedWords[i] ?? word, term.marked, term.anywhere)),
  );
}

/** `words` run together contain `joined` from the start of one of them. */
function runTogetherIn(words: string[], joined: string, anywhere: boolean): boolean {
  const compact = words.join('');
  if (anywhere) {
    return compact.includes(joined);
  }
  let at = 0;
  for (const word of words) {
    if (compact.startsWith(joined, at)) {
      return true;
    }
    at += word.length;
  }
  return false;
}

/**
 * The query with its spaces removed, found in the line with its spaces
 * removed — `check in` against `checkin`, `wifi` against `Wi-Fi`, and a
 * Japanese query, which has no spaces to split on. From a word start only,
 * or `ho tro` would find `cho trong`.
 */
function phraseIn(field: FoldedField, terms: Term[]): boolean {
  const unspaced = terms.some(term => UNSPACED.test(term.folded));
  if (!runTogetherIn(field.words, terms.map(term => term.folded).join(''), unspaced)) {
    return false;
  }
  return (
    !terms.some(term => term.sensitive) ||
    runTogetherIn(field.markedWords, terms.map(term => term.marked).join(''), unspaced)
  );
}

/** Does this field hold the whole query — every word, or the words run together? */
function holdsQuery(field: FoldedField, terms: Term[]): boolean {
  return terms.every(term => termIn(field, term)) || phraseIn(field, terms);
}

function scoreEntry(entry: UserGuideSearchEntry, terms: Term[]): number {
  const details = entry.tip ? [...entry.steps, entry.tip] : entry.steps;
  const weighted: [FoldedField, number][] = [
    [entry.title, WEIGHT.title],
    ...(entry.keywords
      ? [[entry.keywords, WEIGHT.keywords] as [FoldedField, number]]
      : []),
    [entry.summary, WEIGHT.summary],
    [entry.group, WEIGHT.group],
    ...details.map(field => [field, WEIGHT.detail] as [FoldedField, number]),
  ];

  let score = 0;
  let everyTerm = true;
  for (const term of terms) {
    let best = 0;
    for (const [field, weight] of weighted) {
      if (weight > best && termIn(field, term)) {
        best = weight;
      }
    }
    if (best === 0) {
      everyTerm = false;
      break;
    }
    score += best;
  }
  if (everyTerm) {
    if (entry.title.folded.includes(terms.map(term => term.folded).join(' '))) {
      score += WEIGHT.title;
    }
    return score;
  }

  for (const [field, weight] of weighted) {
    if (phraseIn(field, terms)) {
      return weight;
    }
  }
  return 0;
}

function pickSnippet(
  entry: UserGuideSearchEntry,
  terms: Term[],
  phrase: boolean,
): UserGuideSearchSnippet {
  // Kept for the phrase: quote the line that says it, not the first line that
  // holds each word somewhere.
  if (phrase) {
    if (adjacentIn(entry.title, terms) || adjacentIn(entry.summary, terms)) {
      return { kind: 'summary' };
    }
    const index = entry.steps.findIndex(step => adjacentIn(step, terms));
    const step = entry.steps[index];
    if (step) {
      return { kind: 'step', index, text: stripChipMarkers(step.raw) };
    }
    if (entry.tip && adjacentIn(entry.tip, terms)) {
      return { kind: 'tip', text: entry.tip.raw };
    }
  }

  // Keywords are never quoted: a keyword-only hit falls through to the
  // summary below, and a keyword that a step also carries lands on the step.
  if (holdsQuery(entry.title, terms) || holdsQuery(entry.summary, terms)) {
    return { kind: 'summary' };
  }

  // The detail line that carries the most of the query, steps before the tip.
  let bestHits = 0;
  let best: UserGuideSearchSnippet = { kind: 'summary' };
  const consider = (field: FoldedField, snippet: UserGuideSearchSnippet) => {
    const hits = phraseIn(field, terms)
      ? terms.length
      : terms.filter(term => termIn(field, term)).length;
    if (hits > bestHits) {
      bestHits = hits;
      best = snippet;
    }
  };
  entry.steps.forEach((step, index) =>
    consider(step, {
      kind: 'step',
      index,
      text: stripChipMarkers(step.raw),
    }),
  );
  if (entry.tip) {
    consider(entry.tip, { kind: 'tip', text: entry.tip.raw });
  }
  return best;
}

/**
 * Topics matching `query`, best first, ties in guide order.
 *
 * `null` means there is no query — the screen shows the full guide — and is
 * kept apart from `[]`, which means a query found nothing.
 *
 * A topic matches when every word of the query appears in it (`termsOf` says
 * where a word may match and whether its accent counts), or when the query
 * with its spaces removed appears inside one of its lines.
 */
export function searchUserGuide(
  index: UserGuideSearchEntry[],
  query: string,
): UserGuideSearchHit[] | null {
  const terms = termsOf(query);
  if (terms.length === 0) {
    return null;
  }

  const matched = index
    .map((entry, order) => ({
      entry,
      order,
      score: scoreEntry(entry, terms),
    }))
    .filter(scored => scored.score > 0);

  // A query of several words that some topic says as a phrase: only those.
  // `ho tro` bare still matches `hộp` + `trong` word by word in 34 topics;
  // three say `hỗ trợ`. With no phrase anywhere, word by word stands.
  const phrased =
    terms.length > 1
      ? matched.filter(({ entry }) =>
          fieldsOf(entry).some(field => adjacentIn(field, terms)),
        )
      : [];

  const phrase = phrased.length > 0;
  return (phrase ? phrased : matched)
    .sort((a, b) => b.score - a.score || a.order - b.order)
    .map(({ entry }) => ({
      topicId: entry.topicId,
      snippet: pickSnippet(entry, terms, phrase),
      phrase,
    }));
}

function fieldsOf(entry: UserGuideSearchEntry): FoldedField[] {
  return [
    entry.title,
    ...(entry.keywords ? [entry.keywords] : []),
    entry.summary,
    entry.group,
    ...entry.steps,
    ...(entry.tip ? [entry.tip] : []),
  ];
}

/**
 * The query's words as consecutive words of the line: every one but the last
 * a whole word, the last still being typed. Whole, because `ho tro` must not
 * read `hộp trong` as the phrase. Spaceless scripts never get here — their
 * query is one word.
 */
function adjacentIn(field: FoldedField, terms: Term[]): boolean {
  const last = terms.length - 1;
  for (let i = 0; i + last < field.words.length; i++) {
    const phrase = terms.every((term, j) => {
      const word = field.words[i + j] ?? '';
      const marked = field.markedWords[i + j] ?? word;
      return j === last
        ? word.startsWith(term.folded) &&
            (!term.sensitive || marked.startsWith(term.marked))
        : word === term.folded && (!term.sensitive || marked === term.marked);
    });
    if (phrase) {
      return true;
    }
  }
  return false;
}

/**
 * The guide's matching rule for a line that is not a guide topic — a child's
 * name, a device, a screen (`FamilySearchScreen`): every word of the query, or
 * the words run together. An empty query matches everything.
 */
export function matchesQuery(text: string, query: string): boolean {
  const terms = termsOf(query);
  return terms.length === 0 || holdsQuery(fold(text), terms);
}
