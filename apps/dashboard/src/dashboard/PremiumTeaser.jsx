import { formatMinutes } from './charts.jsx';

/**
 * The tail row under a free family's three apps, on the web.
 *
 * The decision is `@kidgate/core/domain/premiumTeaser`, shared with
 * `apps/mobile` so two parent consoles cannot describe the same family
 * differently. This draws it; the phone draws the same object its own way.
 *
 * **No button, deliberately.** Plans are bought on the phone — `PlanCard`
 * records why this surface cannot even tell a running trial from an ended one
 * — so a call to action here would be a link to nowhere. The sentence is the
 * whole of it, which is also what the phone shows a joined parent who cannot
 * subscribe either.
 *
 * **Every string comes from the app pack** through `useActivityTranslate`,
 * never a `dash.*` twin: the phone already says all of this in fourteen
 * languages, and a second copy is one sentence in two packs with only one of
 * them ever edited again (`.claude/rules/i18n.md`).
 */
export default function PremiumTeaser({ teaser, appT }) {
  if (!teaser) {
    return null;
  }

  const { proof } = teaser;
  const proofText = proof
    ? appT(proof.key, {
        ...(proof.params.count !== undefined ? { count: proof.params.count } : {}),
        // Formatted here rather than in the fold, which imports no platform and
        // so cannot know how this surface writes a duration.
        ...(proof.params.minutes !== undefined
          ? { minutes: formatMinutes(proof.params.minutes) }
          : {}),
      })
    : null;

  return (
    <div className="premium-teaser">
      <span aria-hidden="true" className="premium-teaser-mark">
        ★
      </span>
      <div>
        {proofText ? <strong>{proofText}</strong> : null}
        <p className="hint">{appT(teaser.bodyKey)}</p>
      </div>
    </div>
  );
}
