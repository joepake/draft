/**
 * Scalars that cross a process boundary. Named aliases rather than bare
 * `number` / `string` so a Swift, Kotlin or C# generator has something to map
 * onto, and so a minute count is never accidentally handed a millisecond one.
 */

export type Minutes = number;
export type Millis = number;

/** `YYYY-MM-DD` in the *device's* local timezone, never UTC. */
export type IsoDate = string;

/** RFC 3339, always UTC, always with an explicit `Z`. */
export type IsoDateTime = string;

/**
 * Opaque handle for "an app" on whatever platform produced it.
 *
 * Deliberately not a package name. Android and Windows can produce a readable
 * identifier; iOS cannot — FamilyControls hands back an `ApplicationToken` that
 * is meaningless outside the device that minted it, and Apple treats the set of
 * apps a child has installed as private. Any code that assumes it can parse,
 * display or compare these across devices is wrong on iOS.
 *
 * Use `AppRef.label` for anything a human reads, and expect it to be null.
 */
export type AppRefId = string;

export interface AppRef {
  id: AppRefId;
  /** Null when the platform will not disclose a name. Never fall back to `id`. */
  label: string | null;
}

/**
 * Anything that survives a round trip through JSON.
 *
 * Used for request and response bodies crossing the HTTP boundary, where a
 * `Date`, a `Map` or a Firestore sentinel would silently become `{}`.
 */
export type JsonValue =
  string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };
