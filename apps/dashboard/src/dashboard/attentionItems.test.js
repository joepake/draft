import { readFileSync } from 'node:fs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getProtectionSummaryKeys } from '@kidgate/core/domain/protectionStatus';
import {
  PROTECTION_ISSUE_ICON,
  PROTECTION_ISSUES_SHOWN_ELSEWHERE,
  buildAttention,
  buildFamilyAttention,
} from './attentionItems.js';

// `charts.jsx` reaches the repositories through `useAppCategories`.
vi.mock('../adapters/repositories.js', () => ({ getAppCategories: vi.fn() }));

const NOW = Date.parse('2026-10-11T08:00:00Z');
const TODAY = '2026-10-11';
const recent = new Date(NOW - 5 * 60_000).toISOString();

const t = (key, params) => ({ key, ...params });
const activityT = (key, params) => ({ key, ...params });

const android = (extra = {}) => ({
  id: 'd1',
  name: 'Pixel',
  platform: 'android',
  lastActiveAt: recent,
  protectionStatus: { screenTime: 'approved' },
  controls: {},
  ...extra,
});
const ios = protectionStatus =>
  android({
    platform: 'ios',
    protectionStatus: { screenTime: 'approved', ...protectionStatus },
  });

const attention = (device, extra = {}) =>
  buildAttention({ device, t, activityT, today: TODAY, ...extra });
const ids = items => items.map(item => item.id);

beforeEach(() => {
  vi.useFakeTimers({ toFake: ['Date'] });
  vi.setSystemTime(NOW);
});

afterEach(() => {
  vi.useRealTimers();
});

describe('buildAttention', () => {
  it('draws nothing for a device without its controls', () => {
    const timeRequests = [{ id: 'tr1', status: 'pending', requestedMinutes: 15 }];
    expect(attention(null, { timeRequests })).toEqual([]);
    expect(attention(android({ controls: undefined }), { timeRequests })).toEqual([]);
  });

  it('puts the requests first and the battery last', () => {
    const device = android({
      protectionStatus: { screenTime: 'approved', notifications: 'denied' },
      controls: { dailyLimitExceeded: true, usageDate: TODAY, minutesUsedToday: 130 },
      parentPinLocked: true,
      batteryLevel: 8,
    });
    const items = attention(device, {
      timeRequests: [{ id: 'tr1', status: 'pending', requestedMinutes: 15 }],
      siteRequests: [{ id: 'sr1', domain: 'example.com' }],
      checkIns: [{ id: 'ci1', status: 'missed' }],
    });
    expect(ids(items)).toEqual([
      'tr1',
      'sr1',
      'ci1',
      'protection-notifications',
      'limit',
      'pinLocked',
      'batt',
    ]);
  });

  it("lists only pending time requests, under the child's name when one is set", () => {
    const items = attention(android({ child: { name: 'Bí' } }), {
      timeRequests: [
        { id: 'tr1', status: 'pending', requestedMinutes: 15, reason: 'homework' },
        { id: 'tr2', status: 'approved', requestedMinutes: 30 },
      ],
    });
    expect(items).toHaveLength(1);
    expect(items[0]).toMatchObject({
      id: 'tr1',
      action: 'review',
      title: { key: 'dash.attnMoreMinutes', name: 'Bí', minutes: 15 },
      meta: { key: 'dash.attnReason', reason: 'homework' },
    });
  });

  it('names the hardware on a request from a device assigned to nobody', () => {
    const [item] = attention(android(), {
      siteRequests: [{ id: 'sr1', domain: 'example.com' }],
    });
    expect(item).toMatchObject({
      action: 'siteAllow',
      title: { key: 'dash.attnSiteRequest', name: 'Pixel', domain: 'example.com' },
    });
  });

  it('flags a check-in nobody answered, but not one the child closed with an SOS', () => {
    const items = attention(android(), {
      checkIns: [
        { id: 'ci1', status: 'missed' },
        { id: 'ci2', status: 'missed', sosAlertId: 'sos1' },
        { id: 'ci3', status: 'pending' },
        { id: 'ci4', status: 'safe' },
      ],
    });
    expect(ids(items)).toEqual(['ci1']);
    expect(items[0]).toMatchObject({ tone: 'serious', action: 'resend' });
  });

  it('leaves offline and the web-filter blocker to the rest of the page', () => {
    const device = android({
      lastActiveAt: undefined,
      capabilities: { webFilterBlocker: 'awaitingApproval' },
    });
    const folded = getProtectionSummaryKeys(device, NOW).issues.map(issue => issue.key);
    expect(folded).toEqual(expect.arrayContaining(['inactive', 'web-filter-blocked']));
    expect(attention(device)).toEqual([]);
  });

  it('marks a broken rule critical, with the steps the phone shows for it', () => {
    const [item] = attention(
      android({
        protectionStatus: { screenTime: 'approved', notifications: 'denied' },
      }),
    );
    expect(item).toMatchObject({
      tone: 'critical',
      icon: 'bell',
      action: 'howToFix',
      title: { key: 'protection.notificationsPermission' },
      fixKeys: ['permissions.notificationsOpenSettings'],
    });
  });

  // A refused camera on a Mac costs a feature, not a rule.
  it('lists an issue that costs only a feature as a warning', () => {
    const mac = android({
      platform: 'macos',
      capabilities: { pendingConsents: ['camera'] },
    });
    const [item] = attention(mac);
    expect(item).toMatchObject({
      id: 'protection-consent-camera',
      tone: 'warning',
      icon: 'camera',
    });
  });

  /*
   * No steps rather than guessed ones: a wrong path through somebody else's
   * Settings app costs a walk across the house.
   */
  it('gives no fix steps for an issue nobody has written steps for', () => {
    const [item] = attention(ios({ location: 'denied' }));
    expect(item.id).toBe('protection-location');
    expect(item.fixKeys).toBeUndefined();
  });

  it("draws the Screen Time glyph for Screen Time's individual-authorization row", () => {
    const [item] = attention(ios({ screenTimeAuthorization: 'individual' }));
    expect(item).toMatchObject({
      id: 'protection-screen-time-individual',
      icon: 'clock',
    });
  });

  /*
   * `dailyLimitExceeded` is never cleared at midnight, so a device off since
   * yesterday still carries yesterday's "limit reached".
   */
  it('says limit reached only on the day the usage was stamped', () => {
    const controls = { dailyLimitExceeded: true, minutesUsedToday: 130 };
    const stale = android({ controls: { ...controls, usageDate: '2026-10-10' } });
    const fresh = android({ controls: { ...controls, usageDate: TODAY } });
    expect(ids(attention(stale))).toEqual([]);
    expect(ids(attention(fresh, { today: '' }))).toEqual([]);
    expect(attention(fresh)).toEqual([
      expect.objectContaining({ id: 'limit', action: 'unlock' }),
    ]);
  });

  it("judges the stamp on the device's own calendar", () => {
    // 08:00 UTC on the 11th is still the evening of the 10th in Honolulu.
    const device = android({
      timeZone: 'Pacific/Honolulu',
      controls: {
        dailyLimitExceeded: true,
        usageDate: '2026-10-10',
        minutesUsedToday: 60,
      },
    });
    expect(ids(attention(device, { today: { key: TODAY, nowMs: NOW } }))).toEqual([
      'limit',
    ]);
  });

  it('offers any parent the PIN reset when the child locked it out', () => {
    const [item] = attention(android({ parentPinLocked: true }));
    expect(item).toMatchObject({
      id: 'pinLocked',
      action: 'pinReset',
      title: { key: 'pin.unlockChildPinTitle', deviceName: 'Pixel' },
    });
  });

  it('calls a battery low only while it is not charging', () => {
    expect(attention(android({ batteryLevel: 12 }))).toEqual([
      expect.objectContaining({ id: 'batt', level: 12 }),
    ]);
    expect(attention(android({ batteryLevel: 12, batteryCharging: true }))).toEqual([]);
  });
});

describe('buildFamilyAttention', () => {
  const family = extra =>
    buildFamilyAttention({ t, activityT, today: TODAY, ...extra });
  const missingNotifications = { screenTime: 'approved', notifications: 'denied' };

  it("keeps two phones' identical issues apart and the request's own id for the endpoint", () => {
    const items = family({
      devices: [
        android({ protectionStatus: missingNotifications }),
        android({
          id: 'd2',
          name: 'iPad',
          child: { name: 'Na' },
          protectionStatus: missingNotifications,
        }),
      ],
      timeRequests: [
        { id: 'tr1', deviceId: 'd2', status: 'pending', requestedMinutes: 10 },
      ],
    });
    expect(ids(items)).toEqual([
      'd1-protection-notifications',
      'd2-tr1',
      'd2-protection-notifications',
    ]);
    expect(items[1]).toMatchObject({
      sourceId: 'tr1',
      deviceId: 'd2',
      deviceName: 'iPad',
      childName: 'Na',
    });
    expect(items[0].childName).toBeNull();
  });

  it('gives each device only its own requests and check-ins', () => {
    const items = family({
      devices: [android(), android({ id: 'd2' })],
      timeRequests: [
        { id: 'tr1', deviceId: 'd1', status: 'pending', requestedMinutes: 10 },
      ],
      checkIns: [{ id: 'ci1', deviceId: 'd2', status: 'missed' }],
    });
    expect(ids(items)).toEqual(['d1-tr1', 'd2-ci1']);
  });

  /*
   * Site requests are read per opened device, so the rail cannot see them for
   * the rest of the family; listing one device's under every name would lie.
   */
  it('lists no site requests', () => {
    const items = family({
      devices: [android()],
      siteRequests: [{ id: 'sr1', deviceId: 'd1', domain: 'example.com' }],
    });
    expect(items).toEqual([]);
  });
});

describe('PROTECTION_ISSUE_ICON', () => {
  /*
   * Keyed by hand against what `protectionStatus` emits, and three keys had
   * drifted to the permission names (`batteryOptimization` for `battery`), so
   * each row drew the fallback triangle with nothing failing.
   */
  it('has a glyph for every issue the protection fold can raise', () => {
    const source = readFileSync(
      new URL(
        '../../../../packages/core/src/domain/protectionStatus.ts',
        import.meta.url,
      ),
      'utf8',
    );
    const emitted = new Set([
      ...[...source.matchAll(/\bkey: '([A-Za-z-]+)'/g)].map(match => match[1]),
      ...[...source.matchAll(/permissionIssue\(\s*'([A-Za-z-]+)'/g)].map(
        match => match[1],
      ),
    ]);
    expect(emitted.size).toBeGreaterThan(10);
    expect(
      [...emitted].filter(
        key =>
          !(key in PROTECTION_ISSUE_ICON) &&
          !PROTECTION_ISSUES_SHOWN_ELSEWHERE.has(key),
      ),
    ).toEqual([]);
  });
});
