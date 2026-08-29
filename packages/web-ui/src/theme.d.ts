/**
 * Types for `theme.js`.
 *
 * The module stays JavaScript — this package ships source to two Vite apps and
 * `theme.js` is imported by `.jsx` components, none of which run through `tsc`.
 * The root `tsconfig.json` compiles only `.ts` files under each package's
 * `src`, so the one caller that *is* typechecked (`__tests__/theme.test.ts`)
 * saw an untyped module and failed under `noImplicitAny`. Declaring the surface
 * here fixes that without converting the module or widening the compiler's
 * reach.
 *
 * Keep in step with `theme.js` by hand: nothing checks that these agree.
 */

import type { AccentId } from '@kidgate/tokens/accents';
import type { ThemeStyleId } from '@kidgate/tokens/styles';

/**
 * Write every token onto `:root` as a `--kg-…` custom property, and stamp the
 * active pack as `data-kg-style`. Requires a DOM.
 */
export function applyTheme(
  accent?: AccentId,
  dark?: boolean,
  style?: ThemeStyleId,
): void;
