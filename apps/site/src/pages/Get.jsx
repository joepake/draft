import { useEffect } from 'react';
import { useT } from '@kidgate/web-ui/useT';
import { storeHref, isPlatformAvailable } from '../lib/storeLinks';
import { QR_CLICK_URL } from '../lib/qrClickUrl';

/**
 * QR landing pad. A code printed anywhere points here with `?utm_source=...`;
 * this reads the visiting device, counts the scan by source, and forwards to
 * the right store.
 *
 * **No route existed here before and this is not `/download`.** That route
 * was folded into `#download` on `pages/Home` because it answered "where do
 * I get KidGate" a second time for a reader already choosing among four
 * platforms. This page answers a different question — "you scanned a code,
 * here's your store" — for a reader who arrived already knowing which device
 * they're on. Same store links (`src/lib/storeLinks.js`), different job.
 *
 * **The count is a click count, not an install count.** `functions/http/
 * qrClicks.js` increments `qrClicks/{utm_source}` when this page fires the
 * pixel; neither store hands attribution back after that, so a scan and a
 * completed install are not the same thing this measures.
 *
 * The pixel fires via `<img>`, not `fetch`, on purpose — the page navigates
 * away immediately after, and an image request is the kind a browser keeps
 * in flight through a same-tick navigation.
 *
 * Renders nothing: this is a redirect, not a page a reader is meant to see.
 * A visitor with JavaScript off — or a crawler — sees `common.comingSoon`
 * and a manual link to `#download` instead of hanging on a blank tab.
 */
function detectPlatform() {
  const ua = window.navigator.userAgent || window.navigator.vendor || '';
  if (/iPad|iPhone|iPod/.test(ua)) return 'ios';
  if (/Android/.test(ua)) return 'android';
  return null;
}

export default function Get() {
  const { t } = useT();

  useEffect(() => {
    const utmSource = new URLSearchParams(window.location.search).get('utm_source');
    if (utmSource) {
      new window.Image().src = `${QR_CLICK_URL}?source=${encodeURIComponent(utmSource)}`;
    }

    const platform = detectPlatform();
    const destination =
      platform && isPlatformAvailable(platform) ? storeHref(platform) : '/#download';

    /*
     * Rewrites this entry to the home page before leaving it, so a reader who
     * hits back from the store lands on `kidgate.app` rather than wherever
     * was open before they scanned the code — `replace()` below never adds a
     * `/get` entry to return to, so without this the back button skips past
     * the site entirely.
     */
    window.history.replaceState(null, '', '/');
    window.location.replace(destination);
  }, []);

  return (
    <div className="get-redirect">
      <p>
        {t('common.comingSoon')} — <a href="/#download">{t('footer.download')}</a>
      </p>
    </div>
  );
}
