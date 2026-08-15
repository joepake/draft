import { forActiveStyle, type ThemeStyleId } from './styles';

/**
 * Corner radii, per style pack.
 *
 * Classic: `lg` is the card default at 16, `xl` (20) is for hero cards and
 * `xxl` (28) for sheets and modals, which read as flat panels at a card's
 * radius.
 *
 * Sweet rounds every step hard. Radius is the cheapest signal of tone in a UI
 * — a 16pt card reads as a control panel and a 26pt card reads as a toy — and
 * it is the one dimension that changes the shape of *everything* at once
 * without touching a single screen.
 *
 * The values are read through a getter rather than exported as constants, so a
 * pack switch takes effect on the next style-factory run. See
 * `getActiveThemeStyle` in `styles.ts` for why it works that way.
 */
const SCALES: Record<ThemeStyleId, Record<RadiusName, number>> = {
  classic: {
    sm: 6,
    md: 10,
    lg: 16,
    xl: 20,
    xxl: 28,
    full: 9999,
  },
  sweet: {
    sm: 10,
    md: 16,
    lg: 26,
    xl: 32,
    xxl: 40,
    full: 9999,
  },
};

export type RadiusName = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';

export const radius: Record<RadiusName, number> = {
  get sm() {
    return forActiveStyle(SCALES).sm;
  },
  get md() {
    return forActiveStyle(SCALES).md;
  },
  get lg() {
    return forActiveStyle(SCALES).lg;
  },
  get xl() {
    return forActiveStyle(SCALES).xl;
  },
  get xxl() {
    return forActiveStyle(SCALES).xxl;
  },
  get full() {
    return forActiveStyle(SCALES).full;
  },
};

/**
 * Inner radius that stays concentric with a rounded parent.
 *
 * A rounded child inside a rounded parent should use
 * `parentRadius - parentPadding`, not the same value — concentric corners look
 * wrong when the inner radius is too large.
 */
export function nested(parentRadius: number, padding: number) {
  return Math.max(radius.sm, parentRadius - padding);
}
