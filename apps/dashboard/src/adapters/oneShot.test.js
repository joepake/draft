import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { wrapOneShot } from './oneShot.js';

const CEILING_MS = 15_000;

/** A port whose listeners are driven by hand. */
function fakePort() {
  const listener = { onNext: null, onError: null, unsubscribe: vi.fn() };
  const port = {
    onDoc: vi.fn((path, onNext, onError) => {
      Object.assign(listener, { onNext, onError });
      return listener.unsubscribe;
    }),
    onQuery: vi.fn((path, query, onNext, onError) => {
      Object.assign(listener, { onNext, onError });
      return listener.unsubscribe;
    }),
  };
  return { port, listener };
}

const docSnap = fromCache => ({ fromCache, data: () => ({}) });
const querySnap = (...fromCache) => ({ docs: fromCache.map(c => ({ fromCache: c })) });

beforeEach(() => {
  vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] });
});

afterEach(() => {
  vi.useRealTimers();
});

describe('wrapOneShot onDoc', () => {
  /*
   * Refresh re-runs a read inside a session whose cache is warm: stopping at
   * the first delivery would hand back the value the parent already had.
   */
  it('passes a cached snapshot through and stays open for the server one', () => {
    const { port, listener } = fakePort();
    const onNext = vi.fn();
    wrapOneShot(port).onDoc('users/a', onNext, vi.fn());

    const cached = docSnap(true);
    listener.onNext(cached);
    expect(onNext).toHaveBeenCalledWith(cached);
    expect(listener.unsubscribe).not.toHaveBeenCalled();

    const served = docSnap(false);
    listener.onNext(served);
    expect(onNext).toHaveBeenLastCalledWith(served);
    expect(listener.unsubscribe).toHaveBeenCalledTimes(1);
  });

  it('closes a listener whose server snapshot arrives before it has returned', () => {
    const unsubscribe = vi.fn();
    const onNext = vi.fn();
    const port = {
      onDoc: (path, next) => {
        next(docSnap(false));
        return unsubscribe;
      },
    };

    wrapOneShot(port).onDoc('users/a', onNext, vi.fn());

    expect(onNext).toHaveBeenCalledTimes(1);
    expect(unsubscribe).toHaveBeenCalledTimes(1);
  });

  it('passes an error through and closes', () => {
    const { port, listener } = fakePort();
    const onError = vi.fn();
    wrapOneShot(port).onDoc('users/a', vi.fn(), onError);

    const error = new Error('permission-denied');
    listener.onError(error);

    expect(onError).toHaveBeenCalledWith(error);
    expect(listener.unsubscribe).toHaveBeenCalledTimes(1);
  });

  it('closes itself at the ceiling when no server answer ever comes', () => {
    const { port, listener } = fakePort();
    wrapOneShot(port).onDoc('users/a', vi.fn(), vi.fn());
    listener.onNext(docSnap(true));

    vi.advanceTimersByTime(CEILING_MS - 1);
    expect(listener.unsubscribe).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(listener.unsubscribe).toHaveBeenCalledTimes(1);
  });

  it("closes on the caller's unsubscribe, once, and cancels the ceiling", () => {
    const { port, listener } = fakePort();
    const stop = wrapOneShot(port).onDoc('users/a', vi.fn(), vi.fn());

    stop();
    stop();
    vi.advanceTimersByTime(CEILING_MS);

    expect(listener.unsubscribe).toHaveBeenCalledTimes(1);
  });
});

describe('wrapOneShot onQuery', () => {
  it('stays open while every document came from the cache', () => {
    const { port, listener } = fakePort();
    const onNext = vi.fn();
    wrapOneShot(port).onQuery('childDevices', {}, onNext, vi.fn());

    listener.onNext(querySnap(true, true));

    expect(onNext).toHaveBeenCalledTimes(1);
    expect(listener.unsubscribe).not.toHaveBeenCalled();
  });

  it('closes once any document is server-backed', () => {
    const { port, listener } = fakePort();
    wrapOneShot(port).onQuery('childDevices', {}, vi.fn(), vi.fn());

    listener.onNext(querySnap(true, false));

    expect(listener.unsubscribe).toHaveBeenCalledTimes(1);
  });

  // An empty QuerySnapshot carries no `fromCache`, so it cannot be told apart.
  it('closes on an empty result at its first delivery', () => {
    const { port, listener } = fakePort();
    const onNext = vi.fn();
    wrapOneShot(port).onQuery('childDevices', {}, onNext, vi.fn());

    listener.onNext(querySnap());

    expect(onNext).toHaveBeenCalledTimes(1);
    expect(listener.unsubscribe).toHaveBeenCalledTimes(1);
  });

  it('passes an error through and closes', () => {
    const { port, listener } = fakePort();
    const onError = vi.fn();
    wrapOneShot(port).onQuery('childDevices', {}, vi.fn(), onError);

    listener.onError(new Error('unavailable'));

    expect(onError).toHaveBeenCalledTimes(1);
    expect(listener.unsubscribe).toHaveBeenCalledTimes(1);
  });
});
