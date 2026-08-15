import { detectBrowserLanguage, matchSupportedLanguage } from './detectLanguage.js';
import { interpolate } from './interpolate.js';
import { DEFAULT_LANGUAGE, LANGUAGE_META, SUPPORTED_LANGUAGES } from './languages.js';
import { loadLocale, peekLocale } from './locales/index.js';

const STORAGE_KEY = 'kidgate.language';

const listeners = new Set();

function readStoredLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_LANGUAGES.includes(stored) ? stored : null;
  } catch {
    // Private-mode Safari throws on localStorage; following the browser
    // language is a fine answer when the choice cannot be persisted.
    return null;
  }
}

/**
 * `?hl=` — the language the reader is already using in whatever sent them
 * here.
 *
 * `apps/mobile` and `apps/desktop` no longer render the Privacy Policy or the
 * Terms themselves; both open `apps/site` in the reader's browser and carry
 * their own language on the URL. Without this, a parent whose phone is set to
 * Vietnamese lands on an English page because their browser reports English —
 * which is the case the parameter exists for, not an edge one.
 *
 * It **wins over the stored preference and is deliberately not persisted.**
 * Winning, because it is an explicit statement about this reader rather than a
 * guess: a stale `kidgate.language` from one visit must not decide which
 * language a legal document is read in. Not persisted, because a link is a
 * visit — a shared URL carrying `hl=ar` must not leave someone else's browser
 * in Arabic for good. The picker still writes, so a choice made *here* sticks.
 *
 * `hl` rather than `lang`: it is what Google's own properties use for exactly
 * this, so it is the one a store listing or a support article can be pointed
 * at without a second convention.
 */
function readUrlLanguage() {
  try {
    const hl = new URLSearchParams(window.location.search).get('hl');
    return hl ? matchSupportedLanguage([hl]) : null;
  } catch {
    // No `window` (a prerender or a test), or a malformed query string. Both
    // are "nothing was asked for", not an error worth surfacing.
    return null;
  }
}

const urlLanguage = readUrlLanguage();

/**
 * Explicit pick, or null when following the browser locale. A `?hl=` seeds it
 * so the picker ticks the language actually on screen, but never reaches
 * `localStorage` — see `readUrlLanguage`.
 */
let languagePreference = urlLanguage ?? readStoredLanguage();
let currentLanguage = languagePreference ?? detectBrowserLanguage();

function notify() {
  listeners.forEach(listener => listener());
}

/**
 * `<html lang>` drives screen-reader pronunciation and the browser's own
 * translate prompt, so it has to track the language actually rendered.
 */
function syncDocumentLanguage() {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = currentLanguage;
}

/* ------------------------------------------------------------------ *
 * Lookup
 * ------------------------------------------------------------------ */

function lookupIn(pack, key) {
  if (!pack) return undefined;
  let node = pack;
  for (const part of key.split('.')) {
    if (!node || typeof node !== 'object') return undefined;
    node = node[part];
  }
  return typeof node === 'string' ? node : undefined;
}

const pluralRulesCache = new Map();

function pluralCategory(lang, count) {
  let rules = pluralRulesCache.get(lang);
  if (rules === undefined) {
    try {
      rules = new Intl.PluralRules(lang);
    } catch {
      rules = null;
    }
    pluralRulesCache.set(lang, rules);
  }
  return rules ? rules.select(count) : count === 1 ? 'one' : 'other';
}

/**
 * A numeric `count` param selects a `key_<category>` variant using the CLDR
 * categories (zero/one/two/few/many/other). Lookup order is exact category,
 * then `_other`, then the plain key — so languages without plural inflection
 * (Vietnamese, Japanese, Korean) just keep the plain key.
 */
function lookupWithPlural(pack, lang, key, params) {
  const count = params?.count;
  if (typeof count === 'number') {
    const category = pluralCategory(lang, count);
    const variant = lookupIn(pack, `${key}_${category}`);
    if (variant !== undefined) return variant;
    if (category !== 'other') {
      const other = lookupIn(pack, `${key}_other`);
      if (other !== undefined) return other;
    }
  }
  return lookupIn(pack, key);
}

function resolve(key, params) {
  const primary = lookupWithPlural(
    peekLocale(currentLanguage),
    currentLanguage,
    key,
    params,
  );
  if (primary !== undefined) return primary;

  if (currentLanguage !== DEFAULT_LANGUAGE) {
    const fallback = lookupWithPlural(
      peekLocale(DEFAULT_LANGUAGE),
      DEFAULT_LANGUAGE,
      key,
      params,
    );
    if (fallback !== undefined) return fallback;
  }

  // The key itself: visible in the UI, greppable, and never a blank space.
  return key;
}

/* ------------------------------------------------------------------ *
 * Formatting
 * ------------------------------------------------------------------ */

const numberFormatCache = new Map();

function getNumberFormat(lang) {
  let format = numberFormatCache.get(lang);
  if (format === undefined) {
    try {
      format = new Intl.NumberFormat(lang);
    } catch {
      format = null;
    }
    numberFormatCache.set(lang, format);
  }
  return format;
}

/** Locale-aware digits for interpolated numbers (1,440 vs 1.440 vs ١٬٤٤٠). */
function formatParamValue(value) {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return getNumberFormat(currentLanguage)?.format(value) ?? String(value);
  }
  return String(value);
}

export function formatNumber(value) {
  return formatParamValue(value);
}

/** BCP-47 tag for `Intl` and `toLocaleDateString` call sites. */
export function getLocaleTag() {
  return currentLanguage;
}

/* ------------------------------------------------------------------ *
 * Public API — mirrors the app's `src/i18n/index.ts`
 * ------------------------------------------------------------------ */

export function t(key, params) {
  return interpolate(resolve(key, params), params, formatParamValue);
}

export function getLanguage() {
  return currentLanguage;
}

/** `system` = follow the browser; otherwise an explicit language. */
export function getLanguagePreference() {
  return languagePreference ?? 'system';
}

async function applyLanguage(next) {
  await loadLocale(next);
  currentLanguage = next;
  syncDocumentLanguage();
  notify();
}

export async function setLanguagePreference(preference) {
  if (preference === 'system') {
    languagePreference = null;
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* nothing to clear */
    }
    await applyLanguage(detectBrowserLanguage());
    return;
  }

  if (!SUPPORTED_LANGUAGES.includes(preference)) return;
  languagePreference = preference;
  try {
    localStorage.setItem(STORAGE_KEY, preference);
  } catch {
    // The choice still applies for this page load; it just will not survive a
    // reload. Better than refusing to switch language at all.
  }
  await applyLanguage(preference);
}

export function subscribeLanguage(cb) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

/**
 * Fetches the active pack before the first render, so the page never paints in
 * English and then swaps. Resolves to the language actually in effect.
 */
export async function initI18n() {
  await loadLocale(currentLanguage);
  syncDocumentLanguage();
  return currentLanguage;
}

export { LANGUAGE_META, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE };
export { isRtlLanguage } from './languages.js';
export { interpolate } from './interpolate.js';
export { detectBrowserLanguage } from './detectLanguage.js';
