import type { AppLanguage } from '@kidgate/schema/language';
import ar from './ar';
import de from './de';
import en from './en';
import es from './es';
import fr from './fr';
import hi from './hi';
import id from './id';
import it from './it';
import ja from './ja';
import ko from './ko';
import pt from './pt';
import ru from './ru';
import tr from './tr';
import vi from './vi';

type LocalePack = Record<string, unknown>;

/**
 * Every shipped language pack, keyed by code — behind a getter each, which is
 * the whole point of this shape.
 *
 * Static ESM imports rather than the `require()` switch the legacy file used:
 * that switch kept each pack a separate module for Metro, but a static import
 * also loads in a browser and lets Vite split the packs, so the imports above
 * stay exactly as they were. **The switch is not coming back.**
 *
 * What changed is where the fourteen bindings are *referenced*. They used to be
 * listed in a plain object literal at module scope, and that is what made the
 * old claim here — "`inlineRequires` defers a static import to first use, so
 * mobile still evaluates only the active language" — false. Metro turns each
 * import into a `require` at its reference site; with the bindings referenced
 * by the literal, every reference site was module scope, so building this
 * object evaluated all fourteen packs at once. Measured 2026-08-23: `locales/`
 * is 687 files and 4.3MB of source, and a phone showing one language was
 * holding the strings of every screen of the product in all fourteen.
 *
 * A getter body is a function body, so the reference — and therefore the
 * `require` — happens when that language is first asked for. `translate()` asks
 * for the active language and for `en` as its fallback, so two packs evaluate
 * and twelve do not. Vite sees the same static import graph as before and
 * splits it the same way; the browser is unaffected either way, since a bundler
 * that tree-shakes never had this problem.
 *
 * Metro does not tree-shake, so all fourteen are still *in* the mobile bundle.
 * That part of the old comment was right, and it is a bundle-size question
 * rather than a memory one.
 */
const PACKS: Record<AppLanguage, LocalePack> = {
  get ar() {
    return ar;
  },
  get de() {
    return de;
  },
  get en() {
    return en;
  },
  get es() {
    return es;
  },
  get fr() {
    return fr;
  },
  get hi() {
    return hi;
  },
  get id() {
    return id;
  },
  get it() {
    return it;
  },
  get ja() {
    return ja;
  },
  get ko() {
    return ko;
  },
  get pt() {
    return pt;
  },
  get ru() {
    return ru;
  },
  get tr() {
    return tr;
  },
  get vi() {
    return vi;
  },
};

export function getLocale(lang: AppLanguage): LocalePack {
  return PACKS[lang];
}
