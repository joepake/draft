/**
 * The icon set, as data. No React, no SVG renderer, no platform.
 *
 * There were two drawings of this set: `apps/mobile`'s `Icon.tsx`
 * (`react-native-svg`) and `packages/web-ui`'s `Icon.jsx` (DOM SVG). Nineteen
 * glyphs that name the same feature — clock, shield, lock, check, ban, star —
 * were *different pictures*, because the web set was drawn for `apps/site`
 * before there was a desktop app to share it with. A child met one clock on the
 * phone and another on the Mac.
 *
 * What could not be shared was only ever the renderer: `<Path>` from
 * `react-native-svg` is a native component and cannot enter a WebView bundle.
 * The geometry is plain strings and numbers, which is what this file is. Both
 * `Icon` components now draw from here, so a glyph is fixed once.
 *
 * **The phone's drawing is the source.** Where the two sets disagreed, this
 * carries the phone's — it is the one a family sees most, and it is the set the
 * per-feature assignments below were designed for. Eleven glyphs exist only in
 * the web set (`gauge`, `lifebuoy`, `qr`, `users`, …) and are kept as drawn,
 * re-weighted from 1.75 to 2 so a row does not mix two stroke weights.
 *
 * ## One icon per feature, the same icon everywhere
 *
 * A parent meets a feature in several places — the Control centre grid, the
 * plan comparison, notification settings, the user guide — and the icon is what
 * makes them recognise it as the same thing. Two features sharing a glyph
 * inside one list is just as bad: the icons stop being a scan signal and the
 * row labels have to carry all the work.
 *
 * Canonical assignments (change here, then change every call site):
 *
 *   siren        SOS / emergency        shieldAlert  tamper alerts
 *   userCheck    safety check-in        home         place alerts
 *   camera       a literal camera       clock        daily limit
 *   moon         blocked hours          calendar     blocked hours (child home)
 *   ban          blocked apps           apps         app limits
 *   appInstall   app alerts             star         reward tasks
 *   mapPin       location               globe        web filter
 *   activity     activity feed          chart        reports / usage stats
 *   key          parent PIN             lock         device lock / pause
 *   shield       app lock, protection   alert        generic warning
 *   power        start with the OS
 *
 * Every glyph is drawn on a 24×24 grid. `strokeWidth` defaults to 2 and is
 * stated only where a glyph needs otherwise; `filled` parts take the colour as
 * a fill rather than a stroke.
 */

export type IconPart =
  | {
      kind: 'path';
      d: string;
      strokeWidth?: number;
      filled?: boolean;
      fillRule?: 'evenodd';
      transform?: string;
    }
  | {
      kind: 'circle';
      cx: number;
      cy: number;
      r: number;
      strokeWidth?: number;
      filled?: boolean;
    }
  | {
      kind: 'rect';
      x: number;
      y: number;
      width: number;
      height: number;
      rx?: number;
      strokeWidth?: number;
      /** `battery`'s charge bar is a solid rect inside the outlined shell. */
      filled?: boolean;
      transform?: string;
    };

/** The grid every glyph is drawn on. Both renderers set this as their viewBox. */
export const ICON_VIEWBOX = '0 0 24 24';

/** Stroke weight for a part that does not state its own. */
export const ICON_STROKE_WIDTH = 2;

/**
 * The bitten apple, drawn once. `apple` wears it whole; `mac` wears it small on
 * a laptop screen. Two copies of this string is the same failure as two
 * drawings of a glyph, one file down.
 */
const APPLE_PATH =
  'M16.37 12.3c0-1.9 1.55-2.81 1.62-2.86-.88-1.29-2.26-1.47-2.75-1.49-1.17-.12-2.28.69-2.87.69-.59 0-1.51-.67-2.48-.65-1.28.02-2.46.74-3.11 1.88-1.33 2.3-.34 5.7.95 7.56.63.91 1.38 1.93 2.36 1.89.95-.04 1.31-.61 2.46-.61 1.14 0 1.47.61 2.47.59 1.02-.02 1.67-.93 2.29-1.84.72-1.05 1.02-2.07 1.04-2.12-.02-.01-1.98-.76-2-3.04zM14.66 6.3c.52-.63.87-1.5.77-2.37-.75.03-1.66.5-2.19 1.13-.48.56-.9 1.45-.79 2.31.83.06 1.69-.42 2.21-1.07z';

/**
 * The battery shell and the track its charge bar runs in.
 *
 * The shell is drawn at a stroke of 2 centred on `x = 2 … 18`, so its *inner*
 * edge is 3 … 17; the track insets 1.5 from that on both sides, which is what
 * keeps a full bar from touching the outline. These are the numbers the static
 * glyph shipped with — `batteryIcon(64)` reproduces it — kept here as one
 * drawing rather than one drawing plus a table of levels.
 */
const BATTERY_TRACK = { x: 4.5, y: 9.5, width: 11, height: 5, rx: 1.5 } as const;

/**
 * Below this a proportional bar is a sliver rather than a bar: the badge draws
 * at 16px, where 11 units of track are about 7 real pixels, so 4% would round
 * away to nothing and read as an empty shell — the one state that has to stay
 * distinguishable from "nearly empty".
 */
const BATTERY_MIN_BAR = 1.6;

/**
 * The battery glyph at a given charge, as parts.
 *
 * The bar is the whole point of the icon and it used to be a fixed rect, so a
 * phone at 5% and a phone at 95% were the same picture next to two different
 * numbers — the icon said nothing the text did not, and said it wrongly at a
 * glance. Colour is still the caller's: the renderer paints every part in one
 * ink, and *which* ink is a product decision (`readDeviceBattery().isLow` in
 * `@kidgate/core/domain/battery`), not a geometric one.
 *
 * 0 draws an empty shell and no bar at all. `batteryCharging` takes no level —
 * it is a solid shell with the bolt cut out, and the two states are meant to
 * differ in weight rather than in one small detail.
 */
export function batteryIcon(level: number): IconPart[] {
  const percent = Number.isFinite(level) ? Math.min(100, Math.max(0, level)) : 0;
  const shell: IconPart[] = [
    { kind: 'rect', x: 2, y: 7, width: 16, height: 10, rx: 3 },
    { kind: 'path', d: 'M21 10.5v3', strokeWidth: 2.4 },
  ];

  if (percent <= 0) {
    return shell;
  }

  const width = Math.max(
    BATTERY_MIN_BAR,
    Math.round(BATTERY_TRACK.width * percent) / 100,
  );
  return [
    ...shell,
    {
      kind: 'rect',
      x: BATTERY_TRACK.x,
      y: BATTERY_TRACK.y,
      width,
      height: BATTERY_TRACK.height,
      // A radius wider than half the bar renders as a lozenge with straight
      // sides on some engines and a pill on others. Clamped, a 2-unit stub is
      // a rounded stub everywhere.
      rx: Math.min(BATTERY_TRACK.rx, width / 2),
      filled: true,
    },
  ];
}

export const ICONS = {
  phone: [
    { kind: 'rect', x: 7, y: 2, width: 10, height: 20, rx: 2 },
    { kind: 'path', d: 'M11 18h2' },
  ],
  smartphone: [
    { kind: 'rect', x: 7, y: 2, width: 10, height: 20, rx: 2 },
    { kind: 'path', d: 'M11 18h2' },
  ],
  devices: [
    { kind: 'rect', x: 2, y: 4, width: 20, height: 14, rx: 2 },
    { kind: 'path', d: 'M8 21h8M12 18v3' },
  ],
  /**
   * The three device silhouettes `platformIcon()` needs beyond `apple`,
   * `android` and `smartphone`: a laptop for a Mac, a monitor for a PC, a set
   * with an aerial for a TV. Silhouettes rather than brand marks — `apple` and
   * `android` are grandfathered, but a drawn Windows flag is a trademark where
   * a window is just a picture.
   *
   * Each carries its platform's mark *on the screen*, because the silhouettes
   * alone did not separate them: a bare laptop and a bare monitor are the same
   * picture at 16px, and `windows` as a plain square with a cross read as a
   * window rather than as a computer — while `devices` next to it is already a
   * monitor. The mark is what a parent actually scans for in a device list.
   *
   * `mac` reuses the `apple` path rather than a second drawing of it, at 0.43
   * centred on (12, 10) — one bitten apple in the set, so a change to the iOS
   * glyph reaches the Mac. `windows` gets four panes, upright and separate: a
   * window, not the flag's slanted lozenges. The trademark line above is the
   * reason that distinction is drawn deliberately rather than by eye.
   */
  mac: [
    { kind: 'rect', x: 3, y: 4, width: 18, height: 12, rx: 2 },
    { kind: 'path', d: 'M2 20h20' },
    {
      kind: 'path',
      d: APPLE_PATH,
      filled: true,
      transform: 'translate(6.73 5) scale(0.43)',
    },
  ],
  windows: [
    { kind: 'rect', x: 2, y: 3, width: 20, height: 14, rx: 2 },
    { kind: 'path', d: 'M8 21h8M12 17v4' },
    { kind: 'rect', x: 7, y: 6, width: 4.5, height: 3.5, rx: 0.5, filled: true },
    { kind: 'rect', x: 12.5, y: 6, width: 4.5, height: 3.5, rx: 0.5, filled: true },
    { kind: 'rect', x: 7, y: 10.5, width: 4.5, height: 3.5, rx: 0.5, filled: true },
    { kind: 'rect', x: 12.5, y: 10.5, width: 4.5, height: 3.5, rx: 0.5, filled: true },
  ],
  tv: [
    { kind: 'rect', x: 2, y: 7, width: 20, height: 13, rx: 2 },
    { kind: 'path', d: 'M17 2l-5 5-5-5' },
  ],
  /**
   * `chart` is bars (reports, usage stats); `activity` is a pulse line
   * (live feed, background work). They used to share one glyph, which made the
   * two indistinguishable wherever both appear in the same list.
   */
  chart: [
    { kind: 'path', d: 'M4 19V5M4 19h16' },
    { kind: 'path', d: 'M8 15v-4M12 15V8M16 15v-6' },
  ],
  activity: [{ kind: 'path', d: 'M3 12h4l2.5-6 4 12 2.5-6H21' }],
  settings: [
    { kind: 'circle', cx: 12, cy: 12, r: 3 },
    {
      kind: 'path',
      d: 'M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9c.1.7.7 1.2 1.5 1.2H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z',
      strokeWidth: 1.7,
    },
  ],
  shield: [{ kind: 'path', d: 'M12 3l8 3v6c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V6l8-3z' }],
  shieldAlert: [
    { kind: 'path', d: 'M12 3l8 3v6c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V6l8-3z' },
    { kind: 'path', d: 'M12 8v5' },
    { kind: 'circle', cx: 12, cy: 16, r: 1, filled: true },
  ],
  lock: [
    { kind: 'rect', x: 5, y: 11, width: 14, height: 10, rx: 2 },
    { kind: 'path', d: 'M8 11V8a4 4 0 0 1 8 0v3' },
  ],
  unlock: [
    { kind: 'rect', x: 5, y: 11, width: 14, height: 10, rx: 2 },
    { kind: 'path', d: 'M8 11V8a4 4 0 0 1 7.5-2' },
  ],
  clock: [
    { kind: 'circle', cx: 12, cy: 12, r: 9 },
    { kind: 'path', d: 'M12 7v5l3 2' },
  ],
  calendar: [
    { kind: 'rect', x: 3, y: 5, width: 18, height: 16, rx: 2 },
    { kind: 'path', d: 'M16 3v4M8 3v4M3 10h18' },
  ],
  ban: [
    { kind: 'circle', cx: 12, cy: 12, r: 9 },
    { kind: 'path', d: 'M6.5 6.5l11 11' },
  ],
  globe: [
    { kind: 'circle', cx: 12, cy: 12, r: 9 },
    { kind: 'path', d: 'M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18' },
  ],
  /**
   * The level-less entry, for the places that mean *the idea of a battery*
   * rather than a reading — Android's battery-optimisation step, the tamper
   * alert, the dashboard's attention row. Drawn at 64% because that is the
   * fixed bar the glyph shipped with; a reading passes its own level and gets
   * `batteryIcon()` instead, through `iconParts()`.
   */
  battery: batteryIcon(64),
  /**
   * Solid shell with the bolt cut out of it, rather than an outlined shell
   * with a bolt drawn inside. At 14px an inline bolt reads as the plain
   * variant's fill bar — the two states have to differ in *weight*, not in one
   * small detail. The hole is a second subpath with `evenodd`, so it is
   * genuinely transparent and needs no backdrop colour guessed. The bolt runs
   * past the shell top and bottom on purpose: the overhanging tips fall outside
   * the filled body and subtract nothing, leaving the cut open at both edges.
   */
  batteryCharging: [
    {
      kind: 'path',
      d: 'M5 7h10a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3zM10.3 6.6 7 13.1h3l-.3 4.3 3.3-6.5h-3z',
      filled: true,
      fillRule: 'evenodd',
    },
    { kind: 'path', d: 'M21 10.5v3', strokeWidth: 2.4 },
  ],
  mapPin: [
    { kind: 'path', d: 'M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z' },
    { kind: 'circle', cx: 12, cy: 10, r: 2.5 },
  ],
  /**
   * Chubby rounded house: soft roof apex, arched door, radiused base, heavier
   * stroke — drawn to sit with the rounded display face.
   */
  home: [
    {
      kind: 'path',
      d: 'M3.6 11.4 L10.7 5.1 C11.44 4.45 12.56 4.45 13.3 5.1 L20.4 11.4',
      strokeWidth: 2.6,
    },
    {
      kind: 'path',
      d: 'M5.6 10 V18.4 C5.6 19.85 6.75 21 8.2 21 H15.8 C17.25 21 18.4 19.85 18.4 18.4 V10',
      strokeWidth: 2.6,
    },
  ],
  search: [
    { kind: 'circle', cx: 11, cy: 11, r: 7 },
    { kind: 'path', d: 'M20 20l-3.5-3.5' },
  ],
  book: [
    { kind: 'path', d: 'M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5z' },
    { kind: 'path', d: 'M8 7h6' },
  ],
  chevronLeft: [{ kind: 'path', d: 'M15 6l-6 6 6 6' }],
  chevronRight: [{ kind: 'path', d: 'M9 6l6 6-6 6' }],
  moon: [{ kind: 'path', d: 'M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z' }],
  check: [{ kind: 'path', d: 'M5 12l4.5 4.5L19 7' }],
  close: [{ kind: 'path', d: 'M6 6l12 12M18 6L6 18' }],
  alert: [
    { kind: 'path', d: 'M12 4l9 16H3L12 4z' },
    { kind: 'path', d: 'M12 10v4' },
    { kind: 'circle', cx: 12, cy: 17, r: 1, filled: true },
  ],
  apps: [
    { kind: 'rect', x: 4, y: 4, width: 6, height: 6, rx: 1 },
    { kind: 'rect', x: 14, y: 4, width: 6, height: 6, rx: 1 },
    { kind: 'rect', x: 4, y: 14, width: 6, height: 6, rx: 1 },
    { kind: 'rect', x: 14, y: 14, width: 6, height: 6, rx: 1 },
  ],
  appInstall: [
    { kind: 'rect', x: 4, y: 4, width: 6, height: 6, rx: 1 },
    { kind: 'rect', x: 14, y: 4, width: 6, height: 6, rx: 1 },
    { kind: 'rect', x: 4, y: 14, width: 6, height: 6, rx: 1 },
    { kind: 'path', d: 'M17 14v6M14 17h6' },
  ],
  appRemove: [
    { kind: 'rect', x: 4, y: 4, width: 6, height: 6, rx: 1 },
    { kind: 'rect', x: 14, y: 4, width: 6, height: 6, rx: 1 },
    { kind: 'rect', x: 4, y: 14, width: 6, height: 6, rx: 1 },
    { kind: 'path', d: 'M14 17h6' },
  ],
  bell: [
    { kind: 'path', d: 'M6 9a6 6 0 1 1 12 0c0 7 2 7 2 7H4s2 0 2-7' },
    { kind: 'path', d: 'M10 19a2 2 0 0 0 4 0' },
  ],
  user: [
    { kind: 'circle', cx: 12, cy: 8, r: 4 },
    { kind: 'path', d: 'M5 20a7 7 0 0 1 14 0' },
  ],
  star: [
    {
      kind: 'path',
      d: 'M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3z',
    },
  ],
  sparkles: [
    { kind: 'path', d: 'M11 3l1.7 4.3L17 9l-4.3 1.7L11 15l-1.7-4.3L5 9l4.3-1.7L11 3z' },
    {
      kind: 'path',
      d: 'M17.5 14.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1z',
      strokeWidth: 1.6,
    },
  ],
  crown: [{ kind: 'path', d: 'M3 8l4 4 5-7 5 7 4-4v10H3V8z' }],
  /**
   * Optical nudge: the glyph sits high in the viewBox.
   */
  apple: [
    {
      kind: 'path',
      d: APPLE_PATH,
      filled: true,
      transform: 'translate(0 0.6)',
    },
  ],
  google: [
    {
      kind: 'path',
      d: 'M21.35 11.1H12.2v2.7h5.27c-.23 1.25-1.4 3.66-5.27 3.66-3.17 0-5.76-2.62-5.76-5.86s2.59-5.86 5.76-5.86c1.81 0 3.02.77 3.71 1.43l2.53-2.44C17.1 3.55 14.9 2.6 12.2 2.6 7.15 2.6 3.1 6.7 3.1 11.6s4.05 9 9.1 9c5.25 0 8.72-3.69 8.72-8.88 0-.6-.07-1.05-.17-1.62z',
      filled: true,
    },
  ],
  link: [
    { kind: 'path', d: 'M10 13.5a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1.3 1.3' },
    { kind: 'path', d: 'M14 10.5a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1.3-1.3' },
  ],
  mail: [
    { kind: 'rect', x: 3, y: 5, width: 18, height: 14, rx: 2.5 },
    { kind: 'path', d: 'M4 7.5l7.06 4.9a1.6 1.6 0 0 0 1.88 0L20 7.5' },
  ],
  eye: [
    {
      kind: 'path',
      d: 'M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z',
    },
    { kind: 'circle', cx: 12, cy: 12, r: 3 },
  ],
  eyeOff: [
    {
      kind: 'path',
      d: 'M9.9 5.9A9.7 9.7 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17.5 17.5 0 0 1-2.1 2.9M6.6 6.6C4 8.4 2.5 12 2.5 12S6 18.5 12 18.5c1.5 0 2.9-.4 4.1-1',
    },
    { kind: 'path', d: 'M9.9 9.9a3 3 0 0 0 4.2 4.2' },
    { kind: 'path', d: 'M4 4l16 16' },
  ],
  share: [
    { kind: 'circle', cx: 17.5, cy: 6, r: 2.5 },
    { kind: 'circle', cx: 6.5, cy: 12, r: 2.5 },
    { kind: 'circle', cx: 17.5, cy: 18, r: 2.5 },
    { kind: 'path', d: 'M8.8 10.8l6.4-3.5M8.8 13.2l6.4 3.5' },
  ],
  message: [
    {
      kind: 'path',
      d: 'M20 12.5c0 3.6-3.6 6.5-8 6.5-.9 0-1.8-.1-2.6-.4L4.5 20l1.2-3.2A6.3 6.3 0 0 1 4 12.5C4 8.9 7.6 6 12 6s8 2.9 8 6.5z',
    },
  ],
  fileText: [
    {
      kind: 'path',
      d: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z',
    },
    { kind: 'path', d: 'M14 3v5h5' },
    { kind: 'path', d: 'M9 13h6M9 17h4', strokeWidth: 1.7 },
  ],
  camera: [
    { kind: 'rect', x: 3, y: 7, width: 18, height: 13, rx: 3 },
    { kind: 'path', d: 'M9 7l1.2-2.2h3.6L15 7' },
    { kind: 'circle', cx: 12, cy: 13.5, r: 3.4 },
  ],
  userCheck: [
    { kind: 'circle', cx: 9.5, cy: 8, r: 3.6 },
    { kind: 'path', d: 'M3 19.5c0-3.7 2.9-5.9 6.5-5.9 1.1 0 2.1.2 3 .6' },
    { kind: 'path', d: 'M14.2 17.2 16.6 19.6 21 15', strokeWidth: 2.2 },
  ],
  trash: [
    { kind: 'path', d: 'M4 7h16' },
    { kind: 'path', d: 'M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7' },
    { kind: 'path', d: 'M6.5 7l.8 12a2 2 0 0 0 2 1.9h5.4a2 2 0 0 0 2-1.9L17.5 7' },
  ],
  key: [
    { kind: 'circle', cx: 7.5, cy: 12, r: 4 },
    { kind: 'path', d: 'M11.5 12H21' },
    { kind: 'path', d: 'M18 12v3.5M15 12v2.5' },
  ],
  fingerprint: [
    {
      kind: 'path',
      d: 'M19.6 12A7.6 7.6 0 0 0 12 4.4 7.6 7.6 0 0 0 4.4 12c0 2.6-.4 5-1.2 7',
      strokeWidth: 1.9,
    },
    { kind: 'path', d: 'M20 16.6c.3-1.6.4-3.1.4-4.6', strokeWidth: 1.9 },
    {
      kind: 'path',
      d: 'M15.8 12A3.8 3.8 0 0 0 12 8.2 3.8 3.8 0 0 0 8.2 12c0 3.4-.5 6.4-1.5 9',
      strokeWidth: 1.9,
    },
    { kind: 'path', d: 'M15.4 15.6c-.3 2.3-.7 4.3-1.3 5.9', strokeWidth: 1.9 },
    { kind: 'path', d: 'M12 11.8v.7c0 2.9-.3 5.6-.9 7.9', strokeWidth: 1.9 },
  ],
  refresh: [
    { kind: 'path', d: 'M20 12a8 8 0 1 1-2.3-5.6' },
    { kind: 'path', d: 'M20 4v4.5h-4.5' },
  ],
  /**
   * The three paint dots are filled, not stroked — the one place in this set
   * where part of a glyph is solid.
   */
  palette: [
    {
      kind: 'path',
      d: 'M12 3.5c-4.7 0-8.5 3.6-8.5 8s3.8 8 8.5 8c1.4 0 2.3-.9 2.3-2 0-.6-.2-1-.6-1.4-.4-.4-.6-.8-.6-1.3 0-1.1.9-2 2-2H16c2.5 0 4.5-1.9 4.5-4.3 0-2.8-3.8-5-8.5-5z',
    },
    { kind: 'circle', cx: 8, cy: 10.5, r: 1.1, filled: true },
    { kind: 'circle', cx: 12, cy: 8, r: 1.1, filled: true },
    { kind: 'circle', cx: 16, cy: 10.5, r: 1.1, filled: true },
  ],
  heart: [
    {
      kind: 'path',
      d: 'M12 20s-7-4.4-7-9.2A4.3 4.3 0 0 1 12 8a4.3 4.3 0 0 1 7 2.8C19 15.6 12 20 12 20z',
    },
  ],
  dice: [
    { kind: 'rect', x: 4, y: 4, width: 16, height: 16, rx: 4 },
    { kind: 'circle', cx: 8.5, cy: 8.5, r: 1.2, filled: true },
    { kind: 'circle', cx: 12, cy: 12, r: 1.2, filled: true },
    { kind: 'circle', cx: 15.5, cy: 15.5, r: 1.2, filled: true },
  ],
  cart: [
    { kind: 'path', d: 'M3 4h2.2l2.3 11h9.6l2.1-8H6' },
    { kind: 'circle', cx: 9.5, cy: 19, r: 1.5 },
    { kind: 'circle', cx: 17, cy: 19, r: 1.5 },
  ],
  gamepad: [
    { kind: 'rect', x: 2.5, y: 7.5, width: 19, height: 10, rx: 5 },
    { kind: 'path', d: 'M7 10.5v4M5 12.5h4' },
    { kind: 'circle', cx: 16, cy: 11.3, r: 1.1, filled: true },
    { kind: 'circle', cx: 18.4, cy: 14, r: 1.1, filled: true },
  ],
  pill: [
    {
      kind: 'rect',
      x: 2.6,
      y: 8.6,
      width: 18.8,
      height: 6.8,
      rx: 3.4,
      transform: 'rotate(-45 12 12)',
    },
    { kind: 'path', d: 'M8.5 8.5l7 7' },
  ],
  play: [
    { kind: 'circle', cx: 12, cy: 12, r: 9 },
    { kind: 'path', d: 'M10 8.5l6 3.5-6 3.5z' },
  ],
  /**
   * The IEC power symbol — a ring broken at the top with a bar through the gap.
   *
   * Added for `apps/desktop`'s "start at login" row, which had reached for
   * `refresh` and then `play` because this did not exist. Neither reads as
   * startup in a column of setting rows: two chasing arrows say "sync" and a
   * triangle in a circle says "video". This glyph is one almost nobody has to
   * be taught, which is the whole argument for spending a drawing on it.
   *
   * The ring is `clock`'s radius so it sits at the same weight beside the other
   * rows, with an 80° gap centred on the top. The arc is written as one relative
   * elliptical arc, large-arc and sweep both set, because the two endpoints are
   * a chord and the long way round the bottom is the drawing.
   */
  power: [
    { kind: 'path', d: 'M17.8 5.1a9 9 0 1 1-11.6 0' },
    { kind: 'path', d: 'M12 3v8' },
  ],
  siren: [
    { kind: 'path', d: 'M7 16v-2.5a5 5 0 0 1 10 0V16' },
    { kind: 'rect', x: 4.5, y: 16, width: 15, height: 4, rx: 2 },
    { kind: 'path', d: 'M12 4v2M5.6 6.6l1.5 1.5M18.4 6.6l-1.5 1.5' },
  ],
  android: [
    { kind: 'path', d: 'M4.5 16.5a7.5 7.5 0 0 1 15 0z' },
    { kind: 'path', d: 'M8 6.5L6.5 4M16 6.5L17.5 4' },
    { kind: 'circle', cx: 9.25, cy: 13, r: 1, filled: true },
    { kind: 'circle', cx: 14.75, cy: 13, r: 1, filled: true },
  ],
  arrowRight: [{ kind: 'path', d: 'M4 12h15M13 6l6 6-6 6' }],
  gauge: [
    { kind: 'path', d: 'M3.5 17a8.5 8.5 0 1 1 17 0' },
    { kind: 'path', d: 'M12 17l4.4-4.9' },
    { kind: 'circle', cx: 12, cy: 17, r: 1.3 },
  ],
  grid: [
    { kind: 'rect', x: 3.5, y: 3.5, width: 7, height: 7, rx: 1.6 },
    { kind: 'rect', x: 13.5, y: 3.5, width: 7, height: 7, rx: 1.6 },
    { kind: 'rect', x: 3.5, y: 13.5, width: 7, height: 7, rx: 1.6 },
    { kind: 'rect', x: 13.5, y: 13.5, width: 7, height: 7, rx: 1.6 },
  ],
  hourglass: [
    { kind: 'path', d: 'M7 3.5h10M7 20.5h10' },
    {
      kind: 'path',
      d: 'M8.2 3.5v3.1c0 1.6 1 2.5 2.3 3.5L12 12l-1.5 1.9c-1.3 1-2.3 1.9-2.3 3.5v3.1',
    },
    {
      kind: 'path',
      d: 'M15.8 3.5v3.1c0 1.6-1 2.5-2.3 3.5L12 12l1.5 1.9c1.3 1 2.3 1.9 2.3 3.5v3.1',
    },
  ],
  lifebuoy: [
    { kind: 'circle', cx: 12, cy: 12, r: 9 },
    { kind: 'circle', cx: 12, cy: 12, r: 3.6 },
    {
      kind: 'path',
      d: 'M5.6 5.6l3.9 3.9M14.5 14.5l3.9 3.9M18.4 5.6l-3.9 3.9M9.5 14.5l-3.9 3.9',
    },
  ],
  minus: [{ kind: 'path', d: 'M5 12h14' }],
  plus: [{ kind: 'path', d: 'M12 5v14M5 12h14' }],
  qr: [
    { kind: 'rect', x: 3.5, y: 3.5, width: 6.5, height: 6.5, rx: 1.4 },
    { kind: 'rect', x: 14, y: 3.5, width: 6.5, height: 6.5, rx: 1.4 },
    { kind: 'rect', x: 3.5, y: 14, width: 6.5, height: 6.5, rx: 1.4 },
    { kind: 'path', d: 'M14 14h3v3h-3zM20.5 14v6.5H14' },
  ],
  shieldCheck: [
    { kind: 'path', d: 'M12 3l7 3v5.5c0 4.3-2.9 8.2-7 9.5-4.1-1.3-7-5.2-7-9.5V6l7-3Z' },
    { kind: 'path', d: 'M9 12l2 2 4-4' },
  ],
  sliders: [
    { kind: 'path', d: 'M4 7h9M17 7h3M4 17h3M11 17h9' },
    { kind: 'circle', cx: 15, cy: 7, r: 2.2 },
    { kind: 'circle', cx: 9, cy: 17, r: 2.2 },
  ],
  users: [
    { kind: 'circle', cx: 9, cy: 8, r: 3.5 },
    { kind: 'path', d: 'M2.5 20a6.5 6.5 0 0 1 13 0' },
    { kind: 'path', d: 'M16 4.7a3.5 3.5 0 0 1 0 6.6M17.5 14.4A6.5 6.5 0 0 1 21.5 20' },
  ],
} as const satisfies Record<string, readonly IconPart[]>;

export type IconName = keyof typeof ICONS;

/** Every name, for a picker or a test that renders the whole set. */
export const ICON_NAMES = Object.keys(ICONS) as IconName[];

/**
 * The parts to draw for a name, given what the caller knows about it.
 *
 * `level` is the only such thing so far and only `battery` reads it, but the
 * resolution lives here rather than in the two `Icon` components: they are
 * about twenty lines of renderer each precisely because neither knows what a
 * glyph *means*, and a `name === 'battery'` branch written twice is the drift
 * this file exists to end.
 */
export function iconParts(
  name: IconName,
  level?: number | null,
): readonly IconPart[] | undefined {
  if (name === 'battery' && typeof level === 'number') {
    return batteryIcon(level);
  }
  return ICONS[name];
}

/**
 * The glyph for a device's platform — the canonical assignment, so a Mac is
 * the same picture in the parent's device list, the dashboard and on its own
 * Settings hero. The argument is `DevicePlatform` from `@kidgate/schema`,
 * accepted as a string because this package imports nothing; an unknown or
 * absent platform falls back to `smartphone` (the phone's own historical
 * fallback) unless the caller has a better idea — the desktop agent passes
 * `devices`, because a desktop drawn as a phone is the wrong guess twice.
 */
export function platformIcon(
  platform: string | null | undefined,
  fallback: IconName = 'smartphone',
): IconName {
  switch (platform) {
    case 'ios':
      return 'apple';
    case 'android':
      return 'android';
    case 'macos':
      return 'mac';
    case 'windows':
      return 'windows';
    case 'androidtv':
      return 'tv';
    default:
      return fallback;
  }
}
