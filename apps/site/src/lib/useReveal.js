import { useEffect, useRef } from 'react';

/**
 * Fades `.reveal` elements in as they scroll into view. Returns a ref for the
 * page root; everything marked `.reveal` under it is observed.
 *
 * **A page that emits `.reveal` and does not call this renders blank.** The
 * rule is `opacity: 0` until `is-in` is added, and nothing else adds it — so
 * the class is not decoration that degrades to a plain page, it is content
 * hidden by a hook that never ran. This lived inside `Home.jsx` while
 * `Download.jsx` used the same classes, which is exactly what that page did:
 * two headings, two download buttons and both install warnings, present in the
 * DOM at zero opacity, failing nothing.
 *
 * Disabled wholesale by `prefers-reduced-motion` — and disabled there means the
 * elements are shown, never that they stay hidden.
 */
export function useReveal() {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const targets = el.querySelectorAll('.reveal');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // The stylesheet's reduced-motion block already forces these visible;
      // this keeps the two from depending on each other.
      targets.forEach(target => target.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    targets.forEach(target => io.observe(target));
    return () => io.disconnect();
  }, []);

  return root;
}
