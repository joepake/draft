import type { AppBlockStrength } from '@kidgate/schema/capabilities';
import type { AppPolicy, BlockedAppsInfo } from '@kidgate/schema/policy';

/**
 * Legacy origin: `ControlsService.setAppLimits`, `presentAppPicker`,
 * `getBlockedAppsInfo`.
 */
export interface AppPolicyPort {
  /**
   * How hard this platform can actually block, exposed so the parent UI can say
   * so. Not a hidden implementation detail — see `AppBlockStrength`.
   */
  readonly strength: Exclude<AppBlockStrength, false>;

  apply(policy: AppPolicy): Promise<void>;
  getInfo(): Promise<BlockedAppsInfo>;

  /**
   * Open the platform's own app picker on the child device.
   *
   * iOS only, and it exists because FamilyControls will not let the app read
   * the installed app list — the child picks from Apple's UI and the app
   * receives opaque tokens. Absent everywhere the app can enumerate apps
   * itself.
   */
  presentPicker?(): Promise<BlockedAppsInfo>;
}
