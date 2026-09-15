import { ACCENT_IDS, getAccentDefinition } from '@kidgate/tokens/accents';

/**
 * A child's initial in their own accent — the browser's `ChildAvatar`.
 *
 * The colour comes from `@kidgate/tokens` rather than from a palette invented
 * here, and `colorIndex` is taken modulo the list exactly as the schema says,
 * so a child is the same colour on the phone and in this tab. Two surfaces
 * inventing their own child colours is worse than neither having any: a parent
 * would learn one mapping and read the other one wrong.
 *
 * Its own module since the child hub was built: three places draw it now — the
 * device header, the Family list and the hub's own hero — and the hub cannot
 * import the page that renders it.
 */
export default function ChildInitial({ name, colorIndex = 0, size = null }) {
  const accent = getAccentDefinition(
    ACCENT_IDS[colorIndex % ACCENT_IDS.length] ?? ACCENT_IDS[0],
  );
  return (
    <span
      className="kid-initial"
      style={{
        background: accent.swatch,
        // Only when a caller asks. The hub's hero wants a bigger one; every
        // other site wants the stylesheet's, and a default here would be a
        // second place that decides the row height.
        ...(size ? { width: size, height: size, fontSize: size * 0.42 } : null),
      }}
    >
      {(name || '?').trim().charAt(0).toUpperCase()}
    </span>
  );
}
