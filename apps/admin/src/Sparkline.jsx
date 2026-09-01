/**
 * A trend line for one metric. One series, no axes, no legend.
 *
 * Specs it follows, from the data-viz reference: a **2px line with round join
 * and cap**, an end dot at **r=4** carrying a 2px surface ring so it stays
 * legible where it sits on the line, and **no label on every point** — the
 * value beside it in the row is the label, and the raw table carries the rest.
 * A single series needs no legend: the row's own name says what is plotted.
 *
 * **A missing day breaks the line; it is never interpolated across.** This is
 * the same rule the table draws as `—` rather than `0`, and it matters more
 * here: a line drawn straight through a gap asserts a value nobody measured,
 * and it is the exact failure this whole reporting surface was built to stop
 * (`docs/ADMIN_REPORTING.md`).
 *
 * A flat line is an honest answer, not a broken chart — it says the metric did
 * not move. With a product this young most of these are flat at zero, and the
 * chart should say so plainly rather than inventing shape by rescaling noise.
 */

const WIDTH = 168;
const HEIGHT = 30;
const PAD = 4;

export default function Sparkline({ values }) {
  const real = values.filter(value => Number.isFinite(value));
  if (real.length === 0) {
    return <div style={{ height: HEIGHT, width: WIDTH }} aria-hidden="true" />;
  }

  const max = Math.max(...real);
  const min = Math.min(...real, 0);

  /**
   * A series that never changes draws flat at mid-height, whatever its value.
   *
   * The zero-baseline scale would otherwise pin a constant 1 to the *top* of
   * the box and a constant 0 to the *bottom* — two metrics that both did
   * nothing, rendered as a peak and a trough. This chart's job is
   * change-over-time; the magnitude is the number printed beside it. So when
   * there is no change, it says so, and says nothing else.
   */
  const flat = max === min;
  const span = max - min || 1;

  const x = index =>
    values.length === 1
      ? WIDTH / 2
      : PAD + (index / (values.length - 1)) * (WIDTH - PAD * 2);
  const y = value =>
    flat ? HEIGHT / 2 : HEIGHT - PAD - ((value - min) / span) * (HEIGHT - PAD * 2);

  // Index the runs back to their original positions so gaps land in the right
  // place along the x axis.
  const segments = [];
  let cursor = 0;
  for (const point of values) {
    if (Number.isFinite(point)) {
      if (segments.length === 0 || segments[segments.length - 1].end !== cursor) {
        segments.push({ start: cursor, end: cursor + 1, points: [point] });
      } else {
        const last = segments[segments.length - 1];
        last.end = cursor + 1;
        last.points.push(point);
      }
    }
    cursor += 1;
  }

  const lastIndex = values.reduce(
    (found, value, index) => (Number.isFinite(value) ? index : found),
    -1,
  );

  return (
    <svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      role="img"
      aria-label={`Trend, ${real.length} days`}
      style={{ display: 'block', overflow: 'visible' }}
    >
      {segments.map(segment => (
        <polyline
          key={segment.start}
          fill="none"
          stroke="var(--series)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={segment.points
            .map((value, offset) => `${x(segment.start + offset)},${y(value)}`)
            .join(' ')}
        />
      ))}
      {lastIndex >= 0 ? (
        <circle
          cx={x(lastIndex)}
          cy={y(values[lastIndex])}
          r="4"
          fill="var(--series)"
          stroke="var(--surface)"
          strokeWidth="2"
        />
      ) : null}
    </svg>
  );
}
