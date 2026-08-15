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
 * Every shipped language pack, keyed by code.
 *
 * Static ESM imports rather than the `require()` switch the legacy file used.
 * That switch existed so Metro would keep each pack a separate module; with
 * `inlineRequires` enabled in `metro.config.js` a static import is deferred to
 * first use anyway, so mobile still evaluates only the active language — and
 * unlike `require`, this also loads in a browser and lets Vite split the packs.
 *
 * Metro does not tree-shake, so all fourteen are in the mobile bundle either
 * way. What changes is when they are *evaluated*, and that is unchanged.
 */
const PACKS: Record<AppLanguage, LocalePack> = {
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

export function getLocale(lang: AppLanguage): LocalePack {
  return PACKS[lang];
}
