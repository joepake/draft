/**
 * The browser renderer for `@kidgate/tokens/icons`.
 *
 * The geometry used to live here, drawn for `apps/site` before there was a
 * desktop app — and `apps/mobile` had its own drawing of the same features.
 * Nineteen glyphs that shared a name were different pictures: a different
 * clock, a different shield, a different check. That is exactly what the
 * one-icon-per-feature rule exists to prevent, and it survived because the two
 * sets were never compared.
 *
 * What genuinely cannot be shared is the renderer: the phone draws with
 * `react-native-svg`, whose components are native and cannot enter a browser
 * bundle. The paths are strings. So the strings moved to `@kidgate/tokens`,
 * which both sides already depend on, and this file became the twenty lines
 * that turn them into DOM SVG.
 *
 * Stroke weight comes from the data (2, the phone's), not from this file. The
 * set used to draw at 1.75 here, which is why the same glyph read lighter on
 * the marketing site than in the app.
 */

import { iconParts, ICON_STROKE_WIDTH, ICON_VIEWBOX } from '@kidgate/tokens/icons';

export { ICON_NAMES, platformIcon, deviceGlyph } from '@kidgate/tokens/icons';

/**
 * A filled part takes the colour as ink rather than as an outline — the
 * charging bolt's cut-out, the palette's dots. It must not also carry a stroke,
 * or the shape gains a rim.
 */
function paintOf(part, forceFill) {
  return forceFill || part.filled
    ? { fill: 'currentColor', stroke: 'none' }
    : { strokeWidth: part.strokeWidth ?? ICON_STROKE_WIDTH };
}

function renderPart(part, key, forceFill) {
  const paint = paintOf(part, forceFill);
  if (part.kind === 'path') {
    return (
      <path
        key={key}
        d={part.d}
        fillRule={part.fillRule}
        transform={part.transform}
        {...paint}
      />
    );
  }
  if (part.kind === 'circle') {
    return <circle key={key} cx={part.cx} cy={part.cy} r={part.r} {...paint} />;
  }
  return (
    <rect
      key={key}
      x={part.x}
      y={part.y}
      width={part.width}
      height={part.height}
      rx={part.rx}
      transform={part.transform}
      {...paint}
    />
  );
}

/**
 * `level` (0–100) is read by `battery` alone, and by the token package rather
 * than by this file: the bar follows the charge, so a reading draws its own
 * glyph instead of one fixed picture beside a number. Everything else ignores
 * it.
 */
/**
 * `filled` inks the glyph solid instead of outlining it — a render mode, not
 * geometry, which is why it lives here rather than in `@kidgate/tokens/icons`:
 * the same `star` is an outline in a caption and solid on the star chart, and
 * forking the path would be two drawings of one shape. The twin prop on
 * `apps/mobile`'s `Icon` does the same.
 *
 * **Only safe on a glyph that is a single closed silhouette** (`star`,
 * `heart`). A multi-part outline filled whole loses its interior lines, so
 * this is opt-in per call site rather than a property of the set.
 */
export default function Icon({
  name,
  size = 24,
  className = '',
  title,
  level,
  filled = false,
}) {
  const parts = iconParts(name, level);
  if (!parts) return null;

  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox={ICON_VIEWBOX}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      focusable="false"
    >
      {title && <title>{title}</title>}
      {parts.map((part, index) => renderPart(part, index, filled))}
    </svg>
  );
}
