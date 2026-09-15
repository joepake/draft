import { applyTheme } from '@kidgate/web-ui/theme';

/**
 * Which palette this browser draws — light unless the parent asked for dark.
 *
 * The default is the phone's default, not `prefers-color-scheme`: the app
 * starts light and only leaves it when a person chooses dark
 * (`@kidgate/web-ui/theme` says why), so a tab following the OS would look
 * like a different product from the phone in the same house.
 *
 * Per browser in `localStorage`, never on the family document: this is a fact
 * about the screen one parent is sitting at, and storing it server-side would
 * repaint the co-parent's laptop. Guarded like `reportSeen.js` — private-mode
 * Safari throws on access, and a palette is not worth a blank page.
 */
const KEY = 'kg.dashboard.theme';

export function isDarkPreferred() {
  try {
    return window.localStorage.getItem(KEY) === 'dark';
  } catch {
    return false;
  }
}

export function setDarkPreference(dark) {
  try {
    window.localStorage.setItem(KEY, dark ? 'dark' : 'light');
  } catch {
    // Unpersisted is still worth applying: this tab honours the choice.
  }
  applyTheme(undefined, dark);
}
