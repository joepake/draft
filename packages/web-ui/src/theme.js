/**
 * `@kidgate/tokens` as CSS custom properties — the one bridge for every
 * browser surface.
 *
 * `apps/desktop` proved the shape (see its `theme.ts`, which now delegates
 * here): write every token onto `:root` at startup, and let the stylesheets
 * contain no literal colour, size, radius, shadow or duration — only
 * `var(--kg-…)`. That is the whole mechanism by which a phone, a Mac and a
 * browser tab agree on what KidGate looks like, and it is why a hex code
 * appearing in `index.css` or `dashboard.css` is a bug rather than a
 * shortcut.
 *
 * Runtime rather than a generated `.css` file, for the same two reasons the
 * desktop chose it: a generated file is a copy that can go stale silently,
 * and Vite tree-shakes so the bundle argument that applies to Metro does not
 * apply here.
 */

import { DEFAULT_ACCENT_ID } from '@kidgate/tokens/accents';
import { PRESS_FEEDBACK } from '@kidgate/tokens/interaction';
import { cssCubicBezier, EASING, MOTION } from '@kidgate/tokens/motion';
import { resolvePalette } from '@kidgate/tokens/palettes';
import { radius } from '@kidgate/tokens/radius';
import { shadows } from '@kidgate/tokens/shadows';
import { spacing } from '@kidgate/tokens/spacing';
import { typeScale } from '@kidgate/tokens/typography';
import { DEFAULT_THEME_STYLE_ID, setActiveThemeStyle } from '@kidgate/tokens/styles';

/**
 * A `ShadowToken` as a `box-shadow`.
 *
 * The token is shaped for React Native, which applies one shadow per view, so
 * it is tuned as the ambient layer — wide radius, low opacity. Rendering it as
 * a tight dark drop shadow instead would be a different design, not a port.
 * `elevation` is dropped: it is Android's fallback and means nothing here.
 */
function boxShadow(token) {
  const { shadowColor, shadowOpacity, shadowRadius, shadowOffset } = token;
  return `0 ${shadowOffset.height}px ${shadowRadius}px ${withAlpha(shadowColor, shadowOpacity)}`;
}

/** `#0B1220` at 0.12 → `rgba(11, 18, 32, 0.12)`. Hex only; the tokens are all hex. */
function withAlpha(hex, alpha) {
  const value = hex.replace('#', '');
  const int = Number.parseInt(
    value.length === 3
      ? value
          .split('')
          .map(character => character + character)
          .join('')
      : value,
    16,
  );
  const red = (int >> 16) & 255;
  const green = (int >> 8) & 255;
  const blue = int & 255;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

/** Every palette key becomes `--kg-<key>`, so a new token needs no change here. */
function paletteVariables(palette) {
  const variables = {};
  for (const [key, value] of Object.entries(palette)) {
    if (typeof value === 'string') {
      variables[`--kg-${key}`] = value;
    }
  }
  return variables;
}

function staticVariables() {
  const variables = {};

  for (const [name, value] of Object.entries(spacing)) {
    variables[`--kg-space-${name}`] = `${value}px`;
  }

  // Radius and shadows are getters that resolve the active style pack, so they
  // are read here rather than destructured at module load.
  for (const name of ['sm', 'md', 'lg', 'xl', 'xxl', 'full']) {
    variables[`--kg-radius-${name}`] = `${radius[name]}px`;
  }
  for (const name of ['sm', 'md', 'lg']) {
    variables[`--kg-shadow-${name}`] = boxShadow(shadows[name]);
  }

  for (const [name, token] of Object.entries(typeScale)) {
    variables[`--kg-type-${name}-size`] = `${token.fontSize}px`;
    variables[`--kg-type-${name}-weight`] = String(token.fontWeight);
    variables[`--kg-type-${name}-height`] = `${token.lineHeight}px`;
    variables[`--kg-type-${name}-tracking`] = `${token.letterSpacing}px`;
  }

  for (const [name, value] of Object.entries(MOTION)) {
    variables[`--kg-motion-${name}`] = `${value}ms`;
  }
  variables['--kg-spring'] = cssCubicBezier(EASING.spring);
  variables['--kg-ease-enter'] = cssCubicBezier(EASING.enter);
  variables['--kg-ease-exit'] = cssCubicBezier(EASING.exit);

  // Resolved per style pack, like radius and shadows.
  variables['--kg-press-opacity'] = String(PRESS_FEEDBACK.opacity);
  variables['--kg-press-scale'] = String(PRESS_FEEDBACK.scale);

  return variables;
}

/**
 * Write the tokens onto `:root`. Safe to call again on every change.
 *
 * Defaults match the phone's defaults — light, teal, classic — so a surface
 * that never asks looks like a phone whose family never opened Settings.
 * Following `prefers-color-scheme` instead is the tempting mistake: the app
 * starts light and only leaves it when a person chooses dark, and a browser
 * tab deciding otherwise looks like a different product from the phone in the
 * same house.
 */
export function applyTheme(
  accent = DEFAULT_ACCENT_ID,
  dark = false,
  style = DEFAULT_THEME_STYLE_ID,
) {
  const root = document.documentElement;
  // Before any token is read: radius, shadows and typeScale resolve the
  // active pack at property-access time.
  setActiveThemeStyle(style);
  const variables = {
    ...paletteVariables(resolvePalette(dark, accent)),
    ...staticVariables(),
  };
  for (const [name, value] of Object.entries(variables)) {
    root.style.setProperty(name, value);
  }
  /*
   * The pack, as an attribute, for the handful of rules a custom property
   * cannot express.
   *
   * Almost everything a pack changes arrives through the tokens above —
   * radius, shadows, weights — and that is the mechanism to reach for first.
   * What it cannot carry is a rule that *swaps* one treatment for another: the
   * phone's child tab bar is a hairline border in classic and a rounded, pink
   * glow in sweet, which is two different declarations rather than two values
   * of one. `[data-kg-style='sweet']` is how the stylesheet says that.
   */
  root.dataset.kgStyle = style;
  // Native scrollbars, form controls and the text caret follow the page.
  root.style.colorScheme = dark ? 'dark' : 'light';
}
