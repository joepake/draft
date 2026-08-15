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
};

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
): TranslationParams | undefined {
  const deviceName = options?.deviceName?.trim();
  const actorName = options?.actorName?.trim();
  if (!deviceName && !actorName && !params) {
    return undefined;
  }

  return {
    ...(params ?? {}),
    ...(deviceName
      ? {
          deviceName,
          childName: deviceName,
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

  const params = resolveActivityParams(activity.params, options);

  if (activity.titleKey) {
    const titleKey = normalizeActivityKey(activity.titleKey);
    const descriptionKey = activity.descriptionKey
      ? normalizeActivityKey(activity.descriptionKey)
      : undefined;
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
