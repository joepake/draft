import { describe, expect, it } from 'vitest';
import { hereTileUrl } from './hereTiles.js';

describe('hereTileUrl', () => {
  it('builds the tile a frame asked for', () => {
    expect(hereTileUrl('k&y', { z: 2, x: 3, y: 1 })).toBe(
      'https://maps.hereapi.com/v3/base/mc/2/3/1/png8?style=explore.day&size=256&apiKey=k%26y',
    );
  });

  // The frame is not trusted: it must not steer a keyed request anywhere else.
  it.each([
    [undefined],
    [{}],
    [{ z: '2', x: 0, y: 0 }],
    [{ z: 2, x: 0.5, y: 0 }],
    [{ z: 2, x: 4, y: 0 }],
    [{ z: 2, x: 0, y: -1 }],
    [{ z: 20, x: 0, y: 0 }],
    [{ z: 2, x: '0/../../evil', y: 0 }],
  ])('refuses %j', request => {
    expect(hereTileUrl('key', request)).toBeNull();
  });
});
