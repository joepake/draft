import { describe, expect, it } from 'vitest';
import { translate } from '@kidgate/i18n/translate';
import { loadUserGuide } from '@kidgate/i18n/userGuidePack';
import { readGuideSteps } from '@kidgate/core/domain/userGuide';
import { buildUserGuideSearchIndex } from '@kidgate/core/domain/userGuideSearch';
import { buildSearchSections } from './searchSections.js';

/**
 * The dashboard's header search, against the real Vietnamese packs — the
 * language the Vietnamese-search bugs of 2026-10-04 were found in.
 */
const appT = (key, params) => translate('vi', key, params);
const familyChildren = [
  { id: 'c1', name: 'Bin' },
  { id: 'c2', name: 'Na' },
];
const devices = [
  { id: 'd1', name: 'Pixel', platform: 'android', childId: 'c1' },
  { id: 'd2', name: 'iPad', platform: 'ios' },
];

function search(query, guide = null) {
  const calls = [];
  const record =
    kind =>
    (...args) =>
      calls.push([kind, ...args]);
  const sections = buildSearchSections({
    appT,
    guide,
    guideIndex: guide
      ? buildUserGuideSearchIndex(guide.t, id => readGuideSteps(guide.guide, id))
      : [],
    familyChildren,
    devices,
    query,
    deviceIcon: () => 'devices',
    open: {
      child: record('child'),
      device: record('device'),
      card: record('card'),
      section: record('section'),
      guide: record('guide'),
    },
  });
  const rows = Object.fromEntries(sections.map(section => [section.id, section.rows]));
  return { sections, rows, calls };
}

describe('the dashboard header search', () => {
  it('lists people, devices and pages untyped, never cards or topics', () => {
    expect(search('').sections.map(section => section.id)).toEqual([
      'children',
      'devices',
      'goTo',
    ]);
  });

  it("finds a child and everything they carry by the child's name", () => {
    const { rows } = search('bin');
    expect(rows.children.map(row => row.key)).toEqual(['c1']);
    expect(rows.devices.map(row => row.key)).toEqual(['d1']);
    expect(rows.features.length).toBeGreaterThan(0);
    expect(rows.features.some(row => row.key.startsWith('d2:'))).toBe(false);
  });

  it("opens a device's card on that device, a child's card on what they carry", () => {
    const byIpad = search('ipad');
    byIpad.rows.features.find(row => row.key.startsWith('d2:')).open();
    expect(byIpad.calls[0][0]).toBe('card');
    expect(byIpad.calls[0][1].id).toBe('d2');

    const byBin = search('bin');
    byBin.rows.features.find(row => row.key === 'c1:schedule').open();
    expect(byBin.calls[0][0]).toBe('card');
    expect(byBin.calls[0][1].id).toBe('d1');
    expect(byBin.calls[0][2].id).toBe('schedule');
  });

  it('finds the guide topics that say the phrase, and only those', async () => {
    const guide = await loadUserGuide('vi');
    const { rows, calls } = search('hỗ trợ', guide);
    expect(rows.guide.map(row => row.key).sort()).toEqual(
      ['androidPermissions', 'inviteParent', 'reportProblem', 'webFilter'].sort(),
    );
    expect(rows.guide.every(row => row.phraseOnly)).toBe(true);
    rows.guide[0].open();
    expect(calls[0][0]).toBe('guide');
  });
});
