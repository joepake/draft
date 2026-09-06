export type ActivityType =
  | 'app_opened'
  | 'app_blocked'
  | 'app_installed'
  | 'app_removed'
  | 'place_enter'
  | 'place_exit'
  | 'tamper'
  | 'device_locked'
  | 'device_unlocked'
  | 'screen_time'
  /** A parent answered a child's request for one website. `siteRequest.ts`. */
  | 'web_filter'
  /**
   * A concerning keyword was seen in a message notification on the child's
   * device. Params carry `category` (`MessageAlertCategory`), `term` (the word
   * that fired — never the child's message), `appName`, and since 2026-09-03
   * `termGloss_<lang>` — the term's meaning in each parent language that has
   * one (`termGlossParamKey` in `messageAlert.ts`). The scan and the
   * Bark-shaped design live in `@kidgate/core/domain/messageKeywords`; the
   * device never uploads message content.
   */
  | 'message_alert'
  /**
   * A keyword fired and the AI tier judged it harmless. Same params as
   * `message_alert` minus nothing — `category`, `term`, `appName` — and, like
   * it, **never the child's message**.
   *
   * It exists because the alternative was silence. A dismissal used to be a
   * bare `continue` in `classifyChildMessages`, so a family that consented to
   * having their child's messages read by a model had no way to see what the
   * model decided, and nobody could tell an accurate dismissal from a missed
   * warning. It is also the only instrument that shows a keyword misfiring in
   * the field: `kẹo` (Vietnamese for sweets) sat in the drugs list firing on
   * every child who mentioned candy, and nothing anywhere recorded it.
   *
   * **Not an alert, and must never be treated as one.** No push
   * (`triggers/appAlerts.js` keys on `message_alert` alone), and parent
   * surfaces render it apart from the alert feed — mixed in, the noise it
   * exists to expose would destroy the one screen that has to stay
   * believable.
   */
  | 'message_checked'
  /**
   * A call to or from a number the child's device could not name, inside the
   * window a parent marked as night. Params are `CallAlertParams` in
   * `callAlert.ts`: `direction`, `party`, `localTime`, and where they are
   * knowable `durationSeconds` and `outcome`.
   *
   * **There is no number and no name on this row, and no field to put one in.**
   * It reports that an unknown party was on the line at an hour a parent cares
   * about, which is the whole of what the feature promises. The gate record is
   * `docs/FEASIBILITY.md`, "Call monitoring"; the decision against an actual
   * call log is `docs/TODO.md` §E and still stands.
   */
  | 'call_alert'
  | 'emergency';

/**
 * Every activity type, as a runtime list — the one a reader may iterate.
 *
 * It exists because the union alone could not stop the defect it now guards.
 * `repositories/activity` kept a hand-written `Set` of the readable types,
 * `message_alert` was never added to it, and `parseActivityType` turns
 * anything unlisted into `screen_time`. So every message alert ever written
 * was read back as a screen-time row: the Message Alerts screen filtered for
 * `message_alert`, matched nothing, and sat empty on **both** parent surfaces
 * while the rows were perfectly correct in Firestore. Nothing failed —
 * typecheck, lint and every test stayed green for as long as it shipped.
 *
 * **Derive from this; never hand-copy it.** The two assertions below make the
 * list and the union fail to compile the moment they disagree, in either
 * direction — `satisfies` catches an entry that is not a real type, and
 * `MissingActivityType` catches a type nobody added here, which is the half
 * that actually bit.
 */
export const ACTIVITY_TYPES = [
  'app_opened',
  'app_blocked',
  'app_installed',
  'app_removed',
  'place_enter',
  'place_exit',
  'tamper',
  'device_locked',
  'device_unlocked',
  'screen_time',
  'web_filter',
  'message_alert',
  'message_checked',
  'call_alert',
  'emergency',
] as const satisfies ReadonlyArray<ActivityType>;

/** Empty when the list is complete. A member here is a compile error below. */
type MissingActivityType = Exclude<ActivityType, (typeof ACTIVITY_TYPES)[number]>;
const _activityTypesAreExhaustive: MissingActivityType extends never ? true : never =
  true;
void _activityTypesAreExhaustive;

export type ActivityParams = Record<string, string | number>;

export interface Activity {
  id: string;
  deviceId: string;
  type: ActivityType;
  /**
   * i18n key, rendered at display time. The correct field to write.
   *
   * Optional only because documents written before keys existed do not have
   * one — every new activity sets it.
   */
  titleKey?: string;
  descriptionKey?: string;
  /**
   * Literal text frozen in whatever language was active when the row was
   * written. Present only on legacy documents; never write it.
   *
   * The renderer prefers `titleKey` and falls back to this, so an old row still
   * displays — in its original language, which is the honest outcome for text
   * whose meaning was never captured.
   */
  title?: string;
  description?: string;
  params?: ActivityParams;
  createdAt: string;
  /** Auth uid of the parent who performed the action (owner or joined parent). */
  actorUserId?: string;
  /** Parent device id used for the action — resolves to a live device name for owners. */
  actorParentDeviceId?: string;
}
