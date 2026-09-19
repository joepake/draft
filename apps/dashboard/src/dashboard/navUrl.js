/**
 * Where the parent is standing, as a query string — and back.
 *
 * **This page is one route and its own stack**, so until 2026-09-17 Back left
 * the dashboard, a reload landed at the top of Family, and no screen could be
 * bookmarked or sent to the other parent. The stack is React state; this pair
 * is the same stack written where a browser can see it.
 *
 * A module of its own because the round trip is the part that breaks quietly:
 * a state `navSearch` writes and `readNav` does not answer with is a link that
 * opens somewhere else, and — since `Dashboard.jsx` pushes whenever the two
 * disagree — a pair that is not idempotent is a navigation loop rather than a
 * wrong page. `navUrl.test.js` pins it.
 *
 * Only what a reload has to restore lives here. `deviceId` rides on `device`,
 * which is written only while one is OPEN — a selection is not a destination,
 * and writing it would put `?device=` on the family list of every parent who
 * has ever opened one. `openedAction` and `focusCard` stay out too: the ring
 * and the panel's borrowed heading are what a press did, not where it landed.
 */

/**
 * Short keys: this is read aloud in an address bar, and the default of each is
 * absent rather than spelled out.
 */
export function navSearch(state) {
  const params = new URLSearchParams();
  if (state.section !== 'family') params.set('s', state.section);
  if (state.openChildId) {
    params.set('child', state.openChildId);
    // One frame deeper than the hub, and only meaningful there.
    if (state.childLocationOpen) params.set('childloc', '1');
  }
  if (state.deviceOpen && state.deviceId) {
    params.set('device', state.deviceId);
    if (state.tab !== 'overview') params.set('tab', state.tab);
  }
  if (state.familyOpen) params.set('family', '1');
  if (state.weekOpen) params.set('week', '1');
  if (state.reportChildId) params.set('report', state.reportChildId);
  if (state.supportOpen) params.set('support', '1');
  const query = params.toString();
  return query ? `?${query}` : '';
}

/**
 * The same nine, read back.
 *
 * **Every id is checked against the list that renders it**, which is why the
 * two sets are passed in rather than imported: they are the page's own
 * `SECTIONS` and both tab bars, and a copy here would be a second list to keep
 * in step. A hand-edited or stale link is the one input this page takes from
 * outside, and an unknown `tab` renders no panel at all — a blank pane under a
 * lit menu item, which reads as the dashboard being broken rather than as the
 * link being old.
 *
 * A child or device id that no longer exists needs no check: `childView`
 * resolves to null and the device effect re-points the selection.
 */
export function readNav(search, sectionIds, tabIds) {
  const params = new URLSearchParams(search);
  const section = params.get('s');
  const tab = params.get('tab');
  const device = params.get('device');
  return {
    section: section && sectionIds.has(section) ? section : 'family',
    openChildId: params.get('child'),
    childLocationOpen: params.get('childloc') === '1',
    deviceId: device,
    deviceOpen: Boolean(device),
    tab: tab && tabIds.has(tab) ? tab : 'overview',
    familyOpen: params.get('family') === '1',
    weekOpen: params.get('week') === '1',
    reportChildId: params.get('report'),
    supportOpen: params.get('support') === '1',
  };
}

/**
 * The same nine states as one stable slug, for `page_view`.
 *
 * **Why it lives here and not in `lib/analytics.js`**: this module already owns
 * what the nine states mean, and a second reading of them somewhere else is the
 * drift `navSearch`/`readNav` were split out to prevent. It is the same round
 * trip asked a third way.
 *
 * Until now `trackScreen` reported three values — `login`, `splash`,
 * `dashboard` — so every section, every device tab and all six overlays landed
 * in GA as one undifferentiated `dashboard` row. `apps/mobile` fires
 * `logScreenView` on every navigation, so the phone could answer which screens
 * parents use and the browser could not. Writes were never the gap:
 * `controlsApi.js` counts every one through `parent_control`. Reading was.
 *
 * **No id, ever.** `openChildId`, `deviceId` and `reportChildId` are read for
 * their presence and never their value — `lib/analytics.js` promises nothing
 * here identifies a child, and a slug is still a parameter. `section` and `tab`
 * are safe to spell out because `readNav` has already checked both against the
 * lists that render them.
 *
 * The frame order below is nesting, not z-order: the first match is the deepest
 * thing the URL names. `navUrl.test.js` pins it, so a new overlay that belongs
 * elsewhere in the list fails there rather than quietly re-labelling a month of
 * GA rows.
 */
export function navScreenSlug(state) {
  const frame =
    (state.supportOpen && 'support') ||
    (state.reportChildId && 'report') ||
    (state.weekOpen && 'week') ||
    (state.familyOpen && 'family_settings') ||
    (state.deviceOpen && `device_${state.tab}`) ||
    (state.childLocationOpen && 'child_location') ||
    (state.openChildId && 'child') ||
    '';
  return frame ? `${state.section}/${frame}` : state.section;
}
