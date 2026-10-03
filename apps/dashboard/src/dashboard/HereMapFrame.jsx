import { useEffect, useRef } from 'react';
import { hereTileUrl, hereWebKey } from './hereTiles.js';

/**
 * Every map on this surface, and the only `<iframe>` that draws one.
 *
 * `sandbox` stays **without** `allow-same-origin`: Leaflet and the page script
 * run in an opaque origin and cannot reach the parent's signed-in one. That
 * same opaque origin sends no `Referer`, so the frame cannot fetch a tile from
 * a domain-restricted key — this component does it for the frame
 * (`PARENT_TILES` in `@kidgate/core/domain/locationHistoryMapHtml`) and posts
 * the bytes in. The key never enters the frame.
 */
export default function HereMapFrame({ html, className, title }) {
  const frameRef = useRef(null);

  useEffect(() => {
    if (!hereWebKey) return undefined;
    const onMessage = async event => {
      const frame = frameRef.current?.contentWindow;
      const request = event.data?.hereTile;
      if (!frame || event.source !== frame || !request) return;
      const url = hereTileUrl(hereWebKey, request);
      let blob;
      if (url) {
        try {
          const res = await fetch(url);
          if (res.ok) blob = await res.blob();
        } catch {
          // A missing tile draws as a gap; the frame is told either way so it
          // does not hold the request open.
        }
      }
      // `'*'`: a sandboxed frame's origin is `null`, which no target can name.
      // A map tile is public bytes.
      frame.postMessage({ hereTile: { id: request.id, blob } }, '*');
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <iframe
      ref={frameRef}
      className={className}
      title={title}
      sandbox="allow-scripts"
      srcDoc={html}
    />
  );
}
