import type { UsageAppBreakdown } from '@kidgate/schema/usageDay';

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
