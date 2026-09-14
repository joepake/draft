import type { DeviceLocation } from './deviceControls';

export type SosAlertStatus = 'active' | 'acknowledged';

export type SosAlertParams = Record<string, string | number>;

export interface SosAlert {
  id: string;
  deviceId: string;
  /**
   * The PERSON who raised it, stamped server-side by `notifyParentSosAlert`
   * from the device's assignment at the moment of the alert. Absent on rows
   * older than 2026-09-11 and on a device that had no child. A row carrying
   * this survives the device's unpair: `leaveChildDevice` skips stamped rows,
   * and the child feed joins by it as well as by `deviceId`.
   */
  childId?: string;
  /** May be empty when the device never reported one; the UI supplies a fallback. */
  deviceName: string;
  status: SosAlertStatus;
  /**
   * i18n key, rendered at display time. The correct field to write.
   *
   * Optional only for alerts written before keys existed.
   */
  messageKey?: string;
  /**
   * Literal text frozen in the language active when the alert was raised.
   *
   * Still written alongside `messageKey` so an older installed app — which
   * reads only this field — keeps showing something. Readers prefer
   * `messageKey`; nothing new should depend on this.
   */
  message?: string;
  params?: SosAlertParams;
  location?: DeviceLocation;
  photoUrl?: string;
  /** Firebase Storage object path — used to refresh download URL if Image fails. */
  photoPath?: string;
  createdAt: string;
  acknowledgedAt?: string;
  acknowledgedByDeviceId?: string;
}
