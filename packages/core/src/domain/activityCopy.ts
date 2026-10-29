/**
 * Activity feed copy, resolved for whichever language the reader is in.
 *
 * Lifted from `apps/mobile/src/utils/activityCopy.ts`. The feed is stored as
 * keys + params (see `repositories/activity` — rows carry `titleKey`, never a
 * rendered sentence) and this is the one place those keys become copy, on
 * every surface that shows the feed.
 *
 * `translate` is a parameter: this package holds no current language.
 */

import type { TranslationParams } from '@kidgate/i18n/types';
import type { Activity } from '@kidgate/schema/activity';
import { resolveTamperActivityCopy } from './tamperAlerts';

export type ActivityCopy = {
  title: string;
  description?: string | undefined;
};

export type ResolveActivityCopyOptions = {
  /** Live child device name — overrides baked deviceName/childName params. */
  deviceName?: string | null;
  /** Live parent/actor name — overrides baked actorName param. */
  actorName?: string | null;
  /**
   * The child the device counts for. Names the subject of the rows in
   * `CHILD_SUBJECT_KEYS`, whose `{{deviceName}}` is a person, not a machine.
   */
  childName?: string | null;
};

/**
 * Rows whose `{{deviceName}}` is who did or was asked something — "Mia
 * confirmed they are safe", not "iPhone 17 Pro …" (2026-10-29). The pushes
 * already say the child (`functions/lib/childName.js`); the feed said the
 * machine. A row about a device ("stays blocked on {{deviceName}}") stays off
 * this list.
 */
const CHILD_SUBJECT_KEYS: ReadonlySet<string> = new Set([
  'timeRequest.timeRequestSentDescription',
  'timeRequest.timeRequestApprovedDescription',
  'timeRequest.timeRequestDeniedDescription',
  'timeRequest.bonusGrantedDescription',
  'rewardTask.taskClaimedDescription',
  'rewardTask.taskApprovedDescription',
  'rewardTask.taskRejectedDescription',
  'checkIn.checkInRequestedDescription',
  'checkIn.checkInRequestedDescriptionLocation',
  'checkIn.checkInConfirmedDescription',
  'sos.sosAlertSentDescription',
  'webFilter.siteRequestReceivedDescription',
]);

/** Older lock events wrote devices.* — remap to family.* */
function normalizeActivityKey(key: string): string {
  if (key.startsWith('devices.')) {
    return `family.${key.slice('devices.'.length)}`;
  }
  return key;
}

/**
 * Prefer live names over params baked at write time so renames stay correct.
 */
function resolveActivityParams(
  params: Activity['params'],
  options?: ResolveActivityCopyOptions,
  childSubject = false,
): TranslationParams | undefined {
  const childName = options?.childName?.trim();
  const deviceName =
    (childSubject ? childName : undefined) || options?.deviceName?.trim();
  const actorName = options?.actorName?.trim();
  if (!deviceName && !actorName && !params) {
    return undefined;
  }

  return {
    ...(params ?? {}),
    ...(deviceName
      ? {
          deviceName,
          childName: childName || deviceName,
        }
      : {}),
    ...(actorName ? { actorName } : {}),
  };
}

/**
 * Resolve activity title/description for the current UI language.
 * Prefer stored i18n keys so language switches stay consistent.
 */
export function resolveActivityCopy(
  activity: Pick<
    Activity,
    'title' | 'description' | 'titleKey' | 'descriptionKey' | 'params' | 'type'
  >,
  translate: (key: string, params?: TranslationParams) => string,
  options?: ResolveActivityCopyOptions,
): ActivityCopy {
  if (activity.type === 'tamper') {
    const tamper = resolveTamperActivityCopy(activity, translate);
    return {
      title: tamper.title,
      description: tamper.description,
    };
  }

  if (activity.titleKey) {
    const titleKey = normalizeActivityKey(activity.titleKey);
    const descriptionKey = activity.descriptionKey
      ? normalizeActivityKey(activity.descriptionKey)
      : undefined;
    const params = resolveActivityParams(
      activity.params,
      options,
      CHILD_SUBJECT_KEYS.has(descriptionKey ?? ''),
    );
    return {
      title: translate(titleKey, params),
      description: descriptionKey ? translate(descriptionKey, params) : undefined,
    };
  }

  // Legacy row: text frozen in whatever language was active when it was
  // written. Empty rather than undefined so callers render a blank line
  // instead of "undefined" — a row this old carries no key to translate.
  return {
    title: activity.title ?? '',
    description: activity.description,
  };
}
