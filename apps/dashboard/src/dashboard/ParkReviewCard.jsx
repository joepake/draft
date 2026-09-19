import Icon from '@kidgate/web-ui/Icon';
import {
  PARK_REVIEW_LABEL_KEYS,
  hasParkReviewRisk,
  parkReview,
} from '@kidgate/core/domain/parkReview';
import Card from './Card.jsx';
import { useActivityTranslate } from './activityCopy.js';
import { deviceIconName } from './deviceIcon.js';
import { getTrialEndsAt } from '../lib/trial.js';

/** The window this is worth saying in — the final day, as on the phone. */
const LAST_DAY_MS = 24 * 60 * 60 * 1000;

/**
 * The last chance to switch a protection on, before the trial ends and the
 * answer becomes permanent.
 *
 * The phone's `ParkReviewCard` on this surface, from the same fold
 * (`@kidgate/core/domain/parkReview`) and the same sentences — a parent answers
 * on whichever console they have open, and two of them describing one cliff
 * differently is what `.claude/rules/cross-platform.md` exists to catch.
 *
 * **It cannot wait for the park.** The server parks first and asks second:
 * `scheduled/trialLifecycle` calls `parkExcessDevices` at `trialEndsMs`, and
 * `ParkedDevicesCard` opens afterwards. The two are therefore mutually
 * exclusive — this one is the before, that one the after — which is why
 * `Dashboard.jsx` slots them through a single node.
 *
 * **Silent when this surface cannot say.** `getTrialEndsAt` answers null
 * without `VITE_TRIAL_DAYS`, and `lib/trial.js` exists to refuse a guess: a
 * wrong duration warns a family whose trial has weeks left, or misses the one
 * whose trial ends tonight. Null draws nothing, exactly as `PlanCard` keeps two
 * states rather than inventing four.
 *
 * Every sentence comes from the app pack through `appT` — the phone says all of
 * them already, and a `dash.*` twin is the same sentence in two packs with only
 * one of them edited next time (`.claude/rules/i18n.md`).
 */
export default function ParkReviewCard({ devices, trialStartedAt, onOpenDevice }) {
  const appT = useActivityTranslate();

  const endsAt = getTrialEndsAt(trialStartedAt);
  const msLeft = endsAt ? endsAt.getTime() - Date.now() : null;
  const isLastTrialDay = msLeft !== null && msLeft > 0 && msLeft <= LAST_DAY_MS;

  const review = parkReview(
    devices.map(device => ({
      deviceId: device.id,
      name: device.name ?? null,
      controls: device.controls,
    })),
  );

  if (!isLastTrialDay || !hasParkReviewRisk(review)) {
    return null;
  }

  return (
    <Card
      className="park-review"
      title={appT('family.parkReviewTitle')}
      subtitle={appT('family.parkReviewBody')}
    >
      <ul className="park-review-list">
        {review.rows
          .filter(row => row.lockedOffKeys.length > 0)
          .map(row => {
            const device = devices.find(other => other.id === row.deviceId);
            return (
              <li key={row.deviceId}>
                <button
                  type="button"
                  className="park-review-row"
                  onClick={() => onOpenDevice?.(row.deviceId)}
                >
                  <Icon name={deviceIconName(device ?? {})} size={16} />
                  <span>
                    <strong>{row.name}</strong>
                    {/*
                      The protections by the names their own screens use. The
                      keys are `PARK_REVIEW_LABEL_KEYS`, shared with the phone,
                      never a second set written for this card.
                    */}
                    <em>
                      {row.lockedOffKeys
                        .map(key => appT(PARK_REVIEW_LABEL_KEYS[key]))
                        .join(' · ')}
                    </em>
                  </span>
                  <Icon name="chevronRight" size={14} />
                </button>
              </li>
            );
          })}
      </ul>
    </Card>
  );
}
