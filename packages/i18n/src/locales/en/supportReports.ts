/**
 * The history behind Settings → "Report a problem": every report a parent has
 * filed, its status, and the operator's reply once there is one.
 */
export const supportReports = {
  title: 'Support',
  subtitleCount: '{{count}} open',
  emptyTitle: 'No reports yet',
  emptyDescription:
    'When you report a problem, it shows up here so you can follow along.',
  emptyAction: 'Report a problem',
  newReportButton: 'New report',
  attachmentCount_one: '{{count}} screenshot attached',
  attachmentCount: '{{count}} screenshots attached',
  responseLabel: 'Reply from KidGate',
  replyLabel: 'Reply',
  replySend: 'Send',
  replyClosed: 'This report is closed.',
  waitingNote: 'We’ll reply here once someone has looked at this.',
  expandLabel: 'Show more',
  collapseLabel: 'Show less',
  expandHint: 'Show the full report',
  /**
   * Settings row badge: the operator answered and this device has not shown
   * it yet. The push is the primary channel; this is the way back in for a
   * parent who never granted notifications or swiped one away.
   */
  unreadBadge: 'New reply',
  status: {
    pending: 'Received',
    in_review: 'In review',
    resolved: 'Resolved',
  },
};
