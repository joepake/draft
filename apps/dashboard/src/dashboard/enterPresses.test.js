import { describe, expect, it, vi } from 'vitest';
import { pressNextOnEnter } from './enterPresses.js';

function keyEvent(key, isComposing = false) {
  const click = vi.fn();
  return {
    click,
    event: {
      key,
      nativeEvent: { isComposing },
      preventDefault: vi.fn(),
      currentTarget: { nextElementSibling: { click } },
    },
  };
}

describe('pressNextOnEnter', () => {
  it('presses the button beside the field on Enter', () => {
    const { click, event } = keyEvent('Enter');
    pressNextOnEnter(event);
    expect(click).toHaveBeenCalledTimes(1);
  });

  it('leaves every other key alone', () => {
    const { click, event } = keyEvent('a');
    pressNextOnEnter(event);
    expect(click).not.toHaveBeenCalled();
  });

  it('does not submit while an IME is composing a word', () => {
    const { click, event } = keyEvent('Enter', true);
    pressNextOnEnter(event);
    expect(click).not.toHaveBeenCalled();
  });
});
