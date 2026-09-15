/**
 * The page's toast, and the region that says it out loud.
 *
 * Two nodes for one sentence, and the split is the point: a live region has to
 * be in the document *before* its text lands, or a screen reader has nothing
 * to compare against and announces nothing. So the region is always mounted
 * and usually empty, and the visual node — which comes and goes — is hidden
 * from the reader to stop the sentence being read twice.
 *
 * Both callers draw through this: the dashboard's write result and the report
 * panel's share notice. They keep their own timers — 4s there, and 9s here for
 * a failure a parent has to read rather than glance at — because how long a
 * sentence stays is a decision about the sentence, not about the box.
 *
 * `Dashboard.jsx` shares `Toggle` and `timeAgo` the same way. Don't re-inline
 * this one either: the pairing above is what an inlined copy gets wrong.
 */
export default function Toast({ toast }) {
  return (
    <>
      <div
        className="sr-only"
        role="status"
        aria-live={toast?.tone === 'critical' ? 'assertive' : 'polite'}
      >
        {toast?.text ?? ''}
      </div>
      {toast && (
        <div className={`toast tone-${toast.tone}`} aria-hidden="true">
          {toast.text}
        </div>
      )}
    </>
  );
}
