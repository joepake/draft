import { describe, expect, it } from 'vitest';
import {
  CHROME_WEB_STORE_ID,
  CHROME_WEB_STORE_ID_PLACEHOLDER,
  STORE_LINKS,
  TV_BUNDLE_ID,
  isPlatformAvailable,
  storeHref,
} from './storeLinks.js';

/**
 * The launch-day switches, and the one entry that is not one boolean away from
 * shipping.
 *
 * The Chrome listing's id does not exist until the first Web Store upload, so
 * the entry carries a placeholder (`storeLinks.js`, header). Flipping its flag
 * without replacing the id is the mistake this file exists to fail on — the
 * site would otherwise send a parent to a listing that is not there.
 */
describe('store links', () => {
  it('has an entry for every platform in the launch set', () => {
    expect(Object.keys(STORE_LINKS).sort()).toEqual(
      ['android', 'androidtv', 'chrome', 'ios', 'macos', 'windows'].sort(),
    );
  });

  it('refuses to put Chrome live while its id is the placeholder', () => {
    if (STORE_LINKS.chrome.available) {
      expect(
        CHROME_WEB_STORE_ID,
        'chrome.available is true but CHROME_WEB_STORE_ID is still the placeholder',
      ).not.toBe(CHROME_WEB_STORE_ID_PLACEHOLDER);
      // A Web Store id is 32 letters from a to p; anything else is a typo.
      expect(CHROME_WEB_STORE_ID).toMatch(/^[a-p]{32}$/);
    }
    expect(STORE_LINKS.chrome.url).toBe(
      `https://chromewebstore.google.com/detail/${CHROME_WEB_STORE_ID}`,
    );
  });

  it('never hands out the placeholder as a link', () => {
    if (CHROME_WEB_STORE_ID === CHROME_WEB_STORE_ID_PLACEHOLDER) {
      expect(isPlatformAvailable('chrome')).toBe(false);
      expect(storeHref('chrome')).toBeNull();
    }
  });

  it('sends Android TV to its own Play listing, not the phone’s', () => {
    expect(TV_BUNDLE_ID).toBe('com.kidgate.app.tv');
    expect(STORE_LINKS.androidtv.url).toBe(
      'https://play.google.com/store/apps/details?id=com.kidgate.app.tv',
    );
  });

  it('answers no link for a platform that has not shipped', () => {
    for (const platform of Object.keys(STORE_LINKS)) {
      if (!STORE_LINKS[platform].available) {
        expect(storeHref(platform)).toBeNull();
      }
    }
  });
});
