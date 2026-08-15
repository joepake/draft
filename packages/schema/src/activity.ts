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
  | 'emergency';

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
