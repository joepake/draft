/**
 * Domain-name normalisation for the web filter.
 *
 * Lives in `core/domain` rather than in `@kidgate/schema` because it is
 * behaviour: schema carries the shapes and the contract constants, nothing
 * that runs. Moved here from the legacy `src/types/WebActivity.ts`.
 */

/**
 * Normalises what a parent types into what the filter matches on.
 *
 * Parents paste URLs, type `WWW.Example.com/`, and add trailing dots. All of
 * those mean the same host, and storing them apart would show one site as
 * three rows and match none of them.
 *
 * Returns null when the input cannot be a hostname, so a caller never stores a
 * rule that can match nothing.
 */
export function normalizeWebDomain(input: string): string | null {
  let value = input.trim().toLowerCase();
  if (!value) {
    return null;
  }

  value = value.replace(/^[a-z][a-z0-9+.-]*:\/\//, '');
  // `split()[0]` is always defined for a non-empty string, but the compiler
  // cannot know that under `noUncheckedIndexedAccess`.
  value = value.split('/')[0] ?? '';
  value = value.split('?')[0] ?? '';
  value = value.split('#')[0] ?? '';
  // Strip credentials and port.
  value = value.split('@').pop() ?? value;
  value = value.split(':')[0] ?? '';
  value = value.replace(/^www\./, '');
  value = value.replace(/\.+$/, '');

  if (!value || value.length > 253) {
    return null;
  }
  // Hostname shape only — no spaces, at least one dot, no empty labels.
  if (!/^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(value)) {
    return null;
  }

  return value;
}
