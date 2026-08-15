import en from './en.js';

/**
 * English is bundled statically because it is both the default and the
 * fallback for any key a translation has not caught up with — it must be
 * readable synchronously. Every other pack is a separate chunk Vite splits
 * out, fetched only when that language is actually selected.
 */
const LOADERS = {
  vi: () => import('./vi.js'),
  es: () => import('./es.js'),
  pt: () => import('./pt.js'),
  de: () => import('./de.js'),
  fr: () => import('./fr.js'),
  ja: () => import('./ja.js'),
  ko: () => import('./ko.js'),
  ar: () => import('./ar.js'),
  id: () => import('./id.js'),
  it: () => import('./it.js'),
  tr: () => import('./tr.js'),
  hi: () => import('./hi.js'),
  ru: () => import('./ru.js'),
};

const cache = { en };

/** Loaded pack, or undefined when that language has not been fetched yet. */
export function peekLocale(lang) {
  return cache[lang];
}

export async function loadLocale(lang) {
  const hit = cache[lang];
  if (hit) return hit;

  const loader = LOADERS[lang];
  if (!loader) return en;

  const mod = await loader();
  cache[lang] = mod.default;
  return mod.default;
}
