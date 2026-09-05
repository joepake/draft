import type { UsageAppBreakdown } from '@kidgate/schema/usageDay';
import {
  APP_LIMIT_MAX_MINUTES,
  APP_LIMIT_MIN_MINUTES,
} from '@kidgate/schema/deviceControls';

/**
 * Minutes already spent today on one limited app.
 *
 * The breakdown lives on `usageDays/{date}.topApps` — `reportChildUsage` never
 * writes it onto the device document — so callers read it from the usage-day
 * record, not from device controls.
 *
 * Moved out of `@kidgate/schema` during the migration: schema holds shapes and
 * contract constants, never behaviour.
 */
export function appLimitUsedMinutes(
  topApps: UsageAppBreakdown[] | undefined,
  appId: string,
): number {
  return topApps?.find(app => app.packageName === appId)?.minutes ?? 0;
}

/**
 * A parent's typed or dragged number, folded into what may be stored.
 *
 * Here rather than in each parent screen because there are two of them now —
 * `apps/mobile`'s `AppLimitsScreen` and `apps/dashboard` — and the bounds are a
 * platform contract, not a preference: `APP_LIMIT_MAX_MINUTES` exists because
 * iOS caps events per DeviceActivity activity, and a screen that clamped to its
 * own number would write a limit the device silently refuses to enforce.
 *
 * Rounds rather than truncates: a slider reporting 44.6 means 45 to the person
 * holding it.
 */
export function clampAppLimitMinutes(minutes: number): number {
  return Math.min(
    APP_LIMIT_MAX_MINUTES,
    Math.max(APP_LIMIT_MIN_MINUTES, Math.round(minutes)),
  );
}
