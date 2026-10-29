import { describe, expect, it } from 'vitest';
import { DEFAULT_DEVICE_CONTROLS } from '@kidgate/schema/deviceControls';
import { t } from '@kidgate/i18n/web';
import { toDeviceView } from './deviceView.js';

const HOME = {
  id: 'p1',
  name: 'Home',
  latitude: 10,
  longitude: 106,
  radiusMeters: 150,
  notifyOnEnter: true,
  notifyOnExit: false,
};
// ~133 m north of Home: inside its 150 m fence, outside the 100 m "near" band.
const INSIDE_HOME = {
  latitude: 10.0012,
  longitude: 106,
  updatedAt: '2026-10-11T08:00:00Z',
};
// ~11 km north of Home.
const ACROSS_TOWN = {
  latitude: 10.1,
  longitude: 106,
  updatedAt: '2026-10-11T08:00:00Z',
};

const view = extra => toDeviceView({ deviceId: 'd1', name: 'Pixel', ...extra });
const located = lastLocation => view({ lastLocation, places: [HOME] }).lastLocation;

describe('toDeviceView', () => {
  it("names an unnamed device, but draws '?' rather than the fallback's initial", () => {
    const unnamed = view({ name: '' });
    expect(unnamed.name).toBe(t('dash.fallbackDevice'));
    expect(unnamed.initials).toBe('?');
    expect(view({ name: ' ipad' }).initials).toBe('I');
  });

  it('fills the controls a device never wrote from the defaults, keeping what it did', () => {
    expect(view({}).controls).toEqual(DEFAULT_DEVICE_CONTROLS);
    expect(view({ controls: { dailyLimitMinutes: 90 } }).controls).toEqual({
      ...DEFAULT_DEVICE_CONTROLS,
      dailyLimitMinutes: 90,
    });
  });

  it('reads a locked device as locked whatever it last reported, and a silent one as offline', () => {
    expect(view({ isLocked: true, status: 'online' }).status).toBe('locked');
    expect(view({}).status).toBe('offline');
  });

  /*
   * A device that never reported a version must stay distinguishable from one
   * running an old one, and a lock with no answer from one the device refused.
   */
  it('leaves facts the device never reported absent rather than defaulted', () => {
    const quiet = view({});
    for (const key of [
      'appVersion',
      'appBuild',
      'otaVersion',
      'lockRequestedAt',
      'lockEnforcement',
      'timeZone',
    ]) {
      expect(quiet).not.toHaveProperty(key);
    }
    expect(quiet.topAppsOtherToday).toBeUndefined();
    expect(quiet.weekCounters).toBeUndefined();
    expect(quiet.capabilities).toBeNull();
    expect(view({ otaVersion: null })).toHaveProperty('otaVersion', null);
  });

  it('carries the lock request and the device answer through for the status pill', () => {
    const locked = view({
      isLocked: true,
      lockRequestedAt: '2026-10-11T07:00:00Z',
      lockEnforcement: { state: 'applied' },
    });
    expect(locked.lockRequestedAt).toBe('2026-10-11T07:00:00Z');
    expect(locked.lockEnforcement).toEqual({ state: 'applied' });
  });

  it('never exposes the device name as a person', () => {
    const device = view({ childId: 'c1' });
    expect(device).not.toHaveProperty('childName');
    expect(device.child).toBeNull();
    expect(device.childId).toBe('c1');
  });
});

describe('what a device row says about where it is', () => {
  it('has no location when the device never sent one', () => {
    expect(view({ places: [HOME] }).lastLocation).toBeNull();
  });

  /*
   * The phone answers with the containing place before any "near" band; the web
   * skipping it once rendered raw coordinates for a fix the phone called Home.
   */
  it('names a fix by the saved place it is inside, past the "near" band', () => {
    const where = located(INSIDE_HOME);
    expect(where.placeName).toBe('Home');
    expect(where.nearbyPlaceName).toBeNull();
    expect(where).not.toHaveProperty('relativePlace');
  });

  it('keeps the reverse-geocoded name over the saved place', () => {
    expect(located({ ...INSIDE_HOME, placeName: 'Le Loi' }).placeName).toBe('Le Loi');
  });

  it("names a fix outside every place by the child's own area name", () => {
    const where = located({ ...ACROSS_TOWN, areaName: '  District 1 ' });
    expect(where.placeName).toBe('District 1');
    expect(where).not.toHaveProperty('relativePlace');
  });

  it('says how far and which way the fix is from the nearest saved place', () => {
    const where = located(ACROSS_TOWN);
    expect(where.placeName).toBeUndefined();
    expect(where.relativePlace).toMatchObject({
      key: 'location.awayFromPlace',
      place: 'Home',
      distanceKey: 'location.distanceKm',
      compassKey: 'location.compassN',
    });
  });

  /*
   * `placeName` is HERE's street, never a place the family saved, and the list
   * used to compare against it — "not here" under a location line saying Home.
   */
  it('marks the saved place the fix is inside, whatever the street is called', () => {
    const onStreet = { ...INSIDE_HOME, placeName: 'Nguyen Trai' };
    expect(view({ lastLocation: onStreet, places: [HOME] }).places[0].inside).toBe(
      true,
    );
    expect(view({ lastLocation: ACROSS_TOWN, places: [HOME] }).places[0].inside).toBe(
      false,
    );
    expect(view({ places: [HOME] }).places[0].inside).toBe(false);
  });

  it('keeps the stored place list whole for the editor beside the renamed one', () => {
    const places = [HOME];
    const device = view({ places });
    expect(device.familyPlaces).toBe(places);
    expect(device.places[0]).toMatchObject({
      id: 'p1',
      name: 'Home',
      radius: 150,
      alertOnEnter: true,
      alertOnExit: false,
    });
  });

  /*
   * Dropped until 2026-10-29: `resolveMessageMonitoring` read every Android
   * phone as "told us nothing", and the card said Waiting where the phone
   * said Off. Absent stays absent — unknown, never off.
   */
  it("keeps the device's Message Alerts answer, and leaves an absent one absent", () => {
    const messageMonitoring = {
      incoming: { granted: true, enabled: false },
      outgoing: { granted: false, enabled: false },
    };
    expect(view({ messageMonitoring }).messageMonitoring).toBe(messageMonitoring);
    expect('messageMonitoring' in view({})).toBe(false);
  });
});
