import type { JsonValue } from '@kidgate/schema/primitives';

/**
 * Prepare an object for an HTTP body by dropping `undefined` values.
 *
 * `JSON.stringify` silently deletes keys whose value is `undefined`, so a
 * payload built from a `Partial<…>` sends fewer fields than its type claims —
 * and a server reading "field absent" as "leave unchanged" then diverges from a
 * caller that meant "clear it". Making the strip explicit means the difference
 * is visible here rather than discovered in a request log.
 *
 * `null` is preserved: it survives the round trip and means "clear this".
 */
export function toJsonBody(source: Record<string, unknown>): Record<string, JsonValue> {
  const body: Record<string, JsonValue> = {};
  for (const [key, value] of Object.entries(source)) {
    if (value !== undefined) {
      body[key] = value as JsonValue;
    }
  }
  return body;
}
