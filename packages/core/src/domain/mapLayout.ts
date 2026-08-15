/**
 * Height for an inline map, as a share of the window.
 *
 * A fixed height (the history map used to hard-code 200) is short on a modern
 * phone and too tall on a small one. Capped so the map never swallows a
 * scrolling screen on a tablet.
 */
export function mapHeightFor(windowHeight: number) {
  return Math.min(360, Math.round(windowHeight * 0.38));
}
