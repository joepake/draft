/**
 * Locale parity check — `npm run check:locales`.
 *
 * Fourteen packs are too many to eyeball. English is the source of truth and
 * the runtime fallback, so a key missing from a translation degrades quietly to
 * English instead of failing loudly; this is what makes that visible.
 *
 * Three things are checked against `locales/en.js`:
 *   1. every English key exists in the translation,
 *   2. the translation has no keys English does not,
 *   3. `{{placeholders}}` match, so no interpolated value silently disappears.
 *
 * Plural variants are compared on the base key: English ships `_one`/`_other`,
 * but Russian needs `_few`/`_many`, Arabic adds `_two`, and Vietnamese wants
 * neither — all three are correct.
 *
 * Mirrors `src/i18n/__tests__/localeParity.test.ts` in the mobile app.
 */
import en from '../src/i18n/locales/en.js'
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../src/i18n/languages.js'

const PLURAL_SUFFIX = /_(zero|one|two|few|many|other)$/

/**
 * Singular and dual forms routinely drop the numeral — Arabic "قبل دقيقة"
 * ("a minute ago") is right, and "قبل 1 دقيقة" is not — so a missing
 * placeholder is only an error in the categories that count things.
 */
const MAY_DROP_PLACEHOLDERS = /_(zero|one|two)$/

function flatten(node, prefix = '') {
  const out = []
  for (const [key, value] of Object.entries(node)) {
    const path = prefix ? `${prefix}.${key}` : key
    if (value && typeof value === 'object') out.push(...flatten(value, path))
    else out.push([path, value])
  }
  return out
}

const baseKey = (key) => key.replace(PLURAL_SUFFIX, '')

const placeholdersOf = (value) =>
  [...String(value).matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1]).sort()

const englishPlaceholders = new Map()
for (const [key, value] of flatten(en)) {
  const base = baseKey(key)
  if (!englishPlaceholders.has(base)) {
    englishPlaceholders.set(base, placeholdersOf(value))
  }
}

let failed = false

for (const lang of SUPPORTED_LANGUAGES) {
  if (lang === DEFAULT_LANGUAGE) continue

  const pack = (await import(`../src/i18n/locales/${lang}.js`)).default
  const entries = flatten(pack)
  const bases = new Set(entries.map(([key]) => baseKey(key)))

  const missing = [...englishPlaceholders.keys()].filter((key) => !bases.has(key))
  const extra = [...bases].filter((key) => !englishPlaceholders.has(key))

  const wrongPlaceholders = []
  for (const [key, value] of entries) {
    const expected = englishPlaceholders.get(baseKey(key))
    if (!expected) continue
    const actual = placeholdersOf(value)
    const dropAllowed = MAY_DROP_PLACEHOLDERS.test(key)
    const ok = dropAllowed
      ? actual.every((name) => expected.includes(name))
      : actual.join() === expected.join()
    if (!ok) {
      wrongPlaceholders.push(`${key}: {${actual.join()}} vs en {${expected.join()}}`)
    }
  }

  if (missing.length || extra.length || wrongPlaceholders.length) {
    failed = true
    console.error(`\n${lang}`)
    if (missing.length) console.error(`  missing: ${missing.join(', ')}`)
    if (extra.length) console.error(`  unknown: ${extra.join(', ')}`)
    for (const line of wrongPlaceholders) console.error(`  placeholders: ${line}`)
  }
}

if (failed) {
  console.error('\nLocale parity check failed.')
  process.exit(1)
}

console.log(`Locale parity OK — ${SUPPORTED_LANGUAGES.length} languages.`)
