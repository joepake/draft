/**
 * Enter in a one-field row presses the button beside it — the row's Save.
 *
 * The rename and add-child rows are a field and a button with no `<form>`
 * around them, so Enter did nothing and the parent reached for the mouse.
 * Clicking the sibling keeps that button's own `disabled` and handler as the
 * one truth: a disabled button ignores `click()`. Skipped mid-composition,
 * because Enter is how a Vietnamese, Japanese or Korean IME commits a word.
 */
export function pressNextOnEnter(event) {
  if (event.key !== 'Enter' || event.nativeEvent?.isComposing) return;
  event.preventDefault();
  event.currentTarget.nextElementSibling?.click();
}
