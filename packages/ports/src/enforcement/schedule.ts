import type { MonitoringStatus } from '@kidgate/schema/capabilities';
import type { ScheduleWindow } from '@kidgate/schema/deviceControls';
import type { Minutes } from '@kidgate/schema/primitives';

/**
 * Legacy origin: `ControlsService.setSchedule`, `setDailyLimitMinutes`,
 * `applyDailyLimitFromPush`, `setChildMonitoringEnabled`, `getMonitoringStatus`.
 */
export interface SchedulePort {
  setWindows(windows: ScheduleWindow[]): Promise<void>;

  /** Null clears the limit. Zero means "blocked all day" and is not the same thing. */
  setDailyLimit(minutes: Minutes | null): Promise<void>;

  /** Master switch. Off means the device reports nothing and enforces nothing. */
  setMonitoringEnabled(enabled: boolean): Promise<void>;

  getStatus(): Promise<MonitoringStatus>;
}
