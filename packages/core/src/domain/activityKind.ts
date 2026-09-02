/**
 * What a feed row actually *is*, as opposed to what `type` it was stored under.
 *
 * `ActivityType` is not a faithful description of a row, for one structural
 * reason: `parseActivityType` (`repositories/activity`) answers `screen_time`
 * for any value it does not recognise, so that member is both a real event and
 * the catch-all. Four unrelated features write through it — safety check-ins
 * (`safetyCheckIn.ts`), a location refresh (`LocationScreen`,
 * `ChildLocationScreen`), time requests (`functions/http/controls.js`) and
 * reward tasks (`functions/http/rewardTasks.js`) — and **not one of them is
 * about screen time**. A parent reading the feed saw "Location refresh
 * requested" wearing a clock and a "Screen Time" badge.
 *
 * `titleKey`'s namespace is the only field that still says which feature wrote
 * the row, so the demux belongs wherever a row is turned into a glyph, a
 * label, or a destination. It lives here rather than in a screen because both
 * parent surfaces render this feed: `apps/mobile`'s Activities tab and
 * `apps/dashboard`'s "Recent activity" card. `apps/mobile` had already grown
 * half of it inside `getActivityRoute` and never gave the same treatment to
 * the icon beside it — one file disagreeing with itself is what this module
 * exists to stop.
 *
 * The kind is deliberately *not* an icon name. Each surface owns its own icon
 * set and its own copy; what they have to agree on is which feature a row
 * belongs to.
 */

import type { Activity, ActivityType } from '@kidgate/schema/activity';

/**
 * `ActivityType` with the `screen_time` bucket split into the features that
 * actually write it, plus a split of `message_alert` by direction.
 *
 * `screen_time` survives as a member: a row carrying no recognised `titleKey`
 * cannot be told apart from a legacy row that genuinely was about usage, and
 * inventing a verdict there would trade one wrong label for another.
 */
export type ActivityKind =
  | ActivityType
  | 'check_in'
  | 'location_request'
  | 'time_request'
  | 'reward_task'
  | 'search_alert';

/**
 * Which feature owns each namespace inside the `screen_time` bucket. Prefixes,
 * not whole keys, so a feature adding a fifth verb ("check-in declined") is
 * covered the day it is written rather than the day someone remembers this
 * table.
 */
const SCREEN_TIME_NAMESPACES: [prefix: string, kind: ActivityKind][] = [
  ['checkIn.', 'check_in'],
  ['location.', 'location_request'],
  ['timeRequest.', 'time_request'],
  ['rewardTask.', 'reward_task'],
];

/**
 * Written by `functions/http/packageActivity.js` when the flagged text came
 * from a search box rather than a message. Same `type`, and the copy says so
 * ("Concerning search"), so only the badge beside it was still claiming
 * somebody had sent a message.
 */
const SEARCH_ALERT_TITLE_KEY = 'activities.messageAlertTitleSearch';

/**
 * An emergency row is recognised by key as well as by type, because the SOS
 * writers pre-date the `emergency` member.
 *
 * Bounded to the two namespaces that exist (`sos.*` from the seed and the push
 * path, `activities.sosEscape*` from `domain/sosEscapeActivity`) rather than
 * the substring test this replaces: `titleKey.includes('sos')` would fire on
 * any future key with those three letters anywhere in it, and a row wrongly
 * promoted to Emergency is the most alarming mistake this feed can make.
 */
function isEmergencyKey(titleKey: string): boolean {
  return titleKey.startsWith('sos.') || titleKey.startsWith('activities.sosEscape');
}

/**
 * The feature a row belongs to — what its icon, badge and destination should
 * all be derived from.
 */
export function resolveActivityKind(
  activity: Pick<Activity, 'type' | 'titleKey' | 'title'>,
): ActivityKind {
  if (
    activity.type === 'emergency' ||
    (activity.titleKey ? isEmergencyKey(activity.titleKey) : false) ||
    // Legacy rows carry a frozen sentence and no key at all.
    Boolean(activity.title?.toLowerCase().includes('sos'))
  ) {
    return 'emergency';
  }

  if (
    activity.type === 'message_alert' &&
    activity.titleKey === SEARCH_ALERT_TITLE_KEY
  ) {
    return 'search_alert';
  }

  if (activity.type === 'screen_time' && activity.titleKey) {
    const titleKey = activity.titleKey;
    const match = SCREEN_TIME_NAMESPACES.find(([prefix]) =>
      titleKey.startsWith(prefix),
    );
    if (match) {
      return match[1];
    }
  }

  return activity.type;
}
