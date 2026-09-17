import type {
  SupportMessage,
  SupportReport,
  SupportReportStatus,
} from '@kidgate/schema/supportReport';
import { SUPPORT_THREAD_MAX_MESSAGES } from '@kidgate/schema/supportReport';

/**
 * One support ticket as a conversation, whichever shape it is stored in.
 *
 * Three surfaces render this — `apps/dashboard`, `apps/mobile` and the
 * operator console — and a report can be in either of two shapes, so the fold
 * lives here rather than three times over:
 *
 * - **Filed before 2026-09-17**: `message` plus at most one `response`, and no
 *   `messages` array at all. Absent must read as "whatever `response` says",
 *   never as an empty conversation, or every ticket answered before that date
 *   loses the answer on screen.
 * - **Filed since**: `message`, then `messages` oldest first, with `response`
 *   still carrying the operator's latest line for the admin console and the
 *   reply push.
 *
 * The opening report is never stored in `messages` — it is `message`, the one
 * field every report has always had — and this puts it back at the head so a
 * screen renders one list and not a paragraph followed by a thread.
 */
export function foldSupportThread(report: SupportReport): SupportMessage[] {
  const out: SupportMessage[] = [];

  const opening = (report.message ?? '').trim();
  if (opening) {
    out.push({
      id: `${report.id}:opening`,
      from: 'parent',
      body: opening,
      at: report.createdAt,
    });
  }

  const stored = Array.isArray(report.messages) ? report.messages : [];
  if (stored.length > 0) {
    out.push(...stored);
    return out;
  }

  /*
   * The legacy shape. Only reached when nothing has been appended, so it can
   * never double up with a real thread — a report that has one also carries
   * the operator's line inside it.
   */
  const legacy = (report.response ?? '').trim();
  if (legacy) {
    out.push({
      id: `${report.id}:response`,
      from: 'operator',
      body: legacy,
      /* `respondedAt` is set whenever `status` or `response` changed, so it is
         the closest thing to when this was said. A report with a response and
         no stamp predates that field; the opening time is wrong but ordered
         correctly, which is what the list needs. */
      at: report.respondedAt ?? report.createdAt,
    });
  }

  return out;
}

/**
 * Whether the parent may add another line.
 *
 * Two different refusals, and they are not the same sentence on screen: a
 * resolved ticket is finished, and a full one is not.
 */
export type SupportReplyBlock = null | 'resolved' | 'full';

export function supportReplyBlock(report: SupportReport): SupportReplyBlock {
  /* Absent status means `'pending'` — `SupportReportStatus` says so, and a
     report nobody has touched is the most repliable one there is. */
  const status: SupportReportStatus = report.status ?? 'pending';
  if (status === 'resolved') {
    return 'resolved';
  }
  const stored = Array.isArray(report.messages) ? report.messages : [];
  if (stored.length >= SUPPORT_THREAD_MAX_MESSAGES) {
    return 'full';
  }
  return null;
}

/** `null` block means the box is open. Sugar, so callers read as a sentence. */
export function canReplyToSupportReport(report: SupportReport): boolean {
  return supportReplyBlock(report) === null;
}
