export const FirestorePaths = {
  users: 'users',
  parentDevices: 'parentDevices',
  familyMembers: 'members',
  children: 'children',
  leaderboards: 'leaderboards',
  /** Weekly screen-time standings, sibling of `leaderboards` — `screenTimeBoard.ts`. */
  screenTimeBoards: 'screenTimeBoards',
  childDevices: 'childDevices',
  activities: 'activities',
  timeRequests: 'timeRequests',
  /** A child asking for one website — `siteRequest.ts`, sibling of the above. */
  siteRequests: 'siteRequests',
  rewardTasks: 'rewardTasks',
  safetyCheckIns: 'safetyCheckIns',
  sosAlerts: 'sosAlerts',
  accountDeletionRequests: 'accountDeletionRequests',
  supportReports: 'supportReports',
  /**
   * Weekly reports. Not `supportReports` — that one is a bug report a parent
   * files, this one is what the digest job wrote about their week, and the two
   * sitting one line apart is exactly how a wrong constant gets picked.
   */
  familyReports: 'reports',
} as const;

export function userDoc(userId: string) {
  return `${FirestorePaths.users}/${userId}`;
}

export function familyMembersCollection(familyId: string) {
  return `${FirestorePaths.users}/${familyId}/${FirestorePaths.familyMembers}`;
}

export function familyMemberDoc(familyId: string, memberId: string) {
  return `${familyMembersCollection(familyId)}/${memberId}`;
}

/**
 * The people in the family. Sibling of `childDevices`, never nested inside it:
 * a child outlives any one device and can hold several at once.
 */
export function childrenCollection(familyId: string) {
  return `${FirestorePaths.users}/${familyId}/${FirestorePaths.children}`;
}

export function childDoc(familyId: string, childId: string) {
  return `${childrenCollection(familyId)}/${childId}`;
}

export function leaderboardsCollection(familyId: string) {
  return `${FirestorePaths.users}/${familyId}/${FirestorePaths.leaderboards}`;
}

/** `periodKey` is the document id, so one week cannot be written twice. */
export function leaderboardDoc(familyId: string, periodKey: string) {
  return `${leaderboardsCollection(familyId)}/${periodKey}`;
}

export function screenTimeBoardsCollection(familyId: string) {
  return `${FirestorePaths.users}/${familyId}/${FirestorePaths.screenTimeBoards}`;
}

/** Same week key as the star chart, so the two documents describe one week. */
export function screenTimeBoardDoc(familyId: string, periodKey: string) {
  return `${screenTimeBoardsCollection(familyId)}/${periodKey}`;
}

export function childDeviceDoc(userId: string, deviceId: string) {
  return `${FirestorePaths.users}/${userId}/${FirestorePaths.childDevices}/${deviceId}`;
}

export function parentDevicesCollection(userId: string) {
  return `${FirestorePaths.users}/${userId}/${FirestorePaths.parentDevices}`;
}

export function childDevicesCollection(userId: string) {
  return `${FirestorePaths.users}/${userId}/${FirestorePaths.childDevices}`;
}

export function activitiesCollection(userId: string) {
  return `${FirestorePaths.users}/${userId}/${FirestorePaths.activities}`;
}

export function timeRequestsCollection(userId: string) {
  return `${FirestorePaths.users}/${userId}/${FirestorePaths.timeRequests}`;
}

export function siteRequestsCollection(userId: string) {
  return `${FirestorePaths.users}/${userId}/${FirestorePaths.siteRequests}`;
}

export function rewardTasksCollection(userId: string) {
  return `${FirestorePaths.users}/${userId}/${FirestorePaths.rewardTasks}`;
}

export function safetyCheckInsCollection(userId: string) {
  return `${FirestorePaths.users}/${userId}/${FirestorePaths.safetyCheckIns}`;
}

export function safetyCheckInDoc(userId: string, checkInId: string) {
  return `${safetyCheckInsCollection(userId)}/${checkInId}`;
}

export function sosAlertsCollection(userId: string) {
  return `${FirestorePaths.users}/${userId}/${FirestorePaths.sosAlerts}`;
}

export function sosAlertDoc(userId: string, alertId: string) {
  return `${sosAlertsCollection(userId)}/${alertId}`;
}

export function locationHistoryCollection(userId: string, deviceId: string) {
  return `${childDeviceDoc(userId, deviceId)}/locationHistory`;
}

export function usageDaysCollection(userId: string, deviceId: string) {
  return `${childDeviceDoc(userId, deviceId)}/usageDays`;
}

export function webHistoryCollection(userId: string, deviceId: string) {
  return `${childDeviceDoc(userId, deviceId)}/webHistory`;
}

/**
 * Page loads per hour, one document per local date.
 *
 * Beside `webHistory` rather than in it: that collection is one document per
 * domain per day and a parent surface lists it, so a day-level record there
 * would render as a site nobody visited.
 */
export function webActivityHoursCollection(userId: string, deviceId: string) {
  return `${childDeviceDoc(userId, deviceId)}/webActivityHours`;
}

/**
 * Videos the child watched, one document per video per local day
 * (`videoActivity.ts`). A sibling of `webHistory` — `apps/extension` fills it
 * from the committed YouTube URL, the Android agent from the media session —
 * so the same cascade-and-retention rules apply, and this helper is here for
 * the same reason `webHistoryCollection` is: `deviceCascade.test.ts` reads
 * this file to find every subcollection an unpair must delete.
 */
export function videoHistoryCollection(userId: string, deviceId: string) {
  return `${childDeviceDoc(userId, deviceId)}/videoHistory`;
}

/**
 * What is installed on the device, one document (`appInventory.ts`).
 *
 * Declared here rather than beside its own shape because
 * `__tests__/deviceCascade.test.ts` reads **this file** to find every
 * subcollection hanging off a child device — a helper written anywhere else is
 * a subcollection the unpair cascade can silently forget, which is exactly the
 * bug that test exists to end. Adding one here costs a `deleteForDevice` and a
 * line in that test's table.
 */
export function appInventoryCollection(userId: string, deviceId: string) {
  return `${childDeviceDoc(userId, deviceId)}/appInventory`;
}

export function accountDeletionRequestsCollection(userId: string) {
  return `${FirestorePaths.users}/${userId}/${FirestorePaths.accountDeletionRequests}`;
}

export function accountDeletionRequestDoc(userId: string, requestId: string) {
  return `${accountDeletionRequestsCollection(userId)}/${requestId}`;
}

export function supportReportsCollection(userId: string) {
  return `${FirestorePaths.users}/${userId}/${FirestorePaths.supportReports}`;
}

export function supportReportDoc(userId: string, reportId: string) {
  return `${supportReportsCollection(userId)}/${reportId}`;
}

/**
 * Weekly reports, one document per ISO week, id `weekly_2026-W33`.
 *
 * Family-level rather than per-device: the digest is written about the family's
 * week, and `functions/lib/familyStats.js` already sums every device into it.
 */
export function familyReportsCollection(userId: string) {
  return `${FirestorePaths.users}/${userId}/${FirestorePaths.familyReports}`;
}

export function familyReportDoc(userId: string, reportId: string) {
  return `${familyReportsCollection(userId)}/${reportId}`;
}

export function parentDeviceDoc(userId: string, deviceId: string) {
  return `${parentDevicesCollection(userId)}/${deviceId}`;
}
