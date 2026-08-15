import type { DeviceLocation } from './deviceControls';

export type SafetyCheckInStatus = 'pending' | 'safe' | 'missed';
export type SafetyCheckInKind = 'safety' | 'repair';

export interface SafetyCheckIn {
  id: string;
  kind: SafetyCheckInKind;
  deviceId: string;
  deviceName: string;
  status: SafetyCheckInStatus;
  /** When true, child must attach a front-camera photo. */
  requirePhoto?: boolean;
  /** When true, child must attach a fresh location. */
  requireLocation?: boolean;
  message?: string;
  location?: DeviceLocation;
  photoUrl?: string;
  /**
   * Set when a required photo could not be captured (camera cancelled or
   * failed). The check-in still completes — a camera problem must never block
   * the safety signal — but the parent sees the photo was skipped instead of
   * silently getting less than they asked for.
   */
  photoSkipped?: boolean;
  createdAt: string;
  respondedAt?: string;
}
