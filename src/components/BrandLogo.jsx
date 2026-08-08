/**
 * The KidGate mark: a large open ring around a smaller one, with a dot in the
 * smaller ring's mouth — a parent around a child.
 *
 * Traced from `public/icon.png` rather than eyeballed: each shape was isolated
 * and least-squares fitted to a circle, then scaled into this 24×24 grid. The
 * two rings are *not* concentric (the inner one sits low and left), which is
 * the detail a redraw by hand always loses.
 *
 * Drawn as SVG rather than served as the PNG for two reasons: the PNG is 438 kB
 * of dark teal, which is close to invisible on this site's near-black surfaces,
 * and `currentColor` lets the mark pick up whatever the surrounding brand chip
 * or link colour already is. The PNG stays the favicon and touch icon, where it
 * sits on the browser's own light chrome and the teal is correct.
 */
export default function BrandLogo({ size = 24, className = '', title }) {
  return (
    <svg
      className={`brand-logo ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      focusable="false"
    >
      {title && <title>{title}</title>}
      {/* Outer ring: open across the right, from 35° round to 357°. */}
      <path d="M20.82 5.92A10.5 10.5 0 1 0 22.7 12.49" strokeWidth="2.5" />
      {/* Inner ring: open across the upper right, from 71° round to 31°. */}
      <path d="M13.84 9.68A5.01 5.01 0 1 0 16.51 11.84" strokeWidth="2.12" />
      {/* The head, sitting in the inner ring's mouth. */}
      <circle cx="15.66" cy="10.07" r="0.96" fill="currentColor" stroke="none" />
    </svg>
  )
}
