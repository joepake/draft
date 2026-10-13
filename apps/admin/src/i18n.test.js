import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { formatNumber, getLanguage, getLocaleTag, setLanguage, t } from './i18n.js';

const SRC = dirname(fileURLToPath(import.meta.url));
const i18nSource = readFileSync(join(SRC, 'i18n.js'), 'utf8');

/** The packs are module-private, so they are read out of the source text. */
function readPack(name) {
  const declaration = i18nSource.indexOf(`const ${name} = {`);
  const open = i18nSource.indexOf('{', declaration);
  const close = i18nSource.indexOf('\n};', open);
  return vm.runInNewContext(`(${i18nSource.slice(open, close + 2)})`);
}

const en = readPack('en');
const vi = readPack('vi');

/*
 * English carries `_one`/`_other`, Vietnamese the bare key (`t` falls through
 * from one to the other), so packs are compared by base key.
 */
const baseKey = key => key.replace(/_(one|other)$/, '');
const baseKeys = pack => new Set(Object.keys(pack).map(baseKey));
const enKeys = baseKeys(en);
const viKeys = baseKeys(vi);

const placeholders = template => new Set(template.match(/\{\w+\}/g) ?? []);

/**
 * Every key-shaped literal in the app's source: `<pack namespace>.<name>` in
 * single quotes. Keys reach `t` as `t('…')`, but also as `labelKey`/`titleKey`
 * properties, column tuples, a status map and `??` fallbacks, so the scan reads
 * literals rather than one call shape.
 *
 * Not covered: keys built at runtime (`t(\`anomalies.flag.${kind}\`)`,
 * `t(\`metric.${key}\`)` and the like). Those only fail on screen.
 */
function usedKeys() {
  const namespaces = new Set([...enKeys].map(key => key.split('.')[0]));
  const files = readdirSync(SRC, { recursive: true }).filter(
    file => /\.jsx?$/.test(file) && !/\.test\.js$/.test(file) && file !== 'i18n.js',
  );
  const found = [];
  for (const file of files) {
    readFileSync(join(SRC, file), 'utf8')
      .split('\n')
      .forEach((line, index) => {
        for (const [, key] of line.matchAll(/'([a-z]\w*\.[\w.]+)'/g)) {
          if (namespaces.has(key.split('.')[0])) {
            found.push({ key, at: `${file}:${index + 1}` });
          }
        }
      });
  }
  return found;
}

describe('admin copy packs', () => {
  it('give en and vi the same keys', () => {
    const missingFromVi = [...enKeys].filter(key => !viKeys.has(key));
    const missingFromEn = [...viKeys].filter(key => !enKeys.has(key));
    expect({ missingFromVi, missingFromEn }).toEqual({
      missingFromVi: [],
      missingFromEn: [],
    });
  });

  // `t` picks `_one` for 1 and `_other` otherwise; half a pair renders the raw
  // key for every other count.
  it('give every English plural both its _one and _other form', () => {
    const halfPairs = Object.keys(en)
      .filter(key => /_(one|other)$/.test(key))
      .map(baseKey)
      .filter(base => !(`${base}_one` in en && `${base}_other` in en));
    expect(halfPairs).toEqual([]);
  });

  // Callers pass the English template's variables; a placeholder only the
  // Vietnamese uses is never supplied and shows as `{name}`.
  it('use no placeholder in vi that the English template does not', () => {
    const strays = Object.entries(vi).flatMap(([key, template]) => {
      const english = [en[key], en[`${key}_one`], en[`${key}_other`]]
        .filter(Boolean)
        .flatMap(value => [...placeholders(value)]);
      return [...placeholders(template)]
        .filter(name => !english.includes(name))
        .map(name => `${key} ${name}`);
    });
    expect(strays).toEqual([]);
  });

  it('define every key the app source names, in both packs', () => {
    const used = usedKeys();
    expect(used.length).toBeGreaterThan(100);
    const missing = used
      .filter(({ key }) => !enKeys.has(key) || !viKeys.has(key))
      .map(
        ({ key, at }) =>
          `${at} ${key} (en: ${enKeys.has(key)}, vi: ${viKeys.has(key)})`,
      );
    expect(missing).toEqual([]);
  });
});

describe('t', () => {
  beforeEach(() => setLanguage('en'));
  afterEach(() => setLanguage('en'));

  it('fills {name} placeholders and leaves unknown ones visible', () => {
    expect(t('api.requestFailed', { status: 503 })).toBe(
      en['api.requestFailed'].replace('{status}', '503'),
    );
    expect(t('api.requestFailed', {})).toBe(en['api.requestFailed']);
  });

  // Values include what the operator typed (a search query); a string
  // replacement would read `$&` in it as a pattern.
  it('inserts values literally, even ones containing $ patterns', () => {
    const template = en['families.found_other'];
    expect(t('families.found', { count: 2, query: '$& $1' })).toBe(
      template.replace('{count}', '2').replace('{query}', () => '$& $1'),
    );
  });

  it('picks _one for a count of 1 and _other for 0 and many', () => {
    expect(t('families.shown', { count: 1 })).toBe(
      en['families.shown_one'].replace('{count}', '1'),
    );
    expect(t('families.shown', { count: 0 })).toBe(
      en['families.shown_other'].replace('{count}', '0'),
    );
    expect(t('families.shown', { count: 7 })).toBe(
      en['families.shown_other'].replace('{count}', '7'),
    );
  });

  it('uses the Vietnamese bare key for a count instead of the English plural', () => {
    setLanguage('vi');
    expect(t('families.shown', { count: 1 })).toBe(
      vi['families.shown'].replace('{count}', '1'),
    );
  });

  it('returns the key itself when no pack defines it', () => {
    expect(t('nope.notAKey')).toBe('nope.notAKey');
    setLanguage('vi');
    expect(t('nope.notAKey', { count: 2 })).toBe('nope.notAKey');
  });

  it('ignores a language it has no pack for', () => {
    setLanguage('fr');
    expect(getLanguage()).toBe('en');
  });
});

describe('formatNumber', () => {
  afterEach(() => setLanguage('en'));

  it('groups digits the way the language on screen does', () => {
    setLanguage('en');
    expect(getLocaleTag()).toBe('en-US');
    expect(formatNumber(1234567.5)).toBe('1,234,567.5');
    setLanguage('vi');
    expect(getLocaleTag()).toBe('vi-VN');
    expect(formatNumber(1234567.5)).toBe('1.234.567,5');
  });

  it('renders a dash for anything that is not a finite number', () => {
    for (const value of [undefined, null, NaN, Infinity, '42', {}]) {
      expect(formatNumber(value)).toBe('—');
    }
    expect(formatNumber(0)).toBe('0');
  });
});
