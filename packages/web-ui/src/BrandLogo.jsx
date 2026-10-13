import { BRAND_MARK } from '@kidgate/tokens/brandMark';

/**
 * The KidGate mark: a large open ring around a smaller one, with a dot in the
 * smaller ring's mouth — a parent around a child.
 *
 * The geometry is `@kidgate/tokens/brandMark`, shared with the phone's
 * `BrandLoader`; this file only turns it into DOM SVG. Filled outlines, not
 * strokes: the app icon's rings taper, and the constant-width circle-fit
 * redraw this file held until 2026-10-13 read as a different logo beside it.
 *
 * SVG rather than the PNG: the PNG is 438 kB of dark teal, close to invisible
 * on near-black surfaces, and `currentColor` lets the mark pick up whatever the
 * surrounding brand chip or link colour already is. The PNG stays the favicon
 * and touch icon. The three class names are for motion (the dashboard's
 * session splash); nothing else styles them.
 */
export default function BrandLogo({ size = 24, className = '', title }) {
  const { parentRing, childRing, head } = BRAND_MARK;
  return (
    <svg
      className={`brand-logo ${className}`.trim()}
      width={size}
      height={size}
      viewBox={BRAND_MARK.viewBox}
      fill="currentColor"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      focusable="false"
    >
      {title && <title>{title}</title>}
      <path className="brand-logo-parent" d={parentRing.d} />
      <path className="brand-logo-ring" d={childRing.d} />
      <circle className="brand-logo-head" cx={head.cx} cy={head.cy} r={head.r} />
    </svg>
  );
}
