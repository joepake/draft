import { useEffect, useState } from 'react';
import {
  activityTranslator,
  loadActivityFeed,
  peekActivityFeed,
} from '@kidgate/i18n/activityFeed';
import {
  EMPTY_ACTIVITY_ACTOR_NAMES,
  resolveActivityActorName,
} from '@kidgate/core/domain/activityActor';
import { resolveActivityCopy } from '@kidgate/core/domain/activityCopy';
import { useT } from '@kidgate/web-ui/useT';

/**
 * The feed's copy, in the language the dashboard is rendering.
 *
 * Feed rows carry keys, not sentences, and the keys are the *app* key space —
 * written by the child device and by Cloud Functions. `useT` reads the web key
 * space, which has none of them, so this is a second translator for one job
 * rather than a second copy of anything (`@kidgate/i18n/activityFeed` explains
 * the exception).
 *
 * Until the pack for a non-English language arrives the translator is English:
 * the alternative is a feed that renders blank for a beat on every load, and
 * unlike a legal document a row that settles into the reader's language a
 * moment later costs nothing.
 */
export function useActivityTranslate() {
  const { language } = useT();
  const [pack, setPack] = useState(() => peekActivityFeed(language));

  useEffect(() => {
    const cached = peekActivityFeed(language);
    if (cached) {
      setPack(cached);
      return undefined;
    }

    let cancelled = false;
    loadActivityFeed(language).then(loaded => {
      if (!cancelled) setPack(loaded);
    });
    return () => {
      cancelled = true;
    };
  }, [language]);

  return activityTranslator(pack ?? peekActivityFeed('en'), pack ? language : 'en');
}

/**
 * Older rows carry a rendered sentence and no key; newer ones carry only keys.
 * `resolveActivityCopy` handles both, and returns the key itself when nothing
 * resolves — which is the one case worth humanising, so a row written against
 * a key this build does not know still reads as words.
 */
function humanizeKey(key) {
  const tail = key.split('.').pop() || key;
  const spaced = tail.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/_/g, ' ');
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function readable(value, key) {
  if (!value) return value;
  return key && value === key ? humanizeKey(value) : value;
}

/**
 * `{ title, description }` for one activity row, ready to render.
 *
 * `actorNames` comes from `useFamilyData`. Without it the lock and unlock rows
 * render the literal `{{actorName}}`, which is what this dashboard shipped:
 * the row stores `actorUserId` / `actorParentDeviceId`, never a name, so the
 * parent who pressed the button is resolved here or not at all.
 */
export function activityCopy(activity, translate, deviceName, actorNames) {
  const copy = resolveActivityCopy(activity, translate, {
    deviceName,
    actorName: resolveActivityActorName(
      actorNames ?? EMPTY_ACTIVITY_ACTOR_NAMES,
      translate,
      activity.actorUserId,
      activity.actorParentDeviceId,
    ),
  });
  return {
    title: readable(copy.title, activity.titleKey),
    description: readable(copy.description, activity.descriptionKey),
  };
}
