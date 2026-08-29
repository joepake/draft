import { deviceGlyph } from '@kidgate/web-ui/Icon';
import { isBrowserOnlySurface } from '@kidgate/core/domain/deviceSurface';

/**
 * Which glyph stands for a device in the device rail.
 *
 * `apps/mobile/src/utils/deviceIcon.ts` is the same function for the phone, and
 * the pair exists for the reason `webFilterSupport` already states: both parent
 * surfaces read the same document, and two of them disagreeing about the same
 * Mac is the failure that costs.
 *
 * `deviceGlyph()` alone was what this rail called, and on its own it is wrong in
 * the one place it matters. The extension registers under the platform it was
 * **installed on** — `macos` on a Mac, `windows` on a PC — so a family running
 * both the desktop agent and the extension on one machine got two rows drawing
 * the same laptop, with nothing but the name to tell them apart. The phone app
 * had already fixed this; the dashboard drew the old picture.
 *
 * The decision itself is `isBrowserOnlySurface` in `@kidgate/core/domain`, so
 * the two surfaces cannot drift apart again. Only the mapping from that answer
 * to a glyph name lives per app: `packages/tokens` imports nothing, so it cannot
 * be taught what a capability is.
 */
export function deviceIconName(device) {
  return isBrowserOnlySurface(device)
    ? 'extension'
    : deviceGlyph(device.platform, device.formFactor);
}
