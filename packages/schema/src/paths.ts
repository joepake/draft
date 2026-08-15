export const FirestorePaths = {
  users: 'users',
  parentDevices: 'parentDevices',
  familyMembers: 'members',
  children: 'children',
  leaderboards: 'leaderboards',
  childDevices: 'childDevices',
  activities: 'activities',
  timeRequests: 'timeRequests',
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

export function rewardTasksCollection(userId: string) {
  return `${FirestorePaths.users}/${userId}/${FirestorePaths.rewardTasks}`;
}

export function safetyCheckInsCollection(userId: string) {
  return `${FirestorePaths.users}/${userId}/${FirestorePaths.safetyCheckIns}`;
}

export function sosAlertsCollection(userId: string) {
  return `${FirestorePaths.users}/${userId}/${FirestorePaths.sosAlerts}`;
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

export function accountDeletionRequestsCollection(userId: string) {
  return `${FirestorePaths.users}/${userId}/${FirestorePaths.accountDeletionRequests}`;
}

export function supportReportsCollection(userId: string) {
  return `${FirestorePaths.users}/${userId}/${FirestorePaths.supportReports}`;
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

export function parentDeviceDoc(userId: string, deviceId: string) {
  return `${parentDevicesCollection(userId)}/${deviceId}`;
}
