import { describe, expect, it } from 'vitest';
import { rewardTaskRepeatKey, rewardTaskRows } from './rewardTaskRows.js';

describe('rewardTaskRepeatKey', () => {
  it('says a daily task approved today is back tomorrow', () => {
    const doneToday = { repeat: 'daily', availableAfterDate: '2026-10-29' };
    expect(rewardTaskRepeatKey(doneToday, '2026-10-29')).toBe(
      'rewardTask.repeatBackTomorrow',
    );
    expect(rewardTaskRepeatKey(doneToday, '2026-10-30')).toBe('rewardTask.repeatDaily');
  });

  it('says a one-time task is one time', () => {
    expect(rewardTaskRepeatKey({ repeat: 'once' }, '2026-10-29')).toBe(
      'rewardTask.repeatOnce',
    );
  });
});

describe('rewardTaskRows', () => {
  it('draws a task approved between the two reads once, as approved', () => {
    const rows = rewardTaskRows(
      [
        { id: 'feed', status: 'claimed' },
        { id: 'tidy', status: 'open' },
      ],
      [{ id: 'feed', status: 'approved' }],
    );

    expect(rows).toEqual([
      { id: 'tidy', status: 'open' },
      { id: 'feed', status: 'approved' },
    ]);
  });

  it("keeps a daily task open beside its approval's copy", () => {
    const rows = rewardTaskRows(
      [{ id: 'tidy', status: 'open' }],
      [{ id: 'tidy-2026-10-29', status: 'approved' }],
    );

    expect(rows.map(row => row.id)).toEqual(['tidy', 'tidy-2026-10-29']);
  });
});
