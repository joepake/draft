/**
 * A horizontal bar chart for one measure across categories.
 *
 * Specs it follows, from the data-viz reference:
 *
 * - **One hue, not a palette.** These are one measure (a device count) split
 *   by category, not several series — so every bar wears the same colour and
 *   identity comes from the label beside it. Giving each category its own hue
 *   would spend the categorical palette on a distinction the labels already
 *   make, and would imply the categories are series that recur elsewhere.
 * - **A single series needs no legend.** The section heading names what is
 *   plotted.
 * - **Bars <= 24px thick, 4px rounded data-end, square at the baseline**, all
 *   growing from one baseline at zero.
 * - **Direct label at the tip**, which is what replaces an x-axis here: with
 *   the value printed on every bar an axis would be redundant ink.
 *
 * Horizontal rather than vertical because these categories have words for
 * names — `androidtv`, `configurationDisabled`, `vi` — and vertical columns
 * would force them to rotate or truncate.
 */

const BAR_HEIGHT = 10;
const ROW_HEIGHT = 26;
const LABEL_WIDTH = 116;
const VALUE_WIDTH = 44;

export default function BarChart({ data, total, emptyLabel = 'No data' }) {
  const rows = Object.entries(data || {})
    .filter(([, value]) => Number.isFinite(value) && value > 0)
    .sort((a, b) => b[1] - a[1]);

  if (rows.length === 0) {
    return <p className="muted">{emptyLabel}</p>;
  }

  // Bars are proportional to the largest bar, not to the total: with one
  // category at 90% every other bar would be a sliver and the chart would say
  // nothing about the tail. The share against the total is what the tip label
  // carries instead, when a total is known.
  const max = Math.max(...rows.map(([, value]) => value));

  return (
    <div>
      {rows.map(([label, value]) => (
        <div
          key={label}
          className="bar-row"
          style={{ height: ROW_HEIGHT, gridTemplateColumns: `${LABEL_WIDTH}px 1fr` }}
        >
          <span className="bar-label" title={label}>
            {label}
          </span>
          <div className="bar-track">
            <div
              className="bar-fill"
              style={{
                height: BAR_HEIGHT,
                width: `calc(${(value / max) * 100}% - ${VALUE_WIDTH}px)`,
                minWidth: 2,
              }}
            />
            <span className="bar-value">
              {value.toLocaleString()}
              {Number.isFinite(total) && total > 0 ? (
                <span className="bar-share"> {Math.round((value / total) * 100)}%</span>
              ) : null}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
