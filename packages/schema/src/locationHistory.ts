import type { DeviceLocation } from './deviceControls';

export interface LocationHistoryEntry extends DeviceLocation {
  id: string;
}
