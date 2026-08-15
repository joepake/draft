/**
 * The parent's document turned into what an `EnforcementHost` takes.
 *
 * `apps/mobile` does this in `services/childControlsEnforcement.ts` against the
 * native bridge; this is the platform-free half of the same translation, so
 * macOS and later Windows do not each grow their own reading of the same
 * document. The reading is where the subtle bugs live — which fields count as a
 * change, whether a bonus applies, what "app blocking on" actually requires —
 * and none of that is platform-specific.
 *
 * What is deliberately **not** here: the list of blocked apps. It is not in the
 * device document on any platform. `AppLimit` says why — the set of installed
 * apps can only be answered on the child device, so the child picks them once
 * behind the Parent PIN and the document carries only counts and labels
 * (`blockedAppCount`, `blockedAppPreview`). The caller passes the ids it holds
 * locally.
 */

import type { DeviceControls, ScheduleWindow } from '@kidgate/schema/deviceControls';
import { DEFAULT_DEVICE_CONTROLS } from '@kidgate/schema/deviceControls';
import type { AppPolicy, ShieldPolicy } from '@kidgate/schema/policy';
import type {
  AppRef,
  AppRefId,
  IsoDate,
  Millis,
  Minutes,
} from '@kidgate/schema/primitives';
import { effectiveDailyLimitMinutes, localIsoDate } from './dailyLimit';
import { normalizeScheduleDays } from './scheduleWindow';

export interface ChildPolicyInput {
  /** `isLocked` from the device document — the parent's immediate lock. */
  isLocked: boolean;
  controls: DeviceControls | undefined;
  /**
   * Apps this device blocks, from its own local store.
   *
   * Empty is a legitimate state and is not the same as "blocking is off":
   * a parent can switch app blocking on before the child has picked anything,
   * which is exactly what `blockedAppsConfigured` records.
   */
  blockedApps: readonly AppRef[];
  nowMs: Millis;
  localDateOf?: (ms: Millis) => IsoDate;
}

export interface ChildPolicy {
  shield: ShieldPolicy;
  windows: ScheduleWindow[];
  dailyLimitMinutes: Minutes | null;
  appPolicy: AppPolicy;
}

export function deriveChildPolicy(input: ChildPolicyInput): ChildPolicy {
  const controls = input.controls ?? DEFAULT_DEVICE_CONTROLS;
  const localDateOf = input.localDateOf ?? localIsoDate;

  const limits: Record<AppRefId, Minutes> = {};
  for (const limit of controls.appLimits ?? []) {
    // A zero or negative cap is not a cap. Storing it as one would block the
    // app outright the moment it opened, which is a different decision from the
    // one the parent made.
    if (limit.id && limit.minutes > 0) {
      limits[limit.id] = limit.minutes;
    }
  }

  return {
    shield: {
      lock: input.isLocked,
      scheduleActive: controls.scheduleEnabled,
      /*
       * Both halves are required. `appBlockingEnabled` is the parent's switch;
       * `blockedAppsConfigured` records whether the child ever picked anything.
       * On with nothing picked would otherwise read as "blocking is running"
       * on the parent's screen while nothing is blocked.
       */
      appBlockingEnabled: controls.appBlockingEnabled && controls.blockedAppsConfigured,
    },
    windows: controls.scheduleWindows,
    dailyLimitMinutes: effectiveDailyLimitMinutes(controls, input.nowMs, localDateOf),
    appPolicy: {
      blocked: [...input.blockedApps],
      limits,
    },
  };
}

/**
 * A string that changes exactly when the policy does.
 *
 * Used to skip re-applying an identical policy — on macOS that saves a burst of
 * IPC every time any unrelated field of the device document changes, and the
 * listener fires on all of them.
 *
 * Every field that enforcement reads is in here, and that completeness is the
 * whole point: `apps/mobile` learned it three times. A parent who edited only a
 * window's *days*, only a limit's *minutes*, or only the web-filter categories
 * left every other field identical, the key did not move, and the new policy was
 * saved to Firestore and never reached the device. Adding a field to
 * `ChildPolicy` means adding it here.
 */
export function childPolicyKey(policy: ChildPolicy): string {
  const windows = policy.windows
    .map(
      window =>
        `${window.start}-${window.end}@${(normalizeScheduleDays(window.days) ?? []).join('')}`,
    )
    .join(',');

  const limits = Object.entries(policy.appPolicy.limits)
    .map(([id, minutes]) => `${id}:${minutes}`)
    .sort()
    .join(',');

  const blocked = policy.appPolicy.blocked
    .map(app => app.id)
    .sort()
    .join(',');

  return [
    policy.shield.lock,
    policy.shield.scheduleActive,
    policy.shield.appBlockingEnabled,
    windows,
    policy.dailyLimitMinutes ?? 'none',
    limits,
    blocked,
  ].join('|');
}
