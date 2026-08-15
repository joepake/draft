/**
 * 4pt grid, roughly 1.5× per step.
 *
 * `md` was 14, the one value that did not sit on the grid, so nested paddings
 * drifted a couple of points out of alignment wherever they stacked. The rest
 * of the scale moves up a notch (20→24, 28→32, 40→48) to give cards and
 * sections the breathing room the denser screens were missing.
 */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export type SpacingName = keyof typeof spacing;
