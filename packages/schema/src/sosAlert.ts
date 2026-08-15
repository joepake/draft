import type { DeviceLocation } from './deviceControls';

export type SosAlertStatus = 'active' | 'acknowledged';

export type SosAlertParams = Record<string, string | number>;

export interface SosAlert {
  id: string;
  deviceId: string;
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
