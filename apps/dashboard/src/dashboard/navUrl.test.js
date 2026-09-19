import { describe, expect, it } from 'vitest';
import { navScreenSlug, navSearch, readNav } from './navUrl.js';

/*
 * The page's own two lists, as `Dashboard.jsx` derives them. Written out
 * rather than imported: that file is a React page this runner does not load
 * (`vitest.config.ts` opens one narrow door into this app, for pure modules
 * only), and what is under test is the validation, not the lists.
 */
const SECTION_IDS = new Set(['family', 'activity', 'report', 'support', 'settings']);
const TAB_IDS = new Set([
  'overview',
  'screen',
  'apps',
  'web',
  'safety',
  'controls',
  'manage',
  'log',
]);

const read = search => readNav(search, SECTION_IDS, TAB_IDS);

const LANDING = {
  section: 'family',
  openChildId: null,
  childLocationOpen: false,
  deviceId: null,
  deviceOpen: false,
  tab: 'overview',
  familyOpen: false,
  weekOpen: false,
  reportChildId: null,
  supportOpen: false,
};

describe('navScreenSlug', () => {
  const slug = extra => navScreenSlug({ ...LANDING, ...extra });

  it('is the section alone when nothing is open', () => {
    expect(slug({})).toBe('family');
    expect(slug({ section: 'activity' })).toBe('activity');
  });

  it('names the device tab, which is the frame a parent reads a child in', () => {
    expect(slug({ deviceOpen: true, deviceId: 'd1', tab: 'apps' })).toBe(
      'family/device_apps',
    );
  });

  it('keeps the child hub and the map one frame apart', () => {
    expect(slug({ openChildId: 'c1' })).toBe('family/child');
    expect(slug({ openChildId: 'c1', childLocationOpen: true })).toBe(
      'family/child_location',
    );
  });

  /*
   * The order is the contract. GA rows get compared month to month, and an
   * overlay added at the wrong rung re-labels every row below it without
   * failing anywhere — the reader sees a trend that is really a rename.
   */
  it('reports the deepest frame the URL names', () => {
    const deep = {
      supportOpen: true,
      reportChildId: 'c1',
      weekOpen: true,
      familyOpen: true,
      deviceOpen: true,
      deviceId: 'd1',
      openChildId: 'c1',
    };
    expect(slug(deep)).toBe('family/support');
    expect(slug({ ...deep, supportOpen: false })).toBe('family/report');
    expect(slug({ ...deep, supportOpen: false, reportChildId: null })).toBe(
      'family/week',
    );
    expect(
      slug({ ...deep, supportOpen: false, reportChildId: null, weekOpen: false }),
    ).toBe('family/family_settings');
  });

  /*
   * `lib/analytics.js` promises nothing it sends identifies a child. A slug is
   * a parameter like any other, so the three ids are read for presence only.
   */
  it('carries no id', () => {
    expect(
      slug({
        openChildId: 'CHILD_ID_9',
        deviceId: 'DEVICE_ID_9',
        deviceOpen: true,
        reportChildId: 'REPORT_ID_9',
      }),
    ).not.toMatch(/_9/);
  });
});

describe('navUrl', () => {
  it('writes nothing for the landing, so a parent who opened nothing has a clean URL', () => {
    expect(navSearch(LANDING)).toBe('');
    expect(read('')).toEqual(LANDING);
  });

  /*
   * The one that matters. `Dashboard.jsx` pushes whenever the URL and the
   * state disagree, so a state this pair cannot round-trip is not a wrong
   * page — it is a push on every render, forever.
   */
  it.each([
    LANDING,
    { ...LANDING, section: 'settings' },
    { ...LANDING, openChildId: 'child-1' },
    { ...LANDING, openChildId: 'child-1', childLocationOpen: true },
    { ...LANDING, deviceId: 'dev-1', deviceOpen: true },
    { ...LANDING, deviceId: 'dev-1', deviceOpen: true, tab: 'controls' },
    {
      ...LANDING,
      openChildId: 'child-1',
      deviceId: 'dev-1',
      deviceOpen: true,
      tab: 'log',
    },
    { ...LANDING, familyOpen: true },
    { ...LANDING, section: 'report', weekOpen: true },
    { ...LANDING, section: 'report', reportChildId: 'child-2' },
    { ...LANDING, section: 'settings', supportOpen: true },
  ])('round-trips %o', state => {
    const search = navSearch(state);
    expect(read(search)).toEqual(state);
    // Idempotent on the second pass too: whatever `readNav` answers has to
    // write back the same string, or the two effects push at each other.
    expect(navSearch(read(search))).toBe(search);
  });

  it('drops the child location frame when no child is open — it is one frame deeper', () => {
    expect(navSearch({ ...LANDING, childLocationOpen: true })).toBe('');
  });

  it('drops the device and its tab while the list is open, because a selection is not a destination', () => {
    expect(navSearch({ ...LANDING, deviceId: 'dev-1', tab: 'controls' })).toBe('');
  });

  it('falls back to the landing for ids no list renders', () => {
    const next = read('?s=nowhere&tab=made-up&device=dev-1');
    expect(next.section).toBe('family');
    expect(next.tab).toBe('overview');
    // The device id itself is not checked here — the page re-points a
    // selection that no longer exists, and an unpaired device must still open
    // the family list rather than a blank pane.
    expect(next.deviceOpen).toBe(true);
  });
});
