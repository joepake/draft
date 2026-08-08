import { detectBrowserLanguage } from './detectLanguage.js'
import { interpolate } from './interpolate.js'
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_META,
  SUPPORTED_LANGUAGES,
} from './languages.js'
import { loadLocale, peekLocale } from './locales/index.js'

const STORAGE_KEY = 'kidgate.language'

const listeners = new Set()

function readStoredLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return SUPPORTED_LANGUAGES.includes(stored) ? stored : null
  } catch {
    // Private-mode Safari throws on localStorage; following the browser
    // language is a fine answer when the choice cannot be persisted.
    return null
  }
}

/** Explicit pick, or null when following the browser locale. */
let languagePreference = readStoredLanguage()
let currentLanguage = languagePreference ?? detectBrowserLanguage()

function notify() {
  listeners.forEach((listener) => listener())
}

/**
 * `<html lang>` drives screen-reader pronunciation and the browser's own
 * translate prompt, so it has to track the language actually rendered.
 */
function syncDocumentLanguage() {
  if (typeof document === 'undefined') return
  document.documentElement.lang = currentLanguage
}

/* ------------------------------------------------------------------ *
 * Lookup
 * ------------------------------------------------------------------ */

function lookupIn(pack, key) {
  if (!pack) return undefined
  let node = pack
  for (const part of key.split('.')) {
    if (!node || typeof node !== 'object') return undefined
    node = node[part]
  }
  return typeof node === 'string' ? node : undefined
}

const pluralRulesCache = new Map()

function pluralCategory(lang, count) {
  let rules = pluralRulesCache.get(lang)
  if (rules === undefined) {
    try {
      rules = new Intl.PluralRules(lang)
    } catch {
      rules = null
    }
    pluralRulesCache.set(lang, rules)
  }
  return rules ? rules.select(count) : count === 1 ? 'one' : 'other'
}

/**
 * A numeric `count` param selects a `key_<category>` variant using the CLDR
 * categories (zero/one/two/few/many/other). Lookup order is exact category,
 * then `_other`, then the plain key — so languages without plural inflection
 * (Vietnamese, Japanese, Korean) just keep the plain key.
 */
function lookupWithPlural(pack, lang, key, params) {
  const count = params?.count
  if (typeof count === 'number') {
    const category = pluralCategory(lang, count)
    const variant = lookupIn(pack, `${key}_${category}`)
    if (variant !== undefined) return variant
    if (category !== 'other') {
      const other = lookupIn(pack, `${key}_other`)
      if (other !== undefined) return other
    }
  }
  return lookupIn(pack, key)
}

function resolve(key, params) {
  const primary = lookupWithPlural(
    peekLocale(currentLanguage),
    currentLanguage,
    key,
    params,
  )
  if (primary !== undefined) return primary

  if (currentLanguage !== DEFAULT_LANGUAGE) {
    const fallback = lookupWithPlural(
      peekLocale(DEFAULT_LANGUAGE),
      DEFAULT_LANGUAGE,
      key,
      params,
    )
    if (fallback !== undefined) return fallback
  }

  // The key itself: visible in the UI, greppable, and never a blank space.
  return key
}

/* ------------------------------------------------------------------ *
 * Formatting
 * ------------------------------------------------------------------ */

const numberFormatCache = new Map()

function getNumberFormat(lang) {
  let format = numberFormatCache.get(lang)
  if (format === undefined) {
    try {
      format = new Intl.NumberFormat(lang)
    } catch {
      format = null
    }
    numberFormatCache.set(lang, format)
  }
  return format
}

/** Locale-aware digits for interpolated numbers (1,440 vs 1.440 vs ١٬٤٤٠). */
function formatParamValue(value) {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return getNumberFormat(currentLanguage)?.format(value) ?? String(value)
  }
  return String(value)
}

export function formatNumber(value) {
  return formatParamValue(value)
}

/** BCP-47 tag for `Intl` and `toLocaleDateString` call sites. */
export function getLocaleTag() {
  return currentLanguage
}

/* ------------------------------------------------------------------ *
 * Public API — mirrors the app's `src/i18n/index.ts`
 * ------------------------------------------------------------------ */

export function t(key, params) {
  return interpolate(resolve(key, params), params, formatParamValue)
}

export function getLanguage() {
  return currentLanguage
}

/** `system` = follow the browser; otherwise an explicit language. */
export function getLanguagePreference() {
  return languagePreference ?? 'system'
}

async function applyLanguage(next) {
  await loadLocale(next)
  currentLanguage = next
  syncDocumentLanguage()
  notify()
}

export async function setLanguagePreference(preference) {
  if (preference === 'system') {
    languagePreference = null
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* nothing to clear */
    }
    await applyLanguage(detectBrowserLanguage())
    return
  }

  if (!SUPPORTED_LANGUAGES.includes(preference)) return
  languagePreference = preference
  try {
    localStorage.setItem(STORAGE_KEY, preference)
  } catch {
    // The choice still applies for this page load; it just will not survive a
    // reload. Better than refusing to switch language at all.
  }
  await applyLanguage(preference)
}

export function subscribeLanguage(cb) {
  listeners.add(cb)
  return () => listeners.delete(cb)
}

/**
 * Fetches the active pack before the first render, so the page never paints in
 * English and then swaps. Resolves to the language actually in effect.
 */
export async function initI18n() {
  await loadLocale(currentLanguage)
  syncDocumentLanguage()
  return currentLanguage
}

export { LANGUAGE_META, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE }
export { isRtlLanguage } from './languages.js'
export { interpolate } from './interpolate.js'
export { detectBrowserLanguage } from './detectLanguage.js'
