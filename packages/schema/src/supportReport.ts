/**
 * A problem report a parent files from Settings, and the optional screenshots
 * attached to it.
 *
 * The attachment limits live here rather than in the app because three places
 * have to agree on them: the picker that resizes, the repository that
 * validates, and `storage.rules` — which is the only one of the three a client
 * cannot bypass.
 */

import type { AppLanguage } from './language';

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

/**
 * Lifecycle of a filed report, as the operator moves it along.
 *
 * Absent on every report filed before this field existed and on any report a
 * client has read but an operator has not yet touched — both read as
 * `'pending'`, which is the correct meaning for "no status written yet".
 */
export type SupportReportStatus = 'pending' | 'in_review' | 'resolved';

export interface SupportReport {
  id: string;
  message: string;
  accountId: string;
  email: string | null;
  deviceName: string | null;
  familyName: string | null;
  familyId: string | null;
  /**
   * Where the report was filed from — not which platform the bug is about.
   *
   * `'web'` since 2026-09-15, when `apps/dashboard` gained the same form: a
   * parent hitting a dashboard bug had nowhere to say so, and filing it as
   * `'ios'` because that is the phone they also own would point the operator
   * at the wrong build. Deliberately NOT `DevicePlatform` — that enum is about
   * a child device's operating system, and a browser is not one of those.
   *
   * `functions/admin/support.js` passes the field straight through, so the
   * operator console renders the new value with no change.
   */
  platform: 'ios' | 'android' | 'web';
  appVersion: string;
  /**
   * The build behind `appVersion` — `versionCode` on Android, `CFBundleVersion`
   * on iOS, one number for both from the root `package.json`.
   *
   * Recorded because `appVersion` alone does not identify a build: an OTA
   * release ships a new JS bundle under the **same** marketing version
   * (`.claude/rules/shipping.md`), so two phones reporting `1.4.0` can be
   * running different code. Absent on every report filed before this field.
   */
  appVersionCode?: number;
  /**
   * The language the app was rendering when the report was filed — resolved,
   * so `'system'` never lands here.
   *
   * The operator has to answer in it, and the reply push is rendered per
   * language server-side (`functions/lib/i18n.js`). Absent on every report
   * filed before this field, and on any client that does not carry a language.
   */
  language?: AppLanguage;
  /** Absent on every report filed before attachments existed. */
  attachments?: SupportReportAttachment[];
  createdAt: string;
  /** Absent means `'pending'` — see `SupportReportStatus`. */
  status?: SupportReportStatus;
  /**
   * The operator's LATEST reply, and the whole of the conversation on every
   * report filed before `messages` existed.
   *
   * Kept written alongside `messages` rather than retired: `functions/admin`
   * reads it, the reply push is built from it, and a console that only knows
   * this field must keep working. `foldSupportThread` in
   * `@kidgate/core/domain/supportThread` is what turns either shape into one
   * list — never read this field directly to render a thread.
   *
   * Never written by a client: `firestore.rules` refuses client `update` on
   * this document the same way it always has.
   */
  response?: string;
  /** Set whenever `status` or `response` last changed. */
  respondedAt?: string;
  /**
   * The conversation after the opening report, oldest first.
   *
   * The opening report stays in `message` and is NOT duplicated here — it is
   * the one field every report has had since the beginning, and copying it
   * into the array would give two sources for the same sentence.
   * `foldSupportThread` puts it back at the head so a screen renders one list.
   *
   * Absent on every report filed before 2026-09-17, which is why absent has to
   * read as "the conversation is whatever `response` says", not as "empty".
   *
   * **Appended only through `appendSupportMessage` or the admin endpoint**,
   * both Admin SDK. A parent cannot reach it: `allow update: if false` still
   * holds, and it holds for this array too — a client able to write here could
   * edit what the operator said to them.
   */
  messages?: SupportMessage[];
}

/** Who wrote a line in a support thread. */
export type SupportMessageAuthor = 'parent' | 'operator';

export interface SupportMessage {
  /** Unique within the report. Generated server-side. */
  id: string;
  from: SupportMessageAuthor;
  body: string;
  /** ISO 8601, server-stamped — a client clock decides nothing here. */
  at: string;
}

/**
 * The ceiling on one thread, counted over `messages` alone.
 *
 * A support ticket that has run past this is a conversation that belongs
 * somewhere else, and an unbounded array in a document read on every list
 * render is the shape that quietly stops loading. The server refuses the
 * append rather than trimming: dropping the oldest line silently would delete
 * something a customer can quote back.
 */
export const SUPPORT_THREAD_MAX_MESSAGES = 50;

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
