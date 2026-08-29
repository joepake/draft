import type { DocSnapshot, FirestorePort } from '@kidgate/ports/firestore';
import {
  APP_CATEGORIES,
  APP_CATEGORIES_COLLECTION,
  type AppCategory,
  type AppCategoryEntry,
} from '@kidgate/schema/aiApps';

/**
 * What an app is, read back.
 *
 * Written only by the `classifyApps` job through the Admin SDK, so there is no
 * create or update here — `firestore.rules` says `allow write: if false` on the
 * collection and this file could not loosen that if it tried.
 *
 * **Readable by any signed-in session, and the rule is deliberate.** The
 * collection holds no family data: a row says what an app *is*, identically for
 * every family in the product. The usual question in this codebase — is this
 * session a parent, or a child device wearing the owner's uid? — has no bearing
 * here because there is nothing family-shaped to protect. Everything that *is*
 * family-shaped (which child used the app, for how long) stays under
 * `users/{uid}/childDevices`, gated as it always was.
 *
 * **A read, not a listener.** A classification is written once per identifier
 * and never changes; subscribing to it would hold a socket open for an event
 * that happens once in the life of the app.
 */

/**
 * Classifications already fetched this session.
 *
 * Safe to hold indefinitely because the rows are immutable in practice: the job
 * writes an identifier once and skips it on every later run. The cache is what
 * makes a usage screen affordable — the port has no batched get, so a list of
 * forty apps is forty document reads, and a parent switching between days on
 * the same screen would pay them again on every switch.
 *
 * Module-level rather than per-instance for the same reason: two screens
 * showing the same child's apps should not each pay for `com.discord`.
 */
const memo = new Map<string, AppCategoryEntry | null>();

/** Exposed for tests, which must not inherit another test's answers. */
export function clearAppCategoryCache(): void {
  memo.clear();
}

function isCategory(value: unknown): value is AppCategory {
  return (APP_CATEGORIES as readonly string[]).includes(value as string);
}

/**
 * One stored row, with anything unexpected dropped.
 *
 * Returns null rather than a default-shaped entry when the category is
 * unreadable. A row this client cannot parse is a row written by a version of
 * the job it does not understand, and rendering it as `none` would put a
 * confident "we checked, it is nothing" under an app nobody classified.
 */
function mapEntry(snapshot: DocSnapshot): AppCategoryEntry | null {
  if (!snapshot.exists) {
    return null;
  }
  const data = snapshot.data() ?? {};
  if (!isCategory(data.category)) {
    return null;
  }
  const minAge = Number(data.minAge);
  const taxonomyVersion = Number(data.taxonomyVersion);
  return {
    category: data.category,
    confidence: data.confidence === 'high' ? 'high' : 'low',
    // 0 is "unknown" and is the common answer — never a threshold. See the
    // note on the field in `@kidgate/schema/aiApps`.
    minAge: Number.isFinite(minAge) && minAge > 0 ? Math.round(minAge) : 0,
    model: typeof data.model === 'string' ? data.model : '',
    classifiedAt: typeof data.classifiedAt === 'string' ? data.classifiedAt : '',
    // Absent on every row written before the taxonomy grew. Carried through
    // for completeness only — a client renders whatever category it can read
    // and never waits for the sweep to catch up, which would leave a chip
    // blank for a night on an app that already has a perfectly good label.
    taxonomyVersion:
      Number.isFinite(taxonomyVersion) && taxonomyVersion > 0
        ? Math.round(taxonomyVersion)
        : 1,
  };
}

/**
 * Classifications for a list of app identifiers.
 *
 * Every identifier asked for appears in the result, mapping to null when
 * nothing is stored for it — which is the ordinary case for an app the nightly
 * job has not reached yet, and which a renderer shows as no chip rather than as
 * an error. A caller must never infer "unclassified means harmless".
 *
 * Misses are cached as null too. An app the job has not classified will still
 * be missing on the next screen this session, and re-reading it per render is
 * how a list of forty apps becomes forty reads per scroll.
 */
export async function getAppCategories(
  firestore: FirestorePort,
  packageNames: readonly string[],
): Promise<Map<string, AppCategoryEntry | null>> {
  const wanted = [
    ...new Set(packageNames.filter(name => typeof name === 'string' && name)),
  ];
  const missing = wanted.filter(name => !memo.has(name));

  await Promise.all(
    missing.map(async name => {
      try {
        const snapshot = await firestore.getDoc(`${APP_CATEGORIES_COLLECTION}/${name}`);
        memo.set(name, mapEntry(snapshot));
      } catch {
        // A dictionary lookup failing is not worth failing a usage screen for.
        // Not memoised: unlike a genuine miss, this is worth retrying.
      }
    }),
  );

  return new Map(wanted.map(name => [name, memo.get(name) ?? null]));
}
