/**
 * The glyph for a feed row, keyed on `resolveActivityKind` — not on the stored
 * `type`.
 *
 * `screen_time` is the catch-all `parseActivityType` stamps on anything it does
 * not recognise, and four features write through it — check-ins, a location
 * refresh, time requests and reward tasks — so keying on `type` drew a clock
 * over every one of them. `apps/mobile` renders the same feed and had the same
 * defect; the split lives in `@kidgate/core` so the two cannot drift.
 *
 * Its own module since the Activity section was built: the map is read by the
 * per-device feed on the Family section and by the family-wide feed, and the
 * second importing the page that renders the first is a cycle.
 */
export const ACTIVITY_ICON = {
  app_blocked: 'ban',
  app_opened: 'play',
  app_installed: 'plus',
  app_removed: 'minus',
  // Entering and leaving are opposite events and shared one glyph here. The
  // phone has drawn `home` for an arrival since the feed was written.
  place_enter: 'home',
  place_exit: 'mapPin',
  tamper: 'alert',
  message_alert: 'message',
  // Flagged text the child typed into a search box — the copy says
  // "Concerning search", so a speech bubble was describing the wrong event.
  search_alert: 'search',
  // A watched word the AI tier cleared, not an alert. The feed here renders
  // the row's own titleKey/descriptionKey, so the copy is already right; this
  // map only decides the glyph, and without an entry the row draws the
  // unknown-activity fallback.
  message_checked: 'message',
  device_locked: 'lock',
  device_unlocked: 'unlock',
  // Whatever is left in the bucket once the four below are taken out of it:
  // a legacy usage row, or a `type` this build does not know.
  screen_time: 'clock',
  check_in: 'userCheck',
  // `refresh`, not `mapPin`: a parent asking for a fresh fix, and `mapPin`
  // already means "left a place" above.
  location_request: 'refresh',
  // Time being asked for, not time already spent — hence not the clock.
  time_request: 'hourglass',
  reward_task: 'star',
  web_filter: 'globe',
  emergency: 'lifebuoy',
  // A KidGate operator entered the account (`functions/admin/impersonate.js`).
  support_session: 'user',
};

/**
 * The unknown-row glyph. It used to be `clock`, which made a row this build
 * cannot identify indistinguishable from a screen-time one — the map's own
 * fallback quietly asserting the same thing the overloaded `type` did.
 */
export const ACTIVITY_ICON_FALLBACK = 'activity';

/** The glyph for one row, fallback included. */
export function activityIconName(kind) {
  return ACTIVITY_ICON[kind] || ACTIVITY_ICON_FALLBACK;
}
