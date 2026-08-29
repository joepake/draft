/**
 * A problem report a parent files from Settings, and the optional screenshots
 * attached to it.
 *
 * The attachment limits live here rather than in the app because three places
 * have to agree on them: the picker that resizes, the repository that
 * validates, and `storage.rules` — which is the only one of the three a client
 * cannot bypass.
 */

/** Long enough for a real problem report; short enough not to be a payload. */
export const SUPPORT_REPORT_MAX_MESSAGE_LENGTH = 2000;

/** Optional throughout. A report with no screenshot is still a report. */
export const SUPPORT_REPORT_MAX_ATTACHMENTS = 5;

/**
 * Post-resize ceiling. Checked on the client so a parent is told which picture
 * was refused, and again in `storage.rules` because the client's answer is not
 * evidence.
 */
export const SUPPORT_REPORT_MAX_ATTACHMENT_BYTES = 1024 * 1024;

/**
 * Longest edge the picker resizes down to before the size is measured. A
 * screenshot or a phone photo re-encoded at this edge lands a few hundred KB
 * under the ceiling; the handful that do not are refused rather than retried,
 * because the resize happens inside the native picker at pick time and there
 * is no second pass without adding an image-processing dependency.
 */
export const SUPPORT_REPORT_ATTACHMENT_MAX_EDGE = 1600;

/** JPEG quality for that re-encode. */
export const SUPPORT_REPORT_ATTACHMENT_QUALITY = 0.7;

/**
 * Always JPEG — not WebP, and not the source format.
 *
 * iOS ships no WebP *encoder* (ImageIO gained decode in iOS 14 and nothing
 * else), and React Native's `Image` on iOS cannot display one either, so a
 * WebP attachment would be unreadable on the platform the operator is most
 * likely to open it from. Android would manage both halves; iOS is the half
 * that decides. This is the same trap `captureSelfie.ts` already steers around
 * with `assetRepresentationMode: 'compatible'` for HEIC.
 */
export const SUPPORT_REPORT_ATTACHMENT_CONTENT_TYPE = 'image/jpeg';
export const SUPPORT_REPORT_ATTACHMENT_EXTENSION = 'jpg';

export interface SupportReportAttachment {
  /**
   * Firebase Storage object path — and deliberately not a download URL.
   *
   * Nobody with a client reads these back: `firestore.rules` refuses `read` on
   * the report itself and `storage.rules` refuses `read` on the object, so the
   * only reader is the operator through the Admin SDK, which needs a path and
   * not a token. Storing the URL would have put a permanent public link to a
   * parent's screenshot in a document, bought nothing, and cost a
   * `getDownloadURL()` round trip per image on the phone.
   */
  storagePath: string;
  /** Size after the client resize. Never above SUPPORT_REPORT_MAX_ATTACHMENT_BYTES. */
  bytes: number;
  width: number;
  height: number;
}

export interface SupportReport {
  id: string;
  message: string;
  accountId: string;
  email: string | null;
  deviceName: string | null;
  familyName: string | null;
  familyId: string | null;
  platform: 'ios' | 'android';
  appVersion: string;
  /** Absent on every report filed before attachments existed. */
  attachments?: SupportReportAttachment[];
  createdAt: string;
}

/**
 * `users/{userId}/supportReports/{reportId}/{index}.jpg`.
 *
 * Indexed rather than named after the picked file, for two reasons. A filename
 * chosen on the device is untrusted text landing on a public object path; and
 * `storage.rules` cannot count objects, so pinning the name to `0`–`4` is the
 * only way the five-attachment cap survives a client that ignores it.
 */
export function supportReportAttachmentPath(
  userId: string,
  reportId: string,
  index: number,
): string {
  return `users/${userId}/supportReports/${reportId}/${index}.${SUPPORT_REPORT_ATTACHMENT_EXTENSION}`;
}
