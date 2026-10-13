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
    const onBack = () => closeRef.current?.();
    window.addEventListener('keydown', onKey);
    window.addEventListener('popstate', onBack);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('popstate', onBack);
      document.body.style.overflow = overflow;
      opener?.focus?.();
    };
  }, [enabled]);

  return ref;
}
