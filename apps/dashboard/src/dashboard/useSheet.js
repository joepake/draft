import { useEffect, useRef } from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * What a `.sheet` dialog owes the page under it, beyond the Escape each sheet
 * already handles: Tab stays inside it, the page behind does not scroll, focus
 * goes back to whatever opened it, and the browser's Back closes it — the
 * sheets are local state, so Back used to change the page underneath an open
 * one.
 *
 * Returns the ref for the `.sheet` element. `enabled` is for a component that
 * is a sheet only sometimes (`ParkedDevicesCard`, inline or unprompted).
 */
export function useSheet(onClose, enabled = true) {
  const ref = useRef(null);
  // Callers pass an inline arrow; the effect below must not re-run (and hand
  // focus back) on every render because of it.
  const closeRef = useRef(onClose);
  useEffect(() => {
    closeRef.current = onClose;
  });

  useEffect(() => {
    if (!enabled) return undefined;
    const opener = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    const node = ref.current;
    if (node && !node.contains(document.activeElement)) {
      node.querySelector(FOCUSABLE)?.focus();
    }

    const onKey = event => {
      const sheet = ref.current;
      if (event.key !== 'Tab' || !sheet) return;
      const items = [...sheet.querySelectorAll(FOCUSABLE)];
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (!sheet.contains(active)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };
    /*
     * Back closes the sheet and nothing else. The sheet holds an entry of its
     * own — the same URL, so the router sees no move — and Back pops that,
     * not the page under it: before, one press closed the sheet AND left the
     * page it was opened on. The token is this sheet's, so a sheet stacked
     * on another closes alone, and only a sheet still on its own entry hands
     * it back when it closes some other way (Escape, ✕, a choice).
     */
    const token = Math.random().toString(36).slice(2);
    window.history.pushState({ ...window.history.state, kgSheet: token }, '');
    const onBack = () => {
      if (window.history.state?.kgSheet !== token) closeRef.current?.();
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('popstate', onBack);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('popstate', onBack);
      document.body.style.overflow = overflow;
      opener?.focus?.();
      // After the commit, so a sheet re-mounted in the same pass (StrictMode)
      // owns the top entry by then and this one is left alone.
      // ponytail: a sheet closed by a choice that also navigates (Search)
      // leaves its entry under the new page — one Back there lands on the
      // same page. Drop the entry from the navigation itself if that bites.
      setTimeout(() => {
        if (window.history.state?.kgSheet === token) window.history.back();
      }, 0);
    };
  }, [enabled]);

  return ref;
}
