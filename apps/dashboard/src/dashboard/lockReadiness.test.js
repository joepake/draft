import { describe, expect, it, vi } from 'vitest';
import { lockNotReadyMessage, setLockEach } from './lockReadiness.js';

const appT = key => key;

const IPHONE_WITHOUT_SCREEN_TIME = {
  id: 'iphone',
  platform: 'ios',
  protectionStatus: { screenTime: 'notDetermined' },
};
const IPHONE_READY = {
  id: 'iphone-ok',
  platform: 'ios',
  protectionStatus: { screenTime: 'approved' },
};
const MAC = { id: 'mac', platform: 'macos', protectionStatus: {} };

describe('lockNotReadyMessage', () => {
  it("says the phone's sentence for an iPhone without Screen Time", () => {
    const message = lockNotReadyMessage(IPHONE_WITHOUT_SCREEN_TIME, appT);
    expect(message).toContain('protection.lockNotReadyBodyIos');
  });

  it('says nothing for a device that can hold a lock', () => {
    expect(lockNotReadyMessage(IPHONE_READY, appT)).toBeNull();
    expect(lockNotReadyMessage(MAC, appT)).toBeNull();
  });
});

describe('setLockEach', () => {
  it('does not send a lock to a device that cannot hold one (2026-10-29)', async () => {
    const actions = { setLock: vi.fn().mockResolvedValue(undefined) };
    const result = await setLockEach(
      [IPHONE_WITHOUT_SCREEN_TIME, MAC],
      true,
      actions,
      appT,
    );
    expect(actions.setLock).toHaveBeenCalledTimes(1);
    expect(actions.setLock).toHaveBeenCalledWith('mac', true);
    expect(result.refusedMessage).toContain('protection.lockNotReadyBodyIos');
  });

  it('never refuses an unlock', async () => {
    const actions = { setLock: vi.fn().mockResolvedValue(undefined) };
    const result = await setLockEach(
      [IPHONE_WITHOUT_SCREEN_TIME],
      false,
      actions,
      appT,
    );
    expect(actions.setLock).toHaveBeenCalledWith('iphone', false);
    expect(result).toBeUndefined();
  });
});
